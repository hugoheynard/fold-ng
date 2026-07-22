import { Directive, input } from "@angular/core";

/**
 * A named surface — the ground a subtree paints itself on. `page` is the
 * document body; `chrome` is application furniture (rails, header) that a
 * theme may colour differently from the page.
 */
export type Sh3SurfaceName = "page" | "chrome";

/**
 * `[sh3Surface]` — declares the element a **named surface**, so a theme can
 * re-colour it without knowing anything about the component it lives in.
 *
 * It exists to let one theme mean two things by "the same" role. A uniform
 * theme (umbra, light) needs none of this — `text` is one colour everywhere.
 * But a theme that mixes a **light page with dark chrome** (navi) needs `text`,
 * `surface` and the brand to differ *per region*, which a single set of roles
 * cannot express. The surface is the seam a theme overrides across:
 *
 * ```css
 * [data-theme="navi"] [data-surface="chrome"] {
 *   --sh3-color-text: var(--sh3-ref-slate-50); / * light text on the dark rail * /
 * }
 * ```
 *
 * The directive only stamps `data-surface`; the theme owns the colours. Two
 * rules make it work, both in the token layer, neither in a component:
 * - `[data-surface] { color: var(--sh3-color-text); }` — every surface resolves
 *   its own text, so a per-surface override actually lands (a custom-property
 *   override reaches only properties *resolved inside* the subtree, never a
 *   colour already inherited from an ancestor).
 * - a theme adds `[data-theme="…"] [data-surface="chrome"] { … }` for the
 *   surfaces it wants to diverge on.
 *
 * This replaces reaching into `sh3-app-shell`'s internal class names from the
 * theme file — a coupling that pointed the wrong way (a renamed rail class
 * would have broken a theme silently). Any element can now be a chrome surface:
 * a shell rail, a dark hero on a light page, a footer, a preview pane.
 *
 * @selector `[sh3Surface]`
 *
 * @example
 * ```html
 * <aside sh3Surface="chrome">…dark furniture on a light page…</aside>
 * ```
 */
@Directive({
  selector: "[sh3Surface]",
  standalone: true,
  host: { "[attr.data-surface]": "sh3Surface()" },
})
export class Sh3SurfaceDirective {
  /** The surface this element is. Defaults to `page`, including a bare
   *  `sh3Surface` attribute (which the template binds as an empty string). */
  readonly sh3Surface = input<Sh3SurfaceName, Sh3SurfaceName | "">("page", {
    transform: (value) => (value === "" ? "page" : value),
  });
}
