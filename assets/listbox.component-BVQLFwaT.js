import{a4 as b,x as t,K as f,T as k,a5 as I,aN as T,as as z,y as p,aG as q,ɵ as B,F as E,B as P,L as S,d,h as A,C as h,I as v,g as O,f as c,N as D,m as u,j as l,n as K,v as Q,D as j,P as m,J as C,ay as N,ae as V,at as W,au as w,aJ as H,e as L,k as x,q as g,E as F,H as M,r as J}from"./index-J6TcvwPv.js";import{FoldPopoverComponent as R}from"./popover.component-Ce-ImZaA.js";import{F as G}from"./popover-trigger.directive-BiCxIG5B.js";import{FoldInputBaseComponent as U}from"./input-base.component-CKbyDAb9.js";import{F as y,a as X}from"./option.component-BEgKGyWS.js";import{F as Y}from"./listbox-nav-Fo3iZiM0.js";import"./label.component-CqJ8Bq4a.js";const $=["list"],Z=["*"],ee=()=>["top-start","bottom-end","top-end"];function ne(a,e){a&1&&(d(0,"span",5),L(1),c()),a&2&&(l(),x(e))}function oe(a,e){if(a&1&&(d(0,"span",6),L(1),c()),a&2){const o=g();l(),x(o.placeholder())}}function te(a,e){if(a&1){const o=P();d(0,"button",10),h("click",function(r){F(o);const s=g();return M(s.clear(r))}),O(1,"fold-icon",11),c()}if(a&2){const o=g();m("aria-label",o.clearLabel())}}class _{value=b("");disabled=t(!1);touched=b(!1);errors=t([]);open=b(!1);size=t("md");variant=t("default");label=t();required=t(!1,{transform:f});optional=t(!1,{transform:f});optionalLabel=t("optional");hint=t();placeholder=t();placement=t("bottom-start");allowClear=t(!1,{transform:f});clearLabel=t("Clear");inputId=k(I).next("fold-listbox");listId=`${this.inputId}-list`;options=T(y);list=z("list");nav=new Y(()=>this.options(),{select:e=>this.selectAt(e),close:()=>this.open.set(!1)});activeId=this.nav.activeId;selectedLabel=p(()=>this.options().find(e=>e.value()===this.value())?.label);showClear=p(()=>this.allowClear()&&this.value()!==""&&!this.disabled());errorMessage=p(()=>{if(!this.touched())return;const e=this.errors()[0];return e?e.message??e.kind:void 0});describedBy=p(()=>this.errorMessage()?`${this.inputId}-error`:this.hint()?`${this.inputId}-hint`:null);hasOpened=!1;constructor(){q(()=>{this.open()?(this.hasOpened=!0,queueMicrotask(()=>{this.open()&&(this.list()?.nativeElement.focus(),this.nav.arm(this.selectedIndex()))})):(this.nav.reset(),this.hasOpened&&this.touched.set(!0))})}isSelected(e){return this.value()===e}clear(e){e.stopPropagation(),this.value.set(""),this.touched.set(!0)}onTriggerKeydown(e){if(!this.open()){if(["ArrowDown","ArrowUp","Enter"," "].includes(e.key)){e.preventDefault(),this.open.set(!0);return}this.nav.typeahead(e,o=>this.selectAt(o))}}onListKeydown(e){this.nav.onKeydown(e)}onListClick(e){const o=this.enabledOptionFrom(e.target);o&&this.commit(o)}onListPointermove(e){const o=this.enabledOptionFrom(e.target);o&&this.nav.point(this.options().indexOf(o))}selectedIndex(){return this.options().findIndex(e=>e.value()===this.value()&&!e.disabled())}enabledOptionFrom(e){if(!(e instanceof Element))return null;const o=e.closest("[role='option']"),n=this.options().find(r=>r.id===o?.id);return n&&!n.disabled()?n:null}selectAt(e){const o=this.options()[e];o&&!o.disabled()&&this.commit(o)}commit(e){this.value.set(e.value()),this.touched.set(!0),this.open.set(!1)}static ɵfac=function(o){return new(o||_)};static ɵcmp=B({type:_,selectors:[["fold-listbox"]],contentQueries:function(o,n,r){o&1&&H(r,n.options,y,4),o&2&&w()},viewQuery:function(o,n){o&1&&W(n.list,$,5),o&2&&w()},hostVars:2,hostBindings:function(o,n){o&2&&V(n.size()+" "+n.variant())},inputs:{value:[1,"value"],disabled:[1,"disabled"],touched:[1,"touched"],errors:[1,"errors"],open:[1,"open"],size:[1,"size"],variant:[1,"variant"],label:[1,"label"],required:[1,"required"],optional:[1,"optional"],optionalLabel:[1,"optionalLabel"],hint:[1,"hint"],placeholder:[1,"placeholder"],placement:[1,"placement"],allowClear:[1,"allowClear"],clearLabel:[1,"clearLabel"]},outputs:{value:"valueChange",touched:"touchedChange",open:"openChange"},features:[N([{provide:X,useExisting:_}])],ngContentSelectors:Z,decls:11,vars:24,consts:[["list",""],[3,"label","for","required","optional","optionalLabel","hint","error"],[3,"openChange","open","autoFocus","ariaControls","placement","fallbackPlacements"],[1,"lb-field"],["type","button","foldPopoverTrigger","listbox",1,"lb-trigger",3,"keydown","id","disabled"],[1,"lb-value"],[1,"lb-placeholder"],["name","chevron-down","size","sm","aria-hidden","true",1,"lb-caret"],["type","button",1,"lb-clear"],["foldPopoverPanel","","role","listbox","tabindex","-1",1,"lb-list",3,"keydown","click","pointermove","id"],["type","button",1,"lb-clear",3,"click"],["name","close","size","sm","aria-hidden","true"]],template:function(o,n){if(o&1){const r=P();S(),d(0,"fold-input-base",1)(1,"fold-popover",2),A("openChange",function(i){return F(r),J(n.open,i)||(n.open=i),M(i)}),d(2,"div",3)(3,"button",4),h("keydown",function(i){return n.onTriggerKeydown(i)}),v(4,ne,2,1,"span",5)(5,oe,2,1,"span",6),O(6,"fold-icon",7),c(),v(7,te,2,1,"button",8),c(),d(8,"div",9,0),h("keydown",function(i){return n.onListKeydown(i)})("click",function(i){return n.onListClick(i)})("pointermove",function(i){return n.onListPointermove(i)}),D(10),c()()()}if(o&2){let r;u("label",n.label())("for",n.inputId)("required",n.required())("optional",n.optional())("optionalLabel",n.optionalLabel())("hint",n.hint())("error",n.errorMessage()),l(),K("open",n.open),u("autoFocus",!1)("ariaControls",n.listId)("placement",n.placement())("fallbackPlacements",Q(23,ee)),l(2),j("has-clear",n.showClear()),u("id",n.inputId)("disabled",n.disabled()),m("aria-invalid",n.errorMessage()?!0:null)("aria-describedby",n.describedBy()),l(),C((r=n.selectedLabel())?4:5,r),l(3),C(n.showClear()?7:-1),l(),u("id",n.listId),m("aria-label",n.label())("aria-activedescendant",n.activeId())}},dependencies:[U,E,R,G],styles:[`


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
}`]})}export{_ as FoldListboxComponent};
