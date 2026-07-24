# Changelog

All notable changes to **fold-ng** are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/); the project follows
[Semantic Versioning](https://semver.org/).

## [Unreleased]

### Added

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
- **BREAKING — `fold-view-nav` defaults changed** to the readable-first shape:
  `direction` now defaults to `vertical` (was `horizontal`) and `background` to
  `transparent` (was `surface`). Pass `direction="horizontal"` /
  `background="surface"` to keep the previous look.
- **`fold-view-nav` — `reduce` × `vertical`** is now a collapsed icon rail: each
  tab shows only its icon, its label surfacing as a hover/focus tooltip (like a
  folded `fold-menu`). Narrow `--fold-nav-layout-rail-width` to match.

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

[unreleased]: https://github.com/hugoheynard/fold-ng/compare/v0.2.1...HEAD
[0.2.1]: https://github.com/hugoheynard/fold-ng/releases/tag/v0.2.1
[0.2.0]: https://github.com/hugoheynard/fold-ng/releases/tag/v0.2.0
[0.1.0]: https://github.com/hugoheynard/fold-ng/releases/tag/v0.1.0
