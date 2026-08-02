import { InjectionToken, type Provider } from "@angular/core";

/**
 * Every string the calendar renders that does not come from the caller's data.
 *
 * Month and weekday names are deliberately **absent**: they come from
 * `Intl.DateTimeFormat` driven by the `locale` input, so a consumer gets all
 * ~200 locales for free instead of hand-translating twelve month names. What
 * remains here is the chrome — the words `Intl` cannot supply.
 */
export interface FoldCalendarLabels {
  /** Accessible name of the grid itself. */
  readonly grid: string;
  /** Word marking the cell that is today, appended to its accessible name. */
  readonly today: string;
  /** The chip standing for events a week had no lane for. */
  readonly moreEvents: (count: number) => string;
  /**
   * A count of events — announced on a day cell, and on a chip that collapses
   * a group into one.
   */
  readonly eventCount: (count: number) => string;
  /** Accessible reading of a span, so a locale can reorder the bounds. */
  readonly dateRange: (start: string, end: string) => string;
  /** Shown by the day view when nothing sits on the day. */
  readonly emptyDay: string;
  /** Shown by the list view when the range holds nothing. */
  readonly emptyRange: string;
}

/** The English defaults — the base every override merges onto. */
export const FOLD_CALENDAR_DEFAULT_LABELS: FoldCalendarLabels = {
  grid: "Calendar",
  today: "today",
  moreEvents: (count) => `+${count} more`,
  eventCount: (count) => (count === 1 ? "1 event" : `${count} events`),
  dateRange: (start, end) => `${start} to ${end}`,
  emptyDay: "Nothing on this day.",
  emptyRange: "Nothing in this range.",
};

/** App-wide calendar labels; defaults to English. */
export const FOLD_CALENDAR_LABELS = new InjectionToken<FoldCalendarLabels>(
  "FOLD_CALENDAR_LABELS",
  { factory: () => FOLD_CALENDAR_DEFAULT_LABELS },
);

/** Provide calendar labels for the whole app, merged over the English defaults. */
export function provideFoldCalendarLabels(
  labels: Partial<FoldCalendarLabels>,
): Provider {
  return {
    provide: FOLD_CALENDAR_LABELS,
    useValue: { ...FOLD_CALENDAR_DEFAULT_LABELS, ...labels },
  };
}
