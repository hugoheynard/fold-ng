import { Component, signal } from "@angular/core";
import type { ValidationError } from "@angular/forms/signals";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldTimeComponent } from "./time.component";

@Component({
  standalone: true,
  imports: [FoldTimeComponent],
  template: `<fold-time
    [label]="label()"
    [min]="min()"
    [max]="max()"
    [required]="required()"
    [hint]="hint()"
    [disabled]="disabled()"
    [errors]="errors()"
    [(touched)]="touched"
    [(value)]="value"
  />`,
})
class HostComponent {
  readonly label = signal<string | undefined>(undefined);
  readonly min = signal<string | undefined>(undefined);
  readonly max = signal<string | undefined>(undefined);
  readonly required = signal(false);
  readonly hint = signal<string | undefined>(undefined);
  readonly disabled = signal(false);
  readonly errors = signal<readonly ValidationError.WithOptionalFieldTree[]>(
    [],
  );
  readonly touched = signal(false);
  readonly value = signal<string>("");
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const host = fixture.nativeElement.querySelector("fold-time") as HTMLElement;
  const input = host.querySelector("input") as HTMLInputElement;
  return { fixture, host, input };
}

describe("FoldTimeComponent", () => {
  it("wraps a native time input", () => {
    const { input } = render();
    expect(input.getAttribute("type")).toBe("time");
  });

  it("writes the chosen value back through the model on input", () => {
    const { fixture, input } = render();
    input.value = "09:30";
    input.dispatchEvent(new Event("input"));
    expect(fixture.componentInstance.value()).toBe("09:30");
  });

  it("reflects the bound value onto the native input", () => {
    const { fixture, input } = render();
    fixture.componentInstance.value.set("14:15");
    fixture.detectChanges();
    expect(input.value).toBe("14:15");
  });

  it("passes min/max bounds through to the native input", () => {
    const { fixture, input } = render();
    fixture.componentInstance.min.set("09:00");
    fixture.componentInstance.max.set("18:00");
    fixture.detectChanges();
    expect(input.getAttribute("min")).toBe("09:00");
    expect(input.getAttribute("max")).toBe("18:00");
  });

  it("associates the label with the input by id", () => {
    const { fixture, host, input } = render();
    fixture.componentInstance.label.set("Heure de retrait");
    fixture.detectChanges();
    const label = host.querySelector("label");
    expect(label?.getAttribute("for")).toBe(input.id);
  });

  it("disables the native input", () => {
    const { fixture, input } = render();
    fixture.componentInstance.disabled.set(true);
    fixture.detectChanges();
    expect(input.hasAttribute("disabled")).toBe(true);
  });

  it("surfaces the error and aria-invalid only once touched", () => {
    const { fixture, host, input } = render();
    fixture.componentInstance.errors.set([
      { kind: "required", message: "Required" },
    ]);
    fixture.detectChanges();
    expect(input.getAttribute("aria-invalid")).toBeNull();
    expect(host.querySelector(".ib-error")).toBeNull();

    input.dispatchEvent(new Event("blur"));
    fixture.detectChanges();
    expect(input.getAttribute("aria-invalid")).toBe("true");
    expect(host.querySelector(".ib-error")?.textContent?.trim()).toBe(
      "Required",
    );
  });
});
