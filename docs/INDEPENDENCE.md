# fold-ng — reste à faire (post-extraction)

> **Contexte (fait, détail dans l'historique git).** `packages/ui` a été sorti du
> monorepo dans ce repo autonome (historique préservé via `git subtree split`),
> passé en **TS 6.0.3**, avec les **5 gates verts** (`eslint` · `tsc` ·
> `strictTemplates` · `vitest` · `vite build` gallery). Le **build publiable**
> existe (`ng-packagr` + `scripts/finalize-dist.mjs` → FESM2022 + `.d.ts` +
> tokens CSS) et le tarball est propre (`pnpm run verify:pack` : `publint` **All
> good**, `attw` **tout vert**).

---

## 1 · Publier la première release — ✅ FAIT

`fold-ng@0.1.0` est publié sur **npm**, dist-tag **`latest`**, **avec
provenance** — via `release.yml` sur le tag `v0.1.0` (trusted publishing OIDC,
pas de `NPM_TOKEN`). La coquille `0.0.0` est **dépréciée**. `npm install
fold-ng` sert la vraie lib (fiche indexée : README + 23 keywords + homepage =
URL Pages démo). GitHub Pages est en ligne (`https://hugoheynard.github.io/fold-ng/`).

Prochaines versions : bump sur `main` via `pnpm release:<patch|minor|major|beta>`
(voir [`RELEASING.md`](./RELEASING.md)). Policy dist-tag : `latest` = dernier
`0.x` propre (jamais `-beta`) ; `beta` = cuts WIP opt-in ; `1.0.0` quand
[`RELEASE-READINESS.md`](./RELEASE-READINESS.md) est tout-vert.

## 2 · App SH3PHERD sur la lib publiée — ✅ FAIT (2026-07-24)

L'app consomme désormais l'**artefact publié** (`fold-ng@0.1.0`, pin registry),
plus la source workspace ; `packages/ui` a été **supprimé** du monorepo (SoR =
ce repo). Vérifié : `tsc --noEmit` propre + **build AOT prod vert**, zéro
warning fold-ng. Surface identique (l'app n'importe que l'entrée `fold-ng` + le
sous-chemin `fold-ng/tokens.css`, tous deux exposés par le tarball).

- **Dev / itération** : pas d'override local — on **republie** (bosser ici →
  `pnpm release:*`, même une `beta` → bump le pin côté app). Boucle source-live
  du compound WebStorm `ui > dev:watch` volontairement abandonnée.
- **Prod / CI** : pin épinglé (`"fold-ng": "0.1.0"`), jamais un range flou qui
  aspirerait une bêta.

## 3 · CI GitHub Actions

- [x] **Release sur tag. ✅** [`release.yml`](../.github/workflows/release.yml) se
      déclenche sur un tag `v*` **uniquement** — un push de branche ne publie
      **jamais**. Garde « tag sur `main` » + garde tag↔package.json, gate complète
      (`eslint`/`tsc`/`lint:templates`/`vitest`), `verify:pack` (ng-packagr +
      publint + attw), `npm publish` OIDC + provenance (`latest`, ou `beta` si le
      tag a un `-`), + GitHub Release. Setup : [`RELEASING.md`](./RELEASING.md).
- [x] **Deploy GitHub Pages sur `main`. ✅** (gallery) —
      [`pages.yml`](../.github/workflows/pages.yml). Optionnel restant : site
      **typedoc** (`docs:api`) + servir `llms.txt` à la racine du site.
- [x] **Protection publication. ✅** (2026-07-24) rulesets GitHub `protect-main` +
      `protect-release-tags` (deletion + non_fast_forward) → `main` et les tags
      `v*` immuables. Reste côté mainteneur : **2FA compte** GitHub + npm.
- [x] **Workflow CI PR-gate. ✅** (2026-07-24) [`ci.yml`](../.github/workflows/ci.yml) —
      un job unique `ci` sur chaque push/PR : `lint` → `tsc -p tsconfig.app.json` →
      `lint:templates` → `test` → `verify:pack` (build lib + publint + attw) →
      build gallery. Permissions read-only, ne publie jamais. **`ci` est un statut
      requis** sur `main` via le ruleset `protect-main` (`required_status_checks`),
      avec **bypass rôle admin `always`** pour que les push directs de release
      (`release.mjs`) passent — release.yml rejoue la barre avant publish de toute
      façon.

---

**INDEPENDENCE est clôturé.** fold-ng est un repo autonome, publié, gaté et
protégé ; l'app SH3PHERD consomme le publié. Reste hors-scope de ce doc : la 2FA
compte (GitHub + npm), et l'optionnel typedoc/`llms.txt` sur le site Pages.
