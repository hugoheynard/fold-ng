import{ag as g,u as i,aq as T,X as v,a2 as k,ah as I,ar as q,aL as z,aJ as j,A as _,a0 as A,a4 as B,ɵ as E,F as S,as as W,E as y,Y as D,d,h as Q,B as C,w as f,g as L,f as p,m as c,j as s,n as $,U as K,L as N,D as O,x as b,aF as V,ai as R,a7 as U,a8 as F,au as X,e as w,k as x,q as u,Z as Y,N as P,O as M,r as H,i as J,o as Z,av as G,aw as ee,l as ne}from"./index-_ZvulUZ_.js";import{FoldPopoverComponent as te}from"./popover.component-B5ecVsrS.js";import{F as oe}from"./popover-trigger.directive-D6yoaYap.js";import{FoldInputBaseComponent as ie}from"./input-base.component-DH1ffJG_.js";import{F as m,a as le}from"./option.component-CPvOKpbr.js";import{F as ae}from"./listbox-nav-CtYKQW9s.js";import"./label.component-WLyNOFjj.js";const re=["option"],se=["list"],de=["*"],pe=()=>["top-start","bottom-end","top-end"],ce=o=>({$implicit:o}),ue=(o,e)=>e.value;function _e(o,e){o&1&&(d(0,"span",5),w(1),p()),o&2&&(s(),x(e))}function me(o,e){if(o&1&&(d(0,"span",6),w(1),p()),o&2){const n=u();s(),x(n.placeholder())}}function fe(o,e){if(o&1){const n=y();d(0,"button",10),C("click",function(l){P(n);const r=u();return M(r.clear(l))}),L(1,"fold-icon",11),p()}if(o&2){const n=u();O("aria-label",n.clearLabel())}}function be(o,e){if(o&1&&G(0,13),o&2){const n=u().$implicit;c("ngTemplateOutlet",e)("ngTemplateOutletContext",ee(2,ce,n))}}function he(o,e){if(o&1&&w(0),o&2){const n=u().$implicit;ne(" ",n.label," ")}}function ge(o,e){if(o&1&&(d(0,"fold-option",12),f(1,be,1,4,"ng-container",13)(2,he,1,1),p()),o&2){let n;const t=e.$implicit,l=u(2);c("value",t.value)("disabled",t.disabled??!1),s(),b((n=l.optionTemplate())?1:2,n)}}function ve(o,e){o&1&&J(0,ge,3,3,"fold-option",12,ue),o&2&&Z(e)}function Ce(o,e){o&1&&Y(0)}class h{value=g(null);compareWith=i();options=i();disabled=i(!1);touched=g(!1);errors=i([]);open=g(!1);selectionChange=T();size=i("md");variant=i("default");label=i();required=i(!1,{transform:v});optional=i(!1,{transform:v});optionalLabel=i("optional");hint=i();placeholder=i();placement=i("bottom-start");allowClear=i(!1,{transform:v});clearLabel=i("Clear");inputId=k(I).next("fold-listbox");listId=`${this.inputId}-list`;optionTemplate=q("option");projectedOptions=z(m);renderedOptions=j(m);allOptions=_(()=>this.options()?this.renderedOptions():this.projectedOptions());list=A("list");eq(e,n){const t=this.compareWith();return t?t(e,n):Object.is(e,n)}nav=new ae(()=>this.allOptions(),{select:e=>this.selectAt(e),close:()=>this.open.set(!1)});activeId=this.nav.activeId;selectedLabel=_(()=>{const e=this.value();return e===null?void 0:this.allOptions().find(n=>this.eq(n.value(),e))?.label});showClear=_(()=>this.allowClear()&&this.value()!==null&&!this.disabled());errorMessage=_(()=>{if(!this.touched())return;const e=this.errors()[0];return e?e.message??e.kind:void 0});describedBy=_(()=>this.errorMessage()?`${this.inputId}-error`:this.hint()?`${this.inputId}-hint`:null);hasOpened=!1;constructor(){B(()=>{this.open()?(this.hasOpened=!0,queueMicrotask(()=>{this.open()&&(this.list()?.nativeElement.focus(),this.nav.arm(this.selectedIndex()))})):(this.nav.reset(),this.hasOpened&&this.touched.set(!0))})}isSelected(e){const n=this.value();return n!==null&&this.eq(n,e)}clear(e){e.stopPropagation(),this.value.set(null),this.touched.set(!0)}onTriggerKeydown(e){if(!this.open()){if(["ArrowDown","ArrowUp","Enter"," "].includes(e.key)){e.preventDefault(),this.open.set(!0);return}this.nav.typeahead(e,n=>this.selectAt(n))}}onListKeydown(e){this.nav.onKeydown(e)}onListClick(e){const n=this.enabledOptionFrom(e.target);n&&this.commit(n)}onListPointermove(e){const n=this.enabledOptionFrom(e.target);n&&this.nav.point(this.allOptions().indexOf(n))}selectedIndex(){const e=this.value();return e===null?-1:this.allOptions().findIndex(n=>this.eq(n.value(),e)&&!n.disabled())}enabledOptionFrom(e){if(!(e instanceof Element))return null;const n=e.closest("[role='option']"),t=this.allOptions().find(l=>l.id===n?.id);return t&&!t.disabled()?t:null}selectAt(e){const n=this.allOptions()[e];n&&!n.disabled()&&this.commit(n)}commit(e){const n=e.value();this.value.set(n),this.selectionChange.emit(n),this.touched.set(!0),this.open.set(!1)}static ɵfac=function(n){return new(n||h)};static ɵcmp=E({type:h,selectors:[["fold-listbox"]],contentQueries:function(n,t,l){n&1&&X(l,t.optionTemplate,re,5)(l,t.projectedOptions,m,4),n&2&&F(2)},viewQuery:function(n,t){n&1&&U(t.renderedOptions,m,5)(t.list,se,5),n&2&&F(2)},hostVars:2,hostBindings:function(n,t){n&2&&R(t.size()+" "+t.variant())},inputs:{value:[1,"value"],compareWith:[1,"compareWith"],options:[1,"options"],disabled:[1,"disabled"],touched:[1,"touched"],errors:[1,"errors"],open:[1,"open"],size:[1,"size"],variant:[1,"variant"],label:[1,"label"],required:[1,"required"],optional:[1,"optional"],optionalLabel:[1,"optionalLabel"],hint:[1,"hint"],placeholder:[1,"placeholder"],placement:[1,"placement"],allowClear:[1,"allowClear"],clearLabel:[1,"clearLabel"]},outputs:{value:"valueChange",touched:"touchedChange",open:"openChange",selectionChange:"selectionChange"},features:[V([{provide:le,useExisting:h}])],ngContentSelectors:de,decls:12,vars:25,consts:[["list",""],[3,"label","for","required","optional","optionalLabel","hint","error"],[3,"openChange","open","autoFocus","ariaControls","placement","fallbackPlacements"],[1,"lb-field"],["type","button","foldPopoverTrigger","listbox",1,"lb-trigger",3,"keydown","id","disabled"],[1,"lb-value"],[1,"lb-placeholder"],["name","chevron-down","size","sm","aria-hidden","true",1,"lb-caret"],["type","button",1,"lb-clear"],["foldPopoverPanel","","role","listbox","tabindex","-1",1,"lb-list",3,"keydown","click","pointermove","id"],["type","button",1,"lb-clear",3,"click"],["name","close","size","sm","aria-hidden","true"],[3,"value","disabled"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,t){if(n&1){const l=y();D(),d(0,"fold-input-base",1)(1,"fold-popover",2),Q("openChange",function(a){return P(l),H(t.open,a)||(t.open=a),M(a)}),d(2,"div",3)(3,"button",4),C("keydown",function(a){return t.onTriggerKeydown(a)}),f(4,_e,2,1,"span",5)(5,me,2,1,"span",6),L(6,"fold-icon",7),p(),f(7,fe,2,1,"button",8),p(),d(8,"div",9,0),C("keydown",function(a){return t.onListKeydown(a)})("click",function(a){return t.onListClick(a)})("pointermove",function(a){return t.onListPointermove(a)}),f(10,ve,2,0)(11,Ce,1,0),p()()()}if(n&2){let l,r;c("label",t.label())("for",t.inputId)("required",t.required())("optional",t.optional())("optionalLabel",t.optionalLabel())("hint",t.hint())("error",t.errorMessage()),s(),$("open",t.open),c("autoFocus",!1)("ariaControls",t.listId)("placement",t.placement())("fallbackPlacements",K(24,pe)),s(2),N("has-clear",t.showClear()),c("id",t.inputId)("disabled",t.disabled()),O("aria-invalid",t.errorMessage()?!0:null)("aria-describedby",t.describedBy()),s(),b((l=t.selectedLabel())?4:5,l),s(3),b(t.showClear()?7:-1),s(),c("id",t.listId),O("aria-label",t.label())("aria-activedescendant",t.activeId()),s(2),b((r=t.options())?10:11,r)}},dependencies:[ie,S,m,te,oe,W],styles:[`


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
}`]})}export{h as FoldListboxComponent};
