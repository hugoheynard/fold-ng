import { readFileSync } from "node:fs";

import { Component, signal } from "@angular/core";
import { TestBed, type ComponentFixture } from "@angular/core/testing";
import { describe, it, expect, vi, afterEach } from "vitest";
import { FoldDataTableComponent } from "./data-table.component";
import { FoldDataTableCellDirective } from "./data-table-cell.directive";
import { FoldDataTableRowCardDirective } from "./data-table-row-card.directive";
import { FoldDataTableRowDetailDirective } from "./data-table-row-detail.directive";
import type {
  FoldTableColumn,
  FoldTableSort,
  FoldTableTone,
} from "./data-table.types";

type Row = { id: string; name: string; tone: FoldTableTone };

const COLUMNS: FoldTableColumn[] = [
  { key: "name", label: "Nom", sortable: true },
  { key: "plain", label: "Détail" },
];

@Component({
  standalone: true,
  imports: [FoldDataTableComponent, FoldDataTableCellDirective],
  template: `
    <fold-data-table
      [columns]="columns"
      [rows]="rows()"
      [rowKey]="rowKey"
      [rowTone]="rowTone"
      [sort]="sort()"
      [clickable]="true"
      [loading]="loading()"
      [caption]="caption"
      [empty]="{ title: 'Rien', subtitle: 'Vide' }"
      (sortChange)="lastSort = $event"
      (rowClick)="clicked = $event"
    >
      <ng-template foldCell="name" let-row>
        <span class="name-cell">{{ row.name }}</span>
        <button class="cell-btn" type="button">edit</button>
      </ng-template>
      <ng-template foldCell="plain" let-row>detail-{{ row.id }}</ng-template>
    </fold-data-table>
  `,
})
class HostComponent {
  readonly columns = COLUMNS;
  readonly rows = signal<Row[]>([
    { id: "a", name: "Alice", tone: null },
    { id: "b", name: "Bob", tone: "alert" },
  ]);
  readonly sort = signal<FoldTableSort | null>({ key: "name", dir: "asc" });
  readonly loading = signal(false);
  readonly caption = "Roster";
  readonly rowKey = (row: Row): string => row.id;
  readonly rowTone = (row: Row): FoldTableTone => row.tone;
  lastSort: string | null = null;
  clicked: Row | null = null;
}

function setup(): {
  fixture: ComponentFixture<HostComponent>;
  host: HostComponent;
  el: HTMLElement;
} {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  return {
    fixture,
    host: fixture.componentInstance,
    el: fixture.nativeElement as HTMLElement,
  };
}

