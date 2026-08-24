import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import {
  FoldViewToggleComponent,
  type FoldViewToggleOption,
} from "./view-toggle.component";

@Component({
  standalone: true,
  imports: [FoldViewToggleComponent],
  template: `<fold-view-toggle
    ariaLabel="View"
    [options]="options()"
    [activeStyle]="active()"
    [(value)]="value"
  />`,
})
class HostComponent {
  readonly value = signal("cards");
  readonly active = signal<"raised" | "accent">("raised");
  readonly options = signal<readonly FoldViewToggleOption[]>([
    { value: "cards", label: "Cards", icon: "grid" },
    { value: "table", label: "Table", icon: "list" },
    { value: "map", label: "Map", disabled: true },
  ]);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const host = fixture.nativeElement as HTMLElement;
  const group = () => host.querySelector<HTMLElement>("[role='radiogroup']")!;
  const radios = () =>
    Array.from(host.querySelectorAll<HTMLButtonElement>("[role='radio']"));
  return {
    fixture,
    value: fixture.componentInstance.value,
    active: fixture.componentInstance.active,
    toggle: () => host.querySelector<HTMLElement>("fold-view-toggle")!,
    group,
    radios,
    radio: (label: string) =>
      radios().find((r) => r.textContent?.trim() === label)!,
    key: (key: string) =>
      group().dispatchEvent(
        new KeyboardEvent("keydown", { key, bubbles: true }),
      ),
  };
}

describe("FoldViewToggleComponent", () => {
  it("is a labelled radiogroup of radios reflecting the value", () => {
    const r = render();
    expect(r.group().getAttribute("aria-label")).toBe("View");
    expect(r.radios().length).toBe(3);
    expect(r.radio("Cards").getAttribute("aria-checked")).toBe("true");
    expect(r.radio("Table").getAttribute("aria-checked")).toBe("false");
  });

  it("roves tabindex onto the selected segment", () => {
    const r = render();
    expect(r.radio("Cards").getAttribute("tabindex")).toBe("0");
    expect(r.radio("Table").getAttribute("tabindex")).toBe("-1");
  });

  it("puts the tab stop on the first enabled segment when the selected one is disabled", () => {
    const r = render();
    r.value.set("map"); // map is disabled → tab stop must not land on it
    r.fixture.detectChanges();
    expect(r.radio("Map").getAttribute("tabindex")).toBe("-1");
    expect(r.radio("Cards").getAttribute("tabindex")).toBe("0");
  });

  it("selects on click", () => {
    const r = render();
    r.radio("Table").click();
    r.fixture.detectChanges();
    expect(r.value()).toBe("table");
  });

  it("arrow keys move + select, skipping disabled and wrapping", () => {
    const r = render();
    r.key("ArrowRight"); // cards → table
    r.fixture.detectChanges();
    expect(r.value()).toBe("table");
    r.key("ArrowRight"); // table → (map disabled) → wraps to cards
    r.fixture.detectChanges();
    expect(r.value()).toBe("cards");
    r.key("ArrowLeft"); // cards → wraps back to table (map skipped)
    r.fixture.detectChanges();
    expect(r.value()).toBe("table");
  });

  it("Home / End jump to the ends (enabled only)", () => {
    const r = render();
    r.value.set("table");
    r.fixture.detectChanges();
    r.key("Home");
    r.fixture.detectChanges();
    expect(r.value()).toBe("cards");
    r.key("End");
    r.fixture.detectChanges();
    expect(r.value()).toBe("table"); // map is disabled → last enabled
  });

  it("reflects the active style on the host", () => {
    const r = render();
    expect(r.toggle().classList).toContain("a-raised");
    r.active.set("accent");
    r.fixture.detectChanges();
    expect(r.toggle().classList).toContain("a-accent");
  });

  it("does not select a disabled segment on click", () => {
    const r = render();
    r.radio("Map").click();
    r.fixture.detectChanges();
    expect(r.value()).toBe("cards");
  });

  it("renders a status dot on a segment, and names it for assistive tech", () => {
    // A dot says "look here", never *what* — so it is aria-hidden, and its
    // meaning joins the segment's accessible name instead. Without that, a
    // screen-reader user hears "English" where a sighted user sees "English,
    // something is missing".
    @Component({
      standalone: true,
      imports: [FoldViewToggleComponent],
      template: `<fold-view-toggle
        ariaLabel="Langue"
        [options]="options"
        [value]="'fr'"
      />`,
    })
    class DotHost {
      readonly options = [
        { value: "fr", label: "FR" },
        {
          value: "en",
          label: "EN",
          dot: "warning" as const,
          dotLabel: "incomplet",
        },
      ];
    }

    const fixture = TestBed.createComponent(DotHost);
    fixture.detectChanges();
    const root = fixture.nativeElement as HTMLElement;
    const segments = [...root.querySelectorAll<HTMLElement>(".vt-btn")];
    expect(segments[0]?.querySelector(".vt-dot")).toBeNull();
    const dot = segments[1]?.querySelector(".vt-dot");
    expect(dot).not.toBeNull();
    expect(dot?.classList.contains("warning")).toBe(true);
    expect(dot?.getAttribute("aria-hidden")).toBe("true");
    expect(segments[1]?.getAttribute("aria-label")).toBe("EN — incomplet");
    // …and a segment without a dot keeps its plain name.
    expect(segments[0]?.getAttribute("aria-label")).toBe("FR");
  });

  it("marks the selected segment with the ACCENT by default", () => {
    // A segmented control exists to show which one is chosen; the chosen one
    // should be the loudest thing in it. Nothing locked this default before.
    @Component({
      standalone: true,
      imports: [FoldViewToggleComponent],
      template: `<fold-view-toggle
        ariaLabel="View"
        [options]="[{ value: 'a', label: 'A' }]"
        [value]="'a'"
      />`,
    })
    class BareHost {}

    const fixture = TestBed.createComponent(BareHost);
    fixture.detectChanges();
    const host = (fixture.nativeElement as HTMLElement).querySelector(
      "fold-view-toggle",
    )!;
    expect(host.classList.contains("a-accent")).toBe(true);
    expect(host.classList.contains("a-raised")).toBe(false);
  });
});
