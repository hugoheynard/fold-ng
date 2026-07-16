import { provideZonelessChangeDetection } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideSh3Icons } from "../src/index";
import { GalleryComponent } from "./gallery.component";
import "../src/tokens/index.css";

/**
 * Boots the gallery standalone — zoneless, exactly like the app, with the
 * package's own token layer. No app, no router; the icon registry auto-registers
 * the built-in set, and `provideSh3Icons` demonstrates the consumer-extension
 * path — a gallery-only `toast` snackbar glyph for its TOC entry (a nav label,
 * not a shared component glyph, so it stays out of the built-in set).
 */
bootstrapApplication(GalleryComponent, {
  providers: [
    provideZonelessChangeDetection(),
    provideSh3Icons({
      toast:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="9" width="20" height="8" rx="2.5"/><circle cx="6.5" cy="13" r="1"/><line x1="10" y1="13" x2="18" y2="13"/></svg>',
    }),
  ],
}).catch((err) => console.error(err));
