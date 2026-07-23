import { Component, computed, signal } from "@angular/core";
import { KindBadgeComponent } from "../../components/kind-badge.component";
import { DevPlaygroundComponent } from "../../components/playground.component";
import {
  FoldButtonComponent,
  FoldCardComponent,
  FoldPageLayoutComponent,
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

  protected readonly cpSurface = signal<CardSurface>("card");
  protected readonly cpRadius = signal<CardRadius>("lg");
  protected readonly cpPadding = signal<CardPadding>("md");
  protected readonly cpSeparators = signal(true);
  protected readonly cpRaised = signal(true);
  protected readonly cpHeader = signal(true);
  protected readonly cpFooter = signal(true);

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
    if (this.cpSeparators()) {
      attrs.push("separators");
    }
    if (this.cpRaised()) {
      attrs.push("raisedBands");
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
