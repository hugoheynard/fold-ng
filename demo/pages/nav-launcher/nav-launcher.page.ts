import { Component, signal, ViewEncapsulation } from "@angular/core";
import {
  FoldButtonComponent,
  FoldCalloutComponent,
  FoldCheckboxComponent,
  FoldNavGroupComponent,
  FoldNavLauncherComponent,
  FoldNavTileComponent,
  FoldPageLayoutComponent,
  FoldPageSectionComponent,
} from "../../../src/public-api";
import type { FoldIconName } from "../../../src/public-api";
import { KindBadgeComponent } from "../../components/kind-badge.component";
import { ComposedOfComponent } from "../../components/composed-of.component";

/** A second-level entry — a row on a group's sheet. */
interface LauncherEntry {
  readonly id: string;
  readonly label: string;
  readonly icon?: FoldIconName;
  readonly hint?: string;
  readonly tone?: "neutral" | "warning";
}

/** A level-1 item: a destination on its own, or a group when it has entries. */
interface LauncherSection {
  readonly id: string;
  readonly label: string;
  readonly icon: FoldIconName;
  readonly badge?: number;
  readonly badgeTone?: "accent" | "warning" | "alert";
  readonly entries?: readonly LauncherEntry[];
}

/** `/nav-launcher` — the `fold-nav-launcher` gallery page (live full-screen demo). */
@Component({
  selector: "gal-nav-launcher-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    ComposedOfComponent,
    FoldPageLayoutComponent,
    FoldPageSectionComponent,
    FoldButtonComponent,
    FoldCalloutComponent,
    FoldCheckboxComponent,
    FoldNavLauncherComponent,
    FoldNavGroupComponent,
    FoldNavTileComponent,
  ],
  templateUrl: "./nav-launcher.page.html",
  styleUrl: "./nav-launcher.page.scss",
  encapsulation: ViewEncapsulation.None,
})
export default class NavLauncherPage {
  /** The live launcher's open state (the button + the launcher share it). */
  protected readonly open = signal(false);

  /** The translucent treatment — off by default, as in the component. */
  protected readonly glass = signal(false);

  /** The current destination — the tile or row that lights up as active. */
  protected readonly active = signal("cockpit");

  /**
   * A back-office with seven sections, one of which holds seven more — the
   * shape that made a flat launcher stop working.
   */
  protected readonly sections: readonly LauncherSection[] = [
    {
      id: "commercial",
      label: "Sales",
      icon: "calendar",
      badge: 12,
      badgeTone: "accent",
      entries: [
        { id: "cockpit", label: "Dashboard", icon: "stats", hint: "today" },
        {
          id: "accounts",
          label: "Customer accounts",
          icon: "company",
          hint: "412 accounts",
        },
        {
          id: "leads",
          label: "Leads",
          icon: "team",
          hint: "5 to qualify",
          tone: "warning",
        },
        { id: "agenda", label: "Calendar", icon: "calendar", hint: "meetings" },
        // No icon on purpose: the row falls back to a status dot rather than
        // shifting its label, so the column still reads as a column.
        { id: "price-lists", label: "Price-list templates", hint: "9 grids" },
      ],
    },
    {
      id: "production",
      label: "Production",
      icon: "wrench",
      entries: [
        { id: "recap", label: "Summary", icon: "list", hint: "of the day" },
        {
          id: "orders",
          label: "Purchase orders",
          icon: "receipt",
          hint: "18 to raise",
        },
      ],
    },
    { id: "delivery", label: "Delivery", icon: "truck" },
    {
      id: "pim",
      label: "PIM",
      icon: "library",
      entries: [
        {
          id: "products",
          label: "Products",
          icon: "package",
          hint: "128 sheets",
        },
        {
          id: "categories",
          label: "Categories",
          icon: "folder",
          hint: "14 families",
        },
        { id: "vat", label: "VAT rates", icon: "percent", hint: "4 regimes" },
        {
          id: "collections",
          label: "Collections",
          icon: "grid",
          hint: "Shopify",
        },
        {
          id: "publishing",
          label: "Publishing",
          icon: "upload",
          hint: "3 waiting",
          tone: "warning",
        },
        { id: "places", label: "Locations", icon: "map-pin", hint: "6 shops" },
        {
          id: "integrations",
          label: "Integrations",
          icon: "globe",
          hint: "Shopify · B2B",
        },
      ],
    },
    {
      id: "admin",
      label: "Admin",
      icon: "shield",
      badge: 2,
      badgeTone: "warning",
      entries: [
        {
          id: "access",
          label: "Access to grant",
          icon: "shield",
          hint: "2 requests",
          tone: "warning",
        },
        { id: "users", label: "Users", icon: "user", hint: "23 accounts" },
        {
          id: "journal",
          label: "Activity log",
          icon: "timeline",
          hint: "7 days",
        },
      ],
    },
    { id: "analytics", label: "Analytics", icon: "stats" },
    { id: "ops", label: "OPS", icon: "lightning" },
    {
      id: "settings",
      label: "Settings",
      icon: "settings",
      entries: [
        { id: "s-sales", label: "Sales", icon: "briefcase", hint: "meetings" },
        { id: "s-catalog", label: "Catalogue", icon: "package", hint: "rules" },
        { id: "s-pricing", label: "Pricing", icon: "tag", hint: "3 scales" },
        { id: "s-alerts", label: "Alerts", icon: "bell", hint: "4 rules" },
      ],
    },
  ];

  /** Pick a destination and close — what a routed tile would do on navigation. */
  protected pick(id: string): void {
    this.active.set(id);
    this.open.set(false);
  }

  protected readonly usageCode = `<!-- The shell renders no built-in drawer; the launcher owns the mobile nav. -->
<fold-app-shell mobileNav="none" [(mobileNavOpen)]="navOpen">…</fold-app-shell>

<fold-nav-launcher [(open)]="navOpen" eyebrow="LFC B2B" heading="Admin">
  <!-- A tile that goes somewhere. -->
  <a fold-nav-tile icon="truck" label="Delivery" routerLink="/delivery"></a>

  <!-- A tile that CONTAINS tiles is a group: it opens a second level. No
       \`level\` to drive, no mode to switch — the launcher finds the depth by
       content query, exactly as fold-multiselect finds its fold-optgroup. -->
  <fold-nav-group icon="library" label="PIM">
    <a fold-nav-tile icon="package" label="Products" hint="128 sheets"
       routerLink="/pim/products"></a>
    <a fold-nav-tile icon="upload" label="Publishing" hint="3 waiting"
       tone="warning" routerLink="/pim/publishing"></a>
  </fold-nav-group>

  <!-- Anything the app owns: the account, sign-out, a support link. -->
  <div footer>…</div>
</fold-nav-launcher>`;
}
