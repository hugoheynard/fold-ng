import { Component, computed, signal } from "@angular/core";
import { KindBadgeComponent } from "../kind-badge.component";
import { form, required, FormField } from "@angular/forms/signals";
import {
  Sh3TabLayoutComponent,
  Sh3InputComponent,
  Sh3NumberInputComponent,
  type Sh3NumberSpinner,
  type Sh3NumberControls,
  Sh3PageLayoutComponent,
  Sh3PageSectionComponent,
  Sh3SearchComponent,
  Sh3SelectComponent,
  Sh3SliderComponent,
  Sh3TabNavComponent,
  type Sh3TabNavItem,
} from "../../src/index";
import { DevPlaygroundComponent } from "../playground.component";

/** `/form` — the `sh3-input` gallery page (text · number · select · search). */
@Component({
  selector: "gal-form-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    Sh3PageLayoutComponent,
    Sh3PageSectionComponent,
    Sh3TabLayoutComponent,
    Sh3TabNavComponent,
    Sh3InputComponent,
    Sh3NumberInputComponent,
    Sh3SelectComponent,
    Sh3SearchComponent,
    Sh3SliderComponent,
    FormField,
    DevPlaygroundComponent,
  ],
  templateUrl: "./form.page.html",
})
export default class FormPage {
  protected readonly inputTabs: Sh3TabNavItem[] = [
    { key: "text", label: "Text" },
    { key: "number", label: "Number" },
    { key: "select", label: "Select" },
    { key: "search", label: "Search" },
  ];
  protected readonly inputTab = signal("text");
  protected readonly searchTerm = signal("");

  protected readonly selCurrency = signal("");
  protected readonly selSize = signal("");
  protected readonly currencies = ["EUR", "USD", "GBP", "JPY"];

  /* Fields — plain signals bound to sh3-input via [(value)] (text) or native
     controls (select / textarea, the sanctioned path for those). Showcases the
     layout: vertical nav + page-section + choice-row. */
  protected readonly demoText = signal("Two-way [(value)]");
  protected readonly demoBpm = signal<number | null>(120);
  protected readonly demoArrows = signal<number | null>(8);
  protected readonly demoStepper = signal<number | null>(2);

  /* ── Number-input playground — params drive a live preview + code ─────── */
  protected readonly npSpinner = signal<Sh3NumberSpinner>("plusminus");
  protected readonly npControls = signal<Sh3NumberControls>("inside");
  protected readonly npSize = signal<"sm" | "md" | "lg">("md");
  protected readonly npStep = signal(1);
  protected readonly npMin = signal(0);
  protected readonly npMax = signal(0);
  protected readonly npShowStep = signal(false);
  protected readonly npSnap = signal(false);
  protected readonly npDecimals = signal<number | undefined>(undefined);
  protected readonly npValue = signal<number | null>(4);

  protected readonly numberPlaygroundCode = computed(() => {
    const lines = ["<sh3-number-input", '  label="Quantity"'];
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
