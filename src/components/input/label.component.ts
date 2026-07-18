import { booleanAttribute, Component, input } from "@angular/core";

/**
 * `<sh3-label>` — the label element for a form control: the text plus an optional
 * required marker. Package-internal; the input controls render it through
 * {@link Sh3InputBaseComponent}, so consumers never place it themselves. Kept
 * separate so the label + asterisk styling lives in one place (reusable later by
 * checkbox / radio groups).
 *
 * @selector `sh3-label`
 */
@Component({
  selector: "sh3-label",
  standalone: true,
  template: `<label [attr.for]="for()"
    >{{ text() }}
    @if (required()) {
      <span class="req" aria-hidden="true">*</span>
    } @else if (optional()) {
      <span class="opt">({{ optionalLabel() }})</span>
    }
  </label>`,
  styleUrl: "./label.component.scss",
})
export class Sh3LabelComponent {
  /** The label text. */
  readonly text = input.required<string>();
  /** The id of the control this labels (`<label for>`). */
  readonly for = input<string>();
  /** Show the required marker (`*`). Takes precedence over {@link optional}. */
  readonly required = input(false, { transform: booleanAttribute });
  /** Show a lighter, parenthesised optional marker after the label. */
  readonly optional = input(false, { transform: booleanAttribute });
  /** The word inside the optional marker's parentheses. @default 'optional' */
  readonly optionalLabel = input("optional");
}
