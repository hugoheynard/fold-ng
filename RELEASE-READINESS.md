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

Scope audited: **30 components + the panel subsystem + 3 directives**, 80 public
exports, **402 test blocks across 62 spec files**, **114 built-in icons**. No
`any` / `as unknown` / `@ts-ignore` / `eslint-disable` / raw-colour violations in
component _source_ (the token contract holds); the lone spec-side `as unknown`
breach (P0-7) is now fixed too. Method: six parallel per-cluster audits, each reading every
`.ts`/`.html`/`.scss`/`.spec.ts` + the matching gallery page.

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
| `fold-tab-layout`   | 🟢  |  🟢   |  🟢  | **Ship-ready** (`as unknown as` fixed; README row)      |

**Navigation** — `src/components/navigation/`

| Component                        | DX  | Tests | Docs | Verdict                                          |
| -------------------------------- | :-: | :---: | :--: | ------------------------------------------------ |
| `fold-menu` (+ item/section/sep) | 🟢  |  🟡   |  🟢  | Test `resolvedPlacement`; aria strings as inputs |
| `fold-nav-launcher` (+ nav-tile) | 🟢  |  🟢   |  🟢  | **Ship-ready**                                   |
| `fold-tab-nav`                   | 🟢  |  🟡   |  🟢  | **No `role="tab"`/`aria-selected`**              |

**Actions** — `src/components/actions/`

| Component          | DX  | Tests | Docs | Verdict                                          |
| ------------------ | :-: | :---: | :--: | ------------------------------------------------ |
| `fold-button`      | 🟡  |  🟢   |  🟡  | `booleanAttribute` on `disabled`; `@example` tag |
| `fold-button-icon` | 🔴  |  🟡   |  🟡  | **Momentary buttons emit `aria-pressed` (bug)**  |
| `fold-link`        | 🟡  |  🟢   |  🟢  | `target`/`rel` for external links                |

**Content** — `src/components/content/`

| Component                        | DX  | Tests | Docs | Verdict                                          |
| -------------------------------- | :-: | :---: | :--: | ------------------------------------------------ |
| `fold-card`                      | 🟡  |  🟢   |  🟢  | `booleanAttribute` on `interactive`              |
| `fold-hero-card`                 | 🟢  |  🟡   |  🟢  | Optional: assert `on-primary` text flip          |
| `fold-context-card`              | 🟢  |  🟡   |  🟡  | `iconTone` pass-through test                     |
| `fold-element-title`             | 🟢  |  🟢   |  🟢  | **Ship-ready**                                   |
| `fold-field` / `fold-field-list` | 🟢  |  🟢   |  🟢  | **Ship-ready**                                   |
| `fold-badge`                     | 🟢  |  🟡   |  🟢  | Test `neutral`/`success` variants                |
| `fold-status-badge`              | 🟡  |  🟡   |  🟡  | Bakes a domain vocabulary; `@example`            |
| `fold-avatar`                    | 🟢  |  🟢   |  🟢  | Add luminance-ink test + `@example` tag          |
| `fold-avatar-detail`             | 🟢  |  🔴   |  🟡  | Test forwarded inputs; `@example`                |
| `fold-avatar-list`               | 🟢  |  🟢   |  🟢  | **Ship-ready**                                   |
| `fold-timeline`                  | 🟢  |  🟢   |  🟢  | **Ship-ready**                                   |
| `fold-choice-row`                | 🟢  |  🟢   |  🟡  | Gallery page; arrow-key a11y                     |
| `fold-data-table`                | 🟢  |  🟢   |  🔴  | **No gallery page; no `@selector`/`@example`**   |
| `fold-paginator`                 | 🟢  |  🟢   |  🟡  | **French aria/labels (portability); no gallery** |

**Feedback** — `src/components/feedback/`

| Component                          | DX  | Tests | Docs | Verdict                                        |
| ---------------------------------- | :-: | :---: | :--: | ---------------------------------------------- |
| `fold-callout`                     | 🟢  |  🟢   |  🟢  | Reference component — add missing README row   |
| `fold-disclosure`                  | 🟢  |  🟡   |  🔴  | **No README row**                              |
| `fold-toast` (+ container/service) | 🟢  |  🟢   |  🟢  | Optional: `Dismiss` as input; SSR crypto guard |
| `fold-empty-state`                 | 🟢  |  🟢   |  🟡  | No gallery page                                |
| `fold-loading`                     | 🟡  |  🟢   |  🟡  | **README claims a spinner that doesn't exist** |
| `fold-panel-host` / `-header`      | 🟢  |  🟢   |  🔴  | **French "Fermer"; trap doesn't `inert` bg**   |

