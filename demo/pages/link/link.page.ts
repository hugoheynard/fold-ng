import { Component } from "@angular/core";
import { KindBadgeComponent } from "../../kind-badge.component";
import {
  FoldLinkComponent,
  FoldPageLayoutComponent,
} from "../../../src/public-api";

/** `/link` — the `fold-link` gallery page. */
@Component({
  selector: "gal-link-page",
  standalone: true,
  imports: [KindBadgeComponent, FoldPageLayoutComponent, FoldLinkComponent],
  templateUrl: "./link.page.html",
})
export default class LinkPage {}
