# Changelog

All notable changes to **fold-ng** are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/); the project follows
[Semantic Versioning](https://semver.org/).

## [Unreleased]

### Added

- **A calendar family, starting with `fold-calendar-month` and the plain-date
  model it stands on.** The grid is a date axis: seven columns of whole days,
  and over them a layer of **bands**, each stretching from the column its event
  starts on to the column it ends on. A span crossing a week is drawn once per
  week with an open edge on the side that continues, so a three-week holiday
  reads as one thing rather than twenty-one chips. Bands pack into lanes
  (earliest start, then longest) under a `maxLanes` budget, and whatever will
  not fit becomes an overflow chip that hands the **whole week** to
  `overflowClick` rather than being dropped silently. Events sharing a `groupId`
  collapse into one chip spanning the union of their ranges and carrying the
  count; a half-day edge is kept only on the segment holding the event's real
  edge. Inputs cover `weekStartsOn` (any anchor, not just Monday), `fixedWeeks`,
  `locale` and `labels`; `month` is a two-way `model`, so keyboard paging writes
  back. Project an `<ng-template foldCalendarEvent>` to replace the built-in
  chip. Generic over `T`, so an event's `data` survives the round trip to
  `eventClick` without a cast.
- **The three column views that complete the drill-down: `fold-calendar-week`,
  `fold-calendar-day` and `fold-calendar-list`.** Where the month grid packs
  spans into lanes, these simply list what covers each day — so nothing is
  clipped and no lane budget can hide anything. `week` is seven day columns;
  `day` is one day in full, with an `[empty]` slot for a "new request" action
  when nothing sits on it; `list` is the flat chronological reading, each row
  led by its span (formatted with `Intl`'s own range formatter, which collapses
  a single day to one date and factors out a shared month). All three take the
  same `foldCalendarEvent` template, labels and `locale` as the month view.
  Their a11y is **simpler than the month's on purpose**: because a chip nests
  inside the day it belongs to rather than spanning columns, every control is a
  real child in the natural tab order — no roving tabindex, no `aria-hidden`,
  every event reachable by keyboard. New pure builders `foldBuildWeek` and
  `foldBuildDay` back them.
- **`FoldCalendarDate` — the package's date primitive is a plain
  `YYYY-MM-DD` string, not a `Date`.** A calendar of all-day spans deals in
  dates, not instants: `new Date("2026-05-18")` is UTC midnight, i.e. the 17th
  anywhere west of Greenwich, and that off-by-one is the most common calendar
  bug there is. Strings remove the class by construction, compare
  lexicographically (`a <= b` _is_ "on or before"), are `===`-equal when they
  mean the same day, and are already the wire format. Arithmetic runs through
  `Date.UTC`, so no DST boundary can repeat or skip a day. Ships with
  `foldToday`, `foldAddDays`, `foldAddMonths`, `foldStartOfWeek`,
  `foldStartOfMonth`, `foldEndOfMonth`, `foldDaysBetween`, `foldWeekdayIndex`,
  `foldIsWeekEnd`, `foldIsCalendarDate` and `foldToNativeDate`, plus the layout
  entry points `foldBuildMonthGrid`, `foldEventsOnDay` and `foldEventsInRange`.
  `fold-timeline` keeps a native `Date` on purpose — it plots dated _instants_,
  which is the other domain.
- **Month and weekday names come from `Intl`, not from a label token.** The
  `locale` input drives `Intl.DateTimeFormat`, so every locale works without
  hand-translating twelve month names; `FoldCalendarLabels` (with
  `provideFoldCalendarLabels`) covers only what `Intl` cannot supply — the today
  marker, the overflow chip and the event count.

### Changed

- **A standalone `fold-view-nav` now separates itself from the content it heads
  by the same gap a `fold-nav-layout` applies.** A horizontal bar used on its own
  (outside a layout) gained a `margin-block-end` equal to `--fold-nav-layout-gap`
  (default `--fold-space-lg`, 16px) — the value is now shared through a
  `nav-content-gap` mixin (`layout/_nav-gap.scss`) that both the layout and the
  bar `@use`, so the two can't drift and consumers stop hand-rolling a margin.
  Applied only to a **standalone horizontal** bar: inside a `fold-nav-layout` the
  layout still owns the gap (no double space), and a vertical bar is a side rail,
  not a header. `fold-tabs` is unaffected (an in-place widget, not a bar that
  introduces following content). Purely additive spacing — the layout's own
  rendering is unchanged.

## [0.7.0] - 2026-07-29

### Added

- **`fold-panel-host` gains two per-panel options: `modal` and `surface`.**
  Passed through `FoldPanelHostService.open(component, { modal, surface })` (and
  available on template-panel descriptors).
  - **`modal`** (default `true`) — the existing modal barrier: page scroll frozen,
    background `inert`, focus trapped, backdrop click dismisses. **`modal: false`**
    makes a **non-modal** panel: the page keeps scrolling and stays interactive
    behind it, focus is not trapped, and clicking outside no longer closes it
    (only the header / `Escape` / `close()` do). The barrier is now gated on
    _whether any open panel is modal_, so a lone non-modal panel never freezes the
    page; `aria-modal` reflects the real modality.
  - **`surface`** (`"glass"` default · `"solid"`) — `solid` renders an **opaque**
    sheet (`--fold-color-surface-card`, no `backdrop-filter`) for content that must
    stay legible over any background or a plain white-sheet design; `glass` keeps
    the frosted translucent look. Both default to today's behaviour, so existing
    panels are unchanged. Specs cover barrier-gating, scroll-lock, pass-through
    dock, surface + `aria-modal` reflection, and focus-trap gating.

- **Panel config now cascades through three layers instead of only the call
  site.** A panel's shape (`side`, `width`, `modal`, `surface`) is resolved
  highest-priority-first: the per-call `open()` option → the component's own
  `static readonly foldPanel: FoldPanelDefaults` → an app-wide
  `FOLD_PANEL_DEFAULTS` token. So a panel declares its **intrinsic** nature once
  on the class (a cart _is_ non-modal + solid → `open(CartPanel)` with no
  options), an app sets its **identity** once at bootstrap
  (`provideFoldPanelDefaults({ surface: "solid" })`), and the call site is left
  for genuine one-offs. `data` / `providers` / `stack` / `ariaLabel` stay
  per-call. Fully backward-compatible: with no token and no static, every panel
  keeps today's literal defaults (`right` / `490` / modal / `glass`). New
  exports: `FOLD_PANEL_DEFAULTS`, `provideFoldPanelDefaults`, and the
  `FoldPanelDefaults` / `FoldPanelDefaultsProvider` / `FoldPanelSurface` types.
  Specs cover each layer and their precedence.

- **Named panel widths — `width: 'sm' | 'md' | 'lg' | 'xl'`.** A token scale
  (`360 · 490 · 640 · 820px`) replaces the magic pixel number at the call site;
  `md` is the historical default, and a raw `number` still works for a bespoke
  case. Cascades like the rest (`FoldPanelDefaults.width`). New `FoldPanelSize`
  type.

- **`disableClose` — guard the casual close.** Set it (per-call, on the
  component static, or app-wide) to suppress the host's _implicit_ dismiss
  gestures — `Escape` and a backdrop click — for a panel with unsaved edits. The
  header close button and `FoldPanelRef.close()` are unaffected, so the panel
  stays closeable on purpose. Default `false`; orthogonal to `modal`. Specs cover
  Escape + backdrop suppression and that an ordinary panel still dismisses.

### Fixed

- **A vertical `fold-view-nav` / `fold-tabs` rail no longer flips to a crammed
  horizontal bar on a narrow _window_ while its layout keeps it on the side.**
  The shared tab-bar carried a leftover `@media (max-width: 768px)` block that
  rotated `.dir-vertical` items to a row on the **viewport** width. Since the nav
  redesign, orientation is owned entirely by `resolvedDirection` — an explicit
  `direction`, or, inside a `fold-nav-layout`, the layout folding the rail on top
  on its **own** width. The viewport query fought that: when the window dropped
  below `768px` but the nav-layout's own width stayed above `foldAt` (so it kept
  the rail on the side, `is-row`), the items turned horizontal _inside_ the
  vertical rail instead of moving above the content. The block is removed;
  orientation is now purely container-driven, honouring fold's "responsive on its
  own width, never the viewport" contract. A standalone vertical nav that must
  collapse belongs in a `fold-nav-layout` (the container-driven tool).

