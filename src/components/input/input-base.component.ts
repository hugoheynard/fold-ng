import { booleanAttribute, Component, input } from "@angular/core";
import { Sh3LabelComponent } from "./label.component";

/**
 * `<sh3-input-base>` — the shared field chrome around a form control: an optional
 * label (with required marker) above, the projected control, and an optional hint
 * below. Package-internal — each control ({@link Sh3InputComponent},
 * `sh3-number-input`, `sh3-select`) composes it in its own template and projects
 * its native element in, so the label / required / hint (and, later, error)
 * markup lives in exactly one place instead of being duplicated per control.
 *
 * The control owns its id and passes it as {@link for} so the label associates
 * with it — no cross-encapsulation wiring, because the label and the control sit
 * in the same component template.
 *
 * @selector `sh3-input-base`
 */
@Component({
  selector: "sh3-input-base",
  standalone: true,
  imports: [Sh3LabelComponent],
  templateUrl: "./input-base.component.html",
  styleUrl: "./input-base.component.scss",
})
export class Sh3InputBaseComponent {
  /** Label text; omit for no label. */
  readonly label = input<string>();
  /** Id of the projected control, for the `<label for>` association. */
  readonly for = input<string>();
  /** Show the required marker on the label. */
  readonly required = input(false, { transform: booleanAttribute });
  /** Show a lighter `(optional)` marker on the label (ignored when required). */
  readonly optional = input(false, { transform: booleanAttribute });
  /** The word inside the optional marker. @default 'optional' */
  readonly optionalLabel = input("optional");
  /** Helper text shown under the control. */
  readonly hint = input<string>();
  /** Error message shown under the control; when set, it replaces the hint. */
  readonly error = input<string>();
}
