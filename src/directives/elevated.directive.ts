import { Directive, booleanAttribute, input } from "@angular/core";

/**
 * `[foldElevated]` — raise a surface into a **rounded, shadowed card**.
 *
 * It stamps `data-elevated`; the token layer styles it (radius + shadow). It
 * rides on whatever background the element already paints — so a chrome rail
 * stays chrome-coloured, just lifted. Put it on the element that owns the
 * surface's background (a projected `fold-menu`, an `app-header`, a content
 * wrapper), never on a transparent wrapper (which would raise an invisible card).
 *
 * **Elevate ≠ inset.** The directive only *raises* (radius + shadow); it does
 * not inset itself. The gutter around a floating region is the **container's**
 * job — padding on the slot, never a child margin, so a `height: 100%` region
 * fits with no overflow (an `fold-app-shell` pads a cell whose content is
 * elevated). Radius/shadow are tokenised (`--fold-surface-radius` /
 * `--fold-surface-shadow`), so a scope can dial the elevation without a new input.
 *
 * @selector `[foldElevated]`
 * @example
 * ```html
 * <fold-menu railPrimary foldElevated />           <!-- always raised -->
 * <app-header header [foldElevated]="dense()" />  <!-- conditional -->
 * ```
 */
@Directive({
  selector: "[foldElevated]",
  standalone: true,
  host: { "[attr.data-elevated]": "foldElevated() ? '' : null" },
})
export class FoldElevatedDirective {
  /** Raise this surface (a bare `foldElevated` attribute → `true`). */
  readonly foldElevated = input(true, { transform: booleanAttribute });
}
