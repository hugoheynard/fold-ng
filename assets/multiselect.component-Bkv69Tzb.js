import{af as F,u as i,a0 as b,X as L,A as c,ag as $,ap as D,aP as K,aK as N,a4 as S,s as Q,a5 as G,ɵ as U,F as V,aq as H,E as y,a1 as R,d,h as X,B as g,w as f,g as T,f as s,m as u,j as a,n as Y,U as J,D as k,x as m,aG as Z,ai as ee,a8 as ne,a9 as I,as as te,e as h,k as x,q as r,N as v,O as C,a2 as oe,l as w,r as le,i as z,v as ie,o as E,at as B,au as j}from"./index-BDhBgJiR.js";import{F as ae}from"./common-labels-DA6EmlYo.js";import{FoldPopoverComponent as re}from"./popover.component-DoS_rOVv.js";import{F as se}from"./popover-trigger.directive-BNfuIi9R.js";import{FoldInputBaseComponent as de}from"./input-base.component-Du2C3qOf.js";import{F as M,a as ce}from"./option.component-DdC2Wu9E.js";import{FoldOptgroupComponent as pe}from"./optgroup.component-DCVUffIP.js";import{i as A}from"./select-option-O1EpAQQH.js";import{F as ue}from"./listbox-nav-Ci8ZXIeg.js";import{f as _e,a as q}from"./option-filter-BjDrTtmX.js";import"./auto-update-_srfpL1Q.js";import"./info.component-CmaT-S1o.js";import"./label.component-6CaEvXfA.js";const fe=["option"],me=["list"],he=["search"],be=["*"],ge=()=>["top-start","bottom-end","top-end"],W=o=>({$implicit:o}),ve=(o,n)=>n.value;function Ce(o,n){o&1&&(d(0,"span",5),h(1),s()),o&2&&(a(),x(n))}function Me(o,n){if(o&1&&(d(0,"span",6),h(1),s()),o&2){const e=r();a(),x(e.placeholder())}}function Oe(o,n){if(o&1){const e=y();d(0,"div",10)(1,"input",15,1),g("input",function(l){v(e);const p=r();return C(p.onSearchInput(l))})("keydown",function(l){v(e);const p=r();return C(p.onSearchKeydown(l))}),s()()}if(o&2){const e=r();a(),u("value",e.query()),k("aria-label",e.searchLabel())("aria-controls",e.listId)("placeholder",e.searchPlaceholder()??null)}}function ye(o,n){if(o&1){const e=y();d(0,"button",17),g("click",function(){v(e);const l=r(2);return C(l.selectAll())}),T(1,"fold-icon",18),h(2),s()}if(o&2){const e=r(2);u("disabled",e.allEnabledSelected()),a(2),w(" ",e.selectAllLabel()," ")}}function xe(o,n){if(o&1){const e=y();d(0,"button",17),g("click",function(){v(e);const l=r(2);return C(l.clearAll())}),T(1,"fold-icon",19),h(2),s()}if(o&2){const e=r(2);u("disabled",e.value().length===0),a(2),w(" ",e.clearWord()," ")}}function we(o,n){if(o&1&&(d(0,"div",11),f(1,ye,3,2,"button",16),f(2,xe,3,2,"button",16),s()),o&2){const e=r();a(),m(e.allowSelectAll()?1:-1),a(),m(e.allowClear()?2:-1)}}function Fe(o,n){if(o&1&&B(0,22),o&2){const e=r().$implicit;u("ngTemplateOutlet",n)("ngTemplateOutletContext",j(2,W,e))}}function Pe(o,n){if(o&1&&h(0),o&2){const e=r().$implicit;w(" ",e.label," ")}}function ke(o,n){if(o&1&&(d(0,"fold-option",21),f(1,Fe,1,4,"ng-container",22)(2,Pe,1,1),s()),o&2){let e;const t=n.$implicit,l=r(4);u("value",t.value)("disabled",t.disabled??!1),a(),m((e=l.optionTemplate())?1:2,e)}}function Te(o,n){if(o&1&&(d(0,"fold-optgroup",20),z(1,ke,3,3,"fold-option",21,ve),s()),o&2){const e=n;u("label",e.label),a(),E(e.options)}}function Le(o,n){if(o&1&&B(0,22),o&2){const e=r();u("ngTemplateOutlet",n)("ngTemplateOutletContext",j(2,W,e))}}function Se(o,n){if(o&1&&h(0),o&2){const e=r();w(" ",e.label," ")}}function Ie(o,n){if(o&1&&(d(0,"fold-option",21),f(1,Le,1,4,"ng-container",22)(2,Se,1,1),s()),o&2){let e;const t=n,l=r(3);u("value",t.value)("disabled",t.disabled??!1),a(),m((e=l.optionTemplate())?1:2,e)}}function Ae(o,n){if(o&1&&f(0,Te,3,1,"fold-optgroup",20)(1,Ie,3,3,"fold-option",21),o&2){let e;const t=n.$implicit,l=r(2);m((e=l.asGroup(t))?0:(e=l.asOption(t))?1:-1,e)}}function qe(o,n){if(o&1&&z(0,Ae,2,1,null,null,ie),o&2){const e=r();E(e.visibleItems())}}function ze(o,n){o&1&&oe(0)}function Ee(o,n){if(o&1&&(d(0,"p",13),h(1),s()),o&2){const e=r();a(),x(e.emptyText())}}function Be(o,n){if(o&1&&(d(0,"span",14),h(1),s()),o&2){const e=r();a(),x(e.status())}}const P=3;class O{value=F([]);compareWith=i();options=i();disabled=i(!1);touched=F(!1);errors=i([]);open=F(!1);size=i("md");variant=i("default");label=i();required=i(!1,{transform:b});optional=i(!1,{transform:b});optionalLabel=i();info=i();infoLabel=i();hint=i();placeholder=i();placement=i("bottom-start");allowSelectAll=i(!1,{transform:b});allowClear=i(!1,{transform:b});selectAllLabel=i("Select all");clearLabel=i();searchable=i(!1,{transform:b});filter=i("contains");searchLabel=i("Search options");searchPlaceholder=i();emptyText=i("No results");resultLabel=i("results");common=L(ae);clearWord=c(()=>this.clearLabel()??this.common.clear);inputId=L($).next("fold-multiselect");listId=`${this.inputId}-list`;optionTemplate=D("option");projectedOptions=K();renderedOptions=N(M);allOptions=c(()=>this.options()?this.renderedOptions():this.projectedOptions());list=S("list");searchField=S("search");query=Q("");term=c(()=>this.searchable()?this.query().trim().toLowerCase():"");visibleItems=c(()=>_e(this.options()??[],this.filter(),this.term()));matchCount=c(()=>q(this.visibleItems()).length);status=c(()=>{if(!this.open()||this.term()==="")return"";const n=this.matchCount();return n===0?this.emptyText():`${String(n)} ${this.resultLabel()}`});knownOptions=c(()=>{const n=this.options();return n?q(n).map(e=>({value:()=>e.value,label:e.label})):this.projectedOptions()});eq(n,e){const t=this.compareWith();return t?t(n,e):Object.is(n,e)}nav=new ue(()=>this.allOptions(),{select:n=>this.toggle(n),close:()=>this.open.set(!1)});activeId=this.nav.activeId;selectedSet=c(()=>this.compareWith()?null:new Set(this.value()));summaryLabel=c(()=>{if(this.value().length===0)return;const n=this.knownOptions().filter(e=>this.isSelected(e.value())).map(e=>e.label);if(n.length!==0)return n.length<=P?n.join(", "):`${n.slice(0,P).join(", ")} +${n.length-P}`});errorMessage=c(()=>{if(!this.touched())return;const n=this.errors()[0];return n?n.message??n.kind:void 0});describedBy=c(()=>this.errorMessage()?`${this.inputId}-error`:this.hint()?`${this.inputId}-hint`:null);showBulk=c(()=>(this.allowSelectAll()||this.allowClear())&&this.allOptions().length>0);allEnabledSelected=c(()=>{const n=this.allOptions().filter(e=>!e.disabled());return n.length>0&&n.every(e=>this.isSelected(e.value()))});hasOpened=!1;constructor(){G(()=>{this.open()?(this.hasOpened=!0,queueMicrotask(()=>{if(!this.open())return;const n=this.searchField();n?n.nativeElement.focus():(this.list()?.nativeElement.focus(),this.nav.arm(this.firstSelectedIndex()))})):(this.nav.reset(),this.query.set(""),this.hasOpened&&this.touched.set(!0))})}isSelected(n){const e=this.selectedSet();return e?e.has(n):this.value().some(t=>this.eq(t,n))}asGroup(n){return A(n)?n:null}asOption(n){return A(n)?null:n}onTriggerKeydown(n){this.open()||["ArrowDown","ArrowUp","Enter"," "].includes(n.key)&&(n.preventDefault(),this.open.set(!0))}onSearchInput(n){n.target instanceof HTMLInputElement&&this.query.set(n.target.value)}onSearchKeydown(n){n.key==="ArrowDown"?(n.preventDefault(),this.list()?.nativeElement.focus(),this.nav.arm(-1)):n.key==="Enter"&&n.preventDefault()}onListKeydown(n){this.nav.onKeydown(n)}onListClick(n){const e=this.enabledIndexFrom(n.target);e>=0&&this.toggle(e)}onListPointermove(n){const e=this.enabledIndexFrom(n.target);e>=0&&this.nav.point(e)}firstSelectedIndex(){return this.allOptions().findIndex(n=>this.isSelected(n.value())&&!n.disabled())}enabledIndexFrom(n){if(!(n instanceof Element))return-1;const e=n.closest("[role='option']"),t=this.allOptions(),l=t.findIndex(p=>p.id===e?.id);return l>=0&&!t[l]?.disabled()?l:-1}selectAll(){const n=this.allOptions().filter(e=>!e.disabled()).map(e=>e.value()).filter(e=>!this.isSelected(e));n.length>0&&(this.value.set([...this.value(),...n]),this.touched.set(!0))}clearAll(){this.value().length>0&&(this.value.set([]),this.touched.set(!0))}toggle(n){const e=this.allOptions()[n];if(!e||e.disabled())return;const t=e.value(),l=this.value();this.value.set(this.isSelected(t)?l.filter(p=>!this.eq(p,t)):[...l,t]),this.touched.set(!0)}static ɵfac=function(e){return new(e||O)};static ɵcmp=U({type:O,selectors:[["fold-multiselect"]],contentQueries:function(e,t,l){e&1&&te(l,t.optionTemplate,fe,5)(l,t.projectedOptions,M,5),e&2&&I(2)},viewQuery:function(e,t){e&1&&ne(t.renderedOptions,M,5)(t.list,me,5)(t.searchField,he,5),e&2&&I(3)},hostVars:2,hostBindings:function(e,t){e&2&&ee(t.size()+" "+t.variant())},inputs:{value:[1,"value"],compareWith:[1,"compareWith"],options:[1,"options"],disabled:[1,"disabled"],touched:[1,"touched"],errors:[1,"errors"],open:[1,"open"],size:[1,"size"],variant:[1,"variant"],label:[1,"label"],required:[1,"required"],optional:[1,"optional"],optionalLabel:[1,"optionalLabel"],info:[1,"info"],infoLabel:[1,"infoLabel"],hint:[1,"hint"],placeholder:[1,"placeholder"],placement:[1,"placement"],allowSelectAll:[1,"allowSelectAll"],allowClear:[1,"allowClear"],selectAllLabel:[1,"selectAllLabel"],clearLabel:[1,"clearLabel"],searchable:[1,"searchable"],filter:[1,"filter"],searchLabel:[1,"searchLabel"],searchPlaceholder:[1,"searchPlaceholder"],emptyText:[1,"emptyText"],resultLabel:[1,"resultLabel"]},outputs:{value:"valueChange",touched:"touchedChange",open:"openChange"},features:[Z([{provide:ce,useExisting:O}])],ngContentSelectors:be,decls:16,vars:28,consts:[["list",""],["search",""],[3,"label","for","required","optional","optionalLabel","info","infoLabel","hint","error"],[3,"openChange","open","autoFocus","ariaControls","placement","fallbackPlacements"],["type","button","foldPopoverTrigger","listbox",1,"lb-trigger",3,"keydown","id","disabled"],[1,"lb-value"],[1,"lb-placeholder"],["name","chevron-down","size","sm","aria-hidden","true",1,"lb-caret"],["foldPopoverPanel","",1,"lb-panel"],[1,"lb-head"],[1,"lb-search-row"],["role","group","aria-label","Bulk actions",1,"lb-bulk"],["role","listbox","aria-multiselectable","true","tabindex","-1",1,"lb-list",3,"keydown","click","pointermove","id"],[1,"lb-empty"],["role","status","aria-live","polite",1,"lb-status"],["type","search","autocomplete","off","enterkeyhint","search",1,"lb-search",3,"input","keydown","value"],["type","button",1,"lb-bulk-btn",3,"disabled"],["type","button",1,"lb-bulk-btn",3,"click","disabled"],["name","check-circle","size","sm","aria-hidden","true"],["name","close","size","sm","aria-hidden","true"],[3,"label"],[3,"value","disabled"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(e,t){if(e&1){const l=y();R(),d(0,"fold-input-base",2)(1,"fold-popover",3),X("openChange",function(_){return v(l),le(t.open,_)||(t.open=_),C(_)}),d(2,"button",4),g("keydown",function(_){return t.onTriggerKeydown(_)}),f(3,Ce,2,1,"span",5)(4,Me,2,1,"span",6),T(5,"fold-icon",7),s(),d(6,"div",8)(7,"div",9),f(8,Oe,3,4,"div",10),f(9,we,3,2,"div",11),s(),d(10,"div",12,0),g("keydown",function(_){return t.onListKeydown(_)})("click",function(_){return t.onListClick(_)})("pointermove",function(_){return t.onListPointermove(_)}),f(12,qe,2,0)(13,ze,1,0),s(),f(14,Ee,2,1,"p",13),s()(),f(15,Be,2,1,"span",14),s()}if(e&2){let l;u("label",t.label())("for",t.inputId)("required",t.required())("optional",t.optional())("optionalLabel",t.optionalLabel())("info",t.info())("infoLabel",t.infoLabel())("hint",t.hint())("error",t.errorMessage()),a(),Y("open",t.open),u("autoFocus",!1)("ariaControls",t.listId)("placement",t.placement())("fallbackPlacements",J(27,ge)),a(),u("id",t.inputId)("disabled",t.disabled()),k("aria-invalid",t.errorMessage()?!0:null)("aria-describedby",t.describedBy()),a(),m((l=t.summaryLabel())?3:4,l),a(5),m(t.searchable()?8:-1),a(),m(t.showBulk()?9:-1),a(),u("id",t.listId),k("aria-label",t.label())("aria-activedescendant",t.activeId()),a(2),m(t.options()?12:13),a(2),m(t.searchable()&&t.options()&&t.matchCount()===0?14:-1),a(),m(t.searchable()?15:-1)}},dependencies:[de,V,M,pe,re,se,H],styles:[`@charset "UTF-8";





















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
@media (prefers-reduced-motion: reduce) {
  .lb-trigger[_ngcontent-%COMP%] {
    transition: none;
  }
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
  font-size: var(--fold-text-base);
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
  padding: var(--fold-space-sm) var(--fold-space-sm);
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
}

.lb-panel[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
}

.lb-bulk[_ngcontent-%COMP%] {
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  margin-bottom: 1px;
  background: var(--fold-color-surface-card);
  border-bottom: 1px solid var(--fold-color-border-subtle);
}

.lb-bulk-btn[_ngcontent-%COMP%] {
  all: unset;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem 0.5rem;
  border-radius: var(--fold-radius-sm);
  font-size: var(--fold-text-xs);
  color: var(--fold-color-text-secondary);
  cursor: pointer;
}
.lb-bulk-btn[_ngcontent-%COMP%]:hover:not(:disabled) {
  background: var(--fold-color-surface-hover);
  color: var(--fold-color-text);
}
.lb-bulk-btn[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--fold-color-primary-border);
  outline-offset: -2px;
}
.lb-bulk-btn[_ngcontent-%COMP%]:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

@media (forced-colors: active) {
  .lb-bulk[_ngcontent-%COMP%] {
    border-bottom-color: CanvasText;
  }
}
.lb-head[_ngcontent-%COMP%] {
  position: sticky;
  top: 0;
  z-index: 1;
}
.lb-head[_ngcontent-%COMP%]:empty {
  display: none;
}

.lb-search-row[_ngcontent-%COMP%] {
  padding: var(--fold-space-xs);
  background: var(--fold-color-surface-card);
}

.lb-search[_ngcontent-%COMP%] {
  all: unset;
  box-sizing: border-box;
  display: block;
  width: 100%;
  min-width: var(--fold-popover-anchor-width, 11rem);
  font-family: inherit;
  color: var(--fold-color-text);
  background: var(--fold-color-surface-card);
  border: 1px solid var(--fold-color-border-subtle);
  height: 1.75rem;
  font-size: var(--fold-text-sm);
}
@media (pointer: coarse) {
  .lb-search[_ngcontent-%COMP%] {
    font-size: max(var(--fold-text-touch-min), var(--fold-text-sm));
  }
}
.lb-search[_ngcontent-%COMP%] {
  padding: 0.25rem 0.5rem;
  border-radius: var(--fold-radius-xs);
}
.lb-search[_ngcontent-%COMP%]::placeholder {
  color: var(--fold-color-text-faded);
}
.lb-search[_ngcontent-%COMP%]::-webkit-search-cancel-button {
  -webkit-appearance: none;
}
.lb-search[_ngcontent-%COMP%]:focus {
  border-color: var(--fold-color-primary);
}

.lb-empty[_ngcontent-%COMP%] {
  margin: 0;
  padding: var(--fold-space-sm) var(--fold-space-md);
  font-size: var(--fold-text-sm);
  color: var(--fold-color-text-muted);
}

.lb-status[_ngcontent-%COMP%] {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

@media (forced-colors: active) {
  .lb-search[_ngcontent-%COMP%]:focus {
    outline: 2px solid Highlight;
  }
}`]})}export{O as FoldMultiselectComponent};
