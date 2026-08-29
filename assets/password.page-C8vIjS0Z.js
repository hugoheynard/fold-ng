import{s as u,A as k,ɵ as y,c as x,d as o,e,f as a,g as T,B as c,w as O,j as s,m as f,U as F,L as p,k as v,x as M,E as b,h,i as R,a3 as j,q as _,n as P,o as z,N as m,r as C,O as g}from"./index-CvaVehfM.js";import{K as N}from"./kind-badge.component-C3kjagLS.js";import{C as A}from"./composed-of.component-Ccc4jz-6.js";import{D as B}from"./playground.component-DwyVpDQr.js";import{FoldPageSectionComponent as E}from"./page-section.component-YOZ12km3.js";import{FoldPasswordFieldComponent as S}from"./password-field.component-DsrDGVgf.js";import"./button.component-wK6lIsIa.js";import"./element-title.component-D_JDeoM5.js";import"./slider.component-CDBAcHp5.js";import"./input-value-DCGlOvqF.js";import"./input.component-DCkBdGJS.js";import"./input-base.component-CQVbJDYI.js";import"./info.component-BLq1dAUq.js";import"./common-labels-BlRTTk3V.js";import"./popover.component-CU7aRmmu.js";import"./auto-update-_srfpL1Q.js";import"./popover-trigger.directive-BNHRqLEx.js";import"./label.component-Bsm4VPGn.js";const V=()=>["form","icons"],I=(d,t)=>t.label;function L(d,t){if(d&1&&(o(0,"span",20),e(1),a()),d&2){const n=t.$implicit;p("is-met",n.met),s(),v(n.label)}}function W(d,t){if(d&1){const n=b();o(0,"fold-password-field",17,0),h("valueChange",function(l){m(n);const i=_();return C(i.value,l)||(i.value=l),g(l)}),c("validChange",function(l){m(n);const i=_();return g(i.valid.set(l))}),o(2,"div",18),R(3,L,2,3,"span",19,I),a()()}if(d&2){const n=j(1),r=_();f("revealable",r.revealable()),P("value",r.value),s(3),z(n.checklist())}}function q(d,t){if(d&1){const n=b();o(0,"fold-password-field",21),h("valueChange",function(l){m(n);const i=_();return C(i.value,l)||(i.value=l),g(l)}),c("validChange",function(l){m(n);const i=_();return g(i.valid.set(l))}),a()}if(d&2){const n=_();f("marker",n.design()==="ticks"?"check":"dot")("revealable",n.revealable()),P("value",n.value)}}class w{value=u("");valid=u(!1);revealable=u(!0);design=u("default");rulesExample=["import { foldRegexRule, type FoldPasswordRule } from 'fold-ng';","","rules: FoldPasswordRule[] = [","  { label: 'At least 12 characters', test: (v) => v.length >= 12 },","  foldRegexRule('A symbol', /[^A-Za-z0-9]/),","  // zod (no dependency added by fold-ng):","  { label: 'Valid', test: (v) => schema.safeParse(v).success },","];"].join(`
`);code=k(()=>{const t=this.revealable()?[]:['  [revealable]="false"'];return this.design()!=="custom"?["<fold-password-field",'  label="New password"',...this.design()==="ticks"?['  marker="check"']:[],...t,'  [(value)]="password"','  (validChange)="ok.set($event)"',"/>"].join(`
`):['<fold-password-field #pw="foldPasswordField"','  label="New password"',...t,'  [(value)]="password"',">",'  <div rules class="chips">',"    @for (rule of pw.checklist(); track rule.label) {",'      <span [class.is-met]="rule.met">{{ rule.label }}</span>',"    }","  </div>","</fold-password-field>"].join(`
`)});static ɵfac=function(n){return new(n||w)};static ɵcmp=y({type:w,selectors:[["gal-password-page"]],decls:62,vars:17,consts:[["pw","foldPasswordField"],["title","password"],["description",""],["titleBadge","","kind","component"],[3,"ids"],[3,"code","responsive"],["params",""],[1,"gal-field"],[1,"gal-tag"],[1,"pw-seg"],["type","button",3,"click"],[1,"gal-readout"],["label","New password","placeholder","Create a password…",3,"revealable","value"],["label","New password","placeholder","Create a password…",3,"marker","revealable","value"],["title","Injecting rules","icon","code"],[1,"pw-prose"],[1,"pw-code"],["label","New password","placeholder","Create a password…",3,"valueChange","validChange","revealable","value"],["rules","",1,"pw-chips"],[1,"pw-chip",3,"is-met"],[1,"pw-chip"],["label","New password","placeholder","Create a password…",3,"valueChange","validChange","marker","revealable","value"]],template:function(n,r){n&1&&(o(0,"fold-page-layout",1)(1,"p",2)(2,"code"),e(3,"fold-password-field"),a(),e(4," — a password input with a "),o(5,"strong"),e(6,"live requirements checklist"),a(),e(7,". It composes "),o(8,"code"),e(9,"fold-input[type=password]"),a(),e(10," with the reveal (eye) toggle, and renders a dot per rule that turns on as the value satisfies it. Rules are "),o(11,"strong"),e(12,"injected"),a(),e(13," (regex, a "),o(14,"code"),e(15,"zod"),a(),o(16,"code"),e(17,"safeParse"),a(),e(18,", anything), so the policy is yours; "),o(19,"code"),e(20,"validChange"),a(),e(21," emits when they all pass. Signal-Forms-native. "),a(),T(22,"gal-kind-badge",3)(23,"gal-composed-of",4),o(24,"dev-playground",5)(25,"div",6)(26,"div",7)(27,"span",8),e(28,"revealable"),a(),o(29,"div",9)(30,"button",10),c("click",function(){return r.revealable.set(!0)}),e(31," on "),a(),o(32,"button",10),c("click",function(){return r.revealable.set(!1)}),e(33," off "),a()()(),o(34,"div",7)(35,"span",8),e(36,"checklist"),a(),o(37,"div",9)(38,"button",10),c("click",function(){return r.design.set("default")}),e(39," dots "),a(),o(40,"button",10),c("click",function(){return r.design.set("ticks")}),e(41," ticks "),a(),o(42,"button",10),c("click",function(){return r.design.set("custom")}),e(43," custom "),a()()(),o(44,"p",11),e(45,"valid = "),o(46,"code"),e(47),a()()(),O(48,W,5,2,"fold-password-field",12)(49,q,1,3,"fold-password-field",13),a(),o(50,"fold-page-section",14)(51,"p",15),e(52," A rule is just a label + a predicate ("),o(53,"code"),e(54,"FoldPasswordRule"),a(),e(55,"), so any validation style drops in. The default policy is 8+ characters, upper, lower and a digit — override "),o(56,"code"),e(57,"[rules]"),a(),e(58," for your own. "),a(),o(59,"pre",16)(60,"code"),e(61),a()()()()),n&2&&(s(23),f("ids",F(16,V)),s(),f("code",r.code())("responsive",!1),s(6),p("is-on",r.revealable()),s(2),p("is-on",!r.revealable()),s(6),p("is-on",r.design()==="default"),s(2),p("is-on",r.design()==="ticks"),s(2),p("is-on",r.design()==="custom"),s(5),v(r.valid()),s(),M(r.design()==="custom"?48:49),s(13),v(r.rulesExample))},dependencies:[N,A,B,x,E,S],styles:[`.gal-field[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin-bottom: 0.9rem;
}

.pw-seg[_ngcontent-%COMP%] {
  display: inline-flex;
  padding: 2px;
  border: 1px solid var(--fold-color-border-subtle);
  border-radius: var(--fold-radius-sm);
  background: var(--fold-color-surface-sunken);
}
.pw-seg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  all: unset;
  padding: 0.3rem 0.7rem;
  border-radius: var(--fold-radius-xs);
  font-size: var(--fold-text-sm);
  color: var(--fold-color-text-muted);
  cursor: pointer;
}
.pw-seg[_ngcontent-%COMP%]   button.is-on[_ngcontent-%COMP%] {
  background: var(--fold-color-surface-card);
  color: var(--fold-color-text);
  box-shadow: var(--fold-shadow-sm);
}

.gal-readout[_ngcontent-%COMP%] {
  font-size: var(--fold-text-sm);
  color: var(--fold-color-text-secondary);
}

.pw-prose[_ngcontent-%COMP%] {
  margin: 0 0 1rem;
  max-width: 68ch;
  color: var(--fold-color-text-secondary);
  line-height: var(--fold-leading-relaxed);
}

.pw-code[_ngcontent-%COMP%] {
  margin: 0;
  padding: 0.9rem 1rem;
  overflow-x: auto;
  border-radius: var(--fold-radius-md);
  background: var(--fold-color-surface-sunken);
  font-size: var(--fold-text-sm);
  line-height: var(--fold-leading-relaxed);
}

.pw-chips[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.6rem;
}

.pw-chip[_ngcontent-%COMP%] {
  padding: 0.15rem 0.55rem;
  border-radius: var(--fold-radius-pill);
  border: 1px solid var(--fold-color-border-subtle);
  font-size: var(--fold-text-xs);
  color: var(--fold-color-text-muted);
  transition: color var(--fold-motion-fast), background var(--fold-motion-fast), border-color var(--fold-motion-fast);
}
.pw-chip.is-met[_ngcontent-%COMP%] {
  background: var(--fold-color-primary-surface);
  border-color: var(--fold-color-primary-border);
  color: var(--fold-color-primary-text);
}`]})}export{w as default};
