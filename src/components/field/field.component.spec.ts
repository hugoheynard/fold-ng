import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { Sh3FieldComponent } from "./field.component";

@Component({
  standalone: true,
  imports: [Sh3FieldComponent],
  template: `<sh3-field
    [label]="label()"
    [empty]="empty()"
    [placeholder]="placeholder()"
    >{{ value() }}</sh3-field
  >`,
})
class HostComponent {
  readonly label = signal("Job title");
  readonly empty = signal(false);
  readonly placeholder = signal("—");
  readonly value = signal("Sound engineer");
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const el = fixture.nativeElement.querySelector("sh3-field") as HTMLElement;
  return { fixture, el };
}

describe("Sh3FieldComponent", () => {
  it("renders the label as a dt and the projected value as a dd", () => {
    const { el } = render();
    const dt = el.querySelector("dt.fl-key");
    const dd = el.querySelector("dd.fl-val");
    expect(dt?.textContent?.trim()).toBe("Job title");
    expect(dd?.textContent?.trim()).toBe("Sound engineer");
    expect(dd?.classList.contains("fl-empty")).toBe(false);
  });

  it("swaps the value for the placeholder when empty", () => {
    const { fixture, el } = render();
    fixture.componentInstance.empty.set(true);
    fixture.detectChanges();
    const dd = el.querySelector("dd.fl-val");
    expect(dd?.classList.contains("fl-empty")).toBe(true);
    expect(dd?.textContent?.trim()).toBe("—");
    // the projected value is gone, not merely hidden
    expect(el.textContent).not.toContain("Sound engineer");
  });

  it("honours a custom placeholder", () => {
    const { fixture, el } = render();
    fixture.componentInstance.empty.set(true);
    fixture.componentInstance.placeholder.set("Non renseigné");
    fixture.detectChanges();
    expect(el.querySelector("dd.fl-val")?.textContent?.trim()).toBe(
      "Non renseigné",
    );
  });

  it("reacts when the empty flag flips back to false", () => {
    const { fixture, el } = render();
    fixture.componentInstance.empty.set(true);
    fixture.detectChanges();
    fixture.componentInstance.empty.set(false);
    fixture.detectChanges();
    const dd = el.querySelector("dd.fl-val");
    expect(dd?.classList.contains("fl-empty")).toBe(false);
    expect(dd?.textContent?.trim()).toBe("Sound engineer");
  });
});
