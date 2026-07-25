import type { Type } from "@angular/core";
import type { Route, Routes } from "@angular/router";
import { GALLERY_NAV_ITEMS } from "./shell/gallery-nav";
import { StubPage } from "./pages/_shared/stub.page";

/**
 * Lazy loaders for the pages that have been ported to their own routed
 * component. Any nav id absent here falls back to {@link StubPage} — so the
 * gallery is always navigable + green while the migration proceeds one page at a
 * time. To port a page: add its `id → () => import(...)` entry.
 */
const PORTED: Record<string, () => Promise<{ default: Type<unknown> }>> = {
  home: () => import("./pages/home/home.page"),
  "hero-card": () => import("./pages/hero-card/hero-card.page"),
  "sticky-column": () => import("./pages/sticky-column/sticky-column.page"),
  "aside-layout": () => import("./pages/aside-layout/aside-layout.page"),
  "tab-layout": () => import("./pages/tab-layout/tab-layout.page"),
  "page-layout": () => import("./pages/page-layout/page-layout.page"),
  "tab-nav": () => import("./pages/tab-nav/tab-nav.page"),
  tabs: () => import("./pages/tabs/tabs.page"),
  "page-section": () => import("./pages/page-section/page-section.page"),
  "hero-section": () => import("./pages/hero-section/hero-section.page"),
  card: () => import("./pages/card/card.page"),
  button: () => import("./pages/button/button.page"),
  "button-icon": () => import("./pages/button-icon/button-icon.page"),
  link: () => import("./pages/link/link.page"),
  "element-title": () => import("./pages/element-title/element-title.page"),
  "context-card": () => import("./pages/context-card/context-card.page"),
  badges: () => import("./pages/badges/badges.page"),
  field: () => import("./pages/field/field.page"),
  timeline: () => import("./pages/timeline/timeline.page"),
  "form-layout": () => import("./pages/form-layout/form-layout.page"),
  dropzone: () => import("./pages/dropzone/dropzone.page"),
  toast: () => import("./pages/toast/toast.page"),
  callout: () => import("./pages/callout/callout.page"),
  disclosure: () => import("./pages/disclosure/disclosure.page"),
  state: () => import("./pages/state/state.page"),
  icons: () => import("./pages/icons/icons.page"),
  spinner: () => import("./pages/spinner/spinner.page"),
  "repeat-press": () => import("./pages/repeat-press/repeat-press.page"),
  themes: () => import("./pages/themes/themes.page"),
  surfaces: () => import("./pages/surfaces/surfaces.page"),
  form: () => import("./pages/form/form.page"),
  avatar: () => import("./pages/avatar/avatar.page"),
  "app-shell": () => import("./pages/app-shell/app-shell.page"),
  menu: () => import("./pages/menu/menu.page"),
  "nav-launcher": () => import("./pages/nav-launcher/nav-launcher.page"),
};

/**
 * One route per Library nav entry, derived from the single nav source. `data`
 * carries the page `title` + `icon` (bound to the page component's inputs via
 * `withComponentInputBinding`). Default path → the first entry.
 */
export const GALLERY_ROUTES: Routes = [
  ...GALLERY_NAV_ITEMS.map((item): Route => {
    const data = { title: item.label, icon: item.icon };
    const load = PORTED[item.id];
    return load
      ? { path: item.id, data, loadComponent: load }
      : { path: item.id, data, component: StubPage };
  }),
  {
    path: "",
    pathMatch: "full" as const,
    loadComponent: () => import("./pages/home/home.page"),
  },
  { path: "**", redirectTo: "" },
];
