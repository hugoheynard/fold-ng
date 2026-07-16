import { Component, computed, input, model, output } from "@angular/core";
import { Sh3IconComponent } from "../icon/icon.component";
import type { Sh3IconSize } from "../icon/icon.component";
import type { Sh3IconName } from "../icon/icon.registry";
import type {
  Sh3ButtonIconShape,
  Sh3ButtonIconSize,
  Sh3ButtonIconTone,
} from "./button-icon.types";

/**
 * `<sh3-button-icon>` — the icon-only button: any clickable affordance whose
 * label is the icon itself (toolbars, transport bars, inline row actions,
 * carets, …). For a button with text, use `sh3-button`.
 *
 * `shape` / `size` / `tone` surface as `data-*` attributes so the token-only
 * SCSS targets them. It can be a momentary button (emit {@link clicked}) or a
 * two-way toggle (`[(active)]`, which also renders a pressed state and sets
 * `aria-pressed`). A `tooltip` sets both `title` and `aria-label` — strongly
 * recommended, since there is no visible label.
 *
 * ```html
 * <sh3-button-icon icon="edit" tooltip="Edit" (clicked)="edit()" />
 * <sh3-button-icon icon="play" shape="round" tone="accent" size="lg" (clicked)="play()" />
 * <sh3-button-icon icon="eye" tooltip="Toggle mask" [(active)]="masked" />
 * <sh3-button-icon icon="bin" tone="critical" tooltip="Delete" (clicked)="delete()" />
 * ```
 *
 * @selector `sh3-button-icon`
 */
@Component({
  selector: "sh3-button-icon",
  standalone: true,
  imports: [Sh3IconComponent],
  templateUrl: "./button-icon.component.html",
  styleUrl: "./button-icon.component.scss",
  host: {
    "[attr.data-shape]": "shape()",
    "[attr.data-size]": "size()",
    "[attr.data-tone]": "tone()",
    "[attr.data-active]": 'active() ? "" : null',
  },
})
export class Sh3ButtonIconComponent {
  /** Icon to render (typed against the registry). */
  readonly icon = input.required<Sh3IconName>();

  /** Surface shape — `square` (default) or `round` (transport, big actions). */
  readonly shape = input<Sh3ButtonIconShape>("square");

  /** Hit-area preset — `xs` 22px · `sm` 28px · `md` 32px (default) · `lg` 38px. */
  readonly size = input<Sh3ButtonIconSize>("md");

  /** Visual tone — `ghost` (default) · `accent` (filled) · `critical` (alert). */
  readonly tone = input<Sh3ButtonIconTone>("ghost");

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
  readonly iconSize = computed<Sh3IconSize>(() => {
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
