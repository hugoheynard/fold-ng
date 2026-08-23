/**
 * The width thresholds the nav family shares, in px.
 *
 * One number, one place. They were three literals in three files with nothing
 * coordinating them — the rail folded on 720 (container), the table switched to
 * cards on 700 (viewport), and the nav gap tightened on 640 (viewport) — so the
 * fold and the spacing could flip independently of each other.
 *
 * All of these are measured on a component's OWN box (`observeElementWidth`),
 * never on the window: `_tab-bar.scss` states the principle — "container width
 * is the only axis" — and this is where it is kept.
 */

/**
 * Below this, a nav column has no room for page rhythm: the gap between a bar
 * and the content it introduces tightens so the two read as one block.
 */
export const FOLD_NARROW = 640;
