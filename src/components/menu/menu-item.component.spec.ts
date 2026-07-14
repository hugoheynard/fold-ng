import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { Sh3MenuItemComponent } from "./menu-item.component";

@Component({
  standalone: true,
  imports: [Sh3MenuItemComponent],
  template: `<a
    sh3-menu-item
    [icon]="'home'"
    [label]="label()"
    [active]="active()"
  ></a>`,
})
class HostComponent {
  readonly label = signal("Home");
  readonly active = signal(false);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const item = fixture.nativeElement.querySelector("a") as HTMLElement;
  return { fixture, item };
}

describe("Sh3MenuItemComponent", () => {
  it("renders the icon and the tooltip label", () => {
    const { item } = render();
    expect(item.querySelector("sh3-icon")).not.toBeNull();
    expect(item.querySelector(".mi-tip")?.textContent).toBe("Home");
  });

  it("toggles the active indicator via the `active` input", () => {
    const { fixture, item } = render();
    expect(item.classList.contains("is-active")).toBe(false);
    fixture.componentInstance.active.set(true);
    fixture.detectChanges();
    expect(item.classList.contains("is-active")).toBe(true);
  });
});
