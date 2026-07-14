import { Component, afterNextRender, computed, signal } from "@angular/core";

/** One editable palette entry, discovered from the loaded stylesheets. */
interface Swatch {
  /** Full custom-property name, e.g. `--sh3-ref-teal-500`. */
  readonly name: string;
  /** Short label, e.g. `teal-500`. */
  readonly label: string;
  /** The value declared in `primitives.css` (`#rrggbb`) — the reset target. */
  readonly base: string;
}
interface SwatchGroup {
  readonly family: string;
  readonly swatches: readonly Swatch[];
}

/** Display order for the colour families; unknown families sort last. */
const FAMILY_ORDER = [
  "teal",
  "amber",
  "red",
  "purple",
  "green",
  "ink",
  "cloud",
  "slate",
  "white",
  "black",
];

/** Every `--sh3-ref-*` custom property declared across the loaded stylesheets.
 *  Cross-origin sheets throw on `.cssRules` — skipped. Read live from the CSSOM
 *  so the panel never duplicates `primitives.css` and picks up new tokens. */
function collectPrimitives(sheets: StyleSheetList): Swatch[] {
  const seen = new Map<string, string>();
  for (const sheet of Array.from(sheets)) {
    let rules: CSSRuleList;
    try {
      rules = sheet.cssRules;
    } catch {
      continue; // cross-origin stylesheet — not inspectable
    }
    for (const rule of Array.from(rules)) {
      if (!(rule instanceof CSSStyleRule)) {
        continue;
      }
      for (let i = 0; i < rule.style.length; i++) {
        const name = rule.style.item(i);
        if (name.startsWith("--sh3-ref-") && !seen.has(name)) {
          seen.set(name, rule.style.getPropertyValue(name).trim());
        }
      }
    }
  }
  return [...seen].map(([name, base]) => ({
    name,
    base,
    label: name.replace("--sh3-ref-", ""),
  }));
}

/** Family of a label: the part before a trailing `-<scale>` (`teal-500`→`teal`),
 *  else the whole label (`white`→`white`). */
function familyOf(label: string): string {
  const scale = /^(.*)-\d+$/.exec(label);
  return scale?.[1] ?? label;
}

function groupByFamily(swatches: Swatch[]): SwatchGroup[] {
  const byFamily = new Map<string, Swatch[]>();
  for (const swatch of swatches) {
    const family = familyOf(swatch.label);
    const list = byFamily.get(family) ?? [];
    list.push(swatch);
    byFamily.set(family, list);
  }
  const rank = (family: string): number => {
    const index = FAMILY_ORDER.indexOf(family);
    return index === -1 ? FAMILY_ORDER.length : index;
  };
  return [...byFamily.entries()]
    .map(([family, list]) => ({ family, swatches: list }))
    .sort((a, b) => rank(a.family) - rank(b.family));
}

/**
 * The gallery's permanent right panel: a live token editor. It overrides
 * palette primitives (`--sh3-ref-*`) as inline properties on the document root;
 * because every semantic token resolves through `var(--sh3-ref-*)`, one edit
 * re-themes the whole preview. Reset removes the overrides and the stylesheet
 * defaults take over again. Dev-only — never part of the published package.
 */
@Component({
  selector: "app-token-panel",
  standalone: true,
  templateUrl: "./token-panel.component.html",
  styleUrl: "./token-panel.component.css",
})
export class TokenPanelComponent {
  protected readonly groups = signal<SwatchGroup[]>([]);
  /** Name → overridden value, for the ones the user has touched. */
  protected readonly overrides = signal<Record<string, string>>({});
  protected readonly dirtyCount = computed(
    () => Object.keys(this.overrides()).length,
  );

  constructor() {
    afterNextRender(() => {
      this.groups.set(groupByFamily(collectPrimitives(document.styleSheets)));
    });
  }

  /** Current value for a swatch — the override if edited, else the base. */
  protected valueOf(swatch: Swatch): string {
    return this.overrides()[swatch.name] ?? swatch.base;
  }

  protected set(name: string, value: string): void {
    document.documentElement.style.setProperty(name, value);
    this.overrides.update((all) => ({ ...all, [name]: value }));
  }

  protected reset(): void {
    for (const name of Object.keys(this.overrides())) {
      document.documentElement.style.removeProperty(name);
    }
    this.overrides.set({});
  }
}
