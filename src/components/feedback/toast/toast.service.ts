import { Service, inject, signal } from "@angular/core";
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
 * argument always wins.
 *
 * ```ts
 * const toast = inject(FoldToastService);
 * toast.show("Track uploaded", "success"); // policy duration
 * toast.show("Analysis failed", "error", 5000); // explicit override
 * toast.show("Action required", "warning", 0); // sticky
 * ```
 */
@Service()
export class FoldToastService {
  private readonly config = inject(FOLD_TOAST_CONFIG, { optional: true });
  private readonly _toasts = signal<FoldToast[]>([]);

  /** The active toasts, oldest first. Read by the container. */
  readonly toasts = this._toasts.asReadonly();

  show(
    message: string,
    variant: FoldToastVariant = "info",
    durationMs?: number,
  ): void {
    const toast: FoldToast = {
      id: crypto.randomUUID(),
      message,
      variant,
      durationMs: durationMs ?? resolveToastDuration(this.config, variant),
    };

    this._toasts.update((list) => [...list, toast]);
  }

  dismiss(id: string): void {
    this._toasts.update((list) => list.filter((t) => t.id !== id));
  }
}
