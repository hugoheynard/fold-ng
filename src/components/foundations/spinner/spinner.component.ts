import { Component, computed, input } from "@angular/core";
import { foldIconSizeVar } from "../../../tokens/tokens.catalog";
import type { FoldIconSizeToken } from "../../../tokens/tokens.catalog";

/** Spinner size — an icon-size token (`xs…xl`) or an explicit pixel number. */
export type FoldSpinnerSize = FoldIconSizeToken | number;

/**
 * `fold-spinner` — an indeterminate loading indicator: a rotating arc drawn in
 * `currentColor`, sized off the same scale as `fold-icon` so it drops into a
 * button in place of its glyph without shifting layout.
 *
 * Give it a `label` when it stands alone (it becomes `role="status"` +
 * `aria-label`, so assistive tech announces the wait). Leave `label` unset when
 * it lives inside something that already announces busy-ness (a button with
 * `aria-busy`) — it then renders `aria-hidden`, purely decorative.
 *
 * Honours `prefers-reduced-motion`: the rotation stops and a fuller static ring
 * is shown instead, so the indicator still reads as "busy" without animating.
 *
 * @selector `fold-spinner`
 *
 * @example
 * ```html
 * <fold-spinner label="Loading contracts" />
 * <fold-spinner size="sm" />           <!-- decorative, inside a busy control -->
 * <fold-spinner [size]="18" />
 * ```
 */
@Component({
  selector: "fold-spinner",
  standalone: true,
  templateUrl: "./spinner.component.html",
  styleUrl: "./spinner.component.scss",
  host: {
    "[style.--fold-spinner-size]": "sizeVar()",
    "[attr.role]": "label() ? 'status' : null",
    "[attr.aria-label]": "label() ?? null",
    "[attr.aria-hidden]": "label() ? null : 'true'",
  },
})
export class FoldSpinnerComponent {
  /** Size — an icon-size token (`xs…xl`, default `md`) or a pixel number. */
  readonly size = input<FoldSpinnerSize>("md");

  /** Accessible label. Set → `role="status"` + `aria-label`; unset → decorative. */
  readonly label = input<string>();

  /** Resolves the size to a CSS length for `--fold-spinner-size`. */
  readonly sizeVar = computed<string>(() => {
    const s = this.size();
    return typeof s === "number" ? `${s}px` : foldIconSizeVar(s);
  });
}
