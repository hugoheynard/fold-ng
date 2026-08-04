import { Component, inject, input } from "@angular/core";
import { FoldIdService } from "../../../a11y/id.service";

/**
 * `<fold-optgroup>` — a labelled group of `<fold-option>`s inside a
 * {@link FoldListboxComponent} / {@link FoldMultiselectComponent}, the styleable
 * counterpart to the native `<optgroup>`. Purely presentational: it renders a
 * non-selectable header and projects its options, which the owning listbox still
 * discovers (it queries options with `descendants: true`) and roves across in
 * document order — so grouping changes the layout, never the keyboard model.
 *
 * `role="group"` + `aria-labelledby` names the group for assistive tech; the
 * header carries no `role="option"`, so keyboard nav skips straight over it.
 *
 * ```html
 * <fold-listbox [(value)]="city">
 *   <fold-optgroup label="France">
 *     <fold-option value="paris">Paris</fold-option>
 *     <fold-option value="lyon">Lyon</fold-option>
 *   </fold-optgroup>
 *   <fold-optgroup label="Italia">
 *     <fold-option value="roma">Roma</fold-option>
 *   </fold-optgroup>
 * </fold-listbox>
 * ```
 *
 * @selector `fold-optgroup`
 */
@Component({
  selector: "fold-optgroup",
  standalone: true,
  template:
    '<span class="og-label" [id]="labelId">{{ label() }}</span><ng-content />',
  styleUrl: "./optgroup.component.scss",
  host: {
    role: "group",
    "[attr.aria-labelledby]": "labelId",
  },
})
export class FoldOptgroupComponent {
  /** The group's visible heading — also its accessible name (`aria-labelledby`). */
  readonly label = input.required<string>();

  /** Stable, SSR-safe id the group's `aria-labelledby` points at. */
  readonly labelId = inject(FoldIdService).next("fold-optgroup");
}
