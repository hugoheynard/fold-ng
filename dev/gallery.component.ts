import {
  Component,
  ElementRef,
  afterNextRender,
  computed,
  effect,
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
import { PanelScopeDirective } from "./panel-scope.directive";
import { closestSh3, inspect } from "./inspect";

/** A menu section in the live builder: a colored separator + N simulated items. */
interface MenuSection {
  id: string;
  name: string;
  color: string;
  icons: number;
}

/** Responsive preview mode for the app-shell page. */
type ShellMode = "desktop" | "tablet" | "mobile";

/** A design token a page exposes for overriding (roundness/colour/layout). */
type PageTokenKind = "color" | "size";
interface PageToken {
  readonly name: string;
  readonly desc: string;
  readonly kind: PageTokenKind;
}
interface PageTokenGroup {
  readonly label: string;
  readonly tokens: readonly PageToken[];
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
    PanelScopeDirective,
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

  /* ── Responsive preview modes (drive the preview box's width via a container
   *    query in sh3-app-shell) ── */
  protected readonly shellModes = ["desktop", "tablet", "mobile"] as const;
  protected readonly shellMode = signal<ShellMode>("desktop");
  private readonly SHELL_MODE_WIDTH: Record<ShellMode, number> = {
    desktop: 1200,
    tablet: 880,
    mobile: 380,
  };
  protected readonly shellPreviewWidth = computed(
    () => this.SHELL_MODE_WIDTH[this.shellMode()],
  );

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

  /* ── "Show code" overlay + the page's overridable tokens ──────────────
   *  The code switch (in the mode bar) drops a glass sheet over the preview:
   *  HTML usage on the left, the CSS custom-properties to override on the
   *  right. The same token list feeds the "Tokens" card below the preview.
   *  Semantics are the preferred override surface (not raw primitives). */
  protected readonly showCode = signal(false);

  /** The tokens this page cares about — roundness, surface colours, layout. */
  protected readonly shellTokens: readonly PageTokenGroup[] = [
    {
      label: "roundness",
      tokens: [
        {
          name: "--sh3-radius-lg",
          desc: "floating region cards",
          kind: "size",
        },
      ],
    },
    {
      label: "surfaces",
      tokens: [
        {
          name: "--sh3-color-bg-page",
          desc: "page + floating gutter",
          kind: "color",
        },
        {
          name: "--sh3-color-bg-rail-primary",
          desc: "primary rail",
          kind: "color",
        },
        {
          name: "--sh3-color-bg-rail-secondary",
          desc: "secondary rail",
          kind: "color",
        },
        { name: "--sh3-color-bg-header", desc: "header band", kind: "color" },
        {
          name: "--sh3-color-border",
          desc: "region separators",
          kind: "color",
        },
      ],
    },
    {
      label: "layout",
      tokens: [
        {
          name: "--sh3-shell-rail-width",
          desc: "primary rail width",
          kind: "size",
        },
        {
          name: "--sh3-shell-header-height",
          desc: "header height",
          kind: "size",
        },
      ],
    },
  ];

  /** Live resolved value per token, read off the preview shell. DOM reads live
   *  in an effect (below), never in a computed. */
  protected readonly tokenValues = signal<Record<string, string>>({});
  private readonly previewShellRef =
    viewChild<ElementRef<HTMLElement>>("previewShell");

  /** The CSS override block for the overlay's right pane — semantics first. */
  protected readonly shellTokensCss = computed(() => {
    const values = this.tokenValues();
    const lines = ["sh3-app-shell {"];
    for (const group of this.shellTokens) {
      lines.push(`  /* ${group.label} */`);
      for (const token of group.tokens) {
        lines.push(`  ${token.name}: ${values[token.name] || "inherit"};`);
      }
    }
    lines.push("}");
    return lines.join("\n");
  });
  protected readonly cssCopied = signal(false);
  protected copyShellTokensCss(): void {
    void navigator.clipboard.writeText(this.shellTokensCss()).then(() => {
      this.cssCopied.set(true);
      setTimeout(() => this.cssCopied.set(false), 1500);
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

  /** Open a panel in the preview's own host (a scoped service instance), so it
   *  slides in inside the preview shell rather than the gallery. */
  protected openPreviewPanel(host: Sh3PanelHostService): void {
    host.open(TabPanelComponent, { side: "right", width: 260 });
  }

  /* ── railPrimary: a stable static nav, decoupled from the settings ── */
  protected readonly railNav = [
    { id: "home", icon: "home", label: "Home" },
    { id: "contracts", icon: "contracts", label: "Contracts" },
    { id: "music", icon: "music", label: "Music" },
  ] as const;
  protected readonly railActive = signal<string>("home");

  /* ── Library nav (railSecondary) — its tint/level come from the preview via
   *    "Apply to Library". ── */
  protected readonly libTint = signal<Sh3MenuTint>("primary");
  protected readonly libLevel = signal<Sh3MenuLevel>("secondary");
  protected readonly applied = signal(false);
  protected applyToLibrary(): void {
    this.libTint.set(this.menuTint());
    this.libLevel.set(this.menuLevel());
    this.applied.set(true);
    setTimeout(() => this.applied.set(false), 1500);
  }

  /* ── sh3-menu preview — a live, editable menu built from a list of sections ── */
  protected readonly menuActive = signal<string>("");
  protected readonly menuExpanded = signal(false);
  protected readonly menuCollapsible = signal(true);
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

  /* ── Menu page: "code" overlay + overridable tokens (third column) ──── */
  protected readonly menuShowCode = signal(false);

  /** The tokens the menu exposes — roundness, rail surfaces, accent. */
  protected readonly menuTokens: readonly PageTokenGroup[] = [
    {
      label: "roundness",
      tokens: [
        { name: "--sh3-radius-sm", desc: "item background", kind: "size" },
        {
          name: "--sh3-radius-lg",
          desc: "floating rail card",
          kind: "size",
        },
      ],
    },
    {
      label: "surfaces",
      tokens: [
        {
          name: "--sh3-color-bg-rail-primary",
          desc: "level primary",
          kind: "color",
        },
        {
          name: "--sh3-color-bg-rail-secondary",
          desc: "level secondary",
          kind: "color",
        },
        {
          name: "--sh3-color-bg-rail-tertiary",
          desc: "level tertiary",
          kind: "color",
        },
        {
          name: "--sh3-color-surface-hover",
          desc: "neutral hover / active",
          kind: "color",
        },
      ],
    },
    {
      label: "accent",
      tokens: [
        {
          name: "--sh3-color-primary",
          desc: "primary tint (bar + active)",
          kind: "color",
        },
      ],
    },
  ];

  protected readonly menuTokenValues = signal<Record<string, string>>({});
  private readonly menuPreviewRef =
    viewChild<ElementRef<HTMLElement>>("menuPreview");

  /** CSS override block for the menu overlay's right pane — semantics first. */
  protected readonly menuTokensCss = computed(() => {
    const values = this.menuTokenValues();
    const lines = ["sh3-menu {"];
    for (const group of this.menuTokens) {
      lines.push(`  /* ${group.label} */`);
      for (const token of group.tokens) {
        lines.push(`  ${token.name}: ${values[token.name] || "inherit"};`);
      }
    }
    lines.push("}");
    return lines.join("\n");
  });
  protected readonly menuCssCopied = signal(false);
  protected copyMenuTokensCss(): void {
    void navigator.clipboard.writeText(this.menuTokensCss()).then(() => {
      this.menuCssCopied.set(true);
      setTimeout(() => this.menuCssCopied.set(false), 1500);
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
    { id: "tokens", label: "design tokens" },
  ];
  /** The section currently in view — drives the nav highlight. */
  protected readonly activeSection = signal<string>("");

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
    // Resolve the page's tokens off the live preview shell. getComputedStyle is
    // a DOM read → keep it in an effect and mirror the result into a signal
    // (a computed must stay pure). Re-runs when the theme or size settings move.
    effect(() => {
      this.theme();
      this.shellRailWidth();
      this.shellHeaderHeight();
      const el = this.previewShellRef()?.nativeElement;
      if (!el) {
        return;
      }
      this.tokenValues.set(resolveTokens(el, this.shellTokens));
    });
    // Same, for the menu page's tokens — re-resolve on level/tint/theme change.
    effect(() => {
      this.theme();
      this.menuLevel();
      this.menuTint();
      const el = this.menuPreviewRef()?.nativeElement;
      if (!el) {
        return;
      }
      this.menuTokenValues.set(resolveTokens(el, this.menuTokens));
    });
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

/** Read each token's resolved value off `el` (a DOM read — call from an effect,
 *  never a computed). Returns a `name → value` map. */
function resolveTokens(
  el: HTMLElement,
  groups: readonly PageTokenGroup[],
): Record<string, string> {
  const styles = getComputedStyle(el);
  const values: Record<string, string> = {};
  for (const group of groups) {
    for (const token of group.tokens) {
      values[token.name] = styles.getPropertyValue(token.name).trim();
    }
  }
  return values;
}
