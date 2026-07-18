import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { Sh3NumberInputComponent } from "./number-input.component";

@Component({
  standalone: true,
  imports: [Sh3NumberInputComponent],
  template: `<sh3-number-input
    [label]="label()"
    [min]="min()"
    [max]="max()"
    [step]="step()"
    [(value)]="value"
  />`,
})
class HostComponent {
  readonly label = signal<string | undefined>(undefined);
  readonly min = signal<number | undefined>(undefined);
  readonly max = signal<number | undefined>(undefined);
  readonly step = signal<number | undefined>(undefined);
  readonly value = signal<number | null>(null);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const host = fixture.nativeElement.querySelector(
    "sh3-number-input",
  ) as HTMLElement;
  const input = host.querySelector("input") as HTMLInputElement;
  return { fixture, host, input };
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
});
