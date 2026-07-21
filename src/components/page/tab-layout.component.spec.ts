import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { Sh3TabLayoutComponent } from "./tab-layout.component";

@Component({
  standalone: true,
  imports: [Sh3TabLayoutComponent],
  template: `<sh3-tab-layout
    [placement]="placement()"
    [foldAt]="foldAt()"
    #tl="sh3TabLayout"
  >
    <nav tabNav class="nav">Nav</nav>
    <div class="body">Body</div>
    <span class="probe">{{ tl.stacked() }}</span>
  </sh3-tab-layout>`,
})
class HostComponent {
  readonly placement = signal<"top" | "side">("top");
  readonly foldAt = signal(720);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const root = fixture.nativeElement as HTMLElement;
  return {
    fixture,
    layout: root.querySelector("sh3-tab-layout") as HTMLElement,
    root,
  };
}

describe("Sh3TabLayoutComponent", () => {
  it("projects the nav and the content into their regions", () => {
    const { layout } = render();
    expect(layout.querySelector(".tl-nav .nav")?.textContent).toBe("Nav");
    expect(layout.querySelector(".tl-body .body")?.textContent).toBe("Body");
  });

  it("keeps the content out of the nav region", () => {
    const { layout } = render();
    expect(layout.querySelector(".tl-nav .body")).toBeNull();
  });

  it("stacks by default (placement=top): nav above, no row modifier", () => {
    const { layout, root } = render();
    expect(layout.classList.contains("is-row")).toBe(false);
    expect(root.querySelector(".probe")?.textContent).toBe("true");
  });

  it("lays a side placement out as a row until it folds", () => {
    const { fixture, layout, root } = render();
    fixture.componentInstance.placement.set("side");
    fixture.detectChanges();
    // Unmeasured (jsdom reports 0), so a side layout starts as a rail.
    expect(layout.classList.contains("is-row")).toBe(true);
    expect(root.querySelector(".probe")?.textContent).toBe("false");
  });
});
