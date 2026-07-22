import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldBadgeComponent } from "./badge.component";

/**
 * A host binds the inputs in its template, so the required `content` always has
 * a value at first change detection (the robust pattern for required inputs)
 * and we exercise the component the way callers actually use it.
 */
@Component({
  standalone: true,
  imports: [FoldBadgeComponent],
  template: `<fold-badge
    [content]="content"
    [variant]="variant"
    [radius]="radius"
  />`,
})
class HostComponent {
  content = "In repertoire";
  variant: "accent" | "info" | "warning" | "alert" = "accent";
  radius: "pill" | "square" = "pill";
}

function render(
  patch: Partial<Pick<HostComponent, "content" | "variant" | "radius">> = {},
): HTMLElement {
  const fixture = TestBed.createComponent(HostComponent);
  Object.assign(fixture.componentInstance, patch);
  fixture.detectChanges();
  return fixture.nativeElement.querySelector("fold-badge") as HTMLElement;
}

describe("FoldBadgeComponent", () => {
  it("renders the content text", () => {
    expect(render().textContent?.trim()).toBe("In repertoire");
  });

  it("defaults to the accent pill variant", () => {
    const badge = render();
    expect(badge.className).toContain("accent");
    expect(badge.className).toContain("pill");
  });

  it("reflects variant + radius on the host class", () => {
    const badge = render({ variant: "warning", radius: "square" });
    expect(badge.className).toContain("warning");
    expect(badge.className).toContain("square");
    expect(badge.className).not.toContain("accent");
    expect(badge.className).not.toContain("pill");
  });

  it("supports every semantic variant", () => {
    for (const variant of ["accent", "info", "warning", "alert"] as const) {
      expect(render({ variant }).className).toContain(variant);
    }
  });
});
