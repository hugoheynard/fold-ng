import { Component, computed, signal, ViewEncapsulation } from "@angular/core";
import {
  FoldAsideLayoutComponent,
  type FoldAsideBand,
  FoldCardComponent,
  FoldPageLayoutComponent,
  FoldSliderComponent,
} from "../../../src/public-api";
import { DevPlaygroundComponent } from "../../components/playground.component";
import { KindBadgeComponent } from "../../components/kind-badge.component";

/** `/aside-layout` — the `fold-aside-layout` gallery page. */
@Component({
  selector: "gal-aside-layout-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    FoldPageLayoutComponent,
    FoldAsideLayoutComponent,
    FoldCardComponent,
    FoldSliderComponent,
    DevPlaygroundComponent,
  ],
  templateUrl: "./aside-layout.page.html",
  styleUrl: "./aside-layout.page.scss",
  encapsulation: ViewEncapsulation.None,
})
export default class AsideLayoutPage {
  protected readonly aslLeft = signal(false);
  protected readonly aslEqual = signal(false);
  protected readonly aslOffset = signal(8);
  /** Which rail sits on the band ground — an elevation, not a surface. */
  protected readonly aslBand = signal<FoldAsideBand>("none");
  protected readonly bands = [
    "none",
    "left",
    "right",
    "both",
  ] as const satisfies readonly FoldAsideBand[];
  /** asideLeft / asideRight rail widths (real px) — slide to 0 or wide to see limits. */
  protected readonly aslRailWidth = signal(220);
  protected readonly aslSideWidth = signal(300);

  protected readonly asideLayoutCode = computed(() => {
    const left = this.aslLeft();
    const offset = this.aslOffset();
    const open =
      offset === 24
        ? "<fold-aside-layout>"
        : `<fold-aside-layout [topOffset]="${offset}">`;
    return [
      open,
      ...(left ? ["  <app-timeline asideLeft />"] : []),
      "  <!-- untagged elements → centre column -->",
      "  <app-header />",
      '  <fold-page-section title="…">…</fold-page-section>',
      "  <!-- tag each rail element -->",
      "  <app-history asideRight />",
      "  <app-actions asideRight />",
      "</fold-aside-layout>",
    ].join("\n");
  });
}
