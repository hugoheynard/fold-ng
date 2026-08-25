import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import {
  FoldFieldsetComponent,
  type FoldFieldsetAppearance,
  type FoldFieldsetDirection,
} from "./fieldset.component";

@Component({
  standalone: true,
  imports: [FoldFieldsetComponent],
  template: `<fold-fieldset
    [legend]="legend()"
    [direction]="direction()"
    [appearance]="appearance()"
  >
    <input class="member" />
    <input class="member" />
  </fold-fieldset>`,
})
class HostComponent {
  readonly legend = signal("Allergènes");
  readonly direction = signal<FoldFieldsetDirection>("vertical");
  readonly appearance = signal<FoldFieldsetAppearance>("plain");
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  return {
    fixture,
    host: fixture.componentInstance,
    root: fixture.nativeElement as HTMLElement,
  };
}

describe("FoldFieldsetComponent", () => {
  it("names the group with a real <legend> inside a real <fieldset>", () => {
    // The whole reason to reach for a fieldset rather than a div plus a
    // heading: the pair is what announces "these controls answer one
    // question". A div would look identical and say nothing.
    const { root } = render();
    const fieldset = root.querySelector("fieldset");
    expect(fieldset).not.toBeNull();
    expect(fieldset?.querySelector("legend")?.textContent?.trim()).toBe(
      "Allergènes",
    );
  });

  it("renders NO legend when it has no name", () => {
    // An empty <legend> is worse than none — it hands a screen reader a group
    // with a blank name. A nested group that is already named by its parent is
    // the case this serves.
    const { fixture, host, root } = render();
    host.legend.set("");
    fixture.detectChanges();
    expect(root.querySelector("legend")).toBeNull();
    expect(root.querySelectorAll(".member")).toHaveLength(2);
  });

  it("projects its members", () => {
    const { root } = render();
    expect(root.querySelectorAll(".member")).toHaveLength(2);
  });

  it("carries direction and appearance as classes, not as styles", () => {
    // The two knobs are the only thing a caller can change about the layout,
    // and they are readable from the DOM — which is what lets a consuming app
    // assert on them without reaching into computed styles.
    const { fixture, host, root } = render();
    const box = root.querySelector(".fs-box");
    expect(box?.classList.contains("vertical")).toBe(true);
    expect(box?.classList.contains("plain")).toBe(true);

    host.direction.set("horizontal");
    host.appearance.set("border");
    fixture.detectChanges();
    expect(box?.classList.contains("horizontal")).toBe(true);
    expect(box?.classList.contains("border")).toBe(true);
    expect(box?.classList.contains("vertical")).toBe(false);
  });
});
