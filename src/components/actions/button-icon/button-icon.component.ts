import {
  Component,
  booleanAttribute,
  computed,
  input,
  output,
} from "@angular/core";
import { FoldIconComponent } from "../../foundations/icon/icon.component";
import type { FoldIconSize } from "../../foundations/icon/icon.component";
import type { FoldIconName } from "../../foundations/icon/builtin-icons";
import type {
  FoldButtonIconShape,
  FoldButtonIconSize,
  FoldButtonIconTone,
} from "./button-icon.types";

/**
 * `<fold-button-icon>` — the icon-only **momentary** button: a one-shot action
 * whose label is the icon (toolbars, transport, inline row actions, carets, …).
 * It never claims a pressed state — no `aria-pressed` — so assistive tech reads
 * it as a plain button. For a binary on/off control (mute, mask, pin), use
 * `fold-toggle-icon`. For a button with text, use `fold-button`.
 *
 * `shape` / `size` / `tone` surface as `data-*` attributes so the token-only
 * SCSS targets them (the surface is shared with `fold-toggle-icon`). A `tooltip`
 * sets both `title` and `aria-label` — strongly recommended, since there is no
 * visible label.
 *
 * @example
 * ```html
 * <fold-button-icon icon="edit" tooltip="Edit" (clicked)="edit()" />
 * <fold-button-icon icon="play" shape="round" tone="accent" size="lg" (clicked)="play()" />
 * <fold-button-icon icon="bin" tone="critical" tooltip="Delete" (clicked)="delete()" />
 * ```
 *
 * @selector `fold-button-icon`
 */
@Component({
  selector: "fold-button-icon",
  standalone: true,
  imports: [FoldIconComponent],
  templateUrl: "./button-icon.component.html",
  styleUrl: "./button-icon.component.scss",
  host: {
    "[attr.data-shape]": "shape()",
    "[attr.data-size]": "size()",
    "[attr.data-tone]": "tone()",
  },
})
export class FoldButtonIconComponent {
  /** Icon to render (typed against the registry). */
  readonly icon = input.required<FoldIconName>();

  /** Surface shape — `square` (default) or `round` (transport, big actions). */
  readonly shape = input<FoldButtonIconShape>("square");

  /** Hit-area preset — `xs` 22px · `sm` 28px · `md` 32px (default) · `lg` 38px. */
  readonly size = input<FoldButtonIconSize>("md");

  /** Visual tone — `ghost` (default) · `accent` (filled) · `critical` (alert). */
  readonly tone = input<FoldButtonIconTone>("ghost");

  /** Disable the button — dims it and blocks pointer events. */
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Tooltip text — sets both `title` and `aria-label`. Strongly recommended. */
  readonly tooltip = input<string>();

  /** Native `type` of the inner `<button>`. */
  readonly type = input<"button" | "submit">("button");

  /** Emitted on click (passes the native `MouseEvent`). */
  readonly clicked = output<MouseEvent>();

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
    if (this.disabled()) {
      return;
    }
    this.clicked.emit(e);
  }
}
