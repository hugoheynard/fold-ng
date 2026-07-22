import { Directive, inject } from "@angular/core";
import { FoldIdService } from "./id.service";

/**
 * Auto-assigns a unique, SSR-safe `id` to any native form control (`<input>`,
 * `<select>`, `<textarea>`) that has neither an `id` nor a `name`.
 *
 * You don't write `foldFieldId` on elements — the directive **auto-applies** by
 * selector. Add it to a component's `imports` once and every unidentified native
 * control in that component's template is fixed in one go, with no per-element
 * edit. It silences the browser's *"A form field element should have an id or
 * name attribute"* warning (autofill + accessibility), and the id it sets can be
 * targeted by a `<label for>`.
 *
 * The selector matches only controls missing **both** `id` and `name` — static
 * or bound (`[id]`/`[attr.id]`/`[name]` all count as present) — so it never
 * fights a control you've already identified. Components that render their own
 * labelled control ({@link FoldInputComponent}, `fold-select`) own their id
 * explicitly and are unaffected.
 */
@Directive({
  selector:
    "input:not([id]):not([name]),select:not([id]):not([name]),textarea:not([id]):not([name])",
  standalone: true,
  host: { "[id]": "autoId" },
})
export class FoldFieldIdDirective {
  /** Assigned once at construction, in deterministic render order (SSR-safe). */
  protected readonly autoId = inject(FoldIdService).next("fold-field");
}
