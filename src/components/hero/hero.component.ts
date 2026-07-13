import { Component, booleanAttribute, input } from "@angular/core";

/**
 * `<sh3-hero>` — a prominent header card. Same base as {@link CardComponent}
 * (surface + border + radius + padding), with a `tone` that scales prominence
 * from quiet to loud. Lay out the content inside however you like (the hero is
 * just the surface); project it via `<ng-content>`.
 *
 * **`tone`** (low → high prominence):
 * - `sunken` — the deep container tint (`surface-sunken` + fainter border).
 * - `neutral` (default) — the standard raised card.
 * - `subtle` — a quiet accent hero: a `surface-card` → `surface-sunken`
 *   diagonal gradient + a faint corner glow.
 * - `gradient` — a primary-tinted gradient + primary border + a soft radial
 *   glow (the "billing plan" look).
 * - `primary` — a solid primary fill; text flips to `on-primary`.
 *
 * **`accentBar`** — orthogonal: adds a primary accent bar down the left edge
 * (a "featured" marker), composable with any tone.
 *
 * ```html
 * <sh3-hero tone="gradient">
 *   <div class="left">…</div>
 *   <div class="right">…</div>
 * </sh3-hero>
 *
 * <sh3-hero tone="subtle" accentBar>…</sh3-hero>
 * ```
 *
 * @selector `sh3-hero`
 */
@Component({
  selector: "sh3-hero",
  standalone: true,
  host: {
    "[class.t-sunken]": "tone() === 'sunken'",
    "[class.t-subtle]": "tone() === 'subtle'",
    "[class.t-gradient]": "tone() === 'gradient'",
    "[class.t-primary]": "tone() === 'primary'",
    "[class.has-bar]": "accentBar()",
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

    /* Subtle — a quiet accent hero: card→sunken diagonal + a faint glow. */
    :host(.t-subtle) {
      background: linear-gradient(
        160deg,
        var(--sh3-color-surface-card),
        var(--sh3-color-surface-sunken)
      );
    }
    :host(.t-subtle)::after {
      content: "";
      position: absolute;
      inset: 0;
      z-index: -1;
      pointer-events: none;
      background: radial-gradient(
        120% 140% at 100% 0%,
        color-mix(in srgb, var(--sh3-color-primary) 10%, transparent),
        transparent 45%
      );
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

    /* Accent bar — orthogonal left edge marker, composable with any tone. */
    :host(.has-bar)::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 3px;
      background: linear-gradient(
        var(--sh3-color-primary),
        color-mix(in srgb, var(--sh3-color-primary) 30%, transparent)
      );
    }
  `,
})
export class HeroComponent {
  /** Prominence tint — `neutral` (default) · `sunken` · `subtle` · `gradient` · `primary`. */
  readonly tone = input<
    "neutral" | "sunken" | "subtle" | "gradient" | "primary"
  >("neutral");
  /** Inner padding — `lg` (default) · `md` · `sm`. */
  readonly padding = input<"sm" | "md" | "lg">("lg");
  /** Add a primary accent bar down the left edge (composable with any tone). */
  readonly accentBar = input(false, { transform: booleanAttribute });
}
