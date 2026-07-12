import { Component, inject } from "@angular/core";
import { ToastService } from "./toast.service";

/**
 * `<sh3-toast-container>` — renders the {@link ToastService} queue as a stack of
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
  template: `@for (toast of toastService.toasts(); track toast.id) {
    <div
      [class]="'toast ' + toast.variant"
      (click)="toastService.dismiss(toast.id)"
    >
      <span class="toast-icon">
        @switch (toast.variant) {
          @case ("success") {
            ✓
          }
          @case ("error") {
            ✕
          }
          @case ("warning") {
            ⚠
          }
          @default {
            ℹ
          }
        }
      </span>
      <span class="toast-message">{{ toast.message }}</span>
    </div>
  }`,
  styles: `
    :host {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 9999;
      display: flex;
      flex-direction: column-reverse;
      gap: 8px;
      pointer-events: none;
    }

    .toast {
      pointer-events: auto;
      display: flex;
      align-items: center;
      gap: 8px;
      max-width: 380px;
      padding: 10px 16px;
      border-radius: var(--sh3-radius-md);
      font-size: var(--sh3-text-sm);
      font-weight: 500;
      color: var(--sh3-color-text);

      /* Shared frosted-glass surface. */
      background: var(--sh3-color-glass);
      backdrop-filter: blur(var(--sh3-blur-glass));
      -webkit-backdrop-filter: blur(var(--sh3-blur-glass));
      border: 1px solid var(--sh3-color-glass-border);
      box-shadow:
        0 12px 32px rgba(0, 0, 0, 0.5),
        0 4px 12px rgba(0, 0, 0, 0.35);
      cursor: pointer;
      animation: sh3-toast-in 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .toast.success {
      border-left: 3px solid var(--sh3-color-success-text);
    }
    .toast.success .toast-icon {
      color: var(--sh3-color-success-text);
    }

    .toast.error {
      border-left: 3px solid var(--sh3-color-alert-text);
    }
    .toast.error .toast-icon {
      color: var(--sh3-color-alert-text);
    }

    .toast.warning {
      border-left: 3px solid var(--sh3-color-warning-text);
    }
    .toast.warning .toast-icon {
      color: var(--sh3-color-warning-text);
    }

    .toast.info {
      border-left: 3px solid var(--sh3-color-primary-text);
    }
    .toast.info .toast-icon {
      color: var(--sh3-color-primary-text);
    }

    .toast-icon {
      flex-shrink: 0;
      font-size: 14px;
      font-weight: 700;
    }
    .toast-message {
      line-height: 1.4;
    }

    @keyframes sh3-toast-in {
      from {
        opacity: 0;
        transform: translateY(12px) scale(0.95);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
  `,
})
export class ToastContainerComponent {
  readonly toastService = inject(ToastService);
}
