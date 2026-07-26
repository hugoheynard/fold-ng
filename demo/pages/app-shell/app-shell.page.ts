import { Component, computed, signal, ViewEncapsulation } from "@angular/core";
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
import { ComposedOfComponent } from "../../components/composed-of.component";
import { DevPlaygroundComponent } from "../../components/playground.component";

/** `/app-shell` — the `fold-app-shell` gallery page (live preview playground). */
@Component({
  selector: "gal-app-shell-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    ComposedOfComponent,
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
  /** `foldElevated` is per-region — each surface floats on its own — so the demo
   *  exposes one toggle per region rather than a single global switch. */
  protected readonly elevatedPrimary = signal(false);
  protected readonly elevatedSecondary = signal(false);
  protected readonly elevatedHeader = signal(false);
  protected readonly shellHeaderLayout = signal<"inset" | "full">("inset");
  protected readonly shellFooterLayout = signal<"inset" | "full">("full");
  protected readonly shellFooterBehavior = signal<"pinned" | "scroll">(
    "pinned",
  );
  /** Toggles the projected footer so its self-collapse is visible live. */
  protected readonly shellFooter = signal(true);
  protected readonly shellRailWidth = signal(64);
  protected readonly shellHeaderHeight = signal(56);

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
      `  <fold-menu railPrimary${this.elevatedPrimary() ? " foldElevated" : ""}>…</fold-menu>`,
      `  <fold-menu railSecondary${this.elevatedSecondary() ? " foldElevated" : ""}>…</fold-menu>`,
      `  <header header${this.elevatedHeader() ? " foldElevated" : ""}>…</header>`,
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
   *  the header hamburger that appears once the shell folds to one column. */
  protected readonly previewNavOpen = signal(false);

  /** Filler blocks so the preview content overflows — lets `footerBehavior`
   *  "scroll" reveal the footer at the bottom of the scroll. */
  protected readonly previewBlocks = Array.from({ length: 8 }, (_, i) => i);
}
