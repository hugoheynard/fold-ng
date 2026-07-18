import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { Sh3LabelComponent } from "./label.component";

@Component({
  standalone: true,
  imports: [Sh3LabelComponent],
  template: `<sh3-label
    [text]="text()"
    [for]="for()"
    [required]="required()"
  />`,
})
class HostComponent {
  readonly text = signal("Job title");
  readonly for = signal<string | undefined>(undefined);
  readonly required = signal(false);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const el = fixture.nativeElement.querySelector("sh3-label") as HTMLElement;
  return { fixture, el };
}

describe("Sh3LabelComponent", () => {
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

  it("points the label at the control via for", () => {
    const { fixture, el } = render();
    fixture.componentInstance.for.set("field-1");
    fixture.detectChanges();
    expect(el.querySelector("label")?.getAttribute("for")).toBe("field-1");
  });
});
