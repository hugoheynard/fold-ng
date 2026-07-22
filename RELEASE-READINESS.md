# @sh3pherd/ui — Release-readiness

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
component _source_ (the token contract holds) — the one strict-TS breach is in a
spec (see P0-6). Method: six parallel per-cluster audits, each reading every
`.ts`/`.html`/`.scss`/`.spec.ts` + the matching gallery page.

---

## 1 · Scoreboard

| Component | DX | Tests | Docs | Verdict |
| --- | :-: | :-: | :-: | --- |
| `sh3-app-shell` | 🟢 | 🟢 | 🟢 | **Ship-ready** |
| `sh3-avatar` | 🟢 | 🟢 | 🟢 | Add luminance-ink test + `@example` tag |
| `sh3-avatar-detail` | 🟢 | 🔴 | 🟡 | Test forwarded inputs; `@example` |
| `sh3-avatar-list` | 🟢 | 🟢 | 🟢 | **Ship-ready** |
| `sh3-badge` | 🟢 | 🟡 | 🟢 | Test `neutral`/`success` variants |
| `sh3-button` | 🟡 | 🟢 | 🟡 | `booleanAttribute` on `disabled`; `@example` tag |
| `sh3-button-icon` | 🔴 | 🟡 | 🟡 | **Momentary buttons emit `aria-pressed` (bug)** |
| `sh3-callout` | 🟢 | 🟢 | 🟢 | Reference component — add missing README row |
| `sh3-card` | 🟡 | 🟢 | 🟢 | `booleanAttribute` on `interactive` |
| `sh3-choice-row` | 🟢 | 🟢 | 🟡 | Gallery page; arrow-key a11y |
| `sh3-context-card` | 🟢 | 🟡 | 🟡 | `iconTone` pass-through test |
| `sh3-data-table` | 🟢 | 🟢 | 🔴 | **No gallery page; no `@selector`/`@example`** |
| `sh3-disclosure` | 🟢 | 🟡 | 🔴 | **No README row** |
| `sh3-element-title` | 🟢 | 🟢 | 🟢 | **Ship-ready** |
| `sh3-empty-state` | 🟢 | 🟢 | 🟡 | No gallery page |
| `sh3-field` / `sh3-field-list` | 🟢 | 🟢 | 🟢 | **Ship-ready** |
| `sh3-file-dropzone` | 🟡 | 🟢 | 🟡 | **French default copy (portability)**; README row |
| `sh3-hero` | 🟢 | 🟡 | 🟢 | Optional: assert `on-primary` text flip |
| `sh3-icon` | 🟢 | 🟢 | 🟡 | `@selector`; stale count; `warn` in `computed()` |
| `sh3-input` | 🟢 | 🟢 | 🟢 | Wire or drop dead `autofocus` input |
| `sh3-link` | 🟡 | 🟢 | 🟢 | `target`/`rel` for external links |
| `sh3-loading` | 🟡 | 🟢 | 🟡 | **README claims a spinner that doesn't exist** |
| `sh3-menu` (+ item/section/sep) | 🟢 | 🟡 | 🟢 | Test `resolvedPlacement`; aria strings as inputs |
| `sh3-number-input` | 🟢 | 🟢 | 🟢 | Extract — **299/300 lines**, one line from the gate |
| `sh3-page-layout` | 🟡 | 🟢 | 🟢 | `booleanAttribute` on `wide` |
| `sh3-page-section` | 🟡 | 🟢 | 🟡 | Own README row; document `divider`↔`surface` |
| `sh3-paginator` | 🟢 | 🟢 | 🟡 | **French aria/labels (portability); no gallery** |
| `sh3-panel-host` / `-header` | 🟢 | 🟢 | 🔴 | **French "Fermer"; trap doesn't `inert` bg** |
| `sh3-range-slider` | 🟡 | 🟢 | 🟡 | **Hardcoded aria suffixes; no README/gallery** |
| `sh3-search` | 🟡 | 🟢 | 🟡 | No accessible name; no clear/value |
| `sh3-select` | 🟢 | 🟢 | 🟡 | README row; `[formField]` example |
| `sh3-slider` | 🟡 | 🟢 | 🟡 | Not a `FormValueControl`; README row |
| `sh3-aside-layout` | 🟢 | 🟡 | 🟡 | README row; `stackLeftFirst` test |
| `sh3-status-badge` | 🟡 | 🟡 | 🟡 | Bakes a domain vocabulary; `@example` |
| `sh3-tab-layout` | 🟢 | 🟡 | 🟢 | **`as unknown as` in spec**; README row |
| `sh3-tab-nav` | 🟢 | 🟡 | 🟢 | **No `role="tab"`/`aria-selected`** |
| `sh3-timeline` | 🟢 | 🟢 | 🟢 | **Ship-ready** |
| `sh3-toast` (+ container/service) | 🟢 | 🟢 | 🟢 | Optional: `Dismiss` as input; SSR crypto guard |
| `[sh3Surface]` | 🟢 | 🟢 | 🟢 | **Ship-ready** |
| `[sh3StickyColumn]` | 🟢 | 🟢 | 🟡 | Add `@selector` |
| `[sh3RepeatPress]` | 🟢 | 🟢 | 🟡 | Add `@selector`; README row / demo |

