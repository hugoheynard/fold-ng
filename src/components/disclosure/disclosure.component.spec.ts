import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldDisclosureComponent } from "./disclosure.component";

@Component({
  standalone: true,
  imports: [FoldDisclosureComponent],
  template: `<fold-disclosure [(open)]="open">
    <span summary>How it works</span>
    <p class="body">The revealed panel.</p>
  </fold-disclosure>`,
})
class HostComponent {
  readonly open = signal(false);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const root = fixture.nativeElement as HTMLElement;
  return {
    fixture,
    host: root.querySelector("fold-disclosure") as HTMLElement,
    summary: root.querySelector(".disc-summary") as HTMLButtonElement,
    panel: root.querySelector(".disc-panel") as HTMLElement,
  };
}

describe("FoldDisclosureComponent", () => {
  it("projects the summary and the panel content", () => {
    const { host } = render();
    expect(host.querySelector(".disc-label")?.textContent).toBe("How it works");
    expect(host.querySelector(".disc-panel .body")?.textContent).toBe(
      "The revealed panel.",
    );
  });

  it("starts closed, and toggles open on click", () => {
    const { fixture, host, summary } = render();
    expect(host.classList.contains("is-open")).toBe(false);
    expect(summary.getAttribute("aria-expanded")).toBe("false");

    summary.click();
    fixture.detectChanges();
    expect(host.classList.contains("is-open")).toBe(true);
    expect(summary.getAttribute("aria-expanded")).toBe("true");

    summary.click();
    fixture.detectChanges();
    expect(host.classList.contains("is-open")).toBe(false);
  });

  it("wires the summary to the panel by id (aria-controls)", () => {
    const { summary, panel } = render();
    const controls = summary.getAttribute("aria-controls");
    expect(controls).toBeTruthy();
    expect(panel.id).toBe(controls);
    expect(panel.getAttribute("role")).toBe("region");
  });

  it("is two-way: a host that flips `open` opens it, and a click writes back", () => {
    const { fixture, host, summary } = render();
    // parent → component
    fixture.componentInstance.open.set(true);
    fixture.detectChanges();
    expect(host.classList.contains("is-open")).toBe(true);
    expect(summary.getAttribute("aria-expanded")).toBe("true");

    // component → parent
    summary.click();
    fixture.detectChanges();
    expect(fixture.componentInstance.open()).toBe(false);
  });
});
