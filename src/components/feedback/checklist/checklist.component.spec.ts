import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import {
  FoldChecklistComponent,
  type FoldChecklistItem,
} from "./checklist.component";

@Component({
  standalone: true,
  imports: [FoldChecklistComponent],
  template: `<fold-checklist [items]="items()" />`,
})
class HostComponent {
  readonly items = signal<FoldChecklistItem[]>([
    { label: "Nom et famille", state: "done" },
    { label: "Poids net", state: "todo" },
    { label: "Nom EN", state: "optional" },
  ]);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  return { fixture, root: fixture.nativeElement as HTMLElement };
}

describe("FoldChecklistComponent", () => {
  it("renders one item per condition, in order", () => {
    const { root } = render();
    const labels = [...root.querySelectorAll(".cl-label")].map((el) =>
      el.textContent?.trim(),
    );
    expect(labels).toEqual(["Nom et famille", "Poids net", "Nom EN"]);
  });

  it("keeps list semantics that `list-style: none` would strip in Safari", () => {
    const { root } = render();
    expect(root.querySelector("ul")?.getAttribute("role")).toBe("list");
  });

  it("carries every state as a distinct GLYPH, not only as a colour", () => {
    // A green dot and an amber one are the same dot in greyscale, in a
    // forced-colors theme, and to a large share of readers. Read off the
    // sprite reference the icon resolves to — the `name` input is not
    // reflected as an attribute, so asserting on that would pass on three
    // nulls and prove nothing.
    const { root } = render();
    const refs = [...root.querySelectorAll(".cl-glyph use")].map((el) =>
      el.getAttribute("href"),
    );
    expect(refs.length).toBe(3);
    expect(refs.every((r) => r !== null && r !== "")).toBe(true);
    expect(new Set(refs).size).toBe(3);
  });

  it("says the state in words for a screen reader, which gets no glyph", () => {
    const { root } = render();
    const spoken = [...root.querySelectorAll(".cl-sr")].map((el) =>
      el.textContent?.trim(),
    );
    expect(spoken).toEqual(["Done:", "Missing:", "Optional:"]);
    // …and the glyph itself is hidden, or it would be announced twice.
    expect(root.querySelector(".cl-glyph")?.getAttribute("aria-hidden")).toBe(
      "true",
    );
  });

  it("renders nothing at all for an empty list", () => {
    const { fixture, root } = render();
    fixture.componentInstance.items.set([]);
    fixture.detectChanges();
    expect(root.querySelectorAll(".cl-item").length).toBe(0);
  });
});
