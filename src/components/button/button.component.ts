import {
  Component,
  booleanAttribute,
  computed,
  input,
  output,
} from "@angular/core";
import { Sh3IconComponent } from "../icon/icon.component";
import type { Sh3IconSize } from "../icon/icon.component";
import type { Sh3IconName } from "../icon/icon.registry";
import type {
  Sh3ButtonShape,
  Sh3ButtonSize,
  Sh3ButtonVariant,
} from "./button.types";

/** Leading/trailing icon size, derived from the button `size`. */
const ICON_SIZE: Record<Sh3ButtonSize, Sh3IconSize> = {
  sm: 14,
  md: 16,
  lg: 18,
};

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
  imports: [Sh3IconComponent],
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.scss",
  host: {
    "[class]": 'variant() + " " + size() + " " + shape()',
    "[class.block]": "block()",
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

  /** Corner shape — `rounded` (default) or `pill` (fully rounded). */
  readonly shape = input<Sh3ButtonShape>("rounded");

  /** Stretch to fill the container's width (block-level) instead of hugging its label. */
  readonly block = input(false, { transform: booleanAttribute });

  /**
   * Leading icon — a shorthand for the common "icon + label" button. The size
   * is derived from {@link size}, so it stays consistent. For anything else
   * (trailing content, custom markup) project it instead.
   */
  readonly icon = input<Sh3IconName>();
  /** Trailing icon (after the label). */
  readonly iconTrailing = input<Sh3IconName>();

  /** Icon size for {@link icon} / {@link iconTrailing}, from the button size. */
  readonly iconSize = computed<Sh3IconSize>(() => ICON_SIZE[this.size()]);

  /** Native `type` attribute of the inner `<button>`. */
  readonly type = input<"button" | "submit">("button");

  /** Disable the button — dims it and blocks pointer events. */
  readonly disabled = input(false);

  /** Emitted on click (passes the native `MouseEvent`). */
  readonly clicked = output<MouseEvent>();
}
