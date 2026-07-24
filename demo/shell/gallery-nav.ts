import type { FoldIconName } from "../../src/public-api";

/** One entry in the gallery's Library nav — also the source of its route. */
export interface GalleryNavItem {
  /** Route path segment + section id (e.g. `timeline` → `/timeline`). */
  readonly id: string;
  /** Rail + page-header label. */
  readonly label: string;
  /** Optional rail/page icon (rail falls back to `grid`). */
  readonly icon?: FoldIconName;
  /** Optional rail badge — a tag (`"new"`) or a count. */
  readonly badge?: string | number;
  /** Badge colour — defaults to `follow` (tracks the item's tint). */
  readonly badgeTone?: "follow" | "info" | "accent" | "warning" | "alert";
}

/** A colour-coded block of the Library nav — one `fold-menu-section`. */
export interface GalleryNavGroup {
  readonly label: string;
  /** Section accent — tints the separator + item hover. */
  readonly color: string;
  readonly items: readonly GalleryNavItem[];
}

/**
 * The single source of truth for the gallery's nav **and** its routes: the rail
 * renders these groups, and `gallery.routes.ts` flattens them into routes. Group
 * order === rail order; ids match the route paths.
 */
export const GALLERY_NAV: readonly GalleryNavGroup[] = [
  {
    label: "Layout",
    color: "#06a4a4",
    items: [
      { id: "app-shell", label: "app-shell", icon: "grid" },
      {
        id: "page-layout",
        label: "page-layout",
        badge: "new",
        badgeTone: "info",
      },
      { id: "page-section", label: "page-section" },
      {
        id: "hero-section",
        label: "hero-section",
        badge: "new",
        badgeTone: "info",
      },
      {
        id: "sticky-column",
        label: "sticky-column",
        badge: "new",
        badgeTone: "info",
      },
      {
        id: "aside-layout",
        label: "aside-layout",
        badge: "new",
        badgeTone: "info",
      },
      {
        id: "tab-layout",
        label: "nav-layout",
        badge: "new",
        badgeTone: "info",
      },
    ],
  },
  {
    label: "Navigation",
    color: "#8b5cf6",
    items: [
      { id: "menu", label: "menu" },
      {
        id: "nav-launcher",
        label: "nav-launcher",
        badge: "new",
        badgeTone: "info",
      },
      { id: "tab-nav", label: "view-nav" },
      { id: "tabs", label: "tabs", badge: "new", badgeTone: "info" },
    ],
  },
  {
    label: "Actions",
    color: "#3b82f6",
    items: [
      { id: "button", label: "button" },
      { id: "button-icon", label: "button-icon" },
      { id: "link", label: "link" },
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
      {
        id: "field",
        label: "field · field-list",
        badge: "new",
        badgeTone: "info",
      },
      { id: "badges", label: "badge · status · icon" },
      { id: "avatar", label: "avatar", icon: "team" },
      { id: "timeline", label: "timeline", badge: "new", badgeTone: "info" },
    ],
  },
  {
    label: "Feedback",
    color: "#ec4899",
    items: [
      { id: "toast", label: "toast", icon: "toast" },
      { id: "callout", label: "callout", icon: "info", badge: "new" },
      { id: "disclosure", label: "disclosure", badge: "new" },
      { id: "state", label: "loading · empty", badge: "new" },
    ],
  },
  {
    label: "Forms",
    color: "#10b981",
    items: [
      {
        id: "form",
        label: "input",
        icon: "edit",
        badge: "new",
        badgeTone: "info",
      },
      { id: "form-layout", label: "form layout" },
      { id: "dropzone", label: "file dropzone" },
    ],
  },
  {
    label: "Foundations",
    color: "#64748b",
    items: [
      { id: "themes", label: "themes", icon: "grid", badge: "new" },
      { id: "icons", label: "icons" },
      { id: "spinner", label: "spinner", badge: "new" },
      {
        id: "repeat-press",
        label: "repeat-press",
        badge: "new",
        badgeTone: "info",
      },
    ],
  },
];

/** Flattened nav items, in rail order — used to generate routes. */
export const GALLERY_NAV_ITEMS: readonly GalleryNavItem[] = GALLERY_NAV.flatMap(
  (g) => g.items,
);
