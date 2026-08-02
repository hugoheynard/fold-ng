import {
  foldAddDays,
  foldAddMonths,
  foldEndOfMonth,
  foldStartOfMonth,
  foldStartOfWeek,
  foldToNativeDate,
  type FoldCalendarDate,
  type FoldWeekday,
} from "./calendar-date";

/**
 * What "next" means, and what the period on display is called — the two
 * questions a calendar toolbar asks. Both depend on the view, so they live
 * here as pure functions rather than as a switch inside a component.
 */

/** Which reading of the data is on screen. */
export type FoldCalendarView = "month" | "week" | "day" | "list";

/** An inclusive span of days. */
export interface FoldCalendarRange {
  readonly from: FoldCalendarDate;
  readonly to: FoldCalendarDate;
}

/**
 * `date` moved by `delta` periods **in the units the view reads in** — a month
 * at a time in the month view, a week in the week view, a day in the day view.
 * The list view follows the month, since that is the window it lists.
 */
export function foldShiftDate(
  view: FoldCalendarView,
  date: FoldCalendarDate,
  delta: number,
  weekStartsOn: FoldWeekday = "mon",
): FoldCalendarDate {
  switch (view) {
    case "day":
      return foldAddDays(date, delta);
    case "week":
      return foldAddDays(foldStartOfWeek(date, weekStartsOn), delta * 7);
    case "month":
    case "list":
      return foldAddMonths(foldStartOfMonth(date), delta);
  }
}

/**
 * The days `view` covers around `date` — what a caller passes to its data
 * source, and what the list view scopes itself to.
 */
export function foldRangeForView(
  view: FoldCalendarView,
  date: FoldCalendarDate,
  weekStartsOn: FoldWeekday = "mon",
): FoldCalendarRange {
  switch (view) {
    case "day":
      return { from: date, to: date };
    case "week": {
      const start = foldStartOfWeek(date, weekStartsOn);
      return { from: start, to: foldAddDays(start, 6) };
    }
    case "month":
    case "list": {
      // The whole grid, not just the month: the month view paints the days
      // either side, and they must carry their events too.
      const first = foldStartOfWeek(foldStartOfMonth(date), weekStartsOn);
      const last = foldAddDays(
        foldStartOfWeek(foldEndOfMonth(date), weekStartsOn),
        6,
      );
      return { from: first, to: last };
    }
  }
}

/**
 * The heading for the period on display, localised through `Intl` — "May 2026",
 * "18–24 May 2026", "Monday 18 May 2026". A week spanning two months or two
 * years names both ends, which `Intl`'s range formatter handles per locale.
 */
export function foldViewTitle(
  view: FoldCalendarView,
  date: FoldCalendarDate,
  locale?: string,
  weekStartsOn: FoldWeekday = "mon",
): string {
  if (view === "day") {
    return new Intl.DateTimeFormat(locale, {
      dateStyle: "full",
      timeZone: "UTC",
    }).format(foldToNativeDate(date));
  }
  if (view === "week") {
    const start = foldStartOfWeek(date, weekStartsOn);
    return new Intl.DateTimeFormat(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }).formatRange(
      foldToNativeDate(start),
      foldToNativeDate(foldAddDays(start, 6)),
    );
  }
  return new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(foldToNativeDate(date));
}
