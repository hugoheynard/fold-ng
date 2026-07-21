import { Component, computed, inject, signal } from "@angular/core";
import { KindBadgeComponent } from "../kind-badge.component";
import { DevPlaygroundComponent } from "../playground.component";
import {
  Sh3BadgeComponent,
  Sh3IconComponent,
  Sh3PageLayoutComponent,
  Sh3PanelHostService,
  Sh3TabNavComponent,
  type Sh3BadgeVariant,
  type Sh3IconName,
  type Sh3TabNavItem,
} from "../../src/index";
import { TabPanelComponent } from "../tab-panel.component";

type TabStyle = "underline" | "fill";
type TabDirection = "horizontal" | "vertical";
type TabSize = "reduce" | "compact" | "comfortable";
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
    Sh3BadgeComponent,
    DevPlaygroundComponent,
  ],
  templateUrl: "./tab-nav.page.html",
})
export default class TabNavPage {
  private readonly panelHost = inject(Sh3PanelHostService);

  /* ── Playground ─────────────────────────────────────────────────────────── */
  protected readonly tabCounts = [2, 3, 5] as const;
  protected readonly tabSizes = ["reduce", "compact", "comfortable"] as const;
  protected readonly tnStyle = signal<TabStyle>("underline");
  protected readonly tnDirection = signal<TabDirection>("horizontal");
  protected readonly tnSize = signal<TabSize>("compact");
  protected readonly tnBackground = signal<TabBackground>("surface");
  protected readonly tnBadge = signal(true);
  protected readonly tnIcon = signal(true);
  protected readonly tnCount = signal<number>(3);
  protected readonly tnActive = signal("overview");

  private readonly TAB_POOL: readonly {
    key: string;
    label: string;
    icon: Sh3IconName;
    badge?: number;
  }[] = [
    { key: "overview", label: "Overview", icon: "grid" },
    { key: "members", label: "Members", icon: "team", badge: 3 },
    { key: "settings", label: "Settings", icon: "settings" },
    { key: "activity", label: "Activity", icon: "timeline" },
    { key: "billing", label: "Billing", icon: "contracts", badge: 2 },
  ];

  protected readonly tnTabs = computed<Sh3TabNavItem[]>(() =>
    this.TAB_POOL.slice(0, this.tnCount()).map((t) => ({
      key: t.key,
      label: t.label,
      icon: this.tnIcon() ? t.icon : undefined,
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

  /* ── Mock page content — one distinct layout per tab ────────────────────── */
  protected readonly overviewStats = [
    { label: "Contracts", value: "128" },
    { label: "Active", value: "96" },
    { label: "Expiring", value: "7" },
  ] as const;

  protected readonly members: readonly {
    initials: string;
    name: string;
    role: string;
    status: string;
    tone: Sh3BadgeVariant;
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
    {
      initials: "SD",
      name: "Sofia Duarte",
      role: "Engineer",
      status: "Active",
      tone: "success",
    },
  ];

  protected readonly settingsFields = [
    { label: "Workspace name", value: "Acme Records" },
    { label: "Default currency", value: "EUR" },
    { label: "Contract reminders", value: "14 days before" },
  ] as const;

  protected readonly activity = [
    { text: "Contract #A-2291 signed", when: "2 hours ago" },
    { text: "Inès Lambert joined the workspace", when: "yesterday" },
    { text: "Invoice INV-0043 paid", when: "3 days ago" },
  ] as const;

  protected readonly invoices = [
    { ref: "INV-0043", date: "12 Jun 2026", amount: "€ 2 400" },
    { ref: "INV-0042", date: "12 May 2026", amount: "€ 2 400" },
    { ref: "INV-0041", date: "12 Apr 2026", amount: "€ 1 850" },
  ] as const;

  protected openTabPanel(): void {
    this.panelHost.open(TabPanelComponent, { side: "right" });
  }
}
