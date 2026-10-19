import { describe, it, expect } from "vitest";
import {
  foldFilterSelectItems,
  foldFlattenSelectItems,
  foldOptionMatches,
} from "./option-filter";
import type { FoldSelectItem } from "./select-option";

const ITEMS: readonly FoldSelectItem<number>[] = [
  { value: 1, label: "Oats" },
  { label: "Nuts", options: [{ value: 2, label: "Pecan" }] },
];

describe("option filter", () => {
  it("contains / startsWith are case-insensitive on the label", () => {
    const o = { value: 1, label: "Sesame" };
    expect(foldOptionMatches(o, "contains", "sam")).toBe(true);
    expect(foldOptionMatches(o, "startsWith", "sam")).toBe(false);
    expect(foldOptionMatches(o, "startsWith", "ses")).toBe(true);
  });

  it("an empty term lets everything through, and keeps the array identity", () => {
    expect(foldOptionMatches({ value: 1, label: "x" }, "contains", "")).toBe(
      true,
    );
    expect(foldFilterSelectItems(ITEMS, "contains", "")).toBe(ITEMS);
  });

  it("keeps a group with its matching options, drops an emptied one", () => {
    expect(foldFilterSelectItems(ITEMS, "contains", "pec")).toEqual([
      { label: "Nuts", options: [{ value: 2, label: "Pecan" }] },
    ]);
    expect(foldFilterSelectItems(ITEMS, "contains", "oat")).toEqual([
      { value: 1, label: "Oats" },
    ]);
  });

  it("flattens groups in order", () => {
    expect(foldFlattenSelectItems(ITEMS).map((o) => o.value)).toEqual([1, 2]);
  });
});
