import { TestBed } from "@angular/core/testing";
import { describe, it, expect, beforeEach } from "vitest";
import { FoldIdService } from "./id.service";

describe("FoldIdService", () => {
  let service: FoldIdService;

  beforeEach(() => {
    service = TestBed.inject(FoldIdService);
  });

  it("returns a monotonic sequence, never repeating", () => {
    const a = service.next();
    const b = service.next();
    const c = service.next();
    expect(new Set([a, b, c]).size).toBe(3);
  });

  it("applies the given prefix", () => {
    expect(service.next("fold-input")).toMatch(/^fold-input-\d+$/);
    expect(service.next("fold-field")).toMatch(/^fold-field-\d+$/);
  });

  it("defaults the prefix to fold", () => {
    expect(service.next()).toMatch(/^fold-\d+$/);
  });
});
