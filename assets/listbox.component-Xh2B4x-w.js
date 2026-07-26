import{a4 as _,x as i,K as m,T as w,a5 as P,aN as F,as as L,y as f,aG as x,ɵ as O,F as M,B as k,L as I,d as l,h as T,C as b,I as q,g as z,f as u,N as B,m as p,j as a,n as E,v as S,P as h,J as A,ay as K,ae as Q,at as D,au as g,aJ as j,e as C,k as y,q as N,E as V,r as W,H}from"./index-Diyiz25h.js";import{FoldPopoverComponent as J}from"./popover.component-F0AqWB7M.js";import{F as R}from"./popover-trigger.directive-DHKbJjJt.js";import{FoldInputBaseComponent as G}from"./input-base.component-CVhuNszw.js";import{F as v,a as U}from"./option.component-BS7stUSi.js";import{F as X}from"./listbox-nav-CTrFwwR2.js";import"./label.component-DnN_sFoZ.js";const $=["list"],Y=["*"],Z=()=>["top-start","bottom-end","top-end"];function ee(s,e){s&1&&(l(0,"span",4),C(1),u()),s&2&&(a(),y(e))}function ne(s,e){if(s&1&&(l(0,"span",5),C(1),u()),s&2){const o=N();a(),y(o.placeholder())}}class c{value=_("");disabled=i(!1);touched=_(!1);errors=i([]);open=_(!1);size=i("md");variant=i("default");label=i();required=i(!1,{transform:m});optional=i(!1,{transform:m});optionalLabel=i("optional");hint=i();placeholder=i();placement=i("bottom-start");inputId=w(P).next("fold-listbox");listId=`${this.inputId}-list`;options=F(v);list=L("list");nav=new X(()=>this.options(),{select:e=>this.selectAt(e),close:()=>this.open.set(!1)});activeId=this.nav.activeId;selectedLabel=f(()=>this.options().find(e=>e.value()===this.value())?.label);errorMessage=f(()=>{if(!this.touched())return;const e=this.errors()[0];return e?e.message??e.kind:void 0});describedBy=f(()=>this.errorMessage()?`${this.inputId}-error`:this.hint()?`${this.inputId}-hint`:null);constructor(){x(()=>{this.open()?queueMicrotask(()=>{this.open()&&(this.list()?.nativeElement.focus(),this.nav.arm(this.selectedIndex()))}):this.nav.reset()})}isSelected(e){return this.value()===e}onTriggerKeydown(e){this.open()||["ArrowDown","ArrowUp","Enter"," "].includes(e.key)&&(e.preventDefault(),this.open.set(!0))}onListKeydown(e){this.nav.onKeydown(e)}onListClick(e){const o=this.enabledOptionFrom(e.target);o&&this.commit(o)}onListPointermove(e){const o=this.enabledOptionFrom(e.target);o&&this.nav.point(this.options().indexOf(o))}selectedIndex(){return this.options().findIndex(e=>e.value()===this.value()&&!e.disabled())}enabledOptionFrom(e){if(!(e instanceof Element))return null;const o=e.closest("[role='option']"),n=this.options().find(r=>r.id===o?.id);return n&&!n.disabled()?n:null}selectAt(e){const o=this.options()[e];o&&!o.disabled()&&this.commit(o)}commit(e){this.value.set(e.value()),this.touched.set(!0),this.open.set(!1)}static ɵfac=function(o){return new(o||c)};static ɵcmp=O({type:c,selectors:[["fold-listbox"]],contentQueries:function(o,n,r){o&1&&j(r,n.options,v,4),o&2&&g()},viewQuery:function(o,n){o&1&&D(n.list,$,5),o&2&&g()},hostVars:2,hostBindings:function(o,n){o&2&&Q(n.size()+" "+n.variant())},inputs:{value:[1,"value"],disabled:[1,"disabled"],touched:[1,"touched"],errors:[1,"errors"],open:[1,"open"],size:[1,"size"],variant:[1,"variant"],label:[1,"label"],required:[1,"required"],optional:[1,"optional"],optionalLabel:[1,"optionalLabel"],hint:[1,"hint"],placeholder:[1,"placeholder"],placement:[1,"placement"]},outputs:{value:"valueChange",touched:"touchedChange",open:"openChange"},features:[K([{provide:U,useExisting:c}])],ngContentSelectors:Y,decls:9,vars:20,consts:[["list",""],[3,"label","for","required","optional","optionalLabel","hint","error"],[3,"openChange","open","autoFocus","placement","fallbackPlacements"],["type","button","foldPopoverTrigger","listbox",1,"lb-trigger",3,"keydown","id","disabled"],[1,"lb-value"],[1,"lb-placeholder"],["name","chevron-down","size","sm","aria-hidden","true",1,"lb-caret"],["foldPopoverPanel","","role","listbox","tabindex","-1",1,"lb-list",3,"keydown","click","pointermove","id"]],template:function(o,n){if(o&1){const r=k();I(),l(0,"fold-input-base",1)(1,"fold-popover",2),T("openChange",function(t){return V(r),W(n.open,t)||(n.open=t),H(t)}),l(2,"button",3),b("keydown",function(t){return n.onTriggerKeydown(t)}),q(3,ee,2,1,"span",4)(4,ne,2,1,"span",5),z(5,"fold-icon",6),u(),l(6,"div",7,0),b("keydown",function(t){return n.onListKeydown(t)})("click",function(t){return n.onListClick(t)})("pointermove",function(t){return n.onListPointermove(t)}),B(8),u()()()}if(o&2){let r;p("label",n.label())("for",n.inputId)("required",n.required())("optional",n.optional())("optionalLabel",n.optionalLabel())("hint",n.hint())("error",n.errorMessage()),a(),E("open",n.open),p("autoFocus",!1)("placement",n.placement())("fallbackPlacements",S(19,Z)),a(),p("id",n.inputId)("disabled",n.disabled()),h("aria-invalid",n.errorMessage()?!0:null)("aria-describedby",n.describedBy()),a(),A((r=n.selectedLabel())?3:4,r),a(3),p("id",n.listId),h("aria-label",n.label())("aria-activedescendant",n.activeId())}},dependencies:[G,M,J,R],styles:[`[_nghost-%COMP%] {
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
}`]})}export{c as FoldListboxComponent};
