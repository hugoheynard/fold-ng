import { Component, computed, signal, ViewEncapsulation } from "@angular/core";
import { KindBadgeComponent } from "../../kind-badge.component";
import { DevPlaygroundComponent } from "../../playground.component";
import {
  FoldPageLayoutComponent,
  FoldSliderComponent,
  FoldStickyColumnDirective,
  type FoldStickyColumnAnchor,
} from "../../../src/index";

/** `/sticky-column` — the `[foldStickyColumn]` directive gallery page. */
@Component({
  selector: "gal-sticky-column-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    FoldPageLayoutComponent,
    FoldSliderComponent,
    FoldStickyColumnDirective,
    DevPlaygroundComponent,
  ],
  templateUrl: "./sticky-column.page.html",
  styleUrl: "./sticky-column.page.scss",
  encapsulation: ViewEncapsulation.None,
})
export default class StickyColumnPage {
  protected readonly stickyDemoRows = [1, 2, 3, 4, 5, 6, 7, 8];
  protected readonly stickyDemoAnchor = signal<FoldStickyColumnAnchor>("top");
  protected readonly stickyDemoAnchors: readonly FoldStickyColumnAnchor[] = [
    "top",
    "center",
    "bottom",
  ];
  protected readonly stickyDemoOffset = signal(8);

  protected readonly stickyColumnCode = computed(() => {
    const anchor = this.stickyDemoAnchor();
    const offset = this.stickyDemoOffset();
    const anchorAttr = anchor === "top" ? "" : ` sticky="${anchor}"`;
    const offsetAttr = offset === 0 ? "" : ` [stickyOffset]="${offset}"`;
    return [
      "<!-- layout only; keeps the <aside> semantics -->",
      `<aside foldStickyColumn${anchorAttr}${offsetAttr}>`,
      "  <app-history />",
      "  <app-termination />",
      "</aside>",
      "",
      "/* the page un-sticks at its own stacking breakpoint */",
      "@media (max-width: 1040px) {",
      "  aside[foldStickyColumn] {",
      "    --fold-sticky-column-position: static;",
      "  }",
      "}",
    ].join("\n");
  });
}
