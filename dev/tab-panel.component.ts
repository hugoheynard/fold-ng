import { Component, signal } from "@angular/core";
import {
  FoldPanelHeaderComponent,
  FoldTabNavComponent,
  type FoldTabNavItem,
} from "../src/index";

/**
 * A demo panel: an `fold-tab-nav` inside a side panel, opened imperatively via
 * `FoldPanelHostService.open()`. A component panel owns its own chrome — the
 * self-closing `fold-panel-header` + a scrollable body. Dev-only.
 */
@Component({
  selector: "app-tab-panel",
  standalone: true,
  imports: [FoldPanelHeaderComponent, FoldTabNavComponent],
  templateUrl: "./tab-panel.component.html",
  styleUrl: "./tab-panel.component.css",
})
export class TabPanelComponent {
  protected readonly tabs: FoldTabNavItem[] = [
    { key: "overview", label: "Overview" },
    { key: "members", label: "Members", badge: 3 },
    { key: "activity", label: "Activity" },
  ];
  protected readonly active = signal("overview");
}
