import{K as b}from"./kind-badge.component-bNneKVjc.js";import{C as v}from"./composed-of.component-B5U7A6a-.js";import{P as _}from"./panel-scope.directive-FCLf-y8X.js";import{T as k}from"./tab-panel.component-DE4bZgFi.js";import{s as y,ɵ as w,bw as P,c as C,E as T,d as t,e,f as o,g as h,B as l,j as d,m as x,U as F,l as B,k as m,M as A,N as i,a3 as c,O as p}from"./index-CTDli8WO.js";import{FoldButtonComponent as N}from"./button.component-DY5BHdyG.js";import{FoldPanelFooterComponent as I}from"./panel-footer.component-CRUocDQh.js";import{FoldPageSectionComponent as U}from"./page-section.component-DbhxYtbE.js";import"./view-nav.component-CpWdKwS-.js";import"./nav-layout.context-CXGdMRua.js";const M=()=>["app-shell"];class g{count=y(0);bump(){this.count.update(f=>f+1)}open(f,u){f.open(k,{side:"right",width:260,...u})}openCode=`host.open(MyPanel, { side: 'right' });        // modal · glass · md (defaults)
host.open(MyPanel, { side: 'left', width: 'lg' });  // named size — sm·md·lg·xl (or a px number)`;behaviorCode=`// Non-modal: the page keeps scrolling & stays interactive,
// focus isn't trapped, and clicking outside does NOT close it.
host.open(MyPanel, { modal: false });

// Opaque sheet instead of the frosted-glass default.
host.open(MyPanel, { surface: 'solid' });

// Guard the casual close: Escape + backdrop no longer dismiss.
// The header close button & FoldPanelRef.close() still work.
host.open(MyPanel, { disableClose: true });`;footerCode=`<!-- default: Annuler/Confirmer pushed to the trailing edge -->
<fold-panel-footer>
  <button foldButton emphasis="outline" intent="neutral" (click)="cancel()">Annuler</button>
  <button foldButton (click)="save()">Enregistrer</button>
</fold-panel-footer>

<!-- between: a leading block (a running total) + trailing actions -->
<fold-panel-footer align="between">
  <span>Total {{ "{{" }} total {{ "}}" }}</span>
  <button foldButton (click)="checkout()">Commander</button>
</fold-panel-footer>`;dataCode=`// A required data input — data must be passed.
export class UserPanel implements FoldPanelContent<User> {
  readonly data = input.required<User>();
}
host.open(UserPanel, { data: user });   // T inferred from the value

// An OPTIONAL data input — same call, no manual <T | undefined> widen…
export class NotePanel implements FoldPanelContent<Note> {
  readonly data = input<Note>();        // InputSignal<Note | undefined>
}
host.open(NotePanel, { data: note });   // ✓ infers Note from the value
host.open(NotePanel);                    // ✓ …and can open data-less too

// The data VALUE is still type-checked — a wrong shape is rejected:
host.open(UserPanel, { data: 42 });     // ✗ compile error`;cascadeCode=`// 1 · app identity — set once at bootstrap (lowest priority)
providers: [provideFoldPanelDefaults({ surface: 'solid' })];

// 2 · the panel's intrinsic nature — declared once on the class
export class CartPanel implements FoldPanelContent<CartData> {
  static readonly foldPanel: FoldPanelDefaults = { modal: false, surface: 'solid' };
}

// 3 · call site is now just the *what* — no repeated *how*
host.open(CartPanel, { data });          // modal:false + solid, from the class
host.open(CartPanel, { modal: true });   // a one-off still wins`;static ɵfac=function(u){return new(u||g)};static ɵcmp=w({type:g,selectors:[["gal-panel-page"]],decls:214,vars:10,consts:[["stage","panelScope"],["title","panel"],["description",""],["titleBadge","","kind","component"],[3,"ids"],["title","Live","description","Triggers open the demo panel inside this bounded stage. The counter proves the background stays interactive under a non-modal panel. 'Auto' docks right on a wide stage and becomes a bottom sheet when the stage is narrow — keyed off the stage's own width, not the viewport."],["panelScope","",1,"panel-stage"],[1,"stage-bg"],[1,"stage-toolbar"],["foldButton","","size","sm",3,"click"],["foldButton","","size","sm","emphasis","outline",3,"click"],[1,"stage-hint"],["type","button",1,"stage-counter",3,"click"],["title","Open","description","Imperative API. side (default right) + width tune the shell."],[1,"code-block"],[1,"code-top"],[1,"code-lang"],[1,"code-pre"],["title","Typed data — required or optional","description","open(Cmp, { data }) infers the data type from the value; a panel whose data input is optional works the same way, and can also open data-less."],["title","Panel footer","description","fold-panel-footer pairs with fold-panel-header: the tokenised action bar at a panel's bottom edge (top border + padding + alignment). It sits with flex:none, so it stays pinned while the body scrolls — no sticky."],[1,"pf-demos"],[1,"pf-frame"],[1,"pf-label"],["foldButton","","emphasis","outline","intent","neutral"],["foldButton",""],["align","between"],[1,"pf-total"],["title","Modal & surface","description","Two per-panel options. Both default to today's behaviour (modal, glass)."],[1,"api-notes"],["title","Config cascade","description","Where a panel's shape is declared. Resolved highest-priority-first — a per-call option, then the component's own static, then the app-wide token."]],template:function(u,n){if(u&1){const s=T();t(0,"fold-page-layout",1)(1,"p",2),e(2," The layout-owned "),t(3,"strong"),e(4,"side-panel"),o(),e(5," region — a "),t(6,"code"),e(7,"fold-panel-host"),o(),e(8," placed once in the shell, driven imperatively by "),t(9,"code"),e(10,"FoldPanelHostService.open()"),o(),e(11,". A panel owns its own header/body/footer; the host provides the sliding shell, focus, and (for modal panels) the barrier. It's a "),t(12,"em"),e(13,"layout"),o(),e(14," concern, not a catalogued element — you never write "),t(15,"code"),e(16,"<fold-panel>"),o(),e(17,". "),o(),h(18,"gal-kind-badge",3)(19,"gal-composed-of",4),t(20,"fold-page-section",5)(21,"div",6,0)(23,"div",7)(24,"div",8)(25,"button",9),l("click",function(){i(s);const a=c(22);return p(n.open(a.service,{}))}),e(26," Modal · glass "),o(),t(27,"button",10),l("click",function(){i(s);const a=c(22);return p(n.open(a.service,{modal:!1}))}),e(28," Non-modal "),o(),t(29,"button",10),l("click",function(){i(s);const a=c(22);return p(n.open(a.service,{surface:"solid"}))}),e(30," Solid "),o(),t(31,"button",10),l("click",function(){i(s);const a=c(22);return p(n.open(a.service,{side:"left"}))}),e(32," Left "),o(),t(33,"button",10),l("click",function(){i(s);const a=c(22);return p(n.open(a.service,{width:"lg"}))}),e(34," Large (lg) "),o(),t(35,"button",10),l("click",function(){i(s);const a=c(22);return p(n.open(a.service,{disableClose:!0}))}),e(36," Guarded "),o(),t(37,"button",10),l("click",function(){i(s);const a=c(22);return p(n.open(a.service,{side:"bottom"}))}),e(38," Bottom sheet "),o(),t(39,"button",10),l("click",function(){i(s);const a=c(22);return p(n.open(a.service,{side:"auto"}))}),e(40," Auto (by width) "),o()(),t(41,"p",11),e(42," Clicking the button below increments a counter. Under a "),t(43,"strong"),e(44,"non-modal"),o(),e(45," panel it still works and the click does "),t(46,"strong"),e(47,"not"),o(),e(48," close the panel; under a "),t(49,"strong"),e(50,"modal"),o(),e(51," one the background is "),t(52,"code"),e(53,"inert"),o(),e(54," and an outside click dismisses. "),o(),t(55,"button",12),l("click",function(){return n.bump()}),e(56),o()(),h(57,"fold-panel-host"),o()(),t(58,"fold-page-section",13)(59,"div",14)(60,"div",15)(61,"span",16),e(62,"typescript"),o()(),t(63,"pre",17)(64,"code"),e(65),o()()()(),t(66,"fold-page-section",18)(67,"div",14)(68,"div",15)(69,"span",16),e(70,"typescript"),o()(),t(71,"pre",17)(72,"code"),e(73),o()()()(),t(74,"fold-page-section",19)(75,"div",20)(76,"div",21)(77,"span",22),e(78,'align="end" (default)'),o(),t(79,"fold-panel-footer")(80,"button",23),e(81," Annuler "),o(),t(82,"button",24),e(83,"Enregistrer"),o()()(),t(84,"div",21)(85,"span",22),e(86,'align="between"'),o(),t(87,"fold-panel-footer",25)(88,"span",26),e(89,"Total "),t(90,"strong"),e(91,"128,40 €"),o()(),t(92,"button",24),e(93,"Commander"),o()()()(),t(94,"div",14)(95,"div",15)(96,"span",16),e(97,"html"),o()(),t(98,"pre",17)(99,"code"),e(100),o()()()(),t(101,"fold-page-section",27)(102,"ul",28)(103,"li")(104,"code"),e(105,"modal"),o(),t(106,"em"),e(107,"(default "),t(108,"code"),e(109,"true"),o(),e(110,")"),o(),e(111," — freezes page scroll, inerts the background, traps focus, and a backdrop click dismisses. "),t(112,"code"),e(113,"modal: false"),o(),e(114," makes it "),t(115,"strong"),e(116,"non-modal"),o(),e(117,": the page keeps scrolling & stays interactive, focus isn't trapped, and an outside click no longer closes it (header / "),t(118,"kbd"),e(119,"Esc"),o(),e(120," / "),t(121,"code"),e(122,"close()"),o(),e(123," do). "),o(),t(124,"li")(125,"code"),e(126,"surface"),o(),t(127,"em"),e(128,"(default "),t(129,"code"),e(130,"'glass'"),o(),e(131,")"),o(),e(132," — "),t(133,"code"),e(134,"'solid'"),o(),e(135," renders an "),t(136,"strong"),e(137,"opaque"),o(),e(138," sheet (no "),t(139,"code"),e(140,"backdrop-filter"),o(),e(141,") for content that must stay legible over any background, or a plain white-sheet design. "),o()(),t(142,"div",14)(143,"div",15)(144,"span",16),e(145,"typescript"),o()(),t(146,"pre",17)(147,"code"),e(148),o()()()(),t(149,"fold-page-section",29)(150,"ul",28)(151,"li")(152,"strong"),e(153,"Call site"),o(),e(154," — "),t(155,"code"),e(156),o(),e(157," wins over everything. For genuine one-offs, not for a panel's nature. "),o(),t(158,"li")(159,"strong"),e(160,"Component static"),o(),e(161," — "),t(162,"code"),e(163,"static readonly foldPanel: FoldPanelDefaults"),o(),e(164," declares the panel's "),t(165,"em"),e(166,"intrinsic"),o(),e(167," shape once on the class (a cart "),t(168,"em"),e(169,"is"),o(),e(170," non-modal + solid), so the call site stops repeating it. "),o(),t(171,"li")(172,"strong"),e(173,"App token"),o(),e(174," — "),t(175,"code"),e(176,"provideFoldPanelDefaults(…)"),o(),e(177," at bootstrap sets the product's "),t(178,"em"),e(179,"identity"),o(),e(180," (e.g. every panel is solid). The base layer. "),o(),t(181,"li"),e(182," Only "),t(183,"code"),e(184,"side"),o(),e(185," / "),t(186,"code"),e(187,"width"),o(),e(188," / "),t(189,"code"),e(190,"modal"),o(),e(191," / "),t(192,"code"),e(193,"surface"),o(),e(194," cascade. "),t(195,"code"),e(196,"data"),o(),e(197," / "),t(198,"code"),e(199,"providers"),o(),e(200," / "),t(201,"code"),e(202,"stack"),o(),e(203," / "),t(204,"code"),e(205,"ariaLabel"),o(),e(206," stay per-call. "),o()(),t(207,"div",14)(208,"div",15)(209,"span",16),e(210,"typescript"),o()(),t(211,"pre",17)(212,"code"),e(213),o()()()()()}u&2&&(d(19),x("ids",F(9,M)),d(37),B(" Background clicks: ",n.count()," "),d(9),m(n.openCode),d(8),m(n.dataCode),d(27),m(n.footerCode),d(48),m(n.behaviorCode),d(8),A("open(Cmp, ","{"," … ","}",")"),d(57),m(n.cascadeCode))},dependencies:[b,v,_,P,N,I,C,U],styles:[`@charset "UTF-8";
/* Bounded stage: a positioned box so the panel-host dock (position:absolute)
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
}

/* fold-panel-footer demos — framed to read like a panel bottom edge. */
.pf-demos {
  display: flex;
  flex-direction: column;
  gap: var(--fold-space-md);
  margin-bottom: var(--fold-space-lg);
}

.pf-frame {
  border: 1px solid var(--fold-color-border-subtle);
  border-radius: var(--fold-radius-md, 10px);
  overflow: hidden;
  background: var(--fold-color-surface-card);
}

.pf-label {
  display: block;
  padding: var(--fold-space-sm) var(--fold-space-lg);
  font-size: var(--fold-text-xs);
  color: var(--fold-color-text-muted);
  font-family: ui-monospace, monospace;
}

.pf-total strong {
  font-size: var(--fold-text-lg, 1.25rem);
  color: var(--fold-color-text);
}`],encapsulation:2})}export{g as default};
