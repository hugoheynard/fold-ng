import {
  booleanAttribute,
  Component,
  ElementRef,
  computed,
  inject,
  input,
} from "@angular/core";
import { FoldIconComponent } from "../../foundations/icon/icon.component";
import type { FoldIconName } from "../../foundations/icon/builtin-icons";
import type { FoldMenuItemBadgeTone } from "../menu/menu-item.component";
import { FOLD_NAV_GROUP } from "./nav-launcher.tokens";

/** How a row's glyph and hint are inked — neutral, or the warning tone. */
export type FoldNavTileTone = "neutral" | "warning";

/**
 * `[fold-nav-tile]` — one destination in a {@link FoldNavLauncherComponent}.
 *
 * An **attribute** component on the caller's own `<a>`/`<button>`, so routing +
 * activation stay theirs (`routerLink`, `(click)`) — mirroring
 * {@link FoldMenuItemComponent}.
 *
 * ## Two presentations, decided by where it sits
 * - Written straight into the launcher, it is a **square tile** in the grid.
 * - Written inside a {@link FoldNavGroupComponent}, it is a **row** on that
 *   group's sheet: glyph, label, hint, chevron.
 *
 * Nothing is passed to say which — the tile resolves its group through the
 * element injector, which follows the tree the consumer wrote. A second level
 * is a list and not a grid on purpose: "Mercuriale templates" does not fit in a
 * square, and a list is read with the thumb.
 *
 * `icon` is **optional**, because a second-level entry may not have one
 * (`FoldViewNavItem.icon` is optional too, and these rows mirror a rail). A row
 * with no icon falls back to a status dot rather than shifting its label — so a
 * list with a hole in it still reads as a column.
 *
 * @selector `a[fold-nav-tile]`, `button[fold-nav-tile]`
 *
 * @example
 * ```html
 * <!-- level 1: a square that goes somewhere -->
 * <a fold-nav-tile icon="home" label="Home" routerLink="/"></a>
 *
 * <!-- level 2: rows on a group's sheet -->
 * <fold-nav-group icon="catalog" label="Catalogue">
 *   <a fold-nav-tile icon="product" label="Products" hint="128 sheets" routerLink="/products"></a>
 *   <a fold-nav-tile icon="publish" label="Publishing" hint="3 waiting" tone="warning" routerLink="/publish"></a>
 * </fold-nav-group>
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
    "[class.is-row]": "isRow()",
    "[class.is-filled]": "variant() === 'filled'",
    "[class.is-accent]": "variant() === 'accent'",
    "[class.is-active]": "active()",
    "[attr.data-tone]": "tone()",
    "[attr.aria-current]": "active() ? 'page' : null",
    "[attr.aria-label]": "ariaLabel()",
  },
})
export class FoldNavTileComponent {
  /**
   * The tile's icon. Optional at level 2, where a row with none falls back to a
   * status dot; a square tile without one shows its label's initial, so the
   * grid keeps its rhythm either way.
   */
  readonly icon = input<FoldIconName>();
  /** The label (also the accessible name of the control). */
  readonly label = input.required<string>();
  /**
   * Secondary text, on the row's right — a count, a state, a source
   * ("128 sheets", "Shopify"). **Level 2 only**: a square tile has no room for
   * it, and a value that renders in one place and vanishes in another is worse
   * than one that never rendered.
   */
  readonly hint = input<string>();
  /** `neutral` (default) or `warning` — inks the row's glyph and hint. */
  readonly tone = input<FoldNavTileTone>("neutral");
  /**
   * `"surface"` (default, subtle raised) · `"accent"` (primary-tinted — what a
   * group's tile wears) · `"filled"` (solid primary, the flat app-icon look).
   */
  readonly variant = input<"surface" | "accent" | "filled">("surface");
  /** Lights the active indicator — the current destination. */
  readonly active = input(false, { transform: booleanAttribute });

  /**
   * Optional badge: a count (`3`) or a short text tag (`"new"`). Nullish, `""`
   * and a count of **`0`** all render nothing, so a caller can pass a raw count
   * and let zero mean "nothing to say" rather than pre-mapping it to `null`.
   */
  readonly badge = input<string | number>();

  /** Badge colour — `follow` (default) tracks the tile's look, or a semantic tone. */
  readonly badgeTone = input<FoldMenuItemBadgeTone>("follow");

  /**
   * The host element. The group focuses its first entry on the way down, and
   * the launcher measures the wave's origin from these — both need the node,
   * and reaching for it through the DOM from outside would be guesswork.
   */
  readonly hostEl: HTMLElement =
    inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

  /** The group this tile sits on, if any — `null` means level 1. */
  private readonly group = inject(FOLD_NAV_GROUP, { optional: true });

  /** A row rather than a square: the tile is on a group's sheet. */
  protected readonly isRow = computed(() => this.group !== null);

  /** A square tile with no icon still needs a fixed glyph — its initial. */
  protected readonly initial = computed(() => this.label().charAt(0));

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
   * Accessible name folding badge and hint in. Both bubbles are `aria-hidden`:
   * read on their own they would announce a bare "3" or "128 sheets", detached
   * from what they count.
   */
  protected readonly ariaLabel = computed(() => {
    const parts = [this.label()];
    if (this.hasBadge()) {
      parts.push(this.badgeText());
    }
    const hint = this.hint();
    if (hint !== undefined && hint !== "" && this.isRow()) {
      parts.push(hint);
    }
    return parts.length > 1 ? parts.join(", ") : null;
  });
}
