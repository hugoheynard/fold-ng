import { Component, computed, signal } from "@angular/core";
import {
  Sh3AsideLayoutComponent,
  Sh3CardComponent,
  Sh3PageLayoutComponent,
  Sh3PageSectionComponent,
  Sh3SliderComponent,
} from "../../src/index";
import { DevPlaygroundComponent } from "../playground.component";

/** `/aside-layout` — the `sh3-aside-layout` gallery page. */
@Component({
  selector: "gal-aside-layout-page",
  standalone: true,
  host: { class: "gal-page" },
  imports: [
    Sh3PageLayoutComponent,
    Sh3AsideLayoutComponent,
    Sh3CardComponent,
    Sh3PageSectionComponent,
    Sh3SliderComponent,
    DevPlaygroundComponent,
  ],
  templateUrl: "./aside-layout.page.html",
})
export default class AsideLayoutPage {
  protected readonly aslLeft = signal(false);
  protected readonly aslEqual = signal(false);
  protected readonly aslOffset = signal(8);
  /** asideLeft / asideRight rail widths (px) — slide to 0 or wide to see limits. */
  protected readonly aslRailWidth = signal(56);
  protected readonly aslSideWidth = signal(96);

  protected readonly asideLayoutCode = computed(() => {
    const left = this.aslLeft();
    const offset = this.aslOffset();
    const open =
      offset === 24
        ? "<sh3-aside-layout>"
        : `<sh3-aside-layout [topOffset]="${offset}">`;
    return [
      open,
      ...(left ? ["  <app-timeline asideLeft />"] : []),
      "  <!-- untagged elements → centre column -->",
      "  <app-header />",
      '  <sh3-page-section title="…">…</sh3-page-section>',
      "  <!-- tag each rail element -->",
      "  <app-history asideRight />",
      "  <app-actions asideRight />",
      "</sh3-aside-layout>",
    ].join("\n");
  });
}
