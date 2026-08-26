import{s as c,A as V,ɵ as F,c as I,b as L,d as a,g as m,e,f as o,B as p,i as k,T,w as f,h as v,j as s,m as g,U as G,L as d,o as P,x as b,n as w,W as B,E as S,q as u,l as C,N as x,O as A,r as y}from"./index-gi_qXDin.js";import{K as D}from"./kind-badge.component-BabmmGaS.js";import{C as z}from"./composed-of.component-CrhoKiFr.js";import{D as E}from"./playground.component-7zlPUd-c.js";import{FoldPageSectionComponent as W}from"./page-section.component-Cx-7n-DC.js";import{FoldButtonComponent as j}from"./button.component-Bsl8zPcx.js";import{FoldSliderComponent as O}from"./slider.component-WPnaGgNa.js";import{FoldElementTitleComponent as $}from"./element-title.component-BDqC3ayJ.js";import"./input-value-DCGlOvqF.js";const N=()=>["element-title"];function H(r,i){if(r&1){const n=S();a(0,"button",25),p("click",function(){const l=x(n).$implicit,h=u();return A(h.titleVariant.set(l))}),e(1),o()}if(r&2){const n=i.$implicit,t=u();d("is-on",t.titleVariant()===n),s(),C(" ",n," ")}}function K(r,i){if(r&1){const n=S();a(0,"button",25),p("click",function(){const l=x(n).$implicit,h=u(2);return A(h.iconTone.set(l))}),e(1),o()}if(r&2){const n=i.$implicit,t=u(2);d("is-on",t.iconTone()===n),s(),C(" ",n," ")}}function R(r,i){if(r&1&&(a(0,"div",5)(1,"span",6),e(2,"iconTone"),o(),a(3,"div",9),k(4,K,2,3,"button",10,T),o()()),r&2){const n=u();s(4),P(n.tones)}}function U(r,i){r&1&&(a(0,"span",19)(1,"span",26),e(2,"VISA-4242"),o(),a(3,"span",27),e(4,"·"),o(),a(5,"span"),e(6,"2 methods"),o()())}function q(r,i){r&1&&(a(0,"button",20),e(1," Add "),o())}function J(r,i){r&1&&(a(0,"div",28),e(1,"Cardholder name"),o(),a(2,"div",28),e(3,"Card number"),o(),a(4,"div",28),e(5,"Expiry"),o())}function M(r,i){r&1&&(a(0,"p",17),e(1," The content sits directly on the page — no box, no radius. Need a box? wrap it in a "),a(2,"code"),e(3,"fold-card"),o(),e(4,". "),o())}class _{showTitle=c(!0);showIcon=c(!0);iconTone=c("primary");tones=["secondary","primary","muted","faded"];showSubtitle=c(!1);showDesc=c(!0);showActions=c(!0);titleVariant=c("eyebrow");titleVariants=["eyebrow","heading"];separator=c(!1);collapsible=c(!1);stack=c(!0);bleed=c(!1);sectionGap=c(20);showGaps=c(!0);headingLevel=c(2);code=V(()=>{const i=[];this.showTitle()&&i.push('title="Payment methods"'),this.showIcon()&&(i.push('icon="briefcase"'),this.iconTone()!=="secondary"&&i.push(`iconTone="${this.iconTone()}"`)),this.showDesc()&&i.push('description="Charged on renewal."'),this.titleVariant()!=="eyebrow"&&i.push(`titleVariant="${this.titleVariant()}"`),this.separator()&&i.push("separator"),this.collapsible()&&i.push("collapsible"),this.stack()&&i.push("stack"),this.bleed()&&i.push("bleed"),this.headingLevel()!==2&&i.push(`[headingLevel]="${this.headingLevel()}"`);const n=i.length?["<fold-page-section",...i.map(l=>`  ${l}`),">"]:["<fold-page-section>"],t=[];return this.showSubtitle()&&t.push("  <span sectionSubtitle>VISA-4242 · 2 methods</span>"),this.showActions()&&t.push("  <button sectionActions>Add</button>"),this.stack()?t.push('  <fold-input label="Cardholder" />','  <fold-input label="Card number" />'):t.push("  <p>… content sits on the page (no box) …</p>"),[...n,...t,"</fold-page-section>"].join(`
`)});static ɵfac=function(n){return new(n||_)};static ɵcmp=F({type:_,selectors:[["gal-page-section-page"]],decls:143,vars:55,consts:[["title","page-section"],["titleBadge","","kind","component"],[3,"ids"],["description",""],[3,"code"],["params","",1,"np-field"],[1,"gal-tag"],[1,"ps-toggles"],["type","button",1,"ps-chip",3,"click"],[1,"ss-seg"],["type","button",3,"is-on"],[1,"ps-hint"],["params","","label","--fold-page-section-gap",3,"valueChange","min","max","step","valueText","value"],["params","","label","headingLevel (aria-level)",3,"valueChange","min","max","step","valueText","value"],[1,"ps-window"],["title","Billing"],["title","Overview","description","A neighbour section, for context."],[1,"gal-body"],[1,"ps-demo",3,"title","icon","iconTone","description","titleVariant","separator","collapsible","stack","bleed","headingLevel"],["sectionSubtitle","",1,"ps-facts"],["foldButton","","sectionActions","","size","sm","emphasis","outline","intent","neutral"],["title","Invoices"],["sectionHeader","","variant","title","icon","company","title","Espace de travail","subtitle","Réglages avancés"],["title","Documents"],["surface","sunken","separators","both"],["type","button",3,"click"],[1,"ps-facts-ref"],["aria-hidden","true",1,"ps-facts-sep"],[1,"gal-field"]],template:function(n,t){n&1&&(a(0,"fold-page-layout",0),m(1,"gal-kind-badge",1)(2,"gal-composed-of",2),a(3,"p",3),e(4," A titled, semantic "),a(5,"code"),e(6,"<section>"),o(),e(7," grouping of page content — a real "),a(8,"code"),e(9,"<h2>"),o(),e(10," title + "),a(11,"code"),e(12,"[sectionSubtitle]"),o(),e(13," + description + actions, plus the "),a(14,"code"),e(15,"eyebrow"),o(),e(16,", "),a(17,"code"),e(18,"separator"),o(),e(19,", "),a(20,"code"),e(21,"stack"),o(),e(22," and "),a(23,"code"),e(24,"bleed"),o(),e(25," helpers. It is "),a(26,"strong"),e(27,"not a box"),o(),e(28,": the title is a genuine heading and the region is a "),a(29,"code"),e(30,"<section>"),o(),e(31,". For a card, wrap the content in a "),a(32,"code"),e(33,"fold-card"),o(),e(34,". "),o(),a(35,"dev-playground",4)(36,"div",5)(37,"span",6),e(38,"header"),o(),a(39,"div",7)(40,"button",8),p("click",function(){return t.showTitle.set(!t.showTitle())}),e(41," title "),o(),a(42,"button",8),p("click",function(){return t.showIcon.set(!t.showIcon())}),e(43," icon "),o(),a(44,"button",8),p("click",function(){return t.showSubtitle.set(!t.showSubtitle())}),e(45," sectionSubtitle "),o(),a(46,"button",8),p("click",function(){return t.showDesc.set(!t.showDesc())}),e(47," description "),o(),a(48,"button",8),p("click",function(){return t.separator.set(!t.separator())}),e(49," separator "),o(),a(50,"button",8),p("click",function(){return t.collapsible.set(!t.collapsible())}),e(51," collapsible "),o(),a(52,"button",8),p("click",function(){return t.showActions.set(!t.showActions())}),e(53," sectionActions "),o()()(),a(54,"div",5)(55,"span",6),e(56,"titleVariant"),o(),a(57,"div",9),k(58,H,2,3,"button",10,T),o(),a(60,"p",11)(61,"strong"),e(62,"eyebrow"),o(),e(63," is the default — a section title is a "),a(64,"em"),e(65,"label for the block below it"),o(),e(66,", and at page scale a stack of base-size headings competes with the very content it labels. It is a "),a(67,"strong"),e(68,"skin"),o(),e(69,": the heading stays the same "),a(70,"code"),e(71,"<h2>"),o(),e(72,", with the same "),a(73,"code"),e(74,"aria-level"),o(),e(75," and the same region name, in either register. The face comes from "),a(76,"code"),e(77,"--fold-font-label"),o(),e(78,", shared with a data-table column head. "),o()(),f(79,R,6,0,"div",5),a(80,"div",5)(81,"span",6),e(82,"body"),o(),a(83,"div",7)(84,"button",8),p("click",function(){return t.stack.set(!t.stack())}),e(85," stack "),o(),a(86,"button",8),p("click",function(){return t.bleed.set(!t.bleed())}),e(87," bleed "),o(),a(88,"button",8),p("click",function(){return t.showGaps.set(!t.showGaps())}),e(89," gap bands "),o()(),a(90,"p",11)(91,"strong"),e(92,"collapsible"),o(),e(93," folds the "),a(94,"em"),e(95,"body"),o(),e(96," and nothing else: the title, its subtitle, its description and its actions stay put. That line is the difference between folding and "),a(97,"em"),e(98,"hiding"),o(),e(99," — a tab hid the section's state along with its fields, so you could not tell what was missing without opening every one. Folded, a section still says what it is and what it is doing; the actions even stay clickable. "),o(),a(100,"p",11)(101,"strong"),e(102,"stack"),o(),e(103," — lay the body out as evenly-spaced fields on the section gap (a form); off, the body is free-flow content that keeps its own spacing. "),a(104,"strong"),e(105,"bleed"),o(),e(106," — break the section out of the page gutter to span edge-to-edge; watch it reach past the two padded siblings (it cancels "),a(107,"code"),e(108,"--fold-page-gutter"),o(),e(109," exactly). "),o()(),a(110,"fold-slider",12),v("valueChange",function(h){return y(t.sectionGap,h)||(t.sectionGap=h),h}),o(),a(111,"fold-slider",13),v("valueChange",function(h){return y(t.headingLevel,h)||(t.headingLevel=h),h}),o(),a(112,"div",14)(113,"fold-page-layout",15)(114,"fold-page-section",16)(115,"p",17),e(116,"A padded sibling — sits in the page gutter."),o()(),a(117,"fold-page-section",18),f(118,U,7,0,"span",19),f(119,q,2,0,"button",20),f(120,J,6,0)(121,M,5,0,"p",17),o(),a(122,"fold-page-section",21)(123,"p",17),e(124,"Another padded sibling."),o()()()()(),a(125,"span",6),e(126,"custom header via [sectionHeader] — project a fold-element-title"),o(),a(127,"fold-page-section"),m(128,"fold-element-title",22),a(129,"p",17),e(130," When the default "),a(131,"code"),e(132,"<h2>"),o(),e(133," isn't enough, project your own header instead of "),a(134,"code"),e(135,"title"),o(),e(136," — the section stays a semantic region, the header markup is yours. "),o()(),a(137,"span",6),e(138,"need a box? compose with fold-card (orthogonal)"),o(),a(139,"fold-page-section",23)(140,"fold-card",24)(141,"p",17),e(142," page-section gives the semantic section + heading; fold-card gives the visual box. The section can hold a card; the card never needs to know about the page. "),o()()()()),n&2&&(s(2),g("ids",G(54,N)),s(33),g("code",t.code()),s(5),d("is-on",t.showTitle()),s(2),d("is-on",t.showIcon()),s(2),d("is-on",t.showSubtitle()),s(2),d("is-on",t.showDesc()),s(2),d("is-on",t.separator()),s(2),d("is-on",t.collapsible()),s(2),d("is-on",t.showActions()),s(6),P(t.titleVariants),s(21),b(t.showIcon()?79:-1),s(5),d("is-on",t.stack()),s(2),d("is-on",t.bleed()),s(2),d("is-on",t.showGaps()),s(22),g("min",0)("max",48)("step",4)("valueText",t.sectionGap()+"px"),w("value",t.sectionGap),s(),g("min",1)("max",6)("step",1)("valueText","h"+t.headingLevel()),w("value",t.headingLevel),s(6),B("--fold-page-section-gap",t.sectionGap(),"px")("--ps-gap-num",t.sectionGap())("--ps-gap-num-first",t.sectionGap()+12),d("ps-show-gaps",t.showGaps()),g("title",t.showTitle()?"Payment methods":void 0)("icon",t.showIcon()?"briefcase":void 0)("iconTone",t.iconTone())("description",t.showDesc()?"Charged on renewal.":void 0)("titleVariant",t.titleVariant())("separator",t.separator())("collapsible",t.collapsible())("stack",t.stack())("bleed",t.bleed())("headingLevel",t.headingLevel()),s(),b(t.showSubtitle()?118:-1),s(),b(t.showActions()?119:-1),s(),b(t.stack()?120:121))},dependencies:[D,z,E,I,W,L,j,O,$],styles:[`@charset "UTF-8";
.gal-field {
  padding: 10px 12px;
  border-radius: var(--fold-radius-sm);
  background: var(--fold-color-surface-sunken);
  font-size: var(--fold-text-md);
}

/* Preview frame — a real page backdrop so the fold-page-layout inside paints its
   gutter and a \`bleed\` section visibly breaks out past its padded siblings. */
.ps-window {
  overflow: hidden;
  border: 1px solid var(--fold-color-border);
  border-radius: var(--fold-radius-md);
  background: var(--fold-color-bg-page);
}

/* The section currently being configured — ringed so it's obvious which of the
   three the controls drive. */
.ps-demo {
  outline: 1px dashed var(--fold-color-primary);
  outline-offset: 3px;
  border-radius: var(--fold-radius-sm);
}

/* ── Section-gap visualiser ────────────────────────────────────────────────
   Bands the height of --fold-page-section-gap laid in the section's OWN gaps:
   the head↔body gap and (in stack) the gaps between fields. Success-tinted with
   a live px label, like the page-layout gutter/gap bands. The FIRST gap (head↔
   body) is a touch bigger — the heading breathes before the content (the
   page-layout mechanic). */
.ps-show-gaps .ps-root:has(.section-head) > .section-body {
  position: relative;
  margin-top: 12px; /* the extra that makes the first gap bigger */
}

.ps-show-gaps.stack .section-body .gal-field {
  position: relative;
}

/* Shared band look. */
.ps-show-gaps .ps-root:has(.section-head) > .section-body::before,
.ps-show-gaps.stack .section-body .gal-field:not(:first-child)::before {
  content: counter(psgap) "px";
  position: absolute;
  left: 0;
  right: 0;
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

/* The head↔body band — the bigger first gap (its label reads gap + 12). */
.ps-show-gaps .ps-root:has(.section-head) > .section-body::before {
  counter-reset: psgap var(--ps-gap-num-first, 32);
  top: calc(-1 * (var(--fold-page-section-gap, 20px) + 12px));
  height: calc(var(--fold-page-section-gap, 20px) + 12px);
}

/* Stack-item bands — the plain section gap. */
.ps-show-gaps.stack .section-body .gal-field:not(:first-child)::before {
  counter-reset: psgap var(--ps-gap-num, 20);
  top: calc(-1 * var(--fold-page-section-gap, 20px));
  height: var(--fold-page-section-gap, 20px);
}

/* Explanatory caption under the body toggles. */
.ps-hint {
  margin: 8px 0 0;
  font-size: var(--fold-text-sm);
  line-height: var(--fold-leading-normal);
  color: var(--fold-color-text-muted);
}

/* Control chips — on/off pills (mirrors the other playground pages). */
.ps-toggles {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.ps-chip {
  padding: 4px 10px;
  border: 1px solid var(--fold-color-border);
  border-radius: var(--fold-radius-pill, 999px);
  background: transparent;
  color: var(--fold-color-text-secondary);
  font-size: var(--fold-text-sm);
  cursor: pointer;
}

.ps-chip.is-on {
  border-color: var(--fold-color-primary-border);
  background: var(--fold-color-primary-surface);
  color: var(--fold-color-primary-text);
}

/* The facts line in [sectionSubtitle] — the slot carries size and colour; only
   the rhythm is the demo's. */
.ps-facts {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--fold-space-sm);
}

.ps-facts-ref {
  font-family: var(--fold-font-mono);
  white-space: nowrap;
}

.ps-facts-sep {
  color: var(--fold-color-text-faded);
}`],encapsulation:2})}export{_ as default};
