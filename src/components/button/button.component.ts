import { Component, input, output } from "@angular/core";
import type { Sh3ButtonSize, Sh3ButtonVariant } from "./button.types";

/**
 * `<sh3-button>` — the design-system entry point for every actionable button.
 *
 * The label is projected (text, icons, or both). The `variant` + `size` are
 * applied as host classes (`:host(.primary.sm)`) so the surface stays
 * token-only. Click is surfaced through {@link clicked} with the native event.
 *
 * ```html
 * <sh3-button (clicked)="save()">Save</sh3-button>
 * <sh3-button variant="ghost" size="sm" (clicked)="cancel()">Cancel</sh3-button>
 * <sh3-button variant="critical" (clicked)="delete()">Delete</sh3-button>
 * <sh3-button [disabled]="!form.valid" type="submit">Submit</sh3-button>
 * ```
 *
 * @selector `sh3-button`
 */
@Component({
  selector: "sh3-button",
  standalone: true,
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.scss",
  host: {
    "[class]": 'variant() + " " + size()',
  },
})
export class Sh3ButtonComponent {
  /**
   * Visual emphasis.
   * - `primary` — accent teal tint, default actions
   * - `recommended` — amber, suggested actions
   * - `critical` — red, destructive or urgent actions
   * - `ghost` — neutral/transparent, secondary or cancel actions
   * - `solid` — filled accent, high-emphasis CTAs
   */
  readonly variant = input<Sh3ButtonVariant>("primary");

  /** Size preset controlling font-size, padding, and radius. */
  readonly size = input<Sh3ButtonSize>("md");

  /** Native `type` attribute of the inner `<button>`. */
  readonly type = input<"button" | "submit">("button");

  /** Disable the button — dims it and blocks pointer events. */
  readonly disabled = input(false);

  /** Emitted on click (passes the native `MouseEvent`). */
  readonly clicked = output<MouseEvent>();
}
