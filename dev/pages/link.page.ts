import { Component } from "@angular/core";
import { KindBadgeComponent } from "../kind-badge.component";
import { FoldLinkComponent, FoldPageLayoutComponent } from "../../src/index";

/** `/link` — the `fold-link` gallery page. */
@Component({
  selector: "gal-link-page",
  standalone: true,
  imports: [KindBadgeComponent, FoldPageLayoutComponent, FoldLinkComponent],
  template: `<fold-page-layout title="link">
    <gal-kind-badge titleBadge kind="component" />
    <div class="gal-row">
      <fold-link icon="company" trailingIcon="chevron-right"
        >accent + icons</fold-link
      >
      <fold-link tone="muted">muted</fold-link>
      <fold-link href="https://sh3pherd.dev" tone="muted"
        >anchor (href)</fold-link
      >
      <fold-link [disabled]="true">disabled</fold-link>
    </div>
  </fold-page-layout>`,
})
export default class LinkPage {}
