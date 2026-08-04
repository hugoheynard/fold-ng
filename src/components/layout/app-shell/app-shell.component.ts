import { DOCUMENT, NgTemplateOutlet } from "@angular/common";
import {
  Component,
  DestroyRef,
  ElementRef,
  HostListener,
  afterNextRender,
  computed,
  effect,
  inject,
  input,
  model,
  viewChild,
} from "@angular/core";
import { FocusTrapDirective } from "../../../a11y/focus-trap.directive";
import { FoldIdService } from "../../../a11y/id.service";
import { ScrollRegionRegistry } from "../../../a11y/scroll-region-registry.service";
import { observeElementWidth } from "../../../dom/observe-element-width";
import { FoldSurfaceDirective } from "../../../directives/surface.directive";

/** Width (px) at or below which the rails collapse and the primary rail becomes
 *  a mobile drawer. Kept in lockstep with the `@media`/`@container` breakpoint
 *  in the stylesheet. */
const MOBILE_BREAKPOINT = 768;

/**
 * `<fold-app-shell>` — the responsive application skeleton.
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
 * - **CSS variables** for the theming case — set `--fold-shell-*` on any ancestor
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
 * - `"none"` — no built-in mobile nav; compose an `fold-nav-launcher` (a
 *   full-screen tile grid) bound to the same `mobileNavOpen`.
 *
 * ## Slots
 * | Attribute        | Region                                    |
 * |------------------|-------------------------------------------|
 * | `railPrimary`    | Left rail (intrinsic width — the rail component sizes itself; `railWidth` sets its base via `--fold-shell-rail-width`). At ≤768px it becomes the mobile drawer (see `mobileNavOpen`). |
 * | `railSecondary`  | Second rail (intrinsic width; a component that collapses to `0` hides itself). |
 * | `header`         | Top bar (content column, or full-width — see `headerLayout`). Rendered as `<header>` — project plain elements into it, not another `<header>`. |
 * | *(default)*      | The content region — routed pages, floating panels, overlays, banners. Rendered as the document's single `<main>`. **Full-bleed**: the shell adds no gutter, so a page can paint edge-to-edge (a full-width banner, a hero, a bleeding panel). Want the themed page gutter? Wrap the page in `fold-page-layout` — padding is *its* job, not the shell's. |
 * | `footer`         | Bottom bar — a player / status strip (`footerBehavior="pinned"`, always in sight) or a legal / support footer (`footerBehavior="scroll"`, revealed at the end of the content). Rendered as `<footer>` (the document's `contentinfo` landmark). **Content-sized and self-collapsing**: an empty slot takes no space (unlike the fixed-height header). Content column, or full-width — see `footerLayout`. |
 *
 * ## Sizing knobs
 * | Input                | CSS variable                       | Default | Meaning                    |
 * |----------------------|------------------------------------|---------|----------------------------|
 * | `railWidth`          | `--fold-shell-rail-width`           | `64px`  | Base width the primary rail reads (column is intrinsic). |
 * | `headerHeight`       | `--fold-shell-header-height`        | `56px`  | Header row height.         |
 * | `headerHeightMobile` | `--fold-shell-header-height-mobile` | `52px`  | Header height at ≤768px.    |
 *
 * ## Layout knobs
 * | Input          | Values                | Default   | Meaning                                    |
 * |----------------|-----------------------|-----------|--------------------------------------------|
 * | `headerLayout` | `"inset" \| "full"`   | `"inset"` | `inset` = header sits over the content column (rails climb its side); `full` = header spans the full width, above the rails. |
 * | `footerLayout` | `"inset" \| "full"`   | `"inset"` | `inset` = footer sits under the content column (rails climb its side); `full` = footer spans the full width, below the rails (the usual player-bar look). Ignored when `footerBehavior="scroll"`. |
 * | `footerBehavior`| `"pinned" \| "scroll"`| `"pinned"`| `pinned` = the footer is a fixed row, **always in sight** (a player / status bar) — supports `inset` and `full`. `scroll` = the footer flows at the **end of the content**, revealed when you scroll to the bottom (a legal / support footer) — it lives in the content column (inset). A short page still pushes it to the bottom (the content grows to fill), and a tall page reveals it below the fold; you never manage that. |
 * | `scroll`       | `"scroll" \| "stage"` | `"scroll"`| **Who owns the content scroll.** `scroll` (default) = the shell's content region owns the scroll; pages flow inside it (`fold-page-layout scroll="flow"`), the chrome stays put, a `scroll` footer sits at the true end. `stage` = the content region is a fixed-height stage that does *not* scroll — the page fills it and scrolling happens inside `[foldScrollRegion]` areas (a mail-style split view). See `docs/scroll.md`. |
 *
 * ## Elevation (the floating look)
 * The shell owns **structure**, not skin — it drives no `floating` flag. To lift
 * a region into a rounded, shadowed card, put `foldElevated` on the element that
 * paints that region's background (a projected `fold-menu`, an `app-header`, a
 * content wrapper). It composes **per region** — float the rail while the main
 * stays flat, or float them all for an inset dashboard. The shell's only part is
 * the moat: a cell whose content is elevated **pads itself** (`:has`), revealing
 * the page-gutter around the card — padding, so a `height: 100%` region fits
 * with no overflow. `--fold-surface-inset` tunes the gutter. See
 * {@link FoldElevatedDirective}.
 *
 * ## Accessibility
 * The shell renders a **skip-link** as its first Tab stop — jumping keyboard
 * users past the rails straight to the `<main>` content (`skipLinkLabel` sets
 * its text). The `<main>` is focusable (`tabindex="-1"`) so the jump lands; the
 * link moves focus directly rather than following the fragment, so it works
 * under hash routing too.
 *
 * The mobile **drawer is a real modal**, matching the panel host's bar: while
 * open it is a named `role="dialog"` + `aria-modal="true"` (`drawerLabel`), the
 * focus-trap moves focus in and restores it to the trigger on close, and every
 * other region (header, content, footer, second rail) is `inert` — so a
 * screen-reader's virtual cursor can't wander behind the open drawer.
 *
 * **Trigger contract (app-owned).** The shell owns the drawer/dialog; the app
 * owns the hamburger that opens it, so the shell can't set ARIA on that button —
 * it exposes what's needed and documents the wiring. For the pairing to be fully
 * announced, the hamburger should carry `[attr.aria-expanded]="navOpen()"`,
 * `aria-haspopup="dialog"`, and `[attr.aria-controls]="shell.drawerId"` (read the
 * shell via a template ref, `#shell="foldAppShell"`):
 *
 * ```html
 * <fold-app-shell #shell="foldAppShell" [(mobileNavOpen)]="navOpen">
 *   <app-menu railPrimary />
 *   <header header>
 *     <button
 *       class="hamburger"
 *       aria-haspopup="dialog"
 *       [attr.aria-expanded]="navOpen()"
 *       [attr.aria-controls]="shell.drawerId"
 *       (click)="navOpen.set(!navOpen())"
 *     >☰</button>
 *   </header>
 *   <router-outlet />
 * </fold-app-shell>
 * ```
 *
 * @selector `fold-app-shell`
 *
 * @example
 * ```html
 * <fold-app-shell
 *   [railWidth]="72"
 *   headerLayout="full"
 *   [(mobileNavOpen)]="navOpen"
 * >
 *   <app-menu railPrimary foldElevated /><!-- a floating rail; drop it for flat -->
 *   <app-workspace-rail railSecondary />
 *   <app-header header /><!-- its hamburger toggles navOpen at ≤768px -->
 *   <router-outlet />
 *   <!-- panels / overlays / banners also go in the default slot -->
 *   <app-player footer /><!-- optional; omit it and the footer row collapses -->
 * </fold-app-shell>
 * ```
 */