**Ship-ready today (9):** app-shell, avatar-list, callout, element-title, field,
field-list, timeline, toast, surface. Everything else has scoped, mostly
mechanical work below.

---

## 2 · Ship blockers (P0)

These are correctness, accessibility, or portability defects. A design system
that advertises "portable" and "accessible by default" cannot release with them
open.

**P0-1 · `sh3-button-icon` announces momentary buttons as pressed toggles.**
`onClick` unconditionally runs `this.active.update(v => !v)`
(`button-icon.component.ts:90`), and the host stamps `[data-active]` +
`aria-pressed` from `active()`. So a plain "Delete"/"Edit"/"Play" button — the
majority use, and what the gallery shows — flips to a pressed state after one
click and announces `aria-pressed="true"` to assistive tech even though it is not
a toggle. Fix: model toggle-vs-action explicitly (only mutate `active` / emit
`aria-pressed` when `active` is two-way bound, or a discriminated `mode`
input). Add a spec asserting a momentary button never gets `aria-pressed`. The
current spec _codifies_ the bug.

**P0-2 · `sh3-paginator` hard-codes French, non-overridable a11y strings.**
`"Éléments par page"`, `"par page"`, `"… sur …"`, `"Aucun élément"`,
`"Pagination"`, `"Page précédente"`, `"Page suivante"`, `"Page N"` — none are
inputs (`paginator.component.html:12–67`). Violates rule 5.1 in a package that
claims portability; this is ledger item #6. Extract each to an `input()` with an
**English** default.

**P0-3 · Panel chrome hard-codes French "Fermer".**
`panel-host.component.html:29` and `panel-header.component.html:19`. Add
`closeLabel = input<string>("Close")` to both. Same rule 5.1.

**P0-4 · `sh3-file-dropzone` ships French default copy.**
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

**P0-6 · `sh3-tab-nav` has no tab a11y contract.**
Buttons carry only an `is-active` class — no `role="tab"`/`tablist`, no
`aria-selected`/`aria-current` (`tab-nav.component`). A "tab bar" that doesn't
announce as tabs. Add the roles + `aria-selected`, and assert them.

