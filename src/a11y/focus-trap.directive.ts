import { DOCUMENT } from "@angular/common";
import { Directive, ElementRef, effect, inject, input } from "@angular/core";

/**
 * A matched element is only truly focusable if it's rendered — `display:none`
 * and `visibility:hidden` descendants match the selector but can't take focus,
 * and focusing one would drop focus to the body. `offsetParent === null` catches
 * `display:none`; the size check catches a zero-box element still in flow.
 */
function isVisible(el: HTMLElement): boolean {
  if (el.hidden) {
    return false;
  }
  const rects = el.getClientRects();
  return el.offsetParent !== null || rects.length > 0;
}

/** Elements that can receive keyboard focus, minus explicitly-skipped ones. */
const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "textarea:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

/**
 * Traps keyboard focus inside the host element while enabled — the a11y
 * contract every overlay must honour but which panels historically skipped.
 *
 * On enable it remembers the currently-focused element and moves focus to the
 * first focusable descendant (or the host itself). `Tab`/`Shift+Tab` wrap at
 * the boundaries so focus never escapes to the page behind. On disable or
 * destroy it restores focus to wherever it was before — so closing a panel
 * returns the user to the control that opened it.
 *
 * The host must be focusable as a fallback (`tabindex="-1"`).
 */
@Directive({
  selector: "[foldFocusTrap]",
  host: { "(keydown)": "onKeydown($event)" },
})
export class FocusTrapDirective {
  /** Bind `[foldFocusTrap]="open()"` — the trap is live only while true. */
  readonly enabled = input(true, { alias: "foldFocusTrap" });

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly document = inject(DOCUMENT);
  private previouslyFocused: HTMLElement | null = null;

  constructor() {
    effect((onCleanup) => {
      if (!this.enabled()) {
        return;
      }
      this.activate();
      onCleanup(() => this.restore());
    });
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key !== "Tab" || !this.enabled()) {
      return;
    }
    const focusables = this.focusable();
    if (focusables.length === 0) {
      event.preventDefault();
      this.host.nativeElement.focus();
      return;
    }
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (!first || !last) {
      return;
    }
    const active = this.document.activeElement;
    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  }

  private activate(): void {
    const active = this.document.activeElement;
    this.previouslyFocused = active instanceof HTMLElement ? active : null;
    // `preventScroll`: entering an overlay must never scroll the page behind it.
    // The default focus scroll used to drag the content sideways to reveal a
    // panel still parked off-edge by its enter animation. Only here — a Tab
    // *inside* the overlay should still scroll its target into view, and
    // `restore()` should bring the trigger back into view on close.
    (this.focusable()[0] ?? this.host.nativeElement).focus({
      preventScroll: true,
    });
  }

  private restore(): void {
    this.previouslyFocused?.focus();
    this.previouslyFocused = null;
  }

  private focusable(): HTMLElement[] {
    const all = Array.from(
      this.host.nativeElement.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
    );
    const visible = all.filter(isVisible);
    // A non-rendering environment (SSR / jsdom) reports every element as
    // zero-box; don't over-filter there — fall back to the raw matches.
    return visible.length > 0 ? visible : all;
  }
}
