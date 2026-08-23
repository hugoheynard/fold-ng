import{s as d,A as k,ɵ as T,c as P,b as C,d as n,g as b,e as o,f as t,B as g,w as u,h as v,j as i,m as h,U as x,L as p,x as f,n as w,W as S,i as A,T as L,q as _,o as F,E as G,l as I,N as B,O as D,r as y}from"./index-D0Jqges4.js";import{K as z}from"./kind-badge.component-DOeZDWfy.js";import{C as E}from"./composed-of.component-Ds8EoqY5.js";import{D as W}from"./playground.component-DvUKdOwi.js";import{FoldPageSectionComponent as j}from"./page-section.component-ClR5uC60.js";import{FoldButtonComponent as O}from"./button.component-CpxmwwTm.js";import{FoldSliderComponent as N}from"./slider.component-CrSJ-tjt.js";import{FoldElementTitleComponent as V}from"./element-title.component-CJYRIjVW.js";import"./input-value-DCGlOvqF.js";const H=()=>["element-title"];function K(l,a){if(l&1){const s=G();n(0,"button",24),g("click",function(){const r=B(s).$implicit,c=_(2);return D(c.iconTone.set(r))}),o(1),t()}if(l&2){const s=a.$implicit,e=_(2);p("is-on",e.iconTone()===s),i(),I(" ",s," ")}}function R(l,a){if(l&1&&(n(0,"div",5)(1,"span",6),o(2,"iconTone"),t(),n(3,"div",22),A(4,K,2,3,"button",23,L),t()()),l&2){const s=_();i(4),F(s.tones)}}function U(l,a){l&1&&(n(0,"button",17),o(1," Add "),t())}function q(l,a){l&1&&(n(0,"div",25),o(1,"Cardholder name"),t(),n(2,"div",25),o(3,"Card number"),t(),n(4,"div",25),o(5,"Expiry"),t())}function $(l,a){l&1&&(n(0,"p",15),o(1," The content sits directly on the page — no box, no radius. Need a box? wrap it in a "),n(2,"code"),o(3,"fold-card"),t(),o(4,". "),t())}class m{showTitle=d(!0);showIcon=d(!0);iconTone=d("primary");tones=["secondary","primary","muted","faded"];showDesc=d(!0);showActions=d(!0);stack=d(!0);bleed=d(!1);sectionGap=d(20);showGaps=d(!0);headingLevel=d(2);code=k(()=>{const a=[];this.showTitle()&&a.push('title="Payment methods"'),this.showIcon()&&(a.push('icon="briefcase"'),this.iconTone()!=="secondary"&&a.push(`iconTone="${this.iconTone()}"`)),this.showDesc()&&a.push('description="Charged on renewal."'),this.stack()&&a.push("stack"),this.bleed()&&a.push("bleed"),this.headingLevel()!==2&&a.push(`[headingLevel]="${this.headingLevel()}"`);const s=a.length?["<fold-page-section",...a.map(r=>`  ${r}`),">"]:["<fold-page-section>"],e=[];return this.showActions()&&e.push("  <button sectionActions>Add</button>"),this.stack()?e.push('  <fold-input label="Cardholder" />','  <fold-input label="Card number" />'):e.push("  <p>… content sits on the page (no box) …</p>"),[...s,...e,"</fold-page-section>"].join(`
`)});static ɵfac=function(s){return new(s||m)};static ɵcmp=T({type:m,selectors:[["gal-page-section-page"]],decls:92,vars:45,consts:[["title","page-section"],["titleBadge","","kind","component"],[3,"ids"],["description",""],[3,"code"],["params","",1,"np-field"],[1,"gal-tag"],[1,"ps-toggles"],["type","button",1,"ps-chip",3,"click"],[1,"ps-hint"],["params","","label","--fold-page-section-gap",3,"valueChange","min","max","step","valueText","value"],["params","","label","headingLevel (aria-level)",3,"valueChange","min","max","step","valueText","value"],[1,"ps-window"],["title","Billing"],["title","Overview","description","A neighbour section, for context."],[1,"gal-body"],[1,"ps-demo",3,"title","icon","iconTone","description","stack","bleed","headingLevel"],["foldButton","","sectionActions","","size","sm","emphasis","outline","intent","neutral"],["title","Invoices"],["sectionHeader","","variant","title","icon","company","title","Espace de travail","subtitle","Réglages avancés"],["title","Documents"],["surface","sunken","separators","both"],[1,"ss-seg"],["type","button",3,"is-on"],["type","button",3,"click"],[1,"gal-field"]],template:function(s,e){s&1&&(n(0,"fold-page-layout",0),b(1,"gal-kind-badge",1)(2,"gal-composed-of",2),n(3,"p",3),o(4," A titled, semantic "),n(5,"code"),o(6,"<section>"),t(),o(7," grouping of page content — a real "),n(8,"code"),o(9,"<h2>"),t(),o(10," title + description + actions, plus the "),n(11,"code"),o(12,"stack"),t(),o(13," and "),n(14,"code"),o(15,"bleed"),t(),o(16," helpers. It is "),n(17,"strong"),o(18,"not a box"),t(),o(19,": the title is a genuine heading and the region is a "),n(20,"code"),o(21,"<section>"),t(),o(22,". For a card, wrap the content in a "),n(23,"code"),o(24,"fold-card"),t(),o(25,". "),t(),n(26,"dev-playground",4)(27,"div",5)(28,"span",6),o(29,"header"),t(),n(30,"div",7)(31,"button",8),g("click",function(){return e.showTitle.set(!e.showTitle())}),o(32," title "),t(),n(33,"button",8),g("click",function(){return e.showIcon.set(!e.showIcon())}),o(34," icon "),t(),n(35,"button",8),g("click",function(){return e.showDesc.set(!e.showDesc())}),o(36," description "),t(),n(37,"button",8),g("click",function(){return e.showActions.set(!e.showActions())}),o(38," sectionActions "),t()()(),u(39,R,6,0,"div",5),n(40,"div",5)(41,"span",6),o(42,"body"),t(),n(43,"div",7)(44,"button",8),g("click",function(){return e.stack.set(!e.stack())}),o(45," stack "),t(),n(46,"button",8),g("click",function(){return e.bleed.set(!e.bleed())}),o(47," bleed "),t(),n(48,"button",8),g("click",function(){return e.showGaps.set(!e.showGaps())}),o(49," gap bands "),t()(),n(50,"p",9)(51,"strong"),o(52,"stack"),t(),o(53," — lay the body out as evenly-spaced fields on the section gap (a form); off, the body is free-flow content that keeps its own spacing. "),n(54,"strong"),o(55,"bleed"),t(),o(56," — break the section out of the page gutter to span edge-to-edge; watch it reach past the two padded siblings (it cancels "),n(57,"code"),o(58,"--fold-page-gutter"),t(),o(59," exactly). "),t()(),n(60,"fold-slider",10),v("valueChange",function(c){return y(e.sectionGap,c)||(e.sectionGap=c),c}),t(),n(61,"fold-slider",11),v("valueChange",function(c){return y(e.headingLevel,c)||(e.headingLevel=c),c}),t(),n(62,"div",12)(63,"fold-page-layout",13)(64,"fold-page-section",14)(65,"p",15),o(66,"A padded sibling — sits in the page gutter."),t()(),n(67,"fold-page-section",16),u(68,U,2,0,"button",17),u(69,q,6,0)(70,$,5,0,"p",15),t(),n(71,"fold-page-section",18)(72,"p",15),o(73,"Another padded sibling."),t()()()()(),n(74,"span",6),o(75,"custom header via [sectionHeader] — project a fold-element-title"),t(),n(76,"fold-page-section"),b(77,"fold-element-title",19),n(78,"p",15),o(79," When the default "),n(80,"code"),o(81,"<h2>"),t(),o(82," isn't enough, project your own header instead of "),n(83,"code"),o(84,"title"),t(),o(85," — the section stays a semantic region, the header markup is yours. "),t()(),n(86,"span",6),o(87,"need a box? compose with fold-card (orthogonal)"),t(),n(88,"fold-page-section",20)(89,"fold-card",21)(90,"p",15),o(91," page-section gives the semantic section + heading; fold-card gives the visual box. The section can hold a card; the card never needs to know about the page. "),t()()()()),s&2&&(i(2),h("ids",x(44,H)),i(24),h("code",e.code()),i(5),p("is-on",e.showTitle()),i(2),p("is-on",e.showIcon()),i(2),p("is-on",e.showDesc()),i(2),p("is-on",e.showActions()),i(2),f(e.showIcon()?39:-1),i(5),p("is-on",e.stack()),i(2),p("is-on",e.bleed()),i(2),p("is-on",e.showGaps()),i(12),h("min",0)("max",48)("step",4)("valueText",e.sectionGap()+"px"),w("value",e.sectionGap),i(),h("min",1)("max",6)("step",1)("valueText","h"+e.headingLevel()),w("value",e.headingLevel),i(6),S("--fold-page-section-gap",e.sectionGap(),"px")("--ps-gap-num",e.sectionGap())("--ps-gap-num-first",e.sectionGap()+12),p("ps-show-gaps",e.showGaps()),h("title",e.showTitle()?"Payment methods":void 0)("icon",e.showIcon()?"briefcase":void 0)("iconTone",e.iconTone())("description",e.showDesc()?"Charged on renewal.":void 0)("stack",e.stack())("bleed",e.bleed())("headingLevel",e.headingLevel()),i(),f(e.showActions()?68:-1),i(),f(e.stack()?69:70))},dependencies:[z,E,W,P,j,C,O,N,V],styles:[`@charset "UTF-8";
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
}`],encapsulation:2})}export{m as default};
