import { Component, computed, signal } from "@angular/core";
import { KindBadgeComponent } from "../../components/kind-badge.component";
import { ComposedOfComponent } from "../../components/composed-of.component";
import { DevPlaygroundComponent } from "../../components/playground.component";
import {
  FoldAvatarComponent,
  FoldBadgeComponent,
  type FoldBadgeVariant,
  FoldCardComponent,
  FoldDataTableCellDirective,
  FoldDataTableComponent,
  FoldDataTableRowCardDirective,
  FoldPageLayoutComponent,
  FoldPaginatorComponent,
  type FoldTableColumn,
  type FoldTableSort,
  type FoldTableTone,
} from "../../../src/public-api";

/** One roster row for the gallery demo. */
interface Member {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly status: "active" | "leave" | "ending";
  /** Whole months of tenure — a numeric, right-aligned, sortable column. */
  readonly tenure: number;
}

const MEMBERS: readonly Member[] = [
  {
    id: "u1",
    name: "Alice Nguyen",
    role: "Sound engineer",
    status: "active",
    tenure: 41,
  },
  {
    id: "u2",
    name: "Bob Traoré",
    role: "Stage manager",
    status: "ending",
    tenure: 7,
  },
  {
    id: "u3",
    name: "Chloé Martin",
    role: "Lighting",
    status: "leave",
    tenure: 23,
  },
  {
    id: "u4",
    name: "Diego Alvarez",
    role: "Rigging",
    status: "active",
    tenure: 58,
  },
  {
    id: "u5",
    name: "Emma Rossi",
    role: "Front of house",
    status: "active",
    tenure: 12,
  },
];

const STATUS_META: Record<
  Member["status"],
  {
    readonly label: string;
    readonly tone: FoldTableTone;
    readonly badge: "success" | "warning" | "alert";
  }
> = {
  active: { label: "Active", tone: null, badge: "success" },
  leave: { label: "On leave", tone: "warning", badge: "warning" },
  ending: { label: "Ending soon", tone: "alert", badge: "alert" },
};

/** `/data-table` — the `fold-data-table` gallery page (live sort/click, states, playground). */
@Component({
  selector: "gal-data-table-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    ComposedOfComponent,
    DevPlaygroundComponent,
    FoldPageLayoutComponent,
    FoldCardComponent,
    FoldDataTableComponent,
    FoldDataTableCellDirective,
    FoldDataTableRowCardDirective,
    FoldPaginatorComponent,
    FoldAvatarComponent,
    FoldBadgeComponent,
  ],
  templateUrl: "./data-table.page.html",
})
export default class DataTablePage {
  protected readonly columns: readonly FoldTableColumn[] = [
    { key: "name", label: "Member", sortable: true },
    { key: "role", label: "Role" },
    { key: "status", label: "Status" },
    { key: "tenure", label: "Months", sortable: true, align: "right" },
  ];

  protected readonly rowKey = (row: Member): string => row.id;
  protected readonly rowTone = (row: Member): FoldTableTone =>
    STATUS_META[row.status].tone;

  /* Cell templates are untyped (`let-row` is `any`) by design, so the status
     column renders through these typed helpers rather than indexing in HTML. */
  protected statusLabel(status: Member["status"]): string {
    return STATUS_META[status].label;
  }
  protected statusBadge(status: Member["status"]): FoldBadgeVariant {
    return STATUS_META[status].badge;
  }

  /* ── live sort (the table is controlled — the page owns the ordering) ── */
  protected readonly sort = signal<FoldTableSort>({
    key: "tenure",
    dir: "desc",
  });
  protected readonly clicked = signal<string | null>(null);

  protected readonly rows = computed<readonly Member[]>(() => {
    const { key, dir } = this.sort();
    const factor = dir === "asc" ? 1 : -1;
    return [...MEMBERS].sort((a, b) => {
      const cmp =
        key === "tenure" ? a.tenure - b.tenure : a.name.localeCompare(b.name);
      return cmp * factor;
    });
  });

  /* ── pagination (composing fold-paginator with the table) ── */
  protected readonly rosterPage = signal(1);
  protected readonly rosterSize = signal(3);
  /** The rows for the current page — the table renders these, the paginator the total. */
  protected readonly pagedRows = computed<readonly Member[]>(() => {
    const start = (this.rosterPage() - 1) * this.rosterSize();
    return this.rows().slice(start, start + this.rosterSize());
  });
  protected onRosterSize(size: number): void {
    this.rosterSize.set(size);
    const pages = Math.max(1, Math.ceil(this.rows().length / size));
    if (this.rosterPage() > pages) {
      this.rosterPage.set(pages);
    }
  }

  /** Toggle direction on the active column, else sort the new column ascending. */
  protected onSort(key: string): void {
    if (key !== "name" && key !== "tenure") {
      return;
    }
    const cur = this.sort();
    this.sort.set(
      cur.key === key
        ? { key, dir: cur.dir === "asc" ? "desc" : "asc" }
        : { key, dir: "asc" },
    );
  }

  /* ── selection (controlled — the page owns the set) ── */
  protected readonly selected = signal<ReadonlySet<string | number>>(new Set());
  protected readonly selectionLabel = (row: Member): string =>
    `Select ${row.name}`;
  protected onSelection(next: Set<string | number>): void {
    this.selected.set(next);
  }
  protected readonly selectedCount = computed(() => this.selected().size);
  protected clearSelection(): void {
    this.selected.set(new Set());
  }

  /* ── states demo ── */
  protected readonly stateEmpty = {
    title: "No members",
    subtitle: "Invite someone to get started.",
  };

  /* ── playground ── */
  protected readonly pgZebra = signal(false);
  protected readonly pgHover = signal(true);
  protected readonly pgClickable = signal(true);
  protected readonly pgLoading = signal(false);
  protected readonly pgSelectable = signal(false);
  protected readonly pgMobile = signal<"scroll" | "auto-cards" | "custom">(
    "scroll",
  );
  protected readonly pgSurface = signal<
    "default" | "sunken" | "raised" | "accent"
  >("default");
  protected readonly surfaces = [
    "default",
    "sunken",
    "raised",
    "accent",
  ] as const;

  protected readonly playgroundCode = computed(() => {
    const lines = [
      "<fold-data-table",
      '  caption="Team roster"',
      '  [columns]="columns"',
      '  [rows]="rows()"',
      '  [sort]="sort()"',
      '  [rowTone]="toneFor"',
    ];
    if (this.pgMobile() !== "scroll") {
      lines.push(`  mobileLayout="${this.pgMobile()}"`);
    }
    if (this.pgSurface() !== "default") {
      lines.push(`  toolbarSurface="${this.pgSurface()}"`);
    }
    if (this.pgSelectable()) {
      lines.push(
        "  selectable",
        '  [selected]="selected()"',
        '  (selectionChange)="onSelection($event)"',
      );
    }
    if (this.pgZebra()) {
      lines.push("  zebra");
    }
    if (!this.pgHover()) {
      lines.push('  [hover]="false"');
    }
    if (this.pgClickable()) {
      lines.push("  clickable", '  (rowClick)="open($event)"');
    }
    if (this.pgLoading()) {
      lines.push("  loading");
    }
    lines.push('  (sortChange)="onSort($event)"', ">");
    lines.push("  <div foldToolbar>Team roster · {{ rows().length }}</div>");
    lines.push("  <!-- one <ng-template foldCell> per column -->");
    if (this.pgMobile() === "custom") {
      lines.push(
        "  <ng-template foldRowCard let-row> …your card… </ng-template>",
      );
    }
    lines.push("</fold-data-table>");
    return lines.join("\n");
  });
}
