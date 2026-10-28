import{af as _,u as o,a0 as p,ao as O,X as g,ag as w,A as l,ap as T,aK as k,al as F,$ as L,aA as q,aB as I,ɵ as z,aq as S,d,B as f,f as u,i as E,v as D,w as M,e as b,m as c,j as s,U as B,D as v,o as $,x,k as y,aG as A,ai as W,a8 as Q,a9 as P,as as N,q as m,g as j,at as K,au as U,l as H}from"./index-C9CHsQIx.js";import{FoldLoadingStateComponent as R}from"./loading-state.component-BomP6SiW.js";import{FoldPopoverComponent as V}from"./popover.component-C_kvnP5e.js";import{F as X}from"./popover-trigger.directive-DiGFPqIP.js";import{F as G}from"./common-labels-OFEtq6G8.js";import{FoldInputBaseComponent as J}from"./input-base.component-BE3q5uDE.js";import{F as C,a as Y}from"./option.component-BK_RmEXK.js";import{b as Z}from"./option-filter-BjDrTtmX.js";import"./auto-update-_srfpL1Q.js";import"./info.component-QmhDwg1P.js";import"./label.component-CPvhkVS_.js";import"./select-option-O1EpAQQH.js";const nn=["option"],en=()=>["top-start","bottom-end","top-end"],tn=a=>({$implicit:a});function on(a,e){if(a&1&&K(0,10),a&2){const t=m().$implicit;c("ngTemplateOutlet",e)("ngTemplateOutletContext",U(2,tn,t))}}function an(a,e){if(a&1&&b(0),a&2){const t=m().$implicit;H(" ",t.label," ")}}function rn(a,e){if(a&1&&(d(0,"fold-option",6),M(1,on,1,4,"ng-container",10)(2,an,1,1),u()),a&2){let t;const n=e.$implicit,i=m();c("value",n.value)("disabled",n.disabled??!1),s(),x((t=i.optionTemplate())?1:2,t)}}function sn(a,e){if(a&1&&j(0,"fold-loading",7),a&2){const t=m();c("message",t.loadingWord())}}function ln(a,e){if(a&1&&(d(0,"p",8),b(1),u()),a&2){const t=m();s(),y(t.emptyText())}}class h{value=_(null);query=_("");open=_(!1);options=o([]);filter=o("contains");compareWith=o();delayMs=o(300);loading=o(!1,{transform:p});emptyText=o("No results");loadingText=o();resultLabel=o("results");clearOnSelect=o(!1,{transform:p});label=o();ariaLabel=o(void 0);placeholder=o();hint=o();info=o();infoLabel=o();required=o(!1,{transform:p});optional=o(!1,{transform:p});optionalLabel=o();disabled=o(!1,{transform:p});readOnly=o(!1,{transform:p});touched=_(!1);errors=o([]);size=o("md");variant=o("default");placement=o("bottom-start");searchChange=O();selectionChange=O();inputId=g(w).next("fold-combobox");listId=`${this.inputId}-list`;common=g(G);loadingWord=l(()=>this.loadingText()??this.common.loading);optionTemplate=T("option");rows=k(C);filtered=l(()=>{const e=this.options(),t=this.filter(),n=this.query().trim().toLowerCase();return t==="none"||n===""||n===this.pickedLabel()?.toLowerCase()?e:e.filter(i=>Z(i,t,n))});active=F({source:this.filtered,computation:()=>-1});panelOpen=l(()=>this.open()&&!this.disabled()&&!this.readOnly()&&(this.loading()||this.filtered().length>0||this.query().trim()!==""));activeId=l(()=>this.panelOpen()?this.rows()[this.active()]?.id??null:null);status=l(()=>{if(!this.panelOpen()||this.loading()||this.query().trim()==="")return"";const e=this.filtered().length;return e===0?this.emptyText():`${String(e)} ${this.resultLabel()}`});errorMessage=l(()=>{const e=this.touched()?this.errors()[0]:void 0;return e?e.message??e.kind:void 0});describedBy=l(()=>this.errorMessage()?`${this.inputId}-error`:this.hint()?`${this.inputId}-hint`:null);timer=null;lastEmitted="";constructor(){g(L).onDestroy(()=>this.stopTimer()),q(()=>{const e=this.pickedLabel();e!==void 0&&I(()=>this.query.set(e))})}isSelected(e){const t=this.value();return t!==null&&this.eq(t,e)}pickedLabel(){const e=this.value();return e===null?void 0:this.options().find(t=>this.eq(t.value,e))?.label}eq(e,t){const n=this.compareWith();return n?n(e,t):Object.is(e,t)}onInput(e){const t=e.target instanceof HTMLInputElement?e.target.value:"";this.query.set(t),this.value()!==null&&this.value.set(null),this.open.set(!0);const n=t.trim();this.stopTimer(),this.timer=setTimeout(()=>{n!==this.lastEmitted&&(this.lastEmitted=n,this.searchChange.emit(n))},this.delayMs())}onKeydown(e){switch(e.key){case"ArrowDown":case"ArrowUp":e.preventDefault(),e.stopPropagation(),this.panelOpen()?this.move(e.key==="ArrowDown"?1:-1):this.open.set(!0);break;case"Enter":this.panelOpen()&&this.active()>=0&&(e.preventDefault(),this.pick(this.active()));break;case"Escape":this.open.set(!1);break;case"Tab":this.open.set(!1);break}}onFieldClick(e){e.stopPropagation(),!this.disabled()&&!this.readOnly()&&this.open.set(!0)}onPopoverOpenChange(e){e||this.open.set(!1)}onListClick(e){const t=this.rowIndexFrom(e.target);t>=0&&this.pick(t)}onListPointermove(e){const t=this.rowIndexFrom(e.target);t>=0&&this.active.set(t)}rowIndexFrom(e){if(!(e instanceof Element))return-1;const t=e.closest("[role='option']")?.id,n=this.rows().findIndex(i=>i.id===t);return n>=0&&!this.filtered()[n]?.disabled?n:-1}move(e){const t=this.filtered();let n=this.active();for(let i=t.length;i>0;i-=1)if(n=(n+e+t.length)%t.length,!t[n]?.disabled){this.active.set(n),this.rows()[n]?.scrollIntoView();return}}pick(e){const t=this.filtered()[e];!t||t.disabled||(this.stopTimer(),this.clearOnSelect()?(this.query.set(""),this.lastEmitted=""):(this.value.set(t.value),this.query.set(t.label)),this.selectionChange.emit(t.value),this.touched.set(!0),this.open.set(!1))}stopTimer(){this.timer!==null&&(clearTimeout(this.timer),this.timer=null)}static ɵfac=function(t){return new(t||h)};static ɵcmp=z({type:h,selectors:[["fold-combobox"]],contentQueries:function(t,n,i){t&1&&N(i,n.optionTemplate,nn,5),t&2&&P()},viewQuery:function(t,n){t&1&&Q(n.rows,C,5),t&2&&P()},hostVars:2,hostBindings:function(t,n){t&2&&W(n.size()+" "+n.variant())},inputs:{value:[1,"value"],query:[1,"query"],open:[1,"open"],options:[1,"options"],filter:[1,"filter"],compareWith:[1,"compareWith"],delayMs:[1,"delayMs"],loading:[1,"loading"],emptyText:[1,"emptyText"],loadingText:[1,"loadingText"],resultLabel:[1,"resultLabel"],clearOnSelect:[1,"clearOnSelect"],label:[1,"label"],ariaLabel:[1,"ariaLabel"],placeholder:[1,"placeholder"],hint:[1,"hint"],info:[1,"info"],infoLabel:[1,"infoLabel"],required:[1,"required"],optional:[1,"optional"],optionalLabel:[1,"optionalLabel"],disabled:[1,"disabled"],readOnly:[1,"readOnly"],touched:[1,"touched"],errors:[1,"errors"],size:[1,"size"],variant:[1,"variant"],placement:[1,"placement"]},outputs:{value:"valueChange",query:"queryChange",open:"openChange",touched:"touchedChange",searchChange:"searchChange",selectionChange:"selectionChange"},features:[A([{provide:Y,useExisting:h}])],decls:12,vars:29,consts:[["field",""],[3,"label","for","required","optional","optionalLabel","info","infoLabel","hint","error"],[3,"openChange","open","autoFocus","ariaControls","placement","fallbackPlacements"],["foldPopoverTrigger","listbox","type","text","role","combobox","aria-autocomplete","list","autocomplete","off",3,"input","keydown","click","blur","id","value"],["foldPopoverPanel","",1,"cb-panel",3,"mousedown"],["role","listbox",1,"cb-list",3,"click","pointermove","id"],[3,"value","disabled"],["size","sm",1,"cb-loading",3,"message"],[1,"cb-empty"],["role","status","aria-live","polite",1,"cb-status"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,n){t&1&&(d(0,"fold-input-base",1)(1,"fold-popover",2),f("openChange",function(r){return n.onPopoverOpenChange(r)}),d(2,"input",3,0),f("input",function(r){return n.onInput(r)})("keydown",function(r){return n.onKeydown(r)})("click",function(r){return n.onFieldClick(r)})("blur",function(){return n.touched.set(!0)}),u(),d(4,"div",4),f("mousedown",function(r){return r.preventDefault()}),d(5,"div",5),f("click",function(r){return n.onListClick(r)})("pointermove",function(r){return n.onListPointermove(r)}),E(6,rn,3,3,"fold-option",6,D),u(),M(8,sn,1,1,"fold-loading",7)(9,ln,2,1,"p",8),u()(),d(10,"span",9),b(11),u()()),t&2&&(c("label",n.label())("for",n.inputId)("required",n.required())("optional",n.optional())("optionalLabel",n.optionalLabel())("info",n.info())("infoLabel",n.infoLabel())("hint",n.hint())("error",n.errorMessage()),s(),c("open",n.panelOpen())("autoFocus",!1)("ariaControls",n.listId)("placement",n.placement())("fallbackPlacements",B(28,en)),s(),c("id",n.inputId)("value",n.query()),v("placeholder",n.placeholder())("readonly",n.readOnly()||null)("disabled",n.disabled()||null)("required",n.required()||null)("aria-invalid",n.errorMessage()?!0:null)("aria-describedby",n.describedBy())("aria-label",n.ariaLabel())("aria-activedescendant",n.activeId()),s(3),c("id",n.listId),v("aria-label",n.label()??n.ariaLabel()),s(),$(n.filtered()),s(2),x(n.loading()?8:n.filtered().length===0?9:-1),s(3),y(n.status()))},dependencies:[J,R,C,V,X,S],styles:[`@charset "UTF-8";





















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
  border: 1px solid var(--fold-color-border-field);
  transition: border-color var(--fold-motion-fast), box-shadow var(--fold-motion-fast);
}
input[_ngcontent-%COMP%]::placeholder, 
select[_ngcontent-%COMP%]::placeholder, 
textarea[_ngcontent-%COMP%]::placeholder {
  color: var(--fold-color-text-muted);
}
input[_ngcontent-%COMP%]:hover:not(:disabled):not(:read-only):not(:focus), 
select[_ngcontent-%COMP%]:hover:not(:disabled):not(:read-only):not(:focus), 
textarea[_ngcontent-%COMP%]:hover:not(:disabled):not(:read-only):not(:focus) {
  border-color: var(--fold-color-text-secondary);
}
input[_ngcontent-%COMP%]:focus, 
select[_ngcontent-%COMP%]:focus, 
textarea[_ngcontent-%COMP%]:focus {
  border-color: var(--fold-color-primary);
  box-shadow: 0 0 0 1px var(--fold-color-primary);
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
}
@media (pointer: coarse) {
  .sm[_nghost-%COMP%]   input[_ngcontent-%COMP%], 
   .sm[_nghost-%COMP%]   select[_ngcontent-%COMP%] {
    font-size: max(var(--fold-text-touch-min), var(--fold-text-sm));
  }
}
.sm[_nghost-%COMP%]   input[_ngcontent-%COMP%], 
.sm[_nghost-%COMP%]   select[_ngcontent-%COMP%] {
  padding: 0.25rem 0.5rem;
  border-radius: var(--fold-radius-xs);
}

.sm[_nghost-%COMP%]   textarea[_ngcontent-%COMP%] {
  font-size: var(--fold-text-sm);
}
@media (pointer: coarse) {
  .sm[_nghost-%COMP%]   textarea[_ngcontent-%COMP%] {
    font-size: max(var(--fold-text-touch-min), var(--fold-text-sm));
  }
}
.sm[_nghost-%COMP%]   textarea[_ngcontent-%COMP%] {
  padding: 0.25rem 0.5rem;
  border-radius: var(--fold-radius-xs);
}

.md[_nghost-%COMP%]   input[_ngcontent-%COMP%], 
.md[_nghost-%COMP%]   select[_ngcontent-%COMP%] {
  height: 2.25rem;
  font-size: var(--fold-text-base);
}
@media (pointer: coarse) {
  .md[_nghost-%COMP%]   input[_ngcontent-%COMP%], 
   .md[_nghost-%COMP%]   select[_ngcontent-%COMP%] {
    font-size: max(var(--fold-text-touch-min), var(--fold-text-base));
  }
}
.md[_nghost-%COMP%]   input[_ngcontent-%COMP%], 
.md[_nghost-%COMP%]   select[_ngcontent-%COMP%] {
  padding: 0.4rem 0.65rem;
  border-radius: var(--fold-radius-sm);
}

.md[_nghost-%COMP%]   textarea[_ngcontent-%COMP%] {
  font-size: var(--fold-text-base);
}
@media (pointer: coarse) {
  .md[_nghost-%COMP%]   textarea[_ngcontent-%COMP%] {
    font-size: max(var(--fold-text-touch-min), var(--fold-text-base));
  }
}
.md[_nghost-%COMP%]   textarea[_ngcontent-%COMP%] {
  padding: 0.4rem 0.65rem;
  border-radius: var(--fold-radius-sm);
}

.lg[_nghost-%COMP%]   input[_ngcontent-%COMP%], 
.lg[_nghost-%COMP%]   select[_ngcontent-%COMP%] {
  height: 2.75rem;
  font-size: var(--fold-text-lg);
}
@media (pointer: coarse) {
  .lg[_nghost-%COMP%]   input[_ngcontent-%COMP%], 
   .lg[_nghost-%COMP%]   select[_ngcontent-%COMP%] {
    font-size: max(var(--fold-text-touch-min), var(--fold-text-lg));
  }
}
.lg[_nghost-%COMP%]   input[_ngcontent-%COMP%], 
.lg[_nghost-%COMP%]   select[_ngcontent-%COMP%] {
  padding: 0.5rem 0.75rem;
  border-radius: var(--fold-radius-sm);
}

.lg[_nghost-%COMP%]   textarea[_ngcontent-%COMP%] {
  font-size: var(--fold-text-lg);
}
@media (pointer: coarse) {
  .lg[_nghost-%COMP%]   textarea[_ngcontent-%COMP%] {
    font-size: max(var(--fold-text-touch-min), var(--fold-text-lg));
  }
}
.lg[_nghost-%COMP%]   textarea[_ngcontent-%COMP%] {
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
