import { Component, input } from "@angular/core";
import { Sh3CardComponent } from "../card/card.component";
import { Sh3ElementTitleComponent } from "../element-title/element-title.component";
import type { Sh3IconName } from "../icon/icon.registry";

/**
 * `<sh3-context-card>` — a titled info card in three zones: a **header** (a
 * raised icon tile + title + subtitle), a **body** (the projected content — e.g.
 * label/value rows), and an optional **footer** action. Composes
 * {@link Sh3CardComponent} for the surface, so it never re-rolls a card.
 *
 * - `icon` / `title` / `subtitle` — the header. `title` is required.
 * - default slot → the body.
 * - `[footer]` slot → a footer action (e.g. an `<sh3-link>`); the footer and its
 *   divider are hidden when nothing is projected.
 *
 * @selector `sh3-context-card`
 *
 * @example
 * ```html
 * <sh3-context-card icon="company" title="Contexte" subtitle="Activité de l'espace">
 *   <div class="row">…</div>
 *   <sh3-link footer icon="company" (clicked)="openOrg()">Voir l'organigramme</sh3-link>
 * </sh3-context-card>
 * ```
 */
@Component({
  selector: "sh3-context-card",
  standalone: true,
  imports: [Sh3CardComponent, Sh3ElementTitleComponent],
  templateUrl: "./context-card.component.html",
  styleUrl: "./context-card.component.scss",
})
export class Sh3ContextCardComponent {
  /** Header icon glyph. */
  readonly icon = input<Sh3IconName>();
  /** Icon tile tone — `primary` (filled brand, default), `neutral` (raised), `faded` (dim). */
  readonly iconTone = input<"neutral" | "primary" | "faded">("primary");
  /** Header title. */
  readonly title = input.required<string>();
  /** Optional line under the title. */
  readonly subtitle = input<string>();
}
