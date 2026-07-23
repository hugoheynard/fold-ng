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

## 1 · Publier la première release — geste sortant (Hugo)

> **Maturité ≠ canal npm.** La **maturité** se signale par le badge README
> (`pre-1.0`) + le numéro `0.x` — c'est ce que voit un humain. Volontairement
> **pas** « beta » : le code est production-quality (testé, dogfoodé), il reste
> `0.x` seulement parce que l'API n'est pas figée, pas parce qu'il serait
> fragile. Le **canal de pré-release** npm (`0.y.z-beta.N` sur le dist-tag
> `beta`) est un autre sujet : un mécanisme de test jetable pour la **prochaine**
> version, **pas** l'étiquette de tes releases publiques. Le suffixe `-beta.N`
> ne va **jamais** sur `latest`.

**Contrainte de départ** : `0.0.0` (coquille « Coming soon ») squatte déjà
`latest`, et c'est **ça** que npm indexe. La 1ʳᵉ vraie release doit donc aller
sur `latest` avec un `0.x` **propre** (pas `-beta` : un `^0.1.0` consommateur
n'attrape pas les pré-releases, et un `-beta` sur `latest` sème la confusion).

Recette :

```bash
npm whoami || npm login
npm version 0.1.0 --no-git-tag-version   # 0.x propre → latest (maturité = badge)
pnpm run verify:pack                      # build + publint + attw
cd dist && npm publish --access public    # va sur latest par défaut
npm deprecate fold-ng@0.0.0 "placeholder to reserve the name — use latest"
```

- [ ] **La release publique va sur `latest`**, en `0.x` propre. `npm install fold-ng`
      sert alors ta vraie lib (fiche riche indexée), pas la coquille vide.
- [ ] **Le dist-tag `beta` = itérations WIP.** Pour tester un chantier avant de
      l'assumer : `0.2.0-beta.1` → `npm publish --tag beta` (ne touche pas `latest`) ;
      quand c'est bon, `0.2.0` → `latest`. Les `-beta.N` sont opt-in (`fold-ng@beta`).
- [ ] **Semver propre — pas de train `0.0.x`.** Minor bumps `0.1.0` → `0.2.0` sur
      `latest` ; chaque version publiée est immuable.
- [ ] **`latest` → `1.0.0` seulement quand `RELEASE-READINESS.md` est tout-vert.**
      Avant ça, `latest` = dernier `0.x` (maturité pré-1.0 assumée par le badge).
- [ ] **`--provenance`** : ne marche **que depuis un CI supporté** (GitHub Actions + OIDC),
      pas en local → arrive avec le workflow release (§3).

## 2 · Basculer l'app SH3PHERD sur la lib publiée

Aujourd'hui l'app résout la **source** workspace. Post-publish, elle consomme l'artefact.

- [ ] **Dev / itération — ne PAS brûler de versions npm.** `pnpm.overrides` →
      `"fold-ng": "file:../fold-ng"` (ou `pnpm link`) : itérer lib + app sans publier.
- [ ] **Prod / CI** : `pnpm add fold-ng@<version-épinglée>` (jamais un range flou qui
      aspirerait une bêta). L'app compile alors du JS+`.d.ts`, plus de la source.
- [ ] **Vérifier l'app build AOT vert** sur le publié/linké (DoD).
- [ ] ⚠️ Accepter la **perte de la boucle source-live** (le compound WebStorm
      `ui > dev:watch` ne reflète plus dans l'app instantanément — republier/relinker).

## 3 · CI GitHub Actions

- [x] **Release sur tag. ✅ FAIT.** [`release.yml`](../.github/workflows/release.yml)
      se déclenche sur un tag `v*` **uniquement** — un push de branche ne publie
      **jamais**. Garde tag↔package.json, gate complète (`eslint`/`tsc`/`lint:templates`/`vitest`),
      `verify:pack` (ng-packagr + publint + attw), `npm publish --provenance`
      (`latest`, ou `beta` si le tag a un `-`), + GitHub Release. Procédure et
      setup (secret `NPM_TOKEN`) : [`RELEASING.md`](./RELEASING.md).
- [x] **Deploy GitHub Pages sur `main`. ✅ FAIT** (gallery) —
      [`pages.yml`](../.github/workflows/pages.yml). Reste optionnel : site
      **typedoc** (`docs:api`) + servir `llms.txt` à la racine du site.
- [ ] **Workflow CI push/PR** (gates sur chaque PR, séparé du release) :
      `eslint src demo` → `tsc -p tsconfig.app.json` → `lint:templates` →
      `vitest` → `pnpm run build`. Statut requis unique **`ci`** +
      **branch protection** sur `main`.

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
