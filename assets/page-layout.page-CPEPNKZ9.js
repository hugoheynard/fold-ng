import{s as d,a4 as L,Y as x,X as B,$ as A,a5 as E,a6 as S,A as z,ɵ as F,R as I,c as D,a7 as M,b as G,a as R,d as t,g as f,e,f as a,B as c,w as u,j as s,m,U as N,L as p,x as g,W as V,a8 as j,a9 as O,E as w,q as h,h as k,n as T,l as P,N as _,O as y,r as C}from"./index-4XDcEdxi.js";import{D as W}from"./playground.component-5mfhCB_p.js";import{K as q}from"./kind-badge.component-C7shwPeb.js";import{C as Q}from"./composed-of.component-BxxjzHf6.js";import{FoldPageSectionComponent as U}from"./page-section.component-BGYVedO_.js";import{F as Y}from"./avatar.component-DQxXdNk-.js";import{FoldBreadcrumbComponent as H}from"./breadcrumb.component-DUaaWMBh.js";import{FoldButtonComponent as K}from"./button.component-By5fp2tH.js";import{FoldCalloutComponent as J}from"./callout.component-BvwSlnlv.js";import{FoldSliderComponent as X}from"./slider.component-C53anuqP.js";import"./element-title.component-DiHJ8OTs.js";import"./input-value-DCGlOvqF.js";const Z=["liveLayout"],$=()=>["icons"];function ee(i,l){if(i&1){const o=w();t(0,"button",13),c("click",function(){_(o);const r=h();return y(r.showIcon.set(!r.showIcon()))}),e(1," icon "),a()}if(i&2){const o=h();p("is-on",o.showIcon())}}function te(i,l){i&1&&(t(0,"p",14),e(1," Fluid "),t(2,"code"),e(3,"clamp()"),a(),e(4," defaults are live — switch the viewport (Fluid / Tablet / Desktop) and watch the gutter & gap bands scale. The band labels show the resolved px. Turn off "),t(5,"strong"),e(6,"fluid default"),a(),e(7," to pin explicit values. "),a())}function ae(i,l){if(i&1){const o=w();t(0,"fold-slider",47),k("valueChange",function(r){_(o);const b=h();return C(b.gutter,r)||(b.gutter=r),y(r)}),a()}if(i&2){const o=h();m("min",0)("max",48)("step",4)("valueText",o.gutter()+"px"),T("value",o.gutter)}}function ne(i,l){if(i&1){const o=w();t(0,"fold-slider",48),k("valueChange",function(r){_(o);const b=h();return C(b.gap,r)||(b.gap=r),y(r)}),a()}if(i&2){const o=h();m("min",0)("max",64)("step",4)("valueText",o.gap()+"px"),T("value",o.gap)}}function oe(i,l){if(i&1&&(t(0,"div",18)(1,"span",49)(2,"span",50),e(3),a()(),t(4,"span",51)(5,"span",50),e(6),a()()()),i&2){const o=h();s(3),P("",o.measuredGutter(),"px"),s(3),P("",o.measuredGutter(),"px")}}function le(i,l){i&1&&(t(0,"span",21),f(1,"fold-avatar",52),t(2,"span",53),e(3,"Acme Records "),t(4,"span",54),e(5,"· Workspace"),a()()())}function se(i,l){if(i&1&&f(0,"fold-breadcrumb",22),i&2){const o=h();m("currentPage",!1)("items",o.trail)}}function ie(i,l){i&1&&f(0,"fold-badge",23)}function re(i,l){i&1&&(t(0,"span",24)(1,"span",55),e(2,"ACME-4821"),a(),t(3,"span",56),e(4,"·"),a(),t(5,"span"),e(6,"Annual plan"),a(),t(7,"span",56),e(8,"·"),a(),t(9,"span"),e(10,"12 seats"),a()())}function de(i,l){i&1&&(t(0,"p",4),e(1,"Your company subscription and payment methods."),a())}function pe(i,l){i&1&&(t(0,"button",25),e(1,"Export"),a())}function ce(i,l){i&1&&(t(0,"fold-page-section",38)(1,"fold-card",57)(2,"p",27)(3,"strong"),e(4,"Bleed band"),a(),e(5," — spans the layout edge-to-edge. It cancels "),t(6,"code"),e(7,"--fold-page-gutter"),a(),e(8," exactly (the same token the page pads with), so it stays flush against the dashed guides as you drag the gutter slider. A darker surface makes the edge-to-edge reach unmistakable. "),a()()())}class v{headerMode=d("title");showIcon=d(!0);showEyebrow=d(!1);showBadge=d(!1);showSubtitle=d(!1);showDesc=d(!0);separator=d(!1);showActions=d(!0);trail=[{label:"Workspace",routerLink:"/home"},{label:"Settings",routerLink:"/menu"}];showBleed=d(!0);showGap=d(!0);hideBands=d(!1);gutter=d(32);gap=d(32);fluid=d(!0);liveLayout=L("liveLayout",{read:x});measuredGutter=d(32);measuredGap=d(32);destroyRef=B(A);constructor(){E(()=>{this.fluid(),this.gutter(),this.gap(),this.measure()}),S(()=>{const l=this.liveLayout()?.nativeElement;if(!l||typeof ResizeObserver>"u")return;const o=new ResizeObserver(()=>this.measure());o.observe(l),this.destroyRef.onDestroy(()=>o.disconnect())})}measure(){const l=this.liveLayout()?.nativeElement,o=l?.ownerDocument?.defaultView;if(!l||!o)return;const n=o.getComputedStyle(l);this.measuredGutter.set(Math.round(parseFloat(n.paddingInlineStart)||0)),this.measuredGap.set(Math.round(parseFloat(n.rowGap)||0))}code=z(()=>{const l=[];if(this.headerMode()==="custom")l.push("<fold-page-layout>",'  <span pageTitle><fold-avatar name="Acme Records" size="sm" /> Acme Records</span>');else{const o=this.showIcon()?' icon="grid"':"",n=this.separator()?" separator":"";l.push(`<fold-page-layout${o} title="Billing"${n}>`)}return this.showEyebrow()&&l.push('  <fold-breadcrumb pageEyebrow [currentPage]="false" [items]="trail" />'),this.showBadge()&&l.push('  <fold-badge titleBadge content="Pro" variant="accent" />'),this.showSubtitle()&&l.push("  <span pageSubtitle>ACME-4821 · Annual plan · 12 seats</span>"),this.showDesc()&&l.push("  <p description>Your company subscription and payments.</p>"),this.showActions()&&l.push("  <button pageActions>Export</button>"),l.push('  <fold-page-section title="Payment methods">…</fold-page-section>'),this.showBleed()&&l.push("  <fold-page-section bleed>… edge-to-edge band …</fold-page-section>"),l.push('  <fold-page-section title="Invoices">…</fold-page-section>',"</fold-page-layout>"),l.join(`
`)});static ɵfac=function(o){return new(o||v)};static ɵcmp=F({type:v,selectors:[["gal-page-layout-page"]],viewQuery:function(o,n){o&1&&j(n.liveLayout,Z,5,x),o&2&&O()},decls:168,vars:52,consts:[["liveLayout",""],["title","page-layout","icon","grid"],["titleBadge","","kind","component"],[3,"ids"],["description",""],["foldButton","","pageActions","","routerLink","/","emphasis","outline","intent","neutral","size","sm"],[3,"code"],["params","",1,"np-field"],[1,"gal-tag"],[1,"ss-seg"],["type","button",3,"click"],[1,"pl-toggles"],["type","button",1,"pl-chip",3,"is-on"],["type","button",1,"pl-chip",3,"click"],["params","",1,"pl-hint"],["params","","label","--fold-page-gutter",3,"min","max","step","valueText","value"],["params","","label","--fold-page-gap",3,"min","max","step","valueText","value"],[1,"pl-window-wrap"],["aria-hidden","true",1,"pl-ruler"],[1,"pl-window"],[1,"pl-live",3,"icon","title","separator"],["pageTitle","",1,"pl-custom-title"],["pageEyebrow","","ariaLabel","Billing trail",3,"currentPage","items"],["titleBadge","","content","Pro","variant","accent","radius","pill"],["pageSubtitle","",1,"pl-facts"],["type","button","pageActions","",1,"pl-btn"],["title","Payment methods"],[1,"gal-body"],[1,"pl-rows"],[1,"pl-row"],["name","Visa","size","sm","square",""],[1,"pl-row-main"],[1,"pl-row-title"],[1,"pl-row-sub"],["content","Default","variant","success"],["type","button",1,"pl-btn"],["name","Mastercard","size","sm","square",""],["content","Backup","variant","neutral"],["bleed",""],["title","Usage this month"],[1,"pl-tall"],["title","Invoices"],[1,"pl-row-amount"],["content","Paid","variant","success"],["content","Due","variant","warning"],["variant","accent",1,"pl-close"],["foldButton","","actions","","routerLink","/","size","sm","emphasis","outline","intent","neutral"],["params","","label","--fold-page-gutter",3,"valueChange","min","max","step","valueText","value"],["params","","label","--fold-page-gap",3,"valueChange","min","max","step","valueText","value"],[1,"pl-gutter-band","pl-gutter-band-left"],[1,"pl-gutter-label"],[1,"pl-gutter-band","pl-gutter-band-right"],["name","Acme Records","size","sm"],[1,"pl-custom-title-text"],[1,"pl-custom-title-sub"],[1,"pl-facts-ref"],["aria-hidden","true",1,"pl-facts-sep"],["surface","accent","radius","sm"]],template:function(o,n){o&1&&(t(0,"fold-page-layout",1),f(1,"gal-kind-badge",2)(2,"gal-composed-of",3),t(3,"p",4),e(4," The vertical scaffold every page wraps its content in: an optional "),t(5,"code"),e(6,"icon"),a(),e(7," + "),t(8,"code"),e(9,"title"),a(),e(10," header with "),t(11,"code"),e(12,"[pageEyebrow]"),a(),e(13,", "),t(14,"code"),e(15,"[pageSubtitle]"),a(),e(16,", "),t(17,"code"),e(18,"[description]"),a(),e(19," and "),t(20,"code"),e(21,"[pageActions]"),a(),e(22," slots, then a body that stacks its children on a steady rhythm. The header can close on a hairline ("),t(23,"code"),e(24,"separator"),a(),e(25,") when the body runs flush against it. "),t(26,"strong"),e(27,"It owns the page gutter, not the width"),a(),e(28," — it fills whatever it is given, supplying the themed margins via one token, "),t(29,"code"),e(30,"--fold-page-gutter"),a(),e(31,". Narrowing a block to a readable measure is the content's job, never the page's. This very page is a "),t(32,"code"),e(33,"fold-page-layout"),a(),e(34,". "),a(),t(35,"a",5),e(36," See it on the home page "),a(),t(37,"dev-playground",6)(38,"div",7)(39,"span",8),e(40,"header"),a(),t(41,"div",9)(42,"button",10),c("click",function(){return n.headerMode.set("title")}),e(43," Component title "),a(),t(44,"button",10),c("click",function(){return n.headerMode.set("custom")}),e(45," custom title "),a()()(),t(46,"div",7)(47,"span",8),e(48,"slots"),a(),t(49,"div",11),u(50,ee,2,2,"button",12),t(51,"button",13),c("click",function(){return n.showEyebrow.set(!n.showEyebrow())}),e(52," pageEyebrow "),a(),t(53,"button",13),c("click",function(){return n.showBadge.set(!n.showBadge())}),e(54," titleBadge "),a(),t(55,"button",13),c("click",function(){return n.showSubtitle.set(!n.showSubtitle())}),e(56," pageSubtitle "),a(),t(57,"button",13),c("click",function(){return n.showDesc.set(!n.showDesc())}),e(58," description "),a(),t(59,"button",13),c("click",function(){return n.separator.set(!n.separator())}),e(60," separator "),a(),t(61,"button",13),c("click",function(){return n.showActions.set(!n.showActions())}),e(62," pageActions "),a(),t(63,"button",13),c("click",function(){return n.showBleed.set(!n.showBleed())}),e(64," bleed section "),a(),t(65,"button",13),c("click",function(){return n.showGap.set(!n.showGap())}),e(66," gap bands "),a(),t(67,"button",13),c("click",function(){return n.hideBands.set(!n.hideBands())}),e(68," hide bands "),a(),t(69,"button",13),c("click",function(){return n.fluid.set(!n.fluid())}),e(70," fluid default "),a()()(),u(71,te,8,0,"p",14),u(72,ae,1,5,"fold-slider",15),u(73,ne,1,5,"fold-slider",16),t(74,"div",17),u(75,oe,7,2,"div",18),t(76,"div",19)(77,"fold-page-layout",20,0),u(79,le,6,0,"span",21),u(80,se,1,2,"fold-breadcrumb",22),u(81,ie,1,0,"fold-badge",23),u(82,re,11,0,"span",24),u(83,de,2,0,"p",4),u(84,pe,2,0,"button",25),t(85,"fold-page-section",26)(86,"fold-card")(87,"p",27),e(88," The default method is charged on renewal. Add a backup so a declined card never interrupts service. "),a(),t(89,"div",28)(90,"div",29),f(91,"fold-avatar",30),t(92,"span",31)(93,"span",32),e(94,"Visa •••• 4242"),a(),t(95,"span",33),e(96,"Expires 08 / 27"),a()(),f(97,"fold-badge",34),t(98,"button",35),e(99,"Edit"),a()(),t(100,"div",29),f(101,"fold-avatar",36),t(102,"span",31)(103,"span",32),e(104,"Mastercard •••• 5556"),a(),t(105,"span",33),e(106,"Expires 03 / 26"),a()(),f(107,"fold-badge",37),t(108,"button",35),e(109,"Edit"),a()()()()(),u(110,ce,9,0,"fold-page-section",38),t(111,"fold-page-section",39)(112,"fold-card")(113,"p",27),e(114," A deliberately tall section so the window scrolls — the gutter bands stay pinned to the frame while the gap bands scroll with the content, and the header stays put above. "),a(),t(115,"div",40),e(116,"Scroll region"),a()()(),t(117,"fold-page-section",41)(118,"fold-card")(119,"p",27),e(120," Back in the gutter. The body keeps its steady vertical rhythm — the "),t(121,"code"),e(122,"--fold-page-gap"),a(),e(123," band above — at any width. "),a(),t(124,"div",28)(125,"div",29)(126,"span",31)(127,"span",32),e(128,"March 2026"),a(),t(129,"span",33),e(130,"INV-2026-0312"),a()(),t(131,"span",42),e(132,"€49.00"),a(),f(133,"fold-badge",43),t(134,"button",35),e(135,"PDF"),a()(),t(136,"div",29)(137,"span",31)(138,"span",32),e(139,"February 2026"),a(),t(140,"span",33),e(141,"INV-2026-0212"),a()(),t(142,"span",42),e(143,"€49.00"),a(),f(144,"fold-badge",43),t(145,"button",35),e(146,"PDF"),a()(),t(147,"div",29)(148,"span",31)(149,"span",32),e(150,"January 2026"),a(),t(151,"span",33),e(152,"INV-2026-0112"),a()(),t(153,"span",42),e(154,"€49.00"),a(),f(155,"fold-badge",44),t(156,"button",35),e(157,"Pay"),a()()()()()()()()(),t(158,"fold-callout",45),e(159," The best example of "),t(160,"code"),e(161,"fold-page-layout"),a(),e(162," in the wild is the landing page — a full-bleed hero band and an "),t(163,"code"),e(164,"aside-layout"),a(),e(165," of cards below, all filling the page. "),t(166,"a",46),e(167," Open the home page "),a()()()),o&2&&(s(2),m("ids",N(51,$)),s(35),m("code",n.code()),s(5),p("is-on",n.headerMode()==="title"),s(2),p("is-on",n.headerMode()==="custom"),s(6),g(n.headerMode()==="title"?50:-1),s(),p("is-on",n.showEyebrow()),s(2),p("is-on",n.showBadge()),s(2),p("is-on",n.showSubtitle()),s(2),p("is-on",n.showDesc()),s(2),p("is-on",n.separator()),s(2),p("is-on",n.showActions()),s(2),p("is-on",n.showBleed()),s(2),p("is-on",n.showGap()),s(2),p("is-on",n.hideBands()),s(2),p("is-on",n.fluid()),s(2),g(n.fluid()?71:-1),s(),g(n.fluid()?-1:72),s(),g(n.fluid()?-1:73),s(),V("--fold-page-gutter",n.fluid()?null:n.gutter(),"px")("--fold-page-gap",n.fluid()?null:n.gap(),"px")("--pl-gap-num",n.measuredGap())("--pl-gap-num-first",n.measuredGap()+16),s(),g(n.hideBands()?-1:75),s(2),p("pl-show-gap",n.showGap()&&!n.hideBands()),m("icon",n.headerMode()==="title"&&n.showIcon()?"grid":void 0)("title",n.headerMode()==="title"?"Billing":void 0)("separator",n.separator()),s(2),g(n.headerMode()==="custom"?79:-1),s(),g(n.showEyebrow()?80:-1),s(),g(n.showBadge()?81:-1),s(),g(n.showSubtitle()?82:-1),s(),g(n.showDesc()?83:-1),s(),g(n.showActions()?84:-1),s(26),g(n.showBleed()?110:-1))},dependencies:[I,q,Q,D,M,U,G,Y,R,H,K,J,X,W],styles:[`@charset "UTF-8";
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
}`],encapsulation:2})}export{v as default};
