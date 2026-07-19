import { Component, computed, signal } from "@angular/core";
import {
  Sh3IconComponent,
  Sh3PageLayoutComponent,
  Sh3SliderComponent,
  Sh3StickyColumnDirective,
  type Sh3StickyColumnAnchor,
} from "../../src/index";

/** `/sticky-column` — the `[sh3StickyColumn]` directive gallery page. */
@Component({
  selector: "gal-sticky-column-page",
  standalone: true,
  imports: [
    Sh3PageLayoutComponent,
    Sh3SliderComponent,
    Sh3StickyColumnDirective,
    Sh3IconComponent,
  ],
  templateUrl: "./sticky-column.page.html",
})
export default class StickyColumnPage {
  protected readonly demoCopied = signal(false);
  protected readonly stickyDemoRows = [1, 2, 3, 4, 5, 6, 7, 8];
  protected readonly stickyDemoAnchor = signal<Sh3StickyColumnAnchor>("top");
  protected readonly stickyDemoAnchors: readonly Sh3StickyColumnAnchor[] = [
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
      `<aside sh3StickyColumn${anchorAttr}${offsetAttr}>`,
      "  <app-history />",
      "  <app-termination />",
      "</aside>",
      "",
      "/* the page un-sticks at its own stacking breakpoint */",
      "@media (max-width: 1040px) {",
      "  aside[sh3StickyColumn] {",
      "    --sh3-sticky-column-position: static;",
      "  }",
      "}",
    ].join("\n");
  });

  protected copyDemoCode(): void {
    void navigator.clipboard.writeText(this.stickyColumnCode()).then(() => {
      this.demoCopied.set(true);
      setTimeout(() => this.demoCopied.set(false), 1500);
    });
  }
}
