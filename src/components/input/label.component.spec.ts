import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldLabelComponent } from "./label.component";

@Component({
  standalone: true,
  imports: [FoldLabelComponent],
  template: `<fold-label
    [text]="text()"
    [for]="for()"
    [required]="required()"
    [optional]="optional()"
    [optionalLabel]="optionalLabel()"
  />`,
})
class HostComponent {
  readonly text = signal("Job title");
  readonly for = signal<string | undefined>(undefined);
  readonly required = signal(false);
  readonly optional = signal(false);
  readonly optionalLabel = signal("optional");
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const el = fixture.nativeElement.querySelector("fold-label") as HTMLElement;
  return { fixture, el };
}

describe("FoldLabelComponent", () => {
  it("renders the text in a <label>", () => {
    const { el } = render();
    expect(el.querySelector("label")?.textContent?.trim()).toBe("Job title");
  });

  it("shows the required marker only when required", () => {
    const { fixture, el } = render();
    expect(el.querySelector(".req")).toBeNull();
    fixture.componentInstance.required.set(true);
    fixture.detectChanges();
    expect(el.querySelector(".req")?.textContent).toBe("*");
  });

  it("shows a lighter optional marker, overridable and hidden by default", () => {
    const { fixture, el } = render();
    expect(el.querySelector(".opt")).toBeNull();

    fixture.componentInstance.optional.set(true);
    fixture.detectChanges();
    expect(el.querySelector(".opt")?.textContent?.trim()).toBe("(optional)");

    fixture.componentInstance.optionalLabel.set("optionnel");
    fixture.detectChanges();
    expect(el.querySelector(".opt")?.textContent?.trim()).toBe("(optionnel)");
  });

  it("prefers the required marker over the optional one", () => {
    const { fixture, el } = render();
    fixture.componentInstance.required.set(true);
    fixture.componentInstance.optional.set(true);
    fixture.detectChanges();
    expect(el.querySelector(".req")).not.toBeNull();
    expect(el.querySelector(".opt")).toBeNull();
  });

  it("points the label at the control via for", () => {
    const { fixture, el } = render();
    fixture.componentInstance.for.set("field-1");
    fixture.detectChanges();
    expect(el.querySelector("label")?.getAttribute("for")).toBe("field-1");
  });
});
