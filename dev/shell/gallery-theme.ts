/** The themes the token layer ships — see `src/tokens/semantic.css`. */
export type GalleryTheme = "umbra" | "lumen" | "navi" | "bubbly";

/** A shell region the gallery can raise into a floating card (via `sh3Elevated`).
 *  Rails only here — they're full-height and inset cleanly; a fixed-height header
 *  row would fight a vertical margin. */
export type ShellRegion = "railPrimary" | "railSecondary";

/** Every theme, in switcher order. `umbra` is the base (`:root`, no attribute). */
export const GALLERY_THEMES: readonly GalleryTheme[] = [
  "umbra",
  "lumen",
  "navi",
  "bubbly",
];

/**
 * Everything about the gallery chrome that varies **by theme**, in one place.
 * The shell binds each field straight from the resolved config — so the template
 * reads a flat value and carries no `theme() === 'x' ? … : …` logic. Add a
 * theme-varying knob here and the template just reads the new field; the switch
 * is the single `Record` lookup below, not a ternary sprinkled per binding.
 */
export interface GalleryThemeConfig {
  /** `[data-theme]` attribute value — `null` for umbra (the `:root` base). */
  readonly dataTheme: string | null;
  /** Which shell regions float (via `sh3Elevated`) — bubbly lifts its chrome
   *  into cards, the rest stay flat. Per-region, not a global switch. */
  readonly elevated: readonly ShellRegion[];
  /** Mobile-nav system — `none` hands off to the tile launcher, else the drawer. */
  readonly mobileNav: "drawer" | "none";
  /** Whether to mount the tile launcher — i.e. `mobileNav === "none"`, named so
   *  the template reads a boolean rather than re-deriving the comparison. */
  readonly usesLauncher: boolean;
  /** The launcher tiles' look — navi goes `filled` (navy tiles, white glyphs,
   *  the logo spirit); umbra keeps the subtler `surface`, so both show live. */
  readonly tileVariant: "surface" | "filled";
}

/** The per-theme chrome config — the one place a theme's gallery knobs are set. */
export const GALLERY_THEME_CONFIG: Record<GalleryTheme, GalleryThemeConfig> = {
  umbra: {
    dataTheme: null,
    elevated: [],
    mobileNav: "none",
    usesLauncher: true,
    tileVariant: "surface",
  },
  lumen: {
    dataTheme: "lumen",
    elevated: [],
    mobileNav: "drawer",
    usesLauncher: false,
    tileVariant: "surface",
  },
  navi: {
    dataTheme: "navi",
    elevated: [],
    mobileNav: "none",
    usesLauncher: true,
    tileVariant: "filled",
  },
  bubbly: {
    dataTheme: "bubbly",
    // Rails float (full-height, they inset cleanly); the fixed-height header
    // row stays flat — a vertical margin there would fight its row height.
    elevated: ["railPrimary", "railSecondary"],
    mobileNav: "drawer",
    usesLauncher: false,
    tileVariant: "surface",
  },
};
