# @sh3pherd/ui — writing the gallery

Rules for `dev/` — the gallery app that documents this package. `dev-rules.md`
is the contract for the **components**; this is the contract for the **pages
that show them off**. `README.md` is the consumer's guide.

Everything in `dev/` is dev-only: it never ships, it is not exported from
`src/index.ts`, and no component may import from it. It is still held to the
same bar as `src/` — strict TS, tokens only, no `any`, no `eslint-disable`.

The gallery's job is to be **the** place a component's behaviour is settled. A
page that only shows static vignettes leaves questions open; a page with a
playground answers them by letting you drive the thing.

---

## 1 · Page skeleton

1.1 **A page _is_ its `sh3-page-layout`.** The routed component's host element
carries no class, no padding and no scroll — `display: contents` dissolves it so
the layout is the real child of the shell's content cell. Never reintroduce a
per-page wrapper class.

1.2 **Nobody declares page margins.** The gutter belongs to `sh3-app-shell`
(`contentPadding`, set once on the gallery shell). A page that needs to paint
edge-to-edge says so on the shell, not with negative margins.

1.3 **The layout owns the scroll.** `sh3-page-layout` fills the height it is
given and scrolls inside it. A page never scrolls the document.

1.4 **Every page opens the same way** — title, kind badge, description:

```html
<sh3-page-layout fluid title="card" description="…what it is, in one breath…">
  <gal-kind-badge titleBadge kind="component" />
  …
</sh3-page-layout>
```

`kind` is `component` or `directive`. `fluid` for pages whose demos need the
width (playgrounds, grids); leave it off for reading-width pages.

1.5 **A page with sub-pages uses `sh3-tab-layout`**, not a bare bar in a spacer
div. Bind the projected nav to the layout so it folds with it:

```html
<sh3-tab-layout placement="side" #tl="sh3TabLayout">
  <sh3-tab-nav
    tabNav
    [direction]="tl.stacked() ? 'horizontal' : 'vertical'"
    …
  />
  @switch (tab()) { … }
</sh3-tab-layout>
```

1.6 **Registering a page** is two edits: an entry in `GALLERY_NAV`
(`dev/shell/gallery-nav.ts`) and its `id → () => import(...)` in `PORTED`
(`dev/gallery.routes.ts`). Nav order is rail order; ids are route paths. An id
with no `PORTED` entry falls back to `StubPage` — the gallery stays navigable.

---

## 2 · The playground

2.1 **One playground per component, and it is `<dev-playground>`.** No bespoke
preview cards, no "code" toggles revealing overlays, no settings context-card
beside a preview. Those existed; they are gone; do not bring them back.

```html
<dev-playground [code]="cardCode()" stage>
  <div class="np-field" params>
    <span class="gal-tag">surface</span>
    <div class="ss-seg">
      @for (s of surfaces; track s) {
      <button
        type="button"
        [class.is-on]="cpSurface() === s"
        (click)="cpSurface.set(s)"
      >
        {{ s }}
      </button>
      }
    </div>
  </div>

  <sh3-card [surface]="cpSurface()">…</sh3-card>
  <!-- default slot = preview -->
</dev-playground>
```

2.2 **Slots.** `[params]` = one control per `.np-field`; default = the live
component; `[preview-actions]` = controls that belong to the _preview frame_
itself (a viewport switch), centred in its header. The playground owns its
`sh3-page-section title="Playground"` — a page never repeats it.

2.3 **`stage`** when the demo is itself a surface (a card on a card reads as
mush): it drops the preview onto the page background, inset and padded.

2.4 **Control idioms.** Segmented choice → `.gal-tag` label + `.ss-seg` of
`<button [class.is-on]>`. Number → `sh3-slider` with `[(value)]`. Boolean → a
two-button segment or an on/off pair; never a bare checkbox.

2.5 **The code panel shows what you would actually paste** — a `computed()`
emitting **only the non-default attributes**, one per line. A snippet that
repeats defaults teaches the wrong thing.

2.6 **No token sandbox on new pages.** The live-override editor is a maintenance
tax that duplicates what the playground already demonstrates. `menu` keeps its
own; nothing else grows one.

---

## 3 · Static demos

3.1 Vignettes live in `.gal-cell` (label + row): `<span class="gal-tag">` names
the axis being varied, `.gal-row` holds the specimens. Group by **one varying
axis per cell** — size, then variant, then state. A cell that varies two things
proves nothing.

3.2 Demos come **before** the playground: skim, then drive.

3.3 Mock content must be plausible domain content (a roster, an invoice list,
an org node), never `foo` / `bar`. A demo is also a design review.

---

## 4 · Style

4.1 **Tokens only**, same as `src/`. A raw colour in `gallery.css` is the same
bug as one in a component.

4.2 **Shared gallery classes live in `dev/gallery.css`**, page-specific ones too
— there are no per-page stylesheets. Before adding a class, grep: `.gal-*`,
`.ss-*`, `.np-*`, `.tok-*` and `.code-*` already cover most needs.

4.3 **Delete on the way out.** Removing the last user of a gallery class means
removing the class in the same commit.

---

## 5 · Verifying a gallery change

5.1 **`dev:build` does not type-check.** It is esbuild — a missing import is a
green build and a `ReferenceError` at runtime (a page that "won't click"). The
real gate is:

```bash
npx tsc --noEmit -p tsconfig.app.json    # the gallery's own tsc
pnpm --filter @sh3pherd/ui test          # component specs
```

5.2 **A CSS-only fix is not verified by tests.** jsdom applies no stylesheet, so
component specs can't see it. Check the rendered page — computed styles, not
just "it looks right".

5.3 **A change to a `src/` component is a two-sided change**: its spec covers
the contract, the gallery page covers the demonstration. Update both.

---

## 6 · Gotchas that cost us time

6.1 **View encapsulation inflates specificity.** Angular appends
`[_ngcontent-…]` to _every compound_ in a selector, so `.a .b .c ~ .d` scores
higher than `.a .b.active .d` and wins whatever the source order. Never write
"hide everything, then show the active one" — scope the hide with
`:not(.is-active)` so there is no race to lose.

6.2 **`viewChild` on a component tag returns the instance.** For the host
element pass `{ read: ElementRef }`, or the DOM writes go nowhere — silently.

6.3 **ResizeObserver + scrollbars oscillate.** A layout that folds on its own
width can free ~15px by folding and flip forever. Any width threshold that
changes layout needs a dead band wider than a scrollbar (see
`sh3-tab-layout`, 32px).

6.4 **Codemods across pages need a typecheck, not a build.** Regex edits over
`dev/pages/*` have twice produced valid-looking, broken output (an import
skipped, a badge injected inside an attribute). Run 5.1 after any sweep.
