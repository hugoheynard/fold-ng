import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { Sh3FieldListComponent } from "./field-list.component";
import { Sh3FieldComponent } from "./field.component";

@Component({
  standalone: true,
  imports: [Sh3FieldListComponent, Sh3FieldComponent],
  template: `<sh3-field-list>
    <sh3-field label="Contract type">CDI</sh3-field>
    <sh3-field label="Job title">Sound engineer</sh3-field>
  </sh3-field-list>`,
})
class HostComponent {}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const el = fixture.nativeElement.querySelector(
    "sh3-field-list",
  ) as HTMLElement;
  return { fixture, el };
}

describe("Sh3FieldListComponent", () => {
  it("renders a <dl> as the semantic container", () => {
    const { el } = render();
    expect(el.querySelector("dl.fl")).not.toBeNull();
  });

  it("projects the fields as dt/dd pairs inside the list", () => {
    const { el } = render();
    const dl = el.querySelector("dl.fl") as HTMLElement;
    // both fields land inside the dl (via projection), each as a term/def pair
    const terms = dl.querySelectorAll("dt.fl-key");
    const defs = dl.querySelectorAll("dd.fl-val");
    expect(terms.length).toBe(2);
    expect(defs.length).toBe(2);
    expect(terms[0].textContent?.trim()).toBe("Contract type");
    expect(defs[0].textContent?.trim()).toBe("CDI");
  });
});
