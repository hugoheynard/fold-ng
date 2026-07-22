import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldElevatedDirective } from "../elevated.directive";

@Component({
  standalone: true,
  imports: [FoldElevatedDirective],
  template: `<div [foldElevated]="on()" data-t="host"></div>`,
})
class HostComponent {
  readonly on = signal(true);
}

function setup() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const el = fixture.nativeElement.querySelector(
    "[data-t='host']",
  ) as HTMLElement;
  return { fixture, el };
}

describe("FoldElevatedDirective", () => {
  it("stamps data-elevated when raised, drops it when not", () => {
    const { fixture, el } = setup();
    expect(el.getAttribute("data-elevated")).toBe("");

    fixture.componentInstance.on.set(false);
    fixture.detectChanges();
    expect(el.hasAttribute("data-elevated")).toBe(false);
  });

  it("defaults to raised for a bare attribute", () => {
    @Component({
      standalone: true,
      imports: [FoldElevatedDirective],
      template: `<div foldElevated data-t="bare"></div>`,
    })
    class BareHost {}

    const fixture = TestBed.createComponent(BareHost);
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector("[data-t='bare']");
    expect(el.getAttribute("data-elevated")).toBe("");
  });
});
