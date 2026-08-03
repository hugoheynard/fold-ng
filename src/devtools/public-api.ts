// Opt-in dev-tools entry — `import { … } from "fold-ng/devtools"`.
//
// Everything here is meant for a DEV build only. Reach the import behind a dev
// guard (`if (isDevMode())` + a dynamic `import("fold-ng/devtools")`, or a
// dev-only route/flag) so a production bundle tree-shakes it away — these tools
// are never part of the shipped UI.
export { FoldIconDevtoolComponent } from "./icon-devtool/icon-devtool.component";
