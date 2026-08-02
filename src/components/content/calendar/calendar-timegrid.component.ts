import { NgTemplateOutlet } from "@angular/common";
import {
  Component,
  computed,
  inject,
  input,
  numberAttribute,
  output,
} from "@angular/core";

import { FoldIconComponent } from "../../foundations/icon/icon.component";
import { FoldCalendarChromeDirective } from "./calendar-chrome.directive";
import type { FoldCalendarDate, FoldWeekday } from "./calendar-date";
import { foldToMinutes, type FoldCalendarTime } from "./calendar-time";
import {
  foldBuildTimeGrid,
  type FoldCalendarBlock,
  type FoldTimeGridColumn,
} from "./calendar-timegrid";
import type { FoldCalendarBand, FoldCalendarEvent } from "./calendar.types";

/**
 * `<fold-calendar-timegrid>` — days as hour columns, with an all-day strip.
 *
 * The reading the other four cannot give: **when inside a day**. A meeting is a
 * block whose height is its duration and whose width is shared with whatever it
 * collides with; an absence is a band across the strip on top, spanning days
 * exactly as it does in the month view — the same packer draws both, so a
 * three-day leave request reads identically wherever it appears.
 *
 * Times are wall-clock `HH:mm`, never instants — the same decision as the date,
 * for the same reason. 09:00 is the hour on the wall; the app converts once at
 * its own boundary, and no zone can move a meeting after that.
 *
 * ## Inputs
 * | Input             | Type                     | Default   | Meaning |
 * |-------------------|--------------------------|-----------|---------|
 * | `date`            | `FoldCalendarDate`       | —         | Any date in the range. |
 * | `events`          | `FoldCalendarEvent<T>[]` | `[]`      | Timed events go on the clock, the rest on the strip. |
 * | `dayCount`        | `number`                 | `7`       | `1` is a day view, `7` a week. |
 * | `today`           | `FoldCalendarDate`       | —         | The column to mark. |
 * | `now`             | `FoldCalendarTime`       | —         | Draws the current-time line on `today`'s column. Passed in, never read from a clock — the package has none, and an SSR render must not invent one. |
 * | `dayStart`/`dayEnd` | `FoldCalendarTime`     | `00:00`/`24:00` | The visible window; `08:00`–`20:00` is a working day. |
 * | `weekStartsOn`    | `FoldWeekday`            | the locale's | Which day opens the week. |
 * | `weekendDays`     | `FoldWeekday[]`          | the locale's | Which columns are shaded. |
 * | `maxAllDayLanes`  | `number`                 | `2`       | Lanes the strip stacks before overflowing. |
 * | `locale`/`labels`/`formats` | —              | —         | See the other views. |
 *
 * ## Outputs
 * | Output       | Payload                | Fires on |
 * |--------------|------------------------|----------|
 * | `dayClick`   | `FoldCalendarDate`     | A column header activated. |
 * | `eventClick` | `FoldCalendarEvent<T>` | A block or an all-day band activated. |
 *
 * ## Theming
 * | CSS variable                          | Default | Sets |
 * |---------------------------------------|---------|------|
 * | `--fold-calendar-timegrid-height`     | `640px` | Height of the hour area. |
 * | `--fold-calendar-timegrid-gutter`     | `56px`  | Width of the hour labels. |
 * | `--fold-calendar-timegrid-lane`       | `20px`  | Height of one all-day lane. |
 * | `--fold-calendar-bar-width`           | `3px`   | The tone bar down a block's leading edge. |
 *
 * ## Accessibility
 * Every block and every band is a real `<button>` inside the column it belongs
 * to, so the tab order follows the day and this view needs none of the month
 * grid's roving-tabindex machinery. A block's accessible name carries its
 * **times**, which its position on the clock conveys only visually.
 *
 * @selector `fold-calendar-timegrid`
 *
 * @example
 * ```html
 * <fold-calendar-timegrid
 *   [date]="date()"
 *   [events]="events()"
 *   [today]="today"
 *   [now]="now()"
 *   dayStart="08:00"
 *   dayEnd="20:00"
 *   (eventClick)="open($event)"
 * />
 * ```
 */
