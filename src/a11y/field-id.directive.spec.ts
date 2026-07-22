import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldFieldIdDirective } from "./field-id.directive";

@Component({
  standalone: true,
  imports: [FoldFieldIdDirective],
  template: `
    <input class="bare" />
    <select class="bare"></select>
    <textarea class="bare"></textarea>
    <input class="has-id" id="explicit" />
    <input class="has-name" name="explicit" />
    <input class="bound-id" [id]="boundId" />
  `,
})
class HostComponent {
  readonly boundId = "from-binding";
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const el = fixture.nativeElement as HTMLElement;
  return { fixture, el };
}

describe("FoldFieldIdDirective", () => {
  it("assigns an id to bare input / select / textarea", () => {
    const { el } = render();
    for (const bare of Array.from(el.querySelectorAll(".bare"))) {
      expect(bare.id).toMatch(/^fold-field-\d+$/);
    }
  });

  it("gives each control a distinct id", () => {
    const { el } = render();
    const ids = Array.from(el.querySelectorAll(".bare")).map((n) => n.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("leaves a control that already has an id or name untouched", () => {
    const { el } = render();
    expect(el.querySelector(".has-id")?.id).toBe("explicit");
    // a control identified only by name gets no generated id
    expect(el.querySelector(".has-name")?.id).toBe("");
  });

  it("does not fight a bound [id]", () => {
    const { el } = render();
    expect(el.querySelector(".bound-id")?.id).toBe("from-binding");
  });
});
