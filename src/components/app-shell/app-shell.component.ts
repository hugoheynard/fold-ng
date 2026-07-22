import { NgTemplateOutlet } from "@angular/common";
import {
  Component,
  HostListener,
  computed,
  effect,
  inject,
  input,
  model,
} from "@angular/core";
import { FocusTrapDirective } from "../../a11y/focus-trap.directive";
import { Sh3IdService } from "../../a11y/id.service";
import { observeElementWidth } from "../../dom/observe-element-width";
import { Sh3SurfaceDirective } from "../../directives/surface.directive";

/** Width (px) at or below which the rails collapse and the primary rail becomes
 *  a mobile drawer. Kept in lockstep with the `@media`/`@container` breakpoint
 *  in the stylesheet. */
const MOBILE_BREAKPOINT = 768;

/**
 * `<sh3-app-shell>` — the responsive application skeleton.
 *
 * A pure structural grid with four content slots: it owns the layout and the
 * responsive collapse, the app owns what fills the slots (nav, header, routed
 * content, overlays) and all state/routing. Rail visibility is driven from the
 * projected rail component itself (an empty `railSecondary` self-collapses).
 *
 * Sizing has two ergonomic paths that compose:
 * - **Typed inputs** (`railWidth`, `headerHeight`, `headerHeightMobile`) for the
 *   common case — plain px numbers, discoverable and type-checked in the
 *   template.
 * - **CSS variables** for the theming case — set `--sh3-shell-*` on any ancestor
 *   to compose tokens (`var(--w-appMenu)`) or drive it from a media query. An
 *   unset input inherits the variable, so the two never fight.
 *
 * ```
 * ┌────────┬──────────────┬─────────────────────┐
 * │  rail  │ rail          │ header              │  ← header row (fixed height)
 * │ primary│ secondary     ├─────────────────────┤
 * │ (auto, │ (auto width,  │ content             │  ← content row (1fr)
 * │  self- │  self-        │ (position: relative │
 * │  sized)│  collapsing)  │  anchor for panels) │
 * │        │               ├─────────────────────┤
 * │        │               │ footer              │  ← footer row (auto — 0 when empty)
 * └────────┴──────────────┴─────────────────────┘
 * ```
 *
 * At ≤768px it becomes a single header + content + footer column and the rails
 * drop out. How the nav comes back is `mobileNav`:
 * - `"drawer"` (default) — the **primary** rail turns into an off-canvas drawer;
 *   bind `[(mobileNavOpen)]` and give the app a mobile-only hamburger to slide
 *   it in over a scrim (`Escape` / scrim / widening close it). Render the
 *   projected rail expanded in the drawer, since the collapsed icon rail is the
 *   desktop chrome.
 * - `"none"` — no built-in mobile nav; compose an `sh3-nav-launcher` (a
 *   full-screen tile grid) bound to the same `mobileNavOpen`.
 *
 * ## Slots
 * | Attribute        | Region                                    |
 * |------------------|-------------------------------------------|
 * | `railPrimary`    | Left rail (intrinsic width — the rail component sizes itself; `railWidth` sets its base via `--sh3-shell-rail-width`). At ≤768px it becomes the mobile drawer (see `mobileNavOpen`). |
 * | `railSecondary`  | Second rail (intrinsic width; a component that collapses to `0` hides itself). |
 * | `header`         | Top bar (content column, or full-width — see `headerLayout`). Rendered as `<header>` — project plain elements into it, not another `<header>`. |
 * | *(default)*      | The content region — routed pages, floating panels, overlays, banners. Rendered as the document's single `<main>`. **Full-bleed**: the shell adds no gutter, so a page can paint edge-to-edge (a full-width banner, a hero, a bleeding panel). Want the themed page gutter? Wrap the page in `sh3-page-layout` — padding is *its* job, not the shell's. |
 * | `footer`         | Bottom bar — a player / status strip (`footerBehavior="pinned"`, always in sight) or a legal / support footer (`footerBehavior="scroll"`, revealed at the end of the content). Rendered as `<footer>` (the document's `contentinfo` landmark). **Content-sized and self-collapsing**: an empty slot takes no space (unlike the fixed-height header). Content column, or full-width — see `footerLayout`. |
 *
 * ## Sizing knobs
 * | Input                | CSS variable                       | Default | Meaning                    |
 * |----------------------|------------------------------------|---------|----------------------------|
 * | `railWidth`          | `--sh3-shell-rail-width`           | `64px`  | Base width the primary rail reads (column is intrinsic). |
 * | `headerHeight`       | `--sh3-shell-header-height`        | `56px`  | Header row height.         |
 * | `headerHeightMobile` | `--sh3-shell-header-height-mobile` | `52px`  | Header height at ≤768px.    |
 *
 * ## Layout knobs
 * | Input          | Values                | Default   | Meaning                                    |
 * |----------------|-----------------------|-----------|--------------------------------------------|
 * | `headerLayout` | `"inset" \| "full"`   | `"inset"` | `inset` = header sits over the content column (rails climb its side); `full` = header spans the full width, above the rails. |
 * | `footerLayout` | `"inset" \| "full"`   | `"inset"` | `inset` = footer sits under the content column (rails climb its side); `full` = footer spans the full width, below the rails (the usual player-bar look). Ignored when `footerBehavior="scroll"`. |
 * | `footerBehavior`| `"pinned" \| "scroll"`| `"pinned"`| `pinned` = the footer is a fixed row, **always in sight** (a player / status bar) — supports `inset` and `full`. `scroll` = the footer flows at the **end of the content**, revealed when you scroll to the bottom (a legal / support footer) — it lives in the content column (inset), and the shell owns the content scroll, so project *flow* content, not a page that manages its own full-height scroll. |
 * | `appearance`   | `"flat" \| "floating"`| `"flat"`  | `flat` = regions are edge-to-edge blocks; `floating` = each region is a rounded, elevated card on a page-colour gutter (inset-dashboard look). |
 * | `contentScroll`| `"clip" \| "auto"`    | `"clip"`  | `clip` = the shell clips the content region; the page inside owns its scroll (`sh3-page-layout`). `auto` = the content region scrolls itself, for plain content. Ignored under `footerBehavior="scroll"`. |
 *
 * In `floating` mode the content cell becomes a rounded card; because it already
 * clips its overflow, a floating panel anchored inside it inherits that radius
 * for free — no extra wiring.
 *
 * ## Accessibility
 * The shell renders a **skip-link** as its first Tab stop — jumping keyboard
 * users past the rails straight to the `<main>` content (`skipLinkLabel` sets
 * its text). The `<main>` is focusable (`tabindex="-1"`) so the jump lands.
 *
 * @selector `sh3-app-shell`
 *
 * @example
 * ```html
 * <sh3-app-shell
 *   [railWidth]="72"
 *   headerLayout="full"
 *   appearance="floating"
 *   [(mobileNavOpen)]="navOpen"
 * >
 *   <app-menu railPrimary />
 *   <app-workspace-rail railSecondary />
 *   <app-header header /><!-- its hamburger toggles navOpen at ≤768px -->
 *   <router-outlet />
 *   <!-- panels / overlays / banners also go in the default slot -->
 *   <app-player footer /><!-- optional; omit it and the footer row collapses -->
 * </sh3-app-shell>
 * ```
 */
