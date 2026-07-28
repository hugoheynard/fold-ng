# fold-ng — dev rules

The rulebook for the design system. `README.md` is the consumer's guide; this is
the **contributor's contract**. Every rule here is either enforced by a test/lint
or is a deliberate convention we hold the line on. When a rule is broken, the fix
is to obey the rule — not to widen the exception.

Writing the **gallery** (`demo/`) is a separate contract: see
[`CLAUDE.md`](../CLAUDE.md).

The bar: **strict TypeScript, tested to the contract, token-pure, portable.**
"Portable" is load-bearing — this package is meant to be dropped into another
project, so nothing app-specific (a language, a feature type, a hard-coded
colour) may leak in.

---

## 1 · Tokens

1.1 **Two tiers, never skip one.** Tier 1 primitives (`--fold-ref-*`, raw palette,
the _only_ place a hex literal lives) → tier 2 semantic (`--fold-color-*`, roles).
Components name **tier 2 only** — never `--fold-ref-*`.

1.2 **Every token is `--fold-`-prefixed.** So the package never collides with a
consuming app's own custom properties.

1.3 **Components consume tokens — they never spell a raw value.** No `rgba()`,
`hsl()`, or hex in any component style. Colour = `var(--fold-color-*)` or
`color-mix(… var(--fold-color-*) …)`; depth = `var(--fold-shadow-*)`;
`currentColor` / `transparent` are colour-free and allowed.
_Enforced:_ `tokens.contract.spec.ts › components consume tokens only`.

1.4 **Elevation is a scale, not a per-component invention.** Depth comes from
`--fold-shadow-{sm,md,lg,panel-left,panel-right}`. A component names a level; it
does not write its own `box-shadow` geometry. Shadows are theme-invariant
(black-ink via `color-mix`, legible on both themes).

1.5 **Spacing + motion have scales — prefer them.** `--fold-space-*`,
`--fold-motion-*`. New styles use the scale; a one-off px/duration is allowed only
when nothing on the scale fits, and should be rare.
⚠️ _Known debt:_ many older component styles still hard-code px spacing and
`0.18s ease` motion. Retokenise on touch. (Not yet test-enforced — colour is;
spacing/motion is aspirational until a lint lands.)

1.6 **The type scale is absolute px (`--fold-text-*`), on purpose.** The app root
is 14px, so `rem` would render the ref ~12% small. This is a **deliberate
deviation** from the usual "type in rem for user-zoom a11y" rule — accepted
because pixel-parity with the design reference won out. If the package ever ships
to an app with a different root, revisit. Documented so it's a choice, not an
accident.

1.7 **The contract test is the lock** (`tokens.contract.spec.ts`). It fails the
build if: the dark/`:root` and light/`[data-theme="light"]` colour blocks fall
out of parity; a semantic token points at a missing primitive (dangling `var`);
a semantic value hard-codes a hex; a primitive is declared but unused; the CSS
drifts from `tokens.catalog.ts`; or a component style hard-codes a colour (1.3).
**Add a token → add it to `tokens.catalog.ts` AND the CSS in the same change.**

1.8 **The typed catalogue is the source of truth.** `tokens.catalog.ts` lists
every token `as const` and exposes `fold*Var` helpers so TS call-sites get
autocomplete + a compile error on a typo. CSS `styles:` strings can't use them,
which is exactly why 1.3/1.7 exist — the guard covers what the type system can't.

1.9 **Named surfaces re-point roles, never a component's internals.** A region
that needs a different palette (`[data-surface="chrome"]`, `[data-surface="accent"]`)
re-declares role tokens for its sub-tree; a theme diverges by overriding those
roles under the surface. The accent surface auto-inverts via a capture-then-invert
trick (avoids the `primary`/`on-primary` CSS cycle). Full mechanism + the
per-theme override seam: [`surfaces.md`](surfaces.md).

---

## 2 · TypeScript

2.1 **Strict, no escapes.** No `any`, no `as X` assertions (bar `as const` /
`satisfies`), no `as unknown`, no `@ts-ignore`, no `eslint-disable`. If types
fight you, the model is wrong — fix the model. (Package is currently at **1**
cast total; keep it that way.)

2.2 **`as const` + `satisfies` for data tables** (token lists, palettes) so the
literal types survive and a bad entry is a compile error.

2.3 **Discriminated unions over flags.** `PageItem`, `PanelDescriptor`,
`DragState`-shaped things use a `kind`/`type` discriminant, not booleans.

