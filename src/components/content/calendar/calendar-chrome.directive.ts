import {
  Directive,
  computed,
  contentChild,
  inject,
  input,
} from "@angular/core";

import type { FoldWeekday } from "./calendar-date";
import { FoldCalendarEventDirective } from "./calendar-event.directive";
import {
  foldFormatDate,
  foldFormatRange,
  foldFormatTime,
  type FoldCalendarFormat,
} from "./calendar-format";
import type { FoldCalendarDate } from "./calendar-date";
import {
  FOLD_CALENDAR_LABELS,
  type FoldCalendarLabels,
} from "./calendar-labels";
import { foldLocaleWeekInfo } from "./calendar-locale";

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
  /**
   * Per-instance `Intl` option overrides, merged over
   * {@link FOLD_CALENDAR_FORMATS}. Labels let a locale translate; this lets it
   * **reformat** — a numeric weekday header, a four-digit year, a narrow month.
   */
  readonly formats =
    input<Partial<Record<FoldCalendarFormat, Intl.DateTimeFormatOptions>>>();

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

  /**
   * What this locale says its week looks like — the default behind
   * `weekStartsOn` and `weekendDays`, so a calendar is right in Cairo and
   * Chicago without the caller having to know either.
   */
  readonly weekInfo = computed(() => foldLocaleWeekInfo(this.locale()));

  /** The anchor a view should use: the caller's, else the locale's. */
  anchor(explicit: FoldWeekday | undefined): FoldWeekday {
    return explicit ?? this.weekInfo().weekStartsOn;
  }

  /** The weekend a view should shade: the caller's, else the locale's. */
  weekend(
    explicit: readonly FoldWeekday[] | undefined,
  ): readonly FoldWeekday[] {
    return explicit ?? this.weekInfo().weekendDays;
  }

  /** One date, in this view's locale and its format overrides. */
  format(date: FoldCalendarDate, format: FoldCalendarFormat): string {
    return foldFormatDate(
      date,
      this.locale(),
      format,
      this.formats()?.[format],
    );
  }

  /** A wall-clock time, in this view's locale (24-hour, or AM/PM). */
  formatTime(time: string): string {
    return foldFormatTime(time, this.locale(), this.formats()?.hourMark);
  }

  /** A span, in this view's locale and its format overrides. */
  formatRange(
    from: FoldCalendarDate,
    to: FoldCalendarDate,
    format: FoldCalendarFormat,
  ): string {
    return foldFormatRange(
      from,
      to,
      this.locale(),
      format,
      this.formats()?.[format],
    );
  }
}
