import { Component, signal } from "@angular/core";
import {
  FoldPanelHeaderComponent,
  FoldViewNavComponent,
  type FoldViewNavItem,
} from "../../src/public-api";

/**
 * A demo panel: an `fold-view-nav` inside a side panel, opened imperatively via
 * `FoldPanelHostService.open()`. A component panel owns its own chrome — the
 * self-closing `fold-panel-header` + a scrollable body. Dev-only.
 */
@Component({
  selector: "app-tab-panel",
  standalone: true,
  imports: [FoldPanelHeaderComponent, FoldViewNavComponent],
  templateUrl: "./tab-panel.component.html",
  styleUrl: "./tab-panel.component.css",
})
export class TabPanelComponent {
  protected readonly tabs: FoldViewNavItem[] = [
    { key: "overview", label: "Overview" },
    { key: "members", label: "Members", badge: 3 },
    { key: "activity", label: "Activity" },
  ];
  protected readonly active = signal("overview");
}
