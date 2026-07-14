import { Component, input } from "@angular/core";

/** One entry in the gallery's table of contents. */
export interface TocItem {
  /** The target section's `id` (anchor). */
  readonly id: string;
  /** The label shown in the nav. */
  readonly label: string;
}

/**
 * The gallery's permanent left panel: a table of contents. Presentational —
 * the gallery owns the section list and the scroll-spy `activeId`; this just
 * renders the nav and smooth-scrolls to a section on click. Dev-only.
 */
@Component({
  selector: "app-toc-panel",
  standalone: true,
  templateUrl: "./toc-panel.component.html",
  styleUrl: "./toc-panel.component.css",
})
export class TocPanelComponent {
  readonly items = input.required<readonly TocItem[]>();
  readonly activeId = input<string>();

  protected go(id: string): void {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
