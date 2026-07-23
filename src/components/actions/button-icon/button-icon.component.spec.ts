import type { ComponentFixture } from "@angular/core/testing";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect, vi } from "vitest";
import { FoldButtonIconComponent } from "./button-icon.component";

function create(props: Record<string, unknown>): {
  fixture: ComponentFixture<FoldButtonIconComponent>;
  component: FoldButtonIconComponent;
} {
  const fixture = TestBed.createComponent(FoldButtonIconComponent);
  const ref = fixture.componentRef;
  for (const [k, v] of Object.entries(props)) {
    ref.setInput(k, v);
  }
  fixture.detectChanges();
  return { fixture, component: fixture.componentInstance };
}

describe("FoldButtonIconComponent", () => {
  it("renders a button with the requested icon", () => {
    const { fixture } = create({ icon: "edit" });
    expect(fixture.nativeElement.querySelector("button")).toBeTruthy();
    expect(fixture.nativeElement.querySelector("fold-icon")).toBeTruthy();
  });

  it("exposes shape/size/tone via data attributes for SCSS targeting", () => {
    const { fixture } = create({
      icon: "edit",
      shape: "round",
      size: "lg",
      tone: "accent",
    });
    const host = fixture.nativeElement as HTMLElement;
    expect(host.getAttribute("data-shape")).toBe("round");
    expect(host.getAttribute("data-size")).toBe("lg");
    expect(host.getAttribute("data-tone")).toBe("accent");
  });

  it("is momentary — never claims a pressed state (no aria-pressed)", () => {
    const { fixture } = create({ icon: "bin" });
    const btn = fixture.nativeElement.querySelector("button") as HTMLElement;
    btn.click();
    expect(btn.hasAttribute("aria-pressed")).toBe(false);
    expect(
      (fixture.nativeElement as HTMLElement).hasAttribute("data-active"),
    ).toBe(false);
  });

  it("goes busy while loading: spinner replaces the icon, aria-busy, no emit", () => {
    const { fixture, component } = create({ icon: "reload", loading: true });
    const spy = vi.fn();
    component.clicked.subscribe(spy);
    const host = fixture.nativeElement as HTMLElement;
    const btn = host.querySelector("button") as HTMLButtonElement;
    expect(host.querySelector("fold-spinner")).toBeTruthy();
    expect(host.querySelector("fold-icon")).toBeNull();
    expect(btn.getAttribute("aria-busy")).toBe("true");
    expect(btn.disabled).toBe(true);
    expect(host.getAttribute("data-loading")).toBe("");
    btn.click();
    expect(spy).not.toHaveBeenCalled();
  });

  it("forwards tooltip to title + aria-label", () => {
    const { fixture } = create({ icon: "bin", tooltip: "Delete row" });
    const btn = fixture.nativeElement.querySelector("button") as HTMLElement;
    expect(btn.getAttribute("title")).toBe("Delete row");
    expect(btn.getAttribute("aria-label")).toBe("Delete row");
  });

  it("emits clicked on press", () => {
    const { fixture, component } = create({ icon: "eye" });
    const spy = vi.fn();
    component.clicked.subscribe(spy);
    (fixture.nativeElement.querySelector("button") as HTMLElement).click();
    expect(spy).toHaveBeenCalledOnce();
  });

  it("does not emit when disabled (incl. the bare attribute form)", () => {
    const { fixture, component } = create({ icon: "edit", disabled: "" });
    const spy = vi.fn();
    component.clicked.subscribe(spy);
    (fixture.nativeElement.querySelector("button") as HTMLElement).click();
    expect(spy).not.toHaveBeenCalled();
  });

  it("maps button size to the icon size preset", () => {
    expect(create({ icon: "edit", size: "xs" }).component.iconSize()).toBe(
      "xs",
    );
    expect(create({ icon: "edit", size: "sm" }).component.iconSize()).toBe(
      "sm",
    );
    expect(create({ icon: "edit", size: "md" }).component.iconSize()).toBe(
      "sm",
    );
    expect(create({ icon: "edit", size: "lg" }).component.iconSize()).toBe(
      "md",
    );
  });
});
