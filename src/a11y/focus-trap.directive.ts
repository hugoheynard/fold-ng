import { DOCUMENT } from "@angular/common";
import { Directive, ElementRef, effect, inject, input } from "@angular/core";

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
  selector: "[sh3FocusTrap]",
  host: { "(keydown)": "onKeydown($event)" },
})
export class FocusTrapDirective {
  /** Bind `[sh3FocusTrap]="open()"` — the trap is live only while true. */
  readonly enabled = input(true, { alias: "sh3FocusTrap" });

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
    (this.focusable()[0] ?? this.host.nativeElement).focus();
  }

  private restore(): void {
    this.previouslyFocused?.focus();
    this.previouslyFocused = null;
  }

  private focusable(): HTMLElement[] {
    return Array.from(
      this.host.nativeElement.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
    );
  }
}
