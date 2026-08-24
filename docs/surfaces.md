# Named surfaces & auto-inversion

A **named surface** is a region that re-declares some semantic role tokens for
its sub-tree, so any component inside resolves its colours against the region's
palette instead of the page's — with **no per-component code**. It's the seam a
theme (or a component) colours _across_, stamped with `[data-surface="…"]` (by
the `foldSurface` directive, or a component's own host binding).

Two surfaces ship:

| Surface  | Ground                     | Who stamps it                                                                               |
| -------- | -------------------------- | ------------------------------------------------------------------------------------------- |
| `chrome` | app furniture (rails/head) | `fold-app-shell` (a mixed theme like navi recolours it)                                     |
| `accent` | the brand accent           | `fold-card surface="accent"`, `fold-hero-card surface="primary"`, or `foldSurface="accent"` |

`chrome` is the classic case (navi authors `[data-theme="navi"] [data-surface="chrome"]`
from primitives). This doc is about **`accent`**, which does something harder.

---

## The accent surface (auto-inversion)

`[data-surface="accent"]` flips its whole content sub-tree to a compatible
**on-accent** palette: text, borders, band gradation, badges, links, buttons,
even a filled icon tile — all read on the accent.

### The attribute inverts the palette; a component paints the fill

Stamping `[data-surface="accent"]` does **not** paint a background — it only sets
the on-accent `color` and captures the accent + its ink into `--_accent-*` (below).
The accent **fill** is painted by the component that owns the surface:
`fold-card` (`.s-accent { background: var(--fold-color-primary) }`) and
`fold-data-table` (the `toolbarSurface="accent"` bar) do it. So:

- **`fold-card surface="accent"`** (and `fold-hero-card`, the data-table toolbar) —
  inverted **and** painted. This is the supported way to get an accent region.
- **bare `foldSurface="accent"` on a plain element** — inverts the ink but leaves
  the background transparent. On its own it reads as light text on whatever is
  behind it (usually wrong). Use it only to _extend_ an accent context onto extra
  markup **inside** a painted surface, or paint that element yourself with
  `background: var(--fold-color-primary)` (valid: on the surface element itself
  `--fold-color-primary` is still the accent — only its **descendants** get the
  inverted value; see the capture/invert split below).

Corollary (a common trap): **don't colour your own text/icon with
`var(--fold-color-primary)` inside an accent surface expecting it to stay the
brand colour** — under `[data-surface="accent"] *` that token _is_ the light ink,
so you'd paint the brand on top of itself. Use the semantic `--fold-color-text` /
`-secondary` roles, which invert correctly.

### Why it can't be a flat token override

An inverting surface must **swap the brand pair**: on the accent,
`--fold-color-primary` should become the light ink (so a link's text or a filled
tile's ground reads) and `--fold-color-on-primary` should become the accent
itself (so the label _on_ that tile reads). Written directly on one element
that's a CSS custom-property cycle — `a: var(b); b: var(a)` — and both go
invalid. It's the same wall that makes a naïve "just set `color` and `background`"
approach fail the moment you nest a `fold-badge`, a `fold-link`, or a solid
button.

### The mechanism: capture on the surface, invert on the descendants

The surface element records the accent and its ink into two private vars **while
the tokens still hold their normal values**; the inverted role-set is applied to
**descendants** from those captures — so a role can reference the pre-inversion
value it is replacing. No cycle.

```css
[data-surface="accent"] {
  color: var(--fold-color-on-primary); /* the surface's own text is light */
  --_accent-ink: var(--fold-color-on-primary); /* captured here… */
  --_accent-fill: var(--fold-color-primary);
}
[data-surface="accent"] * {
  --fold-color-text: var(--_accent-ink); /* …consumed on descendants */
  --fold-color-primary: var(--_accent-ink); /* fill → light ink */
  --fold-color-on-primary: var(--_accent-fill); /* on-fill → the accent */
  --fold-color-surface-raised: color-mix(
    in srgb,
    var(--_accent-ink) 16%,
    var(--_accent-fill)
  ); /* raised steps = a lighter shade of the accent (gradation in-hue) */
  /* …the rest of the ramp, all color-mix of the captured pair… */
}
```

Every value is a `color-mix` of the captured pair → **derived, not authored**:
one definition holds on all five themes, no per-theme block required.

### What each nested thing becomes

- **text ramp** → the light ink, **compressed** (100 / 96 / 74 / 58 %). An accent
  ground has little contrast headroom — a mid-bright accent (teal, grape) caps
  white text near 3:1 — so an accent card is an **emphasis surface**: prominent
  text clears **AA-large (3:1)** and secondary/muted keep more ink than on the
  page. Reaching AA-body (4.5) would mean darkening the brand accent — a
  deliberate _no_. The floor is locked by `accent-contrast.spec.ts` (resolves
  each theme's accent to hex, composites the derived alphas, asserts a WCAG
  ratio) — no eyeballing.
- **borders / separators** → thin ink lines.
- **nested surfaces + raised bands** → a lighter step of the accent (in-hue).
- **`fold-link`, soft/outline/ghost buttons** → light text / glass fills.
- **a solid button, a filled `it-primary` icon tile** → the accent _on_ a light
  chip (the swap makes the label read).

---

## Overriding per theme

The derived defaults are good, not sacred. If a theme's accent is light (titan's
copper, bubbly's grape) and the derived light-ink ramp reads thin, override any
role by nesting the theme's own selector under the surface — the **same seam**
chrome uses. Because the descendant role-set lives under `[data-surface="accent"] *`,
target that:

```css
/* titan: a light accent wants dark ink, not the derived light ramp */
[data-theme="titan"] [data-surface="accent"] {
  --_accent-ink: var(--fold-ref-steel-900); /* re-point the capture… */
}
[data-theme="titan"] [data-surface="accent"] * {
  --fold-color-text: var(--fold-ref-steel-900); /* …or a single role directly */
}
```

Re-pointing **`--_accent-ink` / `--_accent-fill`** on the surface element is the
cheapest lever — the whole derived ramp follows. Re-point an individual
`--fold-color-*` on the descendants when only one role needs to move.

Keep to **variables only** (rule 1.3): a theme never names a component's internals.

---

## Adding a new inverting surface

Follow the accent shape: pick two poles (`--_x-fill` / `--_x-ink`), capture them
on `[data-surface="x"]`, and derive the role-set on `[data-surface="x"] *` with
`color-mix` of the captures. Add nothing to a component but the `data-surface`
stamp (a host binding or `foldSurface`).

### What identifies does not invert; what signals does

A surface flips the roles a region resolves. That is right for everything whose
job is to **signal** — text, status, borders, the accent as an interaction cue.
It is wrong for everything whose job is to **identify**: a brand mark, a logo, a
category colour. Those are **assets**, not roles. They mean nothing if they
change with their surroundings — a mark that is teal on the page and pale blue
on the rail has stopped being the mark.

The precedent is already in the package: the avatar palette (`palettes.ts`) is
qualitative data, theme-invariant, with `foldReadableInk` choosing the ink. A
brand tile is the same kind of thing and paints the same way — **from
primitives**:

```css
.rail-brand {
  background: var(--fold-ref-signal-600);
  color: var(--fold-ref-white);
}
```

The gallery's tile used `primary` / `on-primary`. It sits in the chrome region,
so under `navi` it resolved to the chrome polarity and rendered pale blue on
dark ink. The token layer did exactly what it was asked; the result was still
wrong.

**The limit — a mark may keep its own colour only when it brings its own
ground.** A filled tile carries its background with it, so an absolute pair is
safe (white on `signal-600` is 6.1:1 everywhere). A bare glyph sitting on the
host's ground cannot: the gallery's footer mark is an icon on the chrome, where
the role gives 10.5:1 and the absolute brand colour would give **2.8:1**. A
glyph on someone else's ground stays a role. Identity does not outrank
legibility — it outranks _consistency_.

**A surface resolves ink, never ground.** `[data-surface]` sets `color` and
nothing else: it cannot know which of the five `bg-*` roles a given region is,
so the component paints its own background and the attribute re-points the text
around it. That split is deliberate — and it is also how `--fold-color-bg-header`
stayed unpainted in every theme until `fold-app-shell` was made to name it.
_Enforced:_ `tokens.contract.spec.ts › no orphan roles`.

---

## Not a surface: elevation

`surface` is an **identity** axis — `chrome` is "app furniture", `accent` is "the
brand ground". A header band, a banded rail, a card's header band are none of
those: they are one step **away from their container**, and which direction that
is depends on the theme's polarity. That is `--fold-color-surface-band`, a plain
role a component paints, not a `data-surface` stamp.

Three components consume it, and they all mean the same thing:
`fold-card[raisedBands]`, `fold-page-layout[headerBand]`, `fold-aside-layout[band]`.

Keep the two apart. A `surface="raised"` would have blurred them — and, per the
rule above, a surface resolves ink and never paints a ground, so it could not
have done the job it names.

---

## Gotchas

- **`[data-surface="accent"] *` touches every descendant.** It's the price of the
  capture-then-invert split (the surface element keeps the real tokens for its own
  ground; descendants get the inverted set). Fine at card scale; don't wrap huge
  trees in one.
- **Nesting an accent surface inside another** re-captures already-inverted
  values → wrong. Not supported; don't nest inverting surfaces.
- **One ground per surface.** `surface` stays a single axis — there is no
  `accent` × `sunken`. A card in a grid has one job: stand out.
- **Bands are a component var, not a role.** `fold-card` re-points its own
  `--_band-raise` / `--_sep-line` from the captures (they resolve on `:host`, which
  a descendant override can't reach). A new surface consumer with its own internal
  vars must do the same.
