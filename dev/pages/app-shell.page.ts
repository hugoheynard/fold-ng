import {
  Component,
  computed,
  effect,
  ElementRef,
  signal,
  viewChild,
} from "@angular/core";
import {
  Sh3AppShellComponent,
  Sh3IconComponent,
  Sh3MenuComponent,
  Sh3MenuItemComponent,
  Sh3PageLayoutComponent,
  Sh3PanelHostComponent,
  Sh3PanelHostService,
  Sh3SliderComponent,
} from "../../src/index";
import { PanelScopeDirective } from "../panel-scope.directive";
import { TabPanelComponent } from "../tab-panel.component";
import { KindBadgeComponent } from "../kind-badge.component";
import { DevPlaygroundComponent } from "../playground.component";

type ShellMode = "desktop" | "tablet" | "mobile";

/** `/app-shell` — the `sh3-app-shell` gallery page (live preview playground). */
@Component({
  selector: "gal-app-shell-page",
  standalone: true,
  host: { class: "gal-page" },
  imports: [
    KindBadgeComponent,
    Sh3PageLayoutComponent,
    Sh3AppShellComponent,
    Sh3MenuComponent,
    Sh3MenuItemComponent,
    Sh3IconComponent,
    Sh3SliderComponent,
    Sh3PanelHostComponent,
    PanelScopeDirective,
    DevPlaygroundComponent,
  ],
  templateUrl: "./app-shell.page.html",
})
export default class AppShellPage {
  protected readonly theme = signal<"dark" | "light">("dark");

  /* ── Live shell parameters (driven by the Settings panel) ── */
  protected readonly shellAppearance = signal<"flat" | "floating">("flat");
  protected readonly shellHeaderLayout = signal<"inset" | "full">("inset");
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
      "  <sh3-menu railPrimary>…</sh3-menu>",
      "  <sh3-menu railSecondary>…</sh3-menu>",
      "  <header header>…</header>",
      "  <!-- untagged content → the main area -->",
      "  <main>…</main>",
      "</sh3-app-shell>",
    ].join("\n"),
  );

  protected toggleTheme(): void {
    this.theme.update((t) => (t === "dark" ? "light" : "dark"));
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
  /** The app-shell preview's own primary-rail selection. */
  protected readonly previewNav = signal<string>("home");
}
