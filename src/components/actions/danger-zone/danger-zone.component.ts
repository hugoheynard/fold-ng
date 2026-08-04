import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  input,
  model,
  signal,
} from "@angular/core";
import { FoldIdService } from "../../../a11y/id.service";
import { FoldIconComponent } from "../../foundations/icon/icon.component";
import { FoldInputComponent } from "../../forms/input/input.component";

/**
 * `<fold-danger-zone>` — the framed block for a **destructive** action (delete an
 * entity, close an account). An alert-toned region with a title, a projected
 * explanation of the blast radius, and an optional **type-to-confirm** guard:
 * the user must retype an exact phrase (the entity's name / handle) before the
 * action arms. The destructive control is projected via `[actions]`, so the
 * consumer keeps full control of it — they just wire its `[disabled]` to the
 * two-way {@link armed} state.
 *
 * ```html
 * <fold-danger-zone
 *   title="Delete workspace"
 *   [confirmPhrase]="workspace.name"
 *   [(armed)]="armed"
 * >
 *   <p>This permanently deletes the workspace and everything in it. It cannot be undone.</p>
 *   <button foldButton emphasis="solid" intent="critical" actions
 *           [disabled]="!armed()" (click)="delete()">
 *     Delete workspace
 *   </button>
 * </fold-danger-zone>
 * ```
 *
 * Omit `confirmPhrase` for a framed danger region with **no** gate — `armed` is
 * then always `true`. Composes inside `fold-panel-host` / a future `fold-dialog`.
 *
 * @selector `fold-danger-zone`
 */
@Component({
  selector: "fold-danger-zone",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FoldIconComponent, FoldInputComponent],
  templateUrl: "./danger-zone.component.html",
  styleUrl: "./danger-zone.component.scss",
  host: {
    role: "group",
    "[attr.aria-labelledby]": "titleId",
  },
})
export class FoldDangerZoneComponent {
  private readonly ids = inject(FoldIdService);

  /** The region heading — also its accessible name. */
  readonly title = input.required<string>();
  /** The exact phrase the user must retype to arm the action. Omit for a framed
   *  danger region with **no** confirm gate ({@link armed} stays `true`). */
  readonly confirmPhrase = input<string>();
  /** Prompt shown above the confirm field. Defaults to a “Type “<phrase>” to
   *  confirm” sentence built from {@link confirmPhrase}. */
  readonly confirmLabel = input<string>();
  /** Placeholder in the confirm field. @default the phrase itself */
  readonly confirmPlaceholder = input<string>();
  /**
   * Two-way **armed** state — `true` when the action may fire: always `true` when
   * there is no `confirmPhrase`, otherwise `true` only while the typed text
   * exactly matches it (trimmed, case-sensitive). Bind it to the projected
   * control's `[disabled]`.
   */
  readonly armed = model<boolean>(false);

  /** Stable id the host's `aria-labelledby` points at. */
  protected readonly titleId = this.ids.next("fold-danger-zone");
  /** What the user has typed into the confirm field. */
  protected readonly typed = signal("");

  /** The confirm prompt — the consumer's `confirmLabel`, else a default built
   *  from the phrase. Empty when there is no phrase (the field is hidden). */
  protected readonly promptLabel = computed(() => {
    const phrase = this.confirmPhrase();
    if (!phrase) {
      return "";
    }
    return this.confirmLabel() ?? `Type “${phrase}” to confirm`;
  });

  constructor() {
    // Keep the two-way `armed` in sync: no phrase ⇒ always armed; otherwise the
    // trimmed typed text must exactly match the phrase.
    effect(() => {
      const phrase = this.confirmPhrase();
      this.armed.set(phrase ? this.typed().trim() === phrase : true);
    });
  }
}
