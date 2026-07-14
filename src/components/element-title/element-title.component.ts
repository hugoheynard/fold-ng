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
 *   `icon` renders in a raised tile.
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
  },
  template: `@if (icon(); as ic) {
      <span class="et-icon"><sh3-icon [name]="ic" [size]="iconSize()" /></span>
    }
    <span class="et-main">
      <span class="et-row">
        <span class="et-label" role="heading" [attr.aria-level]="level()">{{
          title()
        }}</span>
        <span class="et-action"><ng-content select="[titleAction]" /></span>
      </span>
      @if (subtitle(); as s) {
        <span class="et-sub">{{ s }}</span>
      }
    </span>`,
  styles: `
    :host {
      display: flex;
      align-items: center;
      gap: 12px;
      margin: 0;
    }
    .et-main {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .et-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
    }
    .et-label {
      min-width: 0;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--sh3-color-text-muted);
    }
    :host(.v-bar) .et-label {
      font-size: 11px;
      color: var(--sh3-color-text-secondary);
    }
    :host(.v-title) .et-label {
      font-size: var(--sh3-text-md);
      letter-spacing: normal;
      text-transform: none;
      color: var(--sh3-color-text-primary);
    }
    .et-sub {
      font-size: var(--sh3-text-xs);
      color: var(--sh3-color-text-muted);
    }
    .et-action {
      flex: none;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .et-action:empty {
      display: none;
    }
    /* Icon — a plain leading glyph; the title variant lifts it into a tile. */
    .et-icon {
      flex: none;
      display: grid;
      place-items: center;
      color: var(--sh3-color-primary);
    }
    :host(.v-title) .et-icon {
      width: 40px;
      height: 40px;
      border-radius: var(--sh3-radius-md);
      border: 1px solid var(--sh3-color-border);
      background: var(--sh3-color-surface-raised);
    }
  `,
})
export class Sh3ElementTitleComponent {
  /** Leading icon glyph (raised tile in the `title` variant). */
  readonly icon = input<Sh3IconName>();
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
