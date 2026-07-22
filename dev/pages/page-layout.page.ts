import {
  Component,
  computed,
  effect,
  ElementRef,
  signal,
  viewChild,
} from "@angular/core";
import { RouterLink } from "@angular/router";
import {
  FoldBadgeComponent,
  FoldButtonComponent,
  FoldCalloutComponent,
  FoldPageLayoutComponent,
  FoldPageSectionComponent,
  FoldSliderComponent,
} from "../../src/index";
import { DevPlaygroundComponent } from "../playground.component";
import { KindBadgeComponent } from "../kind-badge.component";

/** The three width modes, in order — maps to the `wide` / `fluid` inputs. */
type WidthMode = "default" | "wide" | "fluid";

/** The real width the preview window renders at (scaled to fit). Wide enough
 *  that the 780/940 caps and a `fluid` fill all read differently. */
const PREVIEW_WIDTH = 1040;

/** `/page-layout` — the `fold-page-layout` gallery page. */
@Component({
  selector: "gal-page-layout-page",
  standalone: true,
  imports: [
    RouterLink,
    KindBadgeComponent,
    FoldPageLayoutComponent,
    FoldPageSectionComponent,
    FoldBadgeComponent,
    FoldButtonComponent,
    FoldCalloutComponent,
    FoldSliderComponent,
    DevPlaygroundComponent,
  ],
  templateUrl: "./page-layout.page.html",
})
export default class PageLayoutPage {
  /** Column width — `default` (780) · `wide` (940) · `fluid` (fills). */
  protected readonly widthMode = signal<WidthMode>("default");
  /** Header slots, toggled independently so the anatomy is explorable. */
  protected readonly showIcon = signal(true);
  protected readonly showBadge = signal(false);
  protected readonly showDesc = signal(true);
  protected readonly showActions = signal(true);
  /** The horizontal page gutter — the single `--fold-page-gutter` token. */
  protected readonly gutter = signal(32);

  protected readonly isWide = computed(() => this.widthMode() === "wide");
  protected readonly isFluid = computed(() => this.widthMode() === "fluid");

  private readonly windowEl = viewChild<ElementRef<HTMLElement>>("plWindow");
  private readonly windowWidth = signal(0);

  /** Auto-fit scale (CSS `zoom`) so the real-width render fills the preview card
   *  with no horizontal scroll. Paint-only: the width caps resolve at the real
   *  width, so `fluid` vs `wide` stay honestly different however small it's drawn. */
  protected readonly scale = computed(() => {
    const avail = this.windowWidth();
    return avail === 0 ? 1 : Math.min(1, avail / PREVIEW_WIDTH);
  });

  protected readonly previewWidth = PREVIEW_WIDTH;

  constructor() {
    effect((onCleanup) => {
      const el = this.windowEl()?.nativeElement;
      if (!el || typeof ResizeObserver === "undefined") {
        return;
      }
      const ro = new ResizeObserver((entries) => {
        this.windowWidth.set(entries[0].contentRect.width);
      });
      ro.observe(el);
      onCleanup(() => ro.disconnect());
    });
  }

  /** The live snippet, rebuilt from the chosen inputs. */
  protected readonly code = computed(() => {
    const width = this.isWide() ? " wide" : this.isFluid() ? " fluid" : "";
    const icon = this.showIcon() ? ' icon="grid"' : "";
    const lines = [`<fold-page-layout${width}${icon} title="Billing">`];
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
      '  <fold-page-section title="Invoices">…</fold-page-section>',
      "</fold-page-layout>",
    );
    return lines.join("\n");
  });
}
