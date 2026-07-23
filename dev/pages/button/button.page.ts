import { Component, signal } from "@angular/core";
import { KindBadgeComponent } from "../../kind-badge.component";
import {
  FoldButtonComponent,
  FoldIconComponent,
  FoldPageLayoutComponent,
  type FoldButtonSize,
  type FoldButtonVariant,
} from "../../../src/index";

/** `/button` — the `[foldButton]` gallery page. */
@Component({
  selector: "gal-button-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    FoldPageLayoutComponent,
    FoldButtonComponent,
    FoldIconComponent,
  ],
  templateUrl: "./button.page.html",
})
export default class ButtonPage {
  protected readonly buttonVariants: FoldButtonVariant[] = [
    "primary",
    "recommended",
    "critical",
    "ghost",
    "solid",
  ];
  protected readonly buttonSizes: FoldButtonSize[] = ["sm", "md", "lg"];
  protected readonly buttonClicks = signal(0);
  protected readonly busy = signal(false);
}
