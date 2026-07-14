import { Component, computed, input } from "@angular/core";
import { Sh3IconComponent } from "../icon/icon.component";
import type { Sh3IconName } from "../icon/icon.registry";

/**
 * `<sh3-element-title>` — the label that heads a section, card or panel. Fully
 * input-driven (title / subtitle / icon), so a header is never hand-rolled and
 * the common case is a self-closing tag.
 *
 * Variants (emphasis):
 * - `eyebrow` (default) — 10px, muted, uppercase. Inline section label.
 * - `bar` — 11px, secondary, uppercase. For a divider header bar.
 * - `title` — normal-case, `text-md`, primary. A card/panel heading; a leading
 *   `icon` renders in a tile whose tone is set by `iconTone`
 *   (`neutral` raised · `primary` filled brand · `faded` dim).
 *
 * A trailing action (edit/add button, lock badge) projects into `[titleAction]`,
 * right-aligned. The title — not the action — is the heading for assistive tech.
 *
 * @selector `sh3-element-title`
 *
 * @example
 * ```html
 * <sh3-element-title title="Documents" variant="bar" />
 * <sh3-element-title variant="title" icon="company" title="Contexte" subtitle="Activité de l'espace" />
 * <sh3-element-title title="Poste">
 *   <button titleAction (click)="edit()">✎</button>
 * </sh3-element-title>
 * ```
 */
@Component({
  selector: "sh3-element-title",
  standalone: true,
  imports: [Sh3IconComponent],
  host: {
    "[class.v-bar]": "variant() === 'bar'",
    "[class.v-title]": "variant() === 'title'",
    "[class.it-primary]": "iconTone() === 'primary'",
    "[class.it-faded]": "iconTone() === 'faded'",
  },
  templateUrl: "./element-title.component.html",
  styleUrl: "./element-title.component.scss",
})
export class Sh3ElementTitleComponent {
  /** Leading icon glyph (raised tile in the `title` variant). */
  readonly icon = input<Sh3IconName>();
  /** Icon tile tone (title variant) — `neutral` (raised), `primary` (filled brand), `faded` (dim). */
  readonly iconTone = input<"neutral" | "primary" | "faded">("neutral");
  /** The heading text. */
  readonly title = input.required<string>();
  /** Optional secondary line under the title. */
  readonly subtitle = input<string>();
  /** Emphasis — `eyebrow` (10px muted), `bar` (11px secondary), `title` (text-md, normal-case). */
  readonly variant = input<"eyebrow" | "bar" | "title">("eyebrow");
  /** Heading outline depth exposed to assistive tech (`aria-level`). */
  readonly level = input(2);

  protected readonly iconSize = computed(() =>
    this.variant() === "title" ? "md" : "sm",
  );
}
