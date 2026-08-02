import { NgTemplateOutlet } from "@angular/common";
import {
  Component,
  ElementRef,
  Injector,
  booleanAttribute,
  computed,
  contentChild,
  inject,
  input,
  model,
  numberAttribute,
  output,
} from "@angular/core";

import type { FoldIconName } from "../../foundations/icon/builtin-icons";
import { FoldIconComponent } from "../../foundations/icon/icon.component";
import { FoldCalendarChromeDirective } from "./calendar-chrome.directive";
import {
  foldAddDays,
  foldIsoWeek,
  foldStartOfWeek,
  type FoldCalendarDate,
  type FoldWeekday,
} from "./calendar-date";
import { FoldCalendarRovingFocus } from "./calendar-roving-focus";
import { foldBuildMonthGrid, foldClampLanes } from "./calendar-month-grid";
import {
  FoldCalendarDayDirective,
  FoldCalendarOverflowDirective,
} from "./calendar-slots.directive";
import type {
  FoldCalendarBand,
  FoldCalendarDay,
  FoldCalendarDayModifiers,
  FoldCalendarEvent,
  FoldCalendarWeek,
} from "./calendar.types";

/** A Monday, used only to walk seven weekday names out of `Intl`. */
const WEEKDAY_SAMPLE = "2026-01-05";

/** Keys that activate a day cell — the ones a `<button>` would have handled. */
const ACTIVATION_KEYS = new Set(["Enter", " ", "Spacebar"]);

/**
 * `<fold-calendar-month>` — a month grid where events span the days they cover.
 *
 * The grid is a **date axis**: seven columns of whole days, and over them a
 * layer of bands, each stretching from the column its event starts on to the
 * column it ends on. An event crossing a week boundary is drawn once per week
 * with an open edge on the side that continues, so a three-week holiday reads
 * as one thing rather than twenty-one chips.
 *
 * Dates are plain `YYYY-MM-DD` strings — see `calendar-date.ts` for why that,
 * and not `Date`.
 *
 * ## Inputs
 * | Input          | Type                          | Default       | Meaning |
 * |----------------|-------------------------------|---------------|---------|
 * | `month`        | `FoldCalendarDate`            | —             | **Two-way.** Any date in the month on display; keyboard paging writes back. |
 * | `events`       | `FoldCalendarEvent<T>[]`      | `[]`          | What to plot. Anything outside the grid is ignored. |
 * | `today`        | `FoldCalendarDate`            | —             | The day to mark. Omitted, nothing is marked — pass `foldToday()`. |
 * | `weekStartsOn` | `FoldWeekday`                 | the locale's   | Which day opens the row — `Intl.Locale` knows, so it is only an override. |
 * | `weekendDays`  | `FoldWeekday[]`               | the locale's   | Which days are shaded — a separate fact from the anchor, and also in the locale. |
 * | `showWeekNumbers` | `boolean`                  | `false`       | An ISO week number in a leading column. |
 * | `maxLanes`     | `number`                      | `3`           | Bands a week stacks before the rest collapse into overflow chips. |
 * | `fixedWeeks`   | `boolean`                     | `false`       | Always six rows, so the grid keeps one height across months. |
 * | `dayModifiers` | `(day) => string[]`           | —             | Extra names per cell, emitted as `data-fold-day-modifiers`. |
 * | `locale`       | `string`                      | runtime       | Drives month/weekday names through `Intl`. |
 * | `labels`       | `Partial<FoldCalendarLabels>` | —             | Per-instance overrides of the chrome strings. |
 *
 * ## Outputs
 * | Output          | Payload                | Fires on |
 * |-----------------|------------------------|----------|
 * | `dayClick`      | `FoldCalendarDate`     | A day cell activated by click, `Enter` or `Space`. |
 * | `eventClick`    | `FoldCalendarEvent<T>` | A band clicked. Grouped bands emit their representative. |
 * | `overflowClick` | `FoldCalendarDate`     | A `+N` chip — the **day** whose events overflowed, so the caller knows which one to open. |
 *
 * ## Templates
 * | Directive              | Replaces |
 * |------------------------|----------|
 * | `foldCalendarEvent`    | The inside of a band — icon + label + count. |
 * | `foldCalendarDay`      | The inside of a day cell — the day number. |
 * | `foldCalendarOverflow` | The `+N` chip. |
 *
 * ## Theming
 * | CSS variable                          | Default | Sets |
 * |---------------------------------------|---------|------|
 * | `--fold-calendar-month-header-row`    | `30px`  | Height of the day-number row. |
 * | `--fold-calendar-month-lane`          | `22px`  | Height of one band lane. |
 * | `--fold-calendar-month-row-min-height`| `112px` | Minimum height of a week row. |
 * | `--fold-calendar-month-daynum-size`   | `22px`  | The day number's round box. |
 * | `--fold-calendar-month-cell-padding`  | `--fold-space-sm` | Padding inside a day cell. |
 * | `--fold-calendar-month-week-number-width` | `34px` | The ISO week column, when shown. |
 * | `--fold-calendar-bar-width`           | `3px`   | The tone bar down a band's leading edge. |
 * | `--fold-calendar-band-radius`         | `--fold-radius-sm` | Band and chip corners. |
 * | `--fold-calendar-band-gutter`         | `--fold-space-xs` | Gap between a band and its cell edge. |
 *
 * ## Accessibility
 * The **date grid** is the ARIA structure: `role="grid"` over rows of
 * `gridcell` days, with one roving tab stop (the focused day, else today, else
 * the 1st) and the grid pattern on the arrow keys — horizontal steps a day,
 * vertical steps a week, `Home`/`End` snap to the week, and `PageUp`/`PageDown`
 * page the month, writing back through `month`.
 *
 * Bands cannot be `gridcell`s — they span columns, which is the whole point —
 * so they are **`aria-hidden` mouse affordances**, and each day cell instead
 * announces its date, the today marker, its **event count** and, when the lane
 * budget hid some, **how many it is not showing**.
 *
 * That makes `dayClick` **load-bearing, not optional**: it is the accessible
 * path into an individual event. A month that handles only `eventClick` is a
 * view whose events no keyboard can reach — wire `dayClick` to a day or list
 * view, as the gallery does.
 *
 * @selector `fold-calendar-month`
 *
 * @example
 * ```html
 * <fold-calendar-month
 *   [(month)]="month"
 *   [events]="events()"
 *   [today]="today"
 *   (dayClick)="openDay($event)"
 *   (eventClick)="openEvent($event)"
 * />
 * ```
 */
