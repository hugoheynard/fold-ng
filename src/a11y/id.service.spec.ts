import { TestBed } from "@angular/core/testing";
import { describe, it, expect, beforeEach } from "vitest";
import { Sh3IdService } from "./id.service";

describe("Sh3IdService", () => {
  let service: Sh3IdService;

  beforeEach(() => {
    service = TestBed.inject(Sh3IdService);
  });

  it("returns a monotonic sequence, never repeating", () => {
    const a = service.next();
    const b = service.next();
    const c = service.next();
    expect(new Set([a, b, c]).size).toBe(3);
  });

  it("applies the given prefix", () => {
    expect(service.next("sh3-input")).toMatch(/^sh3-input-\d+$/);
    expect(service.next("sh3-field")).toMatch(/^sh3-field-\d+$/);
  });

  it("defaults the prefix to sh3", () => {
    expect(service.next()).toMatch(/^sh3-\d+$/);
  });
});
