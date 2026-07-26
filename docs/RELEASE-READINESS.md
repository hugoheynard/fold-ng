# fold-ng — Release-readiness

The ship checklist for the design system, component by component. `README.md` is
the consumer's guide, `dev-rules.md` is the contributor's contract — **this page
is the release gate**: for every public component it grades three things and lists
the concrete work to reach ship-quality.

- **DX** — is the API ergonomic for a senior consumer? Minimal, orthogonal,
  discriminated unions over flag-soup, sensible defaults, controlled/uncontrolled
  clarity, no forced boilerplate, no footguns.
- **Tests** — does the spec exercise the real behaviour surface (outputs, aria,
  edges, projection), or just the happy path?
- **Docs** — JSDoc with `@selector` + one-liner + `@example`, an accurate README
  row, and a gallery page that shows the real variants + a11y.

Legend: 🟢 ship-ready · 🟡 minor work · 🔴 blocker.

Scope audited: **33 components + the panel subsystem + 3 directives**, 96 public
exports, **564 test blocks across 78 spec files**, **114 built-in icons**. No
`any` / `as unknown` / `@ts-ignore` / `eslint-disable` / raw-colour violations in
component _source_ (the token contract holds); the lone spec-side `as unknown`
breach (P0-7) is now fixed too. Method: six parallel per-cluster audits, each reading every
`.ts`/`.html`/`.scss`/`.spec.ts` + the matching gallery page. **Updated
2026-07-26: `fold-data-table` completed its top-tier pass (selection, roving
keyboard, `mobileLayout`, `foldToolbar`, sticky/density; hardcore-review fixes)
and `fold-checkbox` shipped — both now ship-ready. `fold-inline-confirm` added
(extracted from SH3PHERD): the in-place destructive-action guard —
simple / type-to-confirm / secret, i18n, focus management — ships ready.**

---

## 1 · Scoreboard

Grouped by the same hierarchy as the component folders (`src/components/<category>/`)
and the gallery nav — **layout first**.

**Layout** — `src/components/layout/`

| Component           | DX  | Tests | Docs | Verdict                                                 |
| ------------------- | :-: | :---: | :--: | ------------------------------------------------------- |
| `fold-app-shell`    | 🟢  |  🟢   |  🟢  | **Ship-ready**                                          |
| `fold-page-layout`  | 🟢  |  🟢   |  🟢  | **Ship-ready** (gallery page; fills — no width cap)     |
| `fold-page-section` | 🟢  |  🟢   |  🟢  | **Ship-ready** — semantic `<section>`; box → fold-card  |
| `fold-hero-section` | 🟢  |  🟢   |  🟢  | **Ship-ready** — full-bleed splash; extracted from home |
| `fold-aside-layout` | 🟢  |  🟢   |  🟢  | **Ship-ready** (README row + `stackLeftFirst` test)     |
| `fold-nav-layout`   | 🟢  |  🟢   |  🟢  | **Ship-ready** (`as unknown as` fixed; README row)      |

**Navigation** — `src/components/navigation/`

| Component                        | DX  | Tests | Docs | Verdict                                             |
| -------------------------------- | :-: | :---: | :--: | --------------------------------------------------- |
| `fold-menu` (+ item/section/sep) | 🟢  |  🟡   |  🟢  | Test `resolvedPlacement`; aria strings as inputs    |
| `fold-nav-launcher` (+ nav-tile) | 🟢  |  🟢   |  🟢  | **Ship-ready**                                      |
| `fold-view-nav`                  | 🟢  |  🟢   |  🟢  | **Ship-ready** — real nav; `aria-current="page"`    |
| `fold-tabs` (+ tab-panel)        | 🟢  |  🟢   |  🟢  | **Ship-ready** — ARIA `tablist`, roving, `tabpanel` |

**Actions** — `src/components/actions/`

| Component             | DX  | Tests | Docs | Verdict                                                                                                     |
| --------------------- | :-: | :---: | :--: | ----------------------------------------------------------------------------------------------------------- |
| `foldButton`          | 🟢  |  🟢   |  🟢  | **Ship-ready** — `button[foldButton]`/`a[foldButton]`; `emphasis`×`intent`; `loading`; forced-colors        |
| `fold-button-icon`    | 🟢  |  🟢   |  🟢  | **Ship-ready** — now purely momentary (P0-1 fixed)                                                          |
| `fold-toggle-icon`    | 🟢  |  🟢   |  🟢  | **Ship-ready** — the toggle split out of button-icon                                                        |
| `fold-link`           | 🟢  |  🟢   |  🟢  | **Ship-ready** — `target`/`rel` (safe `noopener` default); `(clicked)` is a `MouseEvent`                    |
| `fold-inline-confirm` | 🟢  |  🟢   |  🟢  | **Ship-ready** — in-place guard; simple / type-to-confirm / secret; i18n; focus + Escape; emits typed value |

**Content** — `src/components/content/`

