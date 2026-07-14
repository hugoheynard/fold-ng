import { provideZonelessChangeDetection } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { GalleryComponent } from "./gallery.component";
import "../src/tokens/index.css";

/**
 * Boots the gallery standalone — zoneless, exactly like the app, with the
 * package's own token layer. No app, no router, no providers beyond change
 * detection (the icon registry auto-registers the built-in set).
 */
bootstrapApplication(GalleryComponent, {
  providers: [provideZonelessChangeDetection()],
}).catch((err) => console.error(err));
