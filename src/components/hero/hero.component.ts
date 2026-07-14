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
  templateUrl: "./hero.component.html",
  styleUrl: "./hero.component.scss",
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
