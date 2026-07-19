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
import { form, required, FormField } from "@angular/forms/signals";
import { DevPlaygroundComponent } from "./playground.component";
import {
  Sh3AppShellComponent,
  Sh3AvatarComponent,
  Sh3AvatarDetailComponent,
  Sh3AvatarListComponent,
  type Sh3AvatarListItem,
  type Sh3AvatarVariant,
  type Sh3AvatarRing,
  type Sh3AvatarRingStyle,
  Sh3BadgeComponent,
  Sh3ButtonComponent,
  type Sh3ButtonVariant,
  type Sh3ButtonSize,
  Sh3ButtonIconComponent,
  Sh3CardComponent,
  Sh3ChoiceRowComponent,
  type Sh3ChoiceOption,
  Sh3ContextCardComponent,
  Sh3ElementTitleComponent,
  Sh3FieldComponent,
  Sh3FieldListComponent,
  Sh3HeroComponent,
  Sh3IconComponent,
  type Sh3IconName,
  Sh3InputComponent,
  Sh3NumberInputComponent,
  type Sh3NumberSpinner,
  type Sh3NumberControls,
  Sh3FileDropzoneComponent,
  Sh3SearchComponent,
  Sh3SelectComponent,
  Sh3SliderComponent,
  Sh3TimelineComponent,
  type Sh3TimelineNode,
  type Sh3TimelineDatePlacement,
  Sh3LinkComponent,
  Sh3MenuComponent,
  Sh3MenuItemComponent,
  type Sh3MenuItemBadgeTone,
  Sh3MenuSectionComponent,
  type Sh3MenuLevel,
  type Sh3MenuTint,
  type Sh3MenuTogglePlacement,
  Sh3AsideLayoutComponent,
  Sh3PageSectionComponent,
  Sh3StickyColumnDirective,
  type Sh3StickyColumnAnchor,
  Sh3PanelHostComponent,
  Sh3PanelHostService,
  Sh3StatusBadgeComponent,
  Sh3TabNavComponent,
  type Sh3TabNavItem,
  Sh3ToastComponent,
  Sh3ToastContainerComponent,
  Sh3ToastService,
  type Sh3ToastVariant,
  type Sh3RadiusToken,
  type Sh3SemanticColorToken,
  sh3ColorProperty,
  Sh3PaletteRegistry,
  type Sh3AutoPaletteName,
  SH3_BUILTIN_ICONS,
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

/** A clickable avatar demo — its config drives both the rendered vignette and
 *  the markup shown in the code panel when you click it. */
interface AvatarDemo {
  readonly name: string;
  readonly size?: "sm" | "md" | "lg";
  readonly variant?: Sh3AvatarVariant;
  readonly square?: boolean;
  readonly image?: boolean;
  readonly muted?: boolean;
  readonly ring?: Sh3AvatarRing;
  readonly ringStyle?: Sh3AvatarRingStyle;
}
/** A clickable avatar-detail demo (same idea, identity-cell props). */
interface DetailDemo {
  readonly primary: string;
  readonly secondary?: string;
  readonly size?: "sm" | "md" | "lg";
  readonly variant?: Sh3AvatarVariant;
  readonly square?: boolean;
  readonly image?: boolean;
}
/** A labelled row of demos. */
interface DemoGroup<T> {
  readonly label: string;
  readonly items: readonly T[];
}

/** One entry in the gallery's section nav (the railSecondary sh3-menu). */
interface TocItem {
  readonly id: string;
  readonly label: string;
  /** Rail icon — defaults to `grid` when unset. */
  readonly icon?: Sh3IconName;
  /** Optional nav badge — a tag (`"new"`) or a count (`3`). */
  readonly badge?: string | number;
  /** Badge colour — defaults to `follow` (tracks the item's tint). */
  readonly badgeTone?: Sh3MenuItemBadgeTone;
}

/** A colour-coded block of the Library nav — one `sh3-menu-section`. */
interface NavGroup {
  readonly label: string;
  /** Section accent — tints the separator + item hover (any CSS colour). */
  readonly color: string;
  readonly items: readonly TocItem[];
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
    Sh3AvatarComponent,
    Sh3AvatarDetailComponent,
    Sh3AvatarListComponent,
    Sh3CardComponent,
    Sh3FieldComponent,
    Sh3FieldListComponent,
    Sh3InputComponent,
    Sh3NumberInputComponent,
    Sh3FileDropzoneComponent,
    Sh3SearchComponent,
    Sh3SelectComponent,
    Sh3SliderComponent,
    Sh3TimelineComponent,
    FormField,
    DevPlaygroundComponent,
    Sh3ChoiceRowComponent,
    Sh3HeroComponent,
    Sh3AsideLayoutComponent,
    Sh3PageSectionComponent,
    Sh3StickyColumnDirective,
    Sh3ElementTitleComponent,
    Sh3ContextCardComponent,
    Sh3LinkComponent,
    Sh3BadgeComponent,
    Sh3ButtonComponent,
    Sh3ButtonIconComponent,
    Sh3StatusBadgeComponent,
    Sh3IconComponent,
    Sh3TabNavComponent,
    Sh3MenuComponent,
    Sh3MenuItemComponent,
    Sh3MenuSectionComponent,
    Sh3ToastComponent,
    Sh3ToastContainerComponent,
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

  /* ── Toast demos: static variants + a live trigger through the service ── */
  private readonly toastService = inject(Sh3ToastService);
  protected readonly toastVariants = [
    "success",
    "info",
    "warning",
    "error",
  ] as const satisfies readonly Sh3ToastVariant[];
  protected readonly toastMessages: Record<Sh3ToastVariant, string> = {
    success: "Track uploaded",
    info: "Sync in progress",
    warning: "Storage almost full",
    error: "Upload failed",
  };
  /** Mirrors the component's own variant→glyph map, for the trigger buttons. */
  protected readonly toastIcons: Record<Sh3ToastVariant, Sh3IconName> = {
    success: "check-circle",
    info: "info",
    warning: "warning",
    error: "x-circle",
  };
  /** The `dismissible` demo toast — its close button hides it (dismiss output). */
  protected readonly demoToastOpen = signal(true);
  /** The duration the live triggers fire with (`0` = sticky). */
  protected readonly toastDurationOptions: Sh3ChoiceOption[] = [
    { key: "2000", label: "2s" },
    { key: "4000", label: "4s" },
    { key: "0", label: "sticky" },
  ];
  protected readonly toastDuration = signal("4000");
  private toastSeq = 0;

  /** Fire a real toast through the service — stacks bottom-right; auto-expires
   *  after the chosen duration (or stays until closed when sticky). */
  protected fireToast(variant: Sh3ToastVariant): void {
    this.toastSeq += 1;
    this.toastService.show(
      `${this.toastMessages[variant]} (#${this.toastSeq})`,
      variant,
      Number(this.toastDuration()),
    );
  }

  /** The toast page's three sub-pages (vertical tab-nav). */
  protected readonly toastTabs: Sh3TabNavItem[] = [
    { key: "variants", label: "Variants" },
    { key: "behavior", label: "Behavior" },
    { key: "usage", label: "Usage" },
  ];
  protected readonly toastTab = signal("variants");

  /* ── Usage sub-page — documentation snippets ── */
  protected readonly toastFireCode = [
    "const toast = inject(Sh3ToastService);",
    "",
    'toast.show("Track uploaded", "success");      // policy duration',
    'toast.show("Upload failed", "error", 8000);   // explicit override (ms)',
    'toast.show("Action required", "warning", 0);  // 0 = sticky',
  ].join("\n");
  protected readonly toastConfigCode = [
    "// app.config.ts — providers: [ … ]",
    "provideSh3Toasts({",
    "  defaultDurationMs: 4000,",
    "  durationByVariant: { success: 2000, error: 0 }, // 0 = sticky",
    "}),",
  ].join("\n");
  protected readonly toastStandaloneCode = [
    "<sh3-toast",
    '  variant="success"',
    '  duration="3000"',
    '  (dismiss)="onClose()"',
    ">Track uploaded</sh3-toast>",
  ].join("\n");

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
  protected readonly libTint = signal<Sh3MenuTint>("follow");
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
  /** Section behaviour — `true` makes each section a fold toggle (`collapsible`). */
  protected readonly menuSectionCollapsible = signal(false);
  protected readonly menuFooter = signal(true);
  /** Demo badge on the preview's first item: none, a `"new"` tag, or a count. */
  protected readonly menuBadge = signal<"none" | "tag" | "count">("none");
  protected readonly menuBadgeTone = signal<Sh3MenuItemBadgeTone>("follow");
  protected readonly menuBadgeTones: readonly Sh3MenuItemBadgeTone[] = [
    "follow",
    "accent",
    "info",
    "warning",
    "alert",
    "success",
  ];
  /** The badge value the current mode yields (`undefined` = off). */
  private readonly menuBadgeValue = computed<string | number | undefined>(
    () => {
      const mode = this.menuBadge();
      if (mode === "none") {
        return undefined;
      }
      return mode === "count" ? 3 : "new";
    },
  );
  /** Badge for the preview item at (section, item) — only the very first one. */
  protected previewBadge(
    sectionIndex: number,
    itemIndex: number,
  ): string | number | undefined {
    return sectionIndex === 0 && itemIndex === 0
      ? this.menuBadgeValue()
      : undefined;
  }

  /** Render `[badge]`/`badge` (+ `badgeTone`) markup for the code overlay. */
  private badgeAttrs(value: string | number | undefined): string {
    if (value === undefined) {
      return "";
    }
    const bind =
      typeof value === "number" ? ` [badge]="${value}"` : ` badge="${value}"`;
    const tone = this.menuBadgeTone();
    return `${bind}${tone === "follow" ? "" : ` badgeTone="${tone}"`}`;
  }
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
    const sections = this.menuSectionList();
    for (let si = 0; si < sections.length; si++) {
      const s = sections[si];
      const wrap = this.menuSections();
      const pad = wrap ? "    " : "  ";
      if (wrap) {
        const collapsible = this.menuSectionCollapsible() ? " collapsible" : "";
        lines.push(
          `  <sh3-menu-section label="${s.name}" color="${s.color}"${collapsible}>`,
        );
      }
      const icons = this.iconsFor(s.icons);
      for (let ii = 0; ii < icons.length; ii++) {
        const badge = this.badgeAttrs(this.previewBadge(si, ii));
        lines.push(
          `${pad}<button sh3-menu-item icon="${icons[ii]}" label="${this.labelFor(icons[ii])}"${badge}></button>`,
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

  /**
   * The Library nav, grouped into colour-coded blocks (one `sh3-menu-section`
   * each). Group order === on-page section order, so the scroll-spy highlight
   * flows straight down the rail. ids match the `<section>` ids in the template.
   */
  protected readonly navGroups: readonly NavGroup[] = [
    {
      label: "Layout",
      color: "#06a4a4",
      items: [
        { id: "app-shell", label: "app-shell", icon: "grid" },
        { id: "page-section", label: "page-section" },
        { id: "hero", label: "hero" },
        {
          id: "sticky-column",
          label: "sticky-column",
          badge: "new",
          badgeTone: "info",
        },
        {
          id: "aside-layout",
          label: "aside-layout",
          badge: "new",
          badgeTone: "info",
        },
      ],
    },
    {
      label: "Navigation",
      color: "#8b5cf6",
      items: [
        { id: "menu", label: "menu" },
        { id: "tab-nav", label: "tab-nav" },
      ],
    },
    {
      label: "Actions",
      color: "#3b82f6",
      items: [
        { id: "button", label: "button" },
        { id: "button-icon", label: "button-icon" },
        { id: "link", label: "link" },
      ],
    },
    {
      label: "Content",
      color: "#f59e0b",
      items: [
        { id: "card", label: "card" },
        { id: "context-card", label: "context-card" },
        { id: "element-title", label: "element-title" },
        {
          id: "field",
          label: "field · field-list",
          badge: "new",
          badgeTone: "info",
        },
        { id: "badges", label: "badge · status · icon" },
        { id: "avatar", label: "avatar", icon: "team" },
        {
          id: "timeline",
          label: "timeline",
          badge: "new",
          badgeTone: "info",
        },
      ],
    },
    {
      label: "Feedback",
      color: "#ec4899",
      items: [{ id: "toast", label: "toast", icon: "toast" }],
    },
    {
      label: "Forms",
      color: "#10b981",
      items: [
        {
          id: "form",
          label: "input",
          icon: "edit",
          badge: "new",
          badgeTone: "info",
        },
        { id: "form-layout", label: "form layout" },
        { id: "dropzone", label: "file dropzone" },
      ],
    },
    {
      label: "Foundations",
      color: "#64748b",
      items: [
        { id: "icons", label: "icons" },
        { id: "tokens", label: "design tokens" },
      ],
    },
  ];

  /* ── icons page — the sh3-icon system + the full built-in catalogue ────── */
  protected readonly iconSizeSteps = ["xs", "sm", "md", "lg", "xl"] as const;
  /** Colour tokens the icon inherits via `currentColor` (set on a wrapper). */
  protected readonly iconColorTokens = [
    "text",
    "text-secondary",
    "primary",
    "info",
    "warning",
    "alert",
    "success",
  ] as const;
  /** Every built-in icon name, sorted — the page renders one cell per name. */
  protected readonly allIconNames: readonly string[] =
    Object.keys(SH3_BUILTIN_ICONS).sort();
  protected readonly copiedIcon = signal("");
  protected copyIconName(name: string): void {
    void navigator.clipboard.writeText(name).then(() => {
      this.copiedIcon.set(name);
      setTimeout(() => this.copiedIcon.set(""), 1200);
    });
  }

  /** The avatar page groups the three avatar components behind a tab-nav. */
  protected readonly avatarTabs: Sh3TabNavItem[] = [
    { key: "avatar", label: "avatar" },
    { key: "detail", label: "avatar-detail" },
    { key: "list", label: "avatar-list" },
  ];
  protected readonly avatarTab = signal("avatar");

  /* ── input showcase — a vertical tab-nav, one tab per control ──────────── */
  protected readonly inputTabs: Sh3TabNavItem[] = [
    { key: "text", label: "Text" },
    { key: "number", label: "Number" },
    { key: "select", label: "Select" },
    { key: "search", label: "Search" },
  ];
  protected readonly inputTab = signal("text");
  protected readonly searchTerm = signal("");

  /* ── timeline demo ───────────────────────────────────────────────────── */
  protected readonly tlClicked = signal<string | null>(null);
  protected readonly tlNodes: readonly Sh3TimelineNode[] = [
    {
      key: "start",
      id: null,
      label: "Contract signed",
      date: new Date("2024-01-15"),
      icon: "contracts",
    },
    {
      key: "a1",
      id: "a1",
      label: "Salary raise +6%",
      date: new Date("2024-06-01"),
      icon: "edit",
    },
    {
      key: "a2",
      id: "a2",
      label: "Extended to full-time",
      date: new Date("2024-11-20"),
      icon: "edit",
    },
  ];

  /** Same primitive, horizontal: a progress stepper driven by `done` + `progress`. */
  protected readonly tlSteps: readonly Sh3TimelineNode[] = [
    { key: "created", id: null, label: "Created", done: true, icon: "check" },
    {
      key: "company",
      id: null,
      label: "Company signed",
      done: true,
      icon: "check",
    },
    { key: "employee", id: null, label: "Employee signed", done: false },
    { key: "active", id: null, label: "Active", done: false },
  ];

  /** Custom-content demo: a `state` per node drives a projected #node template. */
  protected readonly tlCustom: readonly Sh3TimelineNode[] = [
    { key: "created", id: null, label: "Créé", done: true, icon: "check" },
    {
      key: "company",
      id: null,
      label: "Signé société",
      done: true,
      icon: "check",
    },
    {
      key: "employee",
      id: "sign_employee",
      label: "Signé employé",
      clickable: true,
      state: "pending",
    },
    { key: "active", id: null, label: "Actif", state: "todo" },
  ];

  /* ── Timeline playground — params drive a live preview + code ─────────── */
  protected readonly tlpOrientation = signal<"vertical" | "horizontal">(
    "horizontal",
  );
  /** Completed step count for the horizontal stepper (drives `done` + fill). */
  protected readonly tlpDone = signal(2);
  protected readonly tlpSquare = signal(false);
  protected readonly tlpPlacements = [
    "above",
    "below",
    "inline",
    "hidden",
  ] as const satisfies readonly Sh3TimelineDatePlacement[];
  protected readonly tlpDatePlacement =
    signal<Sh3TimelineDatePlacement>("below");
  /** Make the horizontal steps clickable (buttons that emit their key). */
  protected readonly tlpClickable = signal(false);
  /** Dot design applied to every previewed node. */
  protected readonly tlpVariant = signal<"plain" | "hollow">("plain");
  protected readonly tlpClicked = signal<string | null>(null);
  private readonly TLP_STEPS = [
    { label: "Created", date: "15 Jan" },
    { label: "Company signed", date: "18 Jan" },
    { label: "Employee signed", date: "22 Jan" },
    { label: "Active", date: "1 Feb" },
  ] as const;

  /** Nodes for the previewed timeline — history (vertical) or steps (horizontal). */
  protected readonly tlpNodes = computed<readonly Sh3TimelineNode[]>(() => {
    if (this.tlpOrientation() === "vertical") {
      return this.tlNodes;
    }
    const done = this.tlpDone();
    const clickable = this.tlpClickable();
    return this.TLP_STEPS.map((step, i) => ({
      key: step.label,
      id: null,
      clickable,
      label: step.label,
      displayDate: i < done ? step.date : undefined,
      done: i < done,
      icon: i < done ? "check" : undefined,
    }));
  });

  /** Derived fill % (display only — the component derives it from `done` too). */
  protected readonly tlpProgress = computed(() => {
    const done = this.tlpDone();
    const n = this.TLP_STEPS.length;
    return done <= 0 ? 0 : Math.round(((done - 1) / (n - 1)) * 100);
  });

  protected readonly timelinePlaygroundCode = computed(() => {
    const horizontal = this.tlpOrientation() === "horizontal";
    const lines = ["<sh3-timeline"];
    if (horizontal) {
      // No [progress] — the fill derives from each node's `done`.
      lines.push('  orientation="horizontal"');
      lines.push('  ariaLabel="Signature progress"');
      if (this.tlpClickable()) {
        lines.push('  (nodeClick)="onStep($event)"');
      }
    } else {
      lines.push('  ariaLabel="Contract history"');
      lines.push('  nodeTitle="Go to item"');
      lines.push('  (nodeClick)="onNode($event)"');
    }
    if (this.tlpSquare()) {
      lines.push("  square");
    }
    if (this.tlpVariant() !== "plain") {
      lines.push('  variant="hollow"');
    }
    if (this.tlpDatePlacement() !== "below") {
      lines.push(`  datePlacement="${this.tlpDatePlacement()}"`);
    }
    lines.push('  [nodes]="nodes"', "/>");
    return lines.join("\n");
  });

  /* ── file dropzone demo ──────────────────────────────────────────────── */
  protected readonly dzFiles = signal<readonly string[]>([]);
  protected readonly dzBusy = signal(false);
  protected onDzPick(files: File[]): void {
    this.dzFiles.set(files.map((f) => f.name));
  }

  /* ── select demo ─────────────────────────────────────────────────────── */
  protected readonly selCurrency = signal("");
  protected readonly selSize = signal("");
  protected readonly currencies = ["EUR", "USD", "GBP", "JPY"];

  /* ── form page — a vertical tab-nav drives a settings-style form ────────── */
  protected readonly formTabs: Sh3TabNavItem[] = [
    { key: "profile", label: "Profile" },
    { key: "account", label: "Account" },
    { key: "notifications", label: "Notifications", badge: 2 },
  ];
  protected readonly formTab = signal("profile");

  /* Fields — plain signals bound to sh3-input via [(value)] (text) or native
     controls (select / textarea, the sanctioned path for those). Showcases the
     layout: vertical nav + page-section + choice-row. */
  protected readonly demoText = signal("Two-way [(value)]");
  protected readonly demoBpm = signal<number | null>(120);
  protected readonly demoArrows = signal<number | null>(8);
  protected readonly demoStepper = signal<number | null>(2);

  /* ── Number-input playground — params drive a live preview + code ─────── */
  protected readonly npSpinner = signal<Sh3NumberSpinner>("plusminus");
  protected readonly npControls = signal<Sh3NumberControls>("inside");
  protected readonly npSize = signal<"sm" | "md" | "lg">("md");
  protected readonly npStep = signal(1);
  protected readonly npMin = signal(0);
  protected readonly npMax = signal(0);
  protected readonly npShowStep = signal(false);
  protected readonly npSnap = signal(false);
  protected readonly npDecimals = signal<number | undefined>(undefined);
  protected readonly npValue = signal<number | null>(4);

  protected readonly numberPlaygroundCode = computed(() => {
    const lines = ["<sh3-number-input", '  label="Quantity"'];
    if (this.npSize() !== "md") {
      lines.push(`  size="${this.npSize()}"`);
    }
    if (this.npSpinner() !== "plusminus") {
      lines.push(`  spinner="${this.npSpinner()}"`);
    }
    if (this.npControls() !== "inside") {
      lines.push(`  controls="${this.npControls()}"`);
    }
    if (this.npMin() > 0) {
      lines.push(`  [min]="${this.npMin()}"`);
    }
    if (this.npMax() > 0) {
      lines.push(`  [max]="${this.npMax()}"`);
    }
    if (this.npStep() !== 1) {
      lines.push(`  [step]="${this.npStep()}"`);
    }
    if (this.npShowStep()) {
      lines.push("  showStep");
    }
    if (this.npSnap()) {
      lines.push("  snapToStep");
    }
    const decimals = this.npDecimals();
    if (decimals === 0) {
      lines.push("  integer");
    } else if (decimals !== undefined) {
      lines.push(`  [decimals]="${decimals}"`);
    }
    lines.push('  [(value)]="qty"', "/>");
    return lines.join("\n");
  });

  /* A Signal Forms field with a required validator — blur while empty to
     surface the error under the control. */
  protected readonly demoReqName = signal("");
  protected readonly demoReqForm = form(this.demoReqName, (p) => {
    required(p, { message: "Name is required" });
  });
  protected readonly fName = signal("Clément Aubry");
  protected readonly fEmail = signal("clement@sh3pherd.dev");
  protected readonly fRole = signal("manager");
  protected readonly fBio = signal("");
  protected readonly fUsername = signal("caubry");
  protected readonly fLang = signal("fr");
  protected readonly fTwoFactor = signal("off");
  protected readonly fDigest = signal("daily");
  protected readonly fPush = signal("on");

  protected readonly roleOptions: Sh3ChoiceOption[] = [
    { key: "manager", label: "Manager" },
    { key: "member", label: "Member" },
    { key: "guest", label: "Guest" },
  ];
  protected readonly onOff: Sh3ChoiceOption[] = [
    { key: "off", label: "Off" },
    { key: "on", label: "On" },
  ];
  protected readonly digestOptions: Sh3ChoiceOption[] = [
    { key: "off", label: "Off" },
    { key: "daily", label: "Daily" },
    { key: "weekly", label: "Weekly" },
  ];

  protected readonly formSaved = signal(false);
  protected saveForm(): void {
    this.formSaved.set(true);
    setTimeout(() => this.formSaved.set(false), 1500);
  }
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
  protected readonly buttonVariants: Sh3ButtonVariant[] = [
    "primary",
    "recommended",
    "critical",
    "ghost",
    "solid",
  ];
  protected readonly buttonSizes: Sh3ButtonSize[] = ["sm", "md", "lg"];
  protected readonly buttonClicks = signal(0);
  protected readonly biMasked = signal(false);
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

  /* ── Avatar demos + the app-wide palette switch ─────────────────────── */
  /** Names for the "deterministic colour per seed" row. */
  protected readonly avatarNames = [
    "Clément Aubry",
    "Inès Bernard",
    "Marc Machine",
    "Sofia Duarte",
    "Léa Petit",
    "Tom Rivière",
  ] as const;
  /** A team roster for the avatar-list — a few carry per-face state so the
   *  showcase demonstrates absence + scheduled status in context. */
  protected readonly team: readonly Sh3AvatarListItem[] = [
    { name: "Clément Aubry" },
    { name: "Inès Bernard", variant: "ghost" }, // a guest among members
    { name: "Marc Machine", muted: true }, // absent today
    { name: "Sofia Duarte", ring: "accent", ringStyle: "dotted" }, // incoming
    { name: "Léa Petit", ring: "warning", ringStyle: "dotted" }, // leaving
    { name: "Tom Rivière" },
    { name: "Nora Khan" },
  ];
  /** A self-contained image (data URI) for the imageUrl demos — no network. */
  protected readonly demoAvatarImage =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='44' height='44'%3E%3Crect width='44' height='44' fill='%232f855a'/%3E%3Ctext x='22' y='30' font-size='20' fill='white' text-anchor='middle' font-family='sans-serif'%3ES3%3C/text%3E%3C/svg%3E";

  /** The palette registry is a root singleton — switching it recolours every
   *  avatar in the app at once (a given seed keeps one colour, app-wide). */
  private readonly palette = inject(Sh3PaletteRegistry);
  protected readonly palettes: readonly Sh3AutoPaletteName[] = [
    "vivid",
    "extended",
    "pastel",
  ];
  protected readonly activePalette = signal<Sh3AutoPaletteName>("vivid");
  protected setPalette(name: Sh3AutoPaletteName): void {
    this.palette.use(name);
    this.activePalette.set(name);
  }

  /* ── avatar + avatar-detail: click a demo → its markup in the code panel ── */
  protected readonly avatarDemos: readonly DemoGroup<AvatarDemo>[] = [
    {
      label: "size · sm / md / lg",
      items: [
        { name: "Clément Aubry", size: "sm" },
        { name: "Clément Aubry", size: "md" },
        { name: "Clément Aubry", size: "lg" },
      ],
    },
    {
      label: "variant · solid / ghost (guest) · square (org)",
      items: [
        { name: "Inès Bernard" },
        { name: "Inès Bernard", variant: "ghost" },
        { name: "Sh3pherd", square: true },
      ],
    },
    {
      label: "imageUrl — replaces initials",
      items: [
        { name: "Léa Petit", image: true },
        { name: "Sh3pherd", square: true, image: true },
      ],
    },
    {
      label: "state · muted (absence) + status ring (dotted = scheduled)",
      items: [
        { name: "Marc Machine", size: "lg", muted: true },
        {
          name: "Sofia Duarte",
          size: "lg",
          ring: "accent",
          ringStyle: "dotted",
        },
        { name: "Léa Petit", size: "lg", ring: "warning", ringStyle: "dotted" },
        { name: "Tom Rivière", size: "lg", ring: "alert", ringStyle: "dotted" },
        { name: "Nora Khan", size: "lg", ring: "success" },
      ],
    },
  ];
  protected readonly detailDemos: readonly DemoGroup<DetailDemo>[] = [
    {
      label: "two lines (name + email) · sizes",
      items: [
        {
          primary: "Clément Aubry",
          secondary: "clement@sh3pherd.dev",
          size: "sm",
        },
        { primary: "Clément Aubry", secondary: "clement@sh3pherd.dev" },
        {
          primary: "Clément Aubry",
          secondary: "clement@sh3pherd.dev",
          size: "lg",
        },
      ],
    },
    { label: "single line", items: [{ primary: "Inès Bernard" }] },
    {
      label: "ghost (guest) · square (org) · image",
      items: [
        { primary: "Marc Machine", secondary: "Invité", variant: "ghost" },
        { primary: "Sh3pherd", secondary: "Organisation", square: true },
        { primary: "Léa Petit", secondary: "Design", image: true },
      ],
    },
  ];

  /** The clicked demo per tab (reference-stable objects → highlight by identity). */
  protected readonly avatarPicked = signal<AvatarDemo | null>(null);
  protected readonly detailPicked = signal<DetailDemo | null>(null);
  protected readonly avatarPickedCode = computed(() => {
    const demo = this.avatarPicked();
    return demo ? avatarDemoCode(demo) : "";
  });
  protected readonly detailPickedCode = computed(() => {
    const demo = this.detailPicked();
    return demo ? detailDemoCode(demo) : "";
  });
  protected readonly demoCopied = signal(false);
  /* ── sticky-column directive demo ── */
  protected readonly stickyDemoRows = [1, 2, 3, 4, 5, 6, 7, 8];
  protected readonly stickyDemoAnchor = signal<Sh3StickyColumnAnchor>("top");
  protected readonly stickyDemoAnchors: readonly Sh3StickyColumnAnchor[] = [
    "top",
    "center",
    "bottom",
  ];
  protected readonly stickyDemoOffset = signal(8);
  protected readonly stickyColumnCode = computed(() => {
    const anchor = this.stickyDemoAnchor();
    const offset = this.stickyDemoOffset();
    const anchorAttr = anchor === "top" ? "" : ` sticky="${anchor}"`;
    const offsetAttr = offset === 0 ? "" : ` [stickyOffset]="${offset}"`;
    return [
      "<!-- layout only; keeps the <aside> semantics -->",
      `<aside sh3StickyColumn${anchorAttr}${offsetAttr}>`,
      "  <app-history />",
      "  <app-termination />",
      "</aside>",
      "",
      "/* the page un-sticks at its own stacking breakpoint */",
      "@media (max-width: 1040px) {",
      "  aside[sh3StickyColumn] {",
      "    --sh3-sticky-column-position: static;",
      "  }",
      "}",
    ].join("\n");
  });

  /* ── aside-layout demo ── */
  protected readonly aslRows = [1, 2, 3, 4, 5, 6, 7, 8];
  protected readonly aslLeft = signal(false);
  protected readonly aslEqual = signal(false);
  protected readonly aslOffset = signal(8);
  protected readonly asideLayoutCode = computed(() => {
    const left = this.aslLeft();
    const offset = this.aslOffset();
    // 24px is the layout default — omit the attribute when it matches.
    const open =
      offset === 24
        ? "<sh3-aside-layout>"
        : `<sh3-aside-layout [topOffset]="${offset}">`;
    return [
      open,
      ...(left ? ["  <app-timeline asideLeft />"] : []),
      "  <!-- untagged elements → centre column -->",
      "  <app-header />",
      '  <sh3-page-section title="…">…</sh3-page-section>',
      "  <!-- tag each rail element -->",
      "  <app-history asideRight />",
      "  <app-actions asideRight />",
      "</sh3-aside-layout>",
    ].join("\n");
  });

  protected copyDemoCode(code: string): void {
    void navigator.clipboard.writeText(code).then(() => {
      this.demoCopied.set(true);
      setTimeout(() => this.demoCopied.set(false), 1500);
    });
  }

  /* ── avatar-list showcase: preview + settings + code + token sandbox ─── */
  protected readonly alCount = signal(7);
  protected readonly alLimit = signal(4);
  protected readonly alTop = signal<"first" | "last">("first");
  protected readonly alSize = signal<"sm" | "md" | "lg">("md");
  protected readonly alSquare = signal(false);
  /** The team sliced to the chosen face count — drives the preview. */
  protected readonly alFaces = computed(() =>
    this.team.slice(0, this.alCount()),
  );

  /** The `<sh3-avatar-list>` markup reflecting the settings — live. */
  protected readonly alShowCode = signal(false);
  protected readonly alCode = computed(() => {
    const attrs = [
      '[avatars]="team"',
      this.alLimit() > 0 ? `[limit]="${this.alLimit()}"` : "",
      this.alTop() === "first" ? "" : `top="${this.alTop()}"`,
      this.alSize() === "md" ? "" : `size="${this.alSize()}"`,
      this.alSquare() ? "square" : "",
    ].filter(Boolean);
    return `<sh3-avatar-list\n  ${attrs.join("\n  ")}\n/>`;
  });
  protected readonly alCopied = signal(false);
  protected copyAlCode(): void {
    void navigator.clipboard.writeText(this.alCode()).then(() => {
      this.alCopied.set(true);
      setTimeout(() => this.alCopied.set(false), 1500);
    });
  }

  /** avatar-list's overridable tokens — its own ring var + the chip surfaces. */
  protected readonly alTokens: readonly PageTokenGroup[] = [
    {
      label: "ring",
      tokens: [
        {
          prop: "--sh3-avatar-list-ring",
          desc: "ring around each face",
          kind: "color",
        },
      ],
    },
    {
      label: "overflow chip",
      tokens: [
        colorToken("primary-surface", "+N chip background"),
        colorToken("primary-text", "+N chip text"),
      ],
    },
    { label: "roundness", tokens: [radiusToken("sm", "square face rounding")] },
  ];
  private readonly alPreviewRef =
    viewChild<ElementRef<HTMLElement>>("alPreview");
  protected readonly alOverrides = signal<Record<string, string>>({});
  protected readonly hasAlOverrides = computed(
    () => Object.keys(this.alOverrides()).length > 0,
  );
  protected setAlOverride(prop: string, value: string): void {
    this.alOverrides.update((o) => withOverride(o, prop, value));
  }
  protected resetAlOverrides(): void {
    this.alOverrides.set({});
  }
  protected readonly alTokensCss = computed(() =>
    overrideCss("sh3-avatar-list", this.alOverrides()),
  );
  protected readonly alCssCopied = signal(false);
  protected copyAlTokensCss(): void {
    void navigator.clipboard.writeText(this.alTokensCss()).then(() => {
      this.alCssCopied.set(true);
      setTimeout(() => this.alCssCopied.set(false), 1500);
    });
  }

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
    effect(() =>
      applyOverrides(
        this.alPreviewRef()?.nativeElement,
        this.alTokens,
        this.alOverrides(),
      ),
    );
  }

  private observeSections(): void {
    const root = this.scrollRef().nativeElement;
    const sections = this.navGroups
      .flatMap((group) => group.items)
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

/** The `<sh3-avatar>` markup for a demo — only the non-default props. */
function avatarDemoCode(d: AvatarDemo): string {
  const attrs = [
    `name="${d.name}"`,
    d.size && d.size !== "md" ? `size="${d.size}"` : "",
    d.variant && d.variant !== "solid" ? `variant="${d.variant}"` : "",
    d.square ? "square" : "",
    d.image ? `[imageUrl]="logoUrl"` : "",
    d.muted ? `[muted]="true"` : "",
    d.ring && d.ring !== "none" ? `ring="${d.ring}"` : "",
    d.ringStyle && d.ringStyle !== "solid" ? `ringStyle="${d.ringStyle}"` : "",
  ].filter(Boolean);
  return `<sh3-avatar ${attrs.join(" ")} />`;
}

/** The `<sh3-avatar-detail>` markup for a demo — only the non-default props. */
function detailDemoCode(d: DetailDemo): string {
  const attrs = [
    `primary="${d.primary}"`,
    d.secondary ? `secondary="${d.secondary}"` : "",
    d.size && d.size !== "md" ? `size="${d.size}"` : "",
    d.variant && d.variant !== "solid" ? `variant="${d.variant}"` : "",
    d.square ? "square" : "",
    d.image ? `[imageUrl]="logoUrl"` : "",
  ].filter(Boolean);
  return `<sh3-avatar-detail ${attrs.join(" ")} />`;
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
