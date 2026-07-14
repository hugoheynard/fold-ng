import { Component, booleanAttribute, input } from "@angular/core";
import { Sh3IconComponent } from "../icon/icon.component";
import type { Sh3IconName } from "../icon/icon.registry";

/**
 * `[sh3-menu-item]` — an icon rail item. It is an **attribute** component, put
 * on the caller's own `<a>`/`<button>` so routing stays theirs (`routerLink` +
 * `routerLinkActive`). It renders the icon + a hover tooltip (`label`); `active`
 * lights the accent indicator (bind it from `routerLinkActive`'s `isActive`).
 *
 * @selector `a[sh3-menu-item]`, `button[sh3-menu-item]`
 *
 * @example
 * ```html
 * <a sh3-menu-item [icon]="'home'" [label]="'Home'"
 *    routerLink="/home" routerLinkActive #r="routerLinkActive"
 *    [active]="r.isActive"></a>
 * ```
 */
@Component({
  selector: "a[sh3-menu-item], button[sh3-menu-item]",
  standalone: true,
  imports: [Sh3IconComponent],
  templateUrl: "./menu-item.component.html",
  styleUrl: "./menu-item.component.scss",
  host: { "[class.is-active]": "active()" },
})
export class Sh3MenuItemComponent {
  readonly icon = input.required<Sh3IconName>();
  /** The label shown in the hover tooltip (also the accessible name). */
  readonly label = input.required<string>();
  /** Lights the active indicator — bind from `routerLinkActive`. */
  readonly active = input(false, { transform: booleanAttribute });
}
