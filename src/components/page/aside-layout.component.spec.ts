import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { Sh3AsideLayoutComponent } from "./aside-layout.component";

@Component({
  standalone: true,
  imports: [Sh3AsideLayoutComponent],
  template: `<sh3-aside-layout>
    @if (left()) {
      <div asideLeft>L</div>
    }
    <div center>C</div>
    <aside asideRight>R</aside>
  </sh3-aside-layout>`,
})
class HostComponent {
  readonly left = signal(true);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const grid = fixture.nativeElement.querySelector(".al-grid") as HTMLElement;
  return { fixture, grid };
}

describe("Sh3AsideLayoutComponent", () => {
  it("projects the three named slots into the grid", () => {
    const { grid } = render();
    expect(grid.querySelector("[asideleft]")?.textContent).toBe("L");
    expect(grid.querySelector("[center]")?.textContent).toBe("C");
    expect(grid.querySelector("[asideright]")?.textContent).toBe("R");
  });

  it("drops the left rail node when its slot is empty (reactive)", () => {
    const { fixture, grid } = render();
    expect(grid.querySelector("[asideleft]")).not.toBeNull();

    fixture.componentInstance.left.set(false);
    fixture.detectChanges();
    expect(grid.querySelector("[asideleft]")).toBeNull();
    // the other two rails are untouched
    expect(grid.querySelector("[center]")).not.toBeNull();
    expect(grid.querySelector("[asideright]")).not.toBeNull();
  });
});
