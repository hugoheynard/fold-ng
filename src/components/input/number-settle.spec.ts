import { describe, it, expect } from "vitest";
import { decimalsOf, settleNumber } from "./number-settle";

describe("decimalsOf", () => {
  it("counts plain decimal places", () => {
    expect(decimalsOf(1)).toBe(0);
    expect(decimalsOf(0.5)).toBe(1);
    expect(decimalsOf(0.125)).toBe(3);
  });

  it("handles exponent notation (the old string parse returned 0)", () => {
    expect(decimalsOf(1e-7)).toBe(7);
    expect(decimalsOf(1.5e-7)).toBe(8); // 7 + one mantissa decimal
    expect(decimalsOf(2e-3)).toBe(3);
  });

  it("returns 0 for non-finite input", () => {
    expect(decimalsOf(NaN)).toBe(0);
    expect(decimalsOf(Infinity)).toBe(0);
  });
});

describe("settleNumber", () => {
  const base = { step: 1, snapToStep: false } as const;

  it("rounds to the step's own precision by default", () => {
    expect(settleNumber(0.1 + 0.2, { step: 0.1, snapToStep: false })).toBe(0.3);
  });

  it("clamps into the bounds", () => {
    expect(settleNumber(999, { ...base, max: 100 })).toBe(100);
    expect(settleNumber(-5, { ...base, min: 0 })).toBe(0);
  });

  it("rounds to the step's precision (integer step ⇒ integer, 0.1 step keeps 1dp)", () => {
    expect(settleNumber(3.7, { step: 1, snapToStep: false })).toBe(4);
    expect(settleNumber(3.7, { step: 0.1, snapToStep: false })).toBe(3.7);
  });

  it("caps to the requested decimals", () => {
    expect(settleNumber(3.14159, { ...base, decimals: 2 })).toBe(3.14);
  });

  it("treats decimals: 0 as integers", () => {
    expect(settleNumber(3.7, { ...base, decimals: 0 })).toBe(4);
  });

  it("snaps to the nearest grid point relative to min", () => {
    const c = { step: 5, min: 2, max: 17, snapToStep: true };
    expect(settleNumber(9, c)).toBe(7); // grid 2,7,12,17
    expect(settleNumber(40, c)).toBe(17); // snap 42 then clamp
  });

  it("keeps float steps precise when snapping", () => {
    expect(settleNumber(0.30000001, { step: 0.1, snapToStep: true })).toBe(0.3);
  });

  it("never produces more precision than a tiny exponent step allows", () => {
    // step 1e-7 → 7 places; would have thrown / mis-rounded with a string parse
    const out = settleNumber(0.12345678, { step: 1e-7, snapToStep: false });
    expect(out).toBeCloseTo(0.1234568, 7);
  });
});
