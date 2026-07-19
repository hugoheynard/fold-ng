import { Component } from "@angular/core";
import {
  Sh3ElementTitleComponent,
  Sh3PageLayoutComponent,
} from "../../src/index";

/** `/element-title` — the `sh3-element-title` gallery page. */
@Component({
  selector: "gal-element-title-page",
  standalone: true,
  imports: [Sh3PageLayoutComponent, Sh3ElementTitleComponent],
  template: `<sh3-page-layout fluid title="element-title">
    <div class="gal-stack">
      <div class="gal-cell">
        <span class="gal-tag">eyebrow</span>
        <sh3-element-title title="Contexte" />
      </div>
      <div class="gal-cell">
        <span class="gal-tag">bar</span>
        <sh3-element-title variant="bar" title="Documents" />
      </div>
      <div class="gal-cell">
        <span class="gal-tag">title · iconTone matrix</span>
        <div class="gal-row">
          <sh3-element-title
            variant="title"
            icon="company"
            iconTone="primary"
            title="Primary"
            subtitle="filled brand tile"
          />
          <sh3-element-title
            variant="title"
            icon="company"
            iconTone="neutral"
            title="Neutral"
            subtitle="raised tile"
          />
          <sh3-element-title
            variant="title"
            icon="company"
            iconTone="faded"
            title="Faded"
            subtitle="dim tile"
          />
        </div>
      </div>
    </div>
  </sh3-page-layout>`,
})
export default class ElementTitlePage {}
