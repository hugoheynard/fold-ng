import {
  FOLD_NO_HIDDEN_DAYS,
  foldCountByDay,
  foldMakeDay,
  foldWeekendOr,
} from "./cell";
import {
  foldFromEpochDay,
  foldStartOfWeek,
  foldToEpochDay,
  type FoldCalendarDate,
  type FoldWeekday,
} from "./date";
import { foldLayOutOverlaps, type FoldOverlapInput } from "./overlap";
import { foldPackRow } from "./row-pack";
import { foldCollapseGroups } from "./span";
import {
  FOLD_MINUTES_PER_DAY,
  foldToMinutes,
  type FoldCalendarTime,
} from "./time";
import type {
  FoldCalendarBand,
  FoldCalendarDay,
  FoldCalendarEvent,
} from "./types";

/**
 * The time grid's geometry: hour columns with events placed **inside** a day,
 * and an all-day strip above them.
 *
 * The two halves are two different problems and stay two: a timed event is an
 * interval in minutes laid out across a column's width
 * ({@link foldLayOutOverlaps}), an all-day event is a span across days laid out
 * in lanes ({@link foldPackRow}) — the same packer the month grid uses, so a
 * three-day absence reads identically in both.
 *
 * Everything here is a **fraction of the visible window**, not a pixel: the
 * window is a caller's choice (`dayStart`/`dayEnd`), the height is CSS's, and a
 * layout that computed pixels would have to be told about both.
 */

/** How to build a time grid. */
export interface FoldTimeGridOptions {
  /** Any date inside the range to display. */
  readonly date: FoldCalendarDate;
  /** Days to show: `1` is a day view, `7` a week. @default 7 */
  readonly dayCount?: number;
  /** Snap the range to the week — ignored unless `dayCount` is 7. @default true */
  readonly snapToWeek?: boolean;
  /** Day the week starts on. @default 'mon' */
  readonly weekStartsOn?: FoldWeekday;
  /** Days shaded as the weekend. @default ['sat', 'sun'] */
  readonly weekendDays?: readonly FoldWeekday[] | undefined;
  /** The day to flag as today; omit to flag none. */
  readonly today?: FoldCalendarDate | undefined;
  /** First hour on screen. @default '00:00' */
  readonly dayStart?: FoldCalendarTime;
  /** Last hour on screen; `24:00` is midnight. @default '24:00' */
  readonly dayEnd?: FoldCalendarTime;
  /** Lanes the all-day strip stacks before events overflow. @default 2 */
  readonly maxAllDayLanes?: number;
}

/** One timed event's slice of one day. */
export interface FoldCalendarBlock<T = unknown> {
  /** Unique per slice (`<eventId>@<date>`) — the `@for` track key. */
  readonly key: string;
  readonly event: FoldCalendarEvent<T>;
  /** Where it starts, as a fraction `0`–`1` of the visible window. */
  readonly top: number;
  /** How tall it is, as a fraction of the visible window. */
  readonly height: number;
  /** Its column inside its overlap cluster, `0`-based. */
  readonly column: number;
  /** How many columns the cluster needed — the denominator of the width. */
  readonly columns: number;
  /** It began before this day, or before the visible window. */
  readonly continuesBefore: boolean;
  /** It runs past this day, or past the visible window. */
  readonly continuesAfter: boolean;
}

/** One day column: the cell it stands for, and the events inside it. */
export interface FoldTimeGridColumn<T = unknown> {
  readonly day: FoldCalendarDay;
  /** Timed events, in the caller's order. */
  readonly blocks: readonly FoldCalendarBlock<T>[];
}

/** A laid-out time grid. */
export interface FoldTimeGrid<T = unknown> {
  /** The day columns, earliest first. */
  readonly columns: readonly FoldTimeGridColumn<T>[];
  /** All-day spans across the strip on top, packed into lanes. */
  readonly allDay: readonly FoldCalendarBand<T>[];
  /** All-day spans no lane could take. */
  readonly allDayHiddenCount: number;
  /** The hour labels down the gutter, as `HH:mm`. */
  readonly hours: readonly FoldCalendarTime[];
  /** First minute on screen. */
  readonly startMinute: number;
  /** Last minute on screen. */
  readonly endMinute: number;
}

const DEFAULT_DAY_COUNT = 7;
const DEFAULT_ALL_DAY_LANES = 2;
const MINUTES_PER_HOUR = 60;

/**
 * Whether an event is placed on the clock or on the strip.
 *
 * **Both** ends are needed: an event with only a start has no height, and one
 * with only an end has no origin. Half a time is a data bug, and treating it as
 * all-day is the reading that loses the least.
 */
export function foldIsTimed<T>(event: FoldCalendarEvent<T>): boolean {
  return event.startTime !== undefined && event.endTime !== undefined;
}

