import { Component, computed, input, model, output } from "@angular/core";
import { FoldIconComponent } from "../../foundations/icon/icon.component";
import type { FoldIconSize } from "../../foundations/icon/icon.component";
import type { FoldIconName } from "../../foundations/icon/icon.registry";
import type {
  FoldButtonIconShape,
  FoldButtonIconSize,
  FoldButtonIconTone,
} from "./button-icon.types";

/**
 * `<fold-button-icon>` — the icon-only button: any clickable affordance whose
 * label is the icon itself (toolbars, transport bars, inline row actions,
 * carets, …). For a button with text, use `fold-button`.
 *
 * `shape` / `size` / `tone` surface as `data-*` attributes so the token-only
 * SCSS targets them. It can be a momentary button (emit {@link clicked}) or a
 * two-way toggle (`[(active)]`, which also renders a pressed state and sets
 * `aria-pressed`). A `tooltip` sets both `title` and `aria-label` — strongly
 * recommended, since there is no visible label.
 *
 * ```html
 * <fold-button-icon icon="edit" tooltip="Edit" (clicked)="edit()" />
 * <fold-button-icon icon="play" shape="round" tone="accent" size="lg" (clicked)="play()" />
 * <fold-button-icon icon="eye" tooltip="Toggle mask" [(active)]="masked" />
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
    "[attr.data-active]": 'active() ? "" : null',
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

  /** Two-way toggle state — renders pressed/filled and sets `aria-pressed`. */
  readonly active = model<boolean>(false);

  /** Disable the button — dims it and blocks pointer events. */
  readonly disabled = input<boolean>(false);

  /** Tooltip text — sets both `title` and `aria-label`. Strongly recommended. */
  readonly tooltip = input<string>();

  /** Native `type` of the inner `<button>` (named to avoid the `tone` clash). */
  readonly buttonType = input<"button" | "submit">("button");

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
    this.active.update((v) => !v);
    this.clicked.emit(e);
  }
}
