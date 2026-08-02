import { NgTemplateOutlet } from "@angular/common";
import { Component, computed, inject, input, output } from "@angular/core";

import { FoldIconComponent } from "../../foundations/icon/icon.component";
import { FoldCalendarChromeDirective } from "./calendar-chrome.directive";
import type { FoldCalendarDate } from "./calendar-date";
import { foldEventsOnDay } from "./calendar-filters";
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
 * ## Outputs
 * | Output       | Payload                | Fires on |
 * |--------------|------------------------|----------|
 * | `eventClick` | `FoldCalendarEvent<T>` | A chip activated. |
 *
 * ## Slots
 * | Selector                       | Region |
 * |--------------------------------|--------|
 * | `button[empty]`, `a[empty]`, `div[empty]` | Under the empty message — the place for a "new request" action. |
 * | *(default)*                    | After the list. |
 *
 * The `empty` slot is **tag-qualified** (rule 4.8): `empty` is also an input on
 * `fold-field` and `fold-data-table`, and a bare `[empty]` selector would
 * capture either of them whole.
 *
 * ## Theming
 * | CSS variable                       | Default | Sets |
 * |------------------------------------|---------|------|
 * | `--fold-calendar-day-number-size`  | `--fold-text-3xl` | The big day number. |
 * | `--fold-calendar-bar-width`        | `3px`   | The tone bar down a chip's leading edge. |
 * | `--fold-calendar-band-radius`      | `--fold-radius-sm` | Chip corners. |
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
  hostDirectives: [
    { directive: FoldCalendarChromeDirective, inputs: ["locale", "labels"] },
  ],
})
export class FoldCalendarDayComponent<T = unknown> {
  /** The day on display. */
  readonly date = input.required<FoldCalendarDate>();
  /** Events to filter down to this day. */
  readonly events = input<readonly FoldCalendarEvent<T>[]>([]);
  /** The day to mark as today. */
  readonly today = input<FoldCalendarDate>();

  /** A chip was activated. */
  readonly eventClick = output<FoldCalendarEvent<T>>();

  /** Labels, locale and the projected chip template — see the directive. */
  protected readonly chrome = inject(FoldCalendarChromeDirective);

  protected readonly dayEvents = computed<readonly FoldCalendarEvent<T>[]>(() =>
    foldEventsOnDay(this.events(), this.date()),
  );

  protected readonly isToday = computed(() => this.date() === this.today());

  /** `Saturday` — the weekday alone; the month sits beside the number. */
  protected readonly weekdayName = computed(() =>
    this.chrome.format(this.date(), "weekdayLong"),
  );

  /** `May` — read with the day number, which is why it is not in the line above. */
  protected readonly monthName = computed(() =>
    this.chrome.format(this.date(), "monthLong"),
  );

  protected readonly dayOfMonth = computed(() =>
    Number(this.date().slice(8, 10)),
  );

  /** The header's accessible name: the full date, plus the today marker. */
  protected readonly headerLabel = computed(() => {
    const full = this.chrome.format(this.date(), "dateFull");
    return this.isToday() ? `${full}, ${this.chrome.l().today}` : full;
  });
}
