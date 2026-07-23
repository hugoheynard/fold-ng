import { Directive, inject } from "@angular/core";
import { FoldPanelHostService } from "../src/index";

/**
 * Scopes an `<fold-panel-host>` (and its openers) to a subtree by providing a
 * fresh `FoldPanelHostService` instance. Used so the app-shell preview's panels
 * open inside the preview, not in the gallery's own host. Dev-only.
 *
 * ```html
 * <div panelScope #scope="panelScope">
 *   <fold-app-shell>
 *     …
 *     <button (click)="open(scope.service)">Open panel</button>
 *     <fold-panel-host />
 *   </fold-app-shell>
 * </div>
 * ```
 */
@Directive({
  selector: "[panelScope]",
  standalone: true,
  providers: [FoldPanelHostService],
  exportAs: "panelScope",
})
export class PanelScopeDirective {
  /** The subtree-local panel host — passed to openers so they target it. */
  readonly service = inject(FoldPanelHostService);
}