describe("FoldDataTableComponent", () => {
  it("renders one row per item using the projected cell templates", () => {
    const { el } = setup();
    const rows = el.querySelectorAll("tbody tr");
    expect(rows.length).toBe(2);
    expect(el.querySelectorAll(".name-cell")[0].textContent).toBe("Alice");
    // Primary column is a <th scope="row">; the detail column is the only <td>.
    expect(rows[0].querySelector("td")?.textContent).toContain("detail-a");
  });

  it("renders the primary column as a row header (th scope=row) for AT", () => {
    const { el } = setup();
    const firstCell = el.querySelector("tbody tr > *");
    expect(firstCell?.tagName).toBe("TH");
    expect(firstCell?.getAttribute("scope")).toBe("row");
    expect(firstCell?.classList.contains("is-primary")).toBe(true);
  });

  it("carries the sort on aria-sort with a decorative direction icon", () => {
    const { el } = setup();
    expect(el.querySelector('th[aria-sort="ascending"]')).not.toBeNull();
    // The direction is a registry fold-icon (not a text glyph) and stays hidden
    // from AT — aria-sort on the <th> is the accessible carrier.
    const activeIcon = el.querySelector("fold-icon.folddt-arrow.on");
    expect(activeIcon).not.toBeNull();
    const svg = activeIcon?.querySelector("svg");
    expect(svg).not.toBeNull();
    expect(svg?.getAttribute("aria-hidden")).toBe("true");
  });

  it("renders an accessible caption naming the table", () => {
    const { el } = setup();
    const caption = el.querySelector("table > caption");
    expect(caption?.textContent?.trim()).toBe("Roster");
  });

  it("applies the per-row tone class", () => {
    const { el } = setup();
    const rows = el.querySelectorAll("tbody tr");
    expect(rows[0].classList.contains("tone-alert")).toBe(false);
    expect(rows[1].classList.contains("tone-alert")).toBe(true);
  });

  it("emits sortChange with the column key when a sortable header is clicked", () => {
    const { host, el } = setup();
    el.querySelector<HTMLButtonElement>(".folddt-th-sort")?.click();
    expect(host.lastSort).toBe("name");
  });

  it("emits rowClick with the row when clickable", () => {
    const { host, el } = setup();
    el.querySelector<HTMLElement>("tbody tr")?.click();
    expect(host.clicked?.id).toBe("a");
  });

  it("activates a clickable row on Enter and on Space", () => {
    const { host, el } = setup();
    const row = el.querySelector<HTMLElement>("tbody tr");
    expect(row?.getAttribute("tabindex")).toBe("0");

    row?.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
    expect(host.clicked?.id).toBe("a");

    host.clicked = null;
    const space = new KeyboardEvent("keydown", {
      key: " ",
      cancelable: true,
    });
    row?.dispatchEvent(space);
    expect(host.clicked?.id).toBe("a");
    // Space is swallowed so the page does not scroll under the row.
    expect(space.defaultPrevented).toBe(true);
  });

  it("shows the empty state when there are no rows", () => {
    const { fixture, host, el } = setup();
    host.rows.set([]);
    fixture.detectChanges();
    expect(el.querySelector(".folddt-empty-t")?.textContent).toBe("Rien");
    expect(el.querySelector(".folddt-empty-s")?.textContent).toBe("Vide");
  });

  it("shows a spinner (not the empty state) while loading, even with no rows", () => {
    const { fixture, host, el } = setup();
    host.rows.set([]);
    host.loading.set(true);
    fixture.detectChanges();
    expect(el.querySelector(".folddt-loading fold-spinner")).not.toBeNull();
    expect(el.querySelector(".folddt-empty")).toBeNull();
  });

  it("forms a single roving-tabindex group over clickable rows", () => {
    const { el } = setup();
    const rows = el.querySelectorAll<HTMLElement>("tbody tr");
    // One tab stop: the first row is 0, the rest are -1.
    expect(rows[0]!.getAttribute("tabindex")).toBe("0");
    expect(rows[1]!.getAttribute("tabindex")).toBe("-1");
  });

  it("moves focus between rows with ArrowDown / ArrowUp / Home / End", () => {
    const { el } = setup();
    const rows = el.querySelectorAll<HTMLElement>("tbody tr");
    rows[0]!.focus();

    const down = new KeyboardEvent("keydown", {
      key: "ArrowDown",
      cancelable: true,
    });
    rows[0]!.dispatchEvent(down);
    expect(document.activeElement).toBe(rows[1]);
    expect(down.defaultPrevented).toBe(true);

    rows[1]!.dispatchEvent(new KeyboardEvent("keydown", { key: "Home" }));
    expect(document.activeElement).toBe(rows[0]);

    rows[0]!.dispatchEvent(new KeyboardEvent("keydown", { key: "End" }));
    expect(document.activeElement).toBe(rows[1]);
  });

  it("ignores key events bubbling up from an inner control (no stolen keys)", () => {
    const { host, el } = setup();
    const btn = el.querySelector<HTMLButtonElement>(".cell-btn")!;

    // Enter on the inner button must NOT also activate the row.
    btn.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Enter", bubbles: true }),
    );
    expect(host.clicked).toBeNull();

    // Space on the inner control must NOT be swallowed (native activation kept)
    // nor trigger a row click.
    const space = new KeyboardEvent("keydown", {
      key: " ",
      bubbles: true,
      cancelable: true,
    });
    btn.dispatchEvent(space);
    expect(host.clicked).toBeNull();
    expect(space.defaultPrevented).toBe(false);

    // Arrow on the inner control must NOT move row focus.
    btn.focus();
    btn.dispatchEvent(
      new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true }),
    );
    expect(document.activeElement).toBe(btn);
  });

  it("keeps a tab stop when the focused row is removed from rows", () => {
    const { fixture, host, el } = setup();
    const before = el.querySelectorAll<HTMLElement>("tbody tr");
    before[1]!.dispatchEvent(new Event("focus")); // focus Bob (row 2)
    fixture.detectChanges();
    expect(before[1]!.getAttribute("tabindex")).toBe("0");

    // Remove the focused row — the roving group must not lose its only tab stop.
    host.rows.set([{ id: "a", name: "Alice", tone: null }]);
    fixture.detectChanges();
    const after = el.querySelectorAll<HTMLElement>("tbody tr");
    expect(after.length).toBe(1);
    expect(after[0]!.getAttribute("tabindex")).toBe("0"); // fell back to first
  });

  it("exposes an aria-colcount and a labelled sort control", () => {
    const { el } = setup();
    // 2 data columns, no selection column here.
    expect(el.querySelector("table")?.getAttribute("aria-colcount")).toBe("2");
    expect(
      el.querySelector(".folddt-th-sort")?.getAttribute("aria-label"),
    ).toBe("Sort by Nom");
  });
});

