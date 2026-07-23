/**
 * Fill level of a `foldButton` — one of two orthogonal axes (the other is
 * {@link FoldButtonIntent}). Emphasis says *how loud*; intent says *what it
 * means*. Splitting them (Radix-style) makes every combination expressible —
 * e.g. `solid` + `danger` = a filled destructive button.
 * - `solid` — filled with the intent colour (the one high-emphasis CTA)
 * - `soft` — tinted surface (the default; a calm, grouped action)
 * - `outline` — transparent with a hairline border (secondary / cancel)
 */
export type FoldButtonEmphasis = "solid" | "soft" | "outline";

/** Semantic intent of a `foldButton` — *what it means* (the colour role). */
export type FoldButtonIntent = "primary" | "neutral" | "warning" | "danger";

/** Size preset — controls font-size, padding, and radius. */
export type FoldButtonSize = "sm" | "md" | "lg";

/** Corner shape — `rounded` (the size's radius) or `pill` (fully rounded). */
export type FoldButtonShape = "rounded" | "pill";
