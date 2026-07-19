import { Component } from "@angular/core";
import { KindBadgeComponent } from "../kind-badge.component";
import {
  Sh3BadgeComponent,
  Sh3FieldComponent,
  Sh3FieldListComponent,
  Sh3IconComponent,
  Sh3LinkComponent,
  Sh3PageLayoutComponent,
  Sh3StatusBadgeComponent,
} from "../../src/index";

/** `/field` — the `sh3-field` · `sh3-field-list` gallery page. */
@Component({
  selector: "gal-field-page",
  standalone: true,
  host: { class: "gal-page" },
  imports: [
    KindBadgeComponent,
    Sh3PageLayoutComponent,
    Sh3FieldComponent,
    Sh3FieldListComponent,
    Sh3StatusBadgeComponent,
    Sh3BadgeComponent,
    Sh3IconComponent,
    Sh3LinkComponent,
  ],
  template: `<sh3-page-layout
    fluid
    title="field · field-list"
    description="The read-only half of a record — a dl/dt/dd list of label/value pairs. The display counterpart of sh3-input."
  >
    <gal-kind-badge titleBadge kind="component" />
    <div class="gal-stack">
      <div class="gal-cell">
        <span class="gal-tag">basic recap · [empty] placeholder</span>
        <div class="fld-demo">
          <sh3-field-list>
            <sh3-field label="Contract type">CDI</sh3-field>
            <sh3-field label="Job title">Sound engineer</sh3-field>
            <sh3-field label="End date" [empty]="true" />
            <sh3-field
              label="Notice"
              [empty]="true"
              placeholder="Non renseigné"
            />
          </sh3-field-list>
        </div>
      </div>

      <div class="gal-cell">
        <span class="gal-tag">rich values · chips, links, icons</span>
        <div class="fld-demo">
          <sh3-field-list>
            <sh3-field label="Status">
              <sh3-status-badge status="active" label="Actif" />
            </sh3-field>
            <sh3-field label="Tags">
              <sh3-badge content="lead" variant="info" />
              <sh3-badge content="urgent" variant="warning" />
            </sh3-field>
            <sh3-field label="Contact">
              <sh3-icon name="team" [size]="16" />
              <sh3-link href="#field">Marc Machine</sh3-link>
            </sh3-field>
          </sh3-field-list>
        </div>
      </div>

      <div class="gal-cell">
        <span class="gal-tag">narrow rail · shrink the label column</span>
        <div class="fld-demo">
          <sh3-field-list class="fld-narrow">
            <sh3-field label="Type">CDI</sh3-field>
            <sh3-field label="Start">12 Mar 2026</sh3-field>
          </sh3-field-list>
        </div>
      </div>
    </div>
  </sh3-page-layout>`,
})
export default class FieldPage {}
