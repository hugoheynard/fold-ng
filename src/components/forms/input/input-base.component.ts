import { booleanAttribute, Component, input } from "@angular/core";
import { FoldInfoComponent } from "../../overlays/info/info.component";
import { FoldLabelComponent } from "./label.component";

/**
 * `<fold-input-base>` — the shared field chrome around a form control: an optional
 * label (with required marker) above, the projected control, and an optional hint
 * below. Package-internal — each control ({@link FoldInputComponent},
 * `fold-number-input`, `fold-select`) composes it in its own template and projects
 * its native element in, so the label / required / hint (and, later, error)
 * markup lives in exactly one place instead of being duplicated per control.
 *
 * The control owns its id and passes it as {@link for} so the label associates
 * with it — no cross-encapsulation wiring, because the label and the control sit
 * in the same component template.
 *
 * **{@link hint} vs {@link info}.** A hint is one line the reader should see
 * without asking — a format, a unit, a constraint. An explanation that takes a
 * sentence or two doesn't belong under every field: it pushes the next control
 * down and gets skipped anyway. That's {@link info} — an `i` at the end of the
 * label line, revealing the text in a popover. The two compose: keep the hint
 * short, put the *why* behind the `i`. That `i` is {@link FoldInfoComponent}, a
 * primitive of its own, so the same affordance is available where there is no
 * field at all — a dashboard card's corner, a table header.
 *
 * @selector `fold-input-base`
 */
@Component({
  selector: "fold-input-base",
  standalone: true,
  imports: [FoldLabelComponent, FoldInfoComponent],
  templateUrl: "./input-base.component.html",
  styleUrl: "./input-base.component.scss",
})
export class FoldInputBaseComponent {
  /** Label text; omit for no label. */
  readonly label = input<string>();
  /** Id of the projected control, for the `<label for>` association. */
  readonly for = input<string>();
  /** Show the required marker on the label. */
  readonly required = input(false, { transform: booleanAttribute });
  /** Show a lighter `(optional)` marker on the label (ignored when required). */
  readonly optional = input(false, { transform: booleanAttribute });
  /** The word inside the optional marker. @default 'optional' */
  readonly optionalLabel = input<string | undefined>();
  /** Helper text shown under the control. */
  readonly hint = input<string>();
  /** Error message shown under the control; when set, it replaces the hint. */
  readonly error = input<string>();
  /**
   * Longer explanation, revealed by an `i` button at the end of the label line.
   * For the sentence or two a {@link hint} can't carry — what the setting really
   * changes, why a format is required. Needs a {@link label} to sit next to.
   */
  readonly info = input<string>();
  /** Accessible name of the info button. @default 'More information' */
  readonly infoLabel = input<string | undefined>();
}
