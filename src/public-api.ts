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
  FoldButtonEmphasis,
  FoldButtonIntent,
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
export { FoldInlineConfirmComponent } from "./components/actions/inline-confirm/inline-confirm.component";
export {
  FOLD_INLINE_CONFIRM_LABELS,
  FOLD_INLINE_CONFIRM_DEFAULT_LABELS,
  provideFoldInlineConfirmLabels,
} from "./components/actions/inline-confirm/inline-confirm-labels";
export type { FoldInlineConfirmLabels } from "./components/actions/inline-confirm/inline-confirm-labels";
export {
  FoldCardComponent,
  foldCardBandChrome,
} from "./components/content/card/card.component";
export type {
  FoldCardBandChrome,
  FoldCardBandChromeInput,
} from "./components/content/card/card.component";
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
export { FoldDataTableRowCardDirective } from "./components/content/data-table/data-table-row-card.directive";
export {
  provideFoldDataTableLabels,
  FOLD_DATA_TABLE_LABELS,
  FOLD_DATA_TABLE_DEFAULT_LABELS,
} from "./components/content/data-table/data-table-labels";
export type { FoldDataTableLabels } from "./components/content/data-table/data-table-labels";
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

export { FoldCalendarMonthComponent } from "./components/content/calendar/calendar-month.component";
export { FoldCalendarWeekComponent } from "./components/content/calendar/calendar-week.component";
export { FoldCalendarDayComponent } from "./components/content/calendar/calendar-day.component";
export { FoldCalendarListComponent } from "./components/content/calendar/calendar-list.component";
// Applied through `hostDirectives` by every calendar view, so ng-packagr needs
// it on the surface. It is not meant to be used by hand — `locale` and `labels`
// are already inputs on the views themselves.
export { FoldCalendarChromeDirective } from "./components/content/calendar/calendar-chrome.directive";
export { FoldCalendarEventDirective } from "./components/content/calendar/calendar-event.directive";
export type { FoldCalendarEventContext } from "./components/content/calendar/calendar-event.directive";
export {
  FoldCalendarDayDirective,
  FoldCalendarHeadingDirective,
  FoldCalendarOverflowDirective,
  FoldCalendarTitleDirective,
} from "./components/content/calendar/calendar-slots.directive";
export type {
  FoldCalendarDayContext,
  FoldCalendarHeadingContext,
  FoldCalendarOverflowContext,
  FoldCalendarTitleContext,
} from "./components/content/calendar/calendar-slots.directive";
export {
  provideFoldCalendarLabels,
  FOLD_CALENDAR_LABELS,
  FOLD_CALENDAR_DEFAULT_LABELS,
} from "./components/content/calendar/calendar-labels";
export type { FoldCalendarLabels } from "./components/content/calendar/calendar-labels";
export {
  foldAddDays,
  foldAddMonths,
  foldDaysBetween,
  foldEndOfMonth,
  foldFromNativeDate,
  foldFromTemporal,
  foldIsCalendarDate,
  foldIsoWeek,
  foldIsoWeekYear,
  foldIsWeekend,
  foldStartOfMonth,
  foldStartOfWeek,
  foldToNativeDate,
  foldToday,
  foldWeekdayIndex,
  foldWeekdayOf,
  FOLD_DEFAULT_WEEKEND_DAYS,
} from "./components/content/calendar/calendar-date";
export type {
  FoldCalendarDate,
  FoldIsoDateLike,
  FoldWeekday,
} from "./components/content/calendar/calendar-date";
export {
  foldLocaleWeekInfo,
  FOLD_FALLBACK_WEEK_INFO,
} from "./components/content/calendar/calendar-locale";
export type { FoldWeekInfo } from "./components/content/calendar/calendar-locale";
export { FOLD_CALENDAR_FORMATS } from "./components/content/calendar/calendar-format";
export type { FoldCalendarFormat } from "./components/content/calendar/calendar-format";
// The geometry tier: everything a consumer needs to lay a calendar out
// *without* rendering it with these components. Kept public deliberately — see
// the README's "Two tiers" note — which is why the keyboard map ships with it:
// a hand-rolled date grid needs the same arrow keys as the built-in one.
export { foldCalendarNextFocus } from "./components/content/calendar/calendar-keyboard";
export { foldBuildMonthGrid } from "./components/content/calendar/calendar-month-grid";
export type { FoldMonthGridOptions } from "./components/content/calendar/calendar-month-grid";
export {
  foldBuildDay,
  foldBuildWeek,
} from "./components/content/calendar/calendar-columns";
export type { FoldDayColumnsOptions } from "./components/content/calendar/calendar-columns";
export {
  foldEventsInRange,
  foldEventsOnDay,
  foldFilterBySource,
} from "./components/content/calendar/calendar-filters";
export type {
  FoldCalendarBand,
  FoldCalendarDay,
  FoldCalendarDayEvents,
  FoldCalendarDayModifiers,
  FoldCalendarEvent,
  FoldCalendarHalfDay,
  FoldCalendarTone,
  FoldCalendarWeek,
} from "./components/content/calendar/calendar.types";
export { FoldChoiceRowComponent } from "./components/content/choice-row/choice-row.component";
export type { FoldChoiceOption } from "./components/content/choice-row/choice-row.component";
export { FoldIconComponent } from "./components/foundations/icon/icon.component";
export { FoldSpinnerComponent } from "./components/foundations/spinner/spinner.component";
export type { FoldSpinnerSize } from "./components/foundations/spinner/spinner.component";
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
export { FoldListboxComponent } from "./components/forms/listbox/listbox.component";
export { FoldMultiselectComponent } from "./components/forms/listbox/multiselect.component";
export { FoldOptionComponent } from "./components/forms/listbox/option.component";
export type { FoldSelectOption } from "./components/forms/listbox/select-option";
export { FoldPasswordFieldComponent } from "./components/forms/password/password-field.component";
export {
  foldDefaultPasswordRules,
  foldRegexRule,
  type FoldPasswordRule,
} from "./components/forms/password/password-rules";
export { FoldViewToggleComponent } from "./components/forms/view-toggle/view-toggle.component";
export type { FoldViewToggleOption } from "./components/forms/view-toggle/view-toggle.component";
export { FoldCheckboxComponent } from "./components/forms/checkbox/checkbox.component";
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
export type {
  FoldIconSize,
  FoldIconTone,
} from "./components/foundations/icon/icon.component";
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
export { FoldNavLayoutComponent } from "./components/layout/nav-layout/nav-layout.component";
export {
  FoldPageLayoutComponent,
  FoldPageTitleDirective,
} from "./components/layout/page-layout/page-layout.component";
export { FoldPageSectionComponent } from "./components/layout/page-section/page-section.component";
export { FoldHeroSectionComponent } from "./components/layout/hero-section/hero-section.component";
export { FoldPaginatorComponent } from "./components/content/paginator/paginator.component";
export type { FoldPageItem } from "./components/content/paginator/paginator.component";
export {
  provideFoldPaginatorLabels,
  FOLD_PAGINATOR_LABELS,
  FOLD_PAGINATOR_DEFAULT_LABELS,
} from "./components/content/paginator/paginator-labels";
export type { FoldPaginatorLabels } from "./components/content/paginator/paginator-labels";
export { FoldViewNavComponent } from "./components/navigation/view-nav/view-nav.component";
export type { FoldViewNavItem } from "./components/navigation/view-nav/view-nav.component";
export { FoldTabsComponent } from "./components/navigation/tabs/tabs.component";
export type {
  FoldTabItem,
  FoldTabsContext,
} from "./components/navigation/tabs/tabs.component";
export { FoldTabPanelComponent } from "./components/navigation/tabs/tab-panel.component";
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
export { FoldPanelHostComponent } from "./components/overlays/panel/panel-host.component";
export { FoldPanelHeaderComponent } from "./components/overlays/panel/panel-header.component";
export { FoldPanelHostService } from "./components/overlays/panel/panel-host.service";
export { FoldPanelRef } from "./components/overlays/panel/panel-ref";
export { FoldPanelToggle } from "./components/overlays/panel/panel-toggle";
export { FoldPanelComponentOutletDirective } from "./components/overlays/panel/panel-component-outlet.directive";
export {
  provideFoldPanelLabels,
  FOLD_PANEL_CLOSE_LABEL,
} from "./components/overlays/panel/panel-labels";
export type { FoldPanelLabels } from "./components/overlays/panel/panel-labels";
export {
  FOLD_PANEL_DEFAULTS,
  provideFoldPanelDefaults,
} from "./components/overlays/panel/panel-defaults";
export { FoldPopoverComponent } from "./components/overlays/popover/popover.component";
export { FoldPopoverTriggerDirective } from "./components/overlays/popover/popover-trigger.directive";
export { FoldDropdownComponent } from "./components/overlays/popover/dropdown.component";
export { FoldDropdownItemComponent } from "./components/overlays/popover/dropdown-item.component";
export { computePlacement } from "./components/overlays/popover/placement";
export { autoUpdate } from "./components/overlays/popover/auto-update";
export type {
  FoldPopoverPlacement,
  FoldPopoverSide,
  FoldPopoverAlign,
  FoldPlacementInput,
  FoldPlacementResult,
  FoldRect,
} from "./components/overlays/popover/placement";
export type {
  FoldPanelSide,
  FoldPanelSize,
  FoldPanelSurface,
  FoldPanelDefaults,
  FoldPanelDefaultsProvider,
  FoldPanelContent,
  FoldPanelConfig,
  FoldPanelHandle,
  FoldPanelDescriptor,
  FoldTemplatePanelDescriptor,
  FoldComponentPanelDescriptor,
} from "./components/overlays/panel/panel.types";

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

export { FoldCalendarToolbarComponent } from "./components/content/calendar/calendar-toolbar.component";
export {
  foldRangeForView,
  foldShiftDate,
  foldViewTitle,
} from "./components/content/calendar/calendar-navigation";
export type {
  FoldCalendarBuiltInView,
  FoldCalendarRange,
  FoldCalendarView,
  FoldCalendarViewOption,
} from "./components/content/calendar/calendar-navigation";

export { FoldCalendarAgendaComponent } from "./components/content/calendar/calendar-agenda.component";
export { FoldCalendarSourceFilterComponent } from "./components/content/calendar/calendar-source-filter.component";
export {
  foldBuildAgenda,
  foldCountActionable,
  foldIsActionable,
} from "./components/content/calendar/calendar-agenda";
export type {
  FoldAgendaOptions,
  FoldCalendarActionable,
  FoldCalendarAgenda,
  FoldCalendarAgendaGroup,
  FoldCalendarAgendaMode,
} from "./components/content/calendar/calendar-agenda";
export type { FoldCalendarSource } from "./components/content/calendar/calendar.types";
