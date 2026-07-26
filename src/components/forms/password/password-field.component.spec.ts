import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { describe, it, expect } from "vitest";
import { FoldPasswordFieldComponent } from "./password-field.component";
import {
  foldDefaultPasswordRules,
  foldRegexRule,
  type FoldPasswordRule,
} from "./password-rules";

@Component({
  standalone: true,
  imports: [FoldPasswordFieldComponent],
  template: `<fold-password-field
    label="New password"
    [rules]="rules()"
    [(value)]="value"
    (validChange)="valid.set($event)"
  />`,
})
class HostComponent {
  readonly value = signal("");
  readonly valid = signal<boolean | null>(null);
  readonly rules = signal<readonly FoldPasswordRule[]>(
    foldDefaultPasswordRules(),
  );
}

function render() {
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const host = fixture.nativeElement as HTMLElement;
  return {
    fixture,
    value: fixture.componentInstance.value,
    valid: fixture.componentInstance.valid,
    rules: fixture.componentInstance.rules,
    input: () => host.querySelector<HTMLInputElement>("input")!,
    reveal: () => host.querySelector<HTMLButtonElement>(".in-reveal"),
    ruleRows: () => Array.from(host.querySelectorAll(".pw-rule")),
    metRows: () => Array.from(host.querySelectorAll(".pw-rule.is-met")),
  };
}

describe("password-rules", () => {
  it("foldRegexRule tests against the pattern", () => {
    const rule = foldRegexRule("digit", /\d/);
    expect(rule.test("a1")).toBe(true);
    expect(rule.test("abc")).toBe(false);
  });

  it("the default policy needs length + upper + lower + digit", () => {
    const rules = foldDefaultPasswordRules();
    expect(rules.every((r) => r.test("Abcdefg1"))).toBe(true);
    expect(rules.some((r) => !r.test("weak"))).toBe(true);
  });
});

describe("FoldPasswordFieldComponent", () => {
  it("renders one row per rule, none met while empty", () => {
    const r = render();
    expect(r.ruleRows().length).toBe(4);
    expect(r.metRows().length).toBe(0);
    expect(r.valid()).toBe(false);
  });

  it("flips dots + emits validChange as the value satisfies the policy", () => {
    const r = render();
    r.value.set("Abcdefg1");
    r.fixture.detectChanges();
    expect(r.metRows().length).toBe(4);
    expect(r.valid()).toBe(true);
  });

  it("labels each row met / not met for screen readers", () => {
    const r = render();
    r.value.set("abc"); // lowercase rule met, others not
    r.fixture.detectChanges();
    const lower = r
      .ruleRows()
      .find((li) => li.getAttribute("aria-label")?.includes("lowercase"));
    expect(lower?.getAttribute("aria-label")).toContain("met:");
    const digit = r
      .ruleRows()
      .find((li) => li.getAttribute("aria-label")?.includes("number"));
    expect(digit?.getAttribute("aria-label")).toContain("not met:");
  });

  it("honours injected custom rules", () => {
    const r = render();
    r.rules.set([foldRegexRule("Starts with x", /^x/)]);
    r.fixture.detectChanges();
    expect(r.ruleRows().length).toBe(1);
    r.value.set("xyz");
    r.fixture.detectChanges();
    expect(r.metRows().length).toBe(1);
    expect(r.valid()).toBe(true);
  });

  it("lets a projected [rules] slot replace the default checklist", () => {
    @Component({
      standalone: true,
      imports: [FoldPasswordFieldComponent],
      template: `<fold-password-field #pw="foldPasswordField" [(value)]="value">
        <div rules>
          <span class="custom-count">{{ pw.checklist().length }}</span>
        </div>
      </fold-password-field>`,
    })
    class ProjHost {
      readonly value = signal("");
    }
    const fixture = TestBed.createComponent(ProjHost);
    fixture.detectChanges();
    const host = fixture.nativeElement as HTMLElement;
    // the default list is the ng-content fallback → suppressed when projected
    expect(host.querySelectorAll(".pw-rule").length).toBe(0);
    expect(host.querySelector(".custom-count")?.textContent).toBe("4");
  });

  it("renders a password input with a reveal toggle that flips the type", () => {
    const r = render();
    expect(r.input().getAttribute("type")).toBe("password");
    const eye = r.reveal();
    expect(eye).not.toBeNull();
    eye?.click();
    r.fixture.detectChanges();
    expect(r.input().getAttribute("type")).toBe("text");
    expect(eye?.getAttribute("aria-pressed")).toBe("true");
  });
});
