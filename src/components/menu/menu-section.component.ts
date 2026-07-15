import { Component, input } from "@angular/core";
import { Sh3MenuSeparatorComponent } from "./menu-separator.component";

/**
 * `<sh3-menu-section>` — a labelled group inside `<sh3-menu>`. It renders a
 * `<sh3-menu-separator>` (same `label` / `color` inputs) then projects the
 * section's `sh3-menu-item`s beneath it.
 *
 * The `color` is published as the `--sh3-menu-section-color` custom property on
 * the host, so it cascades to the projected items: they pick the section's tint
 * up on hover (see `menu-item.component.scss`). Omit `color` for a neutral
 * section.
 *
 * @selector `sh3-menu-section`
 *
 * @example
 * ```html
 * <sh3-menu-section label="Workspace" color="#7c5bbf">
 *   <button sh3-menu-item icon="home" label="Home"></button>
 *   <button sh3-menu-item icon="music" label="Music"></button>
 * </sh3-menu-section>
 * ```
 */
@Component({
  selector: "sh3-menu-section",
  standalone: true,
  imports: [Sh3MenuSeparatorComponent],
  templateUrl: "./menu-section.component.html",
  styleUrl: "./menu-section.component.scss",
  host: { "[style.--sh3-menu-section-color]": "color() ?? null" },
})
export class Sh3MenuSectionComponent {
  /** Section label — shown only when the menu is expanded. */
  readonly label = input<string>();
  /** Accent colour tinting the separator and the items' hover state. */
  readonly color = input<string>();
}
