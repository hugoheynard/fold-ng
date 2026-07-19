import { Component, signal } from "@angular/core";
import {
  SH3_BUILTIN_ICONS,
  Sh3IconComponent,
  Sh3PageLayoutComponent,
} from "../../src/index";

/** `/icons` — the `sh3-icon` gallery page (sizes, colours, the full set). */
@Component({
  selector: "gal-icons-page",
  standalone: true,
  imports: [Sh3PageLayoutComponent, Sh3IconComponent],
  templateUrl: "./icons.page.html",
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
    Object.keys(SH3_BUILTIN_ICONS).sort();
  protected readonly copiedIcon = signal("");

  protected copyIconName(name: string): void {
    void navigator.clipboard.writeText(name).then(() => {
      this.copiedIcon.set(name);
      setTimeout(() => this.copiedIcon.set(""), 1200);
    });
  }
}
