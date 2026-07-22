import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldButtonComponent } from "./button.component";

function mount() {
  const fixture = TestBed.createComponent(FoldButtonComponent);
  const host = fixture.nativeElement as HTMLElement;
  fixture.detectChanges();
  const button = host.querySelector("button") as HTMLButtonElement;
  return { fixture, host, button };
}

describe("FoldButtonComponent", () => {
  it("renders a native button, type=button by default", () => {
    const { button } = mount();
    expect(button).toBeTruthy();
    expect(button.type).toBe("button");
  });

  it("applies the variant + size as host classes", () => {
    const { fixture, host } = mount();
    expect(host.classList.contains("primary")).toBe(true);
    expect(host.classList.contains("md")).toBe(true);

    fixture.componentRef.setInput("variant", "ghost");
    fixture.componentRef.setInput("size", "sm");
    fixture.detectChanges();
    expect(host.classList.contains("ghost")).toBe(true);
    expect(host.classList.contains("sm")).toBe(true);
    expect(host.classList.contains("primary")).toBe(false);
  });

  it("defaults to the rounded shape and switches to pill on demand", () => {
    const { fixture, host } = mount();
    expect(host.classList.contains("rounded")).toBe(true);
    expect(host.classList.contains("pill")).toBe(false);

    fixture.componentRef.setInput("shape", "pill");
    fixture.detectChanges();
    expect(host.classList.contains("pill")).toBe(true);
    expect(host.classList.contains("rounded")).toBe(false);
  });

  it("toggles the block (full-width) class", () => {
    const { fixture, host } = mount();
    expect(host.classList.contains("block")).toBe(false);
    fixture.componentRef.setInput("block", true);
    fixture.detectChanges();
    expect(host.classList.contains("block")).toBe(true);
  });

  it("renders a leading/trailing icon shorthand sized from the button", () => {
    const { fixture, button } = mount();
    expect(button.querySelector("fold-icon")).toBeNull();

    fixture.componentRef.setInput("icon", "check");
    fixture.componentRef.setInput("iconTrailing", "chevron-right");
    fixture.componentRef.setInput("size", "lg");
    fixture.detectChanges();
    const icons = button.querySelectorAll("fold-icon");
    expect(icons.length).toBe(2);
    // lg → 18px, derived (not hand-passed) so it stays consistent
    expect(fixture.componentInstance.iconSize()).toBe(18);
  });

  it("emits clicked on press but not while disabled", () => {
    const { fixture, button } = mount();
    let clicks = 0;
    fixture.componentInstance.clicked.subscribe(() => (clicks += 1));

    button.click();
    expect(clicks).toBe(1);

    fixture.componentRef.setInput("disabled", true);
    fixture.detectChanges();
    expect(button.disabled).toBe(true);
    button.click();
    expect(clicks).toBe(1);
  });

  it("forwards type=submit to the native button", () => {
    const { fixture, button } = mount();
    fixture.componentRef.setInput("type", "submit");
    fixture.detectChanges();
    expect(button.type).toBe("submit");
  });
});
