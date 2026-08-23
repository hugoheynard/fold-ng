/**
 * The design tokens, as a typed source-of-truth.
 *
 * These lists are the CONTRACT. The token contract test asserts that the CSS
 * declares exactly these tokens — for colours, that the `:root` (dark) and
 * `[data-theme="lumen"]` blocks each declare exactly the colour set (parity);
 * for scales, that `scales.css` declares exactly the radius/type steps. Add a
 * token here and to the CSS in the same change, or the test fails. That is how
 * the theme stays complete and drift-free.
 *
 * They also power typed `fold*Var` helpers so call sites get autocomplete and a
 * compile error on a misspelt token.
 */
export const FOLD_SEMANTIC_COLOR_TOKENS = [
  /* ── Surfaces ─────────────────────────────────────────────── */
  /** Page background — the surface behind everything. */
  "bg-page",
  /** Top header bar. */
  "bg-header",
  /** Rail 1 — the app menu. */
  "bg-rail-primary",
  /** Rail 2 — the workspace menu. */
  "bg-rail-secondary",
  /** Rail 3 — tertiary nav (e.g. a `fold-view-nav` section sidebar). */
  "bg-rail-tertiary",

  /* ── Primary / accent ─────────────────────────────────────── */
  /** Primary / accent — brand teal (solid). */
  "primary",
  /** Primary in a hover/active state. */
  "primary-strong",
  /** Text or icon rendered on top of a solid `primary` fill. */
  "on-primary",
  /** Readable primary tint for text on a `primary-surface`. */
  "primary-text",
  /** Faint primary-tinted background (chips, highlights). */
  "primary-surface",
  /** Border for a `primary-surface`. */
  "primary-border",

  /* ── Info (purple) ────────────────────────────────────────── */
  "info",
  "info-text",
  "info-surface",
  "info-border",

  /* ── Warning (amber) ──────────────────────────────────────── */
  "warning",
  "warning-text",
  "warning-surface",
  "warning-border",

  /* ── Alert (red) ──────────────────────────────────────────── */
  "alert",
  "alert-text",
  "alert-surface",
  "alert-border",

  /* ── Success (green) ──────────────────────────────────────── */
  "success",
  "success-text",
  "success-surface",
  "success-border",

  /* ── Text ─────────────────────────────────────────────────── */
  /** Default body text. */
  "text",
  /** De-emphasised text. */
  "text-secondary",
  /** Faint / hint text. */
  "text-muted",
  /** Dimmest text — counts, hints. */
  "text-faded",

  /* ── Neutral surfaces + border ────────────────────────────── */
  /** Solid raised content surface (cards, panels). */
  "surface-card",
  /** Deeper solid surface for large containers (tables, page-level cards). */
  "surface-sunken",
  /** Faint tinted fill (idle chips, subtle rows). */
  "surface-subtle",
  /** Slightly stronger fill (raised). */
  "surface-raised",
  /** Solid raised hover surface (list rows, menu/tab items). */
  "surface-hover",
  /** Neutral hairline border. */
  "border",
  /** Fainter hairline — row dividers, subtle edges (below `border`). */
  "border-subtle",

  /* ── Glass ────────────────────────────────────────────────── */
  /** Translucent frosted overlay (panels, floating menus). */
  "glass",
  /** Hairline border on a glass surface. */
  "glass-border",

  /* ── Scrim ────────────────────────────────────────────────── */
  /** Darkening veil behind a modal layer (the mobile nav drawer). */
  "scrim",
] as const;

export type FoldSemanticColorToken =
  (typeof FOLD_SEMANTIC_COLOR_TOKENS)[number];

/** Border-radius scale. `lg` is a real large radius; `pill` is the capsule. */
export const FOLD_RADIUS_TOKENS = [
  "xs",
  "sm",
  "md",
  "lg",
  "pill",
  "round",
] as const;

export type FoldRadiusToken = (typeof FOLD_RADIUS_TOKENS)[number];

/**
 * Font-family scale (`--fold-font-*`). Two faces only — the base and the
 * tabular/code one. No `display` face: nothing renders one.
 */
export const FOLD_FONT_TOKENS = ["sans", "mono"] as const;

export type FoldFontToken = (typeof FOLD_FONT_TOKENS)[number];

/**
 * Type (font-size) scale. `base` is body copy (14px) and sits above `md`
 * (13px): it names the reference step, not a rung on the t-shirt ladder.
 */
export const FOLD_TEXT_TOKENS = [
  "2xs",
  "xs",
  "sm",
  "md",
  "base",
  "lg",
  "xl",
  "2xl",
] as const;

export type FoldTextToken = (typeof FOLD_TEXT_TOKENS)[number];

/** Weight scale (`--fold-weight-*`) — the four weights components render. */
export const FOLD_WEIGHT_TOKENS = [
  "regular",
  "medium",
  "semibold",
  "bold",
] as const;

export type FoldWeightToken = (typeof FOLD_WEIGHT_TOKENS)[number];

