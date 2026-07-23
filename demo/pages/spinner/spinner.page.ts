import { Component } from "@angular/core";
import { KindBadgeComponent } from "../../kind-badge.component";
import {
  FoldSpinnerComponent,
  FoldPageLayoutComponent,
  type FoldSpinnerSize,
} from "../../../src/index";

/** `/spinner` — the `fold-spinner` gallery page. */
@Component({
  selector: "gal-spinner-page",
  standalone: true,
  imports: [KindBadgeComponent, FoldPageLayoutComponent, FoldSpinnerComponent],
  templateUrl: "./spinner.page.html",
})
export default class SpinnerPage {
  protected readonly sizes: FoldSpinnerSize[] = ["xs", "sm", "md", "lg", "xl"];
}
