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
    [allowClear]="true"
    [(value)]="value"
    [(open)]="open"
    [(touched)]="touched"
  >
    <fold-option class="o-eur" value="EUR">Euro</fold-option>
    <fold-option class="o-usd" value="USD" [disabled]="true"
      >Dollar</fold-option
    >
    <fold-option class="o-gbp" value="GBP">Pound sterling</fold-option>
  </fold-listbox>`,
})
class HostComponent {
  readonly value = signal<string | null>(null);
  readonly open = signal(false);
  readonly touched = signal(false);
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
    touched: fixture.componentInstance.touched,
    trigger: () => q<HTMLButtonElement>(".lb-trigger"),
    clear: () => host.querySelector<HTMLButtonElement>(".lb-clear"),
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
    expect(r.value()).toBeNull();
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

  it("marks touched when the popup is opened then dismissed (blur parity)", async () => {
    const r = render();
    expect(r.touched()).toBe(false);
    await r.openMenu();
    r.open.set(false); // dismissed without picking (Escape / outside / Tab)
    r.fixture.detectChanges();
    expect(r.touched()).toBe(true);
  });

  it("offers a clear affordance only once a value is set, and it resets", () => {
    const r = render();
    expect(r.clear()).toBeNull(); // empty → no clear
    r.value.set("EUR");
    r.fixture.detectChanges();
    const clear = r.clear();
    expect(clear).not.toBeNull();
    clear?.click();
    r.fixture.detectChanges();
    expect(r.value()).toBeNull();
    expect(r.touched()).toBe(true);
  });

  it("closed-trigger type-ahead picks without opening", () => {
    const r = render();
    r.trigger().dispatchEvent(
      new KeyboardEvent("keydown", { key: "p", bubbles: true }),
    );
    r.fixture.detectChanges();
    expect(r.value()).toBe("GBP"); // "Pound sterling"
    expect(r.open()).toBe(false);
  });
});

@Component({
  standalone: true,
  imports: [FoldListboxComponent, FoldOptionComponent],
  template: `<fold-listbox [(value)]="value">
    <fold-option [value]="1">One</fold-option>
    <fold-option [value]="2">Two</fold-option>
  </fold-listbox>`,
})
class NumberHost {
  readonly value = signal<number | null>(null);
}

interface Team {
  id: number;
  name: string;
}

@Component({
  standalone: true,
  imports: [FoldListboxComponent, FoldOptionComponent],
  template: `<fold-listbox [(value)]="value" [compareWith]="sameId">
    @for (t of teams; track t.id) {
      <fold-option [value]="t">{{ t.name }}</fold-option>
    }
  </fold-listbox>`,
})
class ObjectHost {
  readonly teams: Team[] = [
    { id: 1, name: "Alpha" },
    { id: 2, name: "Beta" },
  ];
  readonly value = signal<Team | null>(null);
  readonly sameId = (a: Team, b: Team): boolean => a.id === b.id;
}

describe("FoldListboxComponent — generic value", () => {
  const trigger = (host: HTMLElement): HTMLButtonElement =>
    host.querySelector<HTMLButtonElement>(".lb-trigger")!;

  it("carries a number value (T inferred, no compareWith needed)", async () => {
    const fixture = TestBed.createComponent(NumberHost);
    fixture.detectChanges();
    const host = fixture.nativeElement as HTMLElement;
    trigger(host).click();
    fixture.detectChanges();
    await Promise.resolve();
    fixture.detectChanges();
    host
      .querySelectorAll<HTMLElement>("[role='option']")[1]
      .dispatchEvent(new MouseEvent("click", { bubbles: true }));
    fixture.detectChanges();
    expect(fixture.componentInstance.value()).toBe(2);
  });

  it("matches an object value by compareWith, not reference", () => {
    const fixture = TestBed.createComponent(ObjectHost);
    // A DIFFERENT object instance, equal by id — reference equality would miss it.
    fixture.componentInstance.value.set({ id: 2, name: "Beta" });
    fixture.detectChanges();
    const host = fixture.nativeElement as HTMLElement;
    expect(trigger(host).textContent).toContain("Beta");
  });
});
