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
  /** The toolbar's jump-to-today button. */
  readonly todayAction: string;
  /** Accessible name of the toolbar's back control. */
  readonly previousPeriod: string;
  /** Accessible name of the toolbar's forward control. */
  readonly nextPeriod: string;
  /** Accessible name of the view switch. */
  readonly viewSwitch: string;
  /** The four view names, in the switch. */
  readonly viewMonth: string;
  readonly viewWeek: string;
  readonly viewDay: string;
  readonly viewList: string;
  /** Accessible name of the agenda rail. */
  readonly agenda: string;
  /** The agenda's two slices, in its own switch. */
  readonly agendaTodo: string;
  readonly agendaUpcoming: string;
  /** Shown when the agenda's current slice is clear. */
  readonly agendaEmptyTodo: string;
  readonly agendaEmptyUpcoming: string;
  /** Relative day names the agenda prefers over a date. */
  readonly relativeToday: string;
  readonly relativeTomorrow: string;
  /** Accessible names of the rail's collapse control, in each state. */
  readonly collapse: string;
  readonly expand: string;
  /** Accessible name of the source filter. */
  readonly sourceFilter: string;
  /** Reading of a source's state, e.g. `("Absences", true) => "Absences, shown"`. */
  readonly sourceState: (label: string, shown: boolean) => string;
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
  todayAction: "Today",
  previousPeriod: "Previous",
  nextPeriod: "Next",
  viewSwitch: "Calendar view",
  viewMonth: "Month",
  viewWeek: "Week",
  viewDay: "Day",
  viewList: "List",
  agenda: "Agenda",
  agendaTodo: "To handle",
  agendaUpcoming: "Upcoming",
  agendaEmptyTodo: "Nothing to handle — all up to date.",
  agendaEmptyUpcoming: "Nothing coming up.",
  relativeToday: "Today",
  relativeTomorrow: "Tomorrow",
  collapse: "Collapse",
  expand: "Expand",
  sourceFilter: "Filter by source",
  sourceState: (label, shown) => `${label}, ${shown ? "shown" : "hidden"}`,
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
