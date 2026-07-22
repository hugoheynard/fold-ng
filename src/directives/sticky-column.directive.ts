import { Directive, computed, input } from "@angular/core";

/** Where the column pins while the main content scrolls past it. */
export type FoldStickyColumnAnchor = "top" | "center" | "bottom";

/**
 * `[foldStickyColumn]` — turns its host into a sticky side column: a vertical
 * flex stack that sticks while the main content scrolls past it. Meant for an
 * `<aside>` so the semantics stay (`<aside foldStickyColumn>…</aside>`), dropping
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
 *   length). Defaults to `var(--fold-sticky-column-offset, 84px)` (the header
 *   clearance); for `center` it nudges off dead-centre.
 * - `--fold-sticky-column-gap` (default `14px`) — the gap between stacked blocks.
 * - `--fold-sticky-column-position` (default `sticky`) — set to `static` in the
 *   page's own responsive breakpoint to un-stick when the layout stacks.
 *
 * @example
 * ```html
 * <aside foldStickyColumn>…</aside>                    <!-- top, header offset -->
 * <aside foldStickyColumn sticky="bottom">…</aside>
 * <aside foldStickyColumn sticky="center">…</aside>
 * <aside foldStickyColumn [stickyOffset]="24">…</aside>
 * ```
 * ```scss
 * // in the page, at its own stacking breakpoint:
 * @media (max-width: 1040px) {
 *   aside[foldStickyColumn] { --fold-sticky-column-position: static; }
 * }
 * ```
 */
@Directive({
  selector: "[foldStickyColumn]",
  standalone: true,
  host: {
    "[style.display]": '"flex"',
    "[style.flexDirection]": '"column"',
    "[style.alignSelf]": "alignSelfStyle()",
    "[style.gap]": '"var(--fold-sticky-column-gap, 14px)"',
    "[style.position]": '"var(--fold-sticky-column-position, sticky)"',
    "[style.top]": "topStyle()",
    "[style.bottom]": "bottomStyle()",
    "[style.transform]": "transformStyle()",
  },
})
export class FoldStickyColumnDirective {
  /** Which viewport edge (or centre) the column pins to. */
  readonly sticky = input<FoldStickyColumnAnchor>("top");
  /** Distance from the pinned edge — a number (px) or any CSS length. */
  readonly stickyOffset = input<number | string>();

  /** The offset as a CSS length; falls back to the header-clearance var. */
  private readonly offsetCss = computed(() => {
    const o = this.stickyOffset();
    if (o === undefined) {
      return "var(--fold-sticky-column-offset, 84px)";
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

  /** The in-flow start position that makes `sticky` engage from scroll 0.
   *  `sticky` pins only once the constraint is active at the element's natural
   *  flow position: `top`/`center` (which pin the top edge, at 0 / 50%) need the
   *  column at the *top* of its tall row (`start`); `bottom` needs it at the
   *  *bottom* (`end`), else it starts off-screen and only catches mid-scroll. */
  protected readonly alignSelfStyle = computed(() =>
    this.sticky() === "bottom" ? "end" : "start",
  );

  /** Centre anchoring pins the top edge at 50%, then pulls back half its height. */
  protected readonly transformStyle = computed(() =>
    this.sticky() === "center" ? "translateY(-50%)" : "none",
  );
}
