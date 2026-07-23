import { Component, ViewEncapsulation } from "@angular/core";
import { KindBadgeComponent } from "../../kind-badge.component";
import {
  FoldBadgeComponent,
  FoldButtonComponent,
  FoldHeroSectionComponent,
  FoldIconComponent,
  FoldPageLayoutComponent,
} from "../../../src/public-api";

/** `/hero-section` — the `fold-hero-section` gallery page (full-bleed page splash). */
@Component({
  selector: "gal-hero-section-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    FoldPageLayoutComponent,
    FoldHeroSectionComponent,
    FoldBadgeComponent,
    FoldButtonComponent,
    FoldIconComponent,
  ],
  templateUrl: "./hero-section.page.html",
  styleUrl: "./hero-section.page.scss",
  encapsulation: ViewEncapsulation.None,
})
export default class HeroSectionPage {}
