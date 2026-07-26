import{a4 as c,x as t,K as p,az as v,y as m,a0 as g,ɵ as C,d as r,h as w,r as _,f as d,I as P,m as y,n as F,j as u,J as L,i as k,q as h,P as b,o as z,g as M,e as O,D as q,k as x}from"./index-pWDKkeGF.js";import{FoldInputComponent as A}from"./input.component-xh-D4PI4.js";import"./input-base.component-BbgOikUX.js";import"./label.component-D1qKDRUp.js";import"./input-value-Co_u-z_8.js";function s(n,l){return{label:n,test:a=>l.test(a)}}function T(){return[{label:"At least 8 characters",test:n=>n.length>=8},s("An uppercase letter",/[A-Z]/),s("A lowercase letter",/[a-z]/),s("A number",/\d/)]}const I=(n,l)=>l.label;function R(n,l){if(n&1&&(r(0,"li",3),M(1,"span",4),r(2,"span",5),O(3),d()()),n&2){const a=l.$implicit,e=h(2);q("is-met",a.met),b("aria-label",(a.met?e.metLabel():e.unmetLabel())+": "+a.label),u(3),x(a.label)}}function W(n,l){if(n&1&&(r(0,"ul",1),k(1,R,4,4,"li",2,I),d()),n&2){const a=h();b("aria-label",a.rulesLabel()),u(),z(a.checklist())}}class i{value=c("");disabled=t(!1);touched=c(!1);errors=t([]);label=t("Password");placeholder=t("");hint=t();required=t(!1,{transform:p});size=t("md");variant=t("default");autocomplete=t("new-password");revealable=t(!0,{transform:p});rules=t(T());rulesLabel=t("Password requirements");metLabel=t("met");unmetLabel=t("not met");validChange=v();checklist=m(()=>this.rules().map(l=>({label:l.label,met:l.test(this.value())})));allValid=m(()=>this.checklist().every(l=>l.met));constructor(){g(()=>this.validChange.emit(this.allValid()))}static ɵfac=function(a){return new(a||i)};static ɵcmp=C({type:i,selectors:[["fold-password-field"]],inputs:{value:[1,"value"],disabled:[1,"disabled"],touched:[1,"touched"],errors:[1,"errors"],label:[1,"label"],placeholder:[1,"placeholder"],hint:[1,"hint"],required:[1,"required"],size:[1,"size"],variant:[1,"variant"],autocomplete:[1,"autocomplete"],revealable:[1,"revealable"],rules:[1,"rules"],rulesLabel:[1,"rulesLabel"],metLabel:[1,"metLabel"],unmetLabel:[1,"unmetLabel"]},outputs:{value:"valueChange",touched:"touchedChange",validChange:"validChange"},decls:2,vars:13,consts:[["type","password",3,"valueChange","touchedChange","label","placeholder","hint","required","size","variant","disabled","revealable","autocomplete","errors","value","touched"],["aria-live","polite",1,"pw-rules"],[1,"pw-rule",3,"is-met"],[1,"pw-rule"],["aria-hidden","true",1,"pw-dot"],[1,"pw-rule-label"]],template:function(a,e){a&1&&(r(0,"fold-input",0),w("valueChange",function(o){return _(e.value,o)||(e.value=o),o})("touchedChange",function(o){return _(e.touched,o)||(e.touched=o),o}),d(),P(1,W,3,1,"ul",1)),a&2&&(y("label",e.label())("placeholder",e.placeholder())("hint",e.hint())("required",e.required())("size",e.size())("variant",e.variant())("disabled",e.disabled())("revealable",e.revealable())("autocomplete",e.autocomplete())("errors",e.errors()),F("value",e.value)("touched",e.touched),u(),L(e.checklist().length?1:-1))},dependencies:[A],styles:[`[_nghost-%COMP%] {
  display: block;
}

.pw-rules[_ngcontent-%COMP%] {
  list-style: none;
  margin: 0.55rem 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.pw-rule[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: var(--fold-text-sm);
  color: var(--fold-color-text-muted);
  transition: color var(--fold-motion-fast);
}

.pw-dot[_ngcontent-%COMP%] {
  flex: none;
  width: 0.7rem;
  height: 0.7rem;
  border-radius: var(--fold-radius-round);
  border: 1.5px solid var(--fold-color-text-faded);
  box-sizing: border-box;
  transition: background var(--fold-motion-fast), border-color var(--fold-motion-fast);
}

.pw-rule.is-met[_ngcontent-%COMP%] {
  color: var(--fold-color-text);
}
.pw-rule.is-met[_ngcontent-%COMP%]   .pw-dot[_ngcontent-%COMP%] {
  border-color: var(--fold-color-primary);
  background: var(--fold-color-primary);
}

@media (forced-colors: active) {
  .pw-rule.is-met[_ngcontent-%COMP%]   .pw-dot[_ngcontent-%COMP%] {
    background: Highlight;
    border-color: Highlight;
  }
}`]})}export{i as FoldPasswordFieldComponent};