@Component({
  selector: "fold-calendar-month",
  standalone: true,
  imports: [NgTemplateOutlet, FoldIconComponent],
  templateUrl: "./calendar-month.component.html",
  styleUrl: "./calendar-month.component.scss",
  hostDirectives: [
    {
      directive: FoldCalendarChromeDirective,
      inputs: ["locale", "labels", "formats"],
    },
  ],
  host: {
    "data-fold-calendar": "",
    role: "grid",
    "[attr.aria-label]": "chrome.l().grid",
    "[class.has-week-numbers]": "showWeekNumbers()",
  },
})
export class FoldCalendarMonthComponent<T = unknown> {
  /** Any date inside the month on display. Two-way: keyboard paging writes back. */
  readonly month = model.required<FoldCalendarDate>();
  /** Events to plot; those missing the grid entirely are ignored. */
  readonly events = input<readonly FoldCalendarEvent<T>[]>([]);
  /** The day to mark as today. Omit and none is marked (an SSR-stable default). */
  readonly today = input<FoldCalendarDate>();
  /** Day the weeks start on. @default the locale's own first day */
  readonly weekStartsOn = input<FoldWeekday>();
  /** Days shaded as the weekend. @default the locale's own weekend */
  readonly weekendDays = input<readonly FoldWeekday[]>();
  /** Show the ISO week number in a leading column. */
  readonly showWeekNumbers = input(false, { transform: booleanAttribute });
  /** Bands a week stacks before the rest collapse into overflow chips. @default 3 */
  readonly maxLanes = input(3, { transform: numberAttribute });
  /** Always emit six rows, so the grid keeps one height across months. */
  readonly fixedWeeks = input(false, { transform: booleanAttribute });
  /** Extra names for a cell, emitted as `data-fold-day-modifiers`. */
  readonly dayModifiers = input<FoldCalendarDayModifiers>();

  /** A day cell was activated. */
  readonly dayClick = output<FoldCalendarDate>();
  /** A band was clicked; a grouped band emits its representative event. */
  readonly eventClick = output<FoldCalendarEvent<T>>();
  /** A `+N` chip was clicked, with the day whose events overflowed. */
  readonly overflowClick = output<FoldCalendarDate>();

  /** Labels, locale and the projected chip template — see the directive. */
  protected readonly chrome = inject(FoldCalendarChromeDirective);

  private readonly host = inject(ElementRef);
  private readonly projectedDay = contentChild(FoldCalendarDayDirective);
  private readonly projectedOverflow = contentChild(
    FoldCalendarOverflowDirective,
  );

  /** The custom day-cell template, when one is projected. */
  protected readonly dayContent = computed(
    () => this.projectedDay()?.template ?? null,
  );

  /** The custom overflow-chip template, when one is projected. */
  protected readonly overflowContent = computed(
    () => this.projectedOverflow()?.template ?? null,
  );

  /**
   * Lanes this grid stacks — clamped once, by the layout, and read back here so
   * the geometry and the CSS row template can never disagree.
   */
  private readonly lanes = computed(() => foldClampLanes(this.maxLanes()));

  /** The laid-out grid: week rows, their days, and their packed bands. */
  /** The anchor in force: the caller's, else the one the locale declares. */
  protected readonly anchor = computed(() =>
    this.chrome.anchor(this.weekStartsOn()),
  );

