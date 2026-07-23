import { booleanAttribute, Component, input, signal } from "@angular/core";
import {
  FoldButtonComponent,
  FoldCardComponent,
  FoldElementTitleComponent,
  FoldPageSectionComponent,
} from "../src/public-api";

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
 *   <fold-number-input … />
 * </dev-playground>
 * ```
 *
 * The three panels lay out on a responsive grid (settings | preview | code →
 * preview on top with settings + code below → stacked). The component owns its
 * `fold-page-section title="Playground"` wrapper, so a page just drops in
 * `<dev-playground>` without repeating the section on every page.
 */
@Component({
  selector: "dev-playground",
  standalone: true,
  imports: [
    FoldButtonComponent,
    FoldElementTitleComponent,
    FoldCardComponent,
    FoldPageSectionComponent,
  ],
  templateUrl: "./playground.component.html",
  styleUrl: "./playground.component.css",
  host: { "[class.pg-stage]": "stage()" },
})
export class DevPlaygroundComponent {
  /** The generated code snippet shown (and copied) on the right. */
  readonly code = input("");
  /** Language label on the code block. */
  readonly lang = input("html");
  /** Render the preview on an app-background stage (inset, padded) instead of on
   *  the card surface — clearer hierarchy when the demo is itself a card. */
  readonly stage = input(false, { transform: booleanAttribute });

  protected readonly copied = signal(false);

  /** Mobile only: the code panel collapses to a glass overlay over the preview,
   *  toggled from a "Code" button on the preview header. */
  protected readonly codeOpen = signal(false);

  protected copy(): void {
    void navigator.clipboard.writeText(this.code()).then(() => {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 1500);
    });
  }

  protected toggleCode(): void {
    this.codeOpen.update((open) => !open);
  }
}
