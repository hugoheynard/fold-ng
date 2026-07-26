# Changelog

All notable changes to **fold-ng** are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/); the project follows
[Semantic Versioning](https://semver.org/).

## [Unreleased]

### Added

- **`fold-popover` + `fold-dropdown` — anchored floating layer & actions menu.**
  fold's first floating primitive. `fold-popover` renders projected content in
  the native **top layer** (the `popover` attribute — escapes `overflow: hidden`
  and every `z-index`), anchored to a projected `[foldPopoverTrigger]` by a
  **dependency-free flip/shift engine** (`computePlacement`, exported and
  unit-tested in isolation — no Floating UI). Controlled via `[(open)]`;
  dismissal (outside-click + `Escape`) and focus-return are built in, and the
  trigger gets `aria-haspopup`/`aria-expanded`/`aria-controls` wired
  automatically. `fold-dropdown` (+ `fold-dropdown-item`) is the actions menu on
  top: `role="menu"`, ↑/↓ roving tabindex, `Home`/`End`, type-ahead, opens onto
  its first enabled item, closes returning focus to the trigger. New gallery
  `/popover` page.

  Hardened to a competitor benchmark (Floating UI / Radix): the placement engine
  now does **flip → size → shift** — it picks the best-fitting side (preferred →
  opposite → roomiest) and reports the available space so a tall panel gets a
  `max-height` and **scrolls inside the viewport** instead of overflowing;
  **autoUpdate** tracks the trigger + panel via `ResizeObserver` (not just
  scroll/resize) so the anchor never drifts; an optional **`arrow`** points at
  the trigger; **enter + exit transitions** are native CSS (`@starting-style` +
  `transition-behavior: allow-discrete`, no JS timers); and the dropdown's
  type-ahead is **multi-letter** (buffered); `fallbackPlacements` makes the flip
  chain configurable; the `autoUpdate` helper is exported. Nested/sub-menus and
  cursor-anchored context menus are tracked for a later pass.

  Added a **Playwright interaction suite** (`pnpm test:e2e`, real Chromium) for
  what jsdom can't reach — native top-layer open, box sizing, keyboard/focus.
  It caught two focus bugs now fixed: the dropdown focused its first item
  _before_ the popover had shown the panel (so keydowns missed the menu), and
  focus-return targeted a non-focusable wrapper trigger (e.g. `fold-button-icon`)
  instead of its inner control — the popover now resolves the focusable element
  for both focus and the aria wiring.

- **`fold-inline-confirm` — in-place destructive-action guard.** Extracted from
  SH3PHERD's shared inline-confirm (which replaced four ad-hoc patterns) and
  rebuilt to fold conventions. The host projects a real focusable trigger
  (`foldButton` / `fold-button-icon`); on activation it is swapped, in the same
  slot, for a confirm/cancel row — no modal, no layout jump. Three families:
  **simple** (`confirmed` emits `""`), **type-to-confirm** (`[match]` — the
  button unlocks once the text matches, case-insensitive + trimmed), and
  **secret** (`password` — a masked field that confirms when non-empty and emits
  the typed value, since a password can only be verified server-side). `Escape`
  cancels; `Enter` confirms. Fully i18n via `provideFoldInlineConfirmLabels()`
  (English default) or a per-instance `labels` input. Composed of `fold-button`,
  `fold-button-icon` and `fold-input`. New gallery `/inline-confirm` page.

  Hardened against a competitor benchmark (Radix `AlertDialog` / React-Aria):
  the warning `message` is wired to the confirm button via `aria-describedby`
  (so it is announced on focus, not stranded on the group); focus reliably
  returns to the trigger on close (the previous attempt read the trigger before
  it re-rendered and no-op'd); the trigger no longer double-fires on `Enter`.
  New API: `confirmIcon` (leading icon on the confirm button) and `cancelIcon`
  now takes an **icon name of your choice** (was a fixed `×`); a two-way
  `[(open)]` model plus `keepOpenOnConfirm` give a controlled async story —
  keep the affordance open, show `loading`, close it when the request settles.
  16 spec blocks.

- **Slider hardcore pass — `fold-slider` + `fold-range-slider`.** `fold-slider`
  now implements `FormValueControl<number>` (bind `[formField]`, or `[(value)]`);
  the visible label is a real `<label for>` (else `ariaLabel`); a `valueText`
  override is announced via `aria-valuetext`; `hint` + touched-gated `errors`.
  `fold-range-slider` gets a `model()` value (`[(value)]` parity), `disabled`,
  and i18n thumb labels (`minLabel` / `maxLabel`, English default) resolving the
  hardcoded aria suffixes; it's a labelled `role="group"` with formatted
  `aria-valuetext` per thumb (duration reads `mm:ss`). Both share a hardened
  thumb — a focus-visible ring (was invisible on keyboard focus),
  `prefers-reduced-motion`, `forced-colors`, and tokenised motion. New gallery
  `/slider` page; README rows; specs 12 → 20.

- **`fold-paginator` hardcore pass.** Fully i18n — every string
  (`Pagination`/prev/next/page/size/range/empty) is now overridable via
  `provideFoldPaginatorLabels()` (English default) or a per-instance `labels`
  input, resolving the last hardcoded-French portability blocker. Plus:
  keyboard focus is preserved after a page change (moves to the active page, or
  the prev/next arrow while it stays enabled — never dropped to `<body>`); the
  visible range + active button clamp an out-of-range `currentPage` (a lagging
  parent can't render a garbage range); the current `pageSize` is always in the
  selector's options (the `<select>` can't show a phantom value); `disabled` is a
  `booleanAttribute`; `siblingCount` is floored + zero-bounded. `@selector` + a
  gallery `/paginator` page; specs cover DOM clicks, i18n, focus and the edges.

- **`fold-checkbox` — the boolean form control.** A native
  `<input type="checkbox">` (keyboard, focus, the `checkbox` role, form
  submission and `indeterminate` all native) visually replaced by a tokenised
  box + check/dash mark. Signal-forms native via `FormCheckboxControl` (bind
  `[formField]`), or standalone `[(checked)]`; plus `indeterminate`, `label` /
  `ariaLabel`, `hint` + touched-gated `errors`, `required`, `size` (`sm`/`md`),
  `disabled`. Accessible by construction (visible label wraps the control, or a
  required `ariaLabel` — dev-warns when neither is set), with a focus-visible
  ring, `prefers-reduced-motion` and `forced-colors` handled. `fold-data-table`'s
  selection column now uses it.

- **`fold-data-table` — controlled row selection.** `selectable` renders a
  checkbox column plus a header select-all with an indeterminate state over the
  current rows; the parent owns the set via `selected` (a `Set` of row keys) and
  `selectionChange` (emits the next set — the table never mutates). Selected rows
  carry an accent tint + `aria-selected`, and a `selectionLabel` names each
  checkbox. Toggling a checkbox never triggers `rowClick`.
- **`fold-data-table` — `mobileLayout` (parent owns the small-screen shape).**
  `scroll` (default — stay tabular, scroll horizontally; the table imposes no
  card), `auto-cards` (each row stacks into a label/value card), or `custom` —
  the parent supplies `<ng-template foldRowCard let-row>` (new
  `FoldDataTableRowCardDirective`) and the table renders _that_ per row on mobile
  instead of an imposed card. The table owns the chrome, not the content.
- **`fold-data-table` — a `loading` state.** A fetching table now shows a
  centred `fold-spinner` instead of the empty state, so an in-flight roster
  reads as "loading", never as "no data".
- **`fold-data-table` — an optional toolbar/title bar.** Project content with
  `[foldToolbar]` (a title, a live count, a bulk-action bar that appears once
  rows are selected) and it renders as a visible band above the column header —
  the same content-projection idiom as `fold-card`'s `[cardHeader]`, collapsing
  to nothing when the parent projects nothing. It stays put while the body
  scrolls (the table now has an inner scroll region). `toolbarSurface` lends the
  table a level —
  `default` / `sunken` / `raised` / `accent` — mapped only to fold surface
  tokens (no hard-coded colour); `accent` reuses the shared
  `[data-surface="accent"]` machinery, so the bar's content auto-inverts to the
  on-accent palette per theme.
- **`fold-data-table` — an accessible `caption`.** A new `caption` input renders
  a visually-hidden `<caption>` that names the table for assistive tech
  (distinct from the visible `foldToolbar` title).
- **`fold-data-table` — `stickyFirst` + `density`.** `stickyFirst` pins the
  checkbox + identity columns while the body scrolls horizontally (opaque-backed
  so tints don't bleed); `density="compact"` tightens the row padding.
- **`fold-data-table` — column `align: "center"` and `truncate`.** `center`
  joins `right`; `truncate` clips a column to one ellipsised line (pair with
  `width`).
- **`data-table` gallery page.** Added `/data-table` to the demo (live sort, row
  select, keyboard nav, the loading + empty states, a custom mobile card, and a
  playground for every flag).

### Changed

- **`fold-data-table` — clickable rows are a roving-tabindex group.** They now
  answer Space as well as Enter (page-scroll suppressed) and Arrow Up/Down +
  Home/End move focus between rows with a single tab stop — the ARIA grid
  keyboard pattern, not a wall of tab stops.
- **`fold-data-table` — sort indicators are now `fold-icon`s** (`expand-all` when
  idle, `chevron-up` / `chevron-down` when active) rather than text glyphs, so
  the direction cue is theme-aware, pixel-aligned, and consistent with the rest
  of the system. The icon is decorative — `aria-sort` on the `<th>` stays the
  accessible carrier.
- Transitions now respect `prefers-reduced-motion`.
- **`fold-data-table` hardening (hardcore-review follow-ups).** Row keydown now
  fires only when the row itself is focused — keys bubbling from an inner control
  (a link, a button, the selection checkbox) are no longer stolen or
  double-handled; the roving tab stop survives the focused row being removed
  (never strands the group with zero tab stops); the `custom` mobile layout no
  longer instantiates its card list on desktop; `truncate` warns in dev when its
  column lacks a `width` to clip against; `aria-colcount` + a "Sort by …" label
  on the sort control; the checkbox-column width is a single source of truth.

- **BREAKING (`fold-data-table`): the primary column renders as
  `<th scope="row">`** (was a `<td>`) so screen readers announce each row by its
  identity cell. Consumers that target the first cell with a `td`-specific
  selector should switch to the `.folddt-cell` class (present on both the row
  header and the data cells).
- **BREAKING (`fold-data-table`): `mobileCards` (boolean) is replaced by
  `mobileLayout`, and the default flips from cards to scroll.** A narrow-screen
  table now stays tabular (scrolls) unless asked to stack. `[mobileCards]="true"`
  (or unset) → `mobileLayout="auto-cards"` to keep the stacked cards;
  `[mobileCards]="false"` → drop it (`scroll` is the default).

## [0.4.0] - 2026-07-25

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

[unreleased]: https://github.com/hugoheynard/fold-ng/compare/v0.4.0...HEAD
[0.4.0]: https://github.com/hugoheynard/fold-ng/releases/tag/v0.4.0
[0.3.0]: https://github.com/hugoheynard/fold-ng/releases/tag/v0.3.0
[0.2.1]: https://github.com/hugoheynard/fold-ng/releases/tag/v0.2.1
[0.2.0]: https://github.com/hugoheynard/fold-ng/releases/tag/v0.2.0
[0.1.0]: https://github.com/hugoheynard/fold-ng/releases/tag/v0.1.0
