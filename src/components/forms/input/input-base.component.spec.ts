import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldInputBaseComponent } from "./input-base.component";

@Component({
  standalone: true,
  imports: [FoldInputBaseComponent],
  template: `<fold-input-base
    [label]="label()"
    [for]="for()"
    [required]="required()"
    [hint]="hint()"
    [error]="error()"
    [info]="info()"
  >
    <input class="projected" />
  </fold-input-base>`,
})
class HostComponent {
  readonly label = signal<string | undefined>(undefined);
  readonly for = signal<string | undefined>(undefined);
  readonly required = signal(false);
  readonly hint = signal<string | undefined>(undefined);
  readonly error = signal<string | undefined>(undefined);
  readonly info = signal<string | undefined>(undefined);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const el = fixture.nativeElement.querySelector(
    "fold-input-base",
  ) as HTMLElement;
  return { fixture, el };
}

describe("FoldInputBaseComponent", () => {
  it("projects the control", () => {
    const { el } = render();
    expect(el.querySelector("input.projected")).not.toBeNull();
  });

  it("renders a label only when one is set, wired to the control id", () => {
    const { fixture, el } = render();
    expect(el.querySelector("fold-label")).toBeNull();

    fixture.componentInstance.label.set("Amount");
    fixture.componentInstance.for.set("num-1");
    fixture.detectChanges();
    const label = el.querySelector("fold-label label");
    expect(label?.textContent?.trim()).toBe("Amount");
    expect(label?.getAttribute("for")).toBe("num-1");
  });

  it("renders a hint only when one is set", () => {
    const { fixture, el } = render();
    expect(el.querySelector(".ib-hint")).toBeNull();
    fixture.componentInstance.hint.set("0–300 bpm");
    fixture.detectChanges();
    expect(el.querySelector(".ib-hint")?.textContent?.trim()).toBe("0–300 bpm");
  });

  it("forwards required to the label marker", () => {
    const { fixture, el } = render();
    fixture.componentInstance.label.set("Amount");
    fixture.componentInstance.required.set(true);
    fixture.detectChanges();
    expect(el.querySelector("fold-label .req")).not.toBeNull();
  });

  it("renders the info affordance only with both a label and info text", () => {
    const { fixture, el } = render();
    expect(el.querySelector("fold-info")).toBeNull();

    // Info without a label has nothing to sit next to — still nothing.
    fixture.componentInstance.info.set("What this really changes");
    fixture.detectChanges();
    expect(el.querySelector("fold-info")).toBeNull();

    fixture.componentInstance.label.set("Amount");
    fixture.detectChanges();
    expect(el.querySelector("fold-info")).not.toBeNull();
    // The label input reaches the primitive's accessible name.
    expect(
      el.querySelector("fold-info .fi-trigger")?.getAttribute("aria-label"),
    ).toBe("More information");
  });

  it("keeps the info text out of the flow until the trigger is used", () => {
    const { fixture, el } = render();
    fixture.componentInstance.label.set("Amount");
    fixture.componentInstance.info.set("What this really changes");
    fixture.detectChanges();

    // The panel is a popover: it exists in the template but is not shown, so a
    // long explanation never pushes the next control down.
    const trigger = el.querySelector<HTMLButtonElement>(
      "fold-info .fi-trigger",
    );
    expect(trigger?.getAttribute("aria-expanded")).toBe("false");
  });

  it("carries a hint and info together — short line under, the why behind the i", () => {
    const { fixture, el } = render();
    fixture.componentInstance.label.set("Amount");
    fixture.componentInstance.hint.set("In minutes");
    fixture.componentInstance.info.set(
      "Also the step your ranges are cut into",
    );
    fixture.detectChanges();

    expect(el.querySelector(".ib-hint")?.textContent?.trim()).toBe(
      "In minutes",
    );
    expect(el.querySelector("fold-info")).not.toBeNull();
  });

  it("shows the error instead of the hint, with an alert role", () => {
    const { fixture, el } = render();
    fixture.componentInstance.hint.set("Optional helper");
    fixture.componentInstance.error.set("This field is required");
    fixture.detectChanges();

    expect(el.querySelector(".ib-hint")).toBeNull(); // error wins
    const err = el.querySelector(".ib-error");
    expect(err?.textContent?.trim()).toBe("This field is required");
    expect(err?.getAttribute("role")).toBe("alert");
  });
});
