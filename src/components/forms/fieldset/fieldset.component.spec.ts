import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import {
  FoldFieldsetComponent,
  type FoldFieldsetAppearance,
  type FoldFieldsetDirection,
  type FoldFieldsetHintPosition,
  type FoldFieldsetLegendVariant,
} from "./fieldset.component";

@Component({
  standalone: true,
  imports: [FoldFieldsetComponent],
  template: `<fold-fieldset
    [legend]="legend()"
    [ariaLabel]="ariaLabel()"
    [disabled]="disabled()"
    [direction]="direction()"
    [appearance]="appearance()"
    [legendVariant]="legendVariant()"
    [optional]="optional()"
    [hint]="hint()"
    [hintPosition]="hintPosition()"
  >
    <input class="member" />
    <input class="member" />
  </fold-fieldset>`,
})
class HostComponent {
  readonly legend = signal("Allergènes");
  readonly ariaLabel = signal("");
  readonly hint = signal("");
  readonly hintPosition = signal<FoldFieldsetHintPosition>("under");
  readonly disabled = signal(false);
  readonly direction = signal<FoldFieldsetDirection>("vertical");
  readonly appearance = signal<FoldFieldsetAppearance>("plain");
  readonly legendVariant = signal<FoldFieldsetLegendVariant>("eyebrow");
  readonly optional = signal(false);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  return {
    fixture,
    host: fixture.componentInstance,
    root: fixture.nativeElement as HTMLElement,
  };
}

