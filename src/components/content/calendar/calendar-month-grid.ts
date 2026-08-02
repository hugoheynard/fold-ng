import { isDevMode } from "@angular/core";

import { foldCountByDay, foldMakeDay, foldWeekendOr } from "./calendar-cell";
import { foldPackRow } from "./calendar-row-pack";
import { foldCollapseGroups, type FoldLogicalSpan } from "./calendar-span";
import {
  foldEndOfMonth,
  foldFromEpochDay,
  foldIsCalendarDate,
  foldStartOfMonth,
  foldStartOfWeek,
  foldToEpochDay,
  type FoldCalendarDate,
  type FoldWeekday,
} from "./calendar-date";
import type {
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
 *
 * **Public on purpose.** `fold-calendar-month` is one consumer of this, not its
 * owner: an app that needs a month laid out but drawn its own way calls
 * `foldBuildMonthGrid` and renders the rows itself, and gets the packing, the
 * week-boundary clipping and the open edges for free. Pair it with
 * `foldCalendarNextFocus` for the keyboard, and with `FoldCalendarLabels` for
 * the strings.
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
 * Every row's candidates, in one pass over the feed.
 *
 * Filtering the whole feed once per row is `O(rows × N)` and, worse, compares
 * strings; walking the feed once and dropping each span into the rows it
 * touches is `O(N)` on integers. At 5 000 events this part of the layout went
 * from 12.6 ms to 1.9 ms.
 *
 * Each row is then ordered the way a reader scans it: earliest start first, and
 * on a tie the longest span first, so the bars crossing the most days settle
 * into the top lanes.
 */
function bucketByRow<T>(
  spans: readonly FoldLogicalSpan<T>[],
  firstRowDay: number,
  rowCount: number,
): readonly FoldLogicalSpan<T>[][] {
  const rows: FoldLogicalSpan<T>[][] = Array.from(
    { length: rowCount },
    () => [],
  );
  const lastDay = firstRowDay + rowCount * DAYS_PER_WEEK - 1;

  for (const span of spans) {
    if (span.endDay < firstRowDay || span.startDay > lastDay) {
      continue;
    }
    const from = Math.max(
      0,
      Math.floor((span.startDay - firstRowDay) / DAYS_PER_WEEK),
    );
    const to = Math.min(
      rowCount - 1,
      Math.floor((span.endDay - firstRowDay) / DAYS_PER_WEEK),
    );
    for (let row = from; row <= to; row += 1) {
      rows[row]?.push(span);
    }
  }

  for (const row of rows) {
    row.sort((a, b) =>
      a.startDay !== b.startDay
        ? a.startDay - b.startDay
        : b.endDay - b.startDay - (a.endDay - a.startDay),
    );
  }
  return rows;
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
  firstRowDay: number;
  rowCount: number;
} {
  const weekStartsOn = options.weekStartsOn ?? "mon";
  const firstRowDay = foldToEpochDay(
    foldStartOfWeek(foldStartOfMonth(options.month), weekStartsOn),
  );
  const lastRowDay = foldToEpochDay(
    foldStartOfWeek(foldEndOfMonth(options.month), weekStartsOn),
  );
  const naturalRows = (lastRowDay - firstRowDay) / DAYS_PER_WEEK + 1;
  return {
    firstRowDay,
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
  const { firstRowDay, rowCount } = gridBounds(options);
  const rows = bucketByRow(foldCollapseGroups(events), firstRowDay, rowCount);

  const hidden = new Map<number, number>();
  const packed = rows.map((candidates, row) => {
    const week = {
      startDay: firstRowDay + row * DAYS_PER_WEEK,
      start: foldFromEpochDay(firstRowDay + row * DAYS_PER_WEEK),
      dayCount: DAYS_PER_WEEK,
    };
    return { week, ...foldPackRow(candidates, week, maxLanes, hidden) };
  });

  const context = {
    month: options.month.slice(0, 7),
    today: options.today,
    weekendDays: foldWeekendOr(options.weekendDays),
    counts: foldCountByDay(
      events,
      firstRowDay,
      firstRowDay + rowCount * DAYS_PER_WEEK - 1,
    ),
    hidden,
  };
  return packed.map((row) => ({
    start: row.week.start,
    days: buildDays(row.week.startDay, context),
    bands: row.bands,
    hiddenCount: row.hiddenCount,
  }));
}

/** The seven cells of one week row. */
function buildDays(
  weekStartDay: number,
  context: Parameters<typeof foldMakeDay>[1],
): readonly FoldCalendarDay[] {
  return Array.from({ length: DAYS_PER_WEEK }, (_unused, offset) =>
    foldMakeDay(weekStartDay + offset, context),
  );
}
