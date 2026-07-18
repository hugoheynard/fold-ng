/**
 * Pure numeric-settling helpers for {@link Sh3NumberInputComponent}.
 *
 * Kept out of the component so "what counts as a valid value" is one small,
 * deterministic, independently-tested unit — blur and stepping both route
 * through {@link settleNumber}, so they can never diverge.
 */
export interface Sh3NumberConstraints {
  /** The effective step (> 0); also the grid spacing and the default precision. */
  readonly step: number;
  /** Lower bound, if any. */
  readonly min?: number;
  /** Upper bound, if any. */
  readonly max?: number;
  /** Decimal-place cap; when omitted, precision is derived from {@link step}. */
  readonly decimals?: number;
  /** Whether the value must land on the step grid. */
  readonly snapToStep: boolean;
}

/** Decimal places carried by a finite number, robust to exponent form (`1e-7`). */
export function decimalsOf(n: number): number {
  if (!Number.isFinite(n)) {
    return 0;
  }
  const s = n.toString();
  const eIndex = s.indexOf("e-");
  if (eIndex !== -1) {
    const mantissa = s.slice(0, eIndex);
    const dot = mantissa.indexOf(".");
    const mantissaDecimals = dot === -1 ? 0 : mantissa.length - dot - 1;
    return Number(s.slice(eIndex + 2)) + mantissaDecimals;
  }
  const dot = s.indexOf(".");
  return dot === -1 ? 0 : s.length - dot - 1;
}

/** Snap to the nearest grid point `base + k·step` (base = `min` ?? 0). */
function snapToGrid(n: number, c: Sh3NumberConstraints): number {
  const base = c.min ?? 0;
  return base + Math.round((n - base) / c.step) * c.step;
}

/** Round to the effective precision (kills float drift like 0.1 + 0.2). */
function round(n: number, c: Sh3NumberConstraints): number {
  const raw = c.decimals ?? decimalsOf(c.step);
  const places = Math.min(100, Math.max(0, raw));
  return Number(n.toFixed(places));
}

/** Clamp into the min/max bounds (each optional). */
function clamp(n: number, c: Sh3NumberConstraints): number {
  let out = n;
  if (c.min !== undefined) {
    out = Math.max(c.min, out);
  }
  if (c.max !== undefined) {
    out = Math.min(c.max, out);
  }
  return out;
}

/**
 * Resolve a raw number to a valid settled value: snap to the step grid (when
 * enabled) → round to the precision → clamp into `[min, max]`.
 */
export function settleNumber(n: number, c: Sh3NumberConstraints): number {
  const snapped = c.snapToStep ? snapToGrid(n, c) : n;
  return clamp(round(snapped, c), c);
}

/**
 * Is `max` reachable on the step grid? False when `(max − base) % step ≠ 0`
 * (base = `min` ?? 0), i.e. the top bound sits between two grid points — with
 * snapping on, `max` is then only reachable off-grid via the clamp. No `max`
 * ⇒ nothing to misalign ⇒ true.
 */
export function isStepAligned(c: Sh3NumberConstraints): boolean {
  if (c.max === undefined) {
    return true;
  }
  const steps = (c.max - (c.min ?? 0)) / c.step;
  return Math.abs(steps - Math.round(steps)) < 1e-9;
}
