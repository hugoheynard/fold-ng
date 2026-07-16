// Public TypeScript API for @sh3pherd/ui.
//
// The tokens themselves ship as CSS (import '@sh3pherd/ui/tokens.css').
// This entry point exposes the typed token catalogue + helpers so call
// sites get autocomplete and a compile error on a misspelt token.

export { Sh3AppShellComponent } from "./components/app-shell/app-shell.component";
export {
  Sh3AvatarComponent,
  type Sh3AvatarVariant,
  type Sh3AvatarRing,
  type Sh3AvatarRingStyle,
} from "./components/avatar/avatar.component";
export { Sh3AvatarDetailComponent } from "./components/avatar-detail/avatar-detail.component";
export {
  Sh3AvatarListComponent,
  type Sh3AvatarListItem,
} from "./components/avatar-list/avatar-list.component";
export { Sh3BadgeComponent } from "./components/badge/badge.component";
export { Sh3ButtonComponent } from "./components/button/button.component";
export type {
  Sh3ButtonVariant,
  Sh3ButtonSize,
  Sh3ButtonShape,
} from "./components/button/button.types";
export { Sh3ButtonIconComponent } from "./components/button-icon/button-icon.component";
export type {
  Sh3ButtonIconShape,
  Sh3ButtonIconSize,
  Sh3ButtonIconTone,
} from "./components/button-icon/button-icon.types";
export { Sh3CardComponent } from "./components/card/card.component";
export { Sh3ContextCardComponent } from "./components/context-card/context-card.component";
export { Sh3ElementTitleComponent } from "./components/element-title/element-title.component";
export { Sh3LinkComponent } from "./components/link/link.component";
export { Sh3MenuComponent } from "./components/menu/menu.component";
export type {
  Sh3MenuTint,
  Sh3MenuTogglePlacement,
  Sh3MenuLevel,
} from "./components/menu/menu.component";
export { Sh3MenuItemComponent } from "./components/menu/menu-item.component";
export { Sh3MenuSeparatorComponent } from "./components/menu/menu-separator.component";
export { Sh3MenuSectionComponent } from "./components/menu/menu-section.component";
export { Sh3HeroComponent } from "./components/hero/hero.component";
export { Sh3DataTableComponent } from "./components/data-table/data-table.component";
export { Sh3DataTableCellDirective } from "./components/data-table/data-table-cell.directive";
export { Sh3StickyColumnDirective } from "./directives/sticky-column.directive";
export type {
  Sh3TableColumn,
  Sh3TableEmpty,
  Sh3TableSort,
  Sh3TableSortDir,
  Sh3TableTone,
} from "./components/data-table/data-table.types";
export { Sh3ChoiceRowComponent } from "./components/choice-row/choice-row.component";
export type { Sh3ChoiceOption } from "./components/choice-row/choice-row.component";
export { Sh3IconComponent } from "./components/icon/icon.component";
export { Sh3StatusBadgeComponent } from "./components/status-badge/status-badge.component";
export { Sh3LoadingStateComponent } from "./components/state/loading-state.component";
export { Sh3EmptyStateComponent } from "./components/state/empty-state.component";
export type { Sh3IconSize } from "./components/icon/icon.component";
export {
  Sh3IconRegistry,
  provideSh3Icons,
} from "./components/icon/icon-registry.service";
export type { Sh3IconSet } from "./components/icon/icon-registry.service";
export { SH3_BUILTIN_ICONS } from "./components/icon/icon.registry";
export type {
  Sh3IconName,
  Sh3BuiltinIconName,
} from "./components/icon/icon.registry";
export { Sh3PageLayoutComponent } from "./components/page/page-layout.component";
export { Sh3PageSectionComponent } from "./components/page/page-section.component";
export { Sh3PaginatorComponent } from "./components/paginator/paginator.component";
export type { Sh3PageItem } from "./components/paginator/paginator.component";
export { Sh3TabNavComponent } from "./components/tab-nav/tab-nav.component";
export type { Sh3TabNavItem } from "./components/tab-nav/tab-nav.component";
export { Sh3ToastComponent } from "./components/toast/toast.component";
export { Sh3ToastContainerComponent } from "./components/toast/toast-container.component";
export { Sh3ToastService } from "./components/toast/toast.service";
export {
  provideSh3Toasts,
  SH3_TOAST_CONFIG,
} from "./components/toast/toast.config";
export type { Sh3ToastConfig } from "./components/toast/toast.config";
export type { Sh3Toast, Sh3ToastVariant } from "./components/toast/toast.types";

// ── Panels (overlay system) ──────────────────────────────────
export { Sh3PanelHostComponent } from "./panel/panel-host.component";
export { Sh3PanelHeaderComponent } from "./panel/panel-header.component";
export { Sh3PanelHostService } from "./panel/panel-host.service";
export { Sh3PanelRef } from "./panel/panel-ref";
export { Sh3PanelToggle } from "./panel/panel-toggle";
export { Sh3PanelComponentOutletDirective } from "./panel/panel-component-outlet.directive";
export type {
  Sh3PanelSide,
  Sh3PanelContent,
  Sh3PanelConfig,
  Sh3PanelHandle,
  Sh3PanelDescriptor,
  Sh3TemplatePanelDescriptor,
  Sh3ComponentPanelDescriptor,
} from "./panel/panel.types";

// NB: FocusTrapDirective + ScrollLockService stay package-internal — the panel
// host is their only consumer. Promote to the public API when one appears.

// ── Auto-colour (categorical palettes + the app-wide registry) ─
export {
  Sh3PaletteRegistry,
  provideSh3Palette,
  SH3_PALETTE_DEFAULT,
} from "./color/palette-registry.service";
export {
  SH3_AUTO_PALETTES,
  sh3HashSeed,
  sh3ResolvePalette,
} from "./color/palettes";
export type { Sh3AutoPaletteName, Sh3PaletteInput } from "./color/palettes";

export {
  SH3_SEMANTIC_COLOR_TOKENS,
  SH3_RADIUS_TOKENS,
  SH3_TEXT_TOKENS,
  SH3_SPACE_TOKENS,
  SH3_MOTION_TOKENS,
  SH3_BLUR_TOKENS,
  SH3_SHADOW_TOKENS,
  sh3ColorProperty,
  sh3ColorVar,
  sh3RadiusVar,
  sh3TextVar,
  sh3SpaceVar,
  sh3MotionVar,
  sh3BlurVar,
  sh3ShadowVar,
} from "./tokens/tokens.catalog";
export type {
  Sh3SemanticColorToken,
  Sh3RadiusToken,
  Sh3TextToken,
  Sh3SpaceToken,
  Sh3MotionToken,
  Sh3BlurToken,
  Sh3ShadowToken,
} from "./tokens/tokens.catalog";
