import { booleanAttribute, Component, input } from "@angular/core";
import { FoldIconComponent } from "../../foundations/icon/icon.component";
import type { FoldIconName } from "../../foundations/icon/builtin-icons";

/**
 * `[fold-nav-tile]` — one square tile in a {@link FoldNavLauncherComponent} grid:
 * a large icon over a label, a generous touch target. An **attribute** component
 * on the caller's own `<a>`/`<button>`, so routing + activation stay theirs
 * (`routerLink`, `(click)`) — mirroring {@link FoldMenuItemComponent}.
 *
 * It stages its **own** entrance — a cascade keyed to its position in the grid
 * (`:host(:nth-child)`) — so a launcher's tiles animate in without the launcher
 * having to thread an index down to projected content.
 *
 * Two looks via `variant`:
 * - `"surface"` (default) — a subtle raised tile (faint fill, hairline border).
 * - `"filled"` — a solid brand tile: `primary` fill, `on-primary` icon + label.
 *   The flat, "app-icon" look — a navy tile with a white glyph under `navi`, a
 *   teal one under umbra — since it names the brand roles, not a colour.
 *
 * @selector `a[fold-nav-tile]`, `button[fold-nav-tile]`
 *
 * @example
 * ```html
 * <a fold-nav-tile icon="home" label="Home" routerLink="/"></a>
 * <button fold-nav-tile icon="music" label="Music" variant="filled"></button>
 * ```
 */
@Component({
  selector: "a[fold-nav-tile], button[fold-nav-tile]",
  standalone: true,
  imports: [FoldIconComponent],
  templateUrl: "./nav-tile.component.html",
  styleUrl: "./nav-tile.component.scss",
  host: {
    class: "fold-nav-tile",
    "[class.is-filled]": "variant() === 'filled'",
    "[class.is-active]": "active()",
    "[attr.aria-current]": "active() ? 'page' : null",
  },
})
export class FoldNavTileComponent {
  /** The tile's icon (large, centred). */
  readonly icon = input.required<FoldIconName>();
  /** The label under the icon (also the accessible name of the control). */
  readonly label = input.required<string>();
  /** `"surface"` (default, subtle raised) or `"filled"` (solid brand fill). */
  readonly variant = input<"surface" | "filled">("surface");
  /** Lights the active indicator — the current destination. */
  readonly active = input(false, { transform: booleanAttribute });
}
