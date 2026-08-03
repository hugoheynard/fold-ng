import { Injectable, signal } from "@angular/core";

/**
 * Shared open-state for the gallery's dev tools, so a control anywhere (the
 * primary-rail "Dev tools" button, the `/icons` hero CTA) can toggle the same
 * shell-level overlay. Root-provided — the shell renders the overlay from it.
 */
@Injectable({ providedIn: "root" })
export class GalleryDevtools {
  /** The `fold-icon-devtool` overlay visibility. */
  readonly iconTool = signal(false);

  openIconTool(): void {
    this.iconTool.set(true);
  }
}
