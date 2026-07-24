import { Component, computed, signal, ViewEncapsulation } from "@angular/core";
import { KindBadgeComponent } from "../../components/kind-badge.component";
import { DevPlaygroundComponent } from "../../components/playground.component";
import {
  FoldPageLayoutComponent,
  FoldPageSectionComponent,
  FoldSliderComponent,
  FoldNavLayoutComponent,
  FoldViewNavComponent,
  type FoldViewNavItem,
} from "../../../src/public-api";

/** `/tab-layout` — the `fold-nav-layout` gallery page. */
@Component({
  selector: "gal-tab-layout-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    FoldPageLayoutComponent,
    FoldPageSectionComponent,
    FoldNavLayoutComponent,
    FoldViewNavComponent,
    FoldSliderComponent,
    DevPlaygroundComponent,
  ],
  templateUrl: "./tab-layout.page.html",
  styleUrl: "./tab-layout.page.scss",
  encapsulation: ViewEncapsulation.None,
})
export default class TabLayoutPage {
  protected readonly tabs: FoldViewNavItem[] = [
    { key: "overview", label: "Overview", icon: "grid" },
    { key: "members", label: "Members", icon: "team", badge: 3 },
    { key: "settings", label: "Settings", icon: "settings" },
  ];
  protected readonly active = signal("overview");

  /** The "tabbed section" example — its own tabs, composed inside a page-section. */
  protected readonly sectionTabs: FoldViewNavItem[] = [
    { key: "general", label: "General", icon: "settings" },
    { key: "billing", label: "Billing", icon: "contracts" },
    { key: "team", label: "Team", icon: "team" },
  ];
  protected readonly sectionActive = signal("general");

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
    const open = `<fold-nav-layout${attrs.length ? " " + attrs.join(" ") : ""} #tl="foldNavLayout">`;
    return [
      open,
      "  <fold-view-nav",
      "    tabNav",
      `    [direction]="tl.stacked() ? 'horizontal' : 'vertical'"`,
      '    [tabs]="tabs"',
      '    [activeKey]="tab()"',
      '    (tabChange)="tab.set($event)"',
      "  />",
      "  <!-- untagged content → the panel the active tab drives -->",
      "  <app-tab-content />",
      "</fold-nav-layout>",
    ].join("\n");
  });
}
