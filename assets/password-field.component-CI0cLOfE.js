import{ab as m,u as t,W as h,am as C,N as b,a7 as P,ɵ as F,F as k,X as L,d as r,h as x,r as f,f as s,Y as y,m as M,n as O,w as u,q as d,x as _,i as z,Z as T,j as i,o as j,e as g,H as q,k as A,l as H,g as w}from"./index-6ImbagPn.js";import{FoldInputComponent as I}from"./input.component-BD_20T0N.js";import"./input-base.component-DVfHAAmy.js";import"./label.component-CvaWDjy4.js";import"./input-value-Co_u-z_8.js";function c(n,o){return{label:n,test:a=>o.test(a)}}function S(){return[{label:"At least 8 characters",test:n=>n.length>=8},c("An uppercase letter",/[A-Z]/),c("A lowercase letter",/[a-z]/),c("A number",/\d/)]}const W=[[["","rules",""]]],R=["[rules]"],D=(n,o)=>o.label;function V(n,o){n&1&&w(0,"fold-icon",8)}function Z(n,o){if(n&1&&(r(0,"span",4),u(1,V,1,0,"fold-icon",8),s()),n&2){const a=d().$implicit;i(),_(a.met?1:-1)}}function B(n,o){n&1&&w(0,"span",5)}function E(n,o){if(n&1&&(r(0,"li",3),u(1,Z,2,1,"span",4)(2,B,1,0,"span",5),r(3,"span",6),g(4),s(),r(5,"span",7),g(6),s()()),n&2){const a=o.$implicit,e=d(3);q("is-met",a.met),i(),_(e.marker()==="check"?1:2),i(3),A(a.label),i(2),H("— ",a.met?e.metLabel():e.unmetLabel())}}function N(n,o){if(n&1&&(r(0,"ul",1),z(1,E,7,5,"li",2,D),s()),n&2){const a=d(2);T("aria-label",a.rulesLabel()),i(),j(a.checklist())}}function X(n,o){if(n&1&&u(0,N,3,1,"ul",1),n&2){const a=d();_(a.checklist().length?0:-1)}}class p{value=m("");disabled=t(!1);touched=m(!1);errors=t([]);label=t("Password");placeholder=t("");hint=t();required=t(!1,{transform:h});size=t("md");variant=t("default");autocomplete=t("new-password");revealable=t(!0,{transform:h});revealLabel=t("Show password");hideLabel=t("Hide password");rules=t(S());marker=t("dot");rulesLabel=t("Password requirements");metLabel=t("met");unmetLabel=t("not met");validChange=C();checklist=b(()=>this.rules().map(o=>({label:o.label,met:o.test(this.value())})));allValid=b(()=>this.checklist().every(o=>o.met));constructor(){P(()=>this.validChange.emit(this.allValid()))}static ɵfac=function(a){return new(a||p)};static ɵcmp=F({type:p,selectors:[["fold-password-field"]],inputs:{value:[1,"value"],disabled:[1,"disabled"],touched:[1,"touched"],errors:[1,"errors"],label:[1,"label"],placeholder:[1,"placeholder"],hint:[1,"hint"],required:[1,"required"],size:[1,"size"],variant:[1,"variant"],autocomplete:[1,"autocomplete"],revealable:[1,"revealable"],revealLabel:[1,"revealLabel"],hideLabel:[1,"hideLabel"],rules:[1,"rules"],marker:[1,"marker"],rulesLabel:[1,"rulesLabel"],metLabel:[1,"metLabel"],unmetLabel:[1,"unmetLabel"]},outputs:{value:"valueChange",touched:"touchedChange",validChange:"validChange"},exportAs:["foldPasswordField"],ngContentSelectors:R,decls:3,vars:14,consts:[["type","password",3,"valueChange","touchedChange","label","placeholder","hint","required","size","variant","disabled","revealable","revealLabel","hideLabel","autocomplete","errors","value","touched"],["aria-live","polite",1,"pw-rules"],[1,"pw-rule",3,"is-met"],[1,"pw-rule"],["aria-hidden","true",1,"pw-mark"],["aria-hidden","true",1,"pw-dot"],[1,"pw-rule-label"],[1,"pw-sr"],["name","check","size","sm"]],template:function(a,e){a&1&&(L(W),r(0,"fold-input",0),x("valueChange",function(l){return f(e.value,l)||(e.value=l),l})("touchedChange",function(l){return f(e.touched,l)||(e.touched=l),l}),s(),y(1,0,null,X,1,1)),a&2&&(M("label",e.label())("placeholder",e.placeholder())("hint",e.hint())("required",e.required())("size",e.size())("variant",e.variant())("disabled",e.disabled())("revealable",e.revealable())("revealLabel",e.revealLabel())("hideLabel",e.hideLabel())("autocomplete",e.autocomplete())("errors",e.errors()),O("value",e.value)("touched",e.touched))},dependencies:[I,k],styles:[`[_nghost-%COMP%] {
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

.pw-mark[_ngcontent-%COMP%] {
  flex: none;
  width: 0.85rem;
  height: 0.85rem;
  display: grid;
  place-items: center;
  color: var(--fold-color-primary);
}

.pw-rule[_ngcontent-%COMP%]:not(.is-met)   .pw-mark[_ngcontent-%COMP%] {
  border: 1.5px solid var(--fold-color-text-faded);
  border-radius: var(--fold-radius-round);
  box-sizing: border-box;
}

@media (forced-colors: active) {
  .pw-rule.is-met[_ngcontent-%COMP%]   .pw-dot[_ngcontent-%COMP%] {
    background: Highlight;
    border-color: Highlight;
  }
  .pw-mark[_ngcontent-%COMP%] {
    color: Highlight;
  }
}
.pw-sr[_ngcontent-%COMP%] {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  white-space: nowrap;
}`]})}export{p as FoldPasswordFieldComponent};
