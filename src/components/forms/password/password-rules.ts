/**
 * One password requirement shown as a live-validating dot in
 * {@link FoldPasswordFieldComponent}. The predicate is deliberately just a
 * function, so any validation style drops in:
 *
 * - **regex** — `foldRegexRule('An uppercase letter', /[A-Z]/)`, or inline
 *   `{ label, test: (v) => /\d/.test(v) }`.
 * - **zod** (no dependency added here) —
 *   `{ label: 'Valid', test: (v) => schema.safeParse(v).success }`.
 * - **anything** — length, an entropy score, a server-known blocklist, …
 */
export interface FoldPasswordRule {
  /** Human-readable requirement, e.g. "At least 8 characters". */
  readonly label: string;
  /** Passes when the value satisfies the rule. */
  readonly test: (value: string) => boolean;
}

/** Build a rule from a `RegExp` — the common case. */
export function foldRegexRule(
  label: string,
  pattern: RegExp,
): FoldPasswordRule {
  return { label, test: (value) => pattern.test(value) };
}

/**
 * A sensible default policy (English labels): 8+ characters, an uppercase and a
 * lowercase letter, and a digit. Override via the `rules` input for a different
 * policy or localised labels.
 */
export function foldDefaultPasswordRules(): readonly FoldPasswordRule[] {
  return [
    { label: "At least 8 characters", test: (v) => v.length >= 8 },
    foldRegexRule("An uppercase letter", /[A-Z]/),
    foldRegexRule("A lowercase letter", /[a-z]/),
    foldRegexRule("A number", /\d/),
  ];
}
