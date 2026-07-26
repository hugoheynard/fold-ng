import { Component, computed, input } from "@angular/core";
import { FoldIconComponent } from "../../foundations/icon/icon.component";
import type { FoldIconName } from "../../foundations/icon/builtin-icons";

/**
 * `<fold-element-title>` — the label that heads a section, card or panel. Fully
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
 * @selector `fold-element-title`
 *
 * @example
 * ```html
 * <fold-element-title title="Documents" variant="bar" />
 * <fold-element-title variant="title" icon="company" title="Contexte" subtitle="Activité de l'espace" />
 * <fold-element-title title="Poste">
 *   <button titleAction (click)="edit()">✎</button>
 * </fold-element-title>
 * ```
 */
@Component({
  selector: "fold-element-title",
  standalone: true,
  imports: [FoldIconComponent],
  host: {
    "[class.v-bar]": "variant() === 'bar'",
    "[class.v-title]": "variant() === 'title'",
    "[class.it-primary]": "iconTone() === 'primary'",
    "[class.it-faded]": "iconTone() === 'faded'",
    // `title` is a heading input — strip the reflected native attribute so it
    // never doubles as a browser tooltip.
    "[attr.title]": "null",
  },
  templateUrl: "./element-title.component.html",
  styleUrl: "./element-title.component.scss",
})
export class FoldElementTitleComponent {
  /** Leading icon glyph (raised tile in the `title` variant). */
  readonly icon = input<FoldIconName>();
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
  /** Optional `id` on the heading span, so a container can name a region with
   *  `aria-labelledby` (e.g. a `fold-page-section`'s `<section>`). */
  readonly headingId = input<string>();

  protected readonly iconSize = computed(() =>
    this.variant() === "title" ? "md" : "sm",
  );
}
