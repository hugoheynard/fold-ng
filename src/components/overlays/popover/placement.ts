/**
 * Zero-dependency placement math for {@link FoldPopoverComponent}. Pure and
 * framework-free so it unit-tests without a DOM: give it the anchor rect, the
 * floating size and the viewport, get back the `{ x, y }` to pin the floating
 * element (viewport coordinates, for `position: fixed`) plus the placement it
 * actually resolved to after collision handling.
 *
 * Two middlewares, in the order a good popover applies them:
 * 1. **flip** — if the preferred side overflows the viewport and the opposite
 *    side has more room, flip to it (so a bottom menu opens upward near the
 *    fold instead of spilling offscreen).
 * 2. **shift** — slide along the cross axis to stay within the viewport padding,
 *    without leaving the anchor's side.
 *
 * We deliberately do not depend on Floating UI — fold ships no runtime deps.
 */

/** The side of the anchor the floating element sits on. */
export type FoldPopoverSide = "top" | "bottom" | "left" | "right";
/** Alignment of the floating element along the anchor's cross axis. */
export type FoldPopoverAlign = "start" | "center" | "end";
/** A full placement: a side, optionally suffixed with an alignment. */
export type FoldPopoverPlacement =
  FoldPopoverSide | `${FoldPopoverSide}-${FoldPopoverAlign}`;

/** A rectangle in viewport coordinates (a subset of `DOMRect`). */
export interface FoldRect {
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
}

export interface FoldPlacementInput {
  /** The trigger's bounding rect, in viewport coordinates. */
  readonly anchor: FoldRect;
  /** The floating element's measured size. */
  readonly floating: { readonly width: number; readonly height: number };
  /** Preferred placement before collision handling. */
  readonly placement: FoldPopoverPlacement;
  /** Gap between the anchor and the floating element, in px. */
  readonly offset: number;
  /** Viewport size (usually `innerWidth` / `innerHeight`). */
  readonly viewport: { readonly width: number; readonly height: number };
  /** Minimum gap kept between the floating element and the viewport edge. */
  readonly padding: number;
}

export interface FoldPlacementResult {
  readonly x: number;
  readonly y: number;
  /** The placement after any flip — drives the arrow / `data-placement`. */
  readonly placement: FoldPopoverPlacement;
}

const OPPOSITE: Record<FoldPopoverSide, FoldPopoverSide> = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left",
};

function isSide(value: string): value is FoldPopoverSide {
  return (
    value === "top" ||
    value === "bottom" ||
    value === "left" ||
    value === "right"
  );
}

function isAlign(value: string): value is FoldPopoverAlign {
  return value === "start" || value === "center" || value === "end";
}

function parse(placement: FoldPopoverPlacement): {
  side: FoldPopoverSide;
  align: FoldPopoverAlign;
} {
  const [rawSide, rawAlign] = placement.split("-");
  const side: FoldPopoverSide =
    rawSide !== undefined && isSide(rawSide) ? rawSide : "bottom";
  const align: FoldPopoverAlign =
    rawAlign !== undefined && isAlign(rawAlign) ? rawAlign : "center";
  return { side, align };
}

/** Is `side` on the vertical axis (floating above/below the anchor)? */
function isVertical(side: FoldPopoverSide): boolean {
  return side === "top" || side === "bottom";
}

/** Room available between the anchor and the viewport edge on a given side. */
function roomFor(
  side: FoldPopoverSide,
  anchor: FoldRect,
  viewport: { width: number; height: number },
): number {
  switch (side) {
    case "top":
      return anchor.y;
    case "bottom":
      return viewport.height - (anchor.y + anchor.height);
    case "left":
      return anchor.x;
    case "right":
      return viewport.width - (anchor.x + anchor.width);
  }
}

/** Main-axis coordinate (the side offset) for a resolved side. */
function mainAxisCoord(
  side: FoldPopoverSide,
  anchor: FoldRect,
  floating: { width: number; height: number },
  offset: number,
): number {
  switch (side) {
    case "top":
      return anchor.y - floating.height - offset;
    case "bottom":
      return anchor.y + anchor.height + offset;
    case "left":
      return anchor.x - floating.width - offset;
    case "right":
      return anchor.x + anchor.width + offset;
  }
}

/** Cross-axis coordinate before shifting, from the alignment. */
function crossAxisCoord(
  side: FoldPopoverSide,
  align: FoldPopoverAlign,
  anchor: FoldRect,
  floating: { width: number; height: number },
): number {
  const vertical = isVertical(side);
  const anchorStart = vertical ? anchor.x : anchor.y;
  const anchorSize = vertical ? anchor.width : anchor.height;
  const floatSize = vertical ? floating.width : floating.height;
  switch (align) {
    case "start":
      return anchorStart;
    case "end":
      return anchorStart + anchorSize - floatSize;
    case "center":
      return anchorStart + anchorSize / 2 - floatSize / 2;
  }
}

/** Clamp a value into `[min, max]`; if the range is inverted, return `min`. */
function clamp(value: number, min: number, max: number): number {
  if (max < min) {
    return min;
  }
  return Math.min(Math.max(value, min), max);
}

/**
 * Resolve a concrete `{ x, y, placement }` for a floating element. See the file
 * header for the flip → shift order.
 */
export function computePlacement(
  input: FoldPlacementInput,
): FoldPlacementResult {
  const { anchor, floating, offset, viewport, padding } = input;
  const parsed = parse(input.placement);
  let side = parsed.side;

  // flip: if the preferred side can't fit the floating element but its opposite
  // can, use the opposite.
  const need = isVertical(side) ? floating.height : floating.width;
  if (roomFor(side, anchor, viewport) < need + offset) {
    const opposite = OPPOSITE[side];
    if (roomFor(opposite, anchor, viewport) >= need + offset) {
      side = opposite;
    }
  }

  const vertical = isVertical(side);
  let x: number;
  let y: number;
  if (vertical) {
    y = mainAxisCoord(side, anchor, floating, offset);
    x = crossAxisCoord(side, parsed.align, anchor, floating);
    // shift along x into the viewport.
    x = clamp(x, padding, viewport.width - floating.width - padding);
  } else {
    x = mainAxisCoord(side, anchor, floating, offset);
    y = crossAxisCoord(side, parsed.align, anchor, floating);
    // shift along y into the viewport.
    y = clamp(y, padding, viewport.height - floating.height - padding);
  }

  const placement: FoldPopoverPlacement =
    parsed.align === "center" ? side : `${side}-${parsed.align}`;
  return { x, y, placement };
}