@Component({
  selector: "sh3-app-shell",
  standalone: true,
  imports: [Sh3SurfaceDirective, NgTemplateOutlet, FocusTrapDirective],
  host: {
    "[style.--sh3-shell-rail-width]": "railWidthVar()",
    "[style.--sh3-shell-header-height]": "headerHeightVar()",
    "[style.--sh3-shell-header-height-mobile]": "headerHeightMobileVar()",
    "[class.header-full]": 'headerLayout() === "full"',
    "[class.footer-full]": 'footerLayout() === "full"',
    "[class.footer-scroll]": 'footerBehavior() === "scroll"',
    "[class.floating]": 'appearance() === "floating"',
    "[class.mobile-drawer]": 'mobileNav() === "drawer"',
    "[class.mobile-nav-open]": "drawerOpen()",
    "[class.content-auto]": 'contentScroll() === "auto"',
  },
  templateUrl: "./app-shell.component.html",
  styleUrl: "./app-shell.component.scss",
})
export class Sh3AppShellComponent {
  /** Base width the primary rail reads in px (the column is intrinsic — the rail
   *  component sizes itself). Omit to inherit `--sh3-shell-rail-width` (64). */
  readonly railWidth = input<number>();
  /** Header row height in px. Omit to inherit `--sh3-shell-header-height` (56). */
  readonly headerHeight = input<number>();
  /** Header height at ≤768px in px. Omit to inherit `--sh3-shell-header-height-mobile` (52). */
  readonly headerHeightMobile = input<number>();

  /** `"full"` spans the header across every column, above the rails; `"inset"` (default) keeps it over the content column. */
  readonly headerLayout = input<"inset" | "full">("inset");
  /** `"full"` spans the footer across every column, below the rails (the usual player-bar look); `"inset"` (default) keeps it under the content column. The footer row is content-sized and collapses to `0` when the slot is empty. Ignored when `footerBehavior="scroll"`. */
  readonly footerLayout = input<"inset" | "full">("inset");
  /** `"pinned"` (default) keeps the footer always in sight as a fixed row (a player / status bar); `"scroll"` lets it flow at the end of the content, revealed when you scroll to the bottom (a legal / support footer). `scroll` is inset-only and makes the shell own the content scroll — project flow content, not a page that manages its own full-height scroll. */
  readonly footerBehavior = input<"pinned" | "scroll">("pinned");
  /** `"floating"` renders each region as a rounded, elevated card on a page-colour gutter; `"flat"` (default) is edge-to-edge blocks. */
  readonly appearance = input<"flat" | "floating">("flat");

