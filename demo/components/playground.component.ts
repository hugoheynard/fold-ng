import {
  booleanAttribute,
  Component,
  computed,
  effect,
  ElementRef,
  input,
  linkedSignal,
  signal,
  viewChild,
} from "@angular/core";
import {
  FoldButtonComponent,
  FoldCardComponent,
  FoldElementTitleComponent,
  FoldPageSectionComponent,
} from "../../src/public-api";

/** A viewport preset on the responsive ruler bar. `w` is the real render width
 *  in px; `d` is a device-glyph SVG path (24×24, filled with `currentColor`). */
interface Viewport {
  readonly id: string;
  readonly label: string;
  readonly w: number;
  readonly d: string;
}

/**
 * `<dev-playground>` — a gallery dev tool: the param / preview / code triptych.
 *
 * Project the param controls into the `[params]` slot, the live component as the
 * default slot (the preview), and pass the generated snippet as `code`. The
 * component owns the code block chrome + copy button.
 *
 * ```html
 * <dev-playground [code]="myCode()">
 *   <div params>…control widgets…</div>
 *   <fold-number-input … />
 * </dev-playground>
 * ```
 *
 * The three panels lay out on a responsive grid (settings | preview | code →
 * preview on top with settings + code below → stacked). The component owns its
 * `fold-page-section title="Playground"` wrapper, so a page just drops in
 * `<dev-playground>` without repeating the section on every page.
 *
 * By default the preview header carries a device/px ruler + width slider that
 * render the demo at a chosen real width, scaled to fit ({@link vpScale}); pass
 * `[responsive]="false"` to opt a page out. See {@link responsive}.
 */
@Component({
  selector: "dev-playground",
  standalone: true,
  imports: [
    FoldButtonComponent,
    FoldElementTitleComponent,
    FoldCardComponent,
    FoldPageSectionComponent,
  ],
  templateUrl: "./playground.component.html",
  styleUrl: "./playground.component.css",
  host: { "[class.pg-stage]": "stage()" },
})
export class DevPlaygroundComponent {
  /** The generated code snippet shown (and copied) on the right. */
  readonly code = input("");
  /** Language label on the code block. */
  readonly lang = input("html");
  /** Render the preview on an app-background stage (inset, padded) instead of on
   *  the card surface — clearer hierarchy when the demo is itself a card. */
  readonly stage = input(false, { transform: booleanAttribute });

  /**
   * The responsive viewport controller — a device/px ruler + width slider on the
   * preview header. On by default: every playground gets it. The demo renders at
   * the chosen **real** width and is scaled to fit the frame with CSS `zoom`, so
   * its own container queries resolve at the true width (a 1280px desktop layout
   * stays a desktop layout even when drawn small). Overrides `stage` when both
   * are set.
   *
   * Pass `[responsive]="false"` on the rare demo where a fixed-width preview is
   * the point (e.g. a `stage` window that must keep its own proportions).
   *
   * The frame is a **named container** (`fold-preview`). A fold component folds
   * itself here for free — its `:host` is already a container, so it reacts to
   * the device width with zero per-demo code. Only hand-built demo scaffolding
   * (a wrapper grid, say) needs to fold explicitly, and it must do so with
   * `@container fold-preview (max-width: …)` — NOT a `@media` query, which can't
   * fire (the preview resizes the container, not the window). So: render the real
   * component and let it fold; never hand-roll a viewport-toggle window per demo.
   */
  readonly responsive = input(true, { transform: booleanAttribute });

  /**
   * The width (px) the preview opens at — otherwise it starts on **Fluid** (the
   * frame's own width, at 1× zoom). Set this for a demo whose real design is
   * wider than the preview frame, so Fluid would render it *folded*: e.g.
   * app-shell opens at 1280 (Desktop) instead of collapsing to its mobile view.
   * A layout that already looks its best at the frame width (page-layout) can
   * stay on Fluid. Use one of the preset widths to light its button up.
   */
  readonly initialWidth = input<number | null>(null);

  protected readonly copied = signal(false);

  /** Mobile only: the code panel collapses to a glass overlay over the preview,
   *  toggled from a "Code" button on the preview header. */
  protected readonly codeOpen = signal(false);

  /** Device presets for the ruler bar (large → small). Widths straddle fold's
   *  own breakpoints so picking one visibly folds a responsive demo. */
  protected readonly viewports: readonly Viewport[] = [
    {
      id: "desktop",
      label: "Desktop",
      w: 1280,
      d: "M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z",
    },
    {
      id: "tablet",
      label: "Tablet",
      w: 768,
      d: "M18.5 0h-14C3.12 0 2 1.12 2 2.5v19C2 22.88 3.12 24 4.5 24h14c1.38 0 2.5-1.12 2.5-2.5v-19C21 1.12 19.88 0 18.5 0zm-7 23c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM19 20H4V3h15v17z",
    },
    {
      id: "mobile",
      label: "Mobile",
      w: 375,
      d: "M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z",
    },
  ];
  /** Fluid-mode glyph (swap-horiz: the preview fills the frame at scale 1). */
  protected readonly fluidIcon =
    "M6.99 11 3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z";
  protected readonly VP_MIN = 320;
  protected readonly VP_MAX = 1440;

  /** Chosen preview width in px; `null` = fluid (fills the frame at scale 1).
   *  Seeded from `initialWidth`, then owned by the device buttons + slider. */
  protected readonly vpWidth = linkedSignal(() => this.initialWidth());
  private readonly vpFrame = viewChild<ElementRef<HTMLElement>>("vpFrame");
  /** The frame's available width, tracked so `zoom` fits the render to it. */
  private readonly frameWidth = signal(0);

  /** The preset (or `"fluid"` / `"custom"`) matching the current width. */
  protected readonly activeViewport = computed(() => {
    const w = this.vpWidth();
    if (w === null) {
      return "fluid";
    }
    return this.viewports.find((v) => v.w === w)?.id ?? "custom";
  });

  /** Scale-to-fit factor applied as CSS `zoom` — never upscales past 1. `zoom`
   *  (not `transform`) so layout + `position: sticky` resolve at the real width. */
  protected readonly vpScale = computed(() => {
    const w = this.vpWidth();
    const avail = this.frameWidth();
    if (w === null || avail === 0) {
      return 1;
    }
    return Math.min(1, avail / w);
  });

  /** Inner width style: fluid fills the frame; a device renders at its true px. */
  protected readonly vpInnerWidth = computed(() => {
    const w = this.vpWidth();
    return w === null ? "100%" : `${w}px`;
  });

  /** Slider position — the real width, snapping to the max when fluid. */
  protected readonly sliderValue = computed(
    () => this.vpWidth() ?? this.VP_MAX,
  );

  constructor() {
    effect((onCleanup) => {
      const el = this.vpFrame()?.nativeElement;
      if (!el || typeof ResizeObserver === "undefined") {
        return;
      }
      const ro = new ResizeObserver((entries) => {
        const entry = entries[0];
        if (entry) {
          this.frameWidth.set(entry.contentRect.width);
        }
      });
      ro.observe(el);
      onCleanup(() => {
        ro.disconnect();
      });
    });
  }

  protected setViewport(w: number | null): void {
    this.vpWidth.set(w);
  }

  protected onSlider(value: number): void {
    this.vpWidth.set(value);
  }

  protected copy(): void {
    void navigator.clipboard.writeText(this.code()).then(() => {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 1500);
    });
  }

  protected toggleCode(): void {
    this.codeOpen.update((open) => !open);
  }
}
