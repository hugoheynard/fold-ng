import { booleanAttribute, Component, input } from "@angular/core";

/**
 * `<sh3-card>` — the canonical raised content surface: a solid
 * `surface-card` background, a hairline border and a consistent radius. Use it
 * anywhere the app would otherwise hand-roll a `background + border +
 * border-radius` block, so cards never drift on colour or corner.
 *
 * - `surface` — `card` (the raised card tint, default) · `sunken` (a deeper
 *   surface for large containers, below the card — the ref's second card tint;
 *   pairs with a fainter `border-subtle` hairline).
 * - `radius` — `lg` (14px, default) · `md` · `sm`.
 * - `padding` — `md` (16px, default) · `none` · `sm` · `lg`.
 * - `interactive` — adds a hover lift (for clickable cards).
 * - `separators` — draw a hairline between a projected header/footer and the body.
 *
 * Content projection:
 * - default slot → the card body.
 * - `[cardHeader]` → an optional header band above the body.
 * - `[cardFooter]` → an optional footer band below the body.
 *
 * When a header or footer is projected the padding moves onto each band so a
 * `separators` divider spans the full width; a plain body-only card is unchanged.
 *
 * ```html
 * <sh3-card>Static content</sh3-card>
 * <sh3-card surface="sunken" padding="lg">Deep container</sh3-card>
 * <sh3-card separators>
 *   <h3 cardHeader>Title</h3>
 *   Body content
 *   <div cardFooter>Actions</div>
 * </sh3-card>
 * ```
 *
 * @selector `sh3-card`
 */
@Component({
  selector: "sh3-card",
  standalone: true,
  host: {
    "[class.s-sunken]": "surface() === 'sunken'",
    "[class.r-sm]": "radius() === 'sm'",
    "[class.r-md]": "radius() === 'md'",
    "[class.p-none]": "padding() === 'none'",
    "[class.p-sm]": "padding() === 'sm'",
    "[class.p-lg]": "padding() === 'lg'",
    "[class.is-interactive]": "interactive()",
    "[class.has-sep]": "separators()",
  },
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.scss",
})
export class Sh3CardComponent {
  /** Surface tint — `card` (raised, default) or `sunken` (deeper container). */
  readonly surface = input<"card" | "sunken">("card");
  /** Corner radius — `lg` (default), `md`, or `sm`. */
  readonly radius = input<"sm" | "md" | "lg">("lg");
  /** Inner padding — `md` (default), `none`, `sm`, or `lg`. */
  readonly padding = input<"none" | "sm" | "md" | "lg">("md");
  /** Add a hover lift for clickable cards. */
  readonly interactive = input(false);
  /** Draw a hairline between a projected header/footer and the body. */
  readonly separators = input(false, { transform: booleanAttribute });
}
