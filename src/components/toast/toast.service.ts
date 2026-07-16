import { Service, inject, signal } from "@angular/core";
import { SH3_TOAST_CONFIG, resolveToastDuration } from "./toast.config";
import type { Sh3Toast, Sh3ToastVariant } from "./toast.types";

/**
 * Lightweight toast/snackbar service — the source of truth for the queue that
 * `sh3-toast-container` renders. Fire-and-forget: `durationMs` rides on the
 * queued toast and the rendered `sh3-toast` owns the auto-dismiss timer (it
 * emits back into {@link dismiss}); a click on its close button does the same.
 * `durationMs = 0` is sticky (no auto-dismiss — the user closes it).
 *
 * A `show()` with no explicit duration resolves it through the app's
 * {@link Sh3ToastConfig} (see {@link resolveToastDuration}); an explicit
 * argument always wins.
 *
 * ```ts
 * const toast = inject(Sh3ToastService);
 * toast.show("Track uploaded", "success"); // policy duration
 * toast.show("Analysis failed", "error", 5000); // explicit override
 * toast.show("Action required", "warning", 0); // sticky
 * ```
 */
@Service()
export class Sh3ToastService {
  private readonly config = inject(SH3_TOAST_CONFIG, { optional: true });
  private readonly _toasts = signal<Sh3Toast[]>([]);

  /** The active toasts, oldest first. Read by the container. */
  readonly toasts = this._toasts.asReadonly();

  show(
    message: string,
    variant: Sh3ToastVariant = "info",
    durationMs?: number,
  ): void {
    const toast: Sh3Toast = {
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
