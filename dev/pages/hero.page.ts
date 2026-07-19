import { Component } from "@angular/core";
import { Sh3HeroComponent, Sh3PageLayoutComponent } from "../../src/index";

/** `/hero` — the `sh3-hero` gallery page (surface × accent matrix). */
@Component({
  selector: "gal-hero-page",
  standalone: true,
  imports: [Sh3PageLayoutComponent, Sh3HeroComponent],
  template: `<sh3-page-layout fluid title="hero">
    @for (surface of heroSurfaces; track surface) {
      <div class="gal-row gal-row--wide">
        @for (accent of heroAccents; track accent) {
          <sh3-hero [surface]="surface" [accent]="accent" padding="md">
            <strong>{{ surface }} · {{ accent }}</strong>
            <p class="gal-body">Base surface with an accent overlay.</p>
          </sh3-hero>
        }
      </div>
    }
    <div class="gal-cell">
      <span class="gal-tag">accentBar + primary surface</span>
      <div class="gal-row gal-row--wide">
        <sh3-hero surface="card" accent="subtle" accentBar padding="md">
          <strong>accentBar</strong>
        </sh3-hero>
        <sh3-hero surface="primary" padding="md">
          <strong>primary fill</strong>
        </sh3-hero>
      </div>
    </div>
  </sh3-page-layout>`,
})
export default class HeroPage {
  protected readonly heroSurfaces = ["card", "sunken"] as const;
  protected readonly heroAccents = ["none", "subtle", "gradient"] as const;
}
