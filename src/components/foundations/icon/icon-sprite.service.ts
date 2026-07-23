import { DOCUMENT } from "@angular/common";
import { Service, inject } from "@angular/core";
import {
  FOLD_ICON_SPRITE_ID,
  foldIconSymbolId,
  foldIconToSymbol,
} from "./icon-sprite";

const SVG_NS = "http://www.w3.org/2000/svg";

/**
 * The single hidden SVG sprite that backs every `fold-icon`.
 *
 * Root singleton. Each unique icon is added once as a `<symbol>`; instances
 * reference it by id through `<use>`, so the DOM holds one copy of an icon's
 * paths however many times it renders (the win over per-instance `[innerHTML]`).
 *
 * **Lazy:** only icons actually rendered are added, so an SSR page ships just
 * the icons it uses — each once — not the whole catalogue.
 *
 * **SSR + hydration:** on the server the sprite is appended to `<body>` during
 * render and serialised into the HTML, so `<use>` resolves on first paint (no
 * icon flash before hydration). On the client the service adopts that existing
 * sprite instead of creating a second one, and seeds its added-set from the
 * symbols already present — so hydration never double-adds.
 */
@Service()
export class FoldIconSprite {
  private readonly document = inject(DOCUMENT);
  private readonly added = new Set<string>();
  private sprite: Element | null = null;

  /** Ensure `name`'s symbol is in the sprite; idempotent. `markup` is the raw,
   *  trust-guarded SVG string from the registry. */
  ensure(name: string, markup: string): void {
    const id = foldIconSymbolId(name);
    if (this.added.has(id)) {
      return;
    }
    const sprite = this.resolveSprite();
    if (!sprite) {
      return; // no document body (non-DOM host) — instance renders nothing
    }
    // resolveSprite may have just seeded `added` from an SSR-serialised sprite.
    if (this.added.has(id)) {
      return;
    }
    sprite.insertAdjacentHTML("beforeend", foldIconToSymbol(name, markup));
    this.added.add(id);
  }

  /** The mounted sprite, creating it (or adopting the SSR one) on first use. */
  private resolveSprite(): Element | null {
    if (this.sprite) {
      return this.sprite;
    }
    const body = this.document.body;
    if (!body) {
      return null;
    }
    const existing = this.document.getElementById(FOLD_ICON_SPRITE_ID);
    if (existing) {
      existing
        .querySelectorAll("symbol[id]")
        .forEach((symbol) => this.added.add(symbol.id));
      this.sprite = existing;
      return existing;
    }
    const svg = this.document.createElementNS(SVG_NS, "svg");
    svg.setAttribute("id", FOLD_ICON_SPRITE_ID);
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute(
      "style",
      "position:absolute;width:0;height:0;overflow:hidden",
    );
    body.appendChild(svg);
    this.sprite = svg;
    return svg;
  }
}
