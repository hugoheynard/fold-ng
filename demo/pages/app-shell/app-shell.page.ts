import {
  Component,
  computed,
  effect,
  ElementRef,
  signal,
  viewChild,
  ViewEncapsulation,
} from "@angular/core";
import {
  FoldAppShellComponent,
  FoldElevatedDirective,
  FoldIconComponent,
  FoldMenuComponent,
  FoldMenuItemComponent,
  FoldPageLayoutComponent,
  FoldPanelHostComponent,
  FoldPanelHostService,
  FoldSliderComponent,
} from "../../../src/public-api";
import { PanelScopeDirective } from "../../components/panel-scope.directive";
import { TabPanelComponent } from "../../components/tab-panel.component";
import { KindBadgeComponent } from "../../components/kind-badge.component";
import { DevPlaygroundComponent } from "../../components/playground.component";

type ShellMode = "desktop" | "tablet" | "mobile";

/** `/app-shell` — the `fold-app-shell` gallery page (live preview playground). */
@Component({
  selector: "gal-app-shell-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    FoldPageLayoutComponent,
    FoldAppShellComponent,
    FoldMenuComponent,
    FoldMenuItemComponent,
    FoldElevatedDirective,
    FoldIconComponent,
    FoldSliderComponent,
    FoldPanelHostComponent,
    PanelScopeDirective,
    DevPlaygroundComponent,
  ],
  templateUrl: "./app-shell.page.html",
  styleUrl: "./app-shell.page.scss",
  encapsulation: ViewEncapsulation.None,
})
export default class AppShellPage {
  protected readonly theme = signal<"dark" | "light">("dark");

  /* ── Live shell parameters (driven by the Settings panel) ── */
  /** Raise the primary rail into a floating card (per-region `foldElevated`). */
  protected readonly railElevated = signal(false);
  protected readonly shellHeaderLayout = signal<"inset" | "full">("inset");
  protected readonly shellFooterLayout = signal<"inset" | "full">("full");
  protected readonly shellFooterBehavior = signal<"pinned" | "scroll">(
    "pinned",
  );
  /** Toggles the projected footer so its self-collapse is visible live. */
  protected readonly shellFooter = signal(true);
  protected readonly shellRailWidth = signal(64);
  protected readonly shellHeaderHeight = signal(56);

  /* ── Preview viewport — the switch resizes the shell so its container queries
   *    fold it (secondary rail at tablet, both rails at mobile). ── */
  protected readonly shellModes = ["desktop", "tablet", "mobile"] as const;
  protected readonly shellMode = signal<ShellMode>("desktop");
  private readonly SHELL_MODE_WIDTH: Record<ShellMode, number> = {
    desktop: 1200,
    tablet: 880,
    mobile: 380,
  };
  /** Real render width per viewport — clears the shell's fold thresholds. */
  protected readonly shellWidth = computed(
    () => this.SHELL_MODE_WIDTH[this.shellMode()],
  );

  private readonly windowEl = viewChild<ElementRef<HTMLElement>>("shellWindow");
  private readonly windowWidth = signal(0);
  /** Auto-fit scale (CSS `zoom`) so the real-width shell fits the preview panel;
   *  paint-only, so the fold (container queries) resolves at the real width. */
  protected readonly shellScale = computed(() => {
    const avail = this.windowWidth();
    return avail === 0 ? 1 : Math.min(1, avail / this.shellWidth());
  });

  constructor() {
    effect((onCleanup) => {
      const el = this.windowEl()?.nativeElement;
      if (!el || typeof ResizeObserver === "undefined") {
        return;
      }
      const ro = new ResizeObserver((entries) => {
        this.windowWidth.set(entries[0].contentRect.width);
      });
      ro.observe(el);
      onCleanup(() => ro.disconnect());
    });
  }

  protected setHeaderLayout(value: "inset" | "full"): void {
    this.shellHeaderLayout.set(value);
  }
  protected setFooterLayout(value: "inset" | "full"): void {
    this.shellFooterLayout.set(value);
  }
  protected setFooterBehavior(value: "pinned" | "scroll"): void {
    this.shellFooterBehavior.set(value);
  }

  /** The `<fold-app-shell>` markup reflecting the current settings — live. */
  protected readonly shellCode = computed(() =>
    [
      "<fold-app-shell",
      `  headerLayout="${this.shellHeaderLayout()}"`,
      ...(this.shellFooter()
        ? [
            `  footerLayout="${this.shellFooterLayout()}"`,
            `  footerBehavior="${this.shellFooterBehavior()}"`,
          ]
        : []),
      `  [railWidth]="${this.shellRailWidth()}"`,
      `  [headerHeight]="${this.shellHeaderHeight()}"`,
      ">",
      `  <fold-menu railPrimary${this.railElevated() ? " foldElevated" : ""}>…</fold-menu>`,
      "  <fold-menu railSecondary>…</fold-menu>",
      "  <header header>…</header>",
      "  <!-- untagged content → the main area -->",
      "  <main>…</main>",
      ...(this.shellFooter()
        ? ["  <app-player footer>…</app-player>"]
        : ["  <!-- no footer → the footer row collapses -->"]),
      "</fold-app-shell>",
    ].join("\n"),
  );

  protected toggleTheme(): void {
    this.theme.update((t) => (t === "dark" ? "light" : "dark"));
  }

  /** Open a panel in the preview's own host (a scoped service instance), so it
   *  slides in inside the preview shell rather than the gallery. */
  protected openPreviewPanel(host: FoldPanelHostService): void {
    host.open(TabPanelComponent, { side: "right", width: 260 });
  }

  /* ── railPrimary: a stable static nav, decoupled from the settings ── */
  protected readonly railNav = [
    { id: "home", icon: "home", label: "Home" },
    { id: "contracts", icon: "contracts", label: "Contracts" },
    { id: "music", icon: "music", label: "Music" },
  ] as const;
  /** The app-shell preview's own primary-rail selection. */
  protected readonly previewNav = signal<string>("home");

  /** The preview's mobile-drawer state — two-way bound to the shell, toggled by
   *  the header hamburger that appears in `mobile` mode. */
  protected readonly previewNavOpen = signal(false);

  /** Filler blocks so the preview content overflows — lets `footerBehavior`
   *  "scroll" reveal the footer at the bottom of the scroll. */
  protected readonly previewBlocks = Array.from({ length: 8 }, (_, i) => i);
}
