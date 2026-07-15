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
  Sh3LinkComponent,
  Sh3MenuComponent,
  Sh3MenuItemComponent,
  Sh3MenuSeparatorComponent,
  Sh3PageSectionComponent,
  Sh3PanelHostComponent,
  Sh3PanelHostService,
  Sh3StatusBadgeComponent,
  Sh3TabNavComponent,
  type Sh3TabNavItem,
} from "../src/index";
import { TokenPanelComponent } from "./token-panel.component";
import { TocPanelComponent, type TocItem } from "./toc-panel.component";
import { TabPanelComponent } from "./tab-panel.component";
import { InspectPanelComponent } from "./inspect-panel.component";
import { closestSh3, inspect } from "./inspect";

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
    Sh3MenuSeparatorComponent,
    Sh3PanelHostComponent,
    TokenPanelComponent,
    TocPanelComponent,
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

  /* ── sh3-menu demo ── */
  protected readonly menuItems = [
    { id: "home", icon: "home", label: "Home" },
    { id: "contracts", icon: "contracts", label: "Contracts" },
    { id: "music", icon: "music", label: "Music" },
  ] as const;
  protected readonly menuActive = signal<string>("home");
  protected readonly menuExpanded = signal(false);
  protected readonly menuCollapsible = signal(true);
  protected readonly menuSections = signal(true);

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
    { id: "element-title", label: "element-title" },
    { id: "context-card", label: "context-card" },
    { id: "page-section", label: "page-section" },
    { id: "hero", label: "hero" },
    { id: "card", label: "card" },
    { id: "link", label: "link" },
    { id: "tab-nav", label: "tab-nav" },
    { id: "badges", label: "badge · status · icon" },
  ];
  /** The section currently in view — drives the TOC highlight. */
  protected readonly activeSection = signal<string>("");

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