describe("FoldFieldsetComponent", () => {
  it("names the group with a real <legend> inside a real <fieldset>", () => {
    // The whole reason to reach for a fieldset rather than a div plus a
    // heading: the pair is what announces "these controls answer one
    // question". A div would look identical and say nothing.
    const { root } = render();
    const fieldset = root.querySelector("fieldset");
    expect(fieldset).not.toBeNull();
    expect(fieldset?.querySelector("legend")?.textContent?.trim()).toBe(
      "Allergènes",
    );
  });

  it("renders NO legend when it has no name", () => {
    // An empty <legend> is worse than none — it hands a screen reader a group
    // with a blank name. A nested group that is already named by its parent is
    // the case this serves.
    const { fixture, host, root } = render();
    host.legend.set("");
    fixture.detectChanges();
    expect(root.querySelector("legend")).toBeNull();
    expect(root.querySelectorAll(".member")).toHaveLength(2);
  });

  it("projects its members", () => {
    const { root } = render();
    expect(root.querySelectorAll(".member")).toHaveLength(2);
  });

  it("carries direction and appearance as classes, not as styles", () => {
    // The two knobs are the only thing a caller can change about the layout,
    // and they are readable from the DOM — which is what lets a consuming app
    // assert on them without reaching into computed styles.
    const { fixture, host, root } = render();
    const box = root.querySelector(".fs-box");
    expect(box?.classList.contains("vertical")).toBe(true);
    expect(box?.classList.contains("plain")).toBe(true);

    host.direction.set("horizontal");
    host.appearance.set("border");
    fixture.detectChanges();
    expect(box?.classList.contains("horizontal")).toBe(true);
    expect(box?.classList.contains("border")).toBe(true);
    expect(box?.classList.contains("vertical")).toBe(false);
  });

  it("disables every control it contains — the element's whole superpower", () => {
    // Nothing else in HTML does this. If it ever stopped working the controls
    // would still LOOK grouped and would still be clickable, which is the worst
    // of both: a group that says it is off and answers anyway.
    //
    // Asserted with `:disabled`, NOT with `input.disabled`. The IDL property
    // reflects the control's OWN attribute and stays `false` inside a disabled
    // fieldset; only the pseudo-class knows about the ancestor. Reading the
    // property here would have made this test pass on a component that had
    // stopped disabling anything.
    const { fixture, host, root } = render();
    const members = () =>
      [...root.querySelectorAll<HTMLInputElement>(".member")].map((input) =>
        input.matches(":disabled"),
      );

    expect(members()).toEqual([false, false]);
    host.disabled.set(true);
    fixture.detectChanges();
    expect(root.querySelector("fieldset")?.disabled).toBe(true);
    expect(members()).toEqual([true, true]);
  });

  it("reads the hint out — `aria-describedby`, not just ink", () => {
    const { fixture, host, root } = render();
    const fieldset = root.querySelector("fieldset");
    expect(fieldset?.getAttribute("aria-describedby")).toBeNull();

    host.hint.set("Au moins un jour");
    fixture.detectChanges();
    const hint = root.querySelector(".fs-hint");
    expect(hint?.textContent?.trim()).toBe("Au moins un jour");
    expect(fieldset?.getAttribute("aria-describedby")).toBe(hint?.id);
  });

  it("names a legend-less group with `ariaLabel`, and never twice", () => {
    // Two names for one group is how they drift apart: the visible legend wins,
    // and the aria one is dropped rather than layered on top of it.
    const { fixture, host, root } = render();
    const fieldset = root.querySelector("fieldset");

    host.legend.set("");
    host.ariaLabel.set("Allergènes");
    fixture.detectChanges();
    expect(fieldset?.getAttribute("aria-label")).toBe("Allergènes");

    host.legend.set("Allergènes");
    fixture.detectChanges();
    expect(fieldset?.getAttribute("aria-label")).toBeNull();
  });

  it("leaves an unnamed group truly unnamed — no empty `aria-label`", () => {
    // A group that claims a name and gives none is worse than one that claims
    // nothing: a screen reader announces the boundary and then falls silent.
    const { fixture, host, root } = render();
    host.legend.set("");
    fixture.detectChanges();
    const fieldset = root.querySelector("fieldset");
    expect(fieldset?.hasAttribute("aria-label")).toBe(false);
  });

  it("carries the legend register as a class too — eyebrow by default", () => {
    // Two registers exist in real forms and they say different things: an
    // eyebrow over a group that is really ONE field makes a form look like it
    // has more sections than it has questions.
    const { fixture, host, root } = render();
    const box = root.querySelector(".fs-box");
    expect(box?.classList.contains("eyebrow")).toBe(true);

    host.legendVariant.set("heading");
    fixture.detectChanges();
    expect(box?.classList.contains("heading")).toBe(true);
    expect(box?.classList.contains("eyebrow")).toBe(false);
  });

  it("marks the WHOLE group optional, once", () => {
    // A GPS point is two fields that are either both given or both skipped.
    // An `(optional)` on each of them would say something else — that either
    // one could be left out on its own.
    const { fixture, host, root } = render();
    expect(root.querySelector(".fs-opt")).toBeNull();

    host.optional.set(true);
    fixture.detectChanges();
    expect(root.querySelectorAll(".fs-opt")).toHaveLength(1);
    expect(root.querySelector("legend")?.textContent).toContain("Allergènes");
    expect(root.querySelector(".fs-opt")?.textContent?.trim()).toBe(
      "(optional)",
    );
  });

  it("puts an inline hint ON the legend line, still described", () => {
    // Deux positions, une seule promesse d'accessibilité : `aria-describedby`
    // suit l'indice où qu'il aille. La position dit où l'œil le trouve, jamais
    // s'il est annoncé.
    const { fixture, host, root } = render();
    host.hint.set("lieux difficiles à localiser");
    host.hintPosition.set("inline");
    fixture.detectChanges();

    const inline = root.querySelector(".fs-hint-inline");
    expect(inline?.closest("legend")).not.toBeNull();
    expect(root.querySelector("p.fs-hint")).toBeNull();
    expect(
      root.querySelector("fieldset")?.getAttribute("aria-describedby"),
    ).toBe(inline?.id);
  });

  it("falls back to `under` when there is no legend to sit on", () => {
    const { fixture, host, root } = render();
    host.hint.set("Au moins un jour");
    host.hintPosition.set("inline");
    host.legend.set("");
    fixture.detectChanges();

    expect(root.querySelector(".fs-hint-inline")).toBeNull();
    expect(root.querySelector("p.fs-hint")).not.toBeNull();
  });
});
