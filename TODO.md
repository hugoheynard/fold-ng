# @sh3pherd/ui — roadmap

Building this the same way we work everywhere: **small, confirmed steps**. Each
row lands, gets read, then we move on. Tokens are the foundation — they get
locked before a single component is extracted.

## Phase 0 · Foundation (in progress)

- [x] Scaffold the package (`@sh3pherd/ui`, ESM, strict tsconfig, Vitest).
- [x] Two-tier token model: primitives (`--sh3-ref-*`) → semantic (`--sh3-color-*`).
- [x] Dark base on `:root`, light override on `[data-theme="light"]`.
- [x] Typed catalogue + `sh3ColorVar()` helper.
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
- [x] Radius scale — fixed the app's gap: real `--sh3-radius-lg` (14px) **and**
      `--sh3-radius-pill` (9999px) as separate tokens.
- [x] Type scale (`--sh3-text-xs…xl`).
- [x] Bridged the app (`_tokens.css`) onto all of the above, zero-regression.
- [x] Text colours: `text` / `text-secondary` / `text-muted` / `text-faded`
      (driven by ChoiceRow). on-bright / on-dark deferred.
- [x] Neutral surfaces + border: `surface-subtle` / `surface-raised` /
      `border` (white-alpha on dark, black-alpha on light, via color-mix).
- [x] Named surface: `surface-card` (solid raised content surface — opaque,
      unlike the alpha overlays). New `--sh3-ref-ink-800` primitive; the app's
      `--card-color` bridges onto it. Drives `sh3-card`. panel/popover remain.
- [ ] Dividers; `text-faded`; on-bright / on-dark.
- [ ] Scales: space + motion (deferred — ChoiceRow inlines its few constants;
      promote when a 2nd component needs them), shadows, z-index.
- [x] Success status family (green) — driven by its first consumer, the toast.
      New `--sh3-ref-green-*` primitives + full triad, both themes; the app's
      `--color-success*` now bridge onto it (its last local status literal, gone).
- [ ] Bridge the app's `--text-*` / `--surface-*` / `--border-*` onto the
      package (app-wide) — deferred to avoid a large blast radius.

## Phase 2 · Migrate the app onto the package

- [ ] Point `apps/frontend-webapp` at `@sh3pherd/ui/tokens.css`.
- [ ] Codemod app token names → `--sh3-*`; delete the app's `_tokens.css`.
- [ ] Move app-specific tokens (timeline, room, auth, layout) to an app layer —
      they do **not** belong in the shared contract.

## Phase 3 · Components

- [x] **Angular test harness** (the first-component cost): `@angular/core` peer
      dep, `@analogjs/vite-plugin-angular` + zoneless `setupTestBed`,
      `tsconfig.spec.json` (the plugin resolves it in test mode), `tslib` dep
      (the app builds the component from source with `importHelpers`).
- [x] **Badge** — extracted to `src/components/badge/`, inline styles on
      `--sh3-*` tokens, 4 specs via a host wrapper. App's copy deleted; its 9
      importers now pull `BadgeComponent` from `@sh3pherd/ui`. AOT build green.

- [x] **ChoiceRow** — merged `pill-selector` + `chip-filter` into one
      `sh3-choice-row` with `layout: 'segmented' | 'chips'` (option B). Optional
      `count` badge per option. 6 specs. Both app components deleted; call sites
      migrated (segmented, chips) incl. the roster's category pills (→ chips
      with counts). AOT build green.
- [x] **TabNav** (`sh3-tab-nav`) — extracted the existing shared tab bar
      (dropped its vestigial `CommonModule`; already control-flow). Kept
      `activeStyle` (underline/fill) + `direction` (horizontal/vertical, mobile
      accordion); added a `size` (compact default / comfortable) for page-level
      bars. 6 specs. Zero new tokens (mapped onto the existing set; neutral
      lines now flip in light mode). 6 importers repointed; the roster's
      Staff/Bookings `.ct-tabs` migrated (comfortable, count badges). AOT green.
      NB: `configurable-tab-bar` (DnD/quota power-bar) is a separate beast — not
      touched.

