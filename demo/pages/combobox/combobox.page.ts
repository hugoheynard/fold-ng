import { Component, computed, DestroyRef, inject, signal } from "@angular/core";
import { KindBadgeComponent } from "../../components/kind-badge.component";
import { ComposedOfComponent } from "../../components/composed-of.component";
import { DevPlaygroundComponent } from "../../components/playground.component";
import {
  FoldComboboxComponent,
  FoldPageLayoutComponent,
  type FoldSelectOption,
} from "../../../src/public-api";

type Size = "sm" | "md" | "lg";
type Mode = "local" | "remote";

interface Article {
  readonly sku: string;
  readonly name: string;
  readonly family: string;
}

const CATALOGUE: readonly Article[] = [
  { sku: "PAN-001", name: "Baguette tradition", family: "Pains" },
  { sku: "PAN-002", name: "Pain de campagne", family: "Pains" },
  { sku: "PAN-003", name: "Pain aux céréales", family: "Pains" },
  { sku: "VIE-001", name: "Croissant", family: "Viennoiseries" },
  { sku: "VIE-002", name: "Pain au chocolat", family: "Viennoiseries" },
  { sku: "VIE-003", name: "Brioche tressée", family: "Viennoiseries" },
  { sku: "PAT-001", name: "Tarte aux pommes", family: "Pâtisseries" },
  { sku: "PAT-002", name: "Éclair au café", family: "Pâtisseries" },
];

const toOption = (a: Article): FoldSelectOption<Article> => ({
  value: a,
  label: a.name,
});

/** `/combobox` — one field to type in, propositions under it. */
@Component({
  selector: "gal-combobox-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    ComposedOfComponent,
    DevPlaygroundComponent,
    FoldPageLayoutComponent,
    FoldComboboxComponent,
  ],
  templateUrl: "./combobox.page.html",
})
export default class ComboboxPage {
  protected readonly sizes: Size[] = ["sm", "md", "lg"];
  protected readonly modes: Mode[] = ["local", "remote"];
  protected readonly size = signal<Size>("md");
  protected readonly mode = signal<Mode>("local");
  protected readonly clearOnSelect = signal(false);

  protected readonly all = CATALOGUE.map(toOption);
  protected readonly picked = signal<Article | null>(null);

  /** The "server": answers after 600 ms, like a real round trip. */
  protected readonly results = signal<readonly FoldSelectOption<Article>[]>([]);
  protected readonly searching = signal(false);
  private pending: ReturnType<typeof setTimeout> | null = null;

  /** The list the adder fills. */
  protected readonly basket = signal<readonly Article[]>([]);

  constructor() {
    inject(DestroyRef).onDestroy(() => {
      if (this.pending !== null) {
        clearTimeout(this.pending);
      }
    });
  }

  protected readonly options = computed(() =>
    this.mode() === "local" ? this.all : this.results(),
  );

  protected search(term: string): void {
    if (this.pending !== null) {
      clearTimeout(this.pending);
    }
    if (term === "") {
      this.results.set([]);
      this.searching.set(false);
      return;
    }
    this.searching.set(true);
    this.pending = setTimeout(() => {
      const t = term.toLowerCase();
      this.results.set(
        CATALOGUE.filter(
          (a) =>
            a.name.toLowerCase().includes(t) || a.sku.toLowerCase().includes(t),
        ).map(toOption),
      );
      this.searching.set(false);
    }, 600);
  }

  protected add(a: Article): void {
    this.basket.update((b) => [...b, a]);
  }

  protected readonly code = computed(() => {
    const attrs = ['label="Article"'];
    if (this.mode() === "remote") {
      attrs.push(
        'filter="none"',
        '[options]="results()"',
        '[loading]="searching()"',
        'emptyText="Aucun article"',
        '(searchChange)="search($event)"',
      );
    } else {
      attrs.push('[options]="articles"');
    }
    if (this.clearOnSelect()) {
      attrs.push("clearOnSelect", '(selectionChange)="add($event)"');
    } else {
      attrs.push('[(value)]="article"');
    }
    if (this.size() !== "md") {
      attrs.push(`size="${this.size()}"`);
    }
    return [
      "<fold-combobox",
      ...attrs.map((a) => `  ${a}`),
      ">",
      "  <ng-template #option let-o>",
      "    {{ o.label }} <small>{{ o.value.sku }}</small>",
      "  </ng-template>",
      "</fold-combobox>",
    ].join("\n");
  });
}
