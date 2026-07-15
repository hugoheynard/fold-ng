import { Directive, inject } from "@angular/core";
import { Sh3PanelHostService } from "../src/index";

/**
 * Scopes an `<sh3-panel-host>` (and its openers) to a subtree by providing a
 * fresh `Sh3PanelHostService` instance. Used so the app-shell preview's panels
 * open inside the preview, not in the gallery's own host. Dev-only.
 *
 * ```html
 * <div panelScope #scope="panelScope">
 *   <sh3-app-shell>
 *     …
 *     <button (click)="open(scope.service)">Open panel</button>
 *     <sh3-panel-host />
 *   </sh3-app-shell>
 * </div>
 * ```
 */
@Directive({
  selector: "[panelScope]",
  standalone: true,
  providers: [Sh3PanelHostService],
  exportAs: "panelScope",
})
export class PanelScopeDirective {
  /** The subtree-local panel host — passed to openers so they target it. */
  readonly service = inject(Sh3PanelHostService);
}
