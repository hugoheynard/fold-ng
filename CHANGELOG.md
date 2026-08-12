# Changelog

All notable changes to **fold-ng** are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/); the project follows
[Semantic Versioning](https://semver.org/).

## [Unreleased]

_Nothing yet._

## [0.10.2] - 2026-08-12

### Changed

- **A `fold-nav-layout` hands its content a zero gutter below 640px.** The bar
  spans the layout's full width, so a gutter under it insets the cards _relative
  to the menu that names them_ — they stop reading as one column. It is also
  pure loss on a phone: 2 × 16px off a ~360px reading width. Handed down as
  `--fold-page-gutter: 0` on the body rather than selected as a child: a custom
  property crosses view encapsulation, so it reaches a nested `fold-page-layout`
  (or a `bleed` section, which stays in lockstep) without the layout having to
  know what its content is. Vertical rhythm untouched.

- **`fold-page-layout` halves its gutter below 640px** —
  `calc(var(--fold-page-gutter) / 2)`, so a page or theme that retuned the token
  gets _its_ value halved, and a `fold-page-section[bleed]` still cancels it
  exactly.

- **The nav↔content gap drops to the smallest step below 640px** (8 → 4px). The
  bar and its first card are one block; the seam only has to be visible, not
  roomy. `--fold-nav-layout-gap` still wins at every width.

## [0.10.1] - 2026-08-12

### Fixed

- **A `side="auto"` panel now docks to the bottom on a narrow host.** It got the
  bottom-sheet _shape_ (content height, rounded top, slide-up, grabber) but not
  its _alignment_: the rule that pinned it, `align-items: flex-end`, selected
  `.panel-dock` from **inside** the dock's own `@container` query — and an
  element can never match its own container query (`container-type` makes it a
  container for its _descendants_). The sheet kept the dock's default `stretch`
  and filled the whole region, which reads as a sheet stuck to the top of the
  screen. The alignment now rides on the panel (`align-self`), a real
  descendant. Regression test in `e2e/panel.spec.ts` — a **wide viewport with a
  narrow stage**, because shrinking the viewport instead lets some ancestor
  container match ≤640 and answer the query in the dock's place, hiding the bug.

- **A `background="surface"` tab bar is opaque.** `fold-view-nav` / `fold-tabs`
  painted the rail-3 role, which is a 3% white **overlay** — so a bar a consumer
  pinned with `position: sticky` had page content scrolling visibly through it.
  The overlay is now layered over the page fill. On the page background — where
  a filled bar belongs — the paint is unchanged; anywhere else it is opaque,
  which is what "carries its own surface" always claimed.

### Changed

- **Tighter insets below 640px.** Three defaults step one notch down the spacing
  scale on a phone, where a horizontal inset is charged twice against a reading
  width that has none to spare: the nav↔content gap (`fold-nav-layout` and a
  standalone `fold-view-nav`, 16 → 8px), the `fold-card` body and chrome padding
  (16 → 12px, 12/16 → 8/12px), and the panel host's template-panel body
  (16 → 12px, keyed to the dock's width, not the viewport). Every one keeps its
  override: `--fold-nav-layout-gap`, `--fold-card-padding` and the card's
  `padding` input (`p-sm` / `p-lg` / `p-none`) still win at every width — an
  author who asked for a generous card meant it.

## [0.10.0] - 2026-08-11

### Changed

- **BREAKING — `fold-file-dropzone` defaults to English copy.** `label` was
  `"Glissez un fichier ou parcourez"` and `busyLabel` `"Téléversement en
cours…"`; they are now `"Drag a file or browse"` and `"Uploading…"`. Both were
  always inputs, so the fix for a French app is to pass the old strings — but a
  library that defaults to one natural language makes every other consumer
  override it just to be readable, which is the portability promise leaking. It
  was the last of the seven release blockers in `docs/RELEASE-READINESS.md`.

- **BREAKING — identical toasts collapse instead of stacking.** A `show()` whose
  message _and_ variant match a toast already on screen now folds into it as a
  `×N` tally and restarts its countdown, rather than queueing a copy: a retry
  loop used to bury the screen under the same sentence. Opt out with
  `provideFoldToasts({ dedupe: false })`. `FoldToast` gained a required
  `repeats` field, so anything constructing that type by hand must supply it.

- **`FoldToastService.show()` returns the toast's id** (it returned `void`). The
  id was generated and thrown away, which made a sticky "Uploading…" impossible
  to close from the code that opened it. A deduped call returns the id of the
  toast it folded into. Ids now come from `FoldIdService`'s counter rather than
  `crypto.randomUUID()`, which **throws outright** in a non-secure context
  (plain http off localhost) and whose randomness bought nothing for an id that
  only has to be unique within one queue.

### Added

- **`fold-info` — the `i` that answers "what is this?", now a primitive.** The
  affordance shipped inlined in the field label row; it is extracted so the same
  bubble works where there is no field at all — a dashboard card's corner, a
  table header — which is exactly where the second consumer had hand-rolled it
  (LaFolieDouce's admin: ~30 sites across the growth dashboard and the booking
  rules). `text` · `label` (accessible name, English default) · `placement`.
  `fold-input-base` now composes it instead of carrying its own copy, so the
  `info` input on every labelled field renders the same component. A click, not
  a hover: hover-only help is unreachable on a touch screen.

- **`maxVisible` bounds the toast stack.** Beyond the cap the oldest toast is
  evicted — it has been on screen longest, so it is the one already read. Unset
  (the default) stays unbounded. Deliberately eviction and not a waiting queue:
  a queue only drains when a visible toast leaves, and a sticky one — an
  `error`, by default — never does, so the backlog would sit behind it forever.

- **`fold-toast` pauses its countdown while it is being read.** Hovering the
  toast, or moving the keyboard focus into it, freezes the auto-dismiss timer;
  leaving resumes it with **the time that was left**, not a fresh `duration` —
  a toast that renewed itself on every mouse pass would never leave. Focus
  moving between the message and the close button counts as staying inside.
  This is WCAG 2.2.1 (Timing Adjustable): the previous timer ran regardless, so
  a message could expire mid-sentence, or while the pointer was travelling to
  its ✕. The paused state is exposed as `data-paused` for styling.

- **`info` on every labelled input — the explanation a `hint` can't carry.** An
  `i` button at the end of the label line reveals a sentence or two in a
  `fold-popover`. Lives in `fold-input-base`, so it lands on the whole family at
  once: `fold-input`, `fold-number-input`, `fold-select`, `fold-textarea`,
  `fold-date`, `fold-time`, `fold-listbox`, `fold-multiselect` (`[info]`, plus
  `[infoLabel]` for the button's accessible name, default `More information`).
  Composes with `hint` rather than replacing it — short line under the control,
  the _why_ behind the `i`. The panel rides the popover's native top layer, so a
  long explanation never pushes the next control down, and it escapes any
  `overflow: hidden`. Consumers were hand-rolling this: LaFolieDouce B2B had a
  bespoke absolutely-positioned bubble anchored to each field wrapper.

### Fixed

- **Opening a panel no longer shoves the page sideways.** The main content
  jumped left by the panel's width and eased back — a long-standing glitch whose
  cause turned out to be neither of the two suspects (an inner scrollbar, a
  `backdrop-filter` repaint). Measured frame by frame: a panel begins its enter
  animation parked off-edge at `translateX(100%)`, the dock did not clip, so the
  parked panel joined the positioned host's **scrollable overflow**
  (`scrollWidth` 960 → 1221 on the gallery); the focus trap then moved focus into
  it and the browser scrolled the host sideways to reveal it
  (`scrollLeft` 0 → 261); the slide-in shrank the overflow again and the scroll
  was clamped back frame by frame, hence the eased return. Fixed with
  `overflow: clip` on the dock — a parked panel has no business in anyone's
  scrollable overflow — plus `focus({ preventScroll: true })` when a focus trap
  activates, since entering an overlay must never scroll the page behind it.
  `e2e/panel.spec.ts` samples the whole animation and fails on any sideways
  scroll; jsdom cannot see this class of bug at all.

- **A horizontal tab bar that doesn't fit now scrolls instead of clipping its
  tail.** `fold-view-nav` and `fold-tabs` share a bar whose host clipped its
  overflow while its items never wrap — so on a phone, the last entries of a
  four-item `size="comfortable"` bar simply vanished, and with them any way of
  reaching those pages. The host now scrolls on the inline axis (thin house
  scrollbar, `overscroll-behavior-x: contain`) and the bar keeps its natural
  width. Vertical rails are untouched — the page scroll already covers them, and
  an inner scroll box there would trap the wheel — and so is `collapsed`, the
  icon accordion, which is designed to fit any width and needs its overflow
  visible for its tooltips.

## [0.9.0] - 2026-08-04

### Changed

- **BREAKING — the shell owns the content scroll by default; pages flow.** The
  all-in-one scroll model (`docs/scroll.md`), slice A. `fold-app-shell`'s
  `contentScroll="clip" | "auto"` input is **renamed and reshaped** to
  `scroll="scroll" | "stage"`, and the **default flips**: the shell's content
  region now owns the scroll (`scroll`, was `clip`/page-owns), so a
  `fold-page-layout` inside it no longer double-scrolls. `fold-page-layout` gains
  `scroll="flow" | "own"` and **defaults to `flow`** — it owns no scroll box and
  flows inside the shell. Net effect for a normal page: identical, minus the P0
  bug where a `footerBehavior="scroll"` footer sat below an unreachable
  `overscroll-behavior: contain` boundary (this **deletes the LaFolieDouce B2B
  `!important` workaround**). The scroll lives on an **inner** box, never the
  content region itself, so a docked panel anchored to the region stays fixed
  over the frame. Migration: a page that must scroll as a self-contained unit
  (a split view whose shell must not move) sets `fold-app-shell scroll="stage"`
  and/or `fold-page-layout scroll="own"`. A short page still pins a trailing
  `scroll` footer to the bottom (the content grows to fill), replacing the old
  `margin-top: auto` glue.

- **`@angular/router` is now a declared (optional) peer dependency.** `fold-view-nav`
  imports `RouterLink`/`RouterLinkActive`, but the package only listed router as a
  devDependency — an undeclared peer that happened to resolve because every Angular
  app ships Router. It's now in `peerDependencies` with `peerDependenciesMeta:
{ "@angular/router": { optional: true } }`, so apps that use the router-coupled
  nav components (view-nav, and the new breadcrumb / back-link) get a correct
  install signal, while apps that don't aren't forced to add it (those components
  tree-shake out). No API change.

- **`FoldPanelHostService.open()` accepts an optional-data panel without a manual
  type widen.** A panel whose `data` input is optional (`data = input<T>()` →
  `InputSignal<T | undefined>`) used to force `open<T | undefined, R>()` to dodge
  a `TS2345` (hit by the LaFolieDouce B2B PickupPanel). `FoldPanelContent<T>.data`
  is now typed as the covariant **read** side (`Signal<T | undefined>`) instead of
  the invariant `InputSignal<T>`, so both a required (`input.required<T>()`) and an
  optional data input satisfy the contract — `open(Cmp, { data })` infers `T` from
  the value with no widen, and the data value stays type-checked. Non-breaking for
  existing panels (an `InputSignal<T>` still assigns to the contract).

### Added

- **House scrollbar tokens + `overflow-anchor` — scroll-system Slice C.** The
  shell content scroll box and every `[foldScrollRegion]` now paint one tokenised
  scrollbar: `--fold-scrollbar-size` / `-radius` / `-thumb` / `-track`, with the
  thumb derived from the surface's own text so it adapts per theme **and** per
  surface (a chrome rail vs the page). Standard `scrollbar-width`/`scrollbar-color`
  everywhere, plus a `@supports selector(::-webkit-scrollbar)` layer (shipped in
  `tokens.css`) for the thumb radius on Blink/WebKit. Both regions also set
  `overflow-anchor: auto` so the reading position survives content reflowing above
  them. (The `--fold-scrollbar-*` knobs are component vars, out of the colour
  catalogue — retune them on any ancestor. The viewport-**resize** anchoring
  correction, which native `overflow-anchor` doesn't cover, is a deferred
  follow-up — see `docs/scroll.md`.)

- **`[foldScrollRegion]` + the shell scroll registry — scroll-system Slice B.**
  The one opt-in of the scroll model (`docs/scroll.md`): with `fold-app-shell`
  owning the page scroll, a layout that needs an independently-scrolling area (a
  split list/detail, a data-table body, a sticky sidebar, a panel body) marks it
  with `[foldScrollRegion]` instead of hand-rolling `overflow`. The directive sets
  the three foot-guns (`overflow`, `min-*: 0`, `overscroll-behavior: contain`) and
  the thin house scrollbar, and takes an axis (`block` default · `inline` · `both`).
  It **registers with the new `ScrollRegionRegistry`**, which the shell also feeds
  with its own content scroll box; the panel host freezes the registry when a
  modal opens, so the page stops scrolling behind the overlay even though the
  scroll owner is an inner box, not `document.body`. Freezing toggles a
  `.fold-scroll-frozen` class (`overflow: hidden !important`, shipped in
  `tokens.css`), never an inline write, so a region's own overflow is never
  clobbered. Registry injection is optional, so the directive is a useful bounded
  scroll box even without a shell. Gallery `/scroll-region`; 19 specs. (Migrating
  the data-table / panel bodies onto it is deferred — they already scroll
  correctly; the win there is registry coordination, not the overflow.)

- **`fold-back-link` — the “← Back” affordance for a detail page.** Three modes,
  picked by which input is set: an in-app `routerLink`, a plain `href`, or — with
  neither — a `<button>` that goes **back in history** (`Location.back()`).
  Router-coupled but degradable (the history mode needs no router; `RouterLink`
  only instantiates on a `routerLink`). Gallery `/back-link`; 4 specs.

- **`fold-breadcrumb` — a hierarchical link trail.** Data-driven: pass `[items]`
  where each crumb links by an Angular `routerLink` **or** a plain `href`, so it
  works in a router app and degrades to anchors without one (importing it never
  forces `@angular/router` — `RouterLink` only instantiates on a crumb that sets
  `routerLink`). The last item renders as the current page (`aria-current="page"`),
  never a link; it's a `navigation` landmark with decorative chevron separators.
  Gallery `/breadcrumb`; 5 specs.

- **Panel bottom sheet (`side: 'bottom'`) + responsive `side: 'auto'`.** The panel
  host gained two docking edges beyond `left`/`right`: `bottom` is a full-width
  sheet whose height is content-driven up to a max (`85dvh`) with the body
  scrolling, slides up, rounded top, and a top **grabber** that taps to dismiss
  (honours `disableClose`). `auto` docks **right on a wide host, bottom on a
  narrow one** — the switch is container-driven via `@container` on the panel
  host's own inline-size (fold's "responsive on its own width", not the viewport),
  so it reacts to the content region, not the screen. All the modal machinery
  (focus-trap, `inert` barrier, scroll-lock, `disableClose`) is edge-agnostic and
  reused as-is. Motivated by the LaFolieDouce storefront cart on mobile. Gallery
  `/panel` gained “Bottom sheet” + “Auto (by width)” triggers; +6 host specs.
  (Pointer-drag-to-dismiss on the grabber is a deferred nice-to-have.)

- **`fold-panel-footer` — the action bar for panels/dialogs.** Pairs with
  `fold-panel-header`: the tokenised bar at a panel's bottom edge (glass top
  border + padding + button alignment), so a panel no longer hand-rolls a
  `<footer class="foot">`. `align="end"` (default — the Annuler/Confirmer pair)
  · `between` (a leading total + trailing actions) · `start`. Sits with
  `flex: none`, so it stays pinned while the body scrolls — no `position: sticky`.
  Probed against the 2nd consumer (LaFolieDouce): **17** hand-rolled panel footers
  across its 3 apps, so it earns a primitive. Gallery `/panel` “Panel footer”; 3 specs.

- **`fold-danger-zone` — the destructive-action block.** A framed region for
  “delete X” settings: a title, a projected explanation, and a guarded action.
  **Two appearances** — `filled` (alert-tinted block) and `section`, a danger
  _section_ with a **normal-background body** so it can host ordinary content, only
  the frame + heading signalling danger (the GitHub “Danger Zone” look). The
  destructive control's confirm **reveals on click**: an `actionLabel` button
  opens an in-place `fold-inline-confirm` — a plain “are you sure?”, or a
  type-to-confirm field when `confirmPhrase` is set (the input is never shown until
  the button is clicked). `(confirmed)` emits the typed text (or `""`); omit
  `actionLabel` for a framed section with no action. `role="group"` +
  `aria-labelledby`. Gallery `/danger-zone`; 5 specs.

- **`fold-multiselect` bulk actions — `allowSelectAll` / `allowClear`.** A sticky
  bar at the top of the panel offers **Select all** (adds every enabled option,
  skipping disabled rows and preserving an already-picked disabled one) and
  **Clear** (empties the set). Each button is gated — select-all disables once
  everything enabled is picked, clear disables while empty. Labels are overridable
  (`selectAllLabel` / `clearLabel`). The panel is now a wrapper around the
  `role="listbox"` (the bar sits outside it, so it stays valid ARIA). Gallery
  `/listbox` multiselect tab enables both; 5 specs.

- **`fold-optgroup` — labelled option groups for the styleable selects.** The
  counterpart to the native `<optgroup>`: wrap `<fold-option>`s in
  `<fold-optgroup label="…">` to sort a long list into sections. Purely
  presentational — the owning `fold-listbox` / `fold-multiselect` now discovers
  options with a `descendants: true` query, so grouped options join the same
  flat, document-ordered list the roving keyboard core walks; the header carries
  `role="group"` + `aria-labelledby` (no `role="option"`), so nav skips straight
  over it. Also supported in the data-driven **`[options]` array API**: an entry
  is a `FoldSelectOption<T>` or a labelled `FoldSelectOptionGroup<T>` (mix both),
  narrowed by the exported `isFoldSelectOptionGroup` guard. Gallery `/listbox`
  “grouped” tab shows both forms; specs cover projected + array discovery,
  cross-group roving and selection.

- **The icon devtool browses by category.** `FoldIconDevtoolComponent` now
  groups the live registry into **collapsible sections** — UI · Navigation ·
  Commerce · Music · Status · People · Brands (+ a **Custom** bucket for
  host-registered icons) — each with its icon count; a search only surfaces the
  categories it hits. New public `FOLD_BUILTIN_ICON_CATEGORIES` (+ `FoldIconCategoryId`)
  is the single source of truth for the grouping (each icon file owns its slice).

- **`fold-ng/devtools` now builds as a real ng-packagr secondary entry**, so
  `import("fold-ng/devtools")` resolves for **published (npm) consumers**, not
  only source-consumed ones. It compiles to its own FESM + `d.ts` and imports the
  primary `fold-ng` by name; `finalize-dist` normalises ng-packagr's flattened
  `./src/devtools` export to the public `./devtools` subpath (+ a node10 directory
  manifest). `attw` all-🟢, `publint` clean. The api-surface guard was generalised
  to snapshot every published entry point (`.` + `./devtools`).

- **`fold-ng/devtools` — an opt-in dev-tools entry, starting with
  `FoldIconDevtoolComponent`.** A **dev-only** floating panel that browses the live
  `FoldIconRegistry` (built-ins + whatever the host app registered), with a search,
  a preview grid, and a mini playground that builds a `<fold-icon>` snippet and
  copies it. The panel is **draggable** (grab the header) and **minimisable**
  (collapses to a pill). Published from a **separate entry** so it never lands in a
  bundle that doesn't ask for it — import it behind a dev guard
  (`if (isDevMode())` + a dynamic `import("fold-ng/devtools")`) so production
  tree-shakes it away. Dogfooded in the gallery (primary-rail "Dev tools" + the
  `/icons` hero CTA).
- **`FoldIconRegistry.names()`** — the sorted list of every registered icon name
  (built-ins + runtime additions), reactive. Powers catalogue tooling (the icon
  devtool).

- **A `commerce` icon category — 21 e-commerce glyphs.** The built-in set had no
  cart, catalogue, payment or fulfilment icons, so a consumer reused `package` as a
  placeholder for both a cart and a delivery tab (`docs/consumer-friction.md` Round
  4 #3). New `COMMERCE_ICONS` (the 7th category, wired into `FOLD_BUILTIN_ICONS` and
  the `/icons` gallery): `shopping-cart` · `shopping-bag` · `basket` · `package` ·
  `package-check` · `tag` · `tags` · `barcode` · `qr-code` · `gift` · `credit-card`
  · `wallet` · `receipt` · `coins` · `banknote` · `percent` · `truck` · `store` ·
  `warehouse` · `map-pin` · `package-return`. Same self-contained inlined-SVG /
  `currentColor` contract; names autocomplete on `FoldIconName`.

- **`fold-textarea` — the multiline sibling of `fold-input`.** Same box chrome
  (tokens, sizes, `panel` variant, focus/disabled) via `input-shell.scss` and the
  same label / required / hint / error chrome via `fold-input-base` — so a note
  field is no longer a hand-rolled native `<textarea>` + copied box CSS. **No
  resize handle by design**: the box keeps its `rows` height and **wraps +
  scrolls** overflow (`resize: none; overflow-y: auto`), so a user-dragged corner
  can't break a panel layout. `FormValueControl<string>` (`[formField]` or
  `[(value)]`).
- **`fold-date` + `fold-time` — the temporal-field wrappers.** Two sibling
  controls (distinct selectors for call-site clarity, the same "one control, one
  job" split as `fold-input` vs `fold-number-input`): `fold-date` wraps the native
  `<input type="date">` family (`type`: `date` · `datetime-local` · `month` ·
  `week`), `fold-time` wraps `<input type="time">`. Both wrap the native control
  the way `fold-select` wraps `<select>` — keeping the OS calendar/clock + mobile
  keyboard — and hand back a **typed `[(value)]`** (the native string, `YYYY-MM-DD`
  / `HH:mm`), so consumers stop hand-writing an `inputValue($event)` reader.
  `min` / `max` / `step` pass through; both share the `fold-input` box + field
  chrome. **Not** a calendar popover (that's the `fold-calendar` family) — the plain
  fields. `FormValueControl<string>`.
- Surfaced by the 2nd consumer (LaFolieDouce B2B); see `docs/consumer-friction.md`
  Round 4 #2. The shared `_field-box.scss` `size()` mixin gained a `$height: false`
  opt-out (a `<textarea>`'s height is content-driven), and `readInputValue` now
  reads `<textarea>` targets.

## [0.8.1] - 2026-08-02

### Changed

- **The visual-snapshot tier is no longer a release gate.** Pixel screenshots
  against a live dev server drift for reasons that are not a regression — a
  scrollbar toggling or a font hint moves the frame ~20px — and the baselines
  are per-platform, so gating on them turned the release red on Linux CI _and_
  intermittently on the Mac it was cut from. The shots are now tagged `@visual`
  and run only via `pnpm test:e2e:visual` (a local eyeball aid); the gate
  (`test:e2e`, used by CI and `pnpm release`) excludes them. The geometry that
  matters stays gated, and stably, by measurement in `calendar.spec.ts`. `0.8.0`
  was tagged but never published because of this — `0.8.1` is the first published
  cut of the 0.8 line, and carries the whole calendar family.

## [0.8.0] - 2026-08-02

### Added

- **A calendar family, starting with `fold-calendar-month` and the plain-date
  model it stands on.** The grid is a date axis: seven columns of whole days,
  and over them a layer of **bands**, each stretching from the column its event
  starts on to the column it ends on. A span crossing a week is drawn once per
  week with an open edge on the side that continues, so a three-week holiday
  reads as one thing rather than twenty-one chips. Bands pack into lanes
  (earliest start, then longest) under a `maxLanes` budget, and whatever will
  not fit becomes an overflow chip **in the column of each day that lost
  something** — a hidden span counts against every day it would have covered,
  so the chip says _which_ day to open rather than only that the week is
  crowded, and `overflowClick` emits that day. Events sharing a `groupId`
  collapse into one chip spanning the union of their ranges and carrying the
  count; a half-day edge is kept only on the segment holding the event's real
  edge. Inputs cover `weekStartsOn` (any anchor, not just Monday), `fixedWeeks`,
  `locale` and `labels`; `month` is a two-way `model`, so keyboard paging writes
  back. Project an `<ng-template foldCalendarEvent>` to replace the built-in
  chip. Generic over `T`, so an event's `data` survives the round trip to
  `eventClick` without a cast.
- **`fold-calendar-agenda` — a rail of what is still ahead, grouped by day.**
  The counterpart to the grids: they answer "what does this month look like",
  it answers "what do I do next". Its `todo` slice keeps only the events asking
  for attention — the `warning` and `alert` tones, the **same scale the chips
  paint with**, so the rail needs no second notion of urgency — and carries the
  count as a badge. An event already running is filed under the boundary rather
  than its real start, so a three-week absence that began last week sits at the
  top of what's next instead of in a past day the rail never shows. Days inside
  the next week are named relatively ("Today", "Tomorrow", then the weekday),
  which reads faster than a date at that distance. `mode` and `collapsed` are
  two-way `model`s — persist the collapse if you want it to stick; the package
  stores nothing. Pure `foldBuildAgenda` / `foldCountActionable` behind it.
- **`fold-calendar-source-filter` — chips that switch each feed of a merged
  calendar on and off.** A calendar usually merges several feeds (a programme,
  staff leave, contracts); an event names its own with `sourceKey`, a
  `FoldCalendarSource` declares the label and dot, and the chips count what each
  contributes. They own the **selection only** — the caller runs the pure
  `foldFilterBySource()` over its own events, so the chips never learn how
  anything is fetched. An event with no `sourceKey` belongs to no feed and no
  chip can hide it. Each chip is a real toggle (`aria-pressed` in both states)
  whose accessible name says which feed and whether it is showing, because the
  tick and the dot are colour and colour cannot be the only carrier.
- **`fold-calendar-toolbar` — the chrome that makes the views one calendar.**
  Jump to today, page back and forward, the period's name, and the view switch.
  It owns no data: both pieces of state are two-way `model`s, so a page binds
  the same `date` and `view` it hands the view on screen and paging works with
  no output handler. The step matches the reading — a month under the month
  view, a week under the week view, a day under the day view. The title carries
  `aria-live="polite"`, so paging announces where a keyboard user landed instead
  of changing silently. Backed by pure `foldShiftDate`, `foldRangeForView` (the
  window a caller fetches — the whole painted grid for a month, not just its
  days) and `foldViewTitle`.
- **The three column views that complete the drill-down: `fold-calendar-week`,
  `fold-calendar-day` and `fold-calendar-list`.** Where the month grid packs
  spans into lanes, these simply list what covers each day — so nothing is
  clipped and no lane budget can hide anything. `week` is seven day columns;
  `day` is one day in full, with a tag-qualified `button[empty]` slot for a "new request" action
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
  `foldWeekdayOf`, `foldIsWeekend`, `foldIsCalendarDate`, `foldToNativeDate` and
  `foldFromNativeDate` (the inbound bridge — the conversion every consumer would
  otherwise write as `toISOString().slice(0, 10)`, which is the very timezone bug
  this design exists to remove), plus the layout entry points
  `foldBuildMonthGrid`, `foldBuildWeek`, `foldBuildDay`, `foldEventsOnDay`,
  `foldEventsInRange` and `foldFilterBySource`. Supported range is
  `0001-01-01`–`9999-12-31`: the four-digit year is what makes the lexicographic
  guarantee hold, so it is enforced rather than assumed.
  `fold-timeline` keeps a native `Date` on purpose — it plots dated _instants_,
  which is the other domain.
- **Month and weekday names come from `Intl`, not from a label token.** The
  `locale` input drives `Intl.DateTimeFormat`, so every locale works without
  hand-translating twelve month names; `FoldCalendarLabels` (with
  `provideFoldCalendarLabels`) covers only what `Intl` cannot supply — the today
  marker, the overflow chip and the event count.

- **Everything the calendar draws _around_ an event is a projectable template.**
  The chip was replaceable from day one; the containers were not, which had it
  backwards — an app could restyle the smallest unit and not the cell behind it.
  Four more `<ng-template>` seams, each with a typed context and an
  `ngTemplateContextGuard` (so `let-` variables are real types under
  `strictTemplates`, not `any`): **`foldCalendarDay`** replaces the inside of a
  month cell — the hook for a public holiday, a closure, "3/8 staffed";
  **`foldCalendarHeading`** replaces the agenda's day heading;
  **`foldCalendarTitle`** replaces the toolbar's `<h2>`, which also lets a page
  give the title the heading level its outline needs; **`foldCalendarOverflow`**
  replaces the `+N` chip. Alongside them, `dayModifiers: (day) => string[]`
  emits an app's own names as one `data-fold-day-modifiers` attribute, matchable
  with `[data-fold-day-modifiers~="holiday"]` — so nobody has to write CSS
  against an internal class name. `foldCalendarEvent` is now generic too, so
  `event.data` comes back as the app's own record.
- **`fold-calendar-timegrid` — the reading the other four cannot give: when
  _inside_ a day.** Hour columns for a week or a single day (`dayCount`), with
  the all-day strip on top. A meeting is a block whose height is its duration
  and whose width is shared with whatever it collides with; an absence is a band
  across the strip, spanning days through **the same packer the month grid
  uses** — extracted rather than copied, so a three-day leave request reads
  identically in both.

  Time is modelled as wall-clock `HH:mm` (`FoldCalendarTime`), **not an
  instant** — the same decision as the date, for the same reason: 09:00 is the
  hour on the wall, and an instant re-derives that from a zone every render,
  which is one wrong default away from drawing the wrong hour. The app converts
  once at its own boundary.

  Two details that are the difference between a real time grid and a demo: the
  overlap test is **exclusive** at the boundary, so back-to-back meetings keep
  the full width instead of each taking half; and events are grouped into
  **clusters**, so one triple-booked morning does not narrow an unrelated
  afternoon. A span crossing midnight becomes one block per day, each with the
  right open edge, rather than one impossible block running off the bottom.

  `now` is an input, never a clock the package reads — `today` already works
  that way, and a server render that invented one would hydrate to a different
  position. Positions are **fractions of the visible window**, so `dayStart` /
  `dayEnd` and the CSS height stay independent. Backed by pure
  `foldBuildTimeGrid` and `foldLayOutOverlaps`.

- **`foldFromTemporal` — the family is Temporal-native without depending on
  it.** `Temporal.PlainDate.toString()` **is** `YYYY-MM-DD`: the primitive
  chosen for correctness turns out to be exactly Temporal-shaped, which no
  `Date`-based calendar can say. The bridge accepts a `PlainDate`,
  `PlainDateTime` or `ZonedDateTime` — typed structurally, so it compiles and
  runs on an engine that has none of them — and drops the time, which is what a
  whole-day calendar wants **and** keeps the day the value itself means rather
  than the one UTC would have picked. The other direction needs no helper:
  `Temporal.PlainDate.from(foldDate)` already accepts one of ours.
- **The week now comes from the locale, not from a guess.** `Intl.Locale`
  knows which day a locale's week opens on and which days it rests — most
  calendars stop at the month names and hard-code Monday, which is right in
  Paris and wrong in Chicago, Cairo and Malé. `weekStartsOn` and `weekendDays`
  default to `foldLocaleWeekInfo(locale)` and stay overridable, so the common
  case needs no input at all. Both `getWeekInfo()` and the older `weekInfo`
  getter are probed, and a runtime with neither falls back to Monday + Sat/Sun.
- **ISO week numbers, as an optional leading column.** `showWeekNumbers` on
  `fold-calendar-month`, backed by `foldIsoWeek` / `foldIsoWeekYear`. ISO weeks
  start on Monday and belong to the year holding their **Thursday**, so they are
  deliberately _not_ derived from the calendar's own anchor — 1 January is
  sometimes week 53 of the year before, which is the whole point of the rule and
  the reason European B2B reporting asks for it. The column is a real grid
  track, so every placed element — cells, bands, overflow chips — shifts with it.
- **A `formats` input beside `labels`.** Labels let a locale translate; this
  lets it **reformat**. Every `Intl` option bag the family uses lives in one
  table (`FOLD_CALENDAR_FORMATS`, now exported); `formats` merges over it per
  instance — a narrow weekday header, a numeric month, a four-digit year.
- **A print stylesheet for the month.** Browsers drop backgrounds but keep text
  colour, so a dark theme printed as-is is light-on-white — unreadable. The
  print block re-expresses everything in system colours (`Canvas`/`CanvasText`/
  `GrayText`), which are neither theme tokens nor hard-coded values, and asks
  for ink on exactly one thing: the tone bar, the last cue telling two bands
  apart on paper.
- **The month layout is ~5× faster, and the benchmark ships with it.** The cost
  was never the algorithm — it was the representation: every comparison in the
  candidate sort called `foldDaysBetween`, which re-parsed two strings and built
  two `Date`s, and the whole feed was re-filtered once per week row. Spans now
  carry epoch-day bounds computed once, rows are bucketed in a single pass
  (`O(rows × N)` → `O(N)`), and clipping is integer arithmetic. The public model
  is unchanged — this is internal only. Measured on a month layout, mean of 20:
  1 000 events 4.8 ms → **0.99 ms**, 5 000 28.9 → **5.0**, 20 000 124 → **22**.
  `pnpm bench:calendar` re-runs it against a committed budget and exits non-zero
  when a size blows it.
- **`foldCalendarNextFocus` is public — the geometry tier is now complete.**
  The pure builders (`foldBuildMonthGrid`, `foldBuildWeek`, `foldBuildDay`,
  `foldBuildAgenda`) and the period functions (`foldShiftDate`,
  `foldRangeForView`, `foldViewTitle`) let an app lay a calendar out and draw it
  its own way; the arrow-key map was the one piece missing, and a hand-rolled
  date grid owes its users the same keyboard as the built-in one. Documented as
  a **tier** in the README rather than left as an accident of what happened to
  be exported. `foldFocusDayCell` deliberately stays internal: it reads a
  `data-fold-day` attribute this package writes, and exporting it would freeze
  that attribute into the public contract.
- **The view switch is open.** `FoldCalendarView` keeps the four built-ins as
  autocompleting literals but accepts any string, and `views` takes
  `{ value, label }` — so an app's own reading (a resource grid, a timeline) can
  sit in the same toolbar without the library knowing about it. Paging and
  titling an unrecognised view fall back to month semantics, which always lands
  on a real date.
- **A `FoldCalendarDay` now carries its own `eventCount` and `hiddenCount`.**
  Both were previously recomputed per cell per change-detection cycle (an O(N)
  filter, with an allocation, 35 times a tick) or exposed as a positional
  `hiddenByDay` array only readable when crossed with the row's dates. Counting
  once while the grid is built is both cheaper and self-describing, and it is
  what lets a day cell announce "5 events, 2 not shown".

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

- **The weekend is its own input, because it is its own fact.**
  `foldIsWeekEnd(date, weekStartsOn)` defined the weekend as "the last two
  columns", which shades **Friday and Saturday** on a Sunday-first calendar and
  calls Sunday a working day. Replaced by `foldIsWeekend(date, weekendDays)`
  with a `weekendDays` input (default `['sat', 'sun']`) on the month and week
  views — the anchor moves the columns, it does not move the days people rest
  on, and a Saturday-first calendar resting Fri+Sat is now expressible.
- **`foldRangeForView('list')` returns the month, not the painted grid.** It
  shared the month branch, so a May list showed late-April events: a month view
  paints padding days and needs their events, a list has none.
- **A projected template replaces a list row's whole inside**, as it already did
  in the other four views. The bar and the date used to render outside the
  branch, so the same template rendered differently depending on which view
  hosted it, and a one-element template landed in a four-column grid.
- **The month day cell is a `gridcell`, not a `<button>` wearing the role.**
  `role="gridcell"` on a button replaces its native role, so activation is now
  wired explicitly (`Enter`/`Space`) and the cell is the focusable widget the
  ARIA grid pattern asks for. `role="grid"` and its accessible name moved onto
  the host, which also removes the second root the keyboard helper had to find.
- **`fold-calendar-week`'s `date` is a plain input.** It was a
  `model.required` that the component never wrote to — a two-way binding
  promising something it does not do. Pair it with the toolbar, which does own
  the paging.
- **The five views share one host directive for their chrome.** Labels, locale
  and the projected chip template were eight identical lines copied five times,
  and the `Intl.DateTimeFormat` option bags were duplicated with small
  divergences — which is how the day view came to ask for
  `{ weekday: 'long', month: 'long' }` and print "Saturday May", a phrase in no
  locale. There is now one table of formats (`FOLD_CALENDAR_FORMATS`) and one
  cache keyed by locale.
- **Tones are written once.** The four roles were reimplemented in three places
  (the month's bands, the shared chip, the list's rows, which had drifted into
  its own copy); they are now one mixin parameterised by selector.
- **RTL decorations follow the reading direction.** Continuation edges, the
  chevrons, the cell separators and the chip padding were physical properties,
  so a right-to-left calendar squared off the wrong side. All logical now.
- **The label token drops `dateRange`** (declared, translated by consumers,
  used nowhere — `Intl.formatRange` already orders a span per locale) and gains
  `hiddenCount`, `agendaModes` and `agendaMore`.

### Fixed

- **Two events sharing an `id` no longer merge into one.** The layout keyed its
  identity map on the id alone, so a duplicate was indistinguishable from an
  explicit `groupId`: the second event was **never rendered**, both bands showed
  the first one's label, a bogus group counter appeared, and the four column
  views threw `NG0955` on their `track event.id`. Duplicates now stay separate,
  with a dev-mode warning naming the id.
- **`maxLanes` is clamped in one place, and coerced from an attribute.** The
  invariant lived in two and only one enforced it: `maxLanes="2"` as a string
  built an overflow row of `"22"`, a negative value made `repeat(-5, …)` and the
  CSS parser dropped the whole `grid-template-rows` rule, and `NaN` **disabled
  the lane budget entirely** (`lane >= NaN` is never true) so nothing was ever
  counted as hidden.
- **A reversed range (`end < start`) is put back in order.** Left alone it
  rendered _twice, wrongly_: `grid-column: 5 / 2`, which CSS Grid silently
  swaps, so a band covered four days that every other view — asking
  `start <= day && end >= day` — reported as empty. Same input, two
  contradictory renders, no error.
- **A month that is not a date yields no grid, and says so.** `foldIsCalendarDate`
  existed, was tested, and was called by nothing: `month="not-a-date"` produced
  a `role="grid"` with headers and zero rows, and `month="2026-13-45"` produced
  a December calendar displayed with total confidence.
- **A collapsed group shows its most severe member.** It kept the first event in
  document order and merged only the dates, so a cancelled first member greyed
  out a whole group containing an alert, and an open-ended member inside a
  closed group had its open edge dropped — a contract with no end drawn as
  finished. Open edges are now the OR of the members, and the representative is
  the most severe by tone (ties to document order), so tone, icon, label and
  source all come from one event that really exists.
- **The agenda's `limit` can no longer empty the rail.** `limit: 0` printed
  "Nothing to handle — all up to date." directly under a badge saying otherwise,
  and `NaN` did the same (`slice(0, NaN)` returns nothing). It now clamps to at
  least one day and reports what it cut off, so "there is more" stops rendering
  as "there is nothing".
- **Paging with the keyboard twice in a row keeps the focus.** The deferred
  focus target was a signal that was never reset, so repeating the _same_
  transition wrote the same value, the effect did not re-run, and focus fell
  onto `<body>`. The request is now consumed, and applied in an
  `afterNextRender` rather than an `effect` — the ordering of an effect against
  the DOM it wants to touch is not contracted, and has already changed between
  Angular versions.
- **The day view's `[empty]` slot no longer swallows a child.** `empty` is also
  an input on `fold-data-table` and `fold-field`; an unqualified selector
  captured either of them, and with no default slot the child simply vanished
  (rule 4.8). Tag-qualified, with a default slot behind it and a projection test.
- **Years below 100 no longer jump 1900 years.** `Date.UTC(99, …)` means 1999,
  so `foldAddDays("0099-12-31", 1)` returned `"2000-01-01"`. Years are also
  zero-padded to four digits, without which they sort before every other date.
- **`foldFilterBySource` accepts `null`** — the initial value of the very model
  it exists to consume. Every caller was writing the same ternary; the gallery
  did too.
- **The band icon takes the tone's colour**, and the collapsed agenda spine
  names the slice it will open into rather than always saying "To handle". The
  agenda's slice switch has its own accessible name instead of repeating the
  rail's, and its badge honours a caller's `isActionable`, so it can no longer
  disagree with the list under it.
- **The calendar is now honestly Gregorian in every locale.** Names were
  formatted in the locale's _own_ calendar system, so `locale="ar-SA"` printed
  Hijri month names over the Gregorian day numbers the grid counts, on rows that
  break on Gregorian months — a calendar contradicting itself. The `Intl`
  formatters are pinned to `calendar: 'gregory'`, so a locale now localises the
  _language_ of the names, not the calendar behind them. A true non-Gregorian
  layout is a separate widget this family does not pretend to be.
- **`foldIsCalendarTime` rejects an impossible minute field.** `"10:75"` and
  `"23:60"` are `HH:mm`-shaped and under 1440 minutes, so a range check on the
  total waved them through; the hour and minute fields are now validated
  separately (`00:00`–`23:59`, plus `24:00`), the same rigour the date guard
  applies to `2026-02-30`.

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

[unreleased]: https://github.com/hugoheynard/fold-ng/compare/v0.10.2...HEAD
[0.10.2]: https://github.com/hugoheynard/fold-ng/releases/tag/v0.10.2
[0.10.1]: https://github.com/hugoheynard/fold-ng/releases/tag/v0.10.1
[0.10.0]: https://github.com/hugoheynard/fold-ng/releases/tag/v0.10.0
[0.9.0]: https://github.com/hugoheynard/fold-ng/releases/tag/v0.9.0
[0.8.1]: https://github.com/hugoheynard/fold-ng/releases/tag/v0.8.1
[0.8.0]: https://github.com/hugoheynard/fold-ng/releases/tag/v0.8.0
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
