import { TestBed } from "@angular/core/testing";
import { DOCUMENT } from "@angular/common";

import { ScrollLockService } from "../scroll-lock.service";

describe("ScrollLockService", () => {
  let service: ScrollLockService;
  let body: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ScrollLockService] });
    service = TestBed.inject(ScrollLockService);
    body = TestBed.inject(DOCUMENT).body;
    body.style.overflow = "";
  });

  afterEach(() => {
    body.style.overflow = "";
  });

  it("freezes body scroll on the first lock", () => {
    expect(service.isLocked).toBe(false);
    service.lock();
    expect(body.style.overflow).toBe("hidden");
    expect(service.isLocked).toBe(true);
  });

  it("restores scroll when the last lock is released", () => {
    service.lock();
    service.unlock();
    expect(body.style.overflow).toBe("");
    expect(service.isLocked).toBe(false);
  });

  it("reference-counts nested locks — one restore, not premature", () => {
    service.lock();
    service.lock();
    service.unlock();
    // Still one lock outstanding → stays frozen.
    expect(body.style.overflow).toBe("hidden");
    expect(service.isLocked).toBe(true);
    service.unlock();
    expect(body.style.overflow).toBe("");
    expect(service.isLocked).toBe(false);
  });

  it("restores the pre-lock overflow value verbatim, not a hardcoded empty", () => {
    body.style.overflow = "scroll";
    service.lock();
    expect(body.style.overflow).toBe("hidden");
    service.unlock();
    expect(body.style.overflow).toBe("scroll");
  });

  it("ignores an unbalanced unlock (no underflow)", () => {
    service.unlock();
    expect(service.isLocked).toBe(false);
    // A subsequent lock still works normally.
    service.lock();
    expect(body.style.overflow).toBe("hidden");
    expect(service.isLocked).toBe(true);
  });
});
