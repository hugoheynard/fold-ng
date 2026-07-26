import { Component, computed, signal, ViewEncapsulation } from "@angular/core";
import { NgTemplateOutlet } from "@angular/common";
import { KindBadgeComponent } from "../../components/kind-badge.component";
import { ComposedOfComponent } from "../../components/composed-of.component";
import { DevPlaygroundComponent } from "../../components/playground.component";
import { SelectSchemaComponent } from "./select-schema.component";
import {
  FoldListboxComponent,
  FoldMultiselectComponent,
  FoldOptionComponent,
  FoldPageLayoutComponent,
  FoldPageSectionComponent,
  FoldSelectComponent,
  FoldTabPanelComponent,
  FoldTabsComponent,
  type FoldTabItem,
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
    { key: "multi", label: "multiselect", icon: "check-circle" },
    { key: "select", label: "select · native", icon: "chevron-down" },
  ];

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
    this.snippet("fold-listbox", '[(value)]="currency"', "fold-option"),
  );
  protected readonly msCode = computed(() =>
    this.snippet("fold-multiselect", '[(value)]="picked"', "fold-option"),
  );
  protected readonly selCode = computed(() =>
    this.snippet("fold-select", '[(value)]="currency"', "option"),
  );

  /** Build the generated snippet for a control from the current knobs. */
  private snippet(tag: string, valueBind: string, optionTag: string): string {
    const attrs = ['label="Devise"', valueBind];
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
