import { Component, ViewEncapsulation } from "@angular/core";
import { KindBadgeComponent } from "../../kind-badge.component";
import {
  FoldButtonComponent,
  FoldCardComponent,
  FoldElementTitleComponent,
  FoldPageLayoutComponent,
  FoldPageSectionComponent,
} from "../../../src/public-api";

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
  styleUrl: "./page-section.page.scss",
  encapsulation: ViewEncapsulation.None,
})
export default class PageSectionPage {}
