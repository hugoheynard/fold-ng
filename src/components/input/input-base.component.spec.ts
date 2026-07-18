import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { Sh3InputBaseComponent } from "./input-base.component";

@Component({
  standalone: true,
  imports: [Sh3InputBaseComponent],
  template: `<sh3-input-base
    [label]="label()"
    [for]="for()"
    [required]="required()"
    [hint]="hint()"
  >
    <input class="projected" />
  </sh3-input-base>`,
})
class HostComponent {
  readonly label = signal<string | undefined>(undefined);
  readonly for = signal<string | undefined>(undefined);
  readonly required = signal(false);
  readonly hint = signal<string | undefined>(undefined);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const el = fixture.nativeElement.querySelector(
    "sh3-input-base",
  ) as HTMLElement;
  return { fixture, el };
}

describe("Sh3InputBaseComponent", () => {
  it("projects the control", () => {
    const { el } = render();
    expect(el.querySelector("input.projected")).not.toBeNull();
  });

  it("renders a label only when one is set, wired to the control id", () => {
    const { fixture, el } = render();
    expect(el.querySelector("sh3-label")).toBeNull();

    fixture.componentInstance.label.set("Amount");
    fixture.componentInstance.for.set("num-1");
    fixture.detectChanges();
    const label = el.querySelector("sh3-label label");
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
    expect(el.querySelector("sh3-label .req")).not.toBeNull();
  });
});
