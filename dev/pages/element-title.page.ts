import { Component } from "@angular/core";
import { KindBadgeComponent } from "../kind-badge.component";
import {
  FoldElementTitleComponent,
  FoldPageLayoutComponent,
} from "../../src/index";

/** `/element-title` — the `fold-element-title` gallery page. */
@Component({
  selector: "gal-element-title-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    FoldPageLayoutComponent,
    FoldElementTitleComponent,
  ],
  template: `<fold-page-layout title="element-title">
    <gal-kind-badge titleBadge kind="component" />
    <div class="gal-stack">
      <div class="gal-cell">
        <span class="gal-tag">eyebrow</span>
        <fold-element-title title="Contexte" />
      </div>
      <div class="gal-cell">
        <span class="gal-tag">bar</span>
        <fold-element-title variant="bar" title="Documents" />
      </div>
      <div class="gal-cell">
        <span class="gal-tag">title · iconTone matrix</span>
        <div class="gal-row">
          <fold-element-title
            variant="title"
            icon="company"
            iconTone="primary"
            title="Primary"
            subtitle="filled brand tile"
          />
          <fold-element-title
            variant="title"
            icon="company"
            iconTone="neutral"
            title="Neutral"
            subtitle="raised tile"
          />
          <fold-element-title
            variant="title"
            icon="company"
            iconTone="faded"
            title="Faded"
            subtitle="dim tile"
          />
        </div>
      </div>
    </div>
  </fold-page-layout>`,
})
export default class ElementTitlePage {}
