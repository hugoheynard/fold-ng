import { Component, inject, input } from "@angular/core";
import { FoldIdService } from "../../../a11y/id.service";
import { FoldIconComponent } from "../../foundations/icon/icon.component";
import type { FoldIconName } from "../../foundations/icon/builtin-icons";

/**
 * `<fold-nav-section>` — a labelled category of tiles in a
 * {@link FoldNavLauncherComponent}, the way a phone's app library files its
 * apps under named, coloured groups.
 *
 * It is the launcher's twin of {@link FoldMenuSectionComponent}: the same
 * `label` / `color` / `icon` say the same thing on the desktop rail and on the
 * mobile launcher. The `color` is published as `--fold-nav-section-color` on
 * the host — exactly as the rail publishes `--fold-menu-section-color` — so it
 * cascades to the projected tiles, which take a subtle tint from it.
 *
 * A section is **not a level**. Its tiles stay level-1 tiles: they join the
 * launcher's wave, its keyboard order and its density count. A
 * {@link FoldNavGroupComponent} inside a section is still a folder and opens
 * its sheet exactly as it does outside one. Tiles written outside any section
 * (before or after) keep working as before.
 *
 * Accessibility: the host is a `role="group"` named by its header
 * (`aria-labelledby`); the header icon is decorative.
 *
 * @selector `fold-nav-section`
 *
 * @example
 * ```html
 * <fold-nav-launcher [(open)]="navOpen">
 *   <fold-nav-section label="Catalogue" color="#7c5bbf" icon="catalog">
 *     <a fold-nav-tile icon="product" label="Products" routerLink="/products"></a>
 *     <fold-nav-group icon="category" label="Ranges">…</fold-nav-group>
 *   </fold-nav-section>
 * </fold-nav-launcher>
 * ```
 */
@Component({
  selector: "fold-nav-section",
  standalone: true,
  imports: [FoldIconComponent],
  templateUrl: "./nav-section.component.html",
  styleUrl: "./nav-section.component.scss",
  host: {
    class: "fold-nav-section",
    role: "group",
    "[attr.aria-labelledby]": "headId",
    "[attr.data-tinted]": "color() ? '' : null",
    "[style.--fold-nav-section-color]": "color() ?? null",
  },
})
export class FoldNavSectionComponent {
  /** The section's name — its header, and the group's accessible name. */
  readonly label = input.required<string>();
  /** Accent colour (any CSS colour) — the header pastille and the tiles' tint. */
  readonly color = input<string>();
  /** Optional header glyph, worn in a pastille of the section colour. */
  readonly icon = input<FoldIconName>();

  /** SSR-safe id linking the host's `aria-labelledby` to its header. */
  protected readonly headId = inject(FoldIdService).next("fold-nav-section");
}
