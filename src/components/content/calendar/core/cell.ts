import {
  foldFromEpochDay,
  foldIsWeekend,
  foldToEpochDay,
  FOLD_DEFAULT_WEEKEND_DAYS,
  type FoldCalendarDate,
  type FoldWeekday,
} from "./date";
import type { FoldCalendarDay, FoldCalendarEvent } from "./types";

/**
 * The one place a {@link FoldCalendarDay} is built, shared by the month grid and
 * the column views so a cell means exactly the same thing in every view.
 *
 * Counts are keyed on the **epoch day**, not the date string: a grid builds
 * 35–42 of these per render and every string key would be parsed again to be
 * compared. The dates on the way out are still strings — that is the model.
 *
 * Internal — not part of the public surface.
 */

/** What a day cell needs to know that the date alone cannot say. */
export interface FoldDayContext {
  /** `YYYY-MM` of the month on display; decides `inMonth`. */
  readonly month: string;
  /** The day to flag as today, or `undefined` to flag none. */
  readonly today: FoldCalendarDate | undefined;
  /** Days shaded as the weekend. */
  readonly weekendDays: readonly FoldWeekday[];
  /** Events covering each day, counted once for the whole grid. */
  readonly counts: ReadonlyMap<number, number>;
  /** Events no lane could take, per day. Empty for views that never drop any. */
  readonly hidden: ReadonlyMap<number, number>;
}

/** A day cell, with every flag a view needs to style it already resolved. */
export function foldMakeDay(
  epochDay: number,
  context: FoldDayContext,
): FoldCalendarDay {
  const date = foldFromEpochDay(epochDay);
  return {
    date,
    dayOfMonth: Number(date.slice(8, 10)),
    inMonth: date.slice(0, 7) === context.month,
    isToday: date === context.today,
    isWeekend: foldIsWeekend(date, context.weekendDays),
    eventCount: context.counts.get(epochDay) ?? 0,
    hiddenCount: context.hidden.get(epochDay) ?? 0,
  };
}

/**
 * How many events cover each day of `[from, to]`, in a single pass.
 *
 * A view that asked each cell "which events are on you?" would re-scan the
 * whole feed once per cell — 35 filters per change-detection cycle on a month
 * grid. Walking the events instead costs one pass, and the count a cell needs
 * is then already there.
 */
export function foldCountByDay<T>(
  events: readonly FoldCalendarEvent<T>[],
  fromDay: number,
  toDay: number,
): ReadonlyMap<number, number> {
  const counts = new Map<number, number>();
  for (const event of events) {
    const a = foldToEpochDay(event.start);
    const b = foldToEpochDay(event.end);
    // Reversed ranges are normalised by the layout, so they are counted the
    // same way here — otherwise a band would render on days reporting zero.
    const start = Math.max(fromDay, Math.min(a, b));
    const end = Math.min(toDay, Math.max(a, b));
    for (let day = start; day <= end; day += 1) {
      counts.set(day, (counts.get(day) ?? 0) + 1);
    }
  }
  return counts;
}

/** No days dropped — the column views' `hidden` map. */
export const FOLD_NO_HIDDEN_DAYS: ReadonlyMap<number, number> = new Map();

/** The weekend a caller left unset. */
export function foldWeekendOr(
  weekendDays: readonly FoldWeekday[] | undefined,
): readonly FoldWeekday[] {
  return weekendDays ?? FOLD_DEFAULT_WEEKEND_DAYS;
}