/* ── selection + polish (a second host with the advanced inputs wired) ── */

type Person = { id: string; name: string };

const SEL_COLUMNS: FoldTableColumn[] = [
  { key: "name", label: "Name", align: "center" },
  { key: "note", label: "Note", truncate: true, width: "80px" },
];

@Component({
  standalone: true,
  imports: [FoldDataTableComponent, FoldDataTableCellDirective],
  template: `
    <fold-data-table
      [columns]="columns"
      [rows]="rows"
      [rowKey]="rowKey"
      [selectable]="true"
      [selected]="selected()"
      [selectionLabel]="selLabel"
      [density]="density()"
      [stickyFirst]="true"
      (selectedChange)="onSelection($event)"
    >
      <ng-template foldCell="name" let-row>{{ row.name }}</ng-template>
      <ng-template foldCell="note" let-row>note-{{ row.id }}</ng-template>
    </fold-data-table>
  `,
})
class SelectHostComponent {
  readonly columns = SEL_COLUMNS;
  readonly rows: Person[] = [
    { id: "a", name: "Alice" },
    { id: "b", name: "Bob" },
  ];
  readonly selected = signal<ReadonlySet<string | number>>(new Set());
  readonly density = signal<"comfortable" | "compact">("comfortable");
  readonly rowKey = (row: Person): string => row.id;
  readonly selLabel = (row: Person): string => `Select ${row.name}`;
  onSelection(next: ReadonlySet<string | number>): void {
    this.selected.set(next);
  }
}

function selSetup(): {
  fixture: ComponentFixture<SelectHostComponent>;
  host: SelectHostComponent;
  el: HTMLElement;
} {
  const fixture = TestBed.createComponent(SelectHostComponent);
  fixture.detectChanges();
  return {
    fixture,
    host: fixture.componentInstance,
    el: fixture.nativeElement as HTMLElement,
  };
}

describe("FoldDataTableComponent — selection + polish", () => {
  it("renders a checkbox column with a labelled per-row checkbox", () => {
    const { el } = selSetup();
    const rowChecks = el.querySelectorAll<HTMLInputElement>(
      "tbody .folddt-cell--select input",
    );
    expect(rowChecks.length).toBe(2);
    expect(rowChecks[0]!.getAttribute("aria-label")).toBe("Select Alice");
    expect(
      el.querySelector(
        'thead .folddt-select-h input[aria-label="Select all rows"]',
      ),
    ).not.toBeNull();
  });

  it("toggles one row without triggering rowClick, and reflects the set", () => {
    const { fixture, host, el } = selSetup();
    const first = el.querySelector<HTMLInputElement>(
      "tbody .folddt-cell--select input",
    );
    first!.click(); // toggles the native checkbox + fires change
    fixture.detectChanges();
    expect([...host.selected()]).toEqual(["a"]);
    expect(el.querySelector("tbody tr")?.getAttribute("aria-selected")).toBe(
      "true",
    );
    expect(
      el.querySelector("tbody tr")?.classList.contains("is-selected"),
    ).toBe(true);
  });

  it("select-all is indeterminate for a partial set, checked for a full one", () => {
    const { fixture, host, el } = selSetup();
    const header = () =>
      el.querySelector<HTMLInputElement>("thead .folddt-select-h input")!;

    host.selected.set(new Set(["a"]));
    fixture.detectChanges();
    expect(header().indeterminate).toBe(true);
    expect(header().checked).toBe(false);

    header().click(); // partial → select all
    fixture.detectChanges();
    expect([...host.selected()].sort()).toEqual(["a", "b"]);
    expect(header().checked).toBe(true);
    expect(header().indeterminate).toBe(false);

    header().click(); // all → clear
    fixture.detectChanges();
    expect([...host.selected()]).toEqual([]);
  });

  it("applies align, truncate, density and sticky-first chrome", () => {
    const { fixture, host, el } = selSetup();
    // align="center" on the primary th, truncate on the note cell.
    expect(
      el.querySelector("tbody th.is-primary")?.classList.contains("center"),
    ).toBe(true);
    const noteCell = el.querySelector("tbody td:not(.folddt-cell--select)");
    expect(noteCell?.classList.contains("truncate")).toBe(true);
    // sticky-first + selection expose the pinning hooks.
    expect(
      el.querySelector(".folddt--sticky-first.folddt--select"),
    ).not.toBeNull();
    expect(el.querySelector("thead th.is-primary-h")).not.toBeNull();

    host.density.set("compact");
    fixture.detectChanges();
    expect(el.querySelector(".folddt--compact")).not.toBeNull();
  });
});

