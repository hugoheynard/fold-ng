import type { Sh3IconName } from "../../src/index";

/** One entry in the gallery's Library nav — also the source of its route. */
export interface GalleryNavItem {
  /** Route path segment + section id (e.g. `timeline` → `/timeline`). */
  readonly id: string;
  /** Rail + page-header label. */
  readonly label: string;
  /** Optional rail/page icon (rail falls back to `grid`). */
  readonly icon?: Sh3IconName;
  /** Optional rail badge — a tag (`"new"`) or a count. */
  readonly badge?: string | number;
  /** Badge colour — defaults to `follow` (tracks the item's tint). */
  readonly badgeTone?: "follow" | "info" | "accent" | "warning" | "alert";
}

/** A colour-coded block of the Library nav — one `sh3-menu-section`. */
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
      { id: "page-section", label: "page-section" },
      { id: "hero", label: "hero" },
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
        label: "tab-layout",
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
      { id: "tab-nav", label: "tab-nav" },
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
    items: [{ id: "icons", label: "icons" }],
  },
];

/** Flattened nav items, in rail order — used to generate routes. */
export const GALLERY_NAV_ITEMS: readonly GalleryNavItem[] = GALLERY_NAV.flatMap(
  (g) => g.items,
);
