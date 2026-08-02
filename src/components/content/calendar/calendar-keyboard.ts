import {
  foldAddDays,
  foldAddMonths,
  foldStartOfWeek,
  type FoldCalendarDate,
  type FoldWeekday,
} from "./calendar-date";

/**
 * Where a key press moves the focused day. Split out of the component because
 * "what does ArrowDown mean on a calendar" is a pure question about dates, and
 * answering it here means it can be tested without a grid, a DOM or a TestBed.
 */

/**
 * The day `key` moves focus to from `from`, or `null` when the key is not a
 * grid-navigation key and the component should leave the event alone.
 *
 * The mapping is the ARIA grid pattern applied to a date axis: horizontal keys
 * step a day, vertical keys step a **week** (the column stays put, which is the
 * whole point of a 7-wide grid), `Home`/`End` snap to the week's bounds, and
 * `PageUp`/`PageDown` page by month.
 */
export function foldCalendarNextFocus(
  key: string,
  from: FoldCalendarDate,
  weekStartsOn: FoldWeekday = "mon",
): FoldCalendarDate | null {
  switch (key) {
    case "ArrowLeft":
      return foldAddDays(from, -1);
    case "ArrowRight":
      return foldAddDays(from, 1);
    case "ArrowUp":
      return foldAddDays(from, -7);
    case "ArrowDown":
      return foldAddDays(from, 7);
    case "Home":
      return foldStartOfWeek(from, weekStartsOn);
    case "End":
      return foldAddDays(foldStartOfWeek(from, weekStartsOn), 6);
    case "PageUp":
      return foldAddMonths(from, -1);
    case "PageDown":
      return foldAddMonths(from, 1);
    default:
      return null;
  }
}

/**
 * Focuses the cell for `date` inside the grid that owns `from`, reporting
 * whether it was there to focus.
 *
 * A `false` is the signal that the target lies outside the rendered grid — the
 * caller pages the month and defers the focus until the new cells exist.
 * Reaching for the DOM from the event's own target keeps this free of
 * `document`, so it degrades to a no-op under SSR.
 */
export function foldFocusDayCell(
  from: EventTarget | null,
  date: FoldCalendarDate,
): boolean {
  if (!(from instanceof Element)) {
    return false;
  }
  const grid = from.closest("[data-fold-calendar]");
  const cell = grid?.querySelector(`[data-fold-day="${date}"]`);
  if (cell instanceof HTMLElement) {
    cell.focus();
    return true;
  }
  return false;
}
