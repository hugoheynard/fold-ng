import { InjectionToken, type Provider } from "@angular/core";
import type { FoldToastVariant } from "./toast.types";

/**
 * App-level toast duration policy. A `show()` call with no explicit duration
 * resolves through it (see {@link resolveToastDuration}).
 */
export type FoldToastConfig = {
  /** Fallback for any variant without a per-variant entry. */
  defaultDurationMs?: number;
  /** Per-variant duration (ms) overrides. `0` = sticky (no auto-dismiss). */
  durationByVariant?: Partial<Record<FoldToastVariant, number>>;
};

/** DI token carrying the app's {@link FoldToastConfig}. Set via {@link provideFoldToasts}. */
export const FOLD_TOAST_CONFIG = new InjectionToken<FoldToastConfig>(
  "FOLD_TOAST_CONFIG",
);

/**
 * Configure the toast duration policy at bootstrap (idiomatic, like
 * `provideFoldIcons` / `provideFoldPalette`):
 *
 * ```ts
 * providers: [
 *   provideFoldToasts({
 *     defaultDurationMs: 4000,
 *     durationByVariant: { success: 2000, error: 0 }, // 0 = sticky
 *   }),
 * ];
 * ```
 */
export function provideFoldToasts(config: FoldToastConfig): Provider {
  return { provide: FOLD_TOAST_CONFIG, useValue: config };
}

/**
 * Package defaults when nothing is configured or passed — dwell scales with
 * severity, and an `error` is sticky (it must be dismissed, not missed). All
 * overridable via {@link provideFoldToasts} or an explicit `show()` argument.
 */
export const FOLD_BAKED_TOAST_DURATION_MS: Record<FoldToastVariant, number> = {
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
  config: FoldToastConfig | null,
  variant: FoldToastVariant,
): number {
  return (
    config?.durationByVariant?.[variant] ??
    config?.defaultDurationMs ??
    FOLD_BAKED_TOAST_DURATION_MS[variant]
  );
}
