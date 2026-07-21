import { Component, computed, inject, signal } from "@angular/core";
import { KindBadgeComponent } from "../kind-badge.component";
import { DevPlaygroundComponent } from "../playground.component";
import {
  Sh3IconComponent,
  Sh3PageLayoutComponent,
  Sh3PanelHostService,
  Sh3TabNavComponent,
  type Sh3TabNavItem,
} from "../../src/index";
import { TabPanelComponent } from "../tab-panel.component";

type TabStyle = "underline" | "fill";
type TabDirection = "horizontal" | "vertical";
type TabSize = "compact" | "comfortable";
type TabBackground = "transparent" | "surface";

/** `/tab-nav` — the `sh3-tab-nav` gallery page. */
@Component({
  selector: "gal-tab-nav-page",
  standalone: true,
  host: { class: "gal-page" },
  imports: [
    KindBadgeComponent,
    Sh3PageLayoutComponent,
    Sh3TabNavComponent,
    Sh3IconComponent,
    DevPlaygroundComponent,
  ],
  templateUrl: "./tab-nav.page.html",
})
export default class TabNavPage {
  private readonly panelHost = inject(Sh3PanelHostService);

  /* ── Playground ─────────────────────────────────────────────────────────── */
  protected readonly tabCounts = [2, 3, 5] as const;
  protected readonly tnStyle = signal<TabStyle>("underline");
  protected readonly tnDirection = signal<TabDirection>("horizontal");
  protected readonly tnSize = signal<TabSize>("compact");
  protected readonly tnBackground = signal<TabBackground>("surface");
  protected readonly tnBadge = signal(true);
  protected readonly tnCount = signal<number>(3);
  protected readonly tnActive = signal("overview");

  private readonly TAB_POOL: readonly {
    key: string;
    label: string;
    badge?: number;
  }[] = [
    { key: "overview", label: "Overview" },
    { key: "members", label: "Members", badge: 3 },
    { key: "settings", label: "Settings" },
    { key: "activity", label: "Activity" },
    { key: "billing", label: "Billing", badge: 2 },
  ];

  protected readonly tnTabs = computed<Sh3TabNavItem[]>(() =>
    this.TAB_POOL.slice(0, this.tnCount()).map((t) => ({
      key: t.key,
      label: t.label,
      badge: this.tnBadge() ? (t.badge ?? null) : null,
    })),
  );

  /** The active key, kept valid when the tab count shrinks past it. */
  protected readonly tnActiveKey = computed(() => {
    const keys = this.tnTabs().map((t) => t.key);
    return keys.includes(this.tnActive()) ? this.tnActive() : keys[0];
  });

  protected readonly tabNavCode = computed(() => {
    const attrs = ['[tabs]="tabs"', '[activeKey]="active()"'];
    if (this.tnStyle() !== "underline") {
      attrs.push(`activeStyle="${this.tnStyle()}"`);
    }
    if (this.tnDirection() !== "horizontal") {
      attrs.push(`direction="${this.tnDirection()}"`);
    }
    if (this.tnSize() !== "compact") {
      attrs.push(`size="${this.tnSize()}"`);
    }
    if (this.tnBackground() !== "surface") {
      attrs.push(`background="${this.tnBackground()}"`);
    }
    attrs.push('(tabChange)="active.set($event)"');
    return ["<sh3-tab-nav", ...attrs.map((a) => `  ${a}`), "/>"].join("\n");
  });

  protected openTabPanel(): void {
    this.panelHost.open(TabPanelComponent, { side: "right" });
  }
}
