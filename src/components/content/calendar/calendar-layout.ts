import {
  foldAddDays,
  foldDaysBetween,
  foldEndOfMonth,
  foldIsWeekEnd,
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
 * Geometry for the month grid — where every chip lands, and what did not fit.
 *
 * Pure and Angular-free on purpose: packing spans into lanes is the one genuinely
 * algorithmic part of a calendar, so it lives where it can be tested exhaustively
 * without rendering anything.
 */

/** How to build a month grid. */
export interface FoldMonthGridOptions {
  /** Any date inside the month to display. */
  readonly month: FoldCalendarDate;
  /** Day the weeks start on. @default 'mon' */
  readonly weekStartsOn?: FoldWeekday;
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

/** An event (or a collapsed group of them) reduced to the span layout cares about. */
interface LogicalSpan<T> {
  readonly key: string;
  readonly event: FoldCalendarEvent<T>;
  readonly start: FoldCalendarDate;
  readonly end: FoldCalendarDate;
  readonly groupSize: number;
}

/**
 * Collapses events sharing a `groupId` into one span covering the **union** of
 * their ranges — a group chip that stopped short of a member it stands for
 * would be a lie. The first event seen represents the group; insertion order is
 * preserved so the caller's ordering still decides ties.
 */
function collapseGroups<T>(
  events: readonly FoldCalendarEvent<T>[],
): readonly LogicalSpan<T>[] {
  const spans = new Map<string, LogicalSpan<T>>();
  for (const event of events) {
    const key =
      event.groupId === undefined
        ? `event:${event.id}`
        : `group:${event.groupId}`;
    const existing = spans.get(key);
    if (existing === undefined) {
      spans.set(key, {
        key,
        event,
        start: event.start,
        end: event.end,
        groupSize: 1,
      });
      continue;
    }
    spans.set(key, {
      key: existing.key,
      event: existing.event,
      start: existing.start <= event.start ? existing.start : event.start,
      end: existing.end >= event.end ? existing.end : event.end,
      groupSize: existing.groupSize + 1,
    });
  }
  return [...spans.values()];
}

/**
 * Spans touching `[weekStart, weekEnd]`, ordered the way a reader scans a row:
 * earliest start first, and on a tie the longest span first so the bars that
 * cross the most days settle into the top lanes.
 */
function candidatesForWeek<T>(
  spans: readonly LogicalSpan<T>[],
  weekStart: FoldCalendarDate,
  weekEnd: FoldCalendarDate,
): readonly LogicalSpan<T>[] {
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

/** One span clipped to a week row, or `null` when the lanes are full. */
function placeSpan<T>(
  span: LogicalSpan<T>,
  weekStart: FoldCalendarDate,
  weekEnd: FoldCalendarDate,
  laneEnds: number[],
  maxLanes: number,
): FoldCalendarBand<T> | null {
  const clippedStart = span.start >= weekStart ? span.start : weekStart;
  const clippedEnd = span.end <= weekEnd ? span.end : weekEnd;
  const startColumn = foldDaysBetween(weekStart, clippedStart);
  const endColumn = foldDaysBetween(weekStart, clippedEnd);

  // First lane whose occupant ends before this span starts; else a fresh one.
  const reusable = laneEnds.findIndex((end) => end < startColumn);
  const lane = reusable === -1 ? laneEnds.length : reusable;
  if (lane >= maxLanes) {
    return null;
  }
  laneEnds[lane] = endColumn;

  const startsHere = span.start >= weekStart && span.event.openStart !== true;
  const endsHere = span.end <= weekEnd && span.event.openEnd !== true;
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

/** Packs a week's candidates into lanes, counting what overflowed. */
function packWeek<T>(
  spans: readonly LogicalSpan<T>[],
  weekStart: FoldCalendarDate,
  maxLanes: number,
): { bands: readonly FoldCalendarBand<T>[]; hiddenCount: number } {
  const weekEnd = foldAddDays(weekStart, DAYS_PER_WEEK - 1);
  const laneEnds: number[] = [];
  const bands: FoldCalendarBand<T>[] = [];
  let hiddenCount = 0;

  for (const span of candidatesForWeek(spans, weekStart, weekEnd)) {
    const band = placeSpan(span, weekStart, weekEnd, laneEnds, maxLanes);
    if (band === null) {
      hiddenCount += 1;
      continue;
    }
    bands.push(band);
  }
  return { bands, hiddenCount };
}

/** The seven cells of one week row. */
function buildDays(
  weekStart: FoldCalendarDate,
  month: string,
  today: FoldCalendarDate | undefined,
  weekStartsOn: FoldWeekday,
): readonly FoldCalendarDay[] {
  return Array.from({ length: DAYS_PER_WEEK }, (_unused, offset) => {
    const date = foldAddDays(weekStart, offset);
    return {
      date,
      dayOfMonth: Number(date.slice(8, 10)),
      inMonth: date.slice(0, 7) === month,
      isToday: date === today,
      isWeekEnd: foldIsWeekEnd(date, weekStartsOn),
    };
  });
}

/**
 * Lays a month out as week rows with their events already packed into lanes.
 *
 * The grid runs from the week containing the 1st to the week containing the
 * last day, so it always starts and ends on whole weeks; `fixedWeeks` pads it
 * to six rows. Events outside that window are dropped, and an event crossing a
 * week boundary yields one band per week it touches.
 */
export function foldBuildMonthGrid<T>(
  events: readonly FoldCalendarEvent<T>[],
  options: FoldMonthGridOptions,
): readonly FoldCalendarWeek<T>[] {
  const weekStartsOn = options.weekStartsOn ?? "mon";
  const maxLanes = Math.max(0, options.maxLanes ?? 3);
  const month = options.month.slice(0, 7);

  const firstRow = foldStartOfWeek(
    foldStartOfMonth(options.month),
    weekStartsOn,
  );
  const lastRow = foldStartOfWeek(foldEndOfMonth(options.month), weekStartsOn);
  const naturalRows = foldDaysBetween(firstRow, lastRow) / DAYS_PER_WEEK + 1;
  const rowCount =
    options.fixedWeeks === true
      ? Math.max(FIXED_WEEK_COUNT, naturalRows)
      : naturalRows;

  const spans = collapseGroups(events);
  return Array.from({ length: rowCount }, (_unused, row) => {
    const weekStart = foldAddDays(firstRow, row * DAYS_PER_WEEK);
    const { bands, hiddenCount } = packWeek(spans, weekStart, maxLanes);
    return {
      start: weekStart,
      days: buildDays(weekStart, month, options.today, weekStartsOn),
      bands,
      hiddenCount,
    };
  });
}

/**
 * Events covering `date`, in the caller's order — the selection the week, day
 * and list views render, where chips stack in a column and need no packing.
 */
export function foldEventsOnDay<T>(
  events: readonly FoldCalendarEvent<T>[],
  date: FoldCalendarDate,
): readonly FoldCalendarEvent<T>[] {
  return events.filter((event) => event.start <= date && event.end >= date);
}

/** Events overlapping `[from, to]` at all, in the caller's order. */
export function foldEventsInRange<T>(
  events: readonly FoldCalendarEvent<T>[],
  from: FoldCalendarDate,
  to: FoldCalendarDate,
): readonly FoldCalendarEvent<T>[] {
  return events.filter((event) => event.end >= from && event.start <= to);
}
