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
import { FoldSpinnerComponent } from "../../foundations/spinner/spinner.component";
import type { FoldIconSize } from "../../foundations/icon/icon.component";
import type { FoldIconName } from "../../foundations/icon/builtin-icons";
import type {
  FoldButtonEmphasis,
  FoldButtonIntent,
  FoldButtonShape,
  FoldButtonSize,
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
 * <button foldButton emphasis="outline" intent="neutral" size="sm" (click)="cancel()">Cancel</button>
 * <button foldButton emphasis="solid" intent="danger" (click)="delete()">Delete</button>
 * <button foldButton [disabled]="!form.valid" type="submit">Submit</button>
 * <a foldButton emphasis="outline" intent="neutral" routerLink="/contracts">Contracts</a>
 * ```
 *
 * ## Theming its voice
 *
 * A brand's buttons speak in a register — a display family, a weight, capitals,
 * a corner, a floor height — and that register is the same on every button of
 * the app. Six custom properties carry it, all inherited, so an app states it
 * **once** on a root and never again:
 *
 * - `--fold-button-font` · `--fold-button-weight` · `--fold-button-tracking` ·
 *   `--fold-button-transform` — the type.
 * - `--fold-button-radius` — the corner (a `shape="pill"` still wins; asking
 *   for a pill is a more specific intent than a theme's default corner).
 * - `--fold-button-min-height` — the floor, for a design with a touch target
 *   taller than the label needs.
 *
 * They exist because outside always LOSES: `:host(.md)` carries an attribute
 * and a class, so an app's own class cannot outrank it. Without a hook, a
 * screen that needs its own register hand-rolls the button — and then the
 * design system stops being where buttons are decided.
 *
 * `font-size` and `padding` are deliberately NOT hooks: they belong to the size
 * presets. A voice is a register, not a scale, and an app that overrode the
 * size from here would flatten `sm`/`md`/`lg` into one button wearing three
 * names.
 *
 * ```css
 * [data-theme='my-app'] {
 *   --fold-button-font: 'Archivo', sans-serif;
 *   --fold-button-weight: 900;
 *   --fold-button-transform: uppercase;
 *   --fold-button-tracking: 0.04em;
 * }
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
  imports: [FoldIconComponent, FoldSpinnerComponent],
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.scss",
  encapsulation: ViewEncapsulation.Emulated,
  host: {
    "[class]":
      '"fold-button " + emphasis() + " " + intent() + " " + size() + " " + shape()',
    "[class.block]": "block()",
    "[class.is-disabled]": "disabled()",
    "[class.is-loading]": "loading()",
    // Loading blocks interaction like disabled, but keeps the surface lit (spinner
    // shown) rather than dimmed. <button> takes native disabled + type; <a> can't,
    // so it gets the ARIA equivalents (the surface is pointer-events:none either way).
    "[attr.disabled]": "isButton && blocked() ? true : null",
    "[attr.type]": "isButton ? type() : null",
    "[attr.aria-disabled]": "!isButton && blocked() ? true : null",
    "[attr.aria-busy]": "loading() ? true : null",
    "[attr.tabindex]": "!isButton && blocked() ? -1 : null",
    "(click)": "onClick($event)",
  },
})
export class FoldButtonComponent {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  /** True when the host is a `<button>` (vs an `<a>`) — fixed for the element's life. */
  protected readonly isButton =
    this.host.nativeElement.tagName.toLowerCase() === "button";

  /**
   * Fill level — `solid` (default, filled) · `soft` (tinted surface) · `outline`
   * (transparent + hairline). The *how loud* axis; pair with {@link intent}.
   *
   * The default is `solid` because the default is what an app writes when it
   * writes nothing, and what it writes most is the **primary action** of a
   * screen — the one thing it wants pressed. A tinted default made the loudest
   * button on a page the one someone had remembered to mark up, so emphasis
   * tracked authoring effort rather than importance. Reach for `soft` and
   * `outline` deliberately, for the actions that accompany that one.
   */
  readonly emphasis = input<FoldButtonEmphasis>("solid");

  /**
   * Semantic intent — `primary` (default, accent) · `neutral` · `warning` ·
   * `danger`. The *what it means* axis. Orthogonal to {@link emphasis}, so e.g.
   * `emphasis="solid" intent="danger"` is a filled destructive button.
   */
  readonly intent = input<FoldButtonIntent>("primary");

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

  /**
   * Show a spinner in place of the leading icon and go busy: blocks activation
   * and sets `aria-busy`, but keeps the surface lit (not dimmed like `disabled`).
   * The spinner is icon-sized, so the button width doesn't jump.
   */
  readonly loading = input(false, { transform: booleanAttribute });

  /** Interaction is blocked while disabled OR loading. */
  protected readonly blocked = computed(
    () => this.disabled() || this.loading(),
  );

  /** Swallow activation while blocked (covers keyboard-activated anchors). */
  onClick(event: Event): void {
    if (this.blocked()) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }
}
