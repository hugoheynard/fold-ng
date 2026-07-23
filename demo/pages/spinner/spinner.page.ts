import { Component } from "@angular/core";
import { KindBadgeComponent } from "../../components/kind-badge.component";
import {
  FoldSpinnerComponent,
  FoldPageLayoutComponent,
  type FoldSpinnerSize,
} from "../../../src/public-api";

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
