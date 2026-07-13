import { Component, input } from "@angular/core";

/**
 * `<sh3-hero>` — a prominent header card. Same base as {@link CardComponent}
 * (surface + border + radius + padding), with a `tone` that scales prominence
 * from quiet to loud. Lay out the content inside however you like (the hero is
 * just the surface); project it via `<ng-content>`.
 *
 * **`tone`** (low → high prominence):
 * - `sunken` — the deep container tint (`surface-sunken` + fainter border).
 * - `neutral` (default) — the standard raised card.
 * - `gradient` — a primary-tinted gradient + primary border + a soft radial
 *   glow (the "billing plan" look).
 * - `primary` — a solid primary fill; text flips to `on-primary`.
 *
 * ```html
 * <sh3-hero tone="gradient">
 *   <div class="left">…</div>
 *   <div class="right">…</div>
 * </sh3-hero>
 * ```
 *
 * @selector `sh3-hero`
 */
@Component({
  selector: "sh3-hero",
  standalone: true,
  host: {
    "[class.t-sunken]": "tone() === 'sunken'",
    "[class.t-gradient]": "tone() === 'gradient'",
    "[class.t-primary]": "tone() === 'primary'",
    "[class.p-sm]": "padding() === 'sm'",
    "[class.p-md]": "padding() === 'md'",
  },
  template: `<ng-content />`,
  styles: `
    /* Defaults: neutral tone (raised card) + lg padding. isolation establishes
       a stacking context so the gradient glow (::after, z-index:-1) sits above
       the background but below the projected content, whatever its z-index. */
    :host {
      display: block;
      position: relative;
      overflow: hidden;
      isolation: isolate;
      background: var(--sh3-color-surface-card);
      border: 1px solid var(--sh3-color-border);
      border-radius: var(--sh3-radius-lg);
      padding: 20px;
    }
    :host(.p-sm) {
      padding: 10px;
    }
    :host(.p-md) {
      padding: 16px;
    }

    /* Sunken — the deep container tint, fainter hairline. */
    :host(.t-sunken) {
      background: var(--sh3-color-surface-sunken);
      border-color: var(--sh3-color-border-subtle);
    }

    /* Gradient — primary-tinted wash + primary border + a corner glow. */
    :host(.t-gradient) {
      border-color: var(--sh3-color-primary-border);
      background: linear-gradient(
        180deg,
        color-mix(
          in srgb,
          var(--sh3-color-primary) 8%,
          var(--sh3-color-surface-card)
        ),
        var(--sh3-color-surface-card)
      );
    }
    :host(.t-gradient)::after {
      content: "";
      position: absolute;
      top: -40%;
      right: -10%;
      width: 340px;
      height: 340px;
      z-index: -1;
      pointer-events: none;
      background: radial-gradient(
        circle,
        color-mix(in srgb, var(--sh3-color-primary) 22%, transparent),
        transparent 68%
      );
    }

    /* Primary — solid fill; content reads on the on-primary ink. */
    :host(.t-primary) {
      background: var(--sh3-color-primary);
      border-color: var(--sh3-color-primary);
      color: var(--sh3-color-on-primary);
    }
  `,
})
export class HeroComponent {
  /** Prominence tint — `neutral` (default) · `sunken` · `gradient` · `primary`. */
  readonly tone = input<"neutral" | "sunken" | "gradient" | "primary">(
    "neutral",
  );
  /** Inner padding — `lg` (default) · `md` · `sm`. */
  readonly padding = input<"sm" | "md" | "lg">("lg");
}
