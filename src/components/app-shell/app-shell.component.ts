import { Component, computed, input } from "@angular/core";

/**
 * `<sh3-app-shell>` — the responsive application skeleton.
 *
 * A pure structural grid with four content slots: it owns the layout and the
 * responsive collapse, the app owns what fills the slots (nav, header, routed
 * content, overlays) and all state/routing. Rail visibility is driven from the
 * projected rail component itself (an empty `railSecondary` self-collapses).
 *
 * Sizing has two ergonomic paths that compose:
 * - **Typed inputs** (`railWidth`, `headerHeight`, `headerHeightMobile`) for the
 *   common case — plain px numbers, discoverable and type-checked in the
 *   template.
 * - **CSS variables** for the theming case — set `--sh3-shell-*` on any ancestor
 *   to compose tokens (`var(--w-appMenu)`) or drive it from a media query. An
 *   unset input inherits the variable, so the two never fight.
 *
 * ```
 * ┌────────┬──────────────┬─────────────────────┐
 * │  rail  │ rail          │ header              │  ← header row
 * │ primary│ secondary     ├─────────────────────┤
 * │        │ (auto width,  │ content             │  ← content row
 * │        │  self-        │ (position: relative │
 * │        │  collapsing)  │  anchor for panels) │
 * └────────┴──────────────┴─────────────────────┘
 * ```
 *
 * At ≤768px the rails drop out and it becomes a single header + content column.
 *
 * ## Slots
 * | Attribute        | Region                                    |
 * |------------------|-------------------------------------------|
 * | `railPrimary`    | Left rail (fixed width).                  |
 * | `railSecondary`  | Second rail (intrinsic width; a component that collapses to `0` hides itself). |
 * | `header`         | Top bar (content column).                 |
 * | *(default)*      | The content region — routed pages, floating panels, overlays, banners. |
 *
 * ## Sizing knobs
 * | Input                | CSS variable                       | Default | Meaning                    |
 * |----------------------|------------------------------------|---------|----------------------------|
 * | `railWidth`          | `--sh3-shell-rail-width`           | `64px`  | Primary-rail column width. |
 * | `headerHeight`       | `--sh3-shell-header-height`        | `56px`  | Header row height.         |
 * | `headerHeightMobile` | `--sh3-shell-header-height-mobile` | `52px`  | Header height at ≤768px.    |
 *
 * @selector `sh3-app-shell`
 *
 * @example
 * ```html
 * <sh3-app-shell [railWidth]="72">
 *   <app-menu railPrimary />
 *   <app-workspace-rail railSecondary />
 *   <app-header header />
 *   <router-outlet />
 *   <!-- panels / overlays / banners also go in the default slot -->
 * </sh3-app-shell>
 * ```
 */
@Component({
  selector: "sh3-app-shell",
  standalone: true,
  host: {
    "[style.--sh3-shell-rail-width]": "railWidthVar()",
    "[style.--sh3-shell-header-height]": "headerHeightVar()",
    "[style.--sh3-shell-header-height-mobile]": "headerHeightMobileVar()",
  },
  template: `<div class="rail-primary">
      <ng-content select="[railPrimary]" />
    </div>
    <div class="rail-secondary"><ng-content select="[railSecondary]" /></div>
    <div class="header"><ng-content select="[header]" /></div>
    <div class="content"><ng-content /></div>`,
  styles: `
    :host {
      display: grid;
      height: 100%;
      width: 100%;
      overflow: hidden;
      background: var(--sh3-color-bg-page);
      grid-template-columns:
        var(--sh3-shell-rail-width, 64px)
        auto
        minmax(0, 1fr);
      grid-template-rows: var(--sh3-shell-header-height, 56px) 1fr;
      grid-template-areas:
        "rail-primary rail-secondary header"
        "rail-primary rail-secondary content";
    }
    .rail-primary {
      grid-area: rail-primary;
      min-height: 0;
    }
    .rail-secondary {
      grid-area: rail-secondary;
      min-height: 0;
    }
    .header {
      grid-area: header;
      min-width: 0;
    }
    /* The content cell is the positioning anchor for floating panels: they
       cover the page but stay below the rails/header (nav context preserved). */
    .content {
      grid-area: content;
      position: relative;
      display: flex;
      flex-direction: column;
      min-width: 0;
      min-height: 0;
      overflow: hidden;
    }

    /* Rails drop out on narrow viewports → single header + content column. */
    @media (max-width: 768px) {
      :host {
        grid-template-columns: minmax(0, 1fr);
        grid-template-rows: var(--sh3-shell-header-height-mobile, 52px) 1fr;
        grid-template-areas:
          "header"
          "content";
      }
      .rail-primary,
      .rail-secondary {
        display: none;
      }
    }
  `,
})
export class AppShellComponent {
  /** Primary-rail column width in px. Omit to inherit `--sh3-shell-rail-width` (64). */
  readonly railWidth = input<number>();
  /** Header row height in px. Omit to inherit `--sh3-shell-header-height` (56). */
  readonly headerHeight = input<number>();
  /** Header height at ≤768px in px. Omit to inherit `--sh3-shell-header-height-mobile` (52). */
  readonly headerHeightMobile = input<number>();

  /* Map each input to its CSS var — `null` when unset so the stylesheet
     variable (or its fallback default) keeps winning; a set input overrides it. */
  protected readonly railWidthVar = computed(() => pxVar(this.railWidth()));
  protected readonly headerHeightVar = computed(() =>
    pxVar(this.headerHeight()),
  );
  protected readonly headerHeightMobileVar = computed(() =>
    pxVar(this.headerHeightMobile()),
  );
}

/** A px length for a host CSS-var binding, or `null` to leave the var unset. */
function pxVar(value: number | undefined): string | null {
  return value === undefined ? null : `${value}px`;
}
