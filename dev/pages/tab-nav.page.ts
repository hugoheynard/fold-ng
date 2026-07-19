import { Component, inject, signal } from "@angular/core";
import {
  Sh3IconComponent,
  Sh3PageLayoutComponent,
  Sh3PanelHostService,
  Sh3TabNavComponent,
  type Sh3TabNavItem,
} from "../../src/index";
import { TabPanelComponent } from "../tab-panel.component";

/** `/tab-nav` — the `sh3-tab-nav` gallery page. */
@Component({
  selector: "gal-tab-nav-page",
  standalone: true,
  host: { class: "gal-page" },
  imports: [Sh3PageLayoutComponent, Sh3TabNavComponent, Sh3IconComponent],
  template: `<sh3-page-layout fluid title="tab-nav">
    <div class="gal-stack">
      <div class="gal-cell">
        <span class="gal-tag">underline · compact (default)</span>
        <sh3-tab-nav
          [tabs]="tabItems"
          [activeKey]="tabUnderline()"
          (tabChange)="tabUnderline.set($event)"
        />
      </div>
      <div class="gal-cell">
        <span class="gal-tag">fill (pill)</span>
        <sh3-tab-nav
          [tabs]="tabItems"
          [activeKey]="tabFill()"
          activeStyle="fill"
          (tabChange)="tabFill.set($event)"
        />
      </div>
      <div class="gal-cell">
        <span class="gal-tag">comfortable · transparent</span>
        <sh3-tab-nav
          [tabs]="tabItems"
          [activeKey]="tabComfortable()"
          size="comfortable"
          (tabChange)="tabComfortable.set($event)"
        />
      </div>
      <div class="gal-cell">
        <span class="gal-tag">vertical (sidebar) · fill</span>
        <div class="gal-narrow">
          <sh3-tab-nav
            [tabs]="tabItems"
            [activeKey]="tabVertical()"
            direction="vertical"
            activeStyle="fill"
            (tabChange)="tabVertical.set($event)"
          />
        </div>
      </div>
      <div class="gal-cell">
        <span class="gal-tag">in a side panel (sh3-panel)</span>
        <button type="button" class="gal-theme" (click)="openTabPanel()">
          <sh3-icon name="contracts" size="sm" />
          Open panel with tabs
        </button>
      </div>
    </div>
  </sh3-page-layout>`,
})
export default class TabNavPage {
  private readonly panelHost = inject(Sh3PanelHostService);

  protected readonly tabItems: Sh3TabNavItem[] = [
    { key: "overview", label: "Overview" },
    { key: "members", label: "Members", badge: 3 },
    { key: "settings", label: "Settings" },
  ];
  protected readonly tabUnderline = signal("overview");
  protected readonly tabFill = signal("overview");
  protected readonly tabComfortable = signal("members");
  protected readonly tabVertical = signal("overview");

  protected openTabPanel(): void {
    this.panelHost.open(TabPanelComponent, { side: "right" });
  }
}
