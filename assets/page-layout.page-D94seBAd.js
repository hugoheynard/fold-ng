import{s as r,B as y,ɵ as b,R as w,c as v,b as k,a as P,d as o,g as _,e,f as t,G as p,h as B,L as u,j as s,m as h,x as c,n as C,D as T,M as f,q as L}from"./index-0jzTNXCk.js";import{D as A}from"./playground.component-BVe_x_wx.js";import{K as x}from"./kind-badge.component-C-akTEWd.js";import{F}from"./page-section.component-CvYgh4Vg.js";import{F as I}from"./button.component-BzKSMREV.js";import{F as D}from"./callout.component-D7iWD06o.js";import{F as S}from"./slider.component-BreB8_rZ.js";import"./element-title.component-9vdrQjKf.js";import"./spinner.component-Ce5nTO5p.js";import"./tokens.catalog-DF_6rd51.js";import"./input-value-Co_u-z_8.js";function z(i,l){i&1&&_(0,"fold-badge",12)}function j(i,l){i&1&&(o(0,"p",2),e(1,"Your company subscription and payment methods."),t())}function E(i,l){i&1&&(o(0,"button",13),e(1,"Export"),t())}class m{showIcon=r(!0);showBadge=r(!1);showDesc=r(!0);showActions=r(!0);gutter=r(32);code=y(()=>{const n=[`<fold-page-layout${this.showIcon()?' icon="grid"':""} title="Billing">`];return this.showBadge()&&n.push('  <fold-badge titleBadge content="Pro" variant="accent" />'),this.showDesc()&&n.push("  <p description>Your company subscription and payments.</p>"),this.showActions()&&n.push("  <button pageActions>Export</button>"),n.push('  <fold-page-section title="Payment methods">…</fold-page-section>','  <fold-page-section title="Invoices">…</fold-page-section>',"</fold-page-layout>"),n.join(`
`)});static ɵfac=function(n){return new(n||m)};static ɵcmp=b({type:m,selectors:[["gal-page-layout-page"]],decls:71,vars:20,consts:[["title","page-layout","icon","grid"],["titleBadge","","kind","component"],["description",""],["foldButton","","pageActions","","routerLink","/","emphasis","outline","intent","neutral","size","sm"],[3,"code"],["params","",1,"np-field"],[1,"gal-tag"],[1,"pl-toggles"],["type","button",1,"pl-chip",3,"click"],["params","","label","--fold-page-gutter",3,"valueChange","min","max","step","valueText","value"],[1,"pl-window"],["title","Billing",3,"icon"],["titleBadge","","content","Pro","variant","accent","radius","pill"],["type","button","pageActions","",1,"pl-btn"],["title","Payment methods"],[1,"gal-body"],["bleed",""],["surface","sunken","radius","sm"],["title","Invoices"],["variant","accent",1,"pl-close"],["foldButton","","actions","","routerLink","/","size","sm","emphasis","outline","intent","neutral"]],template:function(n,a){n&1&&(o(0,"fold-page-layout",0),_(1,"gal-kind-badge",1),o(2,"p",2),e(3," The vertical scaffold every page wraps its content in: an optional "),o(4,"code"),e(5,"icon"),t(),e(6," + "),o(7,"code"),e(8,"title"),t(),e(9," header with "),o(10,"code"),e(11,"[description]"),t(),e(12," and "),o(13,"code"),e(14,"[pageActions]"),t(),e(15," slots, then a body that stacks its children on a steady rhythm. "),o(16,"strong"),e(17,"It owns the page gutter, not the width"),t(),e(18," — it fills whatever it is given, supplying the themed margins via one token, "),o(19,"code"),e(20,"--fold-page-gutter"),t(),e(21,". Narrowing a block to a readable measure is the content's job, never the page's. This very page is a "),o(22,"code"),e(23,"fold-page-layout"),t(),e(24,". "),t(),o(25,"a",3),e(26," See it on the home page "),t(),o(27,"dev-playground",4)(28,"div",5)(29,"span",6),e(30,"header"),t(),o(31,"div",7)(32,"button",8),p("click",function(){return a.showIcon.set(!a.showIcon())}),e(33," icon "),t(),o(34,"button",8),p("click",function(){return a.showBadge.set(!a.showBadge())}),e(35," titleBadge "),t(),o(36,"button",8),p("click",function(){return a.showDesc.set(!a.showDesc())}),e(37," description "),t(),o(38,"button",8),p("click",function(){return a.showActions.set(!a.showActions())}),e(39," pageActions "),t()()(),o(40,"fold-slider",9),B("valueChange",function(g){return L(a.gutter,g)||(a.gutter=g),g}),t(),o(41,"div",10)(42,"fold-page-layout",11),u(43,z,1,0,"fold-badge",12),u(44,j,2,0,"p",2),u(45,E,2,0,"button",13),o(46,"fold-page-section",14)(47,"fold-card")(48,"p",15),e(49," The default method is charged on renewal. Add a backup so a declined card never interrupts service. "),t()()(),o(50,"fold-page-section",16)(51,"fold-card",17)(52,"p",15),e(53," Bleed band — spans the layout edge-to-edge. It cancels "),o(54,"code"),e(55,"--fold-page-gutter"),t(),e(56," exactly (the same token the page pads with), so it stays flush as you drag the slider. "),t()()(),o(57,"fold-page-section",18)(58,"fold-card")(59,"p",15),e(60," Back in the gutter. The body keeps its steady vertical rhythm at any width. "),t()()()()()(),o(61,"fold-callout",19),e(62," The best example of "),o(63,"code"),e(64,"fold-page-layout"),t(),e(65," in the wild is the landing page — a full-bleed hero band and an "),o(66,"code"),e(67,"aside-layout"),t(),e(68," of cards below, all filling the page. "),o(69,"a",20),e(70," Open the home page "),t()()()),n&2&&(s(27),h("code",a.code()),s(5),c("is-on",a.showIcon()),s(2),c("is-on",a.showBadge()),s(2),c("is-on",a.showDesc()),s(2),c("is-on",a.showActions()),s(2),h("min",0)("max",48)("step",4)("valueText",a.gutter()+"px"),C("value",a.gutter),s(2),T("--fold-page-gutter",a.gutter(),"px"),h("icon",a.showIcon()?"grid":void 0),s(),f(a.showBadge()?43:-1),s(),f(a.showDesc()?44:-1),s(),f(a.showActions()?45:-1))},dependencies:[w,x,v,F,k,P,I,D,S,A],styles:[`@charset "UTF-8";
/* ── page-layout gallery: a bordered window painted as the page backdrop; a real
      fold-page-layout fills it. The gutter reads as the space between the window
      edge and the (card / sunken) sections; a bleed band cancels it and sits
      flush to the edges — live as the slider moves. No width cap: the page fills,
      so there is nothing to scale — the window scrolls if the content is tall. ── */
.pl-window {
  max-height: 460px;
  overflow: auto;
  overscroll-behavior: contain;
  border: 1px solid var(--fold-color-border);
  border-radius: var(--fold-radius-md);
  background: var(--fold-color-bg-page);
}

/* Header-slot toggles — a row of on/off chips. */
.pl-toggles {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.pl-chip {
  padding: 4px 10px;
  border: 1px solid var(--fold-color-border);
  border-radius: var(--fold-radius-pill, 999px);
  background: transparent;
  color: var(--fold-color-text-secondary);
  font-size: 12px;
  cursor: pointer;
}

/* A neutral demo button for the pageActions slot. */
.pl-btn {
  padding: 6px 12px;
  border: 1px solid var(--fold-color-border);
  border-radius: var(--fold-radius-sm);
  background: var(--fold-color-surface-sunken);
  color: var(--fold-color-text);
  font-size: 13px;
  cursor: pointer;
}

.pl-close {
  margin-top: 8px;
}`],encapsulation:2})}export{m as default};
