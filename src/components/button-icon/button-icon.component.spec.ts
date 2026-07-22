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

  it("forwards tooltip to title + aria-label", () => {
    const { fixture } = create({ icon: "bin", tooltip: "Delete row" });
    const btn = fixture.nativeElement.querySelector("button") as HTMLElement;
    expect(btn.getAttribute("title")).toBe("Delete row");
    expect(btn.getAttribute("aria-label")).toBe("Delete row");
  });

  it("toggles the active model and emits clicked", () => {
    const { fixture, component } = create({ icon: "eye" });
    const spy = vi.fn();
    component.clicked.subscribe(spy);
    expect(component.active()).toBe(false);

    (fixture.nativeElement.querySelector("button") as HTMLElement).click();
    expect(component.active()).toBe(true);
    expect(spy).toHaveBeenCalled();

    (fixture.nativeElement.querySelector("button") as HTMLElement).click();
    expect(component.active()).toBe(false);
  });

  it("exposes active state via data-active + aria-pressed", () => {
    const { fixture, component } = create({ icon: "eye", active: true });
    const host = fixture.nativeElement as HTMLElement;
    const btn = host.querySelector("button") as HTMLElement;
    expect(host.hasAttribute("data-active")).toBe(true);
    expect(btn.getAttribute("aria-pressed")).toBe("true");
    component.active.set(false);
    fixture.detectChanges();
    expect(host.hasAttribute("data-active")).toBe(false);
  });

  it("does not emit clicked when disabled", () => {
    const { fixture, component } = create({ icon: "edit", disabled: true });
    const spy = vi.fn();
    component.clicked.subscribe(spy);
    (fixture.nativeElement.querySelector("button") as HTMLElement).click();
    expect(spy).not.toHaveBeenCalled();
    expect(component.active()).toBe(false);
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
