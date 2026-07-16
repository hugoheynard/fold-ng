import {
  Component,
  booleanAttribute,
  computed,
  effect,
  input,
  numberAttribute,
  output,
} from "@angular/core";
import { Sh3IconComponent } from "../icon/icon.component";
import type { Sh3IconName } from "../icon/icon.registry";
import type { Sh3ToastVariant } from "./toast.types";

/** Variant → leading status icon. */
const VARIANT_ICON: Record<Sh3ToastVariant, Sh3IconName> = {
  success: "check-circle",
  info: "info",
  warning: "warning",
  error: "x-circle",
};

/**
 * `<sh3-toast>` — a single frosted-glass snackbar: a variant status icon, the
 * message (projected), and an optional dismiss button. The stacking + queue
 * belong to `sh3-toast-container` + {@link Sh3ToastService}; the toast itself
 * owns its **lifecycle** — it emits {@link dismiss} on its close button and, if
 * given a `duration`, auto-emits `dismiss` after it elapses (the timer is
 * cleared on destroy). `duration = 0` (the default) is sticky — it stays until
 * dismissed, so a standalone toast never vanishes unexpectedly.
 *
 * The surface is the shared **glass** language; a left accent stripe + the icon
 * take the variant's `-text` tint (`info` uses the brand `primary` tint). It is
 * an `alert` (assertive) for `error`, a `status` (polite) otherwise.
 *
 * ```html
 * <sh3-toast variant="success" duration="3000" (dismiss)="…">Track uploaded</sh3-toast>
 * ```
 *
 * @selector `sh3-toast`
 */
@Component({
  selector: "sh3-toast",
  standalone: true,
  imports: [Sh3IconComponent],
  templateUrl: "./toast.component.html",
  styleUrl: "./toast.component.scss",
  host: {
    "[attr.data-variant]": "variant()",
    "[attr.role]": 'variant() === "error" ? "alert" : "status"',
    "[attr.aria-live]": 'variant() === "error" ? "assertive" : "polite"',
  },
})
export class Sh3ToastComponent {
  /** The tone — drives the accent stripe, icon, and live-region politeness. */
  readonly variant = input<Sh3ToastVariant>("info");
  /** Show the dismiss button. */
  readonly dismissible = input(true, { transform: booleanAttribute });
  /** Auto-dismiss after this many ms. `0` (default) is sticky — no timer. */
  readonly duration = input(0, { transform: numberAttribute });

  /** Emitted on the close button, or when `duration` elapses. */
  readonly dismiss = output<void>();

  /** The leading status icon for the current variant. */
  readonly icon = computed<Sh3IconName>(() => VARIANT_ICON[this.variant()]);

  constructor() {
    // The toast owns its own expiry: (re)arm a timer whenever `duration` is a
    // positive value, and clear it on change / destroy so it can't outlive the
    // toast or double-fire. `duration <= 0` stays sticky.
    effect((onCleanup) => {
      const ms = this.duration();
      if (ms <= 0) {
        return;
      }
      const timer = setTimeout(() => this.dismiss.emit(), ms);
      onCleanup(() => clearTimeout(timer));
    });
  }
}