- [x] **Toast** (`sh3-toast-container` + `ToastService`) — repatriated the app's
      toast service, `Toast`/`ToastVariant` types, and container. Styles inlined
      on `--sh3-*` glass tokens (frosted surface, per-variant accent stripe);
      `info` keeps the app's brand-teal tone. First consumer of the `success`
      family. 8 specs. App's 51 `ToastService` sites keep their import path via a
      re-export shim; the single `<sh3-toast-container>` render site is repointed.

- [x] **Card** (`sh3-card`) — the canonical raised surface: `surface-card` bg +
      hairline border + consistent radius (`radius`/`padding`/`interactive`
      inputs). Fixes the "pill radius" drift — the app's `--radius-lg` means
      _pill_, so the ref's `var(--radius-lg, 14px)` cards rendered as capsules;
      `sh3-card` uses the package `--sh3-radius-lg` (14px). 3 specs. First
      consumer: the Intégrations cards (next).
- [x] **Auto-colour registry** — `PaletteRegistry` (root singleton) + curated
      `AUTO_PALETTES` (`vivid`/`extended`/`pastel`) + `providePalette()`. One
      active palette app-wide ⇒ a seed maps to the same colour everywhere;
      `use(name | customColours)` switches it reactively. Byte-identical hash to
      the app's old avatar/org-member logic (zero recolour). 8 specs.
- [x] **Avatar** (`sh3-avatar`) + **AvatarDetail** (`sh3-avatar-detail`) —
      repatriated from `app/shared/`, wired to `PaletteRegistry.colorFor()` (the
      local 10-colour `PALETTE` is gone). App keeps its import sites via
      re-export shims; `orgchart-palette` (`NODE_PALETTE`) now re-exports the
      package `extended` palette. 8 specs.
- [x] **Page layout** (`sh3-page-layout` + `sh3-page-section`) — the shared
      settings/admin page scaffold (title + description + `[pageActions]` slot;
      titled sub-sections). Extracted on the 2nd+ real use (the company
      Administration panes: Facturation, Détails, Intégrations, Zone dangereuse),
      per the "generalize on the 2nd usage" rule — the app panes dropped their
      inlined `.sh3-page*` CSS onto it. 7 specs.

Next components, one at a time, each with tests + a usage story. Lock order
tracks what the app already reuses:
`Button` · `StatusBadge` · `Avatar` · `Icon` · `Sh3DataTable` · …

## Phase 4 · Publish

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
- **`rail-primary` sizing model.** Kept fixed-width (a CSS-var track) on purpose —
  an icon rail wants a stable, predictable width. Revisit `auto` (content-driven,
  like `rail-secondary`) only if a real case demands it.
- **Publish build.** `ng-packagr` target vs. staying source-consumed inside the
  monorepo and only building for external publish (see Phase 4).
- **SCSS surface.** Expose the SCSS mixins alongside the CSS tokens, or ship
  CSS-only?

## Tech debt

Deliberate compromises taken to keep momentum — tracked so they get paid back,
not forgotten.

- **`ScrollLockService` is effectively a no-op.** `html, body` are already
  `overflow: hidden`, so locking `body.overflow` changes nothing. Either drop it,
  or make it lock the app's real scroll container. Tied to the panel-open glitch.
- **`PanelHostComponent :host { display: contents }`** landed as layout hygiene
  (the overlay host claims no layout box); whether it also settles the open-panel
  glitch is unverified — revisit once the glitch is diagnosed.
- **Re-export shims.** ~40 app consumers still import panels from
  `app/shared/panel/*`, and ~50 import the toast from `app/shared/toast/*`, via
  shims that re-export `@sh3pherd/ui`. Collapse them to direct `@sh3pherd/ui`
  imports once each API is stable.
- **Package is outside the quality gates.** No ESLint / CI / pre-push yet
  (cross-ref Phase 0) — the package's own tests run, but nothing enforces them.
- **App-local leftovers.** `rating` tokens aren't in the package yet — waiting on
  a first consumer to justify the role. (`success` landed with the toast.)
