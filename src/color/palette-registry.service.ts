import {
  InjectionToken,
  type Provider,
  Service,
  inject,
  signal,
} from "@angular/core";
import {
  sh3HashSeed,
  sh3ResolvePalette,
  type Sh3PaletteInput,
} from "./palettes";

/** Bootstrap default for {@link Sh3PaletteRegistry} — set via {@link provideSh3Palette}. */
export const SH3_PALETTE_DEFAULT = new InjectionToken<Sh3PaletteInput>(
  "sh3.palette.default",
);

/**
 * Configure the app-wide auto-colour palette at bootstrap (idiomatic, like
 * `provideRouter`). Accepts a built-in name OR a consumer's own colour list.
 *
 * ```ts
 * // app.config.ts
 * providers: [provideSh3Palette("pastel")]        // a built-in
 * providers: [provideSh3Palette(MY_BRAND_COLORS)] // your own list
 * ```
 */
export function provideSh3Palette(palette: Sh3PaletteInput): Provider {
  return { provide: SH3_PALETTE_DEFAULT, useValue: palette };
}

/**
 * The single source of truth for auto-colouring. Root singleton: every consumer
 * reads the SAME active palette, so a given seed (name/id) maps to the same
 * colour everywhere — that is the whole point (recognition). Switch the palette
 * app-wide with {@link use}; each `colorFor` reader recolours reactively.
 */
@Service()
export class Sh3PaletteRegistry {
  private readonly _current = signal<readonly string[]>(
    sh3ResolvePalette(
      inject(SH3_PALETTE_DEFAULT, { optional: true }) ?? "vivid",
    ),
  );

  /** The active palette. Reading this in a reactive context tracks switches. */
  readonly current = this._current.asReadonly();

  /**
   * Switch the whole app's palette — a built-in name or a custom colour list.
   * Every `colorFor` reader updates in the same frame.
   */
  use(palette: Sh3PaletteInput): void {
    this._current.set(sh3ResolvePalette(palette));
  }

  /** Deterministic colour for a seed, from the active palette. Reactive. */
  colorFor(seed: string): string {
    const palette = this._current();
    return palette[Math.abs(sh3HashSeed(seed)) % palette.length];
  }
}
