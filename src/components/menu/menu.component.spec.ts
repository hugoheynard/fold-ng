import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { Sh3MenuComponent } from "./menu.component";

@Component({
  standalone: true,
  imports: [Sh3MenuComponent],
  template: `<sh3-menu>
    <div header class="h">Brand</div>
    <a class="item">Item</a>
    <div footer class="f">Account</div>
  </sh3-menu>`,
})
class HostComponent {}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const menu = fixture.nativeElement.querySelector("sh3-menu") as HTMLElement;
  return { menu };
}

describe("Sh3MenuComponent", () => {
  it("routes header / default / footer into their bands", () => {
    const { menu } = render();
    expect(menu.querySelector(".menu-head .h")?.textContent).toBe("Brand");
    expect(menu.querySelector(".menu-body .item")?.textContent).toBe("Item");
    expect(menu.querySelector(".menu-foot .f")?.textContent).toBe("Account");
  });
});
