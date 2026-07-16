import { InjectionToken, type Provider } from "@angular/core";
import type { Sh3ToastVariant } from "./toast.types";

/**
 * App-level toast duration policy. A `show()` call with no explicit duration
 * resolves through it (see {@link resolveToastDuration}).
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
export const SH3_BAKED_TOAST_DURATION_MS: Record<Sh3ToastVariant, number> = {
  success: 3000,
  info: 4000,
  warning: 6000,
  error: 0,
};

/**
 * Duration for a variant, most-specific first: `durationByVariant[variant]` →
 * `defaultDurationMs` → the baked default. A configured `0` stays sticky (`??`
 * only falls through on null/undefined).
 */
export function resolveToastDuration(
  config: Sh3ToastConfig | null,
  variant: Sh3ToastVariant,
): number {
  return (
    config?.durationByVariant?.[variant] ??
    config?.defaultDurationMs ??
    SH3_BAKED_TOAST_DURATION_MS[variant]
  );
}
