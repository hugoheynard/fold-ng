import{s as d,N as v,ɵ as P,R as k,c as x,a0 as C,b as T,a as B,d as t,g as _,e,f as n,T as p,w as u,h as L,j as a,m as h,L as A,H as c,x as g,n as F,Q as b,l as w,S as I,q as y,U as z,V as M,r as D}from"./index-BOlWLkpq.js";import{D as R}from"./playground.component-DZ1uhtKR.js";import{K as S}from"./kind-badge.component-BkVnuPmV.js";import{C as j}from"./composed-of.component-CXK0ne5E.js";import{FoldPageSectionComponent as N}from"./page-section.component-zUpE1zTr.js";import{F as V}from"./avatar.component-BSXZfams.js";import{FoldButtonComponent as W}from"./button.component-DKcVHX3b.js";import{FoldCalloutComponent as E}from"./callout.component-B4mx6AjP.js";import{FoldSliderComponent as H}from"./slider.component-DWvMhQsQ.js";import"./element-title.component-BKuzqApF.js";import"./spinner.component-C79cYYaO.js";import"./tokens.catalog-DF_6rd51.js";import"./input-value-Co_u-z_8.js";const K=()=>["icons"];function O(l,i){if(l&1){const s=I();t(0,"button",12),p("click",function(){z(s);const r=y();return M(r.showIcon.set(!r.showIcon()))}),e(1," icon "),n()}if(l&2){const s=y();c("is-on",s.showIcon())}}function U(l,i){l&1&&(t(0,"span",21),_(1,"fold-avatar",30),t(2,"span",31),e(3,"Acme Records "),t(4,"span",32),e(5,"· Workspace"),n()()())}function Y(l,i){l&1&&_(0,"fold-badge",22)}function q(l,i){l&1&&(t(0,"p",3),e(1,"Your company subscription and payment methods."),n())}function G(l,i){l&1&&(t(0,"button",23),e(1,"Export"),n())}function Q(l,i){l&1&&(t(0,"fold-page-section",26)(1,"fold-card",33)(2,"p",25),e(3," Bleed band — spans the layout edge-to-edge. It cancels "),t(4,"code"),e(5,"--fold-page-gutter"),n(),e(6," exactly (the same token the page pads with), so it stays flush against the dashed guides as you drag the slider. "),n()()())}class m{headerMode=d("title");showIcon=d(!0);showBadge=d(!1);showDesc=d(!0);showActions=d(!0);showBleed=d(!0);gutter=d(32);code=v(()=>{const i=[];if(this.headerMode()==="custom")i.push("<fold-page-layout>",'  <span pageTitle><fold-avatar name="Acme Records" size="sm" /> Acme Records</span>');else{const s=this.showIcon()?' icon="grid"':"";i.push(`<fold-page-layout${s} title="Billing">`)}return this.showBadge()&&i.push('  <fold-badge titleBadge content="Pro" variant="accent" />'),this.showDesc()&&i.push("  <p description>Your company subscription and payments.</p>"),this.showActions()&&i.push("  <button pageActions>Export</button>"),i.push('  <fold-page-section title="Payment methods">…</fold-page-section>'),this.showBleed()&&i.push("  <fold-page-section bleed>… edge-to-edge band …</fold-page-section>"),i.push('  <fold-page-section title="Invoices">…</fold-page-section>',"</fold-page-layout>"),i.join(`
`)});static ɵfac=function(s){return new(s||m)};static ɵcmp=P({type:m,selectors:[["gal-page-layout-page"]],decls:84,vars:34,consts:[["title","page-layout","icon","grid"],["titleBadge","","kind","component"],[3,"ids"],["description",""],["foldButton","","pageActions","","routerLink","/","emphasis","outline","intent","neutral","size","sm"],[3,"code"],["params","",1,"np-field"],[1,"gal-tag"],[1,"ss-seg"],["type","button",3,"click"],[1,"pl-toggles"],["type","button",1,"pl-chip",3,"is-on"],["type","button",1,"pl-chip",3,"click"],["params","","label","--fold-page-gutter",3,"valueChange","min","max","step","valueText","value"],[1,"pl-window-wrap"],["aria-hidden","true",1,"pl-ruler"],[1,"pl-gutter-band","pl-gutter-band-left"],[1,"pl-gutter-label"],[1,"pl-gutter-band","pl-gutter-band-right"],[1,"pl-window"],[3,"icon","title"],["pageTitle","",1,"pl-custom-title"],["titleBadge","","content","Pro","variant","accent","radius","pill"],["type","button","pageActions","",1,"pl-btn"],["title","Payment methods"],[1,"gal-body"],["bleed",""],["title","Invoices"],["variant","accent",1,"pl-close"],["foldButton","","actions","","routerLink","/","size","sm","emphasis","outline","intent","neutral"],["name","Acme Records","size","sm"],[1,"pl-custom-title-text"],[1,"pl-custom-title-sub"],["surface","sunken","radius","sm"]],template:function(s,o){s&1&&(t(0,"fold-page-layout",0),_(1,"gal-kind-badge",1)(2,"gal-composed-of",2),t(3,"p",3),e(4," The vertical scaffold every page wraps its content in: an optional "),t(5,"code"),e(6,"icon"),n(),e(7," + "),t(8,"code"),e(9,"title"),n(),e(10," header with "),t(11,"code"),e(12,"[description]"),n(),e(13," and "),t(14,"code"),e(15,"[pageActions]"),n(),e(16," slots, then a body that stacks its children on a steady rhythm. "),t(17,"strong"),e(18,"It owns the page gutter, not the width"),n(),e(19," — it fills whatever it is given, supplying the themed margins via one token, "),t(20,"code"),e(21,"--fold-page-gutter"),n(),e(22,". Narrowing a block to a readable measure is the content's job, never the page's. This very page is a "),t(23,"code"),e(24,"fold-page-layout"),n(),e(25,". "),n(),t(26,"a",4),e(27," See it on the home page "),n(),t(28,"dev-playground",5)(29,"div",6)(30,"span",7),e(31,"header"),n(),t(32,"div",8)(33,"button",9),p("click",function(){return o.headerMode.set("title")}),e(34," Component title "),n(),t(35,"button",9),p("click",function(){return o.headerMode.set("custom")}),e(36," custom title "),n()()(),t(37,"div",6)(38,"span",7),e(39,"slots"),n(),t(40,"div",10),u(41,O,2,2,"button",11),t(42,"button",12),p("click",function(){return o.showBadge.set(!o.showBadge())}),e(43," titleBadge "),n(),t(44,"button",12),p("click",function(){return o.showDesc.set(!o.showDesc())}),e(45," description "),n(),t(46,"button",12),p("click",function(){return o.showActions.set(!o.showActions())}),e(47," pageActions "),n(),t(48,"button",12),p("click",function(){return o.showBleed.set(!o.showBleed())}),e(49," bleed section "),n()()(),t(50,"fold-slider",13),L("valueChange",function(f){return D(o.gutter,f)||(o.gutter=f),f}),n(),t(51,"div",14)(52,"div",15)(53,"span",16)(54,"span",17),e(55),n()(),t(56,"span",18)(57,"span",17),e(58),n()()(),t(59,"div",19)(60,"fold-page-layout",20),u(61,U,6,0,"span",21),u(62,Y,1,0,"fold-badge",22),u(63,q,2,0,"p",3),u(64,G,2,0,"button",23),t(65,"fold-page-section",24)(66,"fold-card")(67,"p",25),e(68," The default method is charged on renewal. Add a backup so a declined card never interrupts service. "),n()()(),u(69,Q,7,0,"fold-page-section",26),t(70,"fold-page-section",27)(71,"fold-card")(72,"p",25),e(73," Back in the gutter. The body keeps its steady vertical rhythm at any width. "),n()()()()()()(),t(74,"fold-callout",28),e(75," The best example of "),t(76,"code"),e(77,"fold-page-layout"),n(),e(78," in the wild is the landing page — a full-bleed hero band and an "),t(79,"code"),e(80,"aside-layout"),n(),e(81," of cards below, all filling the page. "),t(82,"a",29),e(83," Open the home page "),n()()()),s&2&&(a(2),h("ids",A(33,K)),a(26),h("code",o.code()),a(5),c("is-on",o.headerMode()==="title"),a(2),c("is-on",o.headerMode()==="custom"),a(6),g(o.headerMode()==="title"?41:-1),a(),c("is-on",o.showBadge()),a(2),c("is-on",o.showDesc()),a(2),c("is-on",o.showActions()),a(2),c("is-on",o.showBleed()),a(2),h("min",0)("max",48)("step",4)("valueText",o.gutter()+"px"),F("value",o.gutter),a(),b("--pl-gutter",o.gutter(),"px"),a(4),w("",o.gutter(),"px"),a(3),w("",o.gutter(),"px"),a(2),b("--fold-page-gutter",o.gutter(),"px"),h("icon",o.headerMode()==="title"&&o.showIcon()?"grid":void 0)("title",o.headerMode()==="title"?"Billing":void 0),a(),g(o.headerMode()==="custom"?61:-1),a(),g(o.showBadge()?62:-1),a(),g(o.showDesc()?63:-1),a(),g(o.showActions()?64:-1),a(5),g(o.showBleed()?69:-1))},dependencies:[k,S,j,x,C,N,T,V,B,W,E,H,R],styles:[`@charset "UTF-8";
/* ── page-layout gallery: a bordered window painted as the page backdrop; a real
      fold-page-layout fills it. The gutter reads as the space between the window
      edge and the (card / sunken) sections; a bleed band cancels it and sits
      flush to the edges — live as the slider moves. No width cap: the page fills,
      so there is nothing to scale — the window scrolls if the content is tall. ── */
/* Non-scrolling frame that hosts the ruler overlay above the scrolling window. */
.pl-window-wrap {
  position: relative;
}

.pl-window {
  max-height: 460px;
  overflow: auto;
  overscroll-behavior: contain;
  border: 1px solid var(--fold-color-border);
  border-radius: var(--fold-radius-md);
  background: var(--fold-color-bg-page);
}

/* Gutter visualiser — two edge bands the width of --fold-page-gutter, each with
   a dashed rule at the content edge and a px label, laid over the window. */
.pl-ruler {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 2;
}

.pl-gutter-band {
  position: absolute;
  top: 0;
  bottom: 0;
  width: var(--pl-gutter, 32px);
  display: flex;
  justify-content: center;
  background: var(--fold-color-primary-surface);
}

.pl-gutter-band-left {
  left: 0;
  border-right: 1px dashed var(--fold-color-primary);
}

.pl-gutter-band-right {
  right: 0;
  border-left: 1px dashed var(--fold-color-primary);
}

.pl-gutter-label {
  margin-top: 8px;
  height: fit-content;
  padding: 1px 5px;
  border-radius: var(--fold-radius-sm);
  background: var(--fold-color-primary-surface);
  color: var(--fold-color-primary-text);
  font-family: var(--fold-font-mono, ui-monospace, monospace);
  font-size: 10px;
  font-weight: 700;
  line-height: 1.5;
  white-space: nowrap;
}

/* A projected [pageTitle] — an avatar + a two-tone name, inside the page <h1>. */
.pl-custom-title {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.pl-custom-title-text {
  font-size: var(--fold-text-lg);
  font-weight: 700;
  color: var(--fold-color-text);
}

.pl-custom-title-sub {
  font-weight: 500;
  font-size: var(--fold-text-sm);
  color: var(--fold-color-text-muted);
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
