import { Component, afterNextRender, input, signal } from "@angular/core";
import { Sh3PanelHeaderComponent } from "../src/index";
import type { ComponentInfo } from "./inspect";

/** A token name paired with its currently-resolved value. */
interface TokenRow {
  readonly name: string;
  readonly value: string;
}

/**
 * The inspector panel: for a double-clicked component it lists the design
 * tokens it references (with their live values) and the `sh3-*` children it
 * composes. Data-carrying panel (`open({ data })`). Dev-only.
 */
@Component({
  selector: "app-inspect-panel",
  standalone: true,
  imports: [Sh3PanelHeaderComponent],
  templateUrl: "./inspect-panel.component.html",
  styleUrl: "./inspect-panel.component.css",
})
export class InspectPanelComponent {
  readonly data = input.required<ComponentInfo>();
  protected readonly rows = signal<TokenRow[]>([]);

  constructor() {
    afterNextRender(() => {
      const styles = getComputedStyle(document.documentElement);
      this.rows.set(
        this.data().tokens.map((name) => ({
          name,
          value: styles.getPropertyValue(name).trim(),
        })),
      );
    });
  }

  /** Colour tokens (`--sh3-color-*` / `--sh3-ref-*`) get a swatch preview. */
  protected isColorToken(name: string): boolean {
    return name.startsWith("--sh3-color-") || name.startsWith("--sh3-ref-");
  }
}
