import { Component, computed, signal, ViewEncapsulation } from "@angular/core";
import { NgTemplateOutlet } from "@angular/common";
import { KindBadgeComponent } from "../../components/kind-badge.component";
import { ComposedOfComponent } from "../../components/composed-of.component";
import { DevPlaygroundComponent } from "../../components/playground.component";
import { SelectSchemaComponent } from "./select-schema.component";
import {
  FoldListboxComponent,
  FoldMultiselectComponent,
  FoldOptgroupComponent,
  FoldOptionComponent,
  FoldPageLayoutComponent,
  FoldPageSectionComponent,
  FoldSelectComponent,
  FoldTabPanelComponent,
  FoldTabsComponent,
  type FoldTabItem,
  type FoldSelectItem,
  type FoldSelectOption,
} from "../../../src/public-api";

type Size = "sm" | "md" | "lg";
type Variant = "default" | "panel";
interface Currency {
  readonly value: string;
  readonly label: string;
}

/** `/listbox` — the styleable-select family: listbox · multiselect · native select,
 *  each with a playground and a "Tech" architecture section. */
@Component({
  selector: "gal-listbox-page",
  standalone: true,
  imports: [
    NgTemplateOutlet,
    KindBadgeComponent,
    ComposedOfComponent,
    DevPlaygroundComponent,
    SelectSchemaComponent,
    FoldPageLayoutComponent,
    FoldPageSectionComponent,
    FoldTabsComponent,
    FoldTabPanelComponent,
    FoldListboxComponent,
    FoldMultiselectComponent,
    FoldOptgroupComponent,
    FoldOptionComponent,
    FoldSelectComponent,
  ],
  templateUrl: "./listbox.page.html",
  styleUrl: "./listbox.page.scss",
  encapsulation: ViewEncapsulation.None,
})
export default class ListboxPage {
  protected readonly tab = signal("listbox");
  protected readonly tabs: FoldTabItem[] = [
    { key: "listbox", label: "listbox", icon: "list" },
    { key: "grouped", label: "grouped", icon: "layers" },
    { key: "multi", label: "multiselect", icon: "check-circle" },
    { key: "select", label: "select · native", icon: "chevron-down" },
    { key: "typed", label: "typed value", icon: "code" },
  ];

  /** Grouped options — projected `<fold-optgroup>` around `<fold-option>`s. */
  protected readonly cityValue = signal<string | null>(null);
  /** The same grouping, data-driven via the `[options]` array API. */
  protected readonly cityArrayValue = signal<string | null>(null);
  protected readonly cityGroups: readonly FoldSelectItem<string>[] = [
    {
      label: "France",
      options: [
        { value: "paris", label: "Paris" },
        { value: "lyon", label: "Lyon" },
      ],
    },
    {
      label: "Italia",
      options: [
        { value: "roma", label: "Roma" },
        { value: "milano", label: "Milano" },
      ],
    },
  ];
  protected readonly groupedCode = `<!-- projected: <fold-optgroup> around <fold-option>s -->
<fold-listbox label="Ville" [(value)]="city">
  <fold-optgroup label="France">
    <fold-option value="paris">Paris</fold-option>
    <fold-option value="lyon">Lyon</fold-option>
  </fold-optgroup>
  <fold-optgroup label="Italia">
    <fold-option value="roma">Roma</fold-option>
  </fold-optgroup>
</fold-listbox>

<!-- data-driven: groups in the [options] array (FoldSelectItem<T>[]) -->
groups = [
  { label: 'France', options: [{ value: 'paris', label: 'Paris' }, …] },
  { label: 'Italia', options: [{ value: 'roma',  label: 'Roma'  }] },
];
<fold-listbox label="Ville" [(value)]="city" [options]="groups" />`;

  /** Data-driven number options — the `[options]` array API (value = number). */
  protected readonly plans: readonly FoldSelectOption<number>[] = [
    { value: 1, label: "Starter" },
    { value: 2, label: "Pro" },
    { value: 3, label: "Enterprise", disabled: true },
  ];
  protected readonly planId = signal<number | null>(2);

  /** Object options + a compareWith (matches by id, not reference). */
  protected readonly teams: readonly { id: number; name: string }[] = [
    { id: 10, name: "Design" },
    { id: 20, name: "Engineering" },
  ];
  protected readonly team = signal<{ id: number; name: string } | null>(null);
  protected readonly sameId = (a: { id: number }, b: { id: number }): boolean =>
    a.id === b.id;

  protected readonly typedCode = `<!-- number ids via the [options] array API -->
<fold-listbox label="Plan" [(value)]="planId" [options]="plans" />

<!-- object values need a compareWith (matches by id, not reference) -->
<fold-listbox label="Team" [(value)]="team" [compareWith]="sameId">
  @for (t of teams; track t.id) {
    <fold-option [value]="t">{{ t.name }}</fold-option>
  }
</fold-listbox>`;

  /** Shared demo options for all three controls. */
  protected readonly currencies: readonly Currency[] = [
    { value: "EUR", label: "Euro (€)" },
    { value: "USD", label: "US Dollar ($)" },
    { value: "GBP", label: "Livre sterling (£)" },
    { value: "JPY", label: "Yen (¥)" },
  ];

  /** Playground knobs — shared across the tabs (only one panel shows at a time). */
  protected readonly sizes: Size[] = ["sm", "md", "lg"];
  protected readonly variants: Variant[] = ["default", "panel"];
  protected readonly size = signal<Size>("md");
  protected readonly variant = signal<Variant>("default");

  /** Live values, one per control. */
  protected readonly lbValue = signal("EUR");
  protected readonly msValue = signal<readonly string[]>(["EUR", "GBP"]);
  protected readonly selValue = signal("EUR");

  protected readonly lbCode = computed(() =>
    this.snippet("fold-listbox", '[(value)]="currency"', "fold-option", [
      "allowClear",
    ]),
  );
  protected readonly msCode = computed(() =>
    this.snippet("fold-multiselect", '[(value)]="picked"', "fold-option", [
      "allowSelectAll",
      "allowClear",
    ]),
  );
  protected readonly selCode = computed(() =>
    this.snippet("fold-select", '[(value)]="currency"', "option"),
  );

  /** Build the generated snippet for a control from the current knobs. */
  private snippet(
    tag: string,
    valueBind: string,
    optionTag: string,
    extra: readonly string[] = [],
  ): string {
    const attrs = ['label="Devise"', valueBind, ...extra];
    if (this.size() !== "md") {
      attrs.push(`size="${this.size()}"`);
    }
    if (this.variant() !== "default") {
      attrs.push(`variant="${this.variant()}"`);
    }
    const options = this.currencies
      .map(
        (c) => `  <${optionTag} value="${c.value}">${c.label}</${optionTag}>`,
      )
      .join("\n");
    return [
      `<${tag}`,
      ...attrs.map((a) => `  ${a}`),
      ">",
      options,
      `</${tag}>`,
    ].join("\n");
  }
}
