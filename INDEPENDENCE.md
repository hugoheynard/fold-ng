# fold-ng — sortir du monorepo (extraction, pas miroir)

> **But.** Faire vivre `packages/ui` comme un **repo Git autonome** (`fold-ng`),
> développé chez lui, publié sur npm, avec **exactement la même barre de dev** que
> dans le monorepo — mêmes flags TS, mêmes bans ESLint, mêmes hooks, mêmes gates.
> L'app SH3PHERD consommera ensuite l'**artefact publié** au lieu de la source.
>
> **Rien n'est fait ici — c'est la checklist d'exécution.** Reste hardcore : on ne
> desserre aucune règle en chemin.

**Différence avec [`TODO-fold-ng-mirror.md`](../../documentation/todos/TODO-fold-ng-mirror.md).**
Le doc miroir = **vitrine read-only** synchronisée depuis le privé (one-way,
subtree force-push, pas de contributions). Ce doc-ci = **extraction réelle** : le
repo `fold-ng` devient la **source de vérité** du package et l'app en dépend comme
d'une lib externe. Les deux ne coexistent pas : décider **mirror OU extraction**
avant de commencer (voir §0). Les décisions verrouillées du doc miroir (nom repo
`fold-ng`, thème `umbra`, licence MIT, hash-routing gallery) restent valables ;
seul le **sens de dépendance** change.

---

## 0 · Décisions à trancher AVANT de couper

| Décision             | Options                                                                                                         | Défaut proposé                                                                                   |
| -------------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| **Nom npm**          | `fold-ng` (actuel, non-scopé, meilleur search) **vs** `@sh3pherd/fold` (scopé, doc miroir)                      | **`fold-ng`** — non-scopé = découverte npm max (cf. discoverability). Aligner le doc miroir.     |
| **Source de vérité** | (a) extraction : le repo `fold-ng` est SoR, le monorepo consomme le publié · (b) miroir : le monorepo reste SoR | **(a) extraction** (c'est l'objet de ce doc).                                                    |
| **Conso par l'app**  | npm publié · `git submodule` · lien local (`pnpm link` / `file:`) pour le dev                                   | **npm publié** en CI/prod ; **override `pnpm` local** pour itérer (voir §8).                     |
| **TS de la lib**     | rester `~5.9.3` (pin monorepo) **vs** passer **TS 6.0.x**                                                       | **TS 6.0.x** — hors du pin monorepo, ça débloque `ng-packagr` (voir §4). À faire APRÈS la coupe. |
| **Historique**       | repartir de zéro · préserver l'historique de `packages/ui`                                                      | **préserver** via `git filter-repo` / `git subtree split` (voir §7).                             |

---

## 1 · Inventaire des couplages monorepo (ce qui casse en standalone)

Tout ce qui suit **ne résout pas** une fois `packages/ui/` sorti — à inliner ou remplacer.

- [ ] **Chaîne `tsconfig` par `extends` relatifs.** `tsconfig.json` →
      `../../tsconfig.angular.json` → `../../tsconfig.base.flags.json`. Les deux
      parents vivent à la racine du monorepo → **inliner** les flags dans le repo
      lib (§3.1).
- [ ] **`@sh3pherd/eslint-config` (`workspace:*`).** Ne résout pas hors monorepo.
      Le `eslint.config.mjs` de la lib importe 3 fragments : `noUnlimitedDisable`,
      `typeEscapeHatches`, `stringifySafety`. → **vendoriser** ces fragments dans
      le repo lib (ou publier `@sh3pherd/eslint-config`). (§3.2)
- [ ] **Script `clean`** = `../../dev-toolbox/scripts/clean:package.sh` → remplacer
      par un `rimraf dist out-tsc docs-api` local.
- [ ] **Gate `lint:ui-templates`** = `tsx dev-toolbox/scripts/check-ui-templates.ts`
      (root). C'est le contrôle **`strictTemplates`** sur lib + gallery. → **copier**
      le script dans le repo lib (`scripts/check-templates.ts`) ou le remplacer par
      un `ngc`/build AOT équivalent. (§3.5)
