import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import {
  FoldCalloutComponent,
  type FoldCalloutAppearance,
  type FoldCalloutVariant,
} from "./callout.component";

@Component({
  standalone: true,
  imports: [FoldCalloutComponent],
  template: `<fold-callout
    [variant]="variant()"
    [appearance]="appearance()"
    [icon]="icon()"
    [announce]="announce()"
  >
    This contract is <strong>locked</strong>.
    <button actions class="act">Renew</button>
  </fold-callout>`,
})
class HostComponent {
  readonly variant = signal<FoldCalloutVariant>("neutral");
  readonly appearance = signal<FoldCalloutAppearance>("inset");
  readonly icon = signal<"clock" | undefined>(undefined);
  readonly announce = signal(false);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const callout = (fixture.nativeElement as HTMLElement).querySelector(
    "fold-callout",
  ) as HTMLElement;
  return { fixture, callout };
}

describe("FoldCalloutComponent", () => {
  it("projects the message with its markup, and actions into their slot", () => {
    const { callout } = render();
    expect(callout.querySelector(".callout-body strong")?.textContent).toBe(
      "locked",
    );
    expect(callout.querySelector(".callout-actions .act")).not.toBeNull();
    // The message must not swallow the actions.
    expect(callout.querySelector(".callout-body .act")).toBeNull();
  });

  it("is a neutral, inset, passive note by default", () => {
    const { callout } = render();
    expect(callout.classList.contains("v-neutral")).toBe(true);
    expect(callout.classList.contains("is-flat")).toBe(false);
    expect(callout.getAttribute("role")).toBe("note");
    expect(callout.getAttribute("aria-live")).toBeNull();
  });

  it("tints with the brand on accent — a promotion, not a severity", () => {
    const { fixture, callout } = render();
    fixture.componentInstance.variant.set("accent");
    fixture.detectChanges();
    expect(callout.classList.contains("v-accent")).toBe(true);
    // Announced, it stays polite: nothing about the brand tint is critical.
    fixture.componentInstance.announce.set(true);
    fixture.detectChanges();
    expect(callout.getAttribute("role")).toBe("status");
  });

  it("marks the variant and the flat appearance", () => {
    const { fixture, callout } = render();
    fixture.componentInstance.variant.set("warning");
    fixture.componentInstance.appearance.set("flat");
    fixture.detectChanges();
    expect(callout.classList.contains("v-warning")).toBe(true);
    expect(callout.classList.contains("v-neutral")).toBe(false);
    expect(callout.classList.contains("is-flat")).toBe(true);
  });

  it("carries a default glyph per variant, overridable", () => {
    const { fixture, callout } = render();
    const glyph = () =>
      callout.querySelector("fold-icon.callout-icon svg path, fold-icon svg");
    expect(glyph()).not.toBeNull();

    // Each variant resolves to *a* glyph — the mapping itself is the contract.
    for (const v of [
      "accent",
      "info",
      "success",
      "warning",
      "alert",
    ] as const) {
      fixture.componentInstance.variant.set(v);
      fixture.detectChanges();
      expect(glyph(), `variant ${v} renders no icon`).not.toBeNull();
    }

    fixture.componentInstance.icon.set("clock");
    fixture.detectChanges();
    expect(glyph()).not.toBeNull();
  });

  it("only becomes a live region when asked to announce", () => {
    const { fixture, callout } = render();
    fixture.componentInstance.announce.set(true);
    fixture.detectChanges();
    // Announced but not critical → polite status.
    expect(callout.getAttribute("role")).toBe("status");
    expect(callout.getAttribute("aria-live")).toBe("polite");
  });

  it("interrupts for an announced alert, and only then", () => {
    const { fixture, callout } = render();
    fixture.componentInstance.variant.set("alert");
    fixture.detectChanges();
    // A static alert is still just part of the page.
    expect(callout.getAttribute("role")).toBe("note");

    fixture.componentInstance.announce.set(true);
    fixture.detectChanges();
    expect(callout.getAttribute("role")).toBe("alert");
    expect(callout.getAttribute("aria-live")).toBe("assertive");
  });
});