| Component                        | DX  | Tests | Docs | Verdict                                                   |
| -------------------------------- | :-: | :---: | :--: | --------------------------------------------------------- |
| `fold-card`                      | 🟢  |  🟢   |  🟢  | **Ship-ready** — accessible `interactive` contract        |
| `fold-hero-card`                 | 🟢  |  🟡   |  🟢  | Optional: assert `on-primary` text flip                   |
| `fold-context-card`              | 🟢  |  🟡   |  🟡  | `iconTone` pass-through test                              |
| `fold-element-title`             | 🟢  |  🟢   |  🟢  | **Ship-ready**                                            |
| `fold-field` / `fold-field-list` | 🟢  |  🟢   |  🟢  | **Ship-ready**                                            |
| `fold-badge`                     | 🟢  |  🟡   |  🟢  | Test `neutral`/`success` variants                         |
| `fold-status-badge`              | 🟡  |  🟡   |  🟡  | Bakes a domain vocabulary; `@example`                     |
| `fold-avatar`                    | 🟢  |  🟢   |  🟢  | **Ship-ready** — max-contrast ink; AA proven per palette  |
| `fold-avatar-detail`             | 🟢  |  🟢   |  🟢  | **Ship-ready** — forwarding + `@example` covered          |
| `fold-avatar-list`               | 🟢  |  🟢   |  🟢  | **Ship-ready**                                            |
| `fold-timeline`                  | 🟢  |  🟢   |  🟢  | **Ship-ready**                                            |
| `fold-choice-row`                | 🟢  |  🟢   |  🟡  | Gallery page; arrow-key a11y                              |
| `fold-data-table`                | 🟢  |  🟢   |  🟢  | **Ship-ready** — top-tier pass + gallery + hardening      |
| `fold-paginator`                 | 🟢  |  🟢   |  🟢  | **Ship-ready** — i18n labels (P0-2 fixed), focus, gallery |

**Feedback** — `src/components/feedback/`

| Component                          | DX  | Tests | Docs | Verdict                                                              |
| ---------------------------------- | :-: | :---: | :--: | -------------------------------------------------------------------- |
| `fold-callout`                     | 🟢  |  🟢   |  🟢  | Reference component — add missing README row                         |
| `fold-disclosure`                  | 🟢  |  🟡   |  🔴  | **No README row**                                                    |
| `fold-toast` (+ container/service) | 🟢  |  🟢   |  🟢  | Optional: `Dismiss` as input; SSR crypto guard                       |
| `fold-empty-state`                 | 🟢  |  🟢   |  🟢  | **Ship-ready** — gallery page (shared `/state`)                      |
| `fold-loading`                     | 🟢  |  🟢   |  🟢  | **Ship-ready** — real `fold-spinner` + `role="status"`; gallery page |

**Overlays** — `src/components/overlays/`

| Component                     | DX  | Tests | Docs | Verdict                                                                   |
| ----------------------------- | :-: | :---: | :--: | ------------------------------------------------------------------------- |
| `fold-panel-host` / `-header` | 🟢  |  🟢   |  🟢  | **Ship-ready** — accessible name, `inert` barrier, providable close label |

**Forms** — `src/components/forms/`

| Component            | DX  | Tests | Docs | Verdict                                                       |
| -------------------- | :-: | :---: | :--: | ------------------------------------------------------------- |
| `fold-input`         | 🟢  |  🟢   |  🟢  | Wire or drop dead `autofocus` input                           |
| `fold-checkbox`      | 🟢  |  🟢   |  🟢  | **Ship-ready** — native + `FormCheckboxControl`; gallery page |
| `fold-number-input`  | 🟢  |  🟢   |  🟢  | Extract — **299/300 lines**, one line from the gate           |
| `fold-select`        | 🟢  |  🟢   |  🟡  | README row; `[formField]` example                             |
| `fold-slider`        | 🟢  |  🟢   |  🟢  | **Ship-ready** — FormValueControl, real label, focus, gallery |
| `fold-range-slider`  | 🟢  |  🟢   |  🟢  | **Ship-ready** — [(value)], i18n aria, disabled, gallery      |
| `fold-file-dropzone` | 🟡  |  🟢   |  🟡  | **French default copy (portability)**; README row             |
| `fold-search`        | 🟡  |  🟢   |  🟡  | No accessible name; no clear/value                            |

**Foundations** — `src/components/foundations/`

| Component            | DX  | Tests | Docs | Verdict                                                                            |
| -------------------- | :-: | :---: | :--: | ---------------------------------------------------------------------------------- |
| `fold-icon`          | 🟢  |  🟢   |  🟢  | **Ship-ready** — shared sprite, trust guard, token sizes                           |
| `fold-spinner`       | 🟢  |  🟢   |  🟢  | **Ship-ready** — currentColor, icon-sized, reduced-motion; powers button `loading` |
| `[foldSurface]`      | 🟢  |  🟢   |  🟢  | **Ship-ready**                                                                     |
| `[foldStickyColumn]` | 🟢  |  🟢   |  🟢  | **Ship-ready** — `@selector`, README, gallery page                                 |
| `[foldRepeatPress]`  | 🟢  |  🟢   |  🟢  | **Ship-ready** — `@selector`, README, gallery demo                                 |

