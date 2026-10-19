import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldMultiselectComponent } from "./multiselect.component";
import type { FoldSelectItem } from "./select-option";
import type { FoldOptionFilter } from "./option-filter";

const ALLERGENS: readonly FoldSelectItem<string>[] = [
  { value: "gluten", label: "Gluten" },
  { value: "milk", label: "Milk" },
  {
    label: "Tree nuts",
    options: [
      { value: "almond", label: "Almonds" },
      { value: "hazelnut", label: "Hazelnuts" },
    ],
  },
  { label: "Fish", options: [{ value: "cod", label: "Cod" }] },
];

@Component({
  standalone: true,
  imports: [FoldMultiselectComponent],
  template: `<fold-multiselect
    label="Allergens"
    searchable
    allowSelectAll
    [filter]="filter()"
    [options]="options"
    [(value)]="value"
    [(open)]="open"
    emptyText="Nothing"
    resultLabel="allergens"
  />`,
})
class HostComponent {
  readonly options = ALLERGENS;
  readonly value = signal<readonly string[]>([]);
  readonly open = signal(false);
  readonly filter = signal<FoldOptionFilter<string>>("contains");
}

async function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const host = fixture.nativeElement as HTMLElement;
  const settle = async () => {
    fixture.detectChanges();
    await Promise.resolve();
    fixture.detectChanges();
  };
  fixture.componentInstance.open.set(true);
  await settle();
  const search = () => {
    const el = host.querySelector<HTMLInputElement>(".lb-search");
    if (!el) {
      throw new Error("missing .lb-search");
    }
    return el;
  };
  return {
    fixture,
    host,
    cmp: fixture.componentInstance,
    search,
    settle,
    labels: () =>
      [...host.querySelectorAll("[role='option']")].map((o) =>
        (o.textContent ?? "").trim(),
      ),
    groups: () => host.querySelectorAll("fold-optgroup").length,
    status: () => host.querySelector("[role='status']")?.textContent?.trim(),
    async type(text: string) {
      search().value = text;
      search().dispatchEvent(new Event("input"));
      await settle();
    },
  };
}

describe("FoldMultiselect — searchable", () => {
  it("puts a labelled search field in the panel and focuses it on open", async () => {
    const r = await render();
    expect(r.search().getAttribute("aria-label")).toBe("Search options");
    expect(r.search().getAttribute("aria-controls")).toBe(
      r.host.querySelector("[role='listbox']")?.id,
    );
    expect(document.activeElement).toBe(r.search());
  });

  it("filters with `contains` by default, keeping the groups", async () => {
    const r = await render();
    await r.type("nut");
    expect(r.labels()).toEqual(["Hazelnuts"]);
    expect(r.groups()).toBe(1);
    expect(r.host.querySelector("fold-optgroup")?.textContent).toContain(
      "Tree nuts",
    );
  });

  it("drops a group none of whose options match", async () => {
    const r = await render();
    await r.type("l");
    expect(r.labels()).toEqual(["Gluten", "Milk", "Almonds", "Hazelnuts"]);
    expect(r.groups()).toBe(1); // Fish emptied → gone
  });

  it("announces the count, and the empty text when nothing matches", async () => {
    const r = await render();
    expect(r.status()).toBe("");
    await r.type("s");
    expect(r.status()).toBe("2 allergens");
    await r.type("zzz");
    expect(r.status()).toBe("Nothing");
    expect(r.host.querySelector(".lb-empty")?.textContent).toContain("Nothing");
  });

  it("never deselects: a hidden pick stays in the value and on the trigger", async () => {
    const r = await render();
    r.cmp.value.set(["cod"]);
    await r.type("milk");
    expect(r.labels()).toEqual(["Milk"]);
    expect(r.cmp.value()).toEqual(["cod"]);
    expect(r.host.querySelector(".lb-trigger")?.textContent).toContain("Cod");
  });

  it("toggles a filtered row by its own value, not its position", async () => {
    const r = await render();
    await r.type("hazel");
    r.host.querySelector<HTMLElement>("[role='option']")?.click();
    await r.settle();
    expect(r.cmp.value()).toEqual(["hazelnut"]);
  });

  it("Select all acts on what the list shows", async () => {
    const r = await render();
    await r.type("nuts");
    r.host.querySelector<HTMLButtonElement>(".lb-bulk-btn")?.click();
    await r.settle();
    expect(r.cmp.value()).toEqual(["hazelnut"]);
  });

  it("takes a custom matcher (`startsWith`, or a function)", async () => {
    const r = await render();
    r.cmp.filter.set("startsWith");
    await r.type("a");
    expect(r.labels()).toEqual(["Almonds"]);
    r.cmp.filter.set((o, term) => o.value.startsWith(term));
    await r.type("co");
    expect(r.labels()).toEqual(["Cod"]);
  });

  it("↓ from the field enters the list on its first row", async () => {
    const r = await render();
    await r.type("nut");
    r.search().dispatchEvent(
      new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true }),
    );
    await r.settle();
    const list = r.host.querySelector<HTMLElement>("[role='listbox']");
    expect(document.activeElement).toBe(list);
    const first = r.host.querySelector("[role='option']");
    expect(list?.getAttribute("aria-activedescendant")).toBe(first?.id);
  });

  it("closing empties the search, so a reopen shows the whole list", async () => {
    const r = await render();
    await r.type("milk");
    r.cmp.open.set(false);
    await r.settle();
    r.cmp.open.set(true);
    await r.settle();
    expect(r.search().value).toBe("");
    expect(r.labels()).toHaveLength(5);
  });
});
