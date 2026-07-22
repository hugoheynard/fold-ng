import { Component } from "@angular/core";

/**
 * `<fold-field-list>` — the read-only counterpart of a form: a description list
 * (`<dl>`) of label/value pairs. It's what fills the *display* side of a detail
 * page (the recap), where `fold-input` fills the *edit* side. Nothing here is
 * interactive — it renders values you already know, not fields you type into.
 *
 * Put {@link FoldFieldComponent} children inside it:
 *
 * ```html
 * <fold-field-list>
 *   <fold-field label="Contract type">CDI</fold-field>
 *   <fold-field label="Job title" [empty]="!c.jobTitle">{{ c.jobTitle }}</fold-field>
 *   <fold-field label="Compensation">
 *     <span class="chip">{{ c.salary }}</span>
 *   </fold-field>
 * </fold-field-list>
 * ```
 *
 * **Why a component and not a mixin:** it guarantees the real semantics —
 * `dl > dt > dd`, so screen readers announce each value as the definition of its
 * label. A copy-pasted `div > span + span` (what every detail page hand-rolls)
 * looks the same but is an accessibility dead end; a mixin can't fix the markup.
 *
 * **How the encapsulation is kept clean (no `::ng-deep`):** the list owns *all*
 * the layout — the `<dl>` is a two-column grid (`label | value`), and a grid
 * positions its items *by their place in the box tree*, not by a selector that
 * has to match them. The `dt`/`dd` are contributed by each `fold-field`
 * (`display: contents`), yet the grid still lays them out. Appearance (type,
 * colour, the empty state) lives on the field, where the elements are declared.
 * Layout at the container, style at the cell — neither reaches across the wall.
 *
 * Zero-input theming via CSS custom properties on the host:
 * `--fold-field-list-label-width` (160px — the fixed label column) ·
 * `--fold-field-list-col-gap` (16px, label→value) ·
 * `--fold-field-list-row-gap` (10px, between rows). Shrink the label width when
 * the list sits in a narrow rail.
 *
 * @selector `fold-field-list`
 */
@Component({
  selector: "fold-field-list",
  standalone: true,
  templateUrl: "./field-list.component.html",
  styleUrl: "./field-list.component.scss",
})
export class FoldFieldListComponent {}
