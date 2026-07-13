// Public TypeScript API for @sh3pherd/ui.
//
// The tokens themselves ship as CSS (import '@sh3pherd/ui/tokens.css').
// This entry point exposes the typed token catalogue + helpers so call
// sites get autocomplete and a compile error on a misspelt token.

export { AppShellComponent } from "./components/app-shell/app-shell.component";
export { AvatarComponent } from "./components/avatar/avatar.component";
export { AvatarDetailComponent } from "./components/avatar-detail/avatar-detail.component";
export { BadgeComponent } from "./components/badge/badge.component";
export { CardComponent } from "./components/card/card.component";
export { ChoiceRowComponent } from "./components/choice-row/choice-row.component";
export type { ChoiceOption } from "./components/choice-row/choice-row.component";
export { IconComponent } from "./components/icon/icon.component";
export type { Sh3IconSize } from "./components/icon/icon.component";
export {
  IconRegistry,
  provideIcons,
} from "./components/icon/icon-registry.service";
export type { IconSet } from "./components/icon/icon-registry.service";
export { SH3_BUILTIN_ICONS } from "./components/icon/icon.registry";
export type {
  Sh3IconName,
  Sh3BuiltinIconName,
} from "./components/icon/icon.registry";
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

// ── Auto-colour (categorical palettes + the app-wide registry) ─
export {
  PaletteRegistry,
  providePalette,
  PALETTE_DEFAULT,
} from "./color/palette-registry.service";
export { AUTO_PALETTES, hashSeed, resolvePalette } from "./color/palettes";
export type { AutoPaletteName, PaletteInput } from "./color/palettes";

export {
  SH3_SEMANTIC_COLOR_TOKENS,
  SH3_RADIUS_TOKENS,
  SH3_TEXT_TOKENS,
  SH3_SPACE_TOKENS,
  SH3_MOTION_TOKENS,
  SH3_BLUR_TOKENS,
  sh3ColorProperty,
  sh3ColorVar,
  sh3RadiusVar,
  sh3TextVar,
  sh3SpaceVar,
  sh3MotionVar,
  sh3BlurVar,
} from "./tokens/tokens.catalog";
export type {
  Sh3SemanticColorToken,
  Sh3RadiusToken,
  Sh3TextToken,
  Sh3SpaceToken,
  Sh3MotionToken,
  Sh3BlurToken,
} from "./tokens/tokens.catalog";
