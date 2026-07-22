import { Component, signal } from "@angular/core";
import { TestBed, type ComponentFixture } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldDataTableComponent } from "./data-table.component";
import { FoldDataTableCellDirective } from "./data-table-cell.directive";
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
    expect(rows[0].querySelectorAll("td")[1].textContent).toContain("detail-a");
  });

  it("marks the first column as the primary cell + reflects the active sort", () => {
    const { el } = setup();
    const firstCell = el.querySelector("tbody tr td");
    expect(firstCell?.classList.contains("is-primary")).toBe(true);
    expect(el.querySelector('th[aria-sort="ascending"]')).not.toBeNull();
    expect(el.querySelector(".folddt-arrow.on")?.textContent).toBe("↑");
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

  it("shows the empty state when there are no rows", () => {
    const { fixture, host, el } = setup();
    host.rows.set([]);
    fixture.detectChanges();
    expect(el.querySelector(".folddt-empty-t")?.textContent).toBe("Rien");
    expect(el.querySelector(".folddt-empty-s")?.textContent).toBe("Vide");
  });
});
