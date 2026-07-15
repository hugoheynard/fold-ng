import {
  Component,
  ElementRef,
  afterNextRender,
  computed,
  inject,
  signal,
  viewChild,
} from "@angular/core";
import {
  Sh3AppShellComponent,
  Sh3BadgeComponent,
  Sh3CardComponent,
  Sh3ContextCardComponent,
  Sh3ElementTitleComponent,
  Sh3HeroComponent,
  Sh3IconComponent,
  type Sh3IconName,
  Sh3LinkComponent,
  Sh3MenuComponent,
  Sh3MenuItemComponent,
  Sh3MenuSectionComponent,
  type Sh3MenuLevel,
  type Sh3MenuTint,
  type Sh3MenuTogglePlacement,
  Sh3PageSectionComponent,
  Sh3PanelHostComponent,
  Sh3PanelHostService,
  Sh3StatusBadgeComponent,
  Sh3TabNavComponent,
  type Sh3TabNavItem,
} from "../src/index";
import { TokenPanelComponent } from "./token-panel.component";
import { TabPanelComponent } from "./tab-panel.component";
import { InspectPanelComponent } from "./inspect-panel.component";
import { closestSh3, inspect } from "./inspect";

/** A menu section in the live builder: a colored separator + N simulated items. */
interface MenuSection {
  id: string;
  name: string;
  color: string;
  icons: number;
}

/** One entry in the gallery's section nav (the railSecondary sh3-menu). */
interface TocItem {
  readonly id: string;
  readonly label: string;
}

/**
 * The gallery — itself an `sh3-app-shell` instance (dogfooding). The first
 * section's "App Shell Settings" card drives the shell's own inputs (appearance
 * / header layout / rail width / header height) live and shows the matching
 * markup with a copy button; the TOC fills the secondary rail and the token
 * editor docks on the right of the content. Double-click any component to
 * inspect + edit its tokens (scoped to that element).
 */
@Component({
  selector: "app-gallery",
  standalone: true,
  imports: [
    Sh3AppShellComponent,
    Sh3CardComponent,
    Sh3HeroComponent,
    Sh3PageSectionComponent,
    Sh3ElementTitleComponent,
    Sh3ContextCardComponent,
    Sh3LinkComponent,
    Sh3BadgeComponent,
    Sh3StatusBadgeComponent,
    Sh3IconComponent,
    Sh3TabNavComponent,
    Sh3MenuComponent,
    Sh3MenuItemComponent,
    Sh3MenuSectionComponent,
    Sh3PanelHostComponent,
    TokenPanelComponent,
  ],
  host: { "[attr.data-theme]": "theme() === 'light' ? 'light' : null" },
  templateUrl: "./gallery.component.html",
  styleUrl: "./gallery.component.css",
})
export class GalleryComponent {
  protected readonly theme = signal<"dark" | "light">("dark");

  /* ── Live shell parameters (driven by the App Shell Settings card) ── */
  protected readonly shellAppearance = signal<"flat" | "floating">("flat");
  protected readonly shellHeaderLayout = signal<"inset" | "full">("inset");
  protected readonly shellRailWidth = signal(64);
  protected readonly shellHeaderHeight = signal(56);

  protected setAppearance(value: "flat" | "floating"): void {
    this.shellAppearance.set(value);
  }
  protected setHeaderLayout(value: "inset" | "full"): void {
    this.shellHeaderLayout.set(value);
  }
  protected setRailWidth(value: string): void {
    this.shellRailWidth.set(Number(value));
  }
  protected setHeaderHeight(value: string): void {
    this.shellHeaderHeight.set(Number(value));
  }

  /** The `<sh3-app-shell>` markup reflecting the current settings — live. */
  protected readonly shellCode = computed(() =>
    [
      "<sh3-app-shell",
      `  appearance="${this.shellAppearance()}"`,
      `  headerLayout="${this.shellHeaderLayout()}"`,
      `  [railWidth]="${this.shellRailWidth()}"`,
      `  [headerHeight]="${this.shellHeaderHeight()}"`,
      ">",
      "  <!-- railPrimary · railSecondary · header · content -->",
      "</sh3-app-shell>",
    ].join("\n"),
  );
  protected readonly copied = signal(false);

