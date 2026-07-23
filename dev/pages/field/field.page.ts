import { Component } from "@angular/core";
import { KindBadgeComponent } from "../../kind-badge.component";
import {
  FoldBadgeComponent,
  FoldFieldComponent,
  FoldFieldListComponent,
  FoldIconComponent,
  FoldLinkComponent,
  FoldPageLayoutComponent,
  FoldStatusBadgeComponent,
} from "../../../src/index";

/** `/field` — the `fold-field` · `fold-field-list` gallery page. */
@Component({
  selector: "gal-field-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    FoldPageLayoutComponent,
    FoldFieldComponent,
    FoldFieldListComponent,
    FoldStatusBadgeComponent,
    FoldBadgeComponent,
    FoldIconComponent,
    FoldLinkComponent,
  ],
  template: `<fold-page-layout
    fluid
    title="field · field-list"
    description="The read-only half of a record — a dl/dt/dd list of label/value pairs. The display counterpart of fold-input."
  >
    <gal-kind-badge titleBadge kind="component" />
    <div class="gal-stack">
      <div class="gal-cell">
        <span class="gal-tag">basic recap · [empty] placeholder</span>
        <div class="fld-demo">
          <fold-field-list>
            <fold-field label="Contract type">CDI</fold-field>
            <fold-field label="Job title">Sound engineer</fold-field>
            <fold-field label="End date" [empty]="true" />
            <fold-field
              label="Notice"
              [empty]="true"
              placeholder="Non renseigné"
            />
          </fold-field-list>
        </div>
      </div>

      <div class="gal-cell">
        <span class="gal-tag">rich values · chips, links, icons</span>
        <div class="fld-demo">
          <fold-field-list>
            <fold-field label="Status">
              <fold-status-badge status="active" label="Actif" />
            </fold-field>
            <fold-field label="Tags">
              <fold-badge content="lead" variant="info" />
              <fold-badge content="urgent" variant="warning" />
            </fold-field>
            <fold-field label="Contact">
              <fold-icon name="team" [size]="16" />
              <fold-link href="#field">Marc Machine</fold-link>
            </fold-field>
          </fold-field-list>
        </div>
      </div>

      <div class="gal-cell">
        <span class="gal-tag">narrow rail · shrink the label column</span>
        <div class="fld-demo">
          <fold-field-list class="fld-narrow">
            <fold-field label="Type">CDI</fold-field>
            <fold-field label="Start">12 Mar 2026</fold-field>
          </fold-field-list>
        </div>
      </div>
    </div>
  </fold-page-layout>`,
})
export default class FieldPage {}
