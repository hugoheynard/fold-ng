import { type Signal, computed, effect, signal } from "@angular/core";

/**
 * Dead band (px) between folding and unfolding.
 *
 * Wider than any scrollbar: folding makes the content taller, which can bring a
 * scrollbar in and take ~15px of width back — enough to cross a single
 * threshold again and flip forever. A dead band wider than that breaks the
 * loop.
 */
export const FOLD_HYSTERESIS = 32;

/**
 * A hysteretic "is it narrow?" signal, driven by a measured width.
 *
 * Extracted on its second consumer — `fold-nav-layout` folds its rail this way,
 * `fold-data-table` switches to cards the same way, and both have the same
 * scrollbar feedback loop. A plain `width() <= threshold` does not: it flickers
 * at the boundary, and the flicker is the bug, not the threshold.
 *
 * Call it in an injection context (the `effect` needs one). Reads `0` as "not
 * yet measured" and stays wide, which is the SSR-correct first paint — the same
 * convention `observeElementWidth` uses.
 *
 * @param width a live width signal, typically `observeElementWidth()`.
 * @param threshold the fold point in px; may itself be a signal (an `input`).
 */
export function foldAt(
  width: Signal<number>,
  threshold: Signal<number> | number,
): Signal<boolean> {
  const point =
    typeof threshold === "number" ? computed(() => threshold) : threshold;
  const folded = signal(false);
  effect(() => {
    const w = width();
    if (w === 0) {
      return;
    }
    const fold = point();
    if (!folded() && w <= fold) {
      folded.set(true);
    } else if (folded() && w > fold + FOLD_HYSTERESIS) {
      folded.set(false);
    }
  });
  return folded.asReadonly();
}
