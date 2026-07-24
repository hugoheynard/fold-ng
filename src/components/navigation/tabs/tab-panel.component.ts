import { Component, computed, input } from "@angular/core";
import type { FoldTabsContext } from "./tabs.component";

/**
 * `<fold-tab-panel>` — one panel of a {@link FoldTabsComponent}. Handed the bar
 * via a template ref (`[tabs]="t"`, where `#t="foldTabs"`) plus its `key`, it
 * becomes a `role="tabpanel"` named by its tab (`aria-labelledby`), reachable by
 * `aria-controls` from that tab, focusable while active, and `hidden` otherwise.
 *
 * The ref pairing is what lets the tabs bar and its panels sit in **different**
 * slots (e.g. the bar in a `fold-nav-layout`'s nav slot, the panels in its
 * content) and still coordinate.
 *
 * ```html
 * <fold-tabs #t="foldTabs" [tabs]="tabs" [activeKey]="tab()" (tabChange)="tab.set($event)" />
 * <fold-tab-panel [tabs]="t" key="overview">…</fold-tab-panel>
 * ```
 *
 * @selector `fold-tab-panel`
 */
@Component({
  selector: "fold-tab-panel",
  standalone: true,
  host: {
    role: "tabpanel",
    "[id]": "panelId()",
    "[attr.aria-labelledby]": "labelledBy()",
    "[attr.tabindex]": "isActive() ? 0 : null",
    "[hidden]": "!isActive()",
  },
  template: "<ng-content />",
})
export class FoldTabPanelComponent {
  /** The owning `fold-tabs`, read via its template ref (`#t="foldTabs"`). */
  readonly tabs = input.required<FoldTabsContext>();
  /** This panel's tab key — must match one tab in the bar. */
  readonly key = input.required<string>();

  protected readonly isActive = computed(
    () => this.tabs().activeKey() === this.key(),
  );
  protected readonly panelId = computed(() => this.tabs().panelId(this.key()));
  protected readonly labelledBy = computed(() => this.tabs().tabId(this.key()));
}
