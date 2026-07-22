// Public TypeScript API for fold-ng.
//
// The tokens themselves ship as CSS (import 'fold-ng/tokens.css').
// This entry point exposes the typed token catalogue + helpers so call
// sites get autocomplete and a compile error on a misspelt token.

export { FoldAppShellComponent } from "./components/app-shell/app-shell.component";
export {
  FoldAvatarComponent,
  type FoldAvatarVariant,
  type FoldAvatarRing,
  type FoldAvatarRingStyle,
} from "./components/avatar/avatar.component";
export { FoldAvatarDetailComponent } from "./components/avatar-detail/avatar-detail.component";
export {
  FoldAvatarListComponent,
  type FoldAvatarListItem,
} from "./components/avatar-list/avatar-list.component";
export {
  FoldBadgeComponent,
  type FoldBadgeVariant,
} from "./components/badge/badge.component";
export { FoldButtonComponent } from "./components/button/button.component";
export type {
  FoldButtonVariant,
  FoldButtonSize,
  FoldButtonShape,
} from "./components/button/button.types";
export { FoldButtonIconComponent } from "./components/button-icon/button-icon.component";
export type {
  FoldButtonIconShape,
  FoldButtonIconSize,
  FoldButtonIconTone,
} from "./components/button-icon/button-icon.types";
export { FoldCardComponent } from "./components/card/card.component";
export { FoldContextCardComponent } from "./components/context-card/context-card.component";
export { FoldElementTitleComponent } from "./components/element-title/element-title.component";
export { FoldFileDropzoneComponent } from "./components/file-dropzone/file-dropzone.component";
export { FoldFieldListComponent } from "./components/field/field-list.component";
export { FoldFieldComponent } from "./components/field/field.component";
export { FoldLinkComponent } from "./components/link/link.component";
export { FoldMenuComponent } from "./components/menu/menu.component";
export type {
  FoldMenuTint,
  FoldMenuTogglePlacement,
  FoldMenuLevel,
} from "./components/menu/menu.component";
export {
  FoldMenuItemComponent,
  type FoldMenuItemBadgeTone,
} from "./components/menu/menu-item.component";
export { FoldMenuSeparatorComponent } from "./components/menu/menu-separator.component";
export { FoldMenuSectionComponent } from "./components/menu/menu-section.component";
export { FoldNavLauncherComponent } from "./components/nav-launcher/nav-launcher.component";
export { FoldNavTileComponent } from "./components/nav-launcher/nav-tile.component";
export { FoldHeroComponent } from "./components/hero/hero.component";
export { FoldDataTableComponent } from "./components/data-table/data-table.component";
export { FoldDataTableCellDirective } from "./components/data-table/data-table-cell.directive";
export {
  FoldStickyColumnDirective,
  type FoldStickyColumnAnchor,
} from "./directives/sticky-column.directive";
export type {
  FoldTableColumn,
  FoldTableEmpty,
  FoldTableSort,
  FoldTableSortDir,
  FoldTableTone,
} from "./components/data-table/data-table.types";
export { FoldChoiceRowComponent } from "./components/choice-row/choice-row.component";
export type { FoldChoiceOption } from "./components/choice-row/choice-row.component";
export { FoldIconComponent } from "./components/icon/icon.component";
export { FoldIdService } from "./a11y/id.service";
export { FoldFieldIdDirective } from "./a11y/field-id.directive";
export { FoldRepeatPressDirective } from "./directives/repeat-press.directive";
export { observeElementWidth } from "./dom/observe-element-width";
export { FoldSurfaceDirective } from "./directives/surface.directive";
export type { FoldSurfaceName } from "./directives/surface.directive";
export { FoldElevatedDirective } from "./directives/elevated.directive";
export { FoldInputComponent } from "./components/input/input.component";
export {
  FoldNumberInputComponent,
  type FoldNumberSpinner,
  type FoldNumberControls,
} from "./components/input/number-input.component";
export { FoldSearchComponent } from "./components/input/search.component";
export { FoldSelectComponent } from "./components/input/select.component";
export { FoldSliderComponent } from "./components/slider/slider.component";
export { FoldRangeSliderComponent } from "./components/slider/range-slider.component";
export type { FoldRangeValue } from "./components/slider/range-slider.component";
export { FoldCalloutComponent } from "./components/callout/callout.component";
export type {
  FoldCalloutVariant,
  FoldCalloutAppearance,
} from "./components/callout/callout.component";
export { FoldDisclosureComponent } from "./components/disclosure/disclosure.component";
export { FoldStatusBadgeComponent } from "./components/status-badge/status-badge.component";
export { FoldTimelineComponent } from "./components/timeline/timeline.component";
export type {
  FoldTimelineNode,
  FoldTimelineDatePlacement,
} from "./components/timeline/timeline.component";
export { FoldLoadingStateComponent } from "./components/state/loading-state.component";
export { FoldEmptyStateComponent } from "./components/state/empty-state.component";
export type { FoldIconSize } from "./components/icon/icon.component";
export {
  FoldIconRegistry,
  provideFoldIcons,
} from "./components/icon/icon-registry.service";
export type { FoldIconSet } from "./components/icon/icon-registry.service";
export { FOLD_BUILTIN_ICONS } from "./components/icon/icon.registry";
export type {
  FoldIconName,
  FoldBuiltinIconName,
} from "./components/icon/icon.registry";
export { FoldAsideLayoutComponent } from "./components/page/aside-layout.component";
export { FoldTabLayoutComponent } from "./components/page/tab-layout.component";
export { FoldPageLayoutComponent } from "./components/page/page-layout.component";
export { FoldPageSectionComponent } from "./components/page/page-section.component";
export { FoldPaginatorComponent } from "./components/paginator/paginator.component";
export type { FoldPageItem } from "./components/paginator/paginator.component";
export { FoldTabNavComponent } from "./components/tab-nav/tab-nav.component";
export type { FoldTabNavItem } from "./components/tab-nav/tab-nav.component";
export { FoldToastComponent } from "./components/toast/toast.component";
export { FoldToastContainerComponent } from "./components/toast/toast-container.component";
export { FoldToastService } from "./components/toast/toast.service";
export {
  provideFoldToasts,
  FOLD_TOAST_CONFIG,
} from "./components/toast/toast.config";
export type { FoldToastConfig } from "./components/toast/toast.config";
export type {
  FoldToast,
  FoldToastVariant,
} from "./components/toast/toast.types";

