import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { Sh3StickyColumnDirective } from "./sticky-column.directive";

@Component({
  standalone: true,
  imports: [Sh3StickyColumnDirective],
  template: `<aside sh3StickyColumn><span>a</span><span>b</span></aside>`,
})
class HostComponent {}

describe("Sh3StickyColumnDirective", () => {
  it("lays the host out as a sticky flex column via inline styles", () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    const aside = fixture.nativeElement.querySelector("aside") as HTMLElement;

    expect(aside.style.display).toBe("flex");
    expect(aside.style.flexDirection).toBe("column");
    expect(aside.style.alignSelf).toBe("start");
    // tunable via CSS vars (default fallbacks kept in the value)
    expect(aside.style.position).toContain("--sh3-sticky-column-position");
    expect(aside.style.top).toContain("--sh3-sticky-column-top");
    expect(aside.style.gap).toContain("--sh3-sticky-column-gap");
  });
});
