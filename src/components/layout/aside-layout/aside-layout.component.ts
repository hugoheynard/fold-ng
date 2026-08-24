import { booleanAttribute, Component, computed, input } from "@angular/core";

/** Which rail(s) sit on the band ground. A side, never a bare boolean: a band
 *  has a side, and `band` alone would not say which. */
export type FoldAsideBand = "none" | "left" | "right" | "both";

/**
 * `<fold-aside-layout>` — a centered, self-scrolling content column flanked by
 * up to two sticky side rails. The detail-page archetype: a stack of
 * `fold-page-section`s in the middle, sticky asides beside it, collapsing to a
 * single column on narrow viewports.
 *
 * Content goes in three slots; the grid adapts to whichever rails are filled
 * (via `:has()`), so an omitted rail simply drops its column (reactively, even
 * if the rail appears/disappears at runtime):
 * - default slot — the centre content column (the scroll-length driver): every
 *   element that isn't tagged as a rail. Its blocks are stacked for you.
 * - `[asideLeft]` — optional left rail (e.g. a timeline); its presence turns on
 *   the third column. Tag each element that belongs in it.
 * - `[asideRight]` — the right rail (history, actions…). Tag each element.
 *
 * Rail content is tagged per-element (not wrapped in one node) so the layout
 * stacks it directly — that's what lets it style the projected blocks without
 * reaching through view encapsulation.
 *
 * Scroll-agnostic: the asides stick relative to the page's own scroll
 * container (its ancestor), so a page keeps whatever scroll it already owns —
 * the layout just drops the grid + `position: sticky` + responsive boilerplate
 * every detail page was hand-rolling. It inlines the same sticky flow as
 * `foldStickyColumn` (top anchor) because it owns its columns, and pairs with a
 * `fold-page-section` stack in the centre.
 *
 * Inputs are kept minimal: optional a11y labels ({@link asideLeftLabel} /
 * {@link asideRightLabel}) — set one and that rail becomes a labelled
 * `complementary` landmark, leave it unset and the rail is a plain container
 * (no anonymous landmark noise) — plus {@link topOffset}, a convenience over the
 * sticky-offset var. Everything else is CSS custom properties on the host. Each
 * of the three tracks is a var: `--fold-aside-layout-rail-width`
 * (220px) · `--fold-aside-layout-center-width` (`minmax(0, 1fr)`) ·
 * `--fold-aside-layout-side-width` (300px). Rails default to a fixed width and
 * the centre flexes; set all three to `minmax(0, 1fr)` for **equal columns**.
 * Also `--fold-aside-layout-gap` (28px) · `--fold-aside-layout-max` (1240px) ·
 * `--fold-aside-layout-top` (24px, the sticky offset — override per rail with
 * `--fold-aside-layout-left-top` / `--fold-aside-layout-right-top`) ·
 * `--fold-aside-layout-rail-max` (the cap above which a taller-than-viewport rail
 * scrolls internally instead of being clipped by `sticky`). The page still owns
 * the scroll container the asides stick within.
 *
 * ```scss
 * // three equal columns
 * fold-aside-layout {
 *   --fold-aside-layout-rail-width: minmax(0, 1fr);
 *   --fold-aside-layout-center-width: minmax(0, 1fr);
 *   --fold-aside-layout-side-width: minmax(0, 1fr);
 * }
 * ```
 *
 * @selector `fold-aside-layout`
 *
 * @example
 * ```html
 * <fold-aside-layout>
 *   <app-timeline asideLeft />
 *
 *   <app-header />
 *   <fold-page-section title="…">…</fold-page-section>
 *
 *   <app-history asideRight />
 *   <app-actions asideRight />
 * </fold-aside-layout>
 * ```
 */
@Component({
  selector: "fold-aside-layout",
  standalone: true,
  templateUrl: "./aside-layout.component.html",
  styleUrl: "./aside-layout.component.scss",
  host: {
    "[style.--fold-aside-layout-top]": "topOffsetCss()",
    "[class.stack-left-first]": "stackLeftFirst()",
    "[attr.data-band]": "band() === 'none' ? null : band()",
  },
})
export class FoldAsideLayoutComponent {
  /**
   * When the layout collapses to one column, place the left rail **above** the
   * centre instead of below it. Use it when the rail is navigation (a tab-nav),
   * so the menu still precedes the content it drives; leave it off for a
   * companion rail (a timeline, history) where the content should come first.
   */
  readonly stackLeftFirst = input(false, { transform: booleanAttribute });

  /**
   * Which rail(s) sit on the **band** ground — `--fold-color-surface-band`, one
   * step away from the page in whichever direction the theme's polarity
   * dictates. It is the same role, and the same gesture, as `fold-card`'s
   * `raisedBands` and `fold-page-layout`'s `headerBand`.
   *
   * A banded rail **closes the column gutter** and separates with a hairline
   * instead. That is not decoration: a ground held 28px away from the content
   * it accompanies does not read as a band, it reads as a floating card. The
   * reading space moves inside — the rail pays its own padding
   * (`--fold-aside-layout-band-pad`), and the centre pays the matching inset on
   * that side — so switching the band on does not change how wide the content
   * reads.
   *
   * Once the layout collapses to one column there are no columns to separate,
   * so the band keeps only its ground and its padding.
   */
  readonly band = input<FoldAsideBand>("none");
  /**
   * Accessible label for the left rail. Set it and the rail is exposed as a
   * labelled `complementary` landmark; leave it unset and the rail is a plain
   * container (no landmark), so screen readers aren't given an anonymous region.
   */
  readonly asideLeftLabel = input<string>();
  /** Accessible label for the right rail — same rule as {@link asideLeftLabel}. */
  readonly asideRightLabel = input<string>();

  /**
   * The rails' sticky offset — a number (px) or any CSS length. A convenience
   * over the `--fold-aside-layout-top` var (which it sets); leave it unset to keep
   * the 24px default or a per-rail `--fold-aside-layout-left-top` /
   * `-right-top` override.
   *
   * It's the gap the rail keeps from the top **once it sticks** (i.e. after you
   * scroll). At rest the rail already lines up with the centre via the shared
   * grid padding, and `sticky` only ever pushes down, never up — so an offset
   * *below* the grid's top padding has no visible effect until you scroll (a
   * value like `0`–`20` looks inert on a page padded by 28px). Raise the offset
   * past the padding to push the resting rail down; to pull it up, shrink
   * `--fold-aside-layout-pad` instead.
   */
  readonly topOffset = input<number | string>();

  /** The offset as a CSS length, or `null` to leave the var untouched. */
  protected readonly topOffsetCss = computed(() => {
    const o = this.topOffset();
    if (o === undefined) {
      return null;
    }
    return typeof o === "number" ? `${o}px` : o;
  });
}
