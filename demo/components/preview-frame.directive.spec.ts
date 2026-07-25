import { describe, expect, it } from "vitest";
import { copyStyleNode, STYLE_SELECTOR } from "./preview-frame.directive";

/**
 * Locks {@link copyStyleNode} — the piece that mirrors the host `<head>` styles
 * into the preview iframe. The subtle, regression-prone bit is the `<link>`: a
 * naive `cloneNode` copies a relative href that then 404s against the frame's
 * `about:blank` base, so the guarantee is that a mirrored link resolves to an
 * absolute URL and keeps the attributes that decide *how* it loads.
 */
describe("copyStyleNode", () => {
  const target = document.implementation.createHTMLDocument("frame");

  it("selects inline styles and stylesheet links only", () => {
    const style = document.createElement("style");
    const sheet = document.createElement("link");
    sheet.rel = "stylesheet";
    const preload = document.createElement("link");
    preload.rel = "preload";

    expect(style.matches(STYLE_SELECTOR)).toBe(true);
    expect(sheet.matches(STYLE_SELECTOR)).toBe(true);
    expect(preload.matches(STYLE_SELECTOR)).toBe(false);
  });

  it("clones a <style> verbatim as a distinct node", () => {
    const style = document.createElement("style");
    style.textContent = ".x { color: red }";

    const copy = copyStyleNode(target, style);

    expect(copy).not.toBe(style);
    expect(copy).toBeInstanceOf(HTMLStyleElement);
    expect(copy.textContent).toBe(".x { color: red }");
  });

  it("rebuilds a <link> with its absolute href, not the relative attribute", () => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.setAttribute("href", "assets/app.css");
    // sanity: the authored attribute really is relative
    expect(link.getAttribute("href")).toBe("assets/app.css");
    expect(link.href).toMatch(/^https?:\/\/.+\/assets\/app\.css$/);

    const copy = copyStyleNode(target, link);
    if (!(copy instanceof HTMLLinkElement)) {
      throw new Error("expected a <link> copy");
    }
    expect(copy.rel).toBe("stylesheet");
    expect(copy.getAttribute("href")).toBe(link.href);
    expect(copy.getAttribute("href")).not.toBe("assets/app.css");
  });

  it("carries the load-shaping attributes across", () => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.setAttribute("href", "app.css");
    link.setAttribute("media", "screen");
    link.setAttribute("integrity", "sha384-abc");
    link.setAttribute("crossorigin", "anonymous");
    link.setAttribute("referrerpolicy", "no-referrer");

    const copy = copyStyleNode(target, link);
    if (!(copy instanceof HTMLLinkElement)) {
      throw new Error("expected a <link> copy");
    }
    expect(copy.getAttribute("media")).toBe("screen");
    expect(copy.getAttribute("integrity")).toBe("sha384-abc");
    expect(copy.getAttribute("crossorigin")).toBe("anonymous");
    expect(copy.getAttribute("referrerpolicy")).toBe("no-referrer");
  });

  it("omits attributes the source didn't set", () => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.setAttribute("href", "app.css");

    const copy = copyStyleNode(target, link);
    if (!(copy instanceof HTMLLinkElement)) {
      throw new Error("expected a <link> copy");
    }
    expect(copy.hasAttribute("integrity")).toBe(false);
    expect(copy.hasAttribute("crossorigin")).toBe(false);
  });
});
