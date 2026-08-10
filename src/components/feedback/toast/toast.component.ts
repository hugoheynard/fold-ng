import {
  Component,
  booleanAttribute,
  computed,
  effect,
  input,
  numberAttribute,
  output,
  signal,
} from "@angular/core";
import { FoldIconComponent } from "../../foundations/icon/icon.component";
import type { FoldIconName } from "../../foundations/icon/builtin-icons";
import type { FoldToastVariant } from "./toast.types";

/** Variant → leading status icon. */
const VARIANT_ICON: Record<FoldToastVariant, FoldIconName> = {
  success: "check-circle",
  info: "info",
  warning: "warning",
  error: "x-circle",
};

/**
 * `<fold-toast>` — a single frosted-glass snackbar: a variant status icon, the
 * message (projected), and an optional dismiss button. The stacking + queue
 * belong to `fold-toast-container` + {@link FoldToastService}; the toast itself
 * owns its **lifecycle** — it emits {@link dismiss} on its close button and, if
 * given a `duration`, auto-emits `dismiss` after it elapses (the timer is
 * cleared on destroy). `duration = 0` (the default) is sticky — it stays until
 * dismissed, so a standalone toast never vanishes unexpectedly.
 *
 * The countdown **pauses while the pointer is over the toast or the keyboard
 * focus is inside it**, and resumes with the time that was left (WCAG 2.2.1,
 * Timing Adjustable): a message must not expire while it is being read, nor
 * while the close button is being aimed at. `data-paused` exposes the state.
 *
 * The surface is the shared **glass** language; a left accent stripe + the icon
 * take the variant's `-text` tint (`info` uses the brand `primary` tint). It is
 * an `alert` (assertive) for `error`, a `status` (polite) otherwise.
 *
 * ```html
 * <fold-toast variant="success" duration="3000" (dismiss)="…">Track uploaded</fold-toast>
 * ```
 *
 * @selector `fold-toast`
 */
@Component({
  selector: "fold-toast",
  standalone: true,
  imports: [FoldIconComponent],
  templateUrl: "./toast.component.html",
  styleUrl: "./toast.component.scss",
  host: {
    "[attr.data-variant]": "variant()",
    "[attr.role]": 'variant() === "error" ? "alert" : "status"',
    "[attr.aria-live]": 'variant() === "error" ? "assertive" : "polite"',
    "[attr.data-paused]": "paused() ? '' : null",
    "(mouseenter)": "hovered.set(true)",
    "(mouseleave)": "hovered.set(false)",
    "(focusin)": "focused.set(true)",
    "(focusout)": "onFocusOut($event)",
  },
})
export class FoldToastComponent {
  /** The tone — drives the accent stripe, icon, and live-region politeness. */
  readonly variant = input<FoldToastVariant>("info");
  /** Show the dismiss button. */
  readonly dismissible = input(true, { transform: booleanAttribute });
  /** Auto-dismiss after this many ms. `0` (default) is sticky — no timer. */
  readonly duration = input(0, { transform: numberAttribute });
  /**
   * How many times this same message arrived. Above 1 it renders a `×N` tally
   * and **restarts the countdown** — a message still recurring is a message
   * still current, so it should not expire on the first occurrence's clock.
   */
  readonly repeat = input(1, { transform: numberAttribute });

  /** Emitted on the close button, or when `duration` elapses. */
  readonly dismiss = output();

  /** The leading status icon for the current variant. */
  readonly icon = computed<FoldIconName>(() => VARIANT_ICON[this.variant()]);

  protected readonly hovered = signal(false);
  protected readonly focused = signal(false);

  /** The countdown is frozen — the toast is being read, or aimed at. */
  protected readonly paused = computed(() => this.hovered() || this.focused());

  /**
   * How much time is left to run, and what it was granted for. Plain fields,
   * not signals: nothing renders them, and a pause must not itself schedule a
   * change-detection pass. The key is what distinguishes a **new** budget (a
   * changed `duration`, or another occurrence of the message) from a mere
   * pause — only the former refills it.
   */
  private budgetFor = "";
  private remainingMs = 0;

  constructor() {
    // The toast owns its own expiry. The timer is (re)armed for whatever is
    // LEFT of the budget, and every teardown — a pause, a new `duration`,
    // destroy — spends the elapsed slice, so pausing and resuming can neither
    // restart the countdown from scratch nor let it run on in the background.
    effect((onCleanup) => {
      const ms = this.duration();
      const paused = this.paused();
      const key = `${ms}:${this.repeat()}`;
      if (this.budgetFor !== key) {
        this.budgetFor = key;
        this.remainingMs = ms;
      }
      if (ms <= 0 || paused) {
        return;
      }
      const startedAt = Date.now();
      const timer = setTimeout(() => this.dismiss.emit(), this.remainingMs);
      onCleanup(() => {
        clearTimeout(timer);
        const elapsed = Date.now() - startedAt;
        this.remainingMs = Math.max(0, this.remainingMs - elapsed);
      });
    });
  }

  /**
   * Focus moving *within* the toast (message → close button) is not leaving it:
   * without this check the pair of focusout/focusin events would resume the
   * countdown for an instant on every internal hop.
   */
  protected onFocusOut(event: FocusEvent): void {
    const host = event.currentTarget;
    const next = event.relatedTarget;
    if (host instanceof Node && next instanceof Node && host.contains(next)) {
      return;
    }
    this.focused.set(false);
  }
}
