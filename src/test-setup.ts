// Boots a zoneless Angular TestBed for the component specs, matching the app
// (which is zoneless). `setupTestBed` defaults `zoneless` to true.
import "@analogjs/vitest-angular/setup-snapshots";
import { setupTestBed } from "@analogjs/vitest-angular/setup-testbed";

setupTestBed();