- [ ] **Hooks** = `.githooks/pre-commit` (lint-staged) + `.githooks/pre-push`
      (`tsc --noEmit` + `eslint`), installés via `pnpm run setup:hooks` racine. →
      reprovisionner dans le repo lib (§3.4).
- [ ] **`packageManager` / lockfile.** Le monorepo pin `pnpm@10.12.1`. Le repo lib
      garde pnpm, son propre `pnpm-lock.yaml` (formaté prettier, cf. règle lockfile).
- [ ] **Consommateur = l'app.** Aujourd'hui `import … from 'fold-ng'` résout la
      **source** (`exports` → `./src/index.ts`) via le workspace. Post-extraction,
      l'app doit consommer le **publié** (§8).
- [ ] **Aucune dépendance inverse.** Vérifier que `packages/ui/src` n'importe
      **rien** du monorepo hors ses propres fichiers + peers Angular :
      `grep -rn "from \"\\.\\./\\.\\./\\.\\." packages/ui/src` doit être vide
      (aujourd'hui : OK, le package est autonome en code).

---

## 2 · Ce qui part avec la lib (déjà prêt, à déplacer tel quel)

`src/` · `dev/` (gallery) · `README.md` · `CHANGELOG.md` · `llms.txt` ·
`LICENSE` · `dev-rules.md` · `RELEASE-READINESS.md` · `TODO.md` ·
`typedoc.json` · `tsdoc.json` · `vite.config.ts` · `vitest.config.ts` ·
`src/test-setup.ts` · `tsconfig.app.json` · `tsconfig.spec.json` · `.gitignore`.
La discipline « 1 dossier / composant » et les conventions restent — `dev-rules.md`
est déjà le contrat contributeur.

---

## 3 · Reproduire la barre EXACTE (le cœur — zéro desserrage)

### 3.1 · Flags TypeScript (inliner, ne rien perdre)

Copier `tsconfig.base.flags.json` du monorepo à l'identique. Flags load-bearing à
**garder tous** :

`strict` · `strictPropertyInitialization` · `strictNullChecks` ·
`strictFunctionTypes` · `strictBindCallApply` · `noImplicitAny` ·
`noImplicitReturns` · `noImplicitThis` · `noUnusedLocals` · `noUnusedParameters` ·
`noImplicitOverride` · `noPropertyAccessFromIndexSignature` ·
`useUnknownInCatchVariables` · `noFallthroughCasesInSwitch` ·
`allowUnreachableCode:false` · `forceConsistentCasingInFileNames` ·
`verbatimModuleSyntax` · `allowUnusedLabels:false` · `experimentalDecorators`.

Plus, depuis `tsconfig.angular.json` : `target/module ES2022`, `lib ES2022+DOM`.
Plus les **`angularCompilerOptions`** de `tsconfig.json` :
`strictInjectionParameters` · `strictInputAccessModifiers` · **`strictTemplates`**.

→ Nouveau `tsconfig.json` autonome : ces flags en dur (plus d'`extends ../../`),
`moduleResolution: bundler`, `types: ["node","vitest/globals"]`.

### 3.2 · ESLint (vendoriser, garder les bans)

Recréer `eslint.config.mjs` **flat, TS-only** (ne lint pas le `.html`), identique :

- presets : `@eslint/js` recommended · `typescript-eslint` recommended ·
  `eslint-plugin-prettier/recommended`.
- **bans load-bearing** (vendorisés depuis `@sh3pherd/eslint-config`, cf.
  [`documentation/sh3-lint.md`](../../documentation/sh3-lint.md)) :
  - `noUnlimitedDisable` — `eslint-comments/no-unlimited-disable` + `require-description` (pas d'`eslint-disable` nu).
  - `typeEscapeHatches` — `no-explicit-any` · `ban-ts-comment` (pas de `@ts-ignore`) · `consistent-type-assertions:'never'` (pas de `as`, `as const` exempté).
  - `stringifySafety` — type-checked, scopé `src/**` hors specs (`restrict-template-expressions`, etc.).
- overrides identiques : `.spec.ts` relâche `consistent-type-assertions` + `no-explicit-any` ; `languageOptions` browser+node globals ; `parserOptions.projectService` + `tsconfigRootDir`.
- plugins à déclarer en devDeps : `typescript-eslint` · `@eslint/js` ·
  `eslint-plugin-prettier` · `@eslint-community/eslint-plugin-eslint-comments` ·
  `globals`.

**Invariant :** les 5 bans CLAUDE.md (`any`, `as`, `@ts-ignore`, `eslint-disable`
nu, + tailles) restent **erreurs**, jamais warnings. Vérifier qu'aucun `off` ne
se glisse (les seuls `off` légitimes = les 2 des `.spec.ts`).

### 3.3 · Prettier (verrouiller — actuellement défauts implicites)

Le monorepo n'a **pas** de `.prettierrc` (défauts prettier 3.5). En standalone,
**ajouter un `.prettierrc` explicite** qui fige le style actuel (double quotes,
trailing commas, largeur par défaut) pour éviter une reformatte massive au premier
run. Garder la **règle lockfile** : `prettier --write pnpm-lock.yaml` après tout
`pnpm install`.

### 3.4 · Hooks Git (reprovisionner)

- **pre-commit** : `lint-staged` → `eslint --fix` + `prettier --write` sur les
  fichiers stagés (+ `prettier` sur `pnpm-lock.yaml`).
- **pre-push** : `tsc --noEmit -p tsconfig.app.json` **+** `eslint src dev` **+**
  le gate templates (§3.5). Refuser le push si rouge.
- S'auto-installent (`"prepare": "git config core.hooksPath .githooks"` ou
  `husky`). Reproduire le comportement du monorepo (hooks self-install au
  `pnpm install`).

### 3.5 · Gate `strictTemplates` (le contrôle qui n'est pas dans `tsc`)

Le monorepo lance `dev-toolbox/scripts/check-ui-templates.ts` : compile les
templates de `src/` **+** de la gallery `dev/` avec `strictTemplates` (ngtsc) pour
attraper les bindings morts que `tsc`/Vite manquent. → **Copier** ce script dans
`scripts/check-templates.ts` + garder le script npm `lint:templates`, **ou** le
remplacer par un build AOT (`ng-packagr`/`ngc`) qui échoue sur template invalide.
Ce gate est non-négociable (il a rattrapé plusieurs régressions cette semaine).

### 3.6 · Tests (Vitest + Analog, déjà autonomes)

`vitest.config.ts` (`@analogjs/vite-plugin-angular` + jsdom + `src/test-setup.ts`
zoneless TestBed) part tel quel. Peers de test : `@angular/*`, `zone.js` (épinglé
devDep pour le bootstrap test, jamais chargé au runtime), `jsdom`, `vitest`,
`@analogjs/vite-plugin-angular` + `@analogjs/vitest-angular`.

---

## 4 · Build & publish (débloqué une fois indépendant → TS 6)

Aujourd'hui bloqué : `ng-packagr@22` exige **TS `>=6.0 <6.1`** ; la lib est pin
`~5.9.3` par contrainte monorepo. **Hors monorepo, ce pin saute** :

- [ ] **Bump TS 6.0.x** (aligner `typescript-eslint` sur une version qui supporte
      TS6 — celle de l'app). Repasser **toutes** les gates : `tsc`, `vitest` (472),
      `eslint`, `vite build` (gallery), `strictTemplates`. Le blocage ng-packagr
      disparaît alors.
- [ ] **`ng-packagr`** : `ng-package.json` = `{ "dest":"dist", "lib":{ "entryFile":"src/index.ts" } }` + `tsconfig.lib.json` (`compilationMode:"partial"`, include `src/**`, exclude
      specs + `dev`).
- [ ] **Assets tokens CSS** : le `dist/package.json` généré **ne porte pas** les
      exports `./tokens.css` custom → copier `src/tokens/*.css` en assets et
      **réinjecter** ces `exports` dans le `dist/package.json` au publish.
- [ ] **`npm publish --provenance`** depuis `dist/` (badge verified + signal
      supply-chain lu par Socket/Snyk). Semver honnête : `0.1.0` → `1.0.0` **quand
      `RELEASE-READINESS.md` est tout-vert**.

## 5 · Gallery → vitrine GitHub Pages

`dev/` + `vite build` produit la gallery ; hash-routing déjà en place →
déployable GH Pages sans rewrite. CI `deploy-pages` sur `main`. Déployer aussi le
site **typedoc** (`docs:api` → `docs-api/`) et servir `llms.txt` à la racine du
site (découverte LLM).

## 6 · Docs qui voyagent

`README` (badges + quickstart déjà en tête) · `CHANGELOG` · `llms.txt` ·
`dev-rules.md` (contrat contributeur) · `RELEASE-READINESS.md` · `TODO.md` ·
typedoc. Mettre à jour les URLs `repository`/`homepage` vers le vrai repo public
une fois créé (aujourd'hui elles pointent `github.com/hugoheynard/fold`, inexistant).

## 7 · Préserver l'historique

```bash
# option filter-repo (recommandé) — nouveau repo avec l'historique de packages/ui
git clone --no-local . /tmp/fold-ng-extract
cd /tmp/fold-ng-extract
git filter-repo --subdirectory-filter packages/ui
# → push vers le nouveau remote public fold-ng
```

(ou `git subtree split -P packages/ui -b fold-ng-export`). Vérifier que les
renommages récents — `src/panel → src/components/overlays/panel` — restent lisibles
(`git log --follow`).

## 8 · Conséquence : comment l'app consomme la lib ensuite

Post-extraction, `apps/frontend-webapp` ne résout plus la source workspace.

- **Prod/CI** : `pnpm add fold-ng@<version>` (dépendance publiée normale). L'app
  compile alors du **JS+d.ts** compilé (ng-packagr), plus de la source → gain :
  build app plus rapide, découplage versionné.
- **Dev/itération** : override local pour ne pas republier à chaque changement —
  `pnpm.overrides` `file:../fold-ng` **ou** `pnpm link`. Documenter la boucle.
- **Décider la cadence** : l'app suit-elle `latest` ou une version épinglée ?
  (Épinglée + bump volontaire = plus sûr pour une app de prod.)
- ⚠️ **Perte de la boucle source-live actuelle** (le compound WebStorm `ui > dev:watch`
  reflétait instantanément dans l'app). En published-dep, il faut republier/relinker.
  C'est le vrai coût de l'extraction — l'accepter en connaissance de cause.

## 9 · CI (rejouer toutes les gates, GitHub Actions)

Un workflow qui, sur push/PR :

1. `pnpm install` (+ vérif lockfile prettier).
2. `eslint src dev` (0 erreur).
3. `tsc --noEmit -p tsconfig.app.json`.
4. `lint:templates` (strictTemplates lib + gallery).
5. `vitest run` (472+).
6. `vite build` (gallery compile).
7. `ng-packagr` (build publiable) — après le bump TS6.
8. (main) deploy GH Pages (gallery + typedoc) ; (tag) `npm publish --provenance`.

Statut requis unique `ci` (comme `ci-gate` du monorepo). **Branch protection** sur
`main`.

---

## 10 · Definition of Done (vérif finale)

- [ ] `pnpm install && pnpm eslint src dev && pnpm exec tsc --noEmit -p tsconfig.app.json && pnpm lint:templates && pnpm test && pnpm exec vite build` **vert dans le repo isolé** (aucun `../../`, aucun `workspace:*` non résolu).
- [ ] Les **5 bans** (`any`/`as`/`@ts-ignore`/`eslint-disable` nu/tailles) échouent bien la CI si violés (tester avec une violation jetable).
- [ ] `strictTemplates` échoue bien sur un binding mort (fixture-bite conservée).
- [ ] `npm pack` produit un tarball propre (`files` : `src` ou `dist`, README, CHANGELOG, LICENSE, llms.txt — **pas** `dev/`).
- [ ] `publint` + `arethetypeswrong` verts (après ng-packagr).
- [ ] L'app consomme la version publiée et build AOT vert.
- [ ] Décision mirror-vs-extraction tranchée et l'autre doc archivé/aligné.
