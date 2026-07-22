import { Component, input } from "@angular/core";

/**
 * `<fold-menu-separator>` — a section break inside `<fold-menu>`.
 *
 * Collapsed (icon rail): a short mark centered between items — a plain divider,
 * or a colour bar when `color` is set. Expanded: a section header — the colour
 * dot + the uppercase `label`. It follows the menu's state via `:host-context`.
 *
 * @selector `fold-menu-separator`
 *
 * @example
 * ```html
 * <fold-menu-separator label="Workspace" color="#7c5bbf" />
 * ```
 */
@Component({
  selector: "fold-menu-separator",
  standalone: true,
  templateUrl: "./menu-separator.component.html",
  styleUrl: "./menu-separator.component.scss",
})
export class FoldMenuSeparatorComponent {
  /** Section label — shown only when the menu is expanded. */
  readonly label = input<string>();
  /** Accent colour for the mark/dot (any CSS colour); omit for a neutral line. */
  readonly color = input<string>();
}
