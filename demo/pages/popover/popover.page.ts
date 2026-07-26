import { Component, computed, signal } from "@angular/core";
import { KindBadgeComponent } from "../../components/kind-badge.component";
import { ComposedOfComponent } from "../../components/composed-of.component";
import { DevPlaygroundComponent } from "../../components/playground.component";
import {
  FoldButtonComponent,
  FoldButtonIconComponent,
  FoldCardComponent,
  FoldDropdownComponent,
  FoldDropdownItemComponent,
  FoldPageLayoutComponent,
  FoldPopoverComponent,
  FoldPopoverTriggerDirective,
  type FoldPopoverPlacement,
} from "../../../src/public-api";

interface Row {
  readonly id: string;
  readonly name: string;
}

/** `/popover` — the `fold-popover` primitive + `fold-dropdown` menu gallery page. */
@Component({
  selector: "gal-popover-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    ComposedOfComponent,
    DevPlaygroundComponent,
    FoldPageLayoutComponent,
    FoldCardComponent,
    FoldButtonComponent,
    FoldButtonIconComponent,
    FoldPopoverComponent,
    FoldPopoverTriggerDirective,
    FoldDropdownComponent,
    FoldDropdownItemComponent,
  ],
  templateUrl: "./popover.page.html",
  styleUrl: "./popover.page.scss",
})
export default class PopoverPage {
  /* ── dropdown demo: a tiny list with per-row actions ── */
  protected readonly rows = signal<Row[]>([
    { id: "r1", name: "Spring tour" },
    { id: "r2", name: "Summer festival" },
    { id: "r3", name: "Gala" },
  ]);
  protected readonly log = signal<string | null>(null);
  protected act(action: string, row: Row): void {
    this.log.set(`${action} · ${row.name}`);
    if (action === "Delete") {
      this.rows.update((list) => list.filter((r) => r.id !== row.id));
    }
  }
  protected resetRows(): void {
    this.rows.set([
      { id: "r1", name: "Spring tour" },
      { id: "r2", name: "Summer festival" },
      { id: "r3", name: "Gala" },
    ]);
    this.log.set(null);
  }

  /* ── content popover demo ── */
  protected readonly notify = signal(true);
  protected readonly digest = signal(false);

  /* ── placement playground ── */
  protected readonly placements: readonly FoldPopoverPlacement[] = [
    "bottom-start",
    "bottom",
    "bottom-end",
    "top-start",
    "top-end",
    "right",
    "left",
  ];
  protected readonly pgPlacement = signal<FoldPopoverPlacement>("bottom-start");
  protected readonly playgroundCode = computed(
    () => `<fold-dropdown placement="${this.pgPlacement()}" ariaLabel="Actions">
  <fold-button-icon icon="more-vertical" tooltip="Actions" foldPopoverTrigger="menu" />
  <fold-dropdown-item icon="edit" (selected)="rename()">Rename</fold-dropdown-item>
  <fold-dropdown-item icon="copy" (selected)="duplicate()">Duplicate</fold-dropdown-item>
  <fold-dropdown-item tone="danger" icon="bin" (selected)="remove()">Delete</fold-dropdown-item>
</fold-dropdown>`,
  );
}
