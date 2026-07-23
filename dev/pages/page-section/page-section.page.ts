import { Component } from "@angular/core";
import { KindBadgeComponent } from "../../kind-badge.component";
import {
  FoldButtonComponent,
  FoldCardComponent,
  FoldElementTitleComponent,
  FoldPageLayoutComponent,
  FoldPageSectionComponent,
} from "../../../src/index";

/** `/page-section` — the `fold-page-section` gallery page. */
@Component({
  selector: "gal-page-section-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    FoldPageLayoutComponent,
    FoldPageSectionComponent,
    FoldCardComponent,
    FoldElementTitleComponent,
    FoldButtonComponent,
  ],
  templateUrl: "./page-section.page.html",
})
export default class PageSectionPage {}
