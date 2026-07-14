import { Component, booleanAttribute, input } from "@angular/core";

/**
 * `<sh3-hero>` — a prominent header card. Same base as {@link Sh3CardComponent}
 * (surface + border + radius + padding); lay the content out inside however you
 * like and project it via `<ng-content>`.
 *
 * Two orthogonal axes decide the look — a **base surface** and an optional
 * decorative **accent** painted on top of it (so any base can carry any accent):
 *
 * **`surface`** — the base fill:
 * - `card` (default) — the standard raised card (`surface-card`).
 * - `sunken` — the deep container tint (`surface-sunken` + fainter border).
 * - `primary` — a solid primary fill; text flips to `on-primary`.
 *
 * **`accent`** — a transparent gradient + glow overlay:
 * - `none` (default) — no overlay.
 * - `subtle` — a faint diagonal wash toward the deep tint + a soft corner glow.
 * - `gradient` — a primary-tinted wash + primary border + a stronger corner glow.
 *
 * **`accentBar`** — orthogonal: a primary accent bar down the left edge.
 *
 * ```html
 * <sh3-hero surface="sunken" accent="subtle" accentBar>…</sh3-hero>
 * <sh3-hero accent="gradient">…</sh3-hero>
 * ```
 *
 * @selector `sh3-hero`
 */
@Component({
  selector: "sh3-hero",
  standalone: true,
  host: {
    "[class.s-sunken]": "surface() === 'sunken'",
    "[class.s-primary]": "surface() === 'primary'",
    "[class.a-subtle]": "accent() === 'subtle'",
    "[class.a-gradient]": "accent() === 'gradient'",
    "[class.has-bar]": "accentBar()",
    "[class.p-sm]": "padding() === 'sm'",
    "[class.p-md]": "padding() === 'md'",
  },
  template: `<ng-content />`,
  styles: `
    /* Defaults: card surface + lg padding. isolation establishes a stacking
       context so an accent overlay (::after, z-index:-1) sits above the base
       fill but below the projected content, whatever its z-index. */
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

    /* ── Base surface ── */
    :host(.s-sunken) {
      background: var(--sh3-color-surface-sunken);
      border-color: var(--sh3-color-border-subtle);
    }
    :host(.s-primary) {
      background: var(--sh3-color-primary);
      border-color: var(--sh3-color-primary);
      color: var(--sh3-color-on-primary);
    }

    /* ── Accent overlays (transparent, painted over the base surface) ── */
    :host(.a-subtle)::after,
    :host(.a-gradient)::after {
      content: "";
      position: absolute;
      inset: 0;
      z-index: -1;
      pointer-events: none;
    }
    /* Subtle — a faint diagonal toward the deep tint + a soft corner glow. */
    :host(.a-subtle)::after {
      background:
        radial-gradient(
          120% 140% at 100% 0%,
          color-mix(in srgb, var(--sh3-color-primary) 10%, transparent),
          transparent 45%
        ),
        linear-gradient(
          160deg,
          transparent 30%,
          color-mix(in srgb, var(--sh3-color-surface-sunken) 50%, transparent)
        );
    }
    /* Gradient — primary-tinted wash + primary border + a stronger corner glow. */
    :host(.a-gradient) {
      border-color: var(--sh3-color-primary-border);
    }
    :host(.a-gradient)::after {
      background:
        radial-gradient(
          260px circle at 90% -10%,
          color-mix(in srgb, var(--sh3-color-primary) 22%, transparent),
          transparent 68%
        ),
        linear-gradient(
          180deg,
          color-mix(in srgb, var(--sh3-color-primary) 8%, transparent),
          transparent 60%
        );
    }

    /* Accent bar — orthogonal left edge marker, composable with any surface. */
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
export class Sh3HeroComponent {
  /** Base fill — `card` (default) · `sunken` (deep tint) · `primary` (solid fill). */
  readonly surface = input<"card" | "sunken" | "primary">("card");
  /** Decorative overlay — `none` (default) · `subtle` (diagonal + glow) · `gradient` (primary wash + glow). */
  readonly accent = input<"none" | "subtle" | "gradient">("none");
  /** Inner padding — `lg` (default) · `md` · `sm`. */
  readonly padding = input<"sm" | "md" | "lg">("lg");
  /** Add a primary accent bar down the left edge (composable with any surface). */
  readonly accentBar = input(false, { transform: booleanAttribute });
}
