import{K as b}from"./kind-badge.component-gcLPscIf.js";import{C as v}from"./composed-of.component-Y6XIvvJo.js";import{P as _}from"./panel-scope.directive-C6nnQlQg.js";import{T as k}from"./tab-panel.component-DL86ogh1.js";import{s as y,ɵ as w,bx as P,c as C,E as T,d as t,e,f as o,g as h,B as l,j as s,m as x,U as F,l as B,k as u,M as A,N as i,a3 as c,O as p}from"./index-bwQprycv.js";import{FoldButtonComponent as N}from"./button.component-C5cSB1p_.js";import{FoldPanelFooterComponent as I}from"./panel-footer.component-C8ASN5Cd.js";import{FoldPageSectionComponent as U}from"./page-section.component-CHOT0whd.js";import"./view-nav.component-qDeElQXS.js";import"./tab-tooltip.directive-DOn1PSG9.js";import"./auto-update-_srfpL1Q.js";import"./nav-layout.context-CNrzXSSP.js";import"./breakpoints-J4fapboB.js";const z=()=>["app-shell"];class g{count=y(0);bump(){this.count.update(m=>m+1)}open(m,f){m.open(k,{side:"right",width:260,...f})}openCode=`host.open(MyPanel, { side: 'right' });        // modal · glass · md (defaults)
host.open(MyPanel, { side: 'left', width: 'lg' });  // named size — sm·md·lg·xl (or a px number)`;behaviorCode=`// Non-modal: the page keeps scrolling & stays interactive,
// focus isn't trapped, and clicking outside does NOT close it.
host.open(MyPanel, { modal: false });

// Opaque sheet instead of the frosted-glass default.
host.open(MyPanel, { surface: 'solid' });

// Guard the casual close: Escape + backdrop no longer dismiss.
// The header close button & FoldPanelRef.close() still work.
host.open(MyPanel, { disableClose: true });`;bodyCode=`<!-- The three pieces of a component panel. The chrome mounts the component
     with display:contents, so these are the panel column's real children:
     header and footer sit at flex:none, the body takes the rest. -->
<fold-panel-header title="Réglage" subtitle="Famille" />

<fold-panel-body>
  <fold-input label="Nom" />
  <fold-danger-zone title="Archiver" actionLabel="Archiver" />
</fold-panel-body>

<fold-panel-footer>
  <button foldButton emphasis="outline" intent="neutral" (click)="cancel()">Annuler</button>
  <button foldButton (click)="save()">Enregistrer</button>
</fold-panel-footer>`;footerCode=`<!-- default: Annuler/Confirmer pushed to the trailing edge -->
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
host.open(CartPanel, { modal: true });   // a one-off still wins`;static ɵfac=function(f){return new(f||g)};static ɵcmp=w({type:g,selectors:[["gal-panel-page"]],decls:222,vars:11,consts:[["stage","panelScope"],["title","panel"],["description",""],["titleBadge","","kind","component"],[3,"ids"],["title","Live","description","Triggers open the demo panel inside this bounded stage. The counter proves the background stays interactive under a non-modal panel. 'Auto' docks right on a wide stage and becomes a bottom sheet when the stage is narrow — keyed off the stage's own width, not the viewport."],["panelScope","",1,"panel-stage"],[1,"stage-bg"],[1,"stage-toolbar"],["foldButton","","size","sm",3,"click"],["foldButton","","size","sm","emphasis","outline",3,"click"],[1,"stage-hint"],["type","button",1,"stage-counter",3,"click"],["title","Open","description","Imperative API. side (default right) + width tune the shell."],[1,"code-block"],[1,"code-top"],[1,"code-lang"],[1,"code-pre"],["title","Typed data — required or optional","description","open(Cmp, { data }) infers the data type from the value; a panel whose data input is optional works the same way, and can also open data-less."],["title","Panel body","description","fold-panel-body is the scrolling middle of a component panel — flex:1, overflow-y:auto and min-height:0, plus a column gap. The last one is the rule hand-rolled copies forget: a flex item's default min-height is min-content, so without it a tall child grows the box instead of scrolling and pushes the footer out of the panel."],["title","Panel footer","description","fold-panel-footer pairs with fold-panel-header: the tokenised action bar at a panel's bottom edge (top border + padding + alignment). It sits with flex:none, so it stays pinned while the body scrolls — no sticky."],[1,"pf-demos"],[1,"pf-frame"],[1,"pf-label"],["foldButton","","emphasis","outline","intent","neutral"],["foldButton",""],["align","between"],[1,"pf-total"],["title","Modal & surface","description","Two per-panel options. Both default to today's behaviour (modal, glass)."],[1,"api-notes"],["title","Config cascade","description","Where a panel's shape is declared. Resolved highest-priority-first — a per-call option, then the component's own static, then the app-wide token."]],template:function(f,n){if(f&1){const r=T();t(0,"fold-page-layout",1)(1,"p",2),e(2," The layout-owned "),t(3,"strong"),e(4,"side-panel"),o(),e(5," region — a "),t(6,"code"),e(7,"fold-panel-host"),o(),e(8," placed once in the shell, driven imperatively by "),t(9,"code"),e(10,"FoldPanelHostService.open()"),o(),e(11,". A panel owns its own header/body/footer; the host provides the sliding shell, focus, and (for modal panels) the barrier. It's a "),t(12,"em"),e(13,"layout"),o(),e(14," concern, not a catalogued element — you never write "),t(15,"code"),e(16,"<fold-panel>"),o(),e(17,". "),o(),h(18,"gal-kind-badge",3)(19,"gal-composed-of",4),t(20,"fold-page-section",5)(21,"div",6,0)(23,"div",7)(24,"div",8)(25,"button",9),l("click",function(){i(r);const a=c(22);return p(n.open(a.service,{}))}),e(26," Modal · glass "),o(),t(27,"button",10),l("click",function(){i(r);const a=c(22);return p(n.open(a.service,{modal:!1}))}),e(28," Non-modal "),o(),t(29,"button",10),l("click",function(){i(r);const a=c(22);return p(n.open(a.service,{surface:"solid"}))}),e(30," Solid "),o(),t(31,"button",10),l("click",function(){i(r);const a=c(22);return p(n.open(a.service,{side:"left"}))}),e(32," Left "),o(),t(33,"button",10),l("click",function(){i(r);const a=c(22);return p(n.open(a.service,{width:"lg"}))}),e(34," Large (lg) "),o(),t(35,"button",10),l("click",function(){i(r);const a=c(22);return p(n.open(a.service,{disableClose:!0}))}),e(36," Guarded "),o(),t(37,"button",10),l("click",function(){i(r);const a=c(22);return p(n.open(a.service,{side:"bottom"}))}),e(38," Bottom sheet "),o(),t(39,"button",10),l("click",function(){i(r);const a=c(22);return p(n.open(a.service,{side:"auto"}))}),e(40," Auto (by width) "),o()(),t(41,"p",11),e(42," Clicking the button below increments a counter. Under a "),t(43,"strong"),e(44,"non-modal"),o(),e(45," panel it still works and the click does "),t(46,"strong"),e(47,"not"),o(),e(48," close the panel; under a "),t(49,"strong"),e(50,"modal"),o(),e(51," one the background is "),t(52,"code"),e(53,"inert"),o(),e(54," and an outside click dismisses. "),o(),t(55,"button",12),l("click",function(){return n.bump()}),e(56),o()(),h(57,"fold-panel-host"),o()(),t(58,"fold-page-section",13)(59,"div",14)(60,"div",15)(61,"span",16),e(62,"typescript"),o()(),t(63,"pre",17)(64,"code"),e(65),o()()()(),t(66,"fold-page-section",18)(67,"div",14)(68,"div",15)(69,"span",16),e(70,"typescript"),o()(),t(71,"pre",17)(72,"code"),e(73),o()()()(),t(74,"fold-page-section",19)(75,"div",14)(76,"div",15)(77,"span",16),e(78,"html"),o()(),t(79,"pre",17)(80,"code"),e(81),o()()()(),t(82,"fold-page-section",20)(83,"div",21)(84,"div",22)(85,"span",23),e(86,'align="end" (default)'),o(),t(87,"fold-panel-footer")(88,"button",24),e(89," Annuler "),o(),t(90,"button",25),e(91,"Enregistrer"),o()()(),t(92,"div",22)(93,"span",23),e(94,'align="between"'),o(),t(95,"fold-panel-footer",26)(96,"span",27),e(97,"Total "),t(98,"strong"),e(99,"128,40 €"),o()(),t(100,"button",25),e(101,"Commander"),o()()()(),t(102,"div",14)(103,"div",15)(104,"span",16),e(105,"html"),o()(),t(106,"pre",17)(107,"code"),e(108),o()()()(),t(109,"fold-page-section",28)(110,"ul",29)(111,"li")(112,"code"),e(113,"modal"),o(),t(114,"em"),e(115,"(default "),t(116,"code"),e(117,"true"),o(),e(118,")"),o(),e(119," — freezes page scroll, inerts the background, traps focus, and a backdrop click dismisses. "),t(120,"code"),e(121,"modal: false"),o(),e(122," makes it "),t(123,"strong"),e(124,"non-modal"),o(),e(125,": the page keeps scrolling & stays interactive, focus isn't trapped, and an outside click no longer closes it (header / "),t(126,"kbd"),e(127,"Esc"),o(),e(128," / "),t(129,"code"),e(130,"close()"),o(),e(131," do). "),o(),t(132,"li")(133,"code"),e(134,"surface"),o(),t(135,"em"),e(136,"(default "),t(137,"code"),e(138,"'glass'"),o(),e(139,")"),o(),e(140," — "),t(141,"code"),e(142,"'solid'"),o(),e(143," renders an "),t(144,"strong"),e(145,"opaque"),o(),e(146," sheet (no "),t(147,"code"),e(148,"backdrop-filter"),o(),e(149,") for content that must stay legible over any background, or a plain white-sheet design. "),o()(),t(150,"div",14)(151,"div",15)(152,"span",16),e(153,"typescript"),o()(),t(154,"pre",17)(155,"code"),e(156),o()()()(),t(157,"fold-page-section",30)(158,"ul",29)(159,"li")(160,"strong"),e(161,"Call site"),o(),e(162," — "),t(163,"code"),e(164),o(),e(165," wins over everything. For genuine one-offs, not for a panel's nature. "),o(),t(166,"li")(167,"strong"),e(168,"Component static"),o(),e(169," — "),t(170,"code"),e(171,"static readonly foldPanel: FoldPanelDefaults"),o(),e(172," declares the panel's "),t(173,"em"),e(174,"intrinsic"),o(),e(175," shape once on the class (a cart "),t(176,"em"),e(177,"is"),o(),e(178," non-modal + solid), so the call site stops repeating it. "),o(),t(179,"li")(180,"strong"),e(181,"App token"),o(),e(182," — "),t(183,"code"),e(184,"provideFoldPanelDefaults(…)"),o(),e(185," at bootstrap sets the product's "),t(186,"em"),e(187,"identity"),o(),e(188," (e.g. every panel is solid). The base layer. "),o(),t(189,"li"),e(190," Only "),t(191,"code"),e(192,"side"),o(),e(193," / "),t(194,"code"),e(195,"width"),o(),e(196," / "),t(197,"code"),e(198,"modal"),o(),e(199," / "),t(200,"code"),e(201,"surface"),o(),e(202," cascade. "),t(203,"code"),e(204,"data"),o(),e(205," / "),t(206,"code"),e(207,"providers"),o(),e(208," / "),t(209,"code"),e(210,"stack"),o(),e(211," / "),t(212,"code"),e(213,"ariaLabel"),o(),e(214," stay per-call. "),o()(),t(215,"div",14)(216,"div",15)(217,"span",16),e(218,"typescript"),o()(),t(219,"pre",17)(220,"code"),e(221),o()()()()()}f&2&&(s(19),x("ids",F(10,z)),s(37),B(" Background clicks: ",n.count()," "),s(9),u(n.openCode),s(8),u(n.dataCode),s(8),u(n.bodyCode),s(27),u(n.footerCode),s(48),u(n.behaviorCode),s(8),A("open(Cmp, ","{"," … ","}",")"),s(57),u(n.cascadeCode))},dependencies:[b,v,_,P,N,I,C,U],styles:[`@charset "UTF-8";
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
  font-weight: var(--fold-weight-semibold);
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
  line-height: var(--fold-leading-normal);
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
  font-family: var(--fold-font-mono);
}

.pf-total strong {
  font-size: var(--fold-text-lg, 1.25rem);
  color: var(--fold-color-text);
}`],encapsulation:2})}export{g as default};
