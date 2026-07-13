import { Component, inject, input, type InputSignal } from "@angular/core";
import { TestBed } from "@angular/core/testing";

import { Sh3PanelHostService } from "../panel-host.service";
import { Sh3PanelRef } from "../panel-ref";
import type { Sh3PanelContent } from "../panel.types";

/**
 * Type-contract guard for the imperative panel API.
 *
 * The `open()` overloads, `Sh3PanelRef<TResult>` and `Sh3PanelContent<TData>` are
 * enforced by `tsc` on every build — but nothing *tested* that the contract
 * cannot silently loosen (a generic widened to `unknown`, a required `data`
 * made optional). The Angular test builder typechecks spec files, so the
 * assertions below turn any such regression into a build failure:
 *
 * - Positive identities are plain assignments — they stop compiling if the
 *   inferred type drifts (e.g. `open()` starts returning `Sh3PanelRef<unknown>`).
 * - Negative cases use `@ts-expect-error`, which is self-checking: if the line
 *   below it ever *stops* erroring, `tsc` reports an unused directive and the
 *   build fails. So the guard breaks in both directions.
 *
 * `_panelTypeContract` is never invoked — it exists only to be typechecked.
 */

type DemoData = { readonly label: string };

@Component({
  selector: "test-typed-panel",
  template: `{{ data().label }}`,
})
class DataPanelComponent implements Sh3PanelContent<DemoData> {
  readonly data = input.required<DemoData>();
  readonly ref = inject<Sh3PanelRef<"saved">>(Sh3PanelRef);
}

@Component({
  selector: "test-dataless-panel",
  template: `data-less`,
})
class DatalessPanelComponent {
  readonly ref = inject(Sh3PanelRef);
}

function _panelTypeContract(host: Sh3PanelHostService): void {
  const dataRef = host.open<DemoData, "saved">(DataPanelComponent, {
    data: { label: "x" },
  });
  const datalessRef = host.open(DatalessPanelComponent);

  // ── Positive identities — a widened generic breaks these assignments. ──
  const typedRef: Sh3PanelRef<"saved"> = dataRef;
  const typedClosed: Promise<"saved" | undefined> = dataRef.closed;
  const datalessRefTyped: Sh3PanelRef<unknown> = datalessRef;
  const dataInput: InputSignal<DemoData> | undefined =
    {} as Sh3PanelContent<DemoData>["data"];

  // `close()` is typed to the panel's `TResult`; the arg is optional.
  dataRef.close("saved");
  dataRef.close();

  // ── Negative cases (self-checking via unused-directive detection). ──
  // @ts-expect-error — result must match the panel's `Sh3PanelRef<'saved'>`
  dataRef.close("nope");
  // @ts-expect-error — `data` must match the component's `data` input shape
  host.open<DemoData, "saved">(DataPanelComponent, { data: { label: 42 } });
  // @ts-expect-error — the data-carrying overload requires `data`
  host.open<DemoData, "saved">(DataPanelComponent, {});

  void [typedRef, typedClosed, datalessRefTyped, dataInput];
}
void _panelTypeContract;

describe("Panel type contract", () => {
  it("open() resolves the Sh3PanelRef with the typed result at runtime", async () => {
    TestBed.configureTestingModule({ providers: [Sh3PanelHostService] });
    const host = TestBed.inject(Sh3PanelHostService);

    const ref = host.open<DemoData, "saved">(DataPanelComponent, {
      data: { label: "x" },
    });
    ref.close("saved");

    await expect(ref.closed).resolves.toBe("saved");
  });
});
