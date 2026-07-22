import { booleanAttribute, Component, input } from "@angular/core";

/**
 * `<fold-card>` — the canonical raised content surface: a solid
 * `surface-card` background, a hairline border and a consistent radius. Use it
 * anywhere the app would otherwise hand-roll a `background + border +
 * border-radius` block, so cards never drift on colour or corner.
 *
 * - `surface` — `card` (the raised card tint, default) · `sunken` (a deeper
 *   surface for large containers, below the card — the ref's second card tint;
 *   pairs with a fainter `border-subtle` hairline).
 * - `radius` — `lg` (14px, default) · `md` · `sm`.
 * - `padding` — `md` (16px, default) · `none` · `sm` · `lg`. Sets the *body*
 *   padding; override with a custom value via `--fold-card-padding`.
 * - `interactive` — adds a hover lift (for clickable cards).
 * - `separators` — draw a hairline between a projected header/footer and the body.
 * - `raisedBands` — tint the header/footer bands a step above the surface
 *   (fainter on `sunken`).
 *
 * Content projection:
 * - default slot → the card body.
 * - `[cardHeader]` → an optional header band above the body.
 * - `[cardFooter]` → an optional footer band below the body.
 *
 * The card is a flex column of three regions: the body always owns the `padding`,
 * the header/footer carry their own (independent) chrome padding, and the host
 * never pads. So the content padding is identical whether or not the bands show —
 * toggling a header/footer never shifts the body.
 *
 * ```html
 * <fold-card>Static content</fold-card>
 * <fold-card surface="sunken" padding="lg">Deep container</fold-card>
 * <fold-card separators>
 *   <h3 cardHeader>Title</h3>
 *   Body content
 *   <div cardFooter>Actions</div>
 * </fold-card>
 * ```
 *
 * Sizing / escape hatches (CSS custom properties):
 * `--fold-card-padding` overrides the body padding; `--fold-card-overflow`
 * (default `clip`) lets content escape the rounded corners.
 *
 * @selector `fold-card`
 */
@Component({
  selector: "fold-card",
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
    "[class.raised-bands]": "raisedBands()",
  },
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.scss",
})
export class FoldCardComponent {
  /** Surface tint — `card` (raised, default) or `sunken` (deeper container). */
  readonly surface = input<"card" | "sunken">("card");
  /** Corner radius — `lg` (default), `md`, or `sm`. */
  readonly radius = input<"sm" | "md" | "lg">("lg");
  /** Body padding — `md` (default), `none`, `sm`, or `lg`; a custom value can be
   *  set with the `--fold-card-padding` CSS variable. */
  readonly padding = input<"none" | "sm" | "md" | "lg">("md");
  /** Add a hover lift for clickable cards. */
  readonly interactive = input(false);
  /** Draw a hairline between a projected header/footer and the body. */
  readonly separators = input(false, { transform: booleanAttribute });
  /** Lift the header/footer bands with a subtle raised tint over the card
   *  surface (fainter on `sunken`), to set the chrome apart from the body. */
  readonly raisedBands = input(false, { transform: booleanAttribute });
}
