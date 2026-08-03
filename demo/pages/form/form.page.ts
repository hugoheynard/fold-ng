import { Component, computed, signal } from "@angular/core";
import { KindBadgeComponent } from "../../components/kind-badge.component";
import { form, required, FormField } from "@angular/forms/signals";
import {
  FoldNavLayoutComponent,
  FoldInputComponent,
  FoldNumberInputComponent,
  type FoldNumberSpinner,
  type FoldNumberControls,
  FoldPageLayoutComponent,
  FoldSearchComponent,
  FoldSelectComponent,
  FoldSliderComponent,
  FoldTextareaComponent,
  FoldDateComponent,
  FoldViewNavComponent,
  type FoldViewNavItem,
} from "../../../src/public-api";
import { DevPlaygroundComponent } from "../../components/playground.component";

/** `/form` — the `fold-input` gallery page (text · number · select · search). */
@Component({
  selector: "gal-form-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    FoldPageLayoutComponent,
    FoldNavLayoutComponent,
    FoldViewNavComponent,
    FoldInputComponent,
    FoldNumberInputComponent,
    FoldSelectComponent,
    FoldSearchComponent,
    FoldSliderComponent,
    FoldTextareaComponent,
    FoldDateComponent,
    FormField,
    DevPlaygroundComponent,
  ],
  templateUrl: "./form.page.html",
})
export default class FormPage {
  protected readonly inputTabs: FoldViewNavItem[] = [
    { key: "text", label: "Text" },
    { key: "textarea", label: "Textarea" },
    { key: "number", label: "Number" },
    { key: "select", label: "Select" },
    { key: "datetime", label: "Date & time" },
    { key: "search", label: "Search" },
  ];
  protected readonly inputTab = signal("text");
  protected readonly searchTerm = signal("");

  protected readonly selCurrency = signal("");
  protected readonly selSize = signal("");
  protected readonly currencies = ["EUR", "USD", "GBP", "JPY"];

  protected readonly demoNote = signal("");
  protected readonly demoDate = signal("");
  protected readonly demoTime = signal("");
  protected readonly demoMonth = signal("");

  /* Fields — plain signals bound to fold-input via [(value)] (text). Showcases the
     layout: vertical nav + page-section + choice-row. */
  protected readonly demoText = signal("Two-way [(value)]");
  protected readonly demoBpm = signal<number | null>(120);
  protected readonly demoArrows = signal<number | null>(8);
  protected readonly demoStepper = signal<number | null>(2);

  /* ── Number-input playground — params drive a live preview + code ─────── */
  protected readonly npSpinner = signal<FoldNumberSpinner>("plusminus");
  protected readonly npControls = signal<FoldNumberControls>("inside");
  protected readonly npSize = signal<"sm" | "md" | "lg">("md");
  protected readonly npStep = signal(1);
  protected readonly npMin = signal(0);
  protected readonly npMax = signal(0);
  protected readonly npShowStep = signal(false);
  protected readonly npSnap = signal(false);
  protected readonly npDecimals = signal<number | undefined>(undefined);
  protected readonly npValue = signal<number | null>(4);

  protected readonly numberPlaygroundCode = computed(() => {
    const lines = ["<fold-number-input", '  label="Quantity"'];
    if (this.npSize() !== "md") {
      lines.push(`  size="${this.npSize()}"`);
    }
    if (this.npSpinner() !== "plusminus") {
      lines.push(`  spinner="${this.npSpinner()}"`);
    }
    if (this.npControls() !== "inside") {
      lines.push(`  controls="${this.npControls()}"`);
    }
    if (this.npMin() > 0) {
      lines.push(`  [min]="${this.npMin()}"`);
    }
    if (this.npMax() > 0) {
      lines.push(`  [max]="${this.npMax()}"`);
    }
    if (this.npStep() !== 1) {
      lines.push(`  [step]="${this.npStep()}"`);
    }
    if (this.npShowStep()) {
      lines.push("  showStep");
    }
    if (this.npSnap()) {
      lines.push("  snapToStep");
    }
    const decimals = this.npDecimals();
    if (decimals === 0) {
      lines.push("  integer");
    } else if (decimals !== undefined) {
      lines.push(`  [decimals]="${decimals}"`);
    }
    lines.push('  [(value)]="qty"', "/>");
    return lines.join("\n");
  });

  /* A Signal Forms field with a required validator — blur while empty to
     surface the error under the control. */
  protected readonly demoReqName = signal("");
  protected readonly demoReqForm = form(this.demoReqName, (p) => {
    required(p, { message: "Name is required" });
  });
}
