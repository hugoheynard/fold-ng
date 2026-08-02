/**
 * Plain-date arithmetic for the calendar family — `YYYY-MM-DD` in, `YYYY-MM-DD`
 * out. Framework-free and side-effect-free, so every rule here is unit-testable
 * without a TestBed.
 *
 * ## Why a string and not a `Date`
 * A calendar of all-day spans deals in **plain dates** — "the 18th of May",
 * with no instant and no zone. A `Date` is a timestamp, so the moment one
 * crosses a zone or a DST boundary the same span lands on a different cell:
 * `new Date("2026-05-18")` is UTC midnight, which is the *17th* anywhere west
 * of Greenwich. Modelling the domain as `YYYY-MM-DD` removes that entire bug
 * class by construction, and buys three things for free: values compare
 * **lexicographically** (`a <= b` *is* "on or before"), they are `===`-equal
 * when they mean the same day (a `Date` never is), and they are already the
 * wire format every backend sends.
 *
 * {@link FoldTimelineNode} keeps a native `Date` on purpose — it plots dated
 * *instants* on a rail, which is the other domain.
 *
 * Arithmetic runs through `Date.UTC`, never local time: UTC has no DST, so a
 * day is always exactly 86 400 000 ms and "add 1 day" can never silently
 * return the same date twice (or skip one) around a clock change.
 */

/**
 * A plain calendar date — an ISO-8601 **date**, `YYYY-MM-DD`, with no time and
 * no zone. Inclusive wherever it bounds a range.
 */
export type FoldCalendarDate = string;

/** A day of the week, as the anchor a calendar's weeks start on. */
export type FoldWeekday = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";

/** Milliseconds in a UTC day — exact, since UTC has no DST. */
const MS_PER_DAY = 86_400_000;

/** `FoldWeekday` → the index `Date.prototype.getUTCDay()` returns for it. */
const WEEKDAY_INDEX = {
  sun: 0,
  mon: 1,
  tue: 2,
  wed: 3,
  thu: 4,
  fri: 5,
  sat: 6,
} as const satisfies Record<FoldWeekday, number>;

/** `YYYY-MM-DD`, structurally. Rejects `2026-5-1`, `2026-05-1`, junk suffixes. */
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

/** Left-pads a 1–2 digit date part to the two digits the format requires. */
function pad2(value: number): string {
  return value < 10 ? `0${value}` : `${value}`;
}

/**
 * Whether `value` is a well-formed **and real** plain date. Catches both a
 * malformed shape (`"2026-5-1"`) and an impossible day (`"2026-02-30"`), the
 * latter by round-tripping through UTC and checking the parts survived.
 */
export function foldIsCalendarDate(value: string): boolean {
  if (!DATE_PATTERN.test(value)) {
    return false;
  }
  const year = Number(value.slice(0, 4));
  const month = Number(value.slice(5, 7));
  const day = Number(value.slice(8, 10));
  if (month < 1 || month > 12 || day < 1 || day > 31) {
    return false;
  }
  const parsed = new Date(Date.UTC(year, month - 1, day));
  return parsed.getUTCMonth() === month - 1 && parsed.getUTCDate() === day;
}

/**
 * Epoch milliseconds at UTC midnight of `date` — the internal representation
 * every computation here runs on. A malformed date yields `NaN`, which
 * propagates visibly rather than silently shifting a result.
 */
function toUtcMs(date: FoldCalendarDate): number {
  const year = Number(date.slice(0, 4));
  const month = Number(date.slice(5, 7));
  const day = Number(date.slice(8, 10));
  return Date.UTC(year, month - 1, day);
}

/** UTC midnight milliseconds back to `YYYY-MM-DD`. */
function fromUtcMs(ms: number): FoldCalendarDate {
  const at = new Date(ms);
  return `${at.getUTCFullYear()}-${pad2(at.getUTCMonth() + 1)}-${pad2(at.getUTCDate())}`;
}

/**
 * Today, read from the **local** clock — the day the user believes it is,
 * which is what a calendar highlights. Pass `now` to pin it (tests, a
 * workspace clock).
 */
