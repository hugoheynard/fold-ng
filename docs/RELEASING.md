# Releasing fold-ng

**Publishing is opt-in.** Pushing to a branch never publishes to npm — only
pushing a **version tag** (`v*`) does. So you can push as many demo / doc /
component fixes to `main` as you like: they redeploy the Pages demo and nothing
else. npm moves only when you deliberately tag a release.

| You do                                | What happens                                                                                |
| ------------------------------------- | ------------------------------------------------------------------------------------------- |
| Push to `main` (fix, doc, component…) | [`pages.yml`](../.github/workflows/pages.yml) redeploys the demo. **No publish.**           |
| `git push origin v0.2.0`              | [`release.yml`](../.github/workflows/release.yml) → gates → build → **publish to `latest`** |
| `git push origin v0.2.0-beta.1`       | same, but **publish to the `beta` dist-tag** (never touches `latest`)                       |

## One-time setup

Publishing uses **npm Trusted Publishing (OIDC)** — no token, nothing to rotate.
npm trusts this exact repo + workflow and exchanges the run's OIDC identity for a
short-lived publish credential; provenance is generated automatically.

- [ ] **npm → package `fold-ng` → Settings → Trusted Publisher → GitHub Actions:**
  - Organization or user: `hugoheynard` · Repository: `fold-ng`
  - Workflow filename: `release.yml` · Environment: _(leave empty)_
  - Allowed actions: `npm publish`
- [ ] **npm → package → Settings → Publishing access:** _Require two-factor
      authentication and disallow tokens_ (recommended). Trusted publishing is
      OIDC, not a token, so it keeps working; this just blocks anything else.
- [ ] Nothing in GitHub to configure: `release.yml` already carries
      `id-token: write` (OIDC) + `contents: write` (the GitHub Release). **No
      `NPM_TOKEN` secret needed.**

## Cutting a release

Releases come **only from `main`** — `release.yml` rejects a tag whose commit
isn't on `main`. So the flow is always: land it on `main`, then tag.

1. **Bump the version and the changelog on `main`.**

   ```bash
   # edit docs/… if needed, then:
   npm version 0.2.0 --no-git-tag-version    # writes package.json
   # update CHANGELOG.md: move [Unreleased] → [0.2.0] - <today>, add the entry
   git commit -am "release: 0.2.0"
   git push origin main
   ```

   (A pre-release cut: `npm version 0.2.0-beta.1 --no-git-tag-version`.)

2. **Tag and push the tag** — this is the trigger:

   ```bash
   git tag v0.2.0
   git push origin v0.2.0
   ```

3. **`release.yml` runs** and, only if everything is green:
   - checks the tag matches `package.json` (a mistagged version fails fast);
   - runs the full gate — `eslint` · `tsc` · `strictTemplates` · `vitest`;
   - builds the publishable artifact (`ng-packagr` + `finalize-dist`) and
     re-verifies it (`publint` + `arethetypeswrong`);
   - `npm publish --provenance` to `latest` (or `beta` for a `-…` tag);
   - opens a GitHub Release with auto-generated notes.

That's it — no manual `npm publish`.

## Version & dist-tag policy

- **`latest` = the newest clean `0.x`.** Public releases are plain (`0.2.0`),
  never `-beta`-suffixed — a `^0.2.0` consumer would not match a pre-release, and
  a `-beta` on `latest` is confusing. Maturity is signalled by the `pre-1.0`
  badge + the `0.x` number, not by the version string.
- **The `beta` dist-tag = throwaway WIP cuts of the _next_ version**
  (`0.3.0-beta.1`), opt-in via `npm install fold-ng@beta`. Use it to test a
  change before promoting it to a `latest` release.
- **`1.0.0`** waits until every component in
  [`RELEASE-READINESS.md`](./RELEASE-READINESS.md) is 🟢🟢🟢. Freeze the API only
  when you are ready to owe semver: after 1.0, any breaking change is a major bump.
- Old betas: `npm deprecate "fold-ng@0.3.0-beta.1" "superseded — use latest"`
  keeps the version list clean (zero discoverability penalty).

## Rollback

A published version is **immutable** — you cannot overwrite `0.2.0`. If a
release is bad:

- ship a fix as `0.2.1` (the normal path);
- `npm deprecate "fold-ng@0.2.0" "broken — use 0.2.1"` to warn installers;
- move `latest` back if needed: `npm dist-tag add fold-ng@0.1.0 latest`.

`npm unpublish` is restricted (72h window, no dependents) — treat publish as
final and prefer a forward fix.
