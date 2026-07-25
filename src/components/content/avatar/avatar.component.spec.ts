import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldAvatarComponent } from "./avatar.component";
import { FoldPaletteRegistry } from "../../../color/palette-registry.service";

/** jsdom serialises an inline hex fill to `rgb(...)`; compare in that form. */
function hexToRgb(hex: string): string {
  const n = parseInt(hex.slice(1), 16);
  return `rgb(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255})`;
}

function mount(inputs: {
  name: string;
  variant?: "solid" | "ghost";
  imageUrl?: string;
  muted?: boolean;
  ring?: string;
  ringStyle?: string;
}) {
  const fixture = TestBed.createComponent(FoldAvatarComponent);
  fixture.componentRef.setInput("name", inputs.name);
  if (inputs.variant) {
    fixture.componentRef.setInput("variant", inputs.variant);
  }
  if (inputs.imageUrl) {
    fixture.componentRef.setInput("imageUrl", inputs.imageUrl);
  }
  if (inputs.muted !== undefined) {
    fixture.componentRef.setInput("muted", inputs.muted);
  }
  if (inputs.ring) {
    fixture.componentRef.setInput("ring", inputs.ring);
  }
  if (inputs.ringStyle) {
    fixture.componentRef.setInput("ringStyle", inputs.ringStyle);
  }
  fixture.detectChanges();
  const el = fixture.nativeElement.querySelector(".avatar") as HTMLElement;
  return { fixture, el };
}

describe("FoldAvatarComponent", () => {
  it("derives initials (two words, one word, empty)", () => {
    expect(mount({ name: "Hugo Heynard" }).el.textContent?.trim()).toBe("HH");
    expect(mount({ name: "Solo" }).el.textContent?.trim()).toBe("SO");
    expect(mount({ name: " " }).el.textContent?.trim()).toBe("?");
  });

  it("fills a solid avatar with the registry's colour for the seed", () => {
    const reg = TestBed.inject(FoldPaletteRegistry);
    const { el } = mount({ name: "Hugo Heynard" });
    expect(el.style.background).toBe(hexToRgb(reg.colorFor("Hugo Heynard")));
  });

  it("recolours reactively when the palette switches app-wide", () => {
    const reg = TestBed.inject(FoldPaletteRegistry);
    const { fixture, el } = mount({ name: "Hugo" });
    const before = el.style.background;
    reg.use("pastel");
    fixture.detectChanges();
    expect(el.style.background).not.toBe(before);
    expect(el.style.background).toBe(hexToRgb(reg.colorFor("Hugo")));
  });

  it("ghost variant carries no fill", () => {
    const { el } = mount({ name: "Guest", variant: "ghost" });
    expect(el.classList.contains("variant-ghost")).toBe(true);
    expect(el.style.background).toBe("");
  });

  it("renders an image when imageUrl is set", () => {
    const { fixture } = mount({ name: "Acme", imageUrl: "/logo.png" });
    const img = fixture.nativeElement.querySelector("img.avatar-img");
    expect(img?.getAttribute("src")).toBe("/logo.png");
  });

  it("falls back to initials when the image fails to load", () => {
    const { fixture } = mount({
      name: "Hugo Heynard",
      imageUrl: "/broken.png",
    });
    const img = fixture.nativeElement.querySelector(
      "img.avatar-img",
    ) as HTMLImageElement;
    img.dispatchEvent(new Event("error"));
    fixture.detectChanges();
    // The <img> is gone; the initials render instead of a broken-image glyph.
    expect(fixture.nativeElement.querySelector("img.avatar-img")).toBeNull();
    const el = fixture.nativeElement.querySelector(".avatar") as HTMLElement;
    expect(el.textContent?.trim()).toBe("HH");
  });

  it("retries the image after the failed URL is replaced", () => {
    const fixture = TestBed.createComponent(FoldAvatarComponent);
    fixture.componentRef.setInput("name", "Acme");
    fixture.componentRef.setInput("imageUrl", "/broken.png");
    fixture.detectChanges();
    (
      fixture.nativeElement.querySelector("img.avatar-img") as HTMLImageElement
    ).dispatchEvent(new Event("error"));
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector("img.avatar-img")).toBeNull();

    fixture.componentRef.setInput("imageUrl", "/fixed.png");
    fixture.detectChanges();
    const img = fixture.nativeElement.querySelector(
      "img.avatar-img",
    ) as HTMLImageElement | null;
    expect(img?.getAttribute("src")).toBe("/fixed.png");
  });

  it("keeps the dashed guest edge on a photo (ghost + image is not a no-op)", () => {
    const { el } = mount({
      name: "Guest",
      variant: "ghost",
      imageUrl: "/photo.png",
    });
    expect(el.classList.contains("has-image")).toBe(true);
    expect(el.classList.contains("variant-ghost")).toBe(true);
  });

  it("square coerces the bare attribute (empty string) to true", () => {
    const fixture = TestBed.createComponent(FoldAvatarComponent);
    fixture.componentRef.setInput("name", "Acme");
    // `<fold-avatar square>` in a template binds the input to "" — booleanAttribute
    // must read that as true (otherwise the empty string stays falsy → still round).
    fixture.componentRef.setInput("square", "");
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector(".avatar") as HTMLElement;
    expect(el.classList.contains("shape-square")).toBe(true);
  });

  it("muted dims the avatar", () => {
    const { el } = mount({ name: "Away", muted: true });
    expect(el.classList.contains("is-muted")).toBe(true);
  });

  it("ring sets the status outline attrs; 'none' clears them", () => {
    const withRing = mount({
      name: "In",
      ring: "warning",
      ringStyle: "dotted",
    });
    expect(withRing.el.getAttribute("data-ring")).toBe("warning");
    expect(withRing.el.getAttribute("data-ring-style")).toBe("dotted");

    const noRing = mount({ name: "In" });
    expect(noRing.el.getAttribute("data-ring")).toBeNull();
  });
});
