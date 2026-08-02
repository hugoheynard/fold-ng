import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from "@angular/core";

import { KindBadgeComponent } from "../../components/kind-badge.component";
import { DevPlaygroundComponent } from "../../components/playground.component";
import {
  FoldCalendarTimegridComponent,
  FoldCardComponent,
  FoldPageLayoutComponent,
  type FoldCalendarDate,
  type FoldCalendarEvent,
  type FoldCalendarTime,
} from "../../../src/public-api";

/** Pinned so the page looks the same every day. */
const MONDAY: FoldCalendarDate = "2026-05-18";

/** A sales rep's week: appointments on the clock, an absence on the strip. */
const EVENTS: readonly FoldCalendarEvent[] = [
  {
    id: "standup",
    start: MONDAY,
    end: MONDAY,
    label: "Point équipe",
    startTime: "09:00",
    endTime: "09:30",
    icon: "users",
  },
  {
    id: "lemaire",
    start: MONDAY,
    end: MONDAY,
    label: "Groupe Lemaire",
    subline: "Signature",
    startTime: "09:15",
    endTime: "10:30",
    tone: "warning",
    icon: "file-text",
  },
  {
    id: "audit",
    start: MONDAY,
    end: MONDAY,
    label: "Audit boutique",
    startTime: "10:00",
    endTime: "11:00",
    tone: "alert",
  },
  {
    id: "demo",
    start: "2026-05-19",
    end: "2026-05-19",
    label: "Démo — Maison Bertin",
    startTime: "14:00",
    endTime: "15:30",
    tone: "success",
    icon: "monitor",
  },
  {
    id: "nightshift",
    start: "2026-05-20",
    end: "2026-05-21",
    label: "Astreinte",
    startTime: "18:00",
    endTime: "08:00",
    tone: "neutral",
  },
  {
    id: "leave",
    start: "2026-05-21",
    end: "2026-05-22",
    label: "Léa — congés",
    tone: "muted",
    icon: "calendar",
  },
];

@Component({
  selector: "gal-calendar-timegrid-page",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    KindBadgeComponent,
    DevPlaygroundComponent,
    FoldPageLayoutComponent,
    FoldCardComponent,
    FoldCalendarTimegridComponent,
  ],
  templateUrl: "./calendar-timegrid.page.html",
})
export default class CalendarTimegridPage {
  protected readonly events = EVENTS;
  protected readonly today: FoldCalendarDate = MONDAY;
  protected readonly now: FoldCalendarTime = "10:20";

  protected readonly week = signal<FoldCalendarDate>(MONDAY);
  protected readonly day = signal<FoldCalendarDate>(MONDAY);
  protected readonly lastEvent = signal<string | null>(null);

  /* ── playground ── */
  protected readonly pgDate = signal<FoldCalendarDate>(MONDAY);
  protected readonly pgDayCount = signal(7);
  protected readonly pgStart = signal<FoldCalendarTime>("08:00");
  protected readonly pgEnd = signal<FoldCalendarTime>("20:00");
  protected readonly pgLocale = signal("en-GB");

  protected readonly windows: readonly (readonly [
    FoldCalendarTime,
    FoldCalendarTime,
  ])[] = [
    ["00:00", "24:00"],
    ["08:00", "20:00"],
    ["09:00", "13:00"],
  ];
  protected readonly locales: readonly string[] = ["en-GB", "en-US", "fr-FR"];

  protected setWindow(
    pair: readonly [FoldCalendarTime, FoldCalendarTime],
  ): void {
    this.pgStart.set(pair[0]);
    this.pgEnd.set(pair[1]);
  }

  protected readonly playgroundCode = computed(() => {
    const attrs = [
      `  [date]="date()"`,
      `  [events]="events()"`,
      `  today="${MONDAY}"`,
      `  now="${this.now}"`,
      ...(this.pgDayCount() === 7 ? [] : [`  dayCount="${this.pgDayCount()}"`]),
      ...(this.pgStart() === "00:00" ? [] : [`  dayStart="${this.pgStart()}"`]),
      ...(this.pgEnd() === "24:00" ? [] : [`  dayEnd="${this.pgEnd()}"`]),
      `  locale="${this.pgLocale()}"`,
      `  (eventClick)="open($event)"`,
    ];
    return `<fold-calendar-timegrid\n${attrs.join("\n")}\n/>`;
  });
}
