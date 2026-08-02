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
 *
 * ## Supported range
 * `0001-01-01` to `9999-12-31`. The four-digit year is what makes the
 * lexicographic guarantee hold, so it is enforced rather than assumed: years
 * below 1000 are zero-padded (`0099-12-31`, which still sorts correctly), and
 * arithmetic that walks past `9999-12-31` returns a five-digit string that
 * {@link foldIsCalendarDate} rejects — a value that fails the type's own
 * predicate rather than one that silently sorts before every other date.
 */

/**
 * A plain calendar date — an ISO-8601 **date**, `YYYY-MM-DD`, with no time and
 * no zone. Inclusive wherever it bounds a range.
 *
 * A plain `string` alias, deliberately: it is the wire format, so a value read
 * from an API or a `<input type="date">` has to flow in without a cast.
 * {@link foldIsCalendarDate} is the runtime guard, and every component that
 * takes one runs it in dev mode.
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

/** `getUTCDay()` index → the `FoldWeekday` it stands for. */
const WEEKDAY_AT = [
  "sun",
  "mon",
  "tue",
  "wed",
  "thu",
  "fri",
  "sat",
] as const satisfies readonly FoldWeekday[];

/**
 * The days a calendar shades as the weekend by default. A separate fact from
 * the week's anchor day: a Sunday-first calendar still rests on Sat/Sun, and a
 * Saturday-first one (much of the Middle East) rests on Fri/Sat while starting
 * on Saturday — which is why the two are different inputs, not one derived
 * from the other.
 */
export const FOLD_DEFAULT_WEEKEND_DAYS = [
  "sat",
  "sun",
] as const satisfies readonly FoldWeekday[];

/** `YYYY-MM-DD`, structurally. Rejects `2026-5-1`, `2026-05-1`, junk suffixes. */
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

/** Left-pads a 1–2 digit date part to the two digits the format requires. */
function pad2(value: number): string {
  return value < 10 ? `0${value}` : `${value}`;
}

/**
 * Left-pads a year to four digits. Year 99 has to render as `0099`, not `99`,
 * or it sorts before every other date and breaks the whole comparison model.
 */
function pad4(value: number): string {
  if (value >= 1000) {
    return `${value}`;
  }
  if (value >= 100) {
    return `0${value}`;
  }
  return value >= 10 ? `00${value}` : `000${value}`;
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
  const at = new Date(Date.UTC(year, month - 1, day));
  // `Date.UTC` maps years 0–99 onto 1900–1999; only `setUTCFullYear` undoes it.
  if (year < 100) {
    at.setUTCFullYear(year, month - 1, day);
  }
  return at.getTime();
}

/** UTC midnight milliseconds back to `YYYY-MM-DD`. */
function fromUtcMs(ms: number): FoldCalendarDate {
  const at = new Date(ms);
  return `${pad4(at.getUTCFullYear())}-${pad2(at.getUTCMonth() + 1)}-${pad2(at.getUTCDate())}`;
}

/**
 * Today, read from the **local** clock — the day the user believes it is,
 * which is what a calendar highlights. Pass `now` to pin it (tests, a
 * workspace clock).
 */
export function foldToday(now: Date = new Date()): FoldCalendarDate {
  return foldFromNativeDate(now);
}

/**
 * A native `Date` read as the plain date it shows on a **local** clock — the
 * inbound bridge, and the one conversion every consumer would otherwise write
 * by hand as `date.toISOString().slice(0, 10)`, which is UTC and therefore off
 * by a day for anyone west of Greenwich after 6pm. That is the exact bug this
 * whole module exists to remove, so the correct form ships with it.
 *
 * Pair with {@link foldToNativeDate} for the way out.
 */
export function foldFromNativeDate(date: Date): FoldCalendarDate {
  return `${pad4(date.getFullYear())}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())}`;
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
  const day = Number(date.slice(8, 10));
  const target = new Date(utcMonthMs(date, months));
  const lastDay = new Date(
    lastDayOfMonthMs(target.getUTCFullYear(), target.getUTCMonth()),
  ).getUTCDate();
  return `${pad4(target.getUTCFullYear())}-${pad2(target.getUTCMonth() + 1)}-${pad2(Math.min(day, lastDay))}`;
}

/** The 1st of `date`'s month shifted by `months`, in epoch ms. */
function utcMonthMs(date: FoldCalendarDate, months: number): number {
  const year = Number(date.slice(0, 4));
  const month = Number(date.slice(5, 7));
  const at = new Date(Date.UTC(year, month - 1 + months, 1));
  if (year < 100) {
    at.setUTCFullYear(year, month - 1 + months, 1);
  }
  return at.getTime();
}

/** Day 0 of the following month — i.e. the last day of this one, in epoch ms. */
function lastDayOfMonthMs(year: number, monthIndex: number): number {
  const at = new Date(Date.UTC(year, monthIndex + 1, 0));
  if (year < 100) {
    at.setUTCFullYear(year, monthIndex + 1, 0);
  }
  return at.getTime();
}

/** The first day of `date`'s month. */
export function foldStartOfMonth(date: FoldCalendarDate): FoldCalendarDate {
  return `${date.slice(0, 7)}-01`;
}

/** The last day of `date`'s month (28–31, leap years included). */
export function foldEndOfMonth(date: FoldCalendarDate): FoldCalendarDate {
  const year = Number(date.slice(0, 4));
  const month = Number(date.slice(5, 7));
  return fromUtcMs(lastDayOfMonthMs(year, month - 1));
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

/** Which day of the week `date` falls on, anchor-independent. */
export function foldWeekdayOf(date: FoldCalendarDate): FoldWeekday {
  return WEEKDAY_AT[new Date(toUtcMs(date)).getUTCDay()] ?? "sun";
}

/**
 * Whether `date` is one of the days a calendar shades as the weekend.
 *
 * Takes the weekend **as data**, because it is not derivable from the week's
 * anchor: the two are independent locale facts. Deriving it — "the last two
 * columns" — shades Friday and Saturday on a Sunday-first calendar and calls
 * Sunday a working day, which is wrong everywhere it is used.
 *
 * @default FOLD_DEFAULT_WEEKEND_DAYS (`['sat', 'sun']`)
 */
export function foldIsWeekend(
  date: FoldCalendarDate,
  weekendDays: readonly FoldWeekday[] = FOLD_DEFAULT_WEEKEND_DAYS,
): boolean {
  return weekendDays.includes(foldWeekdayOf(date));
}

/**
 * A `Date` at **UTC midnight** of `date` — the bridge to `Intl.DateTimeFormat`
 * for month and weekday names. Format it with `timeZone: "UTC"`, or the local
 * zone will shift the label back a day west of Greenwich.
 */
export function foldToNativeDate(date: FoldCalendarDate): Date {
  return new Date(toUtcMs(date));
}
