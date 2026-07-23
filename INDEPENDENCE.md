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

> **✅ EXTRACTION EFFECTUÉE — 2026-07-23.** `packages/ui` sorti dans un dépôt
> autonome (`git subtree split` → 482 commits d'historique, rewritten à la
> racine ; repo `github.com/hugoheynard/fold-ng`, branche `dev`). Gates **verts
> sur TS 5.9.3** : `eslint src dev` 0, `tsc --noEmit -p tsconfig.app.json` 0,
> `vitest` **472/472**. **DevDeps hoistées récupérées** (absentes du
> `package.json` de la lib, fournies par le root en monorepo) : `@types/node`,
> `eslint-config-prettier`, `@angular/compiler-cli`, `@angular/build`,
> `concurrently`, `onchange`, `tsx`, `lint-staged`. Hooks **activés**
> (`prepare` → `core.hooksPath .githooks`) ; `lint:templates` = placeholder
> inerte jusqu'à TS6. `vitest` passe car le transform de test analog est JIT
> (pas de `NgtscProgram`).
>
> **✅ BUMP TS6 EFFECTUÉ — 2026-07-23.** `typescript ~5.9.3` → `~6.0.3`
> (`typescript-eslint` 8.65 supporte TS 6.0 sans warning). Le mur est tombé :
> **les 5 gates verts** — `eslint` 0, `tsc` 0, **`strictTemplates` actif et
> clean** (placeholder `echo` remplacé par le vrai `tsx scripts/check-templates.ts`,
> src + gallery), `vitest` **472/472**, **`vite build` gallery AOT** `✓ built`
> (`NgtscProgram` accepte TS 6.0). Reste pour publier : `ng-packagr` (§4).

- [x] **Chaîne `tsconfig` par `extends` relatifs. ✅ FAIT (in-monorepo).**
      `tsconfig.json` n'`extends` plus `../../` — tous les flags de
      `tsconfig.base.flags.json` + `tsconfig.angular.json` sont **inlinés** (avec
      note de synchro). Vérifié behavior-identique : `tsc` 0, strictTemplates
      clean, 472 tests. (§3.1)
- [x] **`@sh3pherd/eslint-config` (`workspace:*`). ✅ FAIT.** Les 3 fragments
      (`noUnlimitedDisable`, `typeEscapeHatches`, `stringifySafety`) **vendorisés**
      dans `eslint.rules.mjs` (local) ; `eslint.config.mjs` pointe dessus ; la
      devDep `workspace:*` est retirée. `eslint src dev` = 0 (règles identiques). (§3.2)
- [x] **Script `clean`. ✅ FAIT.** `../../dev-toolbox/…` → `rm -rf dist out-tsc
  docs-api …` local.
- [x] **Gate `lint:ui-templates`. ✅ FAIT (TS6).** Script vendorisé dans
  `scripts/check-templates.ts` (tsconfig local + `@angular/compiler-cli` résolu
  depuis les node_modules du package), câblé `"lint:templates": "tsx scripts/check-templates.ts"`
  et appelé par le pre-push. **Actif depuis le bump TS6** — tourne réellement,
  clean sur src + gallery. (§3.5)
- [x] **Hooks. ✅ PRÊTS (templates inertes).** `.githooks/pre-commit` (lint-staged) + `.githooks/pre-push` (`tsc` + `eslint` + `lint:templates` + `test`) +
      `.lintstagedrc.mjs` local créés dans `packages/ui/`. **Inertes dans le
      monorepo** (git utilise le `.githooks` racine ; le pre-commit racine résout
      le `.lintstagedrc` racine d'abord). **Activation à l'extraction** :
      `git config core.hooksPath .githooks` via un `prepare`. (§3.4)
- [x] **`packageManager` / lockfile. ✅ FAIT.** `pnpm-lock.yaml` propre généré
      dans le repo isolé (formaté prettier, cf. règle lockfile).
- [ ] **Consommateur = l'app.** Aujourd'hui `import … from 'fold-ng'` résout la
      **source** (`exports` → `./src/index.ts`) via le workspace. Post-extraction,
      l'app doit consommer le **publié** (§8).
- [x] **Aucune dépendance inverse. ✅ VÉRIFIÉ.** `src/` n'importe **rien** du
      monorepo : les `../../../a11y|dom|directives` résolvent vers `src/a11y`,
      `src/dom`, `src/directives` (sous-dossiers **du package**), pas vers le
      monorepo. `tsc`/`vitest` verts dans le repo isolé le prouvent.

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

### 3.1 · Flags TypeScript (inliner, ne rien perdre) — ✅ FAIT

> `tsconfig.json` est déjà self-contained (flags inlinés, note de synchro). Le reste ci-dessous documente ce qui a été inliné.

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

### 3.2 · ESLint (vendoriser, garder les bans) — ✅ FAIT

> Fragments vendorisés dans `eslint.rules.mjs`, `eslint.config.mjs` re-pointé, devDep `workspace:*` retirée. `eslint src dev` = 0.

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

### 3.4 · Hooks Git (reprovisionner) — ✅ PRÊTS (inertes, à activer à l'extraction)

> `packages/ui/.githooks/{pre-commit,pre-push}` + `.lintstagedrc.mjs` créés.
> Inertes dans le monorepo (hookPath racine gagne). Activer dans le repo isolé :
> `git config core.hooksPath .githooks` via `"prepare"` dans `package.json`.

- **pre-commit** : `lint-staged` → `eslint --fix` + `prettier --write` sur les
  fichiers stagés (+ `prettier` sur `pnpm-lock.yaml`).
- **pre-push** : `tsc --noEmit -p tsconfig.app.json` **+** `eslint src dev` **+**
  le gate templates (§3.5). Refuser le push si rouge.
- S'auto-installent (`"prepare": "git config core.hooksPath .githooks"` ou
  `husky`). Reproduire le comportement du monorepo (hooks self-install au
  `pnpm install`).