@Component({
  selector: "fold-app-shell",
  standalone: true,
  exportAs: "foldAppShell",
  imports: [FoldSurfaceDirective, NgTemplateOutlet, FocusTrapDirective],
  host: {
    "[style.--fold-shell-rail-width]": "railWidthVar()",
    "[style.--fold-shell-header-height]": "headerHeightVar()",
    "[style.--fold-shell-header-height-mobile]": "headerHeightMobileVar()",
    "[class.header-full]": 'headerLayout() === "full"',
    "[class.footer-full]": 'footerLayout() === "full"',
    "[class.footer-scroll]": 'footerBehavior() === "scroll"',
    "[class.mobile-drawer]": 'mobileNav() === "drawer"',
    "[class.mobile-nav-open]": "drawerOpen()",
    "[attr.data-scroll]": "scroll()",
  },
  templateUrl: "./app-shell.component.html",
  styleUrl: "./app-shell.component.scss",
})
export class FoldAppShellComponent {
  /** Base width the primary rail reads in px (the column is intrinsic — the rail
   *  component sizes itself). Omit to inherit `--fold-shell-rail-width` (64). */
  readonly railWidth = input<number>();
  /** Header row height in px. Omit to inherit `--fold-shell-header-height` (56). */
  readonly headerHeight = input<number>();
  /** Header height at ≤768px in px. Omit to inherit `--fold-shell-header-height-mobile` (52). */
  readonly headerHeightMobile = input<number>();

