import {
  InjectionToken,
  type Provider,
  Service,
  inject,
  signal,
} from "@angular/core";
import { SH3_BUILTIN_ICONS } from "./icon.registry";

/** A `name → SVG markup` map — the shape both built-in and custom icons take. */
export type Sh3IconSet = Readonly<Record<string, string>>;

/** Consumer icons merged in at bootstrap — set via {@link provideSh3Icons}. */
export const ICON_OVERRIDES = new InjectionToken<Sh3IconSet>(
  "sh3.icons.overrides",
);

/**
 * Register app-specific icons at bootstrap (idiomatic, like `provideRouter`).
 * They merge on top of the built-in set — a custom entry with a built-in key
 * overrides it.
 *
 * ```ts
 * // app.config.ts
 * providers: [provideSh3Icons({ "my-logo": "<svg …>…</svg>" })]
 * ```
 */
export function provideSh3Icons(icons: Sh3IconSet): Provider {
  return { provide: ICON_OVERRIDES, useValue: icons };
}

/**
 * The single source of truth for icon lookup. Root singleton seeded with the
 * package's {@link SH3_BUILTIN_ICONS}; a consumer adds its own via
 * {@link provideSh3Icons} (bootstrap) or {@link register}/{@link registerMany}
 * (runtime). `sh3-icon` resolves every `name` through here.
 */
@Service()
export class Sh3IconRegistry {
  private readonly _icons = signal<Sh3IconSet>({
    ...SH3_BUILTIN_ICONS,
    ...(inject(ICON_OVERRIDES, { optional: true }) ?? {}),
  });

  /** Register (or override) a single icon at runtime. */
  register(name: string, svg: string): void {
    this._icons.update((icons) => ({ ...icons, [name]: svg }));
  }

  /** Register (or override) several icons at once. */
  registerMany(icons: Sh3IconSet): void {
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
