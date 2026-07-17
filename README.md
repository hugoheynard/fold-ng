# @sh3pherd/ui

SH3PHERD's design system, extracted for reuse across projects. **Dark-first**:
the base theme lives on `:root`, light is an opt-in override. Built to the same
bar as the app — strict TypeScript, tested to the contract.

It ships **design tokens** + a growing set of **standalone Angular components**,
extracted one at a time as the app proves the need. See [`TODO.md`](./TODO.md)
for the roadmap.

## Consuming the tokens

Import the CSS once at your app's style entry point:

```css
@import "@sh3pherd/ui/tokens.css";
```

Everything renders **dark by default**. To switch a subtree (or the whole app)
to light, set `data-theme` on an ancestor — usually `<html>`:

```html
<html data-theme="light"></html>
```

Then style against the semantic tokens — never a raw colour:

```css
.header {
  background: var(--sh3-color-bg-header);
}
.cta {
  background: var(--sh3-color-primary);
  color: var(--sh3-color-on-primary);
}
.cta:hover {
  background: var(--sh3-color-primary-strong);
}
```

From TypeScript you get the same tokens, typed:

```ts
import { sh3ColorVar } from "@sh3pherd/ui";

el.style.background = sh3ColorVar("bg-page"); // "var(--sh3-color-bg-page)"
sh3ColorVar("bg-pag"); // ✗ compile error — misspelt token
```

## The two-tier model

Tokens come in two layers. This separation is the whole point — it is what lets
another project re-theme by swapping the palette, and what keeps the app from
hard-coding colours.

| Tier               | File             | Prefix          | Role                                                                        |
| ------------------ | ---------------- | --------------- | --------------------------------------------------------------------------- |
| **1 · Primitives** | `primitives.css` | `--sh3-ref-*`   | The raw palette. The only place a literal hex is allowed. Theme-invariant.  |
| **2 · Semantic**   | `semantic.css`   | `--sh3-color-*` | Role tokens (`bg-header`, `primary`…). Point at primitives. Flip per theme. |

**Components consume tier 2 only.** A component never names `--sh3-ref-teal-500`;
it names `--sh3-color-primary`. Re-theming means re-pointing the semantic layer,
never touching a component.

## The naming convention

```
--sh3-<tier>-<category>-<role>[-<variant>]
        │       │          │        └─ strong · primary · secondary · tertiary …
        │       │          └────────── page · header · rail · primary …
        │       └───────────────────── color · (space, radius, text … to come)
        └───────────────────────────── ref (primitive) · color (semantic)
```

Namespaced with `--sh3-` so the package never collides with an app's own tokens.

**The `bg-` rule.** A surface fill role carries a `bg-` marker (`bg-page`,
`bg-rail-primary`); a foreground/brand role does not (`primary`, `on-primary`).
So `bg-` reads as "this paints a background."

## The contract test

`src/tokens/__tests__/tokens.contract.spec.ts` is the lock. It fails the build
if:

- the dark (`:root`) and light (`[data-theme="light"]`) blocks fall out of parity;
- a semantic token points at a primitive that doesn't exist (dangling `var`);
- a semantic token hard-codes a hex instead of referencing a primitive;
- a primitive is declared but never used;
- the CSS drifts from the typed catalogue in `tokens.catalog.ts`.

Add a token → add it to `tokens.catalog.ts` **and** both theme blocks, or the
test goes red. That is how the theme stays complete.

```bash
pnpm --filter @sh3pherd/ui test
```

## Current token set

Deliberately small — we grow it together, one confirmed role at a time.

| Semantic token                  | Role                          |
| ------------------------------- | ----------------------------- |
| `--sh3-color-bg-page`           | Page background               |
| `--sh3-color-bg-header`         | Top header bar                |
| `--sh3-color-bg-rail-primary`   | Rail 1 — app menu             |
| `--sh3-color-bg-rail-secondary` | Rail 2 — workspace menu       |
| `--sh3-color-bg-rail-tertiary`  | Rail 3 — tertiary nav         |
| `--sh3-color-primary`           | Primary / accent (brand teal) |
| `--sh3-color-primary-strong`    | Primary hover / active        |
| `--sh3-color-on-primary`        | Text / icon on a primary fill |

(plus the status families, neutral surfaces, the two card tints `surface-card` /
`surface-sunken`, glass, and the
radius / text / space / motion / blur scales — see `tokens.catalog.ts` for the
full, typed set.)

## Components

All standalone, signals-first, styled against the semantic tokens. Import from
the package root.