2.4 **Public API is intentional.** Everything exported from `index.ts` is a
supported surface; internal helpers (e.g. `FocusTrapDirective`,
`ScrollLockService`) stay unexported until a real second consumer appears.

---

## 3 · Naming

3.1 **Selectors: `fold-*`.** Every component/directive selector is namespaced.
_(Consistent today.)_

3.2 **CSS custom properties: `--fold-*`.** (Rule 1.2.)

3.3 **TS exports: `Fold`-prefixed.** Every exported class/type/const is
`Fold`-prefixed (`FoldCardComponent`, `FoldToastService`, `FoldPanelConfig`,
`FoldPageItem`, `FoldIconName`). The prefix protects a consumer's namespace from
generic names (`Toast`, `PageItem`, `Card`, `IconSet`) and matches the design-
system norm (`Mat*`, `Nb*`). Const values use `FOLD_`, functions `fold`/`provideFold`.
_(Applied across the package + ~200 app files, 2026-07.)_

---

## 4 · Components

4.1 **Standalone + signals-first.** `input()` / `input.required()` / `output()` /
`computed()` / `effect()` / `inject()`. No `@Input`/`@Output`, no constructor DI
for services (use `inject()`), no `NgModule`.

4.2 **`computed()` is pure; side effects live in `effect()`.** (e.g. the panel
host's scroll-lock is an `effect`, not a getter.)

4.3 **Host classes via host bindings.** `host: { '[class.x]': "cond()" }` — not a
wrapper element and not `@HostBinding` fields.

4.4 **Content projection uses named slots.** `<ng-content select="[slot=action]">`
etc.; document the slot names in the component's JSDoc.

4.5 **Inline `template`/`styles` is fine; reach for `templateUrl`/`styleUrl`
when a file crosses ~250 lines** so no single file passes 300. (Inline styles
push a component toward the limit — `number-input` sits at 299.)

4.6 **Every component ships JSDoc** with `@selector`, a one-line what-it-is, and
an `@example`. The README table stays in sync.

4.7 **Reuse the icon component.** Draw glyphs with `<fold-icon>`, don't hand-roll
inline `<svg>` in a component template. **Legitimate exceptions** (not icons):
an **animated control glyph** whose stroke it animates itself (the `fold-checkbox`
tick + indeterminate dash, the `fold-spinner`), the `fold-icon` primitive's own
`<use>`, and a **projected illustration slot** where the consumer supplies the
art (`fold-empty-state`'s `[empty-icon]`). A static, single-colour glyph is an
icon — register it and use `<fold-icon>`.

4.8 **Tag-qualify an attribute projection selector.** A bare
`<ng-content select="[foo]">` matches _any_ direct child carrying a `foo`
attribute — including a projected component whose own `input()` is named `foo`
(inputs written as static attributes, `foo="…"`, still match projection
selectors). That child gets swallowed into the wrong slot and the default slot
goes empty. Qualify the selector to the element the slot actually expects:
`select="p[description]"`, not `select="[description]"`.
_Why this rule exists:_ `fold-page-layout`'s `[description]` slot silently ate
every `<fold-page-section description="…">` child — the whole page body rendered
inside the header. Fixed by tag-qualifying to `p[description]`; when you add a
slot whose attribute name is a plausible component input (`title`, `label`,
`icon`, `description`, `actions`…), qualify it and cover it with a projection
test that a body child carrying that same attribute stays put.

4.9 **Momentary ≠ toggle — model them as separate controls.** A one-shot button
(delete, play, open) is momentary: a plain `<button>`, **never** `aria-pressed`.
A stateful on/off (mute, mask, pin) is a toggle: it **always** carries
`aria-pressed` (`true`/`false`, not present-when-on). These are two ARIA
contracts, so ship two components (`fold-button-icon` momentary /
`fold-toggle-icon` toggle) rather than one that flips an `active` model on every
click — a mode-flag on one component leaves an inert input in the other mode and
invites the wrong `aria-pressed`. _Why:_ `fold-button-icon` used to toggle+press
on every click, announcing one-shot buttons as pressed toggles. When two
components are siblings (icon vs toggle), share the surface (a `.scss` partial +
the shape/size/tone types), and only **align input names that share the same
value set** — keep a deliberately different, smaller axis under a different name
(icon buttons use `tone`, not `fold-button`'s 5-value `variant`) rather than a
same-named input whose valid values silently differ.

4.10 **A styled _interactive_ element is an attribute-selector component on the
native tag — not a custom-tag component wrapping one.** When the thing you build
is fundamentally a `<button>`/`<a>`/`<input>` with a look, give the component an
**attribute selector** (`selector: "button[foldButton], a[foldButton]"`) so its
host _is_ the real control. A custom tag (`<fold-button>` wrapping an inner
`<button>`) can never _be_ an `<a>`, so "a link that looks like a button" becomes
impossible and you grow a second component. Reach for a plain `@Directive` only
when you need **no** styles — a directive has no view, so no `styleUrl`; an
attribute-selector `@Component` keeps its encapsulated SCSS (`:host` = the
control) and a template (`<ng-content>` + affordances). This is the Angular
Material pattern (`matButton`). Handle the tag divergence explicitly: inject
`ElementRef`, branch on `tagName` (native `disabled`/`type` on a button;
`aria-disabled` + `tabindex="-1"` + `pointer-events:none` on a disabled anchor),
and prefer native `(click)` over a custom output. _Why:_ `fold-button` shipped as
`<fold-button>` and couldn't render a nav link; converting it to
`button[foldButton], a[foldButton]` unlocked `<a foldButton routerLink>` with no
second component (benchmark lever #1).

4.11 **When one enum conflates two concepts, split it into orthogonal axes.** A
flat `variant` that mixes _emphasis_ (how loud: solid/soft/outline) with _intent_
(what it means: primary/neutral/warning/danger) can't express the cells it
skipped (filled-destructive) and forces the consumer to memorise which of the two
axes each value moves. Model the two axes as **separate inputs** and generate the
matrix: each intent sets colour-role CSS locals (`--b-*`), each emphasis consumes
them into a fill pattern — so N×M combinations come from N+M rules, not N×M
hand-written ones. Migrate zero-visual-regression (map the existing combos to
identical output; the new cells are additive) and name the axes to avoid
collisions (`intent`, not `tone`, since the icon buttons already use `tone` with
a different value set — rule 4.9). _Why:_ `fold-button` grew a 5-value `variant`
(primary/solid/ghost/recommended/critical) that was Bootstrap-tier; splitting it
into `emphasis` × `intent` reached the Radix-tier model (benchmark lever #3).

4.12 **Controlled state is ONE `model` — never an `input` + twin `output`.** When
a parent owns a piece of state the component also changes (the active tab, the
selected set, an open flag), expose it as a single **two-way `model`**, not an
`input` paired with a `somethingChange` output. The model already gives both
directions: `[(x)]` for writeback, or one-way `[x]` + its built-in `(xChange)` to
stay controlled — so a second output is a redundant _second way to do the same
thing_. One binding = one source of truth, one thing to learn, one thing to keep
in sync. _Why:_ `fold-tabs` shipped `activeKey` (input) + `tabChange` (output),
`fold-view-nav` `activeKey` + `activeChange`, `fold-data-table` `selected` +
`selectionChange` — three copies of the same controlled-pair shape. All three
collapsed to a `model` (`[(activeKey)]`, `[(selected)]`); the twin outputs were
removed (0.6.0, `BREAKING`). **Exception — a genuinely different payload:** keep a
distinct output only when it carries information the model's `*Change` cannot,
e.g. `fold-listbox`'s `selectionChange: T` fires on a _pick_ with a **non-null**
value where `valueChange: T | null` would force a narrow (§ documented in 0.5.2).
That is not a second way to read the same value — it is a narrower event. A raw
`MouseEvent` echo of a model write is **not** such a case: drop it.

4.13 **A functional gap belongs in the primitive — expose an input, don't reach
in with CSS.** When a consumer needs to change how a primitive looks (an icon's
tint, a control's density), that capability goes on the **primitive** as a typed
input, offered once to every consumer — not worked around by each consumer with a
class that colours / sizes the primitive's internals from outside. Reaching in
couples the consumer to the child's DOM and reinvents the same hack everywhere.
_Why:_ `fold-page-section` tinted its heading icon with a reach-in
`.section-title-icon { color }`; the fix was to give `fold-icon` a `tone` input
and **forward** it (`[tone]="iconTone()"`). **Not every style is such a gap —
leave it in the consumer's CSS when:** the primitive should **inherit its
context** (an icon in a button / callout takes `currentColor` — the correct
default; don't pin a tone), the value is **state- or variant-driven** (a menu
item's active icon, a danger row), or it's a **composite** the primitive can't
express (an icon _tile_ with a background, a button surface). The tell: a
**static, semantic** style of a bare primitive that the parent would hardcode →
promote it to an input; anything contextual, stateful, or composite stays in the
consumer. Layout that positions the primitive in _its own_ flow (a flex-shrink
guard on a projected icon) also stays with the consumer — that is the consumer's
concern, not the primitive's look.

---

## 5 · Portability (no app leaks)

5.1 **No hard-coded UI strings.** A reusable component must not bake in a
language. Every user-facing + `aria-label` string is overridable with a sensible
**English** default. This includes strings on _composed_ inner components: a
wrapper forwards the inner component's label inputs (e.g. `fold-password-field`
→ `fold-input`'s `revealLabel`/`hideLabel`), it doesn't relock them.

5.1.1 **The label-token pattern** (the canonical shape — copy `fold-paginator` /
`fold-data-table`): a `FoldXxxLabels` interface + an `InjectionToken` with an
English-default factory + `provideFoldXxxLabels(partial)` + a per-instance
`labels` input, merged `computed(() => ({ ...injected, ...labels() }))`. A
parameterised string is a **function** (`(n) => \`Page ${n}\``) so a locale can
reorder, not just substitute. One or two strings → a plain `input()` with an
English default is enough; a cluster of them → the token.

5.1.2 **A live region announces TEXT, not attributes.** `aria-live` fires on
text-content mutations; flipping an `aria-label`/class alone is silent. Put the
changing state in a (visually-hidden) **text node** inside the region — see
`fold-password-field`'s per-rule met/not-met word.

5.2 **No app-domain types.** The package knows nothing of `programs`, `shows`,
`contracts`. A generic mechanism is parameterised (`<T>` / opaque payload); the
app supplies the concrete type on top.

5.2.1 **A value-carrying control is generic over its value.** Don't hardcode
`string`. Make it `Component<T>` with `value` a `model<T | …>`, and compare
values through a `compareWith` input (default `Object.is`) — never a baked-in
`===` on the value, which silently fails for objects (this is exactly what
Angular's native `<select>` does). Where a DI/content-projection boundary can't
carry `T` (a shared owner token, projected children), erase **that seam** to
`unknown` — never `any` — and keep `T` on the public surface and everywhere the
operands are actually `T` (see `fold-listbox`). Offer a data-driven `[options]`
array API when the compile-time value↔option link matters.

5.2.2 **When the value can be "empty" (`T | null`, `… | undefined`), also expose
a non-null _pick_ output.** A `value` `model<T | null>` makes `[(value)]` /
`valueChange` carry the empty state — correct, but it forces every "do X when the
user picks something" handler to narrow `null` away, even when the control isn't
clearable. Add an `output<T>()` (e.g. `selectionChange`, `rangeChange`) emitted
only from the user-commit path (never on clear/reset), so the common case binds a
handler that already has the concrete type. Keep `value`/`valueChange` for the
empty transitions. See `fold-listbox.selectionChange`, `fold-range-slider.rangeChange`.

5.2.3 **An enum input that has an obvious on/off reading should accept a boolean
shorthand.** Wrap the enum in a `transform` so a bare attribute (`""`) or `true`
maps to the "on" value and `false` to the "off" value, while explicit enum values
pass through — the idiomatic Angular boolean-attribute ergonomics without losing
the fine-grained enum. Export the coercion fn + the widened `…Input` type. See
`fold-card` `separators`/`raisedBands` (`foldCardBandChrome`).

5.2.4 **A reveal/toggle affordance must be usable on its own — default to the
shown state.** When a boolean input turns _on_ an affordance (a collapse chevron,
an expandable panel, a "show more"), the component must not also require the
author to bind the paired state just to be usable. Adding the affordance is the
intent; make the sensible default follow from it. Concretely: a `collapsible`
(or `expandable`, `revealable`…) input, present without an explicit paired state
(`[(expanded)]`/`[(open)]`), should default the content to **shown/expanded** —
you added a way to _collapse_, so the natural start is _open_. Same spirit as the
bare-boolean shorthand (5.2.3): the ergonomic short form Just Works, the explicit
binding still wins when set. Don't ship an affordance whose zero-config state is
useless (a `collapsible` menu that starts collapsed with no labels) or that
dev-warns to nag for a binding — encode the default instead.

5.3 **Categorical data may be hex — in TS, not in styles.** Auto-colour palettes
(`palettes.ts`) and the avatar ink are qualitative data (theme-invariant hues),
so they live as hex in TS and are exempt from 1.3. They must **not** appear in a
`styles:` block.

---

## 6 · Accessibility

6.1 **A modal overlay owes four things.** (1) **focus trap** —
`FocusTrapDirective` (`role="dialog"` + `aria-modal` + `tabindex="-1"` host),
moving focus in on open and restoring it to the opener on close; (2) **Escape**
closes it; (3) an **accessible name** — a `role="dialog"` with no
`aria-label`/`aria-labelledby` is a nameless dialog (a WCAG failure). Wire
`aria-labelledby` to the header title (fold-panel: the dialog references the
`fold-panel-header` `<h2>` id via `FoldPanelRef.id`) or take an explicit label;
(4) a **background barrier** — see 6.2.

6.2 **The barrier is `inert`, not just the trap.** A focus trap is keyboard-only;
the page behind stays reachable to the screen-reader virtual cursor and to
programmatic focus, so `aria-modal` alone is a promise the DOM doesn't keep. Mark
every branch that doesn't contain the overlay `inert` — a `hideOthers` walk from
the host up to `<body>`, skipping already-`inert` nodes, restored **exactly** on
close (`fold-panel-host`). Stack-safe: only the top-most overlay traps focus. The
trap itself only counts **visible** focusables (`display:none` /
`visibility:hidden` / `[hidden]` filtered, with a raw fallback in a
non-rendering env).

6.3 **Contrast is derived, not assumed.** Text on a categorical fill picks its
ink from the fill's luminance (`fold-avatar`), so a custom palette can't produce
unreadable text.

6.4 **Icons inherit colour** via `currentColor` and are sized with a `size`
input — never a hard-coded fill.

6.5 **State conveyed by colour needs a `forced-colors` fallback.** Windows
high-contrast strips `background` and `box-shadow` and overrides `color`, so any
cue riding on them (a selected row, an active page, a tone bar) vanishes.
Re-express it under `@media (forced-colors: active)` with something the pass
keeps — a `border`/`outline` in a system colour (`Highlight`, `CanvasText`) —
and keep the non-visual carrier (`aria-current`, `aria-selected`) regardless.
Applies even to a `all: unset` control: restore a real `:focus-visible` outline
(the reset dropped the UA one).

6.6 **Every transition/animation is gated by `prefers-reduced-motion`.** Any
`transition`/`animation` ships with a `@media (prefers-reduced-motion: reduce)`
branch that turns it off. No exceptions for "it's just a colour fade".

6.7 **Roving tabindex must land on an _enabled_ control.** The single `tabindex="0"`
tab stop is the selected item **only when it's enabled** — otherwise it falls
back to the first enabled one. Putting the tab stop on a disabled (unfocusable)
item makes the whole widget unreachable by keyboard (`fold-view-toggle`).

---

## 7 · SSR / zoneless

7.1 **Zoneless.** No `zone.js`, no `NgZone`. Change detection is signal-driven.

7.2 **No raw `window` / `document`.** Inject `DOCUMENT`; guard layout APIs
(`getClientRects`, `offsetParent`) so a non-rendering environment degrades to a
safe default rather than throwing or over-filtering.

7.3 **`console.warn` for dev aid only** (e.g. an unknown icon name) — never
`console.log`, never in a hot path.

---

## 8 · Testing

8.1 **The token contract test is non-negotiable** (§1.7). It runs in
`pnpm --filter fold-ng test`.

8.2 **Specs colocate** next to the source (`foo.component.spec.ts`, or a
`__tests__/` folder for a subsystem).

8.3 **Test through a host.** Bind inputs in a `HostComponent` template (required
inputs always have a value at first CD) and assert on the rendered element —
exercise the component the way a caller uses it.

8.4 **Explicit Vitest imports.** `import { describe, it, expect, vi } from
"vitest"` — the package doesn't use globals. Zoneless `setupTestBed()` runs from
`src/test-setup.ts`.

8.5 **The public surface is snapshotted — a binding change must be intentional.**
`scripts/gen-api-surface.ts` writes `API-SURFACE.md`: every exported symbol, and
for each exported class its `input` / `model` / `output` members with resolved
type + required-ness. `api-surface.spec.ts` fails the moment the live surface
drifts from the committed file. This closes the gap that `tsc` leaves: **plain
`tsc --noEmit` does not type-check Angular templates**, so a removed/renamed/
retyped binding is invisible to a consumer's `tsc` and only bites at their AOT
build or the next version bump (the same blind spot `check-templates.ts` guards
_inside_ this repo — 8.x pairs with it). When the guard trips: run
`pnpm run api:surface`, review the diff (it _is_ the API-change review), and add
the CHANGELOG line (§10) — in 0.x a binding removal/rename/retype is `BREAKING`
(minor bump). Never hand-edit `API-SURFACE.md`. _Why:_ three controlled-pair
outputs (§4.12) were removed and a `pageSize` retyped with nothing forcing the
maintainer to notice or the log to record it — the snapshot makes every such move
loud at author time.

---

## 9 · Registries (extensible singletons)

9.1 **One app-wide source.** Icons (`IconRegistry`) and auto-colour
(`PaletteRegistry`) are root singletons: the same seed/name resolves to the same
result everywhere.

9.2 **Configure at bootstrap, override at runtime.** Ship a `provideX()` for
`app.config.ts` (idiomatic, like `provideRouter`) **and** a reactive runtime
setter (`registry.use(...)`) that recolours/re-resolves in the same frame.

9.3 **Consumers never touch the internals** (palette arrays, the hash, the icon
map) — only the registry's public method.

## 10 · Changelog (docs ship with code)

10.1 **A user-facing change updates `CHANGELOG.md` `[Unreleased]` in the _same_
commit** (or an immediately-following `docs:` commit). "User-facing" = anything a
consumer of the published package can observe: a public component/input/output,
an exported type, a token, a theme, a behaviour or a11y change. Add the line
under the right Keep-a-Changelog heading (`Added` / `Changed` / `Fixed` / `Docs`)
and mark breaking changes **`BREAKING`**. This is the fold-ng spelling of the
repo rule _"docs ship with code — never leave docs stale"_.

10.2 **Demo-only work stays out of the changelog.** Gallery pages, playground
wiring, the preview iframe, internal test/tsconfig hygiene — none of it reaches a
package consumer, so it never appears in `CHANGELOG.md`. It lives in commit
messages (and `docs/TODO.md` when it's a tracked decision).

10.3 **Don't defer the log to release time.** Reconciling `[Unreleased]` only when
cutting a version is how a breaking change silently ships — the per-commit line is
the safeguard, `scripts/release.mjs` just stamps the date. If you notice drift
(the log fell behind reality), fix it in a standalone `docs(changelog):` commit and
treat the lapse as the exception, not the workflow.

---

## Findings ledger

From the 2026-07 hardcore review. Status: ✅ done · ⏳ planned (`TODO.md`) · 📌
accepted-with-rationale.

| #   | Finding                                                                       | Rule    | Status |
| --- | ----------------------------------------------------------------------------- | ------- | ------ |
| 1   | Contract test guarded token _definitions_, not component _usage_              | 1.3/1.7 | ✅     |
| 2   | `avatar.onColor` fixed `#1a202c` → unreadable on dark custom palettes         | 6.3     | ✅     |
| 3   | Focus-trap matched hidden elements                                            | 6.2     | ✅     |
| 4   | No elevation/shadow tokens → per-component `rgba` shadows                     | 1.4     | ✅     |
| 5   | TS exports half `Fold`-prefixed                                               | 3.3     | ✅     |
| 6   | Hard-coded French aria/labels in a "reusable" package                         | 5.1     | ⏳     |
| 7   | `--fold-space/motion` scales exist but ~unused                                | 1.5     | ⏳     |
| 8   | Focus-trap doesn't `inert` the background                                     | 6.2     | ⏳     |
| 9   | Panel close hand-rolls an `<svg>`                                             | 4.7     | ⏳     |
| 10  | px type scale hurts user-zoom a11y                                            | 1.6     | 📌     |
| 11  | `fold-menu` reads the shell's `--fold-shell-rail-width` var                   | 5       | 📌     |
| 12  | `page-layout` `[description]` slot swallowed `fold-page-section[description]` | 4.8     | ✅     |

**#11 rationale (accepted).** Making the rail sizing pure-CSS (both shell
columns `auto`, each rail component owns its width — mirrors `workspace-rail`)
meant `fold-menu` declares `width: var(--fold-shell-rail-width, 64px)` for its
collapsed state. That couples the menu to a var **named for the shell**, so the
two `fold-ng` components are no longer fully independent. Accepted because:
(a) it keeps the shell's `railWidth` input working end-to-end with **zero app
changes**; (b) a menu used **standalone** (no shell) falls back cleanly to
`64px`; (c) both components ship in the same package. If `fold-menu` ever needs
to be shell-agnostic, give it its own `--fold-menu-rail-width` token (with the
shell var as the fallback default) and have the shell publish onto it.
