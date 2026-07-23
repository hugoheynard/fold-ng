import { Component, computed, effect, inject, input } from "@angular/core";
import { FoldIconRegistry } from "./icon-registry.service";
import { FoldIconSprite } from "./icon-sprite.service";
import { foldIconSymbolId } from "./icon-sprite";
import type { FoldIconName } from "./builtin-icons";

/** Size presets map to an icon-size token; a number is interpreted as pixels. */
export type FoldIconSize = "xs" | "sm" | "md" | "lg" | "xl" | number;

/** Preset → `--fold-icon-size-*` token, with a px fallback so an icon still
 *  renders if a consumer loads the component without the token layer. */
const SIZE_VAR: Record<Exclude<FoldIconSize, number>, string> = {
  xs: "var(--fold-icon-size-xs, 12px)",
  sm: "var(--fold-icon-size-sm, 16px)",
  md: "var(--fold-icon-size-md, 20px)",
  lg: "var(--fold-icon-size-lg, 24px)",
  xl: "var(--fold-icon-size-xl, 32px)",
};

/**
 * `fold-icon` — the single surface for all SVG icons.
 *
 * Icons resolve through the {@link FoldIconRegistry} (built-in set + any the
 * consumer registered), keyed by a typed {@link FoldIconName}. Each unique icon
 * is added once to a shared hidden sprite (see {@link FoldIconSprite}); the
 * component itself renders a lightweight `<svg><use href="#…"/></svg>` that
 * references it, so the DOM holds one copy of an icon's paths however many times
 * it renders. Colour + size come from CSS (`currentColor` + a `--icon-size`
 * custom property) and inherit across the `<use>` into the symbol, so the SVG
 * takes its `color` from the host.
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

  private readonly registry = inject(FoldIconRegistry);
  private readonly sprite = inject(FoldIconSprite);

  /** The `#symbol` reference for `<use>`, or null when the name is unknown
   *  (renders nothing). Pure — sprite population lives in the effect below. */
  readonly href = computed<string | null>(() =>
    this.registry.has(this.name()) ? `#${foldIconSymbolId(this.name())}` : null,
  );

  /** Resolves the size input to a CSS length string for `--icon-size`. */
  readonly sizeVar = computed<string>(() => {
    const s = this.size();
    return typeof s === "number" ? `${s}px` : SIZE_VAR[s];
  });

  constructor() {
    // Mount the shown icon's symbol in the shared sprite (a DOM side effect, so
    // it lives here and not in `href`), and warn on an unknown name. Reactive:
    // registering an icon later both mounts its symbol and resolves the `<use>`.
    effect(() => {
      const name = this.name();
      const markup = this.registry.resolve(name);
      if (markup) {
        this.sprite.ensure(name, markup);
      } else {
        console.warn(`[fold-icon] unknown icon: "${name}"`);
      }
    });
  }
}
