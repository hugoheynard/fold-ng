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
- [ ] Named surfaces: card, panel, popover.
- [ ] Dividers; `text-faded`; on-bright / on-dark.
- [ ] Scales: space + motion (deferred — ChoiceRow inlines its few constants;
      promote when a 2nd component needs them), shadows, z-index.
- [ ] Success status family (when its first consumer is extracted).
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

Next components, one at a time, each with tests + a usage story. Lock order
tracks what the app already reuses:
`Button` · `StatusBadge` · `Avatar` · `Icon` · `Sh3DataTable` · …

## Phase 4 · Publish

- [ ] Decide the build: `ng-packagr` (needed once we ship Angular components) vs
      source-consumed (today's monorepo pattern).
- [ ] Package exports, `files`, versioning, changelog.
- [ ] Flip `private: false` + registry/publish flow.

## Open questions

- Angular components → `ng-packagr` build target, or keep source-consumed inside
  the monorepo and only build for external publish?
- Do we expose SCSS mixins alongside the CSS tokens, or CSS-only?
