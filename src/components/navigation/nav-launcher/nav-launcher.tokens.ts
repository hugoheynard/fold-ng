import { InjectionToken, type Signal } from "@angular/core";

/**
 * What a {@link FoldNavGroupComponent} needs from the launcher above it.
 *
 * A token rather than the component class, for one reason: the launcher queries
 * its groups (`contentChildren`) and a group asks the launcher to descend. Typed
 * against the classes, that is an import cycle. The token is the seam — it names
 * the two verbs and nothing else, so neither file imports the other.
 */
export interface FoldNavLauncherHost {
  /** The id of the group currently open, or `null` at level 1. */
  readonly openGroupId: Signal<string | null>;
  /** Is the launcher mid-transition? A second tap during it must be ignored. */
  readonly busy: Signal<boolean>;
  /** Descend into a group. No-op while busy, or if the id is unknown. */
  drill(groupId: string): void;
  /** Climb back to level 1. */
  back(): void;
}

export const FOLD_NAV_LAUNCHER = new InjectionToken<FoldNavLauncherHost>(
  "FOLD_NAV_LAUNCHER",
);

/**
 * What a tile needs from the group it sits in — only "am I on the open sheet?".
 *
 * A projected tile resolves this through the element injector, which follows the
 * DECLARATION tree: the consumer writes its tiles inside `<fold-nav-group>`, so
 * they find the group. A tile written straight into the launcher finds nothing
 * and stays a square — which is exactly the distinction we want it to make.
 */
export interface FoldNavGroupContext {
  /** Is this group's sheet the one on screen? */
  readonly isOpen: Signal<boolean>;
}

export const FOLD_NAV_GROUP = new InjectionToken<FoldNavGroupContext>(
  "FOLD_NAV_GROUP",
);
