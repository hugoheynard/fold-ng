import { PUBLISHED_VERSION } from "./changelog.generated";

/** The semver core (`x.y.z`) of a version, ignoring any prerelease suffix. */
function core(v: string): [number, number, number] {
  const [maj, min, pat] = (v.split("-")[0] ?? v).split(".");
  return [Number(maj ?? 0), Number(min ?? 0), Number(pat ?? 0)];
}

/** `a > b` by semver. */
export function semverGt(a: string, b: string): boolean {
  const [aj, an, ap] = core(a);
  const [bj, bn, bp] = core(b);
  if (aj !== bj) {
    return aj > bj;
  }
  if (an !== bn) {
    return an > bn;
  }
  return ap > bp;
}

/**
 * A component is "in dev" when the version it first ships in is above npm's
 * current `latest` — i.e. it exists on this branch but is not published yet.
 * Derived from {@link PUBLISHED_VERSION} (regenerated from the CHANGELOG), so it
 * clears itself the moment that release is cut. Nothing is flagged by hand.
 */
export function isInDev(since: string | undefined): boolean {
  return since !== undefined && semverGt(since, PUBLISHED_VERSION);
}

export { PUBLISHED_VERSION };