## [0.6.1] - 2026-07-28

### Changed

- **`fold-tab-panel` now owns the vertical rhythm between its children.** It was
  a neutral `display: block` with no spacing, so stacked `fold-page-section`s (or
  cards) inside a panel sat flush against each other — the page gap only reaches
  the _direct_ children of `.page-body`, and a tab panel isn't one. A panel is a
  content region, like `.page-body`, so it now lays its children out as a flex
  column with a `gap`. The gap is the new **`--fold-panel-gap`** token — fluid
  `16 → 24px`, deliberately one notch tighter than `--fold-page-gap` (`20 → 32px`)
  so panel content reads as one screen rather than distinct page bands. Escape
  hatch unchanged from `.page-body`: wrap two elements in a container to tighten
  them (a single child gets no gap at all). Consumers that re-established this
  spacing by hand on the panel can drop it.

### Fixed

- **`fold-page-layout` header no longer starves the title/description on narrow
  screens.** The head was a permanent `space-between` row: the actions slot held
  its intrinsic width (`flex: none`) while the text column carried `min-width: 0`,
  so wide `[pageActions]` (e.g. two full-label buttons) squeezed the description
  down to its longest word — one word per line, stacked vertically. Below `640px`
  the head now stacks: title/description take the full width and the actions drop
  onto their own row beneath. Keyed to **both** the viewport (`@media`) and an
  ancestor container (`@container`, for the gallery's responsive preview), mirroring
  `app-shell`. The actions slot also gained `flex-wrap` so several wide buttons
  wrap among themselves instead of overflowing the gutter.

## [0.6.0] - 2026-07-28

### Added

- **Larger spacing tokens: `--fold-space-{2xl,3xl,4xl,5xl}`** (24 · 32 · 40 ·
  48px) — the 4px-grid scale extended upward for section padding, page gaps and
  hero bands (it capped at `xl` 20px). Catalogued (`FoldSpaceToken`) + contract-
  tested. A new `pnpm run lint:spacing` gate **fails** on any bare raw-px
  `padding`/`margin`/`gap` under `src/components` (var() theming defaults and
  ≤2px hairlines excepted); wired into pre-push + CI, alongside the now-enforced
  `api:check`.
- **`fold-icon` gains a `tone` input** (`primary` · `secondary` · `muted` ·
  `faded`) — a semantic tint for the icon. Unset (default) keeps the current
  behaviour: the icon inherits `currentColor`, matching its context. Set it to
  override, so a consumer tints an icon through the primitive's own input instead
  of reaching in with a colour class. Exposes the `FoldIconTone` type.
- **Two new UI icons: `archive` and `filter`** — stroke glyphs (`currentColor`),
  the primitives a back-office table toolbar reaches for. Note the existing
  `more-vertical` already covers the "kebab" ⋮ menu trigger.
- **Public-API surface guard** (`scripts/gen-api-surface.ts` +
  `API-SURFACE.md` + `api-surface.spec.ts`, scripts `api:surface` / `api:check`).
  Snapshots every exported symbol and every `input`/`model`/`output` of every
  exported class; the spec fails when the live surface drifts. This catches the
  binding breaks a consumer's plain `tsc` cannot see — Angular templates aren't
  type-checked by `tsc` — forcing an intentional CHANGELOG entry + bump.

### Fixed

- **`fold-tab-panel` now defaults to `display: block`** (was the custom-element
  default `inline`). An inline panel wrapping block content broke height
  propagation inside a bounded, scrolling `fold-page-layout` — a tall tabbed page
  (e.g. a form split across tabs) stopped scrolling. The `[hidden]` state is
  re-asserted so inactive panels still collapse.

### Changed

- **BREAKING — `fold-menu`: `expanded` defaults to `undefined` (unset) and now
  follows `collapsible`.** `<fold-menu collapsible>` boots **expanded** (you
  added a way to collapse, so open is the natural start) and a bare `<fold-menu>`
  boots the icon rail — no `[(expanded)]` needed for the common case. A bound
  value still wins. The model type widened to `boolean | undefined`, so a
  two-way `[(expanded)]="sig"` needs `sig: WritableSignal<boolean | undefined>`
  (or drop the binding and lean on the default). Fixes the DX trap where
  `collapsible` booted collapsed (dev-rule 5.2.4).
- **BREAKING — `fold-tabs`: `activeKey` is now a two-way `model`; the `tabChange`
  output is removed.** Migrate `[activeKey]="k()" (tabChange)="k.set($event)"` →
  `[(activeKey)]="k"` (or keep one-way `[activeKey]` and listen to the model's
  built-in `(activeKeyChange)`). One source of selection, no twin output (dev-rule
  4.12).
- **BREAKING — `fold-view-nav`: `activeKey` is now a two-way `model`; the
  `activeChange` output is removed.** Same migration as `fold-tabs`
  (`[(activeKey)]`, or `(activeKeyChange)`). Link items are unaffected (their
  active state comes from the router).
- **BREAKING — `fold-data-table`: `selected` is now a two-way `model`; the
  `selectionChange` output is removed.** Migrate `[selected]="s()"
(selectionChange)="onSel($event)"` → `[(selected)]="s"` (or one-way `[selected]`
  - `(selectedChange)`). The change payload is now `ReadonlySet<string | number>`
    (was `Set`) — widen your handler's parameter type.
- **Spacing rhythm fully tokenised** — every bare raw-px `padding`/`margin`/`gap`
  in `src/components` (136 declarations) now resolves through a `--fold-space-*`
  token. Exact-grid values are renamed 1:1 (no visual change); off-grid drift
  (6/10/14/18/26…) is snapped to the nearest step (max ±2px). Computed pixels are
  unchanged except for the snapped off-grid handful. Themeable component defaults
  keep their px inside `var(--fold-<component>-*, …)` fallbacks.
- **`fold-paginator`: `pageSize` is now optional** — when omitted it defaults to
  the first of `pageSizeOptions`, so the common case needs only `currentPage` +
  `totalItems`. Non-breaking (a passed `pageSize` behaves as before).
- **`fold-page-section`: `title` now renders a real `<h2>`** — a genuine section
  heading under the page's `<h1>`, replacing the decorative `fold-element-title`
  eyebrow. `headingLevel` still drives `aria-level` (a native `<h2>` at the
  default 2). New `[sectionHeader]` slot projects a bespoke header (e.g. a
  `fold-element-title` with an icon tile) _instead of_ `title`, and a new
  `iconTone` input (forwarded to `fold-icon`'s `tone`; defaults to `secondary`)
  tints the leading icon. The section's vertical rhythm (head↔body gap + the
  `stack` body's item gap) is now a single token, `--fold-page-section-gap`
  (default the `lg` space). Visual change to every section header.
- **`fold-page-layout` gutter & gap defaults are now fluid.** They gain a real
  home in `:root` (they were fixed inline fallbacks of `32px`):
  `--fold-page-gutter: clamp(1rem, 4vw, 2rem)` (16→32px) and
  `--fold-page-gap: clamp(1.25rem, 3vw, 2rem)` (20→32px) — the gutter scales more
  than the gap (horizontal room is tighter on small screens). Override on any
  ancestor (or the element) to retune; set `--fold-page-gutter: 32px` to restore
  the old fixed value. Requires `fold-ng/tokens.css` (components fall back to
  `32px` without it).
- **`pnpm release` now regenerates the demo's generated changelog** after
  stamping `CHANGELOG.md`, so the gallery no longer shows a just-cut version
  under "Unreleased" in local dev (Pages already regenerated on deploy).

## [0.5.2] - 2026-07-27

### Added

- **`fold-listbox` gains a `selectionChange: T` output** — fires when the user
  picks an option, carrying the chosen value and **never `null`**. Use it for
  the common "do X on selection" case to skip the `T | null` narrowing that
  `[(value)]` / `valueChange` force on every handler. Clearing the value (the ×
  affordance) does not fire it — observe `value` / `valueChange` for that.
- **`fold-range-slider` gains a `rangeChange: FoldRangeValue` output** — the same
  ergonomics for ranges: fires on a thumb drag with the resolved `{ min, max }`,
  never `undefined`.

### Changed

- **`fold-card` `separators` / `raisedBands` accept a boolean shorthand.** On top
  of the `FoldCardBandChrome` enum (`none`/`header`/`footer`/`both`), a bare
  attribute (`<fold-card separators>`) or `[separators]="true"` now means `both`,
  and `false` means `none` — the idiomatic Angular boolean-attribute ergonomics,
  while the enum stays for per-band control. Exposes `foldCardBandChrome` (the
  coercion fn) and `FoldCardBandChromeInput`.
- **`pnpm release` gates the full suite (incl. `test:e2e`) locally before
  tagging.** Release tags are protected/immutable, so a tag pushed for a build
  that then fails CI burns that version number (how `0.5.0` was lost). The
  release script now runs `lint · tsc · strictTemplates · vitest · test:e2e`
  (installing Chromium first) up front — a red build aborts with nothing bumped
  or tagged.

## [0.5.1] - 2026-07-27

First published 0.5.x — same tree as the (unpublished, e2e-gated) v0.5.0 tag with the release e2e locator scoped to the first control.

## [0.5.0] - 2026-07-27

### Added

- **`fold-view-toggle` — a segmented single-select.** A compact Cards / Table
  (or density, chart-mode…) switch, generic and zero-domain: pass `options`
  (`{ value, icon?, label?, ariaLabel?, disabled? }`) and bind `[(value)]`. It's a
  real `role="radiogroup"` of `role="radio"` segments — roving tabindex, arrow-key
  selection, `Home`/`End`, disabled-skip — not two independent toggles. `size`
  (`sm`/`md`), `iconOnly`, `activeStyle` (`raised` chip or `accent` brand tint),
  `forced-colors`-aware. New gallery `/view-toggle` page.

- **`fold-password-field` + `revealable` on `fold-input`.** A password input with
  a **live requirements checklist** — a dot per rule that turns on as the value
  satisfies it — built in two layers. `fold-input` gains a reusable `revealable`
  (a show/hide eye toggle on a `type="password"` input); `fold-password-field`
  composes it with the checklist. Rules are **injected**, not hard-coded: a
  `FoldPasswordRule` is `{ label, test }`, so a `RegExp` (`foldRegexRule`), a
  `zod` `safeParse`, a length check or anything drops in — `rules` defaults to a
  sensible policy (`foldDefaultPasswordRules`). `validChange` emits when every
  rule passes; Signal-Forms-native; the checklist is an `aria-live` list that
  labels each row met / not met. The checklist is **redesignable**: project into
  the `[rules]` slot and drive your own markup off the exported live state
  (`#pw="foldPasswordField"` → `pw.checklist()`), with the default list as the
  fallback. The built-in row marker is a `dot` (filling in) or a `check` tick
  (`marker="check"`). New gallery `/password` page.

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

- **`fold-listbox` (+ `fold-option`) — a styleable single-select.** The richer
  sibling of `fold-select` (which wraps a native `<select>`): reach for it when
  options need custom rendering the OS popup can't give — an icon, a second line,
  a status dot. Built on `fold-popover`, so it inherits the native top layer,
  flip/shift positioning, outside-click + `Escape` dismissal and focus return.
  On top it implements the ARIA select pattern — a `role="listbox"` that holds
  focus and drives `aria-activedescendant` — with full keyboard (↑/↓, `Home`/
  `End`, multi-letter type-ahead, `Enter`), a disabled-row skip, and a pure-CSS
  selected check. Signal-Forms-native (`FormValueControl<string>`, so `[formField]`
  and `[(value)]` both work) and shares `fold-input`'s box chrome (sizes, `panel`
  variant). Options are dumb + presentational — each derives its own selected /
  active state from the parent by `computed`, so nothing is pushed in during
  change detection. New gallery `/listbox` page and a Playwright suite. Option
  groups and a filter/combobox variant are tracked for later.

- **`fold-multiselect` — the multi-select sibling.** Same styleable popover +
  `fold-option` rows, but the value is a set (`readonly string[]`): activating a
  row **toggles** its membership and the panel **stays open**. It's a separate
  component, not a `multiple` flag, because the Signal-Forms value type genuinely
  differs from single-select's `string` — keeping `[formField]` / `[(value)]`
  honestly typed (no `any`). `role="listbox"` + `aria-multiselectable`, the same
  keyboard core (`Enter`/`Space` toggle), each selected row keeps its check, and
  the trigger summarises the picks. The keyboard/roving/type-ahead core and the
  option↔owner contract are now **shared** between the two components (a
  `FOLD_LISTBOX_OWNER` token instead of a concrete injection, which also removed
  a circular import). New `/listbox` demo section + a Playwright suite.

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
- **Select family — generic value + a data-driven `[options]` API.**
  `fold-listbox` / `fold-multiselect` / `fold-option` are now generic over the
  option value `T` (was `string`-only): `value` is `T | null` (single) /
  `readonly T[]` (multi), and a `compareWith` input (default `Object.is`) matches
  **object** values by identity — string/number/enum need nothing. On top of
  projected `<fold-option>`, a `[options]="FoldSelectOption<T>[]"` array API links
  the value type to the options at compile time (rich rows via a projected
  `<ng-template #option let-o>`). The type stays honest end-to-end (`T` public,
  the owner token erased to `unknown`, no `any`/`as`).
- **`fold-data-table` — i18n label token.** `provideFoldDataTableLabels` +
  `FoldDataTableLabels` + a `labels` input (same shape as the paginator), so the
  select-all/select-row/sort/loading accessible strings are overridable per
  locale instead of hardcoded English.
- **`/changelog` — the CHANGELOG as a designed timeline.** A new gallery page
  renders `CHANGELOG.md` as a vertical `fold-timeline` (one card per release,
  category-count badges, breaking flagged) — parsed at build into a typed,
  SSR-safe data file (runs pre-tokenised, no runtime markdown, no `innerHTML`).
- **`/lab` — an "in dev" index.** A dedicated menu of exactly the components not
  yet on npm, each linking to its page with the version it ships in. Both the
  list and the `dev` rail badges are derived from each nav item's `since` vs the
  published version, so they clear themselves the moment a release is cut.
- **`pnpm eta` — a read-only release preview.** Prints the next version, the
  derived bump level, and the reasons, straight from the CHANGELOG's
  `[Unreleased]` section — no side effects.

### Fixed

- **0.5 review-hardening pass** (multi-agent review of the release). `fold-data-table`
  accessible strings are now i18n-overridable (were hardcoded); `fold-password-field`'s
  requirements checklist actually **announces** rule flips (the `aria-live` region
  now carries the met/not-met word as text, not just an attribute) and forwards
  the reveal labels; a `forced-colors` + `prefers-reduced-motion` sweep across
  `fold-data-table`, `fold-paginator`, the `fold-input` reveal button, `fold-view-toggle`
  and the select-family trigger; `fold-view-toggle`'s roving tab stop never lands
  on a disabled segment (+ a dev warning for a missing `ariaLabel`);
  `fold-inline-confirm`'s Escape is guarded while `loading`; `fold-dropdown`
  excludes Space from type-ahead; slider spacing tokenised.

- **Select family — a review-driven hardening pass** (`fold-listbox` /
  `fold-multiselect` / `fold-popover`). Closing focus no longer traps: the
  popover only pulls focus back to the trigger when it's still inside the closing
  panel (Escape / pick) or nowhere — a `Tab` out now **advances** to the next
  field like a native `<select>`. Dismissing the popup (Escape, outside-click,
  Tab, or a pick) now marks the field **touched**, so a `required` select that's
  opened and abandoned surfaces its error (blur parity). The trigger's
  `aria-controls` points at the real `role="listbox"` (new `ariaControls` on
  `fold-popover`), the active-row highlight and selected check get a
  `forced-colors` treatment, and `fold-multiselect` membership is a `Set`
  (O(1), not O(n²) across a long list) with the trigger summary collapsing to
  "…, +N". Dev-mode now warns when a control holds a value with no matching
  `<fold-option>`. New: `allowClear` on `fold-listbox` (a clear × once a value is
  picked) and closed-trigger type-ahead (type to pick without opening).

- **`fold-popover` panels are now opaque.** The panel used `surface-raised` — a
  ~5% tint meant to _sit on_ an opaque surface — so on the top layer the page
  bled through (visible while scrolling a long `fold-listbox`). It now composites
  that tint over an opaque `surface-card` base. The popover also publishes its
  trigger width as `--fold-popover-anchor-width`, and `fold-listbox` reads it for
  a `min-width` — so the panel is never narrower than the trigger (a coherent
  select look).

- **Heading inputs no longer leak a native `title` tooltip.** A static
  `title="…"` on a component that has a `title` input both seeds the input _and_
  stays on the host as a real HTML attribute — so `fold-page-layout`,
  `fold-page-section`, `fold-element-title`, `fold-context-card`,
  `fold-empty-state` and `fold-panel-header` rendered their heading a second time
  as a browser tooltip on hover. The reflected attribute is now stripped
  (`host: { '[attr.title]': 'null' }`); `fold-icon` keeps its `title` on purpose
  (it maps to `aria-label`).

### Changed

- **Form-control box metrics are single-sourced** (`_field-box.scss`). The size
  and `panel` dimensions shared by the native inputs (`input-shell`) and the
  select-family triggers (`_listbox-shell`) now live in one Sass mixin, so a
  metric redesign lands in both instead of drifting.

- **CI + release gates now run the Playwright browser tier.** The `test:e2e`
  suite (native popover top layer, focus, positioning — behaviour jsdom can't
  reach) is wired into both `ci.yml` (inside the single required `ci` job) and
  `release.yml`, so a PR or a tag can't go green on a broken overlay.

- **The release bump is derived from the CHANGELOG.** `pnpm release` with no
  argument now reads `[Unreleased]` and derives patch/minor/major (0.x-aware:
  breaking → minor, features → minor, else patch) — the changelog you curate
  defines the version. An explicit level still overrides. Parser + derivation
  live in a shared `scripts/lib/changelog.mjs`, reused by the release flow, the
  `pnpm eta` preview, and the `/changelog` page.

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

[unreleased]: https://github.com/hugoheynard/fold-ng/compare/v0.7.0...HEAD
[0.7.0]: https://github.com/hugoheynard/fold-ng/releases/tag/v0.7.0
[0.6.1]: https://github.com/hugoheynard/fold-ng/releases/tag/v0.6.1
[0.6.0]: https://github.com/hugoheynard/fold-ng/releases/tag/v0.6.0
[0.5.2]: https://github.com/hugoheynard/fold-ng/releases/tag/v0.5.2
[0.5.1]: https://github.com/hugoheynard/fold-ng/releases/tag/v0.5.1
[0.5.0]: https://github.com/hugoheynard/fold-ng/releases/tag/v0.5.0
[0.4.0]: https://github.com/hugoheynard/fold-ng/releases/tag/v0.4.0
[0.3.0]: https://github.com/hugoheynard/fold-ng/releases/tag/v0.3.0
[0.2.1]: https://github.com/hugoheynard/fold-ng/releases/tag/v0.2.1
[0.2.0]: https://github.com/hugoheynard/fold-ng/releases/tag/v0.2.0
[0.1.0]: https://github.com/hugoheynard/fold-ng/releases/tag/v0.1.0
