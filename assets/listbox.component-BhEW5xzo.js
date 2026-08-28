import{af as C,u as l,ao as A,a0 as v,X as L,A as u,ag as E,ap as j,aP as D,aK as $,a4 as K,a5 as Q,ɵ as N,F as G,aq as V,E as y,a1 as U,d as c,h as R,B as O,w as m,g as P,f as _,m as p,j as r,n as X,U as H,L as Y,D as F,x as f,aG as J,ai as Z,a8 as ee,a9 as w,as as ne,e as g,k as T,q as s,a2 as oe,N as M,O as k,r as te,i as I,v as ie,o as q,at as z,au as B,l as S}from"./index-CK_dhrcT.js";import{F as le}from"./common-labels-CrnsCFZh.js";import{FoldPopoverComponent as ae}from"./popover.component-ByI9sNPl.js";import{F as re}from"./popover-trigger.directive-DhRFnwpf.js";import{FoldInputBaseComponent as se}from"./input-base.component-CrY9CrpJ.js";import{F as b,a as de}from"./option.component-CymH29DG.js";import{FoldOptgroupComponent as pe}from"./optgroup.component-BRInJByr.js";import{F as ce,i as x}from"./listbox-nav-DoHDJh7k.js";import"./auto-update-_srfpL1Q.js";import"./info.component-MkrUzijT.js";import"./label.component-lTAJCUhM.js";const _e=["option"],ue=["list"],me=["*"],fe=()=>["top-start","bottom-end","top-end"],W=t=>({$implicit:t}),be=(t,e)=>e.value;function he(t,e){t&1&&(c(0,"span",5),g(1),_()),t&2&&(r(),T(e))}function ge(t,e){if(t&1&&(c(0,"span",6),g(1),_()),t&2){const n=s();r(),T(n.placeholder())}}function Ce(t,e){if(t&1){const n=y();c(0,"button",10),O("click",function(i){M(n);const d=s();return k(d.clear(i))}),P(1,"fold-icon",11),_()}if(t&2){const n=s();F("aria-label",n.clearWord())}}function ve(t,e){if(t&1&&z(0,14),t&2){const n=s().$implicit;p("ngTemplateOutlet",e)("ngTemplateOutletContext",B(2,W,n))}}function Oe(t,e){if(t&1&&g(0),t&2){const n=s().$implicit;S(" ",n.label," ")}}function Fe(t,e){if(t&1&&(c(0,"fold-option",13),m(1,ve,1,4,"ng-container",14)(2,Oe,1,1),_()),t&2){let n;const o=e.$implicit,i=s(4);p("value",o.value)("disabled",o.disabled??!1),r(),f((n=i.optionTemplate())?1:2,n)}}function Le(t,e){if(t&1&&(c(0,"fold-optgroup",12),I(1,Fe,3,3,"fold-option",13,be),_()),t&2){const n=e;p("label",n.label),r(),q(n.options)}}function we(t,e){if(t&1&&z(0,14),t&2){const n=s();p("ngTemplateOutlet",e)("ngTemplateOutletContext",B(2,W,n))}}function xe(t,e){if(t&1&&g(0),t&2){const n=s();S(" ",n.label," ")}}function ye(t,e){if(t&1&&(c(0,"fold-option",13),m(1,we,1,4,"ng-container",14)(2,xe,1,1),_()),t&2){let n;const o=e,i=s(3);p("value",o.value)("disabled",o.disabled??!1),r(),f((n=i.optionTemplate())?1:2,n)}}function Pe(t,e){if(t&1&&m(0,Le,3,1,"fold-optgroup",12)(1,ye,3,3,"fold-option",13),t&2){let n;const o=e.$implicit,i=s(2);f((n=i.asGroup(o))?0:(n=i.asOption(o))?1:-1,n)}}function Te(t,e){t&1&&I(0,Pe,2,1,null,null,ie),t&2&&q(e)}function Me(t,e){t&1&&oe(0)}class h{value=C(null);compareWith=l();options=l();disabled=l(!1);touched=C(!1);errors=l([]);open=C(!1);selectionChange=A();size=l("md");variant=l("default");label=l();required=l(!1,{transform:v});optional=l(!1,{transform:v});optionalLabel=l();info=l();infoLabel=l();ariaLabel=l(void 0);hint=l();placeholder=l();placement=l("bottom-start");allowClear=l(!1,{transform:v});clearLabel=l();common=L(le);clearWord=u(()=>this.clearLabel()??this.common.clear);inputId=L(E).next("fold-listbox");listId=`${this.inputId}-list`;optionTemplate=j("option");projectedOptions=D();renderedOptions=$(b);allOptions=u(()=>this.options()?this.renderedOptions():this.projectedOptions());list=K("list");eq(e,n){const o=this.compareWith();return o?o(e,n):Object.is(e,n)}nav=new ce(()=>this.allOptions(),{select:e=>this.selectAt(e),close:()=>this.open.set(!1)});activeId=this.nav.activeId;selectedLabel=u(()=>{const e=this.value();return e===null?void 0:this.allOptions().find(n=>this.eq(n.value(),e))?.label});showClear=u(()=>this.allowClear()&&this.value()!==null&&!this.disabled());errorMessage=u(()=>{if(!this.touched())return;const e=this.errors()[0];return e?e.message??e.kind:void 0});describedBy=u(()=>this.errorMessage()?`${this.inputId}-error`:this.hint()?`${this.inputId}-hint`:null);hasOpened=!1;constructor(){Q(()=>{this.open()?(this.hasOpened=!0,queueMicrotask(()=>{this.open()&&(this.list()?.nativeElement.focus(),this.nav.arm(this.selectedIndex()))})):(this.nav.reset(),this.hasOpened&&this.touched.set(!0))})}isSelected(e){const n=this.value();return n!==null&&this.eq(n,e)}asGroup(e){return x(e)?e:null}asOption(e){return x(e)?null:e}clear(e){e.stopPropagation(),this.value.set(null),this.touched.set(!0)}onTriggerKeydown(e){if(!this.open()){if(["ArrowDown","ArrowUp","Enter"," "].includes(e.key)){e.preventDefault(),this.open.set(!0);return}this.nav.typeahead(e,n=>this.selectAt(n))}}onListKeydown(e){this.nav.onKeydown(e)}onListClick(e){const n=this.enabledOptionFrom(e.target);n&&this.commit(n)}onListPointermove(e){const n=this.enabledOptionFrom(e.target);n&&this.nav.point(this.allOptions().indexOf(n))}selectedIndex(){const e=this.value();return e===null?-1:this.allOptions().findIndex(n=>this.eq(n.value(),e)&&!n.disabled())}enabledOptionFrom(e){if(!(e instanceof Element))return null;const n=e.closest("[role='option']"),o=this.allOptions().find(i=>i.id===n?.id);return o&&!o.disabled()?o:null}selectAt(e){const n=this.allOptions()[e];n&&!n.disabled()&&this.commit(n)}commit(e){const n=e.value();this.value.set(n),this.selectionChange.emit(n),this.touched.set(!0),this.open.set(!1)}static ɵfac=function(n){return new(n||h)};static ɵcmp=N({type:h,selectors:[["fold-listbox"]],contentQueries:function(n,o,i){n&1&&ne(i,o.optionTemplate,_e,5)(i,o.projectedOptions,b,5),n&2&&w(2)},viewQuery:function(n,o){n&1&&ee(o.renderedOptions,b,5)(o.list,ue,5),n&2&&w(2)},hostVars:2,hostBindings:function(n,o){n&2&&Z(o.size()+" "+o.variant())},inputs:{value:[1,"value"],compareWith:[1,"compareWith"],options:[1,"options"],disabled:[1,"disabled"],touched:[1,"touched"],errors:[1,"errors"],open:[1,"open"],size:[1,"size"],variant:[1,"variant"],label:[1,"label"],required:[1,"required"],optional:[1,"optional"],optionalLabel:[1,"optionalLabel"],info:[1,"info"],infoLabel:[1,"infoLabel"],ariaLabel:[1,"ariaLabel"],hint:[1,"hint"],placeholder:[1,"placeholder"],placement:[1,"placement"],allowClear:[1,"allowClear"],clearLabel:[1,"clearLabel"]},outputs:{value:"valueChange",touched:"touchedChange",open:"openChange",selectionChange:"selectionChange"},features:[J([{provide:de,useExisting:h}])],ngContentSelectors:me,decls:12,vars:28,consts:[["list",""],[3,"label","for","required","optional","optionalLabel","info","infoLabel","hint","error"],[3,"openChange","open","autoFocus","ariaControls","placement","fallbackPlacements"],[1,"lb-field"],["type","button","foldPopoverTrigger","listbox",1,"lb-trigger",3,"keydown","id","disabled"],[1,"lb-value"],[1,"lb-placeholder"],["name","chevron-down","size","sm","aria-hidden","true",1,"lb-caret"],["type","button",1,"lb-clear"],["foldPopoverPanel","","role","listbox","tabindex","-1",1,"lb-list",3,"keydown","click","pointermove","id"],["type","button",1,"lb-clear",3,"click"],["name","close","size","sm","aria-hidden","true"],[3,"label"],[3,"value","disabled"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,o){if(n&1){const i=y();U(),c(0,"fold-input-base",1)(1,"fold-popover",2),R("openChange",function(a){return M(i),te(o.open,a)||(o.open=a),k(a)}),c(2,"div",3)(3,"button",4),O("keydown",function(a){return o.onTriggerKeydown(a)}),m(4,he,2,1,"span",5)(5,ge,2,1,"span",6),P(6,"fold-icon",7),_(),m(7,Ce,2,1,"button",8),_(),c(8,"div",9,0),O("keydown",function(a){return o.onListKeydown(a)})("click",function(a){return o.onListClick(a)})("pointermove",function(a){return o.onListPointermove(a)}),m(10,Te,2,0)(11,Me,1,0),_()()()}if(n&2){let i,d;p("label",o.label())("for",o.inputId)("required",o.required())("optional",o.optional())("optionalLabel",o.optionalLabel())("info",o.info())("infoLabel",o.infoLabel())("hint",o.hint())("error",o.errorMessage()),r(),X("open",o.open),p("autoFocus",!1)("ariaControls",o.listId)("placement",o.placement())("fallbackPlacements",H(27,fe)),r(2),Y("has-clear",o.showClear()),p("id",o.inputId)("disabled",o.disabled()),F("aria-invalid",o.errorMessage()?!0:null)("aria-describedby",o.describedBy())("aria-label",o.ariaLabel()),r(),f((i=o.selectedLabel())?4:5,i),r(3),f(o.showClear()?7:-1),r(),p("id",o.listId),F("aria-label",o.label())("aria-activedescendant",o.activeId()),r(2),f((d=o.options())?10:11,d)}},dependencies:[se,G,b,pe,ae,re,V],styles:[`@charset "UTF-8";





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
}`]})}export{h as FoldListboxComponent};
