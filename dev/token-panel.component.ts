import { Component, afterNextRender, computed, signal } from "@angular/core";
import { Sh3TabNavComponent, type Sh3TabNavItem } from "../src/index";

/** Top-level token category — the sub-nav tabs. */
type TokenCategory = "palette" | "fonts" | "scale";
const CATEGORY_ORDER: readonly TokenCategory[] = ["palette", "fonts", "scale"];
const CATEGORY_LABELS: Record<TokenCategory, string> = {
  palette: "Palette",
  fonts: "Fonts",
  scale: "Scale",
};

/** One editable token, discovered from the loaded stylesheets. */
interface TokenEntry {
  /** Full custom-property name, e.g. `--sh3-ref-teal-500` / `--sh3-radius-md`. */
  readonly name: string;
  /** Short label, e.g. `teal-500` / `radius-md`. */
  readonly label: string;
  /** The value declared in the token layer — the reset target. */
  readonly base: string;
  /** `color` renders a swatch picker; `value` a text field (px / rem / …). */
  readonly kind: "color" | "value";
}
interface TokenGroup {
  readonly family: string;
  readonly category: TokenCategory;
  readonly entries: readonly TokenEntry[];
}

/** Which sub-nav category a token belongs to. */
function categoryOf(entry: TokenEntry): TokenCategory {
  if (entry.kind === "color") {
    return "palette";
  }
  return entry.name.startsWith("--sh3-text-") ? "fonts" : "scale";
}

/** Display order for the families; unknown families sort last. */
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
  "radius",
  "space",
  "text",
];

/** Non-colour scale tokens surfaced as editable text values. */
const VALUE_PREFIXES = ["--sh3-radius-", "--sh3-space-", "--sh3-text-"];

/** Kind + label for a custom-property name, or null if we don't edit it. */
function classify(name: string): Pick<TokenEntry, "kind" | "label"> | null {
  if (name.startsWith("--sh3-ref-")) {
    return { kind: "color", label: name.replace("--sh3-ref-", "") };
  }
  if (VALUE_PREFIXES.some((prefix) => name.startsWith(prefix))) {
    return { kind: "value", label: name.replace("--sh3-", "") };
  }
  return null;
}

/** Every editable token declared across the loaded stylesheets, read live from
 *  the CSSOM so the panel never duplicates the token CSS. Cross-origin sheets
 *  throw on `.cssRules` — skipped. */
function collectTokens(sheets: StyleSheetList): TokenEntry[] {
  const seen = new Map<string, TokenEntry>();
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
        const meta = seen.has(name) ? null : classify(name);
        if (meta) {
          const base = rule.style.getPropertyValue(name).trim();
          seen.set(name, { name, base, ...meta });
        }
      }
    }
  }
  return [...seen.values()];
}

/** Family of a label: the first segment (`teal-500`→`teal`, `radius-md`→`radius`). */
function familyOf(label: string): string {
  const dash = label.indexOf("-");
  return dash === -1 ? label : label.slice(0, dash);
}

function groupByFamily(entries: TokenEntry[]): TokenGroup[] {
  const byFamily = new Map<string, TokenEntry[]>();
  for (const entry of entries) {
    const family = familyOf(entry.label);
    const list = byFamily.get(family) ?? [];
    list.push(entry);
    byFamily.set(family, list);
  }
  const rank = (family: string): number => {
    const index = FAMILY_ORDER.indexOf(family);
    return index === -1 ? FAMILY_ORDER.length : index;
  };
  return [...byFamily.entries()]
    .map(([family, list]) => ({
      family,
      category: categoryOf(list[0]),
      entries: list,
    }))
    .sort((a, b) => rank(a.family) - rank(b.family));
}

/**
 * The gallery's live token editor (the "tokens" page). A sub-nav (Palette /
 * Fonts / Scale) switches which token family group is shown. Edits override
 * palette primitives (`--sh3-ref-*`) and scale tokens (`radius` / `space` /
 * `text`) as inline properties on the document root; because every semantic
 * token resolves through those, one edit re-themes the whole preview. Reset
 * removes the overrides and the stylesheet defaults take over again. Dev-only.
 */
@Component({
  selector: "app-token-panel",
  standalone: true,
  imports: [Sh3TabNavComponent],
  templateUrl: "./token-panel.component.html",
  styleUrl: "./token-panel.component.css",
})
export class TokenPanelComponent {
  private readonly allGroups = signal<TokenGroup[]>([]);
  /** The categories actually present, in display order — drives the sub-nav. */
  protected readonly tabItems = computed<Sh3TabNavItem[]>(() => {
    const present = new Set(this.allGroups().map((g) => g.category));
    return CATEGORY_ORDER.filter((c) => present.has(c)).map((c) => ({
      key: c,
      label: CATEGORY_LABELS[c],
    }));
  });
  protected readonly activeCategory = signal<string>("palette");
  /** The groups of the active category. */
  protected readonly groups = computed(() =>
    this.allGroups().filter((g) => g.category === this.activeCategory()),
  );

  /** Name → overridden value, for the ones the user has touched. */
  protected readonly overrides = signal<Record<string, string>>({});
  protected readonly dirtyCount = computed(
    () => Object.keys(this.overrides()).length,
  );

  constructor() {
    afterNextRender(() => {
      this.allGroups.set(groupByFamily(collectTokens(document.styleSheets)));
    });
  }

  /** Current value for an entry — the override if edited, else the base. */
  protected valueOf(entry: TokenEntry): string {
    return this.overrides()[entry.name] ?? entry.base;
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
