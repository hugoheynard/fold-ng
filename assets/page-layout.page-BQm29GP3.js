import{s as d,a4 as C,Y as x,X as L,$ as A,a5 as E,a6 as S,A as z,ɵ as F,R as I,c as D,a7 as M,b as G,a as R,d as t,g as f,e,f as n,B as c,w as u,j as s,m as b,U as N,L as p,x as g,W as V,a8 as j,a9 as O,E as v,q as h,h as k,n as T,l as P,N as w,O as y,r as B}from"./index-C958Tloz.js";import{D as W}from"./playground.component-BkfgKolr.js";import{K as q}from"./kind-badge.component-DfLfYgY7.js";import{C as Q}from"./composed-of.component-DrTDp3oy.js";import{FoldPageSectionComponent as U}from"./page-section.component-e426FYhr.js";import{F as Y}from"./avatar.component-Du2fjqOp.js";import{FoldBreadcrumbComponent as H}from"./breadcrumb.component-BwgDILLV.js";import{FoldButtonComponent as K}from"./button.component-c-76ZGqB.js";import{FoldCalloutComponent as J}from"./callout.component-_Y03dLNS.js";import{FoldSliderComponent as X}from"./slider.component-C68jSPLQ.js";import"./element-title.component-p2KuDa1Q.js";import"./input-value-DCGlOvqF.js";const $=["liveLayout"],Z=()=>["icons"];function ee(r,l){if(r&1){const o=v();t(0,"button",13),c("click",function(){w(o);const i=h();return y(i.showIcon.set(!i.showIcon()))}),e(1," icon "),n()}if(r&2){const o=h();p("is-on",o.showIcon())}}function te(r,l){r&1&&(t(0,"p",14),e(1," Fluid "),t(2,"code"),e(3,"clamp()"),n(),e(4," defaults are live — switch the viewport (Fluid / Tablet / Desktop) and watch the gutter & gap bands scale. The band labels show the resolved px. Turn off "),t(5,"strong"),e(6,"fluid default"),n(),e(7," to pin explicit values. "),n())}function ae(r,l){if(r&1){const o=v();t(0,"fold-slider",47),k("valueChange",function(i){w(o);const m=h();return B(m.gutter,i)||(m.gutter=i),y(i)}),n()}if(r&2){const o=h();b("min",0)("max",48)("step",4)("valueText",o.gutter()+"px"),T("value",o.gutter)}}function ne(r,l){if(r&1){const o=v();t(0,"fold-slider",48),k("valueChange",function(i){w(o);const m=h();return B(m.gap,i)||(m.gap=i),y(i)}),n()}if(r&2){const o=h();b("min",0)("max",64)("step",4)("valueText",o.gap()+"px"),T("value",o.gap)}}function oe(r,l){if(r&1&&(t(0,"div",18)(1,"span",49)(2,"span",50),e(3),n()(),t(4,"span",51)(5,"span",50),e(6),n()()()),r&2){const o=h();s(3),P("",o.measuredGutter(),"px"),s(3),P("",o.measuredGutter(),"px")}}function le(r,l){r&1&&(t(0,"span",21),f(1,"fold-avatar",52),t(2,"span",53),e(3,"Acme Records "),t(4,"span",54),e(5,"· Workspace"),n()()())}function se(r,l){if(r&1&&f(0,"fold-breadcrumb",22),r&2){const o=h();b("currentPage",!1)("items",o.trail)}}function re(r,l){r&1&&f(0,"fold-badge",23)}function ie(r,l){r&1&&(t(0,"span",24)(1,"span",55),e(2,"ACME-4821"),n(),t(3,"span",56),e(4,"·"),n(),t(5,"span"),e(6,"Annual plan"),n(),t(7,"span",56),e(8,"·"),n(),t(9,"span"),e(10,"12 seats"),n()())}function de(r,l){r&1&&(t(0,"p",4),e(1,"Your company subscription and payment methods."),n())}function pe(r,l){r&1&&(t(0,"button",25),e(1,"Export"),n())}function ce(r,l){r&1&&(t(0,"fold-page-section",38)(1,"fold-card",57)(2,"p",27)(3,"strong"),e(4,"Bleed band"),n(),e(5," — spans the layout edge-to-edge. It cancels "),t(6,"code"),e(7,"--fold-page-gutter"),n(),e(8," exactly (the same token the page pads with), so it stays flush against the dashed guides as you drag the gutter slider. A darker surface makes the edge-to-edge reach unmistakable. "),n()()())}class _{headerMode=d("title");showIcon=d(!0);showEyebrow=d(!1);showBadge=d(!1);showSubtitle=d(!1);showDesc=d(!0);separator=d(!1);headerBleed=d(!1);headerBand=d(!1);showActions=d(!0);trail=[{label:"Workspace",routerLink:"/home"},{label:"Settings",routerLink:"/menu"}];showBleed=d(!0);showGap=d(!0);hideBands=d(!1);gutter=d(32);gap=d(32);fluid=d(!0);liveLayout=C("liveLayout",{read:x});measuredGutter=d(32);measuredGap=d(32);destroyRef=L(A);constructor(){E(()=>{this.fluid(),this.gutter(),this.gap(),this.measure()}),S(()=>{const l=this.liveLayout()?.nativeElement;if(!l||typeof ResizeObserver>"u")return;const o=new ResizeObserver(()=>this.measure());o.observe(l),this.destroyRef.onDestroy(()=>o.disconnect())})}measure(){const l=this.liveLayout()?.nativeElement,o=l?.ownerDocument?.defaultView;if(!l||!o)return;const a=o.getComputedStyle(l);this.measuredGutter.set(Math.round(parseFloat(a.paddingInlineStart)||0)),this.measuredGap.set(Math.round(parseFloat(a.rowGap)||0))}code=z(()=>{const l=[];if(this.headerMode()==="custom")l.push("<fold-page-layout>",'  <span pageTitle><fold-avatar name="Acme Records" size="sm" /> Acme Records</span>');else{const o=this.showIcon()?' icon="grid"':"",a=this.separator()?" separator":"",i=this.headerBleed()?" headerBleed":"",m=this.headerBand()?" headerBand":"";l.push(`<fold-page-layout${o} title="Billing"${a}${i}${m}>`)}return this.showEyebrow()&&l.push('  <fold-breadcrumb pageEyebrow [currentPage]="false" [items]="trail" />'),this.showBadge()&&l.push('  <fold-badge titleBadge content="Pro" variant="accent" />'),this.showSubtitle()&&l.push("  <span pageSubtitle>ACME-4821 · Annual plan · 12 seats</span>"),this.showDesc()&&l.push("  <p description>Your company subscription and payments.</p>"),this.showActions()&&l.push("  <button pageActions>Export</button>"),l.push('  <fold-page-section title="Payment methods">…</fold-page-section>'),this.showBleed()&&l.push("  <fold-page-section bleed>… edge-to-edge band …</fold-page-section>"),l.push('  <fold-page-section title="Invoices">…</fold-page-section>',"</fold-page-layout>"),l.join(`
`)});static ɵfac=function(o){return new(o||_)};static ɵcmp=F({type:_,selectors:[["gal-page-layout-page"]],viewQuery:function(o,a){o&1&&j(a.liveLayout,$,5,x),o&2&&O()},decls:172,vars:58,consts:[["liveLayout",""],["title","page-layout","icon","grid"],["titleBadge","","kind","component"],[3,"ids"],["description",""],["foldButton","","pageActions","","routerLink","/","emphasis","outline","intent","neutral","size","sm"],[3,"code"],["params","",1,"np-field"],[1,"gal-tag"],[1,"ss-seg"],["type","button",3,"click"],[1,"pl-toggles"],["type","button",1,"pl-chip",3,"is-on"],["type","button",1,"pl-chip",3,"click"],["params","",1,"pl-hint"],["params","","label","--fold-page-gutter",3,"min","max","step","valueText","value"],["params","","label","--fold-page-gap",3,"min","max","step","valueText","value"],[1,"pl-window-wrap"],["aria-hidden","true",1,"pl-ruler"],[1,"pl-window"],[1,"pl-live",3,"icon","title","separator","headerBleed","headerBand"],["pageTitle","",1,"pl-custom-title"],["pageEyebrow","","ariaLabel","Billing trail",3,"currentPage","items"],["titleBadge","","content","Pro","variant","accent","radius","pill"],["pageSubtitle","",1,"pl-facts"],["type","button","pageActions","",1,"pl-btn"],["title","Payment methods"],[1,"gal-body"],[1,"pl-rows"],[1,"pl-row"],["name","Visa","size","sm","square",""],[1,"pl-row-main"],[1,"pl-row-title"],[1,"pl-row-sub"],["content","Default","variant","success"],["type","button",1,"pl-btn"],["name","Mastercard","size","sm","square",""],["content","Backup","variant","neutral"],["bleed",""],["title","Usage this month"],[1,"pl-tall"],["title","Invoices"],[1,"pl-row-amount"],["content","Paid","variant","success"],["content","Due","variant","warning"],["variant","accent",1,"pl-close"],["foldButton","","actions","","routerLink","/","size","sm","emphasis","outline","intent","neutral"],["params","","label","--fold-page-gutter",3,"valueChange","min","max","step","valueText","value"],["params","","label","--fold-page-gap",3,"valueChange","min","max","step","valueText","value"],[1,"pl-gutter-band","pl-gutter-band-left"],[1,"pl-gutter-label"],[1,"pl-gutter-band","pl-gutter-band-right"],["name","Acme Records","size","sm"],[1,"pl-custom-title-text"],[1,"pl-custom-title-sub"],[1,"pl-facts-ref"],["aria-hidden","true",1,"pl-facts-sep"],["surface","accent","radius","sm"]],template:function(o,a){o&1&&(t(0,"fold-page-layout",1),f(1,"gal-kind-badge",2)(2,"gal-composed-of",3),t(3,"p",4),e(4," The vertical scaffold every page wraps its content in: an optional "),t(5,"code"),e(6,"icon"),n(),e(7," + "),t(8,"code"),e(9,"title"),n(),e(10," header with "),t(11,"code"),e(12,"[pageEyebrow]"),n(),e(13,", "),t(14,"code"),e(15,"[pageSubtitle]"),n(),e(16,", "),t(17,"code"),e(18,"[description]"),n(),e(19," and "),t(20,"code"),e(21,"[pageActions]"),n(),e(22," slots, then a body that stacks its children on a steady rhythm. The header can close on a hairline ("),t(23,"code"),e(24,"separator"),n(),e(25,") when the body runs flush against it. "),t(26,"strong"),e(27,"It owns the page gutter, not the width"),n(),e(28," — it fills whatever it is given, supplying the themed margins via one token, "),t(29,"code"),e(30,"--fold-page-gutter"),n(),e(31,". Narrowing a block to a readable measure is the content's job, never the page's. This very page is a "),t(32,"code"),e(33,"fold-page-layout"),n(),e(34,". "),n(),t(35,"a",5),e(36," See it on the home page "),n(),t(37,"dev-playground",6)(38,"div",7)(39,"span",8),e(40,"header"),n(),t(41,"div",9)(42,"button",10),c("click",function(){return a.headerMode.set("title")}),e(43," Component title "),n(),t(44,"button",10),c("click",function(){return a.headerMode.set("custom")}),e(45," custom title "),n()()(),t(46,"div",7)(47,"span",8),e(48,"slots"),n(),t(49,"div",11),u(50,ee,2,2,"button",12),t(51,"button",13),c("click",function(){return a.showEyebrow.set(!a.showEyebrow())}),e(52," pageEyebrow "),n(),t(53,"button",13),c("click",function(){return a.showBadge.set(!a.showBadge())}),e(54," titleBadge "),n(),t(55,"button",13),c("click",function(){return a.showSubtitle.set(!a.showSubtitle())}),e(56," pageSubtitle "),n(),t(57,"button",13),c("click",function(){return a.showDesc.set(!a.showDesc())}),e(58," description "),n(),t(59,"button",13),c("click",function(){return a.separator.set(!a.separator())}),e(60," separator "),n(),t(61,"button",13),c("click",function(){return a.headerBleed.set(!a.headerBleed())}),e(62," headerBleed "),n(),t(63,"button",13),c("click",function(){return a.headerBand.set(!a.headerBand())}),e(64," headerBand "),n(),t(65,"button",13),c("click",function(){return a.showActions.set(!a.showActions())}),e(66," pageActions "),n(),t(67,"button",13),c("click",function(){return a.showBleed.set(!a.showBleed())}),e(68," bleed section "),n(),t(69,"button",13),c("click",function(){return a.showGap.set(!a.showGap())}),e(70," gap bands "),n(),t(71,"button",13),c("click",function(){return a.hideBands.set(!a.hideBands())}),e(72," hide bands "),n(),t(73,"button",13),c("click",function(){return a.fluid.set(!a.fluid())}),e(74," fluid default "),n()()(),u(75,te,8,0,"p",14),u(76,ae,1,5,"fold-slider",15),u(77,ne,1,5,"fold-slider",16),t(78,"div",17),u(79,oe,7,2,"div",18),t(80,"div",19)(81,"fold-page-layout",20,0),u(83,le,6,0,"span",21),u(84,se,1,2,"fold-breadcrumb",22),u(85,re,1,0,"fold-badge",23),u(86,ie,11,0,"span",24),u(87,de,2,0,"p",4),u(88,pe,2,0,"button",25),t(89,"fold-page-section",26)(90,"fold-card")(91,"p",27),e(92," The default method is charged on renewal. Add a backup so a declined card never interrupts service. "),n(),t(93,"div",28)(94,"div",29),f(95,"fold-avatar",30),t(96,"span",31)(97,"span",32),e(98,"Visa •••• 4242"),n(),t(99,"span",33),e(100,"Expires 08 / 27"),n()(),f(101,"fold-badge",34),t(102,"button",35),e(103,"Edit"),n()(),t(104,"div",29),f(105,"fold-avatar",36),t(106,"span",31)(107,"span",32),e(108,"Mastercard •••• 5556"),n(),t(109,"span",33),e(110,"Expires 03 / 26"),n()(),f(111,"fold-badge",37),t(112,"button",35),e(113,"Edit"),n()()()()(),u(114,ce,9,0,"fold-page-section",38),t(115,"fold-page-section",39)(116,"fold-card")(117,"p",27),e(118," A deliberately tall section so the window scrolls — the gutter bands stay pinned to the frame while the gap bands scroll with the content, and the header stays put above. "),n(),t(119,"div",40),e(120,"Scroll region"),n()()(),t(121,"fold-page-section",41)(122,"fold-card")(123,"p",27),e(124," Back in the gutter. The body keeps its steady vertical rhythm — the "),t(125,"code"),e(126,"--fold-page-gap"),n(),e(127," band above — at any width. "),n(),t(128,"div",28)(129,"div",29)(130,"span",31)(131,"span",32),e(132,"March 2026"),n(),t(133,"span",33),e(134,"INV-2026-0312"),n()(),t(135,"span",42),e(136,"€49.00"),n(),f(137,"fold-badge",43),t(138,"button",35),e(139,"PDF"),n()(),t(140,"div",29)(141,"span",31)(142,"span",32),e(143,"February 2026"),n(),t(144,"span",33),e(145,"INV-2026-0212"),n()(),t(146,"span",42),e(147,"€49.00"),n(),f(148,"fold-badge",43),t(149,"button",35),e(150,"PDF"),n()(),t(151,"div",29)(152,"span",31)(153,"span",32),e(154,"January 2026"),n(),t(155,"span",33),e(156,"INV-2026-0112"),n()(),t(157,"span",42),e(158,"€49.00"),n(),f(159,"fold-badge",44),t(160,"button",35),e(161,"Pay"),n()()()()()()()()(),t(162,"fold-callout",45),e(163," The best example of "),t(164,"code"),e(165,"fold-page-layout"),n(),e(166," in the wild is the landing page — a full-bleed hero band and an "),t(167,"code"),e(168,"aside-layout"),n(),e(169," of cards below, all filling the page. "),t(170,"a",46),e(171," Open the home page "),n()()()),o&2&&(s(2),b("ids",N(57,Z)),s(35),b("code",a.code()),s(5),p("is-on",a.headerMode()==="title"),s(2),p("is-on",a.headerMode()==="custom"),s(6),g(a.headerMode()==="title"?50:-1),s(),p("is-on",a.showEyebrow()),s(2),p("is-on",a.showBadge()),s(2),p("is-on",a.showSubtitle()),s(2),p("is-on",a.showDesc()),s(2),p("is-on",a.separator()),s(2),p("is-on",a.headerBleed()),s(2),p("is-on",a.headerBand()),s(2),p("is-on",a.showActions()),s(2),p("is-on",a.showBleed()),s(2),p("is-on",a.showGap()),s(2),p("is-on",a.hideBands()),s(2),p("is-on",a.fluid()),s(2),g(a.fluid()?75:-1),s(),g(a.fluid()?-1:76),s(),g(a.fluid()?-1:77),s(),V("--fold-page-gutter",a.fluid()?null:a.gutter(),"px")("--fold-page-gap",a.fluid()?null:a.gap(),"px")("--pl-gap-num",a.measuredGap())("--pl-gap-num-first",a.measuredGap()+16),s(),g(a.hideBands()?-1:79),s(2),p("pl-show-gap",a.showGap()&&!a.hideBands()),b("icon",a.headerMode()==="title"&&a.showIcon()?"grid":void 0)("title",a.headerMode()==="title"?"Billing":void 0)("separator",a.separator())("headerBleed",a.headerBleed())("headerBand",a.headerBand()),s(2),g(a.headerMode()==="custom"?83:-1),s(),g(a.showEyebrow()?84:-1),s(),g(a.showBadge()?85:-1),s(),g(a.showSubtitle()?86:-1),s(),g(a.showDesc()?87:-1),s(),g(a.showActions()?88:-1),s(26),g(a.showBleed()?114:-1))},dependencies:[I,q,Q,D,M,U,G,Y,R,H,K,J,X,W],styles:[`@charset "UTF-8";
/* ── page-layout gallery: a bordered window painted as the page backdrop; a real
      fold-page-layout fills it. The gutter reads as the space between the window
      edge and the (card / sunken) sections; a bleed band cancels it and sits
      flush to the edges — live as the slider moves. No width cap: the page fills,
      so there is nothing to scale — the window scrolls if the content is tall. ── */
/* Non-scrolling frame that hosts the ruler overlay above the scrolling window. */
.pl-window-wrap {
  position: relative;
}

/* A bounded flex column that CLIPS — so the fold-page-layout inside is the
   single scroll box (its real role), filling the frame and scrolling its own
   overflow. NOT \`overflow:auto\` here: two nested scroll containers + the
   page-layout's \`overscroll-behavior:contain\` would let the (dead) inner
   container swallow the wheel and the frame would never scroll. */
.pl-window {
  max-height: 460px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
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
  width: var(--fold-page-gutter, 32px);
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
  font-family: var(--fold-font-mono);
  font-size: var(--fold-text-2xs);
  font-weight: var(--fold-weight-bold);
  line-height: var(--fold-leading-normal);
  white-space: nowrap;
}

/* Gap visualiser — a band the exact height of --fold-page-gap laid in each
   vertical stack gap (header ↔ body, section ↔ section). A different hue from
   the gutter (success/green vs the gutter's primary) so the two tokens read as
   two distinct axes. It scrolls WITH the content (unlike the fixed gutter bands)
   because the gaps move as the page scrolls. */
.pl-show-gap .page-body > fold-page-section {
  position: relative;
}

/* Open the page with a clearer breath: the first section sits a touch further
   from the header than the inter-section rhythm. */
.pl-live .page-body > fold-page-section:first-child {
  margin-top: 16px;
}

.pl-show-gap .page-body > fold-page-section::before {
  /* The live px value, rendered in CSS content via a counter fed the unitless
     \`--pl-gap-num\` the template sets from the gap signal. */
  counter-reset: plgap var(--pl-gap-num, 32);
  content: counter(plgap) "px";
  position: absolute;
  left: 0;
  right: 0;
  top: calc(-1 * var(--fold-page-gap, 32px));
  height: var(--fold-page-gap, 32px);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: var(--fold-color-success-surface);
  border-block: 1px dashed var(--fold-color-success);
  color: var(--fold-color-success-text);
  font-family: var(--fold-font-mono);
  font-size: var(--fold-text-2xs);
  font-weight: var(--fold-weight-bold);
  letter-spacing: var(--fold-tracking-caps);
  text-transform: uppercase;
  pointer-events: none;
  z-index: 1;
}

/* The first section's band grows to match its extra breath, so the visualiser
   stays honest — you see the header ↔ first-section gap is larger, and its
   label reflects the larger px (gap + 16). */
.pl-show-gap .page-body > fold-page-section:first-child::before {
  counter-reset: plgap var(--pl-gap-num-first, 48);
  top: calc(-1 * (var(--fold-page-gap, 32px) + 16px));
  height: calc(var(--fold-page-gap, 32px) + 16px);
}

/* Realistic section content — stacked rows (payment methods, invoices) so the
   preview reads like a real billing page, not a lorem block. */
.pl-rows {
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.pl-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border: 1px solid var(--fold-color-border);
  border-radius: var(--fold-radius-md);
  background: var(--fold-color-surface-sunken);
}

.pl-row-main {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-width: 0;
}

.pl-row-title {
  font-size: var(--fold-text-md);
  font-weight: var(--fold-weight-semibold);
  color: var(--fold-color-text);
}

.pl-row-sub {
  font-size: var(--fold-text-xs);
  color: var(--fold-color-text-muted);
}

.pl-row-amount {
  font-variant-numeric: tabular-nums;
  font-weight: var(--fold-weight-semibold);
  font-size: var(--fold-text-md);
  color: var(--fold-color-text);
}

/* A tall block to force the window to scroll (exercises the pinned gutter bands
   vs the scrolling gap bands, and the sticky header). */
.pl-tall {
  margin-top: 12px;
  min-height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed var(--fold-color-border);
  border-radius: var(--fold-radius-md);
  background: var(--fold-color-surface-sunken);
  color: var(--fold-color-text-muted);
  font-size: var(--fold-text-sm);
  letter-spacing: var(--fold-tracking-caps);
  text-transform: uppercase;
}

/* A projected [pageTitle] — an avatar + a two-tone name, inside the page <h1>. */
.pl-custom-title {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.pl-custom-title-text {
  font-size: var(--fold-text-lg);
  font-weight: var(--fold-weight-bold);
  color: var(--fold-color-text);
}

.pl-custom-title-sub {
  font-weight: var(--fold-weight-medium);
  font-size: var(--fold-text-sm);
  color: var(--fold-color-text-muted);
}

/* Inline hint shown in the params column while fluid mode is on. */
.pl-hint {
  margin: 0;
  font-size: var(--fold-text-sm);
  line-height: var(--fold-leading-normal);
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
  font-size: var(--fold-text-sm);
  cursor: pointer;
}

/* A neutral demo button for the pageActions slot. */
.pl-btn {
  padding: 6px 12px;
  border: 1px solid var(--fold-color-border);
  border-radius: var(--fold-radius-sm);
  background: var(--fold-color-surface-sunken);
  color: var(--fold-color-text);
  font-size: var(--fold-text-md);
  cursor: pointer;
}

.pl-close {
  margin-top: 8px;
}

/* The facts line in [pageSubtitle] — a reference, a plan, a count. The slot
   already carries size and colour; only the rhythm is the demo's. */
.pl-facts {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--fold-space-sm);
}

.pl-facts-ref {
  font-family: var(--fold-font-mono);
  white-space: nowrap;
}

.pl-facts-sep {
  color: var(--fold-color-text-faded);
}`],encapsulation:2})}export{_ as default};
