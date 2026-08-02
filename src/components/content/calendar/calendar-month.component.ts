import { NgTemplateOutlet } from "@angular/common";
import {
  Component,
  ElementRef,
  booleanAttribute,
  computed,
  contentChild,
  effect,
  inject,
  input,
  model,
  output,
  signal,
} from "@angular/core";

import type { FoldIconName } from "../../foundations/icon/builtin-icons";
import { FoldIconComponent } from "../../foundations/icon/icon.component";
import {
  foldAddDays,
  foldStartOfWeek,
  foldToNativeDate,
  type FoldCalendarDate,
  type FoldWeekday,
} from "./calendar-date";
import { FoldCalendarEventDirective } from "./calendar-event.directive";
import { foldCalendarNextFocus, foldFocusDayCell } from "./calendar-keyboard";
import {
  FOLD_CALENDAR_LABELS,
  type FoldCalendarLabels,
} from "./calendar-labels";
import { foldBuildMonthGrid, foldEventsOnDay } from "./calendar-layout";
import type {
  FoldCalendarBand,
  FoldCalendarDay,
  FoldCalendarEvent,
  FoldCalendarWeek,
} from "./calendar.types";

/** A Monday, used only to walk seven weekday names out of `Intl`. */
const WEEKDAY_SAMPLE = "2026-01-05";

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
 * | Input          | Type                      | Default | Meaning |
 * |----------------|---------------------------|---------|---------|
 * | `month`        | `FoldCalendarDate`        | —       | **Two-way.** Any date in the month on display; keyboard paging writes back. |
 * | `events`       | `FoldCalendarEvent<T>[]`  | `[]`    | What to plot. Anything outside the grid is ignored. |
 * | `today`        | `FoldCalendarDate`        | —       | The day to mark. Omitted, nothing is marked — pass `foldToday()`. |
 * | `weekStartsOn` | `FoldWeekday`             | `'mon'` | Column order and which pair reads as the weekend. |
 * | `maxLanes`     | `number`                  | `3`     | Bands a week stacks before the rest collapse into an overflow chip. |
 * | `fixedWeeks`   | `boolean`                 | `false` | Always six rows, so the grid keeps one height across months. |
 * | `locale`       | `string`                  | runtime | Drives month/weekday names through `Intl`. |
 * | `labels`       | `Partial<FoldCalendarLabels>` | — | Per-instance overrides of the chrome strings. |
 *
 * ## Outputs
 * | Output          | Payload                | Fires on |
 * |-----------------|------------------------|----------|
 * | `dayClick`      | `FoldCalendarDate`     | A day cell activated by click, `Enter` or `Space`. |
 * | `eventClick`    | `FoldCalendarEvent<T>` | A band clicked. Grouped bands emit their representative. |
 * | `overflowClick` | `FoldCalendarWeek<T>`  | The `+N` chip — the week is handed over so the caller can show what was hidden. |
 *
 * ## Custom chips
 * Project an `<ng-template foldCalendarEvent let-event let-band="band">` to
 * replace the built-in icon + label + count row. See
 * {@link FoldCalendarEventDirective}.
 *
 * ## Accessibility
 * The **date grid** is the ARIA structure: `role="grid"` over rows of
 * `gridcell` day buttons, with one roving tab stop (the focused day, else
 * today, else the 1st) and the grid pattern on the arrow keys — horizontal
 * steps a day, vertical steps a week, `Home`/`End` snap to the week, and
 * `PageUp`/`PageDown` page the month, writing back through `month`.
 *
 * Bands cannot be `gridcell`s — they span columns, which is the whole point —
 * so they are **`aria-hidden` mouse affordances**, and each day cell instead
 * announces its date, the today marker and its **event count**. Nothing is
 * silent, and the grid stays a valid grid; the accessible path into an
 * individual event is `dayClick` into a day or list view.
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
})
export class FoldCalendarMonthComponent<T> {
  /** Any date inside the month on display. Two-way: keyboard paging writes back. */
  readonly month = model.required<FoldCalendarDate>();
  /** Events to plot; those missing the grid entirely are ignored. */
  readonly events = input<readonly FoldCalendarEvent<T>[]>([]);
  /** The day to mark as today. Omit and none is marked (an SSR-stable default). */
  readonly today = input<FoldCalendarDate>();
  /** Day the weeks start on. @default 'mon' */
  readonly weekStartsOn = input<FoldWeekday>("mon");
  /** Bands a week stacks before the rest collapse into the overflow chip. @default 3 */
  readonly maxLanes = input(3);
  /** Always emit six rows, so the grid keeps one height across months. */
  readonly fixedWeeks = input(false, { transform: booleanAttribute });
  /** BCP-47 tag for the month and weekday names; omitted, the runtime default. */
  readonly locale = input<string>();
  /** Per-instance label overrides (merged over the app-wide / English defaults). */
  readonly labels = input<Partial<FoldCalendarLabels>>();

  /** A day cell was activated. */
  readonly dayClick = output<FoldCalendarDate>();
  /** A band was clicked; a grouped band emits its representative event. */
  readonly eventClick = output<FoldCalendarEvent<T>>();
  /** A `+N` chip was clicked, with the day whose events overflowed. */
  readonly overflowClick = output<FoldCalendarDate>();

