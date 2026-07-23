import { Component, signal } from "@angular/core";
import { KindBadgeComponent } from "../../components/kind-badge.component";
import {
  FoldButtonIconComponent,
  FoldPageLayoutComponent,
  FoldToggleIconComponent,
} from "../../../src/public-api";

/** `/button-icon` — the `fold-button-icon` (momentary) + `fold-toggle-icon`
 *  (toggle) gallery page. */
@Component({
  selector: "gal-button-icon-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    FoldPageLayoutComponent,
    FoldButtonIconComponent,
    FoldToggleIconComponent,
  ],
  templateUrl: "./button-icon.page.html",
})
export default class ButtonIconPage {
  protected readonly biMasked = signal(false);
}
