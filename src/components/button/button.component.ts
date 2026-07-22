import {
  Component,
  booleanAttribute,
  computed,
  input,
  output,
} from "@angular/core";
import { FoldIconComponent } from "../icon/icon.component";
import type { FoldIconSize } from "../icon/icon.component";
import type { FoldIconName } from "../icon/icon.registry";
import type {
  FoldButtonShape,
  FoldButtonSize,
  FoldButtonVariant,
} from "./button.types";

/** Leading/trailing icon size, derived from the button `size`. */
const ICON_SIZE: Record<FoldButtonSize, FoldIconSize> = {
  sm: 14,
  md: 16,
  lg: 18,
};

/**
 * `<fold-button>` — the design-system entry point for every actionable button.
 *
 * The label is projected (text, icons, or both). The `variant` + `size` are
 * applied as host classes (`:host(.primary.sm)`) so the surface stays
 * token-only. Click is surfaced through {@link clicked} with the native event.
 *
 * ```html
 * <fold-button (clicked)="save()">Save</fold-button>
 * <fold-button variant="ghost" size="sm" (clicked)="cancel()">Cancel</fold-button>
 * <fold-button variant="critical" (clicked)="delete()">Delete</fold-button>
 * <fold-button [disabled]="!form.valid" type="submit">Submit</fold-button>
 * ```
 *
 * @selector `fold-button`
 */
@Component({
  selector: "fold-button",
  standalone: true,
  imports: [FoldIconComponent],
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.scss",
  host: {
    "[class]": 'variant() + " " + size() + " " + shape()',
    "[class.block]": "block()",
  },
})
export class FoldButtonComponent {
  /**
   * Visual emphasis.
   * - `primary` — accent teal tint, default actions
   * - `recommended` — amber, suggested actions
   * - `critical` — red, destructive or urgent actions
   * - `ghost` — neutral/transparent, secondary or cancel actions
   * - `solid` — filled accent, high-emphasis CTAs
   */
  readonly variant = input<FoldButtonVariant>("primary");

  /** Size preset controlling font-size, padding, and radius. */
  readonly size = input<FoldButtonSize>("md");

  /** Corner shape — `rounded` (default) or `pill` (fully rounded). */
  readonly shape = input<FoldButtonShape>("rounded");

  /** Stretch to fill the container's width (block-level) instead of hugging its label. */
  readonly block = input(false, { transform: booleanAttribute });

  /**
   * Leading icon — a shorthand for the common "icon + label" button. The size
   * is derived from {@link size}, so it stays consistent. For anything else
   * (trailing content, custom markup) project it instead.
   */
  readonly icon = input<FoldIconName>();
  /** Trailing icon (after the label). */
  readonly iconTrailing = input<FoldIconName>();

  /** Icon size for {@link icon} / {@link iconTrailing}, from the button size. */
  readonly iconSize = computed<FoldIconSize>(() => ICON_SIZE[this.size()]);

  /** Native `type` attribute of the inner `<button>`. */
  readonly type = input<"button" | "submit">("button");

  /** Disable the button — dims it and blocks pointer events. */
  readonly disabled = input(false);

  /** Emitted on click (passes the native `MouseEvent`). */
  readonly clicked = output<MouseEvent>();
}
