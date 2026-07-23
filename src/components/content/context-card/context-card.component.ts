import { Component, input } from "@angular/core";
import { FoldCardComponent } from "../../content/card/card.component";
import { FoldElementTitleComponent } from "../../content/element-title/element-title.component";
import type { FoldIconName } from "../../foundations/icon/builtin-icons";

/**
 * `<fold-context-card>` — a titled info card in three zones: a **header** (a
 * raised icon tile + title + subtitle), a **body** (the projected content — e.g.
 * label/value rows), and an optional **footer** action. Composes
 * {@link FoldCardComponent} for the surface, so it never re-rolls a card.
 *
 * - `icon` / `title` / `subtitle` — the header. `title` is required.
 * - default slot → the body.
 * - `[footer]` slot → a footer action (e.g. an `<fold-link>`); the footer and its
 *   divider are hidden when nothing is projected.
 *
 * @selector `fold-context-card`
 *
 * @example
 * ```html
 * <fold-context-card icon="company" title="Contexte" subtitle="Activité de l'espace">
 *   <div class="row">…</div>
 *   <fold-link footer icon="company" (clicked)="openOrg()">Voir l'organigramme</fold-link>
 * </fold-context-card>
 * ```
 */
@Component({
  selector: "fold-context-card",
  standalone: true,
  imports: [FoldCardComponent, FoldElementTitleComponent],
  templateUrl: "./context-card.component.html",
  styleUrl: "./context-card.component.scss",
})
export class FoldContextCardComponent {
  /** Header icon glyph. */
  readonly icon = input<FoldIconName>();
  /** Icon tile tone — `primary` (filled brand, default), `neutral` (raised), `faded` (dim). */
  readonly iconTone = input<"neutral" | "primary" | "faded">("primary");
  /** Header title. */
  readonly title = input.required<string>();
  /** Optional line under the title. */
  readonly subtitle = input<string>();
}
