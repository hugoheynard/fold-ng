import { Component, signal, ViewEncapsulation } from "@angular/core";
import { KindBadgeComponent } from "../../kind-badge.component";
import {
  FOLD_BUILTIN_ICONS,
  FoldIconComponent,
  FoldPageLayoutComponent,
} from "../../../src/index";

/** `/icons` — the `fold-icon` gallery page (sizes, colours, the full set). */
@Component({
  selector: "gal-icons-page",
  standalone: true,
  imports: [KindBadgeComponent, FoldPageLayoutComponent, FoldIconComponent],
  templateUrl: "./icons.page.html",
  styleUrl: "./icons.page.scss",
  encapsulation: ViewEncapsulation.None,
})
export default class IconsPage {
  protected readonly iconSizeSteps = ["xs", "sm", "md", "lg", "xl"] as const;
  protected readonly iconColorTokens = [
    "text",
    "text-secondary",
    "primary",
    "info",
    "warning",
    "alert",
    "success",
  ] as const;
  protected readonly allIconNames: readonly string[] =
    Object.keys(FOLD_BUILTIN_ICONS).sort();
  protected readonly copiedIcon = signal("");

  protected copyIconName(name: string): void {
    void navigator.clipboard.writeText(name).then(() => {
      this.copiedIcon.set(name);
      setTimeout(() => this.copiedIcon.set(""), 1200);
    });
  }
}
