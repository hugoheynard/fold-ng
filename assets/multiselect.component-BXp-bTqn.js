import{a4 as _,x as r,K as h,T as w,a5 as P,aN as O,as as F,y as c,aG as I,ɵ as x,F as k,B as L,L as S,d,h as T,C as g,I as q,g as z,f,N as B,m as p,j as a,n as E,v as j,P as b,J as A,ay as K,ae as Q,at as D,au as v,aJ as N,e as M,k as y,q as V,E as W,r as R,H as $}from"./index-pWDKkeGF.js";import{FoldPopoverComponent as H}from"./popover.component-BJzU2CvQ.js";import{F as J}from"./popover-trigger.directive-CI5gggkA.js";import{FoldInputBaseComponent as U}from"./input-base.component-BbgOikUX.js";import{F as C,a as X}from"./option.component-By56KtFO.js";import{F as Y}from"./listbox-nav-BGeeFAKj.js";import"./label.component-D1qKDRUp.js";const G=["list"],Z=["*"],ee=()=>["top-start","bottom-end","top-end"];function ne(s,n){s&1&&(d(0,"span",4),M(1),f()),s&2&&(a(),y(n))}function te(s,n){if(s&1&&(d(0,"span",5),M(1),f()),s&2){const t=V();a(),y(t.placeholder())}}const m=3;class u{value=_([]);disabled=r(!1);touched=_(!1);errors=r([]);open=_(!1);size=r("md");variant=r("default");label=r();required=r(!1,{transform:h});optional=r(!1,{transform:h});optionalLabel=r("optional");hint=r();placeholder=r();placement=r("bottom-start");inputId=w(P).next("fold-multiselect");listId=`${this.inputId}-list`;options=O(C);list=F("list");nav=new Y(()=>this.options(),{select:n=>this.toggle(n),close:()=>this.open.set(!1)});activeId=this.nav.activeId;selectedSet=c(()=>new Set(this.value()));summaryLabel=c(()=>{if(this.value().length===0)return;const n=this.selectedSet(),t=this.options().filter(e=>n.has(e.value())).map(e=>e.label);if(t.length!==0)return t.length<=m?t.join(", "):`${t.slice(0,m).join(", ")} +${t.length-m}`});errorMessage=c(()=>{if(!this.touched())return;const n=this.errors()[0];return n?n.message??n.kind:void 0});describedBy=c(()=>this.errorMessage()?`${this.inputId}-error`:this.hint()?`${this.inputId}-hint`:null);hasOpened=!1;constructor(){I(()=>{this.open()?(this.hasOpened=!0,queueMicrotask(()=>{this.open()&&(this.list()?.nativeElement.focus(),this.nav.arm(this.firstSelectedIndex()))})):(this.nav.reset(),this.hasOpened&&this.touched.set(!0))})}isSelected(n){return this.selectedSet().has(n)}onTriggerKeydown(n){this.open()||["ArrowDown","ArrowUp","Enter"," "].includes(n.key)&&(n.preventDefault(),this.open.set(!0))}onListKeydown(n){this.nav.onKeydown(n)}onListClick(n){const t=this.enabledIndexFrom(n.target);t>=0&&this.toggle(t)}onListPointermove(n){const t=this.enabledIndexFrom(n.target);t>=0&&this.nav.point(t)}firstSelectedIndex(){return this.options().findIndex(n=>this.value().includes(n.value())&&!n.disabled())}enabledIndexFrom(n){if(!(n instanceof Element))return-1;const t=n.closest("[role='option']"),e=this.options(),o=e.findIndex(l=>l.id===t?.id);return o>=0&&!e[o]?.disabled()?o:-1}toggle(n){const t=this.options()[n];if(!t||t.disabled())return;const e=t.value(),o=this.value();this.value.set(o.includes(e)?o.filter(l=>l!==e):[...o,e]),this.touched.set(!0)}static ɵfac=function(t){return new(t||u)};static ɵcmp=x({type:u,selectors:[["fold-multiselect"]],contentQueries:function(t,e,o){t&1&&N(o,e.options,C,4),t&2&&v()},viewQuery:function(t,e){t&1&&D(e.list,G,5),t&2&&v()},hostVars:2,hostBindings:function(t,e){t&2&&Q(e.size()+" "+e.variant())},inputs:{value:[1,"value"],disabled:[1,"disabled"],touched:[1,"touched"],errors:[1,"errors"],open:[1,"open"],size:[1,"size"],variant:[1,"variant"],label:[1,"label"],required:[1,"required"],optional:[1,"optional"],optionalLabel:[1,"optionalLabel"],hint:[1,"hint"],placeholder:[1,"placeholder"],placement:[1,"placement"]},outputs:{value:"valueChange",touched:"touchedChange",open:"openChange"},features:[K([{provide:X,useExisting:u}])],ngContentSelectors:Z,decls:9,vars:21,consts:[["list",""],[3,"label","for","required","optional","optionalLabel","hint","error"],[3,"openChange","open","autoFocus","ariaControls","placement","fallbackPlacements"],["type","button","foldPopoverTrigger","listbox",1,"lb-trigger",3,"keydown","id","disabled"],[1,"lb-value"],[1,"lb-placeholder"],["name","chevron-down","size","sm","aria-hidden","true",1,"lb-caret"],["foldPopoverPanel","","role","listbox","aria-multiselectable","true","tabindex","-1",1,"lb-list",3,"keydown","click","pointermove","id"]],template:function(t,e){if(t&1){const o=L();S(),d(0,"fold-input-base",1)(1,"fold-popover",2),T("openChange",function(i){return W(o),R(e.open,i)||(e.open=i),$(i)}),d(2,"button",3),g("keydown",function(i){return e.onTriggerKeydown(i)}),q(3,ne,2,1,"span",4)(4,te,2,1,"span",5),z(5,"fold-icon",6),f(),d(6,"div",7,0),g("keydown",function(i){return e.onListKeydown(i)})("click",function(i){return e.onListClick(i)})("pointermove",function(i){return e.onListPointermove(i)}),B(8),f()()()}if(t&2){let o;p("label",e.label())("for",e.inputId)("required",e.required())("optional",e.optional())("optionalLabel",e.optionalLabel())("hint",e.hint())("error",e.errorMessage()),a(),E("open",e.open),p("autoFocus",!1)("ariaControls",e.listId)("placement",e.placement())("fallbackPlacements",j(20,ee)),a(),p("id",e.inputId)("disabled",e.disabled()),b("aria-invalid",e.errorMessage()?!0:null)("aria-describedby",e.describedBy()),a(),A((o=e.summaryLabel())?3:4,o),a(3),p("id",e.listId),b("aria-label",e.label())("aria-activedescendant",e.activeId())}},dependencies:[U,k,H,J],styles:[`


[_nghost-%COMP%] {
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

.lb-field[_ngcontent-%COMP%] {
  position: relative;
}

.lb-trigger.has-clear[_ngcontent-%COMP%]   .lb-caret[_ngcontent-%COMP%] {
  visibility: hidden;
}

.lb-clear[_ngcontent-%COMP%] {
  all: unset;
  position: absolute;
  inset-inline-end: 0.4rem;
  top: 50%;
  transform: translateY(-50%);
  display: grid;
  place-items: center;
  padding: 0.15rem;
  border-radius: var(--fold-radius-xs);
  color: var(--fold-color-text-muted);
  cursor: pointer;
}
.lb-clear[_ngcontent-%COMP%]:hover, .lb-clear[_ngcontent-%COMP%]:focus-visible {
  color: var(--fold-color-text);
  background: var(--fold-color-surface-hover);
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
}`]})}export{u as FoldMultiselectComponent};
