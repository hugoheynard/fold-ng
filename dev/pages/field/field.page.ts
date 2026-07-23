import { Component, ViewEncapsulation } from "@angular/core";
import { KindBadgeComponent } from "../../kind-badge.component";
import {
  FoldBadgeComponent,
  FoldFieldComponent,
  FoldFieldListComponent,
  FoldIconComponent,
  FoldLinkComponent,
  FoldPageLayoutComponent,
  FoldStatusBadgeComponent,
} from "../../../src/index";

/** `/field` — the `fold-field` · `fold-field-list` gallery page. */
@Component({
  selector: "gal-field-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    FoldPageLayoutComponent,
    FoldFieldComponent,
    FoldFieldListComponent,
    FoldStatusBadgeComponent,
    FoldBadgeComponent,
    FoldIconComponent,
    FoldLinkComponent,
  ],
  templateUrl: "./field.page.html",
  styleUrl: "./field.page.scss",
  encapsulation: ViewEncapsulation.None,
})
export default class FieldPage {}
