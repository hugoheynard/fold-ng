import {
  Component,
  ElementRef,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  inject,
  input,
} from "@angular/core";
import { FoldIconComponent } from "../../foundations/icon/icon.component";
import type { FoldIconSize } from "../../foundations/icon/icon.component";
import type { FoldIconName } from "../../foundations/icon/builtin-icons";
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
 * `[foldButton]` — the design-system button, applied to a **real** `<button>`
 * or `<a>` (never a custom tag). The host element stays a native control, so it
 * keeps everything the platform gives it: a `<button>` gets `type`/`disabled`
 * and form submission; an `<a>` gets `href`/`routerLink`/`target`. This mirrors
 * how Angular Material ships `matButton`, and it's why a "link that looks like a
 * button" needs no second component.
 *
 * The label is projected (text, icons, or both). `variant` + `size` + `shape`
 * apply as host classes so the surface stays token-only. Use native `(click)` —
 * on a disabled button the platform blocks it; on a disabled anchor the surface
 * is `pointer-events: none` and activation is prevented.
 *
 * @example
 * ```html
 * <button foldButton (click)="save()">Save</button>
 * <button foldButton variant="ghost" size="sm" (click)="cancel()">Cancel</button>
 * <button foldButton variant="critical" (click)="delete()">Delete</button>
 * <button foldButton [disabled]="!form.valid" type="submit">Submit</button>
 * <a foldButton variant="ghost" routerLink="/contracts">Contracts</a>
 * ```
 *
 * A `foldButton` expects a **text label** (projected) for its accessible name.
 * For an icon-only affordance use `fold-button-icon` (which takes a `tooltip`);
 * the leading/trailing `icon` inputs here are decorations beside a label.
 *
 * @selector `button[foldButton], a[foldButton]`
 */
@Component({
  selector: "button[foldButton], a[foldButton]",
  standalone: true,
  imports: [FoldIconComponent],
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.scss",
  encapsulation: ViewEncapsulation.Emulated,
  host: {
    "[class]": '"fold-button " + variant() + " " + size() + " " + shape()',
    "[class.block]": "block()",
    "[class.is-disabled]": "disabled()",
    // <button> takes the native disabled + type; <a> can't, so it gets the ARIA
    // equivalents (and the surface is pointer-events:none while disabled).
    "[attr.disabled]": "isButton && disabled() ? true : null",
    "[attr.type]": "isButton ? type() : null",
    "[attr.aria-disabled]": "!isButton && disabled() ? true : null",
    "[attr.tabindex]": "!isButton && disabled() ? -1 : null",
    "(click)": "onClick($event)",
  },
})
export class FoldButtonComponent {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  /** True when the host is a `<button>` (vs an `<a>`) — fixed for the element's life. */
  protected readonly isButton =
    this.host.nativeElement.tagName.toLowerCase() === "button";

  /**
   * The button's role — a single flat scale that folds emphasis and intent into
   * one choice (the combinations no screen needs, e.g. filled-destructive, are
   * intentionally not expressible; add them only when a real screen wants one):
   * - `primary` — accent teal tint, the default action on a screen
   * - `solid` — filled accent, the one high-emphasis CTA
   * - `ghost` — neutral/transparent, secondary or cancel actions
   * - `recommended` — amber, a suggested action
   * - `critical` — red, destructive or urgent actions
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

  /**
   * Native `type` of the host — only meaningful on a `<button>` (ignored on an
   * `<a>`). Defaults to `button` so a form-embedded button never submits by
   * accident.
   */
  readonly type = input<"button" | "submit" | "reset">("button");

  /** Disable the control — dims it and blocks activation (native on a button, ARIA on an anchor). */
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Swallow activation while disabled (covers keyboard-activated anchors). */
  onClick(event: Event): void {
    if (this.disabled()) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }
}
