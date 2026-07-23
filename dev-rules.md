# fold-ng — dev rules

The rulebook for the design system. `README.md` is the consumer's guide; this is
the **contributor's contract**. Every rule here is either enforced by a test/lint
or is a deliberate convention we hold the line on. When a rule is broken, the fix
is to obey the rule — not to widen the exception.

Writing the **gallery** (`dev/`) is a separate contract: see
[`CLAUDE.md`](CLAUDE.md).

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
push a component toward the limit — `tab-nav` sits at 298.)

4.6 **Every component ships JSDoc** with `@selector`, a one-line what-it-is, and
an `@example`. The README table stays in sync.

4.7 **Reuse the icon component.** Draw glyphs with `<fold-icon>`, don't hand-roll
inline `<svg>` in a component template.
⚠️ _Known debt:_ the panel close button still inlines an `<svg>`; fold into
`<fold-icon name="close">` on touch.

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

---

## 5 · Portability (no app leaks)

5.1 **No hard-coded UI strings.** A reusable component must not bake in a
language. User-facing + `aria-label` text is an `input()` with a sensible
**English** default; the app overrides per-locale (once, at the call site or
host).
⚠️ _Known debt:_ `fold-paginator` and the panel host/header hard-code **French**
aria/labels (`"Fermer"`, `"Page précédente"`, `"Éléments par page"`…) while
`fold-loading` defaults to English — mixed and non-overridable. Extract to inputs;
tracked in `TODO.md`.

5.2 **No app-domain types.** The package knows nothing of `programs`, `shows`,
`contracts`. A generic mechanism is parameterised (`<T>` / opaque payload); the
app supplies the concrete type on top.

5.3 **Categorical data may be hex — in TS, not in styles.** Auto-colour palettes
(`palettes.ts`) and the avatar ink are qualitative data (theme-invariant hues),
so they live as hex in TS and are exempt from 1.3. They must **not** appear in a
`styles:` block.

---

## 6 · Accessibility

6.1 **Overlays trap focus.** Any modal/panel uses `FocusTrapDirective`
(`role="dialog"` + `aria-modal` + a `tabindex="-1"` host), restores focus on
close, and closes on `Escape`.

6.2 **The trap only counts visible focusables** — `display:none` /
`visibility:hidden` / `[hidden]` are filtered (with a fallback to raw matches in
a non-rendering env).
⚠️ _Known gap:_ the trap is keyboard-only — the page behind is **not** `inert`,
so a screen-reader virtual cursor can still reach it. Add `inert` to the host's
siblings for a full modal barrier. Tracked in `TODO.md`.

6.3 **Contrast is derived, not assumed.** Text on a categorical fill picks its
ink from the fill's luminance (`fold-avatar`), so a custom palette can't produce
unreadable text.

6.4 **Icons inherit colour** via `currentColor` and are sized with a `size`
input — never a hard-coded fill.

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
