import { Component } from "@angular/core";
import { KindBadgeComponent } from "../kind-badge.component";
import {
  FoldBadgeComponent,
  FoldIconComponent,
  FoldPageLayoutComponent,
  FoldStatusBadgeComponent,
} from "../../src/index";

/** `/badges` — the `fold-badge` · `fold-status-badge` · `fold-icon` gallery page. */
@Component({
  selector: "gal-badges-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    FoldPageLayoutComponent,
    FoldBadgeComponent,
    FoldStatusBadgeComponent,
    FoldIconComponent,
  ],
  template: `<fold-page-layout title="badge · status · icon">
    <gal-kind-badge titleBadge kind="component" />
    <div class="gal-row">
      @for (v of badgeVariants; track v) {
        <fold-badge [content]="v" [variant]="v" />
      }
    </div>
    <div class="gal-row">
      <fold-status-badge status="active" label="Actif" />
      <fold-status-badge status="draft" label="Brouillon" />
      <fold-status-badge status="expired" label="Expiré" />
    </div>
    <div class="gal-row">
      @for (n of iconNames; track n) {
        <fold-icon [name]="n" />
      }
    </div>
  </fold-page-layout>`,
})
export default class BadgesPage {
  protected readonly badgeVariants = [
    "accent",
    "info",
    "warning",
    "alert",
    "success",
  ] as const;
  protected readonly iconNames = [
    "company",
    "home",
    "contracts",
    "edit",
    "bell",
    "music",
  ] as const;
}
