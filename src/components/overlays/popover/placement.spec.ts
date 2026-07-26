import { describe, it, expect } from "vitest";
import { computePlacement, type FoldPlacementInput } from "./placement";

const base: FoldPlacementInput = {
  anchor: { x: 100, y: 100, width: 40, height: 20 },
  floating: { width: 200, height: 120 },
  placement: "bottom-start",
  offset: 8,
  viewport: { width: 1000, height: 800 },
  padding: 8,
};

describe("computePlacement", () => {
  it("places bottom-start directly under the anchor's left edge", () => {
    const r = computePlacement(base);
    expect(r.placement).toBe("bottom-start");
    expect(r.y).toBe(100 + 20 + 8); // anchor bottom + offset
    expect(r.x).toBe(100); // aligned to anchor left
  });

  it("aligns bottom-end to the anchor's right edge", () => {
    const r = computePlacement({ ...base, placement: "bottom-end" });
    // anchor right (140) - floating width (200) = -60 → shifted to padding
    expect(r.x).toBe(8);
    expect(r.placement).toBe("bottom-end");
  });

  it("centers bottom (no align suffix)", () => {
    const r = computePlacement({ ...base, placement: "bottom" });
    // anchorCenter 120 - floatHalf 100 = 20
    expect(r.x).toBe(20);
    expect(r.placement).toBe("bottom");
  });

  it("flips bottom → top when there is no room below but room above", () => {
    const r = computePlacement({
      ...base,
      anchor: { x: 100, y: 700, width: 40, height: 20 }, // near the bottom
      placement: "bottom-start",
    });
    expect(r.placement).toBe("top-start");
    expect(r.y).toBe(700 - 120 - 8); // above the anchor
  });

  it("falls back to the roomier side when neither fits, and caps the height", () => {
    const r = computePlacement({
      ...base,
      floating: { width: 200, height: 780 }, // taller than either side's room
      anchor: { x: 100, y: 500, width: 40, height: 20 }, // more room above
      placement: "bottom",
      viewport: { width: 1000, height: 800 },
    });
    expect(r.placement).toBe("top"); // above has more room (500 > 280)
    // size: capped to the room above, minus offset + padding (500 - 8 - 8)
    expect(r.maxHeight).toBe(484);
    expect(r.y).toBe(8); // top-aligned, shifted to the top padding
  });

  it("reports the available size on the resolved side (size middleware)", () => {
    const r = computePlacement(base); // bottom-start, roomy
    expect(r.maxHeight).toBe(800 - (100 + 20) - 8 - 8); // vp - anchorBottom - offset - padding
    expect(r.maxWidth).toBe(1000 - 2 * 8); // viewport width minus padding
  });

  it("shifts along the cross axis to stay within the right edge", () => {
    const r = computePlacement({
      ...base,
      anchor: { x: 950, y: 100, width: 40, height: 20 }, // near right edge
      placement: "bottom-start",
    });
    // wanted x=950 but clamps to viewport.width - floatW - padding = 1000-200-8
    expect(r.x).toBe(792);
  });

  it("clamps to the left padding when shifting can't fit", () => {
    const r = computePlacement({
      ...base,
      floating: { width: 1200, height: 120 }, // wider than viewport
      placement: "bottom-start",
    });
    expect(r.x).toBe(8); // pinned to left padding
  });

  it("supports horizontal placement (right)", () => {
    const r = computePlacement({ ...base, placement: "right" });
    expect(r.x).toBe(100 + 40 + 8); // anchor right + offset
    expect(r.placement).toBe("right");
  });

  it("flips right → left near the right edge", () => {
    const r = computePlacement({
      ...base,
      anchor: { x: 950, y: 100, width: 40, height: 20 },
      placement: "right",
    });
    expect(r.placement).toBe("left");
    expect(r.x).toBe(950 - 200 - 8);
  });
});
