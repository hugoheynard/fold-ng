import {
  booleanAttribute,
  Component,
  computed,
  inject,
  input,
} from "@angular/core";
import { FoldIdService } from "../../../a11y/id.service";

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
 * Which register the legend wears — the same two words `fold-page-section`
 * uses for its title, and deliberately so: a reader meets one vocabulary for
 * "small and above the thing" versus "reads as prose", not one per component.
 *
 * - `eyebrow` — small, uppercase, tracked, muted. The group is a **part of a
 *   form**, and its name should sit above the controls without competing with
 *   them.
 * - `heading` — plain, at the size of a field's own label. The group **is** one
 *   thing in the form's eyes ("Créneaux de livraison"), so its name reads at
 *   the same weight as the labels around it.
 */
export type FoldFieldsetLegendVariant = "eyebrow" | "heading";

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
 * answer one question.
 *
 * ## What the native element buys, and what this keeps
 *
 * - The **legend names the group**: assistive tech announces it with each
 *   control inside, so "Gluten" is heard as "Allergens, Gluten". A heading over
 *   a `<div>` looks identical and announces nothing — that is the whole reason
 *   to reach for a fieldset.
 * - {@link disabled} is the element's **unique superpower**: a disabled
 *   `<fieldset>` disables *every* control it contains, in one attribute, with
 *   no per-control wiring. Nothing else in HTML does this. (Per spec the first
 *   `<legend>` is exempt — controls inside it stay live.)
 * - {@link hint} is wired through `aria-describedby`, so the group's
 *   instruction ("pick at least one") is read out rather than merely printed.
 * - {@link ariaLabel} names a group that must not show a visible legend. A
 *   group with **neither** is deliberately allowed and deliberately silent:
 *   that is the nested case, where the parent already named it.
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
 * <fold-fieldset
 *   legend="Créneaux"
 *   hint="Au moins un jour"
 *   [disabled]="!enabled()"
 * >…</fold-fieldset>
 * ```
 */
@Component({
  selector: "fold-fieldset",
  standalone: true,
  templateUrl: "./fieldset.component.html",
  styleUrl: "./fieldset.component.scss",
})
export class FoldFieldsetComponent {
  private readonly ids = inject(FoldIdService);

  /**
   * The group's name, rendered as its `<legend>`.
   *
   * Empty renders **no** `<legend>` at all — an empty one is worse than none,
   * it hands a screen reader a group with a blank name.
   */
  readonly legend = input("");

  /**
   * The group's name when it must not be shown.
   *
   * Ignored when {@link legend} is set: two names for one group is how they
   * drift apart. Reach for it when a visible heading outside the group already
   * says it, and repeating it would read twice.
   */
  readonly ariaLabel = input("");

  /**
   * An instruction for the group as a whole — « pick at least one », « optional ».
   *
   * Rendered under the legend AND pointed at by `aria-describedby`, so it is
   * heard and not only seen. A hint that is only painted is a hint that half
   * the readers never get.
   */
  readonly hint = input("");

  /**
   * Disables **every control inside the group** — the native element's unique
   * capability, and the reason to prefer it over a `div` even when the grouping
   * is purely visual.
   */
  readonly disabled = input(false, { transform: booleanAttribute });

  /**
   * Which register the legend wears. @default 'eyebrow'
   *
   * Both exist in real forms and they say different things — see
   * {@link FoldFieldsetLegendVariant}. Getting this wrong is not a cosmetic
   * miss: an eyebrow over a group that is really one field makes the form look
   * like it has more sections than it has questions.
   */
  readonly legendVariant = input<FoldFieldsetLegendVariant>("eyebrow");

  /** How the members flow. @default 'vertical' */
  readonly direction = input<FoldFieldsetDirection>("vertical");

  /** Whether the group draws its boundary. @default 'plain' */
  readonly appearance = input<FoldFieldsetAppearance>("plain");

  /** Unique, SSR-safe id for the hint (see {@link FoldIdService}). */
  protected readonly hintId = this.ids.next("fold-fieldset-hint");

  /** `aria-describedby` target — the hint when there is one, else nothing. */
  protected readonly describedBy = computed(() =>
    this.hint() === "" ? null : this.hintId,
  );

  /**
   * The accessible name to set when no `<legend>` is rendered.
   *
   * `null` rather than `""` so the attribute is **absent**: an empty
   * `aria-label` on a group is a group that claims a name and gives none.
   */
  protected readonly label = computed(() =>
    this.legend() !== "" || this.ariaLabel() === "" ? null : this.ariaLabel(),
  );
}
