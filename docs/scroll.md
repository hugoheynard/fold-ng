# The scroll system (design note)

> Status: **design, not built.** Decides the model before any code. Target: once
> an app uses `fold-app-shell`, **nobody writes `overflow` again** — not the page,
> not a split view, not a sticky sidebar, not a data-table body. Scroll is owned
> in one place and every nested scroll region is an explicit, coordinated opt-in.

## Why

Today the shell has **two** scroll knobs that overlap, and `fold-page-layout`
quietly owns a **third** scroll — so a consumer has to reason about _who scrolls_,
and some combinations contradict each other:

| Where              | Knob / behaviour                 | Effect                                             |
| ------------------ | -------------------------------- | -------------------------------------------------- |
| `fold-app-shell`   | `contentScroll="clip"` (default) | `.content { overflow: hidden }` — the page scrolls |
| `fold-app-shell`   | `contentScroll="auto"`           | `.content { overflow: auto }` — the shell scrolls  |
| `fold-app-shell`   | `footerBehavior="scroll"`        | `.content { overflow: auto }` + in-flow footer     |
| `fold-page-layout` | **hardcoded** `overflow-y: auto` | the page is _always_ its own scroll box            |

The conflict: `fold-page-layout` **always** sets `overflow-y:auto; overscroll-behavior:contain`.
Put it under `footerBehavior="scroll"` (shell owns the scroll) and you get **two
nested scroll boxes**; `overscroll-behavior:contain` stops the chain, so the
shell's in-flow footer at the end of `.content` becomes **unreachable**. The
LaFolieDouce B2B storefront works around it with a global `!important`:

```scss
/* live in apps/lfc-B2B-platform-frontend/src/styles.scss — the smell */
fold-page-layout {
  overflow: visible !important;
  overscroll-behavior: auto !important;
}
.footer-inflow {
  margin-top: 0 !important;
}
```

That `!important` against a library rule is the tell: **the ownership model is
ambiguous.** Two independent surfaces both claim the scroll.

## Principle

**One scroll authority per shell. Everything else flows. A nested scroll region is
never implicit — it is one opt-in primitive that registers with the shell.**

- The consumer never sets `overflow`, `min-height:0`, or `overscroll-behavior` by
  hand. Those are the three foot-guns; the system owns all three.
- With `fold-app-shell` in the tree, a page is just content. It grows; the shell
  scrolls. No page-level scroll box, no conflict, no `!important`.
- When a layout genuinely needs an independently-scrolling area (a split
  list/detail, a data-table body, a sticky sidebar, a panel body), it marks that
  area with **one** directive. That area gets a bounded scroll box **plus** the
  house scrollbar, scroll-anchoring, and shell coordination — for free.

## The model

```
fold-app-shell                         ← the single scroll owner (the content region)
├── header / rails / footer            ← fixed chrome, never scroll
└── .content  (scrolls, or clips)
     └── routed page (fold-page-layout)   ← FLOWS by default (no own scroll)
          ├── section … section            ← flow
          └── [foldScrollRegion] area       ← the ONE opt-in nested scroll box
```

Two ownership modes on the shell, one knob:

- **`scroll` (default)** — the shell's content region owns the scroll. Pages flow
  inside it; the header/rails stay put; a `footerBehavior="scroll"` footer sits at
  the true end of the content. This is the document case — the vast majority.
- **`stage`** — the content region is a **fixed-height stage** that does _not_
  scroll; the page fills it and any scrolling happens inside `foldScrollRegion`s.
  This is the app case: a mail-style split view where the list and the detail
  scroll independently and the viewport never moves.

(`scroll`/`stage` replaces today's `contentScroll="auto"|"clip"` — same two shapes,
named for _who owns the scroll_ rather than _clip vs auto_, and made the shell's
single scroll switch. `footerBehavior="scroll"` stops being a scroll switch — it
only says _where the footer sits_ — because the shell already owns the scroll.)

`fold-page-layout` gains `scroll="flow" | "own"`:

- **`flow` (new default)** — the page owns **no** scroll; it flows inside its
  host's scroll (the shell). Drops the hardcoded `overflow`/`overscroll`. This is
  the fix for the P0 conflict + the LFC `!important`.
- **`own`** — the legacy behaviour: the page is its own scroll box. Only needed
  when a page is dropped into a `stage` shell (or a bare container) and must scroll
  as a unit. Kept so the change is opt-out, not a hard break.

