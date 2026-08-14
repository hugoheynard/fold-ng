import{u as a,ɵ as s,a1 as l,a2 as i,D as r}from"./index-C1HfMFWJ.js";const c=["*"];class t{align=a("end");static ɵfac=function(n){return new(n||t)};static ɵcmp=s({type:t,selectors:[["fold-panel-footer"]],hostVars:1,hostBindings:function(n,o){n&2&&r("data-align",o.align())},inputs:{align:[1,"align"]},ngContentSelectors:c,decls:1,vars:0,template:function(n,o){n&1&&(l(),i(0))},styles:[`[_nghost-%COMP%] {
  display: flex;
  flex: none;
  align-items: center;
  gap: var(--fold-space-sm);
  padding: var(--fold-space-md) var(--fold-space-lg);
  border-top: 1px solid var(--fold-color-glass-border);
  justify-content: flex-end;
}

[data-align=between][_nghost-%COMP%] {
  justify-content: space-between;
}

[data-align=start][_nghost-%COMP%] {
  justify-content: flex-start;
}

@media (forced-colors: active) {
  [_nghost-%COMP%] {
    border-top-color: CanvasText;
  }
}`]})}export{t as FoldPanelFooterComponent};
