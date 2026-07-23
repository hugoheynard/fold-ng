import { Component } from "@angular/core";
import { KindBadgeComponent } from "../../kind-badge.component";
import {
  FoldElementTitleComponent,
  FoldPageLayoutComponent,
} from "../../../src/public-api";

/** `/element-title` — the `fold-element-title` gallery page. */
@Component({
  selector: "gal-element-title-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    FoldPageLayoutComponent,
    FoldElementTitleComponent,
  ],
  templateUrl: "./element-title.page.html",
})
export default class ElementTitlePage {}
