import { Component, input } from "@angular/core";

/** How the group's members are laid out. */
export type FoldFieldsetDirection = "vertical" | "horizontal";

/**
 * Whether the group draws its own boundary.
 * - `plain` — spacing only; the legend and the whitespace do the grouping.
 * - `border` — a boxed group, for a set that sits among peers and has to be
 *   told apart from them at a glance.
 */
export type FoldFieldsetAppearance = "plain" | "border";

/**
 * A named group of form controls — the `<fieldset>` / `<legend>` pair, with its
 * browser styling neutralised and its rhythm on the token scale.
 *
 * **Why it exists.** The native pair is unusable as shipped: every consumer
 * writes the same six lines to undo it (`margin: 0; padding: 0; border: 0`,
 * then flex + gap, then `legend { padding: 0 }`). That reset appeared five
 * times across two apps, character for character, before this component was
 * written. Repetition that exact is not a coincidence — it is a missing
 * component.
 *
 * **Not a card, and not a section.** `fold-card` is a surface, `fold-page-section`
 * is a chapter of a page; this is the *accessible grouping* of controls that
 * answer one question. The `<legend>` names the group to a screen reader, which
 * is the whole reason to reach for a fieldset instead of a `div` — a heading
 * would look identical and announce nothing.
 *
 * `--fold-fieldset-gap` themes the space between members (default
 * `--fold-space-sm`).
 *
 * @selector `fold-fieldset`
 *
 * @example
 * ```html
 * <fold-fieldset legend="Allergènes" appearance="border">
 *   <fold-checkbox label="Gluten" />
 *   <fold-checkbox label="Fruits à coque" />
 * </fold-fieldset>
 *
 * <fold-fieldset legend="Créneaux" direction="horizontal">…</fold-fieldset>
 * ```
 */
@Component({
  selector: "fold-fieldset",
  standalone: true,
  templateUrl: "./fieldset.component.html",
  styleUrl: "./fieldset.component.scss",
})
export class FoldFieldsetComponent {
  /**
   * The group's name, rendered as its `<legend>`.
   *
   * Optional, and empty by default, because a fieldset nested inside another
   * already-named group would otherwise announce a second, redundant name. When
   * it is empty no `<legend>` is rendered at all — an empty one is worse than
   * none, it gives a screen reader a group with a blank name.
   */
  readonly legend = input("");

  /** How the members flow. @default 'vertical' */
  readonly direction = input<FoldFieldsetDirection>("vertical");

  /** Whether the group draws its boundary. @default 'plain' */
  readonly appearance = input<FoldFieldsetAppearance>("plain");
}
