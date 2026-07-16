import { Service, signal } from "@angular/core";

/** The tone of a toast — drives its accent colour + icon. */
export type Sh3ToastVariant = "success" | "info" | "warning" | "error";

/** A single transient notification. */
export type Sh3Toast = {
  id: string;
  message: string;
  variant: Sh3ToastVariant;
  durationMs: number;
};

/**
 * Lightweight toast/snackbar service — the source of truth for the queue that
 * `sh3-toast-container` renders. Fire-and-forget: `durationMs` rides on the
 * queued toast and the rendered `sh3-toast` owns the auto-dismiss timer (it
 * emits back into {@link dismiss}); a click on its close button does the same.
 * `durationMs = 0` is sticky (no auto-dismiss — the user closes it).
 *
 * ```ts
 * const toast = inject(Sh3ToastService);
 * toast.show("Track uploaded", "success");
 * toast.show("Analysis failed", "error", 5000);
 * toast.show("Action required", "warning", 0); // sticky
 * ```
 */
@Service()
export class Sh3ToastService {
  private readonly _toasts = signal<Sh3Toast[]>([]);

  /** The active toasts, oldest first. Read by the container. */
  readonly toasts = this._toasts.asReadonly();

  show(
    message: string,
    variant: Sh3ToastVariant = "info",
    durationMs = 3000,
  ): void {
    const toast: Sh3Toast = {
      id: crypto.randomUUID(),
      message,
      variant,
      durationMs,
    };

    this._toasts.update((list) => [...list, toast]);
  }

  dismiss(id: string): void {
    this._toasts.update((list) => list.filter((t) => t.id !== id));
  }
}
