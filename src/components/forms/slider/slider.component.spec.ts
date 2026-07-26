import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldSliderComponent } from "./slider.component";

@Component({
  standalone: true,
  imports: [FoldSliderComponent],
  template: `<fold-slider
    [label]="label()"
    [ariaLabel]="ariaLabel()"
    [min]="min()"
    [max]="max()"
    [step]="step()"
    [valueText]="valueText()"
    [showValue]="showValue()"
    [hint]="hint()"
    [errors]="errors()"
    [(touched)]="touched"
    [disabled]="disabled()"
    [(value)]="value"
  />`,
})
class HostComponent {
  readonly label = signal<string | undefined>(undefined);
  readonly ariaLabel = signal<string | undefined>(undefined);
  readonly min = signal(0);
  readonly max = signal(100);
  readonly step = signal(1);
  readonly valueText = signal<string | undefined>(undefined);
  readonly showValue = signal(true);
  readonly hint = signal<string | undefined>(undefined);
  readonly errors = signal<readonly { message: string; kind: string }[]>([]);
  readonly touched = signal(false);
  readonly disabled = signal(false);
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

  it("names the control with a real <label for>, else an aria-label", () => {
    const { fixture, host, input } = render();
    fixture.componentInstance.label.set("Volume");
    fixture.detectChanges();
    const label = host.querySelector("label.sl-label");
    expect(label?.getAttribute("for")).toBe(input.id);
    expect(input.getAttribute("aria-label")).toBeNull(); // visible label names it

    fixture.componentInstance.label.set(undefined);
    fixture.componentInstance.ariaLabel.set("Zoom");
    fixture.detectChanges();
    expect(input.getAttribute("aria-label")).toBe("Zoom");
  });

  it("announces a valueText override via aria-valuetext", () => {
    const { fixture, input } = render();
    expect(input.getAttribute("aria-valuetext")).toBeNull(); // plain number
    fixture.componentInstance.valueText.set("off");
    fixture.detectChanges();
    expect(input.getAttribute("aria-valuetext")).toBe("off");
  });

  it("reflects disabled on the native input", () => {
    const { fixture, input } = render();
    fixture.componentInstance.disabled.set(true);
    fixture.detectChanges();
    expect(input.disabled).toBe(true);
  });

  it("marks touched on blur", () => {
    const { fixture, input } = render();
    input.dispatchEvent(new Event("blur"));
    expect(fixture.componentInstance.touched()).toBe(true);
  });

  it("shows the hint, then the error once touched + invalid (aria wired)", () => {
    const { fixture, host, input } = render();
    fixture.componentInstance.hint.set("Drag to set");
    fixture.detectChanges();
    const msg = () => host.querySelector(".sl-msg");
    expect(msg()?.textContent?.trim()).toBe("Drag to set");
    expect(input.getAttribute("aria-describedby")).toBe(`${input.id}-hint`);

    fixture.componentInstance.errors.set([{ message: "Too low", kind: "min" }]);
    fixture.componentInstance.touched.set(true);
    fixture.detectChanges();
    expect(msg()?.textContent?.trim()).toBe("Too low");
    expect(msg()?.classList.contains("is-error")).toBe(true);
    expect(input.getAttribute("aria-invalid")).toBe("true");
    expect(input.getAttribute("aria-describedby")).toBe(`${input.id}-error`);
  });
});
