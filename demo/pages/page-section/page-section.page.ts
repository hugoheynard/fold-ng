import { Component, computed, signal, ViewEncapsulation } from "@angular/core";
import { KindBadgeComponent } from "../../components/kind-badge.component";
import { ComposedOfComponent } from "../../components/composed-of.component";
import { DevPlaygroundComponent } from "../../components/playground.component";
import {
  FoldButtonComponent,
  FoldCardComponent,
  FoldElementTitleComponent,
  type FoldIconTone,
  FoldPageLayoutComponent,
  FoldPageSectionComponent,
  FoldSliderComponent,
} from "../../../src/public-api";

/** `/page-section` — the `fold-page-section` gallery playground. */
@Component({
  selector: "gal-page-section-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    ComposedOfComponent,
    DevPlaygroundComponent,
    FoldPageLayoutComponent,
    FoldPageSectionComponent,
    FoldCardComponent,
    FoldButtonComponent,
    FoldSliderComponent,
    FoldElementTitleComponent,
  ],
  templateUrl: "./page-section.page.html",
  styleUrl: "./page-section.page.scss",
  encapsulation: ViewEncapsulation.None,
})
export default class PageSectionPage {
  /** Header anatomy — each slot toggled so the section is explorable. */
  protected readonly showTitle = signal(true);
  protected readonly showIcon = signal(true);
  /** Icon tint — drives the component's `iconTone` (fold-icon's `tone`). */
  protected readonly iconTone = signal<FoldIconTone>("primary");
  protected readonly tones = [
    "secondary",
    "primary",
    "muted",
    "faded",
  ] as const satisfies readonly FoldIconTone[];
  protected readonly showSubtitle = signal(false);
  protected readonly showDesc = signal(true);
  protected readonly showActions = signal(true);
  /**
   * The micro-label skin, and the hairline closing the head. Both off by
   * default: the plain h2 is the register a section title wears until a dense
   * back-office asks otherwise.
   */
  protected readonly eyebrow = signal(false);
  protected readonly separator = signal(false);
  /** The two orthogonal body helpers. `stack` defaults on so the section shows
   *  more than one gap out of the box — the bigger head↔body gap plus the even
   *  gaps between fields. */
  protected readonly stack = signal(true);
  protected readonly bleed = signal(false);
  /** The `--fold-page-section-gap` token, and its band overlay. */
  protected readonly sectionGap = signal(20);
  protected readonly showGaps = signal(true);
  /** Heading depth exposed to assistive tech (`aria-level`). */
  protected readonly headingLevel = signal(2);

  /** The live snippet, rebuilt from the chosen inputs. */
  protected readonly code = computed(() => {
    const attrs: string[] = [];
    if (this.showTitle()) {
      attrs.push('title="Payment methods"');
    }
    if (this.showIcon()) {
      attrs.push('icon="briefcase"');
      if (this.iconTone() !== "secondary") {
        attrs.push(`iconTone="${this.iconTone()}"`);
      }
    }
    if (this.showDesc()) {
      attrs.push('description="Charged on renewal."');
    }
    if (this.eyebrow()) {
      attrs.push("eyebrow");
    }
    if (this.separator()) {
      attrs.push("separator");
    }
    if (this.stack()) {
      attrs.push("stack");
    }
    if (this.bleed()) {
      attrs.push("bleed");
    }
    if (this.headingLevel() !== 2) {
      attrs.push(`[headingLevel]="${this.headingLevel()}"`);
    }

    const open = attrs.length
      ? ["<fold-page-section", ...attrs.map((a) => `  ${a}`), ">"]
      : ["<fold-page-section>"];

    const body: string[] = [];
    if (this.showSubtitle()) {
      body.push("  <span sectionSubtitle>VISA-4242 · 2 methods</span>");
    }
    if (this.showActions()) {
      body.push("  <button sectionActions>Add</button>");
    }
    if (this.stack()) {
      body.push(
        '  <fold-input label="Cardholder" />',
        '  <fold-input label="Card number" />',
      );
    } else {
      body.push("  <p>… content sits on the page (no box) …</p>");
    }

    return [...open, ...body, "</fold-page-section>"].join("\n");
  });
}
