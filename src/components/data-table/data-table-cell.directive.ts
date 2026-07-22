import { Directive, TemplateRef, inject, input } from "@angular/core";

/**
 * Marks an `<ng-template>` as the cell renderer for a column key inside
 * `<fold-data-table>`:
 *
 * ```html
 * <ng-template foldCell="status" let-row let-i="index"> … </ng-template>
 * ```
 *
 * The template context is `{ $implicit: row, index }`. Rows are typed via the
 * table's `[rows]`; the projected template's `let-row` is untyped by design (a
 * generic content-projected template can't carry the row type without heavy
 * machinery), so annotate through the parent component's typed helper methods.
 */
@Directive({ selector: "ng-template[foldCell]", standalone: true })
export class FoldDataTableCellDirective {
  /** The column `key` this template renders. */
  readonly foldCell = input.required<string>();
  readonly template = inject(TemplateRef);
}
