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
import { foldEventsInRange } from "./calendar-layout";
import type { FoldCalendarEvent } from "./calendar.types";

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
  templateUrl: "./calendar-list.component.html",
  styleUrl: "./calendar-list.component.scss",
})
export class FoldCalendarListComponent<T> {
  /** Source events. */
  readonly events = input<readonly FoldCalendarEvent<T>[]>([]);
  /** Range start, inclusive. Omit (with `to`) to list every event given. */
  readonly from = input<FoldCalendarDate>();
  /** Range end, inclusive. */
  readonly to = input<FoldCalendarDate>();
  /** BCP-47 tag for the span labels. */
  readonly locale = input<string>();
  /** Per-instance label overrides (merged over the app-wide / English defaults). */
  readonly labels = input<Partial<FoldCalendarLabels>>();

  /** A row was activated. */
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

  private readonly rangeFormatter = computed(
    () =>
      new Intl.DateTimeFormat(this.locale(), {
        day: "numeric",
        month: "short",
        timeZone: "UTC",
      }),
  );

  /**
   * The span, collapsed to one date when it covers a single day — `Intl`'s
   * own range formatter does that, and picks the locale's separator.
   */
  protected rangeLabel(event: FoldCalendarEvent<T>): string {
    return this.rangeFormatter().formatRange(
      foldToNativeDate(event.start),
      foldToNativeDate(event.end),
    );
  }
}
