import type { FoldIconName } from "../../../foundations/icon/builtin-icons";
import type { FoldCalendarDate } from "./date";
import type { FoldCalendarTime } from "./time";

/**
 * Public data model for the calendar family. The calendar knows nothing of the
 * domain it plots — an app maps its own records onto {@link FoldCalendarEvent}
 * and gets them back, still typed, on every output.
 *
 * That ignorance is the design, not a stage it will grow out of. The family
 * **displays**; it never originates a record, because the validation and the
 * write path both belong to the consumer. Which is also why `tone` is an input
 * rather than something derived here: a band that turns amber and then red as
 * an account sits unactivated, and a band that is amber because a leave request
 * is pending, are the same component being told two different things.
 */

/**
 * Semantic weight of an event, mapped to the shared tone roles. `muted` reads
 * as struck-through and dimmed — the "it no longer counts" state (cancelled,
 * withdrawn, superseded) rather than a quieter `neutral`.
 */
export type FoldCalendarTone =
  "neutral" | "success" | "warning" | "alert" | "muted";

/** Which half of a day an event's edge falls on. */
export type FoldCalendarHalfDay = "morning" | "afternoon";

/**
 * An entry on the calendar, spanning one or more whole days.
 *
 * Generic over `T` so `data` carries the app's own record through layout and
 * back out of `eventClick` without a cast. Both bounds are **inclusive**: a
 * single-day event has `start === end`.
 */
export interface FoldCalendarEvent<T = unknown> {
  /** Stable identity — also the layout key, so it must be unique per render. */
  readonly id: string;
  /** First day, inclusive. */
  readonly start: FoldCalendarDate;
  /** Last day, inclusive. Equal to {@link start} for a single-day event. */
  readonly end: FoldCalendarDate;
  /** Primary text on the chip. */
  readonly label: string;
  /** Secondary line — status, duration, venue. Rendered verbatim. */
  readonly subline?: string;
  /** Semantic weight. @default 'neutral' */
  readonly tone?: FoldCalendarTone;
  /** Leading glyph, drawn with `fold-icon`. */
  readonly icon?: FoldIconName;
  /**
   * Wall-clock start, `HH:mm`. An event carrying **both** times is placed on
   * the time grid's clock; anything else — neither, or only one — is an all-day
   * span, which is what the month, week, day and list views plot. Half a time
   * is a data bug, and reading it as all-day loses the least.
   *
   * No zone, by the same decision as the date: 09:00 is the hour on the wall,
   * and the app converts once at its own boundary.
   */
  readonly startTime?: FoldCalendarTime;
  /** Wall-clock end, `HH:mm`. `24:00` is midnight at the end of {@link end}. */
  readonly endTime?: FoldCalendarTime;
  /** Which half of {@link start} the event opens on. */
  readonly startHalfDay?: FoldCalendarHalfDay;
  /** Which half of {@link end} the event closes on. */
  readonly endHalfDay?: FoldCalendarHalfDay;
  /**
   * Collapses events sharing this key into a single chip carrying a count —
   * for a bulk action that would otherwise flood the grid (a whole team off on
   * the same days).
   *
   * The chip covers the **union** of the members' ranges, and is open-ended if
   * **any** member is. Everything else it renders (tone, icon, label, subline,
   * `sourceKey`) comes from one real member: the most severe by tone
   * (`alert` → `warning` → `success` → `neutral` → `muted`), ties going to
   * document order. Picking one event rather than merging fields keeps the chip
   * something that actually exists in the feed, and stops a first cancelled
   * member from quietly greying out a group that contains an alert.
   */
  readonly groupId?: string;
  /** Label for the collapsed chip; falls back to the representative's `label`. */
  readonly groupLabel?: string;
  /**
   * The real range extends past {@link start} beyond what was loaded — the
   * caller clamped it to the queried window. Renders the same open edge as a
   * span continuing from an earlier week.
   */
  readonly openStart?: boolean;
  /** As {@link openStart}, for an end with no known bound (an open contract). */
  readonly openEnd?: boolean;
  /**
   * Which feed this came from — the key a {@link FoldCalendarSource} declares.
   * A calendar usually merges several (a programme, staff leave, contracts),
   * and this is what lets one be counted and switched off without the calendar
   * knowing what any of them mean.
   */
  readonly sourceKey?: string;
  /** The app's own record, handed back untouched on every output. */
  readonly data?: T;
}

