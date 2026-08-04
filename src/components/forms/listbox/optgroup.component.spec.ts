import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldListboxComponent } from "./listbox.component";
import { FoldOptionComponent } from "./option.component";
import { FoldOptgroupComponent } from "./optgroup.component";
import type { FoldSelectItem } from "./select-option";

@Component({
  standalone: true,
  imports: [FoldListboxComponent, FoldOptionComponent, FoldOptgroupComponent],
  template: `<fold-listbox
    label="Ville"
    placeholder="Choisir…"
    [(value)]="value"
    [(open)]="open"
  >
    <fold-optgroup label="France">
      <fold-option class="o-paris" value="paris">Paris</fold-option>
      <fold-option class="o-lyon" value="lyon">Lyon</fold-option>
    </fold-optgroup>
    <fold-optgroup label="Italia">
      <fold-option class="o-roma" value="roma">Roma</fold-option>
    </fold-optgroup>
  </fold-listbox>`,
})
class HostComponent {
  readonly value = signal<string | null>(null);
  readonly open = signal(false);
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  fixture.detectChanges();
  const host = fixture.nativeElement as HTMLElement;
  return {
    fixture,
    host,
    value: fixture.componentInstance.value,
    list: () => host.querySelector<HTMLElement>("[role='listbox']")!,
    groups: () => [...host.querySelectorAll<HTMLElement>("[role='group']")],
    options: () => [...host.querySelectorAll<HTMLElement>("[role='option']")],
    key: (key: string) =>
      host
        .querySelector("[role='listbox']")!
        .dispatchEvent(new KeyboardEvent("keydown", { key, bubbles: true })),
    async openMenu() {
      fixture.componentInstance.open.set(true);
      fixture.detectChanges();
      await Promise.resolve();
      fixture.detectChanges();
    },
  };
}

describe("FoldOptgroupComponent", () => {
  it("renders each group with role=group and an accessible name", () => {
    const r = render();
    const groups = r.groups();
    expect(groups.length).toBe(2);
    // aria-labelledby points at the visible heading, which carries the text.
    for (const [i, label] of ["France", "Italia"].entries()) {
      const group = groups[i]!;
      const labelledby = group.getAttribute("aria-labelledby");
      expect(labelledby).toBeTruthy();
      expect(group.querySelector(`#${labelledby}`)?.textContent).toBe(label);
    }
  });

  it("discovers the grouped options and keeps the header out of the option set", () => {
    const r = render();
    // 3 options across the 2 groups; the group headers are NOT role=option.
    expect(r.options().length).toBe(3);
    expect(r.list().querySelectorAll("[role='option']").length).toBe(3);
  });

  it("roves the keyboard across group boundaries in document order", async () => {
    const r = render();
    await r.openMenu();
    const activeValue = () =>
      r
        .options()
        .find((o) => o.classList.contains("is-active"))
        ?.textContent?.trim();
    // Arms on the first option of the first group.
    expect(activeValue()).toBe("Paris");
    r.key("ArrowDown"); // → Lyon (same group)
    r.fixture.detectChanges();
    expect(activeValue()).toBe("Lyon");
    r.key("ArrowDown"); // → Roma (crosses into the second group)
    r.fixture.detectChanges();
    expect(activeValue()).toBe("Roma");
  });

  it("selects a grouped option through the keyboard", async () => {
    const r = render();
    await r.openMenu();
    r.key("ArrowDown"); // Paris → Lyon
    r.key("Enter");
    r.fixture.detectChanges();
    expect(r.value()).toBe("lyon");
  });
});

// ── The data-driven [options] array API with groups ──────────────────────
@Component({
  standalone: true,
  imports: [FoldListboxComponent],
  template: `<fold-listbox
    label="Ville"
    [(value)]="value"
    [(open)]="open"
    [options]="items"
  />`,
})
class ArrayHostComponent {
  readonly value = signal<string | null>(null);
  readonly open = signal(false);
  readonly items: readonly FoldSelectItem<string>[] = [
    {
      label: "France",
      options: [
        { value: "paris", label: "Paris" },
        { value: "lyon", label: "Lyon" },
      ],
    },
    // A bare option alongside the groups — the array mixes both shapes.
    { value: "geneve", label: "Genève" },
    { label: "Italia", options: [{ value: "roma", label: "Roma" }] },
  ];
}

describe("FoldOptgroup — [options] array API", () => {
  function render() {
    const fixture = TestBed.createComponent(ArrayHostComponent);
    fixture.detectChanges();
    fixture.detectChanges();
    const host = fixture.nativeElement as HTMLElement;
    return {
      fixture,
      value: fixture.componentInstance.value,
      groups: () => [...host.querySelectorAll("[role='group']")],
      options: () => [...host.querySelectorAll("[role='option']")],
    };
  }

  it("renders grouped + bare entries: 2 groups, 4 options", () => {
    const r = render();
    expect(r.groups().length).toBe(2);
    expect(r.options().length).toBe(4); // paris, lyon, geneve, roma
  });

  it("labels each group from its `label`", () => {
    const r = render();
    const labels = r.groups().map((g) => {
      const id = g.getAttribute("aria-labelledby");
      return g.querySelector(`#${id}`)?.textContent;
    });
    expect(labels).toEqual(["France", "Italia"]);
  });

  it("selects a value across the flattened list", () => {
    const r = render();
    const roma = r
      .options()
      .find((o) => o.textContent?.trim() === "Roma") as HTMLElement;
    roma.click();
    r.fixture.detectChanges();
    expect(r.value()).toBe("roma");
  });
});
