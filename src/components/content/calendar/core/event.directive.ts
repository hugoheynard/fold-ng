import { Directive, TemplateRef, inject } from "@angular/core";

import type { FoldCalendarBand, FoldCalendarEvent } from "./types";

/** What an event template is handed. */
export interface FoldCalendarEventContext<T> {
  /** The event to render — `let-event`. */
  readonly $implicit: FoldCalendarEvent<T>;
  /**
   * The laid-out segment in the month view, `null` in the column views — so a
   * template can react to a continuation edge where there is one, and does not
   * have to pretend there is one where there is not.
   */
  readonly band: FoldCalendarBand<T> | null;
}

/**
 * Marks an `<ng-template>` as the renderer for every event chip inside a
 * calendar view, replacing the built-in icon + label + count row:
 *
 * ```html
 * <fold-calendar-month [(month)]="month" [events]="events()">
 *   <ng-template foldCalendarEvent let-event let-band="band">
 *     <fold-avatar [name]="event.data.owner" size="xs" />
 *     <span>{{ event.label }}</span>
 *   </ng-template>
 * </fold-calendar-month>
 * ```
 *
 * `let-event` and `let-band` are **fully typed** under `strictTemplates`: the
 * directive is generic over the same `T` as the events it renders, and its
 * context guard carries that through, so `event.data` is the app's own record
 * with no cast.
 *
 * @selector `ng-template[foldCalendarEvent]`
 */
@Directive({
  selector: "ng-template[foldCalendarEvent]",
  standalone: true,
})
export class FoldCalendarEventDirective<T = unknown> {
  readonly template =
    inject<TemplateRef<FoldCalendarEventContext<T>>>(TemplateRef);

  /** Teaches the template checker what `let-event` and `let-band` are. */
  static ngTemplateContextGuard<T>(
    _directive: FoldCalendarEventDirective<T>,
    context: unknown,
  ): context is FoldCalendarEventContext<T> {
    // Compile-time only — Angular never calls this; the narrowing is the point.
    return context !== undefined;
  }
}
