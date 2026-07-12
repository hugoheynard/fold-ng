import { Component, input } from "@angular/core";

/**
 * `<sh3-card>` — the canonical raised content surface: a solid
 * `surface-card` background, a hairline border and a consistent radius. Use it
 * anywhere the app would otherwise hand-roll a `background + border +
 * border-radius` block, so cards never drift on colour or corner.
 *
 * - `radius` — `lg` (14px, default) · `md` · `sm`.
 * - `padding` — `md` (16px, default) · `none` · `sm` · `lg`.
 * - `interactive` — adds a hover lift (for clickable cards).
 *
 * ```html
 * <sh3-card>Static content</sh3-card>
 * <sh3-card radius="md" padding="lg" [interactive]="true">Clickable</sh3-card>
 * ```
 *
 * @selector `sh3-card`
 */
@Component({
  selector: "sh3-card",
  standalone: true,
  host: {
    "[class.r-sm]": "radius() === 'sm'",
    "[class.r-md]": "radius() === 'md'",
    "[class.p-none]": "padding() === 'none'",
    "[class.p-sm]": "padding() === 'sm'",
    "[class.p-lg]": "padding() === 'lg'",
    "[class.is-interactive]": "interactive()",
  },
  template: `<ng-content />`,
  styles: `
    /* Defaults: lg radius + md padding. Modifier classes override. */
    :host {
      display: block;
      background: var(--sh3-color-surface-card);
      border: 1px solid var(--sh3-color-border);
      border-radius: var(--sh3-radius-lg);
      padding: 16px;
    }
    :host(.r-md) {
      border-radius: var(--sh3-radius-md);
    }
    :host(.r-sm) {
      border-radius: var(--sh3-radius-sm);
    }
    :host(.p-none) {
      padding: 0;
    }
    :host(.p-sm) {
      padding: 10px;
    }
    :host(.p-lg) {
      padding: 20px;
    }
    :host(.is-interactive) {
      cursor: pointer;
      transition:
        transform 0.18s ease,
        box-shadow 0.18s ease,
        border-color 0.1s ease;
    }
    :host(.is-interactive:hover) {
      transform: translateY(-2px);
      box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.5);
    }
  `,
})
export class CardComponent {
  /** Corner radius — `lg` (default), `md`, or `sm`. */
  readonly radius = input<"sm" | "md" | "lg">("lg");
  /** Inner padding — `md` (default), `none`, `sm`, or `lg`. */
  readonly padding = input<"none" | "sm" | "md" | "lg">("md");
  /** Add a hover lift for clickable cards. */
  readonly interactive = input(false);
}
