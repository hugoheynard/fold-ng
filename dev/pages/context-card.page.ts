import { Component } from "@angular/core";
import { KindBadgeComponent } from "../kind-badge.component";
import {
  Sh3ContextCardComponent,
  Sh3LinkComponent,
  Sh3PageLayoutComponent,
} from "../../src/index";

/** `/context-card` — the `sh3-context-card` gallery page. */
@Component({
  selector: "gal-context-card-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    Sh3PageLayoutComponent,
    Sh3ContextCardComponent,
    Sh3LinkComponent,
  ],
  template: `<sh3-page-layout fluid title="context-card">
    <gal-kind-badge titleBadge kind="component" />
    <div class="gal-row gal-row--wide">
      @for (tone of iconTones; track tone) {
        <sh3-context-card
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
          <sh3-link footer icon="company">Voir l'organigramme</sh3-link>
        </sh3-context-card>
      }
    </div>
  </sh3-page-layout>`,
})
export default class ContextCardPage {
  protected readonly iconTones = ["primary", "neutral", "faded"] as const;
}
