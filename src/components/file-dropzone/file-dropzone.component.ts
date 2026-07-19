import type { ElementRef } from "@angular/core";
import { Component, input, output, signal, viewChild } from "@angular/core";
import { Sh3FieldIdDirective } from "../../a11y/field-id.directive";
import { Sh3IconComponent } from "../icon/icon.component";

/**
 * `<sh3-file-dropzone>` — a file-picker dropzone: drag-over visuals, keyboard
 * activation, the hidden `<input type="file">` plumbing, and it emits the picked
 * `File[]`. Presentational — it never talks to the network; the consumer decides
 * what to do with the files (upload now, buffer locally, …).
 *
 * Belongs to the **form** family, not the text-input family: it's a whole
 * drop-target affordance, not a labelled box, so it doesn't compose
 * `sh3-input-base`.
 *
 * @selector `sh3-file-dropzone`
 *
 * @example
 * ```html
 * <sh3-file-dropzone
 *   accept=".pdf,.png"
 *   [hint]="'Max 5 Mo'"
 *   (filesPicked)="onFiles($event)"
 * />
 * ```
 */
@Component({
  selector: "sh3-file-dropzone",
  standalone: true,
  imports: [Sh3FieldIdDirective, Sh3IconComponent],
  templateUrl: "./file-dropzone.component.html",
  styleUrl: "./file-dropzone.component.scss",
})
export class Sh3FileDropzoneComponent {
  /** Comma-separated MIME or extension filter passed to the input. */
  readonly accept = input<string>("");
  /** Multi-file pick. Defaults to true — the consumer can cap on its end. */
  readonly multiple = input<boolean>(true);
  /** Primary line of copy. */
  readonly label = input<string>("Glissez un fichier ou parcourez");
  /** Smaller helper line under the label (size limit, count remaining, …). */
  readonly hint = input<string | null>(null);
  /** Pending state — disables interaction and swaps the copy for a loading message. */
  readonly busy = input<boolean>(false);
  /** Loading message displayed while `busy` is true. */
  readonly busyLabel = input<string>("Téléversement en cours…");
  /** Fully disable the dropzone (e.g. cap reached). */
  readonly disabled = input<boolean>(false);

  /** Emits the picked files (from browse or drop). */
  readonly filesPicked = output<File[]>();

  private readonly fileInput =
    viewChild.required<ElementRef<HTMLInputElement>>("fileInput");

  /** Whether a drag is currently hovering the zone (drives the `.over` state). */
  readonly isDragOver = signal(false);

  openFilePicker(): void {
    if (this.disabled() || this.busy()) {
      return;
    }
    this.fileInput().nativeElement.click();
  }

  onFilesSelected(target: EventTarget | null): void {
    if (!(target instanceof HTMLInputElement)) {
      return;
    }
    if (!target.files || target.files.length === 0) {
      return;
    }
    this.filesPicked.emit(Array.from(target.files));
    // Reset so re-picking the same file fires `change` again.
    target.value = "";
  }

  onDragOver(event: DragEvent): void {
    if (this.disabled() || this.busy()) {
      return;
    }
    event.preventDefault();
    this.isDragOver.set(true);
  }

  onDragLeave(): void {
    this.isDragOver.set(false);
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver.set(false);
    if (this.disabled() || this.busy()) {
      return;
    }
    const files = event.dataTransfer?.files;
    if (!files || files.length === 0) {
      return;
    }
    this.filesPicked.emit(Array.from(files));
  }
}
