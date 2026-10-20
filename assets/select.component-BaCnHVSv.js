import{af as d,u as e,a0 as c,X as m,ag as f,A as g,ɵ as C,F as M,a1 as h,d as p,B as b,w as O,a2 as P,f as r,g as v,m as u,j as i,D as x,x as y,ai as w,e as z,k as L}from"./index-Dghn7KbS.js";import{FoldInputBaseComponent as k}from"./input-base.component-BcRsR3zM.js";import{r as F}from"./input-value-DCGlOvqF.js";import"./info.component-Dkwm_Lx5.js";import"./common-labels-ZF1cAHNG.js";import"./popover.component-VnUOJ-w-.js";import"./auto-update-_srfpL1Q.js";import"./popover-trigger.directive-D_oCnwDZ.js";import"./label.component-X-GgChpD.js";const I=["*"];function q(l,t){l&1&&(p(0,"option",3),z(1),r()),l&2&&(i(),L(t))}class s{value=d("");disabled=e(!1);touched=d(!1);errors=e([]);size=e("md");variant=e("default");label=e();required=e(!1,{transform:c});optional=e(!1,{transform:c});optionalLabel=e();info=e();infoLabel=e();ariaLabel=e(void 0);hint=e();placeholder=e();inputId=m(f).next("fold-select");errorMessage=g(()=>{if(!this.touched())return;const t=this.errors()[0];return t?t.message??t.kind:void 0});describedBy=g(()=>this.errorMessage()?`${this.inputId}-error`:this.hint()?`${this.inputId}-hint`:null);onChange(t){this.value.set(F(t))}onBlur(){this.touched.set(!0)}static ɵfac=function(o){return new(o||s)};static ɵcmp=C({type:s,selectors:[["fold-select"]],hostVars:2,hostBindings:function(o,n){o&2&&w(n.size()+" "+n.variant())},inputs:{value:[1,"value"],disabled:[1,"disabled"],touched:[1,"touched"],errors:[1,"errors"],size:[1,"size"],variant:[1,"variant"],label:[1,"label"],required:[1,"required"],optional:[1,"optional"],optionalLabel:[1,"optionalLabel"],info:[1,"info"],infoLabel:[1,"infoLabel"],ariaLabel:[1,"ariaLabel"],hint:[1,"hint"],placeholder:[1,"placeholder"]},outputs:{value:"valueChange",touched:"touchedChange"},ngContentSelectors:I,decls:6,vars:17,consts:[[3,"label","for","required","optional","optionalLabel","info","infoLabel","hint","error"],[1,"sel-wrap"],[1,"sel",3,"change","blur","id","disabled","value"],["value","","disabled","","hidden",""],["name","chevron-down","size","sm","aria-hidden","true",1,"sel-caret"]],template:function(o,n){if(o&1&&(h(),p(0,"fold-input-base",0)(1,"div",1)(2,"select",2),b("change",function(_){return n.onChange(_)})("blur",function(){return n.onBlur()}),O(3,q,2,1,"option",3),P(4),r(),v(5,"fold-icon",4),r()()),o&2){let a;u("label",n.label())("for",n.inputId)("required",n.required())("optional",n.optional())("optionalLabel",n.optionalLabel())("info",n.info())("infoLabel",n.infoLabel())("hint",n.hint())("error",n.errorMessage()),i(2),u("id",n.inputId)("disabled",n.disabled())("value",n.value()),x("required",n.required()||null)("aria-invalid",n.errorMessage()?!0:null)("aria-describedby",n.describedBy())("aria-label",n.ariaLabel()),i(),y((a=n.placeholder())?3:-1,a)}},dependencies:[k,M],styles:[`@charset "UTF-8";





















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
}`]})}export{s as FoldSelectComponent};
