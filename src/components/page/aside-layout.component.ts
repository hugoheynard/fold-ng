import { Component, input } from "@angular/core";

/**
 * `<sh3-aside-layout>` — a centered, self-scrolling content column flanked by
 * up to two sticky side rails. The detail-page archetype: a stack of
 * `sh3-page-section`s in the middle, sticky asides beside it, collapsing to a
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
 * `sh3StickyColumn` (top anchor) because it owns its columns, and pairs with a
 * `sh3-page-section` stack in the centre.
 *
 * The only inputs are optional a11y labels ({@link asideLeftLabel} /
 * {@link asideRightLabel}): set one and that rail becomes a labelled
 * `complementary` landmark; leave it unset and the rail is a plain container —
 * no anonymous landmark noise. Everything else is CSS custom properties on the
 * host. Each of the three tracks is a var: `--sh3-aside-layout-rail-width`
 * (220px) · `--sh3-aside-layout-center-width` (`minmax(0, 1fr)`) ·
 * `--sh3-aside-layout-side-width` (300px). Rails default to a fixed width and
 * the centre flexes; set all three to `minmax(0, 1fr)` for **equal columns**.
 * Also `--sh3-aside-layout-gap` (28px) · `--sh3-aside-layout-max` (1240px) ·
 * `--sh3-aside-layout-top` (24px, the sticky offset — override per rail with
 * `--sh3-aside-layout-left-top` / `--sh3-aside-layout-right-top`) ·
 * `--sh3-aside-layout-rail-max` (the cap above which a taller-than-viewport rail
 * scrolls internally instead of being clipped by `sticky`). The page still owns
 * the scroll container the asides stick within.
 *
 * ```scss
 * // three equal columns
 * sh3-aside-layout {
 *   --sh3-aside-layout-rail-width: minmax(0, 1fr);
 *   --sh3-aside-layout-center-width: minmax(0, 1fr);
 *   --sh3-aside-layout-side-width: minmax(0, 1fr);
 * }
 * ```
 *
 * @selector `sh3-aside-layout`
 *
 * @example
 * ```html
 * <sh3-aside-layout>
 *   <app-timeline asideLeft />
 *
 *   <app-header />
 *   <sh3-page-section title="…">…</sh3-page-section>
 *
 *   <app-history asideRight />
 *   <app-actions asideRight />
 * </sh3-aside-layout>
 * ```
 */
@Component({
  selector: "sh3-aside-layout",
  standalone: true,
  templateUrl: "./aside-layout.component.html",
  styleUrl: "./aside-layout.component.scss",
})
export class Sh3AsideLayoutComponent {
  /**
   * Accessible label for the left rail. Set it and the rail is exposed as a
   * labelled `complementary` landmark; leave it unset and the rail is a plain
   * container (no landmark), so screen readers aren't given an anonymous region.
   */
  readonly asideLeftLabel = input<string>();
  /** Accessible label for the right rail — same rule as {@link asideLeftLabel}. */
  readonly asideRightLabel = input<string>();
}
