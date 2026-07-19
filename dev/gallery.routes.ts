import type { Routes } from "@angular/router";
import { GALLERY_NAV_ITEMS } from "./shell/gallery-nav";
import { StubPage } from "./pages/stub.page";

/**
 * Lazy loaders for the pages that have been ported to their own routed
 * component. Any nav id absent here falls back to {@link StubPage} — so the
 * gallery is always navigable + green while the migration proceeds one page at a
 * time. To port a page: add its `id → () => import(...)` entry.
 */
const PORTED: Record<string, () => Promise<{ default: unknown }>> = {
  hero: () => import("./pages/hero.page"),
  "sticky-column": () => import("./pages/sticky-column.page"),
  "aside-layout": () => import("./pages/aside-layout.page"),
  "tab-nav": () => import("./pages/tab-nav.page"),
  "page-section": () => import("./pages/page-section.page"),
  card: () => import("./pages/card.page"),
  button: () => import("./pages/button.page"),
  "button-icon": () => import("./pages/button-icon.page"),
  link: () => import("./pages/link.page"),
  "element-title": () => import("./pages/element-title.page"),
  "context-card": () => import("./pages/context-card.page"),
  badges: () => import("./pages/badges.page"),
  field: () => import("./pages/field.page"),
  timeline: () => import("./pages/timeline.page"),
  "form-layout": () => import("./pages/form-layout.page"),
  dropzone: () => import("./pages/dropzone.page"),
  toast: () => import("./pages/toast.page"),
  icons: () => import("./pages/icons.page"),
  form: () => import("./pages/form.page"),
  avatar: () => import("./pages/avatar.page"),
  "app-shell": () => import("./pages/app-shell.page"),
  menu: () => import("./pages/menu.page"),
};

/**
 * One route per Library nav entry, derived from the single nav source. `data`
 * carries the page `title` + `icon` (bound to the page component's inputs via
 * `withComponentInputBinding`). Default path → the first entry.
 */
export const GALLERY_ROUTES: Routes = [
  ...GALLERY_NAV_ITEMS.map((item) => {
    const data = { title: item.label, icon: item.icon };
    const load = PORTED[item.id];
    return load
      ? { path: item.id, data, loadComponent: load }
      : { path: item.id, data, component: StubPage };
  }),
  { path: "", pathMatch: "full" as const, redirectTo: GALLERY_NAV_ITEMS[0].id },
  { path: "**", redirectTo: GALLERY_NAV_ITEMS[0].id },
];
