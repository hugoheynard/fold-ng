import { Component, computed, inject, input } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { galleryLabel } from "../shell/gallery-nav";

/**
 * `<gal-composed-of [ids]="['avatar', 'badges']">` — a small "Built from" row on
 * a component's gallery page listing the fold primitives it composes, each a
 * link to that primitive's page. The link carries `?from=<this-page>` so the
 * destination shows a sticky "← Back to …" bar (rendered by the gallery shell).
 */
@Component({
  selector: "gal-composed-of",
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="gal-composed" aria-label="Built from">
      <span class="gal-composed-label">Built from</span>
      @for (item of items(); track item.id) {
        <a
          class="gal-composed-chip"
          [routerLink]="['/', item.id]"
          [queryParams]="{ from: fromId }"
        >
          {{ item.label }}
        </a>
      }
    </section>
  `,
})
export class ComposedOfComponent {
  /** Nav ids of the primitives this component is built from. */
  readonly ids = input.required<readonly string[]>();

  /** The current page's nav id — the `from` the links point back to. */
  protected readonly fromId =
    inject(Router).url.split("?")[0]?.replace(/^\/+/, "").split("/")[0] ?? "";

  protected readonly items = computed(() =>
    this.ids().map((id) => ({ id, label: galleryLabel(id) })),
  );
}
