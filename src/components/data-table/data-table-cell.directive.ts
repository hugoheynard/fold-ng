import { Directive, TemplateRef, inject, input } from "@angular/core";

/**
 * Marks an `<ng-template>` as the cell renderer for a column key inside
 * `<sh3-data-table>`:
 *
 * ```html
 * <ng-template sh3Cell="status" let-row let-i="index"> … </ng-template>
 * ```
 *
 * The template context is `{ $implicit: row, index }`. Rows are typed via the
 * table's `[rows]`; the projected template's `let-row` is untyped by design (a
 * generic content-projected template can't carry the row type without heavy
 * machinery), so annotate through the parent component's typed helper methods.
 */
@Directive({ selector: "ng-template[sh3Cell]", standalone: true })
export class Sh3DataTableCellDirective {
  /** The column `key` this template renders. */
  readonly sh3Cell = input.required<string>();
  readonly template = inject(TemplateRef);
}
