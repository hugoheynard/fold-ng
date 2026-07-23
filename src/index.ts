// Public TypeScript API for fold-ng.
//
// The tokens themselves ship as CSS (import 'fold-ng/tokens.css').
// This entry point exposes the typed token catalogue + helpers so call
// sites get autocomplete and a compile error on a misspelt token.

export { FoldAppShellComponent } from "./components/layout/app-shell/app-shell.component";
export {
  FoldAvatarComponent,
  type FoldAvatarVariant,
  type FoldAvatarRing,
  type FoldAvatarRingStyle,
} from "./components/content/avatar/avatar.component";
export { FoldAvatarDetailComponent } from "./components/content/avatar-detail/avatar-detail.component";
export {
  FoldAvatarListComponent,
  type FoldAvatarListItem,
} from "./components/content/avatar-list/avatar-list.component";
export {
  FoldBadgeComponent,
  type FoldBadgeVariant,
} from "./components/content/badge/badge.component";
export { FoldButtonComponent } from "./components/actions/button/button.component";
export type {
  FoldButtonVariant,
  FoldButtonSize,
  FoldButtonShape,
} from "./components/actions/button/button.types";
export { FoldButtonIconComponent } from "./components/actions/button-icon/button-icon.component";
export type {
  FoldButtonIconShape,
  FoldButtonIconSize,
  FoldButtonIconTone,
} from "./components/actions/button-icon/button-icon.types";
export { FoldToggleIconComponent } from "./components/actions/toggle-icon/toggle-icon.component";
export { FoldCardComponent } from "./components/content/card/card.component";
export { FoldContextCardComponent } from "./components/content/context-card/context-card.component";
export { FoldElementTitleComponent } from "./components/content/element-title/element-title.component";
export { FoldFileDropzoneComponent } from "./components/forms/file-dropzone/file-dropzone.component";
export { FoldFieldListComponent } from "./components/content/field/field-list.component";
export { FoldFieldComponent } from "./components/content/field/field.component";
export { FoldLinkComponent } from "./components/actions/link/link.component";
export { FoldMenuComponent } from "./components/navigation/menu/menu.component";
export type {
  FoldMenuTint,
  FoldMenuTogglePlacement,
  FoldMenuLevel,
} from "./components/navigation/menu/menu.component";
export {
  FoldMenuItemComponent,
  type FoldMenuItemBadgeTone,
} from "./components/navigation/menu/menu-item.component";
export { FoldMenuSeparatorComponent } from "./components/navigation/menu/menu-separator.component";
export { FoldMenuSectionComponent } from "./components/navigation/menu/menu-section.component";
export { FoldNavLauncherComponent } from "./components/navigation/nav-launcher/nav-launcher.component";
export { FoldNavTileComponent } from "./components/navigation/nav-launcher/nav-tile.component";
export { FoldHeroCardComponent } from "./components/content/hero-card/hero-card.component";
export { FoldDataTableComponent } from "./components/content/data-table/data-table.component";
export { FoldDataTableCellDirective } from "./components/content/data-table/data-table-cell.directive";
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
} from "./components/content/data-table/data-table.types";
export { FoldChoiceRowComponent } from "./components/content/choice-row/choice-row.component";
export type { FoldChoiceOption } from "./components/content/choice-row/choice-row.component";
export { FoldIconComponent } from "./components/foundations/icon/icon.component";
export { FoldIdService } from "./a11y/id.service";
export { FoldFieldIdDirective } from "./a11y/field-id.directive";
export { FoldRepeatPressDirective } from "./directives/repeat-press.directive";
export { observeElementWidth } from "./dom/observe-element-width";
export { FoldSurfaceDirective } from "./directives/surface.directive";
export type { FoldSurfaceName } from "./directives/surface.directive";
export { FoldElevatedDirective } from "./directives/elevated.directive";
export { FoldInputComponent } from "./components/forms/input/input.component";
export {
  FoldNumberInputComponent,
  type FoldNumberSpinner,
  type FoldNumberControls,
} from "./components/forms/input/number-input.component";
export { FoldSearchComponent } from "./components/forms/input/search.component";
export { FoldSelectComponent } from "./components/forms/input/select.component";
export { FoldSliderComponent } from "./components/forms/slider/slider.component";
export { FoldRangeSliderComponent } from "./components/forms/slider/range-slider.component";
export type { FoldRangeValue } from "./components/forms/slider/range-slider.component";
export { FoldCalloutComponent } from "./components/feedback/callout/callout.component";
export type {
  FoldCalloutVariant,
  FoldCalloutAppearance,
} from "./components/feedback/callout/callout.component";
export { FoldDisclosureComponent } from "./components/feedback/disclosure/disclosure.component";
export { FoldStatusBadgeComponent } from "./components/content/status-badge/status-badge.component";
export { FoldTimelineComponent } from "./components/content/timeline/timeline.component";
export type {
  FoldTimelineNode,
  FoldTimelineDatePlacement,
} from "./components/content/timeline/timeline.component";
export { FoldLoadingStateComponent } from "./components/feedback/state/loading-state.component";
export { FoldEmptyStateComponent } from "./components/feedback/state/empty-state.component";
export type { FoldIconSize } from "./components/foundations/icon/icon.component";
export {
  FoldIconRegistry,
  provideFoldIcons,
} from "./components/foundations/icon/icon-registry.service";
export type { FoldIconSet } from "./components/foundations/icon/icon-registry.service";
export { FOLD_BUILTIN_ICONS } from "./components/foundations/icon/builtin-icons";
export type {
  FoldIconName,
  FoldBuiltinIconName,
} from "./components/foundations/icon/builtin-icons";
export { FoldAsideLayoutComponent } from "./components/layout/aside-layout/aside-layout.component";
export { FoldTabLayoutComponent } from "./components/layout/tab-layout/tab-layout.component";
export { FoldPageLayoutComponent } from "./components/layout/page-layout/page-layout.component";
export { FoldPageSectionComponent } from "./components/layout/page-section/page-section.component";
export { FoldHeroSectionComponent } from "./components/layout/hero-section/hero-section.component";
export { FoldPaginatorComponent } from "./components/content/paginator/paginator.component";
export type { FoldPageItem } from "./components/content/paginator/paginator.component";
export { FoldTabNavComponent } from "./components/navigation/tab-nav/tab-nav.component";
export type { FoldTabNavItem } from "./components/navigation/tab-nav/tab-nav.component";
export { FoldToastComponent } from "./components/feedback/toast/toast.component";
export { FoldToastContainerComponent } from "./components/feedback/toast/toast-container.component";
export { FoldToastService } from "./components/feedback/toast/toast.service";
export {
  provideFoldToasts,
  FOLD_TOAST_CONFIG,
} from "./components/feedback/toast/toast.config";
export type { FoldToastConfig } from "./components/feedback/toast/toast.config";
export type {
  FoldToast,
  FoldToastVariant,
} from "./components/feedback/toast/toast.types";

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