  protected copyShellCode(): void {
    void navigator.clipboard.writeText(this.shellCode()).then(() => {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 1500);
    });
  }

  protected toggleTheme(): void {
    this.theme.update((t) => (t === "dark" ? "light" : "dark"));
  }

  /* ── Tab-nav demos + a tab-nav opened inside a side panel ── */
  private readonly panelHost = inject(Sh3PanelHostService);
  protected readonly tabItems: Sh3TabNavItem[] = [
    { key: "overview", label: "Overview" },
    { key: "members", label: "Members", badge: 3 },
    { key: "settings", label: "Settings" },
  ];
  protected readonly tabUnderline = signal("overview");
  protected readonly tabFill = signal("overview");
  protected readonly tabComfortable = signal("members");
  protected readonly tabVertical = signal("overview");

  protected openTabPanel(): void {
    this.panelHost.open(TabPanelComponent, { side: "right" });
  }

  /* ── sh3-menu demo — a live, editable menu built from a list of sections ── */
  protected readonly menuActive = signal<string>("");
  protected readonly menuExpanded = signal(false);
  protected readonly menuCollapsible = signal(true);

  /** Flip collapsible; expanded is meaningless without it, so reset it off. */
  protected toggleCollapsible(): void {
    const next = !this.menuCollapsible();
    this.menuCollapsible.set(next);
    if (!next) {
      this.menuExpanded.set(false);
    }
  }
  /** Structural slots — toggled so the design can be seen with/without each. */
  protected readonly menuHeader = signal(true);
  protected readonly menuSections = signal(true);
  protected readonly menuFooter = signal(true);
  /** How items tint on hover / when active. */
  protected readonly menuTint = signal<Sh3MenuTint>("follow");
  protected readonly menuTints: readonly Sh3MenuTint[] = [
    "follow",
    "neutral",
    "primary",
  ];
  /** Rail depth → background tint. */
  protected readonly menuLevel = signal<Sh3MenuLevel>("primary");
  protected readonly menuLevels: readonly Sh3MenuLevel[] = [
    "primary",
    "secondary",
    "tertiary",
  ];
  /** Collapse-arrow placement: `auto` follows the slots, the rest pin a band. */
  protected readonly menuArrow = signal<Sh3MenuTogglePlacement>("auto");
  protected readonly menuArrows: readonly Sh3MenuTogglePlacement[] = [
    "auto",
    "header",
    "footer",
    "body",
  ];
  /** The band the arrow actually lands in — the override, or the auto rule
   *  (first in footer, else last in header, else last in body). Mirrors the
   *  component so the settings show the outcome live. */
  protected readonly resolvedArrow = computed(() => {
    const forced = this.menuArrow();
    if (forced !== "auto") {
      return forced;
    }
    return this.menuFooter() ? "footer" : this.menuHeader() ? "header" : "body";
  });

  /** Each section = a colored separator + N simulated menu items. Editable from
   *  the Menu Settings card (+/− sections, name, color, icon count). */
  protected readonly menuSectionList = signal<MenuSection[]>([
    { id: "s1", name: "Personal", color: "#06a4a4", icons: 3 },
    { id: "s2", name: "More", color: "#7c5bbf", icons: 2 },
  ]);
  /** Monotonic id source — no Date.now()/random (unavailable + non-deterministic). */
  private sectionSeq = 3;

  /** Icons cycled through to populate a section's simulated items. */
  private readonly iconPool: readonly Sh3IconName[] = [
    "home",
    "contracts",
    "music",
    "bell",
    "company",
    "edit",
  ];

  protected iconsFor(count: number): Sh3IconName[] {
    return Array.from(
      { length: count },
      (_, i) => this.iconPool[i % this.iconPool.length],
    );
  }
  protected labelFor(icon: Sh3IconName): string {
    return icon.charAt(0).toUpperCase() + icon.slice(1);
  }

  protected addSection(): void {
    const id = `s${this.sectionSeq++}`;
    this.menuSectionList.update((list) => [
      ...list,
      { id, name: "Section", color: "#5b8def", icons: 2 },
    ]);
  }
  protected removeSection(id: string): void {
    this.menuSectionList.update((list) => list.filter((s) => s.id !== id));
  }
  protected setSectionName(id: string, name: string): void {
    this.menuSectionList.update((list) =>
      list.map((s) => (s.id === id ? { ...s, name } : s)),
    );
  }
  protected setSectionColor(id: string, color: string): void {
    this.menuSectionList.update((list) =>
      list.map((s) => (s.id === id ? { ...s, color } : s)),
    );
  }
  protected stepSectionIcons(id: string, delta: number): void {
    this.menuSectionList.update((list) =>
      list.map((s) =>
        s.id === id
          ? { ...s, icons: Math.max(0, Math.min(8, s.icons + delta)) }
          : s,
      ),
    );
  }

  /** The `<sh3-menu>` markup reflecting the current sections — live. */
  protected readonly menuCode = computed(() => {
    const attrs = [
      this.menuCollapsible() ? 'collapsible [(expanded)]="expanded"' : "",
      this.menuLevel() === "primary" ? "" : `level="${this.menuLevel()}"`,
      this.menuTint() === "follow" ? "" : `tint="${this.menuTint()}"`,
      this.menuCollapsible() && this.menuArrow() !== "auto"
        ? `togglePlacement="${this.menuArrow()}"`
        : "",
    ].filter(Boolean);
    const open = attrs.length ? `<sh3-menu ${attrs.join(" ")}>` : "<sh3-menu>";
    const lines = [open];
    if (this.menuHeader()) {
      lines.push('  <div header class="brand">S3</div>');
    }
    for (const s of this.menuSectionList()) {
      const wrap = this.menuSections();
      const pad = wrap ? "    " : "  ";
      if (wrap) {
        lines.push(`  <sh3-menu-section label="${s.name}" color="${s.color}">`);
      }
      for (const icon of this.iconsFor(s.icons)) {
        lines.push(
          `${pad}<button sh3-menu-item icon="${icon}" label="${this.labelFor(icon)}"></button>`,
        );
      }
      if (wrap) {
        lines.push("  </sh3-menu-section>");
      }
    }
    if (this.menuFooter()) {
      lines.push(
        '  <button footer sh3-menu-item icon="settings" label="Settings"></button>',
      );
    }
    lines.push("</sh3-menu>");
    return lines.join("\n");
  });
  protected readonly menuCopied = signal(false);

  protected copyMenuCode(): void {
    void navigator.clipboard.writeText(this.menuCode()).then(() => {
      this.menuCopied.set(true);
      setTimeout(() => this.menuCopied.set(false), 1500);
    });
  }

  /** Double-click a component → inspect its tokens + composition in a panel. */
  protected onInspect(event: MouseEvent): void {
    if (!(event.target instanceof Element)) {
      return;
    }
    const el = closestSh3(event.target);
    const info = el ? inspect(el.tagName.toLowerCase()) : null;
    if (el && info) {
      this.panelHost.open(InspectPanelComponent, {
        data: { info, element: el },
        side: "right",
      });
    }
  }

  /* ── Table of contents + scroll-spy ── */
  /** The scrollable content cell — the scroll-spy observer's root. */
  private readonly scrollRef =
    viewChild.required<ElementRef<HTMLElement>>("scroll");

  /** ids match the `<section>` ids in the template. */
  protected readonly toc: readonly TocItem[] = [
    { id: "app-shell", label: "app-shell" },
    { id: "menu", label: "menu" },
    { id: "element-title", label: "element-title" },
    { id: "context-card", label: "context-card" },
    { id: "page-section", label: "page-section" },
    { id: "hero", label: "hero" },
    { id: "card", label: "card" },
    { id: "link", label: "link" },
    { id: "tab-nav", label: "tab-nav" },
    { id: "badges", label: "badge · status · icon" },
  ];
  /** The section currently in view — drives the nav highlight. */
  protected readonly activeSection = signal<string>("");
  /** The section nav (railSecondary sh3-menu) starts expanded (labels shown). */
  protected readonly tocExpanded = signal(true);

  /** Smooth-scroll the content to a section (section-nav item click). */
  protected scrollTo(id: string): void {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // `as const` so each loop variable keeps its literal union type — required
  // for strictTemplates to accept it as a component input.
  protected readonly iconTones = ["primary", "neutral", "faded"] as const;
  protected readonly heroSurfaces = ["card", "sunken"] as const;
  protected readonly heroAccents = ["none", "subtle", "gradient"] as const;
  protected readonly badgeVariants = [
    "accent",
    "info",
    "warning",
    "alert",
    "success",
  ] as const;
  protected readonly iconNames = [
    "company",
    "home",
    "contracts",
    "edit",
    "bell",
    "music",
  ] as const;

  constructor() {
    afterNextRender(() => this.observeSections());
  }

  private observeSections(): void {
    const root = this.scrollRef().nativeElement;
    const sections = this.toc
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
          }
        }
      },
      { root, rootMargin: "0px 0px -70% 0px", threshold: 0 },
    );
    for (const el of sections) {
      observer.observe(el);
    }
  }
}
