import { Component, signal } from "@angular/core";
import { KindBadgeComponent } from "../../kind-badge.component";
import {
  FoldButtonComponent,
  FoldCardComponent,
  FoldEmptyStateComponent,
  FoldIconComponent,
  FoldLoadingStateComponent,
  FoldPageLayoutComponent,
  FoldPageSectionComponent,
} from "../../../src/public-api";

/** `/state` — the async placeholders: `fold-loading` + `fold-empty-state`. */
@Component({
  selector: "gal-state-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    FoldPageLayoutComponent,
    FoldPageSectionComponent,
    FoldCardComponent,
    FoldButtonComponent,
    FoldIconComponent,
    FoldLoadingStateComponent,
    FoldEmptyStateComponent,
  ],
  templateUrl: "./state.page.html",
  styleUrl: "./state.page.scss",
})
export default class StatePage {
  protected readonly created = signal(0);
}
