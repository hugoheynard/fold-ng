import { Component, booleanAttribute, computed, input } from "@angular/core";
import { FoldIconComponent } from "../../foundations/icon/icon.component";
import type { FoldIconName } from "../../foundations/icon/builtin-icons";
import {
  FoldBadgeComponent,
  type FoldBadgeVariant,
} from "../../content/badge/badge.component";

/**
 * Badge tone for a menu item. `follow` (the default) tints the badge with the
 * item's own accent — i.e. the section colour, or whatever the menu's `tint`
 * resolves to — so it matches the item's hover/active look. The rest are the
 * shared {@link FoldBadgeVariant} semantic colours.
 */
export type FoldMenuItemBadgeTone = "follow" | FoldBadgeVariant;

/** Solid accent colour per semantic tone (drives the dot + follow-pill). */
const TONE_ACCENT: Record<FoldBadgeVariant, string> = {
  neutral: "var(--fold-color-text-muted)",
  accent: "var(--fold-color-primary)",
  info: "var(--fold-color-info)",
  warning: "var(--fold-color-warning)",
  alert: "var(--fold-color-alert)",
  success: "var(--fold-color-success)",
};

/**
 * `[fold-menu-item]` — an icon rail item. It is an **attribute** component, put
 * on the caller's own `<a>`/`<button>` so routing stays theirs (`routerLink` +
 * `routerLinkActive`). It renders the icon + a hover tooltip (`label`); `active`
 * lights the accent indicator (bind it from `routerLinkActive`'s `isActive`).
 *
 * A {@link badge} adds a status tag / count that renders in both rail modes:
 * a corner dot (or count bubble, for a number) when the rail is collapsed to
 * icons, and the full badge pill after the label when expanded. It stays an
 * input (not projected content) because only this component knows its rail
 * mode, and that mode dictates where the badge belongs. {@link badgeTone}
 * colours both modes from a single accent — `follow` (default) matches the
 * item's own tint, the semantic tones reuse the `fold-badge` palette.
 *
 * @selector `a[fold-menu-item]`, `button[fold-menu-item]`
 *
 * @example
 * ```html
 * <a fold-menu-item [icon]="'home'" [label]="'Home'"
 *    routerLink="/home" routerLinkActive #r="routerLinkActive"
 *    [active]="r.isActive"></a>
 *
 * <a fold-menu-item icon="bell" label="Alerts" [badge]="3"></a>
 * <a fold-menu-item icon="star" label="Directive" badge="new" badgeTone="info"></a>
 * ```
 */
@Component({
  selector: "a[fold-menu-item], button[fold-menu-item]",
  standalone: true,
  imports: [FoldIconComponent, FoldBadgeComponent],
  templateUrl: "./menu-item.component.html",
  styleUrl: "./menu-item.component.scss",
  host: {
    "[class.is-active]": "active()",
    "[attr.aria-label]": "ariaLabel()",
    "[style.--mi-badge-accent]": "badgeAccent()",
  },
})
export class FoldMenuItemComponent {
  readonly icon = input.required<FoldIconName>();
  /** The label shown in the hover tooltip (also the accessible name). */
  readonly label = input.required<string>();
  /** Lights the active indicator — bind from `routerLinkActive`. */
  readonly active = input(false, { transform: booleanAttribute });
  /**
   * Optional badge: a text tag (`"new"`, `"beta"`) or a count (`3`). Empty
   * string / nullish renders nothing; a count of `0` is treated as nothing.
   */
  readonly badge = input<string | number>();
  /** Badge colour — `follow` (default) tracks the item's tint, or a semantic tone. */
  readonly badgeTone = input<FoldMenuItemBadgeTone>("follow");

  /** Whether the badge is a numeric count (drives the collapsed bubble). */
  protected readonly isCount = computed(() => typeof this.badge() === "number");

  /** Whether a badge should render at all (non-empty text / non-zero count). */
  protected readonly hasBadge = computed(() => {
    const b = this.badge();
    return b !== undefined && b !== "" && b !== 0;
  });

  /** Whether the tone tracks the item's accent (vs a semantic `fold-badge`). */
  protected readonly isFollowTone = computed(
    () => this.badgeTone() === "follow",
  );

  /** The badge's accent colour — the item's tint, or the semantic tone's. */
  protected readonly badgeAccent = computed(() => {
    const tone = this.badgeTone();
    return tone === "follow" ? "var(--mi-accent)" : TONE_ACCENT[tone];
  });

  /** Semantic variant for the expanded `fold-badge` (unused when following). */
  protected readonly badgeVariant = computed<FoldBadgeVariant>(() => {
    const tone = this.badgeTone();
    return tone === "follow" ? "accent" : tone;
  });

  /** Badge text for the expanded pill (`fold-badge` needs a string). */
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
