import { describe, it, expect, beforeEach } from "vitest";
import {
  FOLD_SCROLL_FROZEN_CLASS,
  ScrollRegionRegistry,
} from "./scroll-region-registry.service";

function el(): HTMLElement {
  return document.createElement("div");
}
const frozen = (node: HTMLElement) =>
  node.classList.contains(FOLD_SCROLL_FROZEN_CLASS);

describe("ScrollRegionRegistry", () => {
  let registry: ScrollRegionRegistry;
  beforeEach(() => {
    registry = new ScrollRegionRegistry();
  });

  it("freezes every registered region and thaws it on unfreeze", () => {
    const a = el();
    const b = el();
    registry.register(a);
    registry.register(b);

    registry.freeze();
    expect(frozen(a)).toBe(true);
    expect(frozen(b)).toBe(true);
    expect(registry.isFrozen).toBe(true);

    registry.unfreeze();
    expect(frozen(a)).toBe(false);
    expect(frozen(b)).toBe(false);
    expect(registry.isFrozen).toBe(false);
  });

  it("is reference-counted — thaws only when the last overlay unfreezes", () => {
    const a = el();
    registry.register(a);

    registry.freeze();
    registry.freeze(); // a second, stacked overlay
    registry.unfreeze();
    expect(frozen(a)).toBe(true); // one freeze still held

    registry.unfreeze();
    expect(frozen(a)).toBe(false);
  });

  it("freezes a region registered while already frozen, and thaws it", () => {
    const a = el();
    registry.register(a);
    registry.freeze();

    const late = el();
    registry.register(late); // joins mid-freeze
    expect(frozen(late)).toBe(true);

    registry.unfreeze();
    expect(frozen(late)).toBe(false);
  });

  it("thaws a region on unregister and never touches it again", () => {
    const a = el();
    registry.register(a);
    registry.freeze();
    expect(frozen(a)).toBe(true);

    registry.unregister(a);
    expect(frozen(a)).toBe(false); // unregister thaws
    registry.unfreeze();
    expect(frozen(a)).toBe(false);
  });

  it("an extra unfreeze without a matching freeze is a no-op", () => {
    const a = el();
    registry.register(a);
    registry.unfreeze();
    expect(registry.isFrozen).toBe(false);
    expect(frozen(a)).toBe(false);
  });

  it("register is idempotent", () => {
    const a = el();
    registry.register(a);
    registry.register(a);
    registry.freeze();
    expect(frozen(a)).toBe(true);
    registry.unfreeze();
    expect(frozen(a)).toBe(false);
  });
});
