import { Component } from "@angular/core";
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
})
export default class FieldPage {}
