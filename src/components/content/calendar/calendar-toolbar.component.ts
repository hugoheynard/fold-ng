import { Component, computed, inject, input, model } from "@angular/core";

import { FoldIconComponent } from "../../foundations/icon/icon.component";
import {
  FoldViewToggleComponent,
  type FoldViewToggleOption,
} from "../../forms/view-toggle/view-toggle.component";
import {
  foldToday,
  type FoldCalendarDate,
  type FoldWeekday,
} from "./calendar-date";
import {
  FOLD_CALENDAR_LABELS,
  type FoldCalendarLabels,
} from "./calendar-labels";
import {
  foldShiftDate,
  foldViewTitle,
  type FoldCalendarView,
} from "./calendar-navigation";

/**
 * `<fold-calendar-toolbar>` — the chrome above a calendar: jump to today, page
 * back and forward, the period's name, and the view switch.
 *
 * It owns no data. Both pieces of state it touches are two-way `model`s, so
 * the page binds the same `date` and `view` it hands to whichever view is on
 * screen, and paging keeps working without a single output handler.
 *
 * The step matches the reading: a month at a time under the month view, a week
 * under the week view, a day under the day view — see `foldShiftDate`.
 *
 * ## Inputs
 * | Input          | Type                     | Default | Meaning |
 * |----------------|--------------------------|---------|---------|
 * | `date`         | `FoldCalendarDate`       | —       | **Two-way.** The period on display. |
 * | `view`         | `FoldCalendarView`       | `'month'` | **Two-way.** Which reading is on screen. |
 * | `views`        | `FoldCalendarView[]`     | all four | Which switches to offer; pass fewer to drop one. |
 * | `weekStartsOn` | `FoldWeekday`            | `'mon'` | How the week view snaps and names itself. |
 * | `locale`       | `string`                 | runtime | Drives the title through `Intl`. |
 * | `labels`       | `Partial<FoldCalendarLabels>` | — | Per-instance label overrides. |
 *
 * ## Slots
 * | Attribute | Region |
 * |-----------|--------|
 * | `actions` | Trailing edge — the page's own buttons ("New event", filters). |
 *
 * ## Accessibility
 * The title is the toolbar's live heading: it carries `aria-live="polite"`, so
 * paging announces the period a keyboard user just moved to instead of leaving
 * the change silent.
 *
 * @selector `fold-calendar-toolbar`
 *
 * @example
 * ```html
 * <fold-calendar-toolbar [(date)]="date" [(view)]="view" [today]="today">
 *   <button actions foldButton (click)="create()">New event</button>
 * </fold-calendar-toolbar>
 * ```
 */
@Component({
  selector: "fold-calendar-toolbar",
  standalone: true,
  imports: [FoldIconComponent, FoldViewToggleComponent],
  templateUrl: "./calendar-toolbar.component.html",
  styleUrl: "./calendar-toolbar.component.scss",
})
export class FoldCalendarToolbarComponent {
  /** The period on display. */
  readonly date = model.required<FoldCalendarDate>();
  /** Which reading is on screen. @default 'month' */
  readonly view = model<FoldCalendarView>("month");
  /** Which switches to offer. @default every view */
  readonly views = input<readonly FoldCalendarView[]>([
    "month",
    "week",
    "day",
    "list",
  ]);
  /** The day the "today" button jumps to; defaults to the local clock. */
  readonly today = input<FoldCalendarDate>();
  /** Day the week starts on. @default 'mon' */
  readonly weekStartsOn = input<FoldWeekday>("mon");
  /** BCP-47 tag for the title. */
  readonly locale = input<string>();
  /** Per-instance label overrides (merged over the app-wide / English defaults). */
  readonly labels = input<Partial<FoldCalendarLabels>>();

  private readonly injectedLabels = inject(FOLD_CALENDAR_LABELS);

  protected readonly l = computed<FoldCalendarLabels>(() => ({
    ...this.injectedLabels,
    ...this.labels(),
  }));

  /** The period's name — "May 2026", "18–24 May 2026", "Wednesday 20 May 2026". */
  protected readonly title = computed(() =>
    foldViewTitle(this.view(), this.date(), this.locale(), this.weekStartsOn()),
  );

  protected readonly options = computed<readonly FoldViewToggleOption[]>(() => {
    const labels = this.l();
    const named: Record<FoldCalendarView, string> = {
      month: labels.viewMonth,
      week: labels.viewWeek,
      day: labels.viewDay,
      list: labels.viewList,
    };
    return this.views().map((view) => ({ value: view, label: named[view] }));
  });

  /** Pages by one period in the units the current view reads in. */
  protected shift(delta: number): void {
    this.date.set(
      foldShiftDate(this.view(), this.date(), delta, this.weekStartsOn()),
    );
  }

  protected goToday(): void {
    this.date.set(this.today() ?? foldToday());
  }

  /** Guards the switch's untyped value before writing it to the model. */
  protected onViewChange(value: string): void {
    const match = this.views().find((view) => view === value);
    if (match !== undefined) {
      this.view.set(match);
    }
  }
}
