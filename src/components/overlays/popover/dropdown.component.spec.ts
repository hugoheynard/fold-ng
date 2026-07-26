import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldDropdownComponent } from "./dropdown.component";
import { FoldDropdownItemComponent } from "./dropdown-item.component";
import { FoldPopoverTriggerDirective } from "./popover-trigger.directive";

@Component({
  standalone: true,
  imports: [
    FoldDropdownComponent,
    FoldDropdownItemComponent,
    FoldPopoverTriggerDirective,
  ],
  template: `<fold-dropdown ariaLabel="Row actions" [(open)]="open">
    <button class="trigger" foldPopoverTrigger="menu">Actions</button>
    <fold-dropdown-item class="i-edit" (selected)="picked('edit')">
      Edit
    </fold-dropdown-item>
    <fold-dropdown-item
      class="i-dup"
      [disabled]="true"
      (selected)="picked('dup')"
    >
      Duplicate
    </fold-dropdown-item>
    <fold-dropdown-item class="i-del" tone="danger" (selected)="picked('del')">
      Delete
    </fold-dropdown-item>
  </fold-dropdown>`,
})
class HostComponent {
  readonly open = signal(false);
  readonly chosen: string[] = [];
  picked(id: string): void {
    this.chosen.push(id);
  }
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  fixture.detectChanges();
  const host = fixture.nativeElement as HTMLElement;
  return {
    fixture,
    host,
    trigger: () => host.querySelector(".trigger") as HTMLButtonElement,
    menu: () => host.querySelector("[role='menu']") as HTMLElement,
    items: () => Array.from(host.querySelectorAll("button[role='menuitem']")),
    item: (cls: string) =>
      host.querySelector(`.${cls} button`) as HTMLButtonElement,
  };
}

describe("FoldDropdownComponent", () => {
  it("renders a role=menu with menuitem rows and an accessible name", () => {
    const r = render();
    expect(r.menu().getAttribute("aria-label")).toBe("Row actions");
    expect(r.items().length).toBe(3);
  });

  it("marks the trigger as a menu popup", () => {
    const r = render();
    expect(r.trigger().getAttribute("aria-haspopup")).toBe("menu");
  });

  it("emits the item's selected and closes on activation", () => {
    const r = render();
    r.fixture.componentInstance.open.set(true);
    r.fixture.detectChanges();
    r.item("i-edit").click();
    r.fixture.detectChanges();
    expect(r.fixture.componentInstance.chosen).toEqual(["edit"]);
    expect(r.fixture.componentInstance.open()).toBe(false);
  });

  it("does not emit or close for a disabled item", () => {
    const r = render();
    r.fixture.componentInstance.open.set(true);
    r.fixture.detectChanges();
    const dup = r.item("i-dup");
    expect(dup.disabled).toBe(true);
    dup.click();
    r.fixture.detectChanges();
    expect(r.fixture.componentInstance.chosen).toEqual([]);
    expect(r.fixture.componentInstance.open()).toBe(true);
  });

  it("applies the danger tone to a row", () => {
    const r = render();
    expect(r.item("i-del").classList.contains("is-danger")).toBe(true);
  });

  it("closes on Tab from the menu", () => {
    const r = render();
    r.fixture.componentInstance.open.set(true);
    r.fixture.detectChanges();
    r.menu().dispatchEvent(
      new KeyboardEvent("keydown", { key: "Tab", bubbles: true }),
    );
    r.fixture.detectChanges();
    expect(r.fixture.componentInstance.open()).toBe(false);
  });

  it("rovs tabindex with ArrowDown, skipping disabled items", async () => {
    const r = render();
    r.fixture.componentInstance.open.set(true);
    r.fixture.detectChanges();
    await Promise.resolve(); // the open-arm focus is deferred to a microtask
    // opening arms the first enabled item (Edit)
    expect(r.item("i-edit").getAttribute("tabindex")).toBe("0");
    // ArrowDown → skips the disabled Duplicate → Delete becomes tabbable
    r.menu().dispatchEvent(
      new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true }),
    );
    r.fixture.detectChanges();
    expect(r.item("i-del").getAttribute("tabindex")).toBe("0");
    expect(r.item("i-edit").getAttribute("tabindex")).toBe("-1");
    // wraps back to the first enabled on the next ArrowDown
    r.menu().dispatchEvent(
      new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true }),
    );
    r.fixture.detectChanges();
    expect(r.item("i-edit").getAttribute("tabindex")).toBe("0");
  });

  it("type-ahead jumps to the item matching the typed letter", () => {
    const r = render();
    r.fixture.componentInstance.open.set(true);
    r.fixture.detectChanges();
    r.menu().dispatchEvent(
      new KeyboardEvent("keydown", { key: "d", bubbles: true }),
    );
    r.fixture.detectChanges();
    expect(r.item("i-del").getAttribute("tabindex")).toBe("0");
  });
});
