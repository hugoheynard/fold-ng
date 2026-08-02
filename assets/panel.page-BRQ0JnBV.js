import{K as _}from"./kind-badge.component-BvSBpY6-.js";import{C as b}from"./composed-of.component-Bpn4AWRM.js";import{P as v}from"./panel-scope.directive-CIsWtfxu.js";import{T as k}from"./tab-panel.component-D9HXIB-r.js";import{s as y,ɵ as P,bx as w,c as C,E as T,d as t,e,f as o,g as h,B as s,j as d,m as x,U as F,l as B,k as f,M,N as c,$ as p,O as u}from"./index-C9jep9BN.js";import{FoldButtonComponent as S}from"./button.component-DkIr71vT.js";import{FoldPageSectionComponent as D}from"./page-section.component-D_4yYyM7.js";import"./view-nav.component-EF1L8m-P.js";import"./nav-layout.context-LLEbxSC_.js";import"./spinner.component-BHpkAujN.js";import"./tokens.catalog-DF_6rd51.js";const I=()=>["app-shell"];class m{count=y(0);bump(){this.count.update(g=>g+1)}open(g,l){g.open(k,{side:"right",width:260,...l})}openCode=`host.open(MyPanel, { side: 'right' });        // modal · glass · md (defaults)
host.open(MyPanel, { side: 'left', width: 'lg' });  // named size — sm·md·lg·xl (or a px number)`;behaviorCode=`// Non-modal: the page keeps scrolling & stays interactive,
// focus isn't trapped, and clicking outside does NOT close it.
host.open(MyPanel, { modal: false });

// Opaque sheet instead of the frosted-glass default.
host.open(MyPanel, { surface: 'solid' });

// Guard the casual close: Escape + backdrop no longer dismiss.
// The header close button & FoldPanelRef.close() still work.
host.open(MyPanel, { disableClose: true });`;cascadeCode=`// 1 · app identity — set once at bootstrap (lowest priority)
providers: [provideFoldPanelDefaults({ surface: 'solid' })];

// 2 · the panel's intrinsic nature — declared once on the class
export class CartPanel implements FoldPanelContent<CartData> {
  static readonly foldPanel: FoldPanelDefaults = { modal: false, surface: 'solid' };
}

// 3 · call site is now just the *what* — no repeated *how*
host.open(CartPanel, { data });          // modal:false + solid, from the class
host.open(CartPanel, { modal: true });   // a one-off still wins`;static ɵfac=function(l){return new(l||m)};static ɵcmp=P({type:m,selectors:[["gal-panel-page"]],decls:175,vars:8,consts:[["stage","panelScope"],["title","panel"],["description",""],["titleBadge","","kind","component"],[3,"ids"],["title","Live","description","Triggers open the demo panel inside this bounded stage. The counter proves the background stays interactive under a non-modal panel."],["panelScope","",1,"panel-stage"],[1,"stage-bg"],[1,"stage-toolbar"],["foldButton","","size","sm",3,"click"],["foldButton","","size","sm","emphasis","outline",3,"click"],[1,"stage-hint"],["type","button",1,"stage-counter",3,"click"],["title","Open","description","Imperative API. side (default right) + width tune the shell."],[1,"code-block"],[1,"code-top"],[1,"code-lang"],[1,"code-pre"],["title","Modal & surface","description","Two per-panel options. Both default to today's behaviour (modal, glass)."],[1,"api-notes"],["title","Config cascade","description","Where a panel's shape is declared. Resolved highest-priority-first — a per-call option, then the component's own static, then the app-wide token."]],template:function(l,n){if(l&1){const i=T();t(0,"fold-page-layout",1)(1,"p",2),e(2," The layout-owned "),t(3,"strong"),e(4,"side-panel"),o(),e(5," region — a "),t(6,"code"),e(7,"fold-panel-host"),o(),e(8," placed once in the shell, driven imperatively by "),t(9,"code"),e(10,"FoldPanelHostService.open()"),o(),e(11,". A panel owns its own header/body/footer; the host provides the sliding shell, focus, and (for modal panels) the barrier. It's a "),t(12,"em"),e(13,"layout"),o(),e(14," concern, not a catalogued element — you never write "),t(15,"code"),e(16,"<fold-panel>"),o(),e(17,". "),o(),h(18,"gal-kind-badge",3)(19,"gal-composed-of",4),t(20,"fold-page-section",5)(21,"div",6,0)(23,"div",7)(24,"div",8)(25,"button",9),s("click",function(){c(i);const a=p(22);return u(n.open(a.service,{}))}),e(26," Modal · glass "),o(),t(27,"button",10),s("click",function(){c(i);const a=p(22);return u(n.open(a.service,{modal:!1}))}),e(28," Non-modal "),o(),t(29,"button",10),s("click",function(){c(i);const a=p(22);return u(n.open(a.service,{surface:"solid"}))}),e(30," Solid "),o(),t(31,"button",10),s("click",function(){c(i);const a=p(22);return u(n.open(a.service,{side:"left"}))}),e(32," Left "),o(),t(33,"button",10),s("click",function(){c(i);const a=p(22);return u(n.open(a.service,{width:"lg"}))}),e(34," Large (lg) "),o(),t(35,"button",10),s("click",function(){c(i);const a=p(22);return u(n.open(a.service,{disableClose:!0}))}),e(36," Guarded "),o()(),t(37,"p",11),e(38," Clicking the button below increments a counter. Under a "),t(39,"strong"),e(40,"non-modal"),o(),e(41," panel it still works and the click does "),t(42,"strong"),e(43,"not"),o(),e(44," close the panel; under a "),t(45,"strong"),e(46,"modal"),o(),e(47," one the background is "),t(48,"code"),e(49,"inert"),o(),e(50," and an outside click dismisses. "),o(),t(51,"button",12),s("click",function(){return n.bump()}),e(52),o()(),h(53,"fold-panel-host"),o()(),t(54,"fold-page-section",13)(55,"div",14)(56,"div",15)(57,"span",16),e(58,"typescript"),o()(),t(59,"pre",17)(60,"code"),e(61),o()()()(),t(62,"fold-page-section",18)(63,"ul",19)(64,"li")(65,"code"),e(66,"modal"),o(),t(67,"em"),e(68,"(default "),t(69,"code"),e(70,"true"),o(),e(71,")"),o(),e(72," — freezes page scroll, inerts the background, traps focus, and a backdrop click dismisses. "),t(73,"code"),e(74,"modal: false"),o(),e(75," makes it "),t(76,"strong"),e(77,"non-modal"),o(),e(78,": the page keeps scrolling & stays interactive, focus isn't trapped, and an outside click no longer closes it (header / "),t(79,"kbd"),e(80,"Esc"),o(),e(81," / "),t(82,"code"),e(83,"close()"),o(),e(84," do). "),o(),t(85,"li")(86,"code"),e(87,"surface"),o(),t(88,"em"),e(89,"(default "),t(90,"code"),e(91,"'glass'"),o(),e(92,")"),o(),e(93," — "),t(94,"code"),e(95,"'solid'"),o(),e(96," renders an "),t(97,"strong"),e(98,"opaque"),o(),e(99," sheet (no "),t(100,"code"),e(101,"backdrop-filter"),o(),e(102,") for content that must stay legible over any background, or a plain white-sheet design. "),o()(),t(103,"div",14)(104,"div",15)(105,"span",16),e(106,"typescript"),o()(),t(107,"pre",17)(108,"code"),e(109),o()()()(),t(110,"fold-page-section",20)(111,"ul",19)(112,"li")(113,"strong"),e(114,"Call site"),o(),e(115," — "),t(116,"code"),e(117),o(),e(118," wins over everything. For genuine one-offs, not for a panel's nature. "),o(),t(119,"li")(120,"strong"),e(121,"Component static"),o(),e(122," — "),t(123,"code"),e(124,"static readonly foldPanel: FoldPanelDefaults"),o(),e(125," declares the panel's "),t(126,"em"),e(127,"intrinsic"),o(),e(128," shape once on the class (a cart "),t(129,"em"),e(130,"is"),o(),e(131," non-modal + solid), so the call site stops repeating it. "),o(),t(132,"li")(133,"strong"),e(134,"App token"),o(),e(135," — "),t(136,"code"),e(137,"provideFoldPanelDefaults(…)"),o(),e(138," at bootstrap sets the product's "),t(139,"em"),e(140,"identity"),o(),e(141," (e.g. every panel is solid). The base layer. "),o(),t(142,"li"),e(143," Only "),t(144,"code"),e(145,"side"),o(),e(146," / "),t(147,"code"),e(148,"width"),o(),e(149," / "),t(150,"code"),e(151,"modal"),o(),e(152," / "),t(153,"code"),e(154,"surface"),o(),e(155," cascade. "),t(156,"code"),e(157,"data"),o(),e(158," / "),t(159,"code"),e(160,"providers"),o(),e(161," / "),t(162,"code"),e(163,"stack"),o(),e(164," / "),t(165,"code"),e(166,"ariaLabel"),o(),e(167," stay per-call. "),o()(),t(168,"div",14)(169,"div",15)(170,"span",16),e(171,"typescript"),o()(),t(172,"pre",17)(173,"code"),e(174),o()()()()()}l&2&&(d(19),x("ids",F(7,I)),d(33),B(" Background clicks: ",n.count()," "),d(9),f(n.openCode),d(48),f(n.behaviorCode),d(8),M("open(Cmp, ","{"," … ","}",")"),d(57),f(n.cascadeCode))},dependencies:[_,b,v,w,S,C,D],styles:[`/* Bounded stage: a positioned box so the panel-host dock (position:absolute)
   anchors here and the panel slides *within* the demo, not the gallery. */
.panel-stage {
  position: relative;
  overflow: hidden;
  height: 420px;
  border: 1px solid var(--fold-color-border);
  border-radius: var(--fold-radius-lg);
  background: var(--fold-color-bg-page);
}

.stage-bg {
  display: flex;
  flex-direction: column;
  gap: var(--fold-space-md);
  height: 100%;
  padding: var(--fold-space-lg);
  overflow: auto;
}

.stage-toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: var(--fold-space-sm);
}

.stage-hint {
  margin: 0;
  max-width: 46ch;
  font-size: var(--fold-text-sm);
  color: var(--fold-color-text-muted);
}

.stage-counter {
  align-self: flex-start;
  padding: var(--fold-space-sm) var(--fold-space-lg);
  border: 1px solid var(--fold-color-border);
  border-radius: var(--fold-radius-md);
  background: var(--fold-color-surface-card);
  color: var(--fold-color-text);
  font-weight: 600;
  cursor: pointer;
}

.stage-counter:hover {
  border-color: var(--fold-color-primary);
}

.api-notes {
  margin: 0 0 var(--fold-space-lg);
  padding-left: 1.1rem;
  display: flex;
  flex-direction: column;
  gap: var(--fold-space-sm);
  max-width: 70ch;
  line-height: 1.5;
  color: var(--fold-color-text-secondary);
}`],encapsulation:2})}export{m as default};