/* ── mobile layout strategy (auto-cards | scroll | custom) ── */

@Component({
  standalone: true,
  imports: [
    FoldDataTableComponent,
    FoldDataTableCellDirective,
    FoldDataTableRowCardDirective,
  ],
  template: `
    <fold-data-table
      [columns]="columns"
      [rows]="rows"
      [rowKey]="rowKey"
      [mobileLayout]="mobileLayout()"
      [narrowLayout]="narrowLayout()"
      [rowCardChrome]="rowCardChrome()"
    >
      <ng-template foldCell="name" let-row>{{ row.name }}</ng-template>
      <ng-template foldRowCard let-row let-i="index">
        <span class="my-card">{{ i }}:{{ row.name }}</span>
      </ng-template>
    </fold-data-table>
  `,
})
class MobileHostComponent {
  readonly columns: FoldTableColumn[] = [{ key: "name", label: "Name" }];
  readonly rows = [
    { id: "a", name: "Alice" },
    { id: "b", name: "Bob" },
  ];
  readonly rowKey = (row: { id: string }): string => row.id;
  readonly mobileLayout = signal<"scroll" | "auto-cards" | "custom">("scroll");
  readonly narrowLayout = signal<"scroll" | "cards">("scroll");
  readonly rowCardChrome = signal<"shell" | "none">("shell");
}

@Component({
  standalone: true,
  imports: [FoldDataTableComponent, FoldDataTableCellDirective],
  template: `
    <fold-data-table
      [columns]="columns"
      [rows]="rows"
      [rowKey]="rowKey"
      narrowLayout="cards"
      primaryKey="name"
    >
      <ng-template foldCell="name" let-row>{{ row.name }}</ng-template>
      <ng-template foldCell="city" let-row>{{ row.city }}</ng-template>
    </fold-data-table>
  `,
})
class DefaultCardHostComponent {
  readonly columns: FoldTableColumn[] = [
    { key: "name", label: "Name" },
    { key: "city", label: "City" },
  ];
  readonly rows = [
    { id: "a", name: "Alice", city: "Lyon" },
    { id: "b", name: "Bob", city: "Nantes" },
  ];
  readonly rowKey = (row: { id: string }): string => row.id;
}

