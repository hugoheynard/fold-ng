import { Component } from "@angular/core";

/**
 * Fixture for the strictTemplates gate's bite test — the template binds
 * `doesNotExist`, which is NOT a member of the component, so ngtsc's
 * `strictTemplates` must flag it. Kept OUT of the main program (scripts/ isn't
 * in tsconfig.app) so it never reddens the real gate; only the bite spec, via a
 * dedicated tsconfig, ever compiles it.
 */
@Component({
  selector: "fixture-dead-binding",
  standalone: true,
  template: `<p>{{ doesNotExist }}</p>`,
})
export class DeadBindingComponent {}
