import{t,u as l,ɵ as C,P as M,e as s,L as b,Q as O,S as c,j as a,l as f,M as m,z as _,v as q,w as L,g as I,m as g,d as P,f as v,X as y,U as w,a9 as F,B as x,G as z,as as B}from"./index-C0RnAu35.js";import{r as k}from"./input-value-Co_u-z_8.js";function T(r,o){r&1&&(M(0,"span",0),s(1,"*"),O())}function S(r,o){if(r&1&&(M(0,"span",1),s(1),O()),r&2){const e=_();a(),f("(",e.optionalLabel(),")")}}class p{text=t.required();for=t();required=t(!1,{transform:l});optional=t(!1,{transform:l});optionalLabel=t("optional");static ɵfac=function(e){return new(e||p)};static ɵcmp=C({type:p,selectors:[["fold-label"]],inputs:{text:[1,"text"],for:[1,"for"],required:[1,"required"],optional:[1,"optional"],optionalLabel:[1,"optionalLabel"]},decls:4,vars:3,consts:[["aria-hidden","true",1,"req"],[1,"opt"]],template:function(e,n){e&1&&(M(0,"label"),s(1),b(2,T,2,0,"span",0)(3,S,2,1,"span",1),O()),e&2&&(c("for",n.for()),a(),f("",n.text()," "),a(),m(n.required()?2:n.optional()?3:-1))},styles:[`[_nghost-%COMP%] {
  display: block;
}

label[_ngcontent-%COMP%] {
  font-size: var(--fold-text-xs);
  font-weight: 600;
  color: var(--fold-color-text-secondary);
}

.req[_ngcontent-%COMP%] {
  color: var(--fold-color-alert-text);
  margin-left: 2px;
}

.opt[_ngcontent-%COMP%] {
  margin-left: 4px;
  font-weight: 500;
  color: var(--fold-color-text-faded);
}`]})}const j=["*"];function E(r,o){if(r&1&&I(0,"fold-label",0),r&2){const e=_();g("text",o)("for",e.for())("required",e.required())("optional",e.optional())("optionalLabel",e.optionalLabel())}}function V(r,o){if(r&1&&(P(0,"p",1),s(1),v()),r&2){const e=_();c("id",e.for()?e.for()+"-error":null),a(),f(" ",o," ")}}function $(r,o){if(r&1&&(P(0,"p",2),s(1),v()),r&2){const e=_();c("id",e.for()?e.for()+"-hint":null),a(),f(" ",o," ")}}class u{label=t();for=t();required=t(!1,{transform:l});optional=t(!1,{transform:l});optionalLabel=t("optional");hint=t();error=t();static ɵfac=function(e){return new(e||u)};static ɵcmp=C({type:u,selectors:[["fold-input-base"]],inputs:{label:[1,"label"],for:[1,"for"],required:[1,"required"],optional:[1,"optional"],optionalLabel:[1,"optionalLabel"],hint:[1,"hint"],error:[1,"error"]},ngContentSelectors:j,decls:4,vars:2,consts:[[3,"text","for","required","optional","optionalLabel"],["role","alert",1,"ib-msg","ib-error"],[1,"ib-msg","ib-hint"]],template:function(e,n){if(e&1&&(q(),b(0,E,1,5,"fold-label",0),L(1),b(2,V,2,2,"p",1)(3,$,2,2,"p",2)),e&2){let d,i;m((d=n.label())?0:-1,d),a(2),m((i=n.error())?2:(i=n.hint())?3:-1,i)}},dependencies:[p],styles:[`[_nghost-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 0;
}

.ib-msg[_ngcontent-%COMP%] {
  margin: 0;
  font-size: var(--fold-text-xs);
}

.ib-hint[_ngcontent-%COMP%] {
  color: var(--fold-color-text-muted);
}

.ib-error[_ngcontent-%COMP%] {
  color: var(--fold-color-alert-text);
}`]})}class h{value=y("");disabled=t(!1);touched=y(!1);errors=t([]);type=t("text");size=t("md");align=t("start");variant=t("default");label=t();required=t(!1,{transform:l});optional=t(!1,{transform:l});optionalLabel=t("optional");hint=t();placeholder=t("");readOnly=t(!1);autofocus=t(!1);autocomplete=t(null);inputId=w(F).next("fold-input");errorMessage=x(()=>{if(!this.touched())return;const o=this.errors()[0];return o?o.message??o.kind:void 0});describedBy=x(()=>this.errorMessage()?`${this.inputId}-error`:this.hint()?`${this.inputId}-hint`:null);onInputChange(o){this.value.set(k(o))}onBlur(){this.touched.set(!0)}static ɵfac=function(e){return new(e||h)};static ɵcmp=C({type:h,selectors:[["fold-input"]],hostVars:2,hostBindings:function(e,n){e&2&&B(n.size()+" "+n.align()+" "+n.variant())},inputs:{value:[1,"value"],disabled:[1,"disabled"],touched:[1,"touched"],errors:[1,"errors"],type:[1,"type"],size:[1,"size"],align:[1,"align"],variant:[1,"variant"],label:[1,"label"],required:[1,"required"],optional:[1,"optional"],optionalLabel:[1,"optionalLabel"],hint:[1,"hint"],placeholder:[1,"placeholder"],readOnly:[1,"readOnly"],autofocus:[1,"autofocus"],autocomplete:[1,"autocomplete"]},outputs:{value:"valueChange",touched:"touchedChange"},decls:2,vars:17,consts:[[3,"label","for","required","optional","optionalLabel","hint","error"],[3,"input","blur","id","value"]],template:function(e,n){e&1&&(P(0,"fold-input-base",0)(1,"input",1),z("input",function(i){return n.onInputChange(i)})("blur",function(){return n.onBlur()}),v()()),e&2&&(g("label",n.label())("for",n.inputId)("required",n.required())("optional",n.optional())("optionalLabel",n.optionalLabel())("hint",n.hint())("error",n.errorMessage()),a(),g("id",n.inputId)("value",n.value()),c("type",n.type())("placeholder",n.placeholder())("readonly",n.readOnly()||null)("disabled",n.disabled()||null)("required",n.required()||null)("aria-invalid",n.errorMessage()?!0:null)("aria-describedby",n.describedBy())("autocomplete",n.autocomplete()))},dependencies:[u],styles:[`[_nghost-%COMP%] {
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
}`]})}export{h as F,u as a};
