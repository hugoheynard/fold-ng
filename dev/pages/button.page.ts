import { Component, signal } from "@angular/core";
import { KindBadgeComponent } from "../kind-badge.component";
import {
  Sh3ButtonComponent,
  Sh3IconComponent,
  Sh3PageLayoutComponent,
  type Sh3ButtonSize,
  type Sh3ButtonVariant,
} from "../../src/index";

/** `/button` — the `sh3-button` gallery page. */
@Component({
  selector: "gal-button-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    Sh3PageLayoutComponent,
    Sh3ButtonComponent,
    Sh3IconComponent,
  ],
  template: `<sh3-page-layout fluid title="button">
    <gal-kind-badge titleBadge kind="component" />
    <div class="gal-stack">
      <div class="gal-cell">
        <span class="gal-tag">variants (md)</span>
        <div class="gal-row">
          @for (v of buttonVariants; track v) {
            <sh3-button
              [variant]="v"
              (clicked)="buttonClicks.set(buttonClicks() + 1)"
              >{{ v }}</sh3-button
            >
          }
        </div>
      </div>
      <div class="gal-cell">
        <span class="gal-tag">sizes (primary)</span>
        <div class="gal-row" style="align-items: center">
          @for (s of buttonSizes; track s) {
            <sh3-button [size]="s">size {{ s }}</sh3-button>
          }
        </div>
      </div>
      <div class="gal-cell">
        <span class="gal-tag">shapes (rounded default · pill)</span>
        <div class="gal-row" style="align-items: center">
          <sh3-button size="sm">rounded</sh3-button>
          <sh3-button size="sm" shape="pill">pill</sh3-button>
          <sh3-button variant="primary" size="sm" shape="pill">
            <sh3-icon name="plus" [size]="13" />
            Proposer un avenant
          </sh3-button>
        </div>
      </div>
      <div class="gal-cell">
        <span class="gal-tag">block (full-width)</span>
        <div class="gal-narrow">
          <sh3-button variant="critical" block>
            <sh3-icon name="bin" [size]="14" />
            Résilier le contrat
          </sh3-button>
        </div>
      </div>
      <div class="gal-cell">
        <span class="gal-tag"
          >icon shorthand (sized from the button) · disabled</span
        >
        <div class="gal-row" style="align-items: center">
          <sh3-button variant="solid" icon="check">Confirm</sh3-button>
          <sh3-button variant="ghost" size="sm" icon="edit">Edit</sh3-button>
          <sh3-button variant="primary" iconTrailing="chevron-right"
            >Next</sh3-button
          >
          <sh3-button [disabled]="true">Disabled</sh3-button>
          <span class="gal-tag">clicked {{ buttonClicks() }}×</span>
        </div>
      </div>
    </div>
  </sh3-page-layout>`,
})
export default class ButtonPage {
  protected readonly buttonVariants: Sh3ButtonVariant[] = [
    "primary",
    "recommended",
    "critical",
    "ghost",
    "solid",
  ];
  protected readonly buttonSizes: Sh3ButtonSize[] = ["sm", "md", "lg"];
  protected readonly buttonClicks = signal(0);
}
