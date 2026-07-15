import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { Sh3MenuSectionComponent } from "./menu-section.component";

@Component({
  standalone: true,
  imports: [Sh3MenuSectionComponent],
  template: `<sh3-menu-section [label]="label()" [color]="color()">
    <button class="item">item</button>
  </sh3-menu-section>`,
})
class HostComponent {
  readonly label = signal<string | undefined>(undefined);
  readonly color = signal<string | undefined>(undefined);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const section = fixture.nativeElement.querySelector(
    "sh3-menu-section",
  ) as HTMLElement;
  return { fixture, section };
}

describe("Sh3MenuSectionComponent", () => {
  it("renders its separator and projects the items", () => {
    const { fixture, section } = render();
    fixture.componentInstance.label.set("Workspace");
    fixture.detectChanges();
    expect(section.querySelector("sh3-menu-separator")).not.toBeNull();
    expect(section.querySelector(".sep-label")?.textContent).toBe("Workspace");
    expect(section.querySelector(".item")).not.toBeNull();
  });

  it("publishes `color` as the section tint custom property", () => {
    const { fixture, section } = render();
    expect(section.style.getPropertyValue("--sh3-menu-section-color")).toBe("");
    fixture.componentInstance.color.set("rgb(6, 164, 164)");
    fixture.detectChanges();
    expect(section.style.getPropertyValue("--sh3-menu-section-color")).toBe(
      "rgb(6, 164, 164)",
    );
  });
});
