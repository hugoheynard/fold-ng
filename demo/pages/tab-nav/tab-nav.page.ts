import {
  Component,
  computed,
  inject,
  signal,
  ViewEncapsulation,
} from "@angular/core";
import { RouterLink } from "@angular/router";
import { KindBadgeComponent } from "../../components/kind-badge.component";
import { ComposedOfComponent } from "../../components/composed-of.component";
import { DevPlaygroundComponent } from "../../components/playground.component";
import {
  FoldBadgeComponent,
  FoldCalloutComponent,
  FoldIconComponent,
  FoldPageLayoutComponent,
  FoldPanelHostService,
  FoldNavLayoutComponent,
  FoldViewNavComponent,
  type FoldBadgeVariant,
  type FoldIconName,
  type FoldViewNavItem,
} from "../../../src/public-api";
import { TabPanelComponent } from "../../components/tab-panel.component";

type TabStyle = "underline" | "fill";
type TabDirection = "horizontal" | "vertical";
type TabSize = "compact" | "comfortable";
type TabBackground = "transparent" | "surface";

/** `/tab-nav` — the `fold-view-nav` gallery page. */
@Component({
  selector: "gal-tab-nav-page",
  standalone: true,
  imports: [
    RouterLink,
    KindBadgeComponent,
    ComposedOfComponent,
    FoldPageLayoutComponent,
    FoldCalloutComponent,
    FoldNavLayoutComponent,
    FoldViewNavComponent,
    FoldIconComponent,
    FoldBadgeComponent,
    DevPlaygroundComponent,
  ],
  templateUrl: "./tab-nav.page.html",
  styleUrl: "./tab-nav.page.scss",
  encapsulation: ViewEncapsulation.None,
})
export default class TabNavPage {
  private readonly panelHost = inject(FoldPanelHostService);

  /* ── Playground ─────────────────────────────────────────────────────────── */
  protected readonly tabCounts = [2, 3, 5] as const;
  protected readonly tabSizes = ["compact", "comfortable"] as const;
  protected readonly tnStyle = signal<TabStyle>("underline");
  protected readonly tnDirection = signal<TabDirection>("vertical");
  protected readonly tnSize = signal<TabSize>("compact");
  protected readonly tnCollapsed = signal(false);
  protected readonly tnBackground = signal<TabBackground>("transparent");
  protected readonly tnBadge = signal(true);
  protected readonly tnIcon = signal(true);
  protected readonly tnCount = signal<number>(3);
  protected readonly tnActive = signal("overview");

  private readonly TAB_POOL: readonly {
    key: string;
    label: string;
    icon: FoldIconName;
    badge?: number;
  }[] = [
    { key: "overview", label: "Overview", icon: "grid" },
    { key: "members", label: "Members", icon: "team", badge: 3 },
    { key: "settings", label: "Settings", icon: "settings" },
    { key: "activity", label: "Activity", icon: "timeline" },
    { key: "billing", label: "Billing", icon: "contracts", badge: 2 },
  ];

  protected readonly tnTabs = computed<FoldViewNavItem[]>(() =>
    this.TAB_POOL.slice(0, this.tnCount()).map((t) => ({
      key: t.key,
      label: t.label,
      ...(this.tnIcon() ? { icon: t.icon } : {}),
      badge: this.tnBadge() ? (t.badge ?? null) : null,
    })),
  );

  /** The active key, kept valid when the tab count shrinks past it. */
  protected readonly tnActiveKey = computed(() => {
    const keys = this.tnTabs().map((t) => t.key);
    return keys.includes(this.tnActive()) ? this.tnActive() : (keys[0] ?? "");
  });

  /** The active tab's label — the routed view's page title. */
  protected readonly tnActiveLabel = computed(
    () =>
      this.tnTabs().find((t) => t.key === this.tnActiveKey())?.label ??
      "Overview",
  );

  protected readonly tabNavCode = computed(() => {
    const side = this.tnDirection() === "vertical";
    // Link items → real <a routerLink>: cmd/middle-click, deep-links, and the
    // active state (via routerLinkActive) all come for free. No activeKey.
    const attrs = ['[items]="items"'];
    if (side) {
      // direction="auto" makes the bar follow the wrapping layout — no wiring.
      attrs.push("tabNav", 'direction="auto"');
    }
    if (this.tnStyle() !== "underline") {
      attrs.push(`activeStyle="${this.tnStyle()}"`);
    }
    if (this.tnSize() !== "compact") {
      attrs.push(`size="${this.tnSize()}"`);
    }
    if (this.tnCollapsed()) {
      attrs.push("collapsed");
    }
    if (this.tnBackground() !== "transparent") {
      attrs.push(`background="${this.tnBackground()}"`);
    }
    const nav = ["<fold-view-nav", ...attrs.map((a) => `  ${a}`), "/>"];
    // A collapsed rail is icon-only, so narrow its track to match.
    const layoutOpen =
      side && this.tnCollapsed()
        ? '<fold-nav-layout placement="side"\n  style="--fold-nav-layout-rail-width: 56px">'
        : '<fold-nav-layout placement="side">';
    const markup = side
      ? [
          layoutOpen,
          ...nav.map((l) => `  ${l}`),
          "  <router-outlet />",
          "</fold-nav-layout>",
        ]
      : [...nav, "<router-outlet />"];
    return [
      "<!-- items navigate; routerLinkActive marks the current one -->",
      ...markup,
      "",
      "// component — no activeKey: the URL drives the active item",
      "items = [",
      "  { key: 'overview', label: 'Overview', icon: 'grid', link: 'overview' },",
      "  { key: 'members', label: 'Members', icon: 'team', link: 'members', badge: 3 },",
      "  { key: 'settings', label: 'Settings', icon: 'settings', link: 'settings' },",
      "];",
    ].join("\n");
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
