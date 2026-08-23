import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import type { ChangelogRun } from "../../shell/changelog.generated";

/**
 * Renders the parsed inline runs of a changelog line — `code`, **strong**, or
 * plain text — with no runtime markdown parsing and no `innerHTML` (each run is
 * a typed, pre-tokenised value from the build-time changelog data, so it is
 * XSS-safe by construction).
 */
@Component({
  selector: "gal-changelog-runs",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    code {
      font-family: var(--fold-font-mono);
      font-size: 0.88em;
      background: var(--fold-color-surface-subtle);
      color: var(--fold-color-text-primary);
      padding: 0 0.3em;
      border-radius: var(--fold-radius-xs);
    }
  `,
  template: `@for (run of runs(); track $index) {
    @switch (run.kind) {
      @case ("code") {
        <code>{{ run.value }}</code>
      }
      @case ("strong") {
        <strong>{{ run.value }}</strong>
      }
      @default {
        {{ run.value }}
      }
    }
  }`,
})
export class ChangelogRunsComponent {
  readonly runs = input.required<readonly ChangelogRun[]>();
}
