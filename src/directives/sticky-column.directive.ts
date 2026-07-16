import { Directive } from "@angular/core";

/**
 * `[sh3StickyColumn]` — turns its host into a sticky side column: a vertical
 * flex stack that sticks while the main content scrolls past it. Meant for an
 * `<aside>` so the semantics stay (`<aside sh3StickyColumn>…</aside>`), dropping
 * the hand-rolled `.sidebar { display:flex; … position:sticky }` boilerplate
 * every page was repeating.
 *
 * Layout only — no template, no wrapper element (it can't add one; grouping
 * still needs the `<aside>`). Tunable via CSS custom properties so a page keeps
 * control of what varies, without inputs:
 * - `--sh3-sticky-column-top` (default `84px`) — the sticky offset (header height).
 * - `--sh3-sticky-column-gap` (default `14px`) — the gap between stacked blocks.
 * - `--sh3-sticky-column-position` (default `sticky`) — set to `static` in the
 *   page's own responsive breakpoint to un-stick when the layout stacks.
 *
 * @example
 * ```html
 * <aside sh3StickyColumn>
 *   <app-thing />
 *   <app-other />
 * </aside>
 * ```
 * ```scss
 * // in the page, at its own stacking breakpoint:
 * @media (max-width: 1040px) {
 *   aside[sh3StickyColumn] { --sh3-sticky-column-position: static; }
 * }
 * ```
 */
@Directive({
  selector: "[sh3StickyColumn]",
  standalone: true,
  host: {
    "[style.display]": '"flex"',
    "[style.flexDirection]": '"column"',
    "[style.alignSelf]": '"start"',
    "[style.gap]": '"var(--sh3-sticky-column-gap, 14px)"',
    "[style.position]": '"var(--sh3-sticky-column-position, sticky)"',
    "[style.top]": '"var(--sh3-sticky-column-top, 84px)"',
  },
})
export class Sh3StickyColumnDirective {}
