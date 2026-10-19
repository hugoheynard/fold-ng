import{af as f,u as o,a0 as c,ao as v,X as b,ag as w,A as s,ap as T,aK as k,al as F,$ as L,aA as q,aB as I,ɵ as z,aq as S,d,B as _,f as u,i as E,v as D,w as y,e as C,m as p,j as l,U as B,D as O,o as $,x as M,k as x,aG as W,ai as A,a8 as Q,a9 as P,as as N,q as m,g as j,at as K,au as U,l as H}from"./index-CE38r_-Z.js";import{FoldLoadingStateComponent as R}from"./loading-state.component-C-FHGI6s.js";import{FoldPopoverComponent as V}from"./popover.component-D8APJu_U.js";import{F as X}from"./popover-trigger.directive-D7V5CI9z.js";import{F as G}from"./common-labels-Ccp64ZyX.js";import{FoldInputBaseComponent as J}from"./input-base.component-I521EDUa.js";import{F as g,a as Y}from"./option.component-CXWnWE_T.js";import"./auto-update-_srfpL1Q.js";import"./info.component-B5q9IR1d.js";import"./label.component-DILONqCL.js";const Z=["option"],ee=()=>["top-start","bottom-end","top-end"],ne=a=>({$implicit:a});function te(a,t){if(a&1&&K(0,10),a&2){const n=m().$implicit;p("ngTemplateOutlet",t)("ngTemplateOutletContext",U(2,ne,n))}}function oe(a,t){if(a&1&&C(0),a&2){const n=m().$implicit;H(" ",n.label," ")}}function ie(a,t){if(a&1&&(d(0,"fold-option",6),y(1,te,1,4,"ng-container",10)(2,oe,1,1),u()),a&2){let n;const e=t.$implicit,i=m();p("value",e.value)("disabled",e.disabled??!1),l(),M((n=i.optionTemplate())?1:2,n)}}function ae(a,t){if(a&1&&j(0,"fold-loading",7),a&2){const n=m();p("message",n.loadingWord())}}function re(a,t){if(a&1&&(d(0,"p",8),C(1),u()),a&2){const n=m();l(),x(n.emptyText())}}class h{value=f(null);query=f("");open=f(!1);options=o([]);filter=o("contains");compareWith=o();delayMs=o(300);loading=o(!1,{transform:c});emptyText=o("No results");loadingText=o();resultLabel=o("results");clearOnSelect=o(!1,{transform:c});label=o();ariaLabel=o(void 0);placeholder=o();hint=o();info=o();infoLabel=o();required=o(!1,{transform:c});optional=o(!1,{transform:c});optionalLabel=o();disabled=o(!1,{transform:c});readOnly=o(!1,{transform:c});touched=f(!1);errors=o([]);size=o("md");variant=o("default");placement=o("bottom-start");searchChange=v();selectionChange=v();inputId=b(w).next("fold-combobox");listId=`${this.inputId}-list`;common=b(G);loadingWord=s(()=>this.loadingText()??this.common.loading);optionTemplate=T("option");rows=k(g);filtered=s(()=>{const t=this.options(),n=this.filter(),e=this.query().trim().toLowerCase();return n==="none"||e===""||e===this.pickedLabel()?.toLowerCase()?t:typeof n=="function"?t.filter(i=>n(i,e)):t.filter(i=>{const r=i.label.toLowerCase();return n==="startsWith"?r.startsWith(e):r.includes(e)})});active=F({source:this.filtered,computation:()=>-1});panelOpen=s(()=>this.open()&&!this.disabled()&&!this.readOnly()&&(this.loading()||this.filtered().length>0||this.query().trim()!==""));activeId=s(()=>this.panelOpen()?this.rows()[this.active()]?.id??null:null);status=s(()=>{if(!this.panelOpen()||this.loading()||this.query().trim()==="")return"";const t=this.filtered().length;return t===0?this.emptyText():`${String(t)} ${this.resultLabel()}`});errorMessage=s(()=>{const t=this.touched()?this.errors()[0]:void 0;return t?t.message??t.kind:void 0});describedBy=s(()=>this.errorMessage()?`${this.inputId}-error`:this.hint()?`${this.inputId}-hint`:null);timer=null;lastEmitted="";constructor(){b(L).onDestroy(()=>this.stopTimer()),q(()=>{const t=this.pickedLabel();t!==void 0&&I(()=>this.query.set(t))})}isSelected(t){const n=this.value();return n!==null&&this.eq(n,t)}pickedLabel(){const t=this.value();return t===null?void 0:this.options().find(n=>this.eq(n.value,t))?.label}eq(t,n){const e=this.compareWith();return e?e(t,n):Object.is(t,n)}onInput(t){const n=t.target instanceof HTMLInputElement?t.target.value:"";this.query.set(n),this.value()!==null&&this.value.set(null),this.open.set(!0);const e=n.trim();this.stopTimer(),this.timer=setTimeout(()=>{e!==this.lastEmitted&&(this.lastEmitted=e,this.searchChange.emit(e))},this.delayMs())}onKeydown(t){switch(t.key){case"ArrowDown":case"ArrowUp":t.preventDefault(),t.stopPropagation(),this.panelOpen()?this.move(t.key==="ArrowDown"?1:-1):this.open.set(!0);break;case"Enter":this.panelOpen()&&this.active()>=0&&(t.preventDefault(),this.pick(this.active()));break;case"Escape":this.open.set(!1);break;case"Tab":this.open.set(!1);break}}onFieldClick(t){t.stopPropagation()}onPopoverOpenChange(t){t||this.open.set(!1)}onListClick(t){const n=this.rowIndexFrom(t.target);n>=0&&this.pick(n)}onListPointermove(t){const n=this.rowIndexFrom(t.target);n>=0&&this.active.set(n)}rowIndexFrom(t){if(!(t instanceof Element))return-1;const n=t.closest("[role='option']")?.id,e=this.rows().findIndex(i=>i.id===n);return e>=0&&!this.filtered()[e]?.disabled?e:-1}move(t){const n=this.filtered();let e=this.active();for(let i=n.length;i>0;i-=1)if(e=(e+t+n.length)%n.length,!n[e]?.disabled){this.active.set(e),this.rows()[e]?.scrollIntoView();return}}pick(t){const n=this.filtered()[t];!n||n.disabled||(this.stopTimer(),this.clearOnSelect()?(this.query.set(""),this.lastEmitted=""):(this.value.set(n.value),this.query.set(n.label)),this.selectionChange.emit(n.value),this.touched.set(!0),this.open.set(!1))}stopTimer(){this.timer!==null&&(clearTimeout(this.timer),this.timer=null)}static ɵfac=function(n){return new(n||h)};static ɵcmp=z({type:h,selectors:[["fold-combobox"]],contentQueries:function(n,e,i){n&1&&N(i,e.optionTemplate,Z,5),n&2&&P()},viewQuery:function(n,e){n&1&&Q(e.rows,g,5),n&2&&P()},hostVars:2,hostBindings:function(n,e){n&2&&A(e.size()+" "+e.variant())},inputs:{value:[1,"value"],query:[1,"query"],open:[1,"open"],options:[1,"options"],filter:[1,"filter"],compareWith:[1,"compareWith"],delayMs:[1,"delayMs"],loading:[1,"loading"],emptyText:[1,"emptyText"],loadingText:[1,"loadingText"],resultLabel:[1,"resultLabel"],clearOnSelect:[1,"clearOnSelect"],label:[1,"label"],ariaLabel:[1,"ariaLabel"],placeholder:[1,"placeholder"],hint:[1,"hint"],info:[1,"info"],infoLabel:[1,"infoLabel"],required:[1,"required"],optional:[1,"optional"],optionalLabel:[1,"optionalLabel"],disabled:[1,"disabled"],readOnly:[1,"readOnly"],touched:[1,"touched"],errors:[1,"errors"],size:[1,"size"],variant:[1,"variant"],placement:[1,"placement"]},outputs:{value:"valueChange",query:"queryChange",open:"openChange",touched:"touchedChange",searchChange:"searchChange",selectionChange:"selectionChange"},features:[W([{provide:Y,useExisting:h}])],decls:12,vars:29,consts:[["field",""],[3,"label","for","required","optional","optionalLabel","info","infoLabel","hint","error"],[3,"openChange","open","autoFocus","ariaControls","placement","fallbackPlacements"],["foldPopoverTrigger","listbox","type","text","role","combobox","aria-autocomplete","list","autocomplete","off",3,"input","keydown","click","blur","id","value"],["foldPopoverPanel","",1,"cb-panel",3,"mousedown"],["role","listbox",1,"cb-list",3,"click","pointermove","id"],[3,"value","disabled"],["size","sm",1,"cb-loading",3,"message"],[1,"cb-empty"],["role","status","aria-live","polite",1,"cb-status"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,e){n&1&&(d(0,"fold-input-base",1)(1,"fold-popover",2),_("openChange",function(r){return e.onPopoverOpenChange(r)}),d(2,"input",3,0),_("input",function(r){return e.onInput(r)})("keydown",function(r){return e.onKeydown(r)})("click",function(r){return e.onFieldClick(r)})("blur",function(){return e.touched.set(!0)}),u(),d(4,"div",4),_("mousedown",function(r){return r.preventDefault()}),d(5,"div",5),_("click",function(r){return e.onListClick(r)})("pointermove",function(r){return e.onListPointermove(r)}),E(6,ie,3,3,"fold-option",6,D),u(),y(8,ae,1,1,"fold-loading",7)(9,re,2,1,"p",8),u()(),d(10,"span",9),C(11),u()()),n&2&&(p("label",e.label())("for",e.inputId)("required",e.required())("optional",e.optional())("optionalLabel",e.optionalLabel())("info",e.info())("infoLabel",e.infoLabel())("hint",e.hint())("error",e.errorMessage()),l(),p("open",e.panelOpen())("autoFocus",!1)("ariaControls",e.listId)("placement",e.placement())("fallbackPlacements",B(28,ee)),l(),p("id",e.inputId)("value",e.query()),O("placeholder",e.placeholder())("readonly",e.readOnly()||null)("disabled",e.disabled()||null)("required",e.required()||null)("aria-invalid",e.errorMessage()?!0:null)("aria-describedby",e.describedBy())("aria-label",e.ariaLabel())("aria-activedescendant",e.activeId()),l(3),p("id",e.listId),O("aria-label",e.label()??e.ariaLabel()),l(),$(e.filtered()),l(2),M(e.loading()?8:e.filtered().length===0?9:-1),l(3),x(e.status()))},dependencies:[J,R,g,V,X,S],styles:[`@charset "UTF-8";





[_nghost-%COMP%] {
  display: block;
}

input[_ngcontent-%COMP%], 
select[_ngcontent-%COMP%], 
textarea[_ngcontent-%COMP%] {
  all: unset;
  box-sizing: border-box;
  width: 100%;
  font-family: inherit;
  color: var(--fold-color-text);
  background: var(--fold-color-surface-card);
  border: 1px solid var(--fold-color-border-subtle);
  transition: border-color var(--fold-motion-fast), box-shadow var(--fold-motion-fast);
}
input[_ngcontent-%COMP%]::placeholder, 
select[_ngcontent-%COMP%]::placeholder, 
textarea[_ngcontent-%COMP%]::placeholder {
  color: var(--fold-color-text-faded);
}
input[_ngcontent-%COMP%]:hover:not(:disabled):not(:read-only):not(:focus), 
select[_ngcontent-%COMP%]:hover:not(:disabled):not(:read-only):not(:focus), 
textarea[_ngcontent-%COMP%]:hover:not(:disabled):not(:read-only):not(:focus) {
  border-color: var(--fold-color-border);
}
input[_ngcontent-%COMP%]:focus, 
select[_ngcontent-%COMP%]:focus, 
textarea[_ngcontent-%COMP%]:focus {
  border-color: var(--fold-color-primary);
  box-shadow: 0 0 0 2px var(--fold-color-primary-border);
}
input[_ngcontent-%COMP%]:disabled, 
select[_ngcontent-%COMP%]:disabled, 
textarea[_ngcontent-%COMP%]:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
input[_ngcontent-%COMP%]:read-only, 
select[_ngcontent-%COMP%]:read-only, 
textarea[_ngcontent-%COMP%]:read-only {
  opacity: 0.6;
  cursor: default;
}
input[type=number][_ngcontent-%COMP%], 
select[type=number][_ngcontent-%COMP%], 
textarea[type=number][_ngcontent-%COMP%] {
  appearance: textfield;
  -moz-appearance: textfield;
}
input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button, 
select[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, 
select[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button, 
textarea[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, 
textarea[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.sm[_nghost-%COMP%]   input[_ngcontent-%COMP%], 
.sm[_nghost-%COMP%]   select[_ngcontent-%COMP%] {
  height: 1.75rem;
  font-size: var(--fold-text-sm);
  padding: 0.25rem 0.5rem;
  border-radius: var(--fold-radius-xs);
}

.sm[_nghost-%COMP%]   textarea[_ngcontent-%COMP%] {
  font-size: var(--fold-text-sm);
  padding: 0.25rem 0.5rem;
  border-radius: var(--fold-radius-xs);
}

.md[_nghost-%COMP%]   input[_ngcontent-%COMP%], 
.md[_nghost-%COMP%]   select[_ngcontent-%COMP%] {
  height: 2.25rem;
  font-size: var(--fold-text-base);
  padding: 0.4rem 0.65rem;
  border-radius: var(--fold-radius-sm);
}

.md[_nghost-%COMP%]   textarea[_ngcontent-%COMP%] {
  font-size: var(--fold-text-base);
  padding: 0.4rem 0.65rem;
  border-radius: var(--fold-radius-sm);
}

.lg[_nghost-%COMP%]   input[_ngcontent-%COMP%], 
.lg[_nghost-%COMP%]   select[_ngcontent-%COMP%] {
  height: 2.75rem;
  font-size: var(--fold-text-lg);
  padding: 0.5rem 0.75rem;
  border-radius: var(--fold-radius-sm);
}

.lg[_nghost-%COMP%]   textarea[_ngcontent-%COMP%] {
  font-size: var(--fold-text-lg);
  padding: 0.5rem 0.75rem;
  border-radius: var(--fold-radius-sm);
}

.center[_nghost-%COMP%]   input[_ngcontent-%COMP%] {
  text-align: center;
}

.panel[_nghost-%COMP%]   input[_ngcontent-%COMP%], 
.panel[_nghost-%COMP%]   select[_ngcontent-%COMP%], 
.panel[_nghost-%COMP%]   textarea[_ngcontent-%COMP%] {
  height: auto;
  padding: var(--fold-space-sm) var(--fold-space-sm);
  border-radius: var(--fold-radius-sm);
  background: var(--fold-color-surface-raised);
}
.panel[_nghost-%COMP%]   input[_ngcontent-%COMP%]:focus, 
.panel[_nghost-%COMP%]   select[_ngcontent-%COMP%]:focus, 
.panel[_nghost-%COMP%]   textarea[_ngcontent-%COMP%]:focus {
  box-shadow: none;
}

.cb-panel[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  min-width: var(--fold-popover-anchor-width, 11rem);
}

.cb-list[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.cb-list[_ngcontent-%COMP%]:empty {
  display: none;
}

.cb-loading[_ngcontent-%COMP%] {
  padding: var(--fold-space-sm);
}

.cb-empty[_ngcontent-%COMP%] {
  margin: 0;
  padding: var(--fold-space-sm) var(--fold-space-md);
  font-size: var(--fold-text-sm);
  color: var(--fold-color-text-muted);
}

.cb-status[_ngcontent-%COMP%] {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}`]})}export{h as FoldComboboxComponent};
