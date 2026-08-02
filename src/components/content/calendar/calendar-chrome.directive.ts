import {
  Directive,
  computed,
  contentChild,
  inject,
  input,
} from "@angular/core";

import { FoldCalendarEventDirective } from "./calendar-event.directive";
import {
  foldFormatDate,
  foldFormatRange,
  type FoldCalendarFormat,
} from "./calendar-format";
import type { FoldCalendarDate } from "./calendar-date";
import {
  FOLD_CALENDAR_LABELS,
  type FoldCalendarLabels,
} from "./calendar-labels";

/**
 * The three things every calendar view needs and none of them is about: its
 * labels, its locale, and the chip template a consumer may have projected.
 *
 * Applied through `hostDirectives`, so `locale` and `labels` are still ordinary
 * inputs on `<fold-calendar-month>`, `<fold-calendar-week>` and the rest — the
 * consumer sees no difference, and the five views stop carrying five identical
 * copies of the same eight lines.
 *
 * Internal — a view exposes it, it is never applied by hand.
 *
 * @example
 * ```ts
 * @Component({
 *   hostDirectives: [
 *     { directive: FoldCalendarChromeDirective, inputs: ['locale', 'labels'] },
 *   ],
 * })
 * export class FoldCalendarWeekComponent<T = unknown> {
 *   protected readonly chrome = inject(FoldCalendarChromeDirective);
 * }
 * ```
 */
@Directive({ standalone: true })
export class FoldCalendarChromeDirective {
  /** BCP-47 tag driving every `Intl` name; omitted, the runtime default. */
  readonly locale = input<string>();
  /** Per-instance label overrides, merged over the app-wide (or English) set. */
  readonly labels = input<Partial<FoldCalendarLabels>>();

  private readonly injectedLabels = inject(FOLD_CALENDAR_LABELS);
  private readonly projectedEvent = contentChild(FoldCalendarEventDirective);

  /** Effective labels — the app-wide (or English) set, with `labels` on top. */
  readonly l = computed<FoldCalendarLabels>(() => ({
    ...this.injectedLabels,
    ...this.labels(),
  }));

  /** The custom chip template, when one is projected. */
  readonly eventContent = computed(
    () => this.projectedEvent()?.template ?? null,
  );

  /** One date, in this view's locale. */
  format(date: FoldCalendarDate, format: FoldCalendarFormat): string {
    return foldFormatDate(date, this.locale(), format);
  }

  /** A span, in this view's locale. */
  formatRange(
    from: FoldCalendarDate,
    to: FoldCalendarDate,
    format: FoldCalendarFormat,
  ): string {
    return foldFormatRange(from, to, this.locale(), format);
  }
}
