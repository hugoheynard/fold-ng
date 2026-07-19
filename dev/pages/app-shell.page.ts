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
  Sh3ContextCardComponent,
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
import {
  applyOverrides,
  colorToken,
  overrideCss,
  radiusToken,
  withOverride,
  type PageTokenGroup,
} from "../token-sandbox";

type ShellMode = "desktop" | "tablet" | "mobile";

/** `/app-shell` — the `sh3-app-shell` gallery page (live preview + token sandbox). */
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
    Sh3ContextCardComponent,
    Sh3SliderComponent,
    Sh3PanelHostComponent,
    PanelScopeDirective,
  ],
  templateUrl: "./app-shell.page.html",
})
export default class AppShellPage {
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
  /** The app-shell preview's own primary-rail selection (decoupled from the
   *  gallery's outer rail, which reuses the same nav data). */
  protected readonly previewNav = signal<string>("home");

  constructor() {
    // Live sandbox: write the token overrides onto the preview element. A DOM
    // write (setProperty/removeProperty) → an effect, not a computed. It
    // re-runs when the override map (or the target element) changes.
    effect(() =>
      applyOverrides(
        this.previewShellRef()?.nativeElement,
        this.shellTokens,
        this.shellOverrides(),
      ),
    );
  }
}