/** The window a timed event occupies on one particular day, or `null`. */
function minutesOnDay<T>(
  event: FoldCalendarEvent<T>,
  day: number,
  startMinute: number,
  endMinute: number,
): { from: number; to: number; before: boolean; after: boolean } | null {
  const firstDay = foldToEpochDay(event.start);
  const lastDay = foldToEpochDay(event.end);
  if (day < firstDay || day > lastDay) {
    return null;
  }
  // A span crossing midnight runs to the end of each day it passes through:
  // Monday 14:00 → Wednesday 10:00 is three blocks, not one impossible one.
  const rawFrom =
    day === firstDay ? foldToMinutes(event.startTime ?? "00:00") : 0;
  const rawTo =
    day === lastDay
      ? foldToMinutes(event.endTime ?? "24:00")
      : FOLD_MINUTES_PER_DAY;
  const from = Math.max(startMinute, Math.min(rawFrom, rawTo));
  const to = Math.min(endMinute, Math.max(rawFrom, rawTo));
  if (to <= from) {
    return null; // entirely outside the visible window
  }
  return {
    from,
    to,
    before: day > firstDay || rawFrom < startMinute,
    after: day < lastDay || rawTo > endMinute,
  };
}

/** The grid's own window: which days, and which minutes of them. */
function bounds(options: FoldTimeGridOptions): {
  firstDay: number;
  dayCount: number;
  startMinute: number;
  endMinute: number;
} {
  const dayCount = Math.max(
    1,
    Math.trunc(options.dayCount ?? DEFAULT_DAY_COUNT),
  );
  const snap = options.snapToWeek !== false && dayCount === DEFAULT_DAY_COUNT;
  const firstDay = foldToEpochDay(
    snap
      ? foldStartOfWeek(options.date, options.weekStartsOn ?? "mon")
      : options.date,
  );
  const startMinute = foldToMinutes(options.dayStart ?? "00:00");
  const rawEnd = foldToMinutes(options.dayEnd ?? "24:00");
  return {
    firstDay,
    dayCount,
    startMinute,
    // A window with no height would divide by zero downstream.
    endMinute: rawEnd > startMinute ? rawEnd : FOLD_MINUTES_PER_DAY,
  };
}

/** The hour marks inside the window, including the one it opens on. */
function hourMarks(startMinute: number, endMinute: number): FoldCalendarTime[] {
  const marks: FoldCalendarTime[] = [];
  const first = Math.ceil(startMinute / MINUTES_PER_HOUR) * MINUTES_PER_HOUR;
  for (let minute = first; minute < endMinute; minute += MINUTES_PER_HOUR) {
    const hour = Math.floor(minute / MINUTES_PER_HOUR);
    marks.push(`${hour < 10 ? "0" : ""}${hour}:00`);
  }
  return marks;
}

/**
 * Lays out `dayCount` days as hour columns plus an all-day strip.
 *
 * Timed events are placed on the clock; everything else — no times, or only one
 * of them — goes on the strip, where it spans days exactly as it does in the
 * month grid.
 */
export function foldBuildTimeGrid<T>(
  events: readonly FoldCalendarEvent<T>[],
  options: FoldTimeGridOptions,
): FoldTimeGrid<T> {
  const { firstDay, dayCount, startMinute, endMinute } = bounds(options);
  const span = endMinute - startMinute;

  const timed = events.filter((event) => foldIsTimed(event));
  const allDayEvents = events.filter((event) => !foldIsTimed(event));

  const hidden = new Map<number, number>();
  const strip = foldPackRow(
    foldCollapseGroups(allDayEvents).filter(
      (candidate) =>
        candidate.endDay >= firstDay &&
        candidate.startDay < firstDay + dayCount,
    ),
    {
      start: foldFromEpochDay(firstDay),
      startDay: firstDay,
      dayCount,
    },
    Math.max(0, Math.trunc(options.maxAllDayLanes ?? DEFAULT_ALL_DAY_LANES)),
    hidden,
  );

  const context = {
    month: foldFromEpochDay(firstDay).slice(0, 7),
    today: options.today,
    weekendDays: foldWeekendOr(options.weekendDays),
    counts: foldCountByDay(events, firstDay, firstDay + dayCount - 1),
    hidden: FOLD_NO_HIDDEN_DAYS,
  };

  const columns = Array.from({ length: dayCount }, (_unused, offset) => {
    const day = firstDay + offset;
    const date = foldFromEpochDay(day);
    const placed = timed
      .map((event) => ({
        event,
        window: minutesOnDay(event, day, startMinute, endMinute),
      }))
      .filter(
        (
          candidate,
        ): candidate is {
          event: FoldCalendarEvent<T>;
          window: NonNullable<ReturnType<typeof minutesOnDay>>;
        } => candidate.window !== null,
      );

    const slots = foldLayOutOverlaps(
      placed.map<FoldOverlapInput>(({ window }) => ({
        startMinute: window.from,
        endMinute: window.to,
      })),
    );

    return {
      day: foldMakeDay(day, context),
      blocks: placed.map<FoldCalendarBlock<T>>(({ event, window }, index) => ({
        key: `${event.id}@${date}`,
        event,
        top: (window.from - startMinute) / span,
        height: (window.to - window.from) / span,
        column: slots[index]?.column ?? 0,
        columns: slots[index]?.columns ?? 1,
        continuesBefore: window.before,
        continuesAfter: window.after,
      })),
    };
  });

  return {
    columns,
    allDay: strip.bands,
    allDayHiddenCount: strip.hiddenCount,
    hours: hourMarks(startMinute, endMinute),
    startMinute,
    endMinute,
  };
}
