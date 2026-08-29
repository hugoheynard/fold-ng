import{X as f,ag as g,u as t,ao as C,ɵ as u,F as v,a1 as h,d as a,g as b,e as m,f as d,a2 as P,w as x,j as o,m as s,k as z,x as O,D as M,E as y,B as w,q as p,l as F,N as I,O as k}from"./index-DJvpC_ts.js";import{FoldButtonComponent as D}from"./button.component-BQyMSLaX.js";import{FoldInlineConfirmComponent as j}from"./inline-confirm.component-B_6fAn48.js";import"./input.component-mFf2Tc6A.js";import"./input-base.component-4jU_IvHk.js";import"./info.component-DXPYSnPR.js";import"./common-labels-Hqf5l85x.js";import"./popover.component-gG8OqDtq.js";import"./auto-update-_srfpL1Q.js";import"./popover-trigger.directive-BRQF5icK.js";import"./label.component-CWLRvz9b.js";import"./input-value-DCGlOvqF.js";const B=["*"];function T(c,r){if(c&1){const n=y();a(0,"div",4)(1,"fold-inline-confirm",5),w("confirmed",function(i){I(n);const _=p();return k(_.confirmed.emit(i))}),a(2,"button",6),m(3),d()()()}if(c&2){const n=p();o(),s("match",n.confirmPhrase()??"")("message",n.message()??"")("intent",n.intent()),o(),s("intent",n.intent()),o(),F(" ",r," ")}}class l{ids=f(g);title=t.required();appearance=t("filled");actionLabel=t();confirmPhrase=t();message=t();intent=t("danger");confirmed=C();titleId=this.ids.next("fold-danger-zone");static ɵfac=function(n){return new(n||l)};static ɵcmp=u({type:l,selectors:[["fold-danger-zone"]],hostAttrs:["role","group"],hostVars:2,hostBindings:function(n,e){n&2&&M("data-appearance",e.appearance())("aria-labelledby",e.titleId)},inputs:{title:[1,"title"],appearance:[1,"appearance"],actionLabel:[1,"actionLabel"],confirmPhrase:[1,"confirmPhrase"],message:[1,"message"],intent:[1,"intent"]},outputs:{confirmed:"confirmed"},ngContentSelectors:B,decls:7,vars:3,consts:[[1,"dz-head"],["name","warning","size","sm","aria-hidden","true",1,"dz-icon"],[1,"dz-title",3,"id"],[1,"dz-body"],[1,"dz-actions"],[3,"confirmed","match","message","intent"],["foldButton","","emphasis","solid",3,"intent"]],template:function(n,e){if(n&1&&(h(),a(0,"div",0),b(1,"fold-icon",1),a(2,"h3",2),m(3),d()(),a(4,"div",3),P(5),d(),x(6,T,4,5,"div",4)),n&2){let i;o(2),s("id",e.titleId),o(),z(e.title()),o(3),O((i=e.actionLabel())?6:-1,i)}},dependencies:[v,D,j],styles:[`[_nghost-%COMP%] {
  display: block;
  border: 1px solid var(--fold-color-alert-border);
  border-radius: var(--fold-radius-md, 10px);
  overflow: hidden;
  min-height: min-content;
}

[data-appearance=filled][_nghost-%COMP%] {
  background: var(--fold-color-alert-surface);
}

[data-appearance=section][_nghost-%COMP%] {
  background: var(--fold-color-surface-card);
}

.dz-head[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: var(--fold-space-lg) var(--fold-space-lg) var(--fold-space-sm);
  color: var(--fold-color-alert-text);
}

.dz-icon[_ngcontent-%COMP%] {
  flex: none;
}

.dz-title[_ngcontent-%COMP%] {
  margin: 0;
  font-size: var(--fold-text-base, 1rem);
  font-weight: var(--fold-weight-semibold);
}

.dz-body[_ngcontent-%COMP%] {
  padding: 0 var(--fold-space-lg) var(--fold-space-md);
  color: var(--fold-color-text-secondary);
  font-size: var(--fold-text-sm, 0.875rem);
  line-height: var(--fold-leading-normal);
}
.dz-body[_ngcontent-%COMP%]:empty {
  display: none;
}
.dz-body[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:first-child {
  margin-top: 0;
}
.dz-body[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child {
  margin-bottom: 0;
}

.dz-actions[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: var(--fold-space-sm);
  padding: var(--fold-space-md) var(--fold-space-lg);
}

[data-appearance=section][_nghost-%COMP%]   .dz-actions[_ngcontent-%COMP%] {
  border-top: 1px solid var(--fold-color-border-subtle);
  background: var(--fold-color-surface-sunken);
}

@media (forced-colors: active) {
  [_nghost-%COMP%] {
    border-color: CanvasText;
  }
  [data-appearance=section][_nghost-%COMP%]   .dz-actions[_ngcontent-%COMP%] {
    border-top-color: CanvasText;
  }
}`]})}export{l as FoldDangerZoneComponent};
