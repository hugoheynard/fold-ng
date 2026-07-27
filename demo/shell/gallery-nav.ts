import type { FoldIconName } from "../../src/public-api";
import { isInDev } from "./gallery-release";

/** One entry in the gallery's Library nav — also the source of its route. */
export interface GalleryNavItem {
  /** Route path segment + section id (e.g. `timeline` → `/timeline`). */
  readonly id: string;
  /** Rail + page-header label. */
  readonly label: string;
  /** Optional rail/page icon (rail falls back to `grid`). */
  readonly icon?: FoldIconName;
  /**
   * The version this component first ships in. Drives the **derived** `dev`
   * badge (via {@link isInDev}) — set it to the upcoming version while a
   * component is unreleased, and omit it once shipped. Never badge by hand.
   */
  readonly since?: string;
  /**
   * The rail badge. **Derived** for components (`"dev"` when `since` is above the
   * published version — never author it there); may be authored directly on a
   * meta entry like `/lab` that is permanently a dev surface.
   */
  readonly badge?: string | number;
  /** Badge tone — authored alongside {@link badge} on meta entries; else derived. */
  readonly badgeTone?: "follow" | "info" | "accent" | "warning" | "alert";
}

/** A colour-coded block of the Library nav — one `fold-menu-section`. */
export interface GalleryNavGroup {
  readonly label: string;
  /** Section accent — tints the separator + item hover. */
  readonly color: string;
  readonly items: readonly GalleryNavItem[];
}

/** The next version — unreleased components carry this as their `since`. */
const NEXT = "0.5.0";

/**
 * The single source of truth for the gallery's nav **and** its routes: the rail
 * renders these groups, and `gallery.routes.ts` flattens them into routes. Group
 * order === rail order; ids match the route paths. Badges are **not** authored
 * here — an item's `since` derives its `dev` badge (see {@link isInDev}).
 */
const AUTHORED_NAV: readonly GalleryNavGroup[] = [
  {
    label: "Layout",
    color: "#06a4a4",
    items: [
      { id: "app-shell", label: "app-shell", icon: "grid" },
      { id: "page-layout", label: "page-layout" },
      { id: "page-section", label: "page-section" },
      { id: "hero-section", label: "hero-section" },
      { id: "sticky-column", label: "sticky-column" },
      { id: "aside-layout", label: "aside-layout" },
      { id: "tab-layout", label: "nav-layout" },
    ],
  },
  {
    label: "Navigation",
    color: "#8b5cf6",
    items: [
      { id: "menu", label: "menu" },
      { id: "popover", label: "popover · dropdown", since: NEXT },
      { id: "nav-launcher", label: "nav-launcher" },
      { id: "tab-nav", label: "view-nav" },
      { id: "tabs", label: "tabs" },
    ],
  },
  {
    label: "Actions",
    color: "#3b82f6",
    items: [
      { id: "button", label: "button" },
      { id: "button-icon", label: "button-icon" },
      { id: "link", label: "link" },
      { id: "inline-confirm", label: "inline-confirm", since: NEXT },
    ],
  },
  {
    label: "Content",
    color: "#f59e0b",
    items: [
      { id: "card", label: "card" },
      { id: "hero-card", label: "hero-card" },
      { id: "context-card", label: "context-card" },
      { id: "element-title", label: "element-title" },
      { id: "field", label: "field · field-list" },
      { id: "badges", label: "badge · status · icon" },
      { id: "avatar", label: "avatar", icon: "team" },
      { id: "timeline", label: "timeline" },
      { id: "data-table", label: "data-table", since: NEXT },
      { id: "paginator", label: "paginator", since: NEXT },
    ],
  },
  {
    label: "Feedback",
    color: "#ec4899",
    items: [
      { id: "toast", label: "toast", icon: "toast" },
      { id: "callout", label: "callout", icon: "info" },
      { id: "disclosure", label: "disclosure" },
      { id: "state", label: "loading · empty" },
    ],
  },
  {
    label: "Forms",
    color: "#10b981",
    items: [
      { id: "form", label: "input", icon: "edit" },
      { id: "listbox", label: "listbox (select)", since: NEXT },
      { id: "password", label: "password field", since: NEXT },
      { id: "view-toggle", label: "view-toggle", since: NEXT },
      { id: "checkbox", label: "checkbox", since: NEXT },
      { id: "slider", label: "slider · range", since: NEXT },
      { id: "form-layout", label: "form layout" },
      { id: "dropzone", label: "file dropzone" },
    ],
  },
  {
    label: "Project",
    color: "#0ea5e9",
    items: [
      { id: "changelog", label: "changelog", icon: "timeline" },
      {
        id: "lab",
        label: "in dev",
        icon: "wrench",
        badge: "dev",
        badgeTone: "warning",
      },
    ],
  },
  {
    label: "Foundations",
    color: "#64748b",
    items: [
      { id: "themes", label: "themes", icon: "grid" },
      { id: "surfaces", label: "surfaces", icon: "palette" },
      { id: "icons", label: "icons" },
      { id: "spinner", label: "spinner" },
      { id: "repeat-press", label: "repeat-press" },
    ],
  },
];

/** Attach the derived `dev` badge to any item still unreleased on npm. */
function withBadges(group: GalleryNavGroup): GalleryNavGroup {
  return {
    ...group,
    items: group.items.map((item) =>
      isInDev(item.since)
        ? { ...item, badge: "dev", badgeTone: "warning" as const }
        : item,
    ),
  };
}

/** The nav, badges derived — the rail + routes both read this. */
export const GALLERY_NAV: readonly GalleryNavGroup[] =
  AUTHORED_NAV.map(withBadges);

/** Flattened nav items, in rail order — used to generate routes. */
export const GALLERY_NAV_ITEMS: readonly GalleryNavItem[] = GALLERY_NAV.flatMap(
  (g) => g.items,
);

/** The components not yet on npm (in dev on this branch) — powers `/lab`. */
export const GALLERY_DEV_ITEMS: readonly GalleryNavItem[] =
  GALLERY_NAV_ITEMS.filter((i) => isInDev(i.since));

/** The rail label for a nav id (falls back to the id itself). */
export function galleryLabel(id: string): string {
  return GALLERY_NAV_ITEMS.find((i) => i.id === id)?.label ?? id;
}