/** One feed of events, as the source filter lists it. */
export interface FoldCalendarSource {
  /** Matches {@link FoldCalendarEvent.sourceKey}. */
  readonly key: string;
  /** Shown on the chip. */
  readonly label: string;
  /** Dot colour — the tone the feed reads as. @default 'neutral' */
  readonly tone?: FoldCalendarTone;
}

/**
 * One day cell of a grid — the calendar's answer to "what is this square",
 * with every flag a view needs to style it already resolved.
 */
export interface FoldCalendarDay {
  /** The day this cell stands for. */
  readonly date: FoldCalendarDate;
  /** Day of the month, `1`–`31`, for the cell's number. */
  readonly dayOfMonth: number;
  /** Inside the month being displayed — `false` for the leading/trailing pad. */
  readonly inMonth: boolean;
  /** Matches the calendar's "today". */
  readonly isToday: boolean;
  /** Falls on one of the configured weekend days. */
  readonly isWeekend: boolean;
  /** How many events cover this day — already counted, so a view never refilters. */
  readonly eventCount: number;
  /**
   * How many of them no lane could take, so this cell is showing fewer events
   * than it has. Always `0` in the column views, which never drop anything.
   */
  readonly hiddenCount: number;
}

/**
 * Extra class names for one day cell — the hook for anything the calendar
 * cannot know: a public holiday, a closure, a blackout, "fully staffed". Each
 * name is emitted as `data-fold-day-<name>` on the cell, so an app styles it
 * from its own sheet without reaching for an internal class.
 *
 * @example
 * ```ts
 * readonly holidays = (day: FoldCalendarDay) =>
 *   HOLIDAYS.has(day.date) ? ['holiday'] : [];
 * ```
 */
export type FoldCalendarDayModifiers = (
  day: FoldCalendarDay,
) => readonly string[];

/**
 * A laid-out slice of one event inside one week row: which columns it covers,
 * which lane it sits in, and whether its edges are real or a continuation.
 *
 * An event spanning a week boundary produces one band per week — same event,
 * different segment — which is why {@link key} exists alongside the event id.
 */
export interface FoldCalendarBand<T = unknown> {
  /** Unique per segment (`<eventId>@<weekStart>`) — the `@for` track key. */
  readonly key: string;
  /** The event this segment belongs to (the representative, when grouped). */
  readonly event: FoldCalendarEvent<T>;
  /** First column covered, `0`–`6`. */
  readonly startColumn: number;
  /** Last column covered, `0`–`6`, inclusive. */
  readonly endColumn: number;
  /** Row within the week's stack, `0`-based. */
  readonly lane: number;
  /** The span started before this week (or is open-ended) — draw an open edge. */
  readonly continuesBefore: boolean;
  /** The span continues after this week (or is open-ended). */
  readonly continuesAfter: boolean;
  /** Events collapsed into this band; `1` when it stands for itself. */
  readonly groupSize: number;
  /** Half-day edge, only when this segment carries the event's real start. */
  readonly startHalfDay?: FoldCalendarHalfDay;
  /** Half-day edge, only when this segment carries the event's real end. */
  readonly endHalfDay?: FoldCalendarHalfDay;
}

/**
 * A day with the events sitting on it — the render model of the column views
 * (week, day), where chips stack in a list and need no lane packing.
 */
export interface FoldCalendarDayEvents<T = unknown> {
  readonly day: FoldCalendarDay;
  /** Events covering {@link day}, in the caller's order. */
  readonly events: readonly FoldCalendarEvent<T>[];
}

/** One row of a month grid: its seven days, the bands over them, and what did not fit. */
export interface FoldCalendarWeek<T = unknown> {
  /** The week's anchor day — also the segment keys' discriminator. */
  readonly start: FoldCalendarDate;
  /** Seven cells, in column order. */
  readonly days: readonly FoldCalendarDay[];
  /** Placed bands, ordered by lane then column. */
  readonly bands: readonly FoldCalendarBand<T>[];
  /**
   * Spans overlapping this week that no lane could take. What each *day* lost
   * is on the day itself ({@link FoldCalendarDay.hiddenCount}) — a row-wide
   * total says a week is crowded without saying which day to open.
   */
  readonly hiddenCount: number;
}
