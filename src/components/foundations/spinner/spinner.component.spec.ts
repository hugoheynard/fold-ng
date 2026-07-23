import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldSpinnerComponent } from "./spinner.component";
import type { FoldSpinnerSize } from "./spinner.component";

@Component({
  standalone: true,
  imports: [FoldSpinnerComponent],
  template: `<fold-spinner [size]="size()" [label]="label()" />`,
})
class Host {
  readonly size = signal<FoldSpinnerSize>("md");
  readonly label = signal<string | undefined>(undefined);
}

function mount() {
  const fixture = TestBed.createComponent(Host);
  fixture.detectChanges();
  const el = fixture.nativeElement.querySelector("fold-spinner") as HTMLElement;
  return { fixture, host: fixture.componentInstance, el };
}

describe("FoldSpinnerComponent", () => {
  it("renders the arc and resolves a token size to the icon-size var", () => {
    const { el } = mount();
    expect(el.querySelector("svg")).toBeTruthy();
    expect(el.style.getPropertyValue("--fold-spinner-size")).toContain(
      "--fold-icon-size-md",
    );
  });

  it("accepts a pixel number", () => {
    const { fixture, host, el } = mount();
    host.size.set(18);
    fixture.detectChanges();
    expect(el.style.getPropertyValue("--fold-spinner-size")).toBe("18px");
  });

  it("is decorative (aria-hidden) with no label", () => {
    const { el } = mount();
    expect(el.getAttribute("aria-hidden")).toBe("true");
    expect(el.getAttribute("role")).toBeNull();
    expect(el.getAttribute("aria-label")).toBeNull();
  });

  it("announces as a status region once given a label", () => {
    const { fixture, host, el } = mount();
    host.label.set("Loading");
    fixture.detectChanges();
    expect(el.getAttribute("aria-hidden")).toBeNull();
    expect(el.getAttribute("role")).toBe("status");
    expect(el.getAttribute("aria-label")).toBe("Loading");
  });
});
