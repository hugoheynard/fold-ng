import { Component } from "@angular/core";
import { KindBadgeComponent } from "../kind-badge.component";
import {
  Sh3ButtonComponent,
  Sh3CardComponent,
  Sh3PageLayoutComponent,
} from "../../src/index";

/** `/card` — the `sh3-card` gallery page. */
@Component({
  selector: "gal-card-page",
  standalone: true,
  host: { class: "gal-page" },
  imports: [
    KindBadgeComponent,
    Sh3PageLayoutComponent,
    Sh3CardComponent,
    Sh3ButtonComponent,
  ],
  template: `<sh3-page-layout fluid title="card">
    <gal-kind-badge titleBadge kind="component" />
    <div class="gal-cell">
      <span class="gal-tag">surface · radius · padding</span>
      <div class="gal-row gal-row--wide">
        <sh3-card>card (default)</sh3-card>
        <sh3-card surface="sunken">sunken</sh3-card>
        <sh3-card radius="sm" padding="sm">radius sm · padding sm</sh3-card>
      </div>
    </div>
    <div class="gal-cell">
      <span class="gal-tag">header · footer · separators</span>
      <div class="gal-row gal-row--wide">
        <sh3-card padding="none" separators style="max-width: 300px">
          <strong cardHeader>Card title</strong>
          <p style="margin: 0; color: var(--sh3-color-text-muted)">
            The header and footer are optional projected bands; the separators
            flag draws the hairline between them and the body.
          </p>
          <div
            cardFooter
            style="display: flex; gap: 8px; justify-content: flex-end"
          >
            <sh3-button size="sm" variant="ghost">Cancel</sh3-button>
            <sh3-button size="sm">Save</sh3-button>
          </div>
        </sh3-card>
        <sh3-card surface="sunken" padding="none" style="max-width: 300px">
          <strong cardHeader>No separators</strong>
          <p style="margin: 0; color: var(--sh3-color-text-muted)">
            Same bands without the divider — a quieter grouping.
          </p>
        </sh3-card>
      </div>
    </div>
  </sh3-page-layout>`,
})
export default class CardPage {}
