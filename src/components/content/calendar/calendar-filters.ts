import type { FoldCalendarDate } from "./calendar-date";
import type { FoldCalendarEvent } from "./calendar.types";

/**
 * The three selections every view and every consumer makes over a feed.
 *
 * Deliberately the smallest, least coupled part of the family: an app that
 * wants the calendar's semantics — "covers this day", "overlaps this window",
 * "belongs to a live feed" — without any of its rendering imports only this.
 */

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

/**
 * Events from the feeds in `active`, in the caller's order — the other half of
 * `fold-calendar-source-filter`, which owns only the selection.
 *
 * `null` means nothing has been switched off yet and everything passes; it is
 * the filter chips' own initial value, so the one function built to consume
 * that model accepts it rather than making every caller write the ternary.
 * An empty `Set` is the opposite — every feed switched off — which is why the
 * two are not collapsed.
 *
 * An event with no `sourceKey` belongs to no feed, so no chip can hide it and
 * it always passes.
 */
export function foldFilterBySource<T>(
  events: readonly FoldCalendarEvent<T>[],
  active: ReadonlySet<string> | null,
): readonly FoldCalendarEvent<T>[] {
  if (active === null) {
    return events;
  }
  return events.filter(
    (event) => event.sourceKey === undefined || active.has(event.sourceKey),
  );
}
