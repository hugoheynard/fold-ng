/** The button's role — one flat scale folding emphasis and intent. */
export type FoldButtonVariant =
  | "primary"
  | "recommended"
  | "critical"
  | "ghost"
  | "solid";

/** Size preset — controls font-size, padding, and radius. */
export type FoldButtonSize = "sm" | "md" | "lg";

/** Corner shape — `rounded` (the size's radius) or `pill` (fully rounded). */
export type FoldButtonShape = "rounded" | "pill";