**Ship-ready today (29):** app-shell, page-layout, page-section, hero-section,
aside-layout, nav-layout, view-nav, tabs, card, avatar-list, callout,
element-title, field, field-list, nav-launcher, timeline, toast, surface, icon,
repeat-press, sticky-column, button, button-icon, toggle-icon, **data-table**,
**checkbox**, **paginator**, **slider**, **range-slider**. Everything else has scoped, mostly mechanical work below.

> **TODO · `fold-app-shell` layout coverage** — ~~`footer` slot~~ ✅ done (self-collapsing `footer` row + `footerLayout: inset|full`) · ~~mobile drops both rails with no way back~~ ✅ done — two modes via `mobileNav`: `drawer` (`[(mobileNavOpen)]` off-canvas drawer for the primary rail — scrim, `Escape`, focus-trap, closes on widen; `--fold-color-scrim` token) or `none` + a standalone `fold-nav-launcher` (full-screen tile grid) · ~~no skip-to-content link~~ ✅ done (skip-link → focusable `<main>`, `skipLinkLabel`) · ~~optional `contentScroll`~~ ✅ done (`clip|auto`) · ~~width-observer duplicated with nav-layout~~ ✅ extracted to `observeElementWidth` (both consume it) · **remaining → Roadmap 1.0.1** (TODO.md, top): rails as named landmarks, secondary rail reachable on mobile, visual-regression snapshots, `foldElevated` named scale + `foldSurface` owns bg (trigger-gated), drawer mechanics → `FoldDrawer*` on a 2nd use, and the right-rail / tertiary-rail decisions. **8.5/10 today; the 1.0.1 gap to 9.5.**

---

## 2 · Ship blockers (P0)

These are correctness, accessibility, or portability defects. A design system
that advertises "portable" and "accessible by default" cannot release with them
open.

**P0-1 · `fold-button-icon` announces momentary buttons as pressed toggles.**
✅ **Fixed** — split by semantics (rule 4.9): `fold-button-icon` is now purely
momentary (no `active`, no `aria-pressed`), and a new `fold-toggle-icon` carries
the toggle contract (`[(active)]` + always-present `aria-pressed` true/false).
The 5 app toggle sites were migrated (`toggled`), and both specs now assert their
mode. (Was `button-icon.component.ts:90`.)

**P0-2 · `fold-paginator` hard-codes French, non-overridable a11y strings. ✅ FIXED.**
All strings (`Pagination`, prev/next, `Page N`, the size aria-label + `per page`,
the `X–Y of Z` range, the empty text) now resolve from `FOLD_PAGINATOR_LABELS`
(English default), overridable app-wide via `provideFoldPaginatorLabels(partial)`
or per instance via the `labels` input. Parameterised strings (range, page) are
functions so a locale can reword, not just translate. Ledger item #6.

**P0-3 · Panel chrome hard-codes French "Fermer". ✅ FIXED.**
`fold-panel-header` now reads `FOLD_PANEL_CLOSE_LABEL` (default `"Close"`) with a
per-header `closeLabel` override; the app sets `"Fermer"` once via
`provideFoldPanelLabels`. The host renders that same header for template panels,
so the second hardcoded copy is gone entirely.

**P0-4 · `fold-file-dropzone` ships French default copy.**
`label` defaults to `'Glissez un fichier ou parcourez'`, `busyLabel` to
`'Téléversement en cours…'` (`file-dropzone.component.ts`). Every other component
defaults to English and lets the caller localise. Flip the defaults to
`'Drag a file or browse'` / `'Uploading…'`.

**P0-5 · Focus-trap does not `inert` the background. ✅ FIXED.**
`FoldPanelHostComponent` now marks every branch that doesn't contain a panel
`inert` (a `hideOthers` walk from the host up to `<body>`), restored exactly on
close — so the page behind is unreachable to pointer, Tab **and** the SR virtual
cursor. Only the top-most panel traps focus. A host spec asserts a sibling is
inert while a panel is open and cleared after. Ledger item #8.

**P0-6 · `fold-tab-nav` had no tab a11y contract. ✅ FIXED (by split).**
The old `fold-tab-nav` conflated two widgets. It was split by semantics:
`fold-view-nav` is a real **navigation** bar (`<a routerLink>` items, active
state from the URL via `routerLinkActive` + `aria-current="page"`), and
`fold-tabs` (+ `fold-tab-panel`) is the **ARIA Tabs** widget (`role="tablist"` of
`role="tab"` buttons, `aria-selected`, roving arrow-key focus, each tab wired to
its `role="tabpanel"`). Both ship with specs asserting their roles/keyboard.

**P0-7 · Strict-TS breach in a spec. ✅ Fixed.**
`nav-layout.component.spec.ts` used `as unknown as ResizeObserver` /
`as unknown as typeof ResizeObserver`. Resolved: the fake is now
`implements ResizeObserver`, so both the callback's `observer` arg and the
`globalThis` assignment type-check with no assertion. Zero `as unknown` in the
package.

---

## 3 · Cross-cutting cleanups (batch once, fix many)

Grouped so each can land as one atomic commit across the affected components.

**C-1 · `booleanAttribute` parity. ✅ Done.** Boolean inputs lacking the transform
their siblings have, so a bare attribute or `="false"` mis-coerces. Done for the
button family (`button`/`button-icon`/`toggle-icon` `disabled`) and for
`card.interactive` (now `booleanAttribute`, with a coercion spec).
(`page-layout.wide`/`fluid` no longer apply — both inputs were removed; the page
fills its container, width is a content concern.)

