import{a4 as d,x as t,K as c,T as b,a5 as f,y as p,ɵ as h,F as m,L as C,d as _,C as M,I as P,N as O,f as a,g as v,m as u,j as l,P as y,J as w,ae as k,e as I,k as z}from"./index-BUJ3msiF.js";import{FoldInputBaseComponent as F}from"./input-base.component-DMeJjERw.js";import{r as q}from"./input-value-Co_u-z_8.js";import"./label.component-EAv75kpa.js";const x=["*"];function S(s,e){s&1&&(_(0,"option",3),I(1),a()),s&2&&(l(),z(e))}class i{value=d("");disabled=t(!1);touched=d(!1);errors=t([]);size=t("md");variant=t("default");label=t();required=t(!1,{transform:c});optional=t(!1,{transform:c});optionalLabel=t("optional");hint=t();placeholder=t();inputId=b(f).next("fold-select");errorMessage=p(()=>{if(!this.touched())return;const e=this.errors()[0];return e?e.message??e.kind:void 0});describedBy=p(()=>this.errorMessage()?`${this.inputId}-error`:this.hint()?`${this.inputId}-hint`:null);onChange(e){this.value.set(q(e))}onBlur(){this.touched.set(!0)}static ɵfac=function(o){return new(o||i)};static ɵcmp=h({type:i,selectors:[["fold-select"]],hostVars:2,hostBindings:function(o,n){o&2&&k(n.size()+" "+n.variant())},inputs:{value:[1,"value"],disabled:[1,"disabled"],touched:[1,"touched"],errors:[1,"errors"],size:[1,"size"],variant:[1,"variant"],label:[1,"label"],required:[1,"required"],optional:[1,"optional"],optionalLabel:[1,"optionalLabel"],hint:[1,"hint"],placeholder:[1,"placeholder"]},outputs:{value:"valueChange",touched:"touchedChange"},ngContentSelectors:x,decls:6,vars:14,consts:[[3,"label","for","required","optional","optionalLabel","hint","error"],[1,"sel-wrap"],[1,"sel",3,"change","blur","id","disabled","value"],["value","","disabled","","hidden",""],["name","chevron-down","size","sm","aria-hidden","true",1,"sel-caret"]],template:function(o,n){if(o&1&&(C(),_(0,"fold-input-base",0)(1,"div",1)(2,"select",2),M("change",function(g){return n.onChange(g)})("blur",function(){return n.onBlur()}),P(3,S,2,1,"option",3),O(4),a(),v(5,"fold-icon",4),a()()),o&2){let r;u("label",n.label())("for",n.inputId)("required",n.required())("optional",n.optional())("optionalLabel",n.optionalLabel())("hint",n.hint())("error",n.errorMessage()),l(2),u("id",n.inputId)("disabled",n.disabled())("value",n.value()),y("required",n.required()||null)("aria-invalid",n.errorMessage()?!0:null)("aria-describedby",n.describedBy()),l(),w((r=n.placeholder())?3:-1,r)}},dependencies:[F,m],styles:[`[_nghost-%COMP%] {
  display: block;
}

input[_ngcontent-%COMP%], 
select[_ngcontent-%COMP%] {
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
select[_ngcontent-%COMP%]::placeholder {
  color: var(--fold-color-text-faded);
}
input[_ngcontent-%COMP%]:hover:not(:disabled):not(:read-only):not(:focus), 
select[_ngcontent-%COMP%]:hover:not(:disabled):not(:read-only):not(:focus) {
  border-color: var(--fold-color-border);
}
input[_ngcontent-%COMP%]:focus, 
select[_ngcontent-%COMP%]:focus {
  border-color: var(--fold-color-primary);
  box-shadow: 0 0 0 2px var(--fold-color-primary-border);
}
input[_ngcontent-%COMP%]:disabled, 
select[_ngcontent-%COMP%]:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
input[_ngcontent-%COMP%]:read-only, 
select[_ngcontent-%COMP%]:read-only {
  opacity: 0.6;
  cursor: default;
}
input[type=number][_ngcontent-%COMP%], 
select[type=number][_ngcontent-%COMP%] {
  appearance: textfield;
  -moz-appearance: textfield;
}
input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button, 
select[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, 
select[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {
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

.md[_nghost-%COMP%]   input[_ngcontent-%COMP%], 
.md[_nghost-%COMP%]   select[_ngcontent-%COMP%] {
  height: 2.25rem;
  font-size: var(--fold-text-md);
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

.center[_nghost-%COMP%]   input[_ngcontent-%COMP%] {
  text-align: center;
}

.panel[_nghost-%COMP%]   input[_ngcontent-%COMP%], 
.panel[_nghost-%COMP%]   select[_ngcontent-%COMP%] {
  height: auto;
  padding: 7px 10px;
  border-radius: var(--fold-radius-sm);
  background: var(--fold-color-surface-raised);
}
.panel[_nghost-%COMP%]   input[_ngcontent-%COMP%]:focus, 
.panel[_nghost-%COMP%]   select[_ngcontent-%COMP%]:focus {
  box-shadow: none;
}

.sel-wrap[_ngcontent-%COMP%] {
  position: relative;
}

.sel[_ngcontent-%COMP%] {
  appearance: none;
  -webkit-appearance: none;
  padding-right: 1.85rem;
  cursor: pointer;
}
.sel[_ngcontent-%COMP%]:disabled {
  cursor: not-allowed;
}

.sel-caret[_ngcontent-%COMP%] {
  position: absolute;
  top: 50%;
  right: 0.6rem;
  transform: translateY(-50%);
  pointer-events: none;
  color: var(--fold-color-text-muted);
}`]})}export{i as FoldSelectComponent};
