import { Component, computed, signal, ViewEncapsulation } from "@angular/core";
import { KindBadgeComponent } from "../../components/kind-badge.component";
import { DevPlaygroundComponent } from "../../components/playground.component";
import {
  FoldPageLayoutComponent,
  FoldScrollRegionDirective,
  type FoldScrollAxis,
} from "../../../src/public-api";

/** `/scroll-region` — the `[foldScrollRegion]` directive gallery page. */
@Component({
  selector: "gal-scroll-region-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    FoldPageLayoutComponent,
    FoldScrollRegionDirective,
    DevPlaygroundComponent,
  ],
  templateUrl: "./scroll-region.page.html",
  styleUrl: "./scroll-region.page.scss",
  encapsulation: ViewEncapsulation.None,
})
export default class ScrollRegionPage {
  protected readonly rows = Array.from({ length: 14 }, (_, i) => i + 1);
  protected readonly axis = signal<FoldScrollAxis>("block");
  protected readonly axes: readonly FoldScrollAxis[] = [
    "block",
    "inline",
    "both",
  ];

  protected readonly code = computed(() => {
    const axis = this.axis();
    const attr = axis === "block" ? "" : `="${axis}"`;
    return [
      "<!-- one directive: overflow, min-*: 0, overscroll-behavior, house",
      "     scrollbar — and it registers with the shell so an overlay freezes",
      "     it while a modal is open. No `overflow` written by hand. -->",
      `<div foldScrollRegion${attr} class="list-body">…rows…</div>`,
      "",
      "<!-- stage split view: list scrolls on its own, detail flows -->",
      '<fold-app-shell scroll="stage">',
      "  <fold-aside-layout>",
      "    <nav asideleft foldScrollRegion>…long list…</nav>",
      "    <article>…detail…</article>",
      "  </fold-aside-layout>",
      "</fold-app-shell>",
    ].join("\n");
  });
}
