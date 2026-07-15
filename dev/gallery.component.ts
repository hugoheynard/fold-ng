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
  type Sh3RadiusToken,
  type Sh3SemanticColorToken,
  sh3ColorProperty,
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

/** A design token a page exposes for overriding — its full custom-property name
 *  is derived from the typed catalog, so a renamed/removed token is a compile
 *  error here (the list can't silently go stale). */
type PageTokenKind = "color" | "radius";
interface PageToken {
  readonly prop: string;
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
   *  HTML usage on the left, the CSS you'd paste to apply your overrides on the
   *  right. The Tokens card below is a live sandbox — adjust a token and the
   *  preview updates. Semantics are the preferred override surface. */
  protected readonly showCode = signal(false);

  /** The shell's overridable tokens — derived from the typed catalog. Rail
   *  width / header height are omitted here: they already have live sliders. */
  protected readonly shellTokens: readonly PageTokenGroup[] = [
    {
      label: "roundness",
      tokens: [radiusToken("lg", "floating region cards")],
    },
    {
      label: "surfaces",
      tokens: [
        colorToken("bg-page", "page + floating gutter"),
        colorToken("bg-rail-primary", "primary rail"),
        colorToken("bg-rail-secondary", "secondary rail"),
        colorToken("bg-header", "header band"),
        colorToken("border", "region separators"),
      ],
    },
  ];

  private readonly previewShellRef =
    viewChild<ElementRef<HTMLElement>>("previewShell");
  /** Live sandbox state — the token overrides the user has typed (prop → value).
   *  Applied to the preview shell in an effect; emitted as the CSS block. */
  protected readonly shellOverrides = signal<Record<string, string>>({});
  protected readonly hasShellOverrides = computed(
    () => Object.keys(this.shellOverrides()).length > 0,
  );
  protected setShellOverride(prop: string, value: string): void {
    this.shellOverrides.update((o) => withOverride(o, prop, value));
  }
  protected resetShellOverrides(): void {
    this.shellOverrides.set({});
  }

  /** The CSS block for the overlay's right pane — the overrides you've made. */
  protected readonly shellTokensCss = computed(() =>
    overrideCss("sh3-app-shell", this.shellOverrides()),
  );
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
  /** The app-shell preview's own primary-rail selection (decoupled from the
   *  gallery's outer rail, which reuses the same nav data). */
  protected readonly previewNav = signal<string>("home");

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

  /** The menu's overridable tokens — derived from the typed catalog. */
  protected readonly menuTokens: readonly PageTokenGroup[] = [
    {
      label: "roundness",
      tokens: [
        radiusToken("sm", "item background"),
        radiusToken("lg", "floating rail card"),
      ],
    },
    {
      label: "surfaces",
      tokens: [
        colorToken("bg-rail-primary", "level primary"),
        colorToken("bg-rail-secondary", "level secondary"),
        colorToken("bg-rail-tertiary", "level tertiary"),
        colorToken("surface-hover", "neutral hover / active"),
      ],
    },
    { label: "accent", tokens: [colorToken("primary", "primary tint")] },
  ];

  private readonly menuPreviewRef =
    viewChild<ElementRef<HTMLElement>>("menuPreview");
  protected readonly menuOverrides = signal<Record<string, string>>({});
  protected readonly hasMenuOverrides = computed(
    () => Object.keys(this.menuOverrides()).length > 0,
  );
  protected setMenuOverride(prop: string, value: string): void {
    this.menuOverrides.update((o) => withOverride(o, prop, value));
  }
  protected resetMenuOverrides(): void {
    this.menuOverrides.set({});
  }

  /** CSS override block for the menu overlay's right pane — your overrides. */
  protected readonly menuTokensCss = computed(() =>
    overrideCss("sh3-menu", this.menuOverrides()),
  );
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
    // Live sandbox: write the token overrides onto the preview elements. A DOM
    // write (setProperty/removeProperty) → an effect, not a computed. Each
    // re-runs when its override map (or the target element) changes.
    effect(() =>
      applyOverrides(
        this.previewShellRef()?.nativeElement,
        this.shellTokens,
        this.shellOverrides(),
      ),
    );
    effect(() =>
      applyOverrides(
        this.menuPreviewRef()?.nativeElement,
        this.menuTokens,
        this.menuOverrides(),
      ),
    );
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

/** A colour token → a page token. The id is typed against the catalog, so a
 *  renamed/removed colour is a compile error (the list can't go stale). */
function colorToken(token: Sh3SemanticColorToken, desc: string): PageToken {
  return { prop: sh3ColorProperty(token), desc, kind: "color" };
}

/** A radius token → a page token (typed against the catalog, same as above). */
function radiusToken(token: Sh3RadiusToken, desc: string): PageToken {
  return { prop: `--sh3-radius-${token}`, desc, kind: "radius" };
}

/** Set (or, for a blank value, clear) one override — returns a new map. */
function withOverride(
  map: Record<string, string>,
  prop: string,
  value: string,
): Record<string, string> {
  const next = { ...map };
  const trimmed = value.trim();
  if (trimmed) {
    next[prop] = trimmed;
  } else {
    delete next[prop];
  }
  return next;
}

/** The CSS block a user would paste to apply their overrides. */
function overrideCss(
  selector: string,
  overrides: Record<string, string>,
): string {
  const entries = Object.entries(overrides);
  if (entries.length === 0) {
    return "/* adjust a token on the left to see the CSS here */";
  }
  const lines = [`${selector} {`];
  for (const [prop, value] of entries) {
    lines.push(`  ${prop}: ${value};`);
  }
  lines.push("}");
  return lines.join("\n");
}

/** Write the current overrides onto `el` — cleared tokens are removed so the
 *  element falls back to the theme. A DOM write → call from an effect. */
function applyOverrides(
  el: HTMLElement | undefined,
  groups: readonly PageTokenGroup[],
  overrides: Record<string, string>,
): void {
  if (!el) {
    return;
  }
  for (const group of groups) {
    for (const token of group.tokens) {
      const value = overrides[token.prop];
      if (value) {
        el.style.setProperty(token.prop, value);
      } else {
        el.style.removeProperty(token.prop);
      }
    }
  }
}
