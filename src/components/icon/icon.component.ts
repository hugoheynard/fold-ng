import { Component, computed, inject, input } from "@angular/core";
import { DomSanitizer, type SafeHtml } from "@angular/platform-browser";
import { IconRegistry } from "./icon-registry.service";
import type { Sh3IconName } from "./icon.registry";

/** Size presets map to a pixel length; a number is interpreted as pixels. */
export type Sh3IconSize = "xs" | "sm" | "md" | "lg" | "xl" | number;

const SIZE_PX: Record<Exclude<Sh3IconSize, number>, string> = {
  xs: "12px",
  sm: "16px",
  md: "20px",
  lg: "24px",
  xl: "32px",
};

/**
 * `sh3-icon` — the single surface for all SVG icons.
 *
 * Icons resolve through the {@link IconRegistry} (built-in set + any the
 * consumer registered), keyed by a typed {@link Sh3IconName}. The raw SVG is
 * sanitised once and rendered via `[innerHTML]`; colour + size come from CSS
 * (`currentColor` + a `--icon-size` custom property), so the SVG inherits
 * `color` from the host.
 *
 * @example
 * ```html
 * <sh3-icon name="search" />
 * <sh3-icon name="bin" size="lg" />
 * <sh3-icon name="heart" [size]="18" />
 * <sh3-icon name="edit" title="Edit track" />  <!-- a11y label -->
 * ```
 */
@Component({
  selector: "sh3-icon",
  standalone: true,
  template: `<span
    class="icon-root"
    role="img"
    [attr.aria-label]="title() || null"
    [attr.aria-hidden]="title() ? null : 'true'"
    [style.--icon-size]="sizeVar()"
    [innerHTML]="svg()"
  ></span>`,
  styles: [
    `
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 0;
        color: inherit;
      }
      .icon-root {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: var(--icon-size, 20px);
        height: var(--icon-size, 20px);
      }
      /* The injected <svg> gets block behaviour + fills the container. */
      .icon-root ::ng-deep svg {
        width: 100%;
        height: 100%;
        display: block;
      }
      /* Filled SVGs paint with the host colour unless they opt out via
         fill="none" (outlined icons). The :not() guard is what preserves
         outlined rendering — setting fill here unconditionally would turn
         outlined icons into solid blobs. */
      .icon-root ::ng-deep svg:not([fill="none"]) {
        fill: currentColor;
      }
      /* Outlined SVGs stroke with currentColor; normalise any child stroke. */
      .icon-root ::ng-deep svg [stroke]:not([stroke="none"]) {
        stroke: currentColor;
      }
    `,
  ],
})
export class IconComponent {
  /** Icon name — a built-in (autocompleted) or a consumer-registered string. */
  readonly name = input.required<Sh3IconName>();

  /** Size — token (`xs…xl`) or explicit pixel number. Defaults to `md`. */
  readonly size = input<Sh3IconSize>("md");

  /** Optional accessible label. Set → `aria-label`; unset → `aria-hidden`. */
  readonly title = input<string>();

  private readonly sanitizer = inject(DomSanitizer);
  private readonly registry = inject(IconRegistry);

  /** Sanitised SVG markup ready for `[innerHTML]`. Reactive on registration. */
  readonly svg = computed<SafeHtml>(() => {
    const name = this.name();
    const raw = this.registry.resolve(name) ?? "";
    if (!raw && name) {
      console.warn(`[sh3-icon] unknown icon: "${name}"`);
    }
    return this.sanitizer.bypassSecurityTrustHtml(raw);
  });

  /** Resolves the size input to a CSS length string for `--icon-size`. */
  readonly sizeVar = computed<string>(() => {
    const s = this.size();
    return typeof s === "number" ? `${s}px` : SIZE_PX[s];
  });
}
