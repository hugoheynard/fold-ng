// Public TypeScript API for @sh3pherd/ui.
//
// The tokens themselves ship as CSS (import '@sh3pherd/ui/tokens.css').
// This entry point exposes the typed token catalogue + helpers so call
// sites get autocomplete and a compile error on a misspelt token.

export { AppShellComponent } from "./components/app-shell/app-shell.component";
export { BadgeComponent } from "./components/badge/badge.component";
export { CardComponent } from "./components/card/card.component";
export { ChoiceRowComponent } from "./components/choice-row/choice-row.component";
export type { ChoiceOption } from "./components/choice-row/choice-row.component";
export { PageLayoutComponent } from "./components/page/page-layout.component";
export { PageSectionComponent } from "./components/page/page-section.component";
export { TabNavComponent } from "./components/tab-nav/tab-nav.component";
export type { TabNavItem } from "./components/tab-nav/tab-nav.component";
export { ToastContainerComponent } from "./components/toast/toast-container.component";
export { ToastService } from "./components/toast/toast.service";
export type { Toast, ToastVariant } from "./components/toast/toast.service";

// ── Panels (overlay system) ──────────────────────────────────
export { PanelHostComponent } from "./panel/panel-host.component";
export { PanelHostService } from "./panel/panel-host.service";
export { PanelRef } from "./panel/panel-ref";
export { PanelToggle } from "./panel/panel-toggle";
export { PanelComponentOutletDirective } from "./panel/panel-component-outlet.directive";
export type {
  PanelSide,
  PanelContent,
  PanelConfig,
  PanelHandle,
  PanelDescriptor,
  TemplatePanelDescriptor,
  ComponentPanelDescriptor,
} from "./panel/panel.types";

// NB: FocusTrapDirective + ScrollLockService stay package-internal — the panel
// host is their only consumer. Promote to the public API when one appears.

export {
  SH3_SEMANTIC_COLOR_TOKENS,
  SH3_RADIUS_TOKENS,
  SH3_TEXT_TOKENS,
  SH3_BLUR_TOKENS,
  sh3ColorProperty,
  sh3ColorVar,
  sh3RadiusVar,
  sh3TextVar,
  sh3BlurVar,
} from "./tokens/tokens.catalog";
export type {
  Sh3SemanticColorToken,
  Sh3RadiusToken,
  Sh3TextToken,
  Sh3BlurToken,
} from "./tokens/tokens.catalog";
