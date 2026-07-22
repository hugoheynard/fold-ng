import {
  booleanAttribute,
  DestroyRef,
  Directive,
  effect,
  inject,
  input,
  output,
} from "@angular/core";

/**
 * `[foldRepeatPress]` — press-and-hold auto-repeat.
 *
 * Fires `(foldRepeatPress)` once immediately on pointer press, then keeps firing
 * on a fixed cadence while the pointer is held, stopping on release, leave,
 * cancel or destroy. Bind `[foldRepeatPressDisabled]` to a reactive bound (e.g.
 * "at max") so the repeat also stops the instant the action becomes unavailable
 * mid-hold — a plain `pointerup` is unreliable once the host button disables
 * itself under the finger.
 *
 * Keyboard activation is intentionally out of scope: it produces `click`, not
 * `pointerdown`, so wire a separate `(click)` handler for Enter/Space.
 *
 * @example
 * ```html
 * <button
 *   foldRepeatPress
 *   [foldRepeatPressDisabled]="atMax()"
 *   (foldRepeatPress)="step(1)"
 * >+</button>
 * ```
 */
@Directive({
  selector: "[foldRepeatPress]",
  standalone: true,
  host: {
    "(pointerdown)": "start()",
    "(pointerup)": "stop()",
    "(pointerleave)": "stop()",
    "(pointercancel)": "stop()",
  },
})
export class FoldRepeatPressDirective {
  /** Fires immediately on press, then repeatedly while the pointer is held. */
  readonly repeat = output<void>({ alias: "foldRepeatPress" });

  /** When true, a press does nothing and any running repeat stops at once. */
  readonly disabled = input(false, {
    transform: booleanAttribute,
    alias: "foldRepeatPressDisabled",
  });

  /** Delay before the auto-repeat begins, in ms. @default 350 */
  readonly delay = input(350, { alias: "foldRepeatPressDelay" });

  /** Cadence of the auto-repeat once started, in ms. @default 60 */
  readonly period = input(60, { alias: "foldRepeatPressPeriod" });

  private startTimer: ReturnType<typeof setTimeout> | null = null;
  private tick: ReturnType<typeof setInterval> | null = null;

  constructor() {
    inject(DestroyRef).onDestroy(() => this.stop());
    effect(() => {
      if (this.disabled()) {
        this.stop();
      }
    });
  }

  protected start(): void {
    if (this.disabled()) {
      return;
    }
    this.stop(); // never stack two hold cycles
    this.repeat.emit();
    this.startTimer = setTimeout(() => {
      this.tick = setInterval(() => this.repeat.emit(), this.period());
    }, this.delay());
  }

  protected stop(): void {
    if (this.startTimer !== null) {
      clearTimeout(this.startTimer);
      this.startTimer = null;
    }
    if (this.tick !== null) {
      clearInterval(this.tick);
      this.tick = null;
    }
  }
}
