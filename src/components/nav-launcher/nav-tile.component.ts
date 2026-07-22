import { booleanAttribute, Component, input } from "@angular/core";
import { Sh3IconComponent } from "../icon/icon.component";
import type { Sh3IconName } from "../icon/icon.registry";

/**
 * `[sh3-nav-tile]` — one square tile in a {@link Sh3NavLauncherComponent} grid:
 * a large icon over a label, a generous touch target. An **attribute** component
 * on the caller's own `<a>`/`<button>`, so routing + activation stay theirs
 * (`routerLink`, `(click)`) — mirroring {@link Sh3MenuItemComponent}.
 *
 * It stages its **own** entrance — a cascade keyed to its position in the grid
 * (`:host(:nth-child)`) — so a launcher's tiles animate in without the launcher
 * having to thread an index down to projected content.
 *
 * @selector `a[sh3-nav-tile]`, `button[sh3-nav-tile]`
 *
 * @example
 * ```html
 * <a sh3-nav-tile icon="home" label="Home" routerLink="/"></a>
 * <button sh3-nav-tile icon="music" label="Music" [active]="true"></button>
 * ```
 */
@Component({
  selector: "a[sh3-nav-tile], button[sh3-nav-tile]",
  standalone: true,
  imports: [Sh3IconComponent],
  templateUrl: "./nav-tile.component.html",
  styleUrl: "./nav-tile.component.scss",
  host: {
    class: "sh3-nav-tile",
    "[class.is-active]": "active()",
    "[attr.aria-current]": "active() ? 'page' : null",
  },
})
export class Sh3NavTileComponent {
  /** The tile's icon (large, centred). */
  readonly icon = input.required<Sh3IconName>();
  /** The label under the icon (also the accessible name of the control). */
  readonly label = input.required<string>();
  /** Lights the active indicator — the current destination. */
  readonly active = input(false, { transform: booleanAttribute });
}
