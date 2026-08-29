import { Directive, TemplateRef, inject } from "@angular/core";

/**
 * Marks the `<ng-template>` that renders a row's **detail drawer**, opened in
 * place under the row it belongs to:
 *
 * ```html
 * <ng-template foldRowDetail let-row let-i="index"> … </ng-template>
 * ```
 *
 * The template context is `{ $implicit: row, index }`.
 *
 * Its presence is what turns the feature on: the table grows a trailing toggle
 * column, and each row can open a full-width drawer beneath itself. Nothing to
 * enable, nothing to configure — a table with no detail template behaves
 * exactly as before.
 *
 * **In place, and not elsewhere.** A drawer keeps the list under the reader's
 * eyes: they opened a row to look at one thing, not to leave the place they
 * spent time finding. That is also why the drawer lives inside the CARD on a
 * narrow screen rather than falling back to a panel — same promise, same
 * gesture, whatever the width.
 *
 * As with cell templates, `let-row` is untyped by design — annotate through the
 * parent component's typed helpers.
 */
@Directive({ selector: "ng-template[foldRowDetail]", standalone: true })
export class FoldDataTableRowDetailDirective {
  readonly template = inject(TemplateRef);
}
