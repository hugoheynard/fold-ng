import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldListboxComponent } from "./listbox.component";
import { FoldOptionComponent } from "./option.component";
import { FoldOptgroupComponent } from "./optgroup.component";

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
