/**
 * Roving-tabindex DOM helpers for `fold-data-table` body rows — pure functions
 * that move focus between `<tr>` siblings, so the component's keydown handler
 * stays thin and they are unit-testable without a component fixture.
 */

/** Focus the adjacent row (Arrow Up/Down) relative to the focused one. */
export function focusAdjacentRow(
  from: EventTarget | null,
  edge: "nextElementSibling" | "previousElementSibling",
): void {
  if (!(from instanceof Element)) {
    return;
  }
  const sibling = from[edge];
  if (sibling instanceof HTMLElement) {
    sibling.focus();
  }
}

/** Focus the first / last row in the same body (Home / End). */
export function focusEdgeRow(
  from: EventTarget | null,
  edge: "firstElementChild" | "lastElementChild",
): void {
  if (!(from instanceof Element)) {
    return;
  }
  const target = from.parentElement?.[edge];
  if (target instanceof HTMLElement) {
    target.focus();
  }
}
