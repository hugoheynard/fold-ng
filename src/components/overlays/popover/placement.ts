/**
 * Zero-dependency placement math for {@link FoldPopoverComponent}. Pure and
 * framework-free so it unit-tests without a DOM: give it the anchor rect, the
 * floating size and the viewport, get back the `{ x, y }` to pin the floating
 * element (viewport coordinates, for `position: fixed`) plus the placement it
 * actually resolved to after collision handling.
 *
 * Three middlewares, in the order a good popover applies them:
 * 1. **flip** — pick the best-fitting side: keep the preferred one if it fits,
 *    else its opposite, else whichever has the most room (so a bottom menu opens
 *    upward near the fold instead of spilling offscreen).
 * 2. **size** — report the space available on the chosen side (`maxWidth` /
 *    `maxHeight`), so the caller caps the panel and scrolls the overflow instead
 *    of letting it run off the viewport.
 * 3. **shift** — slide along the cross axis to stay within the viewport padding,
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
  /**
   * Ordered fallbacks tried (after the preferred) when the preferred side can't
   * fit — the first that fits wins, else the roomiest of all candidates. Each
   * may change side *and* alignment. Defaults to the opposite side.
   */
  readonly fallbackPlacements?: readonly FoldPopoverPlacement[] | undefined;
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
  /** The placement after flip — drives the arrow / `data-placement`. */
  readonly placement: FoldPopoverPlacement;
  /** Space available to the floating element on the resolved side, minus
   *  padding — the consumer caps `max-width` / `max-height` to these and lets
   *  the panel scroll (the `size` middleware). */
  readonly maxWidth: number;
  readonly maxHeight: number;
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

/** Room needed on a placement's main axis to fit the floating element. */
function needFor(
  side: FoldPopoverSide,
  floating: { width: number; height: number },
): number {
  return isVertical(side) ? floating.height : floating.width;
}

/**
 * Choose the placement (**flip**): try the preferred, then each fallback (the
 * opposite side by default); the first whose side fits the floating element
 * wins. If none fit, take whichever has the most room — the `size` middleware
 * then caps + scrolls the overflow, so it degrades gracefully.
 */
function choosePlacement(input: FoldPlacementInput): {
  side: FoldPopoverSide;
  align: FoldPopoverAlign;
} {
  const preferred = parse(input.placement);
  const opposite: FoldPopoverPlacement =
    preferred.align === "center"
      ? OPPOSITE[preferred.side]
      : `${OPPOSITE[preferred.side]}-${preferred.align}`;
  const fallbacks = input.fallbackPlacements ?? [opposite];
  const candidates = [input.placement, ...fallbacks];
  let best = preferred;
  let bestRoom = -Infinity;
  for (const candidate of candidates) {
    const parsed = parse(candidate);
    const room = roomFor(parsed.side, input.anchor, input.viewport);
    if (room >= needFor(parsed.side, input.floating) + input.offset) {
      return parsed;
    }
    if (room > bestRoom) {
      bestRoom = room;
      best = parsed;
    }
  }
  return best;
}

/**
 * Resolve `{ x, y, placement, maxWidth, maxHeight }` for a floating element.
 * Order: **flip** (choose the best-fitting side) → **size** (available space on
 * that side, for the caller to cap + scroll) → **shift** (slide along the cross
 * axis to stay in the viewport).
 */
export function computePlacement(
  input: FoldPlacementInput,
): FoldPlacementResult {
  const { anchor, floating, offset, viewport, padding } = input;
  const chosen = choosePlacement(input);
  const side = chosen.side;
  const align = chosen.align;

  // size: the room on the chosen side (main axis) and the viewport (cross axis).
  const maxMain = Math.max(
    0,
    roomFor(side, anchor, viewport) - offset - padding,
  );
  const crossViewport = isVertical(side) ? viewport.width : viewport.height;
  const maxCross = Math.max(0, crossViewport - 2 * padding);
  const maxHeight = isVertical(side) ? maxMain : maxCross;
  const maxWidth = isVertical(side) ? maxCross : maxMain;

  // position with the effective (capped) size so a scrolled panel still sits
  // flush against the anchor and shifts within the viewport.
  const eff = {
    width: Math.min(floating.width, maxWidth),
    height: Math.min(floating.height, maxHeight),
  };
  let x: number;
  let y: number;
  if (isVertical(side)) {
    y = mainAxisCoord(side, anchor, eff, offset);
    x = crossAxisCoord(side, align, anchor, eff);
    x = clamp(x, padding, viewport.width - eff.width - padding);
  } else {
    x = mainAxisCoord(side, anchor, eff, offset);
    y = crossAxisCoord(side, align, anchor, eff);
    y = clamp(y, padding, viewport.height - eff.height - padding);
  }

  const placement: FoldPopoverPlacement =
    align === "center" ? side : `${side}-${align}`;
  return { x, y, placement, maxWidth, maxHeight };
}
