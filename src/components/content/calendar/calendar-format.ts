import { foldToNativeDate, type FoldCalendarDate } from "./calendar-date";

/**
 * Every date format the calendar family renders, in one table.
 *
 * They used to be five components' worth of inline `Intl.DateTimeFormat`
 * option bags — which is how the day view ended up asking for
 * `{ weekday: 'long', month: 'long' }` and printing "Saturday May", a phrase in
 * no locale. Side by side they can be read against each other, and a consumer
 * can see what a locale is actually asked for.
 *
 * `timeZone: 'UTC'` is not optional: a plain date is bridged to `Date` at UTC
 * midnight, so formatting it in the local zone would print the day before for
 * anyone west of Greenwich.
 */
export const FOLD_CALENDAR_FORMATS = {
  /** Whole date, spelled out — accessible names. */
  dateFull: { dateStyle: "long" },
  /** Whole date **with its weekday** — a period title, where it is the heading. */
  dateFullWeekday: { dateStyle: "full" },
  /** `18 May 2026` — the ends of a week, which `formatRange` then joins. */
  dayMonthYear: { day: "numeric", month: "long", year: "numeric" },
  /** `Mon` — grid column headers. */
  weekdayShort: { weekday: "short" },
  /** `Monday` — a day heading, where there is room. */
  weekdayLong: { weekday: "long" },
  /** `May` — beside a day number, never on its own with a weekday. */
  monthLong: { month: "long" },
  /** `May` (abbreviated) — the agenda rail, where width is scarce. */
  monthShort: { month: "short" },
  /** `May 2026` — a period title. */
  monthYear: { month: "long", year: "numeric" },
  /** `18 May` — a span's ends, which `formatRange` then joins. */
  dayMonthShort: { day: "numeric", month: "short" },
} as const satisfies Record<string, Intl.DateTimeFormatOptions>;

/** A key of {@link FOLD_CALENDAR_FORMATS}. */
export type FoldCalendarFormat = keyof typeof FOLD_CALENDAR_FORMATS;

/**
 * Formatters are expensive to build and perfectly reusable, so they are cached
 * per locale + format. The cache is module-level on purpose: two calendars in
 * the same locale should not each pay for their own.
 */
const CACHE = new Map<string, Intl.DateTimeFormat>();

/** The `Intl` formatter for one locale and format, built at most once. */
export function foldCalendarFormatter(
  locale: string | undefined,
  format: FoldCalendarFormat,
  override?: Intl.DateTimeFormatOptions,
): Intl.DateTimeFormat {
  const options = { ...FOLD_CALENDAR_FORMATS[format], ...override };
  const cacheKey =
    override === undefined
      ? `${locale ?? ""}|${format}`
      : `${locale ?? ""}|${format}|${JSON.stringify(options)}`;
  const cached = CACHE.get(cacheKey);
  if (cached !== undefined) {
    return cached;
  }
  const built = new Intl.DateTimeFormat(locale, {
    ...options,
    timeZone: "UTC",
  });
  CACHE.set(cacheKey, built);
  return built;
}

/** One plain date, formatted. */
export function foldFormatDate(
  date: FoldCalendarDate,
  locale: string | undefined,
  format: FoldCalendarFormat,
  override?: Intl.DateTimeFormatOptions,
): string {
  return foldCalendarFormatter(locale, format, override).format(
    foldToNativeDate(date),
  );
}

/**
 * A span, collapsed to one date when it covers a single day — `Intl`'s own
 * range formatter does that, and picks the locale's separator.
 */
export function foldFormatRange(
  from: FoldCalendarDate,
  to: FoldCalendarDate,
  locale: string | undefined,
  format: FoldCalendarFormat,
  override?: Intl.DateTimeFormatOptions,
): string {
  return foldCalendarFormatter(locale, format, override).formatRange(
    foldToNativeDate(from),
    foldToNativeDate(to),
  );
}
