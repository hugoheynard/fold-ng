import { Component, computed, signal } from "@angular/core";
import {
  FoldDisclosureComponent,
  FoldPageLayoutComponent,
} from "../../../src/index";
import { KindBadgeComponent } from "../../kind-badge.component";
import { DevPlaygroundComponent } from "../../playground.component";

/** `/disclosure` — the `fold-disclosure` gallery page. */
@Component({
  selector: "gal-disclosure-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    FoldPageLayoutComponent,
    FoldDisclosureComponent,
    DevPlaygroundComponent,
  ],
  templateUrl: "./disclosure.page.html",
})
export default class DisclosurePage {
  protected readonly tones = ["plain", "primary"] as const;
  protected readonly dcTone = signal<"plain" | "primary">("plain");
  protected readonly dcOpen = signal(false);

  protected readonly disclosureCode = computed(() => {
    const primary = this.dcTone() === "primary";
    const openAttr = this.dcOpen() ? ' [open]="true"' : "";
    const style = primary
      ? '\n  style="\n    --fold-disclosure-summary-bg: var(--fold-color-primary);\n    --fold-disclosure-summary-color: var(--fold-color-on-primary);\n  "'
      : "";
    return [
      `<fold-disclosure${openAttr}${style}>`,
      "  <span summary>How it works</span>",
      "  <p>The panel, revealed on click.</p>",
      "</fold-disclosure>",
    ].join("\n");
  });
}
