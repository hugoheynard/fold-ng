import { Component, input } from "@angular/core";
import { Sh3BadgeComponent } from "../src/index";

/** What a gallery page documents — a component, a directive (or both). */
export type GalKind = "component" | "directive";

/**
 * `<gal-kind-badge>` — a small badge tagging a gallery page by what it documents:
 * a `component` (element selector, e.g. `sh3-card`) or a `directive` (attribute
 * selector, e.g. `[sh3StickyColumn]`). Drop it in the page-layout `[titleBadge]`
 * slot; a page that ships both (e.g. menu) can carry one of each.
 */
@Component({
  selector: "gal-kind-badge",
  standalone: true,
  imports: [Sh3BadgeComponent],
  template: `<sh3-badge
    radius="square"
    [variant]="kind() === 'directive' ? 'warning' : 'info'"
    [content]="kind() === 'directive' ? 'Directive' : 'Component'"
  />`,
})
export class KindBadgeComponent {
  /** Which kind of primitive the page documents. */
  readonly kind = input.required<GalKind>();
}
