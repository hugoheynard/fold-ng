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
  { id: "ui", label: "UI", names: namesOf(UI_ICONS) },
  { id: "nav", label: "Navigation", names: namesOf(NAV_ICONS) },
  { id: "commerce", label: "Commerce", names: namesOf(COMMERCE_ICONS) },
  { id: "music", label: "Music", names: namesOf(MUSIC_ICONS) },
  { id: "status", label: "Status", names: namesOf(STATUS_ICONS) },
  { id: "people", label: "People", names: namesOf(PEOPLE_ICONS) },
  { id: "brands", label: "Brands", names: namesOf(BRANDS_ICONS) },
] as const;

/**
 * The keys of an icon slice, keeping their literal type. `Object.keys` only ever
 * promises `string`, so the narrowing goes through a **checked predicate** — no
 * assertion (rule 2.1), and every name kept is genuinely a key of the object.
 */
function namesOf<T extends object>(icons: T): (keyof T & string)[] {
  const known = (name: string): name is keyof T & string => name in icons;
  return Object.keys(icons).filter(known);
}

/** A built-in icon category id (`"ui"`, `"commerce"`, …). */
export type FoldIconCategoryId =
  (typeof FOLD_BUILTIN_ICON_CATEGORIES)[number]["id"];

/** Every built-in icon name — derived from the registry keys (autocompletes). */
export type FoldBuiltinIconName = keyof typeof FOLD_BUILTIN_ICONS;

/**
 * The names a consumer has added on top of the built-in set — **empty here, and
 * meant to be augmented**. Declare your app's icons once, derived from the very
 * object you register, so the two can never drift:
 *
 * ```ts
 * export const APP_ICONS = { "my-logo": "<svg …>" } as const;
 *
 * declare module "fold-ng" {
 *   interface FoldCustomIcons extends Record<keyof typeof APP_ICONS, true> {}
 * }
 *
 * // app.config.ts
 * providers: [provideFoldIcons(APP_ICONS)];
 * ```
 *
 * **Overriding a built-in needs no declaration.** `bin` is already a known name,
 * so re-registering it with your own art type-checks as it stands — the registry
 * merges consumer entries over the built-ins.
 */
export interface FoldCustomIcons {}

/**
 * The `name` a `fold-icon` accepts: a built-in, or one the consumer declared via
 * {@link FoldCustomIcons}.
 *
 * This used to be `FoldBuiltinIconName | (string & {})` — autocomplete for the
 * built-ins, but any string admitted. A typo (`"trahs"`) and a name that simply
 * doesn't exist (`"alert"`, before it did) both compiled, and surfaced only as a
 * `console.warn` and a hole where the glyph should be. Six such holes were live
 * across three apps when this was tightened.
 */
export type FoldIconName = FoldBuiltinIconName | keyof FoldCustomIcons;
