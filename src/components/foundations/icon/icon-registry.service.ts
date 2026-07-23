import {
  InjectionToken,
  type Provider,
  Service,
  type WritableSignal,
  inject,
  signal,
} from "@angular/core";
import { FOLD_BUILTIN_ICONS } from "./builtin-icons";
import { assertIconSet, assertSvgIcon } from "./icon-safety";

/** A `name → SVG markup` map — the shape both built-in and custom icons take. */
export type FoldIconSet = Readonly<Record<string, string>>;

/** Consumer icons merged in at bootstrap — set via {@link provideFoldIcons}. */
export const ICON_OVERRIDES = new InjectionToken<FoldIconSet>(
  "fold.icons.overrides",
);

/**
 * Register app-specific icons at bootstrap (idiomatic, like `provideRouter`).
 * They merge on top of the built-in set — a custom entry with a built-in key
 * overrides it.
 *
 * ```ts
 * // app.config.ts
 * providers: [provideFoldIcons({ "my-logo": "<svg …>…</svg>" })]
 * ```
 *
 * **Trust contract:** icon markup is rendered unsanitised (see `fold-icon`), so
 * every value must be a static, authored `<svg>` string — never derived from
 * user input. The registry asserts this at seed time and throws on obviously
 * unsafe markup, but it is a backstop, not a sanitiser.
 */
export function provideFoldIcons(icons: FoldIconSet): Provider {
  return { provide: ICON_OVERRIDES, useValue: icons };
}

/**
 * The single source of truth for icon lookup. Root singleton seeded with the
 * package's {@link FOLD_BUILTIN_ICONS}; a consumer adds its own via
 * {@link provideFoldIcons} (bootstrap) or {@link register}/{@link registerMany}
 * (runtime). `fold-icon` resolves every `name` through here.
 *
 * Consumer-supplied markup passes the {@link assertSvgIcon} trust guard on the
 * way in (seed, `register`, `registerMany`); the built-in catalogue is authored
 * in-package and trusted as-is.
 */
@Service()
export class FoldIconRegistry {
  private readonly _icons: WritableSignal<FoldIconSet>;

  constructor() {
    const overrides = inject(ICON_OVERRIDES, { optional: true }) ?? {};
    assertIconSet(overrides);
    this._icons = signal<FoldIconSet>({ ...FOLD_BUILTIN_ICONS, ...overrides });
  }

  /** Register (or override) a single icon at runtime. */
  register(name: string, svg: string): void {
    assertSvgIcon(name, svg);
    this._icons.update((icons) => ({ ...icons, [name]: svg }));
  }

  /** Register (or override) several icons at once. */
  registerMany(icons: FoldIconSet): void {
    assertIconSet(icons);
    this._icons.update((current) => ({ ...current, ...icons }));
  }

  /** The SVG markup for a name, or `undefined` if unknown. Reactive. */
  resolve(name: string): string | undefined {
    return this._icons()[name];
  }

  /** Whether a name is registered. Reactive. */
  has(name: string): boolean {
    return name in this._icons();
  }
}
