import { Component, computed, signal } from "@angular/core";
import { KindBadgeComponent } from "../kind-badge.component";
import { DevPlaygroundComponent } from "../playground.component";
import {
  Sh3ButtonComponent,
  Sh3CardComponent,
  Sh3PageLayoutComponent,
} from "../../src/index";

type CardSurface = "card" | "sunken";
type CardRadius = "sm" | "md" | "lg";
type CardPadding = "none" | "sm" | "md" | "lg";

/** `/card` — the `sh3-card` gallery page. */
@Component({
  selector: "gal-card-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    Sh3PageLayoutComponent,
    Sh3CardComponent,
    Sh3ButtonComponent,
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
    const open = attrs.length ? `<sh3-card ${attrs.join(" ")}>` : "<sh3-card>";
    return [
      open,
      ...(this.cpHeader() ? ["  <strong cardHeader>Card title</strong>"] : []),
      "  Body content",
      ...(this.cpFooter() ? ["  <div cardFooter>…actions…</div>"] : []),
      "</sh3-card>",
    ].join("\n");
  });
}
