import {
  Component,
  ElementRef,
  computed,
  contentChildren,
  inject,
  input,
} from "@angular/core";
import { FoldIdService } from "../../../a11y/id.service";
import { FoldIconComponent } from "../../foundations/icon/icon.component";
import type { FoldIconName } from "../../foundations/icon/builtin-icons";
import type { FoldMenuItemBadgeTone } from "../menu/menu-item.component";
import { FoldNavTileComponent } from "./nav-tile.component";
import {
  FOLD_NAV_GROUP,
  FOLD_NAV_LAUNCHER,
  type FoldNavGroupContext,
} from "./nav-launcher.tokens";

/**
 * `<fold-nav-group>` — a launcher tile that opens a **second level** instead of
 * going somewhere.
 *
 * There is no `level` to drive and no mode to switch: **a tile that contains
 * tiles is a group**. The launcher discovers depth by content query, exactly as
 * {@link FoldMultiselectComponent} discovers its `fold-optgroup`. Two levels and
 * no more — at a third this stops being a launcher and becomes a tree.
 *
 * ```html
 * <fold-nav-launcher [(open)]="navOpen">
 *   <a fold-nav-tile icon="home" label="Home" routerLink="/"></a>
 *
 *   <fold-nav-group icon="catalog" label="PIM">
 *     <a fold-nav-tile icon="product" label="Products" routerLink="/pim/products"></a>
 *     <a fold-nav-tile icon="category" label="Categories" routerLink="/pim/categories"></a>
 *   </fold-nav-group>
 * </fold-nav-launcher>
 * ```
 *
 * ## Why it isn't given a count
 * The header says "7 entries" and that number is **derived**, never passed: a
 * count that is declared beside the list it counts is a second source of truth,
 * and the first time someone adds a tile without touching it, the header starts
 * lying. The group can see its own children; it counts them.
 *
 * ## The tile that survives the transition
 * On the way down the group's tile does not leave with its sisters — it becomes
 * the **anchor** in the level-2 header, at pastille size. It is the only element
 * that crosses the transition, so it is the only landmark the eye needs.
 *
 * @selector `fold-nav-group`
 */
@Component({
  selector: "fold-nav-group",
  standalone: true,
  imports: [FoldIconComponent],
  templateUrl: "./nav-group.component.html",
  styleUrl: "./nav-group.component.scss",
  providers: [{ provide: FOLD_NAV_GROUP, useExisting: FoldNavGroupComponent }],
  host: {
    class: "fold-nav-group",
    "[attr.data-open]": "isOpen() ? '' : null",
  },
})
export class FoldNavGroupComponent implements FoldNavGroupContext {
  /** The group's icon — worn by its tile, then by the level-2 anchor. */
  readonly icon = input<FoldIconName>();
  /** The group's name — its tile's label, then the level-2 heading. */
  readonly label = input.required<string>();
  /** Optional corner badge on the tile, read exactly as a tile's own. */
  readonly badge = input<string | number>();
  /** Badge colour — `follow` (default) or a semantic tone. */
  readonly badgeTone = input<FoldMenuItemBadgeTone>("follow");
  /**
   * How the sheet's entry count is said, given the count. Default is English;
   * pass a function for another language, or for a different noun.
   */
  readonly entryCountLabel = input<(count: number) => string>((count) =>
    count === 1 ? "1 entry" : `${String(count)} entries`,
  );

  /** SSR-safe identity — how the launcher names the open group. */
  readonly groupId = inject(FoldIdService).next("fold-nav-group");

  /** The host element — the launcher needs it to measure the wave's origin. */
  readonly hostEl: HTMLElement =
    inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

  private readonly launcher = inject(FOLD_NAV_LAUNCHER, { optional: true });

  /** The rows on this group's sheet. Their count IS the header's count. */
  private readonly entries = contentChildren(FoldNavTileComponent);

  /** How many entries the sheet holds. */
  readonly entryCount = computed(() => this.entries().length);

  /** Is this group's sheet the one on screen? */
  readonly isOpen = computed(
    () => this.launcher?.openGroupId() === this.groupId,
  );

  /** The tile's fallback glyph when no icon is given — the label's initial. */
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
   * The tile's accessible name, folding in the badge and what the tile does.
   * "Opens" matters: the control is a `button` that reveals a level, not a link
   * — announcing it like its neighbours would promise a destination.
   */
  protected readonly tileLabel = computed(() =>
    this.hasBadge() ? `${this.label()}, ${this.badgeText()}` : this.label(),
  );

  /** Move focus to the group's own tile — where the launcher returns it. */
  focusTile(): void {
    this.hostEl.querySelector<HTMLElement>(".ng-face")?.focus();
  }

  /** Move focus to the sheet's first entry — where the launcher sends it. */
  focusFirstEntry(): void {
    this.entries()[0]?.hostEl.focus();
  }

  /** Descend. The launcher owns the transition; the tile only asks. */
  protected drill(): void {
    this.launcher?.drill(this.groupId);
  }
}
