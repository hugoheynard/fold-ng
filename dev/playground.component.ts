import { Component, input, signal } from "@angular/core";
import { Sh3IconComponent } from "../src/index";

/**
 * `<dev-playground>` — a gallery dev tool: the param / preview / code triptych.
 *
 * Project the param controls into the `[params]` slot, the live component as the
 * default slot (the preview), and pass the generated snippet as `code`. The
 * component owns the code block chrome + copy button.
 *
 * ```html
 * <dev-playground [code]="myCode()">
 *   <div params>…control widgets…</div>
 *   <sh3-number-input … />
 * </dev-playground>
 * ```
 */
@Component({
  selector: "dev-playground",
  standalone: true,
  imports: [Sh3IconComponent],
  templateUrl: "./playground.component.html",
  styleUrl: "./playground.component.css",
})
export class DevPlaygroundComponent {
  /** The generated code snippet shown (and copied) on the right. */
  readonly code = input("");
  /** Language label on the code block. */
  readonly lang = input("html");

  protected readonly copied = signal(false);

  protected copy(): void {
    void navigator.clipboard.writeText(this.code()).then(() => {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 1500);
    });
  }
}
