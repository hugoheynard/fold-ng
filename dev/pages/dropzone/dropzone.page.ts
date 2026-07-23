import { Component, signal } from "@angular/core";
import { KindBadgeComponent } from "../../kind-badge.component";
import {
  FoldFileDropzoneComponent,
  FoldPageLayoutComponent,
} from "../../../src/index";

/** `/dropzone` — the `fold-file-dropzone` gallery page. */
@Component({
  selector: "gal-dropzone-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    FoldPageLayoutComponent,
    FoldFileDropzoneComponent,
  ],
  template: `<fold-page-layout
    fluid
    title="file dropzone"
    description="fold-file-dropzone — a form-family affordance (a whole drag/drop + browse target emitting File[]). Drag files on, or click to browse."
  >
    <gal-kind-badge titleBadge kind="component" />
    <div class="gal-stack">
      <div class="gal-cell">
        <span class="gal-tag">default · drag or click · emits File[]</span>
        <div class="fld-inputs">
          <fold-file-dropzone
            accept=".pdf,.png,.jpg"
            [hint]="'PDF / PNG / JPG · max 5 Mo'"
            (filesPicked)="onDzPick($event)"
          />
        </div>
        @if (dzFiles().length) {
          <p class="doc-p">Picked: {{ dzFiles().join(", ") }}</p>
        }
      </div>
      <div class="gal-cell">
        <span class="gal-tag">busy · disabled</span>
        <div class="fld-inputs">
          <fold-file-dropzone [busy]="true" busyLabel="Téléversement…" />
          <fold-file-dropzone [disabled]="true" label="Cap atteint" />
        </div>
      </div>
    </div>
  </fold-page-layout>`,
})
export default class DropzonePage {
  protected readonly dzFiles = signal<readonly string[]>([]);

  protected onDzPick(files: File[]): void {
    this.dzFiles.set(files.map((f) => f.name));
  }
}
