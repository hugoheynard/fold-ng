import { NgTemplateOutlet } from "@angular/common";
import {
  Component,
  computed,
  contentChild,
  inject,
  input,
  model,
  numberAttribute,
  output,
} from "@angular/core";

import { FoldIconComponent } from "../../foundations/icon/icon.component";
import {
  foldBuildAgenda,
  foldCountActionable,
  foldIsActionable,
  type FoldCalendarActionable,
  type FoldCalendarAgendaGroup,
  type FoldCalendarAgendaMode,
} from "./calendar-agenda";
import { FoldCalendarChromeDirective } from "./calendar-chrome.directive";
import { foldDaysBetween, type FoldCalendarDate } from "./calendar-date";
import { FoldCalendarHeadingDirective } from "./calendar-slots.directive";
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
 * | `limit`     | `number`                 | `8`     | Days to show at most; what it cuts off is announced, not swallowed. |
 * | `isActionable` | `(event) => boolean`  | tones   | What the `todo` slice and the badge both count. |
 * | `locale`    | `string`                 | runtime | Drives the day names through `Intl`. |
 * | `labels`    | `Partial<FoldCalendarLabels>` | — | Per-instance label overrides. |
 *
 * ## Outputs
 * | Output       | Payload                | Fires on |
 * |--------------|------------------------|----------|
 * | `dayClick`   | `FoldCalendarDate`     | A day heading activated. |
 * | `eventClick` | `FoldCalendarEvent<T>` | A row activated. |
 *
 * ## Templates
 * | Directive             | Replaces |
 * |-----------------------|----------|
 * | `foldCalendarEvent`   | The inside of a row. |
 * | `foldCalendarHeading` | The day heading — where a per-day count or action goes. |
 *
 * ## Theming
 * | CSS variable                            | Default | Sets |
 * |-----------------------------------------|---------|------|
 * | `--fold-calendar-agenda-width`          | `320px` | Width of the expanded rail. |
 * | `--fold-calendar-agenda-height`         | `100%`  | Height — match a grid beside it, or pin it. |
 * | `--fold-calendar-agenda-spine-width`    | `44px`  | Width once collapsed. |
 * | `--fold-calendar-agenda-badge-size`     | `20px`  | The count badge. |
 * | `--fold-calendar-agenda-control-size`   | `26px`  | The collapse control. |
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
  hostDirectives: [
    {
      directive: FoldCalendarChromeDirective,
      inputs: ["locale", "labels", "formats"],
    },
  ],
})
export class FoldCalendarAgendaComponent<T = unknown> {
  /** The day "ahead" starts from. */
  readonly from = input.required<FoldCalendarDate>();
  /** Source events. */
  readonly events = input<readonly FoldCalendarEvent<T>[]>([]);
  /** Which slice is shown. @default 'todo' */
  readonly mode = model<FoldCalendarAgendaMode>("todo");
  /** Collapsed to a spine. @default false */
  readonly collapsed = model(false);
  /** Days to show at most. @default 8 */
  readonly limit = input(8, { transform: numberAttribute });
  /**
   * What counts as asking for attention — the `todo` slice **and** the badge,
   * from one definition, so the two can never disagree.
   * @default the `warning` and `alert` tones
   */
  readonly isActionable = input<FoldCalendarActionable<T>>(foldIsActionable);

  /** A day heading was activated. */
  readonly dayClick = output<FoldCalendarDate>();
  /** A row was activated. */
  readonly eventClick = output<FoldCalendarEvent<T>>();

  /** Labels, locale and the projected chip template — see the directive. */
  protected readonly chrome = inject(FoldCalendarChromeDirective);

  private readonly projectedHeading = contentChild(
    FoldCalendarHeadingDirective,
  );

  /** The custom day-heading template, when one is projected. */
  protected readonly headingContent = computed(
    () => this.projectedHeading()?.template ?? null,
  );

  private readonly agenda = computed(() =>
    foldBuildAgenda(this.events(), {
      from: this.from(),
      mode: this.mode(),
      limit: this.limit(),
      isActionable: this.isActionable(),
    }),
  );

  protected readonly groups = computed<readonly FoldCalendarAgendaGroup<T>[]>(
    () => this.agenda().groups,
  );

  /** Days `limit` cut off — "there is more" is not the same as "there is none". */
  protected readonly truncated = computed(() => this.agenda().truncated);

  /** How much is asking for attention — the rail's badge, in either mode. */
  protected readonly todoCount = computed(() =>
    foldCountActionable(this.events(), this.from(), this.isActionable()),
  );

  /** The rail's own name, and the one the collapsed spine repeats. */
  protected readonly title = computed(() =>
    this.mode() === "todo"
      ? this.chrome.l().agendaTodo
      : this.chrome.l().agendaUpcoming,
  );

  protected readonly emptyMessage = computed(() =>
    this.mode() === "todo"
      ? this.chrome.l().agendaEmptyTodo
      : this.chrome.l().agendaEmptyUpcoming,
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
      return this.chrome.l().relativeToday;
    }
    if (offset === 1) {
      return this.chrome.l().relativeTomorrow;
    }
    return this.chrome.format(group.date, "weekdayLong");
  }

  /** The month, shown only once the weekday alone stops being enough. */
  protected monthName(group: FoldCalendarAgendaGroup<T>): string {
    if (foldDaysBetween(this.from(), group.date) < NEAR_HORIZON) {
      return "";
    }
    return this.chrome.format(group.date, "monthShort");
  }

  protected toggleMode(mode: FoldCalendarAgendaMode): void {
    this.mode.set(mode);
  }

  protected toggleCollapsed(): void {
    this.collapsed.set(!this.collapsed());
  }
}
