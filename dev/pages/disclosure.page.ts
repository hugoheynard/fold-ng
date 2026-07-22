import { Component, computed, signal } from "@angular/core";
import {
  Sh3DisclosureComponent,
  Sh3PageLayoutComponent,
} from "../../src/index";
import { KindBadgeComponent } from "../kind-badge.component";
import { DevPlaygroundComponent } from "../playground.component";

/** `/disclosure` — the `sh3-disclosure` gallery page. */
@Component({
  selector: "gal-disclosure-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    Sh3PageLayoutComponent,
    Sh3DisclosureComponent,
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
      ? '\n  style="\n    --sh3-disclosure-summary-bg: var(--sh3-color-primary);\n    --sh3-disclosure-summary-color: var(--sh3-color-on-primary);\n  "'
      : "";
    return [
      `<sh3-disclosure${openAttr}${style}>`,
      "  <span summary>How it works</span>",
      "  <p>The panel, revealed on click.</p>",
      "</sh3-disclosure>",
    ].join("\n");
  });
}
