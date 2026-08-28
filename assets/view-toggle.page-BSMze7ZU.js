import{s as d,A as O,ɵ as P,c as h,d as t,e,f as n,g as k,i as v,T as f,B as _,h as z,j as s,m as u,U as V,o as b,L as p,k as x,n as F,E as y,q as g,l as w,N as C,O as T,r as L}from"./index-JouYLep9.js";import{K as M}from"./kind-badge.component-q6C1SR48.js";import{C as S}from"./composed-of.component-CDzl-gL5.js";import{D as B}from"./playground.component-C3Cm2nkG.js";import{FoldViewToggleComponent as $}from"./view-toggle.component-CKRuz2-U.js";import"./button.component-CB-H3f5t.js";import"./element-title.component-BUXTv6mu.js";import"./page-section.component-CajJNfZ2.js";import"./slider.component-BkLDIpP5.js";import"./input-value-DCGlOvqF.js";const I=()=>["icons"];function E(c,a){if(c&1){const i=y();t(0,"button",10),_("click",function(){const r=C(i).$implicit,l=g();return T(l.size.set(r))}),e(1),n()}if(c&2){const i=a.$implicit,o=g();p("is-on",o.size()===i),s(),w(" ",i," ")}}function W(c,a){if(c&1){const i=y();t(0,"button",10),_("click",function(){const r=C(i).$implicit,l=g();return T(l.active.set(r))}),e(1),n()}if(c&2){const i=a.$implicit,o=g();p("is-on",o.active()===i),s(),w(" ",i," ")}}class m{view=d("cards");size=d("md");iconOnly=d(!1);active=d("solid");sizes=["sm","md"];actives=["solid","accent","raised"];options=[{value:"cards",label:"Cards",icon:"grid",ariaLabel:"Cards"},{value:"table",label:"Table",icon:"list",ariaLabel:"Table"}];code=O(()=>{const a=['ariaLabel="View"','[options]="options"'];return this.size()!=="md"&&a.push(`size="${this.size()}"`),this.active()!=="solid"&&a.push(`activeStyle="${this.active()}"`),this.iconOnly()&&a.push("iconOnly"),a.push('[(value)]="view"'),["<fold-view-toggle",...a.map(i=>`  ${i}`),"/>"].join(`
`)});static ɵfac=function(i){return new(i||m)};static ɵcmp=P({type:m,selectors:[["gal-view-toggle-page"]],decls:52,vars:14,consts:[["title","view-toggle"],["description",""],["titleBadge","","kind","component"],[3,"ids"],[3,"code","responsive"],["params",""],[1,"vtp-field"],[1,"gal-tag"],[1,"vtp-seg"],["type","button",3,"is-on"],["type","button",3,"click"],[1,"gal-readout"],["ariaLabel","View",3,"valueChange","options","size","activeStyle","iconOnly","value"]],template:function(i,o){i&1&&(t(0,"fold-page-layout",0)(1,"p",1)(2,"code"),e(3,"fold-view-toggle"),n(),e(4," — a compact "),t(5,"strong"),e(6,"segmented single-select"),n(),e(7," (Cards / Table, a density switch, a chart mode…). Generic and zero-domain: pass "),t(8,"code"),e(9,"options"),n(),e(10,", bind "),t(11,"code"),e(12,"[(value)]"),n(),e(13,". It's a real "),t(14,"code"),e(15,'role="radiogroup"'),n(),e(16," — roving tabindex, arrow-key selection, "),t(17,"code"),e(18,"Home"),n(),e(19,"/"),t(20,"code"),e(21,"End"),n(),e(22," — not two independent toggles. "),n(),k(23,"gal-kind-badge",2)(24,"gal-composed-of",3),t(25,"dev-playground",4)(26,"div",5)(27,"div",6)(28,"span",7),e(29,"size"),n(),t(30,"div",8),v(31,E,2,3,"button",9,f),n()(),t(33,"div",6)(34,"span",7),e(35,"activeStyle"),n(),t(36,"div",8),v(37,W,2,3,"button",9,f),n()(),t(39,"div",6)(40,"span",7),e(41,"iconOnly"),n(),t(42,"div",8)(43,"button",10),_("click",function(){return o.iconOnly.set(!1)}),e(44," off "),n(),t(45,"button",10),_("click",function(){return o.iconOnly.set(!0)}),e(46," on "),n()()(),t(47,"p",11),e(48,"value = "),t(49,"code"),e(50),n()()(),t(51,"fold-view-toggle",12),z("valueChange",function(l){return L(o.view,l)||(o.view=l),l}),n()()()),i&2&&(s(24),u("ids",V(13,I)),s(),u("code",o.code())("responsive",!1),s(6),b(o.sizes),s(6),b(o.actives),s(6),p("is-on",!o.iconOnly()),s(2),p("is-on",o.iconOnly()),s(5),x(o.view()),s(),u("options",o.options)("size",o.size())("activeStyle",o.active())("iconOnly",o.iconOnly()),F("value",o.view))},dependencies:[M,S,B,h,$],styles:[`.vtp-field[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin-bottom: 0.9rem;
}

.vtp-seg[_ngcontent-%COMP%] {
  display: inline-flex;
  padding: 2px;
  border: 1px solid var(--fold-color-border-subtle);
  border-radius: var(--fold-radius-sm);
  background: var(--fold-color-surface-sunken);
}
.vtp-seg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  all: unset;
  padding: 0.3rem 0.7rem;
  border-radius: var(--fold-radius-xs);
  font-size: var(--fold-text-sm);
  color: var(--fold-color-text-muted);
  cursor: pointer;
}
.vtp-seg[_ngcontent-%COMP%]   button.is-on[_ngcontent-%COMP%] {
  background: var(--fold-color-surface-card);
  color: var(--fold-color-text);
  box-shadow: var(--fold-shadow-sm);
}

.gal-readout[_ngcontent-%COMP%] {
  font-size: var(--fold-text-sm);
  color: var(--fold-color-text-secondary);
}`]})}export{m as default};
