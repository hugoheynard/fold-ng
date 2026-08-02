import {
  foldAddDays,
  foldIsWeekend,
  FOLD_DEFAULT_WEEKEND_DAYS,
  type FoldCalendarDate,
  type FoldWeekday,
} from "./calendar-date";
import type { FoldCalendarDay, FoldCalendarEvent } from "./calendar.types";

/**
 * The one place a {@link FoldCalendarDay} is built, shared by the month grid and
 * the column views so a cell means exactly the same thing in every view.
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
  readonly counts: ReadonlyMap<FoldCalendarDate, number>;
  /** Events no lane could take, per day. Empty for views that never drop any. */
  readonly hidden: ReadonlyMap<FoldCalendarDate, number>;
}

/** A day cell, with every flag a view needs to style it already resolved. */
export function foldMakeDay(
  date: FoldCalendarDate,
  context: FoldDayContext,
): FoldCalendarDay {
  return {
    date,
    dayOfMonth: Number(date.slice(8, 10)),
    inMonth: date.slice(0, 7) === context.month,
    isToday: date === context.today,
    isWeekend: foldIsWeekend(date, context.weekendDays),
    eventCount: context.counts.get(date) ?? 0,
    hiddenCount: context.hidden.get(date) ?? 0,
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
  from: FoldCalendarDate,
  to: FoldCalendarDate,
): ReadonlyMap<FoldCalendarDate, number> {
  const counts = new Map<FoldCalendarDate, number>();
  for (const event of events) {
    const start = event.start >= from ? event.start : from;
    const end = event.end <= to ? event.end : to;
    for (let day = start; day <= end; day = foldAddDays(day, 1)) {
      counts.set(day, (counts.get(day) ?? 0) + 1);
    }
  }
  return counts;
}

/** No days dropped — the column views' `hidden` map. */
export const FOLD_NO_HIDDEN_DAYS: ReadonlyMap<FoldCalendarDate, number> =
  new Map();

/** The weekend a caller left unset. */
export function foldWeekendOr(
  weekendDays: readonly FoldWeekday[] | undefined,
): readonly FoldWeekday[] {
  return weekendDays ?? FOLD_DEFAULT_WEEKEND_DAYS;
}
