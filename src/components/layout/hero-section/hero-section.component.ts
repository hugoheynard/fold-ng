import { Component, booleanAttribute, input } from "@angular/core";

/**
 * `<fold-hero-section>` — a full-bleed **page splash**: the borderless intro
 * band at the top of a page (wordmark, title, lede, call-to-action). Unlike
 * {@link FoldHeroCardComponent} (a bordered card you drop anywhere), this is a
 * layout primitive — it breaks the page gutter to span edge-to-edge and carries
 * the page's `<h1>`.
 *
 * Meant as a **direct child of `fold-page-layout`**: it cancels exactly the
 * gutter + top padding the layout applies (the same `--fold-page-gutter` /
 * `--fold-page-pad-top` tokens), so the band sits flush to the edges. A soft
 * brand-tinted wash reads it as the hero, closed by a hairline at the bottom.
 *
 * Two content lanes:
 * - default slot — the centred column (eyebrow · title · lede · actions).
 * - `[heroBackdrop]` — decorative layer painted *behind* the content
 *   (a watermark, a glow); rendered `aria-hidden`, so keep it purely visual.
 *
 * ```html
 * <fold-hero-section>
 *   <span heroBackdrop class="watermark">v1</span>
 *   <fold-badge content="Angular 22" />
 *   <h1>Fold</h1>
 *   <p>A signals-first design system.</p>
 * </fold-hero-section>
 * ```
 *
 * @selector `fold-hero-section`
 */
@Component({
  selector: "fold-hero-section",
  standalone: true,
  host: {
    "[class.align-start]": "align() === 'start'",
    "[class.no-wash]": "!wash()",
  },
  templateUrl: "./hero-section.component.html",
  styleUrl: "./hero-section.component.scss",
})
export class FoldHeroSectionComponent {
  /** Column alignment — `center` (default) · `start` (left-aligned). */
  readonly align = input<"center" | "start">("center");
  /** Paint the brand-tinted gradient wash (default). Set `false` for a plain surface band. */
  readonly wash = input(true, { transform: booleanAttribute });
}
