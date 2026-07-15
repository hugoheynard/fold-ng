import { type ComponentFixture, TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import {
  Sh3AvatarListComponent,
  type Sh3AvatarListItem,
} from "./avatar-list.component";

const FACES: Sh3AvatarListItem[] = [
  { name: "A A" },
  { name: "B B" },
  { name: "C C" },
  { name: "D D" },
  { name: "E E" },
];

function mount(inputs: {
  avatars: readonly Sh3AvatarListItem[];
  limit?: number;
  top?: "first" | "last";
  square?: unknown;
}): ComponentFixture<Sh3AvatarListComponent> {
  const fixture = TestBed.createComponent(Sh3AvatarListComponent);
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

function zIndexes(fixture: ComponentFixture<Sh3AvatarListComponent>): number[] {
  const items = fixture.nativeElement.querySelectorAll(".al-item");
  return Array.from(items, (el) => Number((el as HTMLElement).style.zIndex));
}

describe("Sh3AvatarListComponent", () => {
  it("shows every face when under the limit — no chip", () => {
    const fixture = mount({ avatars: FACES.slice(0, 3), limit: 4 });
    expect(fixture.nativeElement.querySelectorAll("sh3-avatar").length).toBe(3);
    expect(fixture.nativeElement.querySelector(".al-more")).toBeNull();
  });

  it("caps at the limit and shows +N for the remainder", () => {
    const fixture = mount({ avatars: FACES, limit: 3 });
    expect(fixture.nativeElement.querySelectorAll("sh3-avatar").length).toBe(3);
    expect(
      fixture.nativeElement.querySelector(".al-more")?.textContent?.trim(),
    ).toBe("+2");
  });

  it("limit 0 shows everything", () => {
    const fixture = mount({ avatars: FACES, limit: 0 });
    expect(fixture.nativeElement.querySelectorAll("sh3-avatar").length).toBe(5);
  });

  it("top='first' stacks the leading face highest; 'last' flips it", () => {
    const first = zIndexes(mount({ avatars: FACES.slice(0, 3), top: "first" }));
    const last = zIndexes(mount({ avatars: FACES.slice(0, 3), top: "last" }));
    expect(first[0]).toBeGreaterThan(first[2]);
    expect(last[2]).toBeGreaterThan(last[0]);
  });

  it("square coerces the bare attribute (empty string) to true", () => {
    const fixture = mount({ avatars: FACES.slice(0, 2), square: "" });
    expect(fixture.componentInstance.square()).toBe(true);
  });
});
