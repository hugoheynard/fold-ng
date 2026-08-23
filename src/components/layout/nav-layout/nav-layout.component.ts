import {
  computed,
  Component,
  input,
  numberAttribute,
  signal,
} from "@angular/core";
import { observeElementWidth } from "../../../dom/observe-element-width";
import { foldAt } from "../../../dom/fold-at";
import { FOLD_NARROW } from "../breakpoints";
import {
  FOLD_NAV_LAYOUT,
  type FoldNavLayoutContext,
} from "./nav-layout.context";

/**
 * `<fold-nav-layout>` — pairs a tab bar with the content it drives, and owns the
 * one thing every tabbed page hand-rolls: where the nav sits.
 *
 * - `placement="top"` (default) — the nav above the content.
 * - `placement="side"` — the nav as a rail beside the content, folding back on
 *   top when the layout gets narrower than {@link foldAt} (so the menu always
 *   precedes the content it drives, never below it).
 *
 * Content projection — the bar stays yours (tabs, active key, events):
 * - `[tabNav]` → the bar. Project a {@link FoldViewNavComponent} if the tabs
 *   **navigate** (route between views) or a {@link FoldTabsComponent} if they
 *   **switch panels in place** — this layout is agnostic, it only places the bar.
 * - default slot → the content (routed views, or the tabs' `fold-tab-panel`s).
 *
 * **A11y lives in the bar, not here.** `fold-view-nav` brings `<nav>` +
 * `aria-current`; `fold-tabs` brings the full `role="tablist"` widget with its
 * `fold-tab-panel`s. This component adds no tab semantics — it only decides where
 * the bar sits and folds it responsively.
 *
 * A side rail needs a *vertical* bar, a folded one a *horizontal* bar. The
 * projected bar handles that itself with `direction="auto"` (its default) — it
 * reads this layout through DI ({@link FoldNavLayoutContext}), no wiring:
 *
 * ```html
 * <fold-nav-layout placement="side">
 *   <fold-view-nav tabNav [items]="items" />
 *   <router-outlet />
 * </fold-nav-layout>
 * ```
 *
 * The layout also exposes {@link stacked} via `exportAs` for consumers that want
 * to read the folded state themselves.
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
 *   <fold-nav-layout placement="side">
 *     <fold-view-nav tabNav [items]="items" />
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
  host: {
    "[class.is-row]": "!stacked()",
    "[class.bar-collapsed]": "barCollapsed()",
    "[class.is-narrow]": "narrow()",
  },
  providers: [
    { provide: FOLD_NAV_LAYOUT, useExisting: FoldNavLayoutComponent },
  ],
  templateUrl: "./nav-layout.component.html",
  styleUrl: "./nav-layout.component.scss",
})
export class FoldNavLayoutComponent implements FoldNavLayoutContext {
  /** Where the nav sits: above the content, or as a rail beside it. */
  readonly placement = input<"top" | "side">("top");
  /** Width (px) at or below which a `side` nav folds back on top. */
  readonly foldAt = input(720, { transform: numberAttribute });

  /** The layout's own width, kept live by the shared `ResizeObserver` primitive. */
  private readonly width = observeElementWidth();

  /** Whether a `side` rail has folded. Hysteretic — see `foldAt`. */
  private readonly folded = foldAt(this.width, this.foldAt);

  /**
   * Whether the nav currently sits **above** the content — always true for
   * `top`, and true for `side` once the layout has folded.
   * Bind a projected bar's `direction` to it.
   */
  readonly stacked = computed(
    () => this.placement() === "top" || this.folded(),
  );

  /**
   * Set by the projected bar (see {@link FoldNavLayoutContext.barCollapsed}).
   * A collapsed bar is icon-only, so its rail hugs its icons instead of holding
   * a 200px track with ~166px of nothing in it.
   */
  readonly barCollapsed = signal(false);

  /**
   * Narrow enough that the gap to the content should tighten.
   *
   * Measured on the layout's OWN box, not the viewport. The gap used to sit
   * behind `@media (max-width: 640px)` while the fold sat behind a container
   * width, so the two could disagree: a narrow layout on a wide screen kept a
   * 16px gap while folded, and a wide layout on a phone got 4px.
   */
  readonly narrow = computed(
    () => this.width() > 0 && this.width() <= FOLD_NARROW,
  );
}
