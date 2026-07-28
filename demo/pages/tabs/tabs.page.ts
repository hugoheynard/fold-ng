import { Component, computed, signal, ViewEncapsulation } from "@angular/core";
import { RouterLink } from "@angular/router";
import { KindBadgeComponent } from "../../components/kind-badge.component";
import { ComposedOfComponent } from "../../components/composed-of.component";
import { DevPlaygroundComponent } from "../../components/playground.component";
import {
  FoldBadgeComponent,
  FoldCalloutComponent,
  FoldNavLayoutComponent,
  FoldPageLayoutComponent,
  FoldTabPanelComponent,
  FoldTabsComponent,
  type FoldBadgeVariant,
  type FoldTabItem,
} from "../../../src/public-api";

type TabStyle = "underline" | "fill";
type TabDir = "horizontal" | "vertical";

/** `/tabs` — the `fold-tabs` in-page ARIA Tabs widget gallery page. */
@Component({
  selector: "gal-tabs-page",
  standalone: true,
  imports: [
    RouterLink,
    KindBadgeComponent,
    ComposedOfComponent,
    DevPlaygroundComponent,
    FoldPageLayoutComponent,
    FoldCalloutComponent,
    FoldNavLayoutComponent,
    FoldTabsComponent,
    FoldTabPanelComponent,
    FoldBadgeComponent,
  ],
  templateUrl: "./tabs.page.html",
  styleUrl: "./tabs.page.scss",
  encapsulation: ViewEncapsulation.None,
})
export default class TabsPage {
  /* ── Playground knobs ─────────────────────────────────────────────────── */
  protected readonly style = signal<TabStyle>("underline");
  protected readonly dir = signal<TabDir>("horizontal");
  protected readonly active = signal("overview");

  protected readonly tabs: FoldTabItem[] = [
    { key: "overview", label: "Overview", icon: "grid" },
    { key: "members", label: "Members", icon: "team", badge: 3 },
    { key: "settings", label: "Settings", icon: "settings" },
  ];

  /* ── The generated snippet — the whole point: bar + one panel per key,
   *    coordinated by the #t ref. ─────────────────────────────────────────── */
  protected readonly code = computed(() => {
    const attrs = ['#t="foldTabs"', '[tabs]="tabs"', '[(activeKey)]="active"'];
    if (this.style() !== "underline") {
      attrs.push(`activeStyle="${this.style()}"`);
    }
    if (this.dir() !== "horizontal") {
      attrs.push(`direction="${this.dir()}"`);
    }
    return [
      "<!-- one tablist + one panel per key; the #t ref pairs them -->",
      "<fold-tabs",
      ...attrs.map((a) => `  ${a}`),
      "/>",
      '<fold-tab-panel [tabs]="t" key="overview">…</fold-tab-panel>',
      '<fold-tab-panel [tabs]="t" key="members">…</fold-tab-panel>',
      '<fold-tab-panel [tabs]="t" key="settings">…</fold-tab-panel>',
      "",
      "// component",
      "tabs = [{ key: 'overview', label: 'Overview', icon: 'grid' }, …];",
      "active = signal('overview');",
    ].join("\n");
  });

  /* ── Mock panel content ───────────────────────────────────────────────── */
  protected readonly stats = [
    { label: "Contracts", value: "128" },
    { label: "Active", value: "96" },
    { label: "Expiring", value: "7" },
  ] as const;

  protected readonly members: readonly {
    initials: string;
    name: string;
    role: string;
    status: string;
    tone: FoldBadgeVariant;
  }[] = [
    {
      initials: "MM",
      name: "Marc Machine",
      role: "Producer",
      status: "Active",
      tone: "success",
    },
    {
      initials: "IL",
      name: "Inès Lambert",
      role: "A&R",
      status: "Expiring",
      tone: "warning",
    },
  ];

  protected readonly fields = [
    { label: "Workspace name", value: "Acme Records" },
    { label: "Default currency", value: "EUR" },
    { label: "Contract reminders", value: "14 days before" },
  ] as const;
}
