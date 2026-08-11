# fold-ng — roadmap

Building this the same way we work everywhere: **small, confirmed steps**. Each
row lands, gets read, then we move on. Tokens are the foundation — they get
locked before a single component is extracted.

## Milestone 0.5 — last extractions from SH3PHERD `shared/`

The remaining generic UI still living in the app's `shared/`. Build these here,
**one at a time, confirmed**, then cut **0.5** and migrate SH3PHERD in one pass
(the app pins the published package, so nothing lands app-side until 0.5 ships).
Priority: the popover primitive. Usage counts are current app call-sites.

- [x] **`fold-popover` — anchored popover primitive** (from `shared/ui-frames/popover-frame`,
      **11 uses**, + `shared/popover-menu`, 3). ✅ Done: native top-layer +
      dependency-free **flip → size → shift** (`computePlacement`), `[(open)]`,
      dismissal + focus-return + auto aria, `autoUpdate` (ResizeObserver),
      optional `arrow`, native CSS enter/exit (`@starting-style` +
      `allow-discrete`); plus `fold-dropdown` (+ `-item`) — `role="menu"`, roving
      / Home·End / multi-letter type-ahead. Gallery `/popover`.
  - [ ] **Sub-menus / nested menus** — `fold-dropdown-item` opening a child
        menu (submenu trigger, `aria-haspopup`, right-arrow to open, safe
        triangle). Deferred by decision (2026-07-26).
  - [ ] **Context menu / cursor anchor** — open the popover at a point (a
        virtual anchor rect) on right-click, not only against a trigger element.
- [x] **`fold-listbox` (+ `fold-option`) — styleable single-select.** ✅ Done: on
      `fold-popover`; `role="listbox"` + `aria-activedescendant`, keyboard (↑/↓ /
      Home·End / type-ahead / Enter), disabled-skip, `FormValueControl<string>`,
      `fold-input` box chrome. Options derive their own selected/active via
      `computed` (no push during CD — avoids reading the required `value` early).
      Gallery `/listbox` + Playwright suite. This is the styleable half of the
      `fold-select` migration story below; native `fold-select` stays the default.
  - [x] **Multi-select** → `fold-multiselect` (sibling, not a flag: value is
        `readonly string[]`, toggle + keep-open, `aria-multiselectable`). ✅ Done.
        The keyboard/roving core + option↔owner contract are now shared between
        the two (a `FOLD_LISTBOX_OWNER` token; removed a circular import).
  - [x] **Review-hardening pass** (2026-07-26). ✅ touched-on-dismiss (required
        parity), Tab advances focus, `aria-controls`→listbox, forced-colors, Set
        membership + `…, +N` summary, dev-warn on orphan value, `allowClear` +
        closed-trigger type-ahead, box metrics single-sourced (`_field-box.scss`).
        Took the family 7.5 → 9/10. The residual points below are **features**,
        not defects.
  - [x] **Generic (non-`string`) value type** ✅ (2026-07-27) — the family is now
        generic over `T` (`fold-option<T>`, `value: T | null` single /
        `readonly T[]` multi, `FormValueControl<T | null>`). `compareWith` input
        (default `Object.is`) matches object values by identity, mirroring
        Angular's native `<select>`. Type is honest end-to-end: `T` public, the
        owner token erased to `unknown` (the projection seam), compared only where
        both operands are `T` — no `any`/`as`. **This unblocks the app's
        `SelectComponent` migration** (number/`null` ids map directly, no string
        workaround).
  - [x] **Data-driven `[options]` array API** ✅ (2026-07-27) — alongside projected
        `<fold-option>`: `[options]="FoldSelectOption<T>[]"` links the value type
        to the options at **compile time** (no projection seam), rich rows via a
        projected `<ng-template #option let-o>`. Both APIs share one option core;
        dev-warns if both are given (array wins).
  - [x] **Option groups** (`fold-optgroup`, `role="group"` + label + skip in nav).
        ✅ Done (2026-08-04) — a presentational `<fold-optgroup label>` around
        `<fold-option>`s; the owner discovers grouped options via a
        `descendants: true` content query (document order = roving order), header is
        `role="group"` + `aria-labelledby`, no `role="option"` so nav skips it.
        Works in `fold-listbox` **and** `fold-multiselect`, projected **and** in the
        data-driven `[options]` array (an entry is a `FoldSelectOption<T>` or a
        `FoldSelectOptionGroup<T>`, narrowed by the exported `isFoldSelectOptionGroup`
        guard). Gallery `/listbox` “grouped” tab shows both forms; 7 specs.
  - [ ] **Filter / combobox variant** — a typed input that filters the list
        (`role="combobox"` textbox, live `aria-activedescendant`, no-match state).
  - [x] **Multiselect clear-all / select-all** — bulk affordances. ✅ Done
        (2026-08-04) — `allowSelectAll` / `allowClear` render a sticky bar at the
        panel top (select-all skips disabled + keeps already-picked; each button
        gated; `selectAllLabel`/`clearLabel` overridable). The panel became a
        wrapper around the `role="listbox"` so the bar stays valid ARIA. 5 specs;
        gallery multiselect tab.
- [x] **`fold-view-toggle`** (from `shared/view-toggle`, 2). ✅ Done (2026-07-26)
      — generalised from the app's Cards/Table control to any `options` segmented
      single-select. A real `role="radiogroup"` (roving tabindex, arrow keys,
      Home/End, disabled-skip), `size`/`iconOnly`, forced-colors. Gallery
      `/view-toggle`; 6 specs.
- [x] **`fold-soft-warning` → reconcile with `fold-callout`.** ✅ Decided
      (2026-07-26): **no new component** — the app's `soft-warning` is a
      `fold-callout appearance="inset"` (same flex + icon + projected body, same
      status-token roles; callout is a superset — it also has `flat`, `[actions]`,
      `announce`). Migration is a rename, not a rewrite: `warning`/`alert`/
      `success`/`neutral` map 1:1 (pass `icon="shield"` to keep the success
      shield); `primary` → `accent` + `icon="info"`. Handled in the SH3PHERD
      migration phase; nothing to build here.
- [ ] **`fold-sortable-row` — drag-reorder row frame** (from `shared/sortable-row-frame`,
      2). **Absorbs `shared/ui-frames/card-frame-horizontal`** (3, the program
      drag-cards) — that's how card-frame "disappears".
- [x] **password field** (from `shared/forms/password-field`, 3). ✅ Done
      (2026-07-26) — **two layers** (decided): `revealable` (eye toggle) added to
      `fold-input` as a reusable capability, and `fold-password-field` composing
      it with a live requirements checklist. Rules are **injected** via a
      `FoldPasswordRule` type (`{ label, test }`) — a regex fits `foldRegexRule`,
      a `zod` `safeParse` fits `test` directly, no dependency added. Gallery
      `/password`; specs cover rules + reveal.
  - [ ] **Richer rule-injection ergonomics** — a `zod`-schema → rules adapter
        (map issues to labelled rules) and a regex-descriptor form, so consumers
        needn't hand-write `test` closures for the common cases.
  - [ ] **Strength meter** — an optional aggregate bar (weak/ok/strong) beside
        the checklist.
- [x] **`fold-back-link`** (from `shared/back-link`, 3) — ✅ Done (2026-08-04).
      Three modes by input: `routerLink` (in-app), `href` (external/non-router), or
      neither → a history-back button (`Location.back()`). Router-coupled but
      degradable (history mode needs no router; `RouterLink` only instantiates on a
      `routerLink`). Rides the new optional `@angular/router` peer. Gallery
      `/back-link`; 4 specs.

Then **0.5**, then the SH3PHERD migration phase: swap the app's shared duplicates
to the published fold components (`fold-select` — a real rewrite, native+projected
vs options-array + string vs number/null, 13 sites; `fold-inline-confirm` — recipe
already validated, 13 sites), delete the app copies, bump the pin, gate. Kept
app-side (domain, not extracted): target-bar, theme-toggle, rating-sparkline,
leave-balance-display, configurable-tab-bar, etc.

## Overlays — `fold-dialog` (centered modal)

- [ ] **`fold-dialog` — a centered modal dialog.** The missing **modal**
      overlay: not anchored (unlike `fold-popover`), not a side sheet (unlike
      `fold-panel-host`). For confirmation modals and modal forms. A dialog is
      **not** a popover — it's modal (background `inert`, focus **trapped**,
      backdrop, scroll-locked, `Escape`), non-anchored, centered. - Build on native `<dialog>` + `.showModal()` (top-layer, native
      backdrop + Escape) and **reuse the panel-host modal primitives already
      written** — `FocusTrapDirective`, the `inert`-background walk, the
      body scroll-lock (`overlays/panel/panel-host.component.ts`). - API: `[(open)]` two-way, `role="dialog"` + `aria-modal="true"`, a
      `titleId`/`aria-labelledby`, projected header/body/footer (or reuse
      `fold-panel-header`), focus-first + return-focus-to-invoker on close,
      optional `dismissable` (backdrop click). `size` (sm/md/lg) + max-height
      with internal scroll. - `fold-inline-confirm` already covers the _non-modal_ confirm case
      (in-place guard); `fold-dialog` is for when the choice must **block**. - Not from SH3PHERD `shared/` — a net-new component; sequence after the
      0.5 extractions unless a real use-case pulls it forward.

- [x] **`fold-danger-zone` — the destructive-action block.** ✅ Done (2026-08-04),
      reworked same day: two appearances — `filled` (alert-tinted) and `section`
      (alert border + **normal-background body** for ordinary content, the GitHub
      "Danger Zone" look) — and the confirm **reveals on click** by composing
      `fold-inline-confirm` (`actionLabel` opens a plain or type-to-confirm flow;
      `(confirmed)` emits). `role="group"` + `aria-labelledby`. Gallery
      `/danger-zone`; 5 specs.
  - [ ] **Revisit the visual design.** The current filled/section styling +
        spacing is a first pass — review the danger-zone look (heading weight/colour,
        the section footer bar, icon, density) against the rest of the system once
        it's used in a real settings page. Design polish, not behaviour.

<details><summary>Original note</summary>

A styled, tokenised
danger region for the "delete X" panels/forms: an alert-toned frame, a
title + explanation of the blast radius, and a **type-to-confirm** guard
(retype the entity's exact name/handle to arm the destructive button).
Today this is hand-rolled per feature — e.g. LaFolieDouce PIM's
`tva-regime-form-panel` delete mode: an `fold-callout variant="alert"` +
a `fold-input` whose value must equal the régime name before the danger
button enables. A small primitive would carry the frame, the confirm
contract (`confirmWith` string + `(confirmed)`), and the danger styling.
API sketch: `[title]`, `[confirmPhrase]`, projected explanation, an
`[armed]`/`(confirmedChange)` model, slots for the action button. Pulled
from a **real use-case** (the PIM), so it earns its place. Composes inside
`fold-panel-host` / a future `fold-dialog`.

</details>

- [x] **`fold-panel-footer` — the action bar for panels/dialogs.** ✅ Done
      (2026-08-04). **Probe answered it's a component:** counted **17** hand-rolled
      `<footer class="foot">` across LaFolieDouce's 3 apps (PIM + B2B client + B2B
      admin) — all the same Annuler/Confirmer bar (one is the cart's total-left /
      actions-right `between` case). It carries the glass top border + padding +
      `align="end" | "between" | "start"`, projects the buttons, and sits `flex:
none` (pinned to the panel bottom while the body scrolls — no `position:
sticky` needed). Gallery `/panel` “Panel footer”; 3 specs. **LFC adoption
      (17 sites) is a follow-up, app-side.** Composes inside `fold-panel-host` /
      the future `fold-dialog`; `fold-danger-zone` can drop its button into it.