export function foldToday(now: Date = new Date()): FoldCalendarDate {
  return `${now.getFullYear()}-${pad2(now.getMonth() + 1)}-${pad2(now.getDate())}`;
}

/** `date` shifted by `days` (negative moves back). */
export function foldAddDays(
  date: FoldCalendarDate,
  days: number,
): FoldCalendarDate {
  return fromUtcMs(toUtcMs(date) + days * MS_PER_DAY);
}

/**
 * Whole days from `from` to `to` — signed, and **exclusive** (same day → `0`),
 * so a span's length is `foldDaysBetween(start, end) + 1`.
 */
export function foldDaysBetween(
  from: FoldCalendarDate,
  to: FoldCalendarDate,
): number {
  return Math.round((toUtcMs(to) - toUtcMs(from)) / MS_PER_DAY);
}

/**
 * `date` shifted by `months`, clamping the day to the target month's length so
 * the result is always a real date (31 Jan + 1 month → 28/29 Feb, never 3 Mar).
 */
export function foldAddMonths(
  date: FoldCalendarDate,
  months: number,
): FoldCalendarDate {
  const year = Number(date.slice(0, 4));
  const month = Number(date.slice(5, 7));
  const day = Number(date.slice(8, 10));
  const target = new Date(Date.UTC(year, month - 1 + months, 1));
  const lastDay = new Date(
    Date.UTC(target.getUTCFullYear(), target.getUTCMonth() + 1, 0),
  ).getUTCDate();
  return `${target.getUTCFullYear()}-${pad2(target.getUTCMonth() + 1)}-${pad2(Math.min(day, lastDay))}`;
}

/** The first day of `date`'s month. */
export function foldStartOfMonth(date: FoldCalendarDate): FoldCalendarDate {
  return `${date.slice(0, 7)}-01`;
}

/** The last day of `date`'s month (28–31, leap years included). */
export function foldEndOfMonth(date: FoldCalendarDate): FoldCalendarDate {
  const year = Number(date.slice(0, 4));
  const month = Number(date.slice(5, 7));
  return fromUtcMs(Date.UTC(year, month, 0));
}

/**
 * The start of the week `date` falls in, for a calendar anchored on
 * `weekStartsOn`. Anchor-agnostic: a Monday-first and a Sunday-first calendar
 * ask the same question and get their own answer.
 */
export function foldStartOfWeek(
  date: FoldCalendarDate,
  weekStartsOn: FoldWeekday = "mon",
): FoldCalendarDate {
  const ms = toUtcMs(date);
  const dayOfWeek = new Date(ms).getUTCDay();
  const offset = (dayOfWeek - WEEKDAY_INDEX[weekStartsOn] + 7) % 7;
  return fromUtcMs(ms - offset * MS_PER_DAY);
}

/**
 * `date`'s position in its week, `0` on the anchor day — the column a day
 * occupies in a 7-wide grid.
 */
export function foldWeekdayIndex(
  date: FoldCalendarDate,
  weekStartsOn: FoldWeekday = "mon",
): number {
  return (
    (new Date(toUtcMs(date)).getUTCDay() - WEEKDAY_INDEX[weekStartsOn] + 7) % 7
  );
}

/**
 * Whether `date` falls on the two days that close the week — the pair a
 * calendar shades, derived from the anchor rather than hard-coded to Sat/Sun.
 */
export function foldIsWeekEnd(
  date: FoldCalendarDate,
  weekStartsOn: FoldWeekday = "mon",
): boolean {
  return foldWeekdayIndex(date, weekStartsOn) >= 5;
}

/**
 * A `Date` at **UTC midnight** of `date` — the bridge to `Intl.DateTimeFormat`
 * for month and weekday names. Format it with `timeZone: "UTC"`, or the local
 * zone will shift the label back a day west of Greenwich.
 */
export function foldToNativeDate(date: FoldCalendarDate): Date {
  return new Date(toUtcMs(date));
}
