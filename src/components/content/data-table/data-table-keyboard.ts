/**
 * Roving-tabindex DOM helpers for `fold-data-table` body rows — pure functions
 * that move focus between `<tr>` siblings, so the component's keydown handler
 * stays thin and they are unit-testable without a component fixture.
 */

/**
 * Is this element part of the roving group?
 *
 * A body row carries `tabindex`; a detail drawer does not. Without this test,
 * an arrow key landing on an open drawer would call `focus()` on something that
 * cannot take it — focus would stay put and the navigation would appear to jam
 * on exactly the rows the reader had opened.
 */
function navigable(node: Element | null): node is HTMLElement {
  return node instanceof HTMLElement && node.hasAttribute("tabindex");
}

/** Focus the adjacent NAVIGABLE row (Arrow Up/Down), skipping any drawer. */
export function focusAdjacentRow(
  from: EventTarget | null,
  edge: "nextElementSibling" | "previousElementSibling",
): void {
  if (!(from instanceof Element)) {
    return;
  }
  let sibling = from[edge];
  while (sibling !== null && !navigable(sibling)) {
    sibling = sibling[edge];
  }
  if (navigable(sibling)) {
    sibling.focus();
  }
}

/** Focus the first / last navigable row in the same body (Home / End). */
export function focusEdgeRow(
  from: EventTarget | null,
  edge: "firstElementChild" | "lastElementChild",
): void {
  if (!(from instanceof Element)) {
    return;
  }
  let target = from.parentElement?.[edge] ?? null;
  const step =
    edge === "firstElementChild"
      ? "nextElementSibling"
      : "previousElementSibling";
  while (target !== null && !navigable(target)) {
    target = target[step];
  }
  if (navigable(target)) {
    target.focus();
  }
}
