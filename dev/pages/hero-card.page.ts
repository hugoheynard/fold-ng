import { Component } from "@angular/core";
import { KindBadgeComponent } from "../kind-badge.component";
import {
  FoldHeroCardComponent,
  FoldPageLayoutComponent,
} from "../../src/index";

/** `/hero-card` — the `fold-hero-card` gallery page (surface × accent matrix). */
@Component({
  selector: "gal-hero-card-page",
  standalone: true,
  imports: [KindBadgeComponent, FoldPageLayoutComponent, FoldHeroCardComponent],
  template: `<fold-page-layout title="hero-card">
    <gal-kind-badge titleBadge kind="component" />
    @for (surface of heroSurfaces; track surface) {
      <div class="gal-row gal-row--wide">
        @for (accent of heroAccents; track accent) {
          <fold-hero-card [surface]="surface" [accent]="accent" padding="md">
            <strong>{{ surface }} · {{ accent }}</strong>
            <p class="gal-body">Base surface with an accent overlay.</p>
          </fold-hero-card>
        }
      </div>
    }
    <div class="gal-cell">
      <span class="gal-tag">accentBar + primary surface</span>
      <div class="gal-row gal-row--wide">
        <fold-hero-card surface="card" accent="subtle" accentBar padding="md">
          <strong>accentBar</strong>
        </fold-hero-card>
        <fold-hero-card surface="primary" padding="md">
          <strong>primary fill</strong>
        </fold-hero-card>
      </div>
    </div>
  </fold-page-layout>`,
})
export default class HeroCardPage {
  protected readonly heroSurfaces = ["card", "sunken"] as const;
  protected readonly heroAccents = ["none", "subtle", "gradient"] as const;
}
