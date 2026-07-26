import { Component } from "@angular/core";
import { KindBadgeComponent } from "../../components/kind-badge.component";
import { ComposedOfComponent } from "../../components/composed-of.component";
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
    ComposedOfComponent,
    FoldPageLayoutComponent,
    FoldElementTitleComponent,
  ],
  templateUrl: "./element-title.page.html",
})
export default class ElementTitlePage {}
