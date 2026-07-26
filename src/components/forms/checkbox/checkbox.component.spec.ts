import { Component, signal } from "@angular/core";
import { TestBed, type ComponentFixture } from "@angular/core/testing";
import { describe, it, expect, vi } from "vitest";
import { FoldCheckboxComponent } from "./checkbox.component";

@Component({
  standalone: true,
  imports: [FoldCheckboxComponent],
  template: `
    <fold-checkbox
      [(checked)]="checked"
      [label]="label()"
      [ariaLabel]="ariaLabel()"
      [indeterminate]="indeterminate()"
      [disabled]="disabled()"
      [required]="required()"
      [hint]="hint()"
      [errors]="errors()"
      [(touched)]="touched"
      [size]="size()"
    />
  `,
})
class HostComponent {
  readonly checked = signal(false);
  readonly label = signal<string | undefined>("Remember me");
  readonly ariaLabel = signal<string | undefined>(undefined);
  readonly indeterminate = signal(false);
  readonly disabled = signal(false);
  readonly required = signal(false);
  readonly hint = signal<string | undefined>(undefined);
  readonly errors = signal<readonly { message: string; kind: string }[]>([]);
  readonly touched = signal(false);
  readonly size = signal<"sm" | "md">("md");
}

function setup(): {
  fixture: ComponentFixture<HostComponent>;
  host: HostComponent;
  el: HTMLElement;
  input: () => HTMLInputElement;
} {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const el = fixture.nativeElement as HTMLElement;
  return {
    fixture,
    host: fixture.componentInstance,
    el,
    input: () => el.querySelector<HTMLInputElement>("input.cb-native")!,
  };
}

describe("FoldCheckboxComponent", () => {
  it("renders a native checkbox that reflects the checked model", () => {
    const { fixture, host, input } = setup();
    expect(input().type).toBe("checkbox");
    expect(input().checked).toBe(false);

    host.checked.set(true);
    fixture.detectChanges();
    expect(input().checked).toBe(true);
  });

  it("toggling the native input drives the two-way checked model", () => {
    const { fixture, host, input } = setup();
    input().checked = true;
    input().dispatchEvent(new Event("change"));
    fixture.detectChanges();
    expect(host.checked()).toBe(true);
  });

  it("sets the native indeterminate property (a property, not an attribute)", () => {
    const { fixture, host, input } = setup();
    expect(input().indeterminate).toBe(false);
    host.indeterminate.set(true);
    fixture.detectChanges();
    expect(input().indeterminate).toBe(true);
  });

  it("wraps a visible label (click-to-toggle) and drops the redundant aria-label", () => {
    const { el, input } = setup();
    const label = el.querySelector("label.cb");
    expect(label?.querySelector("input")).toBe(input());
    expect(el.querySelector(".cb-label")?.textContent?.trim()).toBe(
      "Remember me",
    );
    // A visible label names the control → no aria-label.
    expect(input().getAttribute("aria-label")).toBeNull();
  });

  it("uses ariaLabel as the accessible name when there is no visible label", () => {
    const { fixture, host, input } = setup();
    host.label.set(undefined);
    host.ariaLabel.set("Select row");
    fixture.detectChanges();
    expect(input().getAttribute("aria-label")).toBe("Select row");
  });

  it("reflects disabled + required on the native input", () => {
    const { fixture, host, el, input } = setup();
    host.disabled.set(true);
    host.required.set(true);
    fixture.detectChanges();
    expect(input().disabled).toBe(true);
    expect(input().required).toBe(true);
    expect(el.querySelector(".cb")?.classList.contains("is-disabled")).toBe(
      true,
    );
  });

  it("shows the hint, then replaces it with the error once touched + invalid", () => {
    const { fixture, host, el, input } = setup();
    host.hint.set("Optional");
    fixture.detectChanges();
    const msg = () => el.querySelector(".cb-msg");
    expect(msg()?.textContent?.trim()).toBe("Optional");
    expect(msg()?.classList.contains("is-error")).toBe(false);
    expect(input().getAttribute("aria-describedby")).toBe(`${input().id}-hint`);

    host.errors.set([{ message: "Required", kind: "required" }]);
    host.touched.set(true);
    fixture.detectChanges();
    expect(msg()?.textContent?.trim()).toBe("Required");
    expect(msg()?.classList.contains("is-error")).toBe(true);
    expect(input().getAttribute("aria-invalid")).toBe("true");
    expect(input().getAttribute("aria-describedby")).toBe(
      `${input().id}-error`,
    );
  });

  it("does not surface an error until the field is touched", () => {
    const { fixture, host, el } = setup();
    host.errors.set([{ message: "Required", kind: "required" }]);
    fixture.detectChanges();
    expect(el.querySelector(".cb-msg.is-error")).toBeNull();
  });

  it("marks touched on blur", () => {
    const { host, input } = setup();
    input().dispatchEvent(new Event("blur"));
    expect(host.touched()).toBe(true);
  });

  it("applies the size host class", () => {
    const { fixture, host, el } = setup();
    expect((el.querySelector("fold-checkbox") ?? el).classList).toBeDefined();
    host.size.set("sm");
    fixture.detectChanges();
    const cb = el.querySelector("fold-checkbox");
    expect(cb?.classList.contains("sm")).toBe(true);
  });

  it("warns in dev when it has neither a label nor an ariaLabel", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => undefined);
    const fixture = TestBed.createComponent(HostComponent);
    fixture.componentInstance.label.set(undefined);
    fixture.componentInstance.ariaLabel.set(undefined);
    fixture.detectChanges();
    expect(warn).toHaveBeenCalledWith(
      expect.stringContaining("no accessible name"),
    );
    warn.mockRestore();
  });
});