  protected readonly weeks = computed<readonly FoldCalendarWeek<T>[]>(() =>
    foldBuildMonthGrid(this.events(), {
      month: this.month(),
      weekStartsOn: this.anchor(),
      weekendDays: this.chrome.weekend(this.weekendDays()),
      maxLanes: this.lanes(),
      fixedWeeks: this.fixedWeeks(),
      today: this.today(),
    }),
  );

  /** Column headers, walked out of `Intl` so every locale comes for free. */
  protected readonly weekdayNames = computed<readonly string[]>(() => {
    const sample = foldStartOfWeek(WEEKDAY_SAMPLE, this.anchor());
    return Array.from({ length: 7 }, (_unused, offset) =>
      this.chrome.format(foldAddDays(sample, offset), "weekdayShort"),
    );
  });

  /**
   * Columns before the first day. The week-number column is a real grid column,
   * so everything placed by index — cells, bands, overflow chips — shifts with
   * it, and nothing has to know why.
   */
  protected readonly columnOffset = computed(() =>
    this.showWeekNumbers() ? 1 : 0,
  );

  /** The ISO week each row belongs to — always Monday-based, whatever the anchor. */
  protected weekNumber(week: FoldCalendarWeek<T>): number {
    return foldIsoWeek(week.start);
  }

  /**
   * Row track sizes: the day-number row, one row per lane, then the overflow
   * row. Both heights are themeable knobs, which is why they are `var()`s.
   */
  protected readonly rowTemplate = computed(
    () =>
      `var(--fold-calendar-month-header-row, 30px) repeat(${this.lanes()}, var(--fold-calendar-month-lane, 22px)) auto`,
  );

  /** The overflow chips' row — always the one after the last lane. */
  protected readonly overflowRow = computed(() => this.lanes() + 2);

  /** Every date the grid currently shows — the bound focus may not leave. */
  private readonly gridDates = computed<ReadonlySet<FoldCalendarDate>>(
    () =>
      new Set(this.weeks().flatMap((week) => week.days.map((day) => day.date))),
  );

  /** Where the tab stop sits before the user moves it: today, else the 1st. */
  private readonly defaultStop = computed<FoldCalendarDate | null>(() => {
    const today = this.today();
    if (today !== undefined && this.gridDates().has(today)) {
      return today;
    }
    return (
      this.weeks()
        .flatMap((week) => week.days)
        .find((day) => day.inMonth)?.date ?? null
    );
  });

  /** The grid's single tab stop and the arrow keys that move it. */
  private readonly focus = new FoldCalendarRovingFocus({
    dates: this.gridDates,
    fallback: this.defaultStop,
    weekStartsOn: this.anchor,
    root: () => this.rootElement(),
    page: (date) => this.month.set(date),
    injector: inject(Injector),
  });

  protected dayTabIndex(date: FoldCalendarDate): 0 | -1 {
    return this.focus.tabIndexFor(date);
  }

  /** A cell's caller-supplied names, as one `~=`-matchable attribute. */
  protected dayModifierAttr(day: FoldCalendarDay): string | null {
    const names = this.dayModifiers()?.(day) ?? [];
    return names.length === 0 ? null : names.join(" ");
  }

  /**
   * A day's accessible name: its date, the today marker, what sits on it, and
   * what the lane budget is keeping from it.
   */
  protected dayLabel(day: FoldCalendarDay): string {
    const labels = this.chrome.l();
    const parts = [this.chrome.format(day.date, "dateFull")];
    if (day.isToday) {
      parts.push(labels.today);
    }
    if (day.eventCount > 0) {
      parts.push(labels.eventCount(day.eventCount));
    }
    if (day.hiddenCount > 0) {
      parts.push(labels.hiddenCount(day.hiddenCount));
    }
    return parts.join(", ");
  }

  /** A band's text: the group's label when it stands for several events. */
  protected bandLabel(band: FoldCalendarBand<T>): string {
    if (band.groupSize > 1) {
      return band.event.groupLabel ?? band.event.label;
    }
    return band.event.label;
  }

  /** The leading glyph — suppressed on a continuation, which has no real start. */
  protected bandIcon(band: FoldCalendarBand<T>): FoldIconName | null {
    if (band.continuesBefore) {
      return null;
    }
    return band.event.icon ?? null;
  }

  protected onDayFocus(date: FoldCalendarDate): void {
    this.focus.onFocus(date);
  }

  /** A cell is not a `<button>`, so activation is wired by hand. */
  protected onDayKeydown(event: KeyboardEvent, date: FoldCalendarDate): void {
    if (event.target !== event.currentTarget) {
      return;
    }
    if (ACTIVATION_KEYS.has(event.key)) {
      event.preventDefault();
      this.dayClick.emit(date);
      return;
    }
    if (this.focus.move(event.key, date)) {
      event.preventDefault();
    }
  }

  private rootElement(): HTMLElement | null {
    const root: unknown = this.host.nativeElement;
    return root instanceof HTMLElement ? root : null;
  }
}