// ── Panels (overlay system) ──────────────────────────────────
export { FoldPanelHostComponent } from "./panel/panel-host.component";
export { FoldPanelHeaderComponent } from "./panel/panel-header.component";
export { FoldPanelHostService } from "./panel/panel-host.service";
export { FoldPanelRef } from "./panel/panel-ref";
export { FoldPanelToggle } from "./panel/panel-toggle";
export { FoldPanelComponentOutletDirective } from "./panel/panel-component-outlet.directive";
export type {
  FoldPanelSide,
  FoldPanelContent,
  FoldPanelConfig,
  FoldPanelHandle,
  FoldPanelDescriptor,
  FoldTemplatePanelDescriptor,
  FoldComponentPanelDescriptor,
} from "./panel/panel.types";

// NB: FocusTrapDirective + ScrollLockService stay package-internal — the panel
// host is their only consumer. Promote to the public API when one appears.

// ── Auto-colour (categorical palettes + the app-wide registry) ─
export {
  FoldPaletteRegistry,
  provideFoldPalette,
  FOLD_PALETTE_DEFAULT,
} from "./color/palette-registry.service";
export {
  FOLD_AUTO_PALETTES,
  foldHashSeed,
  foldResolvePalette,
} from "./color/palettes";
export type { FoldAutoPaletteName, FoldPaletteInput } from "./color/palettes";

export {
  FOLD_SEMANTIC_COLOR_TOKENS,
  FOLD_RADIUS_TOKENS,
  FOLD_TEXT_TOKENS,
  FOLD_SPACE_TOKENS,
  FOLD_MOTION_TOKENS,
  FOLD_BLUR_TOKENS,
  FOLD_SHADOW_TOKENS,
  foldColorProperty,
  foldColorVar,
  foldRadiusVar,
  foldTextVar,
  foldSpaceVar,
  foldMotionVar,
  foldBlurVar,
  foldShadowVar,
} from "./tokens/tokens.catalog";
export type {
  FoldSemanticColorToken,
  FoldRadiusToken,
  FoldTextToken,
  FoldSpaceToken,
  FoldMotionToken,
  FoldBlurToken,
  FoldShadowToken,
} from "./tokens/tokens.catalog";
