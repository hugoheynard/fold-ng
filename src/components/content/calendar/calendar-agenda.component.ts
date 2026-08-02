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
  foldBuildAgenda,
  foldCountActionable,
  type FoldCalendarAgendaGroup,
  type FoldCalendarAgendaMode,
} from "./calendar-agenda";
import {
  foldDaysBetween,
  foldToNativeDate,
  type FoldCalendarDate,
} from "./calendar-date";
import { FoldCalendarEventDirective } from "./calendar-event.directive";
import {
  FOLD_CALENDAR_LABELS,
  type FoldCalendarLabels,
} from "./calendar-labels";
import type { FoldCalendarEvent } from "./calendar.types";

/** Days ahead within which a weekday name still reads faster than a date. */
const NEAR_HORIZON = 7;

/**
 * `<fold-calendar-agenda>` — a rail of what is still ahead, grouped by day.
 *
 * The counterpart to the grids: they answer "what does this month look like",
 * this answers "what do I do next". It carries a **`todo` slice** that keeps
 * only the events asking for attention (the `warning` and `alert` tones — the
 * same scale the chips paint with), so the rail doubles as a work queue with a
 * count.
 *
 * ## Inputs
 * | Input       | Type                     | Default | Meaning |
 * |-------------|--------------------------|---------|---------|
 * | `from`      | `FoldCalendarDate`       | —       | Where "ahead" starts; anything ending before it is past. |
 * | `events`    | `FoldCalendarEvent<T>[]` | `[]`    | Source events. |
 * | `mode`      | `'todo' \| 'all'`        | `'todo'` | **Two-way.** Which slice is shown. |
 * | `collapsed` | `boolean`                | `false` | **Two-way.** Collapsed to a spine — persist it if you want it to stick. |
 * | `limit`     | `number`                 | `8`     | Days to show at most. |
 * | `locale`    | `string`                 | runtime | Drives the day names through `Intl`. |
 * | `labels`    | `Partial<FoldCalendarLabels>` | — | Per-instance label overrides. |
 *
 * ## Outputs
 * | Output       | Payload                | Fires on |
 * |--------------|------------------------|----------|
 * | `dayClick`   | `FoldCalendarDate`     | A day heading activated. |
 * | `eventClick` | `FoldCalendarEvent<T>` | A row activated. |
 *
 * A day within the next week is named relatively — "Today", "Tomorrow", then
 * its weekday — because that reads faster than a date at this distance.
 *
 * @selector `fold-calendar-agenda`
 *
 * @example
 * ```html
 * <fold-calendar-agenda
 *   [from]="today"
 *   [events]="events()"
 *   [(mode)]="agendaMode"
 *   [(collapsed)]="agendaCollapsed"
 *   (eventClick)="open($event)"
 * />
 * ```
 */
@Component({
  selector: "fold-calendar-agenda",
  standalone: true,
  imports: [NgTemplateOutlet, FoldIconComponent],
  templateUrl: "./calendar-agenda.component.html",
  styleUrl: "./calendar-agenda.component.scss",
})
export class FoldCalendarAgendaComponent<T> {
  /** The day "ahead" starts from. */
  readonly from = input.required<FoldCalendarDate>();
  /** Source events. */
  readonly events = input<readonly FoldCalendarEvent<T>[]>([]);
  /** Which slice is shown. @default 'todo' */
  readonly mode = model<FoldCalendarAgendaMode>("todo");
  /** Collapsed to a spine. @default false */
  readonly collapsed = model(false);
  /** Days to show at most. @default 8 */
  readonly limit = input(8);
  /** BCP-47 tag for the day names. */
  readonly locale = input<string>();
  /** Per-instance label overrides (merged over the app-wide / English defaults). */
  readonly labels = input<Partial<FoldCalendarLabels>>();

  /** A day heading was activated. */
  readonly dayClick = output<FoldCalendarDate>();
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

  protected readonly groups = computed<readonly FoldCalendarAgendaGroup<T>[]>(
    () =>
      foldBuildAgenda(this.events(), {
        from: this.from(),
        mode: this.mode(),
        limit: this.limit(),
      }),
  );

  /** How much is asking for attention — the rail's badge, in either mode. */
  protected readonly todoCount = computed(() =>
    foldCountActionable(this.events(), this.from()),
  );

  protected readonly title = computed(() =>
    this.mode() === "todo" ? this.l().agendaTodo : this.l().agendaUpcoming,
  );

  protected readonly emptyMessage = computed(() =>
    this.mode() === "todo"
      ? this.l().agendaEmptyTodo
      : this.l().agendaEmptyUpcoming,
  );

  private readonly weekdayFormatter = computed(
    () =>
      new Intl.DateTimeFormat(this.locale(), {
        weekday: "long",
        timeZone: "UTC",
      }),
  );

  private readonly monthFormatter = computed(
    () =>
      new Intl.DateTimeFormat(this.locale(), {
        month: "short",
        timeZone: "UTC",
      }),
  );

  /** Day of the month, for the rail's number. */
  protected dayNumber(group: FoldCalendarAgendaGroup<T>): string {
    return group.date.slice(8, 10);
  }

  /**
   * "Today", "Tomorrow", then the weekday for the rest of the week — a name
   * beats a date while the day is still near.
   */
  protected relativeName(group: FoldCalendarAgendaGroup<T>): string {
    const offset = foldDaysBetween(this.from(), group.date);
    if (offset === 0) {
      return this.l().relativeToday;
    }
    if (offset === 1) {
      return this.l().relativeTomorrow;
    }
    return this.weekdayFormatter().format(foldToNativeDate(group.date));
  }

  /** The month, shown only once the weekday alone stops being enough. */
  protected monthName(group: FoldCalendarAgendaGroup<T>): string {
    if (foldDaysBetween(this.from(), group.date) < NEAR_HORIZON) {
      return "";
    }
    return this.monthFormatter().format(foldToNativeDate(group.date));
  }

  protected toggleMode(mode: FoldCalendarAgendaMode): void {
    this.mode.set(mode);
  }

  protected toggleCollapsed(): void {
    this.collapsed.set(!this.collapsed());
  }
}
