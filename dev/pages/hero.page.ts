import { Component } from "@angular/core";
import { KindBadgeComponent } from "../kind-badge.component";
import { FoldHeroComponent, FoldPageLayoutComponent } from "../../src/index";

/** `/hero` — the `fold-hero` gallery page (surface × accent matrix). */
@Component({
  selector: "gal-hero-page",
  standalone: true,
  imports: [KindBadgeComponent, FoldPageLayoutComponent, FoldHeroComponent],
  template: `<fold-page-layout title="hero">
    <gal-kind-badge titleBadge kind="component" />
    @for (surface of heroSurfaces; track surface) {
      <div class="gal-row gal-row--wide">
        @for (accent of heroAccents; track accent) {
          <fold-hero [surface]="surface" [accent]="accent" padding="md">
            <strong>{{ surface }} · {{ accent }}</strong>
            <p class="gal-body">Base surface with an accent overlay.</p>
          </fold-hero>
        }
      </div>
    }
    <div class="gal-cell">
      <span class="gal-tag">accentBar + primary surface</span>
      <div class="gal-row gal-row--wide">
        <fold-hero surface="card" accent="subtle" accentBar padding="md">
          <strong>accentBar</strong>
        </fold-hero>
        <fold-hero surface="primary" padding="md">
          <strong>primary fill</strong>
        </fold-hero>
      </div>
    </div>
  </fold-page-layout>`,
})
export default class HeroPage {
  protected readonly heroSurfaces = ["card", "sunken"] as const;
  protected readonly heroAccents = ["none", "subtle", "gradient"] as const;
}