**P0-7 · Strict-TS breach in a spec.**
`tab-layout.component.spec.ts:16,24` uses `as unknown as ResizeObserver` /
`as unknown as typeof ResizeObserver` — a direct rule-2.1 violation ("no
`as unknown`", package kept at 1 cast total). Type the fake via
`implements ResizeObserver` + a typed callback so no assertion is needed.

---

## 3 · Cross-cutting cleanups (batch once, fix many)

Grouped so each can land as one atomic commit across the affected components.

**C-1 · `booleanAttribute` parity.** Three boolean inputs lack the transform
their siblings have, so a bare attribute or `="false"` mis-coerces:
`card.interactive` (`card.component.ts:72`), `page-layout.wide`
(`page-layout.component.ts:49`), `button.disabled`. Add
`{ transform: booleanAttribute }` to all three.

**C-2 · README table is out of sync (rule 4.6).** Exported public components with
**no README row**: `sh3-callout`, `sh3-aside-layout`, `sh3-tab-layout`,
`sh3-disclosure`, `sh3-select`, `sh3-slider`, `sh3-range-slider`,
`sh3-file-dropzone`, `sh3-repeat-press`; `sh3-page-section` is only implied.
Add each row.

**C-3 · Stale / wrong README facts.**
- Icon count says "102 today" / "~100" (`README.md:168,196`) — actual is **114**.
  The gallery already derives it live; the README does not.
- `sh3-loading` row claims "spinner + message" — there is **no spinner**
  (`loading-state.component.html` is a single muted `<span>`). Either build the
  spinner or fix the row to "muted loading line".

**C-4 · Missing JSDoc `@selector`/`@example` tags.** The bar (rule 4.6) is
`@selector` + one-liner + `@example`. Missing `@example` **tag** (a fenced block
exists, the tag doesn't): `button`, `button-icon`, `status-badge`, `avatar`,
`avatar-detail`, `data-table`. Missing `@selector`: `icon`, `data-table`,
`paginator`, `[sh3StickyColumn]`, `[sh3RepeatPress]`, and the layout trio
(`page-layout`/`page-section`/`tab-layout` — verify). Mechanical.

**C-5 · Gallery coverage holes.** Shipped components with **zero gallery
presence** (fall back to the stub page — not in the 26 nav entries):
`sh3-data-table`, `sh3-paginator`, `sh3-empty-state` + `sh3-loading` (a `state`
page), and `[sh3RepeatPress]`. `sh3-choice-row` renders only incidentally inside
other pages (its `chips` layout + `count` badge are never shown), and
`sh3-range-slider` / `sh3-slider` are imported but not clearly demoed. A release
showcase must render every public component.

**C-6 · Hardcoded English UI strings that should be inputs.** Not portability
_blockers_ (they're English), but they can't be localised and break the
"user-facing text is an `input()`" rule: menu toggle/chevron
`"Collapse menu"`/`"Expand menu"` (`menu.component.html:34`), toast close
`aria-label="Dismiss"` (`toast.component.html:9`), range-slider
`" minimum"`/`" maximum"` aria suffixes (string-concat), `sh3-loading` default
`"Loading..."`. Lift to inputs with English defaults.

**C-7 · Form error-plumbing duplication.** `errorMessage` / `describedBy` /
`onBlur` + the `FormValueControl` error wiring is copy-pasted across `sh3-input`,
`sh3-number-input`, `sh3-select`. Extracting a shared base is the clean fix **and**
it relieves `number-input.component.ts` from the 299/300-line ceiling (C-8).

**C-8 · `sh3-number-input` is at the 300-line file limit** (299). One addition
breaks the gate. Extract per C-7 before touching it again.

**C-9 · Token debt (aspirational, not yet enforced).** card / context-card / hero
/ element-title / page-section / tab-nav SCSS still hard-code px spacing and
`0.18s ease` motion, and `tab-nav` has a raw `font-size: 10px` where a
`--sh3-text-*` token exists. Colour is fully tokenised (the contract passes);
retokenise spacing/motion on touch (rules 1.5, ledger #7).

**C-10 · One signals-purity nit.** `sh3-icon` calls `console.warn` inside a
`computed()` (`icon.component.ts:54–61`) — a side effect in a pure computed
(rule 4.2). Move the unknown-name warning to an `effect()`.

---

## 4 · Per-component dossiers

Condensed from the audits. Each lists only what's left to do; anything not
mentioned is already at bar.

### Actions & selection

**`sh3-button`** 🟡🟢🟡 — API is clean (string unions, icon shorthand + derived
`iconSize`). Actions: (1) `booleanAttribute` on `disabled` (C-1); (2) add the
`@example` tag; (3) host binds `[class]="variant+' '+size+' '+shape"`
(`button.component.ts:44`), which overwrites a caller's static `class` — prefer
`[class.x]` bindings. Nice-to-have: a `loading`/busy affordance.

**`sh3-button-icon`** 🔴🟡🟡 — See **P0-1**. Also align naming with `sh3-button`
(`buttonType` vs `type`) and add the `@example` tag.

**`sh3-link`** 🟡🟢🟢 — The a-vs-button split by `href` is clean. Actions:
(1) add `target`/`rel` inputs (default `rel="noopener noreferrer"` when
`target="_blank"`) — the JSDoc advertises external links; (2) emit `MouseEvent`
from `clicked` for consistency with the button components; (3) `aria-disabled`
on the disabled anchor path, or document that disabled is button-only.

**`sh3-choice-row`** 🟢🟢🟡 — Minimal, controlled, portable `ariaLabel`. Actions:
(1) dedicated gallery page showing both layouts + the `count` badge; (2) consider
`radiogroup` role + roving-tabindex arrow-key nav for the segmented toggle;
(3) edge spec for `activeKey` with no matching option.

**`sh3-tab-nav`** 🟢🟡🟢 — See **P0-6**. Also (2) `font-size: 10px` → a text
token; (3) assert that `size="reduce"` actually hides non-active labels/badges.
The gallery page is the best in the set.

### Surfaces & scaffolding

**`sh3-card`** 🟡🟢🟢 — Action: `booleanAttribute` on `interactive` (C-1).

**`sh3-context-card`** 🟢🟡🟡 — Composes card + element-title (good SRP).
Action: add an `iconTone` pass-through spec (the one uncovered input); note the
intentional `primary`-vs-`neutral` default divergence from element-title in JSDoc.

**`sh3-hero`** 🟢🟡🟢 — Ship-ready. Optional: assert the `primary` surface flips
text to `on-primary` (the one behavioural, non-class effect); test `padding="md"`.

**`sh3-callout`** 🟢🟢🟢 — **The reference component** (exported union types,
compile-safe icon map, pure `role`/`ariaLive` computeds exposed via `exportAs`
because `announce` has no visual effect, exhaustive live-region tests). Only
defect: add its missing README row (C-2).

**`sh3-element-title`** 🟢🟢🟢 — Ship-ready. Optional: decide whether the
decorative `eyebrow`/`bar` variants should really carry `role="heading"`
(a11y-outline noise).

**`sh3-aside-layout`** 🟢🟡🟡 — Right model (`:has()`-reactive columns, landmark
gated by label). Actions: (1) README row (C-2); (2) `stackLeftFirst` class-toggle
spec (currently zero coverage on that input).

**`sh3-page-layout`** 🟡🟢🟢 — Action: `booleanAttribute` on `wide` (C-1).

**`sh3-page-section`** 🟡🟢🟡 — The `[sectionActions]`→`titleAction` re-projection
is elegant. Actions: (1) own README row naming the surface/divider/stack knobs;
(2) document the `divider`-needs-`surface` coupling on the `divider` input JSDoc.

**`sh3-tab-layout`** 🟢🟡🟢 — Tiny API hiding a hysteresis'd `ResizeObserver`
fold; `exportAs` + `stacked()` is excellent ergonomics. Actions: (1) **P0-7**
(remove the two `as unknown as` casts); (2) README row (C-2).

### Identity & data display

**`sh3-badge`** 🟢🟡🟢 — Action: add `neutral` + `success` to the variant test
loop (both are currently omitted).

**`sh3-status-badge`** 🟡🟡🟡 — Bakes a domain status vocabulary
(active/draft/pending/suspended/…, with synonym collapsing) into a "portable"
package — the least portable component here. Actions: (1) decide the stance —
document the status keys as an explicit contract, or move the synonym map to an
`input()`; (2) `@example` tag; (3) show `suspended` + a synonym in the gallery.

**`sh3-avatar`** 🟢🟢🟢 — Luminance-derived ink handles custom dark palettes
correctly. Actions: (1) add the missing test for that path (light fill → dark
ink, dark fill → light ink — the contract in rule 6.3 is untested); (2)
`@example` tag.

**`sh3-avatar-detail`** 🟢🔴🟡 — Forwards ~10 avatar inputs
(`muted`/`ring`/`ringStyle`/`square`/`imageUrl`/`variant`/`size`) but only 3
tests exist — **none assert the forwarded inputs reach the child**, a silent-break
surface. Actions: (1) forwarding tests; (2) `@example` tag; (3) show a ring/muted
detail cell in the gallery.

**`sh3-avatar-list`** 🟢🟢🟢 — Ship-ready. Optional: assert the `+N` chip `title`.

**`sh3-data-table`** 🟢🟢🔴 — Properly generic over `T`, clean controlled/
presentational contract, column-metadata-vs-projected-cells separation. Docs are
the blocker: (1) JSDoc has **neither `@selector` nor `@example`**; (2) **no
gallery page at all**; (3) add tests for the `zebra`/`hover`/`mobileCards`
toggles, the unsorted `↕` arrow, and the non-clickable no-`rowClick` guard.

**`sh3-paginator`** 🟢🟢🟡 — Excellent controlled logic (discriminated
`Sh3PageItem`, clamp + dedupe, comprehensive logic tests). Actions: **P0-2**
(French strings); (2) add `@selector`; (3) gallery page + a DOM-interaction test.

**`sh3-timeline`** 🟢🟢🟢 — **Ship-ready.** Exemplary: one primitive / two
orientations, per-node interactivity decoupled from id, derived-or-override
progress, `<nav>`-vs-`role="group"` by interactivity, projected `#node` escape
hatch, exhaustive specs. Optional: per-node title (currently one shared string).

### Forms

**`sh3-field` / `sh3-field-list`** 🟢🟢🟢 — **Ship-ready.** Correct read-half
scoping, `display:contents` grid with no `::ng-deep`, CSS-var theming.

**`sh3-input`** 🟢🟢🟢 — Both `[formField]` (FormValueControl) and `[(value)]`;
full label/required/optional/hint/error + aria wiring. Action: the `autofocus`
input (`input.component.ts:120`) is **declared but never applied** — a DX lie;
wire it (focus effect) or drop it. Nice-to-have: `type`/`autocomplete`
passthrough test.

**`sh3-number-input`** 🟢🟢🟢 — Best-documented control (empty⇒`null`, unified
`settleNumber` clamp/snap/precision, keyboard/pointer/wheel, exhaustive specs).
Action: **it is 299/300 lines** — extract before adding anything (C-7/C-8).

**`sh3-search`** 🟡🟢🟡 — Clean debounce wrapper (trims, dedupes, SSR-safe
teardown). Actions: (1) forward `label`/`aria-label` (English default) — a search
box currently has no accessible name unless the caller wraps it; (2) `type="search"`
+ optional two-way `value` so a "clear" button can reset it; (3) destroy-teardown
test (no stray emit after destroy).

**`sh3-select`** 🟢🟢🟡 — Native `<select>` + projected options; both bindings.
Actions: (1) README row (C-2); (2) add a `[formField]` snippet to the `@example`;
(3) ensure the gallery Select tab shows a placeholder + a required/error variant.

**`sh3-slider`** 🟡🟢🟡 — Actions: (1) README row (C-2); (2) decide the family
contract — implement `FormValueControl<number>` for `[formField]` parity with
input/number/select, or document why it stays `[(value)]`-only; (3) give it a
real gallery section (imported, unclear if rendered); (4) the visible `.sl-label`
is a `<span>`, not `<label for>` — only the aria-label names the control.

**`sh3-range-slider`** 🟡🟢🟡 — Actions: (1) extract the `" minimum"`/`" maximum"`
aria suffixes to inputs with English defaults (C-6 — currently string-concat,
unlocalisable); (2) README row + gallery section (appears **not showcased
anywhere**); (3) consider `model()` for `[(value)]` parity with `sh3-slider`
(today it's `input` + `output`, more caller boilerplate); (4) add `disabled`.

**`sh3-file-dropzone`** 🟡🟢🟡 — Solid affordance (drag visuals, keyboard
activation, same-file re-pick reset, disabled/busy guards). Actions: **P0-4**
(French defaults → English); (2) README row (C-2); (3) tests for keyboard
Enter/Space activation and `accept`/`multiple` passthrough.

### Nav, shell & overlays

**`sh3-app-shell`** 🟢🟢🟢 — **Ship-ready.** The typed-input ⇄ CSS-var duality
(unset input → stylesheet default) is exemplary. Optional: a `headerHeightMobile`
var-mapping test for symmetry.

**`sh3-menu` (+ item/section/separator)** 🟢🟡🟢 — Strong composition (item is an
attribute-selector so routing stays the caller's; section reuses separator;
discriminated unions throughout). Actions: (1) lift the toggle/chevron aria
strings to inputs (C-6); (2) **`resolvedPlacement` — the most logic-dense unit —
has zero direct coverage**; test all four `togglePlacement` branches + the
`MutationObserver` slot-fill (`hasHeader`/`hasFooter`); (3) the gallery page is
316 lines — consider splitting.

**`sh3-disclosure`** 🟢🟡🔴 — Correctly scoped primitive (not an accordion),
`0fr→1fr` reduced-motion-aware animation, CTA theming via custom props. Actions:
(1) **add the README row** — the only audited component absent from the table
(C-2); (2) specs for the `aria-hidden` toggle and the `exportAs`/`toggle()`
imperative path.

**`sh3-toast` (+ container / service / config)** 🟢🟢🟢 — **Ship-ready.** Clean
four-way split (toast=lifecycle, container=stacking, service=queue,
config=policy), `provideSh3Toasts()` idiom, severity-scaled durations with
`0`-preserving resolution, exhaustive tests. Optional: `aria-label="Dismiss"` →
input (C-6); guard `crypto.randomUUID()` for SSR.

**`sh3-panel-host` / `sh3-panel-header`** 🟢🟢🔴 — Single layout-owned overlay
chrome; template-vs-component panels are a proper discriminated union; header
self-closes via optional-injected `PanelRef`. Blockers: **P0-3** (French
"Fermer") and **P0-5** (no background `inert`).

### Primitives & directives

**`sh3-icon`** 🟢🟢🟡 — Excellent registry (typed `name` with the `(string & {})`
autocomplete trick, bootstrap `provideSh3Icons` + reactive runtime `register`,
`console.warn` on unknown). Actions: (1) add `@selector`; (2) fix the README count
(C-3); (3) move the `warn` out of `computed()` into an `effect()` (C-10).

**`sh3-empty-state`** 🟢🟢🟡 — Clean, token-pure, `:empty`-guarded slots. Action:
add a `state` gallery page (neutral + alert) — currently undiscoverable (C-5).

**`sh3-loading`** 🟡🟢🟡 — Actions: (1) reconcile the README "spinner" claim
(C-3) — build it or fix the doc; (2) reconsider the baked `"Loading..."` default
(C-6); (3) gallery page (C-5).

**`[sh3Surface]`** 🟢🟢🟢 — **Ship-ready.** Well-designed theming seam; the
bare-attribute → `page` empty-string transform is a nice touch, and tested.

**`[sh3StickyColumn]`** 🟢🟢🟡 — Layout-only, no wrapper, thoughtful anchor math
(short columns pin from scroll-0), well tested. Action: add `@selector` to the
JSDoc (C-4). Has its own gallery page.

**`[sh3RepeatPress]`** 🟢🟢🟡 — Best-in-class ergonomics: `booleanAttribute`,
aliased inputs, mid-hold auto-stop via `effect` (solves "button disables under
the finger"), `DestroyRef` cleanup, exemplary fake-timer specs incl. teardown.
Actions: (1) add `@selector` (C-4); (2) README row + a small hold-to-increment
demo so it's discoverable (C-2/C-5).

---

## 5 · Release plan

Ordered so each wave is a coherent set of atomic commits; correctness and
portability first, polish last.

**Wave 1 — Blockers (§2).** P0-1 button-icon a11y bug · P0-2 paginator i18n ·
P0-3 panel i18n · P0-4 dropzone i18n · P0-5 focus-trap `inert` · P0-6 tab-nav
roles · P0-7 spec cast. Each ships with the spec that proves it. (P0-2/3/4 close
ledger item #6; P0-5 closes #8 — align with TODO.md.)

**Wave 2 — DX correctness.** C-1 `booleanAttribute` parity · `sh3-input`
`autofocus` (wire or drop) · `sh3-link` `target`/`rel` + `MouseEvent` · C-7/C-8
extract the form error-base (unblocks number-input's line budget) · C-6 remaining
hardcoded aria strings → inputs.

**Wave 3 — Docs & showcase.** C-2 README rows · C-3 stale facts (114 icons,
loading spinner) · C-4 `@selector`/`@example` tags · C-5 gallery pages
(data-table, paginator, state, repeat-press, choice-row variants, sliders).

**Wave 4 — Test depth.** avatar luminance-ink · avatar-detail forwarding ·
data-table toggles/guards · badge neutral/success · menu `resolvedPlacement` ·
disclosure aria-hidden/`toggle()` · aside-layout `stackLeftFirst` · context-card
`iconTone`.

**Wave 5 — Polish (aspirational).** C-9 retokenise spacing/motion on touch ·
hero `on-primary` assertion · choice-row/tab-nav keyboard a11y · per-node timeline
title · toast SSR crypto guard.

After Wave 3 the package is releasable (portable, accessible, honestly
documented). Waves 4–5 raise it from "shippable" to the SOLID/DDD senior bar.
