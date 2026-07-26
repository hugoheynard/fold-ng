import{a4 as c,x as l,K as p,az as g,y as _,a0 as v,ɵ as C,L as w,d as r,h as P,r as m,f as d,N as F,m as y,n as L,I as k,q as u,J as x,i as z,P as h,j as b,o as M,g as O,e as q,D as A,k as T}from"./index-CyC2HW3E.js";import{FoldInputComponent as j}from"./input.component-BxY4usny.js";import"./input-base.component-Cq3O2AhD.js";import"./label.component-4fvJd3s0.js";import"./input-value-Co_u-z_8.js";function s(o,a){return{label:o,test:t=>a.test(t)}}function D(){return[{label:"At least 8 characters",test:o=>o.length>=8},s("An uppercase letter",/[A-Z]/),s("A lowercase letter",/[a-z]/),s("A number",/\d/)]}const I=[[["","rules",""]]],R=["[rules]"],S=(o,a)=>a.label;function W(o,a){if(o&1&&(r(0,"li",3),O(1,"span",4),r(2,"span",5),q(3),d()()),o&2){const t=a.$implicit,e=u(3);A("is-met",t.met),h("aria-label",(t.met?e.metLabel():e.unmetLabel())+": "+t.label),b(3),T(t.label)}}function H(o,a){if(o&1&&(r(0,"ul",1),z(1,W,4,4,"li",2,S),d()),o&2){const t=u(2);h("aria-label",t.rulesLabel()),b(),M(t.checklist())}}function V(o,a){if(o&1&&k(0,H,3,1,"ul",1),o&2){const t=u();x(t.checklist().length?0:-1)}}class i{value=c("");disabled=l(!1);touched=c(!1);errors=l([]);label=l("Password");placeholder=l("");hint=l();required=l(!1,{transform:p});size=l("md");variant=l("default");autocomplete=l("new-password");revealable=l(!0,{transform:p});rules=l(D());rulesLabel=l("Password requirements");metLabel=l("met");unmetLabel=l("not met");validChange=g();checklist=_(()=>this.rules().map(a=>({label:a.label,met:a.test(this.value())})));allValid=_(()=>this.checklist().every(a=>a.met));constructor(){v(()=>this.validChange.emit(this.allValid()))}static ɵfac=function(t){return new(t||i)};static ɵcmp=C({type:i,selectors:[["fold-password-field"]],inputs:{value:[1,"value"],disabled:[1,"disabled"],touched:[1,"touched"],errors:[1,"errors"],label:[1,"label"],placeholder:[1,"placeholder"],hint:[1,"hint"],required:[1,"required"],size:[1,"size"],variant:[1,"variant"],autocomplete:[1,"autocomplete"],revealable:[1,"revealable"],rules:[1,"rules"],rulesLabel:[1,"rulesLabel"],metLabel:[1,"metLabel"],unmetLabel:[1,"unmetLabel"]},outputs:{value:"valueChange",touched:"touchedChange",validChange:"validChange"},exportAs:["foldPasswordField"],ngContentSelectors:R,decls:3,vars:12,consts:[["type","password",3,"valueChange","touchedChange","label","placeholder","hint","required","size","variant","disabled","revealable","autocomplete","errors","value","touched"],["aria-live","polite",1,"pw-rules"],[1,"pw-rule",3,"is-met"],[1,"pw-rule"],["aria-hidden","true",1,"pw-dot"],[1,"pw-rule-label"]],template:function(t,e){t&1&&(w(I),r(0,"fold-input",0),P("valueChange",function(n){return m(e.value,n)||(e.value=n),n})("touchedChange",function(n){return m(e.touched,n)||(e.touched=n),n}),d(),F(1,0,null,V,1,1)),t&2&&(y("label",e.label())("placeholder",e.placeholder())("hint",e.hint())("required",e.required())("size",e.size())("variant",e.variant())("disabled",e.disabled())("revealable",e.revealable())("autocomplete",e.autocomplete())("errors",e.errors()),L("value",e.value)("touched",e.touched))},dependencies:[j],styles:[`[_nghost-%COMP%] {
  display: block;
}

.pw-rules[_ngcontent-%COMP%] {
  list-style: none;
  margin: 0.5rem 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.pw-rule[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-size: var(--fold-text-xs);
  color: var(--fold-color-text-muted);
  transition: color var(--fold-motion-fast);
}

.pw-dot[_ngcontent-%COMP%] {
  flex: none;
  width: 0.5rem;
  height: 0.5rem;
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
