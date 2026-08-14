import { booleanAttribute, Component, computed, input } from "@angular/core";
import { FoldIconComponent } from "../../foundations/icon/icon.component";
import type { FoldIconName } from "../../foundations/icon/builtin-icons";
import type { FoldMenuItemBadgeTone } from "../menu/menu-item.component";

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
 * `badge` puts a count (or a short tag) in the tile's corner, with the same
 * meaning as {@link FoldMenuItemComponent}'s: a rail entry and its launcher tile
 * are **the same destination**, so what one can say the other must be able to
 * say too — otherwise an app that shows "3 waiting" in the rail goes silent the
 * moment the window narrows.
 *
 * @example
 * ```html
 * <a fold-nav-tile icon="home" label="Home" routerLink="/"></a>
 * <button fold-nav-tile icon="music" label="Music" variant="filled"></button>
 * <a fold-nav-tile icon="inbox" label="Inbox" [badge]="3" badgeTone="accent"></a>
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
    "[attr.aria-label]": "ariaLabel()",
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

  /**
   * Optional badge: a count (`3`) or a short text tag (`"new"`). Same reading as
   * {@link FoldMenuItemComponent.badge} — nullish, `""` and a count of **`0`**
   * all render nothing, so a caller can pass a raw count and let zero mean
   * "nothing to say" rather than pre-mapping it to `null`.
   */
  readonly badge = input<string | number>();

  /** Badge colour — `follow` (default) tracks the tile's look, or a semantic tone. */
  readonly badgeTone = input<FoldMenuItemBadgeTone>("follow");

  /** Whether a badge renders at all (non-empty text / non-zero count). */
  protected readonly hasBadge = computed(() => {
    const b = this.badge();
    return b !== undefined && b !== "" && b !== 0;
  });

  /** The badge's text — a count over 99 is capped, as in the collapsed rail. */
  protected readonly badgeText = computed(() => {
    const b = this.badge();
    if (b === undefined) {
      return "";
    }
    return typeof b === "number" && b > 99 ? "99+" : String(b);
  });

  /**
   * Accessible name folding the badge in. The bubble itself is `aria-hidden`:
   * read on its own it would announce a bare "3", detached from what it counts.
   */
  protected readonly ariaLabel = computed(() =>
    this.hasBadge() ? `${this.label()}, ${this.badgeText()}` : null,
  );
}
