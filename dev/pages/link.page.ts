import { Component } from "@angular/core";
import { KindBadgeComponent } from "../kind-badge.component";
import { Sh3LinkComponent, Sh3PageLayoutComponent } from "../../src/index";

/** `/link` — the `sh3-link` gallery page. */
@Component({
  selector: "gal-link-page",
  standalone: true,
  host: { class: "gal-page" },
  imports: [KindBadgeComponent, Sh3PageLayoutComponent, Sh3LinkComponent],
  template: `<sh3-page-layout fluid title="link">
    <gal-kind-badge titleBadge kind="component" />
    <div class="gal-row">
      <sh3-link icon="company" trailingIcon="chevron-right"
        >accent + icons</sh3-link
      >
      <sh3-link tone="muted">muted</sh3-link>
      <sh3-link href="https://sh3pherd.dev" tone="muted"
        >anchor (href)</sh3-link
      >
      <sh3-link [disabled]="true">disabled</sh3-link>
    </div>
  </sh3-page-layout>`,
})
export default class LinkPage {}
