/** One step of the "how to design a theme" guide on `/themes`. */
export interface ThemeStep {
  readonly title: string;
  /** Why the step exists — the rule. */
  readonly body: string;
  /** What it looked like on a theme we actually built. */
  readonly example: string;
  readonly code?: string;
}

/**
 * The authoring guide, as data. Every example is a decision taken (or a bug
 * hit) while building midnight, sepia and navi — a rule with a scar is worth
 * ten rules without one.
 */
export const THEME_STEPS: readonly ThemeStep[] = [
  {
    title: "Start from the closest base, not from zero",
    body: 'A theme is a diff. Copy the block whose light/dark polarity you already want — :root (umbra) or [data-theme="light"] — and change what must differ. Writing 40 roles from scratch guarantees you forget three.',
    example:
      "midnight is umbra with four families swapped; sepia is light with three. Neither invented a role.",
  },
  {
    title: "Re-point families, not roles",
    body: "Roles come in families (chrome, brand, text, one per status). Decide the family, then substitute it everywhere — the role-by-role pass is where inconsistencies enter.",
    example:
      "midnight, in full: ink→void, teal→iris, slate→mist, purple→azure.",
    code: `/* the whole brand move, not one role at a time */
--sh3-color-primary:        var(--sh3-ref-iris-500);
--sh3-color-primary-strong: var(--sh3-ref-iris-400);
--sh3-color-primary-text:   var(--sh3-ref-iris-400);
--sh3-color-primary-surface: color-mix(in srgb, var(--sh3-ref-iris-500) 14%, transparent);`,
  },
  {
    title: "Keep the chrome descent short",
    body: "Header, rail 2, rail 1 should read as one colour at three depths. Push the darkest too far and the hue drains out — the rails go black and only the lightest surface still looks like your brand.",
    example:
      "navi first shipped rails at 950/975: they read as charcoal, and the header looked like a different colour rather than the same navy, lighter. 900/850 under an 800 header fixed it.",
  },
  {
    title: "Check the brand twice — on the page and on the chrome",
    body: "A brand colour chosen against the page can be invisible against the rails. If your theme mixes a light page with dark chrome, the chrome needs its own values for the whole brand — the solid included, not just its tints.",
    example:
      "navi's active menu icon tints with `primary` directly. The page's navy-500 on a near-black rail was dark on dark; the chrome flips primary/strong/text to 400/300. It targets [data-surface=\"chrome\"] — the contract the shell opts into — not the shell's class names.",
    code: `[data-theme="navi"] [data-surface="chrome"] {
  --sh3-color-primary: var(--sh3-ref-navy-400);
  --sh3-color-primary-strong: var(--sh3-ref-navy-300);
  --sh3-color-primary-text: var(--sh3-ref-navy-300);
}`,
  },
  {
    title: "Move a status family that collides with the brand",
    body: "Status colours must stay distinguishable from the brand at a glance. If the brand lands on a status family's hue, move the status — never the meaning.",
    example:
      "midnight's violet brand sat on top of the purple info family, so info moved to cyan (azure). Warning stayed amber, alert stayed red: only the collision moved.",
  },
  {
    title: "Re-tune the text ramp for the new ground",
    body: "Text values are relative to what they sit on. A lighter or more saturated background makes the same greys read dimmer — borrowed ramps land wrong even when the hex is identical.",
    example:
      "navi borrowed umbra's ramp; on navy (lighter and bluer than ink) `text-faded` fell near 2:1 on the expanded rail. The whole ramp moved up one step, keeping four distinct levels.",
  },
  {
    title: "Change shape only if it means something",
    body: "Radius is the one scale a theme may re-declare, because corner softness is a brand axis and the only scale that moves no box. Type, space, motion and elevation stay invariant — retheming must never re-flow a page.",
    example:
      "navi squares its corners (1–4px) to read institutional. pill and round stay: they are shapes, not steps — flattening them turns avatars into squares.",
    code: `[data-theme="navi"] {
  --sh3-radius-xs: 1px;
  --sh3-radius-sm: 2px;
  --sh3-radius-md: 3px;
  --sh3-radius-lg: 4px;
}`,
  },
  {
    title: "Let the contract test finish the job",
    body: "Three failures are caught for you: a theme missing any catalogue role, a semantic value carrying a literal hex, and a primitive declared but never used. Run the suite before judging the result by eye.",
    example:
      "The dead-primitive check is the useful one in practice — it caught navy-975 the moment navi's rails moved up and left it with no consumer.",
    code: "pnpm --filter @sh3pherd/ui test",
  },
];

/** Quick self-checks once the theme renders. */
export const THEME_SMELLS: readonly string[] = [
  "A surface you cannot name a role for — you are painting, not theming.",
  "Two chrome surfaces you cannot tell apart side by side: cut one.",
  "A status chip that reads as the brand, or vice versa.",
  "Muted text you have to lean in to read: the ramp is borrowed, not tuned.",
  "A component that looks right only in your theme — it is naming a primitive.",
];
