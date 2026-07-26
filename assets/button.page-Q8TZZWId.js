import{K as _}from"./kind-badge.component-DHTl0c7J.js";import{C as y}from"./composed-of.component-M98opWrV.js";import{s as v,ɵ as k,c as w,b as B,F as C,d as n,g,e as t,f as e,i as d,u,C as x,j as o,m as s,v as z,o as c,k as p,l as m,q as b,B as T,E as F,H as S}from"./index-d0GqUxCs.js";import{FoldPageSectionComponent as P}from"./page-section.component-CxhJWEtM.js";import{FoldCalloutComponent as A}from"./callout.component-DEpCa19f.js";import{FoldButtonComponent as L}from"./button.component-CpYuKvla.js";import"./element-title.component-Bw6m72PH.js";import"./spinner.component-DBSHYbkH.js";import"./tokens.catalog-DF_6rd51.js";const $=()=>["icons","spinner"],E=(l,r)=>r.title;function N(l,r){if(l&1&&(n(0,"fold-card",7)(1,"span",36),g(2,"fold-icon",37),e(),n(3,"h3",38),t(4),e(),n(5,"p",39),t(6),e()()),l&2){const a=r.$implicit;o(2),s("name",a.icon),o(2),p(a.title),o(2),p(a.body)}}function I(l,r){if(l&1&&(n(0,"div",15),t(1),e()),l&2){const a=r.$implicit;o(),p(a)}}function M(l,r){if(l&1){const a=T();n(0,"div",41)(1,"button",42),x("click",function(){F(a);const f=b(2);return S(f.buttonClicks.set(f.buttonClicks()+1))}),t(2),e()()}if(l&2){const a=r.$implicit,i=b().$implicit;o(),s("emphasis",i)("intent",a),o(),m(" ",i," ")}}function V(l,r){if(l&1&&(n(0,"div",40),t(1),e(),d(2,M,3,3,"div",41,u)),l&2){const a=r.$implicit,i=b();o(),p(a),o(),c(i.intents)}}function q(l,r){if(l&1&&(n(0,"button",22),t(1),e()),l&2){const a=r.$implicit;s("size",a),o(),m("size ",a)}}class h{emphases=["solid","soft","outline"];intents=["primary","neutral","warning","danger"];buttonSizes=["sm","md","lg"];buttonClicks=v(0);busy=v(!1);features=[{icon:"code",title:"Native host",body:"It's an attribute on a real <button> or <a> — so type, disabled, form submit, href and routerLink all come from the platform, not a re-implementation."},{icon:"grid",title:"Two orthogonal axes",body:"emphasis (how loud) × intent (what it means). Every cell is expressible — a quiet outline, a soft warning, a filled destructive CTA — from N+M rules, not N×M."},{icon:"reload",title:"Loading, built in",body:"loading swaps the leading glyph for a spinner, sets aria-busy, and blocks activation — while staying lit, not dimmed. No width jump; the spinner is icon-sized."},{icon:"arrow-right",title:"Link as a button",body:"<a foldButton routerLink> is a real anchor that looks like a button — open-in-new-tab, middle-click, and screen-reader semantics intact. No second component."},{icon:"shield",title:"Accessible by default",body:"focus-visible ring, prefers-reduced-motion, and forced-colors (Windows high-contrast) are all honoured; a disabled anchor gets aria-disabled + a non-interactive surface."},{icon:"palette",title:"Token-only surface",body:"Every colour is a --fold-* role resolved through a --b-* engine, so the whole matrix reskins with the theme — never a hard-coded hex."}];usageCode=`<!-- defaults: soft + primary -->
<button foldButton (click)="save()">Save</button>

<!-- the two axes, set independently -->
<button foldButton emphasis="solid" intent="danger">Delete</button>
<button foldButton emphasis="outline" intent="neutral">Cancel</button>

<!-- a link that looks like a button -->
<a foldButton routerLink="/contracts">Contracts</a>

<!-- busy + form submit -->
<button foldButton [loading]="saving()" type="submit">Submit</button>`;static ɵfac=function(a){return new(a||h)};static ɵcmp=k({type:h,selectors:[["gal-button-page"]],decls:155,vars:9,consts:[["title","button"],["titleBadge","","kind","component"],[3,"ids"],["description",""],["title","Why it holds up","description","The decisions behind the one-liner."],["variant","accent","icon","lightning",1,"pitch"],[1,"feat-grid"],[1,"feat"],["title","The two axes","description","emphasis × intent — set independently. The full matrix, live."],[1,"axes"],[1,"axis"],[1,"gal-tag"],[1,"axis-note"],[1,"matrix"],[1,"matrix-corner"],[1,"matrix-col"],["title","Usage","description","Bare is soft + primary. Set either axis to move it."],["surface","sunken","padding","sm"],[1,"code-pre"],[1,"demo-row"],[1,"gal-cell"],[1,"demo-line"],["foldButton","",3,"size"],["foldButton","","size","sm"],["foldButton","","size","sm","shape","pill"],["foldButton","","emphasis","solid","size","sm","icon","check"],["title","States","description","Loading, disabled, and the link-as-button case."],["foldButton","","emphasis","solid",3,"loading"],["foldButton","","emphasis","outline","intent","neutral","size","sm",3,"click"],["foldButton","",3,"disabled"],["foldButton","","emphasis","solid","intent","danger",3,"disabled"],["foldButton","","emphasis","solid","href","#button"],["foldButton","","emphasis","outline","intent","neutral","href","#button"],["foldButton","","emphasis","outline","intent","neutral","href","#button",3,"disabled"],["variant","info","icon","shield",1,"a11y"],[1,"clicks"],[1,"feat-ico"],["size","lg",3,"name"],[1,"feat-title"],[1,"feat-body"],[1,"matrix-rowhead"],[1,"matrix-cell"],["foldButton","","size","sm",3,"click","emphasis","intent"]],template:function(a,i){a&1&&(n(0,"fold-page-layout",0),g(1,"gal-kind-badge",1)(2,"gal-composed-of",2),n(3,"p",3),t(4," One directive on a real "),n(5,"code"),t(6,"<button>"),e(),t(7," or "),n(8,"code"),t(9,"<a>"),e(),t(10,", driven by two orthogonal axes — "),n(11,"strong"),t(12,"emphasis"),e(),t(13," (how loud) × "),n(14,"strong"),t(15,"intent"),e(),t(16," (what it means). Every combination is expressible, from a quiet outline to a filled destructive CTA, and the host stays a native control so "),n(17,"code"),t(18,"type"),e(),t(19,", "),n(20,"code"),t(21,"disabled"),e(),t(22,", "),n(23,"code"),t(24,"href"),e(),t(25," and form submit come for free. "),e(),n(26,"fold-page-section",4)(27,"fold-callout",5)(28,"code"),t(29,"foldButton"),e(),t(30," is an "),n(31,"strong"),t(32,"attribute-selector component"),e(),t(33," ("),n(34,"code"),t(35,"button[foldButton], a[foldButton]"),e(),t(36,") — the host "),n(37,"em"),t(38,"is"),e(),t(39," the real button or anchor, the way Angular Material ships "),n(40,"code"),t(41,"matButton"),e(),t(42,`. That's why a "link that looks like a button" needs no second component. `),e(),n(43,"div",6),d(44,N,7,3,"fold-card",7,E),e()(),n(46,"fold-page-section",8)(47,"div",9)(48,"div",10)(49,"span",11),t(50,"emphasis — how loud"),e(),n(51,"p",12)(52,"code"),t(53,"solid"),e(),t(54," filled · "),n(55,"code"),t(56,"soft"),e(),t(57," tinted (default) · "),n(58,"code"),t(59,"outline"),e(),t(60," hairline "),e()(),n(61,"div",10)(62,"span",11),t(63,"intent — what it means"),e(),n(64,"p",12)(65,"code"),t(66,"primary"),e(),t(67," (default) · "),n(68,"code"),t(69,"neutral"),e(),t(70," · "),n(71,"code"),t(72,"warning"),e(),t(73," · "),n(74,"code"),t(75,"danger"),e()()()(),n(76,"div",13),g(77,"div",14),d(78,I,2,1,"div",15,u),d(80,V,4,1,null,null,u),e()(),n(82,"fold-page-section",16)(83,"fold-card",17)(84,"pre",18)(85,"code"),t(86),e()()(),n(87,"div",19)(88,"div",20)(89,"span",11),t(90,"size · sm / md / lg"),e(),n(91,"div",21),d(92,q,2,2,"button",22,u),e()(),n(94,"div",20)(95,"span",11),t(96,"shape · rounded (default) / pill · icon"),e(),n(97,"div",21)(98,"button",23),t(99,"rounded"),e(),n(100,"button",24),t(101,"pill"),e(),n(102,"button",25),t(103," with icon "),e()()()()(),n(104,"fold-page-section",26)(105,"div",19)(106,"div",20)(107,"span",11),t(108,"loading — spinner · aria-busy · blocked · lit"),e(),n(109,"div",21)(110,"button",27),t(111),e(),n(112,"button",28),x("click",function(){return i.busy.set(!i.busy())}),t(113," toggle busy "),e()()(),n(114,"div",20)(115,"span",11),t(116,"disabled — dimmed · non-interactive"),e(),n(117,"div",21)(118,"button",29),t(119,"Button"),e(),n(120,"button",30),t(121," Delete "),e()()(),n(122,"div",20)(123,"span",11),t(124,"<a foldButton> — a real link"),e(),n(125,"div",21)(126,"a",31),t(127,"Anchor CTA"),e(),n(128,"a",32),t(129,"Ghost link"),e(),n(130,"a",33),t(131,"Disabled"),e()()()(),n(132,"fold-callout",34),t(133," Prefer native "),n(134,"code"),t(135,"(click)"),e(),t(136," — a disabled "),n(137,"code"),t(138,"<button>"),e(),t(139," blocks it at the platform; a disabled "),n(140,"code"),t(141,"<a>"),e(),t(142," gets "),n(143,"code"),t(144,"aria-disabled"),e(),t(145," + "),n(146,"code"),t(147,'tabindex="-1"'),e(),t(148," and a "),n(149,"code"),t(150,"pointer-events: none"),e(),t(151," surface. Focus ring, reduced-motion and forced-colors are all handled — "),n(152,"span",35),t(153),e(),t(154,". "),e()()()),a&2&&(o(2),s("ids",z(8,$)),o(42),c(i.features),o(34),c(i.intents),o(2),c(i.emphases),o(6),p(i.usageCode),o(6),c(i.buttonSizes),o(18),s("loading",i.busy()),o(),m(" ",i.busy()?"Saving…":"Save"," "),o(7),s("disabled",!0),o(2),s("disabled",!0),o(10),s("disabled",!0),o(23),m("clicked ",i.buttonClicks(),"×"))},dependencies:[_,y,w,P,B,A,L,C],styles:[`@charset "UTF-8";
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
