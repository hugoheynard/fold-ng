import {
  Component,
  ElementRef,
  computed,
  effect,
  signal,
  viewChild,
} from "@angular/core";
import {
  Sh3ContextCardComponent,
  Sh3IconComponent,
  Sh3MenuComponent,
  Sh3MenuItemComponent,
  Sh3MenuSectionComponent,
  Sh3PageLayoutComponent,
  type Sh3IconName,
  type Sh3MenuItemBadgeTone,
  type Sh3MenuLevel,
  type Sh3MenuTint,
  type Sh3MenuTogglePlacement,
} from "../../src/index";
import {
  applyOverrides,
  colorToken,
  overrideCss,
  radiusToken,
  withOverride,
  type PageTokenGroup,
} from "../token-sandbox";
import { KindBadgeComponent } from "../kind-badge.component";

/** A menu section in the live builder: a colored separator + N simulated items. */
interface MenuSection {
  id: string;
  name: string;
  color: string;
  icons: number;
}

/** `/menu` — the `sh3-menu` live builder + token sandbox gallery page. */
@Component({
  selector: "gal-menu-page",
  standalone: true,
  host: { class: "gal-page" },
  imports: [
    KindBadgeComponent,
    Sh3PageLayoutComponent,
    Sh3ContextCardComponent,
    Sh3MenuComponent,
    Sh3MenuItemComponent,
    Sh3MenuSectionComponent,
    Sh3IconComponent,
  ],
  templateUrl: "./menu.page.html",
})
export default class MenuPage {
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

  // dropped: cross-shell wire — applyToLibrary() mutated the gallery shell's
  // libTint/libLevel/applied nav state, which no longer exists on this page.

  constructor() {
    // Live sandbox: write the token overrides onto the preview element. A DOM
    // write (setProperty/removeProperty) → an effect, not a computed.
    effect(() =>
      applyOverrides(
        this.menuPreviewRef()?.nativeElement,
        this.menuTokens,
        this.menuOverrides(),
      ),
    );
  }
}
