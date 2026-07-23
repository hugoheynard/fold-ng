import { Component, computed, effect, inject, input } from "@angular/core";
import { DomSanitizer, type SafeHtml } from "@angular/platform-browser";
import { FoldIconRegistry } from "./icon-registry.service";
import type { FoldIconName } from "./builtin-icons";

/** Size presets map to a pixel length; a number is interpreted as pixels. */
export type FoldIconSize = "xs" | "sm" | "md" | "lg" | "xl" | number;

const SIZE_PX: Record<Exclude<FoldIconSize, number>, string> = {
  xs: "12px",
  sm: "16px",
  md: "20px",
  lg: "24px",
  xl: "32px",
};

/**
 * `fold-icon` — the single surface for all SVG icons.
 *
 * Icons resolve through the {@link FoldIconRegistry} (built-in set + any the
 * consumer registered), keyed by a typed {@link FoldIconName}. The raw SVG is
 * sanitised once and rendered via `[innerHTML]`; colour + size come from CSS
 * (`currentColor` + a `--icon-size` custom property), so the SVG inherits
 * `color` from the host.
 *
 * @example
 * ```html
 * <fold-icon name="search" />
 * <fold-icon name="bin" size="lg" />
 * <fold-icon name="heart" [size]="18" />
 * <fold-icon name="edit" title="Edit track" />  <!-- a11y label -->
 * ```
 */
@Component({
  selector: "fold-icon",
  standalone: true,
  templateUrl: "./icon.component.html",
  styleUrl: "./icon.component.scss",
})
export class FoldIconComponent {
  /** Icon name — a built-in (autocompleted) or a consumer-registered string. */
  readonly name = input.required<FoldIconName>();

  /** Size — token (`xs…xl`) or explicit pixel number. Defaults to `md`. */
  readonly size = input<FoldIconSize>("md");

  /** Optional accessible label. Set → `aria-label`; unset → `aria-hidden`. */
  readonly title = input<string>();

  private readonly sanitizer = inject(DomSanitizer);
  private readonly registry = inject(FoldIconRegistry);

  /** Sanitised SVG markup ready for `[innerHTML]`. Reactive on registration. */
  readonly svg = computed<SafeHtml>(() =>
    this.sanitizer.bypassSecurityTrustHtml(
      this.registry.resolve(this.name()) ?? "",
    ),
  );

  constructor() {
    // Dev aid: warn when a name fails to resolve. Lives in an effect — the
    // `svg` computed must stay pure (no side effects) — and re-checks
    // reactively, so the warning clears the instant the icon is registered.
    effect(() => {
      const name = this.name();
      if (!this.registry.has(name)) {
        console.warn(`[fold-icon] unknown icon: "${name}"`);
      }
    });
  }

  /** Resolves the size input to a CSS length string for `--icon-size`. */
  readonly sizeVar = computed<string>(() => {
    const s = this.size();
    return typeof s === "number" ? `${s}px` : SIZE_PX[s];
  });
}
