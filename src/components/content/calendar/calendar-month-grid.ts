import { isDevMode } from "@angular/core";

import { foldCountByDay, foldMakeDay, foldWeekendOr } from "./calendar-cell";
import { foldCollapseGroups, type FoldLogicalSpan } from "./calendar-span";
import {
  foldAddDays,
  foldDaysBetween,
  foldEndOfMonth,
  foldIsCalendarDate,
  foldStartOfMonth,
  foldStartOfWeek,
  type FoldCalendarDate,
  type FoldWeekday,
} from "./calendar-date";
import type {
  FoldCalendarBand,
  FoldCalendarDay,
  FoldCalendarEvent,
  FoldCalendarWeek,
} from "./calendar.types";

/**
 * Month geometry — where every chip lands, and what did not fit.
 *
 * Packing spans into lanes is the one genuinely algorithmic part of a calendar,
 * so it lives on its own, framework-free apart from a dev-mode warning, and is
 * tested exhaustively without rendering anything.
 */

/** How to build a month grid. */
export interface FoldMonthGridOptions {
  /** Any date inside the month to display. */
  readonly month: FoldCalendarDate;
  /** Day the weeks start on. @default 'mon' */
  readonly weekStartsOn?: FoldWeekday;
  /** Days shaded as the weekend. @default ['sat', 'sun'] */
  readonly weekendDays?: readonly FoldWeekday[] | undefined;
  /** The day to flag as today; omit to flag none (an SSR-stable default). */
  readonly today?: FoldCalendarDate | undefined;
  /** Lanes a week row can stack before events spill into the overflow count. @default 3 */
  readonly maxLanes?: number;
  /**
   * Always emit six week rows, so the grid keeps one height across months
   * instead of reflowing between 4, 5 and 6 rows. @default false
   */
  readonly fixedWeeks?: boolean;
}

/** Columns in a week row. */
const DAYS_PER_WEEK = 7;

/** Rows a fixed-height month grid always emits. */
const FIXED_WEEK_COUNT = 6;

/** Lanes a week row stacks when the caller does not say. */
const DEFAULT_MAX_LANES = 3;

/**
 * Spans touching `[weekStart, weekEnd]`, ordered the way a reader scans a row:
 * earliest start first, and on a tie the longest span first so the bars that
 * cross the most days settle into the top lanes.
 */
function candidatesForWeek<T>(
  spans: readonly FoldLogicalSpan<T>[],
  weekStart: FoldCalendarDate,
  weekEnd: FoldCalendarDate,
): readonly FoldLogicalSpan<T>[] {
  const touching = spans.filter(
    (span) => span.end >= weekStart && span.start <= weekEnd,
  );
  return [...touching].sort((a, b) => {
    if (a.start !== b.start) {
      return a.start < b.start ? -1 : 1;
    }
    return foldDaysBetween(b.start, b.end) - foldDaysBetween(a.start, a.end);
  });
}

/** The columns a span occupies once clipped to its week row. */
function columnsOf<T>(
  span: FoldLogicalSpan<T>,
  weekStart: FoldCalendarDate,
  weekEnd: FoldCalendarDate,
): { startColumn: number; endColumn: number } {
  const clippedStart = span.start >= weekStart ? span.start : weekStart;
  const clippedEnd = span.end <= weekEnd ? span.end : weekEnd;
  return {
    startColumn: foldDaysBetween(weekStart, clippedStart),
    endColumn: foldDaysBetween(weekStart, clippedEnd),
  };
}

/** One span placed in a lane, or `null` when the budget is spent. */
function placeSpan<T>(
  span: FoldLogicalSpan<T>,
  weekStart: FoldCalendarDate,
  weekEnd: FoldCalendarDate,
  columns: { startColumn: number; endColumn: number },
  laneEnds: number[],
  maxLanes: number,
): FoldCalendarBand<T> | null {
  const { startColumn, endColumn } = columns;

  // First lane whose occupant ends before this span starts; else a fresh one.
  const reusable = laneEnds.findIndex((end) => end < startColumn);
  const lane = reusable === -1 ? laneEnds.length : reusable;
  if (lane >= maxLanes) {
    return null;
  }
  laneEnds[lane] = endColumn;

  const startsHere = span.start >= weekStart && !span.openStart;
  const endsHere = span.end <= weekEnd && !span.openEnd;
  return {
    key: `${span.key}@${weekStart}`,
    event: span.event,
    startColumn,
    endColumn,
    lane,
    continuesBefore: !startsHere,
    continuesAfter: !endsHere,
    groupSize: span.groupSize,
    // A half-day edge only means something on the segment holding the real edge.
    ...(startsHere && span.event.startHalfDay !== undefined
      ? { startHalfDay: span.event.startHalfDay }
      : {}),
    ...(endsHere && span.event.endHalfDay !== undefined
      ? { endHalfDay: span.event.endHalfDay }
      : {}),
  };
}

