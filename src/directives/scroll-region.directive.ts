import {
  DestroyRef,
  Directive,
  ElementRef,
  computed,
  inject,
  input,
} from "@angular/core";
import { ScrollRegionRegistry } from "../a11y/scroll-region-registry.service";

/** Which axis a scroll region scrolls on. */
export type FoldScrollAxis = "block" | "inline" | "both";

/**
 * `[foldScrollRegion]` — turns any element into a **bounded, coordinated scroll
 * box** without the consumer ever writing `overflow`.
 *
 * It is the one opt-in of the shell scroll system (`docs/scroll.md`): with
 * `fold-app-shell` owning the page scroll, a layout that genuinely needs an
 * independently-scrolling area (a split list/detail, a data-table body, a sticky
 * sidebar, a panel body) marks that area with this directive instead of
 * hand-rolling the three foot-guns. It:
 *
 * - sets `overflow: auto`, `min-height: 0` (and `min-width: 0` for the inline
 *   axis) and `overscroll-behavior: contain` — the three foot-guns, in one place;
 * - paints the thin house scrollbar (`scrollbar-width: thin`; the tokenised
 *   colour/radius lands with the scroll-system Slice C);
 * - **registers with the {@link ScrollRegionRegistry}**, so an overlay (the panel
 *   host) can freeze this region — alongside the shell's own scroll box — while a
 *   modal is open, robust to the scroll owner being the shell rather than `body`.
 *   The registry is injected optionally, so the directive is a useful bounded
 *   scroll box even outside a shell; the coordination is a bonus when one is present.
 *
 * The axis is the directive's own value (default `block` = vertical):
 * `foldScrollRegion` / `foldScrollRegion="block"` (vertical), `="inline"`
 * (horizontal), `="both"`.
 *
 * @selector `[foldScrollRegion]`
 *
 * @example
 * ```html
 * <!-- a split view: the list scrolls on its own, the detail flows -->
 * <fold-aside-layout>
 *   <nav asideleft foldScrollRegion>…long list…</nav>
 *   <article>…detail…</article>
 * </fold-aside-layout>
 *
 * <div foldScrollRegion="both" class="table-body">…</div>
 * ```
 */
@Directive({
  selector: "[foldScrollRegion]",
  standalone: true,
  host: {
    // The `fold-scroll-region` class carries the house scrollbar's WebKit/Blink
    // `::-webkit-scrollbar` pseudo (which can't be an inline style) from the
    // global rule in tokens.css; the standard scrollbar props are inline below.
    class: "fold-scroll-region",
    "[style.overflowY]": "overflowY()",
    "[style.overflowX]": "overflowX()",
    "[style.minHeight]": "minHeight()",
    "[style.minWidth]": "minWidth()",
    "[style.overscrollBehavior]": '"contain"',
    // Keep the reading position when content above the region reflows (native
    // overflow-anchor; covers content mutation — a viewport-resize correction
    // is a deferred follow-up, see docs/scroll.md Slice C).
    "[style.overflowAnchor]": '"auto"',
    // The house scrollbar (Firefox / standard). Tokenised, with a currentColor
    // fallback so the directive still paints a subtle thumb without tokens.css.
    "[style.scrollbarWidth]": '"thin"',
    "[style.scrollbarColor]": "scrollbarColor",
  },
})
export class FoldScrollRegionDirective {
  /** The scroll axis; defaults to `block` (vertical), including a bare attribute. */
  readonly foldScrollRegion = input<FoldScrollAxis, FoldScrollAxis | "">(
    "block",
    { transform: (value) => (value === "" ? "block" : value) },
  );

  /** `scrollbar-color: <thumb> <track>`, tokenised with a self-sufficient
   *  fallback so the region paints a subtle thumb even without `tokens.css`. */
  protected readonly scrollbarColor =
    "var(--fold-scrollbar-thumb, color-mix(in srgb, currentColor 24%, transparent)) var(--fold-scrollbar-track, transparent)";

  protected readonly overflowY = computed(() =>
    this.foldScrollRegion() === "inline" ? null : "auto",
  );
  protected readonly overflowX = computed(() =>
    this.foldScrollRegion() === "block" ? null : "auto",
  );
  /** A scrollable box must be shrinkable on its scroll axis, or flex/grid parents
   *  pin it to content height and it never scrolls. */
  protected readonly minHeight = computed(() =>
    this.foldScrollRegion() === "inline" ? null : "0",
  );
  protected readonly minWidth = computed(() =>
    this.foldScrollRegion() === "block" ? null : "0",
  );

  constructor() {
    const element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    const registry = inject(ScrollRegionRegistry, { optional: true });
    registry?.register(element);
    inject(DestroyRef).onDestroy(() => registry?.unregister(element));
  }
}
