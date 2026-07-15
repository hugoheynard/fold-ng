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
- [x] Scales: **space** (`--sh3-space-{xs,sm,md,lg,xl}`) + **motion**
      (`--sh3-motion-{fast,base,slow}`) — promoted once the next candidates (icon,
      paginator, panel-header, data-table) all needed them. Catalogue + contract
      test + `sh3SpaceVar`/`sh3MotionVar` helpers; the app's `--gap-*` / `--t-*`
      bridge onto them 1:1 (identical values, zero-regression). Radii already had
      `xs..pill` (no gap). Shadows + z-index still deferred (no consumer yet).
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
  - [x] **Single snackbar extracted → `sh3-toast`** — the container rendered each
        toast inline as a `<div class="toast">` with **emoji** glyphs and
        whole-surface click-to-dismiss. Pulled into a presentational
        `Sh3ToastComponent`: `sh3-icon` status glyphs (`check-circle`/`info`/
        `warning`/`alert`), a single `--sh3-toast-accent` custom prop per variant,
        an explicit close button emitting `dismiss` (no more accidental dismiss),
        `role`/`aria-live` (assertive `alert` for error, polite `status` else),
        and a reduced-motion guard. Container now owns only stacking. Added the
        `alert` status icon (the set had no error glyph). Component + container
        specs; public API (`ToastService`, `<sh3-toast-container>`) unchanged.
- [x] **Menu** (`sh3-menu` + `menu-item` / `menu-section` / `menu-separator`) —
      the collapsible nav rail: coloured sections, `tint="follow"` (items take
      their section colour), depth `level` (primary/secondary/tertiary tints),
      collapse toggle with `togglePlacement` (`auto`/`header`/`footer`/`body`,
      multi-row bands via a reserved gutter), floating-shell self-rounding. Items
      are attribute components (`a[sh3-menu-item]`) so `routerLink` /
      `routerLinkActive` compose. Drives the app's workspace rail (perso +
      workspace nav) and the app-menu launcher.
- [x] **AvatarList** (`sh3-avatar-list`) — overlapping avatar cluster (from the
      org-chart node pattern): `limit` + a detached `+N` overflow chip, `top`
      (`first`/`last`, stacking direction), uniform `size` / `square` per cluster,
      and **per-face** state (`variant` / `muted` / `ring` / `ringStyle`) on
      `Sh3AvatarListItem` — a member can be a ghost among members.
- [x] **State views** (`sh3-loading` + `sh3-empty-state`) — the shared loading
      placeholder + empty-state block, moved off `app/shared/`.

- [x] **Card** (`sh3-card`) — the canonical raised surface: `surface-card` bg +
      hairline border + consistent radius (`surface`/`radius`/`padding`/
      `interactive` inputs). A `surface` input picks the tint — `card` (default)
      or `sunken` (the deeper container tint, added with the data-table). Fixes
      the "pill radius" drift — the app's `--radius-lg` means _pill_, so the ref's
      `var(--radius-lg, 14px)` cards rendered as capsules; `sh3-card` uses the
      package `--sh3-radius-lg` (14px). 4 specs. First consumer: Intégrations.
- [x] **Hero** (`sh3-hero`) — a prominent header card wrapping the card base with
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
- [x] **Badge** (`sh3-badge`) — status/count pill; variants
      `accent`/`info`/`warning`/`alert`/`success` (success completed the family).
