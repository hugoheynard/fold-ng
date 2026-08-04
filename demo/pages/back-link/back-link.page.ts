import { Component } from "@angular/core";
import { KindBadgeComponent } from "../../components/kind-badge.component";
import { ComposedOfComponent } from "../../components/composed-of.component";
import {
  FoldBackLinkComponent,
  FoldPageLayoutComponent,
  FoldPageSectionComponent,
} from "../../../src/public-api";

/** `/back-link` — the `fold-back-link` "← Back" affordance (routerLink · href · history). */
@Component({
  selector: "gal-back-link-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    ComposedOfComponent,
    FoldBackLinkComponent,
    FoldPageLayoutComponent,
    FoldPageSectionComponent,
  ],
  templateUrl: "./back-link.page.html",
  styleUrl: "./back-link.page.scss",
})
export default class BackLinkPage {
  protected readonly code = `<!-- in-app route -->
<fold-back-link routerLink="/contrats" label="Tous les contrats" />

<!-- plain / external URL -->
<fold-back-link href="/dashboard" />

<!-- history back (Location.back) — needs no router -->
<fold-back-link label="Retour" />`;
}
