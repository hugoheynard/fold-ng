import { Component, signal } from "@angular/core";
import type { ValidationError } from "@angular/forms/signals";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldSelectComponent } from "./select.component";

@Component({
  standalone: true,
  imports: [FoldSelectComponent],
  template: `<fold-select
    [label]="label()"
    [required]="required()"
    [hint]="hint()"
    [placeholder]="placeholder()"
    [disabled]="disabled()"
    [errors]="errors()"
    [(touched)]="touched"
    [(value)]="value"
  >
    <option value="eur">EUR</option>
    <option value="usd">USD</option>
  </fold-select>`,
})
class HostComponent {
  readonly label = signal<string | undefined>(undefined);
  readonly required = signal(false);
  readonly hint = signal<string | undefined>(undefined);
  readonly placeholder = signal<string | undefined>(undefined);
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
  const host = fixture.nativeElement.querySelector(
    "fold-select",
  ) as HTMLElement;
  const select = host.querySelector("select") as HTMLSelectElement;
  return { fixture, host, select };
}

describe("FoldSelectComponent", () => {
  it("wraps a native select and projects the options", () => {
    const { select } = render();
    expect(select).not.toBeNull();
    expect(select.querySelectorAll("option").length).toBe(2);
  });

  it("writes the chosen value back through the model on change", () => {
    const { fixture, select } = render();
    select.value = "usd";
    select.dispatchEvent(new Event("change"));
    expect(fixture.componentInstance.value()).toBe("usd");
  });

  it("reflects the bound value onto the native select", () => {
    const { fixture, select } = render();
    fixture.componentInstance.value.set("eur");
    fixture.detectChanges();
    expect(select.value).toBe("eur");
  });

  it("renders a leading disabled placeholder option when given", () => {
    const { fixture, select } = render();
    fixture.componentInstance.placeholder.set("Choisir…");
    fixture.detectChanges();
    const first = select.querySelector("option") as HTMLOptionElement;
    expect(first.textContent?.trim()).toBe("Choisir…");
    expect(first.disabled).toBe(true);
    expect(first.hidden).toBe(true);
  });

  it("associates the label with the select by id", () => {
    const { fixture, host, select } = render();
    fixture.componentInstance.label.set("Devise");
    fixture.detectChanges();
    const label = host.querySelector("label");
    expect(label?.getAttribute("for")).toBe(select.id);
  });

  it("disables the native select", () => {
    const { fixture, select } = render();
    fixture.componentInstance.disabled.set(true);
    fixture.detectChanges();
    expect(select.disabled).toBe(true);
  });

  it("links the hint to the select via aria-describedby", () => {
    const { fixture, select } = render();
    expect(select.getAttribute("aria-describedby")).toBeNull();
    fixture.componentInstance.hint.set("Pick one.");
    fixture.detectChanges();
    const describedBy = select.getAttribute("aria-describedby");
    expect(describedBy).toMatch(/-hint$/);
    expect(
      document.getElementById(describedBy as string)?.textContent,
    ).toContain("Pick one.");
  });

  it("surfaces the error and aria-invalid only once touched", () => {
    const { fixture, host, select } = render();
    fixture.componentInstance.errors.set([
      { kind: "required", message: "Required" },
    ]);
    fixture.detectChanges();
    // untouched → nothing surfaces yet
    expect(select.getAttribute("aria-invalid")).toBeNull();
    expect(host.querySelector(".ib-error")).toBeNull();

    select.dispatchEvent(new Event("blur"));
    fixture.detectChanges();
    expect(select.getAttribute("aria-invalid")).toBe("true");
    expect(host.querySelector(".ib-error")?.textContent?.trim()).toBe(
      "Required",
    );
  });
});
