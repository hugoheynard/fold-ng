import{ab as h,u as l,W as O,a1 as P,ac as T,an as x,aN as I,aK as k,N as p,aB as L,aL as S,ɵ as q,F as j,ao as W,S as z,X as B,d as c,h as $,T as M,w as b,g as E,f as _,m as d,j as s,n as A,L as K,Z as w,x as v,aG as Q,ae as D,aC as N,ar as y,aq as V,e as C,k as F,q as f,Y as R,U,r as X,V as Y,i as G,o as H,as as Z,at as J,l as ee}from"./index-Dx8_Baf4.js";import{FoldPopoverComponent as ne}from"./popover.component-lm4EMX2Z.js";import{F as te}from"./popover-trigger.directive-Cuyoj2rK.js";import{FoldInputBaseComponent as oe}from"./input-base.component-C7j42D3T.js";import{F as u,a as ie}from"./option.component-CQsW3qSJ.js";import{F as le}from"./listbox-nav-BJutZ_ga.js";import"./label.component-CJpB0smF.js";const re=["option"],ae=["list"],se=["*"],de=()=>["top-start","bottom-end","top-end"],ce=o=>({$implicit:o}),pe=(o,e)=>e.value;function ue(o,e){o&1&&(c(0,"span",4),C(1),_()),o&2&&(s(),F(e))}function _e(o,e){if(o&1&&(c(0,"span",5),C(1),_()),o&2){const t=f();s(),F(t.placeholder())}}function me(o,e){if(o&1&&Z(0,9),o&2){const t=f().$implicit;d("ngTemplateOutlet",e)("ngTemplateOutletContext",J(2,ce,t))}}function fe(o,e){if(o&1&&C(0),o&2){const t=f().$implicit;ee(" ",t.label," ")}}function he(o,e){if(o&1&&(c(0,"fold-option",8),b(1,me,1,4,"ng-container",9)(2,fe,1,1),_()),o&2){let t;const n=e.$implicit,i=f(2);d("value",n.value)("disabled",n.disabled??!1),s(),v((t=i.optionTemplate())?1:2,t)}}function ge(o,e){o&1&&G(0,he,3,3,"fold-option",8,pe),o&2&&H(e)}function be(o,e){o&1&&R(0)}const g=3;class m{value=h([]);compareWith=l();options=l();disabled=l(!1);touched=h(!1);errors=l([]);open=h(!1);size=l("md");variant=l("default");label=l();required=l(!1,{transform:O});optional=l(!1,{transform:O});optionalLabel=l("optional");hint=l();placeholder=l();placement=l("bottom-start");inputId=P(T).next("fold-multiselect");listId=`${this.inputId}-list`;optionTemplate=x("option");projectedOptions=I(u);renderedOptions=k(u);allOptions=p(()=>this.options()?this.renderedOptions():this.projectedOptions());list=L("list");eq(e,t){const n=this.compareWith();return n?n(e,t):Object.is(e,t)}nav=new le(()=>this.allOptions(),{select:e=>this.toggle(e),close:()=>this.open.set(!1)});activeId=this.nav.activeId;selectedSet=p(()=>this.compareWith()?null:new Set(this.value()));summaryLabel=p(()=>{if(this.value().length===0)return;const e=this.allOptions().filter(t=>this.isSelected(t.value())).map(t=>t.label);if(e.length!==0)return e.length<=g?e.join(", "):`${e.slice(0,g).join(", ")} +${e.length-g}`});errorMessage=p(()=>{if(!this.touched())return;const e=this.errors()[0];return e?e.message??e.kind:void 0});describedBy=p(()=>this.errorMessage()?`${this.inputId}-error`:this.hint()?`${this.inputId}-hint`:null);hasOpened=!1;constructor(){S(()=>{this.open()?(this.hasOpened=!0,queueMicrotask(()=>{this.open()&&(this.list()?.nativeElement.focus(),this.nav.arm(this.firstSelectedIndex()))})):(this.nav.reset(),this.hasOpened&&this.touched.set(!0))})}isSelected(e){const t=this.selectedSet();return t?t.has(e):this.value().some(n=>this.eq(n,e))}onTriggerKeydown(e){this.open()||["ArrowDown","ArrowUp","Enter"," "].includes(e.key)&&(e.preventDefault(),this.open.set(!0))}onListKeydown(e){this.nav.onKeydown(e)}onListClick(e){const t=this.enabledIndexFrom(e.target);t>=0&&this.toggle(t)}onListPointermove(e){const t=this.enabledIndexFrom(e.target);t>=0&&this.nav.point(t)}firstSelectedIndex(){return this.allOptions().findIndex(e=>this.isSelected(e.value())&&!e.disabled())}enabledIndexFrom(e){if(!(e instanceof Element))return-1;const t=e.closest("[role='option']"),n=this.allOptions(),i=n.findIndex(r=>r.id===t?.id);return i>=0&&!n[i]?.disabled()?i:-1}toggle(e){const t=this.allOptions()[e];if(!t||t.disabled())return;const n=t.value(),i=this.value();this.value.set(this.isSelected(n)?i.filter(r=>!this.eq(r,n)):[...i,n]),this.touched.set(!0)}static ɵfac=function(t){return new(t||m)};static ɵcmp=q({type:m,selectors:[["fold-multiselect"]],contentQueries:function(t,n,i){t&1&&V(i,n.optionTemplate,re,5)(i,n.projectedOptions,u,4),t&2&&y(2)},viewQuery:function(t,n){t&1&&N(n.renderedOptions,u,5)(n.list,ae,5),t&2&&y(2)},hostVars:2,hostBindings:function(t,n){t&2&&D(n.size()+" "+n.variant())},inputs:{value:[1,"value"],compareWith:[1,"compareWith"],options:[1,"options"],disabled:[1,"disabled"],touched:[1,"touched"],errors:[1,"errors"],open:[1,"open"],size:[1,"size"],variant:[1,"variant"],label:[1,"label"],required:[1,"required"],optional:[1,"optional"],optionalLabel:[1,"optionalLabel"],hint:[1,"hint"],placeholder:[1,"placeholder"],placement:[1,"placement"]},outputs:{value:"valueChange",touched:"touchedChange",open:"openChange"},features:[Q([{provide:ie,useExisting:m}])],ngContentSelectors:se,decls:10,vars:22,consts:[["list",""],[3,"label","for","required","optional","optionalLabel","hint","error"],[3,"openChange","open","autoFocus","ariaControls","placement","fallbackPlacements"],["type","button","foldPopoverTrigger","listbox",1,"lb-trigger",3,"keydown","id","disabled"],[1,"lb-value"],[1,"lb-placeholder"],["name","chevron-down","size","sm","aria-hidden","true",1,"lb-caret"],["foldPopoverPanel","","role","listbox","aria-multiselectable","true","tabindex","-1",1,"lb-list",3,"keydown","click","pointermove","id"],[3,"value","disabled"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,n){if(t&1){const i=z();B(),c(0,"fold-input-base",1)(1,"fold-popover",2),$("openChange",function(a){return U(i),X(n.open,a)||(n.open=a),Y(a)}),c(2,"button",3),M("keydown",function(a){return n.onTriggerKeydown(a)}),b(3,ue,2,1,"span",4)(4,_e,2,1,"span",5),E(5,"fold-icon",6),_(),c(6,"div",7,0),M("keydown",function(a){return n.onListKeydown(a)})("click",function(a){return n.onListClick(a)})("pointermove",function(a){return n.onListPointermove(a)}),b(8,ge,2,0)(9,be,1,0),_()()()}if(t&2){let i,r;d("label",n.label())("for",n.inputId)("required",n.required())("optional",n.optional())("optionalLabel",n.optionalLabel())("hint",n.hint())("error",n.errorMessage()),s(),A("open",n.open),d("autoFocus",!1)("ariaControls",n.listId)("placement",n.placement())("fallbackPlacements",K(21,de)),s(),d("id",n.inputId)("disabled",n.disabled()),w("aria-invalid",n.errorMessage()?!0:null)("aria-describedby",n.describedBy()),s(),v((i=n.summaryLabel())?3:4,i),s(3),d("id",n.listId),w("aria-label",n.label())("aria-activedescendant",n.activeId()),s(2),v((r=n.options())?8:9,r)}},dependencies:[oe,j,u,ne,te,W],styles:[`


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
}`]})}export{m as FoldMultiselectComponent};
