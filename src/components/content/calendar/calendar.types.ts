import type { FoldIconName } from "../../foundations/icon/builtin-icons";
import type { FoldCalendarDate } from "./calendar-date";

/**
 * Public data model for the calendar family. The calendar knows nothing of the
 * domain it plots — an app maps its own records onto {@link FoldCalendarEvent}
 * and gets them back, still typed, on every output.
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
  /** Which half of {@link start} the event opens on. */
  readonly startHalfDay?: FoldCalendarHalfDay;
  /** Which half of {@link end} the event closes on. */
  readonly endHalfDay?: FoldCalendarHalfDay;
  /**
   * Collapses events sharing this key into a single chip carrying a count —
   * for a bulk action that would otherwise flood the grid (a whole team off on
   * the same days). The first event in document order represents the group.
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
  /** The app's own record, handed back untouched on every output. */
  readonly data?: T;
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
  /** One of the two days closing the week, per the configured anchor. */
  readonly isWeekEnd: boolean;
}

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
  /** Spans overlapping this week that no lane could take. */
  readonly hiddenCount: number;
  /**
   * How many of them each day lost, one entry per column — a hidden span
   * counts against **every** day it would have covered. This is what the
   * overflow chips read: a row-wide total says a week is crowded without
   * saying which day to open.
   */
  readonly hiddenByDay: readonly number[];
}