describe("FoldDataTableComponent — mobile layout", () => {
  /**
   * The table measures its OWN box now, not the viewport, so the fake is a
   * `ResizeObserver` that reports one width to every observer. Mocked before
   * `createComponent`: the observer is wired in a field initialiser.
   */
  const realRO = globalThis.ResizeObserver;

  function mockWidth(width: number): void {
    class FakeResizeObserver implements ResizeObserver {
      constructor(private readonly cb: ResizeObserverCallback) {}
      observe(): void {
        this.cb(
          [{ contentRect: { width } } as unknown as ResizeObserverEntry],
          this,
        );
      }
      unobserve(): void {}
      disconnect(): void {}
    }
    globalThis.ResizeObserver = FakeResizeObserver;
  }

  afterEach(() => {
    globalThis.ResizeObserver = realRO;
  });

  function mobileSetup(narrow = true): {
    fixture: ComponentFixture<MobileHostComponent>;
    host: MobileHostComponent;
    el: HTMLElement;
  } {
    // 480 is inside any card threshold; 1200 is clear of it plus the dead band.
    mockWidth(narrow ? 480 : 1200);
    const fixture = TestBed.createComponent(MobileHostComponent);
    fixture.detectChanges();
    return {
      fixture,
      host: fixture.componentInstance,
      el: fixture.nativeElement as HTMLElement,
    };
  }

  it("defaults to scroll — tabular, no imposed card transform, no card list", () => {
    const { el } = mobileSetup();
    expect(el.querySelector("table.folddt")).not.toBeNull();
    // The foldRowCard template stays inert until a layout asks for cards.
    expect(el.querySelector(".folddt-cardlist")).toBeNull();
  });

  it("auto-cards mode opts into the stacked-card transform", () => {
    const { fixture, host, el } = mobileSetup();
    host.mobileLayout.set("auto-cards");
    fixture.detectChanges();
    expect(el.querySelector(".folddt-cardlist")).not.toBeNull();
    expect(el.querySelector("table.folddt")).toBeNull();
  });

  it("card mode renders a real LIST, with no table left in the tree", () => {
    // `auto-cards` used to be a CSS rewrite: `display: block` on the `<tr>`,
    // `flex` on the cells and the `<tbody>`. Changing the display of a table
    // element drops its implicit role, so the table stopped being a table
    // without becoming a list, and the `<thead>` stayed as orphaned headers.
    const { fixture, host, el } = mobileSetup();
    host.mobileLayout.set("auto-cards");
    fixture.detectChanges();

    expect(el.querySelector("table")).toBeNull();
    expect(el.querySelector("thead")).toBeNull();
    const list = el.querySelector("ul.folddt-cardlist");
    expect(list?.getAttribute("role")).toBe("list");
    expect(el.querySelectorAll("li.folddt-card").length).toBe(2);
  });

  it("the default card names the row, then labels its values", () => {
    // No `foldRowCard` projected here: the DEFAULT template is what renders,
    // and the presence of a template is now the whole switch.
    mockWidth(480);
    const fixture = TestBed.createComponent(DefaultCardHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;

    const first = el.querySelector("li.folddt-card");
    expect(
      first?.querySelector(".folddt-card-identity")?.textContent?.trim(),
    ).toBe("Alice");
    // A description list, not `::before { content: attr(data-label) }` —
    // generated content is not reliably announced.
    expect(first?.querySelector("dl.folddt-card-grid dt")?.textContent).toBe(
      "City",
    );
    expect(first?.querySelector("dl.folddt-card-grid dd")?.textContent).toBe(
      "Lyon",
    );
  });

  it("a projected foldRowCard replaces the default content, not the shell", () => {
    const { fixture, host, el } = mobileSetup();
    host.mobileLayout.set("auto-cards");
    fixture.detectChanges();
    // Same shell either way — that is the point of having one.
    expect(el.querySelectorAll("li.folddt-card").length).toBe(2);
    expect(el.querySelectorAll(".my-card").length).toBe(2);
    expect(el.querySelector(".folddt-card-identity")).toBeNull();
  });

  it("a wide container keeps the table, whatever the layout asks for", () => {
    const { fixture, host, el } = mobileSetup(false);
    host.mobileLayout.set("auto-cards");
    fixture.detectChanges();
    expect(el.querySelector("table.folddt")).not.toBeNull();
    expect(el.querySelector("ul.folddt-cardlist")).toBeNull();
  });

  it('rowCardChrome="none" gives the parent a bare container', () => {
    const { fixture, host, el } = mobileSetup();
    host.mobileLayout.set("auto-cards");
    fixture.detectChanges();
    expect(el.querySelector("li.folddt-card.is-bare")).toBeNull();

    host.rowCardChrome.set("none");
    fixture.detectChanges();
    expect(el.querySelectorAll("li.folddt-card.is-bare").length).toBe(2);
    // The content still renders — only the chrome is gone.
    expect(el.querySelectorAll(".my-card").length).toBe(2);
  });

  /**
   * The documented API — `narrowLayout="cards"` plus a projected `foldRowCard`.
   *
   * It rendered NOTHING. The template switched to cards and dropped the table;
   * the stylesheet kept a second gate, `.folddt--custom.folddt--narrow`, whose
   * classes came from the DEPRECATED `mobileLayout`. So the cards were built,
   * filled with the consumer's template, and hidden — a blank space where the
   * table used to be.
   *
   * Every mobile case here drove `mobileLayout`, which is why nothing caught
   * it. This one drives the API the docs recommend.
   */
  it("narrowLayout=cards renders the cards, and they are VISIBLE", () => {
    const { fixture, host, el } = mobileSetup();
    host.narrowLayout.set("cards");
    fixture.detectChanges();

    const list = el.querySelector("ul.folddt-cardlist");
    expect(list).not.toBeNull();
    expect(el.querySelector("table.folddt")).toBeNull();
    expect(el.querySelectorAll(".folddt-card .my-card").length).toBe(2);
  });

  /**
   * The DOM was never the problem — the STYLESHEET was, and jsdom applies no
   * component styles, so `getComputedStyle` here would pass on a hidden list.
   * (It did. Twice.) This reads the compiled stylesheet instead.
   *
   * The rule it enforces: nothing may gate `.folddt-cardlist` on a second
   * condition. The template already decides, once, with `@if (!cardMode())` —
   * a stylesheet that decides again is a gate that can disagree, and it did.
   */
  it("does not gate the card list on anything but its own presence", () => {
    {
      // Chemin depuis la RACINE du dépôt : sous vitest/jsdom, `import.meta.url`
      // n'est pas une URL `file:`, et `readFileSync` la refuse.
      const sheet = readFileSync(
        "src/components/content/data-table/data-table.component.scss",
        "utf8",
        // Commentaires retirés d'abord : ce paragraphe-ci CITE la règle
        // supprimée, et un découpage naïf la reprendrait pour un sélecteur.
      ).replace(/\/\*[\s\S]*?\*\//gu, "");
      for (const rule of sheet.split("}")) {
        if (!rule.includes(".folddt-cardlist")) {
          continue;
        }
        const [selector = "", body = ""] = rule.split("{");
        expect(body, `\`${selector.trim()}\` hides the card list`).not.toMatch(
          /display\s*:\s*none/u,
        );
        expect(
          selector,
          `\`${selector.trim()}\` gates the card list on a modifier class`,
        ).not.toMatch(/\.folddt--/u);
      }
    }
  });

  it("narrowLayout=cards keeps the table on a wide container", () => {
    const { fixture, host, el } = mobileSetup(false);
    host.narrowLayout.set("cards");
    fixture.detectChanges();

    expect(el.querySelector("table.folddt")).not.toBeNull();
    expect(el.querySelector("ul.folddt-cardlist")).toBeNull();
  });

  it("custom mode renders the parent foldRowCard once per row (narrow)", () => {
    const { fixture, host, el } = mobileSetup(true);
    host.mobileLayout.set("custom");
    fixture.detectChanges();
    expect(el.querySelector(".folddt-cardlist")).not.toBeNull();
    const cards = el.querySelectorAll(".folddt-card .my-card");
    expect(cards.length).toBe(2);
    expect(cards[0]!.textContent).toBe("0:Alice");
    expect(cards[1]!.textContent).toBe("1:Bob");
  });

  it("custom mode does NOT instantiate the card list on a wide viewport", () => {
    const { fixture, host, el } = mobileSetup(false);
    host.mobileLayout.set("custom");
    fixture.detectChanges();
    // A wide container keeps the table, whatever the layout asked for — the
    // per-row cards are not built on desktop, so nothing is rendered for
    // nothing.
    expect(el.querySelector("table.folddt")).not.toBeNull();
    expect(el.querySelector(".folddt-cardlist")).toBeNull();
  });
});

/* ── toolbar slot (optional title/actions bar above the columns) ── */

@Component({
  standalone: true,
  imports: [FoldDataTableComponent, FoldDataTableCellDirective],
  template: `
    <fold-data-table
      [columns]="columns"
      [rows]="rows"
      [toolbarSurface]="surface()"
    >
      @if (withToolbar()) {
        <h3 class="tb-title" foldToolbar>Roster</h3>
      }
      <ng-template foldCell="name" let-row>{{ row.name }}</ng-template>
    </fold-data-table>
  `,
})
class ToolbarHostComponent {
  readonly columns: FoldTableColumn[] = [{ key: "name", label: "Name" }];
  readonly rows = [{ id: "a", name: "Alice" }];
  readonly withToolbar = signal(true);
  readonly surface = signal<"default" | "sunken" | "raised" | "accent">(
    "default",
  );
}

describe("FoldDataTableComponent — toolbar", () => {
  it("projects the toolbar content above the table; the band collapses when empty", () => {
    const fixture = TestBed.createComponent(ToolbarHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;

    const toolbar = el.querySelector(".folddt-toolbar")!;
    expect(toolbar.querySelector(".tb-title")?.textContent).toBe("Roster");
    // The bar sits above the scroll region (before it in the DOM).
    const scroll = el.querySelector(".folddt-scroll");
    expect(
      toolbar.compareDocumentPosition(scroll!) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();

    fixture.componentInstance.withToolbar.set(false);
    fixture.detectChanges();
    // With nothing projected the band has no element children, so the CSS
    // `:not(:has(*))` rule collapses it — no empty bar.
    expect(el.querySelector(".folddt-toolbar .tb-title")).toBeNull();
    expect(el.querySelector(".folddt-toolbar")!.children.length).toBe(0);
  });

  it("carries a surface level, stamping data-surface=accent for auto-invert", () => {
    const fixture = TestBed.createComponent(ToolbarHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    const bar = (): HTMLElement => el.querySelector(".folddt-toolbar")!;

    fixture.componentInstance.surface.set("raised");
    fixture.detectChanges();
    expect(bar().classList.contains("folddt-toolbar--raised")).toBe(true);
    expect(bar().getAttribute("data-surface")).toBeNull();

    fixture.componentInstance.surface.set("accent");
    fixture.detectChanges();
    expect(bar().classList.contains("folddt-toolbar--accent")).toBe(true);
    // The accent bar opts into the shared auto-inverting surface.
    expect(bar().getAttribute("data-surface")).toBe("accent");
  });
});

/* ── truncate dev guard (needs a column width to clip against) ── */

@Component({
  standalone: true,
  imports: [FoldDataTableComponent, FoldDataTableCellDirective],
  template: `
    <fold-data-table [columns]="columns" [rows]="rows">
      <ng-template foldCell="a" let-row>{{ row.a }}</ng-template>
    </fold-data-table>
  `,
})
class TruncateHostComponent {
  columns: FoldTableColumn[] = [{ key: "a", label: "A", truncate: true }];
  readonly rows = [{ a: "x" }];
}

describe("FoldDataTableComponent — truncate dev guard", () => {
  it("warns when a column sets truncate without a width", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => undefined);
    const fixture = TestBed.createComponent(TruncateHostComponent);
    fixture.detectChanges();
    expect(warn).toHaveBeenCalledWith(
      expect.stringContaining('column "a" sets truncate but no width'),
    );
    warn.mockRestore();
  });

  it("does not warn once the truncating column has a width", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => undefined);
    const fixture = TestBed.createComponent(TruncateHostComponent);
    fixture.componentInstance.columns = [
      { key: "a", label: "A", truncate: true, width: "80px" },
    ];
    fixture.detectChanges();
    expect(warn).not.toHaveBeenCalledWith(
      expect.stringContaining("truncate but no width"),
    );
    warn.mockRestore();
  });
});

@Component({
  standalone: true,
  imports: [FoldDataTableComponent],
  template: `
    <fold-data-table
      [columns]="columns"
      [rows]="rows"
      [rowKey]="rowKey"
      [selectable]="true"
      [labels]="labels"
    />
  `,
})
class LabelsHostComponent {
  readonly columns: FoldTableColumn[] = [
    { key: "name", label: "Name", sortable: true },
  ];
  readonly rows = [{ id: "a", name: "Alice" }];
  readonly rowKey = (r: { id: string }): string => r.id;
  readonly labels = {
    selectAll: "Tout sélectionner",
    sortBy: (c: string): string => `Trier par ${c}`,
  };
}

describe("FoldDataTableComponent i18n labels", () => {
  it("overrides accessible strings via the labels input", () => {
    const fixture = TestBed.createComponent(LabelsHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(
      el.querySelector(".folddt-select-h input")?.getAttribute("aria-label"),
    ).toBe("Tout sélectionner");
    expect(
      el.querySelector(".folddt-th-sort")?.getAttribute("aria-label"),
    ).toBe("Trier par Name");
  });
});

// ── Le tiroir de détail ────────────────────────────────────────────────────

@Component({
  standalone: true,
  imports: [
    FoldDataTableComponent,
    FoldDataTableCellDirective,
    FoldDataTableRowDetailDirective,
  ],
  template: `
    <fold-data-table
      [columns]="columns"
      [rows]="rows"
      [rowKey]="rowKey"
      [expandMode]="mode()"
      [(expanded)]="open"
    >
      <ng-template foldCell="name" let-row>{{ row.name }}</ng-template>
      <ng-template foldCell="plain" let-row>plain</ng-template>
      <ng-template foldRowDetail let-row>
        <p class="drawer">drawer-{{ row.id }}</p>
      </ng-template>
    </fold-data-table>
  `,
})
class DetailHost {
  readonly columns = COLUMNS;
  readonly rows: Row[] = [
    { id: "a", name: "Alice", tone: null },
    { id: "b", name: "Bob", tone: null },
  ];
  readonly rowKey = (row: Row): string => row.id;
  readonly mode = signal<"single" | "multi">("single");
  readonly open = signal<ReadonlySet<string | number>>(new Set());
}

describe("FoldDataTableComponent — row detail", () => {
  function render() {
    const fixture = TestBed.createComponent(DetailHost);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    const toggles = (): HTMLButtonElement[] =>
      Array.from(el.querySelectorAll("button.folddt-expand"));
    return { fixture, el, toggles };
  }

  it("grows a toggle per row only when a detail template is projected", () => {
    const { toggles } = render();
    expect(toggles().length).toBe(2);
  });

  it("opens the drawer under its own row, and names it for assistive tech", () => {
    const { fixture, el, toggles } = render();
    expect(el.querySelector(".drawer")).toBeNull();

    toggles()[0]!.click();
    fixture.detectChanges();

    const drawer = el.querySelector(".folddt-detail");
    expect(drawer?.textContent).toContain("drawer-a");
    // Le bouton POINTE le tiroir : sans `aria-controls`, un lecteur d'écran
    // annonce « développé » sans dire ce qui s'est ouvert.
    expect(toggles()[0]!.getAttribute("aria-expanded")).toBe("true");
    expect(toggles()[0]!.getAttribute("aria-controls")).toBe(drawer?.id);
    expect(drawer?.id).toBeTruthy();
  });

  it("closes the previous drawer in single mode, keeps it in multi", () => {
    const { fixture, el, toggles } = render();
    toggles()[0]!.click();
    fixture.detectChanges();
    toggles()[1]!.click();
    fixture.detectChanges();
    expect(el.querySelectorAll(".drawer").length).toBe(1);
    expect(el.querySelector(".drawer")?.textContent).toContain("drawer-b");

    fixture.componentInstance.mode.set("multi");
    fixture.detectChanges();
    toggles()[0]!.click();
    fixture.detectChanges();
    expect(el.querySelectorAll(".drawer").length).toBe(2);
  });

  it("writes the open set back to the parent", () => {
    // Deux vues d'un même état qui se mesurent chacune de leur côté finissent
    // par diverger : le tableau écrit, le parent lit.
    const { fixture, toggles } = render();
    toggles()[1]!.click();
    fixture.detectChanges();
    expect([...fixture.componentInstance.open()]).toEqual(["b"]);
  });

  it("keeps the drawer OUT of the arrow-key group", () => {
    // Une rangée focusable de plus ferait deux arrêts pour une seule ligne.
    const { fixture, el, toggles } = render();
    toggles()[0]!.click();
    fixture.detectChanges();
    const drawerRow = el.querySelector("tr.folddt-detail-row");
    expect(drawerRow).not.toBeNull();
    expect(drawerRow!.hasAttribute("tabindex")).toBe(false);
  });
});

// ── L'accesseur de valeur ──────────────────────────────────────────────────

@Component({
  standalone: true,
  imports: [FoldDataTableComponent, FoldDataTableCellDirective],
  template: `
    <fold-data-table [columns]="columns" [rows]="rows" [rowKey]="rowKey">
      <!-- Seule la colonne qui a du BALISAGE réclame un gabarit. -->
      <ng-template foldCell="plain" let-row>
        <em class="rich">{{ row.name }}</em>
      </ng-template>
    </fold-data-table>
  `,
})
class ValueHost {
  readonly columns: FoldTableColumn<Row>[] = [
    { key: "name", label: "Nom", value: (row) => row.name },
    { key: "plain", label: "Détail", value: (row) => `texte-${row.id}` },
  ];
  readonly rows: Row[] = [{ id: "a", name: "Alice", tone: null }];
  readonly rowKey = (row: Row): string => row.id;
}

@Component({
  standalone: true,
  imports: [FoldDataTableComponent],
  template: `<fold-data-table [columns]="columns" [rows]="rows" />`,
})
class OrphanHost {
  readonly columns: FoldTableColumn<Row>[] = [{ key: "orphan", label: "Vide" }];
  readonly rows: Row[] = [{ id: "a", name: "Alice", tone: null }];
}

describe("FoldDataTableComponent — value accessor", () => {
  it("prints a plain column without asking it for a template", () => {
    // Quatre colonnes sur sept ne font qu'afficher un champ ; leur réclamer un
    // gabarit chacune enterre les deux qui en méritent vraiment un.
    const fixture = TestBed.createComponent(ValueHost);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector("th.is-primary")?.textContent?.trim()).toBe(
      "Alice",
    );
  });

  it("lets a template WIN over the accessor", () => {
    // Une colonne qui porte les deux est une colonne en cours de migration, pas
    // un conflit à arbitrer : le balisage gagne, et la définition ne bouge pas.
    const fixture = TestBed.createComponent(ValueHost);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector(".rich")?.textContent?.trim()).toBe("Alice");
    expect(el.textContent).not.toContain("texte-a");
  });

  it("warns about a column that defines neither", () => {
    // Une cellule vide, identique sur toutes les lignes, se lit comme une
    // DONNÉE manquante et non comme une définition manquante.
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    const fixture = TestBed.createComponent(OrphanHost);
    fixture.detectChanges();
    expect(warn).toHaveBeenCalledWith(
      expect.stringContaining('column "orphan" has neither a value accessor'),
    );
  });
});
