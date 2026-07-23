import { Component, computed, signal, ViewEncapsulation } from "@angular/core";
import {
  FoldButtonComponent,
  FoldCalloutComponent,
  FoldCardComponent,
  FoldPageLayoutComponent,
  type FoldCalloutAppearance,
  type FoldCalloutVariant,
} from "../../../src/index";
import { KindBadgeComponent } from "../../kind-badge.component";
import { DevPlaygroundComponent } from "../../playground.component";

/** `/callout` — the `fold-callout` gallery page. */
@Component({
  selector: "gal-callout-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    FoldPageLayoutComponent,
    FoldCalloutComponent,
    FoldCardComponent,
    FoldButtonComponent,
    DevPlaygroundComponent,
  ],
  templateUrl: "./callout.page.html",
  styleUrl: "./callout.page.scss",
  encapsulation: ViewEncapsulation.None,
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

  protected readonly coVariant = signal<FoldCalloutVariant>("warning");
  protected readonly coAppearance = signal<FoldCalloutAppearance>("inset");
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
      ? `<fold-callout ${attrs.join(" ")}>`
      : "<fold-callout>";
    const body = [
      "  This contract is <strong>locked</strong> — no more edits.",
      this.coActions()
        ? '  <fold-button actions size="sm" variant="ghost">Request access</fold-button>'
        : "",
    ].filter(Boolean);
    return [open, ...body, "</fold-callout>"].join("\n");
  });
}
