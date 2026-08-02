/**
 * Wall-clock time for the time grid — `HH:mm`, 24-hour, **no zone**.
 *
 * ## Why not an instant
 * The same decision as the date, for the same reason. A meeting at 09:00 is at
 * 09:00 on the wall the person is looking at; storing it as an instant means
 * every render re-derives that wall time from a zone, and the moment the zone
 * is wrong — a server default, a user travelling, a DST edge — the grid draws
 * the wrong hour. `"09:00"` cannot be wrong about which hour it means.
 *
 * The zone is the **app's** boundary, exactly like the date: convert once on
 * the way in ({@link foldFromTemporal} takes a `ZonedDateTime` and drops it to
 * the day and, here, the caller reads its `.hour`/`.minute`), and the calendar
 * never has to know.
 *
 * Times compare **lexicographically** like the dates do — `"09:00" < "14:30"` —
 * which is what makes overlap detection a string comparison rather than a
 * parse. `24:00` is legal and means the end of the day, so a span that runs to
 * midnight has an end greater than its start.
 */

/** A wall-clock time, `HH:mm`, `00:00`–`24:00`. */
export type FoldCalendarTime = string;

/** Minutes in a day — the grid's own unit. */
export const FOLD_MINUTES_PER_DAY = 1440;

/** `HH:mm`, structurally. Rejects `9:00`, `09:00:00`, junk suffixes. */
const TIME_PATTERN = /^\d{2}:\d{2}$/;

/** Whether `value` is a well-formed and real wall-clock time. */
export function foldIsCalendarTime(value: string): boolean {
  if (!TIME_PATTERN.test(value)) {
    return false;
  }
  const minutes = foldToMinutes(value);
  return minutes >= 0 && minutes <= FOLD_MINUTES_PER_DAY;
}

/** Minutes since midnight — the number the grid positions on. */
export function foldToMinutes(time: FoldCalendarTime): number {
  return Number(time.slice(0, 2)) * 60 + Number(time.slice(3, 5));
}

/** Minutes since midnight back to `HH:mm`, clamped to the day. */
export function foldFromMinutes(minutes: number): FoldCalendarTime {
  const clamped = Math.max(
    0,
    Math.min(FOLD_MINUTES_PER_DAY, Math.round(minutes)),
  );
  const hours = Math.floor(clamped / 60);
  const rest = clamped % 60;
  return `${hours < 10 ? "0" : ""}${hours}:${rest < 10 ? "0" : ""}${rest}`;
}

/** `time` shifted by `minutes`, clamped to the day rather than wrapping. */
export function foldAddMinutes(
  time: FoldCalendarTime,
  minutes: number,
): FoldCalendarTime {
  return foldFromMinutes(foldToMinutes(time) + minutes);
}
