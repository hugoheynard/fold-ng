import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { focusAdjacentRow, focusEdgeRow } from "./data-table-keyboard";

/** Build a <tbody> with three focusable <tr>s and return them. */
function buildRows(): { tbody: HTMLElement; rows: HTMLElement[] } {
  const tbody = document.createElement("tbody");
  const rows = ["a", "b", "c"].map((id) => {
    const tr = document.createElement("tr");
    tr.tabIndex = -1;
    tr.dataset["id"] = id;
    tbody.appendChild(tr);
    return tr;
  });
  document.body.appendChild(tbody);
  return { tbody, rows };
}

describe("data-table-keyboard helpers", () => {
  let tbody: HTMLElement;
  let rows: HTMLElement[];

  beforeEach(() => {
    ({ tbody, rows } = buildRows());
  });
  afterEach(() => {
    tbody.remove();
  });

  it("focusAdjacentRow moves to the next / previous sibling", () => {
    focusAdjacentRow(rows[1]!, "nextElementSibling");
    expect(document.activeElement).toBe(rows[2]);
    focusAdjacentRow(rows[1]!, "previousElementSibling");
    expect(document.activeElement).toBe(rows[0]);
  });

  it("focusAdjacentRow is a no-op at the edges (no wrap)", () => {
    rows[0]!.focus();
    focusAdjacentRow(rows[0]!, "previousElementSibling");
    expect(document.activeElement).toBe(rows[0]); // stayed put

    rows[2]!.focus();
    focusAdjacentRow(rows[2]!, "nextElementSibling");
    expect(document.activeElement).toBe(rows[2]);
  });

  it("focusEdgeRow jumps to the first / last row", () => {
    focusEdgeRow(rows[1]!, "firstElementChild");
    expect(document.activeElement).toBe(rows[0]);
    focusEdgeRow(rows[1]!, "lastElementChild");
    expect(document.activeElement).toBe(rows[2]);
  });

  it("both helpers ignore a non-Element target (SSR / detached safety)", () => {
    expect(() => focusAdjacentRow(null, "nextElementSibling")).not.toThrow();
    expect(() => focusEdgeRow(null, "firstElementChild")).not.toThrow();
  });
});