| Component                                               | Selector            | What it is                                                                                                                              |
| ------------------------------------------------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `Sh3AppShellComponent`                                  | `sh3-app-shell`     | Responsive app skeleton (rails + header + content slots; `floating` inset mode).                                                        |
| `Sh3MenuComponent` (+ `Item` / `Section` / `Separator`) | `sh3-menu`          | Collapsible nav rail — coloured sections, `tint="follow"`, depth `level`, collapse-toggle placement. Items are `a[sh3-menu-item]`.      |
| `Sh3PageLayoutComponent` / `…Section`                   | `sh3-page-layout`   | Settings/admin page scaffold (title + sections).                                                                                        |
| `Sh3CardComponent`                                      | `sh3-card`          | Raised content surface (`surface-card` + consistent radius).                                                                            |
| `Sh3ContextCardComponent`                               | `sh3-context-card`  | Titled info card: icon header + body + optional footer action.                                                                          |
| `Sh3HeroComponent`                                      | `sh3-hero`          | Prominent header card (tone ladder + optional accent bar).                                                                              |
| `Sh3ElementTitleComponent`                              | `sh3-element-title` | Uppercase section/card mini-title (eyebrow · bar variants).                                                                             |
| `Sh3FieldListComponent` / `…Field`                      | `sh3-field-list`    | Read-only `dl/dt/dd` recap — label/value pairs (`[empty]` placeholder). The _display_ half of a record; `sh3-input` is the _edit_ half. |
| `Sh3LinkComponent`                                      | `sh3-link`          | Inline text link / link-button (icons, accent · muted).                                                                                 |
| `Sh3ButtonComponent`                                    | `sh3-button`        | Action button — 5 variants × 3 sizes × shape/`block`; `icon`/`iconTrailing` shorthand (auto-sized) or project content.                  |
| `Sh3ButtonIconComponent`                                | `sh3-button-icon`   | Icon-only button — shape × size × tone, momentary or two-way `[(active)]` toggle.                                                       |
| `Sh3DataTableComponent`                                 | `sh3-data-table`    | Controlled roster table (sortable, tone rows, mobile cards).                                                                            |
| `Sh3PaginatorComponent`                                 | `sh3-paginator`     | Server-side paginator (size selector + range + page nav).                                                                               |
| `Sh3BadgeComponent`                                     | `sh3-badge`         | Status / count pill (accent/info/warning/alert/success).                                                                                |
| `Sh3StatusBadgeComponent`                               | `sh3-status-badge`  | Status→colour badge (maps a domain status key to a tone).                                                                               |
| `Sh3ChoiceRowComponent`                                 | `sh3-choice-row`    | Segmented / chip selector.                                                                                                              |
| `Sh3TabNavComponent`                                    | `sh3-tab-nav`       | Tab bar (horizontal / vertical sidebar).                                                                                                |
| `Sh3IconComponent`                                      | `sh3-icon`          | SVG icon (102-icon built-in set + `Sh3IconRegistry`).                                                                                   |
| `Sh3AvatarComponent` / `…Detail`                        | `sh3-avatar`        | Initials/image avatar (square, muted, status ring) + identity cell.                                                                     |
| `Sh3AvatarListComponent`                                | `sh3-avatar-list`   | Overlapping avatar cluster (per-face variant, `limit` + a `+N` overflow chip).                                                          |
| `Sh3ToastComponent` / `…Container`                      | `sh3-toast`         | Frosted snackbar (variant glyph + dismiss) + queue host (+ `Sh3ToastService`).                                                          |
| `Sh3LoadingStateComponent`                              | `sh3-loading`       | Loading placeholder (spinner + message).                                                                                                |
| `Sh3EmptyStateComponent`                                | `sh3-empty-state`   | Empty-state block (icon + title + message + optional action).                                                                           |
| `Sh3PanelHostComponent`                                 | `sh3-panel-host`    | Side-panel / overlay host (+ `Sh3PanelHostService` / `Sh3PanelRef` / `Sh3PanelToggle`).                                                 |
| `Sh3PanelHeaderComponent`                               | `sh3-panel-header`  | Standard panel header (title/eyebrow, self-closing).                                                                                    |

## Icons

`sh3-icon` ships a **built-in set of ~100 single-colour SVGs** (102 today, across
`ui`, `nav`, `music`, `status`, `people`, `brands`), inlined so the package is
self-contained — no `.svg` loader config leaks to a consumer. Icons use
`currentColor`, so they inherit `color` and are sized with `size` (`xs…xl` or a
pixel number):

```html
<sh3-icon name="search" />
<sh3-icon name="heart" [size]="18" />
<sh3-icon name="edit" title="Edit track" />
<!-- name autocompletes the built-ins (Sh3BuiltinIconName) -->
```

**A consumer adds its own icons** — the package's set stays the shared core; the
app extends it through the root `Sh3IconRegistry`. Register once at bootstrap
(idiomatic, like `provideRouter`):

```ts
// app.config.ts
providers: [provideSh3Icons({ "my-logo": "<svg …>…</svg>" })];
```

Or at runtime — the icon recolours/resolves reactively:

```ts
inject(Sh3IconRegistry).register("my-logo", svgMarkup);
inject(Sh3IconRegistry).registerMany({ … });
```

A custom entry with a built-in key overrides it. `name` is typed
`Sh3BuiltinIconName | (string & {})`, so built-ins autocomplete while any
registered custom string is still accepted (an unknown name renders nothing and
`console.warn`s in dev).

## Auto-colour

`sh3-avatar` (and any entity that needs a stable, recognisable colour) draws
from **one app-wide palette** via `Sh3PaletteRegistry` — a root singleton. Reading
from a single source is the point: the same seed (name / id) is the **same
colour everywhere**, so people/entities stay recognisable across screens.

Consumers never touch the palette arrays or the hash — they call `colorFor`:

```ts
private readonly palette = inject(Sh3PaletteRegistry);
readonly color = computed(() => this.palette.colorFor(this.seed())); // reactive
```

**Choose the palette once, at bootstrap** (like `provideRouter`):

```ts
// app.config.ts — a built-in name, or your own colour list
providers: [provideSh3Palette("vivid")]; // 'vivid' (default) | 'extended' | 'pastel'
providers: [provideSh3Palette(MY_BRAND_COLOURS)]; // readonly string[]
```

**Or switch it live** — every avatar recolours in the same frame:

```ts
inject(Sh3PaletteRegistry).use("pastel");
inject(Sh3PaletteRegistry).use(MY_BRAND_COLOURS);
```

Palettes are **categorical data**, not semantic tokens (qualitative hues to tell
entities apart, theme-invariant), so they live in TS (`SH3_AUTO_PALETTES`), consumed
by a hash — not in the token CSS. Add a curated palette by adding one entry to
`SH3_AUTO_PALETTES`; it becomes a typed `Sh3AutoPaletteName` everywhere.
