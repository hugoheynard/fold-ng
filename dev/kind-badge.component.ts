import { Component, computed, input } from "@angular/core";
import { Sh3BadgeComponent } from "../src/index";

/** What a gallery page documents — a component, a directive, or a foundation
 *  (tokens, themes: no selector, but the ground everything else stands on). */
export type GalKind = "component" | "directive" | "foundation";

const LABEL: Record<GalKind, string> = {
  component: "Component",
  directive: "Directive",
  foundation: "Foundation",
};
const VARIANT: Record<GalKind, "info" | "warning" | "neutral"> = {
  component: "info",
  directive: "warning",
  foundation: "neutral",
};

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
    [variant]="variant()"
    [content]="label()"
  />`,
})
export class KindBadgeComponent {
  /** Which kind of primitive the page documents. */
  readonly kind = input.required<GalKind>();

  protected readonly label = computed(() => LABEL[this.kind()]);
  protected readonly variant = computed(() => VARIANT[this.kind()]);
}