/**
 * Packs a week's candidates into lanes, and records what overflowed **per
 * day** — a row-wide total would say a week is crowded without saying which
 * day to look at, so each date carries its own count.
 */
function packWeek<T>(
  spans: readonly FoldLogicalSpan<T>[],
  weekStart: FoldCalendarDate,
  maxLanes: number,
  hidden: Map<FoldCalendarDate, number>,
): { bands: readonly FoldCalendarBand<T>[]; hiddenCount: number } {
  const weekEnd = foldAddDays(weekStart, DAYS_PER_WEEK - 1);
  const laneEnds: number[] = [];
  const bands: FoldCalendarBand<T>[] = [];
  let hiddenCount = 0;

  for (const span of candidatesForWeek(spans, weekStart, weekEnd)) {
    const columns = columnsOf(span, weekStart, weekEnd);
    const band = placeSpan(
      span,
      weekStart,
      weekEnd,
      columns,
      laneEnds,
      maxLanes,
    );
    if (band !== null) {
      bands.push(band);
      continue;
    }
    hiddenCount += 1;
    // A hidden span is missing from every day it would have covered.
    for (
      let column = columns.startColumn;
      column <= columns.endColumn;
      column += 1
    ) {
      const date = foldAddDays(weekStart, column);
      hidden.set(date, (hidden.get(date) ?? 0) + 1);
    }
  }
  return { bands, hiddenCount };
}

/**
 * Lanes a row may stack, as one number the whole grid agrees on.
 *
 * The clamp lives here alone: a component that also clamped would be a second
 * copy of the invariant, and the copy that forgot `NaN` would disable the lane
 * budget entirely (`lane >= NaN` is never true) while the grid template turned
 * `repeat(NaN, …)` into a dropped rule.
 */
export function foldClampLanes(value: number | undefined): number {
  if (value === undefined || !Number.isFinite(value)) {
    return DEFAULT_MAX_LANES;
  }
  return Math.max(0, Math.trunc(value));
}

/** The grid's own window — whole weeks, padded out when `fixedWeeks` asks. */
function gridBounds(options: FoldMonthGridOptions): {
  firstRow: FoldCalendarDate;
  rowCount: number;
} {
  const weekStartsOn = options.weekStartsOn ?? "mon";
  const firstRow = foldStartOfWeek(
    foldStartOfMonth(options.month),
    weekStartsOn,
  );
  const lastRow = foldStartOfWeek(foldEndOfMonth(options.month), weekStartsOn);
  const naturalRows = foldDaysBetween(firstRow, lastRow) / DAYS_PER_WEEK + 1;
  return {
    firstRow,
    rowCount:
      options.fixedWeeks === true
        ? Math.max(FIXED_WEEK_COUNT, naturalRows)
        : naturalRows,
  };
}

/**
 * Lays a month out as week rows with their events already packed into lanes.
 *
 * The grid runs from the week containing the 1st to the week containing the
 * last day, so it always starts and ends on whole weeks; `fixedWeeks` pads it
 * to six rows. Events outside that window are dropped, and an event crossing a
 * week boundary yields one band per week it touches.
 *
 * An unparseable `month` yields **no rows** rather than a grid of `Invalid
 * Date` cells, with a dev-mode warning naming the value.
 */
export function foldBuildMonthGrid<T>(
  events: readonly FoldCalendarEvent<T>[],
  options: FoldMonthGridOptions,
): readonly FoldCalendarWeek<T>[] {
  if (!foldIsCalendarDate(options.month)) {
    if (isDevMode()) {
      console.warn(
        `[fold-calendar] "${options.month}" is not a YYYY-MM-DD date; the grid is empty.`,
      );
    }
    return [];
  }

  const maxLanes = foldClampLanes(options.maxLanes);
  const month = options.month.slice(0, 7);
  const { firstRow, rowCount } = gridBounds(options);
  const lastDay = foldAddDays(firstRow, rowCount * DAYS_PER_WEEK - 1);

  const spans = foldCollapseGroups(events);
  const hidden = new Map<FoldCalendarDate, number>();
  const packed = Array.from({ length: rowCount }, (_unused, row) => {
    const weekStart = foldAddDays(firstRow, row * DAYS_PER_WEEK);
    return { weekStart, ...packWeek(spans, weekStart, maxLanes, hidden) };
  });

  const context = {
    month,
    today: options.today,
    weekendDays: foldWeekendOr(options.weekendDays),
    counts: foldCountByDay(events, firstRow, lastDay),
    hidden,
  };
  return packed.map((row) => ({
    start: row.weekStart,
    days: buildDays(row.weekStart, context),
    bands: row.bands,
    hiddenCount: row.hiddenCount,
  }));
}

/** The seven cells of one week row. */
function buildDays(
  weekStart: FoldCalendarDate,
  context: Parameters<typeof foldMakeDay>[1],
): readonly FoldCalendarDay[] {
  return Array.from({ length: DAYS_PER_WEEK }, (_unused, offset) =>
    foldMakeDay(foldAddDays(weekStart, offset), context),
  );
}
