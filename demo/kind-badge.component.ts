import { Component, computed, input } from "@angular/core";
import { FoldBadgeComponent } from "../src/public-api";

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
 * a `component` (element selector, e.g. `fold-card`) or a `directive` (attribute
 * selector, e.g. `[foldStickyColumn]`). Drop it in the page-layout `[titleBadge]`
 * slot; a page that ships both (e.g. menu) can carry one of each.
 */
@Component({
  selector: "gal-kind-badge",
  standalone: true,
  imports: [FoldBadgeComponent],
  template: `<fold-badge
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
