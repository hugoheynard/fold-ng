import { Directive, TemplateRef, inject } from "@angular/core";

/**
 * Marks the `<ng-template>` that renders a whole row as a **custom mobile card**
 * inside `<fold-data-table mobileLayout="custom">`:
 *
 * ```html
 * <ng-template foldRowCard let-row let-i="index"> … </ng-template>
 * ```
 *
 * The template context is `{ $implicit: row, index }`. When `mobileLayout` is
 * `"custom"`, the table hides on narrow screens and this template renders once
 * per row instead of the auto label/value stack — the parent owns the mobile
 * presentation entirely (including any interactions it wants inside the card).
 *
 * As with cell templates, `let-row` is untyped by design — annotate through the
 * parent component's typed helpers.
 */
@Directive({ selector: "ng-template[foldRowCard]", standalone: true })
export class FoldDataTableRowCardDirective {
  readonly template = inject(TemplateRef);
}
