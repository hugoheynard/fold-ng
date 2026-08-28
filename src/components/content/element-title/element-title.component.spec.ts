import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldElementTitleComponent } from "./element-title.component";
import type { FoldIconName } from "../../foundations/icon/builtin-icons";

@Component({
  standalone: true,
  imports: [FoldElementTitleComponent],
  template: `<fold-element-title
    [variant]="variant()"
    [level]="level()"
    [icon]="icon()"
    [iconTone]="iconTone()"
    [title]="title()"
    [subtitle]="subtitle()"
  >
    @if (withAction()) {
      <button titleAction class="act">edit</button>
    }
  </fold-element-title>`,
})
class HostComponent {
  readonly variant = signal<"eyebrow" | "bar" | "title" | "caps">("eyebrow");
  readonly level = signal(2);
  readonly icon = signal<FoldIconName | undefined>(undefined);
  readonly iconTone = signal<"neutral" | "primary" | "faded">("neutral");
  readonly title = signal("Contexte");
  readonly subtitle = signal<string | undefined>(undefined);
  readonly withAction = signal(false);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const el = fixture.nativeElement.querySelector(
    "fold-element-title",
  ) as HTMLElement;
  return { fixture, el };
}

describe("FoldElementTitleComponent", () => {
  it("renders the title input as the heading label", () => {
    const { el } = render();
    const label = el.querySelector(".et-label");
    expect(label?.textContent?.trim()).toBe("Contexte");
    expect(label?.getAttribute("role")).toBe("heading");
    expect(label?.getAttribute("aria-level")).toBe("2");
  });

  it("reflects a custom level on the label", () => {
    const { fixture, el } = render();
    fixture.componentInstance.level.set(3);
    fixture.detectChanges();
    expect(el.querySelector(".et-label")?.getAttribute("aria-level")).toBe("3");
  });

  it("is eyebrow by default and toggles one variant class at a time", () => {
    const { fixture, el } = render();
    expect(el.classList.contains("v-bar")).toBe(false);
    expect(el.classList.contains("v-title")).toBe(false);
    expect(el.classList.contains("v-caps")).toBe(false);

    fixture.componentInstance.variant.set("bar");
    fixture.detectChanges();
    expect(el.classList.contains("v-bar")).toBe(true);

    fixture.componentInstance.variant.set("title");
    fixture.detectChanges();
    expect(el.classList.contains("v-title")).toBe(true);
    expect(el.classList.contains("v-bar")).toBe(false);

    // The classes are mutually exclusive: two of them at once would let the
    // cascade pick the winner by source order, which is not a decision anyone
    // makes on purpose.
    fixture.componentInstance.variant.set("caps");
    fixture.detectChanges();
    expect(el.classList.contains("v-caps")).toBe(true);
    expect(el.classList.contains("v-title")).toBe(false);
    expect(el.classList.contains("v-bar")).toBe(false);
  });

  it("keeps the plain leading glyph in caps — the tile belongs to `title`", () => {
    // A 40px tile beside a 14px capital line would out-weigh the words it is
    // supposed to introduce.
    const { fixture, el } = render();
    fixture.componentInstance.variant.set("caps");
    fixture.componentInstance.icon.set("company");
    fixture.detectChanges();
    expect(el.querySelector(".et-icon fold-icon")).not.toBeNull();
    expect(el.classList.contains("v-title")).toBe(false);
  });

  it("renders icon + subtitle only when provided", () => {
    const { fixture, el } = render();
    expect(el.querySelector(".et-icon")).toBeNull();
    expect(el.querySelector(".et-sub")).toBeNull();

    fixture.componentInstance.icon.set("company");
    fixture.componentInstance.subtitle.set("Activité de l'espace");
    fixture.detectChanges();
    expect(el.querySelector(".et-icon fold-icon")).not.toBeNull();
    expect(el.querySelector(".et-sub")?.textContent?.trim()).toBe(
      "Activité de l'espace",
    );
  });

  it("maps the icon tile tone to a host class", () => {
    const { fixture, el } = render();
    expect(el.classList.contains("it-primary")).toBe(false);
    fixture.componentInstance.iconTone.set("primary");
    fixture.detectChanges();
    expect(el.classList.contains("it-primary")).toBe(true);

    fixture.componentInstance.iconTone.set("faded");
    fixture.detectChanges();
    expect(el.classList.contains("it-faded")).toBe(true);
    expect(el.classList.contains("it-primary")).toBe(false);
  });

  it("projects a trailing action into [titleAction]", () => {
    const { fixture, el } = render();
    expect(el.querySelector(".et-action .act")).toBeNull();

    fixture.componentInstance.withAction.set(true);
    fixture.detectChanges();
    expect(el.querySelector(".et-action .act")).not.toBeNull();
  });
});
