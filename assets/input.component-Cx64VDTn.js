import{ag as c,u as e,a0 as i,X as h,ah as v,A as a,s as C,ɵ as M,F as O,d as f,B as g,f as s,w as P,m as r,j as d,L as y,D as b,x as w,aj as x,E as L,g as I,q as _,N as k,O as z}from"./index-CrYE53GN.js";import{FoldInputBaseComponent as F}from"./input-base.component-80AGANu-.js";import{r as q}from"./input-value-DCGlOvqF.js";import"./info.component-Dno97ySR.js";import"./popover.component-DOreD2eG.js";import"./popover-trigger.directive-B1eWn2qe.js";import"./label.component-Cspmlx-W.js";function B(p,o){if(p&1){const t=L();f(0,"button",4),g("click",function(){k(t);const l=_();return z(l.toggleReveal())}),I(1,"fold-icon",5),s()}if(p&2){const t=_();r("disabled",t.disabled()||t.readOnly()),b("aria-label",t.revealAria())("aria-pressed",t.revealed()),d(),r("name",t.revealed()?"eye-off":"eye")}}class u{value=c("");disabled=e(!1);touched=c(!1);errors=e([]);type=e("text");revealable=e(!1,{transform:i});revealLabel=e("Show password");hideLabel=e("Hide password");size=e("md");align=e("start");variant=e("default");label=e();required=e(!1,{transform:i});optional=e(!1,{transform:i});optionalLabel=e("optional");info=e();infoLabel=e("More information");hint=e();placeholder=e("");readOnly=e(!1);autofocus=e(!1);autocomplete=e(null);inputId=h(v).next("fold-input");errorMessage=a(()=>{if(!this.touched())return;const o=this.errors()[0];return o?o.message??o.kind:void 0});describedBy=a(()=>this.errorMessage()?`${this.inputId}-error`:this.hint()?`${this.inputId}-hint`:null);revealed=C(!1);showReveal=a(()=>this.revealable()&&this.type()==="password");effectiveType=a(()=>this.showReveal()&&this.revealed()?"text":this.type());revealAria=a(()=>this.revealed()?this.hideLabel():this.revealLabel());toggleReveal(){this.revealed.update(o=>!o)}onInputChange(o){this.value.set(q(o))}onBlur(){this.touched.set(!0)}static ɵfac=function(t){return new(t||u)};static ɵcmp=M({type:u,selectors:[["fold-input"]],hostVars:2,hostBindings:function(t,n){t&2&&x(n.size()+" "+n.align()+" "+n.variant())},inputs:{value:[1,"value"],disabled:[1,"disabled"],touched:[1,"touched"],errors:[1,"errors"],type:[1,"type"],revealable:[1,"revealable"],revealLabel:[1,"revealLabel"],hideLabel:[1,"hideLabel"],size:[1,"size"],align:[1,"align"],variant:[1,"variant"],label:[1,"label"],required:[1,"required"],optional:[1,"optional"],optionalLabel:[1,"optionalLabel"],info:[1,"info"],infoLabel:[1,"infoLabel"],hint:[1,"hint"],placeholder:[1,"placeholder"],readOnly:[1,"readOnly"],autofocus:[1,"autofocus"],autocomplete:[1,"autocomplete"]},outputs:{value:"valueChange",touched:"touchedChange"},decls:4,vars:22,consts:[[3,"label","for","required","optional","optionalLabel","info","infoLabel","hint","error"],[1,"in-field"],[3,"input","blur","id","value"],["type","button",1,"in-reveal",3,"disabled"],["type","button",1,"in-reveal",3,"click","disabled"],["size","sm","aria-hidden","true",3,"name"]],template:function(t,n){t&1&&(f(0,"fold-input-base",0)(1,"div",1)(2,"input",2),g("input",function(m){return n.onInputChange(m)})("blur",function(){return n.onBlur()}),s(),P(3,B,2,4,"button",3),s()()),t&2&&(r("label",n.label())("for",n.inputId)("required",n.required())("optional",n.optional())("optionalLabel",n.optionalLabel())("info",n.info())("infoLabel",n.infoLabel())("hint",n.hint())("error",n.errorMessage()),d(2),y("has-reveal",n.showReveal()),r("id",n.inputId)("value",n.value()),b("type",n.effectiveType())("placeholder",n.placeholder())("readonly",n.readOnly()||null)("disabled",n.disabled()||null)("required",n.required()||null)("aria-invalid",n.errorMessage()?!0:null)("aria-describedby",n.describedBy())("autocomplete",n.autocomplete()),d(),w(n.showReveal()?3:-1))},dependencies:[F,O],styles:[`@charset "UTF-8";





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
  font-size: var(--fold-text-md);
  padding: 0.4rem 0.65rem;
  border-radius: var(--fold-radius-sm);
}

.md[_nghost-%COMP%]   textarea[_ngcontent-%COMP%] {
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
}`]})}export{u as FoldInputComponent};
