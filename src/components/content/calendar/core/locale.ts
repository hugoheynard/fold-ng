import type { FoldWeekday } from "./date";

/**
 * What a locale says about its own week.
 *
 * `Intl` hands us every month and weekday name, and then most calendars stop
 * there and hard-code Monday — which is right in France and wrong in the United
 * States, Egypt and the Maldives. `Intl.Locale` also knows **which day the week
 * starts on and which days are the weekend**; asking is one call, and it turns
 * two inputs from "the caller guesses" into "the caller overrides".
 *
 * Support is uneven (`getWeekInfo()` in Chrome and Safari, the `weekInfo`
 * getter in older Firefox), so both shapes are probed and neither is assumed.
 * A runtime with neither falls back to Monday + Sat/Sun, which is the most
 * common answer and the previous behaviour.
 */

/** A locale's week conventions. */
export interface FoldWeekInfo {
  /** The day its calendars open on. */
  readonly weekStartsOn: FoldWeekday;
  /** The days it shades as the weekend. */
  readonly weekendDays: readonly FoldWeekday[];
}

/** ISO-8601 day numbers, `1` = Monday … `7` = Sunday — what `Intl` returns. */
const ISO_DAY: readonly FoldWeekday[] = [
  "mon",
  "tue",
  "wed",
  "thu",
  "fri",
  "sat",
  "sun",
];

/** What a runtime that cannot answer gets: the most common week in the world. */
export const FOLD_FALLBACK_WEEK_INFO: FoldWeekInfo = {
  weekStartsOn: "mon",
  weekendDays: ["sat", "sun"],
};

const CACHE = new Map<string, FoldWeekInfo>();

/** `1`–`7` → a weekday, ignoring anything out of range. */
function toWeekday(isoDay: unknown): FoldWeekday | null {
  if (typeof isoDay !== "number") {
    return null;
  }
  return ISO_DAY[isoDay - 1] ?? null;
}

/** A no-argument method, narrowed without an assertion. */
function isThunk(value: unknown): value is () => unknown {
  return typeof value === "function";
}

/** The `{ firstDay, weekend }` shape, whichever way the runtime exposes it. */
function readWeekInfo(locale: Intl.Locale): unknown {
  if ("getWeekInfo" in locale) {
    const method: unknown = locale.getWeekInfo;
    if (isThunk(method)) {
      return method.call(locale);
    }
  }
  if ("weekInfo" in locale) {
    return locale.weekInfo;
  }
  return null;
}

/** Narrows the probed value without trusting its shape. */
function parseWeekInfo(raw: unknown): FoldWeekInfo | null {
  if (typeof raw !== "object" || raw === null) {
    return null;
  }
  const firstDay = "firstDay" in raw ? toWeekday(raw.firstDay) : null;
  const weekendRaw = "weekend" in raw ? raw.weekend : null;
  const weekend = Array.isArray(weekendRaw)
    ? weekendRaw
        .map(toWeekday)
        .filter((day): day is FoldWeekday => day !== null)
    : [];
  if (firstDay === null) {
    return null;
  }
  return {
    weekStartsOn: firstDay,
    weekendDays:
      weekend.length > 0 ? weekend : FOLD_FALLBACK_WEEK_INFO.weekendDays,
  };
}

/**
 * The week conventions of `locale` — its first day and its weekend.
 *
 * `undefined` asks the runtime for its own locale, which is what a calendar
 * with no `locale` input is already formatting in.
 */
export function foldLocaleWeekInfo(locale?: string): FoldWeekInfo {
  const tag = locale ?? new Intl.DateTimeFormat().resolvedOptions().locale;
  const cached = CACHE.get(tag);
  if (cached !== undefined) {
    return cached;
  }
  let info = FOLD_FALLBACK_WEEK_INFO;
  try {
    info = parseWeekInfo(readWeekInfo(new Intl.Locale(tag))) ?? info;
  } catch {
    // A malformed tag is the caller's bug, not a reason to render nothing.
    info = FOLD_FALLBACK_WEEK_INFO;
  }
  CACHE.set(tag, info);
  return info;
}