### `foldScrollRegion` — the one opt-in

A directive (`[foldScrollRegion]`) that turns any element into a bounded,
coordinated scroll box:

- Sets `overflow: auto; min-height: 0; overscroll-behavior: contain` — the three
  foot-guns, in one place, so the consumer writes none of them.
- Paints the **house scrollbar** (tokenised, see below).
- Preserves **reading position** when content above it reflows/resizes
  (scroll-anchoring; the `[2026-07-29]` Explore item).
- **Registers with the nearest `fold-app-shell`** via a lightweight service, so the
  shell can freeze every region at once behind a modal overlay, and so tooling
  knows the real scroll containers.

```html
<!-- a split view inside a stage shell -->
<fold-aside-layout>
  <nav foldScrollRegion>…long list…</nav>
  <!-- scrolls on its own -->
  <article>…detail (flows in the shell / stage)…</article>
</fold-aside-layout>

<!-- a data-table body, a panel body: same directive, no overflow by hand -->
<div foldScrollRegion class="table-body">…</div>
```

### Coordination the system owns

- **Scroll-lock on overlay.** A modal panel/dialog already freezes the document
  scroll + inerts the background (so nested regions inside it are frozen too). The
  region registry makes this robust when the scroll owner is the shell, not `body`.
- **Scroll-anchoring on resize.** The shell content region and every
  `foldScrollRegion` keep the top-most visible row fixed when an upper element
  reflows or the window resizes (native `overflow-anchor` covers content mutation,
  **not** viewport resize — so the region adds a `ResizeObserver` correction,
  reduced-motion-safe).
- **House scrollbar.** Tokenised (`--fold-scrollbar-*`: track/thumb colour, thumb
  width, **radius**) on the containers the system owns — standard
  `scrollbar-width`/`scrollbar-color` everywhere, plus a
  `@supports selector(::-webkit-scrollbar)` layer for the thumb radius on Blink/WebKit.
  (The two Explore items — scrollbar + scroll-anchor — fold into this system
  instead of being bolted on per-component.)

## Slices

Ship in order; each is independently useful.

1. **Slice A — the authority + the P0 fix.** Shell owns the content scroll by
   default (`scroll` mode); `fold-page-layout scroll="flow"` becomes the default and
   drops its hardcoded overflow; add the companion **content-grow** fix so a short
   page still pushes a `footerBehavior="scroll"` footer to the bottom (the shell
   makes the routed page `flex: 1 0 auto` instead of gluing the footer with
   `margin-top:auto`). **Deletes the LFC `!important`.** Breaking for pages that
   relied on the page owning scroll in a clip shell → they set `scroll="own"` or the
   shell to `stage`.
2. **Slice B — `foldScrollRegion` + the shell registry.** The opt-in directive and
   the registration/scroll-lock coordination. Migrate the data-table body + panel
   body onto it.
3. **Slice C — scrollbar tokens + scroll-anchoring.** Fold the two Explore items in;
   apply to the shell content + every `foldScrollRegion`.

## Decisions to lock (before Slice A)

1. **Default flips to shell-owns-scroll.** Today `contentScroll` defaults to
   `clip` (page owns). The new default is `scroll` (shell owns) + page `flow`. This
   is the crux of the vision, and it is a **breaking default** for existing shells.
   Confirm we take the break (with a clear migration) rather than keep `clip` as the
   default and make the new behaviour opt-in.
2. **Naming.** `scroll`/`stage` on the shell + `flow`/`own` on the page — vs.
   keeping `contentScroll="auto"|"clip"`. Lock the vocabulary before it ships in the
   public API.
3. **`foldScrollRegion`: directive vs component** (`fold-scroll-area`). Lean
   directive (no wrapper element, composes on the consumer's own node), matching
   `foldStickyColumn`/`foldSurface`.
4. **Registry scope.** Does a `foldScrollRegion` require an ancestor
   `fold-app-shell` (inject-or-throw), or degrade to a plain bounded scroll box when
   there's no shell (inject-optional)? Lean **optional** — the directive is useful
   standalone; shell coordination is a bonus when present.

## Non-goals

- Pull-to-refresh, momentum tuning, custom scroll physics. Native scroll only.
- Virtualisation. A `foldScrollRegion` bounds a scroll box; it does not windowe its
  children (that's a data-table / list concern).
