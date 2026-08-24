import{s as d,a4 as L,Y as x,X as B,$ as A,a5 as E,a6 as z,A as F,ɵ as I,R as D,c as G,a7 as M,b as R,a as S,d as t,g as f,e,f as n,B as g,w as c,j as i,m,U as N,L as p,x as u,W as V,a8 as j,a9 as O,E as w,q as h,h as k,n as T,l as P,N as _,O as y,r as C}from"./index-BnABeB3j.js";import{D as W}from"./playground.component-Ck-Z4EH8.js";import{K as q}from"./kind-badge.component-Dnw2ldHr.js";import{C as Q}from"./composed-of.component-BlUnicCP.js";import{FoldPageSectionComponent as U}from"./page-section.component-CAHfisja.js";import{F as Y}from"./avatar.component-B1ubO6US.js";import{FoldBreadcrumbComponent as H}from"./breadcrumb.component-ClT6hyzt.js";import{FoldButtonComponent as K}from"./button.component-DEWvkKji.js";import{FoldCalloutComponent as J}from"./callout.component-B_pgDEeL.js";import{FoldSliderComponent as X}from"./slider.component-BmwkWYdQ.js";import"./element-title.component-DZUyqIQy.js";import"./input-value-DCGlOvqF.js";const Z=["liveLayout"],$=()=>["icons"];function ee(s,l){if(s&1){const a=w();t(0,"button",13),g("click",function(){_(a);const r=h();return y(r.showIcon.set(!r.showIcon()))}),e(1," icon "),n()}if(s&2){const a=h();p("is-on",a.showIcon())}}function te(s,l){s&1&&(t(0,"p",14),e(1," Fluid "),t(2,"code"),e(3,"clamp()"),n(),e(4," defaults are live — switch the viewport (Fluid / Tablet / Desktop) and watch the gutter & gap bands scale. The band labels show the resolved px. Turn off "),t(5,"strong"),e(6,"fluid default"),n(),e(7," to pin explicit values. "),n())}function ne(s,l){if(s&1){const a=w();t(0,"fold-slider",46),k("valueChange",function(r){_(a);const b=h();return C(b.gutter,r)||(b.gutter=r),y(r)}),n()}if(s&2){const a=h();m("min",0)("max",48)("step",4)("valueText",a.gutter()+"px"),T("value",a.gutter)}}function oe(s,l){if(s&1){const a=w();t(0,"fold-slider",47),k("valueChange",function(r){_(a);const b=h();return C(b.gap,r)||(b.gap=r),y(r)}),n()}if(s&2){const a=h();m("min",0)("max",64)("step",4)("valueText",a.gap()+"px"),T("value",a.gap)}}function ae(s,l){if(s&1&&(t(0,"div",18)(1,"span",48)(2,"span",49),e(3),n()(),t(4,"span",50)(5,"span",49),e(6),n()()()),s&2){const a=h();i(3),P("",a.measuredGutter(),"px"),i(3),P("",a.measuredGutter(),"px")}}function le(s,l){s&1&&(t(0,"span",21),f(1,"fold-avatar",51),t(2,"span",52),e(3,"Acme Records "),t(4,"span",53),e(5,"· Workspace"),n()()())}function ie(s,l){if(s&1&&f(0,"fold-breadcrumb",22),s&2){const a=h();m("currentPage",!1)("items",a.trail)}}function se(s,l){s&1&&f(0,"fold-badge",23)}function re(s,l){s&1&&(t(0,"p",4),e(1,"Your company subscription and payment methods."),n())}function de(s,l){s&1&&(t(0,"button",24),e(1,"Export"),n())}function pe(s,l){s&1&&(t(0,"fold-page-section",37)(1,"fold-card",54)(2,"p",26)(3,"strong"),e(4,"Bleed band"),n(),e(5," — spans the layout edge-to-edge. It cancels "),t(6,"code"),e(7,"--fold-page-gutter"),n(),e(8," exactly (the same token the page pads with), so it stays flush against the dashed guides as you drag the gutter slider. A darker surface makes the edge-to-edge reach unmistakable. "),n()()())}class v{headerMode=d("title");showIcon=d(!0);showEyebrow=d(!1);showBadge=d(!1);showDesc=d(!0);showActions=d(!0);trail=[{label:"Workspace",routerLink:"/home"},{label:"Settings",routerLink:"/menu"}];showBleed=d(!0);showGap=d(!0);hideBands=d(!1);gutter=d(32);gap=d(32);fluid=d(!0);liveLayout=L("liveLayout",{read:x});measuredGutter=d(32);measuredGap=d(32);destroyRef=B(A);constructor(){E(()=>{this.fluid(),this.gutter(),this.gap(),this.measure()}),z(()=>{const l=this.liveLayout()?.nativeElement;if(!l||typeof ResizeObserver>"u")return;const a=new ResizeObserver(()=>this.measure());a.observe(l),this.destroyRef.onDestroy(()=>a.disconnect())})}measure(){const l=this.liveLayout()?.nativeElement,a=l?.ownerDocument?.defaultView;if(!l||!a)return;const o=a.getComputedStyle(l);this.measuredGutter.set(Math.round(parseFloat(o.paddingInlineStart)||0)),this.measuredGap.set(Math.round(parseFloat(o.rowGap)||0))}code=F(()=>{const l=[];if(this.headerMode()==="custom")l.push("<fold-page-layout>",'  <span pageTitle><fold-avatar name="Acme Records" size="sm" /> Acme Records</span>');else{const a=this.showIcon()?' icon="grid"':"";l.push(`<fold-page-layout${a} title="Billing">`)}return this.showEyebrow()&&l.push('  <fold-breadcrumb pageEyebrow [currentPage]="false" [items]="trail" />'),this.showBadge()&&l.push('  <fold-badge titleBadge content="Pro" variant="accent" />'),this.showDesc()&&l.push("  <p description>Your company subscription and payments.</p>"),this.showActions()&&l.push("  <button pageActions>Export</button>"),l.push('  <fold-page-section title="Payment methods">…</fold-page-section>'),this.showBleed()&&l.push("  <fold-page-section bleed>… edge-to-edge band …</fold-page-section>"),l.push('  <fold-page-section title="Invoices">…</fold-page-section>',"</fold-page-layout>"),l.join(`
`)});static ɵfac=function(a){return new(a||v)};static ɵcmp=I({type:v,selectors:[["gal-page-layout-page"]],viewQuery:function(a,o){a&1&&j(o.liveLayout,Z,5,x),a&2&&O()},decls:157,vars:46,consts:[["liveLayout",""],["title","page-layout","icon","grid"],["titleBadge","","kind","component"],[3,"ids"],["description",""],["foldButton","","pageActions","","routerLink","/","emphasis","outline","intent","neutral","size","sm"],[3,"code"],["params","",1,"np-field"],[1,"gal-tag"],[1,"ss-seg"],["type","button",3,"click"],[1,"pl-toggles"],["type","button",1,"pl-chip",3,"is-on"],["type","button",1,"pl-chip",3,"click"],["params","",1,"pl-hint"],["params","","label","--fold-page-gutter",3,"min","max","step","valueText","value"],["params","","label","--fold-page-gap",3,"min","max","step","valueText","value"],[1,"pl-window-wrap"],["aria-hidden","true",1,"pl-ruler"],[1,"pl-window"],[1,"pl-live",3,"icon","title"],["pageTitle","",1,"pl-custom-title"],["pageEyebrow","","ariaLabel","Billing trail",3,"currentPage","items"],["titleBadge","","content","Pro","variant","accent","radius","pill"],["type","button","pageActions","",1,"pl-btn"],["title","Payment methods"],[1,"gal-body"],[1,"pl-rows"],[1,"pl-row"],["name","Visa","size","sm","square",""],[1,"pl-row-main"],[1,"pl-row-title"],[1,"pl-row-sub"],["content","Default","variant","success"],["type","button",1,"pl-btn"],["name","Mastercard","size","sm","square",""],["content","Backup","variant","neutral"],["bleed",""],["title","Usage this month"],[1,"pl-tall"],["title","Invoices"],[1,"pl-row-amount"],["content","Paid","variant","success"],["content","Due","variant","warning"],["variant","accent",1,"pl-close"],["foldButton","","actions","","routerLink","/","size","sm","emphasis","outline","intent","neutral"],["params","","label","--fold-page-gutter",3,"valueChange","min","max","step","valueText","value"],["params","","label","--fold-page-gap",3,"valueChange","min","max","step","valueText","value"],[1,"pl-gutter-band","pl-gutter-band-left"],[1,"pl-gutter-label"],[1,"pl-gutter-band","pl-gutter-band-right"],["name","Acme Records","size","sm"],[1,"pl-custom-title-text"],[1,"pl-custom-title-sub"],["surface","accent","radius","sm"]],template:function(a,o){a&1&&(t(0,"fold-page-layout",1),f(1,"gal-kind-badge",2)(2,"gal-composed-of",3),t(3,"p",4),e(4," The vertical scaffold every page wraps its content in: an optional "),t(5,"code"),e(6,"icon"),n(),e(7," + "),t(8,"code"),e(9,"title"),n(),e(10," header with "),t(11,"code"),e(12,"[pageEyebrow]"),n(),e(13,", "),t(14,"code"),e(15,"[description]"),n(),e(16," and "),t(17,"code"),e(18,"[pageActions]"),n(),e(19," slots, then a body that stacks its children on a steady rhythm. "),t(20,"strong"),e(21,"It owns the page gutter, not the width"),n(),e(22," — it fills whatever it is given, supplying the themed margins via one token, "),t(23,"code"),e(24,"--fold-page-gutter"),n(),e(25,". Narrowing a block to a readable measure is the content's job, never the page's. This very page is a "),t(26,"code"),e(27,"fold-page-layout"),n(),e(28,". "),n(),t(29,"a",5),e(30," See it on the home page "),n(),t(31,"dev-playground",6)(32,"div",7)(33,"span",8),e(34,"header"),n(),t(35,"div",9)(36,"button",10),g("click",function(){return o.headerMode.set("title")}),e(37," Component title "),n(),t(38,"button",10),g("click",function(){return o.headerMode.set("custom")}),e(39," custom title "),n()()(),t(40,"div",7)(41,"span",8),e(42,"slots"),n(),t(43,"div",11),c(44,ee,2,2,"button",12),t(45,"button",13),g("click",function(){return o.showEyebrow.set(!o.showEyebrow())}),e(46," pageEyebrow "),n(),t(47,"button",13),g("click",function(){return o.showBadge.set(!o.showBadge())}),e(48," titleBadge "),n(),t(49,"button",13),g("click",function(){return o.showDesc.set(!o.showDesc())}),e(50," description "),n(),t(51,"button",13),g("click",function(){return o.showActions.set(!o.showActions())}),e(52," pageActions "),n(),t(53,"button",13),g("click",function(){return o.showBleed.set(!o.showBleed())}),e(54," bleed section "),n(),t(55,"button",13),g("click",function(){return o.showGap.set(!o.showGap())}),e(56," gap bands "),n(),t(57,"button",13),g("click",function(){return o.hideBands.set(!o.hideBands())}),e(58," hide bands "),n(),t(59,"button",13),g("click",function(){return o.fluid.set(!o.fluid())}),e(60," fluid default "),n()()(),c(61,te,8,0,"p",14),c(62,ne,1,5,"fold-slider",15),c(63,oe,1,5,"fold-slider",16),t(64,"div",17),c(65,ae,7,2,"div",18),t(66,"div",19)(67,"fold-page-layout",20,0),c(69,le,6,0,"span",21),c(70,ie,1,2,"fold-breadcrumb",22),c(71,se,1,0,"fold-badge",23),c(72,re,2,0,"p",4),c(73,de,2,0,"button",24),t(74,"fold-page-section",25)(75,"fold-card")(76,"p",26),e(77," The default method is charged on renewal. Add a backup so a declined card never interrupts service. "),n(),t(78,"div",27)(79,"div",28),f(80,"fold-avatar",29),t(81,"span",30)(82,"span",31),e(83,"Visa •••• 4242"),n(),t(84,"span",32),e(85,"Expires 08 / 27"),n()(),f(86,"fold-badge",33),t(87,"button",34),e(88,"Edit"),n()(),t(89,"div",28),f(90,"fold-avatar",35),t(91,"span",30)(92,"span",31),e(93,"Mastercard •••• 5556"),n(),t(94,"span",32),e(95,"Expires 03 / 26"),n()(),f(96,"fold-badge",36),t(97,"button",34),e(98,"Edit"),n()()()()(),c(99,pe,9,0,"fold-page-section",37),t(100,"fold-page-section",38)(101,"fold-card")(102,"p",26),e(103," A deliberately tall section so the window scrolls — the gutter bands stay pinned to the frame while the gap bands scroll with the content, and the header stays put above. "),n(),t(104,"div",39),e(105,"Scroll region"),n()()(),t(106,"fold-page-section",40)(107,"fold-card")(108,"p",26),e(109," Back in the gutter. The body keeps its steady vertical rhythm — the "),t(110,"code"),e(111,"--fold-page-gap"),n(),e(112," band above — at any width. "),n(),t(113,"div",27)(114,"div",28)(115,"span",30)(116,"span",31),e(117,"March 2026"),n(),t(118,"span",32),e(119,"INV-2026-0312"),n()(),t(120,"span",41),e(121,"€49.00"),n(),f(122,"fold-badge",42),t(123,"button",34),e(124,"PDF"),n()(),t(125,"div",28)(126,"span",30)(127,"span",31),e(128,"February 2026"),n(),t(129,"span",32),e(130,"INV-2026-0212"),n()(),t(131,"span",41),e(132,"€49.00"),n(),f(133,"fold-badge",42),t(134,"button",34),e(135,"PDF"),n()(),t(136,"div",28)(137,"span",30)(138,"span",31),e(139,"January 2026"),n(),t(140,"span",32),e(141,"INV-2026-0112"),n()(),t(142,"span",41),e(143,"€49.00"),n(),f(144,"fold-badge",43),t(145,"button",34),e(146,"Pay"),n()()()()()()()()(),t(147,"fold-callout",44),e(148," The best example of "),t(149,"code"),e(150,"fold-page-layout"),n(),e(151," in the wild is the landing page — a full-bleed hero band and an "),t(152,"code"),e(153,"aside-layout"),n(),e(154," of cards below, all filling the page. "),t(155,"a",45),e(156," Open the home page "),n()()()),a&2&&(i(2),m("ids",N(45,$)),i(29),m("code",o.code()),i(5),p("is-on",o.headerMode()==="title"),i(2),p("is-on",o.headerMode()==="custom"),i(6),u(o.headerMode()==="title"?44:-1),i(),p("is-on",o.showEyebrow()),i(2),p("is-on",o.showBadge()),i(2),p("is-on",o.showDesc()),i(2),p("is-on",o.showActions()),i(2),p("is-on",o.showBleed()),i(2),p("is-on",o.showGap()),i(2),p("is-on",o.hideBands()),i(2),p("is-on",o.fluid()),i(2),u(o.fluid()?61:-1),i(),u(o.fluid()?-1:62),i(),u(o.fluid()?-1:63),i(),V("--fold-page-gutter",o.fluid()?null:o.gutter(),"px")("--fold-page-gap",o.fluid()?null:o.gap(),"px")("--pl-gap-num",o.measuredGap())("--pl-gap-num-first",o.measuredGap()+16),i(),u(o.hideBands()?-1:65),i(2),p("pl-show-gap",o.showGap()&&!o.hideBands()),m("icon",o.headerMode()==="title"&&o.showIcon()?"grid":void 0)("title",o.headerMode()==="title"?"Billing":void 0),i(2),u(o.headerMode()==="custom"?69:-1),i(),u(o.showEyebrow()?70:-1),i(),u(o.showBadge()?71:-1),i(),u(o.showDesc()?72:-1),i(),u(o.showActions()?73:-1),i(26),u(o.showBleed()?99:-1))},dependencies:[D,q,Q,G,M,U,R,Y,S,H,K,J,X,W],styles:[`@charset "UTF-8";
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
}`],encapsulation:2})}export{v as default};
