import {
  computed,
  Component,
  effect,
  input,
  numberAttribute,
  signal,
} from "@angular/core";
import { observeElementWidth } from "../../dom/observe-element-width";

/**
 * Dead band (px) between folding and unfolding. Wider than any scrollbar, so the
 * width a fold gives back can never flip the layout straight back.
 */
const HYSTERESIS = 32;

/**
 * `<fold-tab-layout>` — pairs a tab bar with the content it drives, and owns the
 * one thing every tabbed page hand-rolls: where the nav sits.
 *
 * - `placement="top"` (default) — the nav above the content.
 * - `placement="side"` — the nav as a rail beside the content, folding back on
 *   top when the layout gets narrower than {@link foldAt} (so the menu always
 *   precedes the content it drives, never below it).
 *
 * Content projection — the nav stays yours (tabs, active key, events):
 * - `[tabNav]` → the tab bar (an `fold-tab-nav`, or anything else).
 * - default slot → the content for the active tab.
 *
 * A side rail needs a *vertical* bar, a folded one a *horizontal* bar. Rather
 * than guess, the layout exposes {@link stacked} (`exportAs`) so the projected
 * nav follows the layout in one binding:
 *
 * ```html
 * <fold-tab-layout placement="side" #tl="foldTabLayout">
 *   <fold-tab-nav
 *     tabNav
 *     [direction]="tl.stacked() ? 'horizontal' : 'vertical'"
 *     [tabs]="tabs"
 *     [activeKey]="tab()"
 *     (tabChange)="tab.set($event)"
 *   />
 *   <app-tab-content />
 * </fold-tab-layout>
 * ```
 *
 * Sizing is CSS custom properties: `--fold-tab-layout-gap` (16px) and
 * `--fold-tab-layout-nav-width` (200px, the side rail track).
 *
 * @selector `fold-tab-layout`
 */
@Component({
  selector: "fold-tab-layout",
  standalone: true,
  exportAs: "foldTabLayout",
  host: { "[class.is-row]": "!stacked()" },
  templateUrl: "./tab-layout.component.html",
  styleUrl: "./tab-layout.component.scss",
})
export class FoldTabLayoutComponent {
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
