import {
  foldAddDays,
  foldAddMonths,
  foldEndOfMonth,
  foldStartOfMonth,
  foldStartOfWeek,
  foldToNativeDate,
  type FoldCalendarDate,
  type FoldWeekday,
} from "./date";
import { foldCalendarFormatter, foldFormatRange } from "./format";

/**
 * What "next" means, and what the period on display is called — the two
 * questions a calendar toolbar asks. Both depend on the view, so they live
 * here as pure functions rather than as a switch inside a component.
 */

/** The four readings the family ships. */
export type FoldCalendarBuiltInView = "month" | "week" | "day" | "list";

/**
 * Which reading is on screen.
 *
 * The four built-ins **autocomplete**, but the type is open: an app can put its
 * own reading (a resource grid, a timeline) in the same switch without the
 * library having to know about it. Paging and titling an unknown view falls
 * back to month semantics — see {@link foldShiftDate}.
 */
export type FoldCalendarView =
  FoldCalendarBuiltInView | (string & Record<never, never>);

/** A view the toolbar offers, when its name is the app's own. */
export interface FoldCalendarViewOption {
  /** What `view` is set to when this one is picked. */
  readonly value: string;
  /** What the switch shows. */
  readonly label: string;
}

/** An inclusive span of days. */
export interface FoldCalendarRange {
  readonly from: FoldCalendarDate;
  readonly to: FoldCalendarDate;
}

/**
 * `date` moved by `delta` periods **in the units the view reads in** — a month
 * at a time in the month view, a week in the week view, a day in the day view.
 * The list view follows the month, since that is the window it lists.
 *
 * An unrecognised view pages by month, the safest of the four to be wrong
 * about: it always lands on a real date the other views can also show.
 */
export function foldShiftDate(
  view: FoldCalendarView,
  date: FoldCalendarDate,
  delta: number,
  weekStartsOn: FoldWeekday = "mon",
): FoldCalendarDate {
  if (view === "day") {
    return foldAddDays(date, delta);
  }
  if (view === "week") {
    return foldAddDays(foldStartOfWeek(date, weekStartsOn), delta * 7);
  }
  return foldAddMonths(foldStartOfMonth(date), delta);
}

/**
 * The days `view` covers around `date` — what a caller passes to its data
 * source, and what the list view scopes itself to.
 *
 * The **month** view's range is wider than its month: the grid paints the days
 * either side of it, and they carry their events too. The **list** view's is
 * not, because a list has no padding days — an April row in a May list is an
 * event the reader did not ask for.
 */
export function foldRangeForView(
  view: FoldCalendarView,
  date: FoldCalendarDate,
  weekStartsOn: FoldWeekday = "mon",
): FoldCalendarRange {
  if (view === "day") {
    return { from: date, to: date };
  }
  if (view === "week") {
    const start = foldStartOfWeek(date, weekStartsOn);
    return { from: start, to: foldAddDays(start, 6) };
  }
  if (view === "list") {
    return { from: foldStartOfMonth(date), to: foldEndOfMonth(date) };
  }
  const first = foldStartOfWeek(foldStartOfMonth(date), weekStartsOn);
  const last = foldAddDays(
    foldStartOfWeek(foldEndOfMonth(date), weekStartsOn),
    6,
  );
  return { from: first, to: last };
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
    return foldCalendarFormatter(locale, "dateFullWeekday").format(
      foldToNativeDate(date),
    );
  }
  if (view === "week") {
    const start = foldStartOfWeek(date, weekStartsOn);
    return foldFormatRange(
      start,
      foldAddDays(start, 6),
      locale,
      "dayMonthYear",
    );
  }
  return foldCalendarFormatter(locale, "monthYear").format(
    foldToNativeDate(date),
  );
}
