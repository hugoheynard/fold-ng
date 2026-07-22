import { Component, inject } from "@angular/core";
import { FoldToastComponent } from "./toast.component";
import { FoldToastService } from "./toast.service";

/**
 * `<fold-toast-container>` — renders the {@link FoldToastService} queue as a stack
 * of `fold-toast` snackbars, bottom-right, above everything. Mount it **once**
 * (typically in the app shell's content region). It owns only the stacking and
 * positioning; each {@link FoldToastComponent} owns its own surface, and the
 * service handles auto-expiry. A toast's dismiss button removes it from the queue.
 *
 * @selector `fold-toast-container`
 */
@Component({
  selector: "fold-toast-container",
  standalone: true,
  imports: [FoldToastComponent],
  host: { class: "toast-host" },
  templateUrl: "./toast-container.component.html",
  styleUrl: "./toast-container.component.scss",
})
export class FoldToastContainerComponent {
  readonly toastService = inject(FoldToastService);
}
