import type { FoldCalendarDate } from "./date";
import type { FoldLogicalSpan } from "./span";
import type { FoldCalendarBand } from "./types";

/**
 * Packing spans into lanes across a row of days — the month grid's week row,
 * and the time grid's all-day strip, which are the same problem: spans that may
 * cross the row, a lane budget, and an honest account of what did not fit.
 *
 * Shared rather than copied, because "a hidden span is charged to every day it
 * would have covered" is a rule that has to mean the same thing in both.
 */

/** The columns a span occupies once clipped to its week row. */
function columnsOf<T>(
  span: FoldLogicalSpan<T>,
  weekStartDay: number,
  dayCount: number,
): { startColumn: number; endColumn: number } {
  return {
    startColumn: Math.max(0, span.startDay - weekStartDay),
    endColumn: Math.min(dayCount - 1, span.endDay - weekStartDay),
  };
}

/** One span placed in a lane, or `null` when the budget is spent. */
function placeSpan<T>(
  span: FoldLogicalSpan<T>,
  week: { start: FoldCalendarDate; startDay: number; dayCount: number },
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

  const weekEndDay = week.startDay + week.dayCount - 1;
  const startsHere = span.startDay >= week.startDay && !span.openStart;
  const endsHere = span.endDay <= weekEndDay && !span.openEnd;
  return {
    key: `${span.key}@${week.start}`,
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
 * Packs a row's candidates into lanes, and records what overflowed **per day**
 * — a row-wide total would say a week is crowded without saying which day to
 * look at, so each date carries its own count.
 */
export function foldPackRow<T>(
  candidates: readonly FoldLogicalSpan<T>[],
  week: { start: FoldCalendarDate; startDay: number; dayCount: number },
  maxLanes: number,
  hidden: Map<number, number>,
): { bands: readonly FoldCalendarBand<T>[]; hiddenCount: number } {
  const laneEnds: number[] = [];
  const bands: FoldCalendarBand<T>[] = [];
  let hiddenCount = 0;

  for (const span of candidates) {
    const columns = columnsOf(span, week.startDay, week.dayCount);
    const band = placeSpan(span, week, columns, laneEnds, maxLanes);
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
      const day = week.startDay + column;
      hidden.set(day, (hidden.get(day) ?? 0) + 1);
    }
  }
  return { bands, hiddenCount };
}
