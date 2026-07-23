import { Component, computed, signal, ViewEncapsulation } from "@angular/core";
import { RouterLink } from "@angular/router";
import {
  FoldBadgeComponent,
  FoldButtonComponent,
  FoldCalloutComponent,
  FoldCardComponent,
  FoldPageLayoutComponent,
  FoldPageSectionComponent,
  FoldSliderComponent,
} from "../../../src/public-api";
import { DevPlaygroundComponent } from "../../playground.component";
import { KindBadgeComponent } from "../../kind-badge.component";

/** `/page-layout` — the `fold-page-layout` gallery page. */
@Component({
  selector: "gal-page-layout-page",
  standalone: true,
  imports: [
    RouterLink,
    KindBadgeComponent,
    FoldPageLayoutComponent,
    FoldPageSectionComponent,
    FoldCardComponent,
    FoldBadgeComponent,
    FoldButtonComponent,
    FoldCalloutComponent,
    FoldSliderComponent,
    DevPlaygroundComponent,
  ],
  templateUrl: "./page-layout.page.html",
  styleUrl: "./page-layout.page.scss",
  encapsulation: ViewEncapsulation.None,
})
export default class PageLayoutPage {
  /** Header slots, toggled independently so the anatomy is explorable. */
  protected readonly showIcon = signal(true);
  protected readonly showBadge = signal(false);
  protected readonly showDesc = signal(true);
  protected readonly showActions = signal(true);
  /** The horizontal page gutter — the single `--fold-page-gutter` token. */
  protected readonly gutter = signal(32);

  /** The live snippet, rebuilt from the chosen inputs. */
  protected readonly code = computed(() => {
    const icon = this.showIcon() ? ' icon="grid"' : "";
    const lines = [`<fold-page-layout${icon} title="Billing">`];
    if (this.showBadge()) {
      lines.push('  <fold-badge titleBadge content="Pro" variant="accent" />');
    }
    if (this.showDesc()) {
      lines.push(
        "  <p description>Your company subscription and payments.</p>",
      );
    }
    if (this.showActions()) {
      lines.push("  <button pageActions>Export</button>");
    }
    lines.push(
      '  <fold-page-section title="Payment methods">…</fold-page-section>',
      '  <fold-page-section title="Invoices">…</fold-page-section>',
      "</fold-page-layout>",
    );
    return lines.join("\n");
  });
}
