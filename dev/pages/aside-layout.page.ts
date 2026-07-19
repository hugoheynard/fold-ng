import { Component, computed, signal } from "@angular/core";
import {
  Sh3AsideLayoutComponent,
  Sh3PageLayoutComponent,
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
    Sh3SliderComponent,
    DevPlaygroundComponent,
  ],
  templateUrl: "./aside-layout.page.html",
})
export default class AsideLayoutPage {
  protected readonly aslRows = [1, 2, 3, 4, 5, 6, 7, 8];
  protected readonly aslLeft = signal(false);
  protected readonly aslEqual = signal(false);
  protected readonly aslOffset = signal(8);

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
