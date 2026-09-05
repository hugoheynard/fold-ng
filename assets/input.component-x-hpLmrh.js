import{af as m,u as e,a0 as s,X as y,ag as w,a4 as L,A as l,s as I,ɵ as x,F as k,d as u,w as h,B as f,f as c,m as i,j as d,x as v,L as F,D as b,ai as z,a8 as T,a9 as q,g,E as C,q as p,N as O,O as M}from"./index-jTHNGJ2s.js";import{FoldInputBaseComponent as B}from"./input-base.component-fvH3Fs4F.js";import{r as R}from"./input-value-DCGlOvqF.js";import"./info.component-D1RLTPMe.js";import"./common-labels-CQtHIx19.js";import"./popover.component-VRQopxTZ.js";import"./auto-update-_srfpL1Q.js";import"./popover-trigger.directive-C_NUs7DG.js";import"./label.component-DEQXuW2U.js";const A=["field"];function V(a,o){a&1&&g(0,"fold-icon",3),a&2&&i("name",o)}function S(a,o){if(a&1){const t=C();u(0,"button",7),f("click",function(){O(t);const r=p();return M(r.toggleReveal())}),g(1,"fold-icon",8),c()}if(a&2){const t=p();i("disabled",t.disabled()||t.readOnly()),b("aria-label",t.revealAria())("aria-pressed",t.revealed()),d(),i("name",t.revealed()?"eye-off":"eye")}}function E(a,o){if(a&1){const t=C();u(0,"button",9),f("click",function(){O(t);const r=p();return M(r.clear())}),g(1,"fold-icon",10),c()}if(a&2){const t=p();b("aria-label",t.clearLabel())}}class _{value=m("");disabled=e(!1);touched=m(!1);errors=e([]);type=e("text");revealable=e(!1,{transform:s});revealLabel=e("Show password");hideLabel=e("Hide password");size=e("md");align=e("start");variant=e("default");label=e();required=e(!1,{transform:s});optional=e(!1,{transform:s});optionalLabel=e();info=e();infoLabel=e();ariaLabel=e(void 0);hint=e();placeholder=e("");leadingIcon=e(void 0);clearable=e(!1,{transform:s});clearLabel=e("Clear");readOnly=e(!1);autofocus=e(!1);autocomplete=e(null);inputId=y(w).next("fold-input");field=L("field");errorMessage=l(()=>{if(!this.touched())return;const o=this.errors()[0];return o?o.message??o.kind:void 0});describedBy=l(()=>this.errorMessage()?`${this.inputId}-error`:this.hint()?`${this.inputId}-hint`:null);revealed=I(!1);showReveal=l(()=>this.revealable()&&this.type()==="password");effectiveType=l(()=>this.showReveal()&&this.revealed()?"text":this.type());revealAria=l(()=>this.revealed()?this.hideLabel():this.revealLabel());showClear=l(()=>this.clearable()&&this.value()!==""&&!this.disabled()&&!this.readOnly()&&!this.showReveal());toggleReveal(){this.revealed.update(o=>!o)}clear(){this.value.set(""),this.field()?.nativeElement.focus()}onInputChange(o){this.value.set(R(o))}onBlur(){this.touched.set(!0)}static ɵfac=function(t){return new(t||_)};static ɵcmp=x({type:_,selectors:[["fold-input"]],viewQuery:function(t,n){t&1&&T(n.field,A,5),t&2&&q()},hostVars:2,hostBindings:function(t,n){t&2&&z(n.size()+" "+n.align()+" "+n.variant())},inputs:{value:[1,"value"],disabled:[1,"disabled"],touched:[1,"touched"],errors:[1,"errors"],type:[1,"type"],revealable:[1,"revealable"],revealLabel:[1,"revealLabel"],hideLabel:[1,"hideLabel"],size:[1,"size"],align:[1,"align"],variant:[1,"variant"],label:[1,"label"],required:[1,"required"],optional:[1,"optional"],optionalLabel:[1,"optionalLabel"],info:[1,"info"],infoLabel:[1,"infoLabel"],ariaLabel:[1,"ariaLabel"],hint:[1,"hint"],placeholder:[1,"placeholder"],leadingIcon:[1,"leadingIcon"],clearable:[1,"clearable"],clearLabel:[1,"clearLabel"],readOnly:[1,"readOnly"],autofocus:[1,"autofocus"],autocomplete:[1,"autocomplete"]},outputs:{value:"valueChange",touched:"touchedChange"},decls:7,vars:26,consts:[["field",""],[3,"label","for","required","optional","optionalLabel","info","infoLabel","hint","error"],[1,"in-field"],["size","sm","aria-hidden","true",1,"in-lead",3,"name"],[3,"input","blur","id","value"],["type","button",1,"in-reveal",3,"disabled"],["type","button",1,"in-reveal"],["type","button",1,"in-reveal",3,"click","disabled"],["size","sm","aria-hidden","true",3,"name"],["type","button",1,"in-reveal",3,"click"],["name","close","size","sm","aria-hidden","true"]],template:function(t,n){if(t&1&&(u(0,"fold-input-base",1)(1,"div",2),h(2,V,1,1,"fold-icon",3),u(3,"input",4,0),f("input",function(P){return n.onInputChange(P)})("blur",function(){return n.onBlur()}),c(),h(5,S,2,4,"button",5)(6,E,2,1,"button",6),c()()),t&2){let r;i("label",n.label())("for",n.inputId)("required",n.required())("optional",n.optional())("optionalLabel",n.optionalLabel())("info",n.info())("infoLabel",n.infoLabel())("hint",n.hint())("error",n.errorMessage()),d(2),v((r=n.leadingIcon())?2:-1,r),d(),F("has-lead",n.leadingIcon()!==void 0)("has-reveal",n.showReveal()||n.showClear()),i("id",n.inputId)("value",n.value()),b("type",n.effectiveType())("placeholder",n.placeholder())("readonly",n.readOnly()||null)("disabled",n.disabled()||null)("required",n.required()||null)("aria-invalid",n.errorMessage()?!0:null)("aria-describedby",n.describedBy())("aria-label",n.ariaLabel())("autocomplete",n.autocomplete()),d(2),v(n.showReveal()?5:n.showClear()?6:-1)}},dependencies:[B,k],styles:[`@charset "UTF-8";





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

.in-field[_ngcontent-%COMP%] {
  position: relative;
}

[_nghost-%COMP%]   input.has-reveal[_ngcontent-%COMP%] {
  padding-inline-end: 2.1rem;
}

[_nghost-%COMP%]   input.has-lead[_ngcontent-%COMP%] {
  padding-inline-start: 2.1rem;
}

.in-lead[_ngcontent-%COMP%] {
  position: absolute;
  inset-inline-start: 0.6rem;
  top: 50%;
  transform: translateY(-50%);
  display: grid;
  place-items: center;
  color: var(--fold-color-text-muted);
  pointer-events: none;
}

.in-reveal[_ngcontent-%COMP%] {
  all: unset;
  position: absolute;
  inset-inline-end: 0.4rem;
  top: 50%;
  transform: translateY(-50%);
  display: grid;
  place-items: center;
  padding: 0.2rem;
  border-radius: var(--fold-radius-xs);
  color: var(--fold-color-text-muted);
  cursor: pointer;
}
.in-reveal[_ngcontent-%COMP%]:hover:not(:disabled), .in-reveal[_ngcontent-%COMP%]:focus-visible {
  color: var(--fold-color-text);
  background: var(--fold-color-surface-hover);
}
.in-reveal[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--fold-color-primary-border);
  outline-offset: 1px;
}
.in-reveal[_ngcontent-%COMP%]:disabled {
  cursor: not-allowed;
  opacity: 0.4;
}

@media (forced-colors: active) {
  .in-reveal[_ngcontent-%COMP%]:focus-visible {
    outline-color: Highlight;
  }
}`]})}export{_ as FoldInputComponent};
