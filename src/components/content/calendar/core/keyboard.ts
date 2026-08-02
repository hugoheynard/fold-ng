import {
  foldAddDays,
  foldAddMonths,
  foldIsCalendarDate,
  foldStartOfWeek,
  type FoldCalendarDate,
  type FoldWeekday,
} from "./date";

/**
 * Where a key press moves the focused day. Split out of the component because
 * "what does ArrowDown mean on a calendar" is a pure question about dates, and
 * answering it here means it can be tested without a grid, a DOM or a TestBed.
 *
 * {@link foldCalendarNextFocus} is public: it is the other half of the geometry
 * tier, and a hand-rolled date grid owes its users the same arrow keys as the
 * built-in one. {@link foldFocusDayCell} stays internal — it reads a
 * `data-fold-day` attribute this package writes, and exporting it would freeze
 * that attribute into the public contract.
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
 * Focuses the cell for `date` inside `grid`, reporting whether it was there to
 * focus.
 *
 * A `false` is the signal that the target lies outside the rendered grid — the
 * caller pages the calendar and defers the focus until the new cells exist.
 * Taking the root as an argument keeps this free of `document` (so it is a
 * no-op under SSR) and means there is exactly **one** answer to "which element
 * is the grid" — looking it up from the event target as well gave two.
 */
export function foldFocusDayCell(
  grid: Element | null,
  date: FoldCalendarDate,
): boolean {
  // A date can reach this from an input, and it is interpolated into a
  // selector: anything that is not a plain date is a `SyntaxError` waiting to
  // happen, so it is refused rather than escaped.
  if (grid === null || !foldIsCalendarDate(date)) {
    return false;
  }
  const cell = grid.querySelector(`[data-fold-day="${date}"]`);
  if (cell instanceof HTMLElement) {
    cell.focus();
    return true;
  }
  return false;
}
