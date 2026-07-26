import{s as d,y as f,ɵ as v,c as b,d as n,e,f as t,g as w,i as y,u as C,C as p,h as O,j as s,m as c,v as P,o as T,D as _,k,n as z,B as h,q as m,l as V,E as x,H as M,r as F}from"./index-DPf2rFdr.js";import{K as L}from"./kind-badge.component-BoOWaZfG.js";import{C as B}from"./composed-of.component-DeZB50Jm.js";import{D as I}from"./playground.component-DP6EU_pm.js";import{FoldViewToggleComponent as D}from"./view-toggle.component-CTctQE5p.js";import"./button.component-BOeohfZ6.js";import"./spinner.component-DqBivuJj.js";import"./tokens.catalog-DF_6rd51.js";import"./element-title.component-DIkZs5t9.js";import"./page-section.component-DvCFfvnv.js";import"./slider.component-BM1ylGek.js";import"./input-value-Co_u-z_8.js";const E=()=>["icons"];function W(u,a){if(u&1){const i=h();n(0,"button",10),p("click",function(){const l=x(i).$implicit,r=m();return M(r.size.set(l))}),e(1),t()}if(u&2){const i=a.$implicit,o=m();_("is-on",o.size()===i),s(),V(" ",i," ")}}class g{view=d("cards");size=d("md");iconOnly=d(!1);sizes=["sm","md"];options=[{value:"cards",label:"Cards",icon:"grid",ariaLabel:"Cards"},{value:"table",label:"Table",icon:"list",ariaLabel:"Table"}];code=f(()=>{const a=['ariaLabel="View"','[options]="options"'];return this.size()!=="md"&&a.push(`size="${this.size()}"`),this.iconOnly()&&a.push("iconOnly"),a.push('[(value)]="view"'),["<fold-view-toggle",...a.map(i=>`  ${i}`),"/>"].join(`
`)});static ɵfac=function(i){return new(i||g)};static ɵcmp=v({type:g,selectors:[["gal-view-toggle-page"]],decls:46,vars:13,consts:[["title","view-toggle"],["description",""],["titleBadge","","kind","component"],[3,"ids"],[3,"code","responsive"],["params",""],[1,"vtp-field"],[1,"gal-tag"],[1,"vtp-seg"],["type","button",3,"is-on"],["type","button",3,"click"],[1,"gal-readout"],["ariaLabel","View",3,"valueChange","options","size","iconOnly","value"]],template:function(i,o){i&1&&(n(0,"fold-page-layout",0)(1,"p",1)(2,"code"),e(3,"fold-view-toggle"),t(),e(4," — a compact "),n(5,"strong"),e(6,"segmented single-select"),t(),e(7," (Cards / Table, a density switch, a chart mode…). Generic and zero-domain: pass "),n(8,"code"),e(9,"options"),t(),e(10,", bind "),n(11,"code"),e(12,"[(value)]"),t(),e(13,". It's a real "),n(14,"code"),e(15,'role="radiogroup"'),t(),e(16," — roving tabindex, arrow-key selection, "),n(17,"code"),e(18,"Home"),t(),e(19,"/"),n(20,"code"),e(21,"End"),t(),e(22," — not two independent toggles. "),t(),w(23,"gal-kind-badge",2)(24,"gal-composed-of",3),n(25,"dev-playground",4)(26,"div",5)(27,"div",6)(28,"span",7),e(29,"size"),t(),n(30,"div",8),y(31,W,2,3,"button",9,C),t()(),n(33,"div",6)(34,"span",7),e(35,"iconOnly"),t(),n(36,"div",8)(37,"button",10),p("click",function(){return o.iconOnly.set(!1)}),e(38," off "),t(),n(39,"button",10),p("click",function(){return o.iconOnly.set(!0)}),e(40," on "),t()()(),n(41,"p",11),e(42,"value = "),n(43,"code"),e(44),t()()(),n(45,"fold-view-toggle",12),O("valueChange",function(r){return F(o.view,r)||(o.view=r),r}),t()()()),i&2&&(s(24),c("ids",P(12,E)),s(),c("code",o.code())("responsive",!1),s(6),T(o.sizes),s(6),_("is-on",!o.iconOnly()),s(2),_("is-on",o.iconOnly()),s(5),k(o.view()),s(),c("options",o.options)("size",o.size())("iconOnly",o.iconOnly()),z("value",o.view))},dependencies:[L,B,I,b,D],styles:[`.vtp-field[_ngcontent-%COMP%] {
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
}`]})}export{g as default};
