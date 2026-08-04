import { Component, inject, input, type Signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";

import { FoldPanelHostService } from "../panel-host.service";
import { FoldPanelRef } from "../panel-ref";
import type { FoldPanelContent } from "../panel.types";

/**
 * Type-contract guard for the imperative panel API.
 *
 * The `open()` overloads, `FoldPanelRef<TResult>` and `FoldPanelContent<TData>` are
 * enforced by `tsc` on every build — but nothing *tested* that the contract
 * cannot silently loosen (a generic widened to `unknown`, a required `data`
 * made optional). The Angular test builder typechecks spec files, so the
 * assertions below turn any such regression into a build failure:
 *
 * - Positive identities are plain assignments — they stop compiling if the
 *   inferred type drifts (e.g. `open()` starts returning `FoldPanelRef<unknown>`).
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
class DataPanelComponent implements FoldPanelContent<DemoData> {
  readonly data = input.required<DemoData>();
  readonly ref = inject<FoldPanelRef<"saved">>(FoldPanelRef);
}

@Component({
  selector: "test-dataless-panel",
  template: `data-less`,
})
class DatalessPanelComponent {
  readonly ref = inject(FoldPanelRef);
}

@Component({
  selector: "test-optional-data-panel",
  template: `{{ data()?.label }}`,
})
class OptionalDataPanelComponent implements FoldPanelContent<DemoData> {
  // `input<T>()` (no default) → `InputSignal<T | undefined>` — an *optional*
  // data input, the shape that used to force `open<DemoData | undefined, R>()`.
  readonly data = input<DemoData>();
  readonly ref = inject(FoldPanelRef);
}

function _panelTypeContract(host: FoldPanelHostService): void {
  const dataRef = host.open<DemoData, "saved">(DataPanelComponent, {
    data: { label: "x" },
  });
  const datalessRef = host.open(DatalessPanelComponent);

  // Optional-data panel: `data` infers from `config.data` with NO manual widen,
  // and the same component can still be opened data-less (overload 2).
  const optionalWithData = host.open(OptionalDataPanelComponent, {
    data: { label: "x" },
  });
  const optionalNoData = host.open(OptionalDataPanelComponent);

  // ── Positive identities — a widened generic breaks these assignments. ──
  const typedRef: FoldPanelRef<"saved"> = dataRef;
  const typedClosed: Promise<"saved" | undefined> = dataRef.closed;
  const datalessRefTyped: FoldPanelRef<unknown> = datalessRef;
  const dataInput: Signal<DemoData | undefined> | undefined =
    {} as FoldPanelContent<DemoData>["data"];

  // `close()` is typed to the panel's `TResult`; the arg is optional.
  dataRef.close("saved");
  dataRef.close();

  // ── Negative cases (self-checking via unused-directive detection). ──
  // @ts-expect-error — result must match the panel's `FoldPanelRef<'saved'>`
  dataRef.close("nope");
  // @ts-expect-error — `data` must match the component's `data` input shape
  host.open<DemoData, "saved">(DataPanelComponent, { data: { label: 42 } });
  // @ts-expect-error — the data-carrying overload requires `data`
  host.open<DemoData, "saved">(DataPanelComponent, {});
  // @ts-expect-error — an optional-data panel still type-checks its data value
  host.open(OptionalDataPanelComponent, { data: { label: 42 } });

  void [typedRef, typedClosed, datalessRefTyped, dataInput];
  void [optionalWithData, optionalNoData];
}
void _panelTypeContract;

describe("Panel type contract", () => {
  it("open() resolves the FoldPanelRef with the typed result at runtime", async () => {
    TestBed.configureTestingModule({ providers: [FoldPanelHostService] });
    const host = TestBed.inject(FoldPanelHostService);

    const ref = host.open<DemoData, "saved">(DataPanelComponent, {
      data: { label: "x" },
    });
    ref.close("saved");

    await expect(ref.closed).resolves.toBe("saved");
  });
});
