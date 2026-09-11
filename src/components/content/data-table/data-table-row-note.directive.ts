import { Directive, TemplateRef, inject } from "@angular/core";

/**
 * Marks the `<ng-template>` that renders a row's **note** — a full-width line
 * that sits under its row and is **always visible**:
 *
 * ```html
 * <fold-data-table [rowNote]="isLate" …>
 *   <ng-template foldRowNote let-row let-i="index">
 *     <fold-callout variant="warning">…</fold-callout>
 *   </ng-template>
 * </fold-data-table>
 * ```
 *
 * The template context is `{ $implicit: row, index }`.
 *
 * **A note is not a drawer.** {@link FoldDataTableRowDetailDirective} hides
 * something until asked and grows a toggle column to ask with; a note hides
 * nothing, so there is nothing to reveal, no chevron, and no `aria-expanded`.
 * Reach for a note when the row's own cells cannot hold what must be read at
 * the same moment as the row — a warning that comes with the action answering
 * it, a refusal and its reason.
 *
 * 🔴 **It takes TWO halves, and the second is not ceremony.** The template says
 * *what* a note looks like; the `rowNote` predicate says *which* rows have one.
 * Without the predicate every row would emit a `<tr>` — empty for most of them,
 * and an empty row is not invisible: a screen reader walks into it and
 * announces a blank line per record. The predicate is what keeps the table
 * honest about how many rows it has.
 *
 * As with cell templates, `let-row` is untyped by design — annotate through the
 * parent component's typed helpers.
 */
@Directive({ selector: "ng-template[foldRowNote]", standalone: true })
export class FoldDataTableRowNoteDirective {
  readonly template = inject(TemplateRef);
}
