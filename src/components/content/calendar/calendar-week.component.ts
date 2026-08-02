import { NgTemplateOutlet } from "@angular/common";
import {
  Component,
  computed,
  contentChild,
  inject,
  input,
  model,
  output,
} from "@angular/core";

import { FoldIconComponent } from "../../foundations/icon/icon.component";
import {
  foldToNativeDate,
  type FoldCalendarDate,
  type FoldWeekday,
} from "./calendar-date";
import { FoldCalendarEventDirective } from "./calendar-event.directive";
import {
  FOLD_CALENDAR_LABELS,
  type FoldCalendarLabels,
} from "./calendar-labels";
import { foldBuildWeek } from "./calendar-layout";
import type {
  FoldCalendarDayEvents,
  FoldCalendarEvent,
} from "./calendar.types";

/**
 * `<fold-calendar-week>` — one week as seven day columns of stacked chips.
 *
 * Where the month view packs spans into lanes, a week simply lists what covers
 * each day: a three-day event appears under all three, which is the reading a
 * week is for. Nothing spans, so nothing is clipped and there is no overflow.
 *
 * ## Inputs
 * | Input          | Type                     | Default | Meaning |
 * |----------------|--------------------------|---------|---------|
 * | `date`         | `FoldCalendarDate`       | —       | **Two-way.** Any date in the week on display. |
 * | `events`       | `FoldCalendarEvent<T>[]` | `[]`    | What to list. |
 * | `today`        | `FoldCalendarDate`       | —       | The day to mark. |
 * | `weekStartsOn` | `FoldWeekday`            | `'mon'` | Which day opens the week. |
 * | `locale`       | `string`                 | runtime | Drives the column headers through `Intl`. |
 * | `labels`       | `Partial<FoldCalendarLabels>` | — | Per-instance label overrides. |
 *
 * ## Outputs
 * | Output       | Payload                | Fires on |
 * |--------------|------------------------|----------|
 * | `dayClick`   | `FoldCalendarDate`     | A column header activated. |
 * | `eventClick` | `FoldCalendarEvent<T>` | A chip activated. |
 *
 * ## Accessibility
 * Each column is a `<section>` named by its full date, holding a header button
 * and a list of chips. Because a chip sits **inside** the day it belongs to —
 * no spanning, no overlay — every control is a real child in the natural tab
 * order, so this view needs none of the month grid's roving-tabindex machinery
 * and every event is reachable by keyboard.
 *
 * @selector `fold-calendar-week`
 *
 * @example
 * ```html
 * <fold-calendar-week
 *   [(date)]="date"
 *   [events]="events()"
 *   [today]="today"
 *   (eventClick)="open($event)"
 * />
 * ```
 */
@Component({
  selector: "fold-calendar-week",
  standalone: true,
  imports: [NgTemplateOutlet, FoldIconComponent],
  templateUrl: "./calendar-week.component.html",
  styleUrl: "./calendar-week.component.scss",
})
export class FoldCalendarWeekComponent<T> {
  /** Any date inside the week on display. */
  readonly date = model.required<FoldCalendarDate>();
  /** Events to list under the days they cover. */
  readonly events = input<readonly FoldCalendarEvent<T>[]>([]);
  /** The day to mark as today. */
  readonly today = input<FoldCalendarDate>();
  /** Day the week starts on. @default 'mon' */
  readonly weekStartsOn = input<FoldWeekday>("mon");
  /** BCP-47 tag for the column headers. */
  readonly locale = input<string>();
  /** Per-instance label overrides (merged over the app-wide / English defaults). */
  readonly labels = input<Partial<FoldCalendarLabels>>();

  /** A column header was activated. */
  readonly dayClick = output<FoldCalendarDate>();
  /** A chip was activated. */
  readonly eventClick = output<FoldCalendarEvent<T>>();

  private readonly injectedLabels = inject(FOLD_CALENDAR_LABELS);
  private readonly projectedEvent = contentChild(FoldCalendarEventDirective);

  protected readonly l = computed<FoldCalendarLabels>(() => ({
    ...this.injectedLabels,
    ...this.labels(),
  }));

  protected readonly eventContent = computed(
    () => this.projectedEvent()?.template ?? null,
  );

  protected readonly columns = computed<readonly FoldCalendarDayEvents<T>[]>(
    () =>
      foldBuildWeek(this.events(), {
        date: this.date(),
        weekStartsOn: this.weekStartsOn(),
        today: this.today(),
      }),
  );

  private readonly weekdayFormatter = computed(
    () =>
      new Intl.DateTimeFormat(this.locale(), {
        weekday: "short",
        timeZone: "UTC",
      }),
  );

  private readonly fullFormatter = computed(
    () =>
      new Intl.DateTimeFormat(this.locale(), {
        dateStyle: "long",
        timeZone: "UTC",
      }),
  );

  protected weekdayName(column: FoldCalendarDayEvents<T>): string {
    return this.weekdayFormatter().format(foldToNativeDate(column.day.date));
  }

  /** A column's accessible name: its date, the today marker, and what sits on it. */
  protected columnLabel(column: FoldCalendarDayEvents<T>): string {
    const parts = [
      this.fullFormatter().format(foldToNativeDate(column.day.date)),
    ];
    if (column.day.isToday) {
      parts.push(this.l().today);
    }
    if (column.events.length > 0) {
      parts.push(this.l().eventCount(column.events.length));
    }
    return parts.join(", ");
  }
}
