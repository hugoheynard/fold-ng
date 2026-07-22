import { Directive, booleanAttribute, input } from "@angular/core";

/**
 * `[sh3Elevated]` — raise a surface into a **rounded, shadowed card**.
 *
 * It stamps `data-elevated`; the token layer styles it (radius + shadow). It
 * rides on whatever background the element already paints — so a chrome rail
 * stays chrome-coloured, just lifted. Put it on the element that owns the
 * surface's background (a projected `sh3-menu`, an `app-header`, a content
 * wrapper), never on a transparent wrapper (which would raise an invisible card).
 *
 * **Elevate ≠ inset.** The directive only *raises* (radius + shadow); it does
 * not inset itself. The gutter around a floating region is the **container's**
 * job — padding on the slot, never a child margin, so a `height: 100%` region
 * fits with no overflow (an `sh3-app-shell` pads a cell whose content is
 * elevated). Radius/shadow are tokenised (`--sh3-surface-radius` /
 * `--sh3-surface-shadow`), so a scope can dial the elevation without a new input.
 *
 * @selector `[sh3Elevated]`
 * @example
 * ```html
 * <sh3-menu railPrimary sh3Elevated />           <!-- always raised -->
 * <app-header header [sh3Elevated]="dense()" />  <!-- conditional -->
 * ```
 */
@Directive({
  selector: "[sh3Elevated]",
  standalone: true,
  host: { "[attr.data-elevated]": "sh3Elevated() ? '' : null" },
})
export class Sh3ElevatedDirective {
  /** Raise this surface (a bare `sh3Elevated` attribute → `true`). */
  readonly sh3Elevated = input(true, { transform: booleanAttribute });
}