  /** `"full"` spans the header across every column, above the rails; `"inset"` (default) keeps it over the content column. */
  readonly headerLayout = input<"inset" | "full">("inset");
  /** `"full"` spans the footer across every column, below the rails (the usual player-bar look); `"inset"` (default) keeps it under the content column. The footer row is content-sized and collapses to `0` when the slot is empty. Ignored when `footerBehavior="scroll"`. */
  readonly footerLayout = input<"inset" | "full">("inset");
  /** `"pinned"` (default) keeps the footer always in sight as a fixed row (a player / status bar); `"scroll"` lets it flow at the end of the content, revealed when you scroll to the bottom (a legal / support footer). `scroll` is inset-only and makes the shell own the content scroll — project flow content, not a page that manages its own full-height scroll. */
  readonly footerBehavior = input<"pinned" | "scroll">("pinned");
  /**
   * Who owns the content region's scroll — the shell's single scroll switch.
   * - `"scroll"` (default) — the shell's content region **owns** the scroll.
   *   Pages flow inside it (`fold-page-layout` defaults to `scroll="flow"`), the
   *   header/rails stay put, and a `footerBehavior="scroll"` footer sits at the
   *   true end of the content. This is the document case — the vast majority.
   * - `"stage"` — the content region is a **fixed-height stage** that does *not*
   *   scroll; the page fills it and any scrolling happens inside
   *   `[foldScrollRegion]` areas. This is the app case: a mail-style split view
   *   where the list and the detail scroll independently and the viewport never
   *   moves. A page that must scroll as a unit inside a stage sets
   *   `fold-page-layout scroll="own"`.
   *
   * The scroll always lives on an **inner** scroll box, never on the content
   * region itself, so a docked overlay (the panel host) anchored to the region
   * stays fixed over the frame instead of scrolling away with the content.
   */
  readonly scroll = input<"scroll" | "stage">("scroll");

  /** The skip-link's label — the first Tab stop, jumping keyboard users past the
   *  rails straight to `<main>`. Override for a non-English app. */
  readonly skipLinkLabel = input("Skip to content");

  /** The mobile drawer's accessible name — it becomes a `role="dialog"` while
   *  open, so it must be named. `"Menu"` by default (not `"Navigation"`, which
   *  would echo the `<nav>` landmark inside). Override for a non-English app. */
  readonly drawerLabel = input("Menu");

  private readonly document = inject(DOCUMENT);

  /** SSR-safe id linking the skip-link to the `<main>` it targets. */
  protected readonly contentId =
    inject(FoldIdService).next("fold-shell-content");

  /**
   * SSR-safe id on the mobile drawer (the primary rail). Public and reachable
   * via `exportAs="foldAppShell"` so the app's hamburger can point
   * `aria-controls` at the dialog it opens — see the trigger contract in the
   * class docs.
   */
  readonly drawerId = inject(FoldIdService).next("fold-shell-drawer");

  /**
   * How the primary rail's navigation is reached on mobile:
   * - `"drawer"` (default) — the built-in off-canvas drawer slides the projected
   *   `[railPrimary]` in over a scrim (driven by `mobileNavOpen`).
   * - `"none"` — the shell renders **no** mobile nav; the rails just drop out.
   *   Compose your own, typically an {@link FoldNavLauncherComponent} bound to the
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

  /** The registry of live scroll regions. The shell registers its own content
   *  scroll box so an overlay (the panel host) can freeze it — the scroll owner
   *  here is this inner box, not `document.body`. */
  private readonly scrollRegions = inject(ScrollRegionRegistry);
  /** The inner content scroll box (`scroll` mode) / stage (`stage` mode). */
  private readonly scrollBox = viewChild<ElementRef<HTMLElement>>("scrollBox");

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

    // Register the content scroll box so overlays can freeze it. Client-only
    // (afterNextRender) — SSR has no live scroll to coordinate, and the view
    // child is resolved by then.
    afterNextRender(() => {
      const box = this.scrollBox()?.nativeElement;
      if (box) {
        this.scrollRegions.register(box);
      }
    });
    inject(DestroyRef).onDestroy(() => {
      const box = this.scrollBox()?.nativeElement;
      if (box) {
        this.scrollRegions.unregister(box);
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

  /**
   * Skip-link activation. Moves focus to `<main>` directly instead of letting
   * the browser follow the `#id` fragment — a hash-routing app (`withHashLocation`)
   * would treat that fragment as a route change. `preventDefault` keeps the URL
   * clean; the anchor keeps its `href` for link semantics and no-JS fallback.
   */
  protected skipToContent(event: Event): void {
    event.preventDefault();
    this.document.getElementById(this.contentId)?.focus();
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
