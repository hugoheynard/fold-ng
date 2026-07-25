/**
 * Small WCAG colour-contrast helpers — used to pick a legible ink for text on a
 * categorical fill (avatar initials), and lockable by a contrast test.
 *
 * These operate on plain hex strings (`#rgb` / `#rrggbb`); a categorical palette
 * is qualitative *data* (hex is allowed there — rule 5.3), so contrast can't be
 * a token concern and lives here.
 */

/** Parse `#rgb` / `#rrggbb` to `[r, g, b]` (0–255), or `null` if not a hex. */
function parseHex(hex: string): [number, number, number] | null {
  const h = hex.trim().replace(/^#/, "");
  const full =
    h.length === 3
      ? h
          .split("")
          .map((c) => c + c)
          .join("")
      : h;
  if (!/^[0-9a-fA-F]{6}$/.test(full)) {
    return null;
  }
  return [
    parseInt(full.slice(0, 2), 16),
    parseInt(full.slice(2, 4), 16),
    parseInt(full.slice(4, 6), 16),
  ];
}

/** WCAG relative luminance of a hex colour, or `null` if it isn't a hex. */
export function foldLuminance(hex: string): number | null {
  const rgb = parseHex(hex);
  if (!rgb) {
    return null;
  }
  const lin = (c: number): number => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * lin(rgb[0]) + 0.7152 * lin(rgb[1]) + 0.0722 * lin(rgb[2]);
}

/** WCAG contrast ratio between two hex colours (1–21), or `null` if either
 *  isn't a hex. */
export function foldContrast(a: string, b: string): number | null {
  const la = foldLuminance(a);
  const lb = foldLuminance(b);
  if (la === null || lb === null) {
    return null;
  }
  const [hi, lo] = la >= lb ? [la, lb] : [lb, la];
  return (hi + 0.05) / (lo + 0.05);
}

/**
 * The **more legible** of two inks for text drawn on `fill` — whichever has the
 * higher WCAG contrast. Picking the max (rather than thresholding luminance)
 * guarantees the best of the pair for *any* fill: at the black/white crossover
 * both inks already clear ~4.5:1, so every fill lands at or above it. A non-hex
 * `fill` falls back to `dark`.
 */
export function foldReadableInk(
  fill: string,
  dark: string,
  light: string,
): string {
  const withDark = foldContrast(fill, dark);
  const withLight = foldContrast(fill, light);
  if (withDark === null || withLight === null) {
    return dark;
  }
  return withDark >= withLight ? dark : light;
}