**C-2 · README table is out of sync (rule 4.6).** Exported public components with
**no README row**: `fold-callout`,
`fold-disclosure`, `fold-select`,
`fold-file-dropzone`, `fold-repeat-press`. (`fold-page-section` now has its own
row.) Add each row.

**C-3 · Stale / wrong README facts.**

- ~~Icon count says "102 today" / "~100" — actual is **114**.~~ ✅ Fixed
  (README now says 114; count derived from the built-in set).
- ~~`fold-loading` row claims "spinner + message" — there is **no spinner**.~~
  ✅ Fixed — a real `fold-spinner` (currentColor, icon-sized, reduced-motion)
  was built and now backs both `fold-loading` (`role="status"`) and the button
  `loading` state.

**C-4 · Missing JSDoc `@selector`/`@example` tags.** The bar (rule 4.6) is
`@selector` + one-liner + `@example`. Missing `@example` **tag** (a fenced block
exists, the tag doesn't): `status-badge`, `avatar`, `avatar-detail`. Missing
`@selector`: the layout trio
(`page-layout`/`page-section`/`nav-layout` — verify). Mechanical.
(`data-table` now carries both — done in the top-tier pass.)

**C-5 · Gallery coverage holes.** Shipped components with **zero gallery
presence** (fall back to the stub page — not among the Library nav entries):
`fold-empty-state` + `fold-loading` (a `state`
page), and `[foldRepeatPress]`. (`fold-data-table` now has its own `/data-table`
page, and `fold-checkbox` a `/checkbox` page.) `fold-choice-row` renders only incidentally inside
other pages (its `chips` layout + `count` badge are never shown), (`fold-slider` + `fold-range-slider` now have the `/slider` page.) A release
showcase must render every public component.

**C-6 · Hardcoded English UI strings that should be inputs.** Not portability
_blockers_ (they're English), but they can't be localised and break the
"user-facing text is an `input()`" rule: (range-slider suffixes ✅) menu toggle/chevron
`"Collapse menu"`/`"Expand menu"` (`menu.component.html:34`), toast close
`aria-label="Dismiss"` (`toast.component.html:9`), range-slider
`" minimum"`/`" maximum"` aria suffixes (string-concat), `fold-loading` default
`"Loading..."`. Lift to inputs with English defaults.

**C-7 · Form error-plumbing duplication.** `errorMessage` / `describedBy` /
`onBlur` + the `FormValueControl` error wiring is copy-pasted across `fold-input`,
`fold-number-input`, `fold-select`. Extracting a shared base is the clean fix **and**
it relieves `number-input.component.ts` from the 299/300-line ceiling (C-8).

**C-8 · `fold-number-input` is at the 300-line file limit** (299). One addition
breaks the gate. Extract per C-7 before touching it again.

**C-9 · Token debt (aspirational, not yet enforced).** card / context-card / hero
/ element-title / the nav bar (`_tab-bar.scss`, shared by `view-nav`/`tabs`) SCSS
still hard-code px spacing and `0.18s ease` motion, and the nav bar has a raw
`font-size: 10px` where a `--fold-text-*` token exists. Colour is fully tokenised
(the contract passes);
retokenise spacing/motion on touch (rules 1.5, ledger #7).

**C-10 · One signals-purity nit.** ✅ **Fixed** — `fold-icon`'s unknown-name
`console.warn` moved out of the `svg` `computed()` into an `effect()` (rule 4.2);
`svg` is now pure. (Was `icon.component.ts:54–61`.)

---

## 4 · Per-component dossiers

Condensed from the audits. Each lists only what's left to do; anything not
mentioned is already at bar.

### Actions & selection

**`foldButton`** 🟢🟢🟢 — **Ship-ready.** Now an **attribute-selector component**
(`button[foldButton], a[foldButton]`) — the host is a real `<button>` or `<a>`,
so a "link that looks like a button" gets `href`/`routerLink` for free (the
Angular-Material pattern; benchmark lever #1, done). Disabled anchors are
handled via `aria-disabled` + `tabindex="-1"` + `pointer-events:none`; buttons
keep native `disabled`/`type`. Consumers use native `(click)` (the custom
`clicked` output is gone). Clean API (string unions, icon shorthand + derived
`iconSize`); `booleanAttribute` on `disabled` (bare `disabled` works, tested);
`type` gains `reset`; `prefers-reduced-motion` honoured; `@example` tag. The
`[class]` host binding merges with a consumer's static class (regression test
asserts it). Migration: ~262 call sites codemodded (`<fold-button>` →
`<button foldButton>` / `<a foldButton>`, `(clicked)` → `(click)`); app AOT +
tsc + lint + tests green. **`loading` shipped** (benchmark lever #2): a
`fold-spinner` replaces the leading glyph, sets `aria-busy`, blocks activation,
and stays lit (not dimmed) — the MUI `LoadingButton` shape; the two icon buttons
carry the same `loading` input. **Orthogonal `emphasis` × `intent`** shipped
(benchmark lever #3): `emphasis` (solid·soft·outline) × `intent`
(primary·neutral·warning·danger) replaced the flat 5-value `variant` — the Radix
model, so filled-destructive (`solid`+`danger`) and every other combo are now
expressible. Zero-visual-regression: the 5 legacy combos render identically at
rest (hover tints unified within ~2%); a token-driven `--b-*` engine generates
the rest. ~256 sites codemodded (incl. 5 dynamic `[variant]` ternaries split into
`[emphasis]`+`[intent]`); **forced-colors** support added (lever #4). App AOT +
tsc + tests green.

**`fold-button-icon`** 🟢🟢🟢 — **Ship-ready.** P0-1 fixed by splitting the toggle
into `fold-toggle-icon`; this component is now purely momentary (no `active`, no
`aria-pressed`). Done: `booleanAttribute` on `disabled`, `buttonType`→`type`,
`@example` tag, spec asserts momentary (no pressed state).

**`fold-toggle-icon`** 🟢🟢🟢 — **Ship-ready.** The toggle split out of
button-icon: shares the icon-button surface (partial + shape/size/tone types),
adds `[(active)]` + always-present `aria-pressed` (true/false) + a pressed
state, emits `toggled`. Spec covers both aria-pressed states + disabled.

**`fold-link`** 🟢🟢🟢 — Ship-ready. The a-vs-button split by `href` is clean.
Closed: `target`/`rel` inputs (auto `rel="noopener noreferrer"` on `target="_blank"`,
overridable) + `(clicked)` now emits the `MouseEvent`; specs cover the safe-rel
default + override. `disabled` is documented as button-only (an anchor can't be
natively disabled).

**`fold-choice-row`** 🟢🟢🟡 — Minimal, controlled, portable `ariaLabel`. Actions:
(1) dedicated gallery page showing both layouts + the `count` badge; (2) consider
`radiogroup` role + roving-tabindex arrow-key nav for the segmented toggle;
(3) edge spec for `activeKey` with no matching option.

**`fold-view-nav`** 🟢🟢🟢 — Ship-ready. Real navigation: `<a routerLink>` items,
active state from the URL (`routerLinkActive` + `aria-current="page"`),
`direction="auto"` following a wrapping `fold-nav-layout`. See **P0-6** (the split
that created it). Residual token debt only (C-9: `font-size: 10px` → a text token
in the shared `_tab-bar.scss`). The gallery page is the best in the set.

**`fold-tabs`** (+ `fold-tab-panel`) 🟢🟢🟢 — Ship-ready. The ARIA Tabs widget
carved out of the old tab-nav (rule 4.9): `role="tablist"` of `role="tab"`
buttons, `aria-selected`, roving arrow-key focus, each tab wired to its
`role="tabpanel"` (`aria-controls` ↔ `aria-labelledby`); panels take the bar by
ref so they coordinate across `fold-nav-layout` slots. Roles + keyboard asserted.

### Surfaces & scaffolding

**`fold-card`** 🟢🟢🟢 — Ship-ready (rigorous audit, 2026-07-25). The
`interactive` input was hardened from a visual-only, mis-coercing flag into a
real accessible control: `booleanAttribute` + `role="button"`/`tabindex`, a
`:focus-visible` ring, Enter/Space/click → `(activated)`, `ariaLabel`, and a
`prefers-reduced-motion` guard on the lift. The header/footer bands moved off
`<header>`/`<footer>` (which exposed spurious `banner`/`contentinfo` landmarks)
to neutral `<div>`s. Specs lock the coercion + the keyboard/role contract; the
gallery demos it. Kept: the body-padding invariant and `overflow: clip`.

**`fold-context-card`** 🟢🟡🟡 — Composes card + element-title (good SRP).
Action: add an `iconTone` pass-through spec (the one uncovered input); note the
intentional `primary`-vs-`neutral` default divergence from element-title in JSDoc.

**`fold-hero-card`** 🟢🟡🟢 — Ship-ready. Optional: assert the `primary` surface flips
text to `on-primary` (the one behavioural, non-class effect); test `padding="md"`.

**`fold-callout`** 🟢🟢🟢 — **The reference component** (exported union types,
compile-safe icon map, pure `role`/`ariaLive` computeds exposed via `exportAs`
because `announce` has no visual effect, exhaustive live-region tests). Only
defect: add its missing README row (C-2).

**`fold-element-title`** 🟢🟢🟢 — Ship-ready. Optional: decide whether the
decorative `eyebrow`/`bar` variants should really carry `role="heading"`
(a11y-outline noise).

**`fold-aside-layout`** 🟢🟢🟢 — Ship-ready. Right model (`:has()`-reactive
columns, container-query fold, landmark gated by label). Closed: README row +
`stackLeftFirst` class-toggle spec; the stray responsive `gap` is tokenised
(`--fold-aside-layout-gap-sm`). Sizing is a documented CSS-var contract.

**`fold-page-layout`** 🟢🟢🟢 — Ship-ready. Now has its own gallery page
(`/page-layout`: header slots, the live `--fold-page-gutter` token, a bleed
band). Scope was tightened: `wide`/`fluid` were **removed** — the page owns the
gutter + header + rhythm and otherwise fills its container; narrowing to a
readable measure is the content's job (a max-width container), never the page
scaffold's. The home page is the flagship real-world usage.

**`fold-page-section`** 🟢🟢🟢 — Ship-ready. Reworked into what it actually is: a
**semantic `<section>`** (named by its heading via `aria-labelledby`, SSR-safe id,
`headingLevel` for outline depth), not a box. `surface`/`divider` were **removed** —
boxing is `fold-card`'s job and the two compose (a section can hold a card). This
retired the `divider`-without-`surface` trap and the surface/`fold-card`
duplication in one cut; spacing is tokenised; README row + gallery page added.
Elevation is moot here (no box); a card that should _float_ is a `fold-card` +
`foldElevated` concern, deferred to a real 2nd use.

**`fold-nav-layout`** 🟢🟢🟢 — Ship-ready. Tiny API hiding a hysteresis'd
`ResizeObserver` fold; `exportAs="foldNavLayout"` + `stacked()` is excellent
ergonomics. Places a bar (`[tabNav]` — a `fold-view-nav` or a `fold-tabs`) with
its content, `placement="top"` or a `side` rail that folds back on top below
`foldAt`. Closed: P0-7 (the two `as unknown as` casts → `implements
ResizeObserver`) + README row. SCSS is already fully tokenised (gap / rail-width
CSS-var contract).

### Identity & data display

**`fold-badge`** 🟢🟡🟢 — Action: add `neutral` + `success` to the variant test
loop (both are currently omitted).

**`fold-status-badge`** 🟡🟡🟡 — Bakes a domain status vocabulary
(active/draft/pending/suspended/…, with synonym collapsing) into a "portable"
package — the least portable component here. Actions: (1) decide the stance —
document the status keys as an explicit contract, or move the synonym map to an
`input()`; (2) `@example` tag; (3) show `suspended` + a synonym in the gallery.

**`fold-avatar`** 🟢🟢🟢 — Ship-ready. The initials ink now picks the
**higher-contrast** of dark/light (via `foldReadableInk`), so the magic `0.4`
threshold is gone and any fill is optimal. A contrast spec proves every built-in
palette fill clears **AA (≥ 4.5:1)** for the initials, and documents the floor
for custom palettes. `@example` added; the gallery ships a real-photo team demo.

**`fold-avatar-detail`** 🟢🟢🟢 — Ship-ready. Forwards ~10 avatar inputs; specs
now assert the presentation inputs (`size`/`variant`/`square`/`muted`/`ring`/
`ringStyle`) and `imageUrl` actually reach the child. `@example` added.

**`fold-avatar-list`** 🟢🟢🟢 — Ship-ready. Optional: assert the `+N` chip `title`.

**`fold-data-table`** 🟢🟢🟢 — **Ship-ready** (top-tier pass, 2026-07-26).
Generic over `T`, controlled/presentational throughout. Now best-in-class for its
niche without leaving that contract: **controlled row selection** (checkbox
column via `fold-checkbox` + header select-all/indeterminate, parent owns the
`Set`), **roving-tabindex keyboard nav** (Enter/Space + Arrow/Home/End, guarded
against inner-control key theft), **`mobileLayout`** = `scroll` (default) /
`auto-cards` / `custom` (`foldRowCard` — the parent owns the mobile card, gated
to the narrow viewport so desktop never builds it), an optional **`foldToolbar`**
title bar with a token-only `toolbarSurface` level (accent reuses the
`[data-surface="accent"]` auto-invert), `stickyFirst`, `density`, column
`align`/`truncate` (dev-warns without a `width`), sort as a decorative
`fold-icon` on `aria-sort`, `<th scope="row">` identity cell, `caption`,
`aria-colcount`, loading + empty states. `@selector` + `@example` present; 27
specs incl. the a11y/keyboard edges. Gallery `/data-table` shows every flag.

**`fold-paginator`** 🟢🟢🟢 — **Ship-ready** (hardcore pass, 2026-07-26).
Excellent controlled logic (discriminated `FoldPageItem`, clamp + dedupe) now
hardened: full i18n (`FOLD_PAGINATOR_LABELS` + `provideFoldPaginatorLabels` +
`labels` input, English default — P0-2 fixed), keyboard focus preserved after a
page change (active page / prev-next arrow, never dropped to `<body>`),
out-of-range `currentPage` clamped for a coherent range + active state, the
current `pageSize` always present in the selector, `disabled` as
`booleanAttribute`, floored `siblingCount`. `@selector` present; 19 specs incl.
DOM clicks, i18n override, focus, and the edge cases. Gallery `/paginator`.

**`fold-timeline`** 🟢🟢🟢 — **Ship-ready.** Exemplary: one primitive / two
orientations, per-node interactivity decoupled from id, derived-or-override
progress, `<nav>`-vs-`role="group"` by interactivity, projected `#node` escape
hatch, exhaustive specs. Optional: per-node title (currently one shared string).

### Forms

**`fold-field` / `fold-field-list`** 🟢🟢🟢 — **Ship-ready.** Correct read-half
scoping, `display:contents` grid with no `::ng-deep`, CSS-var theming.

**`fold-input`** 🟢🟢🟢 — Both `[formField]` (FormValueControl) and `[(value)]`;
full label/required/optional/hint/error + aria wiring. Action: the `autofocus`
input (`input.component.ts:120`) is **declared but never applied** — a DX lie;
wire it (focus effect) or drop it. Nice-to-have: `type`/`autocomplete`
passthrough test.

**`fold-checkbox`** 🟢🟢🟢 — **Ship-ready** (2026-07-26). A native
`<input type="checkbox">` (keyboard, focus, `checkbox` role, form submission,
`indeterminate` — all native) visually replaced by a tokenised box + check/dash
mark. Signal-forms native via **`FormCheckboxControl`** (`[formField]`) or
standalone `[(checked)]`; `indeterminate`, `label`/`ariaLabel`, `hint` +
touched-gated `errors`, `required`, `size`, `disabled`. Accessible by
construction (label wraps the control, else a required `ariaLabel` — dev-warns
when neither is set), focus-visible ring, `prefers-reduced-motion`,
`forced-colors`; token-only colours. 11 specs; gallery `/checkbox`. Backs the
data-table selection column.

**`fold-number-input`** 🟢🟢🟢 — Best-documented control (empty⇒`null`, unified
`settleNumber` clamp/snap/precision, keyboard/pointer/wheel, exhaustive specs).
Action: **it is 299/300 lines** — extract before adding anything (C-7/C-8).

**`fold-search`** 🟡🟢🟡 — Clean debounce wrapper (trims, dedupes, SSR-safe
teardown). Actions: (1) forward `label`/`aria-label` (English default) — a search
box currently has no accessible name unless the caller wraps it; (2) `type="search"`

- optional two-way `value` so a "clear" button can reset it; (3) destroy-teardown
  test (no stray emit after destroy).

**`fold-select`** 🟢🟢🟡 — Native `<select>` + projected options; both bindings.
Actions: (1) README row (C-2); (2) add a `[formField]` snippet to the `@example`;
(3) ensure the gallery Select tab shows a placeholder + a required/error variant.

**`fold-slider`** 🟢🟢🟢 — **Ship-ready** (hardcore pass, 2026-07-26). Now
`FormValueControl<number>` (`[formField]`) as well as `[(value)]`; the visible
label is a real `<label for>` (else `ariaLabel`); a `valueText` override is
announced via `aria-valuetext`; `hint` + touched-gated `errors`; a focus-visible
thumb ring, `prefers-reduced-motion` and `forced-colors`. README row + gallery
`/slider`. 20 specs across the pair.

**`fold-range-slider`** 🟢🟢🟢 — **Ship-ready** (hardcore pass, 2026-07-26).
`value` is a `model()` (`[(value)]` parity); the thumb aria suffixes are
`minLabel` / `maxLabel` inputs (English default, C-6 fixed); a labelled
`role="group"`, formatted `aria-valuetext` per thumb (duration reads `mm:ss`,
not raw seconds); `disabled`; shares the hardened thumb (focus ring, reduced
motion, forced colors). README row + gallery `/slider`.

**`fold-file-dropzone`** 🟡🟢🟡 — Solid affordance (drag visuals, keyboard
activation, same-file re-pick reset, disabled/busy guards). Actions: **P0-4**
(French defaults → English); (2) README row (C-2); (3) tests for keyboard
Enter/Space activation and `accept`/`multiple` passthrough.

### Nav, shell & overlays

**`fold-app-shell`** 🟢🟢🟢 — **Ship-ready.** The typed-input ⇄ CSS-var duality
(unset input → stylesheet default) is exemplary. Optional: a `headerHeightMobile`
var-mapping test for symmetry.

**`fold-menu` (+ item/section/separator)** 🟢🟡🟢 — Strong composition (item is an
attribute-selector so routing stays the caller's; section reuses separator;
discriminated unions throughout). Actions: (1) lift the toggle/chevron aria
strings to inputs (C-6); (2) **`resolvedPlacement` — the most logic-dense unit —
has zero direct coverage**; test all four `togglePlacement` branches + the
`MutationObserver` slot-fill (`hasHeader`/`hasFooter`); (3) the gallery page is
316 lines — consider splitting.

**`fold-disclosure`** 🟢🟡🔴 — Correctly scoped primitive (not an accordion),
`0fr→1fr` reduced-motion-aware animation, CTA theming via custom props. Actions:
(1) **add the README row** — the only audited component absent from the table
(C-2); (2) specs for the `aria-hidden` toggle and the `exportAs`/`toggle()`
imperative path.

**`fold-toast` (+ container / service / config)** 🟢🟢🟢 — **Ship-ready.** Clean
four-way split (toast=lifecycle, container=stacking, service=queue,
config=policy), `provideFoldToasts()` idiom, severity-scaled durations with
`0`-preserving resolution, exhaustive tests. Optional: `aria-label="Dismiss"` →
input (C-6); guard `crypto.randomUUID()` for SSR.

**`fold-panel-host` / `fold-panel-header`** 🟢🟢🟢 — **Ship-ready.** Single
layout-owned overlay chrome; template-vs-component panels are a proper
discriminated union; header self-closes via optional-injected `PanelRef`. Hardened
to benchmark (vs Radix / CDK Dialog): every dialog now has an **accessible name**
(`aria-labelledby` → the header title via `FoldPanelRef.id`, or a `config.ariaLabel`
fallback); a real **modal barrier** (`inert` `hideOthers` walk from the host to
`<body>`, restored on close); **only the top-most panel traps focus**; and one
**providable close label** (`provideFoldPanelLabels`) replaced both hardcoded
"Fermer"s. The host renders the single `fold-panel-header` for template panels too
— the duplicated raw-`<svg>` header (P0-3/dev-rule 4.7) is gone. Focus is already
restored to the opener and scroll-lock is ref-counted. Closes **P0-3** + **P0-5**.

### Primitives & directives

**`fold-icon`** 🟢🟢🟢 — **Ship-ready.** Excellent registry (typed `name` with the
`(string & {})` autocomplete trick, bootstrap `provideFoldIcons` + reactive
runtime `register`). Hardened in the 2026-07 icon pass: a **shared SVG sprite**
(one `<symbol>` per icon, `<use>` per instance — no per-instance markup copies,
SSR-safe), a **trust guard** rejecting `<script>`/`on*=` on every registered
icon, **tokenised sizes** (`--fold-icon-size-*`), and `::ng-deep` dropped. The
former amber (`@selector`, stale count, `warn` in `computed()`) is fully cleared.
_One thing to eyeball post-merge:_ SSR sprite serialisation (no icon flash before
hydration) — designed for it and unit-tested, not yet checked in a real SSR build.

**`fold-empty-state`** 🟢🟢🟢 — **Ship-ready.** Clean, token-pure, `:empty`-guarded
slots; now discoverable on the shared `/state` gallery page (neutral + alert), and
its JSDoc example moved off the removed `variant` API.

**`fold-loading`** 🟢🟢🟢 — **Ship-ready.** The README "spinner" claim is now
true: it renders the real `fold-spinner` (sized via a `size` input) over the
message, in a `role="status"` / `aria-live="polite"` region so the wait is
announced; empty `message` shows the spinner alone. Gallery page added (`/state`).
The baked `"Loading..."` default stays — a sensible zero-config default, not a
portability leak (any consumer overrides it).

**`[foldSurface]`** 🟢🟢🟢 — **Ship-ready.** Well-designed theming seam; the
bare-attribute → `page` empty-string transform is a nice touch, and tested.

**`[foldStickyColumn]`** 🟢🟢🟢 — **Ship-ready.** Layout-only, no wrapper, pure
computed style bindings, CSS-var escape hatches (position/gap/offset), SSR-safe.
Thoughtful anchor math — `alignSelf` start/end so a short column pins from
scroll-0, `center` via `top:50%` + `translateY(-50%)`. Tests cover every
anchor × offset (px + CSS length, incl. the numeric-center calc). Locked in the
2026-07 pass: `@selector` added, README directive note; gallery page already
shipped.

**`[foldRepeatPress]`** 🟢🟢🟢 — **Ship-ready.** Best-in-class ergonomics:
`booleanAttribute`, aliased inputs, mid-hold auto-stop via `effect` (solves
"button disables under the finger"), `DestroyRef` cleanup, exemplary fake-timer
specs incl. teardown. Locked in the 2026-07 pass: `@selector` added, README
directive note, and a `/repeat-press` gallery page (a live hold-to-step stepper
with tunable delay/cadence).

---

## 5 · Release plan

Ordered so each wave is a coherent set of atomic commits; correctness and
portability first, polish last.

**Wave 1 — Blockers (§2).** P0-1 button-icon a11y bug · P0-2 paginator i18n ·
P0-3 panel i18n · P0-4 dropzone i18n · P0-5 focus-trap `inert` · P0-6 tab a11y
(split into `view-nav` + `tabs`) · P0-7 spec cast. Each ships with the spec that
proves it. (P0-2/3/4 close ledger item #6; P0-5 closes #8 — align with TODO.md.)

**Wave 2 — DX correctness.** ~~C-1 `booleanAttribute` parity~~ ✅ · `fold-input`
`autofocus` (wire or drop) · ~~`fold-link` `target`/`rel` + `MouseEvent`~~ ✅ ·
C-7/C-8 extract the form error-base (unblocks number-input's line budget) · C-6
remaining hardcoded aria strings → inputs.

**Wave 3 — Docs & showcase.** C-2 README rows · C-3 stale facts (114 icons,
loading spinner) · C-4 `@selector`/`@example` tags · C-5 gallery pages
(state, repeat-press, choice-row variants, sliders). _(data-table +
checkbox gallery pages ✅ done.)_

**Wave 4 — Test depth.** avatar luminance-ink · avatar-detail forwarding · badge
neutral/success · menu `resolvedPlacement` · disclosure aria-hidden/`toggle()` ·
context-card `iconTone`. _(data-table toggles/guards ✅ covered.)_

**Wave 5 — Polish (aspirational).** C-9 retokenise spacing/motion on touch ·
hero `on-primary` assertion · choice-row keyboard a11y · per-node timeline
title · toast SSR crypto guard.

After Wave 3 the package is releasable (portable, accessible, honestly
documented). Waves 4–5 raise it from "shippable" to the SOLID/DDD senior bar.
