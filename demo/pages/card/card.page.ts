import { Component, computed, signal } from "@angular/core";
import { KindBadgeComponent } from "../../components/kind-badge.component";
import { DevPlaygroundComponent } from "../../components/playground.component";
import {
  FoldButtonComponent,
  FoldCardComponent,
  FoldPageLayoutComponent,
  type FoldCardBandChrome,
} from "../../../src/public-api";

type CardSurface = "card" | "sunken";
type CardRadius = "sm" | "md" | "lg";
type CardPadding = "none" | "sm" | "md" | "lg";

/** `/card` — the `fold-card` gallery page. */
@Component({
  selector: "gal-card-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    FoldPageLayoutComponent,
    FoldCardComponent,
    FoldButtonComponent,
    DevPlaygroundComponent,
  ],
  templateUrl: "./card.page.html",
})
export default class CardPage {
  protected readonly radii: readonly CardRadius[] = ["sm", "md", "lg"];
  protected readonly paddings: readonly CardPadding[] = [
    "none",
    "sm",
    "md",
    "lg",
  ];

  protected readonly bandChromes: readonly FoldCardBandChrome[] = [
    "none",
    "header",
    "footer",
    "both",
  ];

  protected readonly cpSurface = signal<CardSurface>("card");
  protected readonly cpRadius = signal<CardRadius>("lg");
  protected readonly cpPadding = signal<CardPadding>("md");
  protected readonly cpSeparators = signal<FoldCardBandChrome>("both");
  protected readonly cpRaised = signal<FoldCardBandChrome>("both");
  protected readonly cpHeader = signal(true);
  protected readonly cpFooter = signal(true);

  /** Interactive-card demo: counts activations (click / Enter / Space). */
  protected readonly opened = signal(0);
  protected open(): void {
    this.opened.update((n) => n + 1);
  }

  protected readonly cardCode = computed(() => {
    const attrs: string[] = [];
    if (this.cpSurface() === "sunken") {
      attrs.push('surface="sunken"');
    }
    if (this.cpRadius() !== "lg") {
      attrs.push(`radius="${this.cpRadius()}"`);
    }
    if (this.cpPadding() !== "md") {
      attrs.push(`padding="${this.cpPadding()}"`);
    }
    if (this.cpSeparators() !== "none") {
      attrs.push(`separators="${this.cpSeparators()}"`);
    }
    if (this.cpRaised() !== "none") {
      attrs.push(`raisedBands="${this.cpRaised()}"`);
    }
    const open = attrs.length
      ? `<fold-card ${attrs.join(" ")}>`
      : "<fold-card>";
    return [
      open,
      ...(this.cpHeader() ? ["  <strong cardHeader>Card title</strong>"] : []),
      "  Body content",
      ...(this.cpFooter() ? ["  <div cardFooter>…actions…</div>"] : []),
      "</fold-card>",
    ].join("\n");
  });
}