**Forms** — `src/components/forms/`

| Component            | DX  | Tests | Docs | Verdict                                             |
| -------------------- | :-: | :---: | :--: | --------------------------------------------------- |
| `fold-input`         | 🟢  |  🟢   |  🟢  | Wire or drop dead `autofocus` input                 |
| `fold-number-input`  | 🟢  |  🟢   |  🟢  | Extract — **299/300 lines**, one line from the gate |
| `fold-select`        | 🟢  |  🟢   |  🟡  | README row; `[formField]` example                   |
| `fold-slider`        | 🟡  |  🟢   |  🟡  | Not a `FormValueControl`; README row                |
| `fold-range-slider`  | 🟡  |  🟢   |  🟡  | **Hardcoded aria suffixes; no README/gallery**      |
| `fold-file-dropzone` | 🟡  |  🟢   |  🟡  | **French default copy (portability)**; README row   |
| `fold-search`        | 🟡  |  🟢   |  🟡  | No accessible name; no clear/value                  |

**Foundations** — `src/components/foundations/`

| Component            | DX  | Tests | Docs | Verdict                                                  |
| -------------------- | :-: | :---: | :--: | -------------------------------------------------------- |
| `fold-icon`          | 🟢  |  🟢   |  🟢  | **Ship-ready** — shared sprite, trust guard, token sizes |
| `[foldSurface]`      | 🟢  |  🟢   |  🟢  | **Ship-ready**                                           |
| `[foldStickyColumn]` | 🟢  |  🟢   |  🟡  | Add `@selector`                                          |
| `[foldRepeatPress]`  | 🟢  |  🟢   |  🟢  | **Ship-ready** — `@selector`, README, gallery demo       |

**Ship-ready today (17):** app-shell, page-layout, page-section, hero-section,
aside-layout, tab-layout, avatar-list, callout, element-title, field,
field-list, nav-launcher, timeline, toast, surface, icon, repeat-press.
Everything else has scoped, mostly mechanical work below.

> **TODO · `fold-app-shell` layout coverage** — ~~`footer` slot~~ ✅ done (self-collapsing `footer` row + `footerLayout: inset|full`) · ~~mobile drops both rails with no way back~~ ✅ done — two modes via `mobileNav`: `drawer` (`[(mobileNavOpen)]` off-canvas drawer for the primary rail — scrim, `Escape`, focus-trap, closes on widen; `--fold-color-scrim` token) or `none` + a standalone `fold-nav-launcher` (full-screen tile grid) · ~~no skip-to-content link~~ ✅ done (skip-link → focusable `<main>`, `skipLinkLabel`) · ~~optional `contentScroll`~~ ✅ done (`clip|auto`) · ~~width-observer duplicated with tab-layout~~ ✅ extracted to `observeElementWidth` (both consume it) · **remaining → Roadmap 1.0.1** (TODO.md, top): rails as named landmarks, secondary rail reachable on mobile, visual-regression snapshots, `foldElevated` named scale + `foldSurface` owns bg (trigger-gated), drawer mechanics → `FoldDrawer*` on a 2nd use, and the right-rail / tertiary-rail decisions. **8.5/10 today; the 1.0.1 gap to 9.5.**

---

## 2 · Ship blockers (P0)

These are correctness, accessibility, or portability defects. A design system
that advertises "portable" and "accessible by default" cannot release with them
open.

**P0-1 · `fold-button-icon` announces momentary buttons as pressed toggles.**
`onClick` unconditionally runs `this.active.update(v => !v)`
(`button-icon.component.ts:90`), and the host stamps `[data-active]` +
`aria-pressed` from `active()`. So a plain "Delete"/"Edit"/"Play" button — the
majority use, and what the gallery shows — flips to a pressed state after one
click and announces `aria-pressed="true"` to assistive tech even though it is not
a toggle. Fix: model toggle-vs-action explicitly (only mutate `active` / emit
`aria-pressed` when `active` is two-way bound, or a discriminated `mode`
input). Add a spec asserting a momentary button never gets `aria-pressed`. The
current spec _codifies_ the bug.