  /**
   * Who owns the content region's scroll:
   * - `"clip"` (default) — the shell clips it; the page inside owns its scroll
   *   (an `sh3-page-layout` is its own scroll box). A full-bleed page paints to
   *   the edges and never double-scrolls.
   * - `"auto"` — the shell's content region scrolls itself. For plain content
   *   that isn't wrapped in a self-scrolling page. Ignored under
   *   `footerBehavior="scroll"` (which already makes the region scroll).
   */
  readonly contentScroll = input<"clip" | "auto">("clip");

  /** The skip-link's label — the first Tab stop, jumping keyboard users past the
   *  rails straight to `<main>`. Override for a non-English app. */
  readonly skipLinkLabel = input("Skip to content");

  /** SSR-safe id linking the skip-link to the `<main>` it targets. */
  protected readonly contentId = inject(Sh3IdService).next("sh3-shell-content");

  /**
   * How the primary rail's navigation is reached on mobile:
   * - `"drawer"` (default) — the built-in off-canvas drawer slides the projected
   *   `[railPrimary]` in over a scrim (driven by `mobileNavOpen`).
   * - `"none"` — the shell renders **no** mobile nav; the rails just drop out.
   *   Compose your own, typically an {@link Sh3NavLauncherComponent} bound to the
   *   same `mobileNavOpen`, when a curated full-screen tile grid fits better than
   *   sliding the desktop rail in.
   */
  readonly mobileNav = input<"drawer" | "none">("drawer");

  /**
   * Two-way: is the mobile nav open?
   *
   * Below the mobile breakpoint the rails drop out; instead of vanishing, the
   * **primary** rail becomes an off-canvas drawer this flag slides in. The app
   * owns the trigger — a mobile-only hamburger in its header, bound
   * `[(mobileNavOpen)]` — and typically flips it back to `false` on navigation;
   * the shell owns the mechanics (slide-in, scrim, `Escape`, focus-trap). It is
   * a no-op above the breakpoint (the rails are always in view there), and it
   * resets to `false` on the way back to a wide viewport so a widened window
   * never keeps a stuck drawer.
   */
  readonly mobileNavOpen = model(false);

  /** The shell's own width, kept live by a shared `ResizeObserver` primitive. */
  private readonly width = observeElementWidth();

  /** Whether the shell is narrow enough to collapse — tracked from its **own**
   *  width, not the viewport, so the drawer engages in step with the CSS
   *  collapse whether that fires on `@media` (the shell fills the viewport) or
   *  `@container` (an embedded preview). `0` (unmeasured / SSR) reads as wide —
   *  the SSR-safe first paint. */
  private readonly isNarrow = computed(() => {
    const w = this.width();
    return w > 0 && w <= MOBILE_BREAKPOINT;
  });

  /** The drawer is live only in `drawer` mode, when the shell is narrow **and**
   *  open — so the focus-trap and scrim never engage over a full-width rail, nor
   *  when a `none`-mode shell defers the mobile nav to a launcher. */
  protected readonly drawerOpen = computed(
    () =>
      this.mobileNav() === "drawer" && this.isNarrow() && this.mobileNavOpen(),
  );

  constructor() {
    // Widening past the breakpoint closes the drawer so it can't linger as a
    // stuck off-canvas panel once the rails are back in view.
    effect(() => {
      if (!this.isNarrow() && this.mobileNavOpen()) {
        this.mobileNavOpen.set(false);
      }
    });
  }

  /** `Escape` closes the drawer — the same contract as the panel host. */
  @HostListener("document:keydown.escape")
  protected onEscape(): void {
    if (this.drawerOpen()) {
      this.mobileNavOpen.set(false);
    }
  }

  /** Dismiss the drawer — the scrim's click target. */
  protected closeMobileNav(): void {
    this.mobileNavOpen.set(false);
  }

  /* Map each input to its CSS var — `null` when unset so the stylesheet
     variable (or its fallback default) keeps winning; a set input overrides it. */
  protected readonly railWidthVar = computed(() => pxVar(this.railWidth()));
  protected readonly headerHeightVar = computed(() =>
    pxVar(this.headerHeight()),
  );
  protected readonly headerHeightMobileVar = computed(() =>
    pxVar(this.headerHeightMobile()),
  );
}

/** A px length for a host CSS-var binding, or `null` to leave the var unset. */
function pxVar(value: number | undefined): string | null {
  return value === undefined ? null : `${value}px`;
}
