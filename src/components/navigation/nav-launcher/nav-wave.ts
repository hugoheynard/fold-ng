/** The launcher's transition phases. */
export type FoldNavPhase = "idle" | "down" | "up";

/** One staged element and, when it is a group, its identity as the origin. */
export interface FoldNavWaveItem {
  readonly hostEl: HTMLElement;
}

/**
 * Write the wave onto a set of elements.
 *
 * Direct DOM writes, deliberately. The step is each item's **distance from the
 * touched tile**, and no item can work that out alone: it would have to know
 * both its own index and where a finger landed on a sibling. The launcher is
 * the only thing that knows both — so the launcher stages the wave, and the
 * stylesheet reads `--fold-nl-step`. An element that is never staged has no
 * step, so it enters in one block: a tile used outside a launcher still works.
 *
 * @param items    the elements to stage, in DOM order
 * @param originEl the touched tile, or `null` — the wave then starts at the first
 * @param phase    `down` marks the leavers, `up` the rows on their way out
 * @param settled  the cascade is over: hand the transform back to `:active`
 */
export function stageWave(
  items: readonly HTMLElement[],
  originEl: HTMLElement | null,
  phase: FoldNavPhase,
  settled: boolean,
): void {
  const hit = originEl ? Math.max(items.indexOf(originEl), 0) : 0;
  for (const [index, el] of items.entries()) {
    el.style.setProperty("--fold-nl-step", String(Math.abs(index - hit)));
    mark(el, "data-leaving", phase === "down");
    mark(el, "data-anchor", phase === "down" && el === originEl);
    mark(el, "data-settled", settled && phase === "idle");
  }
}

/**
 * Stage the level-2 rows. Their cascade runs down the list, not out from a
 * finger: the sheet arrives as one movement from the bottom, and there is no
 * touched row to start from.
 */
export function stageRows(
  rows: readonly HTMLElement[],
  phase: FoldNavPhase,
  settled: boolean,
): void {
  for (const [index, el] of rows.entries()) {
    el.style.setProperty("--fold-nl-step", String(index));
    mark(el, "data-leaving", phase === "up");
    mark(el, "data-settled", settled && phase === "idle");
  }
}

/** The items' hosts in DOM order — the order the wave has to travel in. */
export function inDomOrder(
  groups: readonly FoldNavWaveItem[][],
): HTMLElement[] {
  return groups
    .flat()
    .map((item) => item.hostEl)
    .sort((a, b) =>
      (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING) !== 0
        ? -1
        : 1,
    );
}

/** Set or remove a marker attribute — `toggleAttribute` with an explicit force. */
function mark(el: HTMLElement, name: string, on: boolean): void {
  if (on) {
    el.setAttribute(name, "");
  } else {
    el.removeAttribute(name);
  }
}
