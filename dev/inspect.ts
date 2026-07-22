/// <reference types="vite/client" />

/**
 * Component metadata for the double-click inspector, derived from each
 * component's own source at build time (Vite `import.meta.glob`, `?raw`): the
 * `.scss` gives the design tokens it references, the `.html` gives the `fold-*`
 * children it composes. Zero duplication — it reads the real files. Dev-only.
 */
export interface ComponentInfo {
  /** The element selector, e.g. `fold-card`. */
  readonly selector: string;
  /** The `--fold-*` tokens the component's styles reference. */
  readonly tokens: readonly string[];
  /** The `fold-*` children it composes (from its template). */
  readonly composes: readonly string[];
}

/** What the inspector panel edits: a component's metadata + the live element it
 *  was opened for (token overrides are set inline on this element only). */
export interface InspectTarget {
  readonly info: ComponentInfo;
  readonly element: HTMLElement;
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

/** `.../card/card.component.scss` → `fold-card` (the file stem is the selector). */
function selectorFromPath(path: string): string {
  const file = path.split("/").pop() ?? "";
  return `fold-${file.replace(/\.component\.(scss|html)$/, "")}`;
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
    tokens: matchAllGroup(source, /var\(\s*(--fold-[\w-]+)/g),
  });
}
for (const [path, source] of Object.entries(html)) {
  upsert(selectorFromPath(path), {
    composes: matchAllGroup(source, /<(fold-[\w-]+)/g),
  });
}

/** Metadata for a selector (`fold-card`), or `null` if it's not a known component. */
export function inspect(selector: string): ComponentInfo | null {
  return INFO.get(selector) ?? null;
}

/** The nearest ancestor (incl. `el`) that is an `fold-*` element, or `null`. */
export function closestFold(el: Element): HTMLElement | null {
  let node: Element | null = el;
  while (node) {
    if (
      node instanceof HTMLElement &&
      node.tagName.toLowerCase().startsWith("fold-")
    ) {
      return node;
    }
    node = node.parentElement;
  }
  return null;
}
