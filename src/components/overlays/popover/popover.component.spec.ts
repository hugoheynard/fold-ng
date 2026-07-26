import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldPopoverComponent } from "./popover.component";
import { FoldPopoverTriggerDirective } from "./popover-trigger.directive";

@Component({
  standalone: true,
  imports: [FoldPopoverComponent, FoldPopoverTriggerDirective],
  template: `<fold-popover [(open)]="open">
    <button class="trigger" foldPopoverTrigger>Open</button>
    <div class="content">Panel body</div>
  </fold-popover>`,
})
class HostComponent {
  readonly open = signal(false);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  fixture.detectChanges(); // flush the contentChild-driven aria effect
  const host = fixture.nativeElement as HTMLElement;
  const trigger = () => host.querySelector(".trigger") as HTMLButtonElement;
  const panel = () => host.querySelector(".fpop-panel") as HTMLElement;
  return { fixture, host, trigger, panel };
}

describe("FoldPopoverComponent", () => {
  it("wires aria-haspopup + aria-controls onto the projected trigger", () => {
    const r = render();
    const t = r.trigger();
    expect(t.getAttribute("aria-haspopup")).toBe("dialog");
    expect(t.getAttribute("aria-controls")).toBe(r.panel().id);
    expect(t.getAttribute("aria-expanded")).toBe("false");
  });

  it("toggles open on trigger click and reflects aria-expanded", () => {
    const r = render();
    r.trigger().click();
    r.fixture.detectChanges();
    expect(r.fixture.componentInstance.open()).toBe(true);
    expect(r.trigger().getAttribute("aria-expanded")).toBe("true");

    r.trigger().click();
    r.fixture.detectChanges();
    expect(r.fixture.componentInstance.open()).toBe(false);
    expect(r.trigger().getAttribute("aria-expanded")).toBe("false");
  });

  it("opens on ArrowDown from the trigger", () => {
    const r = render();
    r.trigger().dispatchEvent(
      new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true }),
    );
    r.fixture.detectChanges();
    expect(r.fixture.componentInstance.open()).toBe(true);
  });

  it("is controllable through the two-way open model", () => {
    const r = render();
    r.fixture.componentInstance.open.set(true);
    r.fixture.detectChanges();
    expect(r.trigger().getAttribute("aria-expanded")).toBe("true");
  });

  it("projects the panel content with the linked id", () => {
    const r = render();
    expect(r.panel().textContent).toContain("Panel body");
    expect(r.panel().id).toBeTruthy();
  });
});
