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
 * | `header`         | Top bar (content column, or full-width — see `headerLayout`). |
 * | *(default)*      | The content region — routed pages, floating panels, overlays, banners. |
 *
 * ## Sizing knobs
 * | Input                | CSS variable                       | Default | Meaning                    |
 * |----------------------|------------------------------------|---------|----------------------------|
 * | `railWidth`          | `--sh3-shell-rail-width`           | `64px`  | Primary-rail column width. |
 * | `headerHeight`       | `--sh3-shell-header-height`        | `56px`  | Header row height.         |
 * | `headerHeightMobile` | `--sh3-shell-header-height-mobile` | `52px`  | Header height at ≤768px.    |
 *
 * ## Layout knobs
 * | Input          | Values                | Default   | Meaning                                    |
 * |----------------|-----------------------|-----------|--------------------------------------------|
 * | `headerLayout` | `"inset" \| "full"`   | `"inset"` | `inset` = header sits over the content column (rails climb its side); `full` = header spans the full width, above the rails. |
 * | `appearance`   | `"flat" \| "floating"`| `"flat"`  | `flat` = regions are edge-to-edge blocks; `floating` = each region is a rounded, elevated card on a page-colour gutter (inset-dashboard look). |
 *
 * In `floating` mode the content cell becomes a rounded card; because it already
 * clips its overflow, a floating panel anchored inside it inherits that radius
 * for free — no extra wiring.
 *
 * @selector `sh3-app-shell`
 *
 * @example
 * ```html
 * <sh3-app-shell [railWidth]="72" headerLayout="full" appearance="floating">
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
    "[class.header-full]": 'headerLayout() === "full"',
    "[class.floating]": 'appearance() === "floating"',
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

    /* headerLayout="full" — header spans every column, above the rails, instead
       of sitting over the content column with the rails climbing its side. */
    :host(.header-full) {
      grid-template-areas:
        "header       header         header"
        "rail-primary rail-secondary content";
    }

    /* appearance="floating" — inset-dashboard look: a page-colour gutter around
       every region, each region a rounded, elevated card. The content cell keeps
       its overflow clip, so a panel anchored inside inherits the radius. */
    :host(.floating) {
      padding: var(--sh3-space-md);
      gap: var(--sh3-space-md);
    }
    :host(.floating) .rail-primary,
    :host(.floating) .rail-secondary,
    :host(.floating) .header,
    :host(.floating) .content {
      border-radius: var(--sh3-radius-lg);
      overflow: hidden;
      box-shadow: var(--sh3-shadow-md);
    }

    /* Rails drop out on narrow viewports → single header + content column.
       Both base and header-full collapse to the same stack (equal specificity to
       :host(.header-full), so source order lets the mobile rule win). */
    @media (max-width: 768px) {
      :host,
      :host(.header-full) {
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
export class Sh3AppShellComponent {
  /** Primary-rail column width in px. Omit to inherit `--sh3-shell-rail-width` (64). */
  readonly railWidth = input<number>();
  /** Header row height in px. Omit to inherit `--sh3-shell-header-height` (56). */
  readonly headerHeight = input<number>();
  /** Header height at ≤768px in px. Omit to inherit `--sh3-shell-header-height-mobile` (52). */
  readonly headerHeightMobile = input<number>();

  /** `"full"` spans the header across every column, above the rails; `"inset"` (default) keeps it over the content column. */
  readonly headerLayout = input<"inset" | "full">("inset");
  /** `"floating"` renders each region as a rounded, elevated card on a page-colour gutter; `"flat"` (default) is edge-to-edge blocks. */
  readonly appearance = input<"flat" | "floating">("flat");

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
