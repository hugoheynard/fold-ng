import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldMenuSectionComponent } from "./menu-section.component";
import { FoldMenuItemComponent } from "./menu-item.component";

@Component({
  standalone: true,
  imports: [FoldMenuSectionComponent],
  template: `<fold-menu-section [label]="label()" [color]="color()">
    <button class="item">item</button>
  </fold-menu-section>`,
})
class HostComponent {
  readonly label = signal<string | undefined>(undefined);
  readonly color = signal<string | undefined>(undefined);
}

@Component({
  standalone: true,
  imports: [FoldMenuSectionComponent, FoldMenuItemComponent],
  template: `<fold-menu-section
    label="Group"
    collapsible
    [collapsed]="collapsed()"
  >
    <button
      fold-menu-item
      icon="home"
      label="Home"
      [active]="active()"
    ></button>
  </fold-menu-section>`,
})
class CollapsibleHost {
  readonly collapsed = signal(false);
  readonly active = signal(false);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const section = fixture.nativeElement.querySelector(
    "fold-menu-section",
  ) as HTMLElement;
  return { fixture, section };
}

function renderCollapsible() {
  const fixture = TestBed.createComponent(CollapsibleHost);
  fixture.detectChanges();
  const section = fixture.nativeElement.querySelector(
    "fold-menu-section",
  ) as HTMLElement;
  const head = section.querySelector(".section-head") as HTMLButtonElement;
  const items = section.querySelector(".section-items") as HTMLElement;
  return { fixture, section, head, items };
}

describe("FoldMenuSectionComponent", () => {
  it("renders its separator and projects the items", () => {
    const { fixture, section } = render();
    fixture.componentInstance.label.set("Workspace");
    fixture.detectChanges();
    expect(section.querySelector("fold-menu-separator")).not.toBeNull();
    expect(section.querySelector(".sep-label")?.textContent).toBe("Workspace");
    expect(section.querySelector(".item")).not.toBeNull();
  });

  it("publishes `color` as the section tint custom property", () => {
    const { fixture, section } = render();
    expect(section.style.getPropertyValue("--fold-menu-section-color")).toBe(
      "",
    );
    fixture.componentInstance.color.set("rgb(6, 164, 164)");
    fixture.detectChanges();
    expect(section.style.getPropertyValue("--fold-menu-section-color")).toBe(
      "rgb(6, 164, 164)",
    );
  });

  it("has no toggle header and never folds when not collapsible", () => {
    const { section } = render();
    expect(section.querySelector(".section-head")).toBeNull();
    expect(
      (
        section.querySelector(".section-items") as HTMLElement
      ).classList.contains("is-collapsed"),
    ).toBe(false);
  });

  it("toggles the fold state from the header, linked by aria", () => {
    const { fixture, head, items } = renderCollapsible();
    expect(head.getAttribute("aria-expanded")).toBe("true");
    expect(head.getAttribute("aria-controls")).toBe(items.id);
    expect(items.classList.contains("is-collapsed")).toBe(false);

    head.click();
    fixture.detectChanges();
    expect(head.getAttribute("aria-expanded")).toBe("false");
    expect(items.classList.contains("is-collapsed")).toBe(true);
  });

  it("stays open while it holds the active item, even if collapsed", () => {
    const { fixture, head, items } = renderCollapsible();
    fixture.componentInstance.collapsed.set(true);
    fixture.detectChanges();
    expect(items.classList.contains("is-collapsed")).toBe(true);

    fixture.componentInstance.active.set(true);
    fixture.detectChanges();
    expect(head.getAttribute("aria-expanded")).toBe("true");
    expect(items.classList.contains("is-collapsed")).toBe(false);
  });
});