- [x] **`fold-panel-host` — bottom-sheet edge (`side: 'bottom'`) + responsive
      auto-switch.** ✅ Done (2026-08-04). `side: 'bottom'` = full-width sheet,
      content-driven height up to `85dvh` with the body scrolling, slides up,
      rounded top, tap-to-dismiss grabber (honours `disableClose`). `side: 'auto'`
      docks right on a wide host, bottom on a narrow one — switched by a
      `@container (max-width: 640px)` on the dock's own inline-size (container, not
      viewport). All modal machinery is edge-agnostic and reused. Host uses
      `[data-side]` (was the `--left` class). Gallery `/panel` “Bottom sheet” +
      “Auto (by width)”; +6 host specs. **Pointer-drag-to-dismiss deferred**
      (tap-to-dismiss ships). Original scope below.

<details><summary>Original scope</summary>

The last real gap in the panel system (config cascade,
`modal`/`surface`, size presets, `disableClose` all landed 2026-07-29). A
side sheet is the wrong shape on a phone: the dominant mobile pattern is a
sheet that slides up from the **bottom**, full-width, with a drag/tap-to-
dismiss handle. Scope:

- **`side: 'bottom'`** — a new edge alongside `left`/`right`. Full-width, height
  driven by content up to a `max-height` with internal scroll; slides on the
  Y axis. The scss `.panel--bottom` + a bottom `.panel-dock` variant; the
  surface/glass/solid, focus-trap, `inert`, scroll-lock and `disableClose`
  machinery all **reuse** as-is (they're edge-agnostic).
- **Responsive auto-switch** — a panel opened `side: 'right'` should become a
  bottom-sheet under a breakpoint, container-driven (fold's "responsive on
  its own width, never the viewport" contract — key off the host/shell
  width, likely a `@container`, not a media query). Decide the API: an
  explicit `side: 'auto'` (right on wide, bottom on narrow) vs. an implicit
  fold at a token width. Lean `side: 'auto'` so it's opt-in and legible.
- **Grabber affordance** — a top drag-handle on the sheet; tap dismisses (honours
  `disableClose`). Pointer-drag-to-dismiss is a **nice-to-have**, sequence
  after the static breakpoint switch — don't block the edge on gesture work.
- Pulled by a real use-case: the LaFolieDouce storefront cart panel on mobile.
  Its own commit + responsive specs — kept out of the 2026-07-29 panel lot to
  keep that lot clean. This is the 9.5 → 10 lever for the panel system.

</details>

- [x] **`open()` overload for optional/no data** (consumer-friction Round 4 #5).
      ✅ Done (2026-08-04) — the fix was on the **contract**, not a new overload:
      `FoldPanelContent<T>.data` is now the covariant read side
      (`Signal<T | undefined>`), not the invariant `InputSignal<T>`. So an optional
      data input (`data = input<T>()` → `InputSignal<T | undefined>`) satisfies
      `FoldPanelContent<T>` just like a required one, and `open(Cmp, { data })`
      infers `T` from the value with no `<T | undefined>` widen (the data-less
      overload already existed). Data value stays type-checked; non-breaking.
      Type-contract spec grew the optional-data + negative cases; `/panel` gallery
      “Typed data” section.

- [ ] **Better `/panel` gallery demo.** The dedicated page landed (2026-07-29:
      bounded stage, 5+ triggers, background click-counter, cascade docs), but the
      demo undersells the system. Raise it to `/app-shell`'s `dev-playground`
      quality:
  - **A real panel body, not the generic `TabPanelComponent` stub** — mount a demo
    panel with a `fold-panel-header` + form fields + a `fold-panel-footer` (once it
    exists) so surface (glass vs solid) and `disableClose` are actually legible; an
    empty stub reads the same modal or not.
  - **Live toggles, not one-shot trigger buttons** — segmented controls for `side`
    / `width` (sm·md·lg·xl) / `modal` / `surface` / `disableClose`, so a single open
    panel updates as you flip options (mirror app-shell's `np-field` + `ss-seg`),
    instead of 6 buttons each opening a fixed combo.
  - **Show the cascade resolving, not just prose** — a panel with a component
    `static foldPanel` under an active `FOLD_PANEL_DEFAULTS`, printing the resolved
    config so the three layers → final value is visible on screen.
  - **`data` round-trip** — a trigger that passes `data` in and shows the typed
    `FoldPanelRef` result coming back on close (the typed-result DX is the headline
    advantage over MatDialog and the demo never shows it).
  - Keep the background counter (proves non-modal pass-through) + the bounded
    `panelScope` stage. Sequences with bottom-sheet: add a mobile preview width to
    the same demo once `side: 'bottom'` lands.

## Form inputs — the native-input gap (`fold-textarea` · `fold-date` · `fold-time`) ✅ DONE

Surfaced by the **2nd consumer** (LaFolieDouce B2B — `consumer-friction.md` Round 4
#2). fold ships `fold-input` / `fold-number-input` / `fold-select` but **no
multiline, date, or time control**, so every form that needs one drops to a native
element and pays three times: native markup, an `inputValue($event)` helper to type
the untyped native event, and a **copied** `.date/.note` box chrome (padding +
border + radius + `:focus-visible`). Measured in the B2B app: native inputs in **6**
templates, the `inputValue` helper in **5** files, and the box chrome duplicated
byte-for-byte across **3** panels (`checkout-panel`, `activation-support-panel`,
`creer-entreprise-panel`). This is the highest-volume DX tax found so far, and the
chrome already exists to fix it cheaply.

- [x] **`fold-textarea`** — the multiline sibling of `fold-input`. ✅ Done —
      `[(value)]` model (`FormValueControl<string>`), the `_field-box.scss` chrome
      shared via `input-shell.scss` (the `size()` mixin gained a `$height: false`
      opt-out so a textarea shares font/padding/radius but not the fixed height).
      **No resize handle** (decided with the consumer): `resize: none` + wrap +
      `overflow-y: auto`, height driven by `rows` — a dragged corner can't break a
      panel layout. Commit-continuous `model` is right here (a note wants live
      binding, unlike the table-cell case in Round 1 #5). 8 specs; `/form` gallery
      “Textarea” tab.
- [x] **`fold-date` + `fold-time`** — two sibling controls (distinct selectors, for
      call-site clarity — the consumer's ergonomics call; the same "one control, one
      job" split as `fold-input` vs `fold-number-input`). `fold-date` wraps the
      native `<input type="date">` family (`type`: `date` · `datetime-local` ·
      `month` · `week`); `fold-time` wraps `<input type="time">`. ✅ Done — both wrap
      the native control like `fold-select` wraps `<select>`, keep the OS picker +
      mobile keyboard, hand back a **typed** `[(value)]` (native string) so consumers
      drop `inputValue`. `min`/`max`/`step` pass through (`min`/`max` typed
      `string | undefined`, not `| null`, to stay assignable to the
      `FormValueControl` reserved field-state bindings — same reason `readOnly` isn't
      `readonly`). `fold-time` reuses `date.component.scss` (same picker chrome).
      **Not** a calendar popover (that's the `fold-calendar` family). 16 specs (8 + 8);
      `/form` gallery “Date & time” tab.
- Retires (app-side, on adoption): the `.date/.note` duplication (3 panels) + the
  `inputValue()` helper (5 sites) collapse into the field box.

## `fold-menu` — `collapsible` sensible default (DX, see dev-rules 5.2.4) ✅ DONE

✅ Done: `expanded` now defaults to `undefined` (unset) and the effective state
follows `collapsible` — `<fold-menu collapsible>` boots expanded, a bare menu
boots the icon rail, an explicit `[expanded]` still wins. The model type widened
to `boolean | undefined` (BREAKING; a two-way `[(expanded)]` signal must widen).
Specs cover unbound-follows-collapsible + explicit-wins.

<details><summary>Original note</summary>

`collapsible` adds the chevron toggle but `expanded` still defaults to `false`,
so `<fold-menu collapsible>` with no `[(expanded)]` boots **collapsed** — an
icon rail with a toggle, no labels. Surprising: you added a way to _collapse_,
so the natural start is _open_. Consumers hit this immediately (lfc-PIM had to
add `[(expanded)]="signal(true)"` just to get the expected expanded-by-default
rail).

Fix (encode the default, don't warn): when `collapsible` is set and `expanded`
was **not** explicitly bound, default `expanded` to `true`. Keep the explicit
binding authoritative when present. Mirrors the `fold-card` bare-boolean
shorthand (5.2.3) — the short form Just Works. One approach: an `effect`/init
that seeds `expanded` from `collapsible` only when the model is still at its
untouched default. Add a spec: `<fold-menu collapsible>` → expanded; `<fold-menu
collapsible [expanded]="false">` → collapsed.

</details>

## Roadmap 1.0.1 — `fold-app-shell` polish

Post-1.0 the shell is **8.5/10**: structure + decoupling are big-lib grade
(pure structural, `data-attr` + var-contract elevation, no `:host-context`,
strictTemplates-gated). This milestone is the honest gap to **9.5** — it closes
the a11y promise, adds the coverage a serious lib carries, and keeps the two
depth items trigger-gated (generalise on the 2nd real use, never by
anticipation). Order = a11y first (it contradicts what the component claims),
then coverage, then the trigger-gated depth.

_This is app-shell's slice of the lib-wide **Road to 9.5** (bottom of this file):
its a11y items feed §3, its snapshots feed §2. Raising the shell to 9.5 lifts the
average, but the average also needs the P0 blockers (RELEASE-READINESS §2) and the
lib-wide levers there cleared._

**Priority (P0) — `fold-page-layout` can't cede its scroll (breaks shell-owned scroll + in-flow footer):**

> **✅ RESOLVED (2026-08-04) — scroll-system Slice A shipped.** See
> [`docs/scroll.md`](scroll.md). What landed, matching the locked decisions:
> `fold-app-shell` `contentScroll` → `scroll="scroll" | "stage"`, **default flipped
> to `scroll`** (shell owns the content scroll); `fold-page-layout` gained
> `scroll="flow" | "own"`, **default `flow`** (drops its `overflow`/`overscroll`,
> so no page-inside-shell double scroll and the chain-stop that hid the footer is
> gone). The **footer-grow companion** shipped too: the scroll lives on an inner
> `.content-scroll`, and `.content-flow { flex: 1 0 auto }` grows to pin a short-
> page footer — no more `margin-top: auto` glue. The scroll box is inner so a
> docked panel anchored to the content frame stays fixed. **Deletes the LFC
> `!important`.** Slices B (`foldScrollRegion` + registry) and C (scrollbar
> tokens + scroll-anchoring) are the remaining scroll work (below / in the note).
> The original P0 write-up is kept below for reference.

- [x] **`fold-page-layout` gained `scroll="flow" | "own"` (default `flow`); the
      shell flipped to owning the scroll.** (Shipped default is `flow`, not the
      `own` first sketched here — the locked decision took the one-time breaking
      flip.) Its `:host` used to hardcode `overflow-y:auto;
overscroll-behavior:contain; flex:1 1 auto; min-height:0` — **always** a
      self-scrolling box, built for the old `contentScroll="clip"` model, with no
      input to turn it off, so a page built on `fold-page-layout` was structurally
      incompatible with the shell owning the scroll (`footerBehavior="scroll"`):
      the page scrolled internally and `overscroll-behavior:contain` stopped the
      scroll from chaining to `.content`, leaving the in-flow footer unreachable.
      Surfaced building **LaFolieDouce B2B**; the consumer workaround was a global
      `!important` override — the smell that pointed at the gap. Ground truth in
      `consumer-friction.md` Round 3.
  - [x] **Companion (2nd consumer, LaFolieDouce B2B — `consumer-friction.md`
        Round 4 #1): the footer-grow.** `scroll="flow"` alone was necessary but not
        sufficient — the old `.footer-inflow { margin-top:auto }` consumed free space
        before `flex-grow`, so a short flowing page left the footer floating
        mid-viewport. Fixed together: the shell now grows the page-holder
        (`.content-flow { flex: 1 0 auto }`) instead of gluing the footer, so a short
        page pins the footer to the bottom and the app drops its
        `router-outlet + * { flex:1 0 auto }` + `.footer-inflow { margin-top:0 !important }`.

**Do — `fold-view-nav` / `fold-nav-layout` : a sticky mode (2nd consumer ask):**

- [ ] **`stick` on `fold-view-nav` — the bar holds the top of its scroll
      container.** Today a tab bar above a long section scrolls away, and the
      consumer hand-writes `position: sticky` + `top` + `z-index` + an opaque
      `background` — three of which they cannot decide correctly from outside:
      **which** surface token matches the container behind, what the `z-index`
      competes with, and what `top` offset a shell header imposes. The bar
      already owns `direction` / `size` / `activeStyle` / `background`; staying
      put is the same family of decision, and it is the bar that knows which
      opaque surface pairs with which `background` value.
      Sketch: `stick="none" | "top"` (+ `stickOffset` for a shell header), which
      **forces an opaque surface** — a sticky transparent bar shows the content
      scrolling under it, so `background="transparent"` + `stick="top"` should
      resolve to the container's surface, not stay see-through.
      **Ground truth:** LaFolieDouce B2B, `consumer-friction.md` Round 5 — two
      bars in the same app the same week (Réglages ▸ Commercial's horizontal
      section bar over a multi-screen grid, and the Réglages vertical rail), same
      six-line workaround both times.
  - [ ] **Companion on `fold-nav-layout`** — when the layout folds its rail into
        a horizontal bar, that bar has the same need; the sticky decision should
        come from the layout rather than be re-declared by each consumer.
  - [ ] **Interaction with `[foldScrollRegion]`.** `top: 0` is right inside a
        scroll region but wrong under a shell header. Decide whether `stick`
        reads the nearest scroll region (the registry already knows them) or
        stays explicit via `stickOffset`. Record the call before it grows
        organically.

**Do — the a11y promise (the component advertises accessibility):**

- [ ] **Rails as named landmarks.** `.rail-primary` / `.rail-secondary` are bare
      `<div>`s → a screen reader gets no `navigation` landmark (only
      header/main/footer are semantic). Add `railPrimaryLabel` /
      `railSecondaryLabel` inputs → `role="navigation"` + `aria-label` on the
      wrappers. Cheap; pairs with the shipped skip-link.
- [ ] **Secondary rail reachable on mobile.** Below the breakpoint only the
      **primary** rail returns (the drawer); an app using `railSecondary` for a
      workspace switcher / sub-nav loses it on a phone. Stack both rails in the
      drawer, or a segmented toggle inside it. (Was "deferred until a bi-rail
      consumer needs it" — promoted: it's a real functional hole for bi-rail apps.)

**Do — coverage the unit tests can't give:**

- [ ] **Visual-regression snapshots** (Playwright) over the mode combinations the
      CSS owns and jsdom can't exercise: drawer open/closed, elevated rail
      (`:has` gutter), footer `scroll` vs `pinned`, `header/footerLayout` full,
      the mobile collapse. The crop bug shipped precisely because these layout
      paths had no automated eye.

**When earned — depth, trigger-gated (M3 direction):**

- [ ] **`foldElevated` named scale** (`sm|md|lg`). Elevation is boolean today; the
      level is dialed by overriding `--fold-surface-shadow`/`-radius` in scope
      (enough now, and more Radix-minimal than Material's `z0…z24`). **Trigger:**
      a real need for ≥2 _named_ levels (a raised card vs an overlay dialog with
      different shadows) → add the enum mapping to shadow tokens. Not by anticipation.
- [ ] **`foldSurface` owns the background** — the last step to a full M3-style
      surface model. Today each chrome component paints its own bg (`fold-menu` →
      `bg-rail-primary`), which is why `foldElevated` sets **no** bg (it would
      fight the component's). If surface = {bg + text role}, `foldElevated`
      becomes fully self-contained (no "bring your own background" footgun on a
      bare wrapper). Sizeable — touches how all chrome paints. **Trigger:** a 2nd
      surface-without-its-own-bg need.
- [ ] **Drawer mechanics → `FoldDrawer*` primitive.** The shell owns the
      mobile-drawer behaviour inline (`mobileNavOpen` model, `drawerOpen` gate,
      `Escape`, widen-reset effect, focus-trap gating). Cohesive, and there is
      only **one** drawer, so it stays inline (the width-observer, the shared
      half, is already `observeElementWidth`). **Trigger:** a **2nd** off-canvas
      drawer (a filters/detail drawer) → extract `FoldDrawerController` (or
      `[foldDrawer]`) owning open-state + `Escape` + focus-trap + scrim.

**Decide — product calls that gate structure:**

- [ ] No persistent **right rail** (assume `fold-aside-layout` + panels?), and
      **tertiary-rail** as a token vs a 3rd rail slot on the shell. Record the
      decision before either grows organically.

## Phase 0 · Foundation (in progress)

- [x] Scaffold the package (`fold-ng`, ESM, strict tsconfig, Vitest).
- [x] Two-tier token model: primitives (`--fold-ref-*`) → semantic (`--fold-color-*`).
- [x] Dark base on `:root`, light override on `[data-theme="light"]`.
- [x] Typed catalogue + `foldColorVar()` helper.
- [x] Contract test: theme parity, no dangling refs, no drift, no dead palette.
- [x] First confirmed tokens: `bg-page`, `bg-header`, `bg-rail-{primary,
secondary,tertiary}`, `primary`, `primary-strong`, `on-primary`.
      (Rail depth values are a first proposal — confirm against the ref.)
- [ ] Wire ESLint (`@sh3pherd/eslint-config`) + Prettier for the package.
- [ ] Add the package to CI (lint + test) and pre-push.

## Phase 1 · Grow the token set (in progress)

Add roles only once we're certain of their usage.

- [x] Semantic status families: primary · info · warning · alert, each as a
      tinted-chip triad (base / text / surface / border). Surface+border via
      color-mix on a solid primitive (no rgba primitives). Both themes.
      Driven by Badge (first consumer). Success deferred until it has one.
- [x] Radius scale — fixed the app's gap: real `--fold-radius-lg` (14px) **and**
      `--fold-radius-pill` (9999px) as separate tokens.
- [x] Type scale (`--fold-text-xs…xl`).
- [x] Bridged the app (`_tokens.css`) onto all of the above, zero-regression.
- [x] Text colours: `text` / `text-secondary` / `text-muted` / `text-faded`
      (driven by ChoiceRow). on-bright / on-dark deferred.
- [x] Neutral surfaces + border: `surface-subtle` / `surface-raised` /
      `border` (white-alpha on dark, black-alpha on light, via color-mix).
- [x] Named surface: `surface-card` (solid raised content surface — opaque,
      unlike the alpha overlays). New `--fold-ref-ink-800` primitive; the app's
      `--card-color` bridges onto it. Drives `fold-card`. panel/popover remain.
- [ ] Dividers; `text-faded`; on-bright / on-dark.
- [x] Scales: **space** (`--fold-space-{xs,sm,md,lg,xl}`) + **motion**
      (`--fold-motion-{fast,base,slow}`) — promoted once the next candidates (icon,
      paginator, panel-header, data-table) all needed them. Catalogue + contract
      test + `foldSpaceVar`/`foldMotionVar` helpers; the app's `--gap-*` / `--t-*`
      bridge onto them 1:1 (identical values, zero-regression). Radii already had
      `xs..pill` (no gap). Shadows + z-index still deferred (no consumer yet).
- [x] Success status family (green) — driven by its first consumer, the toast.
      New `--fold-ref-green-*` primitives + full triad, both themes; the app's
      `--color-success*` now bridge onto it (its last local status literal, gone).
- [ ] Bridge the app's `--text-*` / `--surface-*` / `--border-*` onto the
      package (app-wide) — deferred to avoid a large blast radius.

## Phase 2 · Migrate the app onto the package

- [ ] Point `apps/frontend-webapp` at `fold-ng/tokens.css`.
- [ ] Codemod app token names → `--fold-*`; delete the app's `_tokens.css`.
- [ ] Move app-specific tokens (timeline, room, auth, layout) to an app layer —
      they do **not** belong in the shared contract.

## Phase 3 · Components

- [x] **Angular test harness** (the first-component cost): `@angular/core` peer
      dep, `@analogjs/vite-plugin-angular` + zoneless `setupTestBed`,
      `tsconfig.spec.json` (the plugin resolves it in test mode), `tslib` dep
      (the app builds the component from source with `importHelpers`).
- [x] **Badge** — extracted to `src/components/badge/`, inline styles on
      `--fold-*` tokens, 4 specs via a host wrapper. App's copy deleted; its 9
      importers now pull `BadgeComponent` from `fold-ng`. AOT build green.

- [x] **ChoiceRow** — merged `pill-selector` + `chip-filter` into one
      `fold-choice-row` with `layout: 'segmented' | 'chips'` (option B). Optional
      `count` badge per option. 6 specs. Both app components deleted; call sites
      migrated (segmented, chips) incl. the roster's category pills (→ chips
      with counts). AOT build green.
- [x] **TabNav** (`fold-tab-nav`) — extracted the existing shared tab bar
      (dropped its vestigial `CommonModule`; already control-flow). Kept
      `activeStyle` (underline/fill) + `direction` (horizontal/vertical, mobile
      accordion); added a `size` (compact default / comfortable) for page-level
      bars. 6 specs. Zero new tokens (mapped onto the existing set; neutral
      lines now flip in light mode). 6 importers repointed; the roster's
      Staff/Bookings `.ct-tabs` migrated (comfortable, count badges). AOT green.
      NB: `configurable-tab-bar` (DnD/quota power-bar) is a separate beast — not
      touched.

- [x] **Toast** (`fold-toast-container` + `ToastService`) — repatriated the app's
      toast service, `Toast`/`ToastVariant` types, and container. Styles inlined
      on `--fold-*` glass tokens (frosted surface, per-variant accent stripe);
      `info` keeps the app's brand-teal tone. First consumer of the `success`
      family. 8 specs. App's 51 `ToastService` sites keep their import path via a
      re-export shim; the single `<fold-toast-container>` render site is repointed.
  - [x] **Single snackbar extracted → `fold-toast`** — the container rendered each
        toast inline as a `<div class="toast">` with **emoji** glyphs and
        whole-surface click-to-dismiss. Pulled into a presentational
        `FoldToastComponent`: `fold-icon` status glyphs (`check-circle`/`info`/
        `warning`/`x-circle`), a single `--fold-toast-accent` custom prop per variant,
        an explicit close button emitting `dismiss` (no more accidental dismiss),
        `role`/`aria-live` (assertive `alert` for error, polite `status` else),
        and a reduced-motion guard. Container now owns only stacking. Added the
        `x-circle` status icon (the error glyph — a cross, pairing with
        `check-circle`). Component + container specs; public API (`ToastService`,
        `<fold-toast-container>`) unchanged.
  - [x] **Auto-expiry moved onto the component (`duration` input)** — the service
        no longer runs the dismiss `setTimeout`; each `fold-toast` owns its own
        timer via a `duration` (ms) input (effect + cleanup), emitting `dismiss`
        when it elapses. `duration = 0` is sticky. The container passes the
        queued toast's `durationMs`; `ToastService.show(msg, variant, ms)` is
        unchanged, so the ~51 app sites keep working. Makes a standalone
        `fold-toast` self-sufficient (no service needed to auto-close).
  - [x] **Duration policy via `provideFoldToasts` (per-variant + generic)** — the
        service resolves a no-arg `show()`'s duration most-specific first:
        `durationByVariant[variant]` → `defaultDurationMs` → a baked
        severity-scaled default (success 3s · info 4s · warning 6s · **error 0 =
        sticky**, so errors aren't missed). An explicit `show()` arg still wins.
        Config lives on the **service** (not the container — it stamps
        `durationMs` at creation), via the package's `provideFoldX` idiom.
- [x] **Button** (`fold-button`) — repatriated the shared button, the design
      system's most-used primitive (71 consumers). The `fold-button` selector was
      already package-shaped, so **templates are untouched** — only the TS import + `imports:` symbol move (`ButtonComponent` → `FoldButtonComponent`). The
      SCSS was re-expressed in `--fold-*` tokens: hover tints via
      `color-mix(… var(--fold-color-*) …)`, the solid CTA via
      `on-primary`/`primary-strong` — so it passes the component token contract
      (no raw rgba). `variant`/`size` types live in `button.types.ts`; spec +
      gallery entry added. The programs-local `ui-button` is a **different**
      component and was left alone.
  - [x] **`shape` input (rounded · pill)** — corner shape, default `rounded`
        (unchanged). `pill` → `--fold-radius-pill`, so accent pill CTAs (the
        contracts "Proposer un avenant" `.cd-upload`) become `fold-button`
        without losing the strong radius. Mirrors `fold-button-icon`'s `shape`.
  - [x] **`block` input (full-width)** — stretches to the container width
        (`:host(.block) { display: flex } button { width: 100% }`), default off.
        Lets full-width card/form CTAs (the contract "Résilier le contrat"
        trigger) become `fold-button`.
  - [x] **`icon` / `iconTrailing` shorthand** — the common "icon + label" case
        without projecting `<fold-icon>`. The button **owns** the icon size
        (derived from `size`: sm→14 · md→16 · lg→18), killing the drift where
        27 call sites hand-passed 5 different icon sizes (xs/12/13/14/sm).
        Projection still works for custom content. All 27 sites migrated.
- [x] **ButtonIcon** (`fold-button-icon`) — the icon-only sibling (16 consumers):
      toolbar / transport / row-action affordances. `shape` × `size` × `tone`
      surface as `data-*` for the SCSS; momentary (`clicked`) or two-way toggle
      (`[(active)]` → pressed state + `aria-pressed`); `tooltip` sets `title` +
      `aria-label`. Same repatriation shape as `fold-button` — selector unchanged,
      only the TS import moves. SCSS re-tokenised: the `--bi-*` locals resolve to
      `--fold-*`, the accent tone uses `on-primary`/`primary-strong`, the critical
      hover/active tints use `color-mix(… var …)` (were raw rgba). Types in
      `button-icon.types.ts`; full spec ported; gallery entry added.
- [x] **Menu** (`fold-menu` + `menu-item` / `menu-section` / `menu-separator`) —
      the collapsible nav rail: coloured sections, `tint="follow"` (items take
      their section colour), depth `level` (primary/secondary/tertiary tints),
      collapse toggle with `togglePlacement` (`auto`/`header`/`footer`/`body`,
      multi-row bands via a reserved gutter), floating-shell self-rounding. Items
      are attribute components (`a[fold-menu-item]`) so `routerLink` /
      `routerLinkActive` compose. Drives the app's workspace rail (perso +
      workspace nav) and the app-menu launcher.
  - [x] **Expanded body scrolls** — a nav taller than the rail was overflowing
        off the bottom with no way down. The expanded `.menu-body` now scrolls
        (`overflow-y: auto` + `min-height: 0`); collapsed keeps `overflow:
visible` so hover tooltips still escape.
  - [x] **Collapsible sections** — opt-in `collapsible` on `fold-menu-section`:
        the header becomes a fold toggle, `[(collapsed)]` two-way (starts open).
        The section holding the **active** item stays open regardless (read via
        `contentChildren` on the projected items) so the current page is never
        hidden. Expanded-rail only; the items wrapper is `display: contents`
        unless collapsible, so existing sections are byte-for-byte unchanged.
- [x] **AvatarList** (`fold-avatar-list`) — overlapping avatar cluster (from the
      org-chart node pattern): `limit` + a detached `+N` overflow chip, `top`
      (`first`/`last`, stacking direction), uniform `size` / `square` per cluster,
      and **per-face** state (`variant` / `muted` / `ring` / `ringStyle`) on
      `FoldAvatarListItem` — a member can be a ghost among members.
- [x] **State views** (`fold-loading` + `fold-empty-state`) — the shared loading
      placeholder + empty-state block, moved off `app/shared/`.
- [x] **StickyColumn** (`[foldStickyColumn]`) — layout directive for a sticky
      side column (`<aside foldStickyColumn>`), killing the per-page
      `.sidebar { display:flex; …; position:sticky }` duplication. Host inline
      styles only (no template/wrapper). Tunable via CSS vars —
      `--fold-sticky-column-top`/`-gap`, and `-position` which a page flips to
      `static` in its own stacking breakpoint (the page keeps its breakpoint;
      the directive stays breakpoint-agnostic).

- [x] **Card** (`fold-card`) — the canonical raised surface: `surface-card` bg +
      hairline border + consistent radius (`surface`/`radius`/`padding`/
      `interactive` inputs). A `surface` input picks the tint — `card` (default)
      or `sunken` (the deeper container tint, added with the data-table). Fixes
      the "pill radius" drift — the app's `--radius-lg` means _pill_, so the ref's
      `var(--radius-lg, 14px)` cards rendered as capsules; `fold-card` uses the
      package `--fold-radius-lg` (14px). 4 specs. First consumer: Intégrations.
- [x] **Hero** (`fold-hero`) — a prominent header card wrapping the card base with
      a `tone` prominence ladder: `sunken` · `neutral` (default) · `subtle`
      (quiet `surface-card`→`surface-sunken` diagonal + faint corner glow) ·
      `gradient` (primary-tinted wash + primary border + corner glow, the
      "billing plan" look) · `primary` (solid fill, text flips to `on-primary`).
      Plus an orthogonal `accentBar` (left primary edge bar, composable with any
      tone) and `padding` (`lg` default) like the card. No new token.
      `isolation:isolate` keeps the glow (`::after`, z-index:-1) below projected
      content. 5 specs. Consumers migrated: the Facturation plan hero
      (`tone="gradient"`) and the contract-detail `.cd-hero`
      (`tone="subtle" accentBar`, keeping its bespoke shadow app-side).
- [x] **Badge** (`fold-badge`) — status/count pill; variants
      `accent`/`info`/`warning`/`alert`/`success` (success completed the family).
- [x] **StatusBadge** (`fold-status-badge`) — status→colour badge (maps a domain
      status key to a tone: **active→success (green)**, draft/pending→warning,
      suspended→alert, coming-soon/unknown (e.g. terminated)→neutral grey).
      Repatriated from `app/shared/`; app copy deleted. Canonical scheme adopted
      app-wide (active is green everywhere, incl. absences "approved" + company
      "active"). Contract-status pills unified onto it: roster + user/detail
      migrated; contract-card + dashboard widget auto-recoloured; company/detail's
      clickable status editor kept but its `terminated` aligned to grey. 4 specs.
- [x] **Auto-colour registry** — `PaletteRegistry` (root singleton) + curated
      `AUTO_PALETTES` (`vivid`/`extended`/`pastel`) + `providePalette()`. One
      active palette app-wide ⇒ a seed maps to the same colour everywhere;
      `use(name | customColours)` switches it reactively. Byte-identical hash to
      the app's old avatar/org-member logic (zero recolour). 8 specs.
- [x] **Avatar** (`fold-avatar`) + **AvatarDetail** (`fold-avatar-detail`) —
      repatriated from `app/shared/`, wired to `PaletteRegistry.colorFor()` (the
      local 10-colour `PALETTE` is gone). App keeps its import sites via
      re-export shims; `orgchart-palette` (`NODE_PALETTE`) now re-exports the
      package `extended` palette. 8 specs.
- [x] **Page layout** (`fold-page-layout` + `fold-page-section`) — the shared
      settings/admin page scaffold (title + description + `[pageActions]` slot;
      titled sub-sections). Extracted on the 2nd+ real use (the company
      Administration panes: Facturation, Détails, Intégrations, Zone dangereuse),
      per the "generalize on the 2nd usage" rule — the app panes dropped their
      inlined `.fold-page*` CSS onto it. 7 specs.

Next components, one at a time, each with tests + a usage story. Lock order
tracks what the app already reuses (✓ = landed):
`Button` · `StatusBadge` · ~~`Avatar`~~✓ · ~~`Icon`~~✓ · ~~`FoldDataTable`~~✓ ·
~~`Paginator`~~✓ · ~~`PanelHeader`~~✓ · …

`app/shared/panel/` now holds only the panel-open integration spec — every
panel primitive lives in the package. Remaining app/shared candidates are the
smaller primitives (`Button`, `StatusBadge`, state/empty/loading views) when
they earn the move.

**Confirmed candidates + their dependency chain** (from `app/shared/`):

- [x] **`Icon`** (`fold-icon`) — **landed**. Shipped the full **~100-icon** set
      inlined (102 today — `x-circle` added for the toast error variant; 6
      category maps `icons/*.icons.ts`, generated from the app's `.svg` assets) so
      the package is self-contained. Static `FOLD_ICONS` const → a runtime
      **`IconRegistry`** root singleton: built-ins + consumer additions via
      `provideIcons()` (bootstrap) or `register()`/`registerMany()` (runtime), keyed
      `FoldBuiltinIconName | (string & {})`. Added `@angular/platform-browser` peer
      (`DomSanitizer`). ~90 app importers repointed; app icon component + registry
      deleted. 6 specs (incl. extensibility). Unblocks `Paginator` + `PanelHeader`.
- [x] **`FoldDataTable`** (`fold-data-table` + cell directive + types) — **landed**.
      Generic/presentational, no `Icon` dependency. SCSS → a plain **`.css`
      styleUrl** (see harness note below); the deep table surface uses
      `surface-sunken` (body) with the sticky header lifted toward `surface-card`.
      Drove two new tokens: `--fold-color-border-subtle` (fainter hairline for row
      dividers, below `border`) and `--fold-color-surface-sunken` (a solid surface
      **darker** than `surface-card` for large containers — the ref's second card
      tint, below the raised card). Added the `@angular/common` peer. Its one app
      importer (roster contracts-tab) repointed; app copy deleted. 6 specs.
- [x] **`Paginator`** (`fold-paginator`) — **landed**. Server-side, fully
      controlled (size selector + range + ellipsis page nav). Uses the package
      `fold-icon` chevrons; SCSS → `.css` styleUrl, all tokens mapped (no new
      token). Fixed a latent `var(--t-fast) ease` double-easing bug (the motion
      token already carries the easing). Its one importer (contracts-tab)
      repointed; app copy deleted. 7 specs.
- [x] **`PanelHeader`** (`fold-panel-header`) — **landed** in `src/components/overlays/panel/`
      alongside the overlay system. Inline styles, all tokens mapped: the header
      border → `glass-border` (it's a header on a glass panel), the close-button
      hover → `surface-hover` (both exact matches), no new token. Wired to the
      package `PanelRef` (self-closing). 13 app importers repointed; app copy +
      its 2 specs deleted (consolidated into 7 package specs).

Harness note: a plain **`.css` `styleUrl` resolves fine** in the analog test env
(only **SCSS** `styleUrl` needs a preprocessor it lacks). So a component with a
big stylesheet keeps its CSS in a sibling `.css` file (data-table) rather than
inlining `styles: []` — cleaner, and keeps the `.ts` under 300 lines. Small
components still inline. Template stays inline (no `templateUrl`).

## Phase 4 · Publish

**Public mirror + showcase plan → [`documentation/todos/TODO-fold-ng-mirror.md`](../../documentation/todos/TODO-fold-ng-mirror.md)**
(repo `fold-ng`, package `@sh3pherd/fold`, dark theme `umbra`, MIT; one-way
subtree mirror → public `dev`, gallery served on GitHub Pages via hash routing).

- [x] **Package metadata + discoverability (DONE).** Broad keywords, query-first
      description, `repository.directory`, `sideEffects`, README badges +
      install/quickstart first, `llms.txt` (LLM index), `CHANGELOG.md`, version
      `0.1.0`. Typedoc wired (`pnpm --filter fold-ng docs:api` → `docs-api/`,
      gitignored) for an indexable API site to deploy alongside the gallery.
- [ ] **Build decision — `ng-packagr` belongs in the MIRROR/CI, not dev.**
      Probed 2026-07-23: `ng-packagr@22` / `@angular/build` **hard-require
      TypeScript `>=6.0 <6.1`**, but `fold-ng` is pinned to `~5.9.3` (the
      deliberate package-level TS pin — only the app moved to TS6). So the
      compiled build cannot run in the dev package without a separate TS6 bump of
      the whole `fold-ng` toolchain (vitest/analog/eslint) — a decision of its own.
      **Recommendation:** keep the monorepo consuming `fold-ng` as source (today's
      `exports` → `./src/index.ts`, which the TS6 app compiles fine); run
      `ng-packagr` in the **public mirror's CI** (fresh TS6 toolchain) and
      `npm publish` from `dist/`. Ready recipe for the mirror: - `ng-package.json`: `{ "dest": "dist", "lib": { "entryFile": "src/index.ts" } }` - `tsconfig.lib.json`: extends base, `angularCompilerOptions.compilationMode: "partial"`, include `src/**/*.ts`, exclude specs + `dev`. - **Token CSS caveat:** ng-packagr's generated `dist/package.json` won't
      carry the custom `./tokens.css` exports — copy `src/tokens/*.css` as
      assets and re-add those `exports` in the publish step. - Alternative if we'd rather ship source: bump `fold-ng` to TS 6.0.x to match
      Angular 22 (verify vitest/analog/typescript-eslint on TS6 first).
- [x] Package `exports`, `files`, versioning, changelog — **DONE** (files now ship
      `CHANGELOG.md` + `llms.txt`; `exports` stay source for the monorepo).
- [ ] Flip `private: false` + registry/publish flow. _(`private: false` already
      set; needs the mirror repo + `npm publish --provenance`.)_

## Explore

Open investigations — run the probe, bring back a finding, _then_ decide. Not
committed work; the point is to learn before we lock anything.

- **[2026-08-04] `fold-async-state` — one wrapper for loading / not-found /
  error + loaded content.** Consumers hand-wire the same `@if (loading()) {…}
@else if (notFound()) {…} @else if (error()) {…} @else { … }` ladder around
  every async view (seen in LaFolieDouce PIM `product-form`, and elsewhere).
  Idea: a single component with three inputs — `loading` (bool), `error`
  (string | null), `empty` (bool, "not found / no data") — that renders
  `fold-loading` / an error `fold-callout` / `fold-empty-state` respectively, and
  projects the default slot only once resolved. Decide: input shape (three flags
  vs a single discriminated `state`), whether `empty` vs `error` messaging is
  configurable via inputs or projected slots (`[loading]`/`[empty]`/`[error]`
  named slots for full control), and the precedence order (error > loading >
  empty > content). Composes the existing `fold-loading` + `fold-empty-state` +
  `fold-callout` — no new primitives.
- **[2026-08-04] `fold-menu` — reduce the `routerLinkActive` boilerplate (and
  decide whether a data-driven `[items]` API earns its place).** With
  `@angular/router` now an **optional peer** (2026-08-04), the menu can afford a
  tighter Router integration. Two frictions to weigh, don't lock yet:
  1. **Active-state boilerplate.** `fold-menu-item` is an attribute component
     (`a[fold-menu-item]`) that stays Router-agnostic by design — but every call
     site hand-wires `routerLinkActive #r="routerLinkActive" [active]="r.isActive()"`
     (seen across the SH3PHERD workspace rail + LaFolieDouce shells). Options:
     (a) an **opt-in** `autoActive` on `fold-menu-item` that injects the optional
     `RouterLinkActive` (via `inject(RouterLinkActive, { optional: true })`) and
     derives `active` from it — zero wiring when Router is present, unchanged when
     absent; (b) a host directive `foldMenuItemActive` the consumer adds next to
     `routerLinkActive`; (c) leave it (the explicit binding is honest). Lean (a),
     but **probe the injection timing** — `RouterLinkActive`'s `isActive` is not a
     signal today, so deriving reactively may need a `computed` over a
     `toSignal(router.events)` or its `isActiveChange` output. Measure before
     committing.
  2. **Data-driven `[items]`?** The menu is projection-only (coloured sections +
     `a[fold-menu-item]`). A `[items]` array API (like `fold-listbox` gained)
     would cut the repeated section/item markup in the app shells — but the menu's
     value is its _rich_ projected items (badges, avatars, custom rows), which an
     array API flattens. **Only generalise on a 2nd real consumer that wants the
     data form**; the projected API stays the default. Cross-ref the deferred
     sub-menus / nested-menu item (top of this file) — decide the item model once,
     together.
     Decision gate: ship (1a) if the injection-timing probe is clean; keep (2) a note
     until a consumer asks. Sequence after `fold-breadcrumb` / `fold-back-link`.

- **[2026-07-26] Should the specs be type-checked under the strict
  `tsconfig.json`?** Probe done 2026-07-25: `tsconfig.spec.json` **extends** the
  strict base (so it inherits `noUncheckedIndexedAccess` /
  `exactOptionalPropertyTypes`), but **no gate runs it** — the real gates are
  `tsconfig.app.json` (excludes `**/*.spec.ts`) + `tsconfig.lib.json` (lib only,
  no specs). Result: `tsc -p tsconfig.spec.json` reports **~70 errors across ~11
  spec files** (avatar-list, choice-row, data-table, field-list, timeline, toast
  ×2, file-dropzone, tabs, view-nav, repeat-press). Three were cleaned with the
  avatar work (view-nav, repeat-press, avatar-list); **~8 files remain**. Decide:
  (a) wire `tsc -p tsconfig.spec.json` into pre-push/CI and clear the backlog
  (specs get the same strictness as prod — catches stale `!`/index bugs in
  tests), or (b) relax `tsconfig.spec.json` to drop `noUncheckedIndexedAccess`
  for specs (accept looser tests, no backlog). Cross-ref the P0 "spec
  `as unknown`" note in Road to 9.5 §2 — same theme (specs are outside the type
  gate today).

- **[2026-07-26] A dev-only token/theme editor — as a framework-agnostic
  overlay, not a lib component.** Tokens (`--fold-color-*`, space, radius) ARE
  the public theming API; a live editor is their natural authoring tool (instant
  feedback vs "edit var → reload → squint"), and the contract-tests
  (accent-contrast, status-ring) already exist to validate a hand-tuned theme so
  it can't silently break WCAG. **The hard constraint is "must not compile into
  the consumer's build."** Ranked by how reliably that holds: (a) lib component
  behind `isDevMode()` — ❌ still bundled (dead code present); (b) separate
  dev-only entry / `@fold/dev-tools` imported in dev — ⚠️ relies on Angular
  tree-shaking (a referenced component stays); (c) **framework-agnostic overlay**
  that only reads/writes CSS custom properties on `document.documentElement` via
  the CSSOM (`getComputedStyle` → swatches+inputs → `style.setProperty` live →
  export the diff as a CSS block) — ✅ never imported, so structurally never in
  the Angular build; works on ANY fold consumer; version-decoupled.
  **Recommendation:** build it as (c) — a standalone overlay/DevTools-panel — and
  embed the same engine as the gallery's built-in "theme designer" (the gallery
  already renders every component × 5 themes = instant whole-system regression).
  Validate exported themes against the existing contract-tests. Scope v1: read
  all `--fold-color-*`, edit live, export diff; contrast warnings as a
  fast-follow. **Decide overlay-vs-entry-point in a short design note before
  coding** (a real architecture fork). Separate initiative from the components.
  - **Precedent set (2026-08-03): the `fold-ng/devtools` entry.** The icon devtool
    (`FoldIconDevtoolComponent`) shipped the **opt-in secondary-entry** pattern —
    option (b) above — because an _icon_ tool must read `FoldIconRegistry`, so it
    can't be framework-agnostic (c). It's kept out of prod by living in a separate
    `exports` entry a consumer only imports behind `if (isDevMode())` + a dynamic
    `import("fold-ng/devtools")`. A theme editor that only touches CSSOM should
    still prefer (c), but if it ever needs Angular it now has a home. **Follow-ups
    (both ✅ 2026-08-04):** (1) `src/devtools/ng-package.json` makes `fold-ng/devtools`
    a real ng-packagr secondary entry in the **published build** — it compiles to its
    own FESM + d.ts and imports the primary `fold-ng` by name (its own rootDir forbids
    relative cross-entry imports; the monorepo's vite/vitest alias `fold-ng` →
    `src/public-api`). ng-packagr flattens the module id `src/devtools` into the
    on-disk name + the `./src/devtools` export key, so `finalize-dist` normalises it to
    the public `./devtools` subpath (+ a `dist/devtools/` node10 manifest); `attw` is
    all-🟢 and `publint` clean for `fold-ng/devtools`. (2) the api-surface guard now
    walks an ENTRIES list (`.` + `./devtools`), snapshotting the devtools surface too.

- [x] **[2026-07-28] Tokenised scrollbar styling — including thumb radius.**
      ✅ Shipped in scroll-system Slice C (2026-08-04). Strategy (b): standard
      `scrollbar-width`/`-color` inline + a `@supports selector(::-webkit-scrollbar)`
      layer in `tokens.css` for the radius. Opt-in on the containers fold owns — the
      shell content box (`.fold-shell-scroll`) and every `[foldScrollRegion]`
      (`.fold-scroll-region`), not global. Tokens `--fold-scrollbar-size` / `-radius`
      / `-thumb` / `-track`, thumb derived from the surface text so it adapts per
      theme + surface. Original write-up below.
      <br>Fold
      themes everything else via tokens, but scrollbars are still browser-default,
      which reads as un-designed inside the glass shell/panels. Want a house
      scrollbar (track/thumb colour, thumb width, and **radius**) driven by tokens
      (`--fold-scrollbar-*`), opt-in on the scroll containers we own (panel body,
      data-table, shell rails). **The catch to probe:** the standard
      `scrollbar-width` / `scrollbar-color` props (Firefox + Chromium) give colour
      and thin/auto **but no radius** — a rounded thumb only exists via the
      non-standard `::-webkit-scrollbar*` pseudo-elements (WebKit/Blink), and the
      two can't be mixed on the same element cleanly. Decide the strategy:
      (a) standard props only (colour + thin, no radius, universal), or
      (b) a `@supports selector(::-webkit-scrollbar)` layer that adds the radius
      on Blink/WebKit and degrades to the standard props elsewhere. Also decide
      **global vs opt-in** (styling every scroller vs a `.fold-scroll` utility /
      per-component flag) — global risks fighting consumer apps. Ship the tokens
      first; wire the owned scroll containers once the strategy is picked.
- **[2026-07-29] Preserve reading position when content above resizes / reflows.**
  ⏳ **Partially shipped in Slice C (2026-08-04):** native `overflow-anchor: auto`
  is now set on the shell content box + every `[foldScrollRegion]`, covering the
  **content-mutation** half. The **viewport-resize** correction below is the one
  deferred piece — it wants a `ResizeObserver` adjustment that jsdom can't
  exercise, so it waits for a real reflow case (the B2B catalogue) to design +
  test against rather than shipping an untested timing hack. Original write-up:
  <br>
  When a consumer resizes the window (or an upper element reflows) while reading a
  long list — e.g. LaFolieDouce B2B scrolling the product catalogue — the viewport
  must **stay on the row they were reading**, not jump. Browser **scroll anchoring**
  (`overflow-anchor: auto`, the default) handles _content mutations_ (an item added
  above shifts scroll to compensate) but does **not** cover **window/viewport
  resize** — a narrower window reflows the fluid grid into more rows, the total
  height changes, and the anchor is lost. So this is a real gap, not "just leave the
  default on". **Probe the strategy before locking:** (a) opt-in on the scroll
  containers fold owns (shell `<main>`, panel body, data-table) — capture the
  top-most fully-visible anchor element before a resize, restore its offset after
  (a `ResizeObserver` + `scrollIntoView`/delta-correct, reduced-motion-safe); vs
  (b) a `[foldScrollAnchor]` directive apps put on the scroll container of any long
  list. Also verify we're not **breaking** the native anchoring we already get:
  `transform`/`overflow-anchor: none`/certain sticky headers suppress it — audit
  the shell + data-table for those. Cross-refs the scrollbar Explore item (same
  "scroll containers fold owns" surface). Motivating case: the B2B catalogue
  (`aspect-ratio` cards in an `auto-fill minmax` grid — resize changes the column
  count, so it reflows hard). Ship the owned-container version first; the directive
  only if a 2nd consumer needs it on a non-fold scroller.
- [x] **Discoverability by intention — a "need → component" index** (consumer-friction
      Round 4 #4). ✅ Done — added a **"Find one by what you need"** intent table to the
      README (before the name-keyed reference table: intent → component, covering the
      hand-roll traps — eyebrow label, section header, field types, inline confirm,
      status pill, overlays, …), and a condensed **"Pick by intent"** block to `llms.txt`
      (highest leverage — the LLM consumer is exactly who hand-rolled `.h`). Also fixed
      the reference table's own discoverability gaps found in passing: added the missing
      `fold-select` / `fold-textarea` / `fold-date` / `fold-time` rows, dropped a
      duplicate `fold-range-slider` row, corrected the icon count. A gallery
      intent-search is a possible follow-up but the docs index covers the failure mode.
- [x] **Missing commerce glyphs** (consumer-friction Round 4 #3). ✅ Done — new
      **`commerce` category** (`COMMERCE_ICONS`, the 7th), 21 e-commerce glyphs
      (cart/bag/basket · package(+check/return) · tag/tags/barcode/qr/gift ·
      credit-card/wallet/receipt/coins/banknote/percent · truck/store/warehouse/map-pin),
      wired into `FOLD_BUILTIN_ICONS` + the `/icons` gallery. (They land in the
      always-bundled catalogue until the tree-shaking tech-debt below is addressed.)
- **DX sweep across the components.** AppShell now uses the house pattern —
  typed `input()` for the common case (discoverable, type-checked) with a CSS-var
  escape hatch for theming. Audit `Badge` · `ChoiceRow` · `TabNav` for remaining
  magic-string knobs and align them to the same pattern.
- **Panel-open glitch — RÉSOLU (2026-08-10), cause mesurée.** Ce n'était ni la
  scrollbar du conteneur interne, ni un repaint `backdrop-filter` : les deux
  pistes du write-up d'origine sont fausses. Mesure image par image sur la
  galerie (`e2e/panel.spec.ts`, désormais le test de non-régression) :
  1. un panneau démarre son animation **garé hors bord** (`translateX(100%)`) ;
  2. le dock ne coupait pas son débordement, donc ce panneau garé entrait dans
     le **débordement scrollable** de l'hôte positionné → `scrollWidth` 960 →
     1221 à l'ouverture ;
  3. le focus-trap y déplaçait le focus → le navigateur **scrollait l'hôte
     latéralement** pour le révéler (`scrollLeft` 0 → 261) : le contenu saute
     de 261 px à gauche ;
  4. la glissade entrante réduisait le débordement image par image, le
     `scrollLeft` était rogné d'autant → le contenu revenait en douceur.
     D'où la « translation gauche↔droite ».
     Correctif : `overflow: clip` sur `.panel-dock` (la cause structurelle — un
     panneau garé n'a rien à faire dans le débordement de qui que ce soit) +
     `focus({ preventScroll: true })` à l'activation du focus-trap (entrer dans
     un overlay ne doit jamais scroller la page derrière). Vérifié isolément :
     le `clip` seul suffit ; `preventScroll` seul masque le symptôme mais laisse
     le débordement anormal. Les deux sont gardés — le second se justifie tout
     seul.
- **`rail-primary` sizing model — resolved.** Now `auto` (content-driven), like
  `rail-secondary`: each rail component owns its width and the grid follows —
  needed once `fold-menu` gained an expanded state (it takes its content width
  with no JS measurement). Trade-off: `fold-menu` reads the shell's
  `--fold-shell-rail-width` var → intra-package coupling, accepted-with-rationale
  (ledger #11 in `dev-rules.md`).
- **Publish build.** `ng-packagr` target vs. staying source-consumed inside the
  monorepo and only building for external publish (see Phase 4).
- **SCSS surface.** Expose the SCSS mixins alongside the CSS tokens, or ship
  CSS-only?
- **A small `fold-strong` (inline emphasis) component?** An inline text primitive
  for emphasised words — a `tone`/`color` option (primary · muted · a status
  colour) and an optional `href` so an emphasised word can also be a link.
  Motivating case: the home lede already bolds "Angular 22 · responsive ·
  accessible" with a one-off `.home-lede strong` rule, and this recurs (feature
  copy, callouts). **Open question first (generalise on the 2nd real use, not by
  anticipation):** does it earn a component, or is it just `<strong>` + a token
  utility class? Probe: count the real emphasis-with-colour/link sites across the
  app before extracting. If it lands, keep it inline-only (no block behaviour),
  reuse the semantic colour roles, and let the link half compose with
  `fold-link` rather than re-implementing anchor/`rel` handling.

## Tech debt

Deliberate compromises taken to keep momentum — tracked so they get paid back,
not forgotten.

- **`fold-icon` built-in set is not tree-shakeable.** `FoldIconRegistry` seeds
  itself with `FOLD_BUILTIN_ICONS`, which spreads all seven sets
  (`ui`/`nav`/`commerce`/`music`/`status`/`people`/`brands` — ~135 icons). Because
  the registry statically references the merged catalogue, **every app that renders
  a single `fold-icon` bundles all ~135 SVG strings**, used or not. Nothing drops.
  - **Why it's blocked:** tree-shaking is static — as long as the registry
    references the full catalogue, the bundler must keep it. The fix is to
    **decouple the registry from the catalogue** (seed it empty) and make
    provisioning explicit, which is a **DX/breaking change**: `<fold-icon>` would
    no longer "just work" with zero config — the app must `provideFoldIcons(...)`
    what it uses.
  - **Grain options:** (a) _per-set_ — keep `UI_ICONS`/`NAV_ICONS`/… exported,
    app does `provideFoldIcons({ ...UI_ICONS, ...NAV_ICONS })`; only imported sets
    bundle (coarse — importing a set pulls all its icons). (b) _per-icon_
    (Lucide-style) — one named export per icon, `provideFoldIcons([search, bin])`;
    only referenced icons bundle (finest, but 114 exports + the kebab→identifier
    problem, e.g. `arrow-back`, needs a `{ name, svg }` shape or camelCase ids).
  - **Free either way:** `FoldIconName` is a **type** (`keyof typeof
FOLD_BUILTIN_ICONS | (string & {})`), erased at build — autocomplete for all
    114 names survives even when the runtime bundles only the provided subset.
  - **To fix:** seed the registry empty; keep `FOLD_BUILTIN_ICONS` as an opt-in
    "give me everything" export; migrate the app's bootstrap to `provideFoldIcons`
    with the ~104 icons it actually uses (audited: `grep '(name|icon)="…"'` across
    `apps/frontend-webapp`); document the provisioning step in the README. Decide
    grain (per-set is the pragmatic default; per-icon only if bundle size proves
    it worth the export churn). **Not by anticipation — the app uses ~104 of 114,
    so the saving is small today; revisit when a 2nd consumer wants a lean subset,
    or when the catalogue grows past a few hundred.**

- **App settings pages went full-width when `fold-page-layout` dropped
  `wide`/`fluid`.** The page scaffold no longer caps the column (width is a
  content concern now). Four product pages leaned on the old implicit 780 cap and
  now fill: `admin-details`, `admin-billing`, `admin-integrations`,
  `admin-danger` (`apps/frontend-webapp/src/app/features/company/company-admin-page/`).
  **To fix:** per page, either accept full-width or wrap the content in a
  max-width container to keep the readable measure. Low priority — they render,
  just wider.
- **`fold-measure` deferred (2nd-use rule).** Narrowing a block to a readable
  width is the content's job — for now a plain inner `div` with a `max-width`.
  If it recurs across enough real pages to be boilerplate, extract a tiny
  `fold-measure` (max-width + centered, one token). **Not by anticipation —
  build it on the 2nd real use, nothing now.**

- **`ScrollLockService` is effectively a no-op.** `html, body` are already
  `overflow: hidden`, so locking `body.overflow` changes nothing. Either drop it,
  or make it lock the app's real scroll container. **No longer tied to the
  panel-open glitch** — that one is diagnosed and fixed (above), and the lock was
  not involved. In a shell the real scroll owner is the `ScrollRegionRegistry`,
  which is already frozen alongside; so the honest question now is whether this
  service still earns its place at all, outside a shell.
- **`PanelHostComponent :host { display: contents }`** landed as layout hygiene
  (the overlay host claims no layout box). **Settled:** it was never related to
  the open-panel glitch — the cause was the dock's unclipped overflow, and
  `display: contents` was already doing its own job correctly.
- _`fold-app-shell` / `foldElevated` items moved to **Roadmap 1.0.1** (top of file)._
- [x] **Re-export shims — paid back.** The `app/shared/{panel,toast,avatar,
avatar-detail}/*` shims that re-exported `fold-ng` are deleted; all ~115
      consumers now import `fold-ng` directly (duplicate imports merged). Only
      real app components remain under `app/shared/panel/` (`panel-header`).
- **Package is outside the quality gates.** No ESLint / CI / pre-push yet
  (cross-ref Phase 0) — the package's own tests run, but nothing enforces them.
- **App-local leftovers.** `rating` tokens aren't in the package yet — waiting on
  a first consumer to justify the role. (`success` landed with the toast.)
- **Orphaned icon assets.** With `Icon` inlined into the package, the app's ~100
  `src/assets/icons/**/*.svg`, `shared/icon/svg.d.ts`, and the `angular.json`
  `".svg": "text"` loader are now unused (nothing imports `.svg`). Harmless but
  cruft — delete them (and the loader) in a follow-up once the package icon set
  is confirmed as the single source of truth.
- **`fold-number-input` stays on `type="number"` — i18n formatting deferred.**
  Deliberately native `type=number`: robust parsing, the mobile numeric keyboard,
  and native validation for free. The cost is it can **never** display grouped
  thousands (`1 234`) and `inputmode` is ignored — both require `type="text"` + an
  `Intl.NumberFormat` display/parse layer (the React Aria / Ark UI approach, which
  never uses `type=number`). A full `type=text` migration (`role="spinbutton"` +
  `aria-value*` + `inputmode` + draft-string editing + locale parse/format +
  optional grouping) **was built and rolled back on 2026-07-18** — the app has no
  monetary field yet, so the flexibility isn't earned (generalize on the 2nd real
  usage, not by anticipation). **Trigger to revisit: the first currency/amount
  field.** Verdict vs React Aria `NumberField`: **library-grade in craft, one tier
  below in scope** — the whole gap is i18n/formatting + the `type=number` quirks
  (FR users can't type a comma decimal on some keyboards; accepts `e` notation),
  nothing else. Everything around it is already premium: pure `settleNumber`
  (snap→round→clamp, exponent-safe precision, NaN guard), the extracted
  `foldRepeatPress` hold-repeat, unified keyboard stepping, wheel-blur, a11y
  (`aria-describedby`, steppers out of the tab/AT tree), and a dev-warn when a
  snapped `max` sits off the step grid. Missing even in a `type=text` future:
  PageUp/PageDown (×10) + Home/End (→min/max), stepper acceleration, RTL /
  non-Latin numerals.
- **App-side: string-modelled contract forms block `fold-number-input` adoption.**
  The company contract-detail forms (`AddendumForm`, the terms form in
  `contract-detail-page.helpers.ts`) model their numeric fields as **`string`**
  (`comp_amount`/`comp_pct`/`trial_period_days`/`work_time_percentage`), because
  the controllers reconcile `%↔amount` and keep the raw typed text. So those
  `<input type="number">` fields were **left native** in the select/text sweep:
  `fold-number-input` is `number | null` (model mismatch + risk to the financial
  reconciliation), and downgrading them to `fold-input` (text) would lose the
  numeric keypad + `min`/`max`/`step`. **Fix = refactor those form models
  `string → number` first**, then adopt `fold-number-input` (and drop the manual
  `inputValue` parsing). Until then the currency/pct/amount/% fields stay native
  — a deliberate, tracked gap. Migrated cleanly already: the selects (Devise) and
  the text fields (`Intitulé du poste`, both `Motif` — the latter dogfooding the
  new `optional` label marker). Dates stay native (no DS date component yet);
  file upload is the dropzone, not a field.

- **App-side: migrate the native `<input type="checkbox">` sites to
  `fold-checkbox`.** `fold-checkbox` shipped (forms/), but the app still hand-rolls
  ~20 native checkboxes with `accent-color` styling (global `src/styles.scss`
  `form input[type="checkbox"]` + per-feature `.check`/`.toggle` blocks in inbox
  preferences, scheduling/absence policy pages, artist-profile, notifications
  tab, edit-template popover, activate, permission-sets, …). **This is an APP
  chore, not lib work** (fold-ng side is done). Migrate each to `<fold-checkbox
[(checked)]=… label=…>` (or `ariaLabel` where the label is separate), delete
  the local checkbox CSS, and drop the global `accent-color` rule once the last
  native one is gone. Watch the few that are actually **toggle switches** styled
  as checkboxes (inbox `.toggle`) — those want a future `fold-switch`, not
  `fold-checkbox`; leave them until it lands. Signal-forms sites bind
  `[formField]` directly (fold-checkbox is a `FormCheckboxControl`).

- **`fold-timeline` — revisit the design + usage once a 3rd shape lands.** The
  component grew fast (2 real consumers: the vertical avenants rail + the
  horizontal signature stepper) and is healthy, but it now carries **two
  personalities behind one `orientation` switch**: _vertical = navigable history_
  (`<nav>`, buttons, click-emit) vs _horizontal = progress stepper_
  (`role="group"`, a derived `role=progressbar` fill, mobile collapse). They share
  the dot-rail primitive (dot + label + date + `variant` + `icon` + `#node`
  template + `clickable`), which is exactly why we fused them — but the fusion is
  the seam where debt will accrete. Reflections to act on _when_ it earns it:
  - **Don't split preemptively** (generalize on the 2nd real use, keep the through
    line). The clean decomposition, if a trigger fires, is a low-level
    `FoldTimelineRail` primitive with two thin compositions over it —
    `fold-timeline` (vertical/navigable) and `fold-stepper` (horizontal/progress,
    owns the progressbar). **Triggers:** (1) a 3rd orientation/mode; (2) the
    progress stepper is wanted **outside** a timeline (the progressbar earns its
    own life); (3) mode-specific inputs multiply (today only `progress` is
    strictly horizontal).
  - **Cascade consistency.** `variant` (plain/hollow) now cascades
    timeline-default → node-override (`node.variant ?? timeline.variant`), matching
    the intended pattern. `square` and `datePlacement` are still **timeline-only**
    (no per-node override) — fine today (mixed dot shapes / date placement per node
    has no real use), but if one is ever needed per node, apply the **same
    `node.x ?? timeline.x` cascade**, not a new ad-hoc knob.
  - **`#node` template + opaque `state` string = the extensibility valve.** It's
    the deliberate escape hatch for heterogeneous nodes (a "en attente" badge)
    **without** exploding the node into props or introducing an `fold-milestone`
    child component (evaluated and **rejected** — it fights the derived
    progressbar/aria, which needs the parent to own aggregate node state; and
    dynamic lists still need `@for` over data). Watch that `state` doesn't become
    a grab-bag; if consumers start encoding structured data in it, promote to a
    typed generic `FoldTimelineNode<T>` with `data?: T`.
  - **Mode-specific inputs aren't signalled.** `progress` is a no-op in vertical;
    nothing warns. Cheap clarity win (not yet done): a `isDevMode()` warning on a
    mode-mismatched input (the `isStepAligned` pattern from `fold-number-input`) +
    doc which inputs matter in which orientation.
  - **Node interface is at ~10 optional fields** (`key`/`id`/`clickable`/`label`/
    `date`/`displayDate`/`icon`/`done`/`variant`/`state`). Still coherent, but it's
    the metric to watch — the next 2–3 additions are the signal to reach for the
    rail-primitive split or a richer template context rather than more fields.

- **`fold-toast` — library-grade gaps (judged 2026-07-19).** Verdict : archi +
  a11y de base + cycle de vie = top décile ; ce qui le sépare de Sonner / Radix /
  React-Aria = 4 manques UX, classés. Déjà **excellent** (à ne pas casser) : SRP
  net (toast présentationnel qui possède son propre timer via `effect(onCleanup)` /
  container = stacking / service = queue / config = policy), a11y (`role`+
  `aria-live` error=assertive vs polite, close explicite `aria-label`, icônes
  `aria-hidden`), policy de durée (`durationByVariant→default→baked`, `??`
  préserve `0=sticky`, **error sticky par défaut**), `animate.leave` +
  `prefers-reduced-motion`, `@Service()` (idiome Angular 22, vérifié réel).
  À faire, dans l'ordre :
  - [x] **Pause au survol/focus (LE gros manque, WCAG 2.2.1 Timing Adjustable).**
        ✅ Fait (2026-08-10). Survol **et** focus clavier gèlent le compte à
        rebours ; la reprise dépense ce qu'il RESTE, pas une durée neuve (sinon
        un toast se renouvelle à chaque passage de souris et ne part jamais). Le
        budget vit en champs simples, pas en signaux : rien ne l'affiche, et une
        pause ne doit pas déclencher de détection de changement. Un focus qui
        saute message → croix ne compte pas comme une sortie (`relatedTarget`).
        État exposé en `data-paused` ; 3 specs.
  - [x] **Cap de stack + dedup.** ✅ Fait (2026-08-10) — `maxVisible` (défaut :
        pas de cap) et `dedupe` (défaut **actif**) dans `provideFoldToasts`. Deux
        écarts assumés par rapport à la note d'origine : (1) le cap **évince le
        plus ancien** au lieu de mettre en file d'attente — une file ne se vide
        que quand un toast visible part, et un toast collant (une `error`, par
        défaut) ne part jamais : le reliquat resterait coincé derrière ; (2) donc
        pas de « +N » de débordement, mais un **`×N`** sur le message dédupliqué,
        qui relance aussi son compte à rebours (un message qui se répète est un
        message encore d'actualité). 6 specs + démo galerie « Repeats ».
  - [x] **`show()` retourne l'id (ou un handle).** ✅ Fait (2026-08-10) — retourne
        l'id ; un appel dédupliqué retourne celui du toast dans lequel il s'est
        replié. La **mise à jour** d'un toast (« Upload… » → « Uploadé ») reste
        ouverte : ce serait un `update(id, …)`, à faire au 1er usage réel.
  - [x] **Id via compteur, pas `crypto.randomUUID()`.** ✅ Fait (2026-08-10) — via
        `FoldIdService` (`fold-toast-N`) plutôt qu'un compteur local : le service
        existait précisément pour bannir `randomUUID`, en dupliquer un second
        aurait recréé la divergence qu'on corrigeait.
  - [ ] Secondaires (scope à assumer) : input `position` (figé bottom-right
        aujourd'hui) ; slot **action** (« Annuler »/« Réessayer ») ; hotkey pour
        focaliser la région toasts (F6, cf. Radix/Sonner).

## Button family — Road to 10 vs the benchmark (IMMEDIATE)

Judged as an **internal DS** the button family (`fold-button` · `fold-button-icon`
· `fold-toggle-icon`) is **9.5** — token-only, signals-first, correct
momentary/toggle `aria-pressed`, reduced-motion, `booleanAttribute`, focus-visible.
Judged as a **market tenor** (Radix · shadcn · MUI · Spectrum · Mantine) it's
**~7**: not bugs — **capabilities the tenors treat as baseline and we don't ship**.
This section closes that delta to **10**. Ordered by impact on the gap; the top
three are ~all of the 9.5→10 distance.

- [x] **1 · Polymorphism — render as `<a>` (the archi lever). DONE.** `fold-button`
      was a hard `<button>`; a link styled as a button was impossible. Converted to
      an **attribute-selector component** `button[foldButton], a[foldButton]` (the
      Angular-Material pattern — a `@Component` whose host IS the native control, so
      it keeps its SCSS, unlike a styleless `@Directive`). Anchors gain
      `href`/`routerLink`/`target`; disabled anchors get `aria-disabled` +
      `tabindex="-1"` + `pointer-events:none`; buttons keep native `disabled`/`type`.
      Custom `clicked` output dropped for native `(click)`. ~262 sites codemodded
      (incl. inline `.ts` templates + 6 nav → `<a foldButton>`); full app AOT + tsc + lint + tests green (0 net new failures). Icon shorthand kept (the template
      survives). **No back-compat wrapper — all consumers migrated (pre-release).**
- [x] **2 · `loading`/busy state. DONE.** Built the `fold-spinner` primitive first
      (currentColor arc, sized off the icon scale so width stays stable,
      reduced-motion → static ring, `label`→`role="status"` else decorative). Then
      added `loading` (booleanAttribute) to `fold-button` + `fold-button-icon` +
      `fold-toggle-icon`: the spinner replaces the leading glyph, the control goes
      `aria-busy` + blocked, and stays **lit** (not dimmed like `disabled`) — the
      MUI `LoadingButton` shape. Spinner exported + gallery page + 4 specs; button
      loading specs added. Package + app gates green.
- [x] **3 · Orthogonal `emphasis` × `intent` (the Radix model). DONE.** Split the
      flat 5-value `variant` into `emphasis` (solid·soft·outline) × `intent`
      (primary·neutral·warning·danger) — filled-destructive and every other combo
      now expressible. Zero-visual-regression: the 5 legacy combos render
      identically at rest (a token-driven `--b-*` engine; hover tints unified
      within ~2%). ~256 sites codemodded (incl. 5 dynamic `[variant]` ternaries →
      paired `[emphasis]`/`[intent]`). Chose `intent` over `tone` to avoid the
      icon-button vocabulary collision (rule 4.9). App AOT + tsc + tests green.

<details><summary>original analysis</summary>

- [ ] **3 · Orthogonal `variant` × `intent` (the Radix model).** Today `variant` is
      **one flat scale folding emphasis + intent** (`primary`/`solid`/`ghost` are
      emphasis; `recommended`/`critical` are intent) — Bootstrap-tier, a rung below
      Radix's orthogonal `variant` (solid/soft/outline/ghost) × `color`
      (neutral/accent/warning/danger). Splitting enables the un-expressible combos
      (filled-destructive `solid`+`critical`) a tenor assumes. **Cost: ~230 call
      sites** (`primary`×55 · `solid`×62 · `ghost`×98 · `critical`×14 ·
      `recommended`×2 + 8 dyn bindings) → a codemod, not hand-edits. Deliberately
      **not** done for the internal DS (over-abstraction for combos zero screens
      use — see `docs(ui): honest fold-button variant taxonomy`); it re-enters scope
      **only** because the goal here is explicit benchmark-parity. Do it as: add
      `emphasis` + `intent` inputs, keep `variant` as a deprecated computed alias
      for one release, codemod the app, then drop `variant`. _(Shipped without the
      alias — pre-release, so all sites were codemodded and `variant` dropped
      outright.)_

</details>

- [x] **4 · `forced-colors` (Windows high-contrast). DONE.** `all: unset` +
      `color-mix` surfaces could **vanish** under `@media (forced-colors: active)`
      (and `solid`'s transparent border stayed invisible). Added forced-colors
      blocks to `fold-button` + the shared icon-button surface: `ButtonText`
      borders so the shape survives, `CanvasText` focus ring, `GrayText` disabled.
      Matches Carbon/Spectrum/FluentUI.
- [ ] **5 · `disabled` semantics — `aria-disabled` option.** Native `disabled`
      drops the button from the a11y tree (a screen-reader user can't reach it to
      learn _why_ it's off). Best-in-class (React-Aria) keeps it focusable via
      `aria-disabled` + suppressed activation. Offer it (a `disabledReason`/
      `aria-disabled` path) where the _why_ matters (form submit gated on
      validation). Debatable default — decide, don't drift.
- [ ] **6 · Family breadth — the compositions a tenor ships.** `ButtonGroup`
      (segmented attached buttons), `SplitButton` (primary action + menu caret),
      `ToggleGroup` (single/multi segmented, built on `fold-toggle-icon`),
      `MenuButton` (the disclosure-icon pattern already flagged on the tab-config
      triggers — `aria-expanded`, not `aria-pressed`). Scope, not quality — but a
      "tenor" is judged on breadth. **Generalize on the 2nd real use**, not by
      anticipation: extract each when a 2nd concrete site wants it.

Lib-wide feeders already tracked elsewhere and **also** required for a true 10:
tree-shakeable ESM distribution (§Tech debt · `fold-icon`), axe + visual-regression
tests (§Road to 9.5 · 2), a browsable docs/Storybook + a 2nd consumer (§Road to
9.5 · 5). Land 1–4 here and the family is **honestly ~9.5 vs the benchmark**; 5–6

- the lib-wide feeders are the last half-point to **10**.

## Hardcore-review follow-ups (2026-07) — see `dev-rules.md` ledger

Done in the review pass: elevation tokens + the component-usage colour guard
(rule 1.3/1.4), avatar luminance ink (6.3), focus-trap visible-only (6.2). Still
open:

- **Extract hard-coded strings to inputs** (rule 5.1). `fold-paginator` + panel
  host/header carry French aria/labels; make them `input()`s with EN defaults,
  the app supplies French once. Flips the app's a11y language → coordinate.
- **Retokenise spacing/motion** (rule 1.5) and add a lint so it stays enforced
  like colour is.
- [x] **`inert` the background behind an open panel** (rule 6.2) — DONE. The
      host runs a `hideOthers` walk (host → `<body>`), restored on close; only the
      top-most panel traps. Full modal barrier, not just a keyboard trap.
- [x] **Panel close → `<fold-icon name="close">`** (rule 4.7) — DONE. The host's
      raw-`<svg>` template-panel header is gone; it renders the single
      `fold-panel-header` (which uses `<fold-icon>`), and the close label is the
      providable `provideFoldPanelLabels` token (English default). Also: component
      panels now have an accessible name (`aria-labelledby` → header title).

## Road to 9.5 (current: ~8.4/10)

The rating breakdown — Technique 9 · Modernité design 8.5 · Good practices 8.5 ·
DX 8.5 · Tests 7.5. Foundations are ~9; what's missing is **finish + proof**.
Ordered by impact on the score.

**Two feeders into this average, tracked apart:** the **P0 ship blockers**
(RELEASE-READINESS §2 — button-icon `aria-pressed`, the French a11y strings,
focus-trap `inert`, tab a11y (the view-nav/tabs split), the spec `as unknown`) each drag a component
below its cluster and must clear first; and **Roadmap 1.0.1** (top of this file)
is the shell's own 8.5→9.5 slice, whose a11y + snapshot items are the same levers
as §2/§3 here. This section is the **lib-wide** remainder.

**1 · i18n — the one real portability leak (Good practices 8.5→9, DX 8.5→9).**
The blocker to the "reusable across projects" promise (rule 5.1).

- [ ] Every user-facing / `aria-label` string → `input()` with an English default.
      `fold-paginator` (`perPage`/`of`/`empty`/`prev`/`next`/`page`). **Panel close
      DONE** — `provideFoldPanelLabels({ close })` token (English default), app sets
      `"Fermer"` once.
- [ ] App supplies French once (paginator call site). **Panel: done** (one
      `provideFoldPanelLabels` in `app.config.ts`).
- [x] Fold the panel close `<svg>` into `<fold-icon name="close">` (rule 4.7) —
      DONE (host renders the single `fold-panel-header`).

**2 · Tests — happy-path only today (Tests 7.5→9).**

- [x] **Dead-binding gate** — `lint:ui-templates` runs Angular `strictTemplates`
      (ngtsc) over the lib + gallery, wired into CI, with a bite fixture. Catches
      removed-input / missing-property template errors `tsc`/Vite miss. First
      template-level proof (see `documentation/fold-lint.md`).
- [ ] a11y automation: axe-core assertion in the panel/overlay specs (role,
      `aria-modal`, focus order, Escape) — not just "it renders".
- [ ] Visual-regression baseline (Playwright/Vitest-browser snapshots) for each
      component × dark/light — the theme flip is claimed but never pixel-verified.
      **Includes the app-shell mode-combos** itemised in Roadmap 1.0.1 (drawer
      open/closed, elevated rail, footer scroll/pinned, mobile collapse) — the
      crop bug shipped for lack of exactly this.
  - [ ] **⚠️ The one suite that exists is ungated, and its baselines have
        rotted.** `e2e/calendar-visual.spec.ts` (3 tests: month × umbra/lumen +
        RTL) is the only visual coverage in the lib — and **nothing runs it**:
        `test:e2e` is `playwright test --grep-invert @visual`, and no CI job
        calls `test:e2e:visual`. So it is outside the release gate _and_ outside
        the PR gate. Measured 2026-08-10: all 3 fail, `Expected an image 940px
by 596px, received 960px` — a 20px width drift that dates from the
        scroll-system Slice A (`fold-page-layout` stopped owning its scroll),
        shipped in **0.9.0**. The baselines have therefore been wrong for a
        release and a half without a single red build.
        **Decide, don't drift:** (a) re-record the baselines
        (`pnpm test:e2e:visual --update-snapshots`) _after_ eyeballing the diff —
        the drift is expected, but blessing a diff you haven't looked at is how
        a real regression gets baked into the baseline; then (b) wire
        `test:e2e:visual` into a gate, or it will rot again the same way. Note
        the platform trap: snapshots are `-darwin` suffixed, so a Linux CI
        runner needs its own set (record in a container, or gate only on macOS).
        A visual gate nobody runs is worse than none — it reads as coverage.
- [ ] Coverage floor in CI; fill the thinly-tested components (menu, app-shell).

**3 · a11y depth (Modernité 8.5→9, and unblocks a real 6.2 gap).**

- [x] `inert` the background behind an open panel — DONE. `hideOthers` walk in
      `fold-panel-host` (host → `<body>`), restored on close; top-most-only trap;
      component-panel accessible name via `aria-labelledby`.
- [ ] Reduced-motion: gate the slide/fade animations behind
      `prefers-reduced-motion`. (`fold-toast` entrance + exit now do; sweep the
      rest — menu width transition, panel slide, hero glow.)
- [ ] Reconsider the px type scale (rule 1.6) — offer a rem opt-in for consumers
      whose root ≠ 14px, so user-zoom works. Currently an accepted deviation.

**4 · Discipline still aspirational (Good practices 8.5→9).**

- [~] Retokenise the hard-coded px spacing + `0.18s ease` motion to
  `--fold-space-*` / `--fold-motion-*`, then a lint guard (rule 1.5) so it's
  enforced like colour — no new debt. **Started:** the space scale gained
  `2xl/3xl/4xl/5xl` (24–48px, was capped at 20) and an **advisory**
  `lint:spacing` guard lists the raw-px `padding`/`margin`/`gap` burn-down
  (~130). **Remaining:** drain the list (exact matches snap safely; off-grid
  6/10/14 snap to nearest per-case), then `--strict` the guard. Motion not yet
  measured.

**5 · Proof + release (DX 8.5→9.5, Modernité 8.5→9).**

- [ ] A **second consumer** (even a tiny playground app) — the API is only
      validated by one app today; a 2nd reveals the hidden assumptions.
- [ ] Storybook (or a docs playground) so components are browsable, not just
      README rows.
- [ ] Real semver + a CHANGELOG; graduate from `0.0.0`. Wire the package into the
      repo quality gates (ESLint/CI/pre-push — cross-ref Phase 0). _Started:
      `lint:ui-templates` is the first CI gate that guards the package._

Land 1–4 and it's a clean **9**; 5 is what earns the last half-point — a design
system is only proven by a second user and a versioned release.

## Migrate app/shared/soft-warning → fold-callout

`app/shared/soft-warning` (selector `fold-soft-warning`, 7 usages) predates the
DS component and is superseded by `fold-callout`. It also carries three things
the DS version fixes: app-only tokens (`--color-warning-dim`, `--radius-md`),
a `::ng-deep` rule, and a fixed `role="note"`.

Migration, one commit:

- `variant="primary"` → `variant="info"` (a callout states a status, not a brand).
- The rest map 1:1; `icon` and the projected message are unchanged.
- Call sites: `contract-detail-page` (×3), `admin-integrations`, `admin-billing`,
  `admin-quotas`, `admin-danger`.
- Then delete `app/shared/soft-warning/` — its spec included.

Worth doing at the same time: `email-verification-banner` and
`post-termination-banner` are both hand-rolled callouts (the latter with a
literal ⏳ emoji as its icon). Both should be compositions over `fold-callout`
rather than their own chrome.
