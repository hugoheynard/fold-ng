import{ag as O,u as i,a0 as h,X as j,ah as E,aq as W,aQ as $,aL as Q,A as m,a4 as D,a5 as K,ɵ as N,F as U,ar as V,E as w,a1 as G,d as s,h as R,B as C,w as u,g as y,f as _,m as p,j as a,n as X,U as H,D as P,x as f,aH as Y,aj as J,a8 as Z,a9 as T,at as ee,e as b,k as S,q as r,a2 as ne,l as M,N as x,O as k,r as te,i as I,v as oe,o as A,au as q,av as z}from"./index-BK0RZ_Rt.js";import{FoldPopoverComponent as le}from"./popover.component-D02qs8rb.js";import{F as ie}from"./popover-trigger.directive-dFRmq5Wh.js";import{FoldInputBaseComponent as ae}from"./input-base.component-Ck-6snen.js";import{F as g,a as re}from"./option.component-CH6zDcyq.js";import{FoldOptgroupComponent as se}from"./optgroup.component-C5xSXWdL.js";import{F as de,i as L}from"./listbox-nav-DegrHg4s.js";import"./info.component-Bs3XQGBj.js";import"./label.component-PXFycayj.js";const ce=["option"],pe=["list"],_e=["*"],ue=()=>["top-start","bottom-end","top-end"],B=o=>({$implicit:o}),fe=(o,n)=>n.value;function me(o,n){o&1&&(s(0,"span",4),b(1),_()),o&2&&(a(),S(n))}function be(o,n){if(o&1&&(s(0,"span",5),b(1),_()),o&2){const e=r();a(),S(e.placeholder())}}function he(o,n){if(o&1){const e=w();s(0,"button",11),C("click",function(){x(e);const l=r(2);return k(l.selectAll())}),y(1,"fold-icon",12),b(2),_()}if(o&2){const e=r(2);p("disabled",e.allEnabledSelected()),a(2),M(" ",e.selectAllLabel()," ")}}function ge(o,n){if(o&1){const e=w();s(0,"button",11),C("click",function(){x(e);const l=r(2);return k(l.clearAll())}),y(1,"fold-icon",13),b(2),_()}if(o&2){const e=r(2);p("disabled",e.value().length===0),a(2),M(" ",e.clearLabel()," ")}}function ve(o,n){if(o&1&&(s(0,"div",8),u(1,he,3,2,"button",10),u(2,ge,3,2,"button",10),_()),o&2){const e=r();a(),f(e.allowSelectAll()?1:-1),a(),f(e.allowClear()?2:-1)}}function Ce(o,n){if(o&1&&q(0,16),o&2){const e=r().$implicit;p("ngTemplateOutlet",n)("ngTemplateOutletContext",z(2,B,e))}}function Me(o,n){if(o&1&&b(0),o&2){const e=r().$implicit;M(" ",e.label," ")}}function Oe(o,n){if(o&1&&(s(0,"fold-option",15),u(1,Ce,1,4,"ng-container",16)(2,Me,1,1),_()),o&2){let e;const t=n.$implicit,l=r(4);p("value",t.value)("disabled",t.disabled??!1),a(),f((e=l.optionTemplate())?1:2,e)}}function Fe(o,n){if(o&1&&(s(0,"fold-optgroup",14),I(1,Oe,3,3,"fold-option",15,fe),_()),o&2){const e=n;p("label",e.label),a(),A(e.options)}}function we(o,n){if(o&1&&q(0,16),o&2){const e=r();p("ngTemplateOutlet",n)("ngTemplateOutletContext",z(2,B,e))}}function ye(o,n){if(o&1&&b(0),o&2){const e=r();M(" ",e.label," ")}}function xe(o,n){if(o&1&&(s(0,"fold-option",15),u(1,we,1,4,"ng-container",16)(2,ye,1,1),_()),o&2){let e;const t=n,l=r(3);p("value",t.value)("disabled",t.disabled??!1),a(),f((e=l.optionTemplate())?1:2,e)}}function ke(o,n){if(o&1&&u(0,Fe,3,1,"fold-optgroup",14)(1,xe,3,3,"fold-option",15),o&2){let e;const t=n.$implicit,l=r(2);f((e=l.asGroup(t))?0:(e=l.asOption(t))?1:-1,e)}}function Pe(o,n){o&1&&I(0,ke,2,1,null,null,oe),o&2&&A(n)}function Te(o,n){o&1&&ne(0)}const F=3;class v{value=O([]);compareWith=i();options=i();disabled=i(!1);touched=O(!1);errors=i([]);open=O(!1);size=i("md");variant=i("default");label=i();required=i(!1,{transform:h});optional=i(!1,{transform:h});optionalLabel=i("optional");info=i();infoLabel=i("More information");hint=i();placeholder=i();placement=i("bottom-start");allowSelectAll=i(!1,{transform:h});allowClear=i(!1,{transform:h});selectAllLabel=i("Select all");clearLabel=i("Clear");inputId=j(E).next("fold-multiselect");listId=`${this.inputId}-list`;optionTemplate=W("option");projectedOptions=$();renderedOptions=Q(g);allOptions=m(()=>this.options()?this.renderedOptions():this.projectedOptions());list=D("list");eq(n,e){const t=this.compareWith();return t?t(n,e):Object.is(n,e)}nav=new de(()=>this.allOptions(),{select:n=>this.toggle(n),close:()=>this.open.set(!1)});activeId=this.nav.activeId;selectedSet=m(()=>this.compareWith()?null:new Set(this.value()));summaryLabel=m(()=>{if(this.value().length===0)return;const n=this.allOptions().filter(e=>this.isSelected(e.value())).map(e=>e.label);if(n.length!==0)return n.length<=F?n.join(", "):`${n.slice(0,F).join(", ")} +${n.length-F}`});errorMessage=m(()=>{if(!this.touched())return;const n=this.errors()[0];return n?n.message??n.kind:void 0});describedBy=m(()=>this.errorMessage()?`${this.inputId}-error`:this.hint()?`${this.inputId}-hint`:null);showBulk=m(()=>(this.allowSelectAll()||this.allowClear())&&this.allOptions().length>0);allEnabledSelected=m(()=>{const n=this.allOptions().filter(e=>!e.disabled());return n.length>0&&n.every(e=>this.isSelected(e.value()))});hasOpened=!1;constructor(){K(()=>{this.open()?(this.hasOpened=!0,queueMicrotask(()=>{this.open()&&(this.list()?.nativeElement.focus(),this.nav.arm(this.firstSelectedIndex()))})):(this.nav.reset(),this.hasOpened&&this.touched.set(!0))})}isSelected(n){const e=this.selectedSet();return e?e.has(n):this.value().some(t=>this.eq(t,n))}asGroup(n){return L(n)?n:null}asOption(n){return L(n)?null:n}onTriggerKeydown(n){this.open()||["ArrowDown","ArrowUp","Enter"," "].includes(n.key)&&(n.preventDefault(),this.open.set(!0))}onListKeydown(n){this.nav.onKeydown(n)}onListClick(n){const e=this.enabledIndexFrom(n.target);e>=0&&this.toggle(e)}onListPointermove(n){const e=this.enabledIndexFrom(n.target);e>=0&&this.nav.point(e)}firstSelectedIndex(){return this.allOptions().findIndex(n=>this.isSelected(n.value())&&!n.disabled())}enabledIndexFrom(n){if(!(n instanceof Element))return-1;const e=n.closest("[role='option']"),t=this.allOptions(),l=t.findIndex(d=>d.id===e?.id);return l>=0&&!t[l]?.disabled()?l:-1}selectAll(){const n=this.allOptions().filter(e=>!e.disabled()).map(e=>e.value()).filter(e=>!this.isSelected(e));n.length>0&&(this.value.set([...this.value(),...n]),this.touched.set(!0))}clearAll(){this.value().length>0&&(this.value.set([]),this.touched.set(!0))}toggle(n){const e=this.allOptions()[n];if(!e||e.disabled())return;const t=e.value(),l=this.value();this.value.set(this.isSelected(t)?l.filter(d=>!this.eq(d,t)):[...l,t]),this.touched.set(!0)}static ɵfac=function(e){return new(e||v)};static ɵcmp=N({type:v,selectors:[["fold-multiselect"]],contentQueries:function(e,t,l){e&1&&ee(l,t.optionTemplate,ce,5)(l,t.projectedOptions,g,5),e&2&&T(2)},viewQuery:function(e,t){e&1&&Z(t.renderedOptions,g,5)(t.list,pe,5),e&2&&T(2)},hostVars:2,hostBindings:function(e,t){e&2&&J(t.size()+" "+t.variant())},inputs:{value:[1,"value"],compareWith:[1,"compareWith"],options:[1,"options"],disabled:[1,"disabled"],touched:[1,"touched"],errors:[1,"errors"],open:[1,"open"],size:[1,"size"],variant:[1,"variant"],label:[1,"label"],required:[1,"required"],optional:[1,"optional"],optionalLabel:[1,"optionalLabel"],info:[1,"info"],infoLabel:[1,"infoLabel"],hint:[1,"hint"],placeholder:[1,"placeholder"],placement:[1,"placement"],allowSelectAll:[1,"allowSelectAll"],allowClear:[1,"allowClear"],selectAllLabel:[1,"selectAllLabel"],clearLabel:[1,"clearLabel"]},outputs:{value:"valueChange",touched:"touchedChange",open:"openChange"},features:[Y([{provide:re,useExisting:v}])],ngContentSelectors:_e,decls:12,vars:25,consts:[["list",""],[3,"label","for","required","optional","optionalLabel","info","infoLabel","hint","error"],[3,"openChange","open","autoFocus","ariaControls","placement","fallbackPlacements"],["type","button","foldPopoverTrigger","listbox",1,"lb-trigger",3,"keydown","id","disabled"],[1,"lb-value"],[1,"lb-placeholder"],["name","chevron-down","size","sm","aria-hidden","true",1,"lb-caret"],["foldPopoverPanel","",1,"lb-panel"],["role","group","aria-label","Bulk actions",1,"lb-bulk"],["role","listbox","aria-multiselectable","true","tabindex","-1",1,"lb-list",3,"keydown","click","pointermove","id"],["type","button",1,"lb-bulk-btn",3,"disabled"],["type","button",1,"lb-bulk-btn",3,"click","disabled"],["name","check-circle","size","sm","aria-hidden","true"],["name","close","size","sm","aria-hidden","true"],[3,"label"],[3,"value","disabled"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(e,t){if(e&1){const l=w();G(),s(0,"fold-input-base",1)(1,"fold-popover",2),R("openChange",function(c){return x(l),te(t.open,c)||(t.open=c),k(c)}),s(2,"button",3),C("keydown",function(c){return t.onTriggerKeydown(c)}),u(3,me,2,1,"span",4)(4,be,2,1,"span",5),y(5,"fold-icon",6),_(),s(6,"div",7),u(7,ve,3,2,"div",8),s(8,"div",9,0),C("keydown",function(c){return t.onListKeydown(c)})("click",function(c){return t.onListClick(c)})("pointermove",function(c){return t.onListPointermove(c)}),u(10,Pe,2,0)(11,Te,1,0),_()()()()}if(e&2){let l,d;p("label",t.label())("for",t.inputId)("required",t.required())("optional",t.optional())("optionalLabel",t.optionalLabel())("info",t.info())("infoLabel",t.infoLabel())("hint",t.hint())("error",t.errorMessage()),a(),X("open",t.open),p("autoFocus",!1)("ariaControls",t.listId)("placement",t.placement())("fallbackPlacements",H(24,ue)),a(),p("id",t.inputId)("disabled",t.disabled()),P("aria-invalid",t.errorMessage()?!0:null)("aria-describedby",t.describedBy()),a(),f((l=t.summaryLabel())?3:4,l),a(4),f(t.showBulk()?7:-1),a(),p("id",t.listId),P("aria-label",t.label())("aria-activedescendant",t.activeId()),a(2),f((d=t.options())?10:11,d)}},dependencies:[ae,U,g,se,le,ie,V],styles:[`@charset "UTF-8";





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
}`]})}export{v as FoldMultiselectComponent};
