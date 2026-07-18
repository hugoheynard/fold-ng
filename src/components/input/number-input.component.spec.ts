import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { Sh3NumberInputComponent } from "./number-input.component";
import type { Sh3NumberSpinner } from "./number-input.component";

@Component({
  standalone: true,
  imports: [Sh3NumberInputComponent],
  template: `<sh3-number-input
    [label]="label()"
    [min]="min()"
    [max]="max()"
    [step]="step()"
    [spinner]="spinner()"
    [showStep]="showStep()"
    [(value)]="value"
  />`,
})
class HostComponent {
  readonly label = signal<string | undefined>(undefined);
  readonly min = signal<number | undefined>(undefined);
  readonly max = signal<number | undefined>(undefined);
  readonly step = signal<number | undefined>(undefined);
  readonly spinner = signal<Sh3NumberSpinner>("arrows");
  readonly showStep = signal(false);
  readonly value = signal<number | null>(null);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const host = fixture.nativeElement.querySelector(
    "sh3-number-input",
  ) as HTMLElement;
  const input = host.querySelector("input") as HTMLInputElement;
  const buttons = (): HTMLButtonElement[] =>
    Array.from(host.querySelectorAll("button"));
  return { fixture, host, input, buttons };
}

describe("Sh3NumberInputComponent", () => {
  it("renders a native number input", () => {
    const { input } = render();
    expect(input.getAttribute("type")).toBe("number");
  });

  it("parses typed input to a number", () => {
    const { fixture, input } = render();
    input.value = "42";
    input.dispatchEvent(new Event("input"));
    expect(fixture.componentInstance.value()).toBe(42);
  });

  it("treats an empty field as null, not 0 or NaN", () => {
    const { fixture, input } = render();
    input.value = "7";
    input.dispatchEvent(new Event("input"));
    expect(fixture.componentInstance.value()).toBe(7);

    input.value = "";
    input.dispatchEvent(new Event("input"));
    expect(fixture.componentInstance.value()).toBeNull();
  });

  it("reflects the bound value onto the native input", () => {
    const { fixture, input } = render();
    fixture.componentInstance.value.set(99);
    fixture.detectChanges();
    expect(input.value).toBe("99");
  });

  it("passes min / max / step through to the native input", () => {
    const { fixture, input } = render();
    fixture.componentInstance.min.set(0);
    fixture.componentInstance.max.set(10);
    fixture.componentInstance.step.set(0.5);
    fixture.detectChanges();
    expect(input.getAttribute("min")).toBe("0");
    expect(input.getAttribute("max")).toBe("10");
    expect(input.getAttribute("step")).toBe("0.5");
  });

  it("renders spinner buttons per mode", () => {
    const { fixture, buttons } = render();
    // arrows (default) → up + down
    expect(buttons().length).toBe(2);

    fixture.componentInstance.spinner.set("stepper");
    fixture.detectChanges();
    expect(buttons().length).toBe(2);

    fixture.componentInstance.spinner.set("none");
    fixture.detectChanges();
    expect(buttons().length).toBe(0);
  });

  it("increments and decrements by the step, clamped to bounds", () => {
    const { fixture, buttons } = render();
    fixture.componentInstance.spinner.set("stepper");
    fixture.componentInstance.step.set(5);
    fixture.componentInstance.min.set(0);
    fixture.componentInstance.max.set(10);
    fixture.componentInstance.value.set(8);
    fixture.detectChanges();

    const [minus, plus] = buttons();
    plus.click();
    expect(fixture.componentInstance.value()).toBe(10); // clamped to max, not 13
    minus.click();
    expect(fixture.componentInstance.value()).toBe(5);
  });

  it("disables the increment button at max and decrement at min", () => {
    const { fixture, buttons } = render();
    fixture.componentInstance.spinner.set("stepper");
    fixture.componentInstance.min.set(0);
    fixture.componentInstance.max.set(10);
    fixture.componentInstance.value.set(10);
    fixture.detectChanges();
    const [minus, plus] = buttons();
    expect(plus.disabled).toBe(true);
    expect(minus.disabled).toBe(false);
  });

  it("steps from 0 when the field is empty", () => {
    const { fixture, buttons } = render();
    fixture.componentInstance.spinner.set("stepper");
    fixture.componentInstance.step.set(2);
    fixture.detectChanges();
    buttons()[1].click(); // plus
    expect(fixture.componentInstance.value()).toBe(2);
  });

  it("shows the step suffix when requested", () => {
    const { fixture, host } = render();
    fixture.componentInstance.spinner.set("none");
    fixture.componentInstance.step.set(5);
    fixture.componentInstance.showStep.set(true);
    fixture.detectChanges();
    expect(host.querySelector(".ni-step")?.textContent?.trim()).toBe("5");
  });
});
