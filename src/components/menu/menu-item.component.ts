import { Component, booleanAttribute, computed, input } from "@angular/core";
import { Sh3IconComponent } from "../icon/icon.component";
import type { Sh3IconName } from "../icon/icon.registry";
import {
  Sh3BadgeComponent,
  type Sh3BadgeVariant,
} from "../badge/badge.component";

/**
 * `[sh3-menu-item]` — an icon rail item. It is an **attribute** component, put
 * on the caller's own `<a>`/`<button>` so routing stays theirs (`routerLink` +
 * `routerLinkActive`). It renders the icon + a hover tooltip (`label`); `active`
 * lights the accent indicator (bind it from `routerLinkActive`'s `isActive`).
 *
 * A {@link badge} adds a status tag / count that renders in both rail modes:
 * a corner dot (or count bubble, for a number) when the rail is collapsed to
 * icons, and the full `sh3-badge` pill after the label when expanded. It stays
 * an input (not projected content) because only this component knows its rail
 * mode, and that mode dictates where the badge belongs.
 *
 * @selector `a[sh3-menu-item]`, `button[sh3-menu-item]`
 *
 * @example
 * ```html
 * <a sh3-menu-item [icon]="'home'" [label]="'Home'"
 *    routerLink="/home" routerLinkActive #r="routerLinkActive"
 *    [active]="r.isActive"></a>
 *
 * <a sh3-menu-item icon="bell" label="Alerts" [badge]="3"></a>
 * <a sh3-menu-item icon="star" label="Directive" badge="new" badgeTone="info"></a>
 * ```
 */
@Component({
  selector: "a[sh3-menu-item], button[sh3-menu-item]",
  standalone: true,
  imports: [Sh3IconComponent, Sh3BadgeComponent],
  templateUrl: "./menu-item.component.html",
  styleUrl: "./menu-item.component.scss",
  host: {
    "[class.is-active]": "active()",
    "[attr.aria-label]": "ariaLabel()",
  },
})
export class Sh3MenuItemComponent {
  readonly icon = input.required<Sh3IconName>();
  /** The label shown in the hover tooltip (also the accessible name). */
  readonly label = input.required<string>();
  /** Lights the active indicator — bind from `routerLinkActive`. */
  readonly active = input(false, { transform: booleanAttribute });
  /**
   * Optional badge: a text tag (`"new"`, `"beta"`) or a count (`3`). Empty
   * string / nullish renders nothing; a count of `0` is treated as nothing.
   */
  readonly badge = input<string | number>();
  /** Badge colour, from the shared `sh3-badge` vocabulary. */
  readonly badgeTone = input<Sh3BadgeVariant>("accent");

  /** Whether the badge is a numeric count (drives the collapsed bubble). */
  protected readonly isCount = computed(() => typeof this.badge() === "number");

  /** Whether a badge should render at all (non-empty text / non-zero count). */
  protected readonly hasBadge = computed(() => {
    const b = this.badge();
    return b !== undefined && b !== "" && b !== 0;
  });

  /** Badge text for the expanded pill (`sh3-badge` needs a string). */
  protected readonly badgeText = computed(() => {
    const b = this.badge();
    return b === undefined ? "" : String(b);
  });

  /** Collapsed corner label: the (capped) count, or empty for a text tag dot. */
  protected readonly dotText = computed(() => {
    const b = this.badge();
    if (typeof b !== "number") {
      return "";
    }
    return b > 99 ? "99+" : String(b);
  });

  /** Accessible name folding the badge in, so both rail modes announce it. */
  protected readonly ariaLabel = computed(() =>
    this.hasBadge() ? `${this.label()}, ${this.badgeText()}` : null,
  );
}
