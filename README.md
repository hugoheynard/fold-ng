# @sh3pherd/ui

SH3PHERD's design system, extracted for reuse across projects. **Dark-first**:
the base theme lives on `:root`, light is an opt-in override. Built to the same
bar as the app — strict TypeScript, tested to the contract.

Right now this package ships **design tokens only**. Components follow, one at a
time, once the token foundation is locked. See [`TODO.md`](./TODO.md).

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
