import {
  InjectionToken,
  type Provider,
  Service,
  inject,
  signal,
} from "@angular/core";
import {
  foldHashSeed,
  foldResolvePalette,
  type FoldPaletteInput,
} from "./palettes";

/** Bootstrap default for {@link FoldPaletteRegistry} — set via {@link provideFoldPalette}. */
export const FOLD_PALETTE_DEFAULT = new InjectionToken<FoldPaletteInput>(
  "fold.palette.default",
);

/**
 * Configure the app-wide auto-colour palette at bootstrap (idiomatic, like
 * `provideRouter`). Accepts a built-in name OR a consumer's own colour list.
 *
 * ```ts
 * // app.config.ts
 * providers: [provideFoldPalette("pastel")]        // a built-in
 * providers: [provideFoldPalette(MY_BRAND_COLORS)] // your own list
 * ```
 */
export function provideFoldPalette(palette: FoldPaletteInput): Provider {
  return { provide: FOLD_PALETTE_DEFAULT, useValue: palette };
}

/**
 * The single source of truth for auto-colouring. Root singleton: every consumer
 * reads the SAME active palette, so a given seed (name/id) maps to the same
 * colour everywhere — that is the whole point (recognition). Switch the palette
 * app-wide with {@link use}; each `colorFor` reader recolours reactively.
 */
@Service()
export class FoldPaletteRegistry {
  private readonly _current = signal<readonly string[]>(
    foldResolvePalette(
      inject(FOLD_PALETTE_DEFAULT, { optional: true }) ?? "vivid",
    ),
  );

  /** The active palette. Reading this in a reactive context tracks switches. */
  readonly current = this._current.asReadonly();

  /**
   * Switch the whole app's palette — a built-in name or a custom colour list.
   * Every `colorFor` reader updates in the same frame.
   */
  use(palette: FoldPaletteInput): void {
    this._current.set(foldResolvePalette(palette));
  }

  /** Deterministic colour for a seed, from the active palette. Reactive. */
  colorFor(seed: string): string {
    const palette = this._current();
    return palette[Math.abs(foldHashSeed(seed)) % palette.length];
  }
}
