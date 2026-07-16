import { Directive, computed, input } from "@angular/core";

/** Where the column pins while the main content scrolls past it. */
export type Sh3StickyColumnAnchor = "top" | "center" | "bottom";

/**
 * `[sh3StickyColumn]` — turns its host into a sticky side column: a vertical
 * flex stack that sticks while the main content scrolls past it. Meant for an
 * `<aside>` so the semantics stay (`<aside sh3StickyColumn>…</aside>`), dropping
 * the hand-rolled `.sidebar { display:flex; … position:sticky }` boilerplate
 * every page was repeating.
 *
 * Layout only — no template, no wrapper element (it can't add one; grouping
 * still needs the `<aside>`).
 *
 * Anchor + offset are inputs; the rest stays tunable via CSS custom properties
 * so a page keeps control of what varies:
 * - `sticky` (default `top`) — pin to `top`, `center`, or `bottom` of the
 *   scroll viewport.
 * - `stickyOffset` — distance from the pinned edge (a number = px, or any CSS
 *   length). For `top`, defaults to `var(--sh3-sticky-column-top, 84px)` (the
 *   header clearance); for `center` it nudges off dead-centre.
 * - `--sh3-sticky-column-gap` (default `14px`) — the gap between stacked blocks.
 * - `--sh3-sticky-column-position` (default `sticky`) — set to `static` in the
 *   page's own responsive breakpoint to un-stick when the layout stacks.
 *
 * @example
 * ```html
 * <aside sh3StickyColumn>…</aside>                    <!-- top, header offset -->
 * <aside sh3StickyColumn sticky="bottom">…</aside>
 * <aside sh3StickyColumn sticky="center">…</aside>
 * <aside sh3StickyColumn [stickyOffset]="24">…</aside>
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
    "[style.top]": "topStyle()",
    "[style.bottom]": "bottomStyle()",
    "[style.transform]": "transformStyle()",
  },
})
export class Sh3StickyColumnDirective {
  /** Which viewport edge (or centre) the column pins to. */
  readonly sticky = input<Sh3StickyColumnAnchor>("top");
  /** Distance from the pinned edge — a number (px) or any CSS length. */
  readonly stickyOffset = input<number | string>();

  /** The offset as a CSS length; falls back to the header-clearance var. */
  private readonly offsetCss = computed(() => {
    const o = this.stickyOffset();
    if (o === undefined) {
      return "var(--sh3-sticky-column-top, 84px)";
    }
    return typeof o === "number" ? `${o}px` : o;
  });

  protected readonly topStyle = computed(() => {
    switch (this.sticky()) {
      case "bottom":
        return "auto";
      case "center":
        return this.stickyOffset() === undefined
          ? "50%"
          : `calc(50% + ${this.offsetCss()})`;
      default:
        return this.offsetCss();
    }
  });

  protected readonly bottomStyle = computed(() =>
    this.sticky() === "bottom" ? this.offsetCss() : "auto",
  );

  /** Centre anchoring pins the top edge at 50%, then pulls back half its height. */
  protected readonly transformStyle = computed(() =>
    this.sticky() === "center" ? "translateY(-50%)" : "none",
  );
}
