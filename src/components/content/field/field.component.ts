import { booleanAttribute, Component, input } from "@angular/core";

/**
 * `<fold-field>` — one read-only label/value pair inside a
 * {@link FoldFieldListComponent}. It renders a `<dt>` (the {@link label}) and a
 * `<dd>` (the value, projected), so the pair is a real term/definition a screen
 * reader announces together.
 *
 * **This is not `fold-input`.** They are the two opposite halves of a record:
 * `fold-input` is *edit* mode — a control you focus and type into, bound to a
 * Signal Form field. `fold-field` is *read* mode — a value already known, shown
 * as text. A read-only input would still be a heavyweight control (border,
 * focus, keyboard) pretending to be static; a field is just `dt`/`dd`.
 *
 * The value is the default slot, so it takes rich content (chips, links, an
 * icon), not only a string:
 *
 * ```html
 * <fold-field label="Job title">{{ c.jobTitle }}</fold-field>
 * <fold-field label="Status"><span class="chip">Active</span></fold-field>
 * <fold-field label="End date" [empty]="!c.endDate">{{ c.endDate | date }}</fold-field>
 * ```
 *
 * Missing values are a first-class state: set {@link empty} and the field shows
 * the {@link placeholder} (`—` by default) in a muted italic instead of the
 * projected content — so the caller writes the toggle once (`[empty]="!value"`)
 * rather than repeating a `{{ value || '—' }}` fallback and a class binding at
 * every site.
 *
 * The host is `display: contents`: the `dt`/`dd` it renders become direct
 * children of the list's `<dl>` grid, which is what lets the list lay them out
 * without reaching through view encapsulation. Appearance (type scale, colour,
 * the empty style) is owned here; the grid geometry is owned by the list.
 *
 * @selector `fold-field`
 */
@Component({
  selector: "fold-field",
  standalone: true,
  templateUrl: "./field.component.html",
  styleUrl: "./field.component.scss",
})
export class FoldFieldComponent {
  /** The term — rendered as the `<dt>` label (small, uppercase, muted). */
  readonly label = input.required<string>();

  /**
   * Mark the value as absent. When `true`, the field shows {@link placeholder}
   * in a muted italic and ignores the projected content — the single source of
   * truth for "no value" so callers don't hand-roll a fallback + a class each
   * time.
   */
  readonly empty = input(false, { transform: booleanAttribute });

  /** What to show in place of an {@link empty} value. */
  readonly placeholder = input("—");
}
