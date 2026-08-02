import { NgTemplateOutlet } from "@angular/common";
import { Component, computed, inject, input, output } from "@angular/core";

import { FoldIconComponent } from "../../../foundations/icon/icon.component";
import { FoldCalendarChromeDirective } from "../core/chrome.directive";
import type { FoldCalendarDate } from "../core/date";
import { foldEventsInRange } from "../core/filters";
import type { FoldCalendarEvent } from "../core/types";

/**
 * `<fold-calendar-list>` — everything in a range, in date order.
 *
 * The flat reading of the same data: no grid, no packing, so nothing is ever
 * hidden behind a lane budget. Each row leads with the span it covers, which
 * is what the grid views can only imply.
 *
 * For a sortable, column-configurable table instead, feed
 * `foldEventsInRange()` straight into {@link FoldDataTableComponent} — this
 * view stays deliberately small.
 *
 * ## Inputs
 * | Input    | Type                     | Default | Meaning |
 * |----------|--------------------------|---------|---------|
 * | `events` | `FoldCalendarEvent<T>[]` | `[]`    | Source events. |
 * | `from`   | `FoldCalendarDate`       | —       | Range start; omit to list everything. |
 * | `to`     | `FoldCalendarDate`       | —       | Range end; omit to list everything. |
 * | `locale` | `string`                 | runtime | Drives the span labels through `Intl`. |
 * | `labels` | `Partial<FoldCalendarLabels>` | — | Per-instance label overrides. |
 *
 * ## Outputs
 * | Output       | Payload                | Fires on |
 * |--------------|------------------------|----------|
 * | `eventClick` | `FoldCalendarEvent<T>` | A row activated. |
 *
 * ## Theming
 * | CSS variable                       | Default | Sets |
 * |------------------------------------|---------|------|
 * | `--fold-calendar-list-date-width`  | `7rem`  | The leading date column — widen it for verbose locales. |
 * | `--fold-calendar-bar-width`        | `3px`   | The tone bar down a row's leading edge. |
 *
 * A projected `foldCalendarEvent` template replaces a row's **whole** inside,
 * as in every other view: the built-in bar and date belong to the default
 * rendering, not to the frame around it.
 *
 * @selector `fold-calendar-list`
 *
 * @example
 * ```html
 * <fold-calendar-list
 *   [events]="events()"
 *   [from]="range().from"
 *   [to]="range().to"
 *   (eventClick)="open($event)"
 * />
 * ```
 */
@Component({
  selector: "fold-calendar-list",
  standalone: true,
  imports: [NgTemplateOutlet, FoldIconComponent],
  templateUrl: "./list.component.html",
  styleUrl: "./list.component.scss",
  hostDirectives: [
    {
      directive: FoldCalendarChromeDirective,
      inputs: ["locale", "labels", "formats"],
    },
  ],
})
export class FoldCalendarListComponent<T = unknown> {
  /** Source events. */
  readonly events = input<readonly FoldCalendarEvent<T>[]>([]);
  /** Range start, inclusive. Omit (with `to`) to list every event given. */
  readonly from = input<FoldCalendarDate>();
  /** Range end, inclusive. */
  readonly to = input<FoldCalendarDate>();
  /** A row was activated. */
  readonly eventClick = output<FoldCalendarEvent<T>>();

  /** Labels, locale and the projected chip template — see the directive. */
  protected readonly chrome = inject(FoldCalendarChromeDirective);

  /** In range (when one is given), earliest first. */
  protected readonly rows = computed<readonly FoldCalendarEvent<T>[]>(() => {
    const from = this.from();
    const to = this.to();
    const scoped =
      from === undefined || to === undefined
        ? this.events()
        : foldEventsInRange(this.events(), from, to);
    return [...scoped].sort((a, b) =>
      a.start < b.start ? -1 : a.start > b.start ? 1 : 0,
    );
  });

  /**
   * The span, collapsed to one date when it covers a single day — `Intl`'s
   * own range formatter does that, and picks the locale's separator and its
   * order, which is why this is not a translatable label.
   */
  protected rangeLabel(event: FoldCalendarEvent<T>): string {
    return this.chrome.formatRange(event.start, event.end, "dayMonthShort");
  }
}
