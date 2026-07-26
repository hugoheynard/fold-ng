import { InjectionToken, type Provider } from "@angular/core";

/**
 * Every user-facing / accessible string the inline-confirm renders. The
 * `typePrompt` is a function of the value to match, so a locale can reword the
 * whole sentence rather than translate a fixed template. All defaults are
 * English — a non-English app overrides them once via
 * {@link provideFoldInlineConfirmLabels}, or per instance via the `labels` input.
 */
export interface FoldInlineConfirmLabels {
  /** Label of the confirm button. */
  readonly confirm: string;
  /** Label of the cancel button. */
  readonly cancel: string;
  /** `aria-label` of the icon-only cancel button (`cancelIcon`). */
  readonly cancelAria: string;
  /** Confirm-button label while `loading`. */
  readonly busy: string;
  /** Accessible name of the confirmation group that replaces the trigger. */
  readonly group: string;
  /** Placeholder + prompt for the secret field (`password`, no `match`). */
  readonly secret: string;
  /** The type-to-confirm prompt, e.g. `("prod") => "Type prod to confirm"`. */
  readonly typePrompt: (match: string) => string;
}

/** The English defaults — the base every override merges onto. */
export const FOLD_INLINE_CONFIRM_DEFAULT_LABELS: FoldInlineConfirmLabels = {
  confirm: "Confirm",
  cancel: "Cancel",
  cancelAria: "Cancel",
  busy: "Working…",
  group: "Confirm action",
  secret: "Password",
  typePrompt: (match) => `Type ${match} to confirm`,
};

/** App-wide inline-confirm labels; defaults to English. */
export const FOLD_INLINE_CONFIRM_LABELS =
  new InjectionToken<FoldInlineConfirmLabels>("FOLD_INLINE_CONFIRM_LABELS", {
    factory: () => FOLD_INLINE_CONFIRM_DEFAULT_LABELS,
  });

/**
 * Provide app-wide inline-confirm labels once at bootstrap. Partial — any key
 * you omit keeps its English default.
 *
 * @example
 * ```ts
 * // app.config.ts
 * providers: [
 *   provideFoldInlineConfirmLabels({
 *     confirm: "Confirmer",
 *     cancel: "Annuler",
 *     typePrompt: (m) => `Saisissez ${m} pour confirmer`,
 *   }),
 * ];
 * ```
 */
export function provideFoldInlineConfirmLabels(
  labels: Partial<FoldInlineConfirmLabels>,
): Provider {
  return {
    provide: FOLD_INLINE_CONFIRM_LABELS,
    useValue: { ...FOLD_INLINE_CONFIRM_DEFAULT_LABELS, ...labels },
  };
}
