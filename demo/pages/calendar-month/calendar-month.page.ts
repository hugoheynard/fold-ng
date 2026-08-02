import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from "@angular/core";

import { KindBadgeComponent } from "../../components/kind-badge.component";
import { DevPlaygroundComponent } from "../../components/playground.component";
import {
  FoldCalendarMonthComponent,
  FoldCardComponent,
  FoldPageLayoutComponent,
  type FoldCalendarDate,
  type FoldCalendarEvent,
  type FoldCalendarWeek,
  type FoldWeekday,
} from "../../../src/public-api";

/** Pinned so the page looks the same every day — a real app passes `foldToday()`. */
const TODAY: FoldCalendarDate = "2026-05-18";

/** A workspace month: a run of shows, staff leave, and two contract deadlines. */
const EVENTS: readonly FoldCalendarEvent[] = [
  {
    id: "s1",
    start: "2026-05-16",
    end: "2026-05-17",
    label: "Load-in & stage build",
    tone: "neutral",
    icon: "sliders",
  },
  {
    id: "s2",
    start: "2026-05-18",
    end: "2026-05-18",
    label: "Festival opening — Main Stage",
    tone: "neutral",
    icon: "show",
  },
  {
    id: "s3",
    start: "2026-05-30",
    end: "2026-05-31",
    label: "Closing weekend",
    tone: "success",
    icon: "show",
  },
  {
    id: "s4",
    start: "2026-05-09",
    end: "2026-05-09",
    label: "Off-season screening",
    subline: "Cancelled — venue clash",
    tone: "muted",
    icon: "show",
  },
  {
    id: "a1",
    start: "2026-05-06",
    end: "2026-05-08",
    label: "Marc D. — paid leave",
    tone: "success",
    icon: "calendar",
  },
  {
    id: "a2",
    start: "2026-05-19",
    end: "2026-05-23",
    label: "Léa M. — leave",
    subline: "Pending · 5d",
    tone: "warning",
    icon: "calendar",
    endHalfDay: "morning",
  },
  {
    id: "a3",
    start: "2026-05-13",
    end: "2026-05-13",
    label: "Yanis — sick leave",
    tone: "alert",
    icon: "alert",
  },
  {
    id: "c1",
    start: "2026-05-11",
    end: "2026-05-29",
    label: "Studio Lumière — residency",
    tone: "success",
    icon: "contracts",
    openEnd: true,
  },
  {
    id: "c2",
    start: "2026-05-20",
    end: "2026-05-20",
    label: "Intermittent contracts — signature",
    tone: "alert",
    icon: "clock",
  },
];

/** A crowded week, to show the lane budget spilling into the overflow chip. */
const CROWDED: readonly FoldCalendarEvent[] = [
  ...Array.from({ length: 5 }, (_unused, index) => ({
    id: `x${index}`,
    start: "2026-05-18",
    end: "2026-05-22",
    label: `Overlapping booking ${index + 1}`,
    tone: index % 2 === 0 ? ("warning" as const) : ("neutral" as const),
  })),
];

/** A whole team off together — one chip carrying the count, not five bars. */
const GROUPED: readonly FoldCalendarEvent[] = [
  {
    id: "g1",
    start: "2026-05-11",
    end: "2026-05-15",
    label: "Ana",
    groupId: "team",
    groupLabel: "Sales team — offsite",
    icon: "team",
  },
  {
    id: "g2",
    start: "2026-05-11",
    end: "2026-05-15",
    label: "Ben",
    groupId: "team",
  },
  {
    id: "g3",
    start: "2026-05-12",
    end: "2026-05-15",
    label: "Chloé",
    groupId: "team",
  },
  {
    id: "g4",
    start: "2026-05-11",
    end: "2026-05-14",
    label: "Dan",
    groupId: "team",
  },
];

/** `/calendar-month` — the `fold-calendar-month` gallery page. */
@Component({
  selector: "gal-calendar-month-page",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    KindBadgeComponent,
    DevPlaygroundComponent,
    FoldPageLayoutComponent,
    FoldCardComponent,
    FoldCalendarMonthComponent,
  ],
  templateUrl: "./calendar-month.page.html",
})
export default class CalendarMonthPage {
  protected readonly today = TODAY;
  protected readonly events = EVENTS;
  protected readonly crowded = CROWDED;
  protected readonly grouped = GROUPED;

  /* ── static demos ── */
  protected readonly month = signal<FoldCalendarDate>(TODAY);
  protected readonly crowdedMonth = signal<FoldCalendarDate>(TODAY);
  protected readonly groupedMonth = signal<FoldCalendarDate>(TODAY);

  protected readonly lastDay = signal<FoldCalendarDate | null>(null);
  protected readonly lastEvent = signal<string | null>(null);
  protected readonly lastOverflow = signal<number | null>(null);

  protected onOverflow(week: FoldCalendarWeek<unknown>): void {
    this.lastOverflow.set(week.hiddenCount);
  }

  /* ── playground ── */
  protected readonly pgMonth = signal<FoldCalendarDate>(TODAY);
  protected readonly pgWeekStart = signal<FoldWeekday>("mon");
  protected readonly pgLanes = signal(3);
  protected readonly pgFixed = signal(false);
  protected readonly pgLocale = signal("en-GB");

  protected readonly weekStarts: readonly FoldWeekday[] = ["mon", "sat", "sun"];
  protected readonly locales: readonly string[] = [
    "en-GB",
    "fr-FR",
    "de-DE",
    "ja-JP",
  ];

  protected readonly playgroundCode = computed(
    () => `<fold-calendar-month
  [(month)]="month"
  [events]="events()"
  today="${TODAY}"
  weekStartsOn="${this.pgWeekStart()}"
  [maxLanes]="${this.pgLanes()}"${this.pgFixed() ? "\n  fixedWeeks" : ""}
  locale="${this.pgLocale()}"
  (dayClick)="openDay($event)"
  (eventClick)="openEvent($event)"
/>`,
  );
}
