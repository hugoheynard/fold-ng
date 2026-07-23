import { Component } from "@angular/core";
import { KindBadgeComponent } from "../../kind-badge.component";
import {
  FoldContextCardComponent,
  FoldLinkComponent,
  FoldPageLayoutComponent,
} from "../../../src/index";

/** `/context-card` — the `fold-context-card` gallery page. */
@Component({
  selector: "gal-context-card-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    FoldPageLayoutComponent,
    FoldContextCardComponent,
    FoldLinkComponent,
  ],
  template: `<fold-page-layout title="context-card">
    <gal-kind-badge titleBadge kind="component" />
    <div class="gal-row gal-row--wide">
      @for (tone of iconTones; track tone) {
        <fold-context-card
          icon="company"
          [iconTone]="tone"
          title="Contexte"
          subtitle="iconTone = {{ tone }}"
        >
          <div class="gal-kv">
            <span class="gal-k">Créée le</span
            ><span class="gal-v">14 mars 2024</span>
          </div>
          <div class="gal-kv">
            <span class="gal-k">Propriétaire</span
            ><span class="gal-v">Clément Aubry</span>
          </div>
          <fold-link footer icon="company">Voir l'organigramme</fold-link>
        </fold-context-card>
      }
    </div>
  </fold-page-layout>`,
})
export default class ContextCardPage {
  protected readonly iconTones = ["primary", "neutral", "faded"] as const;
}
