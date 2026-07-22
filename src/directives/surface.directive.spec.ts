import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { Sh3SurfaceDirective, type Sh3SurfaceName } from "./surface.directive";

@Component({
  standalone: true,
  imports: [Sh3SurfaceDirective],
  template: `<div [sh3Surface]="surface()">region</div>`,
})
class HostComponent {
  readonly surface = signal<Sh3SurfaceName>("chrome");
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const el = (fixture.nativeElement as HTMLElement).querySelector(
    "div",
  ) as HTMLElement;
  return { fixture, el };
}

describe("Sh3SurfaceDirective", () => {
  it("stamps data-surface with the value a theme addresses", () => {
    const { el } = render();
    expect(el.getAttribute("data-surface")).toBe("chrome");
  });

  it("tracks the input, so a surface can change at runtime", () => {
    const { fixture, el } = render();
    fixture.componentInstance.surface.set("page");
    fixture.detectChanges();
    expect(el.getAttribute("data-surface")).toBe("page");
  });

  it("defaults to page when applied bare", () => {
    @Component({
      standalone: true,
      imports: [Sh3SurfaceDirective],
      template: `<div sh3Surface>region</div>`,
    })
    class BareHost {}

    const fixture = TestBed.createComponent(BareHost);
    fixture.detectChanges();
    const el = (fixture.nativeElement as HTMLElement).querySelector(
      "div",
    ) as HTMLElement;
    expect(el.getAttribute("data-surface")).toBe("page");
  });
});
