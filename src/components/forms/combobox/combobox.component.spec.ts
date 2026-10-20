import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  FoldComboboxComponent,
  type FoldComboboxFilter,
} from "./combobox.component";
import type { FoldSelectOption } from "../listbox/select-option";

interface Article {
  readonly sku: string;
  readonly thumb: string;
}

const ARTICLES: readonly FoldSelectOption<string>[] = [
  { value: "bag", label: "Baguette tradition" },
  { value: "cro", label: "Croissant" },
  { value: "pac", label: "Pain au chocolat", disabled: true },
  { value: "bri", label: "Brioche" },
];

@Component({
  standalone: true,
  imports: [FoldComboboxComponent],
  template: `<fold-combobox
    label="Article"
    emptyText="Aucun article"
    resultLabel="articles"
    [options]="options()"
    [filter]="filter()"
    [loading]="loading()"
    [clearOnSelect]="clearOnSelect()"
    [disabled]="disabled()"
    [readOnly]="readOnly()"
    [delayMs]="100"
    [(value)]="value"
    [(query)]="query"
    [(open)]="open"
    (searchChange)="searches.push($event)"
    (selectionChange)="picks.push($event)"
  />`,
})
class HostComponent {
  readonly options = signal<readonly FoldSelectOption<string>[]>(ARTICLES);
  readonly filter = signal<FoldComboboxFilter<string>>("contains");
  readonly loading = signal(false);
  readonly clearOnSelect = signal(false);
  readonly disabled = signal(false);
  readonly readOnly = signal(false);
  readonly value = signal<string | null>(null);
  readonly query = signal("");
  readonly open = signal(false);
  readonly searches: string[] = [];
  readonly picks: string[] = [];
}

@Component({
  standalone: true,
  imports: [FoldComboboxComponent],
  template: `<fold-combobox ariaLabel="Article" [options]="rich">
    <ng-template #option let-o>
      <span class="thumb">{{ o.value.thumb }}</span>
      <span class="sku">{{ o.value.sku }}</span>
    </ng-template>
  </fold-combobox>`,
})
class RichHostComponent {
  readonly rich: readonly FoldSelectOption<Article>[] = [
    { value: { sku: "SKU-1", thumb: "img-1" }, label: "Baguette" },
  ];
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const host = fixture.nativeElement as HTMLElement;
  const field = host.querySelector<HTMLInputElement>("input")!;
  const cd = (): void => {
    fixture.detectChanges();
  };
  return {
    fixture,
    h: fixture.componentInstance,
    field,
    cd,
    rows: () => [...host.querySelectorAll<HTMLElement>("[role='option']")],
    labels: () =>
      [...host.querySelectorAll("[role='option']")].map((o) =>
        o.textContent?.trim(),
      ),
    status: () => host.querySelector(".cb-status")?.textContent?.trim() ?? "",
    type(text: string) {
      field.value = text;
      field.dispatchEvent(new Event("input"));
      cd();
    },
    key(key: string) {
      field.dispatchEvent(new KeyboardEvent("keydown", { key, bubbles: true }));
      cd();
    },
    host,
  };
}

afterEach(() => {
  vi.useRealTimers();
});

