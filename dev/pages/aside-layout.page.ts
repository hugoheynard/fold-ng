import {
  Component,
  computed,
  effect,
  ElementRef,
  signal,
  viewChild,
} from "@angular/core";
import {
  Sh3AsideLayoutComponent,
  Sh3CardComponent,
  Sh3PageLayoutComponent,
  Sh3PageSectionComponent,
  Sh3SliderComponent,
} from "../../src/index";
import { DevPlaygroundComponent } from "../playground.component";
import { KindBadgeComponent } from "../kind-badge.component";

/** `/aside-layout` — the `sh3-aside-layout` gallery page. */
@Component({
  selector: "gal-aside-layout-page",
  standalone: true,
  imports: [
    KindBadgeComponent,
    Sh3PageLayoutComponent,
    Sh3AsideLayoutComponent,
    Sh3CardComponent,
    Sh3PageSectionComponent,
    Sh3SliderComponent,
    DevPlaygroundComponent,
  ],
  templateUrl: "./aside-layout.page.html",
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
        ? "<sh3-aside-layout>"
        : `<sh3-aside-layout [topOffset]="${offset}">`;
    return [
      open,
      ...(left ? ["  <app-timeline asideLeft />"] : []),
      "  <!-- untagged elements → centre column -->",
      "  <app-header />",
      '  <sh3-page-section title="…">…</sh3-page-section>',
      "  <!-- tag each rail element -->",
      "  <app-history asideRight />",
      "  <app-actions asideRight />",
      "</sh3-aside-layout>",
    ].join("\n");
  });
}
