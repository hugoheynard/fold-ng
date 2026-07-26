import{a4 as a,x as e,K as l,T as p,a5 as c,y as i,ɵ as g,d as f,C as b,f as _,m as s,j as h,P as m,ae as C}from"./index-Dx-EuELi.js";import{FoldInputBaseComponent as M}from"./input-base.component-Qi0d9XuF.js";import{r as O}from"./input-value-Co_u-z_8.js";import"./label.component-BR7borAk.js";class r{value=a("");disabled=e(!1);touched=a(!1);errors=e([]);type=e("text");size=e("md");align=e("start");variant=e("default");label=e();required=e(!1,{transform:l});optional=e(!1,{transform:l});optionalLabel=e("optional");hint=e();placeholder=e("");readOnly=e(!1);autofocus=e(!1);autocomplete=e(null);inputId=p(c).next("fold-input");errorMessage=i(()=>{if(!this.touched())return;const t=this.errors()[0];return t?t.message??t.kind:void 0});describedBy=i(()=>this.errorMessage()?`${this.inputId}-error`:this.hint()?`${this.inputId}-hint`:null);onInputChange(t){this.value.set(O(t))}onBlur(){this.touched.set(!0)}static ɵfac=function(o){return new(o||r)};static ɵcmp=g({type:r,selectors:[["fold-input"]],hostVars:2,hostBindings:function(o,n){o&2&&C(n.size()+" "+n.align()+" "+n.variant())},inputs:{value:[1,"value"],disabled:[1,"disabled"],touched:[1,"touched"],errors:[1,"errors"],type:[1,"type"],size:[1,"size"],align:[1,"align"],variant:[1,"variant"],label:[1,"label"],required:[1,"required"],optional:[1,"optional"],optionalLabel:[1,"optionalLabel"],hint:[1,"hint"],placeholder:[1,"placeholder"],readOnly:[1,"readOnly"],autofocus:[1,"autofocus"],autocomplete:[1,"autocomplete"]},outputs:{value:"valueChange",touched:"touchedChange"},decls:2,vars:17,consts:[[3,"label","for","required","optional","optionalLabel","hint","error"],[3,"input","blur","id","value"]],template:function(o,n){o&1&&(f(0,"fold-input-base",0)(1,"input",1),b("input",function(u){return n.onInputChange(u)})("blur",function(){return n.onBlur()}),_()()),o&2&&(s("label",n.label())("for",n.inputId)("required",n.required())("optional",n.optional())("optionalLabel",n.optionalLabel())("hint",n.hint())("error",n.errorMessage()),h(),s("id",n.inputId)("value",n.value()),m("type",n.type())("placeholder",n.placeholder())("readonly",n.readOnly()||null)("disabled",n.disabled()||null)("required",n.required()||null)("aria-invalid",n.errorMessage()?!0:null)("aria-describedby",n.describedBy())("autocomplete",n.autocomplete()))},dependencies:[M],styles:[`[_nghost-%COMP%] {
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
}`]})}export{r as FoldInputComponent};
