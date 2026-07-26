import{a4 as _,x as r,K as m,T as w,a5 as M,aN as P,as as F,y as f,aG as I,ɵ as O,F as x,B as k,L,d,h as T,C as h,I as S,g as q,f as u,N as z,m as c,j as a,n as B,v as E,P as b,J as K,ay as Q,ae as j,at as D,au as g,aJ as A,e as C,k as y,q as N,E as V,r as W,H}from"./index-Diyiz25h.js";import{FoldPopoverComponent as J}from"./popover.component-F0AqWB7M.js";import{F as R}from"./popover-trigger.directive-DHKbJjJt.js";import{FoldInputBaseComponent as G}from"./input-base.component-CVhuNszw.js";import{F as v,a as U}from"./option.component-BS7stUSi.js";import{F as X}from"./listbox-nav-CTrFwwR2.js";import"./label.component-DnN_sFoZ.js";const $=["list"],Y=["*"],Z=()=>["top-start","bottom-end","top-end"];function ee(s,n){s&1&&(d(0,"span",4),C(1),u()),s&2&&(a(),y(n))}function ne(s,n){if(s&1&&(d(0,"span",5),C(1),u()),s&2){const t=N();a(),y(t.placeholder())}}class p{value=_([]);disabled=r(!1);touched=_(!1);errors=r([]);open=_(!1);size=r("md");variant=r("default");label=r();required=r(!1,{transform:m});optional=r(!1,{transform:m});optionalLabel=r("optional");hint=r();placeholder=r();placement=r("bottom-start");inputId=w(M).next("fold-multiselect");listId=`${this.inputId}-list`;options=P(v);list=F("list");nav=new X(()=>this.options(),{select:n=>this.toggle(n),close:()=>this.open.set(!1)});activeId=this.nav.activeId;summaryLabel=f(()=>{const n=this.value();if(n.length===0)return;const t=this.options().filter(e=>n.includes(e.value())).map(e=>e.label);return t.length?t.join(", "):void 0});errorMessage=f(()=>{if(!this.touched())return;const n=this.errors()[0];return n?n.message??n.kind:void 0});describedBy=f(()=>this.errorMessage()?`${this.inputId}-error`:this.hint()?`${this.inputId}-hint`:null);constructor(){I(()=>{this.open()?queueMicrotask(()=>{this.open()&&(this.list()?.nativeElement.focus(),this.nav.arm(this.firstSelectedIndex()))}):this.nav.reset()})}isSelected(n){return this.value().includes(n)}onTriggerKeydown(n){this.open()||["ArrowDown","ArrowUp","Enter"," "].includes(n.key)&&(n.preventDefault(),this.open.set(!0))}onListKeydown(n){this.nav.onKeydown(n)}onListClick(n){const t=this.enabledIndexFrom(n.target);t>=0&&this.toggle(t)}onListPointermove(n){const t=this.enabledIndexFrom(n.target);t>=0&&this.nav.point(t)}firstSelectedIndex(){return this.options().findIndex(n=>this.value().includes(n.value())&&!n.disabled())}enabledIndexFrom(n){if(!(n instanceof Element))return-1;const t=n.closest("[role='option']"),e=this.options(),o=e.findIndex(l=>l.id===t?.id);return o>=0&&!e[o]?.disabled()?o:-1}toggle(n){const t=this.options()[n];if(!t||t.disabled())return;const e=t.value(),o=this.value();this.value.set(o.includes(e)?o.filter(l=>l!==e):[...o,e]),this.touched.set(!0)}static ɵfac=function(t){return new(t||p)};static ɵcmp=O({type:p,selectors:[["fold-multiselect"]],contentQueries:function(t,e,o){t&1&&A(o,e.options,v,4),t&2&&g()},viewQuery:function(t,e){t&1&&D(e.list,$,5),t&2&&g()},hostVars:2,hostBindings:function(t,e){t&2&&j(e.size()+" "+e.variant())},inputs:{value:[1,"value"],disabled:[1,"disabled"],touched:[1,"touched"],errors:[1,"errors"],open:[1,"open"],size:[1,"size"],variant:[1,"variant"],label:[1,"label"],required:[1,"required"],optional:[1,"optional"],optionalLabel:[1,"optionalLabel"],hint:[1,"hint"],placeholder:[1,"placeholder"],placement:[1,"placement"]},outputs:{value:"valueChange",touched:"touchedChange",open:"openChange"},features:[Q([{provide:U,useExisting:p}])],ngContentSelectors:Y,decls:9,vars:20,consts:[["list",""],[3,"label","for","required","optional","optionalLabel","hint","error"],[3,"openChange","open","autoFocus","placement","fallbackPlacements"],["type","button","foldPopoverTrigger","listbox",1,"lb-trigger",3,"keydown","id","disabled"],[1,"lb-value"],[1,"lb-placeholder"],["name","chevron-down","size","sm","aria-hidden","true",1,"lb-caret"],["foldPopoverPanel","","role","listbox","aria-multiselectable","true","tabindex","-1",1,"lb-list",3,"keydown","click","pointermove","id"]],template:function(t,e){if(t&1){const o=k();L(),d(0,"fold-input-base",1)(1,"fold-popover",2),T("openChange",function(i){return V(o),W(e.open,i)||(e.open=i),H(i)}),d(2,"button",3),h("keydown",function(i){return e.onTriggerKeydown(i)}),S(3,ee,2,1,"span",4)(4,ne,2,1,"span",5),q(5,"fold-icon",6),u(),d(6,"div",7,0),h("keydown",function(i){return e.onListKeydown(i)})("click",function(i){return e.onListClick(i)})("pointermove",function(i){return e.onListPointermove(i)}),z(8),u()()()}if(t&2){let o;c("label",e.label())("for",e.inputId)("required",e.required())("optional",e.optional())("optionalLabel",e.optionalLabel())("hint",e.hint())("error",e.errorMessage()),a(),B("open",e.open),c("autoFocus",!1)("placement",e.placement())("fallbackPlacements",E(19,Z)),a(),c("id",e.inputId)("disabled",e.disabled()),b("aria-invalid",e.errorMessage()?!0:null)("aria-describedby",e.describedBy()),a(),K((o=e.summaryLabel())?3:4,o),a(3),c("id",e.listId),b("aria-label",e.label())("aria-activedescendant",e.activeId())}},dependencies:[G,x,J,R],styles:[`[_nghost-%COMP%] {
  display: block;
}

.lb-trigger[_ngcontent-%COMP%] {
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  font-family: inherit;
  color: var(--fold-color-text);
  background: var(--fold-color-surface-card);
  border: 1px solid var(--fold-color-border-subtle);
  cursor: pointer;
  transition: border-color var(--fold-motion-fast), box-shadow var(--fold-motion-fast);
}
.lb-trigger[_ngcontent-%COMP%]:hover:not(:disabled) {
  border-color: var(--fold-color-border);
}
.lb-trigger[_ngcontent-%COMP%]:focus-visible {
  border-color: var(--fold-color-primary);
  box-shadow: 0 0 0 2px var(--fold-color-primary-border);
}
.lb-trigger[_ngcontent-%COMP%]:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.lb-value[_ngcontent-%COMP%] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.lb-placeholder[_ngcontent-%COMP%] {
  color: var(--fold-color-text-faded);
}

.lb-caret[_ngcontent-%COMP%] {
  margin-inline-start: auto;
  color: var(--fold-color-text-muted);
}

.sm[_nghost-%COMP%]   .lb-trigger[_ngcontent-%COMP%] {
  height: 1.75rem;
  font-size: var(--fold-text-sm);
  padding: 0.25rem 0.5rem;
  border-radius: var(--fold-radius-xs);
}

.md[_nghost-%COMP%]   .lb-trigger[_ngcontent-%COMP%] {
  height: 2.25rem;
  font-size: var(--fold-text-md);
  padding: 0.4rem 0.65rem;
  border-radius: var(--fold-radius-sm);
}

.lg[_nghost-%COMP%]   .lb-trigger[_ngcontent-%COMP%] {
  height: 2.75rem;
  font-size: var(--fold-text-lg);
  padding: 0.5rem 0.75rem;
  border-radius: var(--fold-radius-sm);
}

.panel[_nghost-%COMP%]   .lb-trigger[_ngcontent-%COMP%] {
  height: auto;
  padding: 7px 10px;
  border-radius: var(--fold-radius-sm);
  background: var(--fold-color-surface-raised);
}
.panel[_nghost-%COMP%]   .lb-trigger[_ngcontent-%COMP%]:focus-visible {
  box-shadow: none;
}

.lb-list[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: var(--fold-popover-anchor-width, 11rem);
  outline: none;
}`]})}export{p as FoldMultiselectComponent};
