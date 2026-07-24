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

One command, from `main`:

```bash
pnpm release:patch     # 0.1.0 → 0.1.1   a fix
pnpm release:minor     # 0.1.0 → 0.2.0   a feature (back-compatible)
pnpm release:major     # 0.1.0 → 1.0.0   a breaking change
pnpm release:beta      # 0.1.0 → 0.1.1-beta.0   WIP cut → the `beta` dist-tag
```

The script ([`scripts/release.mjs`](../scripts/release.mjs)):

1. **Guards** — refuses unless you're on `main`, the tree is clean, and local
   `main` is in sync with `origin/main`. (Releases come **only from `main`** —
   `release.yml` also rejects a tag whose commit isn't on `main`.)
2. **Bumps** `package.json` to the next version.
3. **Stamps the changelog** — moves `[Unreleased]` to `[x.y.z] - <today>` and
   resets `[Unreleased]`. If `[Unreleased]` was empty it asks for a one-line
   summary (blank → links to the GitHub release).
4. **Shows a preview and asks to confirm** (a published version is immutable).
5. On yes: **commits, tags `vx.y.z`, and pushes `main` + the tag.**

Pushing the tag fires [`release.yml`](../.github/workflows/release.yml), which —
only if everything is green:

- checks the tag matches `package.json`;
- runs the full gate — `eslint` · `tsc` · `strictTemplates` · `vitest`;
- builds + re-verifies the artifact (`ng-packagr`, `publint`, `arethetypeswrong`);
- **`npm publish`** to `latest` (or `beta` for a `-…` version), via OIDC + provenance;
- opens a GitHub Release with auto-generated notes.

No manual `npm version`, tag, or `npm publish`. Just write your changelog notes
under `[Unreleased]` as you work, then `pnpm release:<type>` when it's time.

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
- **`pnpm run deprecate 0.2.0 "broken — use 0.2.1"`** to warn installers
  (wraps `npm deprecate` with a confirm + your 2FA prompt; `--undo` lifts it);
- move `latest` back if needed: `npm dist-tag add fold-ng@0.1.0 latest`.

`npm unpublish` is restricted (72h window, no dependents) — treat publish as
final and prefer a forward fix.
