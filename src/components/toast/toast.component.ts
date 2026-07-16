import {
  Component,
  booleanAttribute,
  computed,
  input,
  output,
} from "@angular/core";
import { Sh3IconComponent } from "../icon/icon.component";
import type { Sh3IconName } from "../icon/icon.registry";
import type { Sh3ToastVariant } from "./toast.service";

/** Variant → leading status icon. */
const VARIANT_ICON: Record<Sh3ToastVariant, Sh3IconName> = {
  success: "check-circle",
  info: "info",
  warning: "warning",
  error: "x-circle",
};

/**
 * `<sh3-toast>` — a single frosted-glass snackbar: a variant status icon, the
 * message (projected), and an optional dismiss button. Purely presentational —
 * the stacking, positioning and auto-expiry belong to `sh3-toast-container` +
 * {@link Sh3ToastService}; this component only renders one toast and emits
 * {@link dismiss} when its close button is pressed.
 *
 * The surface is the shared **glass** language; a left accent stripe + the icon
 * take the variant's `-text` tint (`info` uses the brand `primary` tint). It is
 * an `alert` (assertive) for `error`, a `status` (polite) otherwise.
 *
 * ```html
 * <sh3-toast variant="success" (dismiss)="…">Track uploaded</sh3-toast>
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

  /** Emitted when the user presses the dismiss button. */
  readonly dismiss = output<void>();

  /** The leading status icon for the current variant. */
  readonly icon = computed<Sh3IconName>(() => VARIANT_ICON[this.variant()]);
}
