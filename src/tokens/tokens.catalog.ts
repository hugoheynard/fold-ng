/**
 * The design tokens, as a typed source-of-truth.
 *
 * These lists are the CONTRACT. The token contract test asserts that the CSS
 * declares exactly these tokens — for colours, that the `:root` (dark) and
 * `[data-theme="light"]` blocks each declare exactly the colour set (parity);
 * for scales, that `scales.css` declares exactly the radius/type steps. Add a
 * token here and to the CSS in the same change, or the test fails. That is how
 * the theme stays complete and drift-free.
 *
 * They also power typed `sh3*Var` helpers so call sites get autocomplete and a
 * compile error on a misspelt token.
 */
export const SH3_SEMANTIC_COLOR_TOKENS = [
  /* ── Surfaces ─────────────────────────────────────────────── */
  /** Page background — the surface behind everything. */
  "bg-page",
  /** Top header bar. */
  "bg-header",
  /** Rail 1 — the app menu. */
  "bg-rail-primary",
  /** Rail 2 — the workspace menu. */
  "bg-rail-secondary",
  /** Rail 3 — tertiary nav (e.g. a `sh3-tab-nav` section sidebar). */
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
] as const;

export type Sh3SemanticColorToken = (typeof SH3_SEMANTIC_COLOR_TOKENS)[number];

/** Border-radius scale. `lg` is a real large radius; `pill` is the capsule. */
export const SH3_RADIUS_TOKENS = [
  "xs",
  "sm",
  "md",
  "lg",
  "pill",
  "round",
] as const;

export type Sh3RadiusToken = (typeof SH3_RADIUS_TOKENS)[number];

/** Type (font-size) scale. */
export const SH3_TEXT_TOKENS = ["xs", "sm", "md", "lg", "xl"] as const;

export type Sh3TextToken = (typeof SH3_TEXT_TOKENS)[number];

/** Space (gap / padding / margin) scale. */
export const SH3_SPACE_TOKENS = ["xs", "sm", "md", "lg", "xl"] as const;

export type Sh3SpaceToken = (typeof SH3_SPACE_TOKENS)[number];

/** Motion scale — `transition` shorthands (duration + easing). */
export const SH3_MOTION_TOKENS = ["fast", "base", "slow"] as const;

export type Sh3MotionToken = (typeof SH3_MOTION_TOKENS)[number];

/** Backdrop-blur radii (`--sh3-blur-*`). */
export const SH3_BLUR_TOKENS = ["glass"] as const;

export type Sh3BlurToken = (typeof SH3_BLUR_TOKENS)[number];

/** The full custom-property name for a semantic colour token. */
export function sh3ColorProperty(token: Sh3SemanticColorToken): string {
  return `--sh3-color-${token}`;
}

/** A ready-to-use `var(--sh3-color-…)` reference for a semantic colour token. */
export function sh3ColorVar(token: Sh3SemanticColorToken): string {
  return `var(${sh3ColorProperty(token)})`;
}

/** A ready-to-use `var(--sh3-radius-…)` reference. */
export function sh3RadiusVar(token: Sh3RadiusToken): string {
  return `var(--sh3-radius-${token})`;
}

/** A ready-to-use `var(--sh3-text-…)` reference. */
export function sh3TextVar(token: Sh3TextToken): string {
  return `var(--sh3-text-${token})`;
}

/** A ready-to-use `var(--sh3-space-…)` reference. */
export function sh3SpaceVar(token: Sh3SpaceToken): string {
  return `var(--sh3-space-${token})`;
}

/** A ready-to-use `var(--sh3-motion-…)` reference. */
export function sh3MotionVar(token: Sh3MotionToken): string {
  return `var(--sh3-motion-${token})`;
}

/** A ready-to-use `var(--sh3-blur-…)` reference. */
export function sh3BlurVar(token: Sh3BlurToken): string {
  return `var(--sh3-blur-${token})`;
}
