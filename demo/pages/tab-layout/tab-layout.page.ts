import { Component, computed, signal, ViewEncapsulation } from "@angular/core";
import { KindBadgeComponent } from "../../components/kind-badge.component";
import { DevPlaygroundComponent } from "../../components/playground.component";
import {
  FoldPageLayoutComponent,
  FoldPageSectionComponent,
  FoldSliderComponent,
  FoldTabLayoutComponent,
  FoldTabNavComponent,
  type FoldTabNavItem,
} from "../../../src/public-api";

/** `/tab-layout` — the `fold-tab-layout` gallery page. */
@Component({
  selector: "gal-tab-layout-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    FoldPageLayoutComponent,
    FoldPageSectionComponent,
    FoldTabLayoutComponent,
    FoldTabNavComponent,
    FoldSliderComponent,
    DevPlaygroundComponent,
  ],
  templateUrl: "./tab-layout.page.html",
  styleUrl: "./tab-layout.page.scss",
  encapsulation: ViewEncapsulation.None,
})
export default class TabLayoutPage {
  protected readonly tabs: FoldTabNavItem[] = [
    { key: "overview", label: "Overview", icon: "grid" },
    { key: "members", label: "Members", icon: "team", badge: 3 },
    { key: "settings", label: "Settings", icon: "settings" },
  ];
  protected readonly active = signal("overview");

  /** The "tabbed section" example — its own tabs, composed inside a page-section. */
  protected readonly sectionTabs: FoldTabNavItem[] = [
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
    const open = `<fold-tab-layout${attrs.length ? " " + attrs.join(" ") : ""} #tl="foldTabLayout">`;
    return [
      open,
      "  <fold-tab-nav",
      "    tabNav",
      `    [direction]="tl.stacked() ? 'horizontal' : 'vertical'"`,
      '    [tabs]="tabs"',
      '    [activeKey]="tab()"',
      '    (tabChange)="tab.set($event)"',
      "  />",
      "  <!-- untagged content → the panel the active tab drives -->",
      "  <app-tab-content />",
      "</fold-tab-layout>",
    ].join("\n");
  });
}
