import { NgTemplateOutlet } from "@angular/common";
import { Component, computed, inject, input, output } from "@angular/core";

import { FoldIconComponent } from "../../foundations/icon/icon.component";
import { FoldCalendarChromeDirective } from "./calendar-chrome.directive";
import { foldBuildWeek } from "./calendar-columns";
import type { FoldCalendarDate, FoldWeekday } from "./calendar-date";
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
 * | `date`         | `FoldCalendarDate`       | —       | Any date in the week on display. |
 * | `events`       | `FoldCalendarEvent<T>[]` | `[]`    | What to list. |
 * | `today`        | `FoldCalendarDate`       | —       | The day to mark. |
 * | `weekStartsOn` | `FoldWeekday`            | `'mon'` | Which day opens the week. |
 * | `weekendDays`  | `FoldWeekday[]`          | `['sat','sun']` | Which days are shaded. |
 * | `locale`       | `string`                 | runtime | Drives the column headers through `Intl`. |
 * | `labels`       | `Partial<FoldCalendarLabels>` | — | Per-instance label overrides. |
 *
 * `date` is a plain input, not a `model`: this view never pages itself, so
 * writing back would be a promise it does not keep. Pair it with
 * `<fold-calendar-toolbar>`, which does own the paging.
 *
 * ## Theming
 * | CSS variable                          | Default | Sets |
 * |---------------------------------------|---------|------|
 * | `--fold-calendar-week-column-height`  | `320px` | Height of the day columns. |
 * | `--fold-calendar-bar-width`           | `3px`   | The tone bar down a chip's leading edge. |
 * | `--fold-calendar-band-radius`         | `--fold-radius-sm` | Chip corners. |
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
  hostDirectives: [
    { directive: FoldCalendarChromeDirective, inputs: ["locale", "labels"] },
  ],
})
export class FoldCalendarWeekComponent<T = unknown> {
  /** Any date inside the week on display. */
  readonly date = input.required<FoldCalendarDate>();
  /** Events to list under the days they cover. */
  readonly events = input<readonly FoldCalendarEvent<T>[]>([]);
  /** The day to mark as today. */
  readonly today = input<FoldCalendarDate>();
  /** Day the week starts on. @default 'mon' */
  readonly weekStartsOn = input<FoldWeekday>("mon");
  /** Days shaded as the weekend. @default ['sat', 'sun'] */
  readonly weekendDays = input<readonly FoldWeekday[]>();

  /** A column header was activated. */
  readonly dayClick = output<FoldCalendarDate>();
  /** A chip was activated. */
  readonly eventClick = output<FoldCalendarEvent<T>>();

  /** Labels, locale and the projected chip template — see the directive. */
  protected readonly chrome = inject(FoldCalendarChromeDirective);

  protected readonly columns = computed<readonly FoldCalendarDayEvents<T>[]>(
    () =>
      foldBuildWeek(this.events(), {
        date: this.date(),
        weekStartsOn: this.weekStartsOn(),
        weekendDays: this.weekendDays(),
        today: this.today(),
      }),
  );

  protected weekdayName(column: FoldCalendarDayEvents<T>): string {
    return this.chrome.format(column.day.date, "weekdayShort");
  }

  /** A column's accessible name: its date, the today marker, and what sits on it. */
  protected columnLabel(column: FoldCalendarDayEvents<T>): string {
    const labels = this.chrome.l();
    const parts = [this.chrome.format(column.day.date, "dateFull")];
    if (column.day.isToday) {
      parts.push(labels.today);
    }
    if (column.day.eventCount > 0) {
      parts.push(labels.eventCount(column.day.eventCount));
    }
    return parts.join(", ");
  }
}
