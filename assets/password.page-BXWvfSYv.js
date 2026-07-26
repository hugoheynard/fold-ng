import{s as d,y as g,ɵ as v,c as _,d as o,e,f as a,g as w,C as i,h as b,j as r,m as p,v as h,D as u,k as f,n as y,r as P}from"./index-pWDKkeGF.js";import{K as C}from"./kind-badge.component-Du4ZOBVi.js";import{C as k}from"./composed-of.component-Bi4JoRkR.js";import{D as x}from"./playground.component-DXUu29dy.js";import{FoldPageSectionComponent as F}from"./page-section.component-B3J79WzZ.js";import{FoldPasswordFieldComponent as O}from"./password-field.component-DkTTEGug.js";import"./button.component-9Pw38SHj.js";import"./spinner.component-DWYJFD-f.js";import"./tokens.catalog-DF_6rd51.js";import"./element-title.component-xpyJ_iBj.js";import"./slider.component-CpaoAgo1.js";import"./input-value-Co_u-z_8.js";import"./input.component-xh-D4PI4.js";import"./input-base.component-BbgOikUX.js";import"./label.component-D1qKDRUp.js";const M=()=>["form","icons"];class c{value=d("");valid=d(!1);revealable=d(!0);rulesExample=["import { foldRegexRule, type FoldPasswordRule } from 'fold-ng';","","rules: FoldPasswordRule[] = [","  { label: 'At least 12 characters', test: (v) => v.length >= 12 },","  foldRegexRule('A symbol', /[^A-Za-z0-9]/),","  // zod (no dependency added by fold-ng):","  { label: 'Valid', test: (v) => schema.safeParse(v).success },","];"].join(`
`);code=g(()=>["<fold-password-field",'  label="New password"',...this.revealable()?[]:['  [revealable]="false"'],'  [(value)]="password"','  (validChange)="ok.set($event)"',"/>"].join(`
`));static ɵfac=function(s){return new(s||c)};static ɵcmp=v({type:c,selectors:[["gal-password-page"]],decls:51,vars:12,consts:[["title","password"],["description",""],["titleBadge","","kind","component"],[3,"ids"],[3,"code","responsive"],["params",""],[1,"gal-field"],[1,"gal-tag"],[1,"pw-seg"],["type","button",3,"click"],[1,"gal-readout"],["label","New password","placeholder","Create a password…",3,"valueChange","validChange","revealable","value"],["title","Injecting rules","icon","code"],[1,"pw-prose"],[1,"pw-code"]],template:function(s,n){s&1&&(o(0,"fold-page-layout",0)(1,"p",1)(2,"code"),e(3,"fold-password-field"),a(),e(4," — a password input with a "),o(5,"strong"),e(6,"live requirements checklist"),a(),e(7,". It composes "),o(8,"code"),e(9,"fold-input[type=password]"),a(),e(10," with the reveal (eye) toggle, and renders a dot per rule that turns on as the value satisfies it. Rules are "),o(11,"strong"),e(12,"injected"),a(),e(13," (regex, a "),o(14,"code"),e(15,"zod"),a(),o(16,"code"),e(17,"safeParse"),a(),e(18,", anything), so the policy is yours; "),o(19,"code"),e(20,"validChange"),a(),e(21," emits when they all pass. Signal-Forms-native. "),a(),w(22,"gal-kind-badge",2)(23,"gal-composed-of",3),o(24,"dev-playground",4)(25,"div",5)(26,"div",6)(27,"span",7),e(28,"revealable"),a(),o(29,"div",8)(30,"button",9),i("click",function(){return n.revealable.set(!0)}),e(31," on "),a(),o(32,"button",9),i("click",function(){return n.revealable.set(!1)}),e(33," off "),a()()(),o(34,"p",10),e(35,"valid = "),o(36,"code"),e(37),a()()(),o(38,"fold-password-field",11),b("valueChange",function(l){return P(n.value,l)||(n.value=l),l}),i("validChange",function(l){return n.valid.set(l)}),a()(),o(39,"fold-page-section",12)(40,"p",13),e(41," A rule is just a label + a predicate ("),o(42,"code"),e(43,"FoldPasswordRule"),a(),e(44,"), so any validation style drops in. The default policy is 8+ characters, upper, lower and a digit — override "),o(45,"code"),e(46,"[rules]"),a(),e(47," for your own. "),a(),o(48,"pre",14)(49,"code"),e(50),a()()()()),s&2&&(r(23),p("ids",h(11,M)),r(),p("code",n.code())("responsive",!1),r(6),u("is-on",n.revealable()),r(2),u("is-on",!n.revealable()),r(5),f(n.valid()),r(),p("revealable",n.revealable()),y("value",n.value),r(12),f(n.rulesExample))},dependencies:[C,k,x,_,F,O],styles:[`.gal-field[_ngcontent-%COMP%] {
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
}`]})}export{c as default};
