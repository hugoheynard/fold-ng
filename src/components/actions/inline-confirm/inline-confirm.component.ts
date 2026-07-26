import {
  afterRenderEffect,
  booleanAttribute,
  Component,
  computed,
  ElementRef,
  inject,
  input,
  output,
  signal,
  viewChild,
} from "@angular/core";
import { FoldButtonComponent } from "../button/button.component";
import type { FoldButtonIntent, FoldButtonSize } from "../button/button.types";
import { FoldButtonIconComponent } from "../button-icon/button-icon.component";
import { FoldInputComponent } from "../../forms/input/input.component";
import { FoldIdService } from "../../../a11y/id.service";
import {
  FOLD_INLINE_CONFIRM_LABELS,
  type FoldInlineConfirmLabels,
} from "./inline-confirm-labels";

/**
 * `<fold-inline-confirm>` — an in-place "are you sure?" affordance. The host
 * projects a **trigger** (a real, focusable control — a `foldButton`, a
 * `fold-button-icon`); on activation the trigger is replaced *in the same slot*
 * by a confirm/cancel row, so a destructive action is guarded without a modal
 * and without the layout jumping. Emits `confirmed` / `cancelled`.
 *
 * Two families, chosen by input:
 *
 * - **Simple** (default) — trigger → `Confirm` · `Cancel`. `confirmed` emits `""`.
 * - **Type-to-confirm** — set `match`: the confirm button stays disabled until
 *   the user types the value (case-insensitive, trimmed). `confirmed` emits the
 *   typed text.
 * - **Secret** — set `password` (no `match`): a masked field that confirms once
 *   non-empty. `confirmed` emits the secret, so a handler can post it to the
 *   server (which is the only place a password can actually be checked).
 *
 * `Escape` cancels; `Enter` in the field confirms when valid. Opening moves
 * focus to the field (typed families) or the confirm button (simple), and
 * cancelling returns focus to the trigger.
 *
 * @selector `fold-inline-confirm`
 *
 * @example
 * ```html
 * <!-- simple -->
 * <fold-inline-confirm (confirmed)="remove()">
 *   <fold-button-icon icon="trash" tooltip="Delete" />
 * </fold-inline-confirm>
 *
 * <!-- type-to-confirm -->
 * <fold-inline-confirm [match]="node.name" (confirmed)="archive()">
 *   <button foldButton emphasis="outline" intent="danger">Delete node</button>
 * </fold-inline-confirm>
 *
 * <!-- password-gated -->
 * <fold-inline-confirm password (confirmed)="deleteAccount($event)">
 *   <button foldButton intent="danger">Delete account</button>
 * </fold-inline-confirm>
 * ```
 */
@Component({
  selector: "fold-inline-confirm",
  standalone: true,
  imports: [FoldButtonComponent, FoldButtonIconComponent, FoldInputComponent],
  templateUrl: "./inline-confirm.component.html",
  styleUrl: "./inline-confirm.component.scss",
  host: { "[class.is-open]": "open()" },
})
export class FoldInlineConfirmComponent {
  private readonly defaults = inject(FOLD_INLINE_CONFIRM_LABELS);

  /** Intent (colour) of the confirm button. @default "danger" */
  readonly intent = input<FoldButtonIntent>("danger");
  /** Optional warning shown above the confirm row. */
  readonly message = input<string>();
  /**
   * The exact text the user must type to confirm (type-to-confirm family).
   * Empty → the simple family. Matching is case-insensitive + trimmed.
   */
  readonly match = input<string>("");
  /**
   * Mask the field and confirm on any non-empty value (secret family). A
   * password can't be verified in the browser, so this only *collects* it —
   * `confirmed` emits it for the handler to send to the server. Ignored when
   * `match` is set.
   */
  readonly password = input(false, { transform: booleanAttribute });
  /** Placeholder for the typed / secret field. */
  readonly placeholder = input<string>();
  /** Pending state — disables the buttons and shows the `busy` label. */
  readonly loading = input(false, { transform: booleanAttribute });
  /** Control density. @default "sm" */
  readonly size = input<FoldButtonSize>("sm");
  /** Show an icon-only `×` cancel instead of a labelled button (simple family). */
  readonly cancelIcon = input(false, { transform: booleanAttribute });
  /** Per-instance label overrides, merged over the app-wide + English defaults. */
  readonly labels = input<Partial<FoldInlineConfirmLabels>>();

  /** Emitted when the user confirms — carries the typed text (or `""`). */
  readonly confirmed = output<string>();
  /** Emitted when the user cancels (button, `Escape`, or blur-away is not auto). */
  readonly cancelled = output();

  /** Whether the confirm affordance (vs. the trigger) is showing. */
  readonly open = signal(false);
  /** The text currently typed in the field. */
  protected readonly typed = signal("");

  private readonly triggerEl =
    viewChild<ElementRef<HTMLElement>>("triggerWrap");
  private readonly groupEl = viewChild<ElementRef<HTMLElement>>("groupEl");

  /** SSR-safe id tying the message to the confirm group. */
  protected readonly msgId = inject(FoldIdService).next("fold-inline-confirm");

  /** Effective labels: English defaults ← app-wide provider ← per-instance input. */
  protected readonly l = computed<FoldInlineConfirmLabels>(() => ({
    ...this.defaults,
    ...this.labels(),
  }));

  /** True when a value must be typed before confirming. */
  protected readonly needsInput = computed(
    () => this.match().length > 0 || this.password(),
  );

  /** Whether the typed value satisfies the gate (match, or non-empty secret). */
  protected readonly inputValid = computed<boolean>(() => {
    const m = this.match().trim();
    if (m.length > 0) {
      return this.typed().trim().toLowerCase() === m.toLowerCase();
    }
    if (this.password()) {
      return this.typed().length > 0;
    }
    return true;
  });

  /** The confirm button is live once the gate is satisfied and nothing pends. */
  protected readonly canConfirm = computed(
    () => this.inputValid() && !this.loading(),
  );

  protected readonly fieldType = computed<"text" | "password">(() =>
    this.password() && this.match().length === 0 ? "password" : "text",
  );

  /** Prompt above a typed field: the match sentence, or the secret label. */
  protected readonly prompt = computed<string>(() => {
    const m = this.match().trim();
    return m.length > 0 ? this.l().typePrompt(m) : this.l().secret;
  });

  constructor() {
    // Move focus into the affordance when it opens: the field for a typed
    // family, else the confirm button. Runs after render so the target exists.
    afterRenderEffect(() => {
      if (!this.open()) {
        return;
      }
      const root = this.groupEl()?.nativeElement;
      if (!root) {
        return;
      }
      const target = this.needsInput()
        ? root.querySelector<HTMLElement>("input")
        : root.querySelector<HTMLElement>("button");
      target?.focus();
    });
  }

  /** Start the confirm flow (called by the projected trigger's click). */
  protected activate(): void {
    this.typed.set("");
    this.open.set(true);
  }

  /** Complete the confirmation, emitting the typed value (or `""`). */
  protected confirm(): void {
    if (!this.canConfirm()) {
      return;
    }
    const value = this.typed();
    this.open.set(false);
    this.typed.set("");
    this.confirmed.emit(value);
  }

  /** Abort and restore the trigger, returning focus to it. */
  protected cancel(): void {
    this.open.set(false);
    this.typed.set("");
    this.cancelled.emit();
    this.triggerEl()
      ?.nativeElement.querySelector<HTMLElement>("button, a")
      ?.focus();
  }
}
