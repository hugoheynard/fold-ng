import { Service, inject, signal } from "@angular/core";
import { FoldIdService } from "../../../a11y/id.service";
import { FOLD_TOAST_CONFIG, resolveToastDuration } from "./toast.config";
import type { FoldToast, FoldToastVariant } from "./toast.types";

/**
 * Lightweight toast/snackbar service — the source of truth for the queue that
 * `fold-toast-container` renders. Fire-and-forget: `durationMs` rides on the
 * queued toast and the rendered `fold-toast` owns the auto-dismiss timer (it
 * emits back into {@link dismiss}); a click on its close button does the same.
 * `durationMs = 0` is sticky (no auto-dismiss — the user closes it).
 *
 * A `show()` with no explicit duration resolves it through the app's
 * {@link FoldToastConfig} (see {@link resolveToastDuration}); an explicit
 * argument always wins. That same config bounds the stack (`maxVisible`) and
 * collapses repeats (`dedupe`) — a screen full of one sentence tells the user
 * less than one line saying it happened twelve times.
 *
 * ```ts
 * const toast = inject(FoldToastService);
 * toast.show("Track uploaded", "success"); // policy duration
 * toast.show("Analysis failed", "error", 5000); // explicit override
 * const id = toast.show("Uploading…", "info", 0); // sticky, dismissed by hand
 * toast.dismiss(id);
 * ```
 */
@Service()
export class FoldToastService {
  private readonly config = inject(FOLD_TOAST_CONFIG, { optional: true });
  private readonly ids = inject(FoldIdService);
  private readonly _toasts = signal<FoldToast[]>([]);

  /** The active toasts, oldest first. Read by the container. */
  readonly toasts = this._toasts.asReadonly();

  /**
   * Queue a toast and return its id, so the caller can dismiss it later (a
   * sticky "Uploading…" that its own completion closes). A message collapsed
   * into an existing toast returns **that** toast's id.
   */
  show(
    message: string,
    variant: FoldToastVariant = "info",
    durationMs?: number,
  ): string {
    const existing = this.dedupeTarget(message, variant);
    if (existing !== null) {
      this.bumpRepeats(existing.id);
      return existing.id;
    }

    const toast: FoldToast = {
      // A counter, not `crypto.randomUUID()`: that one throws outright in a
      // non-secure context (plain http off localhost), and the randomness buys
      // nothing here — an id only has to be unique within this queue.
      id: this.ids.next("fold-toast"),
      message,
      variant,
      durationMs: durationMs ?? resolveToastDuration(this.config, variant),
      repeats: 1,
    };

    this._toasts.update((list) => this.capped([...list, toast]));
    return toast.id;
  }

  dismiss(id: string): void {
    this._toasts.update((list) => list.filter((t) => t.id !== id));
  }

  /** The live toast this message should fold into, or `null` to queue a new one. */
  private dedupeTarget(
    message: string,
    variant: FoldToastVariant,
  ): FoldToast | null {
    if (this.config?.dedupe === false) {
      return null;
    }
    const match = this._toasts().find(
      (t) => t.message === message && t.variant === variant,
    );
    return match ?? null;
  }

  private bumpRepeats(id: string): void {
    this._toasts.update((list) =>
      list.map((t) => (t.id === id ? { ...t, repeats: t.repeats + 1 } : t)),
    );
  }

  /** Trim the stack to `maxVisible`, dropping from the oldest end. */
  private capped(list: FoldToast[]): FoldToast[] {
    const max = this.config?.maxVisible;
    if (max === undefined || max <= 0 || list.length <= max) {
      return list;
    }
    return list.slice(list.length - max);
  }
}
