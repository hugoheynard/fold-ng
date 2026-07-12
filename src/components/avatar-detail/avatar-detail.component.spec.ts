import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { AvatarDetailComponent } from "./avatar-detail.component";

function mount(inputs: {
  primary: string;
  secondary?: string;
  avatarName?: string;
}) {
  const fixture = TestBed.createComponent(AvatarDetailComponent);
  fixture.componentRef.setInput("primary", inputs.primary);
  if (inputs.secondary !== undefined) {
    fixture.componentRef.setInput("secondary", inputs.secondary);
  }
  if (inputs.avatarName !== undefined) {
    fixture.componentRef.setInput("avatarName", inputs.avatarName);
  }
  fixture.detectChanges();
  return {
    fixture,
    host: fixture.nativeElement as HTMLElement,
    cmp: fixture.componentInstance,
  };
}

describe("AvatarDetailComponent", () => {
  it("renders the primary line and an embedded avatar", () => {
    const { host } = mount({ primary: "Alex Rivers" });
    expect(host.querySelector(".primary")?.textContent?.trim()).toBe(
      "Alex Rivers",
    );
    expect(host.querySelector("sh3-avatar")).not.toBeNull();
  });

  it("shows the secondary line only when non-empty", () => {
    expect(mount({ primary: "A" }).host.querySelector(".secondary")).toBeNull();
    expect(
      mount({ primary: "A", secondary: "a@x.io" })
        .host.querySelector(".secondary")
        ?.textContent?.trim(),
    ).toBe("a@x.io");
  });

  it("uses the avatar name when given, else falls back to primary", () => {
    expect(mount({ primary: "Alex Rivers" }).cmp.resolvedAvatarName()).toBe(
      "Alex Rivers",
    );
    expect(
      mount({
        primary: "Alex Rivers",
        avatarName: "AR Team",
      }).cmp.resolvedAvatarName(),
    ).toBe("AR Team");
  });
});
