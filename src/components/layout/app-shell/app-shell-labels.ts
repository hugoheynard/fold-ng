import { InjectionToken, type Provider } from "@angular/core";

/**
 * Every user-facing string `fold-app-shell` renders on its own. Both are read
 * by assistive technology on every page — the skip-link is the first Tab stop —
 * so an app in another language must be able to set them once, not on each
 * shell. The `skipLinkLabel` / `drawerLabel` inputs still win per instance.
 */
export interface FoldAppShellLabels {
  /** Text of the skip-link that jumps past the rails to `<main>`. */
  readonly skipLink: string;
  /** Accessible name of the mobile drawer while it is open (a dialog). */
  readonly drawer: string;
}

/** The English defaults — the base every override merges onto. */
export const FOLD_APP_SHELL_DEFAULT_LABELS: FoldAppShellLabels = {
  skipLink: "Skip to content",
  drawer: "Menu",
};

/** App-wide app-shell labels; defaults to English. */
export const FOLD_APP_SHELL_LABELS = new InjectionToken<FoldAppShellLabels>(
  "FOLD_APP_SHELL_LABELS",
  { factory: () => FOLD_APP_SHELL_DEFAULT_LABELS },
);

/**
 * Provide app-wide app-shell labels once at bootstrap. Partial — any key you
 * omit keeps its English default.
 *
 * @example
 * ```ts
 * // app.config.ts
 * providers: [provideFoldAppShellLabels({ skipLink: "Aller au contenu" })];
 * ```
 */
export function provideFoldAppShellLabels(
  labels: Partial<FoldAppShellLabels>,
): Provider {
  return {
    provide: FOLD_APP_SHELL_LABELS,
    useValue: { ...FOLD_APP_SHELL_DEFAULT_LABELS, ...labels },
  };
}
