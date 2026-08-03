# fold-ng

[![npm version](https://img.shields.io/npm/v/fold-ng.svg)](https://www.npmjs.com/package/fold-ng)
[![npm downloads](https://img.shields.io/npm/dm/fold-ng.svg)](https://www.npmjs.com/package/fold-ng)
[![install size](https://packagephobia.com/badge?p=fold-ng)](https://packagephobia.com/result?p=fold-ng)
[![types included](https://img.shields.io/npm/types/fold-ng.svg)](https://www.npmjs.com/package/fold-ng)
[![license](https://img.shields.io/npm/l/fold-ng.svg)](./LICENSE)
[![status: pre-1.0](https://img.shields.io/badge/status-pre--1.0-2ea043)](./CHANGELOG.md)
[![live demo](https://img.shields.io/badge/live_demo-gallery-6f42c1)](https://hugoheynard.github.io/fold-ng/)
[![Sponsor](https://img.shields.io/github/sponsors/hugoheynard?logo=githubsponsors&label=Sponsor&color=ea4aaa)](https://github.com/sponsors/hugoheynard)

**fold-ng** is an accessible, **dark-first Angular 22 UI component library and
design system** — signals-first, standalone, zoneless, and SSR-ready. It ships a
two-tier **design-token** model (themeable to the bone) plus WCAG-minded
components: buttons, forms, overlays/dialogs, navigation, data tables, toasts and
more. No `NgModule`, no `zone.js`, no runtime CSS-in-JS — just standalone
components styled against CSS variables.

### ▶ [Live demo & component gallery](https://hugoheynard.github.io/fold-ng/)

Every component, driven by a live playground — the fastest way to see what
`fold-ng` looks and behaves like.

> **Production-quality, pre-1.0 (`0.x`).** Every component is tested, the package
> builds AOT green, and it's dogfooded as the design system of a real
> application. It stays `0.x` only because the API isn't frozen until `1.0.0` —
> not because it's unstable. **Pin your version**; `0.x` minor bumps may still
> refine the API. See [`CHANGELOG.md`](./CHANGELOG.md) for the road to 1.0.

## Install

```bash
npm install fold-ng
```

Angular 22 (`@angular/core`, `@angular/common`, `@angular/forms`,
`@angular/platform-browser`) is a peer dependency.

> **Bundle size.** Components are standalone and the package is side-effect-free
> except its CSS (`sideEffects: ["**/*.css"]`), so you only ship what you import —
> not the whole library. (No Bundlephobia badge: it can't measure an Angular
> partial-Ivy package, which needs the Angular linker to become final JS — the
> install-size badge above is the honest figure.)

## Quickstart

Import the tokens once, then use any standalone component directly:

```ts
// styles.css
@import "fold-ng/tokens.css";
```

```ts
import { Component } from "@angular/core";
import { FoldButtonComponent, FoldCardComponent } from "fold-ng";

@Component({
  standalone: true,
  imports: [FoldButtonComponent, FoldCardComponent],
  template: `
    <fold-card>
      <button foldButton emphasis="solid" (click)="save()">Save</button>
      <a foldButton emphasis="outline" intent="neutral" routerLink="/back">
        Cancel
      </a>
    </fold-card>
  `,
})
export class DemoComponent {
  save() {}
}
```

Everything is dark by default; opt into light with `data-theme="lumen"`. See
[`docs/TODO.md`](./docs/TODO.md) for the roadmap and the full component list below.

## Consuming the tokens

Import the CSS once at your app's style entry point:

```css
@import "fold-ng/tokens.css";
```

Everything renders **umbra** (the dark theme) **by default**. To switch a subtree (or the whole app),
set `data-theme` on an ancestor — usually `<html>`:

```html
<html data-theme="lumen"></html>
```

Five themes ship: `umbra` (the dark base, no attribute), `lumen` (light),
`bubbly` (festive lavender, violet brand, rounded), `navi` (dark chrome, light
page) and `titan` (brushed titanium — a light brushed-steel ground with a
frameless top and floating rails, bright cards, a heat-anodized copper-orange
brand, solid steel borders, iPhone-soft corners). The extras exist to prove the point — each
is the umbra or lumen block with its primitive families re-pointed. Adding a
sixth is a new `[data-theme]` block in `semantic.css` plus the primitives it
names.

`bubbly` and `navi` also change their corners — **radius is the one scale a theme may
re-declare**, because corner softness is a brand axis (friendly vs
institutional) and it is the only scale that changes nothing about where a box
sits. Type, space, motion and elevation stay theme-invariant: retheming must
never re-flow a page. The contract test enforces that split.

`navi` is the interesting one: mixing chrome and page means one theme needs the
`text`/`border`/`surface` roles to differ **per region**, which a single set of
roles cannot express. It gets there by re-declaring those roles on
`[data-surface="chrome"]` — a contract any element opts into with the
`foldSurface` directive (the app-shell stamps it on its rails + header) — so the
theme never names a component's internals. Variables only. If mixed chrome ever
stops being a demo, the catalogue should grow real `*-on-chrome` roles.

## Auto-inverting surfaces

The same `[data-surface]` seam powers an **accent** surface — a region filled
with the brand accent whose entire content sub-tree flips to a compatible
on-accent palette **with no per-component code**. Drop a `fold-card` in a grid
and set `surface="accent"` (or stamp `foldSurface="accent"` on any element):

```html
<fold-card surface="accent">
  <h3>Studio plan</h3>
  <p>Everything in Pro, plus shared workspaces.</p>
  <fold-badge content="Popular" variant="accent" />
  <fold-link href="/plans">Compare plans</fold-link>
  <button foldButton>Choose</button>
</fold-card>
```

Every nested thing — the text ramp, the hairline border, a raised band, the
badge, the link, the button, even a filled icon tile — reads correctly on the
accent. Not because the card special-cases them, but because the region
**re-points the semantic roles** they already resolve against.

### How it works (and why it survives a solid button)

An inverting surface has to do something a chrome surface never does: **swap the
brand pair**. On the accent, `--fold-color-primary` should become the light ink
(so a link or a filled tile's ground reads), and `--fold-color-on-primary` should
become the accent itself (so the label _on_ that tile reads). Written naively
that's a CSS custom-property cycle (`a: var(b); b: var(a)` → both invalid).

The trick: **capture on the surface, invert on the descendants.** The surface
element records the accent and its ink into two private vars _while the tokens
still hold their normal values_, and the inverted role-set is applied to
descendants from those captures — so a role can reference the pre-inversion value
it is replacing, no cycle:

```css
[data-surface="accent"] {
  --_accent-ink: var(--fold-color-on-primary); /* captured here… */
  --_accent-fill: var(--fold-color-primary);
}
[data-surface="accent"] * {
  --fold-color-text: var(--_accent-ink); /* …consumed here */
  --fold-color-primary: var(--_accent-ink); /* fill → light ink */
  --fold-color-on-primary: var(--_accent-fill); /* on-fill → the accent */
  /* …surfaces/borders as color-mix of the captured pair… */
}
```

Every value is a `color-mix` of the captured pair, so it is **derived, not
authored** — one definition holds on all five themes, and the surface/band steps
stay a lighter shade of the accent (gradation kept in-hue).

### Overriding per theme

None of this is a cage. Writing your own CSS in a card is always free — raw
values don't reference the roles, so a surface never touches them. An _override_
isn't a hack: it re-anchors one **relationship** (text ↔ ground ↔ accent) inside
a controlled frame, and coherence follows because the ratios are preserved. Speak
in roles and gain the adaptation, or paint a pixel and own it — both coexist.

The derived defaults are good, not sacred. A theme that wants a different
on-accent ramp (a light accent might want darker text, say) overrides any role by
nesting its own theme selector under the surface — the same seam chrome uses:

```css
[data-theme="titan"] [data-surface="accent"] * {
  --fold-color-text: var(--fold-ref-steel-900); /* dark ink on a light accent */
}
```

The one honest limit: an accent surface is a _single_ ground, so `surface`
stays one axis — there is no `accent` × `sunken`. That is a feature (a card in a
grid has one job: stand out), not a gap.

Then style against the semantic tokens — never a raw colour:

```css
.header {
  background: var(--fold-color-bg-header);
}
.cta {
  background: var(--fold-color-primary);
  color: var(--fold-color-on-primary);
}
.cta:hover {
  background: var(--fold-color-primary-strong);
}
```

From TypeScript you get the same tokens, typed:

```ts
import { foldColorVar } from "fold-ng";

el.style.background = foldColorVar("bg-page"); // "var(--fold-color-bg-page)"
foldColorVar("bg-pag"); // ✗ compile error — misspelt token
```

## The two-tier model

Tokens come in two layers. This separation is the whole point — it is what lets
another project re-theme by swapping the palette, and what keeps the app from
hard-coding colours.

| Tier               | File             | Prefix           | Role                                                                        |
| ------------------ | ---------------- | ---------------- | --------------------------------------------------------------------------- |
| **1 · Primitives** | `primitives.css` | `--fold-ref-*`   | The raw palette. The only place a literal hex is allowed. Theme-invariant.  |
| **2 · Semantic**   | `semantic.css`   | `--fold-color-*` | Role tokens (`bg-header`, `primary`…). Point at primitives. Flip per theme. |

**Components consume tier 2 only.** A component never names `--fold-ref-teal-500`;
it names `--fold-color-primary`. Re-theming means re-pointing the semantic layer,
never touching a component.

## The naming convention

```
--fold-<tier>-<category>-<role>[-<variant>]
        │       │          │        └─ strong · primary · secondary · tertiary …
        │       │          └────────── page · header · rail · primary …
        │       └───────────────────── color · (space, radius, text … to come)
        └───────────────────────────── ref (primitive) · color (semantic)
```

Namespaced with `--fold-` so the package never collides with an app's own tokens.

**The `bg-` rule.** A surface fill role carries a `bg-` marker (`bg-page`,
`bg-rail-primary`); a foreground/brand role does not (`primary`, `on-primary`).
So `bg-` reads as "this paints a background."

## The contract test

`src/tokens/__tests__/tokens.contract.spec.ts` is the lock. It fails the build
if:

- any theme block falls out of parity with the catalogue (the dark `:root` base
  and **every** `[data-theme]` override are checked);
- a semantic token points at a primitive that doesn't exist (dangling `var`);
- a semantic token hard-codes a hex instead of referencing a primitive;
- a primitive is declared but never used;
- the CSS drifts from the typed catalogue in `tokens.catalog.ts`.

Add a token → add it to `tokens.catalog.ts` **and** every theme block, or the
test goes red. That is how a theme stays complete.

```bash
pnpm --filter fold-ng test
```

## Current token set

Deliberately small — we grow it together, one confirmed role at a time.

| Semantic token                   | Role                          |
| -------------------------------- | ----------------------------- |
| `--fold-color-bg-page`           | Page background               |
| `--fold-color-bg-header`         | Top header bar                |
| `--fold-color-bg-rail-primary`   | Rail 1 — app menu             |
| `--fold-color-bg-rail-secondary` | Rail 2 — workspace menu       |
| `--fold-color-bg-rail-tertiary`  | Rail 3 — tertiary nav         |
| `--fold-color-primary`           | Primary / accent (brand teal) |
| `--fold-color-primary-strong`    | Primary hover / active        |
| `--fold-color-on-primary`        | Text / icon on a primary fill |

(plus the status families, neutral surfaces, the two card tints `surface-card` /
`surface-sunken`, glass, and the
radius / text / icon-size / space / motion / blur scales — see
`tokens.catalog.ts` for the full, typed set.)

## Components

All standalone, signals-first, styled against the semantic tokens. Import from
the package root.

### Find one by what you need

The reference table below is keyed by component **name** — but you usually know
your **intent**, not the name (that's how an uppercase mini-title gets hand-rolled
instead of reaching for `fold-element-title`). Start here; **before hand-rolling a
label, field, badge, card or overlay, scan this table** — fold almost certainly
ships it.

| I need to…                                                       | Reach for                                                                                              |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| a small **uppercase label / eyebrow** over a group               | `fold-element-title` (`variant="eyebrow"` · `bar` · `title`)                                           |
| a **section** with a title + description + actions               | `fold-page-section` (semantic `<section>` + `aria-labelledby`)                                         |
| show **read-only label/value pairs** (a recap)                   | `fold-field-list` / `fold-field` (`dl/dt/dd`)                                                          |
| a **text** field                                                 | `fold-input` — number → `fold-number-input` · multiline note → `fold-textarea`                         |
| a **date** / **time** field                                      | `fold-date` (date·datetime-local·month·week) · `fold-time`                                             |
| a **dropdown**                                                   | `fold-select` (native) — custom rows → `fold-listbox` · multi → `fold-multiselect`                     |
| an **on/off** field · a **password** field                       | `fold-checkbox` · `fold-password-field`                                                                |
| a **range** / **debounced search**                               | `fold-slider` / `fold-range-slider` · `fold-search`                                                    |
| a **button** · **icon-only** action · icon **on/off**            | `fold-button` (`<button>`/`<a>`) · `fold-button-icon` · `fold-toggle-icon` · text link → `fold-link`   |
| an inline **"are you sure?"** guard                              | `fold-inline-confirm` (no modal — simple · type-to-confirm · secret)                                   |
| a **status / count pill** · status→colour                        | `fold-badge` · `fold-status-badge`                                                                     |
| a **tinted message / alert** row                                 | `fold-callout` (`inset` for in-flow)                                                                   |
| a transient **toast**                                            | `fold-toast` + `FoldToastService`                                                                      |
| a **card** · titled info card · page **splash**                  | `fold-card` · `fold-context-card` · `fold-hero-section` (bordered → `fold-hero-card`)                  |
| in-page **tabs** · a routed **nav bar** · a segmented control    | `fold-tabs` · `fold-view-nav` · `fold-view-toggle` / `fold-choice-row`                                 |
| a **table** + **pagination**                                     | `fold-data-table` · `fold-paginator`                                                                   |
| an **avatar** · a cluster                                        | `fold-avatar` (+ `…Detail`) · `fold-avatar-list`                                                       |
| an **empty** / **loading** state                                 | `fold-empty-state` · `fold-loading` / `fold-spinner`                                                   |
| a **side panel** · anchored **popover** · actions **menu**       | `fold-panel-host` · `fold-popover` · `fold-dropdown`                                                   |
| a **collapsible** section                                        | `fold-disclosure` (a modal dialog is roadmap — use a modal `fold-panel-host` or `fold-inline-confirm`) |
| an **icon** · a **calendar** · a **timeline / stepper**          | `fold-icon` · `fold-calendar-month`/`-week`/`-day`/`-list`/`-agenda`/`-timegrid` · `fold-timeline`     |
| a **nav rail** · app **skeleton** · a **detail page** with rails | `fold-menu` · `fold-app-shell` · `fold-aside-layout` (page scaffold → `fold-page-layout`)              |
| **drag-drop** file upload                                        | `fold-file-dropzone`                                                                                   |

| Component                                                | Selector                               | What it is                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -------------------------------------------------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `FoldAppShellComponent`                                  | `fold-app-shell`                       | Responsive app skeleton (rails + header + content + self-collapsing `footer` slots; `headerLayout`/`footerLayout` inset·full, `footerBehavior` pinned·scroll; `mobileNav` drawer·none — `[(mobileNavOpen)]` off-canvas drawer for the primary rail on mobile, or `none` to compose an `fold-nav-launcher`; `contentScroll` clip·auto; built-in skip-link to a focusable `<main>`. Regions float per-surface via `foldElevated`, not a shell flag).                                                                                                                                                                                                                                                                                                          |
| `FoldMenuComponent` (+ `Item` / `Section` / `Separator`) | `fold-menu`                            | Collapsible nav rail — coloured sections, `tint="follow"`, depth `level`, collapse-toggle placement. Items are `a[fold-menu-item]`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `FoldNavLauncherComponent` (+ `FoldNavTileComponent`)    | `fold-nav-launcher`                    | Full-screen mobile nav launcher — a centred tile grid over a blurred scrim (scrim / `Escape` / close dismissal, focus-trap, scroll-lock). `columns="auto"` scales tiles to the count. Pairs with `fold-app-shell mobileNav="none"`. Tiles are `a[fold-nav-tile]` — `variant="surface"`·`filled`.                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `FoldPageLayoutComponent`                                | `fold-page-layout`                     | Page scaffold — gutter + header + body rhythm; fills its container (width is a content concern). Tokens `--fold-page-gutter` / `--fold-page-gap`; sections can `bleed` edge-to-edge.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `FoldPageSectionComponent`                               | `fold-page-section`                    | Semantic `<section>` grouping — eyebrow title (names the region via `aria-labelledby`) + description + actions; `stack` / `bleed` helpers. Not a box — compose a `fold-card` inside for that.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `FoldHeroSectionComponent`                               | `fold-hero-section`                    | Full-bleed page splash — the borderless intro band at the top of a page (carries the `<h1>`). Direct child of `fold-page-layout`: cancels the gutter + top pad to sit flush, brand-tinted wash + hairline. `align` center·start, `wash`, `[heroBackdrop]` decorative lane. (For a bordered header card, see `fold-hero-card`.)                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `FoldAsideLayoutComponent`                               | `fold-aside-layout`                    | Detail-page grid — a centred column flanked by up to two sticky rails (`[asideLeft]` / `[asideRight]`), collapsing to one column on its own container width (`:has()`-driven, container queries). Labelled rails become `complementary` landmarks; every track is a CSS var.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `FoldNavLayoutComponent`                                 | `fold-nav-layout`                      | Places a bar (`[tabNav]` — a `fold-view-nav` or a `fold-tabs`) with its content — `placement="top"` or a `side` rail that folds back on top (hysteretic, on its own width) below `foldAt`. `exportAs="foldNavLayout"` exposes `stacked()` so the projected bar follows in one binding.                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `FoldCardComponent`                                      | `fold-card`                            | Raised content surface (`surface` = `card`/`sunken`/`accent`, hairline border, consistent radius). `accent` is an **auto-inverting** accent-filled card: the whole content sub-tree re-points to a compatible on-accent palette (text, borders, band gradation, nested buttons/links/icon-tiles) — every value a `color-mix` of the accent, so it holds on all themes (see [auto-inverting surfaces](#auto-inverting-surfaces)). Optional projected `[cardHeader]`/`[cardFooter]` bands with per-band chrome (`separators`/`raisedBands` = `none`/`header`/`footer`/`both`); the body padding never shifts when a band toggles. `interactive` makes the whole card an accessible button (`role`/`tabindex`, focus ring, Enter/Space/click → `(activated)`). |
| `FoldContextCardComponent`                               | `fold-context-card`                    | Titled info card: icon header + body + optional footer action.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `FoldHeroCardComponent`                                  | `fold-hero-card`                       | Prominent header **card** — bordered surface × accent overlay + optional accent bar. (For a full-bleed page splash, see `fold-hero-section`.)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `FoldElementTitleComponent`                              | `fold-element-title`                   | Uppercase section/card mini-title (eyebrow · bar variants).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `FoldFieldListComponent` / `…Field`                      | `fold-field-list`                      | Read-only `dl/dt/dd` recap — label/value pairs (`[empty]` placeholder). The _display_ half of a record; `fold-input` is the _edit_ half.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `FoldInputComponent`                                     | `fold-input`                           | Text-input control (`value: string`) — Signal Forms (`[formField]`) or standalone `[(value)]`; size × align × variant, `label` / `required` / `hint`. The _edit_ half of a record (`fold-field` reads).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `FoldNumberInputComponent`                               | `fold-number-input`                    | Numeric sibling of `fold-input` (`value: number \| null`, empty ⇒ `null`); owns `min` / `max` / `step` + `label` / `required` / `hint`. Split so each control keeps its true type.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `FoldTextareaComponent`                                  | `fold-textarea`                        | Multiline sibling of `fold-input` (`value: string`). **No resize handle** — fixed `rows` height, wraps + scrolls overflow. Shares the box + `label`/`required`/`hint`/`error` chrome. Signal Forms or `[(value)]`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `FoldSelectComponent`                                    | `fold-select`                          | Native `<select>` wrapper (options projected as `<option>`); shares `fold-input`'s box chrome. Signal Forms (`FormValueControl<string>`) or `[(value)]`. For custom rows use `fold-listbox`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `FoldDateComponent`                                      | `fold-date`                            | Native calendar-date wrapper (`type` = date · datetime-local · month · week) — keeps the OS picker, hands back a typed `[(value)]` string (`YYYY-MM-DD`). `min`/`max`/`step` pass through. Time-of-day → `fold-time`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `FoldTimeComponent`                                      | `fold-time`                            | Native time-of-day wrapper (`<input type="time">`) — typed `[(value)]` string (`HH:mm`), `min`/`max`/`step`. The sibling of `fold-date`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `FoldCheckboxComponent`                                  | `fold-checkbox`                        | Boolean control — a native `<input type="checkbox">` (keyboard, `indeterminate`, forms) restyled to tokens. Signal Forms (`[formField]`, a `FormCheckboxControl`) or standalone `[(checked)]`; `indeterminate`, `label`/`ariaLabel`, `hint`/`errors`, `size`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `FoldPasswordFieldComponent`                             | `fold-password-field`                  | Password input + a live requirements checklist (a dot/tick per rule). Rules injected via `FoldPasswordRule` (`{ label, test }` — regex/zod/anything); `revealable` eye (a `fold-input` capability); `marker` dot/check; `[rules]` slot to redesign the list; `validChange`; Signal Forms.                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `FoldViewToggleComponent`                                | `fold-view-toggle`                     | Segmented single-select (Cards/Table, density, chart-mode…). Generic `options` (`{ value, icon?, label?, ariaLabel?, disabled? }`) + `[(value)]`; a real `role="radiogroup"` — roving tabindex, arrow keys, Home/End, disabled-skip; `size`, `iconOnly`, `activeStyle` (raised / accent).                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `FoldSearchComponent`                                    | `fold-search`                          | Debounced search box — an `fold-input` that emits `searchChange` once typing settles (`delayMs`), trimmed + de-duplicated.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `FoldListboxComponent` / `FoldOptionComponent`           | `fold-listbox` / `fold-option`         | Styleable single-select — the richer sibling of `fold-select` (native `<select>`) for options that need custom rows (icon, second line, status). On `fold-popover`; `role="listbox"` + `aria-activedescendant`, full keyboard (↑/↓, `Home`/`End`, type-ahead, `Enter`). Signal Forms (`FormValueControl<string>`, `[formField]`/`[(value)]`); shares `fold-input`'s box chrome.                                                                                                                                                                                                                                                                                                                                                                             |
| `FoldMultiselectComponent`                               | `fold-multiselect`                     | Multi-select sibling of `fold-listbox` (same popover + `fold-option` rows). Value is a set (`readonly string[]`); activating a row toggles it and the panel stays open. Separate component — not a `multiple` flag — so the Signal-Forms value type stays honest. `role="listbox"` + `aria-multiselectable`; the trigger summarises the picks.                                                                                                                                                                                                                                                                                                                                                                                                              |
| `FoldSliderComponent`                                    | `fold-slider`                          | Single-value range slider — a styled native `<input type="range">` (design-system track/fill/thumb). Signal Forms (`[formField]`, a `FormValueControl<number>`) or `[(value)]`; real `<label for>`, `aria-valuetext`, `hint`/`errors`, focus ring.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `FoldRangeSliderComponent`                               | `fold-range-slider`                    | Dual-thumb range slider selecting a `{ min, max }` window (shares the slider track/thumb). Two-way `[(value)]`; a labelled `role="group"`, per-thumb i18n aria (`minLabel`/`maxLabel`) + formatted `aria-valuetext`, `disabled`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `FoldFileDropzoneComponent`                              | `fold-file-dropzone`                   | File-picker dropzone — drag-over visuals, keyboard activation, hidden `<input type=file>` plumbing; emits the picked `File[]` (presentational — never uploads).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `FoldLinkComponent`                                      | `fold-link`                            | Inline text link / link-button (icons, accent · muted).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `FoldButtonComponent`                                    | `button[foldButton]` · `a[foldButton]` | Action button — applied to a real `<button>` **or** `<a>` (link that looks like a button, gets `href`/`routerLink`); orthogonal `emphasis` (solid·soft·outline) × `intent` (primary·neutral·warning·danger) × 3 sizes × shape/`block`; `icon`/`iconTrailing` shorthand (auto-sized) or project content; `loading` (spinner + `aria-busy`). Use native `(click)`.                                                                                                                                                                                                                                                                                                                                                                                            |
| `FoldButtonIconComponent`                                | `fold-button-icon`                     | Icon-only **momentary** button — shape × size × tone; a one-shot action (no pressed state). For a text button use `fold-button`; for on/off use `fold-toggle-icon`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `FoldToggleIconComponent`                                | `fold-toggle-icon`                     | Icon-only **toggle** — the same surface as `fold-button-icon`, plus `[(active)]` + `aria-pressed` (true/false) and a pressed state. Emits `toggled`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `FoldInlineConfirmComponent`                             | `fold-inline-confirm`                  | In-place “are you sure?” guard — the projected trigger swaps to a confirm/cancel row (no modal). Simple (`confirmed` emits `""`), type-to-confirm (`[match]`), or secret (`password`, masked, emits the value). `confirmIcon` + a chosen `cancelIcon`; `Escape` cancels; `message` announced via `aria-describedby`; focus in-then-back; controlled `[(open)]` + `keepOpenOnConfirm` for async pending; i18n via `provideFoldInlineConfirmLabels`.                                                                                                                                                                                                                                                                                                          |
| `FoldDataTableComponent`                                 | `fold-data-table`                      | Controlled roster table — sortable sticky header, tone rows, controlled selection (checkbox column), roving-keyboard nav, `mobileLayout` (scroll / auto-cards / custom `foldRowCard`), an optional `foldToolbar` bar, sticky-first, density.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `FoldPaginatorComponent`                                 | `fold-paginator`                       | Server-side paginator (size selector + range + page nav).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `FoldTimelineComponent`                                  | `fold-timeline`                        | Connected rail of nodes (dot + optional date + label) — `vertical` navigable history or `horizontal` step progress; nodes optionally clickable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `FoldBadgeComponent`                                     | `fold-badge`                           | Status / count pill (accent/info/warning/alert/success).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `FoldStatusBadgeComponent`                               | `fold-status-badge`                    | Status→colour badge (maps a domain status key to a tone).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `FoldChoiceRowComponent`                                 | `fold-choice-row`                      | Segmented / chip selector.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `FoldViewNavComponent`                                   | `fold-view-nav`                        | Navigation bar styled as tabs. Items carry a `link` (routerLink → a real `<a>`: cmd-click, deep-links, active state auto), an `href`, or nothing (a button); `aria-current="page"` on the active one. `direction="auto"` follows a wrapping `fold-nav-layout`; `collapsed` for an icon rail. For in-page panel switching use `fold-tabs` instead.                                                                                                                                                                                                                                                                                                                                                                                                           |
| `FoldTabsComponent` + `FoldTabPanelComponent`            | `fold-tabs` + `fold-tab-panel`         | The in-page ARIA Tabs widget: `role="tablist"` + roving arrow-key keyboard, `aria-selected`/`aria-orientation`, each tab wired to its `fold-tab-panel` (`aria-controls` ↔ `aria-labelledby`). Panels take the bar by ref (`[tabs]="t"`) so they coordinate across `fold-nav-layout` slots.                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `FoldIconComponent`                                      | `fold-icon`                            | SVG icon (~135 built-in glyphs across 7 categories incl. `commerce` + `FoldIconRegistry`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `FoldSpinnerComponent`                                   | `fold-spinner`                         | Indeterminate loading arc (`currentColor`, icon-sized, reduced-motion aware). Decorative by default; `label` → `role="status"`. Powers `loading` on the buttons.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `FoldAvatarComponent` / `…Detail`                        | `fold-avatar`                          | Initials/image avatar (square, muted, status ring) + identity cell.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `FoldAvatarListComponent`                                | `fold-avatar-list`                     | Overlapping avatar cluster (per-face variant, `limit` + a `+N` overflow chip).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `FoldToastComponent` / `…Container`                      | `fold-toast`                           | Frosted snackbar (variant glyph + dismiss) + queue host (+ `FoldToastService`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `FoldLoadingStateComponent`                              | `fold-loading`                         | Loading placeholder — `fold-spinner` + message, in a `role="status"` region; `size` input; stretches to fill.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `FoldEmptyStateComponent`                                | `fold-empty-state`                     | Empty-state block (icon + title + message + optional action).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `FoldCalloutComponent`                                   | `fold-callout`                         | Tinted message row — status colour + icon + message + optional trailing actions; `inset` (bordered, in-flow) appearance.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `FoldDisclosureComponent`                                | `fold-disclosure`                      | One summary toggling one collapsible panel — the accordion primitive (open-state is the consumer's to bind); keeps content mounted, unlike native `<details>`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `FoldPanelHostComponent`                                 | `fold-panel-host`                      | Side-panel / overlay host (+ `FoldPanelHostService` / `FoldPanelRef` / `FoldPanelToggle`). Modal: accessible name, `inert` background barrier, top-most focus trap, scroll-lock. Localise the close label once via `provideFoldPanelLabels({ close })`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `FoldPanelHeaderComponent`                               | `fold-panel-header`                    | Standard panel header (title/eyebrow, self-closing). Names its dialog (`aria-labelledby`) and reads the app-wide close label.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `FoldPopoverComponent`                                   | `fold-popover`                         | Anchored floating layer — projected content in the native top layer (escapes `overflow`/`z-index`), positioned by a dependency-free **flip → size → shift** engine (`computePlacement`): a tall panel gets a `max-height` and scrolls inside the viewport. `[(open)]`; `autoUpdate` (ResizeObserver); optional `arrow`; native CSS enter/exit (`@starting-style` + `allow-discrete`); outside-click + `Escape` dismissal, focus-return, auto-wired `aria-haspopup`/`expanded`/`controls`.                                                                                                                                                                                                                                                                   |
| `FoldDropdownComponent`                                  | `fold-dropdown`                        | Actions menu on `fold-popover` — `role="menu"` with `<fold-dropdown-item>`s, ↑/↓ roving, `Home`/`End`, type-ahead; opens onto the first enabled item, closes returning focus to the trigger. Give the trigger `foldPopoverTrigger="menu"`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

| `FoldCalendarMonthComponent` | `fold-calendar-month` | Month grid where events **span** the days they cover: a date-axis `role="grid"` with one roving tab stop, and over it a lane-packed layer of bands (one per week crossed, with open edges). `+N` chips sit on the crowded day, not at the end of the row. |
| `FoldCalendarWeekComponent` | `fold-calendar-week` | Seven day columns of stacked chips — nothing spans, so nothing is clipped and every chip is a real button in the tab order. Container-queried: labels and icons drop out before they truncate. |
| `FoldCalendarDayComponent` | `fold-calendar-day` | One day in full, with room for the subline — where a `dayClick` drill-down lands. Empty state takes a projected action (`button[empty]`). |
| `FoldCalendarListComponent` | `fold-calendar-list` | The flat reading of the same feed, in date order, each row leading with the span `Intl` formats. Nothing is ever hidden behind a lane budget. |
| `FoldCalendarTimegridComponent` | `fold-calendar-timegrid` | Hour columns for a week or a day, with the all-day strip on top. Timed events are placed on the clock and share their width only with what they actually collide with (exclusive boundaries, per-cluster widening); a span crossing midnight becomes one block per day. Times are wall-clock `HH:mm`, never instants; `now` is an input, not a clock. |
| `FoldCalendarAgendaComponent` | `fold-calendar-agenda` | "What's next" rail grouped by day, with a **to-handle** slice (the `warning`/`alert` tones — the same scale the chips paint with) and a live badge. Collapses to a spine; `mode`/`collapsed` are models, so the app owns persistence. |
| `FoldCalendarToolbarComponent` | `fold-calendar-toolbar` | Today / prev / next / period title / view switch. Owns no data — `date` and `view` are two-way, and the step matches the reading. `views` takes `{ value, label }` for an app's own view. |
| `FoldCalendarSourceFilterComponent` | `fold-calendar-source-filter` | Chips switching each feed of a merged calendar on and off. Owns the **selection** only; the caller runs the pure `foldFilterBySource()`. |

**Two tiers, on purpose.** The components are the first; under them, the same
geometry is exported as pure functions — `foldBuildMonthGrid` (week rows with
their events already packed into lanes), `foldBuildWeek` / `foldBuildDay`,
`foldBuildAgenda`, plus `foldShiftDate` / `foldRangeForView` / `foldViewTitle`
for paging and naming a period, and `foldCalendarNextFocus` for the arrow keys.
Lay a calendar out without rendering it with these components, and the hard part
— packing spans into lanes, clipping them at week boundaries, keeping an open
edge on the side that continues — is already solved and already tested. The
filters (`foldEventsOnDay`, `foldEventsInRange`, `foldFilterBySource`) are the
tier every page uses whichever rendering it picks.

**Measured, and kept measured.** Laying out a month (mean of 20 runs,
`pnpm bench:calendar`, committed with a budget so it cannot regress quietly):

| events in the window | 50   | 200  | 1 000 | 5 000 | 20 000 |
| -------------------- | ---- | ---- | ----- | ----- | ------ |
| ms per layout        | 0.14 | 0.41 | 0.99  | 5.0   | 22     |

Calendar dates are plain `YYYY-MM-DD` **strings**, never `Date`. That is also
exactly what `Temporal.PlainDate.toString()` returns, so the family is
**Temporal-native without depending on it**: `foldFromTemporal()` accepts a
`PlainDate`, `PlainDateTime` or `ZonedDateTime` (structurally typed, so it
compiles on a runtime that has none of them), and going the other way needs no
helper — `Temporal.PlainDate.from(foldDate)` already takes one of ours. See
`foldToday` / `foldFromNativeDate` / `foldAddDays` and the reasoning in
[`/calendar-dates`](https://hugoheynard.github.io/fold-ng/calendar-dates). The
family plots on the **Gregorian** calendar and has no resource (staff × day)
view. Whole-day spans are the month, week, day, list and agenda views; the
**time grid** adds the hours, with time as wall-clock `HH:mm` rather than an
instant — the app converts at its own boundary, and no zone can move a meeting
after that.

It is a **pure display**, by decision and not by omission: it knows nothing
about what an event means or which layer produced it, so it never originates
one — no drag-to-create, no range-select. Tone is the caller's to compute,
which is what lets the same component paint a leave request and an account
sitting open between registration and activation, its band crossing into
`warning` then `alert` on a threshold the app owns. Everything drawn around an event is a projectable template:
`foldCalendarEvent`, `foldCalendarDay`, `foldCalendarHeading`,
`foldCalendarTitle`, `foldCalendarOverflow`.

Directives worth knowing: **`foldSurface`** (`page`·`chrome` — the seam a mixed
theme re-colours across), **`foldElevated`** (raise any bg-owning element into
an inset, rounded, shadowed card — the per-surface "floating" mechanism, driven
by `--fold-surface-inset`/`-radius`/`-shadow`), **`foldStickyColumn`** (turn an
`<aside>` into a sticky side column — `sticky="top·center·bottom"` + `stickyOffset`,
the rest tunable via `--fold-sticky-column-*`; un-stick with
`--fold-sticky-column-position: static` at the page's stacking breakpoint), and
**`foldRepeatPress`** (press-and-hold auto-repeat for a stepper button — fires
once on press then on a tunable cadence while held, and stops the instant
`foldRepeatPressDisabled` goes true mid-hold).

## Form-field ids

Browsers warn — _"A form field element should have an id or name attribute"_ —
about any `<input>` / `<select>` / `<textarea>` that carries neither (autofill +
a11y can't identify it). Two pieces keep that silent, SSR-safely:

- **`FoldIdService`** — a unique-id generator. A per-injector counter (one per app,
  fresh per SSR request), so ids are deterministic in render order and match
  server ↔ client. Use it when a component owns a labelled control and needs the
  id for `<label for>`: `readonly id = inject(FoldIdService).next('fold-input')`.
  (`crypto.randomUUID()` differs server vs client and trips hydration — don't.)
- **`FoldFieldIdDirective`** — auto-applies (by selector) to any native control
  missing **both** `id` and `name`, and assigns one. Add it to a component's
  `imports` once and every loose native control in its template is fixed — no
  per-element edit. It skips anything already identified (static or bound `id`/
  `name`), so it never fights a control you've labelled yourself.

## Icons

`fold-icon` ships a **built-in set of single-colour SVGs** (114 today, across
`ui`, `nav`, `music`, `status`, `people`, `brands`), inlined so the package is
self-contained — no `.svg` loader config leaks to a consumer. Icons use
`currentColor`, so they inherit `color` and are sized with `size` (`xs…xl`, which
map to the `--fold-icon-size-*` scale, or a pixel number):

```html
<fold-icon name="search" />
<fold-icon name="heart" [size]="18" />
<fold-icon name="edit" title="Edit track" />
<!-- name autocompletes the built-ins (FoldBuiltinIconName) -->
```

**A consumer adds its own icons** — the package's set stays the shared core; the
app extends it through the root `FoldIconRegistry`. Register once at bootstrap
(idiomatic, like `provideRouter`):

```ts
// app.config.ts
providers: [provideFoldIcons({ "my-logo": "<svg …>…</svg>" })];
```

Or at runtime — the icon recolours/resolves reactively:

```ts
inject(FoldIconRegistry).register("my-logo", svgMarkup);
inject(FoldIconRegistry).registerMany({ … });
```

A custom entry with a built-in key overrides it. `name` is typed
`FoldBuiltinIconName | (string & {})`, so built-ins autocomplete while any
registered custom string is still accepted (an unknown name renders nothing and
`console.warn`s in dev).

**Rendering — shared sprite.** Each unique icon is added **once** to a hidden
document-level SVG sprite as a `<symbol>`; every `<fold-icon>` renders a
lightweight `<svg><use href="#…"/></svg>` that references it. So the DOM holds
one copy of an icon's paths no matter how many times it renders — a data-table
with 500 rows × 3 icons is 1500 tiny `<use>` elements over 3 symbols, not 1500
copies of the markup. It is **lazy** (only rendered icons enter the sprite) and
**SSR-safe** (the sprite is serialised into the server HTML, so `<use>` resolves
on first paint; the client adopts it rather than building a second). `color` and
`fill: currentColor` inherit across the `<use>` into the symbol, so an icon still
takes its colour from the host — and outlined icons keep their source
`fill="none"` / `stroke="currentColor"`.

**Trust contract.** Icon markup is injected into the sprite **unsanitised** (the
sprite `insertAdjacentHTML`s the authored `<svg>` so it survives intact), so
every registered value **must be a static, authored `<svg>` string, never
derived from user input**. The registry enforces a backstop (not a sanitiser) on
all three doors (`provideFoldIcons`, `register`, `registerMany`): a non-`<svg>`
root or a `<script>` / inline `on*=` handler throws at registration. Passing
user-controlled markup would be a stored-XSS sink — keep icon strings static.

## Auto-colour

`fold-avatar` (and any entity that needs a stable, recognisable colour) draws
from **one app-wide palette** via `FoldPaletteRegistry` — a root singleton. Reading
from a single source is the point: the same seed (name / id) is the **same
colour everywhere**, so people/entities stay recognisable across screens.

Consumers never touch the palette arrays or the hash — they call `colorFor`:

```ts
private readonly palette = inject(FoldPaletteRegistry);
readonly color = computed(() => this.palette.colorFor(this.seed())); // reactive
```

**Choose the palette once, at bootstrap** (like `provideRouter`):

```ts
// app.config.ts — a built-in name, or your own colour list
providers: [provideFoldPalette("vivid")]; // 'vivid' (default) | 'extended' | 'pastel'
providers: [provideFoldPalette(MY_BRAND_COLOURS)]; // readonly string[]
```

**Or switch it live** — every avatar recolours in the same frame:

```ts
inject(FoldPaletteRegistry).use("pastel");
inject(FoldPaletteRegistry).use(MY_BRAND_COLOURS);
```

Palettes are **categorical data**, not semantic tokens (qualitative hues to tell
entities apart, theme-invariant), so they live in TS (`FOLD_AUTO_PALETTES`), consumed
by a hash — not in the token CSS. Add a curated palette by adding one entry to
`FOLD_AUTO_PALETTES`; it becomes a typed `FoldAutoPaletteName` everywhere.
