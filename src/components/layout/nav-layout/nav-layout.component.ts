import {
  computed,
  Component,
  effect,
  input,
  numberAttribute,
  signal,
} from "@angular/core";
import { observeElementWidth } from "../../../dom/observe-element-width";

/**
 * Dead band (px) between folding and unfolding. Wider than any scrollbar, so the
 * width a fold gives back can never flip the layout straight back.
 */
const HYSTERESIS = 32;

/**
 * `<fold-nav-layout>` — pairs a tab bar with the content it drives, and owns the
 * one thing every tabbed page hand-rolls: where the nav sits.
 *
 * - `placement="top"` (default) — the nav above the content.
 * - `placement="side"` — the nav as a rail beside the content, folding back on
 *   top when the layout gets narrower than {@link foldAt} (so the menu always
 *   precedes the content it drives, never below it).
 *
 * Content projection — the nav stays yours (tabs, active key, events):
 * - `[tabNav]` → the tab bar (an `fold-view-nav`, or anything else).
 * - default slot → the content for the active tab.
 *
 * **A11y — this owns placement, not the ARIA tabs pattern.** The projected bar
 * carries the `tablist`/`tab` roles; the content is yours. If the tabs switch
 * in-page panels, give that content `role="tabpanel"` named by the active tab;
 * if they navigate between routes, keep plain nav semantics and add no tab
 * roles (the tabs pattern is for panel-switching, not navigation).
 *
 * A side rail needs a *vertical* bar, a folded one a *horizontal* bar. Rather
 * than guess, the layout exposes {@link stacked} (`exportAs`) so the projected
 * nav follows the layout in one binding:
 *
 * ```html
 * <fold-nav-layout placement="side" #tl="foldNavLayout">
 *   <fold-view-nav
 *     tabNav
 *     [direction]="tl.stacked() ? 'horizontal' : 'vertical'"
 *     [tabs]="tabs"
 *     [activeKey]="tab()"
 *     (tabChange)="tab.set($event)"
 *   />
 *   <app-tab-content />
 * </fold-nav-layout>
 * ```
 *
 * **Two roles — same component, composed differently.**
 * - **Page scaffold** — the tab rail *is* the page's primary structure: use it
 *   directly (usually `placement="side"`), the folded bar leading the content.
 * - **Tabbed section** — a tabbed block *inside* a page, among other sections.
 *   Don't reach for a new mode — wrap it in a {@link FoldPageSectionComponent}.
 *   The section owns the title, the `<section>` + heading semantics, the vertical
 *   rhythm and the optional `bleed`; tab-layout stays pure placement. It paints
 *   nothing (no card), so it sits **flat** — add `bleed` on the section for an
 *   edge-to-edge band. The rail folds on the **section's** width (it measures
 *   itself), not the viewport, so nested tabs collapse on their own.
 *
 * ```html
 * <!-- a tabbed section: flat structure (page-section) + tab placement -->
 * <fold-page-section title="Settings" bleed>
 *   <fold-nav-layout placement="side" #tl="foldNavLayout">
 *     <fold-view-nav
 *       tabNav
 *       [direction]="tl.stacked() ? 'horizontal' : 'vertical'"
 *       [tabs]="tabs"
 *       [activeKey]="tab()"
 *       (tabChange)="tab.set($event)"
 *     />
 *     <app-settings-panel />
 *   </fold-nav-layout>
 * </fold-page-section>
 * ```
 *
 * Sizing is CSS custom properties: `--fold-nav-layout-gap` (16px) and
 * `--fold-nav-layout-rail-width` — the side-rail track, defaulting to the shared
 * `--fold-rail-tertiary` (200px). That's the **tertiary** step of the rail
 * hierarchy — the same level the `--fold-color-bg-rail-tertiary` colour names
 * (app menu → workspace → in-page nav) — so every rail in the app stays on one
 * scale. Override the local var per instance.
 *
 * @selector `fold-nav-layout`
 */
@Component({
  selector: "fold-nav-layout",
  standalone: true,
  exportAs: "foldNavLayout",
  host: { "[class.is-row]": "!stacked()" },
  templateUrl: "./nav-layout.component.html",
  styleUrl: "./nav-layout.component.scss",
})
export class FoldNavLayoutComponent {
  /** Where the nav sits: above the content, or as a rail beside it. */
  readonly placement = input<"top" | "side">("top");
  /** Width (px) at or below which a `side` nav folds back on top. */
  readonly foldAt = input(720, { transform: numberAttribute });

  /** Whether a `side` rail has folded. Hysteretic — see {@link HYSTERESIS}. */
  private readonly folded = signal(false);

  /**
   * Whether the nav currently sits **above** the content — always true for
   * `top`, and true for `side` once the layout has folded.
   * Bind a projected bar's `direction` to it.
   */
  readonly stacked = computed(
    () => this.placement() === "top" || this.folded(),
  );

  /** The layout's own width, kept live by the shared `ResizeObserver` primitive. */
  private readonly width = observeElementWidth();

  constructor() {
    // Re-run the hysteretic fold decision on every width change.
    effect(() => this.measure(this.width()));
  }

  /**
   * Fold at `foldAt`, but only unfold once we are clearly past it.
   *
   * Folding makes the content taller, which can bring a scrollbar in and take
   * ~15px of width back — enough to cross a single threshold again and flip
   * forever. A dead band wider than any scrollbar breaks that loop.
   */
  private measure(width: number): void {
    if (width === 0) {
      return;
    }
    const fold = this.foldAt();
    if (!this.folded() && width <= fold) {
      this.folded.set(true);
    } else if (this.folded() && width > fold + HYSTERESIS) {
      this.folded.set(false);
    }
  }
}