describe("FoldComboboxComponent", () => {
  it("wires the WAI-ARIA combobox attributes on the input", () => {
    const r = render();
    const list = r.host.querySelector("[role='listbox']")!;
    expect(r.field.getAttribute("role")).toBe("combobox");
    expect(r.field.getAttribute("aria-autocomplete")).toBe("list");
    expect(r.field.getAttribute("aria-controls")).toBe(list.id);
    expect(r.field.getAttribute("aria-expanded")).toBe("false");
    expect(list.getAttribute("aria-label")).toBe("Article");
  });

  it("a click in the empty field opens the WHOLE list, before any letter", () => {
    const r = render();
    expect(r.field.getAttribute("aria-expanded")).toBe("false");
    r.field.click();
    r.cd();
    expect(r.h.open()).toBe(true);
    expect(r.field.getAttribute("aria-expanded")).toBe("true");
    expect(r.labels().length).toBe(r.h.options().length);
  });

  it("a click does not open a readOnly or disabled field", () => {
    const r = render();
    r.h.readOnly.set(true);
    r.cd();
    r.field.click();
    r.cd();
    expect(r.field.getAttribute("aria-expanded")).toBe("false");
  });

  it("typing opens the panel and filters locally (contains, case-insensitive)", () => {
    const r = render();
    r.type("CRO");
    expect(r.h.open()).toBe(true);
    expect(r.field.getAttribute("aria-expanded")).toBe("true");
    expect(r.labels()).toEqual(["Croissant"]);
    r.type("ch");
    expect(r.labels()).toEqual(["Pain au chocolat", "Brioche"]);
  });

  it("filter=startsWith and a function filter", () => {
    const r = render();
    r.h.filter.set("startsWith");
    r.type("b");
    expect(r.labels()).toEqual(["Baguette tradition", "Brioche"]);
    r.h.filter.set((o, term) => o.value === term);
    r.cd();
    r.type("cro");
    expect(r.labels()).toEqual(["Croissant"]);
  });

  it("filter=none leaves the options as given (remote mode)", () => {
    const r = render();
    r.h.filter.set("none");
    r.type("zzz");
    expect(r.rows().length).toBe(4);
  });

  it("debounces searchChange, trimmed and de-duplicated", () => {
    vi.useFakeTimers();
    const r = render();
    r.type("cr");
    r.type(" cro ");
    expect(r.h.searches).toEqual([]);
    vi.advanceTimersByTime(100);
    expect(r.h.searches).toEqual(["cro"]);
    r.type("cro");
    vi.advanceTimersByTime(100);
    expect(r.h.searches).toEqual(["cro"]);
  });

  it("↑/↓ move the active row (wrapping, skipping disabled), Enter picks", () => {
    const r = render();
    r.key("ArrowDown"); // opens on the whole list
    expect(r.h.open()).toBe(true);
    expect(r.field.getAttribute("aria-activedescendant")).toBeNull();
    r.key("ArrowDown");
    r.key("ArrowDown");
    expect(r.field.getAttribute("aria-activedescendant")).toBe(r.rows()[1]!.id);
    r.key("ArrowDown"); // skips the disabled "Pain au chocolat"
    expect(r.field.getAttribute("aria-activedescendant")).toBe(r.rows()[3]!.id);
    r.key("ArrowDown"); // wraps
    expect(r.field.getAttribute("aria-activedescendant")).toBe(r.rows()[0]!.id);
    r.key("ArrowUp");
    r.key("Enter");
    expect(r.h.value()).toBe("bri");
    expect(r.h.query()).toBe("Brioche");
    expect(r.h.picks).toEqual(["bri"]);
    expect(r.h.open()).toBe(false);
  });

  it("Escape and Tab close the panel", () => {
    const r = render();
    r.type("b");
    r.key("Escape");
    expect(r.h.open()).toBe(false);
    r.type("b");
    r.key("Tab");
    expect(r.h.open()).toBe(false);
  });

  it("a click on a row picks it; a disabled row is inert", () => {
    const r = render();
    r.type("c");
    const [cro, pac] = r.rows();
    pac!.click();
    r.cd();
    expect(r.h.value()).toBeNull();
    cro!.click();
    r.cd();
    expect(r.h.value()).toBe("cro");
    expect(
      r
        .rows()
        .find((o) => o.textContent?.includes("Croissant"))
        ?.getAttribute("aria-selected"),
    ).toBe("true");
  });

  it("typing over a pick clears the value", () => {
    const r = render();
    r.h.value.set("bri");
    r.cd();
    expect(r.h.query()).toBe("Brioche");
    r.type("Brioch");
    expect(r.h.value()).toBeNull();
  });

  it("clearOnSelect emits the pick, empties the field and holds no value", () => {
    const r = render();
    r.h.clearOnSelect.set(true);
    r.type("cro");
    r.key("ArrowDown");
    r.key("Enter");
    expect(r.h.picks).toEqual(["cro"]);
    expect(r.h.value()).toBeNull();
    expect(r.h.query()).toBe("");
    expect(r.field.value).toBe("");
  });

  it("loading shows fold-loading, not the empty text", () => {
    const r = render();
    r.h.filter.set("none");
    r.h.options.set([]);
    r.h.loading.set(true);
    r.type("cro");
    expect(r.host.querySelector("fold-loading")).not.toBeNull();
    expect(r.host.querySelector(".cb-empty")).toBeNull();
    r.h.loading.set(false);
    r.cd();
    expect(r.host.querySelector("fold-loading")).toBeNull();
    expect(r.host.querySelector(".cb-empty")?.textContent).toContain(
      "Aucun article",
    );
  });

  it("announces the result count, and the empty text", () => {
    const r = render();
    r.type("b");
    expect(r.status()).toBe("2 articles");
    r.type("zzz");
    expect(r.status()).toBe("Aucun article");
  });

  it("disabled and readOnly reach the input", () => {
    const r = render();
    r.h.readOnly.set(true);
    r.cd();
    expect(r.field.readOnly).toBe(true);
    r.key("ArrowDown");
    expect(r.field.getAttribute("aria-expanded")).toBe("false");
    r.h.disabled.set(true);
    r.cd();
    expect(r.field.disabled).toBe(true);
  });

  it("renders a projected #option template with the option", () => {
    const fixture = TestBed.createComponent(RichHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector(".thumb")?.textContent).toBe("img-1");
    expect(el.querySelector(".sku")?.textContent).toBe("SKU-1");
  });
});
