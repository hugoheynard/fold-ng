import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from "@angular/core";

import { KindBadgeComponent } from "../../components/kind-badge.component";
import {
  FoldCardComponent,
  FoldPageLayoutComponent,
  foldAddDays,
  foldAddMonths,
  foldDaysBetween,
  foldEndOfMonth,
  foldIsCalendarDate,
  foldIsWeekEnd,
  foldStartOfMonth,
  foldStartOfWeek,
  foldToday,
  foldWeekdayIndex,
  type FoldCalendarDate,
  type FoldWeekday,
} from "../../../src/public-api";

/** One worked example in the helper table. */
interface HelperRow {
  readonly call: string;
  readonly result: string;
  readonly note: string;
}

/** `/calendar-dates` — the plain-date model the calendar family is built on. */
@Component({
  selector: "gal-calendar-dates-page",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KindBadgeComponent, FoldPageLayoutComponent, FoldCardComponent],
  templateUrl: "./calendar-dates.page.html",
})
export default class CalendarDatesPage {
  /** The one call that reads a clock — everything else is pure. */
  protected readonly today = foldToday();

  protected readonly probe = signal<FoldCalendarDate>("2026-05-18");
  protected readonly anchor = signal<FoldWeekday>("mon");
  protected readonly anchors: readonly FoldWeekday[] = ["mon", "sat", "sun"];

  protected readonly probeValid = computed(() =>
    foldIsCalendarDate(this.probe()),
  );

  /** Live results for the probe date, so the rules are demonstrated, not asserted. */
  protected readonly rows = computed<readonly HelperRow[]>(() => {
    const date = this.probe();
    if (!foldIsCalendarDate(date)) {
      return [];
    }
    const anchor = this.anchor();
    return [
      {
        call: `foldAddDays("${date}", 1)`,
        result: foldAddDays(date, 1),
        note: "UTC arithmetic — a DST boundary can never repeat or skip a day",
      },
      {
        call: `foldAddMonths("${date}", 1)`,
        result: foldAddMonths(date, 1),
        note: "clamps onto a shorter month (31 Jan + 1 → 28 Feb, never 3 Mar)",
      },
      {
        call: `foldStartOfWeek("${date}", "${anchor}")`,
        result: foldStartOfWeek(date, anchor),
        note: "the week's anchor day, whichever day the calendar starts on",
      },
      {
        call: `foldWeekdayIndex("${date}", "${anchor}")`,
        result: String(foldWeekdayIndex(date, anchor)),
        note: "0 on the anchor — the column the day occupies in a 7-wide grid",
      },
      {
        call: `foldIsWeekEnd("${date}", "${anchor}")`,
        result: String(foldIsWeekEnd(date, anchor)),
        note: "the two closing days, derived from the anchor, not hard-coded",
      },
      {
        call: `foldStartOfMonth("${date}")`,
        result: foldStartOfMonth(date),
        note: "",
      },
      {
        call: `foldEndOfMonth("${date}")`,
        result: foldEndOfMonth(date),
        note: "28–31, leap years included",
      },
      {
        call: `foldDaysBetween("${date}", "${this.today}")`,
        result: String(foldDaysBetween(date, this.today)),
        note: "signed and exclusive — a span's length is this + 1",
      },
    ];
  });

  protected onProbe(value: string): void {
    this.probe.set(value);
  }
}
