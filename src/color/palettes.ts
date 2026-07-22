/**
 * Categorical auto-colour palettes + the seed→index hash.
 *
 * These are **data**, not semantic tokens: qualitative hues to tell entities
 * apart (avatars, org nodes…), theme-invariant, never a role. They live in TS
 * because a hash consumes them — they don't belong in the token CSS.
 *
 * The active palette is chosen once, app-wide, via {@link FoldPaletteRegistry} so a
 * given seed maps to the SAME colour everywhere (recognition). Consumers never
 * touch these arrays directly — they call `registry.colorFor(seed)`.
 */

/**
 * The seed→hash used to pick a palette index. Kept byte-identical to the app's
 * historical avatar/org-member hash so migrating changes no existing colour.
 */
export function foldHashSeed(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

/** 10 vivid hues — the default. */
const VIVID = [
  "#63b3ed",
  "#68d391",
  "#f6ad55",
  "#fc8181",
  "#b794f4",
  "#76e4f7",
  "#fbb6ce",
  "#f6e05e",
  "#4fd1c5",
  "#a3bffa",
] as const;

/** 10 more, appended after VIVID to form the 20-colour `extended` palette. */
const VIVID_EXTRA = [
  "#f687b3",
  "#9ae6b4",
  "#fbd38d",
  "#feb2b2",
  "#d6bcfa",
  "#81e6d9",
  "#e9d8fd",
  "#fefcbf",
  "#bee3f8",
  "#c6f6d5",
] as const;

/** 10 soft, low-saturation hues (same hue order as VIVID). */
const PASTEL = [
  "#a8d8ea",
  "#b5ead7",
  "#ffdac1",
  "#ffb7b2",
  "#c7b6e8",
  "#b2ebf2",
  "#ffc8dd",
  "#fdf6a8",
  "#a0e7e5",
  "#c5cae9",
] as const;

/**
 * The curated named palettes. Add an entry → it becomes a usable, typed
 * {@link FoldAutoPaletteName} everywhere. `extended` deliberately starts with the
 * full `vivid` set so switching between them never recolours the first 10.
 */
export const FOLD_AUTO_PALETTES = {
  vivid: VIVID,
  extended: [...VIVID, ...VIVID_EXTRA],
  pastel: PASTEL,
} as const satisfies Record<string, readonly string[]>;

/** A built-in palette name. */
export type FoldAutoPaletteName = keyof typeof FOLD_AUTO_PALETTES;

/** A palette to apply: a built-in name, or a consumer's own colour list. */
export type FoldPaletteInput = FoldAutoPaletteName | readonly string[];

/** Resolve a name or a raw list to a colour array (empty lists fall back to vivid). */
export function foldResolvePalette(input: FoldPaletteInput): readonly string[] {
  const palette = typeof input === "string" ? FOLD_AUTO_PALETTES[input] : input;
  return palette.length > 0 ? palette : FOLD_AUTO_PALETTES.vivid;
}
