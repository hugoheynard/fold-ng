import { type ComponentFixture, TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import {
  FoldAvatarListComponent,
  type FoldAvatarListItem,
} from "./avatar-list.component";

const FACES: FoldAvatarListItem[] = [
  { name: "A A" },
  { name: "B B" },
  { name: "C C" },
  { name: "D D" },
  { name: "E E" },
];

function mount(inputs: {
  avatars: readonly FoldAvatarListItem[];
  limit?: number;
  top?: "first" | "last";
  square?: unknown;
}): ComponentFixture<FoldAvatarListComponent> {
  const fixture = TestBed.createComponent(FoldAvatarListComponent);
  fixture.componentRef.setInput("avatars", inputs.avatars);
  if (inputs.limit !== undefined) {
    fixture.componentRef.setInput("limit", inputs.limit);
  }
  if (inputs.top) {
    fixture.componentRef.setInput("top", inputs.top);
  }
  if (inputs.square !== undefined) {
    fixture.componentRef.setInput("square", inputs.square);
  }
  fixture.detectChanges();
  return fixture;
}

function zIndexes(
  fixture: ComponentFixture<FoldAvatarListComponent>,
): number[] {
  const items = fixture.nativeElement.querySelectorAll(".al-item");
  return Array.from(items, (el) => Number((el as HTMLElement).style.zIndex));
}

describe("FoldAvatarListComponent", () => {
  it("shows every face when under the limit — no chip", () => {
    const fixture = mount({ avatars: FACES.slice(0, 3), limit: 4 });
    expect(fixture.nativeElement.querySelectorAll("fold-avatar").length).toBe(
      3,
    );
    expect(fixture.nativeElement.querySelector(".al-more")).toBeNull();
  });

  it("caps at the limit and shows +N for the remainder", () => {
    const fixture = mount({ avatars: FACES, limit: 3 });
    expect(fixture.nativeElement.querySelectorAll("fold-avatar").length).toBe(
      3,
    );
    expect(
      fixture.nativeElement.querySelector(".al-more")?.textContent?.trim(),
    ).toBe("+2");
  });

  it("limit 0 shows everything", () => {
    const fixture = mount({ avatars: FACES, limit: 0 });
    expect(fixture.nativeElement.querySelectorAll("fold-avatar").length).toBe(
      5,
    );
  });

  it("top='first' stacks the leading face highest; 'last' flips it", () => {
    const first = zIndexes(mount({ avatars: FACES.slice(0, 3), top: "first" }));
    const last = zIndexes(mount({ avatars: FACES.slice(0, 3), top: "last" }));
    expect(first[0]!).toBeGreaterThan(first[2]!);
    expect(last[2]!).toBeGreaterThan(last[0]!);
  });

  it("square coerces the bare attribute (empty string) to true", () => {
    const fixture = mount({ avatars: FACES.slice(0, 2), square: "" });
    expect(fixture.componentInstance.square()).toBe(true);
  });

  it("forwards per-face identity/state (variant / muted / ring) to each avatar", () => {
    const fixture = mount({
      avatars: [
        { name: "Guest", variant: "ghost" },
        { name: "Away", muted: true },
        { name: "Incoming", ring: "warning", ringStyle: "dotted" },
      ],
    });
    const avatars = fixture.nativeElement.querySelectorAll(".avatar");
    expect(
      (avatars[0] as HTMLElement).classList.contains("variant-ghost"),
    ).toBe(true);
    expect((avatars[1] as HTMLElement).classList.contains("is-muted")).toBe(
      true,
    );
    expect((avatars[2] as HTMLElement).getAttribute("data-ring")).toBe(
      "warning",
    );
    expect((avatars[2] as HTMLElement).getAttribute("data-ring-style")).toBe(
      "dotted",
    );
  });
});
