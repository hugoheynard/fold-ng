import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldSliderComponent } from "./slider.component";

@Component({
  standalone: true,
  imports: [FoldSliderComponent],
  template: `<fold-slider
    [label]="label()"
    [min]="min()"
    [max]="max()"
    [step]="step()"
    [valueText]="valueText()"
    [showValue]="showValue()"
    [(value)]="value"
  />`,
})
class HostComponent {
  readonly label = signal<string | undefined>(undefined);
  readonly min = signal(0);
  readonly max = signal(100);
  readonly step = signal(1);
  readonly valueText = signal<string | undefined>(undefined);
  readonly showValue = signal(true);
  readonly value = signal(0);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const host = fixture.nativeElement.querySelector(
    "fold-slider",
  ) as HTMLElement;
  const input = host.querySelector("input") as HTMLInputElement;
  return { fixture, host, input };
}

describe("FoldSliderComponent", () => {
  it("renders a native range input", () => {
    const { input } = render();
    expect(input.getAttribute("type")).toBe("range");
  });

  it("passes min / max / step through to the native input", () => {
    const { fixture, input } = render();
    fixture.componentInstance.min.set(48);
    fixture.componentInstance.max.set(120);
    fixture.componentInstance.step.set(4);
    fixture.detectChanges();
    expect(input.getAttribute("min")).toBe("48");
    expect(input.getAttribute("max")).toBe("120");
    expect(input.getAttribute("step")).toBe("4");
  });

  it("two-way binds the value on input", () => {
    const { fixture, input } = render();
    input.value = "42";
    input.dispatchEvent(new Event("input"));
    expect(fixture.componentInstance.value()).toBe(42);
  });

  it("drives the fill percentage from the value", () => {
    const { fixture, input } = render();
    fixture.componentInstance.value.set(25);
    fixture.detectChanges();
    expect(input.style.getPropertyValue("--sl-pct")).toBe("25%");
  });

  it("clamps the fill percentage to [0, 100]", () => {
    const { fixture, input } = render();
    fixture.componentInstance.value.set(500);
    fixture.detectChanges();
    expect(input.style.getPropertyValue("--sl-pct")).toBe("100%");
  });

  it("shows the numeric value by default and the override when given", () => {
    const { fixture, host } = render();
    fixture.componentInstance.value.set(3);
    fixture.detectChanges();
    expect(host.querySelector(".sl-value")?.textContent?.trim()).toBe("3");

    fixture.componentInstance.valueText.set("off");
    fixture.detectChanges();
    expect(host.querySelector(".sl-value")?.textContent?.trim()).toBe("off");
  });

  it("hides the value display when showValue is false", () => {
    const { fixture, host } = render();
    fixture.componentInstance.showValue.set(false);
    fixture.detectChanges();
    expect(host.querySelector(".sl-value")).toBeNull();
  });
});
