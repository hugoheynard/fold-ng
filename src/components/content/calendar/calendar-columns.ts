import {
  FOLD_NO_HIDDEN_DAYS,
  foldCountByDay,
  foldMakeDay,
  foldWeekendOr,
} from "./calendar-cell";
import {
  foldAddDays,
  foldStartOfWeek,
  type FoldCalendarDate,
  type FoldWeekday,
} from "./calendar-date";
import { foldEventsOnDay } from "./calendar-filters";
import type {
  FoldCalendarDayEvents,
  FoldCalendarEvent,
} from "./calendar.types";

/**
 * Render models for the column views (week, day).
 *
 * Nothing is packed here: chips stack in a column, so a multi-day event simply
 * appears under every day it covers, and no event is ever dropped — which is
 * why these cells always report `hiddenCount: 0`.
 */

/** How to build a column view. */
export interface FoldDayColumnsOptions {
  /** Any date inside the range to display. */
  readonly date: FoldCalendarDate;
  /** Day the week starts on — ignored when building a single day. @default 'mon' */
  readonly weekStartsOn?: FoldWeekday;
  /** Days shaded as the weekend. @default ['sat', 'sun'] */
  readonly weekendDays?: readonly FoldWeekday[] | undefined;
  /** The day to flag as today; omit to flag none. */
  readonly today?: FoldCalendarDate | undefined;
}

/** Columns in a week row. */
const DAYS_PER_WEEK = 7;

/** One day cell plus the events covering it. */
function dayWithEvents<T>(
  events: readonly FoldCalendarEvent<T>[],
  date: FoldCalendarDate,
  month: string,
  options: FoldDayColumnsOptions,
  counts: ReadonlyMap<FoldCalendarDate, number>,
): FoldCalendarDayEvents<T> {
  return {
    day: foldMakeDay(date, {
      month,
      today: options.today,
      weekendDays: foldWeekendOr(options.weekendDays),
      counts,
      hidden: FOLD_NO_HIDDEN_DAYS,
    }),
    events: foldEventsOnDay(events, date),
  };
}

/**
 * The seven days of `date`'s week, each with the events covering it — the
 * render model of the week view.
 */
export function foldBuildWeek<T>(
  events: readonly FoldCalendarEvent<T>[],
  options: FoldDayColumnsOptions,
): readonly FoldCalendarDayEvents<T>[] {
  const start = foldStartOfWeek(options.date, options.weekStartsOn ?? "mon");
  const month = options.date.slice(0, 7);
  const counts = foldCountByDay(
    events,
    start,
    foldAddDays(start, DAYS_PER_WEEK - 1),
  );
  return Array.from({ length: DAYS_PER_WEEK }, (_unused, offset) =>
    dayWithEvents(events, foldAddDays(start, offset), month, options, counts),
  );
}

/** A single day with its events — the render model of the day view. */
export function foldBuildDay<T>(
  events: readonly FoldCalendarEvent<T>[],
  options: FoldDayColumnsOptions,
): FoldCalendarDayEvents<T> {
  return dayWithEvents(
    events,
    options.date,
    options.date.slice(0, 7),
    options,
    foldCountByDay(events, options.date, options.date),
  );
}
