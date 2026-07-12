import { DOCUMENT } from "@angular/common";
import { Service, inject } from "@angular/core";

/**
 * Reference-counted body scroll lock for overlays (panels, modals).
 *
 * Multiple overlays can be open at once (e.g. a panel over a page that also
 * locked). Each `lock()` bumps a counter; the body's `overflow` is only frozen
 * on the first lock and restored on the last `unlock()`, so nested overlays
 * never fight over the style or restore it prematurely. The pre-lock value is
 * captured and put back verbatim (not hardcoded to `''`).
 *
 * SSR-safe: `DOCUMENT` is always provided; on the server the style write is a
 * harmless no-op against a detached document.
 */
@Service()
export class ScrollLockService {
  private readonly document = inject(DOCUMENT);
  private locks = 0;
  private previousOverflow = "";

  /** Freeze body scroll (idempotent per matching `unlock()`). */
  lock(): void {
    if (this.locks === 0) {
      this.previousOverflow = this.document.body.style.overflow;
      this.document.body.style.overflow = "hidden";
    }
    this.locks += 1;
  }

  /** Release one lock; restores scroll only when the last lock is released. */
  unlock(): void {
    if (this.locks === 0) {
      return;
    }
    this.locks -= 1;
    if (this.locks === 0) {
      this.document.body.style.overflow = this.previousOverflow;
    }
  }

  /** True while at least one lock is held. */
  get isLocked(): boolean {
    return this.locks > 0;
  }
}
