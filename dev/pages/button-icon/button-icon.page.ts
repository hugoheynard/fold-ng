import { Component, signal } from "@angular/core";
import { KindBadgeComponent } from "../../kind-badge.component";
import {
  FoldButtonIconComponent,
  FoldPageLayoutComponent,
} from "../../../src/index";

/** `/button-icon` — the `fold-button-icon` gallery page. */
@Component({
  selector: "gal-button-icon-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    FoldPageLayoutComponent,
    FoldButtonIconComponent,
  ],
  templateUrl: "./button-icon.page.html",
})
export default class ButtonIconPage {
  protected readonly biMasked = signal(false);
}
