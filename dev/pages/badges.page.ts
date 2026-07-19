import { Component } from "@angular/core";
import {
  Sh3BadgeComponent,
  Sh3IconComponent,
  Sh3PageLayoutComponent,
  Sh3StatusBadgeComponent,
} from "../../src/index";

/** `/badges` — the `sh3-badge` · `sh3-status-badge` · `sh3-icon` gallery page. */
@Component({
  selector: "gal-badges-page",
  standalone: true,
  host: { class: "gal-page" },
  imports: [
    Sh3PageLayoutComponent,
    Sh3BadgeComponent,
    Sh3StatusBadgeComponent,
    Sh3IconComponent,
  ],
  template: `<sh3-page-layout fluid title="badge · status · icon">
    <div class="gal-row">
      @for (v of badgeVariants; track v) {
        <sh3-badge [content]="v" [variant]="v" />
      }
    </div>
    <div class="gal-row">
      <sh3-status-badge status="active" label="Actif" />
      <sh3-status-badge status="draft" label="Brouillon" />
      <sh3-status-badge status="expired" label="Expiré" />
    </div>
    <div class="gal-row">
      @for (n of iconNames; track n) {
        <sh3-icon [name]="n" />
      }
    </div>
  </sh3-page-layout>`,
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
