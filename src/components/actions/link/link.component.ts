import { booleanAttribute, Component, input, output } from "@angular/core";
import { NgTemplateOutlet } from "@angular/common";
import { FoldIconComponent } from "../../foundations/icon/icon.component";
import type { FoldIconName } from "../../foundations/icon/builtin-icons";

/**
 * `<fold-link>` — an inline text link / link-button: accent-coloured, underline
 * on hover, with optional leading + trailing icons (a nav chevron, an external
 * glyph). Renders an `<a>` when given `href`, otherwise a `<button>` that emits
 * `(clicked)` — so the same look serves both navigation and in-app actions.
 *
 * - `tone` — `accent` (default, brand link) · `muted` (secondary).
 * - `icon` / `trailingIcon` — optional glyphs around the label.
 * - `disabled` — button mode only.
 *
 * @selector `fold-link`
 *
 * @example
 * ```html
 * <fold-link icon="company" trailingIcon="chevron-right" (clicked)="openOrg()">
 *   Voir l'organigramme
 * </fold-link>
 * <fold-link href="https://sh3pherd.dev/docs" tone="muted">Documentation</fold-link>
 * ```
 */
@Component({
  selector: "fold-link",
  standalone: true,
  imports: [NgTemplateOutlet, FoldIconComponent],
  host: { "[class.tone-muted]": "tone() === 'muted'" },
  templateUrl: "./link.component.html",
  styleUrl: "./link.component.scss",
})
export class FoldLinkComponent {
  /** Leading icon glyph. */
  readonly icon = input<FoldIconName>();
  /** Trailing icon glyph (e.g. a nav chevron). */
  readonly trailingIcon = input<FoldIconName>();
  /** Colour role — `accent` (default) or `muted`. */
  readonly tone = input<"accent" | "muted">("accent");
  /** When set, the link renders as an `<a href>` instead of a button. */
  readonly href = input<string>();
  /** Disable the button form (no effect on the `href` form). */
  readonly disabled = input(false, { transform: booleanAttribute });
  /** Fires on click in the button form. */
  readonly clicked = output<void>();
}
