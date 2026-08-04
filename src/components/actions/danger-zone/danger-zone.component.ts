import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  output,
} from "@angular/core";
import { FoldIdService } from "../../../a11y/id.service";
import { FoldIconComponent } from "../../foundations/icon/icon.component";
import { FoldButtonComponent } from "../button/button.component";
import type { FoldButtonIntent } from "../button/button.types";
import { FoldInlineConfirmComponent } from "../inline-confirm/inline-confirm.component";

/**
 * `<fold-danger-zone>` — the framed region for **destructive** actions on a
 * settings page (delete an entity, close an account). A title, a projected
 * explanation, and an optional guarded action.
 *
 * **Two appearances:**
 * - `filled` (default) — the whole block is alert-tinted; a compact "delete X"
 *   region (e.g. at the foot of a panel).
 * - `section` — a **danger *section***: an alert-bordered card with a
 *   **normal-background body**, so it can host ordinary content (rows,
 *   descriptions, forms) with only the frame + heading signalling danger — the
 *   GitHub "Danger Zone" look.
 *
 * **The confirm reveals on click.** The destructive control is a projected-free
 * `actionLabel` button; activating it opens an in-place {@link
 * FoldInlineConfirmComponent} — a simple "are you sure?", or (with
 * `confirmPhrase`) a type-to-confirm field that must be retyped before the action
 * arms. The input is never shown until the button is clicked. `(confirmed)` fires
 * with the typed text (or `""`). Omit `actionLabel` for a framed danger section
 * with no action of its own.
 *
 * ```html
 * <fold-danger-zone
 *   appearance="section"
 *   title="Delete workspace"
 *   actionLabel="Delete workspace"
 *   [confirmPhrase]="workspace.name"
 *   (confirmed)="delete()"
 * >
 *   <p>This permanently deletes the workspace and everything in it. It cannot be undone.</p>
 * </fold-danger-zone>
 * ```
 *
 * @selector `fold-danger-zone`
 */
@Component({
  selector: "fold-danger-zone",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FoldIconComponent, FoldButtonComponent, FoldInlineConfirmComponent],
  templateUrl: "./danger-zone.component.html",
  styleUrl: "./danger-zone.component.scss",
  host: {
    role: "group",
    "[attr.data-appearance]": "appearance()",
    "[attr.aria-labelledby]": "titleId",
  },
})
export class FoldDangerZoneComponent {
  private readonly ids = inject(FoldIdService);

  /** The region heading — also its accessible name. */
  readonly title = input.required<string>();
  /**
   * `filled` (alert-tinted block) or `section` (alert-bordered card with a
   * normal-background body — the danger *section*). @default 'filled'
   */
  readonly appearance = input<"filled" | "section">("filled");
  /** The destructive button's label. Omit for a framed danger section with no
   *  action of its own. */
  readonly actionLabel = input<string>();
  /** The exact phrase the user must retype to arm the action (type-to-confirm).
   *  Omit for a plain "are you sure?" reveal. */
  readonly confirmPhrase = input<string>();
  /** An optional warning shown above the confirm row when the action opens. */
  readonly message = input<string>();
  /** Colour of the destructive button. @default 'danger' */
  readonly intent = input<FoldButtonIntent>("danger");

  /** Fires when the user confirms — carries the typed phrase (or `""`). */
  readonly confirmed = output<string>();

  /** Stable id the host's `aria-labelledby` points at. */
  protected readonly titleId = this.ids.next("fold-danger-zone");
}
