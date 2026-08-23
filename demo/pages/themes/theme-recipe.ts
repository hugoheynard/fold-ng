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
 * hit) while building bubbly and navi — a rule with a scar is worth
 * ten rules without one.
 */
export const THEME_STEPS: readonly ThemeStep[] = [
  {
    title: "Start from the closest base, not from zero",
    body: 'A theme is a diff. Copy the block whose light/dark polarity you already want — :root (umbra) or [data-theme="lumen"] — and change what must differ. Writing 40 roles from scratch guarantees you forget three.',
    example:
      "bubbly is the lumen block with two families swapped (cloud→bubble, teal→grape) and two reused (slate for text, azure for info). It invented no role.",
  },
  {
    title: "Re-point families, not roles",
    body: "Roles come in families (chrome, brand, text, one per status). Decide the family, then substitute it everywhere — the role-by-role pass is where inconsistencies enter.",
    example:
      "bubbly's brand move, in full: teal→grape across every primary role, not one at a time.",
    code: `/* the whole brand move, not one role at a time */
--fold-color-primary:        var(--fold-ref-grape-500);
--fold-color-primary-strong: var(--fold-ref-grape-600);
--fold-color-primary-text:   var(--fold-ref-grape-700);
--fold-color-primary-surface: color-mix(in srgb, var(--fold-ref-grape-500) 12%, transparent);`,
  },
  {
    title: "Keep the chrome descent short",
    body: "Header, rail 2, rail 1 should read as one colour at three depths. Push the darkest too far and the hue drains out — the rails go black and only the lightest surface still looks like your brand.",
    example:
      "navi first shipped rails at 950/975: they read as charcoal, and the header looked like a different colour rather than the same graphite, lighter. Rails at 900/850 under a 950 header fixed it.",
  },
  {
    title: "Check the brand twice — on the page and on the chrome",
    body: "A brand colour chosen against the page can be invisible against the rails. If your theme mixes a light page with dark chrome, the chrome needs its own values for the whole brand — the solid included, not just its tints.",
    example:
      "navi's active menu icon tints with `primary` directly. The page's signal-600 on a dark rail was dark on dark; the chrome flips the whole family to the light pair — and takes `on-primary` with it, which is the half that used to be forgotten: a solid button then wore the page's white ink on the chrome's lighter fill, at 3.9:1. It targets [data-surface=\"chrome\"] — the contract the shell opts into — not the shell's class names.",
    code: `[data-theme="navi"] [data-surface="chrome"] {
  --fold-color-primary: var(--fold-ref-signal-300);
  --fold-color-primary-strong: var(--fold-ref-signal-200);
  --fold-color-on-primary: var(--fold-ref-graphite-950);
  --fold-color-primary-text: var(--fold-ref-signal-200);
}`,
  },
  {
    title: "Move a status family that collides with the brand",
    body: "Status colours must stay distinguishable from the brand at a glance. If the brand lands on a status family's hue, move the status — never the meaning.",
    example:
      "bubbly's violet grape brand would have sat on top of the purple info family, so info moved to cyan (azure). Warning stayed amber, alert stayed red: only the collision moved.",
  },
  {
    title: "Re-tune the text ramp for the new ground",
    body: "Text values are relative to what they sit on. A lighter or more saturated background makes the same greys read dimmer — borrowed ramps land wrong even when the hex is identical.",
    example:
      "navi borrowed umbra's ramp; on graphite (lighter and bluer than ink) `text-faded` fell near 2:1 on the expanded rail. Both grounds now carry their own four-step ramp — navyink on the chrome, slate on the page.",
  },
  {
    title: "Change shape only if it means something",
    body: "Radius and elevation are the two scales a theme may re-declare. The line is not that one scale is special: a theme may change what a surface LOOKS like, never where it SITS. Neither corners nor shadows move a box. Type, space and motion stay invariant — those re-flow or re-time a page.",
    example:
      "navi squares its corners (1–4px) to read institutional. pill and round stay: they are shapes, not steps — flattening them turns avatars into squares.",
    code: `[data-theme="navi"] {
  --fold-radius-xs: 1px;
  --fold-radius-sm: 2px;
  --fold-radius-md: 3px;
  --fold-radius-lg: 4px;
}`,
  },
  {
    title: "Mix flat and elevated on purpose",
    body: "Elevation is a per-region choice, not a theme-wide switch. Decide which surfaces earn a shadow and which stay flat — answering uniformly either floats everything into soup or flattens the hierarchy away. Borders are the same call: an alpha hairline whispers, a solid line shouts. And the strongest depth cue is free — a light ground under a bright surface lifts it on the shared shadow, no per-theme shadow (which the contract forbids anyway).",
    example:
      "titan keeps the header flat at the page tint (a frameless top) but floats both rails (foldElevated) into brushed-steel plates over the light ground. Its borders re-point to a SOLID steel primitive, not the alpha hairline the light themes share, so every panel edge reads as a machined seam.",
    code: `titan: { elevated: ["railPrimary", "railSecondary"] } /* rails float */
--fold-color-border: var(--fold-ref-steel-300);      /* solid seam, not alpha */`,
  },
  {
    title: "Let the contract test finish the job",
    body: "Three failures are caught for you: a theme missing any catalogue role, a semantic value carrying a literal hex, and a primitive declared but never used. Run the suite before judging the result by eye.",
    example:
      "The dead-primitive check is the useful one in practice — it caught navy-975 the moment navi's rails moved up and left it with no consumer.",
    code: "pnpm --filter fold-ng test",
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
