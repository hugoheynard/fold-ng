/**
 * Keep a floating element pinned to its anchor: call `onChange` whenever
 * anything that could move the anchor or resize either element happens —
 * scrolling (capture phase, so nested scroll containers count), a window
 * resize, or a size change of the anchor / floating element (`ResizeObserver`).
 * Returns a teardown that removes every listener. Mirrors Floating UI's
 * `autoUpdate`, dependency-free and scoped to fold's needs.
 */
export function autoUpdate(
  anchor: HTMLElement | null,
  floating: HTMLElement,
  onChange: () => void,
): () => void {
  if (typeof window === "undefined") {
    return () => undefined;
  }
  window.addEventListener("scroll", onChange, true);
  window.addEventListener("resize", onChange);
  const ro =
    typeof ResizeObserver === "undefined" ? null : new ResizeObserver(onChange);
  if (ro) {
    if (anchor) {
      ro.observe(anchor);
    }
    ro.observe(floating);
  }
  return () => {
    window.removeEventListener("scroll", onChange, true);
    window.removeEventListener("resize", onChange);
    ro?.disconnect();
  };
}
