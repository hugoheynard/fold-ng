# fold-ng — roadmap

Building this the same way we work everywhere: **small, confirmed steps**. Each
row lands, gets read, then we move on. Tokens are the foundation — they get
locked before a single component is extracted.

## Roadmap 1.0.1 — `fold-app-shell` polish

Post-1.0 the shell is **8.5/10**: structure + decoupling are big-lib grade
(pure structural, `data-attr` + var-contract elevation, no `:host-context`,
strictTemplates-gated). This milestone is the honest gap to **9.5** — it closes
the a11y promise, adds the coverage a serious lib carries, and keeps the two
depth items trigger-gated (generalise on the 2nd real use, never by
anticipation). Order = a11y first (it contradicts what the component claims),
then coverage, then the trigger-gated depth.

_This is app-shell's slice of the lib-wide **Road to 9.5** (bottom of this file):
its a11y items feed §3, its snapshots feed §2. Raising the shell to 9.5 lifts the
average, but the average also needs the P0 blockers (RELEASE-READINESS §2) and the
lib-wide levers there cleared._

**Do — the a11y promise (the component advertises accessibility):**

- [ ] **Rails as named landmarks.** `.rail-primary` / `.rail-secondary` are bare
      `<div>`s → a screen reader gets no `navigation` landmark (only
      header/main/footer are semantic). Add `railPrimaryLabel` /
      `railSecondaryLabel` inputs → `role="navigation"` + `aria-label` on the
      wrappers. Cheap; pairs with the shipped skip-link.
