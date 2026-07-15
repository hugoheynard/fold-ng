import { Component, inject } from "@angular/core";
import { Sh3ToastComponent } from "./toast.component";
import { Sh3ToastService } from "./toast.service";

/**
 * `<sh3-toast-container>` — renders the {@link Sh3ToastService} queue as a stack
 * of `sh3-toast` snackbars, bottom-right, above everything. Mount it **once**
 * (typically in the app shell's content region). It owns only the stacking and
 * positioning; each {@link Sh3ToastComponent} owns its own surface, and the
 * service handles auto-expiry. A toast's dismiss button removes it from the queue.
 *
 * @selector `sh3-toast-container`
 */
@Component({
  selector: "sh3-toast-container",
  standalone: true,
  imports: [Sh3ToastComponent],
  host: { class: "toast-host" },
  templateUrl: "./toast-container.component.html",
  styleUrl: "./toast-container.component.scss",
})
export class Sh3ToastContainerComponent {
  readonly toastService = inject(Sh3ToastService);
}
