import type { FoldCalendarDate } from "./calendar-date";
import type { FoldCalendarEvent } from "./calendar.types";

/**
 * The "what's next" reading: everything still ahead, grouped by the day it
 * lands on. Pure, so the rule for *what counts as ahead* — and what counts as
 * needing attention — can be tested without rendering a rail.
 */

/** Which slice of what is ahead the agenda shows. */
export type FoldCalendarAgendaMode = "todo" | "all";

/** One day of the agenda, with what falls on it. */
export interface FoldCalendarAgendaGroup<T = unknown> {
  readonly date: FoldCalendarDate;
  /** Events opening on {@link date}, earliest first. */
  readonly events: readonly FoldCalendarEvent<T>[];
}

/** How to build the agenda. */
export interface FoldAgendaOptions {
  /** The day "ahead" starts from — anything ending before it is past. */
  readonly from: FoldCalendarDate;
  /** `todo` keeps only what asks for attention. @default 'all' */
  readonly mode?: FoldCalendarAgendaMode;
  /** Days to return at most, so a long horizon cannot flood a rail. @default 8 */
  readonly limit?: number;
}

/**
 * Whether an event is asking for something.
 *
 * `warning` and `alert` are the two tones that mean "attention" in this
 * system, so they are what `todo` keeps — the agenda reads the same semantic
 * scale the chips paint with, rather than inventing a second one. An app whose
 * definition differs filters before passing `events` in.
 */
function isActionable<T>(event: FoldCalendarEvent<T>): boolean {
  return event.tone === "warning" || event.tone === "alert";
}

/**
 * Events still ahead of `from`, grouped by day and capped to `limit` days.
 *
 * An event already running is grouped under `from` rather than its real start:
 * a three-week absence that began last Monday belongs at the top of "what's
 * next", not buried in a past day the rail never shows.
 */
export function foldBuildAgenda<T>(
  events: readonly FoldCalendarEvent<T>[],
  options: FoldAgendaOptions,
): readonly FoldCalendarAgendaGroup<T>[] {
  const { from } = options;
  const mode = options.mode ?? "all";
  const limit = Math.max(0, options.limit ?? 8);

  const ahead = events
    .filter((event) => event.end >= from)
    .filter((event) => mode !== "todo" || isActionable(event));
  const ordered = [...ahead].sort((a, b) =>
    a.start < b.start ? -1 : a.start > b.start ? 1 : 0,
  );

  const byDay = new Map<FoldCalendarDate, FoldCalendarEvent<T>[]>();
  for (const event of ordered) {
    const key = event.start < from ? from : event.start;
    const bucket = byDay.get(key);
    if (bucket === undefined) {
      byDay.set(key, [event]);
      continue;
    }
    bucket.push(event);
  }

  return [...byDay.entries()]
    .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))
    .slice(0, limit)
    .map(([date, group]) => ({ date, events: group }));
}

/** How many events are asking for attention from `from` on — the rail's badge. */
export function foldCountActionable<T>(
  events: readonly FoldCalendarEvent<T>[],
  from: FoldCalendarDate,
): number {
  return events.filter((event) => event.end >= from && isActionable(event))
    .length;
}