**P0-2 · `fold-paginator` hard-codes French, non-overridable a11y strings.**
`"Éléments par page"`, `"par page"`, `"… sur …"`, `"Aucun élément"`,
`"Pagination"`, `"Page précédente"`, `"Page suivante"`, `"Page N"` — none are
inputs (`paginator.component.html:12–67`). Violates rule 5.1 in a package that
claims portability; this is ledger item #6. Extract each to an `input()` with an
**English** default.

**P0-3 · Panel chrome hard-codes French "Fermer".**
`panel-host.component.html:29` and `panel-header.component.html:19`. Add
`closeLabel = input<string>("Close")` to both. Same rule 5.1.

**P0-4 · `fold-file-dropzone` ships French default copy.**
`label` defaults to `'Glissez un fichier ou parcourez'`, `busyLabel` to
`'Téléversement en cours…'` (`file-dropzone.component.ts`). Every other component
defaults to English and lets the caller localise. Flip the defaults to
`'Drag a file or browse'` / `'Uploading…'`.

**P0-5 · Focus-trap does not `inert` the background.**
`FocusTrapDirective` traps Tab, filters hidden focusables, sets
`role="dialog"` + `aria-modal`, closes on Escape, restores focus — but the page
behind stays reachable to a screen-reader virtual cursor and to programmatic
focus. `aria-modal` is not a reliable substitute. Mark siblings `inert` on
activate, restore on cleanup; add a spec asserting they are inert while a panel
is open. Ledger item #8.

**P0-6 · `fold-tab-nav` has no tab a11y contract.**
Buttons carry only an `is-active` class — no `role="tab"`/`tablist`, no
`aria-selected`/`aria-current` (`tab-nav.component`). A "tab bar" that doesn't
announce as tabs. Add the roles + `aria-selected`, and assert them.

**P0-7 · Strict-TS breach in a spec. ✅ Fixed.**
`tab-layout.component.spec.ts` used `as unknown as ResizeObserver` /
`as unknown as typeof ResizeObserver`. Resolved: the fake is now
`implements ResizeObserver`, so both the callback's `observer` arg and the
`globalThis` assignment type-check with no assertion. Zero `as unknown` in the
package.

---

## 3 · Cross-cutting cleanups (batch once, fix many)

Grouped so each can land as one atomic commit across the affected components.

**C-1 · `booleanAttribute` parity.** Boolean inputs lacking the transform their
siblings have, so a bare attribute or `="false"` mis-coerces. `card.interactive`
(`card.component.ts:72`), `button.disabled` — add `{ transform: booleanAttribute }`
to both. (`page-layout.wide`/`fluid` no longer apply — both inputs were removed;
the page fills its container, width is a content concern.)

**C-2 · README table is out of sync (rule 4.6).** Exported public components with
**no README row**: `fold-callout`,
`fold-disclosure`, `fold-select`, `fold-slider`, `fold-range-slider`,
`fold-file-dropzone`, `fold-repeat-press`. (`fold-page-section` now has its own
row.) Add each row.

**C-3 · Stale / wrong README facts.**

- ~~Icon count says "102 today" / "~100" — actual is **114**.~~ ✅ Fixed
  (README now says 114; count derived from the built-in set).
- `fold-loading` row claims "spinner + message" — there is **no spinner**
  (`loading-state.component.html` is a single muted `<span>`). Either build the
  spinner or fix the row to "muted loading line".

