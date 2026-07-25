import { booleanAttribute, Component, input, output } from "@angular/core";

/** Which band(s) carry a chrome treatment (a separator hairline or a raised
 *  tint): neither, just the header, just the footer, or both. */
export type FoldCardBandChrome = "none" | "header" | "footer" | "both";

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
 * - `interactive` — makes the whole card a clickable control (see below).
 * - `separators` — which bands get a hairline against the body:
 *   `none` (default) · `header` · `footer` · `both`.
 * - `raisedBands` — which bands are tinted a step above the surface (fainter on
 *   `sunken`): `none` (default) · `header` · `footer` · `both`.
 *
 * `separators` and `raisedBands` are per-band and independent axes, so a card can
 * have (say) a raised, un-separated header over a flush footer.
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
 * **Interactive cards.** `interactive` turns the whole card into a real control:
 * the host gains `role="button"`, `tabindex="0"`, a focus ring and a hover lift,
 * and Enter / Space (or a click) emit `(activated)`. Give it an accessible name
 * with `ariaLabel` when the card's text isn't a sufficient label.
 * A `role="button"` must not wrap other interactive controls — so an interactive
 * card must NOT contain buttons/links. For a card with its own inner actions,
 * keep it non-interactive and put a single primary `<a>`/`<button>` inside.
 *
 * ```html
 * <fold-card>Static content</fold-card>
 * <fold-card surface="sunken" padding="lg">Deep container</fold-card>
 * <fold-card separators="both">
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
 *
 * @example
 * ```html
 * <fold-card interactive ariaLabel="Open Acme Records" (activated)="open()">
 *   <h3>Acme Records</h3>
 *   <p>128 contracts · 96 active</p>
 * </fold-card>
 * ```
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
    "[class.sep-header]": "hasBand(separators(), 'header')",
    "[class.sep-footer]": "hasBand(separators(), 'footer')",
    "[class.raise-header]": "hasBand(raisedBands(), 'header')",
    "[class.raise-footer]": "hasBand(raisedBands(), 'footer')",
    "[attr.role]": "interactive() ? 'button' : null",
    "[attr.tabindex]": "interactive() ? 0 : null",
    "[attr.aria-label]": "interactive() ? (ariaLabel() ?? null) : null",
    "(click)": "onActivate($event)",
    "(keydown)": "onKeydown($event)",
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
  /** Make the whole card a clickable control: `role="button"` + `tabindex`, a
   *  focus ring, a hover lift, and Enter/Space/click → `(activated)`. Must not
   *  wrap other interactive controls (see the class docs). */
  readonly interactive = input(false, { transform: booleanAttribute });
  /** Accessible name for the interactive card, when its content isn't enough. */
  readonly ariaLabel = input<string>();
  /** Which bands get a hairline against the body — `none` (default), `header`,
   *  `footer`, or `both`. */
  readonly separators = input<FoldCardBandChrome>("none");
  /** Which bands are lifted with a subtle raised tint over the card surface
   *  (fainter on `sunken`) — `none` (default), `header`, `footer`, or `both`. */
  readonly raisedBands = input<FoldCardBandChrome>("none");

  /** Fires when an `interactive` card is activated (click, Enter, or Space). */
  readonly activated = output<Event>();

  /** Whether a per-band chrome value applies to the given band. */
  protected hasBand(
    value: FoldCardBandChrome,
    band: "header" | "footer",
  ): boolean {
    return value === band || value === "both";
  }

  protected onActivate(event: Event): void {
    if (this.interactive()) {
      this.activated.emit(event);
    }
  }

  /** Enter/Space activate the card, matching the native button keyboard contract
   *  (Space is prevented from scrolling the page). */
  protected onKeydown(event: KeyboardEvent): void {
    if (!this.interactive() || (event.key !== "Enter" && event.key !== " ")) {
      return;
    }
    event.preventDefault();
    this.activated.emit(event);
  }
}
