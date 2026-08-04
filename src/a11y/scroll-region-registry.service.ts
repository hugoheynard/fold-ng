import { Service } from "@angular/core";

/** The class the registry toggles to freeze a region. The `overflow: hidden
 *  !important` rule ships in `tokens.css` so a freeze works in production, where
 *  only the tokens are imported. A class (not an inline style) is deliberate: it
 *  never clobbers a region's own inline `overflow-y` / stylesheet overflow, which
 *  reappears verbatim the moment the class is removed. */
export const FOLD_SCROLL_FROZEN_CLASS = "fold-scroll-frozen";

/**
 * Registry of the live scroll regions in a shell — the shell's own content
 * scroll box and every `[foldScrollRegion]`.
 *
 * It exists so an overlay can freeze **the real scroll containers** at once, not
 * just `document.body`. In a `fold-app-shell` the scroll owner is an inner box
 * (`.content-scroll`), not `body`, so the body scroll-lock alone leaves the page
 * scrollable behind a modal panel. The panel host freezes this registry too, and
 * every registered region — the shell box and each nested `foldScrollRegion` —
 * stops scrolling until the overlay closes.
 *
 * `freeze()`/`unfreeze()` are **reference-counted** (like {@link ScrollLockService}):
 * stacked overlays each freeze once; the regions thaw only when the last unfreezes.
 * Freezing toggles {@link FOLD_SCROLL_FROZEN_CLASS} rather than writing inline
 * `overflow`, so a region's own overflow (inline binding or stylesheet) is never
 * clobbered — it simply returns when the class is removed.
 *
 * SSR-safe: registration only stores an element reference; the class toggles
 * happen in `freeze()`, which an overlay only calls in the browser.
 */
@Service()
export class ScrollRegionRegistry {
  /** The live regions. A `Set` so a double-register is idempotent. */
  private readonly regions = new Set<HTMLElement>();
  /** How many overlays currently hold the freeze. */
  private freezes = 0;

  /** Add a region. If a freeze is already active, the new region joins it. */
  register(element: HTMLElement): void {
    this.regions.add(element);
    if (this.freezes > 0) {
      element.classList.add(FOLD_SCROLL_FROZEN_CLASS);
    }
  }

  /** Remove a region (on directive/shell teardown) and thaw it. */
  unregister(element: HTMLElement): void {
    this.regions.delete(element);
    element.classList.remove(FOLD_SCROLL_FROZEN_CLASS);
  }

  /** Freeze every region's scroll (idempotent per matching `unfreeze()`). */
  freeze(): void {
    this.freezes += 1;
    if (this.freezes === 1) {
      for (const element of this.regions) {
        element.classList.add(FOLD_SCROLL_FROZEN_CLASS);
      }
    }
  }

  /** Release one freeze; thaws the regions only when the last is released. */
  unfreeze(): void {
    if (this.freezes === 0) {
      return;
    }
    this.freezes -= 1;
    if (this.freezes === 0) {
      for (const element of this.regions) {
        element.classList.remove(FOLD_SCROLL_FROZEN_CLASS);
      }
    }
  }

  /** True while at least one overlay holds the freeze. */
  get isFrozen(): boolean {
    return this.freezes > 0;
  }
}
