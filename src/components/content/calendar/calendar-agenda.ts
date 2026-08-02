import type { FoldCalendarDate } from "./calendar-date";
import type { FoldCalendarEvent } from "./calendar.types";

/**
 * The "what's next" reading: everything still ahead, grouped by the day it
 * lands on. Pure, so the rule for *what counts as ahead* — and what counts as
 * needing attention — can be tested without rendering a rail.
 */

/** Which slice of what is ahead the agenda shows. */
export type FoldCalendarAgendaMode = "todo" | "all";

/** Whether an event is asking for something — the `todo` slice's test. */
export type FoldCalendarActionable<T = unknown> = (
  event: FoldCalendarEvent<T>,
) => boolean;

/** One day of the agenda, with what falls on it. */
export interface FoldCalendarAgendaGroup<T = unknown> {
  readonly date: FoldCalendarDate;
  /** Events opening on {@link date}, earliest first. */
  readonly events: readonly FoldCalendarEvent<T>[];
}

/** How to build the agenda. */
export interface FoldAgendaOptions<T = unknown> {
  /** The day "ahead" starts from — anything ending before it is past. */
  readonly from: FoldCalendarDate;
  /** `todo` keeps only what asks for attention. @default 'all' */
  readonly mode?: FoldCalendarAgendaMode;
  /** Days to return at most, so a long horizon cannot flood a rail. @default 8 */
  readonly limit?: number;
  /** What counts as asking for attention. @default foldIsActionable */
  readonly isActionable?: FoldCalendarActionable<T>;
}

/** What the agenda produced, and whether it had to stop short. */
export interface FoldCalendarAgenda<T = unknown> {
  /** The days shown, earliest first. */
  readonly groups: readonly FoldCalendarAgendaGroup<T>[];
  /**
   * Days that exist beyond `limit`. Non-zero means "there is more", which is a
   * different thing to say than "there is nothing" — and the two used to render
   * identically.
   */
  readonly truncated: number;
}

/** Days the agenda returns when the caller does not say. */
const DEFAULT_LIMIT = 8;

/**
 * Whether an event is asking for something.
 *
 * `warning` and `alert` are the two tones that mean "attention" in this
 * system, so they are what `todo` keeps — the agenda reads the same semantic
 * scale the chips paint with, rather than inventing a second one. Pass
 * `isActionable` to define it otherwise.
 */
export function foldIsActionable<T>(event: FoldCalendarEvent<T>): boolean {
  return event.tone === "warning" || event.tone === "alert";
}

/** At least one day, and never `NaN` — `slice(0, NaN)` returns nothing at all. */
function clampLimit(limit: number | undefined): number {
  if (limit === undefined || !Number.isFinite(limit)) {
    return DEFAULT_LIMIT;
  }
  return Math.max(1, Math.trunc(limit));
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
  options: FoldAgendaOptions<T>,
): FoldCalendarAgenda<T> {
  const { from } = options;
  const mode = options.mode ?? "all";
  const limit = clampLimit(options.limit);
  const actionable = options.isActionable ?? foldIsActionable;

  const ahead = events
    .filter((event) => event.end >= from)
    .filter((event) => mode !== "todo" || actionable(event));
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

  const days = [...byDay.entries()].sort(([a], [b]) =>
    a < b ? -1 : a > b ? 1 : 0,
  );
  return {
    groups: days
      .slice(0, limit)
      .map(([date, group]) => ({ date, events: group })),
    truncated: Math.max(0, days.length - limit),
  };
}

/**
 * How many events are asking for attention from `from` on — the rail's badge.
 *
 * Takes the same `isActionable` the agenda does, so a badge can never disagree
 * with the list under it.
 */
export function foldCountActionable<T>(
  events: readonly FoldCalendarEvent<T>[],
  from: FoldCalendarDate,
  isActionable: FoldCalendarActionable<T> = foldIsActionable,
): number {
  return events.filter((event) => event.end >= from && isActionable(event))
    .length;
}