- [ ] **Secondary rail reachable on mobile.** Below the breakpoint only the
      **primary** rail returns (the drawer); an app using `railSecondary` for a
      workspace switcher / sub-nav loses it on a phone. Stack both rails in the
      drawer, or a segmented toggle inside it. (Was "deferred until a bi-rail
      consumer needs it" — promoted: it's a real functional hole for bi-rail apps.)

**Do — coverage the unit tests can't give:**

- [ ] **Visual-regression snapshots** (Playwright) over the mode combinations the
      CSS owns and jsdom can't exercise: drawer open/closed, elevated rail
      (`:has` gutter), footer `scroll` vs `pinned`, `header/footerLayout` full,
      the mobile collapse. The crop bug shipped precisely because these layout
      paths had no automated eye.

**When earned — depth, trigger-gated (M3 direction):**

- [ ] **`foldElevated` named scale** (`sm|md|lg`). Elevation is boolean today; the
      level is dialed by overriding `--fold-surface-shadow`/`-radius` in scope
      (enough now, and more Radix-minimal than Material's `z0…z24`). **Trigger:**
      a real need for ≥2 _named_ levels (a raised card vs an overlay dialog with
      different shadows) → add the enum mapping to shadow tokens. Not by anticipation.
- [ ] **`foldSurface` owns the background** — the last step to a full M3-style
      surface model. Today each chrome component paints its own bg (`fold-menu` →
      `bg-rail-primary`), which is why `foldElevated` sets **no** bg (it would
      fight the component's). If surface = {bg + text role}, `foldElevated`
      becomes fully self-contained (no "bring your own background" footgun on a
      bare wrapper). Sizeable — touches how all chrome paints. **Trigger:** a 2nd
      surface-without-its-own-bg need.
- [ ] **Drawer mechanics → `FoldDrawer*` primitive.** The shell owns the
      mobile-drawer behaviour inline (`mobileNavOpen` model, `drawerOpen` gate,
      `Escape`, widen-reset effect, focus-trap gating). Cohesive, and there is
      only **one** drawer, so it stays inline (the width-observer, the shared
      half, is already `observeElementWidth`). **Trigger:** a **2nd** off-canvas
      drawer (a filters/detail drawer) → extract `FoldDrawerController` (or
      `[foldDrawer]`) owning open-state + `Escape` + focus-trap + scrim.

**Decide — product calls that gate structure:**

- [ ] No persistent **right rail** (assume `fold-aside-layout` + panels?), and
      **tertiary-rail** as a token vs a 3rd rail slot on the shell. Record the
      decision before either grows organically.

## Phase 0 · Foundation (in progress)

- [x] Scaffold the package (`fold-ng`, ESM, strict tsconfig, Vitest).
- [x] Two-tier token model: primitives (`--fold-ref-*`) → semantic (`--fold-color-*`).
- [x] Dark base on `:root`, light override on `[data-theme="light"]`.
- [x] Typed catalogue + `foldColorVar()` helper.
- [x] Contract test: theme parity, no dangling refs, no drift, no dead palette.
- [x] First confirmed tokens: `bg-page`, `bg-header`, `bg-rail-{primary,
secondary,tertiary}`, `primary`, `primary-strong`, `on-primary`.
      (Rail depth values are a first proposal — confirm against the ref.)
- [ ] Wire ESLint (`@sh3pherd/eslint-config`) + Prettier for the package.
- [ ] Add the package to CI (lint + test) and pre-push.

## Phase 1 · Grow the token set (in progress)

Add roles only once we're certain of their usage.

- [x] Semantic status families: primary · info · warning · alert, each as a
      tinted-chip triad (base / text / surface / border). Surface+border via
      color-mix on a solid primitive (no rgba primitives). Both themes.
      Driven by Badge (first consumer). Success deferred until it has one.
- [x] Radius scale — fixed the app's gap: real `--fold-radius-lg` (14px) **and**
      `--fold-radius-pill` (9999px) as separate tokens.
- [x] Type scale (`--fold-text-xs…xl`).
- [x] Bridged the app (`_tokens.css`) onto all of the above, zero-regression.
- [x] Text colours: `text` / `text-secondary` / `text-muted` / `text-faded`
      (driven by ChoiceRow). on-bright / on-dark deferred.
- [x] Neutral surfaces + border: `surface-subtle` / `surface-raised` /
      `border` (white-alpha on dark, black-alpha on light, via color-mix).
- [x] Named surface: `surface-card` (solid raised content surface — opaque,
      unlike the alpha overlays). New `--fold-ref-ink-800` primitive; the app's
      `--card-color` bridges onto it. Drives `fold-card`. panel/popover remain.
- [ ] Dividers; `text-faded`; on-bright / on-dark.
- [x] Scales: **space** (`--fold-space-{xs,sm,md,lg,xl}`) + **motion**
      (`--fold-motion-{fast,base,slow}`) — promoted once the next candidates (icon,
      paginator, panel-header, data-table) all needed them. Catalogue + contract
      test + `foldSpaceVar`/`foldMotionVar` helpers; the app's `--gap-*` / `--t-*`
      bridge onto them 1:1 (identical values, zero-regression). Radii already had
      `xs..pill` (no gap). Shadows + z-index still deferred (no consumer yet).
- [x] Success status family (green) — driven by its first consumer, the toast.
      New `--fold-ref-green-*` primitives + full triad, both themes; the app's
      `--color-success*` now bridge onto it (its last local status literal, gone).
- [ ] Bridge the app's `--text-*` / `--surface-*` / `--border-*` onto the
      package (app-wide) — deferred to avoid a large blast radius.

## Phase 2 · Migrate the app onto the package

- [ ] Point `apps/frontend-webapp` at `fold-ng/tokens.css`.
- [ ] Codemod app token names → `--fold-*`; delete the app's `_tokens.css`.
- [ ] Move app-specific tokens (timeline, room, auth, layout) to an app layer —
      they do **not** belong in the shared contract.

## Phase 3 · Components

- [x] **Angular test harness** (the first-component cost): `@angular/core` peer
      dep, `@analogjs/vite-plugin-angular` + zoneless `setupTestBed`,
      `tsconfig.spec.json` (the plugin resolves it in test mode), `tslib` dep
      (the app builds the component from source with `importHelpers`).
- [x] **Badge** — extracted to `src/components/badge/`, inline styles on
      `--fold-*` tokens, 4 specs via a host wrapper. App's copy deleted; its 9
      importers now pull `BadgeComponent` from `fold-ng`. AOT build green.

- [x] **ChoiceRow** — merged `pill-selector` + `chip-filter` into one
      `fold-choice-row` with `layout: 'segmented' | 'chips'` (option B). Optional
      `count` badge per option. 6 specs. Both app components deleted; call sites
      migrated (segmented, chips) incl. the roster's category pills (→ chips
      with counts). AOT build green.
- [x] **TabNav** (`fold-tab-nav`) — extracted the existing shared tab bar
      (dropped its vestigial `CommonModule`; already control-flow). Kept
      `activeStyle` (underline/fill) + `direction` (horizontal/vertical, mobile
      accordion); added a `size` (compact default / comfortable) for page-level
      bars. 6 specs. Zero new tokens (mapped onto the existing set; neutral
      lines now flip in light mode). 6 importers repointed; the roster's
      Staff/Bookings `.ct-tabs` migrated (comfortable, count badges). AOT green.
      NB: `configurable-tab-bar` (DnD/quota power-bar) is a separate beast — not
      touched.

- [x] **Toast** (`fold-toast-container` + `ToastService`) — repatriated the app's
      toast service, `Toast`/`ToastVariant` types, and container. Styles inlined
      on `--fold-*` glass tokens (frosted surface, per-variant accent stripe);
      `info` keeps the app's brand-teal tone. First consumer of the `success`
      family. 8 specs. App's 51 `ToastService` sites keep their import path via a
      re-export shim; the single `<fold-toast-container>` render site is repointed.
  - [x] **Single snackbar extracted → `fold-toast`** — the container rendered each
        toast inline as a `<div class="toast">` with **emoji** glyphs and
        whole-surface click-to-dismiss. Pulled into a presentational
        `FoldToastComponent`: `fold-icon` status glyphs (`check-circle`/`info`/
        `warning`/`x-circle`), a single `--fold-toast-accent` custom prop per variant,
        an explicit close button emitting `dismiss` (no more accidental dismiss),
        `role`/`aria-live` (assertive `alert` for error, polite `status` else),
        and a reduced-motion guard. Container now owns only stacking. Added the
        `x-circle` status icon (the error glyph — a cross, pairing with
        `check-circle`). Component + container specs; public API (`ToastService`,
        `<fold-toast-container>`) unchanged.
  - [x] **Auto-expiry moved onto the component (`duration` input)** — the service
        no longer runs the dismiss `setTimeout`; each `fold-toast` owns its own
        timer via a `duration` (ms) input (effect + cleanup), emitting `dismiss`
        when it elapses. `duration = 0` is sticky. The container passes the
        queued toast's `durationMs`; `ToastService.show(msg, variant, ms)` is
        unchanged, so the ~51 app sites keep working. Makes a standalone
        `fold-toast` self-sufficient (no service needed to auto-close).
  - [x] **Duration policy via `provideFoldToasts` (per-variant + generic)** — the
        service resolves a no-arg `show()`'s duration most-specific first:
        `durationByVariant[variant]` → `defaultDurationMs` → a baked
        severity-scaled default (success 3s · info 4s · warning 6s · **error 0 =
        sticky**, so errors aren't missed). An explicit `show()` arg still wins.
        Config lives on the **service** (not the container — it stamps
        `durationMs` at creation), via the package's `provideFoldX` idiom.
- [x] **Button** (`fold-button`) — repatriated the shared button, the design
      system's most-used primitive (71 consumers). The `fold-button` selector was
      already package-shaped, so **templates are untouched** — only the TS import + `imports:` symbol move (`ButtonComponent` → `FoldButtonComponent`). The
      SCSS was re-expressed in `--fold-*` tokens: hover tints via
      `color-mix(… var(--fold-color-*) …)`, the solid CTA via
      `on-primary`/`primary-strong` — so it passes the component token contract
      (no raw rgba). `variant`/`size` types live in `button.types.ts`; spec +
      gallery entry added. The programs-local `ui-button` is a **different**
      component and was left alone.
  - [x] **`shape` input (rounded · pill)** — corner shape, default `rounded`
        (unchanged). `pill` → `--fold-radius-pill`, so accent pill CTAs (the
        contracts "Proposer un avenant" `.cd-upload`) become `fold-button`
        without losing the strong radius. Mirrors `fold-button-icon`'s `shape`.
  - [x] **`block` input (full-width)** — stretches to the container width
        (`:host(.block) { display: flex } button { width: 100% }`), default off.
        Lets full-width card/form CTAs (the contract "Résilier le contrat"
        trigger) become `fold-button`.
  - [x] **`icon` / `iconTrailing` shorthand** — the common "icon + label" case
        without projecting `<fold-icon>`. The button **owns** the icon size
        (derived from `size`: sm→14 · md→16 · lg→18), killing the drift where
        27 call sites hand-passed 5 different icon sizes (xs/12/13/14/sm).
        Projection still works for custom content. All 27 sites migrated.
- [x] **ButtonIcon** (`fold-button-icon`) — the icon-only sibling (16 consumers):
      toolbar / transport / row-action affordances. `shape` × `size` × `tone`
      surface as `data-*` for the SCSS; momentary (`clicked`) or two-way toggle
      (`[(active)]` → pressed state + `aria-pressed`); `tooltip` sets `title` +
      `aria-label`. Same repatriation shape as `fold-button` — selector unchanged,
      only the TS import moves. SCSS re-tokenised: the `--bi-*` locals resolve to
      `--fold-*`, the accent tone uses `on-primary`/`primary-strong`, the critical
      hover/active tints use `color-mix(… var …)` (were raw rgba). Types in
      `button-icon.types.ts`; full spec ported; gallery entry added.
- [x] **Menu** (`fold-menu` + `menu-item` / `menu-section` / `menu-separator`) —
      the collapsible nav rail: coloured sections, `tint="follow"` (items take
      their section colour), depth `level` (primary/secondary/tertiary tints),
      collapse toggle with `togglePlacement` (`auto`/`header`/`footer`/`body`,
      multi-row bands via a reserved gutter), floating-shell self-rounding. Items
      are attribute components (`a[fold-menu-item]`) so `routerLink` /
      `routerLinkActive` compose. Drives the app's workspace rail (perso +
      workspace nav) and the app-menu launcher.
  - [x] **Expanded body scrolls** — a nav taller than the rail was overflowing
        off the bottom with no way down. The expanded `.menu-body` now scrolls
        (`overflow-y: auto` + `min-height: 0`); collapsed keeps `overflow:
visible` so hover tooltips still escape.
  - [x] **Collapsible sections** — opt-in `collapsible` on `fold-menu-section`:
        the header becomes a fold toggle, `[(collapsed)]` two-way (starts open).
        The section holding the **active** item stays open regardless (read via
        `contentChildren` on the projected items) so the current page is never
        hidden. Expanded-rail only; the items wrapper is `display: contents`
        unless collapsible, so existing sections are byte-for-byte unchanged.
- [x] **AvatarList** (`fold-avatar-list`) — overlapping avatar cluster (from the
      org-chart node pattern): `limit` + a detached `+N` overflow chip, `top`
      (`first`/`last`, stacking direction), uniform `size` / `square` per cluster,
      and **per-face** state (`variant` / `muted` / `ring` / `ringStyle`) on
      `FoldAvatarListItem` — a member can be a ghost among members.
- [x] **State views** (`fold-loading` + `fold-empty-state`) — the shared loading
      placeholder + empty-state block, moved off `app/shared/`.
- [x] **StickyColumn** (`[foldStickyColumn]`) — layout directive for a sticky
      side column (`<aside foldStickyColumn>`), killing the per-page
      `.sidebar { display:flex; …; position:sticky }` duplication. Host inline
      styles only (no template/wrapper). Tunable via CSS vars —
      `--fold-sticky-column-top`/`-gap`, and `-position` which a page flips to
      `static` in its own stacking breakpoint (the page keeps its breakpoint;
      the directive stays breakpoint-agnostic).

- [x] **Card** (`fold-card`) — the canonical raised surface: `surface-card` bg +
      hairline border + consistent radius (`surface`/`radius`/`padding`/
      `interactive` inputs). A `surface` input picks the tint — `card` (default)
      or `sunken` (the deeper container tint, added with the data-table). Fixes
      the "pill radius" drift — the app's `--radius-lg` means _pill_, so the ref's
      `var(--radius-lg, 14px)` cards rendered as capsules; `fold-card` uses the
      package `--fold-radius-lg` (14px). 4 specs. First consumer: Intégrations.
- [x] **Hero** (`fold-hero`) — a prominent header card wrapping the card base with
      a `tone` prominence ladder: `sunken` · `neutral` (default) · `subtle`
      (quiet `surface-card`→`surface-sunken` diagonal + faint corner glow) ·
      `gradient` (primary-tinted wash + primary border + corner glow, the
      "billing plan" look) · `primary` (solid fill, text flips to `on-primary`).
      Plus an orthogonal `accentBar` (left primary edge bar, composable with any
      tone) and `padding` (`lg` default) like the card. No new token.
      `isolation:isolate` keeps the glow (`::after`, z-index:-1) below projected
      content. 5 specs. Consumers migrated: the Facturation plan hero
      (`tone="gradient"`) and the contract-detail `.cd-hero`
      (`tone="subtle" accentBar`, keeping its bespoke shadow app-side).
- [x] **Badge** (`fold-badge`) — status/count pill; variants
      `accent`/`info`/`warning`/`alert`/`success` (success completed the family).
- [x] **StatusBadge** (`fold-status-badge`) — status→colour badge (maps a domain
      status key to a tone: **active→success (green)**, draft/pending→warning,
      suspended→alert, coming-soon/unknown (e.g. terminated)→neutral grey).
      Repatriated from `app/shared/`; app copy deleted. Canonical scheme adopted
      app-wide (active is green everywhere, incl. absences "approved" + company
      "active"). Contract-status pills unified onto it: roster + user/detail
      migrated; contract-card + dashboard widget auto-recoloured; company/detail's
      clickable status editor kept but its `terminated` aligned to grey. 4 specs.
- [x] **Auto-colour registry** — `PaletteRegistry` (root singleton) + curated
      `AUTO_PALETTES` (`vivid`/`extended`/`pastel`) + `providePalette()`. One
      active palette app-wide ⇒ a seed maps to the same colour everywhere;
      `use(name | customColours)` switches it reactively. Byte-identical hash to
      the app's old avatar/org-member logic (zero recolour). 8 specs.
- [x] **Avatar** (`fold-avatar`) + **AvatarDetail** (`fold-avatar-detail`) —
      repatriated from `app/shared/`, wired to `PaletteRegistry.colorFor()` (the
      local 10-colour `PALETTE` is gone). App keeps its import sites via
      re-export shims; `orgchart-palette` (`NODE_PALETTE`) now re-exports the
      package `extended` palette. 8 specs.
- [x] **Page layout** (`fold-page-layout` + `fold-page-section`) — the shared
      settings/admin page scaffold (title + description + `[pageActions]` slot;
      titled sub-sections). Extracted on the 2nd+ real use (the company
      Administration panes: Facturation, Détails, Intégrations, Zone dangereuse),
      per the "generalize on the 2nd usage" rule — the app panes dropped their
      inlined `.fold-page*` CSS onto it. 7 specs.

Next components, one at a time, each with tests + a usage story. Lock order
tracks what the app already reuses (✓ = landed):
`Button` · `StatusBadge` · ~~`Avatar`~~✓ · ~~`Icon`~~✓ · ~~`FoldDataTable`~~✓ ·
~~`Paginator`~~✓ · ~~`PanelHeader`~~✓ · …

`app/shared/panel/` now holds only the panel-open integration spec — every
panel primitive lives in the package. Remaining app/shared candidates are the
smaller primitives (`Button`, `StatusBadge`, state/empty/loading views) when
they earn the move.

**Confirmed candidates + their dependency chain** (from `app/shared/`):

- [x] **`Icon`** (`fold-icon`) — **landed**. Shipped the full **~100-icon** set
      inlined (102 today — `x-circle` added for the toast error variant; 6
      category maps `icons/*.icons.ts`, generated from the app's `.svg` assets) so
      the package is self-contained. Static `FOLD_ICONS` const → a runtime
      **`IconRegistry`** root singleton: built-ins + consumer additions via
      `provideIcons()` (bootstrap) or `register()`/`registerMany()` (runtime), keyed
      `FoldBuiltinIconName | (string & {})`. Added `@angular/platform-browser` peer
      (`DomSanitizer`). ~90 app importers repointed; app icon component + registry
      deleted. 6 specs (incl. extensibility). Unblocks `Paginator` + `PanelHeader`.
- [x] **`FoldDataTable`** (`fold-data-table` + cell directive + types) — **landed**.
      Generic/presentational, no `Icon` dependency. SCSS → a plain **`.css`
      styleUrl** (see harness note below); the deep table surface uses
      `surface-sunken` (body) with the sticky header lifted toward `surface-card`.
      Drove two new tokens: `--fold-color-border-subtle` (fainter hairline for row
      dividers, below `border`) and `--fold-color-surface-sunken` (a solid surface
      **darker** than `surface-card` for large containers — the ref's second card
      tint, below the raised card). Added the `@angular/common` peer. Its one app
      importer (roster contracts-tab) repointed; app copy deleted. 6 specs.
- [x] **`Paginator`** (`fold-paginator`) — **landed**. Server-side, fully
      controlled (size selector + range + ellipsis page nav). Uses the package
      `fold-icon` chevrons; SCSS → `.css` styleUrl, all tokens mapped (no new
      token). Fixed a latent `var(--t-fast) ease` double-easing bug (the motion
      token already carries the easing). Its one importer (contracts-tab)
      repointed; app copy deleted. 7 specs.
- [x] **`PanelHeader`** (`fold-panel-header`) — **landed** in `src/panel/`
      alongside the overlay system. Inline styles, all tokens mapped: the header
      border → `glass-border` (it's a header on a glass panel), the close-button
      hover → `surface-hover` (both exact matches), no new token. Wired to the
      package `PanelRef` (self-closing). 13 app importers repointed; app copy +
      its 2 specs deleted (consolidated into 7 package specs).

Harness note: a plain **`.css` `styleUrl` resolves fine** in the analog test env
(only **SCSS** `styleUrl` needs a preprocessor it lacks). So a component with a
big stylesheet keeps its CSS in a sibling `.css` file (data-table) rather than
inlining `styles: []` — cleaner, and keeps the `.ts` under 300 lines. Small
components still inline. Template stays inline (no `templateUrl`).

## Phase 4 · Publish

**Public mirror + showcase plan → [`documentation/todos/TODO-fold-ng-mirror.md`](../../documentation/todos/TODO-fold-ng-mirror.md)**
(repo `fold-ng`, package `@sh3pherd/fold`, dark theme `umbra`, MIT; one-way
subtree mirror → public `dev`, gallery served on GitHub Pages via hash routing).

- [ ] Decide the build: `ng-packagr` (needed once we ship Angular components) vs
      source-consumed (today's monorepo pattern).
- [ ] Package exports, `files`, versioning, changelog.
- [ ] Flip `private: false` + registry/publish flow.

## Explore

Open investigations — run the probe, bring back a finding, _then_ decide. Not
committed work; the point is to learn before we lock anything.

- **DX sweep across the components.** AppShell now uses the house pattern —
  typed `input()` for the common case (discoverable, type-checked) with a CSS-var
  escape hatch for theming. Audit `Badge` · `ChoiceRow` · `TabNav` for remaining
  magic-string knobs and align them to the same pattern.
- **Panel-open glitch.** Opening a panel makes the main content do a horizontal
  left↔right translation. Root cause unknown — scroll-lock is ruled out (`html,
body` are already `overflow: hidden`, so the body lock is a no-op). Reproduce
  and measure _which_ element shifts (inner scroll-container scrollbar vs.
  `backdrop-filter` repaint on the glass) before touching CSS.
- **`rail-primary` sizing model — resolved.** Now `auto` (content-driven), like
  `rail-secondary`: each rail component owns its width and the grid follows —
  needed once `fold-menu` gained an expanded state (it takes its content width
  with no JS measurement). Trade-off: `fold-menu` reads the shell's
  `--fold-shell-rail-width` var → intra-package coupling, accepted-with-rationale
  (ledger #11 in `dev-rules.md`).
- **Publish build.** `ng-packagr` target vs. staying source-consumed inside the
  monorepo and only building for external publish (see Phase 4).
- **SCSS surface.** Expose the SCSS mixins alongside the CSS tokens, or ship
  CSS-only?
- **A small `fold-strong` (inline emphasis) component?** An inline text primitive
  for emphasised words — a `tone`/`color` option (primary · muted · a status
  colour) and an optional `href` so an emphasised word can also be a link.
  Motivating case: the home lede already bolds "Angular 22 · responsive ·
  accessible" with a one-off `.home-lede strong` rule, and this recurs (feature
  copy, callouts). **Open question first (generalise on the 2nd real use, not by
  anticipation):** does it earn a component, or is it just `<strong>` + a token
  utility class? Probe: count the real emphasis-with-colour/link sites across the
  app before extracting. If it lands, keep it inline-only (no block behaviour),
  reuse the semantic colour roles, and let the link half compose with
  `fold-link` rather than re-implementing anchor/`rel` handling.

## Tech debt

Deliberate compromises taken to keep momentum — tracked so they get paid back,
not forgotten.

- **`fold-icon` built-in set is not tree-shakeable.** `FoldIconRegistry` seeds
  itself with `FOLD_BUILTIN_ICONS`, which spreads all six sets
  (`ui`/`nav`/`music`/`status`/`people`/`brands` — 114 icons). Because the
  registry statically references the merged catalogue, **every app that renders a
  single `fold-icon` bundles all 114 SVG strings**, used or not. Nothing drops.
  - **Why it's blocked:** tree-shaking is static — as long as the registry
    references the full catalogue, the bundler must keep it. The fix is to
    **decouple the registry from the catalogue** (seed it empty) and make
    provisioning explicit, which is a **DX/breaking change**: `<fold-icon>` would
    no longer "just work" with zero config — the app must `provideFoldIcons(...)`
    what it uses.
  - **Grain options:** (a) _per-set_ — keep `UI_ICONS`/`NAV_ICONS`/… exported,
    app does `provideFoldIcons({ ...UI_ICONS, ...NAV_ICONS })`; only imported sets
    bundle (coarse — importing a set pulls all its icons). (b) _per-icon_
    (Lucide-style) — one named export per icon, `provideFoldIcons([search, bin])`;
    only referenced icons bundle (finest, but 114 exports + the kebab→identifier
    problem, e.g. `arrow-back`, needs a `{ name, svg }` shape or camelCase ids).
  - **Free either way:** `FoldIconName` is a **type** (`keyof typeof
FOLD_BUILTIN_ICONS | (string & {})`), erased at build — autocomplete for all
    114 names survives even when the runtime bundles only the provided subset.
  - **To fix:** seed the registry empty; keep `FOLD_BUILTIN_ICONS` as an opt-in
    "give me everything" export; migrate the app's bootstrap to `provideFoldIcons`
    with the ~104 icons it actually uses (audited: `grep '(name|icon)="…"'` across
    `apps/frontend-webapp`); document the provisioning step in the README. Decide
    grain (per-set is the pragmatic default; per-icon only if bundle size proves
    it worth the export churn). **Not by anticipation — the app uses ~104 of 114,
    so the saving is small today; revisit when a 2nd consumer wants a lean subset,
    or when the catalogue grows past a few hundred.**

- **App settings pages went full-width when `fold-page-layout` dropped
  `wide`/`fluid`.** The page scaffold no longer caps the column (width is a
  content concern now). Four product pages leaned on the old implicit 780 cap and
  now fill: `admin-details`, `admin-billing`, `admin-integrations`,
  `admin-danger` (`apps/frontend-webapp/src/app/features/company/company-admin-page/`).
  **To fix:** per page, either accept full-width or wrap the content in a
  max-width container to keep the readable measure. Low priority — they render,
  just wider.
- **`fold-measure` deferred (2nd-use rule).** Narrowing a block to a readable
  width is the content's job — for now a plain inner `div` with a `max-width`.
  If it recurs across enough real pages to be boilerplate, extract a tiny
  `fold-measure` (max-width + centered, one token). **Not by anticipation —
  build it on the 2nd real use, nothing now.**

- **`ScrollLockService` is effectively a no-op.** `html, body` are already
  `overflow: hidden`, so locking `body.overflow` changes nothing. Either drop it,
  or make it lock the app's real scroll container. Tied to the panel-open glitch.
- **`PanelHostComponent :host { display: contents }`** landed as layout hygiene
  (the overlay host claims no layout box); whether it also settles the open-panel
  glitch is unverified — revisit once the glitch is diagnosed.
- _`fold-app-shell` / `foldElevated` items moved to **Roadmap 1.0.1** (top of file)._
- [x] **Re-export shims — paid back.** The `app/shared/{panel,toast,avatar,
avatar-detail}/*` shims that re-exported `fold-ng` are deleted; all ~115
      consumers now import `fold-ng` directly (duplicate imports merged). Only
      real app components remain under `app/shared/panel/` (`panel-header`).
- **Package is outside the quality gates.** No ESLint / CI / pre-push yet
  (cross-ref Phase 0) — the package's own tests run, but nothing enforces them.
- **App-local leftovers.** `rating` tokens aren't in the package yet — waiting on
  a first consumer to justify the role. (`success` landed with the toast.)
- **Orphaned icon assets.** With `Icon` inlined into the package, the app's ~100
  `src/assets/icons/**/*.svg`, `shared/icon/svg.d.ts`, and the `angular.json`
  `".svg": "text"` loader are now unused (nothing imports `.svg`). Harmless but
  cruft — delete them (and the loader) in a follow-up once the package icon set
  is confirmed as the single source of truth.
- **`fold-number-input` stays on `type="number"` — i18n formatting deferred.**
  Deliberately native `type=number`: robust parsing, the mobile numeric keyboard,
  and native validation for free. The cost is it can **never** display grouped
  thousands (`1 234`) and `inputmode` is ignored — both require `type="text"` + an
  `Intl.NumberFormat` display/parse layer (the React Aria / Ark UI approach, which
  never uses `type=number`). A full `type=text` migration (`role="spinbutton"` +
  `aria-value*` + `inputmode` + draft-string editing + locale parse/format +
  optional grouping) **was built and rolled back on 2026-07-18** — the app has no
  monetary field yet, so the flexibility isn't earned (generalize on the 2nd real
  usage, not by anticipation). **Trigger to revisit: the first currency/amount
  field.** Verdict vs React Aria `NumberField`: **library-grade in craft, one tier
  below in scope** — the whole gap is i18n/formatting + the `type=number` quirks
  (FR users can't type a comma decimal on some keyboards; accepts `e` notation),
  nothing else. Everything around it is already premium: pure `settleNumber`
  (snap→round→clamp, exponent-safe precision, NaN guard), the extracted
  `foldRepeatPress` hold-repeat, unified keyboard stepping, wheel-blur, a11y
  (`aria-describedby`, steppers out of the tab/AT tree), and a dev-warn when a
  snapped `max` sits off the step grid. Missing even in a `type=text` future:
  PageUp/PageDown (×10) + Home/End (→min/max), stepper acceleration, RTL /
  non-Latin numerals.
- **App-side: string-modelled contract forms block `fold-number-input` adoption.**
  The company contract-detail forms (`AddendumForm`, the terms form in
  `contract-detail-page.helpers.ts`) model their numeric fields as **`string`**
  (`comp_amount`/`comp_pct`/`trial_period_days`/`work_time_percentage`), because
  the controllers reconcile `%↔amount` and keep the raw typed text. So those
  `<input type="number">` fields were **left native** in the select/text sweep:
  `fold-number-input` is `number | null` (model mismatch + risk to the financial
  reconciliation), and downgrading them to `fold-input` (text) would lose the
  numeric keypad + `min`/`max`/`step`. **Fix = refactor those form models
  `string → number` first**, then adopt `fold-number-input` (and drop the manual
  `inputValue` parsing). Until then the currency/pct/amount/% fields stay native
  — a deliberate, tracked gap. Migrated cleanly already: the selects (Devise) and
  the text fields (`Intitulé du poste`, both `Motif` — the latter dogfooding the
  new `optional` label marker). Dates stay native (no DS date component yet);
  file upload is the dropzone, not a field.

- **`fold-timeline` — revisit the design + usage once a 3rd shape lands.** The
  component grew fast (2 real consumers: the vertical avenants rail + the
  horizontal signature stepper) and is healthy, but it now carries **two
  personalities behind one `orientation` switch**: _vertical = navigable history_
  (`<nav>`, buttons, click-emit) vs _horizontal = progress stepper_
  (`role="group"`, a derived `role=progressbar` fill, mobile collapse). They share
  the dot-rail primitive (dot + label + date + `variant` + `icon` + `#node`
  template + `clickable`), which is exactly why we fused them — but the fusion is
  the seam where debt will accrete. Reflections to act on _when_ it earns it:
  - **Don't split preemptively** (generalize on the 2nd real use, keep the through
    line). The clean decomposition, if a trigger fires, is a low-level
    `FoldTimelineRail` primitive with two thin compositions over it —
    `fold-timeline` (vertical/navigable) and `fold-stepper` (horizontal/progress,
    owns the progressbar). **Triggers:** (1) a 3rd orientation/mode; (2) the
    progress stepper is wanted **outside** a timeline (the progressbar earns its
    own life); (3) mode-specific inputs multiply (today only `progress` is
    strictly horizontal).
  - **Cascade consistency.** `variant` (plain/hollow) now cascades
    timeline-default → node-override (`node.variant ?? timeline.variant`), matching
    the intended pattern. `square` and `datePlacement` are still **timeline-only**
    (no per-node override) — fine today (mixed dot shapes / date placement per node
    has no real use), but if one is ever needed per node, apply the **same
    `node.x ?? timeline.x` cascade**, not a new ad-hoc knob.
  - **`#node` template + opaque `state` string = the extensibility valve.** It's
    the deliberate escape hatch for heterogeneous nodes (a "en attente" badge)
    **without** exploding the node into props or introducing an `fold-milestone`
    child component (evaluated and **rejected** — it fights the derived
    progressbar/aria, which needs the parent to own aggregate node state; and
    dynamic lists still need `@for` over data). Watch that `state` doesn't become
    a grab-bag; if consumers start encoding structured data in it, promote to a
    typed generic `FoldTimelineNode<T>` with `data?: T`.
  - **Mode-specific inputs aren't signalled.** `progress` is a no-op in vertical;
    nothing warns. Cheap clarity win (not yet done): a `isDevMode()` warning on a
    mode-mismatched input (the `isStepAligned` pattern from `fold-number-input`) +
    doc which inputs matter in which orientation.
  - **Node interface is at ~10 optional fields** (`key`/`id`/`clickable`/`label`/
    `date`/`displayDate`/`icon`/`done`/`variant`/`state`). Still coherent, but it's
    the metric to watch — the next 2–3 additions are the signal to reach for the
    rail-primitive split or a richer template context rather than more fields.

- **`fold-toast` — library-grade gaps (judged 2026-07-19).** Verdict : archi +
  a11y de base + cycle de vie = top décile ; ce qui le sépare de Sonner / Radix /
  React-Aria = 4 manques UX, classés. Déjà **excellent** (à ne pas casser) : SRP
  net (toast présentationnel qui possède son propre timer via `effect(onCleanup)` /
  container = stacking / service = queue / config = policy), a11y (`role`+
  `aria-live` error=assertive vs polite, close explicite `aria-label`, icônes
  `aria-hidden`), policy de durée (`durationByVariant→default→baked`, `??`
  préserve `0=sticky`, **error sticky par défaut**), `animate.leave` +
  `prefers-reduced-motion`, `@Service()` (idiome Angular 22, vérifié réel).
  À faire, dans l'ordre :
  - [ ] **Pause au survol/focus (LE gros manque, WCAG 2.2.1 Timing Adjustable).**
        Le timer tourne quoi qu'il arrive → un toast disparaît pendant qu'on le lit
        ou qu'on vise sa croix. Hover **et** focus doivent geler `duration`, reprise
        au leave. C'est l'affordance n°1 (Sonner/Radix/React-Aria l'ont toutes).
  - [ ] **Cap de stack + dedup.** Queue non bornée → une boucle/tempête de retries
        empile N snackbars. Ajouter `maxVisible` (collapse « +N ») + dédup des
        messages identiques. Cohérent avec la barre qualité burst→audit→durcissement.
  - [ ] **`show()` retourne l'id (ou un handle).** Aujourd'hui l'id est généré puis
        jeté côté appelant → impossible de dismiss un toast précis ni de le mettre à
        jour (« Upload… » → « Uploadé »). Retourner l'id = cheap, très utile.
  - [ ] **Id via compteur, pas `crypto.randomUUID()`.** Pas de risque hydratation
        (créé côté client), mais `randomUUID` **throw en contexte non-sécurisé**
        (http non-localhost), hasard crypto inutile, et **incohérent avec
        `FoldIdService`** (compteur monotone fait pour bannir `randomUUID`). `#seq++`.
  - [ ] Secondaires (scope à assumer) : input `position` (figé bottom-right
        aujourd'hui) ; slot **action** (« Annuler »/« Réessayer ») ; hotkey pour
        focaliser la région toasts (F6, cf. Radix/Sonner).

## Button family — Road to 10 vs the benchmark (IMMEDIATE)

Judged as an **internal DS** the button family (`fold-button` · `fold-button-icon`
· `fold-toggle-icon`) is **9.5** — token-only, signals-first, correct
momentary/toggle `aria-pressed`, reduced-motion, `booleanAttribute`, focus-visible.
Judged as a **market tenor** (Radix · shadcn · MUI · Spectrum · Mantine) it's
**~7**: not bugs — **capabilities the tenors treat as baseline and we don't ship**.
This section closes that delta to **10**. Ordered by impact on the gap; the top
three are ~all of the 9.5→10 distance.

- [x] **1 · Polymorphism — render as `<a>` (the archi lever). DONE.** `fold-button`
      was a hard `<button>`; a link styled as a button was impossible. Converted to
      an **attribute-selector component** `button[foldButton], a[foldButton]` (the
      Angular-Material pattern — a `@Component` whose host IS the native control, so
      it keeps its SCSS, unlike a styleless `@Directive`). Anchors gain
      `href`/`routerLink`/`target`; disabled anchors get `aria-disabled` +
      `tabindex="-1"` + `pointer-events:none`; buttons keep native `disabled`/`type`.
      Custom `clicked` output dropped for native `(click)`. ~262 sites codemodded
      (incl. inline `.ts` templates + 6 nav → `<a foldButton>`); full app AOT + tsc + lint + tests green (0 net new failures). Icon shorthand kept (the template
      survives). **No back-compat wrapper — all consumers migrated (pre-release).**
- [x] **2 · `loading`/busy state. DONE.** Built the `fold-spinner` primitive first
      (currentColor arc, sized off the icon scale so width stays stable,
      reduced-motion → static ring, `label`→`role="status"` else decorative). Then
      added `loading` (booleanAttribute) to `fold-button` + `fold-button-icon` +
      `fold-toggle-icon`: the spinner replaces the leading glyph, the control goes
      `aria-busy` + blocked, and stays **lit** (not dimmed like `disabled`) — the
      MUI `LoadingButton` shape. Spinner exported + gallery page + 4 specs; button
      loading specs added. Package + app gates green.
- [x] **3 · Orthogonal `emphasis` × `intent` (the Radix model). DONE.** Split the
    flat 5-value `variant` into `emphasis` (solid·soft·outline) × `intent`
    (primary·neutral·warning·danger) — filled-destructive and every other combo
    now expressible. Zero-visual-regression: the 5 legacy combos render
    identically at rest (a token-driven `--b-*` engine; hover tints unified
    within ~2%). ~256 sites codemodded (incl. 5 dynamic `[variant]` ternaries →
    paired `[emphasis]`/`[intent]`). Chose `intent` over `tone` to avoid the
    icon-button vocabulary collision (rule 4.9). App AOT + tsc + tests green.

<details><summary>original analysis</summary>

- [ ] **3 · Orthogonal `variant` × `intent` (the Radix model).** Today `variant` is
    **one flat scale folding emphasis + intent** (`primary`/`solid`/`ghost` are
    emphasis; `recommended`/`critical` are intent) — Bootstrap-tier, a rung below
    Radix's orthogonal `variant` (solid/soft/outline/ghost) × `color`
    (neutral/accent/warning/danger). Splitting enables the un-expressible combos
    (filled-destructive `solid`+`critical`) a tenor assumes. **Cost: ~230 call
    sites** (`primary`×55 · `solid`×62 · `ghost`×98 · `critical`×14 ·
    `recommended`×2 + 8 dyn bindings) → a codemod, not hand-edits. Deliberately
    **not** done for the internal DS (over-abstraction for combos zero screens
    use — see `docs(ui): honest fold-button variant taxonomy`); it re-enters scope
    **only** because the goal here is explicit benchmark-parity. Do it as: add
    `emphasis` + `intent` inputs, keep `variant` as a deprecated computed alias
    for one release, codemod the app, then drop `variant`. _(Shipped without the
    alias — pre-release, so all sites were codemodded and `variant` dropped
    outright.)_

</details>

- [x] **4 · `forced-colors` (Windows high-contrast). DONE.** `all: unset` +
      `color-mix` surfaces could **vanish** under `@media (forced-colors: active)`
      (and `solid`'s transparent border stayed invisible). Added forced-colors
      blocks to `fold-button` + the shared icon-button surface: `ButtonText`
      borders so the shape survives, `CanvasText` focus ring, `GrayText` disabled.
      Matches Carbon/Spectrum/FluentUI.
- [ ] **5 · `disabled` semantics — `aria-disabled` option.** Native `disabled`
      drops the button from the a11y tree (a screen-reader user can't reach it to
      learn _why_ it's off). Best-in-class (React-Aria) keeps it focusable via
      `aria-disabled` + suppressed activation. Offer it (a `disabledReason`/
      `aria-disabled` path) where the _why_ matters (form submit gated on
      validation). Debatable default — decide, don't drift.
- [ ] **6 · Family breadth — the compositions a tenor ships.** `ButtonGroup`
      (segmented attached buttons), `SplitButton` (primary action + menu caret),
      `ToggleGroup` (single/multi segmented, built on `fold-toggle-icon`),
      `MenuButton` (the disclosure-icon pattern already flagged on the tab-config
      triggers — `aria-expanded`, not `aria-pressed`). Scope, not quality — but a
      "tenor" is judged on breadth. **Generalize on the 2nd real use**, not by
      anticipation: extract each when a 2nd concrete site wants it.

Lib-wide feeders already tracked elsewhere and **also** required for a true 10:
tree-shakeable ESM distribution (§Tech debt · `fold-icon`), axe + visual-regression
tests (§Road to 9.5 · 2), a browsable docs/Storybook + a 2nd consumer (§Road to
9.5 · 5). Land 1–4 here and the family is **honestly ~9.5 vs the benchmark**; 5–6

- the lib-wide feeders are the last half-point to **10**.

## Hardcore-review follow-ups (2026-07) — see `dev-rules.md` ledger

Done in the review pass: elevation tokens + the component-usage colour guard
(rule 1.3/1.4), avatar luminance ink (6.3), focus-trap visible-only (6.2). Still
open:

- **Extract hard-coded strings to inputs** (rule 5.1). `fold-paginator` + panel
  host/header carry French aria/labels; make them `input()`s with EN defaults,
  the app supplies French once. Flips the app's a11y language → coordinate.
- **Retokenise spacing/motion** (rule 1.5) and add a lint so it stays enforced
  like colour is.
- **`inert` the background behind an open panel** (rule 6.2) for a full modal
  a11y barrier, not just a keyboard trap.
- **Panel close → `<fold-icon name="close">`** (rule 4.7), and fold its aria into
  the i18n input above.

## Road to 9.5 (current: ~8.4/10)

The rating breakdown — Technique 9 · Modernité design 8.5 · Good practices 8.5 ·
DX 8.5 · Tests 7.5. Foundations are ~9; what's missing is **finish + proof**.
Ordered by impact on the score.

**Two feeders into this average, tracked apart:** the **P0 ship blockers**
(RELEASE-READINESS §2 — button-icon `aria-pressed`, the French a11y strings,
focus-trap `inert`, tab-nav roles, the spec `as unknown`) each drag a component
below its cluster and must clear first; and **Roadmap 1.0.1** (top of this file)
is the shell's own 8.5→9.5 slice, whose a11y + snapshot items are the same levers
as §2/§3 here. This section is the **lib-wide** remainder.

**1 · i18n — the one real portability leak (Good practices 8.5→9, DX 8.5→9).**
The blocker to the "reusable across projects" promise (rule 5.1).

- [ ] Every user-facing / `aria-label` string → `input()` with an English default.
      `fold-paginator` (`perPage`/`of`/`empty`/`prev`/`next`/`page`), panel host +
      header close (`"Fermer"` → `closeLabel`, default `"Close"`).
- [ ] App supplies French once (paginator call site + the single panel host).
- [ ] Fold the panel close `<svg>` into `<fold-icon name="close">` (rule 4.7).

**2 · Tests — happy-path only today (Tests 7.5→9).**

- [x] **Dead-binding gate** — `lint:ui-templates` runs Angular `strictTemplates`
      (ngtsc) over the lib + gallery, wired into CI, with a bite fixture. Catches
      removed-input / missing-property template errors `tsc`/Vite miss. First
      template-level proof (see `documentation/fold-lint.md`).
- [ ] a11y automation: axe-core assertion in the panel/overlay specs (role,
      `aria-modal`, focus order, Escape) — not just "it renders".
- [ ] Visual-regression baseline (Playwright/Vitest-browser snapshots) for each
      component × dark/light — the theme flip is claimed but never pixel-verified.
      **Includes the app-shell mode-combos** itemised in Roadmap 1.0.1 (drawer
      open/closed, elevated rail, footer scroll/pinned, mobile collapse) — the
      crop bug shipped for lack of exactly this.
- [ ] Coverage floor in CI; fill the thinly-tested components (tab-nav, app-shell).

**3 · a11y depth (Modernité 8.5→9, and unblocks a real 6.2 gap).**

- [ ] `inert` the background behind an open panel — a full modal barrier, not a
      keyboard-only trap (screen-reader virtual cursor currently reaches behind).
- [ ] Reduced-motion: gate the slide/fade animations behind
      `prefers-reduced-motion`. (`fold-toast` entrance + exit now do; sweep the
      rest — menu width transition, panel slide, hero glow.)
- [ ] Reconsider the px type scale (rule 1.6) — offer a rem opt-in for consumers
      whose root ≠ 14px, so user-zoom works. Currently an accepted deviation.

**4 · Discipline still aspirational (Good practices 8.5→9).**

- [ ] Retokenise the hard-coded px spacing + `0.18s ease` motion to
      `--fold-space-*` / `--fold-motion-*`, then a lint guard (rule 1.5) so it's
      enforced like colour — no new debt.

**5 · Proof + release (DX 8.5→9.5, Modernité 8.5→9).**

- [ ] A **second consumer** (even a tiny playground app) — the API is only
      validated by one app today; a 2nd reveals the hidden assumptions.
- [ ] Storybook (or a docs playground) so components are browsable, not just
      README rows.
- [ ] Real semver + a CHANGELOG; graduate from `0.0.0`. Wire the package into the
      repo quality gates (ESLint/CI/pre-push — cross-ref Phase 0). _Started:
      `lint:ui-templates` is the first CI gate that guards the package._

Land 1–4 and it's a clean **9**; 5 is what earns the last half-point — a design
system is only proven by a second user and a versioned release.

## Migrate app/shared/soft-warning → fold-callout

`app/shared/soft-warning` (selector `fold-soft-warning`, 7 usages) predates the
DS component and is superseded by `fold-callout`. It also carries three things
the DS version fixes: app-only tokens (`--color-warning-dim`, `--radius-md`),
a `::ng-deep` rule, and a fixed `role="note"`.

Migration, one commit:

- `variant="primary"` → `variant="info"` (a callout states a status, not a brand).
- The rest map 1:1; `icon` and the projected message are unchanged.
- Call sites: `contract-detail-page` (×3), `admin-integrations`, `admin-billing`,
  `admin-quotas`, `admin-danger`.
- Then delete `app/shared/soft-warning/` — its spec included.

Worth doing at the same time: `email-verification-banner` and
`post-termination-banner` are both hand-rolled callouts (the latter with a
literal ⏳ emoji as its icon). Both should be compositions over `fold-callout`
rather than their own chrome.
