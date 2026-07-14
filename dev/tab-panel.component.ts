import { Component, signal } from "@angular/core";
import {
  Sh3PanelHeaderComponent,
  Sh3TabNavComponent,
  type Sh3TabNavItem,
} from "../src/index";

/**
 * A demo panel: an `sh3-tab-nav` inside a side panel, opened imperatively via
 * `Sh3PanelHostService.open()`. A component panel owns its own chrome — the
 * self-closing `sh3-panel-header` + a scrollable body. Dev-only.
 */
@Component({
  selector: "app-tab-panel",
  standalone: true,
  imports: [Sh3PanelHeaderComponent, Sh3TabNavComponent],
  templateUrl: "./tab-panel.component.html",
  styleUrl: "./tab-panel.component.css",
})
export class TabPanelComponent {
  protected readonly tabs: Sh3TabNavItem[] = [
    { key: "overview", label: "Overview" },
    { key: "members", label: "Members", badge: 3 },
    { key: "activity", label: "Activity" },
  ];
  protected readonly active = signal("overview");
}
