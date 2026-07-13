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
 * `sh3-toast-container` renders. Fire-and-forget: each toast auto-dismisses
 * after `durationMs`, or on click.
 *
 * ```ts
 * const toast = inject(Sh3ToastService);
 * toast.show("Track uploaded", "success");
 * toast.show("Analysis failed", "error", 5000);
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

    setTimeout(() => this.dismiss(toast.id), durationMs);
  }

  dismiss(id: string): void {
    this._toasts.update((list) => list.filter((t) => t.id !== id));
  }
}
