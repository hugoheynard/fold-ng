import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldAvatarDetailComponent } from "./avatar-detail.component";

function mount(inputs: {
  primary: string;
  secondary?: string;
  avatarName?: string;
}) {
  const fixture = TestBed.createComponent(FoldAvatarDetailComponent);
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

describe("FoldAvatarDetailComponent", () => {
  it("renders the primary line and an embedded avatar", () => {
    const { host } = mount({ primary: "Alex Rivers" });
    expect(host.querySelector(".primary")?.textContent?.trim()).toBe(
      "Alex Rivers",
    );
    expect(host.querySelector("fold-avatar")).not.toBeNull();
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

  it("forwards its presentation inputs to the embedded avatar", () => {
    const fixture = TestBed.createComponent(FoldAvatarDetailComponent);
    const ref = fixture.componentRef;
    ref.setInput("primary", "Alex Rivers");
    ref.setInput("size", "lg");
    ref.setInput("variant", "ghost");
    ref.setInput("square", true);
    ref.setInput("muted", true);
    ref.setInput("ring", "accent");
    ref.setInput("ringStyle", "dotted");
    fixture.detectChanges();

    const avatar = (fixture.nativeElement as HTMLElement).querySelector(
      ".avatar",
    );
    expect(avatar?.classList.contains("size-lg")).toBe(true);
    expect(avatar?.classList.contains("variant-ghost")).toBe(true);
    expect(avatar?.classList.contains("shape-square")).toBe(true);
    expect(avatar?.classList.contains("is-muted")).toBe(true);
    expect(avatar?.getAttribute("data-ring")).toBe("accent");
    expect(avatar?.getAttribute("data-ring-style")).toBe("dotted");
  });

  it("forwards imageUrl — the avatar shows the image instead of initials", () => {
    const fixture = TestBed.createComponent(FoldAvatarDetailComponent);
    fixture.componentRef.setInput("primary", "Acme Corp");
    fixture.componentRef.setInput("imageUrl", "/logo.svg");
    fixture.detectChanges();

    const host = fixture.nativeElement as HTMLElement;
    expect(host.querySelector("img.avatar-img")?.getAttribute("src")).toBe(
      "/logo.svg",
    );
  });
});
