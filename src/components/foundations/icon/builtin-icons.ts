import { UI_ICONS } from "./icons/ui.icons";
import { NAV_ICONS } from "./icons/nav.icons";
import { COMMERCE_ICONS } from "./icons/commerce.icons";
import { MUSIC_ICONS } from "./icons/music.icons";
import { STATUS_ICONS } from "./icons/status.icons";
import { PEOPLE_ICONS } from "./icons/people.icons";
import { BRANDS_ICONS } from "./icons/brands.icons";

/**
 * The package's built-in icon set — the shared, reusable catalogue. Keys are
 * **kebab-case** and unique across categories; values are single-colour SVG
 * markup using `currentColor`, so an icon inherits `color` from its host.
 *
 * The SVGs are inlined (not `.svg` file imports) so the package is fully
 * self-contained — no build-tool loader config leaks to a consumer.
 *
 * A consumer extends this set at runtime — never by editing this file — through
 * {@link FoldIconRegistry} (`provideFoldIcons()` at bootstrap, or `register()` later).
 */
export const FOLD_BUILTIN_ICONS = {
  ...UI_ICONS,
  ...NAV_ICONS,
  ...COMMERCE_ICONS,
  ...MUSIC_ICONS,
  ...STATUS_ICONS,
  ...PEOPLE_ICONS,
  ...BRANDS_ICONS,
} as const;

/**
 * The built-in catalogue grouped by category, in display order — the single
 * source of truth for tooling that browses icons by theme (e.g. the
 * `fold-icon-devtool`). Each source file owns its slice; this list only names
 * and orders them. Host-registered icons are *not* here — they carry no
 * built-in category, so tooling buckets them separately.
 */
export const FOLD_BUILTIN_ICON_CATEGORIES = [
  { id: "ui", label: "UI", names: Object.keys(UI_ICONS) },
  { id: "nav", label: "Navigation", names: Object.keys(NAV_ICONS) },
  { id: "commerce", label: "Commerce", names: Object.keys(COMMERCE_ICONS) },
  { id: "music", label: "Music", names: Object.keys(MUSIC_ICONS) },
  { id: "status", label: "Status", names: Object.keys(STATUS_ICONS) },
  { id: "people", label: "People", names: Object.keys(PEOPLE_ICONS) },
  { id: "brands", label: "Brands", names: Object.keys(BRANDS_ICONS) },
] as const;

/** A built-in icon category id (`"ui"`, `"commerce"`, …). */
export type FoldIconCategoryId =
  (typeof FOLD_BUILTIN_ICON_CATEGORIES)[number]["id"];

/** Every built-in icon name — derived from the registry keys (autocompletes). */
export type FoldBuiltinIconName = keyof typeof FOLD_BUILTIN_ICONS;

/**
 * The `name` a `fold-icon` accepts: a built-in (autocompleted + type-checked) or
 * any custom string a consumer has registered. `(string & {})` keeps the
 * built-in literals in autocomplete while still admitting a bare `string`.
 */
export type FoldIconName = FoldBuiltinIconName | (string & {});
