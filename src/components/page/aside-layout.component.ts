import { Component } from "@angular/core";

/**
 * `<sh3-aside-layout>` — a centered, self-scrolling content column flanked by
 * up to two sticky side rails. The detail-page archetype: a stack of
 * `sh3-page-section`s in the middle, sticky asides beside it, collapsing to a
 * single column on narrow viewports.
 *
 * Three named projection slots — the grid adapts to whichever are filled (via
 * `:has()`), so an omitted rail simply drops its column (reactively, even if
 * the rail appears/disappears at runtime):
 * - `[asideLeft]` — optional left rail (e.g. a timeline); its presence turns on
 *   the third column.
 * - `[center]` — the main content column, and the scroll-length driver.
 * - `[asideRight]` — the right rail (history, actions…).
 *
 * Scroll-agnostic: the asides stick relative to the page's own scroll
 * container (its ancestor), so a page keeps whatever scroll it already owns —
 * the layout just drops the grid + `position: sticky` + responsive boilerplate
 * every detail page was hand-rolling. It inlines the same sticky flow as
 * `sh3StickyColumn` (top anchor) because it owns its columns, and pairs with a
 * `sh3-page-section` stack in the centre.
 *
 * Layout only, no inputs — tune via CSS custom properties on the host:
 * `--sh3-aside-layout-side-width` (300px) · `--sh3-aside-layout-rail-width`
 * (220px) · `--sh3-aside-layout-gap` (28px) · `--sh3-aside-layout-max` (1240px)
 * · `--sh3-aside-layout-top` (84px, the sticky offset). The page still owns the
 * scroll container the asides stick within.
 *
 * @selector `sh3-aside-layout`
 *
 * @example
 * ```html
 * <sh3-aside-layout>
 *   <app-timeline asideLeft />
 *   <div center>
 *     <app-header />
 *     <sh3-page-section title="…">…</sh3-page-section>
 *   </div>
 *   <aside asideRight>
 *     <app-history />
 *     <app-actions />
 *   </aside>
 * </sh3-aside-layout>
 * ```
 */
@Component({
  selector: "sh3-aside-layout",
  standalone: true,
  templateUrl: "./aside-layout.component.html",
  styleUrl: "./aside-layout.component.scss",
})
export class Sh3AsideLayoutComponent {}
