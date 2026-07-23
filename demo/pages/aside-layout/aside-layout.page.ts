import {
  Component,
  computed,
  effect,
  ElementRef,
  signal,
  viewChild,
  ViewEncapsulation,
} from "@angular/core";
import {
  FoldAsideLayoutComponent,
  FoldCardComponent,
  FoldPageLayoutComponent,
  FoldSliderComponent,
} from "../../../src/public-api";
import { DevPlaygroundComponent } from "../../playground.component";
import { KindBadgeComponent } from "../../kind-badge.component";

/** `/aside-layout` — the `fold-aside-layout` gallery page. */
@Component({
  selector: "gal-aside-layout-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    FoldPageLayoutComponent,
    FoldAsideLayoutComponent,
    FoldCardComponent,
    FoldSliderComponent,
    DevPlaygroundComponent,
  ],
  templateUrl: "./aside-layout.page.html",
  styleUrl: "./aside-layout.page.scss",
  encapsulation: ViewEncapsulation.None,
})
export default class AsideLayoutPage {
  protected readonly aslLeft = signal(false);
  protected readonly aslEqual = signal(false);
  protected readonly aslOffset = signal(8);
  /** asideLeft / asideRight rail widths (real px) — slide to 0 or wide to see limits. */
  protected readonly aslRailWidth = signal(220);
  protected readonly aslSideWidth = signal(300);
  /** Preview viewport: desktop (1120px, 3 cols) or mobile (380px, folded) — the
   *  layout folds on its own width (container queries), so this really folds. */
  protected readonly aslMode = signal<"desktop" | "mobile">("desktop");

  /** Real render width per viewport — desktop clears the 1040 fold threshold. */
  protected readonly aslWidth = computed(() =>
    this.aslMode() === "mobile" ? 380 : 1120,
  );

  private readonly windowEl = viewChild<ElementRef<HTMLElement>>("aslWindow");
  private readonly windowWidth = signal(0);

  /** Auto-fit scale (CSS `zoom`) so the real-width render fills the preview card
   *  with no horizontal scroll. Paint-only: the fold + sticky resolve at the real
   *  width, so desktop stays three columns however small it is drawn. */
  protected readonly aslScale = computed(() => {
    const avail = this.windowWidth();
    return avail === 0 ? 1 : Math.min(1, avail / this.aslWidth());
  });

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

  protected readonly asideLayoutCode = computed(() => {
    const left = this.aslLeft();
    const offset = this.aslOffset();
    const open =
      offset === 24
        ? "<fold-aside-layout>"
        : `<fold-aside-layout [topOffset]="${offset}">`;
    return [
      open,
      ...(left ? ["  <app-timeline asideLeft />"] : []),
      "  <!-- untagged elements → centre column -->",
      "  <app-header />",
      '  <fold-page-section title="…">…</fold-page-section>',
      "  <!-- tag each rail element -->",
      "  <app-history asideRight />",
      "  <app-actions asideRight />",
      "</fold-aside-layout>",
    ].join("\n");
  });
}
