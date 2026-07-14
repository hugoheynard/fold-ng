import { Component, inject } from "@angular/core";
import { Sh3ToastService } from "./toast.service";

/**
 * `<sh3-toast-container>` — renders the {@link Sh3ToastService} queue as a stack of
 * frosted glass snackbars, bottom-right, above everything. Mount it **once**
 * (typically in the app shell's content region). Each toast is click-to-dismiss;
 * the service handles auto-expiry.
 *
 * The surface is the shared **glass** language (panels, floating menus); the
 * accent stripe + icon take each variant's `-text` tint — `info` uses the brand
 * `primary` tint, matching the app's informational tone.
 *
 * @selector `sh3-toast-container`
 */
@Component({
  selector: "sh3-toast-container",
  standalone: true,
  host: { class: "toast-host" },
  templateUrl: "./toast-container.component.html",
  styleUrl: "./toast-container.component.scss",
})
export class Sh3ToastContainerComponent {
  readonly toastService = inject(Sh3ToastService);
}