@Component({
  selector: "fold-calendar-timegrid",
  standalone: true,
  imports: [NgTemplateOutlet, FoldIconComponent],
  templateUrl: "./calendar-timegrid.component.html",
  styleUrl: "./calendar-timegrid.component.scss",
  hostDirectives: [
    {
      directive: FoldCalendarChromeDirective,
      inputs: ["locale", "labels", "formats"],
    },
  ],
})
export class FoldCalendarTimegridComponent<T = unknown> {
  /** Any date inside the range on display. */
  readonly date = input.required<FoldCalendarDate>();
  /** Events to plot; timed ones on the clock, the rest on the strip. */
  readonly events = input<readonly FoldCalendarEvent<T>[]>([]);
  /** Days to show: `1` is a day view, `7` a week. @default 7 */
  readonly dayCount = input(7, { transform: numberAttribute });
  /** The day to mark as today. */
  readonly today = input<FoldCalendarDate>();
  /**
   * The current wall-clock time, for the "now" line. Passed in rather than
   * read: this package owns no clock (`today` works the same way), and a
   * server render that invented one would hydrate to a different position.
   */
  readonly now = input<FoldCalendarTime>();
  /** First hour on screen. @default '00:00' */
  readonly dayStart = input<FoldCalendarTime>("00:00");
  /** Last hour on screen. @default '24:00' */
  readonly dayEnd = input<FoldCalendarTime>("24:00");
  /** Day the week starts on. @default the locale's own first day */
  readonly weekStartsOn = input<FoldWeekday>();
  /** Days shaded as the weekend. @default the locale's own weekend */
  readonly weekendDays = input<readonly FoldWeekday[]>();
  /** Lanes the all-day strip stacks before events overflow. @default 2 */
  readonly maxAllDayLanes = input(2, { transform: numberAttribute });

  /** A column header was activated. */
  readonly dayClick = output<FoldCalendarDate>();
  /** A block or an all-day band was activated. */
  readonly eventClick = output<FoldCalendarEvent<T>>();

  /** Labels, locale and the projected chip template — see the directive. */
  protected readonly chrome = inject(FoldCalendarChromeDirective);

  protected readonly grid = computed(() =>
    foldBuildTimeGrid(this.events(), {
      date: this.date(),
      dayCount: this.dayCount(),
      weekStartsOn: this.chrome.anchor(this.weekStartsOn()),
      weekendDays: this.chrome.weekend(this.weekendDays()),
      today: this.today(),
      dayStart: this.dayStart(),
      dayEnd: this.dayEnd(),
      maxAllDayLanes: this.maxAllDayLanes(),
    }),
  );

  /** Lane rows for the all-day strip, or none when nothing spans. */
  protected readonly stripRows = computed(() => {
    const lanes = this.grid().allDay.reduce(
      (highest, band) => Math.max(highest, band.lane + 1),
      0,
    );
    return `repeat(${lanes}, var(--fold-calendar-timegrid-lane, 20px))`;
  });

  /** Where the "now" line sits, as a fraction of the window, or `null`. */
  protected readonly nowOffset = computed<number | null>(() => {
    const time = this.now();
    if (time === undefined) {
      return null;
    }
    const { startMinute, endMinute } = this.grid();
    const minute = foldToMinutes(time);
    if (minute < startMinute || minute > endMinute) {
      return null;
    }
    return (minute - startMinute) / (endMinute - startMinute);
  });

  protected weekdayName(column: FoldTimeGridColumn<T>): string {
    return this.chrome.format(column.day.date, "weekdayShort");
  }

  protected hourLabel(hour: FoldCalendarTime): string {
    return this.chrome.formatTime(hour);
  }

  /** A column's accessible name: its date, the today marker, and its load. */
  protected columnLabel(column: FoldTimeGridColumn<T>): string {
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

  /**
   * A block's accessible name — its times first, because where it sits on the
   * clock is information a screen reader has no other way to get.
   */
  protected blockLabel(block: FoldCalendarBlock<T>): string {
    const { startTime, endTime, label } = block.event;
    if (startTime === undefined || endTime === undefined) {
      return label;
    }
    return `${this.chrome.formatTime(startTime)} – ${this.chrome.formatTime(endTime)}, ${label}`;
  }

  /** A band's text: the group's label when it stands for several events. */
  protected bandLabel(band: FoldCalendarBand<T>): string {
    if (band.groupSize > 1) {
      return band.event.groupLabel ?? band.event.label;
    }
    return band.event.label;
  }
}
