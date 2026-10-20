import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect, afterEach } from "vitest";
import type { FoldIconName } from "../../foundations/icon/builtin-icons";
import { FoldNavLauncherComponent } from "./nav-launcher.component";
import { FoldNavSectionComponent } from "./nav-section.component";
import { FoldNavTileComponent } from "./nav-tile.component";

@Component({
  standalone: true,
  imports: [
    FoldNavLauncherComponent,
    FoldNavSectionComponent,
    FoldNavTileComponent,
  ],
  template: `<fold-nav-launcher [open]="true">
    <a fold-nav-tile icon="home" label="Home" data-t="loose"></a>
    <fold-nav-section label="Catalogue" [color]="color()" [icon]="icon()">
      <a fold-nav-tile icon="home" label="Products" data-t="p"></a>
      <a fold-nav-tile icon="home" label="Ranges" data-t="r"></a>
    </fold-nav-section>
  </fold-nav-launcher>`,
})
class HostComponent {
  readonly color = signal<string | undefined>("#7c5bbf");
  readonly icon = signal<FoldIconName | undefined>("home");
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const root = fixture.nativeElement as HTMLElement;
  const section = root.querySelector("fold-nav-section") as HTMLElement;
  return { fixture, root, section };
}

describe("FoldNavSectionComponent", () => {
  afterEach(() => {
    document.body.style.overflow = "";
  });

  it("renders its header, then its own tiles", () => {
    const { section } = render();
    expect(section.querySelector(".ns-label")?.textContent?.trim()).toBe(
      "Catalogue",
    );
    expect(section.querySelector("[data-t='p']")).not.toBeNull();
    expect(section.querySelector("[data-t='r']")).not.toBeNull();
    // A tile written outside the section stays outside it.
    expect(section.querySelector("[data-t='loose']")).toBeNull();
  });

  it("is a group named by its header", () => {
    const { section } = render();
    const labelledBy = section.getAttribute("aria-labelledby");
    expect(section.getAttribute("role")).toBe("group");
    expect(labelledBy).toBeTruthy();
    expect(
      section.querySelector(`#${labelledBy ?? "none"}`)?.textContent?.trim(),
    ).toBe("Catalogue");
  });

  it("wears its icon in a decorative pastille, and none without one", () => {
    const { fixture, section } = render();
    const pastille = section.querySelector(".ns-pastille");
    expect(pastille?.querySelector("fold-icon")).not.toBeNull();
    expect(pastille?.getAttribute("aria-hidden")).toBe("true");

    fixture.componentInstance.icon.set(undefined);
    fixture.detectChanges();
    expect(section.querySelector(".ns-pastille")).toBeNull();
  });

  it("publishes its colour for the tiles to tint from, and nothing without one", () => {
    const { fixture, section } = render();
    expect(section.style.getPropertyValue("--fold-nav-section-color")).toBe(
      "#7c5bbf",
    );
    expect(section.hasAttribute("data-tinted")).toBe(true);

    fixture.componentInstance.color.set(undefined);
    fixture.detectChanges();
    expect(section.style.getPropertyValue("--fold-nav-section-color")).toBe("");
    expect(section.hasAttribute("data-tinted")).toBe(false);
  });

  it("keeps its tiles squares — a section is not a level", () => {
    const { section } = render();
    expect(
      section.querySelector("[data-t='p']")?.classList.contains("is-row"),
    ).toBe(false);
  });
});
