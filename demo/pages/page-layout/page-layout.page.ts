import { Component, computed, signal, ViewEncapsulation } from "@angular/core";
import { RouterLink } from "@angular/router";
import {
  FoldAvatarComponent,
  FoldBadgeComponent,
  FoldButtonComponent,
  FoldCalloutComponent,
  FoldCardComponent,
  FoldPageLayoutComponent,
  FoldPageSectionComponent,
  FoldPageTitleDirective,
  FoldSliderComponent,
} from "../../../src/public-api";
import { DevPlaygroundComponent } from "../../components/playground.component";
import { KindBadgeComponent } from "../../components/kind-badge.component";

type HeaderMode = "title" | "custom";

/** `/page-layout` — the `fold-page-layout` gallery page. */
@Component({
  selector: "gal-page-layout-page",
  standalone: true,
  imports: [
    RouterLink,
    KindBadgeComponent,
    FoldPageLayoutComponent,
    FoldPageTitleDirective,
    FoldPageSectionComponent,
    FoldCardComponent,
    FoldAvatarComponent,
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
  /** Header: the plain `icon` + `title` inputs, or a projected `[pageTitle]`. */
  protected readonly headerMode = signal<HeaderMode>("title");
  /** Header slots, toggled independently so the anatomy is explorable. */
  protected readonly showIcon = signal(true);
  protected readonly showBadge = signal(false);
  protected readonly showDesc = signal(true);
  protected readonly showActions = signal(true);
  /** The full-bleed band section — cancels the gutter to span edge-to-edge. */
  protected readonly showBleed = signal(true);
  /** The horizontal page gutter — the single `--fold-page-gutter` token. */
  protected readonly gutter = signal(32);

  /** The live snippet, rebuilt from the chosen inputs. */
  protected readonly code = computed(() => {
    const lines: string[] = [];
    if (this.headerMode() === "custom") {
      lines.push(
        "<fold-page-layout>",
        '  <span pageTitle><fold-avatar name="Acme Records" size="sm" /> Acme Records</span>',
      );
    } else {
      const icon = this.showIcon() ? ' icon="grid"' : "";
      lines.push(`<fold-page-layout${icon} title="Billing">`);
    }
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
    );
    if (this.showBleed()) {
      lines.push(
        "  <fold-page-section bleed>… edge-to-edge band …</fold-page-section>",
      );
    }
    lines.push(
      '  <fold-page-section title="Invoices">…</fold-page-section>',
      "</fold-page-layout>",
    );
    return lines.join("\n");
  });
}
