# Changelog

All notable changes to **fold-ng** are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/); the project follows
[Semantic Versioning](https://semver.org/).

## [Unreleased]

## [0.1.0]

First public release line. The library is consumed as standalone Angular 22
components plus a design-token stylesheet.

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

### Notes

- 1.0.0 is held until every component in `docs/RELEASE-READINESS.md` is 🟢🟢🟢.

[unreleased]: https://github.com/hugoheynard/fold-ng/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/hugoheynard/fold-ng/releases/tag/v0.1.0
