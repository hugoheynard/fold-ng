import{a4 as m,x as a,K as f,az as w,y as h,a0 as P,ɵ as F,F as k,L as x,d as r,h as y,r as b,f as s,N as L,m as M,n as O,I as _,q as d,J as p,i as z,P as g,j as i,o as T,e as j,D as q,k as A,g as C}from"./index-BOjI4pPJ.js";import{FoldInputComponent as I}from"./input.component-BvhCvhFB.js";import"./input-base.component-DJpf2qrV.js";import"./label.component-DRgv2FCZ.js";import"./input-value-Co_u-z_8.js";function c(e,t){return{label:e,test:n=>t.test(n)}}function D(){return[{label:"At least 8 characters",test:e=>e.length>=8},c("An uppercase letter",/[A-Z]/),c("A lowercase letter",/[a-z]/),c("A number",/\d/)]}const H=[[["","rules",""]]],R=["[rules]"],S=(e,t)=>t.label;function W(e,t){e&1&&C(0,"fold-icon",7)}function V(e,t){if(e&1&&(r(0,"span",4),_(1,W,1,0,"fold-icon",7),s()),e&2){const n=d().$implicit;i(),p(n.met?1:-1)}}function B(e,t){e&1&&C(0,"span",5)}function E(e,t){if(e&1&&(r(0,"li",3),_(1,V,2,1,"span",4)(2,B,1,0,"span",5),r(3,"span",6),j(4),s()()),e&2){const n=t.$implicit,o=d(3);q("is-met",n.met),g("aria-label",(n.met?o.metLabel():o.unmetLabel())+": "+n.label),i(),p(o.marker()==="check"?1:2),i(3),A(n.label)}}function J(e,t){if(e&1&&(r(0,"ul",1),z(1,E,5,5,"li",2,S),s()),e&2){const n=d(2);g("aria-label",n.rulesLabel()),i(),T(n.checklist())}}function K(e,t){if(e&1&&_(0,J,3,1,"ul",1),e&2){const n=d();p(n.checklist().length?0:-1)}}class u{value=m("");disabled=a(!1);touched=m(!1);errors=a([]);label=a("Password");placeholder=a("");hint=a();required=a(!1,{transform:f});size=a("md");variant=a("default");autocomplete=a("new-password");revealable=a(!0,{transform:f});rules=a(D());marker=a("dot");rulesLabel=a("Password requirements");metLabel=a("met");unmetLabel=a("not met");validChange=w();checklist=h(()=>this.rules().map(t=>({label:t.label,met:t.test(this.value())})));allValid=h(()=>this.checklist().every(t=>t.met));constructor(){P(()=>this.validChange.emit(this.allValid()))}static ɵfac=function(n){return new(n||u)};static ɵcmp=F({type:u,selectors:[["fold-password-field"]],inputs:{value:[1,"value"],disabled:[1,"disabled"],touched:[1,"touched"],errors:[1,"errors"],label:[1,"label"],placeholder:[1,"placeholder"],hint:[1,"hint"],required:[1,"required"],size:[1,"size"],variant:[1,"variant"],autocomplete:[1,"autocomplete"],revealable:[1,"revealable"],rules:[1,"rules"],marker:[1,"marker"],rulesLabel:[1,"rulesLabel"],metLabel:[1,"metLabel"],unmetLabel:[1,"unmetLabel"]},outputs:{value:"valueChange",touched:"touchedChange",validChange:"validChange"},exportAs:["foldPasswordField"],ngContentSelectors:R,decls:3,vars:12,consts:[["type","password",3,"valueChange","touchedChange","label","placeholder","hint","required","size","variant","disabled","revealable","autocomplete","errors","value","touched"],["aria-live","polite",1,"pw-rules"],[1,"pw-rule",3,"is-met"],[1,"pw-rule"],["aria-hidden","true",1,"pw-mark"],["aria-hidden","true",1,"pw-dot"],[1,"pw-rule-label"],["name","check","size","sm"]],template:function(n,o){n&1&&(x(H),r(0,"fold-input",0),y("valueChange",function(l){return b(o.value,l)||(o.value=l),l})("touchedChange",function(l){return b(o.touched,l)||(o.touched=l),l}),s(),L(1,0,null,K,1,1)),n&2&&(M("label",o.label())("placeholder",o.placeholder())("hint",o.hint())("required",o.required())("size",o.size())("variant",o.variant())("disabled",o.disabled())("revealable",o.revealable())("autocomplete",o.autocomplete())("errors",o.errors()),O("value",o.value)("touched",o.touched))},dependencies:[I,k],styles:[`[_nghost-%COMP%] {
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
}`]})}export{u as FoldPasswordFieldComponent};
