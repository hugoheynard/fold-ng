# fold-ng

SH3PHERD's design system, extracted for reuse across projects. **Dark-first**:
the base theme lives on `:root`, lumen (light) is an opt-in override. Built to the same
bar as the app — strict TypeScript, tested to the contract.

It ships **design tokens** + a growing set of **standalone Angular components**,
extracted one at a time as the app proves the need. See [`TODO.md`](./TODO.md)
for the roadmap.

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

Four themes ship: `umbra` (the dark base, no attribute), `lumen` (light),
`bubbly`
(festive lavender, violet brand, rounded) and `navi` (dark chrome, light page).
The extras exist to prove the point — each is the umbra or lumen block with its
primitive families re-pointed. Adding a fifth is a new `[data-theme]` block in
`semantic.css` plus the primitives it names.

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

| Component                                                | Selector             | What it is                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| -------------------------------------------------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `FoldAppShellComponent`                                  | `fold-app-shell`     | Responsive app skeleton (rails + header + content + self-collapsing `footer` slots; `headerLayout`/`footerLayout` inset·full, `footerBehavior` pinned·scroll; `mobileNav` drawer·none — `[(mobileNavOpen)]` off-canvas drawer for the primary rail on mobile, or `none` to compose an `fold-nav-launcher`; `contentScroll` clip·auto; built-in skip-link to a focusable `<main>`. Regions float per-surface via `foldElevated`, not a shell flag). |
| `FoldMenuComponent` (+ `Item` / `Section` / `Separator`) | `fold-menu`          | Collapsible nav rail — coloured sections, `tint="follow"`, depth `level`, collapse-toggle placement. Items are `a[fold-menu-item]`.                                                                                                                                                                                                                                                                                                                |
| `FoldNavLauncherComponent` (+ `FoldNavTileComponent`)    | `fold-nav-launcher`  | Full-screen mobile nav launcher — a centred tile grid over a blurred scrim (scrim / `Escape` / close dismissal, focus-trap, scroll-lock). `columns="auto"` scales tiles to the count. Pairs with `fold-app-shell mobileNav="none"`. Tiles are `a[fold-nav-tile]` — `variant="surface"`·`filled`.                                                                                                                                                   |
| `FoldPageLayoutComponent`                                | `fold-page-layout`   | Page scaffold — gutter + header + body rhythm; fills its container (width is a content concern). Tokens `--fold-page-gutter` / `--fold-page-gap`; sections can `bleed` edge-to-edge.                                                                                                                                                                                                                                                               |
| `FoldPageSectionComponent`                               | `fold-page-section`  | Semantic `<section>` grouping — eyebrow title (names the region via `aria-labelledby`) + description + actions; `stack` / `bleed` helpers. Not a box — compose a `fold-card` inside for that.                                                                                                                                                                                                                                                      |
| `FoldHeroSectionComponent`                               | `fold-hero-section`  | Full-bleed page splash — the borderless intro band at the top of a page (carries the `<h1>`). Direct child of `fold-page-layout`: cancels the gutter + top pad to sit flush, brand-tinted wash + hairline. `align` center·start, `wash`, `[heroBackdrop]` decorative lane. (For a bordered header card, see `fold-hero-card`.)                                                                                                                     |
| `FoldAsideLayoutComponent`                               | `fold-aside-layout`  | Detail-page grid — a centred column flanked by up to two sticky rails (`[asideLeft]` / `[asideRight]`), collapsing to one column on its own container width (`:has()`-driven, container queries). Labelled rails become `complementary` landmarks; every track is a CSS var.                                                                                                                                                                       |
| `FoldTabLayoutComponent`                                 | `fold-tab-layout`    | Pairs a tab bar (`[tabNav]`) with its content — `placement="top"` or a `side` rail that folds back on top (hysteretic, on its own width) below `foldAt`. `exportAs="foldTabLayout"` exposes `stacked()` so the projected nav follows in one binding.                                                                                                                                                                                               |
| `FoldCardComponent`                                      | `fold-card`          | Raised content surface (`surface-card` + consistent radius).                                                                                                                                                                                                                                                                                                                                                                                       |
| `FoldContextCardComponent`                               | `fold-context-card`  | Titled info card: icon header + body + optional footer action.                                                                                                                                                                                                                                                                                                                                                                                     |
| `FoldHeroCardComponent`                                  | `fold-hero-card`     | Prominent header **card** — bordered surface × accent overlay + optional accent bar. (For a full-bleed page splash, see `fold-hero-section`.)                                                                                                                                                                                                                                                                                                      |
| `FoldElementTitleComponent`                              | `fold-element-title` | Uppercase section/card mini-title (eyebrow · bar variants).                                                                                                                                                                                                                                                                                                                                                                                        |
| `FoldFieldListComponent` / `…Field`                      | `fold-field-list`    | Read-only `dl/dt/dd` recap — label/value pairs (`[empty]` placeholder). The _display_ half of a record; `fold-input` is the _edit_ half.                                                                                                                                                                                                                                                                                                           |
| `FoldInputComponent`                                     | `fold-input`         | Text-input control (`value: string`) — Signal Forms (`[formField]`) or standalone `[(value)]`; size × align × variant, `label` / `required` / `hint`. The _edit_ half of a record (`fold-field` reads).                                                                                                                                                                                                                                            |
| `FoldNumberInputComponent`                               | `fold-number-input`  | Numeric sibling of `fold-input` (`value: number \| null`, empty ⇒ `null`); owns `min` / `max` / `step` + `label` / `required` / `hint`. Split so each control keeps its true type.                                                                                                                                                                                                                                                                 |
| `FoldSearchComponent`                                    | `fold-search`        | Debounced search box — an `fold-input` that emits `searchChange` once typing settles (`delayMs`), trimmed + de-duplicated.                                                                                                                                                                                                                                                                                                                         |
| `FoldLinkComponent`                                      | `fold-link`          | Inline text link / link-button (icons, accent · muted).                                                                                                                                                                                                                                                                                                                                                                                            |
| `FoldButtonComponent`                                    | `fold-button`        | Action button — 5 variants × 3 sizes × shape/`block`; `icon`/`iconTrailing` shorthand (auto-sized) or project content.                                                                                                                                                                                                                                                                                                                             |
| `FoldButtonIconComponent`                                | `fold-button-icon`   | Icon-only button — shape × size × tone, momentary or two-way `[(active)]` toggle.                                                                                                                                                                                                                                                                                                                                                                  |
| `FoldDataTableComponent`                                 | `fold-data-table`    | Controlled roster table (sortable, tone rows, mobile cards).                                                                                                                                                                                                                                                                                                                                                                                       |
| `FoldPaginatorComponent`                                 | `fold-paginator`     | Server-side paginator (size selector + range + page nav).                                                                                                                                                                                                                                                                                                                                                                                          |
| `FoldBadgeComponent`                                     | `fold-badge`         | Status / count pill (accent/info/warning/alert/success).                                                                                                                                                                                                                                                                                                                                                                                           |
| `FoldStatusBadgeComponent`                               | `fold-status-badge`  | Status→colour badge (maps a domain status key to a tone).                                                                                                                                                                                                                                                                                                                                                                                          |
| `FoldChoiceRowComponent`                                 | `fold-choice-row`    | Segmented / chip selector.                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `FoldTabNavComponent`                                    | `fold-tab-nav`       | Tab bar (horizontal / vertical sidebar).                                                                                                                                                                                                                                                                                                                                                                                                           |
| `FoldIconComponent`                                      | `fold-icon`          | SVG icon (114-icon built-in set + `FoldIconRegistry`).                                                                                                                                                                                                                                                                                                                                                                                             |
| `FoldAvatarComponent` / `…Detail`                        | `fold-avatar`        | Initials/image avatar (square, muted, status ring) + identity cell.                                                                                                                                                                                                                                                                                                                                                                                |
| `FoldAvatarListComponent`                                | `fold-avatar-list`   | Overlapping avatar cluster (per-face variant, `limit` + a `+N` overflow chip).                                                                                                                                                                                                                                                                                                                                                                     |
| `FoldToastComponent` / `…Container`                      | `fold-toast`         | Frosted snackbar (variant glyph + dismiss) + queue host (+ `FoldToastService`).                                                                                                                                                                                                                                                                                                                                                                    |
| `FoldLoadingStateComponent`                              | `fold-loading`       | Loading placeholder (spinner + message).                                                                                                                                                                                                                                                                                                                                                                                                           |
| `FoldEmptyStateComponent`                                | `fold-empty-state`   | Empty-state block (icon + title + message + optional action).                                                                                                                                                                                                                                                                                                                                                                                      |
| `FoldPanelHostComponent`                                 | `fold-panel-host`    | Side-panel / overlay host (+ `FoldPanelHostService` / `FoldPanelRef` / `FoldPanelToggle`).                                                                                                                                                                                                                                                                                                                                                         |
| `FoldPanelHeaderComponent`                               | `fold-panel-header`  | Standard panel header (title/eyebrow, self-closing).                                                                                                                                                                                                                                                                                                                                                                                               |

Directives worth knowing: **`foldSurface`** (`page`·`chrome` — the seam a mixed
theme re-colours across), **`foldElevated`** (raise any bg-owning element into
an inset, rounded, shadowed card — the per-surface "floating" mechanism, driven
by `--fold-surface-inset`/`-radius`/`-shadow`), and **`foldRepeatPress`**
(press-and-hold auto-repeat for a stepper button — fires once on press then on a
tunable cadence while held, and stops the instant `foldRepeatPressDisabled`
goes true mid-hold).

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
