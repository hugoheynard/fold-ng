import { Service, signal } from "@angular/core";

/** The tone of a toast — drives its accent colour + icon. */
export type ToastVariant = "success" | "info" | "warning" | "error";

/** A single transient notification. */
export type Toast = {
  id: string;
  message: string;
  variant: ToastVariant;
  durationMs: number;
};

/**
 * Lightweight toast/snackbar service — the source of truth for the queue that
 * `sh3-toast-container` renders. Fire-and-forget: each toast auto-dismisses
 * after `durationMs`, or on click.
 *
 * ```ts
 * const toast = inject(ToastService);
 * toast.show("Track uploaded", "success");
 * toast.show("Analysis failed", "error", 5000);
 * ```
 */
@Service()
export class ToastService {
  private readonly _toasts = signal<Toast[]>([]);

  /** The active toasts, oldest first. Read by the container. */
  readonly toasts = this._toasts.asReadonly();

  show(
    message: string,
    variant: ToastVariant = "info",
    durationMs = 3000,
  ): void {
    const toast: Toast = {
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
