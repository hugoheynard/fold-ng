import { Component, input } from "@angular/core";
import { Sh3CardComponent } from "../card/card.component";
import { Sh3IconComponent } from "../icon/icon.component";
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
  imports: [Sh3CardComponent, Sh3IconComponent],
  template: `<sh3-card padding="none">
    <div class="cc-head">
      @if (icon(); as ic) {
        <span class="cc-icon"><sh3-icon [name]="ic" size="md" /></span>
      }
      <span class="cc-titles">
        <span class="cc-title" role="heading" aria-level="3">{{
          title()
        }}</span>
        @if (subtitle(); as s) {
          <span class="cc-sub">{{ s }}</span>
        }
      </span>
    </div>
    <div class="cc-body"><ng-content /></div>
    <div class="cc-foot"><ng-content select="[footer]" /></div>
  </sh3-card>`,
  styles: `
    :host {
      display: block;
    }
    /* Header — raised icon tile + title + subtitle, divider below. */
    .cc-head {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px;
      border-bottom: 1px solid var(--sh3-color-border-subtle);
    }
    .cc-icon {
      flex: none;
      display: grid;
      place-items: center;
      width: 40px;
      height: 40px;
      border-radius: var(--sh3-radius-md);
      border: 1px solid var(--sh3-color-border);
      background: var(--sh3-color-surface-raised);
      color: var(--sh3-color-primary);
    }
    .cc-titles {
      display: flex;
      flex-direction: column;
      gap: 2px;
      min-width: 0;
    }
    .cc-title {
      font-size: var(--sh3-text-md);
      font-weight: 700;
      color: var(--sh3-color-text-primary);
    }
    .cc-sub {
      font-size: var(--sh3-text-xs);
      color: var(--sh3-color-text-muted);
    }
    /* Body — the projected content. */
    .cc-body {
      padding: 2px 16px;
    }
    /* Footer — a centred action, divider above; gone when empty. */
    .cc-foot {
      display: flex;
      justify-content: center;
      padding: 14px 16px;
      border-top: 1px solid var(--sh3-color-border-subtle);
    }
    .cc-foot:empty {
      display: none;
    }
  `,
})
export class Sh3ContextCardComponent {
  /** Header icon glyph (raised tile). */
  readonly icon = input<Sh3IconName>();
  /** Header title. */
  readonly title = input.required<string>();
  /** Optional line under the title. */
  readonly subtitle = input<string>();
}
