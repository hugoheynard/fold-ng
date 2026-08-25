import { Component, computed, signal } from "@angular/core";
import { KindBadgeComponent } from "../../components/kind-badge.component";
import { DevPlaygroundComponent } from "../../components/playground.component";
import {
  FoldCardComponent,
  FoldCheckboxComponent,
  FoldFieldsetComponent,
  FoldPageLayoutComponent,
  type FoldFieldsetAppearance,
  type FoldFieldsetDirection,
} from "../../../src/public-api";

/** `/fieldset` — the `fold-fieldset` gallery page (legend, direction, appearance). */
@Component({
  selector: "gal-fieldset-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    DevPlaygroundComponent,
    FoldPageLayoutComponent,
    FoldCardComponent,
    FoldCheckboxComponent,
    FoldFieldsetComponent,
  ],
  templateUrl: "./fieldset.page.html",
})
export default class FieldsetPage {
  /* ── static demos ── */
  protected readonly gluten = signal(true);
  protected readonly nuts = signal(false);
  protected readonly eggs = signal(false);

  /* ── playground ── */
  protected readonly pgLegend = signal("Allergènes");
  protected readonly pgDirection = signal<FoldFieldsetDirection>("vertical");
  protected readonly pgAppearance = signal<FoldFieldsetAppearance>("plain");
  protected readonly pgHint = signal("");
  protected readonly pgDisabled = signal(false);

  protected readonly directions: readonly FoldFieldsetDirection[] = [
    "vertical",
    "horizontal",
  ];
  protected readonly appearances: readonly FoldFieldsetAppearance[] = [
    "plain",
    "border",
  ];

  protected readonly playgroundCode = computed(() => {
    const lines = ["<fold-fieldset"];
    if (this.pgLegend() !== "") {
      lines.push(`  legend="${this.pgLegend()}"`);
    }
    if (this.pgDirection() !== "vertical") {
      lines.push(`  direction="${this.pgDirection()}"`);
    }
    if (this.pgAppearance() !== "plain") {
      lines.push(`  appearance="${this.pgAppearance()}"`);
    }
    if (this.pgHint() !== "") {
      lines.push(`  hint="${this.pgHint()}"`);
    }
    if (this.pgDisabled()) {
      lines.push('  [disabled]="true"');
    }
    lines.push(">", '  <fold-checkbox label="Gluten" />', "</fold-fieldset>");
    return lines.join("\n");
  });

  protected toggleLegend(): void {
    this.pgLegend.update((value) => (value === "" ? "Allergènes" : ""));
  }

  protected toggleHint(): void {
    this.pgHint.update((value) =>
      value === "" ? "Cochez tout ce qui s'applique" : "",
    );
  }
}
