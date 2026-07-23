import { Component, booleanAttribute, input } from "@angular/core";

/**
 * `<fold-hero-card>` — a prominent header **card** (bordered surface). Same base
 * as {@link FoldCardComponent} (surface + border + radius + padding); lay the
 * content out inside however you like and project it via `<ng-content>`. For a
 * full-bleed, borderless page splash use `<fold-hero-section>` instead.
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
 * <fold-hero-card surface="sunken" accent="subtle" accentBar>…</fold-hero-card>
 * <fold-hero-card accent="gradient">…</fold-hero-card>
 * ```
 *
 * @selector `fold-hero-card`
 */
@Component({
  selector: "fold-hero-card",
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
  templateUrl: "./hero-card.component.html",
  styleUrl: "./hero-card.component.scss",
})
export class FoldHeroCardComponent {
  /** Base fill — `card` (default) · `sunken` (deep tint) · `primary` (solid fill). */
  readonly surface = input<"card" | "sunken" | "primary">("card");
  /** Decorative overlay — `none` (default) · `subtle` (diagonal + glow) · `gradient` (primary wash + glow). */
  readonly accent = input<"none" | "subtle" | "gradient">("none");
  /** Inner padding — `lg` (default) · `md` · `sm`. */
  readonly padding = input<"sm" | "md" | "lg">("lg");
  /** Add a primary accent bar down the left edge (composable with any surface). */
  readonly accentBar = input(false, { transform: booleanAttribute });
}
