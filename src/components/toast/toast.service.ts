import {
  InjectionToken,
  type Provider,
  Service,
  inject,
  signal,
} from "@angular/core";

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
 * App-level toast duration policy. A `show()` call with no explicit duration
 * resolves through it (see {@link Sh3ToastService.show}).
 */
export type Sh3ToastConfig = {
  /** Fallback for any variant without a per-variant entry. */
  defaultDurationMs?: number;
  /** Per-variant duration (ms) overrides. `0` = sticky (no auto-dismiss). */
  durationByVariant?: Partial<Record<Sh3ToastVariant, number>>;
};

/** DI token carrying the app's {@link Sh3ToastConfig}. Set via {@link provideSh3Toasts}. */
export const SH3_TOAST_CONFIG = new InjectionToken<Sh3ToastConfig>(
  "SH3_TOAST_CONFIG",
);

/**
 * Configure the toast duration policy at bootstrap (idiomatic, like
 * `provideSh3Icons` / `provideSh3Palette`):
 *
 * ```ts
 * providers: [
 *   provideSh3Toasts({
 *     defaultDurationMs: 4000,
 *     durationByVariant: { success: 2000, error: 0 }, // 0 = sticky
 *   }),
 * ];
 * ```
 */
export function provideSh3Toasts(config: Sh3ToastConfig): Provider {
  return { provide: SH3_TOAST_CONFIG, useValue: config };
}

/**
 * Package defaults when nothing is configured or passed — dwell scales with
 * severity, and an `error` is sticky (it must be dismissed, not missed). All
 * overridable via {@link provideSh3Toasts} or an explicit `show()` argument.
 */
const BAKED_DURATION_MS: Record<Sh3ToastVariant, number> = {
  success: 3000,
  info: 4000,
  warning: 6000,
  error: 0,
};

/**
 * Lightweight toast/snackbar service — the source of truth for the queue that
 * `sh3-toast-container` renders. Fire-and-forget: `durationMs` rides on the
 * queued toast and the rendered `sh3-toast` owns the auto-dismiss timer (it
 * emits back into {@link dismiss}); a click on its close button does the same.
 * `durationMs = 0` is sticky (no auto-dismiss — the user closes it).
 *
 * A `show()` with no explicit duration resolves it, most-specific first:
 * `durationByVariant[variant]` → `defaultDurationMs` → the baked per-variant
 * default. An explicit argument always wins.
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
      durationMs: durationMs ?? this.resolveDuration(variant),
    };

    this._toasts.update((list) => [...list, toast]);
  }

  dismiss(id: string): void {
    this._toasts.update((list) => list.filter((t) => t.id !== id));
  }

  /** Duration for a variant with no explicit `show()` argument. */
  private resolveDuration(variant: Sh3ToastVariant): number {
    return (
      this.config?.durationByVariant?.[variant] ??
      this.config?.defaultDurationMs ??
      BAKED_DURATION_MS[variant]
    );
  }
}
