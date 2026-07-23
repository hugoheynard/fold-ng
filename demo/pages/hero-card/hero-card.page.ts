import { Component } from "@angular/core";
import { KindBadgeComponent } from "../../kind-badge.component";
import {
  FoldHeroCardComponent,
  FoldPageLayoutComponent,
} from "../../../src/public-api";

/** `/hero-card` — the `fold-hero-card` gallery page (surface × accent matrix). */
@Component({
  selector: "gal-hero-card-page",
  standalone: true,
  imports: [KindBadgeComponent, FoldPageLayoutComponent, FoldHeroCardComponent],
  templateUrl: "./hero-card.page.html",
})
export default class HeroCardPage {
  protected readonly heroSurfaces = ["card", "sunken"] as const;
  protected readonly heroAccents = ["none", "subtle", "gradient"] as const;
}
