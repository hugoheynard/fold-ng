import { NgTemplateOutlet } from "@angular/common";
import {
  Component,
  computed,
  contentChild,
  inject,
  input,
  model,
} from "@angular/core";

import { FoldIconComponent } from "../../foundations/icon/icon.component";
import {
  FoldViewToggleComponent,
  type FoldViewToggleOption,
} from "../../forms/view-toggle/view-toggle.component";
import { FoldCalendarChromeDirective } from "./calendar-chrome.directive";
import {
  foldToday,
  type FoldCalendarDate,
  type FoldWeekday,
} from "./calendar-date";
import {
  foldRangeForView,
  foldShiftDate,
  foldViewTitle,
  type FoldCalendarView,
  type FoldCalendarViewOption,
} from "./calendar-navigation";
import { FoldCalendarTitleDirective } from "./calendar-slots.directive";

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
 * | `views`        | `(FoldCalendarView \| FoldCalendarViewOption)[]` | all four | Which switches to offer; pass fewer to drop one, or `{ value, label }` to add your own. |
 * | `today`        | `FoldCalendarDate`       | local clock | Where the "today" button jumps to. |
 * | `weekStartsOn` | `FoldWeekday`            | the locale's | How the week view snaps and names itself. |
 * | `locale`       | `string`                 | runtime | Drives the title through `Intl`. |
 * | `labels`       | `Partial<FoldCalendarLabels>` | — | Per-instance label overrides. |
 *
 * ## Slots & templates
 * | Selector               | Region |
 * |------------------------|--------|
 * | `[actions]`            | Trailing edge — the page's own buttons ("New event", filters). |
 * | `ng-template[foldCalendarTitle]` | Replaces the `<h2>` title — reword it, or give it the heading level the page's outline needs. |
 *
 * ## Theming
 * | CSS variable                       | Default | Sets |
 * |------------------------------------|---------|------|
 * | `--fold-calendar-toolbar-step-size`| `28px`  | The back/forward buttons. |
 *
 * ## Extending
 * `views` accepts an app's own reading — `[views]="['month', {value: 'rooms', label: 'Rooms'}]"`.
 * Paging and titling an unrecognised view fall back to month semantics, so a
 * custom view still lands on real dates.
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
  imports: [NgTemplateOutlet, FoldIconComponent, FoldViewToggleComponent],
  templateUrl: "./calendar-toolbar.component.html",
  styleUrl: "./calendar-toolbar.component.scss",
  hostDirectives: [
    {
      directive: FoldCalendarChromeDirective,
      inputs: ["locale", "labels", "formats"],
    },
  ],
})
export class FoldCalendarToolbarComponent {
  /** The period on display. */
  readonly date = model.required<FoldCalendarDate>();
  /** Which reading is on screen. @default 'month' */
  readonly view = model<FoldCalendarView>("month");
  /**
   * Which switches to offer — a built-in name, or `{ value, label }` for a view
   * the app owns. @default every built-in view
   */
  readonly views = input<
    readonly (FoldCalendarView | FoldCalendarViewOption)[]
  >(["month", "week", "day", "list"]);
  /** The day the "today" button jumps to; defaults to the local clock. */
  readonly today = input<FoldCalendarDate>();
  /** Day the week starts on. @default the locale's own first day */
  readonly weekStartsOn = input<FoldWeekday>();

  /** Labels and locale — see the directive. */
  protected readonly chrome = inject(FoldCalendarChromeDirective);

  /** The anchor in force: the caller's, else the one the locale declares. */
  private readonly anchor = computed(() =>
    this.chrome.anchor(this.weekStartsOn()),
  );

  private readonly projectedTitle = contentChild(FoldCalendarTitleDirective);

  /** The custom title template, when one is projected. */
  protected readonly titleContent = computed(
    () => this.projectedTitle()?.template ?? null,
  );

  /** The period's name — "May 2026", "18–24 May 2026", "Wednesday 20 May 2026". */
  protected readonly title = computed(() =>
    foldViewTitle(
      this.view(),
      this.date(),
      this.chrome.locale(),
      this.anchor(),
    ),
  );

  /** The period the title stands for — handed to a projected title template. */
  protected readonly range = computed(() =>
    foldRangeForView(this.view(), this.date(), this.anchor()),
  );

  protected readonly options = computed<readonly FoldViewToggleOption[]>(() => {
    const labels = this.chrome.l();
    const named: Record<string, string> = {
      month: labels.viewMonth,
      week: labels.viewWeek,
      day: labels.viewDay,
      list: labels.viewList,
    };
    return this.views().map((view) =>
      typeof view === "string"
        ? { value: view, label: named[view] ?? view }
        : { value: view.value, label: view.label },
    );
  });

  /** Pages by one period in the units the current view reads in. */
  protected shift(delta: number): void {
    this.date.set(
      foldShiftDate(this.view(), this.date(), delta, this.anchor()),
    );
  }

  protected goToday(): void {
    this.date.set(this.today() ?? foldToday());
  }

  /** The switch emits a bare `string`; only a view it actually offers is kept. */
  protected onViewChange(value: string): void {
    const offered = this.options().some((option) => option.value === value);
    if (offered) {
      this.view.set(value);
    }
  }
}
