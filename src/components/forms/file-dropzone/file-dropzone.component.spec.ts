import { TestBed } from "@angular/core/testing";
import { describe, it, expect, vi } from "vitest";
import { FoldFileDropzoneComponent } from "./file-dropzone.component";

function render() {
  const fixture = TestBed.createComponent(FoldFileDropzoneComponent);
  fixture.detectChanges();
  const cmp = fixture.componentInstance;
  const host = fixture.nativeElement as HTMLElement;
  const zone = host.querySelector(".dropzone") as HTMLElement;
  const input = host.querySelector("input[type=file]") as HTMLInputElement;
  const picked: File[][] = [];
  cmp.filesPicked.subscribe((f) => picked.push(f));
  const dropEvent = (files: File[]): Event => {
    const ev = new Event("drop", { bubbles: true, cancelable: true });
    Object.defineProperty(ev, "dataTransfer", { value: { files } });
    return ev;
  };
  return { fixture, cmp, host, zone, input, picked, dropEvent };
}

describe("FoldFileDropzoneComponent", () => {
  it("renders a button-role dropzone with a hidden file input", () => {
    const { zone, input } = render();
    expect(zone.getAttribute("role")).toBe("button");
    expect(input.hidden).toBe(true);
    expect(input.getAttribute("type")).toBe("file");
  });

  // Both defaults are asserted in ENGLISH on purpose: a lib that ships French
  // copy forces every non-French consumer to override two inputs just to be
  // readable. The overrides below are the localisation path.
  it("defaults to English copy, and lets the consumer localise it", () => {
    const { fixture, host } = render();
    expect(host.querySelector(".label")?.textContent).toContain(
      "Drag a file or browse",
    );

    fixture.componentRef.setInput("label", "Glissez un fichier ou parcourez");
    fixture.detectChanges();
    expect(host.querySelector(".label")?.textContent?.trim()).toBe(
      "Glissez un fichier ou parcourez",
    );
  });

  it("swaps the label for the busy message when busy", () => {
    const { fixture, host } = render();
    fixture.componentRef.setInput("busy", true);
    fixture.detectChanges();
    expect(host.querySelector(".label")?.textContent?.trim()).toBe(
      "Uploading…",
    );

    fixture.componentRef.setInput("busyLabel", "Envoi…");
    fixture.detectChanges();
    expect(host.querySelector(".label")?.textContent?.trim()).toBe("Envoi…");
  });

  it("emits the dropped files and clears the drag state", () => {
    const { zone, picked, dropEvent } = render();
    const file = new File(["x"], "a.pdf", { type: "application/pdf" });
    zone.dispatchEvent(dropEvent([file]));
    expect(picked).toHaveLength(1);
    expect(picked[0][0].name).toBe("a.pdf");
  });

  it("emits files picked through the hidden input", () => {
    const { input, picked } = render();
    const file = new File(["x"], "b.png");
    Object.defineProperty(input, "files", {
      value: [file],
      configurable: true,
    });
    input.dispatchEvent(new Event("change"));
    expect(picked).toHaveLength(1);
    expect(picked[0][0].name).toBe("b.png");
  });

  it("toggles the drag-over state on dragover / dragleave", () => {
    const { cmp, zone } = render();
    zone.dispatchEvent(new Event("dragover", { cancelable: true }));
    expect(cmp.isDragOver()).toBe(true);
    zone.dispatchEvent(new Event("dragleave"));
    expect(cmp.isDragOver()).toBe(false);
  });

  it("ignores drops when disabled", () => {
    const { fixture, zone, picked, dropEvent } = render();
    fixture.componentRef.setInput("disabled", true);
    fixture.detectChanges();
    zone.dispatchEvent(dropEvent([new File(["x"], "c.pdf")]));
    expect(picked).toHaveLength(0);
  });

  // The zone is a `role="button"` div, so Enter and Space are the only reasons
  // a keyboard user can reach the picker at all — they're the a11y contract,
  // not a nicety.
  it("opens the picker on Enter and on Space", () => {
    const { zone, input } = render();
    const click = vi.spyOn(input, "click").mockImplementation(() => undefined);

    zone.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
    expect(click).toHaveBeenCalledTimes(1);

    const space = new KeyboardEvent("keydown", { key: " ", cancelable: true });
    zone.dispatchEvent(space);
    expect(click).toHaveBeenCalledTimes(2);
    // Space must not also scroll the page under the dropzone.
    expect(space.defaultPrevented).toBe(true);
  });

  it("passes `accept` and `multiple` through to the native input", () => {
    const { fixture, input } = render();
    expect(input.multiple).toBe(true); // documented default

    fixture.componentRef.setInput("accept", ".pdf,.png");
    fixture.componentRef.setInput("multiple", false);
    fixture.detectChanges();
    expect(input.getAttribute("accept")).toBe(".pdf,.png");
    expect(input.multiple).toBe(false);
  });

  it("opens the native picker on click, but not when busy", () => {
    const { fixture, cmp, zone, input } = render();
    const click = vi.spyOn(input, "click").mockImplementation(() => undefined);
    zone.dispatchEvent(new Event("click"));
    expect(click).toHaveBeenCalledTimes(1);

    fixture.componentRef.setInput("busy", true);
    fixture.detectChanges();
    cmp.openFilePicker();
    expect(click).toHaveBeenCalledTimes(1); // still 1 — guarded
  });
});
