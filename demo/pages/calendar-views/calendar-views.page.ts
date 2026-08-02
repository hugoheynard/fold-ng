import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from "@angular/core";

import { KindBadgeComponent } from "../../components/kind-badge.component";
import {
  FoldCalendarDayComponent,
  FoldCalendarListComponent,
  FoldCalendarMonthComponent,
  FoldCalendarToolbarComponent,
  FoldCalendarWeekComponent,
  FoldCardComponent,
  FoldPageLayoutComponent,
  foldRangeForView,
  type FoldCalendarDate,
  type FoldCalendarEvent,
  type FoldCalendarView,
} from "../../../src/public-api";

/** Pinned so the page reads the same every day. */
const TODAY: FoldCalendarDate = "2026-05-20";

const EVENTS: readonly FoldCalendarEvent[] = [
  {
    id: "e1",
    start: "2026-05-18",
    end: "2026-05-18",
    label: "Festival opening",
    subline: "19:00 · Main Stage",
    icon: "show",
  },
  {
    id: "e2",
    start: "2026-05-19",
    end: "2026-05-23",
    label: "Léa M. — leave",
    subline: "Pending · 5d",
    tone: "warning",
    icon: "calendar",
  },
  {
    id: "e3",
    start: "2026-05-20",
    end: "2026-05-20",
    label: "Contracts — signature",
    subline: "Due · 4 pending",
    tone: "alert",
    icon: "clock",
  },
  {
    id: "e4",
    start: "2026-05-20",
    end: "2026-05-21",
    label: "Stage build",
    subline: "Crew · Main Stage",
    tone: "success",
    icon: "sliders",
  },
  {
    id: "e5",
    start: "2026-05-11",
    end: "2026-05-29",
    label: "Studio Lumière — residency",
    subline: "Engaged",
    tone: "success",
    icon: "contracts",
  },
  {
    id: "e6",
    start: "2026-05-09",
    end: "2026-05-09",
    label: "Off-season screening",
    subline: "Cancelled",
    tone: "muted",
    icon: "show",
  },
];

/** `/calendar-views` — the four views under one toolbar. */
@Component({
  selector: "gal-calendar-views-page",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    KindBadgeComponent,
    FoldPageLayoutComponent,
    FoldCardComponent,
    FoldCalendarToolbarComponent,
    FoldCalendarMonthComponent,
    FoldCalendarWeekComponent,
    FoldCalendarDayComponent,
    FoldCalendarListComponent,
  ],
  templateUrl: "./calendar-views.page.html",
})
export default class CalendarViewsPage {
  protected readonly today = TODAY;
  protected readonly events = EVENTS;

  /* ── the composed demo: one date, one view, four readings ── */
  protected readonly date = signal<FoldCalendarDate>(TODAY);
  protected readonly view = signal<FoldCalendarView>("month");
  protected readonly lastEvent = signal<string | null>(null);

  /** The window the current view covers — what a real page would fetch. */
  protected readonly range = computed(() =>
    foldRangeForView(this.view(), this.date()),
  );

  /** Clicking a day drills into it, which is what the day view is for. */
  protected openDay(date: FoldCalendarDate): void {
    this.date.set(date);
    this.view.set("day");
  }

  /* ── the standalone vignettes ── */
  protected readonly weekDate = signal<FoldCalendarDate>(TODAY);
  // 30 May really is clear: the residency ends on the 29th.
  protected readonly emptyDay = signal<FoldCalendarDate>("2026-05-30");
}
