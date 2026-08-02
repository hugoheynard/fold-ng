import { Directive, TemplateRef, inject } from "@angular/core";

/**
 * Marks an `<ng-template>` as the renderer for every event chip inside a
 * calendar view, replacing the built-in icon + label + count row:
 *
 * ```html
 * <ng-template foldCalendarEvent let-event let-band="band"> … </ng-template>
 * ```
 *
 * The context is `{ $implicit: event, band }` — `band` is the laid-out segment
 * (`FoldCalendarBand`) in the month view and `null` in the day-column views,
 * so a template can react to a continuation edge when there is one.
 *
 * `let-event` is untyped by design: a content-projected template cannot carry
 * the calendar's row type without heavy machinery, so read it through the
 * parent component's own typed helpers.
 */
@Directive({
  selector: "ng-template[foldCalendarEvent]",
  standalone: true,
})
export class FoldCalendarEventDirective {
  readonly template = inject(TemplateRef);
}