/** Leading scale (`--fold-leading-*`) — unitless line-heights. */
export const FOLD_LEADING_TOKENS = [
  "none",
  "tight",
  "snug",
  "normal",
  "relaxed",
] as const;

export type FoldLeadingToken = (typeof FOLD_LEADING_TOKENS)[number];

/** Tracking scale (`--fold-tracking-*`) — letter-spacing per role. */
export const FOLD_TRACKING_TOKENS = [
  "tighter",
  "tight",
  "normal",
  "wide",
  "caps",
] as const;

export type FoldTrackingToken = (typeof FOLD_TRACKING_TOKENS)[number];

/** Icon-size scale — the length a `fold-icon` renders at, per size preset. */
export const FOLD_ICON_SIZE_TOKENS = ["xs", "sm", "md", "lg", "xl"] as const;

export type FoldIconSizeToken = (typeof FOLD_ICON_SIZE_TOKENS)[number];

/** Space (gap / padding / margin) scale. */
export const FOLD_SPACE_TOKENS = [
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl",
  "5xl",
] as const;

export type FoldSpaceToken = (typeof FOLD_SPACE_TOKENS)[number];

/** Rail-width scale — the nav-rail hierarchy's shared widths, named to pair with
 *  the `--fold-color-bg-rail-*` colours (primary app menu → secondary workspace /
 *  aside → tertiary in-page nav). */
export const FOLD_RAIL_TOKENS = ["primary", "secondary", "tertiary"] as const;

export type FoldRailToken = (typeof FOLD_RAIL_TOKENS)[number];

/** Motion scale — `transition` shorthands (duration + easing). */
export const FOLD_MOTION_TOKENS = ["fast", "base", "slow"] as const;

export type FoldMotionToken = (typeof FOLD_MOTION_TOKENS)[number];

/** Backdrop-blur radii (`--fold-blur-*`). */
export const FOLD_BLUR_TOKENS = ["glass"] as const;

export type FoldBlurToken = (typeof FOLD_BLUR_TOKENS)[number];

/**
 * Elevation scale — full `box-shadow` values. The shared depth language: a
 * component never spells its own shadow, it names a level. Theme-invariant
 * (black ink via `color-mix`, which reads acceptably on both themes), so they
 * live with the scales. `panel-*` are the directional side-panel shadows.
 */
export const FOLD_SHADOW_TOKENS = [
  "sm",
  "md",
  "lg",
  "panel-right",
  "panel-left",
] as const;

export type FoldShadowToken = (typeof FOLD_SHADOW_TOKENS)[number];

/** The full custom-property name for a semantic colour token. */
export function foldColorProperty(token: FoldSemanticColorToken): string {
  return `--fold-color-${token}`;
}

/** A ready-to-use `var(--fold-color-…)` reference for a semantic colour token. */
export function foldColorVar(token: FoldSemanticColorToken): string {
  return `var(${foldColorProperty(token)})`;
}

/** A ready-to-use `var(--fold-radius-…)` reference. */
export function foldRadiusVar(token: FoldRadiusToken): string {
  return `var(--fold-radius-${token})`;
}

/** A ready-to-use `var(--fold-font-…)` reference. */
export function foldFontVar(token: FoldFontToken): string {
  return `var(--fold-font-${token})`;
}

/** A ready-to-use `var(--fold-text-…)` reference. */
export function foldTextVar(token: FoldTextToken): string {
  return `var(--fold-text-${token})`;
}

/** A ready-to-use `var(--fold-weight-…)` reference. */
export function foldWeightVar(token: FoldWeightToken): string {
  return `var(--fold-weight-${token})`;
}

/** A ready-to-use `var(--fold-leading-…)` reference. */
export function foldLeadingVar(token: FoldLeadingToken): string {
  return `var(--fold-leading-${token})`;
}

/** A ready-to-use `var(--fold-tracking-…)` reference. */
export function foldTrackingVar(token: FoldTrackingToken): string {
  return `var(--fold-tracking-${token})`;
}

/** A ready-to-use `var(--fold-icon-size-…)` reference. */
export function foldIconSizeVar(token: FoldIconSizeToken): string {
  return `var(--fold-icon-size-${token})`;
}

/** A ready-to-use `var(--fold-space-…)` reference. */
export function foldSpaceVar(token: FoldSpaceToken): string {
  return `var(--fold-space-${token})`;
}

/** A ready-to-use `var(--fold-motion-…)` reference. */
export function foldMotionVar(token: FoldMotionToken): string {
  return `var(--fold-motion-${token})`;
}

/** A ready-to-use `var(--fold-blur-…)` reference. */
export function foldBlurVar(token: FoldBlurToken): string {
  return `var(--fold-blur-${token})`;
}

/** A ready-to-use `var(--fold-shadow-…)` reference. */
export function foldShadowVar(token: FoldShadowToken): string {
  return `var(--fold-shadow-${token})`;
}
