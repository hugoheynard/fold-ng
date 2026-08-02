import { NgTemplateOutlet } from "@angular/common";
import {
  Component,
  computed,
  contentChild,
  inject,
  input,
  output,
} from "@angular/core";

import { FoldIconComponent } from "../../foundations/icon/icon.component";
import { foldToNativeDate, type FoldCalendarDate } from "./calendar-date";
import { FoldCalendarEventDirective } from "./calendar-event.directive";
import {
  FOLD_CALENDAR_LABELS,
  type FoldCalendarLabels,
} from "./calendar-labels";
import { foldEventsOnDay } from "./calendar-layout";
import type { FoldCalendarEvent } from "./calendar.types";

/**
 * `<fold-calendar-day>` — one day, its events listed in full.
 *
 * The end of the drill-down: where the month view has room only for a label,
 * this one has room for the subline too, so it is the view a `dayClick`
 * naturally lands on.
 *
 * ## Inputs
 * | Input    | Type                     | Default | Meaning |
 * |----------|--------------------------|---------|---------|
 * | `date`   | `FoldCalendarDate`       | —       | The day on display. |
 * | `events` | `FoldCalendarEvent<T>[]` | `[]`    | Filtered to those covering `date`. |
 * | `today`  | `FoldCalendarDate`       | —       | Marks the header when it matches. |
 * | `locale` | `string`                 | runtime | Drives the header through `Intl`. |
 * | `labels` | `Partial<FoldCalendarLabels>` | — | Per-instance label overrides. |
 *
 * ## Slots
 * | Attribute | Region |
 * |-----------|--------|
 * | `empty`   | Rendered under the empty message — the place for a "new request" action. |
 *
 * @selector `fold-calendar-day`
 *
 * @example
 * ```html
 * <fold-calendar-day [date]="date()" [events]="events()" [today]="today">
 *   <button empty foldButton (click)="request()">New request</button>
 * </fold-calendar-day>
 * ```
 */
@Component({
  selector: "fold-calendar-day",
  standalone: true,
  imports: [NgTemplateOutlet, FoldIconComponent],
  templateUrl: "./calendar-day.component.html",
  styleUrl: "./calendar-day.component.scss",
})
export class FoldCalendarDayComponent<T> {
  /** The day on display. */
  readonly date = input.required<FoldCalendarDate>();
  /** Events to filter down to this day. */
  readonly events = input<readonly FoldCalendarEvent<T>[]>([]);
  /** The day to mark as today. */
  readonly today = input<FoldCalendarDate>();
  /** BCP-47 tag for the header. */
  readonly locale = input<string>();
  /** Per-instance label overrides (merged over the app-wide / English defaults). */
  readonly labels = input<Partial<FoldCalendarLabels>>();

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

  protected readonly dayEvents = computed<readonly FoldCalendarEvent<T>[]>(() =>
    foldEventsOnDay(this.events(), this.date()),
  );

  protected readonly isToday = computed(() => this.date() === this.today());

  protected readonly weekdayName = computed(() =>
    new Intl.DateTimeFormat(this.locale(), {
      weekday: "long",
      month: "long",
      timeZone: "UTC",
    }).format(foldToNativeDate(this.date())),
  );

  protected readonly dayOfMonth = computed(() =>
    Number(this.date().slice(8, 10)),
  );

  /** The header's accessible name: the full date, plus the today marker. */
  protected readonly headerLabel = computed(() => {
    const full = new Intl.DateTimeFormat(this.locale(), {
      dateStyle: "long",
      timeZone: "UTC",
    }).format(foldToNativeDate(this.date()));
    return this.isToday() ? `${full}, ${this.l().today}` : full;
  });
}
