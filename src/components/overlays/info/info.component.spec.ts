import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldInfoComponent } from "./info.component";

@Component({
  standalone: true,
  imports: [FoldInfoComponent],
  template: `<fold-info [text]="text()" [label]="label()" />`,
})
class HostComponent {
  readonly text = signal("Everything after this delay is bookable.");
  readonly label = signal("More information");
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  fixture.detectChanges(); // flush the popover's contentChild-driven aria effect
  const host = fixture.nativeElement as HTMLElement;
  return {
    fixture,
    cmp: fixture.componentInstance,
    trigger: () => host.querySelector(".fi-trigger") as HTMLButtonElement,
    panel: () => host.querySelector(".fi-panel") as HTMLElement | null,
  };
}

describe("FoldInfoComponent", () => {
  it("renders a labelled trigger whose glyph is hidden from assistive tech", () => {
    const r = render();
    // The `i` is decoration: a screen reader must hear the label, not "i".
    expect(r.trigger().getAttribute("aria-label")).toBe("More information");
    expect(r.trigger().querySelector("[aria-hidden='true']")?.textContent).toBe(
      "i",
    );
    expect(r.trigger().getAttribute("type")).toBe("button");
  });

  it("is a button, not a hover target — help must be reachable by touch", () => {
    const r = render();
    expect(r.trigger().tagName).toBe("BUTTON");
    expect(r.trigger().getAttribute("aria-haspopup")).toBe("dialog");
    expect(r.trigger().getAttribute("aria-expanded")).toBe("false");
  });

  it("reveals the text on click and wires aria-controls to the panel", () => {
    const r = render();
    r.trigger().click();
    r.fixture.detectChanges();

    const panel = r.panel();
    expect(panel?.textContent?.trim()).toBe(
      "Everything after this delay is bookable.",
    );
    expect(r.trigger().getAttribute("aria-expanded")).toBe("true");
    expect(r.trigger().getAttribute("aria-controls")).toBe(
      panel?.closest("[id]")?.id,
    );
  });

  it("localises its accessible name", () => {
    const r = render();
    r.cmp.label.set("En savoir plus sur le délai de prévenance");
    r.fixture.detectChanges();
    expect(r.trigger().getAttribute("aria-label")).toBe(
      "En savoir plus sur le délai de prévenance",
    );
  });
});
