import { Component, ViewEncapsulation } from "@angular/core";
import { KindBadgeComponent } from "../../components/kind-badge.component";
import { ComposedOfComponent } from "../../components/composed-of.component";
import {
  FoldContextCardComponent,
  FoldLinkComponent,
  FoldPageLayoutComponent,
} from "../../../src/public-api";

/** `/context-card` — the `fold-context-card` gallery page. */
@Component({
  selector: "gal-context-card-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    ComposedOfComponent,
    FoldPageLayoutComponent,
    FoldContextCardComponent,
    FoldLinkComponent,
  ],
  templateUrl: "./context-card.page.html",
  styleUrl: "./context-card.page.scss",
  encapsulation: ViewEncapsulation.None,
})
export default class ContextCardPage {
  protected readonly iconTones = ["primary", "neutral", "faded"] as const;
}
