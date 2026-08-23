import { Component, input } from "@angular/core";
import { FoldIconComponent } from "../../foundations/icon/icon.component";
import type { FoldIconName } from "../../foundations/icon/builtin-icons";

/**
 * The state of one checklist item.
 * - `done` — satisfied.
 * - `todo` — not satisfied, and it matters (it blocks something).
 * - `optional` — not satisfied, and that is fine.
 */
export type FoldChecklistState = "done" | "todo" | "optional";

/** One line of a {@link FoldChecklistComponent}. */
export interface FoldChecklistItem {
  /** What is being checked, in the reader's words. */
  readonly label: string;
  readonly state: FoldChecklistState;
}

/**
 * A list of conditions and whether each is met — what is missing before a thing
 * can happen.
 *
 * The pattern's third appearance (a password field's rules, a danger zone's
 * preconditions, then a publication checklist), which is where a shape stops
 * being a coincidence.
 *
 * Every state is carried by a **glyph as well as a colour**: a green dot and an
 * amber one are the same dot in greyscale, in a forced-colors theme, and to a
 * large share of readers. The glyph is the state; the colour reinforces it.
 *
 * @selector `fold-checklist`
 *
 * @example
 * ```html
 * <fold-checklist [items]="[
 *   { label: 'Nom et famille', state: 'done' },
 *   { label: 'Poids net', state: 'todo' },
 *   { label: 'Nom EN', state: 'optional' },
 * ]" />
 * ```
 */
@Component({
  selector: "fold-checklist",
  standalone: true,
  imports: [FoldIconComponent],
  templateUrl: "./checklist.component.html",
  styleUrl: "./checklist.component.scss",
})
export class FoldChecklistComponent {
  /** The conditions, in the order they should be read. */
  readonly items = input.required<readonly FoldChecklistItem[]>();

  /**
   * Screen-reader wording per state, prefixed to the label.
   *
   * A sighted reader gets the glyph; a screen reader would otherwise hear a
   * bare list of labels with no indication of which are met. Overridable
   * because it is user-facing text, and the library ships English.
   */
  /**
   * The glyph per state — in the component, not spelled inline in the template.
   *
   * Three states, three distinct icons: this is the mapping the whole
   * colour-is-not-enough rule rests on, and a table can be read (and broken in
   * a test) where a nested ternary in a template cannot.
   */
  protected readonly glyph: Record<FoldChecklistState, FoldIconName> = {
    done: "check",
    todo: "alert",
    optional: "minus",
  };

  readonly stateLabels = input<Record<FoldChecklistState, string>>({
    done: "Done:",
    todo: "Missing:",
    optional: "Optional:",
  });
}
