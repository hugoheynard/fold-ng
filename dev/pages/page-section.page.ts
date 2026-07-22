import { Component } from "@angular/core";
import { KindBadgeComponent } from "../kind-badge.component";
import {
  FoldIconComponent,
  FoldPageLayoutComponent,
  FoldPageSectionComponent,
} from "../../src/index";

/** `/page-section` — the `fold-page-section` gallery page. */
@Component({
  selector: "gal-page-section-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    FoldPageLayoutComponent,
    FoldPageSectionComponent,
    FoldIconComponent,
  ],
  template: `<fold-page-layout title="page-section">
    <gal-kind-badge titleBadge kind="component" />
    <div class="gal-row gal-row--wide">
      <fold-page-section surface="transparent" title="Transparent">
        <p class="gal-body">Flat on the page — no surface, no radius.</p>
      </fold-page-section>
      <fold-page-section surface="card" title="Card">
        <p class="gal-body">Raised card surface + radius.</p>
      </fold-page-section>
      <fold-page-section surface="sunken" divider title="Sunken · divider">
        <fold-icon sectionActions name="edit" size="sm" />
        <p class="gal-body">Deep tint + header bar.</p>
      </fold-page-section>
    </div>
    <div class="gal-cell">
      <span class="gal-tag">stack (form fields)</span>
      <fold-page-section surface="card" stack title="Stacked">
        <div class="gal-field">Field A</div>
        <div class="gal-field">Field B</div>
        <div class="gal-field">Field C</div>
      </fold-page-section>
    </div>

    <span class="gal-tag">bleed — a full-width band amid padded sections</span>
    <fold-page-section title="Padded section">
      <p class="gal-body">Sits in the page gutter, like everything else.</p>
    </fold-page-section>
    <fold-page-section bleed surface="sunken" divider title="Bleed band">
      <p class="gal-body">
        Spans the layout edge-to-edge — it cancels
        <code>--fold-page-gutter</code> exactly (the same token the page pads
        with), so it stays flush at every width and never overflows.
      </p>
    </fold-page-section>
    <fold-page-section title="Padded section">
      <p class="gal-body">Back in the gutter.</p>
    </fold-page-section>
  </fold-page-layout>`,
})
export default class PageSectionPage {}
