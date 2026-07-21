import { Component, computed, signal } from "@angular/core";
import { KindBadgeComponent } from "../kind-badge.component";
import { DevPlaygroundComponent } from "../playground.component";
import {
  Sh3PageLayoutComponent,
  Sh3SliderComponent,
  Sh3TabLayoutComponent,
  Sh3TabNavComponent,
  type Sh3TabNavItem,
} from "../../src/index";

/** `/tab-layout` — the `sh3-tab-layout` gallery page. */
@Component({
  selector: "gal-tab-layout-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    Sh3PageLayoutComponent,
    Sh3TabLayoutComponent,
    Sh3TabNavComponent,
    Sh3SliderComponent,
    DevPlaygroundComponent,
  ],
  templateUrl: "./tab-layout.page.html",
})
export default class TabLayoutPage {
  protected readonly tabs: Sh3TabNavItem[] = [
    { key: "overview", label: "Overview", icon: "grid" },
    { key: "members", label: "Members", icon: "team", badge: 3 },
    { key: "settings", label: "Settings", icon: "settings" },
  ];
  protected readonly active = signal("overview");

  protected readonly tlPlacement = signal<"top" | "side">("side");
  protected readonly tlFoldAt = signal(720);
  /** Preview width — drag it across `foldAt` to watch a side rail fold on top. */
  protected readonly tlWidth = signal(760);

  protected readonly tabLayoutCode = computed(() => {
    const attrs: string[] = [];
    if (this.tlPlacement() !== "top") {
      attrs.push(`placement="${this.tlPlacement()}"`);
    }
    if (this.tlFoldAt() !== 720) {
      attrs.push(`[foldAt]="${this.tlFoldAt()}"`);
    }
    const open = `<sh3-tab-layout${attrs.length ? " " + attrs.join(" ") : ""} #tl="sh3TabLayout">`;
    return [
      open,
      "  <sh3-tab-nav",
      "    tabNav",
      `    [direction]="tl.stacked() ? 'horizontal' : 'vertical'"`,
      '    [tabs]="tabs"',
      '    [activeKey]="tab()"',
      '    (tabChange)="tab.set($event)"',
      "  />",
      "  <!-- untagged content → the panel the active tab drives -->",
      "  <app-tab-content />",
      "</sh3-tab-layout>",
    ].join("\n");
  });
}
