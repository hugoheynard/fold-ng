import { Component } from "@angular/core";
import { KindBadgeComponent } from "../../kind-badge.component";
import {
  FoldButtonComponent,
  FoldCardComponent,
  FoldElementTitleComponent,
  FoldPageLayoutComponent,
  FoldPageSectionComponent,
} from "../../../src/index";

/** `/page-section` — the `fold-page-section` gallery page. */
@Component({
  selector: "gal-page-section-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    FoldPageLayoutComponent,
    FoldPageSectionComponent,
    FoldCardComponent,
    FoldElementTitleComponent,
    FoldButtonComponent,
  ],
  template: `<fold-page-layout title="page-section">
    <gal-kind-badge titleBadge kind="component" />
    <p description>
      A titled, semantic <code>&lt;section&gt;</code> grouping of page content —
      an eyebrow title + description + actions, plus the <code>stack</code> and
      <code>bleed</code> helpers. It is <strong>not a box</strong>: the title is
      a real heading and the region is a <code>&lt;section&gt;</code>. For a
      card, wrap the content in a <code>fold-card</code>.
    </p>

    <span class="gal-tag"
      >a titled section — transparent, sits on the page</span
    >
    <fold-page-section
      title="Moyens de paiement"
      description="Le moyen par défaut est débité au renouvellement."
    >
      <fold-button sectionActions size="sm" variant="ghost"
        >Ajouter</fold-button
      >
      <p class="gal-body">
        The content sits directly on the page — no box, no radius. The title is
        the region's heading.
      </p>
    </fold-page-section>

    <span class="gal-tag">stack — form fields, evenly spaced</span>
    <fold-page-section stack title="Réglages">
      <div class="gal-field">Field A</div>
      <div class="gal-field">Field B</div>
      <div class="gal-field">Field C</div>
    </fold-page-section>

    <span class="gal-tag">need a box? compose with fold-card</span>
    <fold-page-section title="Documents">
      <fold-card surface="sunken" separators>
        <fold-element-title variant="bar" title="Fichiers" cardHeader />
        <p class="gal-body">
          page-section gives the semantic section + heading; fold-card gives the
          visual box. Orthogonal, composable — the section can hold a card, the
          card never needs to know about the page.
        </p>
      </fold-card>
    </fold-page-section>

    <span class="gal-tag">bleed — a full-width band amid padded sections</span>
    <fold-page-section title="Padded section">
      <p class="gal-body">Sits in the page gutter, like everything else.</p>
    </fold-page-section>
    <fold-page-section bleed>
      <fold-card surface="sunken" radius="sm">
        <p class="gal-body">
          Spans the layout edge-to-edge — <code>bleed</code> cancels
          <code>--fold-page-gutter</code> exactly (the same token the page pads
          with), so it stays flush at every width and never overflows.
        </p>
      </fold-card>
    </fold-page-section>
    <fold-page-section title="Padded section">
      <p class="gal-body">Back in the gutter.</p>
    </fold-page-section>
  </fold-page-layout>`,
})
export default class PageSectionPage {}
