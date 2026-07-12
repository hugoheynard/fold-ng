// Public TypeScript API for @sh3pherd/ui.
//
// The tokens themselves ship as CSS (import '@sh3pherd/ui/tokens.css').
// This entry point exposes the typed token catalogue + helpers so call
// sites get autocomplete and a compile error on a misspelt token.

export { BadgeComponent } from "./components/badge/badge.component";
export { ChoiceRowComponent } from "./components/choice-row/choice-row.component";
export type { ChoiceOption } from "./components/choice-row/choice-row.component";
export { TabNavComponent } from "./components/tab-nav/tab-nav.component";
export type { TabNavItem } from "./components/tab-nav/tab-nav.component";

export {
  SH3_SEMANTIC_COLOR_TOKENS,
  SH3_RADIUS_TOKENS,
  SH3_TEXT_TOKENS,
  sh3ColorProperty,
  sh3ColorVar,
  sh3RadiusVar,
  sh3TextVar,
} from "./tokens/tokens.catalog";
export type {
  Sh3SemanticColorToken,
  Sh3RadiusToken,
  Sh3TextToken,
} from "./tokens/tokens.catalog";
