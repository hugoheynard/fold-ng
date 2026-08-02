import { Directive, TemplateRef, inject } from "@angular/core";

import type { FoldCalendarDate } from "./date";
import type { FoldCalendarDay, FoldCalendarEvent } from "./types";

/**
 * The containers a calendar draws around its events, opened up as templates.
 *
 * The chip has always been replaceable ({@link FoldCalendarEventDirective});
 * these are the four places an app reaches for next — the cell behind the
 * chips, the heading above them, the period title, and the chip standing for
 * what did not fit. Each is a plain `<ng-template>` with a typed context, so
 * replacing one costs nothing and leaves the rest of the view alone.
 */

/** What a day-cell template is handed. */
export interface FoldCalendarDayContext {
  /** The cell to render — `let-day`. Carries its own counts and flags. */
  readonly $implicit: FoldCalendarDay;
}

/**
 * Replaces the **inside of a month day cell** — by default just the day number.
 *
 * This is the hook for everything the calendar cannot know: a holiday marker, a
 * closure, "3/8 staffed", a price. The cell itself (the button, its focus
 * behaviour, its accessible name) stays the calendar's job.
 *
 * ```html
 * <ng-template foldCalendarDay let-day>
 *   <span>{{ day.dayOfMonth }}</span>
 *   @if (closed(day.date)) { <fold-icon name="lock" size="xs" /> }
 * </ng-template>
 * ```
 *
 * @selector `ng-template[foldCalendarDay]`
 */
@Directive({ selector: "ng-template[foldCalendarDay]", standalone: true })
export class FoldCalendarDayDirective {
  readonly template = inject<TemplateRef<FoldCalendarDayContext>>(TemplateRef);

  static ngTemplateContextGuard(
    _directive: FoldCalendarDayDirective,
    context: unknown,
  ): context is FoldCalendarDayContext {
    // Compile-time only — Angular never calls this; the narrowing is the point.
    return context !== undefined;
  }
}

/** What a day-heading template is handed. */
export interface FoldCalendarHeadingContext<T> {
  /** The day being headed — `let-date`. */
  readonly $implicit: FoldCalendarDate;
  /** The events filed under it, so a heading can count or summarise them. */
  readonly events: readonly FoldCalendarEvent<T>[];
}

/**
 * Replaces the **day heading** of the agenda rail — by default a big day number
 * with a relative name beside it. Where an app puts a per-day count, a total,
 * or a quick action.
 *
 * @selector `ng-template[foldCalendarHeading]`
 */
@Directive({ selector: "ng-template[foldCalendarHeading]", standalone: true })
export class FoldCalendarHeadingDirective<T = unknown> {
  readonly template =
    inject<TemplateRef<FoldCalendarHeadingContext<T>>>(TemplateRef);

  static ngTemplateContextGuard<T>(
    _directive: FoldCalendarHeadingDirective<T>,
    context: unknown,
  ): context is FoldCalendarHeadingContext<T> {
    // Compile-time only — Angular never calls this; the narrowing is the point.
    return context !== undefined;
  }
}

/** What a toolbar-title template is handed. */
export interface FoldCalendarTitleContext {
  /** The period name the toolbar would have rendered — `let-title`. */
  readonly $implicit: string;
  /** First day of the period on display. */
  readonly from: FoldCalendarDate;
  /** Last day of the period on display. */
  readonly to: FoldCalendarDate;
  /** The view the period belongs to. */
  readonly view: string;
}

/**
 * Replaces the toolbar's **period title** — by default an `<h2>` holding
 * `foldViewTitle()`. Project one to change the wording, or to give the title a
 * heading level that fits the page's outline.
 *
 * @selector `ng-template[foldCalendarTitle]`
 */
@Directive({ selector: "ng-template[foldCalendarTitle]", standalone: true })
export class FoldCalendarTitleDirective {
  readonly template =
    inject<TemplateRef<FoldCalendarTitleContext>>(TemplateRef);

  static ngTemplateContextGuard(
    _directive: FoldCalendarTitleDirective,
    context: unknown,
  ): context is FoldCalendarTitleContext {
    // Compile-time only — Angular never calls this; the narrowing is the point.
    return context !== undefined;
  }
}

/** What an overflow-chip template is handed. */
export interface FoldCalendarOverflowContext {
  /** How many events this day could not show — `let-count`. */
  readonly $implicit: number;
  /** The day they belong to. */
  readonly date: FoldCalendarDate;
}

/**
 * Replaces the month view's **`+N` chip** — by default a small text button.
 * Where an app puts an avatar stack, or the trigger of a "see all" popover.
 *
 * @selector `ng-template[foldCalendarOverflow]`
 */
@Directive({ selector: "ng-template[foldCalendarOverflow]", standalone: true })
export class FoldCalendarOverflowDirective {
  readonly template =
    inject<TemplateRef<FoldCalendarOverflowContext>>(TemplateRef);

  static ngTemplateContextGuard(
    _directive: FoldCalendarOverflowDirective,
    context: unknown,
  ): context is FoldCalendarOverflowContext {
    // Compile-time only — Angular never calls this; the narrowing is the point.
    return context !== undefined;
  }
}
