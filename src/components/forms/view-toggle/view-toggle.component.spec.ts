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
    [(value)]="value"
  />`,
})
class HostComponent {
  readonly value = signal("cards");
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

  it("does not select a disabled segment on click", () => {
    const r = render();
    r.radio("Map").click();
    r.fixture.detectChanges();
    expect(r.value()).toBe("cards");
  });
});
