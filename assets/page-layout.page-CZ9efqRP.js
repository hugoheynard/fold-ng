import{s as d,a4 as L,Y as x,X as B,$ as A,a5 as z,a6 as F,A as I,ɵ as D,R as G,c as M,a7 as R,b as E,a as S,d as t,g as f,e,f as n,B as g,w as c,j as s,m as b,U as N,L as p,x as u,W as V,a8 as j,a9 as O,E as _,q as h,h as k,n as T,l as P,N as w,O as y,r as C}from"./index-DBdQCP3z.js";import{D as W}from"./playground.component-a7SK3IL-.js";import{K as q}from"./kind-badge.component-Cnm3tfEY.js";import{C as Q}from"./composed-of.component-D6m4fDAO.js";import{FoldPageSectionComponent as U}from"./page-section.component-SZ1M8hTH.js";import{F as Y}from"./avatar.component-cAz7NUej.js";import{FoldButtonComponent as H}from"./button.component-Pr_PsLhE.js";import{FoldCalloutComponent as K}from"./callout.component-Cx8ahnZ7.js";import{FoldSliderComponent as J}from"./slider.component-DGyzW0wk.js";import"./element-title.component-DTg3KAlB.js";import"./input-value-DCGlOvqF.js";const X=["liveLayout"],Z=()=>["icons"];function $(i,l){if(i&1){const a=_();t(0,"button",13),g("click",function(){w(a);const r=h();return y(r.showIcon.set(!r.showIcon()))}),e(1," icon "),n()}if(i&2){const a=h();p("is-on",a.showIcon())}}function ee(i,l){i&1&&(t(0,"p",14),e(1," Fluid "),t(2,"code"),e(3,"clamp()"),n(),e(4," defaults are live — switch the viewport (Fluid / Tablet / Desktop) and watch the gutter & gap bands scale. The band labels show the resolved px. Turn off "),t(5,"strong"),e(6,"fluid default"),n(),e(7," to pin explicit values. "),n())}function te(i,l){if(i&1){const a=_();t(0,"fold-slider",45),k("valueChange",function(r){w(a);const m=h();return C(m.gutter,r)||(m.gutter=r),y(r)}),n()}if(i&2){const a=h();b("min",0)("max",48)("step",4)("valueText",a.gutter()+"px"),T("value",a.gutter)}}function ne(i,l){if(i&1){const a=_();t(0,"fold-slider",46),k("valueChange",function(r){w(a);const m=h();return C(m.gap,r)||(m.gap=r),y(r)}),n()}if(i&2){const a=h();b("min",0)("max",64)("step",4)("valueText",a.gap()+"px"),T("value",a.gap)}}function oe(i,l){if(i&1&&(t(0,"div",18)(1,"span",47)(2,"span",48),e(3),n()(),t(4,"span",49)(5,"span",48),e(6),n()()()),i&2){const a=h();s(3),P("",a.measuredGutter(),"px"),s(3),P("",a.measuredGutter(),"px")}}function ae(i,l){i&1&&(t(0,"span",21),f(1,"fold-avatar",50),t(2,"span",51),e(3,"Acme Records "),t(4,"span",52),e(5,"· Workspace"),n()()())}function le(i,l){i&1&&f(0,"fold-badge",22)}function se(i,l){i&1&&(t(0,"p",4),e(1,"Your company subscription and payment methods."),n())}function ie(i,l){i&1&&(t(0,"button",23),e(1,"Export"),n())}function re(i,l){i&1&&(t(0,"fold-page-section",36)(1,"fold-card",53)(2,"p",25)(3,"strong"),e(4,"Bleed band"),n(),e(5," — spans the layout edge-to-edge. It cancels "),t(6,"code"),e(7,"--fold-page-gutter"),n(),e(8," exactly (the same token the page pads with), so it stays flush against the dashed guides as you drag the gutter slider. A darker surface makes the edge-to-edge reach unmistakable. "),n()()())}class v{headerMode=d("title");showIcon=d(!0);showBadge=d(!1);showDesc=d(!0);showActions=d(!0);showBleed=d(!0);showGap=d(!0);hideBands=d(!1);gutter=d(32);gap=d(32);fluid=d(!0);liveLayout=L("liveLayout",{read:x});measuredGutter=d(32);measuredGap=d(32);destroyRef=B(A);constructor(){z(()=>{this.fluid(),this.gutter(),this.gap(),this.measure()}),F(()=>{const l=this.liveLayout()?.nativeElement;if(!l||typeof ResizeObserver>"u")return;const a=new ResizeObserver(()=>this.measure());a.observe(l),this.destroyRef.onDestroy(()=>a.disconnect())})}measure(){const l=this.liveLayout()?.nativeElement,a=l?.ownerDocument?.defaultView;if(!l||!a)return;const o=a.getComputedStyle(l);this.measuredGutter.set(Math.round(parseFloat(o.paddingInlineStart)||0)),this.measuredGap.set(Math.round(parseFloat(o.rowGap)||0))}code=I(()=>{const l=[];if(this.headerMode()==="custom")l.push("<fold-page-layout>",'  <span pageTitle><fold-avatar name="Acme Records" size="sm" /> Acme Records</span>');else{const a=this.showIcon()?' icon="grid"':"";l.push(`<fold-page-layout${a} title="Billing">`)}return this.showBadge()&&l.push('  <fold-badge titleBadge content="Pro" variant="accent" />'),this.showDesc()&&l.push("  <p description>Your company subscription and payments.</p>"),this.showActions()&&l.push("  <button pageActions>Export</button>"),l.push('  <fold-page-section title="Payment methods">…</fold-page-section>'),this.showBleed()&&l.push("  <fold-page-section bleed>… edge-to-edge band …</fold-page-section>"),l.push('  <fold-page-section title="Invoices">…</fold-page-section>',"</fold-page-layout>"),l.join(`
`)});static ɵfac=function(a){return new(a||v)};static ɵcmp=D({type:v,selectors:[["gal-page-layout-page"]],viewQuery:function(a,o){a&1&&j(o.liveLayout,X,5,x),a&2&&O()},decls:151,vars:43,consts:[["liveLayout",""],["title","page-layout","icon","grid"],["titleBadge","","kind","component"],[3,"ids"],["description",""],["foldButton","","pageActions","","routerLink","/","emphasis","outline","intent","neutral","size","sm"],[3,"code"],["params","",1,"np-field"],[1,"gal-tag"],[1,"ss-seg"],["type","button",3,"click"],[1,"pl-toggles"],["type","button",1,"pl-chip",3,"is-on"],["type","button",1,"pl-chip",3,"click"],["params","",1,"pl-hint"],["params","","label","--fold-page-gutter",3,"min","max","step","valueText","value"],["params","","label","--fold-page-gap",3,"min","max","step","valueText","value"],[1,"pl-window-wrap"],["aria-hidden","true",1,"pl-ruler"],[1,"pl-window"],[1,"pl-live",3,"icon","title"],["pageTitle","",1,"pl-custom-title"],["titleBadge","","content","Pro","variant","accent","radius","pill"],["type","button","pageActions","",1,"pl-btn"],["title","Payment methods"],[1,"gal-body"],[1,"pl-rows"],[1,"pl-row"],["name","Visa","size","sm","square",""],[1,"pl-row-main"],[1,"pl-row-title"],[1,"pl-row-sub"],["content","Default","variant","success"],["type","button",1,"pl-btn"],["name","Mastercard","size","sm","square",""],["content","Backup","variant","neutral"],["bleed",""],["title","Usage this month"],[1,"pl-tall"],["title","Invoices"],[1,"pl-row-amount"],["content","Paid","variant","success"],["content","Due","variant","warning"],["variant","accent",1,"pl-close"],["foldButton","","actions","","routerLink","/","size","sm","emphasis","outline","intent","neutral"],["params","","label","--fold-page-gutter",3,"valueChange","min","max","step","valueText","value"],["params","","label","--fold-page-gap",3,"valueChange","min","max","step","valueText","value"],[1,"pl-gutter-band","pl-gutter-band-left"],[1,"pl-gutter-label"],[1,"pl-gutter-band","pl-gutter-band-right"],["name","Acme Records","size","sm"],[1,"pl-custom-title-text"],[1,"pl-custom-title-sub"],["surface","accent","radius","sm"]],template:function(a,o){a&1&&(t(0,"fold-page-layout",1),f(1,"gal-kind-badge",2)(2,"gal-composed-of",3),t(3,"p",4),e(4," The vertical scaffold every page wraps its content in: an optional "),t(5,"code"),e(6,"icon"),n(),e(7," + "),t(8,"code"),e(9,"title"),n(),e(10," header with "),t(11,"code"),e(12,"[description]"),n(),e(13," and "),t(14,"code"),e(15,"[pageActions]"),n(),e(16," slots, then a body that stacks its children on a steady rhythm. "),t(17,"strong"),e(18,"It owns the page gutter, not the width"),n(),e(19," — it fills whatever it is given, supplying the themed margins via one token, "),t(20,"code"),e(21,"--fold-page-gutter"),n(),e(22,". Narrowing a block to a readable measure is the content's job, never the page's. This very page is a "),t(23,"code"),e(24,"fold-page-layout"),n(),e(25,". "),n(),t(26,"a",5),e(27," See it on the home page "),n(),t(28,"dev-playground",6)(29,"div",7)(30,"span",8),e(31,"header"),n(),t(32,"div",9)(33,"button",10),g("click",function(){return o.headerMode.set("title")}),e(34," Component title "),n(),t(35,"button",10),g("click",function(){return o.headerMode.set("custom")}),e(36," custom title "),n()()(),t(37,"div",7)(38,"span",8),e(39,"slots"),n(),t(40,"div",11),c(41,$,2,2,"button",12),t(42,"button",13),g("click",function(){return o.showBadge.set(!o.showBadge())}),e(43," titleBadge "),n(),t(44,"button",13),g("click",function(){return o.showDesc.set(!o.showDesc())}),e(45," description "),n(),t(46,"button",13),g("click",function(){return o.showActions.set(!o.showActions())}),e(47," pageActions "),n(),t(48,"button",13),g("click",function(){return o.showBleed.set(!o.showBleed())}),e(49," bleed section "),n(),t(50,"button",13),g("click",function(){return o.showGap.set(!o.showGap())}),e(51," gap bands "),n(),t(52,"button",13),g("click",function(){return o.hideBands.set(!o.hideBands())}),e(53," hide bands "),n(),t(54,"button",13),g("click",function(){return o.fluid.set(!o.fluid())}),e(55," fluid default "),n()()(),c(56,ee,8,0,"p",14),c(57,te,1,5,"fold-slider",15),c(58,ne,1,5,"fold-slider",16),t(59,"div",17),c(60,oe,7,2,"div",18),t(61,"div",19)(62,"fold-page-layout",20,0),c(64,ae,6,0,"span",21),c(65,le,1,0,"fold-badge",22),c(66,se,2,0,"p",4),c(67,ie,2,0,"button",23),t(68,"fold-page-section",24)(69,"fold-card")(70,"p",25),e(71," The default method is charged on renewal. Add a backup so a declined card never interrupts service. "),n(),t(72,"div",26)(73,"div",27),f(74,"fold-avatar",28),t(75,"span",29)(76,"span",30),e(77,"Visa •••• 4242"),n(),t(78,"span",31),e(79,"Expires 08 / 27"),n()(),f(80,"fold-badge",32),t(81,"button",33),e(82,"Edit"),n()(),t(83,"div",27),f(84,"fold-avatar",34),t(85,"span",29)(86,"span",30),e(87,"Mastercard •••• 5556"),n(),t(88,"span",31),e(89,"Expires 03 / 26"),n()(),f(90,"fold-badge",35),t(91,"button",33),e(92,"Edit"),n()()()()(),c(93,re,9,0,"fold-page-section",36),t(94,"fold-page-section",37)(95,"fold-card")(96,"p",25),e(97," A deliberately tall section so the window scrolls — the gutter bands stay pinned to the frame while the gap bands scroll with the content, and the header stays put above. "),n(),t(98,"div",38),e(99,"Scroll region"),n()()(),t(100,"fold-page-section",39)(101,"fold-card")(102,"p",25),e(103," Back in the gutter. The body keeps its steady vertical rhythm — the "),t(104,"code"),e(105,"--fold-page-gap"),n(),e(106," band above — at any width. "),n(),t(107,"div",26)(108,"div",27)(109,"span",29)(110,"span",30),e(111,"March 2026"),n(),t(112,"span",31),e(113,"INV-2026-0312"),n()(),t(114,"span",40),e(115,"€49.00"),n(),f(116,"fold-badge",41),t(117,"button",33),e(118,"PDF"),n()(),t(119,"div",27)(120,"span",29)(121,"span",30),e(122,"February 2026"),n(),t(123,"span",31),e(124,"INV-2026-0212"),n()(),t(125,"span",40),e(126,"€49.00"),n(),f(127,"fold-badge",41),t(128,"button",33),e(129,"PDF"),n()(),t(130,"div",27)(131,"span",29)(132,"span",30),e(133,"January 2026"),n(),t(134,"span",31),e(135,"INV-2026-0112"),n()(),t(136,"span",40),e(137,"€49.00"),n(),f(138,"fold-badge",42),t(139,"button",33),e(140,"Pay"),n()()()()()()()()(),t(141,"fold-callout",43),e(142," The best example of "),t(143,"code"),e(144,"fold-page-layout"),n(),e(145," in the wild is the landing page — a full-bleed hero band and an "),t(146,"code"),e(147,"aside-layout"),n(),e(148," of cards below, all filling the page. "),t(149,"a",44),e(150," Open the home page "),n()()()),a&2&&(s(2),b("ids",N(42,Z)),s(26),b("code",o.code()),s(5),p("is-on",o.headerMode()==="title"),s(2),p("is-on",o.headerMode()==="custom"),s(6),u(o.headerMode()==="title"?41:-1),s(),p("is-on",o.showBadge()),s(2),p("is-on",o.showDesc()),s(2),p("is-on",o.showActions()),s(2),p("is-on",o.showBleed()),s(2),p("is-on",o.showGap()),s(2),p("is-on",o.hideBands()),s(2),p("is-on",o.fluid()),s(2),u(o.fluid()?56:-1),s(),u(o.fluid()?-1:57),s(),u(o.fluid()?-1:58),s(),V("--fold-page-gutter",o.fluid()?null:o.gutter(),"px")("--fold-page-gap",o.fluid()?null:o.gap(),"px")("--pl-gap-num",o.measuredGap())("--pl-gap-num-first",o.measuredGap()+16),s(),u(o.hideBands()?-1:60),s(2),p("pl-show-gap",o.showGap()&&!o.hideBands()),b("icon",o.headerMode()==="title"&&o.showIcon()?"grid":void 0)("title",o.headerMode()==="title"?"Billing":void 0),s(2),u(o.headerMode()==="custom"?64:-1),s(),u(o.showBadge()?65:-1),s(),u(o.showDesc()?66:-1),s(),u(o.showActions()?67:-1),s(26),u(o.showBleed()?93:-1))},dependencies:[G,q,Q,M,R,U,E,Y,S,H,K,J,W],styles:[`@charset "UTF-8";
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
  font-family: var(--fold-font-mono, ui-monospace, monospace);
  font-size: 10px;
  font-weight: 700;
  line-height: 1.5;
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
  font-family: var(--fold-font-mono, ui-monospace, monospace);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
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
  font-size: 13px;
  font-weight: 600;
  color: var(--fold-color-text);
}

.pl-row-sub {
  font-size: 11px;
  color: var(--fold-color-text-muted);
}

.pl-row-amount {
  font-variant-numeric: tabular-nums;
  font-weight: 600;
  font-size: 13px;
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
  font-size: 12px;
  letter-spacing: 0.08em;
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
  font-weight: 700;
  color: var(--fold-color-text);
}

.pl-custom-title-sub {
  font-weight: 500;
  font-size: var(--fold-text-sm);
  color: var(--fold-color-text-muted);
}

/* Inline hint shown in the params column while fluid mode is on. */
.pl-hint {
  margin: 0;
  font-size: 12px;
  line-height: 1.5;
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
}`],encapsulation:2})}export{v as default};
