# fold-ng — reste à faire (post-extraction)

> **Contexte (déjà fait, détail dans l'historique git).** `packages/ui` est sorti
> du monorepo dans ce repo autonome (historique préservé via `git subtree split`),
> passé en **TS 6.0.3**, avec les **5 gates verts** (`eslint` · `tsc` ·
> `strictTemplates` · `vitest` 472/472 · `vite build` gallery). Le **build
> publiable** existe (`ng-packagr` + `scripts/finalize-dist.mjs` → FESM2022 +
> `.d.ts` + tokens CSS) et le tarball est propre (`pnpm run verify:pack` :
> `publint` **All good**, `attw` **tout vert**). Racine rangée, URLs corrigées.
>
> **Ci-dessous : uniquement ce qui reste.** Reste hardcore — on ne desserre aucune
> règle.

---

## 1 · Publier la première bêta — geste sortant (Hugo)

Recette :

```bash
npm whoami || npm login
npm version 0.1.0-beta.1 --no-git-tag-version   # vrai identifiant pré-release
pnpm run verify:pack                             # build + publint + attw
cd dist && npm publish --tag beta --access public
```

- [ ] **Bêta sous le canal `beta`, jamais `latest`.** `--tag beta` → `npm install fold-ng`
      ne sert rien (pas de `latest`), `fold-ng@beta` est opt-in. C'est ce qui protège la vitrine.
- [ ] **Semver propre — pas de train `0.0.x`.** `0.1.0-beta.1` → `-beta.2` → `0.1.0` stable
      (ou minor bumps `0.1.0`, `0.2.0`). Chaque version publiée est immuable.
- [ ] **`latest` → `1.0.0` seulement quand `RELEASE-READINESS.md` est tout-vert.**
      Avant ça, `latest` = dernier `0.x` stable ; les `-beta.n` restent sur `beta`.
- [ ] **`--provenance`** : ne marche **que depuis un CI supporté** (GitHub Actions + OIDC),
      pas en local → arrive avec le workflow release (§3).
- [ ] **Après coup** : `npm deprecate "fold-ng@0.1.0-beta.1" "early beta — use latest"`
      pour tenir la liste propre (zéro pénalité découverte).

## 2 · Basculer l'app SH3PHERD sur la lib publiée

Aujourd'hui l'app résout la **source** workspace. Post-publish, elle consomme l'artefact.

- [ ] **Dev / itération — ne PAS brûler de versions npm.** `pnpm.overrides` →
      `"fold-ng": "file:../fold-ng"` (ou `pnpm link`) : itérer lib + app sans publier.
- [ ] **Prod / CI** : `pnpm add fold-ng@<version-épinglée>` (jamais un range flou qui
      aspirerait une bêta). L'app compile alors du JS+`.d.ts`, plus de la source.
- [ ] **Vérifier l'app build AOT vert** sur le publié/linké (DoD).
- [ ] ⚠️ Accepter la **perte de la boucle source-live** (le compound WebStorm
      `ui > dev:watch` ne reflète plus dans l'app instantanément — republier/relinker).

## 3 · CI GitHub Actions (rejouer toutes les gates)

- [ ] Workflow push/PR : `pnpm install` (+ lockfile prettier) → `eslint src dev` →
      `tsc --noEmit -p tsconfig.app.json` → `lint:templates` → `vitest run` →
      `vite build` → `ng-packagr` (`pnpm run build`).
- [ ] Statut requis unique **`ci`** + **branch protection** sur `main`.
- [ ] Sur `main` : **deploy GitHub Pages** — gallery (`vite build`, hash-routing déjà OK,
      pas de rewrite) + site **typedoc** (`docs:api` → `docs-api/`) + servir `llms.txt`
      à la racine du site (découverte LLM).
- [ ] Sur tag : `npm publish --provenance` (badge verified, lu par Socket/Snyk).

## 4 · Durcissements restants

- [ ] **`.prettierrc` explicite.** Le repo tourne aujourd'hui sur les défauts prettier
      (3.9 a déjà reformaté 4 unions au 1ᵉʳ run). Figer le style (double quotes,
      trailing commas, largeur) évite toute reformatte-surprise à un futur bump prettier.
- [ ] **Prouver que les 5 bans échouent la CI** (`any` / `as` / `@ts-ignore` /
      `eslint-disable` nu / tailles) avec une violation jetable.
- [ ] **Fixture-bite `strictTemplates`** : un test qui pointe le gate sur un binding mort
      et prouve qu'il **mord** (`checkTemplates()` est déjà paramétrable pour ça).

## 5 · Ménage

- [ ] **Archiver / aligner** [`TODO-fold-ng-mirror.md`](../../documentation/todos/TODO-fold-ng-mirror.md)
      dans le monorepo : la décision **extraction** est tranchée (ce repo est la source de
      vérité), le plan miroir est abandonné — le marquer pour éviter toute confusion future.
