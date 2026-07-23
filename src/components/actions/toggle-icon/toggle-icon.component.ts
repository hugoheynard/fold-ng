import {
  Component,
  booleanAttribute,
  computed,
  input,
  model,
  output,
} from "@angular/core";
import { FoldIconComponent } from "../../foundations/icon/icon.component";
import { FoldSpinnerComponent } from "../../foundations/spinner/spinner.component";
import type { FoldIconSize } from "../../foundations/icon/icon.component";
import type { FoldIconName } from "../../foundations/icon/builtin-icons";
import type {
  FoldButtonIconShape,
  FoldButtonIconSize,
  FoldButtonIconTone,
} from "../button-icon/button-icon.types";

/**
 * `<fold-toggle-icon>` — the icon-only **toggle** button: a binary on/off
 * control whose label is the icon (mute, mask, pin, loop, show/hide). It renders
 * a pressed surface while on and **always** carries `aria-pressed` (`true`/
 * `false`), so assistive tech announces it as a toggle. Two-way bind the state
 * with `[(active)]`. For a one-shot action (delete, play-once, open), use
 * `fold-button-icon` — a momentary button that never claims a pressed state.
 *
 * Shares the icon-button surface (shape / size / tone) with `fold-button-icon`;
 * the two differ only in semantics, so their `shape` / `size` / `tone` inputs
 * and types are identical.
 *
 * @example
 * ```html
 * <fold-toggle-icon icon="eye" tooltip="Toggle mask" [(active)]="masked" />
 * <fold-toggle-icon icon="repeat" tooltip="Loop" [(active)]="looping" />
 * ```
 *
 * @selector `fold-toggle-icon`
 */
@Component({
  selector: "fold-toggle-icon",
  standalone: true,
  imports: [FoldIconComponent, FoldSpinnerComponent],
  templateUrl: "./toggle-icon.component.html",
  styleUrl: "./toggle-icon.component.scss",
  host: {
    "[attr.data-shape]": "shape()",
    "[attr.data-size]": "size()",
    "[attr.data-tone]": "tone()",
    "[attr.data-active]": 'active() ? "" : null',
    "[attr.data-loading]": "loading() ? '' : null",
  },
})
export class FoldToggleIconComponent {
  /** Icon to render (typed against the registry). */
  readonly icon = input.required<FoldIconName>();

  /** Surface shape — `square` (default) or `round`. */
  readonly shape = input<FoldButtonIconShape>("square");

  /** Hit-area preset — `xs` 22px · `sm` 28px · `md` 32px (default) · `lg` 38px. */
  readonly size = input<FoldButtonIconSize>("md");

  /** Visual tone — `ghost` (default) · `accent` · `critical`. */
  readonly tone = input<FoldButtonIconTone>("ghost");

  /** Two-way toggle state — renders pressed and drives `aria-pressed`. */
  readonly active = model<boolean>(false);

  /** Disable the button — dims it and blocks pointer events. */
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Swap the icon for a spinner and go busy — blocks toggling, stays lit. */
  readonly loading = input(false, { transform: booleanAttribute });

  /** Tooltip text — sets both `title` and `aria-label`. Strongly recommended. */
  readonly tooltip = input<string>();

  /** Native `type` of the inner `<button>`. */
  readonly type = input<"button" | "submit">("button");

  /** Emitted on toggle (passes the native `MouseEvent`), after `active` flips. */
  readonly toggled = output<MouseEvent>();

  /** Resolves the icon size from the button size preset. */
  readonly iconSize = computed<FoldIconSize>(() => {
    switch (this.size()) {
      case "xs":
        return "xs"; // 12px
      case "sm":
        return "sm"; // 16px
      case "md":
        return "sm"; // 16px in a 32px hit-area
      case "lg":
        return "md"; // 20px in a 38px hit-area
    }
  });

  onClick(e: MouseEvent): void {
    if (this.disabled() || this.loading()) {
      return;
    }
    this.active.update((v) => !v);
    this.toggled.emit(e);
  }
}
