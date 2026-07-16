import {
  Component,
  booleanAttribute,
  computed,
  contentChildren,
  input,
  model,
} from "@angular/core";
import { Sh3MenuSeparatorComponent } from "./menu-separator.component";
import { Sh3IconComponent } from "../icon/icon.component";
import { Sh3MenuItemComponent } from "./menu-item.component";

/** Distinct ids for the header → items `aria-controls` link. */
let sectionUid = 0;

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
 * Set `collapsible` to turn the header into a fold toggle (chevron) — a long
 * grouped nav can then be tidied down to the sections that matter. The
 * {@link collapsed} state is two-way bindable and starts open; a section that
 * holds the **active** item always shows regardless, so the current page is
 * never hidden. Folding only applies in the expanded rail — collapsed (icon
 * only) there is no header to click, so every item stays visible.
 *
 * @selector `sh3-menu-section`
 *
 * @example
 * ```html
 * <sh3-menu-section label="Workspace" color="#7c5bbf" collapsible>
 *   <button sh3-menu-item icon="home" label="Home"></button>
 *   <button sh3-menu-item icon="music" label="Music"></button>
 * </sh3-menu-section>
 * ```
 */
@Component({
  selector: "sh3-menu-section",
  standalone: true,
  imports: [Sh3MenuSeparatorComponent, Sh3IconComponent],
  templateUrl: "./menu-section.component.html",
  styleUrl: "./menu-section.component.scss",
  host: { "[style.--sh3-menu-section-color]": "color() ?? null" },
})
export class Sh3MenuSectionComponent {
  /** Section label — shown only when the menu is expanded. */
  readonly label = input<string>();
  /** Accent colour tinting the separator and the items' hover state. */
  readonly color = input<string>();
  /** Turn the header into a fold toggle for the section's items. */
  readonly collapsible = input(false, { transform: booleanAttribute });
  /** Fold state (two-way). Starts open; ignored while the section is active. */
  readonly collapsed = model(false);

  /** Projected items — read to keep the active one's section always open. */
  private readonly items = contentChildren(Sh3MenuItemComponent, {
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
  protected readonly bodyId = `sh3-menu-section-${(sectionUid += 1)}`;

  protected toggle(): void {
    this.collapsed.update((v) => !v);
  }
}
