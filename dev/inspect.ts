/// <reference types="vite/client" />

/**
 * Component metadata for the double-click inspector, derived from each
 * component's own source at build time (Vite `import.meta.glob`, `?raw`): the
 * `.scss` gives the design tokens it references, the `.html` gives the `sh3-*`
 * children it composes. Zero duplication — it reads the real files. Dev-only.
 */
export interface ComponentInfo {
  /** The element selector, e.g. `sh3-card`. */
  readonly selector: string;
  /** The `--sh3-*` tokens the component's styles reference. */
  readonly tokens: readonly string[];
  /** The `sh3-*` children it composes (from its template). */
  readonly composes: readonly string[];
}

const scss = import.meta.glob<string>("../src/components/**/*.component.scss", {
  query: "?raw",
  import: "default",
  eager: true,
});
const html = import.meta.glob<string>("../src/components/**/*.component.html", {
  query: "?raw",
  import: "default",
  eager: true,
});

/** `.../card/card.component.scss` → `sh3-card` (the file stem is the selector). */
function selectorFromPath(path: string): string {
  const file = path.split("/").pop() ?? "";
  return `sh3-${file.replace(/\.component\.(scss|html)$/, "")}`;
}

function matchAllGroup(source: string, re: RegExp): string[] {
  const found = new Set<string>();
  for (const m of source.matchAll(re)) {
    const value = m[1];
    if (value) {
      found.add(value);
    }
  }
  return [...found].sort();
}

const INFO = new Map<string, ComponentInfo>();
function upsert(selector: string, patch: Partial<ComponentInfo>): void {
  const prev = INFO.get(selector) ?? { selector, tokens: [], composes: [] };
  INFO.set(selector, { ...prev, ...patch });
}

for (const [path, source] of Object.entries(scss)) {
  upsert(selectorFromPath(path), {
    tokens: matchAllGroup(source, /var\(\s*(--sh3-[\w-]+)/g),
  });
}
for (const [path, source] of Object.entries(html)) {
  upsert(selectorFromPath(path), {
    composes: matchAllGroup(source, /<(sh3-[\w-]+)/g),
  });
}

/** Metadata for a selector (`sh3-card`), or `null` if it's not a known component. */
export function inspect(selector: string): ComponentInfo | null {
  return INFO.get(selector) ?? null;
}

/** The nearest ancestor (incl. `el`) that is an `sh3-*` element, or `null`. */
export function closestSh3(el: Element): Element | null {
  let node: Element | null = el;
  while (node) {
    if (node.tagName.toLowerCase().startsWith("sh3-")) {
      return node;
    }
    node = node.parentElement;
  }
  return null;
}
