import { Component, signal } from "@angular/core";
import { TestBed, type ComponentFixture } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldDataTableComponent } from "./data-table.component";
import { FoldDataTableCellDirective } from "./data-table-cell.directive";
import { FoldDataTableRowCardDirective } from "./data-table-row-card.directive";
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
      (selectionChange)="onSelection($event)"
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
  onSelection(next: Set<string | number>): void {
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
      el.querySelector('thead .folddt-check[aria-label="Select all rows"]'),
    ).not.toBeNull();
  });

  it("toggles one row without triggering rowClick, and reflects the set", () => {
    const { fixture, host, el } = selSetup();
    const first = el.querySelector<HTMLInputElement>(
      "tbody .folddt-cell--select input",
    );
    first!.dispatchEvent(new Event("change"));
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
      el.querySelector<HTMLInputElement>("thead .folddt-check")!;

    host.selected.set(new Set(["a"]));
    fixture.detectChanges();
    expect(header().indeterminate).toBe(true);
    expect(header().checked).toBe(false);

    header().dispatchEvent(new Event("change")); // partial → select all
    fixture.detectChanges();
    expect([...host.selected()].sort()).toEqual(["a", "b"]);
    expect(header().checked).toBe(true);
    expect(header().indeterminate).toBe(false);

    header().dispatchEvent(new Event("change")); // all → clear
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
}

describe("FoldDataTableComponent — mobile layout", () => {
  function mobileSetup(): {
    fixture: ComponentFixture<MobileHostComponent>;
    host: MobileHostComponent;
    el: HTMLElement;
  } {
    const fixture = TestBed.createComponent(MobileHostComponent);
    fixture.detectChanges();
    return {
      fixture,
      host: fixture.componentInstance,
      el: fixture.nativeElement as HTMLElement,
    };
  }

  it("defaults to scroll — tabular, no imposed card transform, no custom list", () => {
    const { el } = mobileSetup();
    expect(el.querySelector(".folddt--cards")).toBeNull();
    expect(el.querySelector(".folddt--custom")).toBeNull();
    expect(el.querySelector("table.folddt")).not.toBeNull();
    // The foldRowCard template stays inert unless mobileLayout="custom".
    expect(el.querySelector(".folddt-cardlist")).toBeNull();
  });

  it("auto-cards mode opts into the stacked-card transform", () => {
    const { fixture, host, el } = mobileSetup();
    host.mobileLayout.set("auto-cards");
    fixture.detectChanges();
    expect(el.querySelector(".folddt--cards")).not.toBeNull();
    expect(el.querySelector(".folddt--custom")).toBeNull();
  });

  it("custom mode renders the parent foldRowCard once per row", () => {
    const { fixture, host, el } = mobileSetup();
    host.mobileLayout.set("custom");
    fixture.detectChanges();
    expect(el.querySelector(".folddt--custom")).not.toBeNull();
    const cards = el.querySelectorAll(".folddt-cardlist-item .my-card");
    expect(cards.length).toBe(2);
    expect(cards[0]!.textContent).toBe("0:Alice");
    expect(cards[1]!.textContent).toBe("1:Bob");
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
