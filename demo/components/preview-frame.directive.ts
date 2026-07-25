import {
  afterNextRender,
  DestroyRef,
  Directive,
  ElementRef,
  inject,
  input,
  signal,
} from "@angular/core";

/**
 * `iframe[devPreviewFrame]` — turns a bare `<iframe>` into the playground's
 * responsive device frame.
 *
 * The playground renders each demo once, in the light DOM, inside a `source`
 * element. This directive **relocates** that already-rendered subtree into the
 * iframe's document (a real, isolated viewport) and keeps it alive there:
 *
 * - **DOM adoption** — `appendChild` across documents re-parents the nodes but
 *   preserves Angular's references, its event listeners (added via
 *   `addEventListener`, untouched by adoption) and its bindings, so change
 *   detection keeps driving the demo from its normal place in the component
 *   tree. No second Angular bootstrap.
 * - **Style mirroring** — every `<style>` / `<link rel="stylesheet">` in the host
 *   `<head>` is cloned into the iframe (emulated-encapsulation component styles
 *   *are* `<style>` tags), and a `MutationObserver` mirrors any added later.
 * - **Theme mirroring** — the theme host's `data-theme` is copied onto the
 *   iframe root and kept in sync, so the preview follows the gallery theme (the
 *   semantic-token `[data-theme="…"]` blocks then resolve inside the frame).
 *
 * The payoff: because the demo now lives in its own viewport, its **`@media`**
 * rules (and `@container`, `ResizeObserver`, `position: sticky`) resolve against
 * the *device width* the playground sets on the iframe — not the real browser
 * window. A shell folds to mobile only when the chosen device is narrow.
 *
 * {@link contentHeight} tracks the adopted subtree's height so the playground can
 * size the iframe to its content (an iframe has no intrinsic height).
 */
@Directive({
  selector: "iframe[devPreviewFrame]",
  standalone: true,
})
export class DevPreviewFrameDirective {
  /** The light-DOM element whose subtree is relocated into the iframe. */
  readonly source = input.required<HTMLElement>();
  /** Element whose `data-theme` mirrors into the frame — the gallery-shell host.
   *  `null` skips theme mirroring (the frame shows the `:root` base theme). */
  readonly themeHost = input<HTMLElement | null>(null);

  /** Live content height (px) of the adopted subtree — the iframe has no
   *  intrinsic height, so the playground reads this to size it. */
  readonly contentHeight = signal(0);

  private readonly host =
    inject<ElementRef<HTMLIFrameElement>>(ElementRef).nativeElement;
  private readonly cleanups: (() => void)[] = [];
  private mounted = false;

  constructor() {
    afterNextRender(() => this.mount());
    inject(DestroyRef).onDestroy(() => {
      for (const stop of this.cleanups) {
        stop();
      }
    });
  }

  private mount(): void {
    if (this.mounted) {
      return;
    }
    const doc = this.host.contentDocument;
    const src = this.source();
    if (!doc || !doc.body) {
      // about:blank not ready yet — retry once the frame fires load.
      this.host.addEventListener("load", () => this.mount(), { once: true });
      return;
    }
    this.mounted = true;
    doc.documentElement.style.background = "transparent";
    doc.body.style.margin = "0";
    doc.body.style.background = "transparent";
    this.mirrorStyles(doc);
    this.mirrorTheme(doc);
    doc.body.appendChild(src);
    this.observeHeight(doc, src);
  }

  /** Clone existing head stylesheets into the frame, then mirror any added. */
  private mirrorStyles(doc: Document): void {
    const selector = 'style, link[rel="stylesheet"]';
    for (const node of Array.from(document.head.querySelectorAll(selector))) {
      doc.head.appendChild(node.cloneNode(true));
    }
    const observer = new MutationObserver((records) => {
      for (const record of records) {
        for (const added of Array.from(record.addedNodes)) {
          if (added instanceof Element && added.matches(selector)) {
            doc.head.appendChild(added.cloneNode(true));
          }
        }
      }
    });
    observer.observe(document.head, { childList: true });
    this.cleanups.push(() => observer.disconnect());
  }

  /** Copy `data-theme` from the theme host and keep it in sync. */
  private mirrorTheme(doc: Document): void {
    const host = this.themeHost();
    if (!host) {
      return;
    }
    const root = doc.documentElement;
    const sync = (): void => {
      const theme = host.getAttribute("data-theme");
      if (theme === null) {
        root.removeAttribute("data-theme");
      } else {
        root.setAttribute("data-theme", theme);
      }
    };
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(host, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    this.cleanups.push(() => observer.disconnect());
  }

  /** Track the adopted subtree's height so the playground can size the iframe. */
  private observeHeight(doc: Document, src: HTMLElement): void {
    if (typeof ResizeObserver === "undefined") {
      return;
    }
    const measure = (): void => this.contentHeight.set(src.scrollHeight);
    const observer = new ResizeObserver(measure);
    observer.observe(src);
    observer.observe(doc.body);
    measure();
    this.cleanups.push(() => observer.disconnect());
  }
}
