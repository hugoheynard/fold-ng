import{s as p,y,ɵ as C,c as k,B as x,d as o,e,f as a,g as F,C as f,h as v,i as O,Q as M,j as n,m as u,v as T,D as g,k as m,n as w,o as R,E as h,r as b,H as P}from"./index-CyC2HW3E.js";import{K as j}from"./kind-badge.component-BjeAtxSk.js";import{C as z}from"./composed-of.component-B96in6aA.js";import{D as A}from"./playground.component-DtQtjiS7.js";import{FoldPageSectionComponent as B}from"./page-section.component-Da0lZatD.js";import{FoldPasswordFieldComponent as E}from"./password-field.component-CIXYgQRA.js";import"./button.component-CXTdN1qp.js";import"./spinner.component-DgOpNSL9.js";import"./tokens.catalog-DF_6rd51.js";import"./element-title.component-BatHnf8w.js";import"./slider.component-BzRcA4W0.js";import"./input-value-Co_u-z_8.js";import"./input.component-BxY4usny.js";import"./input-base.component-Cq3O2AhD.js";import"./label.component-4fvJd3s0.js";const S=()=>["form","icons"],V=(c,s)=>s.label;function D(c,s){if(c&1&&(o(0,"span",20),e(1),a()),c&2){const t=s.$implicit;g("is-met",t.met),n(),m(t.label)}}class _{value=p("");valid=p(!1);revealable=p(!0);value2=p("");rulesExample=["import { foldRegexRule, type FoldPasswordRule } from 'fold-ng';","","rules: FoldPasswordRule[] = [","  { label: 'At least 12 characters', test: (v) => v.length >= 12 },","  foldRegexRule('A symbol', /[^A-Za-z0-9]/),","  // zod (no dependency added by fold-ng):","  { label: 'Valid', test: (v) => schema.safeParse(v).success },","];"].join(`
`);code=y(()=>["<fold-password-field",'  label="New password"',...this.revealable()?[]:['  [revealable]="false"'],'  [(value)]="password"','  (validChange)="ok.set($event)"',"/>"].join(`
`));static ɵfac=function(t){return new(t||_)};static ɵcmp=C({type:_,selectors:[["gal-password-page"]],decls:68,vars:13,consts:[["pw","foldPasswordField"],["title","password"],["description",""],["titleBadge","","kind","component"],[3,"ids"],[3,"code","responsive"],["params",""],[1,"gal-field"],[1,"gal-tag"],[1,"pw-seg"],["type","button",3,"click"],[1,"gal-readout"],["label","New password","placeholder","Create a password…",3,"valueChange","validChange","revealable","value"],["title","Injecting rules","icon","code"],[1,"pw-prose"],[1,"pw-code"],["title","Redesign the checklist","icon","grid"],["label","Password","placeholder","Type to light the chips…",3,"valueChange","value"],["rules","",1,"pw-chips"],[1,"pw-chip",3,"is-met"],[1,"pw-chip"]],template:function(t,r){if(t&1){const d=x();o(0,"fold-page-layout",1)(1,"p",2)(2,"code"),e(3,"fold-password-field"),a(),e(4," — a password input with a "),o(5,"strong"),e(6,"live requirements checklist"),a(),e(7,". It composes "),o(8,"code"),e(9,"fold-input[type=password]"),a(),e(10," with the reveal (eye) toggle, and renders a dot per rule that turns on as the value satisfies it. Rules are "),o(11,"strong"),e(12,"injected"),a(),e(13," (regex, a "),o(14,"code"),e(15,"zod"),a(),o(16,"code"),e(17,"safeParse"),a(),e(18,", anything), so the policy is yours; "),o(19,"code"),e(20,"validChange"),a(),e(21," emits when they all pass. Signal-Forms-native. "),a(),F(22,"gal-kind-badge",3)(23,"gal-composed-of",4),o(24,"dev-playground",5)(25,"div",6)(26,"div",7)(27,"span",8),e(28,"revealable"),a(),o(29,"div",9)(30,"button",10),f("click",function(){return r.revealable.set(!0)}),e(31," on "),a(),o(32,"button",10),f("click",function(){return r.revealable.set(!1)}),e(33," off "),a()()(),o(34,"p",11),e(35,"valid = "),o(36,"code"),e(37),a()()(),o(38,"fold-password-field",12),v("valueChange",function(l){return h(d),b(r.value,l)||(r.value=l),P(l)}),f("validChange",function(l){return r.valid.set(l)}),a()(),o(39,"fold-page-section",13)(40,"p",14),e(41," A rule is just a label + a predicate ("),o(42,"code"),e(43,"FoldPasswordRule"),a(),e(44,"), so any validation style drops in. The default policy is 8+ characters, upper, lower and a digit — override "),o(45,"code"),e(46,"[rules]"),a(),e(47," for your own. "),a(),o(48,"pre",15)(49,"code"),e(50),a()()(),o(51,"fold-page-section",16)(52,"p",14),e(53," Project into the "),o(54,"code"),e(55,"[rules]"),a(),e(56," slot to render your own — grab the live state off the exported ref ("),o(57,"code"),e(58,'#pw="foldPasswordField"'),a(),e(59," → "),o(60,"code"),e(61,"pw.checklist()"),a(),e(62,"). Here the rows are inline chips instead of dots; the default list is the fallback when nothing is projected. "),a(),o(63,"fold-password-field",17,0),v("valueChange",function(l){return h(d),b(r.value2,l)||(r.value2=l),P(l)}),o(65,"div",18),O(66,D,2,3,"span",19,V),a()()()()}if(t&2){const d=M(64);n(23),u("ids",T(12,S)),n(),u("code",r.code())("responsive",!1),n(6),g("is-on",r.revealable()),n(2),g("is-on",!r.revealable()),n(5),m(r.valid()),n(),u("revealable",r.revealable()),w("value",r.value),n(12),m(r.rulesExample),n(13),w("value",r.value2),n(3),R(d.checklist())}},dependencies:[j,z,A,k,B,E],styles:[`.gal-field[_ngcontent-%COMP%] {
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
}`]})}export{_ as default};