### 3.5 · Gate `strictTemplates` (le contrôle qui n'est pas dans `tsc`) — ⚠️ script prêt, activation TS6

> `scripts/check-templates.ts` **vendorisé** (standalone). Mais il tourne via
> `@angular/compiler-cli`, qui **exige TS 6.0** — même blocage que ng-packagr
> (§4). Donc : en monorepo (TS 5.9.3) on garde le gate racine actif ; à
> l'extraction + bump TS6, on ajoute le script npm `lint:templates` + la devDep
> `@angular/compiler-cli` et il devient l'actif.

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

- [x] **Bump TS 6.0.x. ✅ FAIT (2026-07-23).** `typescript ~6.0.3` ;
      `typescript-eslint` 8.65 supporte TS6 sans warning. **Toutes les gates
      repassées vertes** : `tsc` 0, `vitest` 472/472, `eslint` 0, `vite build`
      gallery `✓ built`, `strictTemplates` clean. Le blocage `ng-packagr` a
      disparu.
- [ ] **`ng-packagr`** : `ng-package.json` = `{ "dest":"dist", "lib":{ "entryFile":"src/index.ts" } }` + `tsconfig.lib.json` (`compilationMode:"partial"`, include `src/**`, exclude
      specs + `dev`).
- [ ] **Assets tokens CSS** : le `dist/package.json` généré **ne porte pas** les
      exports `./tokens.css` custom → copier `src/tokens/*.css` en assets et
      **réinjecter** ces `exports` dans le `dist/package.json` au publish.
- [ ] **`npm publish --provenance`** depuis `dist/` (badge verified + signal
      supply-chain lu par Socket/Snyk).

### 4.1 · Politique de versioning & dist-tags (ne pas polluer `latest`)

Publier souvent **ne pénalise pas** la découverte — la recency **aide** le score
« maintenance » de npm. Le seul vrai risque = laisser `latest` pointer une bêta
jetable. Règles :

- [ ] **Bêtas sous un canal, jamais en `latest`.** `npm publish --tag beta` (ou
      `next`). `latest` reste sur la dernière version assumée ; `npm install fold-ng`
      sert le stable, les bêtas sont opt-in (`fold-ng@beta`). **C'est le point qui
      protège la vitrine.**
- [ ] **Semver correct — pas de train `0.0.x` infini** (lit « pré-alpha »).
      Utiliser de **vrais identifiants pré-release** : `0.1.0-beta.1` → `0.1.0-beta.2`
      → `0.1.0` (stable), ou des **minor bumps** (`0.1.0`, `0.2.0`). Chaque numéro
      publié est **immuable** (unpublish restreint après 72 h / avec dépendants) —
      les `0.0.x` grillés restent dans l'historique.
- [ ] **`latest` → `1.0.0` seulement quand `RELEASE-READINESS.md` est tout-vert.**
      Avant ça, `latest` = le dernier `0.x` stable ; le `-beta.n` reste sur `beta`.
- [ ] **Ranger après coup** : `npm deprecate "fold-ng@0.1.0-beta.1" "early beta — use latest"`
      marque les vieilles bêtas sans les supprimer (liste propre, zéro pénalité).
- [ ] **Bonus** : les installs réelles (dont l'app) comptent en « popularity ».

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
- **Dev/itération — ne PAS brûler de versions npm publiques.** Pendant la bêta,
  shepherd consomme la lib **en local** (`pnpm.overrides` → `"fold-ng": "file:../fold-ng"`,
  ou `pnpm link`) : on itère lib + app sans publier. On ne pousse en public **que**
  les jalons assumés — et ces jalons pré-release vont sur le canal `beta`
  (`--tag beta`, cf. §4.1), pas sur `latest`. Si shepherd doit vraiment consommer
  du publié pendant la bêta : `pnpm add fold-ng@beta` (opt-in explicite).
- **Décider la cadence** : l'app suit-elle `latest` ou une version épinglée ?
  **Épinglée** (`fold-ng@0.1.0`) + bump volontaire = plus sûr pour une app de prod ;
  jamais un range flou qui aspirerait une bêta.
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
