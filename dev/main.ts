import { provideZonelessChangeDetection } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import {
  provideRouter,
  withComponentInputBinding,
  withHashLocation,
} from "@angular/router";
import { provideSh3Icons } from "../src/index";
import { GalleryShellComponent } from "./shell/gallery-shell.component";
import { GALLERY_ROUTES } from "./gallery.routes";
import "../src/tokens/index.css";
import "./gallery.css";

/**
 * Boots the gallery standalone — zoneless, exactly like the app, with the
 * package's own token layer. Real routing: each Library nav entry is a route
 * rendering its own page (see `gallery.routes.ts`); hash location keeps the
 * static `dev:build` output servable anywhere, and component-input binding feeds
 * each route's `data` (title/icon) straight into its page. The icon registry
 * auto-registers the built-in set; `provideSh3Icons` demonstrates the
 * consumer-extension path — a gallery-only `toast` snackbar glyph for its nav.
 */
bootstrapApplication(GalleryShellComponent, {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(
      GALLERY_ROUTES,
      withHashLocation(),
      withComponentInputBinding(),
    ),
    provideSh3Icons({
      toast:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="9" width="20" height="8" rx="2.5"/><circle cx="6.5" cy="13" r="1"/><line x1="10" y1="13" x2="18" y2="13"/></svg>',
    }),
  ],
}).catch((err) => console.error(err));
