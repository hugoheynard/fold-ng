import {
  afterNextRender,
  afterRenderEffect,
  Component,
  computed,
  DestroyRef,
  ElementRef,
  inject,
  signal,
  viewChild,
  ViewEncapsulation,
} from "@angular/core";
import { RouterLink } from "@angular/router";
import {
  FoldAvatarComponent,
  FoldBadgeComponent,
  FoldBreadcrumbComponent,
  FoldButtonComponent,
  FoldCalloutComponent,
  FoldCardComponent,
  FoldPageLayoutComponent,
  FoldPageSectionComponent,
  FoldPageTitleDirective,
  FoldSliderComponent,
  type FoldBreadcrumbItem,
} from "../../../src/public-api";
import { DevPlaygroundComponent } from "../../components/playground.component";
import { KindBadgeComponent } from "../../components/kind-badge.component";
import { ComposedOfComponent } from "../../components/composed-of.component";

type HeaderMode = "title" | "custom";

/** `/page-layout` — the `fold-page-layout` gallery page. */
@Component({
  selector: "gal-page-layout-page",
  standalone: true,
  imports: [
    RouterLink,
    KindBadgeComponent,
    ComposedOfComponent,
    FoldPageLayoutComponent,
    FoldPageTitleDirective,
    FoldPageSectionComponent,
    FoldCardComponent,
    FoldAvatarComponent,
    FoldBadgeComponent,
    FoldBreadcrumbComponent,
    FoldButtonComponent,
    FoldCalloutComponent,
    FoldSliderComponent,
    DevPlaygroundComponent,
  ],
  templateUrl: "./page-layout.page.html",
  styleUrl: "./page-layout.page.scss",
  encapsulation: ViewEncapsulation.None,
})
export default class PageLayoutPage {
  /** Header: the plain `icon` + `title` inputs, or a projected `[pageTitle]`. */
  protected readonly headerMode = signal<HeaderMode>("title");
  /** Header slots, toggled independently so the anatomy is explorable. */
  protected readonly showIcon = signal(true);
  protected readonly showEyebrow = signal(false);
  protected readonly showBadge = signal(false);
  protected readonly showDesc = signal(true);
  protected readonly showActions = signal(true);
  /**
   * The eyebrow's trail — ancestors ONLY (`[currentPage]="false"`), because the
   * page's `<h1>` right underneath is the current page.
   */
  protected readonly trail: readonly FoldBreadcrumbItem[] = [
    { label: "Workspace", routerLink: "/home" },
    { label: "Settings", routerLink: "/menu" },
  ];
  /** The full-bleed band section — cancels the gutter to span edge-to-edge. */
  protected readonly showBleed = signal(true);
  /** Overlay the vertical `--fold-page-gap` as a band in each stack gap. */
  protected readonly showGap = signal(true);
  /** Master switch — hide every visualiser band (gutter + gap) for a clean read. */
  protected readonly hideBands = signal(false);
  /** The horizontal page gutter — the single `--fold-page-gutter` token. */
  protected readonly gutter = signal(32);
  /** The vertical page rhythm — the single `--fold-page-gap` token. */
  protected readonly gap = signal(32);
  /**
   * Fluid mode: don't pin the tokens inline, so the `:root` clamp defaults apply
   * and you can watch them scale with the viewport toggle. Off = the sliders
   * drive explicit px.
   */
  protected readonly fluid = signal(true);

  /** The live layout element, so we can read the RESOLVED gutter/gap px (the
   *  clamp is vw-based, so the effective value is only knowable at runtime). */
  private readonly liveLayout = viewChild("liveLayout", {
    read: ElementRef<HTMLElement>,
  });
  /** Resolved px, measured from the layout — drives the visualiser labels so
   *  they stay honest in fluid mode and update as the viewport changes. */
  protected readonly measuredGutter = signal(32);
  protected readonly measuredGap = signal(32);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    // Re-measure after every render the mode / sliders trigger.
    afterRenderEffect(() => {
      this.fluid();
      this.gutter();
      this.gap();
      this.measure();
    });
    // The clamp is viewport-driven, so also re-measure on size changes no signal
    // drives (the Fluid/Desktop/Tablet toggle, a window resize).
    afterNextRender(() => {
      const el = this.liveLayout()?.nativeElement;
      if (!el || typeof ResizeObserver === "undefined") {
        return;
      }
      const ro = new ResizeObserver(() => this.measure());
      ro.observe(el);
      this.destroyRef.onDestroy(() => ro.disconnect());
    });
  }

  /** Read the resolved gutter (padding-inline) + gap (row-gap) off the layout. */
  private measure(): void {
    const el = this.liveLayout()?.nativeElement;
    const view = el?.ownerDocument?.defaultView;
    if (!el || !view) {
      return;
    }
    const cs = view.getComputedStyle(el);
    this.measuredGutter.set(Math.round(parseFloat(cs.paddingInlineStart) || 0));
    this.measuredGap.set(Math.round(parseFloat(cs.rowGap) || 0));
  }

  /** The live snippet, rebuilt from the chosen inputs. */
  protected readonly code = computed(() => {
    const lines: string[] = [];
    if (this.headerMode() === "custom") {
      lines.push(
        "<fold-page-layout>",
        '  <span pageTitle><fold-avatar name="Acme Records" size="sm" /> Acme Records</span>',
      );
    } else {
      const icon = this.showIcon() ? ' icon="grid"' : "";
      lines.push(`<fold-page-layout${icon} title="Billing">`);
    }
    if (this.showEyebrow()) {
      lines.push(
        '  <fold-breadcrumb pageEyebrow [currentPage]="false" [items]="trail" />',
      );
    }
    if (this.showBadge()) {
      lines.push('  <fold-badge titleBadge content="Pro" variant="accent" />');
    }
    if (this.showDesc()) {
      lines.push(
        "  <p description>Your company subscription and payments.</p>",
      );
    }
    if (this.showActions()) {
      lines.push("  <button pageActions>Export</button>");
    }
    lines.push(
      '  <fold-page-section title="Payment methods">…</fold-page-section>',
    );
    if (this.showBleed()) {
      lines.push(
        "  <fold-page-section bleed>… edge-to-edge band …</fold-page-section>",
      );
    }
    lines.push(
      '  <fold-page-section title="Invoices">…</fold-page-section>',
      "</fold-page-layout>",
    );
    return lines.join("\n");
  });
}
