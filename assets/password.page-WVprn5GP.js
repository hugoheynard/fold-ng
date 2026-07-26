import{s as u,y,ɵ as x,c as k,d as a,e,f as o,g as T,C as c,I as F,j as s,m as f,v as O,D as _,k as v,J as M,B as b,h,q as p,n as P,i as R,Q as j,o as z,E as m,r as C,H as g}from"./index-J6TcvwPv.js";import{K as A}from"./kind-badge.component-Dmu_OoZM.js";import{C as B}from"./composed-of.component-iq7lFPRs.js";import{D as E}from"./playground.component-DXiwgUKg.js";import{FoldPageSectionComponent as I}from"./page-section.component-BA5BbQIl.js";import{FoldPasswordFieldComponent as N}from"./password-field.component-BjAz97pH.js";import"./button.component-De-Sjj54.js";import"./spinner.component-B3J8RdiO.js";import"./tokens.catalog-DF_6rd51.js";import"./element-title.component-C63REkzh.js";import"./slider.component-BUDlOiRm.js";import"./input-value-Co_u-z_8.js";import"./input.component-BQO7dI4v.js";import"./input-base.component-CKbyDAb9.js";import"./label.component-CqJ8Bq4a.js";const S=()=>["form","icons"],V=(d,t)=>t.label;function D(d,t){if(d&1){const r=b();a(0,"fold-password-field",16),h("valueChange",function(l){m(r);const i=p();return C(i.value,l)||(i.value=l),g(l)}),c("validChange",function(l){m(r);const i=p();return g(i.valid.set(l))}),o()}if(d&2){const r=p();f("revealable",r.revealable()),P("value",r.value)}}function W(d,t){if(d&1&&(a(0,"span",19),e(1),o()),d&2){const r=t.$implicit;_("is-met",r.met),s(),v(r.label)}}function q(d,t){if(d&1){const r=b();a(0,"fold-password-field",16,0),h("valueChange",function(l){m(r);const i=p();return C(i.value,l)||(i.value=l),g(l)}),c("validChange",function(l){m(r);const i=p();return g(i.valid.set(l))}),a(2,"div",17),R(3,W,2,3,"span",18,V),o()()}if(d&2){const r=j(1),n=p();f("revealable",n.revealable()),P("value",n.value),s(3),z(r.checklist())}}class w{value=u("");valid=u(!1);revealable=u(!0);design=u("default");rulesExample=["import { foldRegexRule, type FoldPasswordRule } from 'fold-ng';","","rules: FoldPasswordRule[] = [","  { label: 'At least 12 characters', test: (v) => v.length >= 12 },","  foldRegexRule('A symbol', /[^A-Za-z0-9]/),","  // zod (no dependency added by fold-ng):","  { label: 'Valid', test: (v) => schema.safeParse(v).success },","];"].join(`
`);code=y(()=>{const t=this.revealable()?[]:['  [revealable]="false"'];return this.design()==="default"?["<fold-password-field",'  label="New password"',...t,'  [(value)]="password"','  (validChange)="ok.set($event)"',"/>"].join(`
`):['<fold-password-field #pw="foldPasswordField"','  label="New password"',...t,'  [(value)]="password"',">",'  <div rules class="chips">',"    @for (rule of pw.checklist(); track rule.label) {",'      <span [class.is-met]="rule.met">{{ rule.label }}</span>',"    }","  </div>","</fold-password-field>"].join(`
`)});static ɵfac=function(r){return new(r||w)};static ɵcmp=x({type:w,selectors:[["gal-password-page"]],decls:60,vars:15,consts:[["pw","foldPasswordField"],["title","password"],["description",""],["titleBadge","","kind","component"],[3,"ids"],[3,"code","responsive"],["params",""],[1,"gal-field"],[1,"gal-tag"],[1,"pw-seg"],["type","button",3,"click"],[1,"gal-readout"],["label","New password","placeholder","Create a password…",3,"revealable","value"],["title","Injecting rules","icon","code"],[1,"pw-prose"],[1,"pw-code"],["label","New password","placeholder","Create a password…",3,"valueChange","validChange","revealable","value"],["rules","",1,"pw-chips"],[1,"pw-chip",3,"is-met"],[1,"pw-chip"]],template:function(r,n){r&1&&(a(0,"fold-page-layout",1)(1,"p",2)(2,"code"),e(3,"fold-password-field"),o(),e(4," — a password input with a "),a(5,"strong"),e(6,"live requirements checklist"),o(),e(7,". It composes "),a(8,"code"),e(9,"fold-input[type=password]"),o(),e(10," with the reveal (eye) toggle, and renders a dot per rule that turns on as the value satisfies it. Rules are "),a(11,"strong"),e(12,"injected"),o(),e(13," (regex, a "),a(14,"code"),e(15,"zod"),o(),a(16,"code"),e(17,"safeParse"),o(),e(18,", anything), so the policy is yours; "),a(19,"code"),e(20,"validChange"),o(),e(21," emits when they all pass. Signal-Forms-native. "),o(),T(22,"gal-kind-badge",3)(23,"gal-composed-of",4),a(24,"dev-playground",5)(25,"div",6)(26,"div",7)(27,"span",8),e(28,"revealable"),o(),a(29,"div",9)(30,"button",10),c("click",function(){return n.revealable.set(!0)}),e(31," on "),o(),a(32,"button",10),c("click",function(){return n.revealable.set(!1)}),e(33," off "),o()()(),a(34,"div",7)(35,"span",8),e(36,"checklist"),o(),a(37,"div",9)(38,"button",10),c("click",function(){return n.design.set("default")}),e(39," default "),o(),a(40,"button",10),c("click",function(){return n.design.set("custom")}),e(41," custom "),o()()(),a(42,"p",11),e(43,"valid = "),a(44,"code"),e(45),o()()(),F(46,D,1,2,"fold-password-field",12)(47,q,5,2,"fold-password-field",12),o(),a(48,"fold-page-section",13)(49,"p",14),e(50," A rule is just a label + a predicate ("),a(51,"code"),e(52,"FoldPasswordRule"),o(),e(53,"), so any validation style drops in. The default policy is 8+ characters, upper, lower and a digit — override "),a(54,"code"),e(55,"[rules]"),o(),e(56," for your own. "),o(),a(57,"pre",15)(58,"code"),e(59),o()()()()),r&2&&(s(23),f("ids",O(14,S)),s(),f("code",n.code())("responsive",!1),s(6),_("is-on",n.revealable()),s(2),_("is-on",!n.revealable()),s(6),_("is-on",n.design()==="default"),s(2),_("is-on",n.design()==="custom"),s(5),v(n.valid()),s(),M(n.design()==="default"?46:47),s(13),v(n.rulesExample))},dependencies:[A,B,E,k,I,N],styles:[`.gal-field[_ngcontent-%COMP%] {
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
  line-height: 1.6;
}

.pw-code[_ngcontent-%COMP%] {
  margin: 0;
  padding: 0.9rem 1rem;
  overflow-x: auto;
  border-radius: var(--fold-radius-md);
  background: var(--fold-color-surface-sunken);
  font-size: var(--fold-text-sm);
  line-height: 1.6;
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
