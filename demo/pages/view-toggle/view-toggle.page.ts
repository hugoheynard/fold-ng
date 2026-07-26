import { Component, computed, signal } from "@angular/core";
import { KindBadgeComponent } from "../../components/kind-badge.component";
import { ComposedOfComponent } from "../../components/composed-of.component";
import { DevPlaygroundComponent } from "../../components/playground.component";
import {
  FoldPageLayoutComponent,
  FoldViewToggleComponent,
  type FoldViewToggleOption,
} from "../../../src/public-api";

type Size = "sm" | "md";

/** `/view-toggle` — the `fold-view-toggle` segmented single-select gallery page. */
@Component({
  selector: "gal-view-toggle-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    ComposedOfComponent,
    DevPlaygroundComponent,
    FoldPageLayoutComponent,
    FoldViewToggleComponent,
  ],
  templateUrl: "./view-toggle.page.html",
  styleUrl: "./view-toggle.page.scss",
})
export default class ViewTogglePage {
  protected readonly view = signal("cards");
  protected readonly size = signal<Size>("md");
  protected readonly iconOnly = signal(false);
  protected readonly sizes: Size[] = ["sm", "md"];

  protected readonly options: readonly FoldViewToggleOption[] = [
    { value: "cards", label: "Cards", icon: "grid", ariaLabel: "Cards" },
    { value: "table", label: "Table", icon: "list", ariaLabel: "Table" },
  ];

  protected readonly code = computed(() => {
    const attrs = ['ariaLabel="View"', '[options]="options"'];
    if (this.size() !== "md") {
      attrs.push(`size="${this.size()}"`);
    }
    if (this.iconOnly()) {
      attrs.push("iconOnly");
    }
    attrs.push('[(value)]="view"');
    return ["<fold-view-toggle", ...attrs.map((a) => `  ${a}`), "/>"].join(
      "\n",
    );
  });
}