**C-4 · Missing JSDoc `@selector`/`@example` tags.** The bar (rule 4.6) is
`@selector` + one-liner + `@example`. Missing `@example` **tag** (a fenced block
exists, the tag doesn't): `button`, `button-icon`, `status-badge`, `avatar`,
`avatar-detail`, `data-table`. Missing `@selector`: `data-table`,
`paginator`, `[foldStickyColumn]`, and the layout trio
(`page-layout`/`page-section`/`tab-layout` — verify). Mechanical.

**C-5 · Gallery coverage holes.** Shipped components with **zero gallery
presence** (fall back to the stub page — not among the Library nav entries):
`fold-data-table`, `fold-paginator`, `fold-empty-state` + `fold-loading` (a `state`
page), and `[foldRepeatPress]`. `fold-choice-row` renders only incidentally inside
other pages (its `chips` layout + `count` badge are never shown), and
`fold-range-slider` / `fold-slider` are imported but not clearly demoed. A release
showcase must render every public component.

**C-6 · Hardcoded English UI strings that should be inputs.** Not portability
_blockers_ (they're English), but they can't be localised and break the
"user-facing text is an `input()`" rule: menu toggle/chevron
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
/ element-title / tab-nav SCSS still hard-code px spacing and
`0.18s ease` motion, and `tab-nav` has a raw `font-size: 10px` where a
`--fold-text-*` token exists. Colour is fully tokenised (the contract passes);
retokenise spacing/motion on touch (rules 1.5, ledger #7).

**C-10 · One signals-purity nit.** ✅ **Fixed** — `fold-icon`'s unknown-name
`console.warn` moved out of the `svg` `computed()` into an `effect()` (rule 4.2);
`svg` is now pure. (Was `icon.component.ts:54–61`.)

---

## 4 · Per-component dossiers

Condensed from the audits. Each lists only what's left to do; anything not
mentioned is already at bar.

### Actions & selection

**`fold-button`** 🟡🟢🟡 — API is clean (string unions, icon shorthand + derived
`iconSize`). Actions: (1) `booleanAttribute` on `disabled` (C-1); (2) add the
`@example` tag; (3) host binds `[class]="variant+' '+size+' '+shape"`
(`button.component.ts:44`), which overwrites a caller's static `class` — prefer
`[class.x]` bindings. Nice-to-have: a `loading`/busy affordance.

**`fold-button-icon`** 🔴🟡🟡 — See **P0-1**. Also align naming with `fold-button`
(`buttonType` vs `type`) and add the `@example` tag.

**`fold-link`** 🟡🟢🟢 — The a-vs-button split by `href` is clean. Actions:
(1) add `target`/`rel` inputs (default `rel="noopener noreferrer"` when
`target="_blank"`) — the JSDoc advertises external links; (2) emit `MouseEvent`
from `clicked` for consistency with the button components; (3) `aria-disabled`
on the disabled anchor path, or document that disabled is button-only.

**`fold-choice-row`** 🟢🟢🟡 — Minimal, controlled, portable `ariaLabel`. Actions:
(1) dedicated gallery page showing both layouts + the `count` badge; (2) consider
`radiogroup` role + roving-tabindex arrow-key nav for the segmented toggle;
(3) edge spec for `activeKey` with no matching option.

**`fold-tab-nav`** 🟢🟡🟢 — See **P0-6**. Also (2) `font-size: 10px` → a text
token; (3) assert that `size="reduce"` actually hides non-active labels/badges.
The gallery page is the best in the set.

### Surfaces & scaffolding

**`fold-card`** 🟡🟢🟢 — Action: `booleanAttribute` on `interactive` (C-1).

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

**`fold-tab-layout`** 🟢🟢🟢 — Ship-ready. Tiny API hiding a hysteresis'd
`ResizeObserver` fold; `exportAs` + `stacked()` is excellent ergonomics. Closed:
P0-7 (the two `as unknown as` casts → `implements ResizeObserver`) + README row.
SCSS is already fully tokenised (gap / nav-width CSS-var contract).

### Identity & data display

**`fold-badge`** 🟢🟡🟢 — Action: add `neutral` + `success` to the variant test
loop (both are currently omitted).

**`fold-status-badge`** 🟡🟡🟡 — Bakes a domain status vocabulary
(active/draft/pending/suspended/…, with synonym collapsing) into a "portable"
package — the least portable component here. Actions: (1) decide the stance —
document the status keys as an explicit contract, or move the synonym map to an
`input()`; (2) `@example` tag; (3) show `suspended` + a synonym in the gallery.

**`fold-avatar`** 🟢🟢🟢 — Luminance-derived ink handles custom dark palettes
correctly. Actions: (1) add the missing test for that path (light fill → dark
ink, dark fill → light ink — the contract in rule 6.3 is untested); (2)
`@example` tag.

**`fold-avatar-detail`** 🟢🔴🟡 — Forwards ~10 avatar inputs
(`muted`/`ring`/`ringStyle`/`square`/`imageUrl`/`variant`/`size`) but only 3
tests exist — **none assert the forwarded inputs reach the child**, a silent-break
surface. Actions: (1) forwarding tests; (2) `@example` tag; (3) show a ring/muted
detail cell in the gallery.

**`fold-avatar-list`** 🟢🟢🟢 — Ship-ready. Optional: assert the `+N` chip `title`.

**`fold-data-table`** 🟢🟢🔴 — Properly generic over `T`, clean controlled/
presentational contract, column-metadata-vs-projected-cells separation. Docs are
the blocker: (1) JSDoc has **neither `@selector` nor `@example`**; (2) **no
gallery page at all**; (3) add tests for the `zebra`/`hover`/`mobileCards`
toggles, the unsorted `↕` arrow, and the non-clickable no-`rowClick` guard.

**`fold-paginator`** 🟢🟢🟡 — Excellent controlled logic (discriminated
`FoldPageItem`, clamp + dedupe, comprehensive logic tests). Actions: **P0-2**
(French strings); (2) add `@selector`; (3) gallery page + a DOM-interaction test.

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

**`fold-slider`** 🟡🟢🟡 — Actions: (1) README row (C-2); (2) decide the family
contract — implement `FormValueControl<number>` for `[formField]` parity with
input/number/select, or document why it stays `[(value)]`-only; (3) give it a
real gallery section (imported, unclear if rendered); (4) the visible `.sl-label`
is a `<span>`, not `<label for>` — only the aria-label names the control.

**`fold-range-slider`** 🟡🟢🟡 — Actions: (1) extract the `" minimum"`/`" maximum"`
aria suffixes to inputs with English defaults (C-6 — currently string-concat,
unlocalisable); (2) README row + gallery section (appears **not showcased
anywhere**); (3) consider `model()` for `[(value)]` parity with `fold-slider`
(today it's `input` + `output`, more caller boilerplate); (4) add `disabled`.

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

**`fold-panel-host` / `fold-panel-header`** 🟢🟢🔴 — Single layout-owned overlay
chrome; template-vs-component panels are a proper discriminated union; header
self-closes via optional-injected `PanelRef`. Blockers: **P0-3** (French
"Fermer") and **P0-5** (no background `inert`).

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

**`fold-empty-state`** 🟢🟢🟡 — Clean, token-pure, `:empty`-guarded slots. Action:
add a `state` gallery page (neutral + alert) — currently undiscoverable (C-5).

**`fold-loading`** 🟡🟢🟡 — Actions: (1) reconcile the README "spinner" claim
(C-3) — build it or fix the doc; (2) reconsider the baked `"Loading..."` default
(C-6); (3) gallery page (C-5).

**`[foldSurface]`** 🟢🟢🟢 — **Ship-ready.** Well-designed theming seam; the
bare-attribute → `page` empty-string transform is a nice touch, and tested.

**`[foldStickyColumn]`** 🟢🟢🟡 — Layout-only, no wrapper, thoughtful anchor math
(short columns pin from scroll-0), well tested. Action: add `@selector` to the
JSDoc (C-4). Has its own gallery page.

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
P0-3 panel i18n · P0-4 dropzone i18n · P0-5 focus-trap `inert` · P0-6 tab-nav
roles · P0-7 spec cast. Each ships with the spec that proves it. (P0-2/3/4 close
ledger item #6; P0-5 closes #8 — align with TODO.md.)

**Wave 2 — DX correctness.** C-1 `booleanAttribute` parity · `fold-input`
`autofocus` (wire or drop) · `fold-link` `target`/`rel` + `MouseEvent` · C-7/C-8
extract the form error-base (unblocks number-input's line budget) · C-6 remaining
hardcoded aria strings → inputs.

**Wave 3 — Docs & showcase.** C-2 README rows · C-3 stale facts (114 icons,
loading spinner) · C-4 `@selector`/`@example` tags · C-5 gallery pages
(data-table, paginator, state, repeat-press, choice-row variants, sliders).

**Wave 4 — Test depth.** avatar luminance-ink · avatar-detail forwarding ·
data-table toggles/guards · badge neutral/success · menu `resolvedPlacement` ·
disclosure aria-hidden/`toggle()` · context-card `iconTone`.

**Wave 5 — Polish (aspirational).** C-9 retokenise spacing/motion on touch ·
hero `on-primary` assertion · choice-row/tab-nav keyboard a11y · per-node timeline
title · toast SSR crypto guard.

After Wave 3 the package is releasable (portable, accessible, honestly
documented). Waves 4–5 raise it from "shippable" to the SOLID/DDD senior bar.
