import { UI_ICONS } from "./icons/ui.icons";
import { NAV_ICONS } from "./icons/nav.icons";
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
 * {@link IconRegistry} (`provideIcons()` at bootstrap, or `register()` later).
 */
export const SH3_BUILTIN_ICONS = {
  ...UI_ICONS,
  ...NAV_ICONS,
  ...MUSIC_ICONS,
  ...STATUS_ICONS,
  ...PEOPLE_ICONS,
  ...BRANDS_ICONS,
} as const;

/** Every built-in icon name — derived from the registry keys (autocompletes). */
export type Sh3BuiltinIconName = keyof typeof SH3_BUILTIN_ICONS;

/**
 * The `name` a `sh3-icon` accepts: a built-in (autocompleted + type-checked) or
 * any custom string a consumer has registered. `(string & {})` keeps the
 * built-in literals in autocomplete while still admitting a bare `string`.
 */
export type Sh3IconName = Sh3BuiltinIconName | (string & {});