- [x] **StatusBadge** (`sh3-status-badge`) — status→colour badge (maps a domain
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
tracks what the app already reuses (✓ = landed):
`Button` · `StatusBadge` · ~~`Avatar`~~✓ · ~~`Icon`~~✓ · ~~`Sh3DataTable`~~✓ ·
~~`Paginator`~~✓ · ~~`PanelHeader`~~✓ · …

`app/shared/panel/` now holds only the panel-open integration spec — every
panel primitive lives in the package. Remaining app/shared candidates are the
smaller primitives (`Button`, `StatusBadge`, state/empty/loading views) when
they earn the move.

**Confirmed candidates + their dependency chain** (from `app/shared/`):

- [x] **`Icon`** (`sh3-icon`) — **landed**. Shipped the full **~100-icon** set
      inlined (102 today — `alert` added for the toast error variant; 6 category
      maps `icons/*.icons.ts`, generated from the app's `.svg` assets) so the
      package is self-contained. Static `SH3_ICONS` const → a runtime
      **`IconRegistry`** root singleton: built-ins + consumer additions via
      `provideIcons()` (bootstrap) or `register()`/`registerMany()` (runtime), keyed
      `Sh3BuiltinIconName | (string & {})`. Added `@angular/platform-browser` peer
      (`DomSanitizer`). ~90 app importers repointed; app icon component + registry
      deleted. 6 specs (incl. extensibility). Unblocks `Paginator` + `PanelHeader`.
- [x] **`Sh3DataTable`** (`sh3-data-table` + cell directive + types) — **landed**.
      Generic/presentational, no `Icon` dependency. SCSS → a plain **`.css`
      styleUrl** (see harness note below); the deep table surface uses
      `surface-sunken` (body) with the sticky header lifted toward `surface-card`.
      Drove two new tokens: `--sh3-color-border-subtle` (fainter hairline for row
      dividers, below `border`) and `--sh3-color-surface-sunken` (a solid surface
      **darker** than `surface-card` for large containers — the ref's second card
      tint, below the raised card). Added the `@angular/common` peer. Its one app
      importer (roster contracts-tab) repointed; app copy deleted. 6 specs.
- [x] **`Paginator`** (`sh3-paginator`) — **landed**. Server-side, fully
      controlled (size selector + range + ellipsis page nav). Uses the package
      `sh3-icon` chevrons; SCSS → `.css` styleUrl, all tokens mapped (no new
      token). Fixed a latent `var(--t-fast) ease` double-easing bug (the motion
      token already carries the easing). Its one importer (contracts-tab)
      repointed; app copy deleted. 7 specs.
- [x] **`PanelHeader`** (`sh3-panel-header`) — **landed** in `src/panel/`
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
  needed once `sh3-menu` gained an expanded state (it takes its content width
  with no JS measurement). Trade-off: `sh3-menu` reads the shell's
  `--sh3-shell-rail-width` var → intra-package coupling, accepted-with-rationale
  (ledger #11 in `dev-rules.md`).
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
- [x] **Re-export shims — paid back.** The `app/shared/{panel,toast,avatar,
avatar-detail}/*` shims that re-exported `@sh3pherd/ui` are deleted; all ~115
      consumers now import `@sh3pherd/ui` directly (duplicate imports merged). Only
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

## Hardcore-review follow-ups (2026-07) — see `dev-rules.md` ledger

Done in the review pass: elevation tokens + the component-usage colour guard
(rule 1.3/1.4), avatar luminance ink (6.3), focus-trap visible-only (6.2). Still
open:

- **Extract hard-coded strings to inputs** (rule 5.1). `sh3-paginator` + panel
  host/header carry French aria/labels; make them `input()`s with EN defaults,
  the app supplies French once. Flips the app's a11y language → coordinate.
- **Retokenise spacing/motion** (rule 1.5) and add a lint so it stays enforced
  like colour is.
- **`inert` the background behind an open panel** (rule 6.2) for a full modal
  a11y barrier, not just a keyboard trap.
- **Panel close → `<sh3-icon name="close">`** (rule 4.7), and fold its aria into
  the i18n input above.

## Road to 9.5 (current: ~8.4/10)

The rating breakdown — Technique 9 · Modernité design 8.5 · Good practices 8.5 ·
DX 8.5 · Tests 7.5. Foundations are ~9; what's missing is **finish + proof**.
Ordered by impact on the score.

**1 · i18n — the one real portability leak (Good practices 8.5→9, DX 8.5→9).**
The blocker to the "reusable across projects" promise (rule 5.1).

- [ ] Every user-facing / `aria-label` string → `input()` with an English default.
      `sh3-paginator` (`perPage`/`of`/`empty`/`prev`/`next`/`page`), panel host +
      header close (`"Fermer"` → `closeLabel`, default `"Close"`).
- [ ] App supplies French once (paginator call site + the single panel host).
- [ ] Fold the panel close `<svg>` into `<sh3-icon name="close">` (rule 4.7).

**2 · Tests — happy-path only today (Tests 7.5→9).**

- [ ] a11y automation: axe-core assertion in the panel/overlay specs (role,
      `aria-modal`, focus order, Escape) — not just "it renders".
- [ ] Visual-regression baseline (Playwright/Vitest-browser snapshots) for each
      component × dark/light — the theme flip is claimed but never pixel-verified.
- [ ] Coverage floor in CI; fill the thinly-tested components (tab-nav, app-shell).

**3 · a11y depth (Modernité 8.5→9, and unblocks a real 6.2 gap).**

- [ ] `inert` the background behind an open panel — a full modal barrier, not a
      keyboard-only trap (screen-reader virtual cursor currently reaches behind).
- [ ] Reduced-motion: gate the slide/fade animations behind
      `prefers-reduced-motion`. (`sh3-toast` entrance now does; sweep the rest —
      menu width transition, panel slide, hero glow.)
- [ ] Reconsider the px type scale (rule 1.6) — offer a rem opt-in for consumers
      whose root ≠ 14px, so user-zoom works. Currently an accepted deviation.

**4 · Discipline still aspirational (Good practices 8.5→9).**

- [ ] Retokenise the hard-coded px spacing + `0.18s ease` motion to
      `--sh3-space-*` / `--sh3-motion-*`, then a lint guard (rule 1.5) so it's
      enforced like colour — no new debt.

**5 · Proof + release (DX 8.5→9.5, Modernité 8.5→9).**

- [ ] A **second consumer** (even a tiny playground app) — the API is only
      validated by one app today; a 2nd reveals the hidden assumptions.
- [ ] Storybook (or a docs playground) so components are browsable, not just
      README rows.
- [ ] Real semver + a CHANGELOG; graduate from `0.0.0`. Wire the package into the
      repo quality gates (ESLint/CI/pre-push — cross-ref Phase 0).

Land 1–4 and it's a clean **9**; 5 is what earns the last half-point — a design
system is only proven by a second user and a versioned release.
