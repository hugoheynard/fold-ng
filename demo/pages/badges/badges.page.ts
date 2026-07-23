import { Component } from "@angular/core";
import { KindBadgeComponent } from "../../kind-badge.component";
import {
  FoldBadgeComponent,
  FoldIconComponent,
  FoldPageLayoutComponent,
  FoldStatusBadgeComponent,
} from "../../../src/index";

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
  templateUrl: "./badges.page.html",
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
