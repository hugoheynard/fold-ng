import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldMultiselectComponent } from "./multiselect.component";
import { FoldOptionComponent } from "./option.component";

@Component({
  standalone: true,
  imports: [FoldMultiselectComponent, FoldOptionComponent],
  template: `<fold-multiselect
    label="Genres"
    placeholder="Pick a few…"
    [(value)]="value"
    [(open)]="open"
  >
    <fold-option class="o-rock" value="rock">Rock</fold-option>
    <fold-option class="o-jazz" value="jazz" [disabled]="true"
      >Jazz</fold-option
    >
    <fold-option class="o-soul" value="soul">Soul music</fold-option>
    <fold-option class="o-funk" value="funk">Funk</fold-option>
    <fold-option class="o-elec" value="elec">Electro</fold-option>
  </fold-multiselect>`,
})
class HostComponent {
  readonly value = signal<readonly string[]>([]);
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
      await Promise.resolve();
      fixture.detectChanges();
    },
  };
}

describe("FoldMultiselectComponent", () => {
  it("is a multi-selectable listbox of options", () => {
    const r = render();
    expect(r.list().getAttribute("aria-multiselectable")).toBe("true");
    expect(r.list().querySelectorAll("[role='option']").length).toBe(5);
  });

  it("summarises the selection on the trigger", () => {
    const r = render();
    expect(r.trigger().textContent).toContain("Pick a few…");
    r.value.set(["rock", "soul"]);
    r.fixture.detectChanges();
    expect(r.trigger().textContent).toContain("Rock");
    expect(r.trigger().textContent).toContain("Soul music");
  });

  it("collapses the summary to a +N tail past three picks", () => {
    const r = render();
    r.value.set(["rock", "soul", "funk", "elec"]);
    r.fixture.detectChanges();
    // three labels, then "+1" for the fourth
    expect(r.trigger().textContent).toContain("+1");
    expect(r.trigger().textContent).not.toContain("Electro");
  });

  it("reflects membership through aria-selected", () => {
    const r = render();
    r.value.set(["soul"]);
    r.fixture.detectChanges();
    expect(r.option("o-soul").getAttribute("aria-selected")).toBe("true");
    expect(r.option("o-rock").getAttribute("aria-selected")).toBe("false");
  });

  it("clicking rows toggles them and keeps the panel open", async () => {
    const r = render();
    await r.openMenu();
    r.option("o-rock").click();
    r.fixture.detectChanges();
    expect(r.value()).toEqual(["rock"]);
    expect(r.open()).toBe(true);
    r.option("o-soul").click();
    r.fixture.detectChanges();
    expect(r.value()).toEqual(["rock", "soul"]);
    // clicking a selected row removes it
    r.option("o-rock").click();
    r.fixture.detectChanges();
    expect(r.value()).toEqual(["soul"]);
  });

  it("does not toggle a disabled row", async () => {
    const r = render();
    await r.openMenu();
    r.option("o-jazz").click();
    r.fixture.detectChanges();
    expect(r.value()).toEqual([]);
  });

  it("Enter toggles the active row without closing", async () => {
    const r = render();
    await r.openMenu(); // armed on the first enabled row (Rock)
    r.key("Enter");
    r.fixture.detectChanges();
    expect(r.value()).toEqual(["rock"]);
    expect(r.open()).toBe(true);
  });

  it("type-ahead moves the active row to the matching label", async () => {
    const r = render();
    await r.openMenu();
    r.key("s"); // "Soul music"
    r.fixture.detectChanges();
    expect(r.list().getAttribute("aria-activedescendant")).toBe(
      r.option("o-soul").id,
    );
  });
});
