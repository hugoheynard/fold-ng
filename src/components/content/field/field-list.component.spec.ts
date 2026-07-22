import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldFieldListComponent } from "./field-list.component";
import { FoldFieldComponent } from "./field.component";

@Component({
  standalone: true,
  imports: [FoldFieldListComponent, FoldFieldComponent],
  template: `<fold-field-list>
    <fold-field label="Contract type">CDI</fold-field>
    <fold-field label="Job title">Sound engineer</fold-field>
  </fold-field-list>`,
})
class HostComponent {}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const el = fixture.nativeElement.querySelector(
    "fold-field-list",
  ) as HTMLElement;
  return { fixture, el };
}

describe("FoldFieldListComponent", () => {
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