  private readonly host = inject(ElementRef);
  private readonly injectedLabels = inject(FOLD_CALENDAR_LABELS);
  private readonly projectedEvent = contentChild(FoldCalendarEventDirective);

  /** The day holding focus, once the user has moved it. */
  private readonly focusedDate = signal<FoldCalendarDate | null>(null);
  /** A day to focus once the grid has re-rendered around a new month. */
  private readonly deferredFocus = signal<FoldCalendarDate | null>(null);

  /** Effective labels — the app-wide (or English) set, with `labels` on top. */
  protected readonly l = computed<FoldCalendarLabels>(() => ({
    ...this.injectedLabels,
    ...this.labels(),
  }));

  /** The custom chip template, when one is projected. */
  protected readonly eventContent = computed(
    () => this.projectedEvent()?.template ?? null,
  );

  /** The laid-out grid: week rows, their days, and their packed bands. */
  protected readonly weeks = computed<readonly FoldCalendarWeek<T>[]>(() =>
    foldBuildMonthGrid(this.events(), {
      month: this.month(),
      weekStartsOn: this.weekStartsOn(),
      maxLanes: this.maxLanes(),
      fixedWeeks: this.fixedWeeks(),
      today: this.today(),
    }),
  );

  /** Column headers, walked out of `Intl` so every locale comes for free. */
  protected readonly weekdayNames = computed<readonly string[]>(() => {
    const format = new Intl.DateTimeFormat(this.locale(), {
      weekday: "short",
      timeZone: "UTC",
    });
    const anchor = foldStartOfWeek(WEEKDAY_SAMPLE, this.weekStartsOn());
    return Array.from({ length: 7 }, (_unused, offset) =>
      format.format(foldToNativeDate(foldAddDays(anchor, offset))),
    );
  });

  /**
   * Row track sizes: the day-number row, one row per lane, then the overflow
   * row. Both heights are themeable knobs, which is why they are `var()`s with
   * a default rather than literals.
   */
  protected readonly rowTemplate = computed(
    () =>
      `var(--fold-calendar-header-row, 30px) repeat(${this.maxLanes()}, var(--fold-calendar-lane, 22px)) auto`,
  );

  /** The overflow chip's row — always the one after the last lane. */
  protected readonly overflowRow = computed(() => this.maxLanes() + 2);

  private readonly dayFormatter = computed(
    () =>
      new Intl.DateTimeFormat(this.locale(), {
        dateStyle: "long",
        timeZone: "UTC",
      }),
  );

  /** Every date the grid currently shows — the bound focus may not leave. */
  private readonly gridDates = computed<ReadonlySet<FoldCalendarDate>>(
    () =>
      new Set(this.weeks().flatMap((week) => week.days.map((day) => day.date))),
  );

  /**
   * The single tab stop: the focused day while it is on screen, else today
   * while it is on screen, else the 1st of the month — so a month change never
   * strands the grid without a tab stop.
   */
  private readonly activeDate = computed<FoldCalendarDate | null>(() => {
    const dates = this.gridDates();
    const focused = this.focusedDate();
    if (focused !== null && dates.has(focused)) {
      return focused;
    }
    const today = this.today();
    if (today !== undefined && dates.has(today)) {
      return today;
    }
    const firstOfMonth = this.weeks()
      .flatMap((week) => week.days)
      .find((day) => day.inMonth);
    return firstOfMonth?.date ?? null;
  });

  constructor() {
    // Paging the month replaces the cells, so the day to focus does not exist
    // until the grid has re-rendered — hence the deferral.
    effect(() => {
      const target = this.deferredFocus();
      if (target === null) {
        return;
      }
      const root: unknown = this.host.nativeElement;
      if (!(root instanceof HTMLElement)) {
        return;
      }
      const cell = root.querySelector(`[data-fold-day="${target}"]`);
      if (cell instanceof HTMLElement) {
        cell.focus();
      }
    });
  }

  protected dayTabIndex(date: FoldCalendarDate): 0 | -1 {
    return date === this.activeDate() ? 0 : -1;
  }

  /** Events `column` lost to the lane budget, or `0` — falsy, so `@if` skips it. */
  protected hiddenOn(week: FoldCalendarWeek<T>, column: number): number {
    return week.hiddenByDay[column] ?? 0;
  }

  /** A day's accessible name: its date, the today marker, and what sits on it. */
  protected dayLabel(day: FoldCalendarDay): string {
    const parts = [this.dayFormatter().format(foldToNativeDate(day.date))];
    if (day.isToday) {
      parts.push(this.l().today);
    }
    const count = foldEventsOnDay(this.events(), day.date).length;
    if (count > 0) {
      parts.push(this.l().eventCount(count));
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
    this.focusedDate.set(date);
  }

  /**
   * Arrow keys walk the date axis. The move is applied in place when the target
   * is already on screen; when it falls outside, the month pages to it and the
   * focus is handed to the effect above.
   */
  protected onDayKeydown(event: KeyboardEvent, date: FoldCalendarDate): void {
    if (event.target !== event.currentTarget) {
      return;
    }
    const next = foldCalendarNextFocus(event.key, date, this.weekStartsOn());
    if (next === null) {
      return;
    }
    event.preventDefault();
    this.focusedDate.set(next);
    if (!foldFocusDayCell(event.target, next)) {
      this.month.set(next);
      this.deferredFocus.set(next);
    }
  }
}
