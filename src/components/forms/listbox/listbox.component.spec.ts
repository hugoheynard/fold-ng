import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldListboxComponent } from "./listbox.component";
import { FoldOptionComponent } from "./option.component";

@Component({
  standalone: true,
  imports: [FoldListboxComponent, FoldOptionComponent],
  template: `<fold-listbox
    label="Devise"
    placeholder="Choisir…"
    [(value)]="value"
    [(open)]="open"
  >
    <fold-option class="o-eur" value="EUR">Euro</fold-option>
    <fold-option class="o-usd" value="USD" [disabled]="true"
      >Dollar</fold-option
    >
    <fold-option class="o-gbp" value="GBP">Pound sterling</fold-option>
  </fold-listbox>`,
})
class HostComponent {
  readonly value = signal("");
  readonly open = signal(false);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  fixture.detectChanges();
  const host = fixture.nativeElement as HTMLElement;
  const q = <T extends HTMLElement>(sel: string): T => {
    const el = host.querySelector<T>(sel);
    if (!el) {
      throw new Error(`missing ${sel}`);
    }
    return el;
  };
  return {
    fixture,
    value: fixture.componentInstance.value,
    open: fixture.componentInstance.open,
    trigger: () => q<HTMLButtonElement>(".lb-trigger"),
    list: () => q<HTMLElement>("[role='listbox']"),
    option: (cls: string) => q<HTMLElement>(`.${cls}`),
    key: (key: string) =>
      q("[role='listbox']").dispatchEvent(
        new KeyboardEvent("keydown", { key, bubbles: true }),
      ),
    async openMenu() {
      fixture.componentInstance.open.set(true);
      fixture.detectChanges();
      await Promise.resolve(); // the open-arm focus is deferred to a microtask
      fixture.detectChanges();
    },
  };
}

describe("FoldListboxComponent", () => {
  it("renders a role=listbox of options with an accessible name", () => {
    const r = render();
    expect(r.list().getAttribute("aria-label")).toBe("Devise");
    expect(r.list().querySelectorAll("[role='option']").length).toBe(3);
  });

  it("shows the placeholder while empty, the label once chosen", () => {
    const r = render();
    expect(r.trigger().textContent).toContain("Choisir…");
    r.value.set("GBP");
    r.fixture.detectChanges();
    expect(r.trigger().textContent).toContain("Pound sterling");
  });

  it("reflects the selection through aria-selected", () => {
    const r = render();
    r.value.set("EUR");
    r.fixture.detectChanges();
    expect(r.option("o-eur").getAttribute("aria-selected")).toBe("true");
    expect(r.option("o-gbp").getAttribute("aria-selected")).toBe("false");
  });

  it("selecting a row commits the value, marks touched and closes", async () => {
    const r = render();
    await r.openMenu();
    r.option("o-gbp").click();
    r.fixture.detectChanges();
    expect(r.value()).toBe("GBP");
    expect(r.open()).toBe(false);
  });

  it("does not select a disabled row", async () => {
    const r = render();
    await r.openMenu();
    r.option("o-usd").click();
    r.fixture.detectChanges();
    expect(r.value()).toBe("");
    expect(r.open()).toBe(true);
  });

  it("opens with the active row on the current selection", async () => {
    const r = render();
    r.value.set("GBP");
    r.fixture.detectChanges();
    await r.openMenu();
    expect(r.list().getAttribute("aria-activedescendant")).toBe(
      r.option("o-gbp").id,
    );
  });

  it("ArrowDown moves the active row, skipping disabled", async () => {
    const r = render();
    await r.openMenu(); // armed on EUR (first enabled)
    expect(r.list().getAttribute("aria-activedescendant")).toBe(
      r.option("o-eur").id,
    );
    r.key("ArrowDown"); // skips the disabled USD → GBP
    r.fixture.detectChanges();
    expect(r.list().getAttribute("aria-activedescendant")).toBe(
      r.option("o-gbp").id,
    );
  });

  it("type-ahead moves the active row to the matching label", async () => {
    const r = render();
    await r.openMenu();
    r.key("p"); // "Pound sterling"
    r.fixture.detectChanges();
    expect(r.list().getAttribute("aria-activedescendant")).toBe(
      r.option("o-gbp").id,
    );
  });

  it("Enter selects the active row", async () => {
    const r = render();
    await r.openMenu();
    r.key("ArrowDown"); // EUR → GBP
    r.fixture.detectChanges();
    r.key("Enter");
    r.fixture.detectChanges();
    expect(r.value()).toBe("GBP");
    expect(r.open()).toBe(false);
  });
});
