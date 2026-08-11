import{ag as a,u as e,a0 as i,X as p,ah as c,A as l,ɵ as g,d as f,B as m,f as _,m as s,j as b,D as C,aj as h}from"./index-CrYE53GN.js";import{FoldInputBaseComponent as M}from"./input-base.component-80AGANu-.js";import{r as O}from"./input-value-DCGlOvqF.js";import"./info.component-Dno97ySR.js";import"./popover.component-DOreD2eG.js";import"./popover-trigger.directive-B1eWn2qe.js";import"./label.component-Cspmlx-W.js";class r{value=a("");disabled=e(!1);touched=a(!1);errors=e([]);type=e("date");min=e(void 0);max=e(void 0);step=e(void 0);size=e("md");variant=e("default");label=e();required=e(!1,{transform:i});optional=e(!1,{transform:i});optionalLabel=e("optional");info=e();infoLabel=e("More information");hint=e();readOnly=e(!1);inputId=p(c).next("fold-date");errorMessage=l(()=>{if(!this.touched())return;const t=this.errors()[0];return t?t.message??t.kind:void 0});describedBy=l(()=>this.errorMessage()?`${this.inputId}-error`:this.hint()?`${this.inputId}-hint`:null);onInputChange(t){this.value.set(O(t))}onBlur(){this.touched.set(!0)}static ɵfac=function(o){return new(o||r)};static ɵcmp=g({type:r,selectors:[["fold-date"]],hostVars:2,hostBindings:function(o,n){o&2&&h(n.size()+" "+n.variant())},inputs:{value:[1,"value"],disabled:[1,"disabled"],touched:[1,"touched"],errors:[1,"errors"],type:[1,"type"],min:[1,"min"],max:[1,"max"],step:[1,"step"],size:[1,"size"],variant:[1,"variant"],label:[1,"label"],required:[1,"required"],optional:[1,"optional"],optionalLabel:[1,"optionalLabel"],info:[1,"info"],infoLabel:[1,"infoLabel"],hint:[1,"hint"],readOnly:[1,"readOnly"]},outputs:{value:"valueChange",touched:"touchedChange"},decls:2,vars:20,consts:[[3,"label","for","required","optional","optionalLabel","info","infoLabel","hint","error"],[1,"date",3,"input","blur","id","value"]],template:function(o,n){o&1&&(f(0,"fold-input-base",0)(1,"input",1),m("input",function(u){return n.onInputChange(u)})("blur",function(){return n.onBlur()}),_()()),o&2&&(s("label",n.label())("for",n.inputId)("required",n.required())("optional",n.optional())("optionalLabel",n.optionalLabel())("info",n.info())("infoLabel",n.infoLabel())("hint",n.hint())("error",n.errorMessage()),b(),s("id",n.inputId)("value",n.value()),C("type",n.type())("min",n.min())("max",n.max())("step",n.step())("readonly",n.readOnly()||null)("disabled",n.disabled()||null)("required",n.required()||null)("aria-invalid",n.errorMessage()?!0:null)("aria-describedby",n.describedBy()))},dependencies:[M],styles:[`@charset "UTF-8";





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

.date[_ngcontent-%COMP%] {
  color-scheme: light dark;
  cursor: text;
}
.date[_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {
  cursor: pointer;
  opacity: 0.65;
  transition: opacity var(--fold-motion-fast);
}
.date[_ngcontent-%COMP%]::-webkit-calendar-picker-indicator:hover {
  opacity: 1;
}`]})}export{r as FoldDateComponent};
