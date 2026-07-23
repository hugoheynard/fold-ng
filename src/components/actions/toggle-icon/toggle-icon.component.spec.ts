import type { ComponentFixture } from "@angular/core/testing";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect, vi } from "vitest";
import { FoldToggleIconComponent } from "./toggle-icon.component";

function create(props: Record<string, unknown>): {
  fixture: ComponentFixture<FoldToggleIconComponent>;
  component: FoldToggleIconComponent;
  host: HTMLElement;
  button: HTMLButtonElement;
} {
  const fixture = TestBed.createComponent(FoldToggleIconComponent);
  const ref = fixture.componentRef;
  for (const [k, v] of Object.entries(props)) {
    ref.setInput(k, v);
  }
  fixture.detectChanges();
  const host = fixture.nativeElement as HTMLElement;
  const button = host.querySelector("button") as HTMLButtonElement;
  return { fixture, component: fixture.componentInstance, host, button };
}

describe("FoldToggleIconComponent", () => {
  it("always carries aria-pressed (false when off) — the toggle contract", () => {
    const { button } = create({ icon: "eye" });
    expect(button.getAttribute("aria-pressed")).toBe("false");
  });

  it("reflects active as aria-pressed=true + data-active", () => {
    const { host, button } = create({ icon: "eye", active: true });
    expect(button.getAttribute("aria-pressed")).toBe("true");
    expect(host.hasAttribute("data-active")).toBe(true);
  });

  it("goes busy while loading: spinner, aria-busy, toggling blocked", () => {
    const { component, host, button } = create({
      icon: "eye",
      loading: true,
    });
    const spy = vi.fn();
    component.toggled.subscribe(spy);
    expect(host.querySelector("fold-spinner")).toBeTruthy();
    expect(host.querySelector("fold-icon")).toBeNull();
    expect(button.getAttribute("aria-busy")).toBe("true");
    expect(button.disabled).toBe(true);
    button.click();
    expect(component.active()).toBe(false);
    expect(spy).not.toHaveBeenCalled();
  });

  it("flips active and emits toggled on click", () => {
    const { component, button } = create({ icon: "eye" });
    const spy = vi.fn();
    component.toggled.subscribe(spy);
    expect(component.active()).toBe(false);

    button.click();
    expect(component.active()).toBe(true);
    expect(spy).toHaveBeenCalled();

    button.click();
    expect(component.active()).toBe(false);
  });

  it("does not toggle or emit when disabled (incl. bare attribute)", () => {
    const { component, button } = create({ icon: "edit", disabled: "" });
    const spy = vi.fn();
    component.toggled.subscribe(spy);
    button.click();
    expect(spy).not.toHaveBeenCalled();
    expect(component.active()).toBe(false);
  });

  it("forwards tooltip to title + aria-label, and exposes shape/size/tone", () => {
    const { host, button } = create({
      icon: "bin",
      tooltip: "Mute",
      shape: "round",
      size: "lg",
      tone: "accent",
    });
    expect(button.getAttribute("title")).toBe("Mute");
    expect(button.getAttribute("aria-label")).toBe("Mute");
    expect(host.getAttribute("data-shape")).toBe("round");
    expect(host.getAttribute("data-size")).toBe("lg");
    expect(host.getAttribute("data-tone")).toBe("accent");
  });
});
