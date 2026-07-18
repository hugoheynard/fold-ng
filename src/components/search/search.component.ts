import { Component, DestroyRef, inject, input, output } from "@angular/core";
import { Sh3InputComponent } from "../input/input.component";

/**
 * `<sh3-search>` — an {@link Sh3InputComponent} that **debounces its emit**: it
 * fires `searchChange` only once typing pauses for `delayMs`, so a fast typer
 * triggers one query instead of one per keystroke. The delay is adjustable; the
 * emitted term is trimmed and de-duplicated (no emit when the settled value is
 * unchanged). A thin wrapper over the text input — the search *behaviour*, not a
 * new control.
 *
 * @selector `sh3-search`
 *
 * @example
 * ```html
 * <sh3-search
 *   placeholder="Search name, email, job…"
 *   (searchChange)="store.setSearch($event)" />
 * ```
 */
@Component({
  selector: "sh3-search",
  standalone: true,
  imports: [Sh3InputComponent],
  template: `
    <sh3-input
      type="text"
      [placeholder]="placeholder()"
      [size]="size()"
      [variant]="variant()"
      (valueChange)="onInput($event)"
    />
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class Sh3SearchComponent {
  readonly placeholder = input("");
  readonly size = input<"sm" | "md" | "lg">("md");
  /** Visual variant, forwarded to the inner `sh3-input` (`panel` for side-panel
   *  forms; `default` elsewhere). */
  readonly variant = input<"default" | "panel">("default");
  /** Quiet period after the last keystroke before emitting, in ms. */
  readonly delayMs = input(300);
  /** Emits the trimmed term once typing pauses for `delayMs` (deduped). */
  readonly searchChange = output<string>();

  private timer: ReturnType<typeof setTimeout> | null = null;
  private lastEmitted = "";

  constructor() {
    // A pending timer that outlives the view would fire a stray emit.
    inject(DestroyRef).onDestroy(() => this.clear());
  }

  protected onInput(value: string): void {
    const term = value.trim();
    this.clear();
    this.timer = setTimeout(() => {
      if (term !== this.lastEmitted) {
        this.lastEmitted = term;
        this.searchChange.emit(term);
      }
    }, this.delayMs());
  }

  private clear(): void {
    if (this.timer !== null) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
}
