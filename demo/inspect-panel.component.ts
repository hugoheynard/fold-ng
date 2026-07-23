import {
  Component,
  afterNextRender,
  computed,
  input,
  signal,
} from "@angular/core";
import { FoldPanelHeaderComponent } from "../src/public-api";
import type { InspectTarget } from "./inspect";

/** A token name paired with the value declared in the token layer (the base). */
interface TokenRow {
  readonly name: string;
  readonly base: string;
}

/**
 * The inspector panel: for a double-clicked component it lists the tokens its
 * styles reference and the `fold-*` children it composes. Editing a token writes
 * it as an **inline style on that element only** — so the override is scoped to
 * this instance and its children, never the rest of the page. Dev-only.
 */
@Component({
  selector: "app-inspect-panel",
  standalone: true,
  imports: [FoldPanelHeaderComponent],
  templateUrl: "./inspect-panel.component.html",
  styleUrl: "./inspect-panel.component.css",
})
export class InspectPanelComponent {
  readonly data = input.required<InspectTarget>();
  protected readonly rows = signal<TokenRow[]>([]);
  /** Name → per-element override value, for the ones the user has edited. */
  protected readonly overrides = signal<Record<string, string>>({});
  protected readonly dirtyCount = computed(
    () => Object.keys(this.overrides()).length,
  );

  constructor() {
    afterNextRender(() => {
      const styles = getComputedStyle(document.documentElement);
      this.rows.set(
        this.data().info.tokens.map((name) => ({
          name,
          base: styles.getPropertyValue(name).trim(),
        })),
      );
    });
  }

  /** Current value for a row — the element override if edited, else the base. */
  protected valueOf(row: TokenRow): string {
    return this.overrides()[row.name] ?? row.base;
  }

  protected set(name: string, value: string): void {
    this.data().element.style.setProperty(name, value);
    this.overrides.update((all) => ({ ...all, [name]: value }));
  }

  protected resetOne(name: string): void {
    this.data().element.style.removeProperty(name);
    this.overrides.update((all) =>
      Object.fromEntries(Object.entries(all).filter(([key]) => key !== name)),
    );
  }

  protected resetAll(): void {
    for (const name of Object.keys(this.overrides())) {
      this.data().element.style.removeProperty(name);
    }
    this.overrides.set({});
  }

  /** Colour tokens (`--fold-color-*` / `--fold-ref-*`) get a swatch preview. */
  protected isColorToken(name: string): boolean {
    return name.startsWith("--fold-color-") || name.startsWith("--fold-ref-");
  }
}
