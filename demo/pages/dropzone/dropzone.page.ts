import { Component, signal } from "@angular/core";
import { KindBadgeComponent } from "../../kind-badge.component";
import {
  FoldFileDropzoneComponent,
  FoldPageLayoutComponent,
} from "../../../src/public-api";

/** `/dropzone` — the `fold-file-dropzone` gallery page. */
@Component({
  selector: "gal-dropzone-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    FoldPageLayoutComponent,
    FoldFileDropzoneComponent,
  ],
  templateUrl: "./dropzone.page.html",
})
export default class DropzonePage {
  protected readonly dzFiles = signal<readonly string[]>([]);

  protected onDzPick(files: File[]): void {
    this.dzFiles.set(files.map((f) => f.name));
  }
}
