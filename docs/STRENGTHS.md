# fold-ng — strengths & honest limits

The positioning, in one line: **an Angular 22 design system that can't rot,
themes to the bone at zero component cost, and inverts itself onto any accent —
with no escape hatches and the docs shipped alongside the code.**

Below: the arguments (each grounded in something real in this repo), then the
limits, stated plainly. fold-ng is dogfooded and pre-1.0; the honesty is the
brand.

---

## Strengths

### 1 · The design system can't rot silently

A **contract test** (`tokens.contract.spec.ts`) is the lock: the build fails if a
theme drops a role, a colour goes literal instead of referencing a primitive, a
primitive dies unused, or a scale a theme may not touch drifts. Most systems
_hope_ their tokens stay coherent. This one **proves it on every commit**.

> _Argument:_ your palette can't quietly diverge — parity is a test, not a
> convention.

### 2 · Themeable to the bone — for free

Five themes, and **not one touches a component**. A theme re-points semantic roles
(`--fold-color-*`) at different primitives (`--fold-ref-*`) — the swatch, not the
widget. A sixth is one CSS block.

> _Argument:_ re-brand by swapping variables, never by forking components.

### 3 · Auto-inverting surfaces — a card stands out, its content adapts itself

Set `surface="accent"` and the **whole content sub-tree** flips to a compatible
on-accent palette: text, borders, band gradation, badges, links, buttons, even a
filled icon tile. No `accentText`, no per-child config. Under the hood it solves
the CSS `primary`/`on-primary` cycle with a **capture-then-invert** trick, all
`color-mix` of the accent, so one definition holds on every theme — and a
**WCAG contrast test** (`accent-contrast.spec.ts`) resolves each theme's accent
and fails the build if the on-accent text drops below its floor. Legibility is
certified, not hoped.

> _Argument:_ inversion that's derived, not hand-authored, and contrast-proven on
> every theme — drop a card in a grid, it just reads.

### 4 · No escape hatches, by design

Zero `any`, zero `as X` assertions, zero `@ts-ignore`, zero `eslint-disable` — and
components never spell a raw colour (the contract enforces it). Gated on
`tsc` + `eslint` + template strictness + tests before every push.

> _Argument:_ the discipline is mechanical, not aspirational.

### 5 · Signals-first, zoneless, SSR-ready

Angular 22, standalone, **no `zone.js`**. Inputs and state are signals; forms are
Signal Forms. Nothing subscribes, nothing leaks; it renders on the server.

> _Argument:_ built on where Angular is going, not where it was.

### 6 · Self-contained, drop-in

Icons inline as `currentColor` SVG (a shared sprite), styles ship with each
component, tokens are plain CSS variables. No loader config, no asset pipeline,
side-effect-free except its CSS — you ship only what you import.

> _Argument:_ `npm install`, import the tokens once, use a component. That's it.

### 7 · Accessible by intent

Roles resolve from intent (a callout only interrupts a screen reader when it
actually appears), focus is trapped and the background `inert`-ed where it should
be, tabs announce as an ARIA `tablist`, an interactive card is a real keyboard
control. Not bolted on afterward.

### 8 · Docs ship with the code

Every component carries JSDoc (`@selector` + one-liner + `@example`), a README
row, and a live gallery page. The token model, the surfaces, the inversion — all
documented in-repo and in the demo site. Nothing is tribal knowledge.

---

## Honest limits

Pre-1.0 (`0.x`), single-maintainer, dogfooded but not battle-tested at scale. The
gaps are known and tracked (`RELEASE-READINESS.md`, `roadmap/`):

- **API isn't frozen.** `0.x` minor bumps may still refine it — pin your version.
- **Some components are still maturing** — a few need a gallery page, an
  `@selector`/`@example`, or deeper tests (see the scoreboard).
- **No visual-regression or CI coverage-floor yet** — on the 1.0.1 roadmap.
- **The accent surface uses a universal descendant selector** — cheap at card
  scale, not for wrapping huge trees, and inverting surfaces don't nest.

The through-line: fold-ng is above the open-source average on **rigour**
(contract + gates + docs) and **system elegance** (theming + inversion). What
separates it from a certified 10 isn't architecture — it's finish (coverage,
perceptual CI, closing the last maturing components). It's a 9 being built; the
remaining work is certifying it.
