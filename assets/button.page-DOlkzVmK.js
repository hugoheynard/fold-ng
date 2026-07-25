import{K as y}from"./kind-badge.component-DLElA58v.js";import{s as v,ɵ as _,c as k,b as w,F as B,d as n,g,e as t,f as e,i as d,u,B as x,j as o,o as c,k as p,m as s,l as m,q as b,A as C,D as z,E as T}from"./index-L2pOahl_.js";import{FoldPageSectionComponent as F}from"./page-section.component-BaL0OvKx.js";import{FoldCalloutComponent as S}from"./callout.component-AfbZKKSX.js";import{FoldButtonComponent as P}from"./button.component-CsCXIA6S.js";import"./element-title.component-DV1GDOwb.js";import"./spinner.component-B4JZlAV1.js";import"./tokens.catalog-DF_6rd51.js";const A=(l,r)=>r.title;function L(l,r){if(l&1&&(n(0,"fold-card",6)(1,"span",35),g(2,"fold-icon",36),e(),n(3,"h3",37),t(4),e(),n(5,"p",38),t(6),e()()),l&2){const a=r.$implicit;o(2),s("name",a.icon),o(2),p(a.title),o(2),p(a.body)}}function $(l,r){if(l&1&&(n(0,"div",14),t(1),e()),l&2){const a=r.$implicit;o(),p(a)}}function E(l,r){if(l&1){const a=C();n(0,"div",40)(1,"button",41),x("click",function(){z(a);const f=b(2);return T(f.buttonClicks.set(f.buttonClicks()+1))}),t(2),e()()}if(l&2){const a=r.$implicit,i=b().$implicit;o(),s("emphasis",i)("intent",a),o(),m(" ",i," ")}}function N(l,r){if(l&1&&(n(0,"div",39),t(1),e(),d(2,E,3,3,"div",40,u)),l&2){const a=r.$implicit,i=b();o(),p(a),o(),c(i.intents)}}function I(l,r){if(l&1&&(n(0,"button",21),t(1),e()),l&2){const a=r.$implicit;s("size",a),o(),m("size ",a)}}class h{emphases=["solid","soft","outline"];intents=["primary","neutral","warning","danger"];buttonSizes=["sm","md","lg"];buttonClicks=v(0);busy=v(!1);features=[{icon:"code",title:"Native host",body:"It's an attribute on a real <button> or <a> — so type, disabled, form submit, href and routerLink all come from the platform, not a re-implementation."},{icon:"grid",title:"Two orthogonal axes",body:"emphasis (how loud) × intent (what it means). Every cell is expressible — a quiet outline, a soft warning, a filled destructive CTA — from N+M rules, not N×M."},{icon:"reload",title:"Loading, built in",body:"loading swaps the leading glyph for a spinner, sets aria-busy, and blocks activation — while staying lit, not dimmed. No width jump; the spinner is icon-sized."},{icon:"arrow-right",title:"Link as a button",body:"<a foldButton routerLink> is a real anchor that looks like a button — open-in-new-tab, middle-click, and screen-reader semantics intact. No second component."},{icon:"shield",title:"Accessible by default",body:"focus-visible ring, prefers-reduced-motion, and forced-colors (Windows high-contrast) are all honoured; a disabled anchor gets aria-disabled + a non-interactive surface."},{icon:"palette",title:"Token-only surface",body:"Every colour is a --fold-* role resolved through a --b-* engine, so the whole matrix reskins with the theme — never a hard-coded hex."}];usageCode=`<!-- defaults: soft + primary -->
<button foldButton (click)="save()">Save</button>

<!-- the two axes, set independently -->
<button foldButton emphasis="solid" intent="danger">Delete</button>
<button foldButton emphasis="outline" intent="neutral">Cancel</button>

<!-- a link that looks like a button -->
<a foldButton routerLink="/contracts">Contracts</a>

<!-- busy + form submit -->
<button foldButton [loading]="saving()" type="submit">Submit</button>`;static ɵfac=function(a){return new(a||h)};static ɵcmp=_({type:h,selectors:[["gal-button-page"]],decls:154,vars:7,consts:[["title","button"],["titleBadge","","kind","component"],["description",""],["title","Why it holds up","description","The decisions behind the one-liner."],["variant","accent","icon","lightning",1,"pitch"],[1,"feat-grid"],[1,"feat"],["title","The two axes","description","emphasis × intent — set independently. The full matrix, live."],[1,"axes"],[1,"axis"],[1,"gal-tag"],[1,"axis-note"],[1,"matrix"],[1,"matrix-corner"],[1,"matrix-col"],["title","Usage","description","Bare is soft + primary. Set either axis to move it."],["surface","sunken","padding","sm"],[1,"code-pre"],[1,"demo-row"],[1,"gal-cell"],[1,"demo-line"],["foldButton","",3,"size"],["foldButton","","size","sm"],["foldButton","","size","sm","shape","pill"],["foldButton","","emphasis","solid","size","sm","icon","check"],["title","States","description","Loading, disabled, and the link-as-button case."],["foldButton","","emphasis","solid",3,"loading"],["foldButton","","emphasis","outline","intent","neutral","size","sm",3,"click"],["foldButton","",3,"disabled"],["foldButton","","emphasis","solid","intent","danger",3,"disabled"],["foldButton","","emphasis","solid","href","#button"],["foldButton","","emphasis","outline","intent","neutral","href","#button"],["foldButton","","emphasis","outline","intent","neutral","href","#button",3,"disabled"],["variant","info","icon","shield",1,"a11y"],[1,"clicks"],[1,"feat-ico"],["size","lg",3,"name"],[1,"feat-title"],[1,"feat-body"],[1,"matrix-rowhead"],[1,"matrix-cell"],["foldButton","","size","sm",3,"click","emphasis","intent"]],template:function(a,i){a&1&&(n(0,"fold-page-layout",0),g(1,"gal-kind-badge",1),n(2,"p",2),t(3," One directive on a real "),n(4,"code"),t(5,"<button>"),e(),t(6," or "),n(7,"code"),t(8,"<a>"),e(),t(9,", driven by two orthogonal axes — "),n(10,"strong"),t(11,"emphasis"),e(),t(12," (how loud) × "),n(13,"strong"),t(14,"intent"),e(),t(15," (what it means). Every combination is expressible, from a quiet outline to a filled destructive CTA, and the host stays a native control so "),n(16,"code"),t(17,"type"),e(),t(18,", "),n(19,"code"),t(20,"disabled"),e(),t(21,", "),n(22,"code"),t(23,"href"),e(),t(24," and form submit come for free. "),e(),n(25,"fold-page-section",3)(26,"fold-callout",4)(27,"code"),t(28,"foldButton"),e(),t(29," is an "),n(30,"strong"),t(31,"attribute-selector component"),e(),t(32," ("),n(33,"code"),t(34,"button[foldButton], a[foldButton]"),e(),t(35,") — the host "),n(36,"em"),t(37,"is"),e(),t(38," the real button or anchor, the way Angular Material ships "),n(39,"code"),t(40,"matButton"),e(),t(41,`. That's why a "link that looks like a button" needs no second component. `),e(),n(42,"div",5),d(43,L,7,3,"fold-card",6,A),e()(),n(45,"fold-page-section",7)(46,"div",8)(47,"div",9)(48,"span",10),t(49,"emphasis — how loud"),e(),n(50,"p",11)(51,"code"),t(52,"solid"),e(),t(53," filled · "),n(54,"code"),t(55,"soft"),e(),t(56," tinted (default) · "),n(57,"code"),t(58,"outline"),e(),t(59," hairline "),e()(),n(60,"div",9)(61,"span",10),t(62,"intent — what it means"),e(),n(63,"p",11)(64,"code"),t(65,"primary"),e(),t(66," (default) · "),n(67,"code"),t(68,"neutral"),e(),t(69," · "),n(70,"code"),t(71,"warning"),e(),t(72," · "),n(73,"code"),t(74,"danger"),e()()()(),n(75,"div",12),g(76,"div",13),d(77,$,2,1,"div",14,u),d(79,N,4,1,null,null,u),e()(),n(81,"fold-page-section",15)(82,"fold-card",16)(83,"pre",17)(84,"code"),t(85),e()()(),n(86,"div",18)(87,"div",19)(88,"span",10),t(89,"size · sm / md / lg"),e(),n(90,"div",20),d(91,I,2,2,"button",21,u),e()(),n(93,"div",19)(94,"span",10),t(95,"shape · rounded (default) / pill · icon"),e(),n(96,"div",20)(97,"button",22),t(98,"rounded"),e(),n(99,"button",23),t(100,"pill"),e(),n(101,"button",24),t(102," with icon "),e()()()()(),n(103,"fold-page-section",25)(104,"div",18)(105,"div",19)(106,"span",10),t(107,"loading — spinner · aria-busy · blocked · lit"),e(),n(108,"div",20)(109,"button",26),t(110),e(),n(111,"button",27),x("click",function(){return i.busy.set(!i.busy())}),t(112," toggle busy "),e()()(),n(113,"div",19)(114,"span",10),t(115,"disabled — dimmed · non-interactive"),e(),n(116,"div",20)(117,"button",28),t(118,"Button"),e(),n(119,"button",29),t(120," Delete "),e()()(),n(121,"div",19)(122,"span",10),t(123,"<a foldButton> — a real link"),e(),n(124,"div",20)(125,"a",30),t(126,"Anchor CTA"),e(),n(127,"a",31),t(128,"Ghost link"),e(),n(129,"a",32),t(130,"Disabled"),e()()()(),n(131,"fold-callout",33),t(132," Prefer native "),n(133,"code"),t(134,"(click)"),e(),t(135," — a disabled "),n(136,"code"),t(137,"<button>"),e(),t(138," blocks it at the platform; a disabled "),n(139,"code"),t(140,"<a>"),e(),t(141," gets "),n(142,"code"),t(143,"aria-disabled"),e(),t(144," + "),n(145,"code"),t(146,'tabindex="-1"'),e(),t(147," and a "),n(148,"code"),t(149,"pointer-events: none"),e(),t(150," surface. Focus ring, reduced-motion and forced-colors are all handled — "),n(151,"span",34),t(152),e(),t(153,". "),e()()()),a&2&&(o(43),c(i.features),o(34),c(i.intents),o(2),c(i.emphases),o(6),p(i.usageCode),o(6),c(i.buttonSizes),o(18),s("loading",i.busy()),o(),m(" ",i.busy()?"Saving…":"Save"," "),o(7),s("disabled",!0),o(2),s("disabled",!0),o(10),s("disabled",!0),o(23),m("clicked ",i.buttonClicks(),"×"))},dependencies:[y,k,F,w,S,P,B],styles:[`@charset "UTF-8";
/* ── button page — the foldButton system: pitch, the emphasis × intent matrix,
   usage, states. Airy premium rhythm. Scoped under \`gal-button-page\` (the page
   is ViewEncapsulation.None), so nothing here leaks to other gallery pages. */
gal-button-page {
  --fold-page-gap: 56px;
  display: block;
}

/* Section-leading pitch reads like a statement, not a notice. */
gal-button-page .pitch {
  display: block;
  margin-bottom: var(--fold-space-lg);
  font-size: var(--fold-text-md);
  line-height: 1.6;
}

/* ── Why it holds up — feature cards ─────────────────────────────────────── */
gal-button-page .feat-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--fold-space-xl);
}

@media (max-width: 880px) {
  gal-button-page .feat-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 560px) {
  gal-button-page .feat-grid {
    grid-template-columns: 1fr;
  }
}
gal-button-page .feat {
  display: flex;
  flex-direction: column;
  gap: var(--fold-space-md);
  transition: transform var(--fold-motion-base), box-shadow var(--fold-motion-base), border-color var(--fold-motion-base);
}

gal-button-page .feat:hover {
  transform: translateY(-3px);
  box-shadow: var(--fold-shadow-md);
  border-color: var(--fold-color-primary-border);
}

gal-button-page .feat-ico {
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: var(--fold-radius-md);
  border: 1px solid var(--fold-color-primary-border);
  color: var(--fold-color-primary-text);
  background: linear-gradient(150deg, var(--fold-color-primary-surface), transparent 130%);
}

gal-button-page .feat-title {
  margin: 0;
  font-size: var(--fold-text-md);
  font-weight: 650;
  letter-spacing: -0.01em;
  color: var(--fold-color-text);
}

gal-button-page .feat-body {
  margin: 0;
  font-size: var(--fold-text-sm);
  line-height: 1.6;
  color: var(--fold-color-text-secondary);
}

/* ── The two axes — explainer + matrix ───────────────────────────────────── */
gal-button-page .axes {
  display: flex;
  flex-wrap: wrap;
  gap: var(--fold-space-xl);
  margin-bottom: var(--fold-space-lg);
}

gal-button-page .axis {
  flex: 1 1 260px;
}

gal-button-page .axis-note {
  margin: var(--fold-space-sm) 0 0;
  font-size: var(--fold-text-sm);
  line-height: 1.6;
  color: var(--fold-color-text-muted);
}

gal-button-page .axis-note code {
  color: var(--fold-color-text-secondary);
}

gal-button-page .matrix {
  display: grid;
  grid-template-columns: auto repeat(4, minmax(0, 1fr));
  gap: var(--fold-space-md);
  align-items: center;
  padding: var(--fold-space-lg);
  border-radius: var(--fold-radius-lg);
  border: 1px solid var(--fold-color-border-subtle);
  background: var(--fold-color-surface-sunken);
  overflow-x: auto;
}

gal-button-page .matrix-corner {
  min-width: 56px;
}

gal-button-page .matrix-col {
  text-align: center;
  font-size: var(--fold-text-sm);
  font-weight: 600;
  color: var(--fold-color-text-secondary);
  text-transform: capitalize;
}

gal-button-page .matrix-rowhead {
  text-align: right;
  padding-right: var(--fold-space-sm);
  font-size: var(--fold-text-sm);
  color: var(--fold-color-text-muted);
  text-transform: capitalize;
}

gal-button-page .matrix-cell {
  display: grid;
}

gal-button-page .matrix-cell .fold-button {
  width: 100%;
  text-transform: capitalize;
}

/* ── Usage + states — code + demo cells ──────────────────────────────────── */
gal-button-page .code-pre {
  margin: 0;
  overflow-x: auto;
  font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
  font-size: var(--fold-text-sm);
  line-height: 1.7;
  color: var(--fold-color-text-secondary);
}

gal-button-page .code-pre code {
  color: inherit;
}

gal-button-page .demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--fold-space-xl);
  margin-top: var(--fold-space-lg);
}

gal-button-page .demo-row .gal-cell {
  flex: 1 1 260px;
  padding: var(--fold-space-lg);
  border-radius: var(--fold-radius-lg);
  border: 1px solid var(--fold-color-border-subtle);
  background: var(--fold-color-surface-sunken);
}

gal-button-page .demo-line {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--fold-space-md);
  margin-top: var(--fold-space-md);
}

gal-button-page .a11y {
  display: block;
  margin-top: var(--fold-space-lg);
  font-size: var(--fold-text-sm);
  line-height: 1.6;
}

gal-button-page .a11y .clicks {
  color: var(--fold-color-text-muted);
  font-variant-numeric: tabular-nums;
}`],encapsulation:2})}export{h as default};
