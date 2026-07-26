import{a4 as c,x as n,K as i,T as m,a5 as v,y as a,s as C,ɵ as M,F as O,d as b,C as f,f as s,I as P,m as r,j as d,D as y,P as g,J as w,ae as I,B as L,g as k,q as _,E as F,H as z}from"./index-J6TcvwPv.js";import{FoldInputBaseComponent as q}from"./input-base.component-CKbyDAb9.js";import{r as x}from"./input-value-Co_u-z_8.js";import"./label.component-CqJ8Bq4a.js";function B(p,o){if(p&1){const t=L();b(0,"button",4),f("click",function(){F(t);const l=_();return z(l.toggleReveal())}),k(1,"fold-icon",5),s()}if(p&2){const t=_();r("disabled",t.disabled()||t.readOnly()),g("aria-label",t.revealAria())("aria-pressed",t.revealed()),d(),r("name",t.revealed()?"eye-off":"eye")}}class u{value=c("");disabled=n(!1);touched=c(!1);errors=n([]);type=n("text");revealable=n(!1,{transform:i});revealLabel=n("Show password");hideLabel=n("Hide password");size=n("md");align=n("start");variant=n("default");label=n();required=n(!1,{transform:i});optional=n(!1,{transform:i});optionalLabel=n("optional");hint=n();placeholder=n("");readOnly=n(!1);autofocus=n(!1);autocomplete=n(null);inputId=m(v).next("fold-input");errorMessage=a(()=>{if(!this.touched())return;const o=this.errors()[0];return o?o.message??o.kind:void 0});describedBy=a(()=>this.errorMessage()?`${this.inputId}-error`:this.hint()?`${this.inputId}-hint`:null);revealed=C(!1);showReveal=a(()=>this.revealable()&&this.type()==="password");effectiveType=a(()=>this.showReveal()&&this.revealed()?"text":this.type());revealAria=a(()=>this.revealed()?this.hideLabel():this.revealLabel());toggleReveal(){this.revealed.update(o=>!o)}onInputChange(o){this.value.set(x(o))}onBlur(){this.touched.set(!0)}static ɵfac=function(t){return new(t||u)};static ɵcmp=M({type:u,selectors:[["fold-input"]],hostVars:2,hostBindings:function(t,e){t&2&&I(e.size()+" "+e.align()+" "+e.variant())},inputs:{value:[1,"value"],disabled:[1,"disabled"],touched:[1,"touched"],errors:[1,"errors"],type:[1,"type"],revealable:[1,"revealable"],revealLabel:[1,"revealLabel"],hideLabel:[1,"hideLabel"],size:[1,"size"],align:[1,"align"],variant:[1,"variant"],label:[1,"label"],required:[1,"required"],optional:[1,"optional"],optionalLabel:[1,"optionalLabel"],hint:[1,"hint"],placeholder:[1,"placeholder"],readOnly:[1,"readOnly"],autofocus:[1,"autofocus"],autocomplete:[1,"autocomplete"]},outputs:{value:"valueChange",touched:"touchedChange"},decls:4,vars:20,consts:[[3,"label","for","required","optional","optionalLabel","hint","error"],[1,"in-field"],[3,"input","blur","id","value"],["type","button",1,"in-reveal",3,"disabled"],["type","button",1,"in-reveal",3,"click","disabled"],["size","sm","aria-hidden","true",3,"name"]],template:function(t,e){t&1&&(b(0,"fold-input-base",0)(1,"div",1)(2,"input",2),f("input",function(h){return e.onInputChange(h)})("blur",function(){return e.onBlur()}),s(),P(3,B,2,4,"button",3),s()()),t&2&&(r("label",e.label())("for",e.inputId)("required",e.required())("optional",e.optional())("optionalLabel",e.optionalLabel())("hint",e.hint())("error",e.errorMessage()),d(2),y("has-reveal",e.showReveal()),r("id",e.inputId)("value",e.value()),g("type",e.effectiveType())("placeholder",e.placeholder())("readonly",e.readOnly()||null)("disabled",e.disabled()||null)("required",e.required()||null)("aria-invalid",e.errorMessage()?!0:null)("aria-describedby",e.describedBy())("autocomplete",e.autocomplete()),d(),w(e.showReveal()?3:-1))},dependencies:[q,O],styles:[`


[_nghost-%COMP%] {
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
.in-reveal[_ngcontent-%COMP%]:disabled {
  cursor: not-allowed;
  opacity: 0.4;
}`]})}export{u as FoldInputComponent};
