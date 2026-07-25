import{s as d,B as v,ɵ as P,R as k,c as x,P as T,b as B,a as C,d as t,g as _,e,f as n,G as p,J as u,h as A,j as a,m as f,x as c,K as g,n as L,D as b,l as w,E as F,z as y,H as I,I as z,q as D}from"./index-CyCyHBaV.js";import{D as M}from"./playground.component-hvQ4QCmh.js";import{K as R}from"./kind-badge.component-ClK9rNuX.js";import{F as j}from"./page-section.component-BUwGFJUr.js";import{F as S}from"./avatar.component--gkvVkMc.js";import{F as E}from"./button.component-3OggVqFw.js";import{F as W}from"./callout.component-BZXh0laF.js";import{F as K}from"./slider.component-kFSZyvQn.js";import"./element-title.component-BexDAqTP.js";import"./spinner.component-BYWpTkr0.js";import"./tokens.catalog-DF_6rd51.js";import"./input-value-Co_u-z_8.js";function N(l,i){if(l&1){const s=F();t(0,"button",11),p("click",function(){I(s);const r=y();return z(r.showIcon.set(!r.showIcon()))}),e(1," icon "),n()}if(l&2){const s=y();c("is-on",s.showIcon())}}function V(l,i){l&1&&(t(0,"span",20),_(1,"fold-avatar",29),t(2,"span",30),e(3,"Acme Records "),t(4,"span",31),e(5,"· Workspace"),n()()())}function G(l,i){l&1&&_(0,"fold-badge",21)}function H(l,i){l&1&&(t(0,"p",2),e(1,"Your company subscription and payment methods."),n())}function Y(l,i){l&1&&(t(0,"button",22),e(1,"Export"),n())}function q(l,i){l&1&&(t(0,"fold-page-section",25)(1,"fold-card",32)(2,"p",24),e(3," Bleed band — spans the layout edge-to-edge. It cancels "),t(4,"code"),e(5,"--fold-page-gutter"),n(),e(6," exactly (the same token the page pads with), so it stays flush against the dashed guides as you drag the slider. "),n()()())}class m{headerMode=d("title");showIcon=d(!0);showBadge=d(!1);showDesc=d(!0);showActions=d(!0);showBleed=d(!0);gutter=d(32);code=v(()=>{const i=[];if(this.headerMode()==="custom")i.push("<fold-page-layout>",'  <span pageTitle><fold-avatar name="Acme Records" size="sm" /> Acme Records</span>');else{const s=this.showIcon()?' icon="grid"':"";i.push(`<fold-page-layout${s} title="Billing">`)}return this.showBadge()&&i.push('  <fold-badge titleBadge content="Pro" variant="accent" />'),this.showDesc()&&i.push("  <p description>Your company subscription and payments.</p>"),this.showActions()&&i.push("  <button pageActions>Export</button>"),i.push('  <fold-page-section title="Payment methods">…</fold-page-section>'),this.showBleed()&&i.push("  <fold-page-section bleed>… edge-to-edge band …</fold-page-section>"),i.push('  <fold-page-section title="Invoices">…</fold-page-section>',"</fold-page-layout>"),i.join(`
`)});static ɵfac=function(s){return new(s||m)};static ɵcmp=P({type:m,selectors:[["gal-page-layout-page"]],decls:83,vars:32,consts:[["title","page-layout","icon","grid"],["titleBadge","","kind","component"],["description",""],["foldButton","","pageActions","","routerLink","/","emphasis","outline","intent","neutral","size","sm"],[3,"code"],["params","",1,"np-field"],[1,"gal-tag"],[1,"ss-seg"],["type","button",3,"click"],[1,"pl-toggles"],["type","button",1,"pl-chip",3,"is-on"],["type","button",1,"pl-chip",3,"click"],["params","","label","--fold-page-gutter",3,"valueChange","min","max","step","valueText","value"],[1,"pl-window-wrap"],["aria-hidden","true",1,"pl-ruler"],[1,"pl-gutter-band","pl-gutter-band-left"],[1,"pl-gutter-label"],[1,"pl-gutter-band","pl-gutter-band-right"],[1,"pl-window"],[3,"icon","title"],["pageTitle","",1,"pl-custom-title"],["titleBadge","","content","Pro","variant","accent","radius","pill"],["type","button","pageActions","",1,"pl-btn"],["title","Payment methods"],[1,"gal-body"],["bleed",""],["title","Invoices"],["variant","accent",1,"pl-close"],["foldButton","","actions","","routerLink","/","size","sm","emphasis","outline","intent","neutral"],["name","Acme Records","size","sm"],[1,"pl-custom-title-text"],[1,"pl-custom-title-sub"],["surface","sunken","radius","sm"]],template:function(s,o){s&1&&(t(0,"fold-page-layout",0),_(1,"gal-kind-badge",1),t(2,"p",2),e(3," The vertical scaffold every page wraps its content in: an optional "),t(4,"code"),e(5,"icon"),n(),e(6," + "),t(7,"code"),e(8,"title"),n(),e(9," header with "),t(10,"code"),e(11,"[description]"),n(),e(12," and "),t(13,"code"),e(14,"[pageActions]"),n(),e(15," slots, then a body that stacks its children on a steady rhythm. "),t(16,"strong"),e(17,"It owns the page gutter, not the width"),n(),e(18," — it fills whatever it is given, supplying the themed margins via one token, "),t(19,"code"),e(20,"--fold-page-gutter"),n(),e(21,". Narrowing a block to a readable measure is the content's job, never the page's. This very page is a "),t(22,"code"),e(23,"fold-page-layout"),n(),e(24,". "),n(),t(25,"a",3),e(26," See it on the home page "),n(),t(27,"dev-playground",4)(28,"div",5)(29,"span",6),e(30,"header"),n(),t(31,"div",7)(32,"button",8),p("click",function(){return o.headerMode.set("title")}),e(33," Component title "),n(),t(34,"button",8),p("click",function(){return o.headerMode.set("custom")}),e(35," custom title "),n()()(),t(36,"div",5)(37,"span",6),e(38,"slots"),n(),t(39,"div",9),u(40,N,2,2,"button",10),t(41,"button",11),p("click",function(){return o.showBadge.set(!o.showBadge())}),e(42," titleBadge "),n(),t(43,"button",11),p("click",function(){return o.showDesc.set(!o.showDesc())}),e(44," description "),n(),t(45,"button",11),p("click",function(){return o.showActions.set(!o.showActions())}),e(46," pageActions "),n(),t(47,"button",11),p("click",function(){return o.showBleed.set(!o.showBleed())}),e(48," bleed section "),n()()(),t(49,"fold-slider",12),A("valueChange",function(h){return D(o.gutter,h)||(o.gutter=h),h}),n(),t(50,"div",13)(51,"div",14)(52,"span",15)(53,"span",16),e(54),n()(),t(55,"span",17)(56,"span",16),e(57),n()()(),t(58,"div",18)(59,"fold-page-layout",19),u(60,V,6,0,"span",20),u(61,G,1,0,"fold-badge",21),u(62,H,2,0,"p",2),u(63,Y,2,0,"button",22),t(64,"fold-page-section",23)(65,"fold-card")(66,"p",24),e(67," The default method is charged on renewal. Add a backup so a declined card never interrupts service. "),n()()(),u(68,q,7,0,"fold-page-section",25),t(69,"fold-page-section",26)(70,"fold-card")(71,"p",24),e(72," Back in the gutter. The body keeps its steady vertical rhythm at any width. "),n()()()()()()(),t(73,"fold-callout",27),e(74," The best example of "),t(75,"code"),e(76,"fold-page-layout"),n(),e(77," in the wild is the landing page — a full-bleed hero band and an "),t(78,"code"),e(79,"aside-layout"),n(),e(80," of cards below, all filling the page. "),t(81,"a",28),e(82," Open the home page "),n()()()),s&2&&(a(27),f("code",o.code()),a(5),c("is-on",o.headerMode()==="title"),a(2),c("is-on",o.headerMode()==="custom"),a(6),g(o.headerMode()==="title"?40:-1),a(),c("is-on",o.showBadge()),a(2),c("is-on",o.showDesc()),a(2),c("is-on",o.showActions()),a(2),c("is-on",o.showBleed()),a(2),f("min",0)("max",48)("step",4)("valueText",o.gutter()+"px"),L("value",o.gutter),a(),b("--pl-gutter",o.gutter(),"px"),a(4),w("",o.gutter(),"px"),a(3),w("",o.gutter(),"px"),a(2),b("--fold-page-gutter",o.gutter(),"px"),f("icon",o.headerMode()==="title"&&o.showIcon()?"grid":void 0)("title",o.headerMode()==="title"?"Billing":void 0),a(),g(o.headerMode()==="custom"?60:-1),a(),g(o.showBadge()?61:-1),a(),g(o.showDesc()?62:-1),a(),g(o.showActions()?63:-1),a(5),g(o.showBleed()?68:-1))},dependencies:[k,R,x,T,j,B,S,C,E,W,K,M],styles:[`@charset "UTF-8";
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
