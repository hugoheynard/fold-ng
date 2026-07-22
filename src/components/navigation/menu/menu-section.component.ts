import {
  Component,
  booleanAttribute,
  computed,
  contentChildren,
  input,
  model,
} from "@angular/core";
import { FoldMenuSeparatorComponent } from "./menu-separator.component";
import { FoldIconComponent } from "../../foundations/icon/icon.component";
import { FoldMenuItemComponent } from "./menu-item.component";

/** Distinct ids for the header → items `aria-controls` link. */
let sectionUid = 0;

/**
 * `<fold-menu-section>` — a labelled group inside `<fold-menu>`. It renders a
 * `<fold-menu-separator>` (same `label` / `color` inputs) then projects the
 * section's `fold-menu-item`s beneath it.
 *
 * The `color` is published as the `--fold-menu-section-color` custom property on
 * the host, so it cascades to the projected items: they pick the section's tint
 * up on hover (see `menu-item.component.scss`). Omit `color` for a neutral
 * section.
 *
 * Set `collapsible` to turn the header into a fold toggle (chevron) — a long
 * grouped nav can then be tidied down to the sections that matter. The
 * {@link collapsed} state is two-way bindable and starts open; a section that
 * holds the **active** item always shows regardless, so the current page is
 * never hidden. Folding only applies in the expanded rail — collapsed (icon
 * only) there is no header to click, so every item stays visible.
 *
 * @selector `fold-menu-section`
 *
 * @example
 * ```html
 * <fold-menu-section label="Workspace" color="#7c5bbf" collapsible>
 *   <button fold-menu-item icon="home" label="Home"></button>
 *   <button fold-menu-item icon="music" label="Music"></button>
 * </fold-menu-section>
 * ```
 */
@Component({
  selector: "fold-menu-section",
  standalone: true,
  imports: [FoldMenuSeparatorComponent, FoldIconComponent],
  templateUrl: "./menu-section.component.html",
  styleUrl: "./menu-section.component.scss",
  host: { "[style.--fold-menu-section-color]": "color() ?? null" },
})
export class FoldMenuSectionComponent {
  /** Section label — shown only when the menu is expanded. */
  readonly label = input<string>();
  /** Accent colour tinting the separator and the items' hover state. */
  readonly color = input<string>();
  /** Turn the header into a fold toggle for the section's items. */
  readonly collapsible = input(false, { transform: booleanAttribute });
  /** Fold state (two-way). Starts open; ignored while the section is active. */
  readonly collapsed = model(false);

  /** Projected items — read to keep the active one's section always open. */
  private readonly items = contentChildren(FoldMenuItemComponent, {
    descendants: true,
  });
  private readonly hasActiveItem = computed(() =>
    this.items().some((item) => item.active()),
  );

  /** Effective open state: not collapsed, or force-open for the active item. */
  protected readonly open = computed(
    () => !this.collapsed() || this.hasActiveItem(),
  );

  /** Stable id linking the toggle's `aria-controls` to the items region. */
  protected readonly bodyId = `fold-menu-section-${(sectionUid += 1)}`;

  protected toggle(): void {
    this.collapsed.update((v) => !v);
  }
}
