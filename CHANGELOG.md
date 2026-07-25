# Changelog

All notable changes to **fold-ng** are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/); the project follows
[Semantic Versioning](https://semver.org/).

## [Unreleased]

### Added

- **Auto-inverting accent surface.** A new `[data-surface="accent"]` region
  (stamped by `fold-card surface="accent"`, `fold-hero-card surface="accent"`,
  or the `foldSurface` directive) fills with the brand accent and re-points its
  **whole content sub-tree** to an on-accent palette — text, borders, band
  gradation, and even nested buttons / links / icon-tiles read on the accent
  with no per-component code. It is theme-agnostic and derived (every value a
  `color-mix` of the captured accent pair), and swaps the brand pair
  (`primary` ↔ `on-primary`) without a CSS custom-property cycle by capturing on
  the surface and inverting on descendants. A theme can override any role by
  nesting a rule for its own `[data-theme=…]` under `[data-surface="accent"]`.
  `FoldSurfaceName` gains `'accent'`. See `docs/surfaces.md`.
- **On-accent contrast contract.** A contract test derives the on-accent text
  ramp per theme and asserts it clears a documented WCAG floor (the accent is an
  emphasis surface — AA-large 3:1 — or the theme must override the ramp). No
  eyeballing.
- **`fold-card` — an accessible interactive contract.** `interactive` cards are
  now real controls: `role="button"`, `tabindex`, `Enter`/`Space` activation, an
  `(activated)` output, an `ariaLabel` input, a visible focus ring, and
  `prefers-reduced-motion` respected. The projected bands are neutral `<div>`s
  (not `<header>`/`<footer>`), so a card is a single control with no nested
  landmarks.
- **`fold-link` — `target` + `rel` for external links.** A linked `fold-link`
  takes `target` (e.g. `_blank`) and `rel`; `rel` defaults to a safe
  `noopener noreferrer` whenever `target="_blank"`, and `(clicked)` now emits the
  `MouseEvent` (so cmd/middle-click and modifier state are observable).
- **`titan` theme — brushed titanium.** A fifth `[data-theme]`: a light, warm
  brushed-steel read. A cool `steel` ground with the header + rails at the page's
  own tint (a frameless top), bright polished cards floating off it on the shared
  elevation shadow, and a heat-anodized `titanium` **copper-orange** brand.
  Borders re-point to a **solid** steel primitive (a palpable machined seam, not
  the alpha hairline the light themes share); corners soften a step in
  `scales.css`. In the gallery both rails float as steel plates while the header
  stays flat. Uniform-polarity, so no chrome override. The token contract (theme
  parity, no-hex, no dead primitives) stays green.

### Changed

- **BREAKING — `fold-card` band chrome is per-band.** `separators` and
  `raisedBands` change from booleans to a `FoldCardBandChrome`
  (`'none' | 'header' | 'footer' | 'both'`), so a header and a footer are dressed
  independently. Migration: `<fold-card separators>` → `separators="both"`;
  drop the attribute for `'none'`.

### Fixed

- **`fold-avatar` — a broken image falls back to the initials** instead of the
  browser's broken-image glyph, and retries when `imageUrl` changes. `ghost`
  combined with `imageUrl` is no longer a silent no-op — a guest keeps the
  dashed edge even with a photo.
- **`fold-avatar` — initials stay legible on every palette fill.** The initials
  ink is now the higher-contrast of the dark/light pair (was a magic-threshold
  guess), and a contrast contract asserts every built-in palette fill clears AA
  (≥ 4.5:1). A status-ring perceivability contract locks the `ring` colours
  against a WCAG 1.4.11 regression.

### Docs

- **`docs/surfaces.md`** documents the auto-inversion principle and the
  per-theme override seam; a `/surfaces` gallery page shows the live plain-vs-
  accent proof. `docs/STRENGTHS.md` captures the top-tier design arguments.

## [0.3.0] - 2026-07-25

### Added

- **`fold-page-layout` — a custom title slot.** Project `[pageTitle]`
  (`FoldPageTitleDirective`) for a rich header — an avatar, a two-tone name — in
  place of the plain `icon` + `title` inputs; it renders inside the page `<h1>`
  and its presence alone switches the header on. Non-breaking.
- **`fold-tabs` + `fold-tab-panel` — the in-page ARIA Tabs widget.** A
  `role="tablist"` of `role="tab"` buttons that switch layered panels without
  navigating: full roving-tabindex keyboard (arrows on both axes, `Home`/`End`,
  wrap), `aria-selected` + `aria-orientation`, and each tab wired to its panel
  (`aria-controls` ↔ `aria-labelledby`). The panels take the bar by template ref
  (`[tabs]="t"`, `#t="foldTabs"`), so bar and panels coordinate even in separate
  `fold-nav-layout` slots. Same look as `fold-view-nav`, different semantics.
- **Rail-width token scale** — `--fold-rail-primary` / `--fold-rail-secondary` /
  `--fold-rail-tertiary`, named to pair 1:1 with the `--fold-color-bg-rail-*`
  colours. `fold-app-shell`, `fold-aside-layout`, and `fold-nav-layout` default
  their rail widths from this one scale (values unchanged).

### Changed

- **BREAKING — the tabs family is renamed** so the roles read at a glance (only
  the in-page widget keeps "tab"):
  - `fold-tab-layout` → **`fold-nav-layout`** (`FoldNavLayoutComponent`,
    `exportAs="foldNavLayout"`, tokens `--fold-nav-layout-gap` /
    `--fold-nav-layout-rail-width`). It lays out a bar — a nav _or_ a tabs
    widget — plus content, so "tab" was misleading.
  - `fold-tab-nav` → **`fold-view-nav`** (`FoldViewNavComponent`,
    `FoldViewNavItem`). It is a navigation bar styled as tabs — now honest about
    it, with `aria-current="page"` on the active item.
  - Migration: rename the selectors/classes/tokens; for **in-page** (non-routing)
    tabs, move to the new `fold-tabs` + `fold-tab-panel`.
- **BREAKING — `fold-view-nav` is now a real navigation component.** Items carry
  a `link` (routerLink), `href`, or nothing (a button), plus optional `disabled`.
  A linked item renders an actual `<a>`: cmd/middle-click opens a new tab, the
  URL is a deep link, and the active state comes from `routerLinkActive` +
  `aria-current="page"` — no `activeKey`. The inputs read as navigation too:
  `[tabs]` → `[items]`, `(tabChange)` → `(activeChange)`.
- **BREAKING — `collapsed` split from `size`.** `size` is now pure density
  (`compact` / `comfortable`); the icon mode is the boolean `collapsed`
  (`size="reduce"` → `collapsed`). Applies to `fold-tabs` too. Collapsed +
  vertical is an icon rail like a folded `fold-menu` — icon only, label as a
  hover/focus tooltip, count as a corner bubble; narrow
  `--fold-nav-layout-rail-width` to match.
- **BREAKING — `direction` defaults to `auto`** on `fold-view-nav` and
  `fold-tabs`: inside a `fold-nav-layout` the bar follows the layout with no
  wiring (the `[direction]="tl.stacked() ? …"` binding is no longer needed);
  standalone it is `vertical` for `fold-view-nav`, `horizontal` for `fold-tabs`.
  `fold-view-nav`'s `background` also defaults to `transparent` (was `surface`).

### Docs

- **`fold-nav-layout`** documents its two roles — page scaffold vs. a tabbed
  section composed inside a `fold-page-section` — and that its bar is a
  `fold-view-nav` (routes) or a `fold-tabs` (panels).

## [0.2.1] - 2026-07-24

### Fixed

- **`fold-app-shell`** now sets the drawer's background `inert` via an attribute
  binding (`[attr.inert]`) rather than a property binding. No behaviour change —
  AOT was always clean — but it silences an `NG0303` "unknown property" warning
  raised by the JIT element-schema in dev/test runtimes.
- **Published tarball** no longer ships `tsconfig.lib.tsbuildinfo` — a ~100 kB
  TypeScript incremental-build cache that `finalize-dist` now prunes. Smaller
  install (14 → 13 files).

## [0.2.0] - 2026-07-24

### Added

- **`fold-app-shell` — the mobile drawer is now a real modal.** While open, the
  off-canvas primary rail is a named `role="dialog"` + `aria-modal="true"` (new
  `drawerLabel` input, default `"Menu"`), and every other region is `inert` so a
  screen reader can't wander behind it. New `drawerId` — exposed via
  `exportAs="foldAppShell"` — lets the app point its hamburger's `aria-controls`
  at the drawer (see the trigger contract in the component docs).

### Fixed

- **`fold-app-shell` skip-link** moves focus to `<main>` directly and prevents
  the fragment navigation, so it works under hash routing (`withHashLocation`),
  where a `#id` jump would otherwise be treated as a route change.

### Changed

- **`FoldComponentPanelDescriptor.ariaLabel`** is now typed `string | undefined`
  (was `string`) — a non-breaking widening; the descriptor always carries the key.
- **Internals hardened**, no API change: the library now compiles under
  `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `strictStandalone`,
  `typeCheckHostBindings`, and the full `strictTypeChecked` ESLint preset.

## [0.1.0] - 2026-07-24

First public release line — **production-quality, pre-1.0 (`0.x`)**: fully
tested and dogfooded in a real application, but the component API may still be
refined before `1.0.0`. Consumed as standalone Angular 22 components plus a
design-token stylesheet.

> **1.0.0 is held** until every component in
> [`docs/RELEASE-READINESS.md`](./docs/RELEASE-READINESS.md) is 🟢🟢🟢. Until
> then `latest` tracks the newest `0.x` (pin your version — treat `0.x` minor
> bumps as potentially breaking); throwaway pre-release cuts ship on the `beta`
> dist-tag.

### Added

- **Design tokens** — two-tier model (primitives → semantic), four themes
  (`umbra` dark default, `lumen`, `bubbly`, `navi`) switched via `data-theme`, a
  typed catalogue + `foldColorVar()` helper, and a contract test locking theme
  parity.
- **Actions** — `[foldButton]` (applied to a real `<button>`/`<a>`; orthogonal
  `emphasis` × `intent`; `loading`; forced-colors), `fold-button-icon`,
  `fold-toggle-icon`, `fold-link`, `fold-spinner`.
- **Overlays** — `fold-panel-host` / `fold-panel-header`: modal side panels with
  an accessible name, an `inert` background barrier, a top-most focus trap,
  scroll-lock, and a typed imperative `open<TData, TResult>()` → `FoldPanelRef`.
- **Layout / Navigation / Content / Feedback / Forms / Foundations** — see the
  component table in the README.
- **Accessibility** — overlays honour the full modal contract; icons inherit
  `currentColor`; `prefers-reduced-motion` + `forced-colors` are respected;
  strings localise via inputs / providers (`provideFoldPanelLabels`).

[unreleased]: https://github.com/hugoheynard/fold-ng/compare/v0.3.0...HEAD
[0.3.0]: https://github.com/hugoheynard/fold-ng/releases/tag/v0.3.0
[0.2.1]: https://github.com/hugoheynard/fold-ng/releases/tag/v0.2.1
[0.2.0]: https://github.com/hugoheynard/fold-ng/releases/tag/v0.2.0
[0.1.0]: https://github.com/hugoheynard/fold-ng/releases/tag/v0.1.0
