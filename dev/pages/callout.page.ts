import { Component, computed, signal } from "@angular/core";
import {
  Sh3ButtonComponent,
  Sh3CalloutComponent,
  Sh3CardComponent,
  Sh3PageLayoutComponent,
  type Sh3CalloutAppearance,
  type Sh3CalloutVariant,
} from "../../src/index";
import { KindBadgeComponent } from "../kind-badge.component";
import { DevPlaygroundComponent } from "../playground.component";

/** `/callout` — the `sh3-callout` gallery page. */
@Component({
  selector: "gal-callout-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    Sh3PageLayoutComponent,
    Sh3CalloutComponent,
    Sh3CardComponent,
    Sh3ButtonComponent,
    DevPlaygroundComponent,
  ],
  templateUrl: "./callout.page.html",
})
export default class CalloutPage {
  protected readonly variants = [
    "neutral",
    "accent",
    "info",
    "success",
    "warning",
    "alert",
  ] as const;
  protected readonly appearances = ["inset", "flat"] as const;

  protected readonly coVariant = signal<Sh3CalloutVariant>("warning");
  protected readonly coAppearance = signal<Sh3CalloutAppearance>("inset");
  protected readonly coActions = signal(false);
  protected readonly coAnnounce = signal(false);

  protected readonly calloutCode = computed(() => {
    const attrs = [
      this.coVariant() === "neutral" ? "" : `variant="${this.coVariant()}"`,
      this.coAppearance() === "inset"
        ? ""
        : `appearance="${this.coAppearance()}"`,
      this.coAnnounce() ? "announce" : "",
    ].filter(Boolean);
    const open = attrs.length
      ? `<sh3-callout ${attrs.join(" ")}>`
      : "<sh3-callout>";
    const body = [
      "  This contract is <strong>locked</strong> — no more edits.",
      this.coActions()
        ? '  <sh3-button actions size="sm" variant="ghost">Request access</sh3-button>'
        : "",
    ].filter(Boolean);
    return [open, ...body, "</sh3-callout>"].join("\n");
  });
}
