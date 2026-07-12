import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { AvatarComponent } from "./avatar.component";
import { PaletteRegistry } from "../../color/palette-registry.service";

/** jsdom serialises an inline hex fill to `rgb(...)`; compare in that form. */
function hexToRgb(hex: string): string {
  const n = parseInt(hex.slice(1), 16);
  return `rgb(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255})`;
}

function mount(inputs: {
  name: string;
  variant?: "solid" | "ghost";
  imageUrl?: string;
}) {
  const fixture = TestBed.createComponent(AvatarComponent);
  fixture.componentRef.setInput("name", inputs.name);
  if (inputs.variant) {
    fixture.componentRef.setInput("variant", inputs.variant);
  }
  if (inputs.imageUrl) {
    fixture.componentRef.setInput("imageUrl", inputs.imageUrl);
  }
  fixture.detectChanges();
  const el = fixture.nativeElement.querySelector(".avatar") as HTMLElement;
  return { fixture, el };
}

describe("AvatarComponent", () => {
  it("derives initials (two words, one word, empty)", () => {
    expect(mount({ name: "Hugo Heynard" }).el.textContent?.trim()).toBe("HH");
    expect(mount({ name: "Solo" }).el.textContent?.trim()).toBe("SO");
    expect(mount({ name: " " }).el.textContent?.trim()).toBe("?");
  });

  it("fills a solid avatar with the registry's colour for the seed", () => {
    const reg = TestBed.inject(PaletteRegistry);
    const { el } = mount({ name: "Hugo Heynard" });
    expect(el.style.background).toBe(hexToRgb(reg.colorFor("Hugo Heynard")));
  });

  it("recolours reactively when the palette switches app-wide", () => {
    const reg = TestBed.inject(PaletteRegistry);
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
});
