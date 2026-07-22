import { Component } from "@angular/core";
import { KindBadgeComponent } from "../kind-badge.component";
import {
  Sh3IconComponent,
  Sh3PageLayoutComponent,
  Sh3PageSectionComponent,
} from "../../src/index";

/** `/page-section` — the `sh3-page-section` gallery page. */
@Component({
  selector: "gal-page-section-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    Sh3PageLayoutComponent,
    Sh3PageSectionComponent,
    Sh3IconComponent,
  ],
  template: `<sh3-page-layout fluid title="page-section">
    <gal-kind-badge titleBadge kind="component" />
    <div class="gal-row gal-row--wide">
      <sh3-page-section surface="transparent" title="Transparent">
        <p class="gal-body">Flat on the page — no surface, no radius.</p>
      </sh3-page-section>
      <sh3-page-section surface="card" title="Card">
        <p class="gal-body">Raised card surface + radius.</p>
      </sh3-page-section>
      <sh3-page-section surface="sunken" divider title="Sunken · divider">
        <sh3-icon sectionActions name="edit" size="sm" />
        <p class="gal-body">Deep tint + header bar.</p>
      </sh3-page-section>
    </div>
    <div class="gal-cell">
      <span class="gal-tag">stack (form fields)</span>
      <sh3-page-section surface="card" stack title="Stacked">
        <div class="gal-field">Field A</div>
        <div class="gal-field">Field B</div>
        <div class="gal-field">Field C</div>
      </sh3-page-section>
    </div>

    <span class="gal-tag">bleed — a full-width band amid padded sections</span>
    <sh3-page-section title="Padded section">
      <p class="gal-body">Sits in the page gutter, like everything else.</p>
    </sh3-page-section>
    <sh3-page-section bleed surface="sunken" divider title="Bleed band">
      <p class="gal-body">
        Spans the layout edge-to-edge — it cancels
        <code>--sh3-page-gutter</code> exactly (the same token the page pads
        with), so it stays flush at every width and never overflows.
      </p>
    </sh3-page-section>
    <sh3-page-section title="Padded section">
      <p class="gal-body">Back in the gutter.</p>
    </sh3-page-section>
  </sh3-page-layout>`,
})
export default class PageSectionPage {}
