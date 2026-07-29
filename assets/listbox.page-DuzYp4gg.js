import{u as D,A as T,ɵ as V,y as b,i as _,e,z as w,L,j as l,o as g,k as m,w as W,x as N,W as R,ar as B,q as k,s as u,au as A,c as K,E,d as t,f as o,g as P,H as U,h,ax as z,$ as I,m as c,U as q,n as y,T as M,B as $,l as j,N as f,O as v,Q as G,r as x}from"./index-y55LNMx1.js";import{K as J}from"./kind-badge.component-Ca8lDT1d.js";import{C as X}from"./composed-of.component-B5V5R3Eb.js";import{D as Y}from"./playground.component-CREW8e_6.js";import{FoldPageSectionComponent as H}from"./page-section.component-D15qIeB3.js";import{FoldTabsComponent as Q}from"./tabs.component-C9_q_d0i.js";import{FoldTabPanelComponent as Z}from"./tab-panel.component-DXE98lFA.js";import{FoldListboxComponent as ee}from"./listbox.component-CWGrAd6-.js";import{FoldMultiselectComponent as oe}from"./multiselect.component-holCdQQ-.js";import{F as te}from"./option.component-DB7g_VH5.js";import{FoldSelectComponent as ne}from"./select.component-YC3h7PVA.js";import"./button.component-DtYdv2Em.js";import"./spinner.component-CZ4od8jl.js";import"./tokens.catalog-DF_6rd51.js";import"./element-title.component-DgYXUkWY.js";import"./slider.component-B9ZwPAgD.js";import"./input-value-Co_u-z_8.js";import"./nav-layout.context-yRLWsCkt.js";import"./popover.component-DHZJ602Q.js";import"./popover-trigger.directive-MzBDODg6.js";import"./input-base.component-BG4jlA0H.js";import"./label.component-BT58hbpm.js";import"./listbox-nav-DXXamlIe.js";const ae=(i,s)=>s.box;function le(i,s){if(i&1&&(b(0,"div",2),B(1,"span",8),b(2,"span",9),e(3),w(),b(4,"span",10),e(5,"↓"),w()()),i&2){const a=k().$implicit;l(3),m(a.flow)}}function se(i,s){if(i&1&&(W(0,le,6,1,"div",2),b(1,"div",3)(2,"span",4),e(3),w(),b(4,"div",5)(5,"code",6),e(6),w(),b(7,"span",7),e(8),w()()()),i&2){const a=s.$implicit,n=s.$index,d=s.$index;N(d!==0?0:-1),l(),R("--i",n),l(2),m(n+1),l(3),m(a.box),l(2),m(a.note)}}const ie=i=>({kind:"popover",layers:[{box:"<button> trigger",note:i?'aria-haspopup="listbox" · aria-expanded · summarises the picks':'aria-haspopup="listbox" · aria-expanded · shows the selected label',flow:""},{box:"fold-popover — native top layer",note:"escapes overflow + z-index · flip → size → shift · publishes --fold-popover-anchor-width",flow:"click / ↓ opens"},{box:i?'role="listbox" + aria-multiselectable — holds focus':'role="listbox" — holds focus',note:"aria-activedescendant → the active option's id (focus never leaves)",flow:"renders the panel"},{box:"fold-option × N",note:"each derives its own selected / active from the owner (a computed reading the FOLD_LISTBOX_OWNER token — nothing pushed in during change detection)",flow:"projects rows"}],footer:i?"↑/↓ move active · Enter/Space toggles membership · panel stays open · value = readonly string[]":"↑/↓ move active · Enter commits + closes · returns focus to the trigger · value = string"}),re={kind:"native",layers:[{box:"fold-select",note:"a thin wrapper — styled box + custom caret over the real control",flow:""},{box:"native <select>",note:"[value] / (change) · Signal Forms · the browser owns keyboard + focus",flow:"wraps"},{box:"OS popup (browser / operating system)",note:"NOT in your DOM · not styleable · a native mobile wheel for free",flow:"opens"},{box:"<option> × N",note:"real projected option elements — plain text only",flow:"lists"}],footer:"styleable panel / custom rows?  ✗    ·    accessible + mobile-native out of the box?  ✓"};class O{kind=D.required();schema=T(()=>{const s=this.kind();return s==="select"?re:ie(s==="multi")});static ɵfac=function(a){return new(a||O)};static ɵcmp=V({type:O,selectors:[["gal-select-schema"]],inputs:{kind:[1,"kind"]},decls:5,vars:3,consts:[[1,"sc"],[1,"sc-footer"],["aria-hidden","true",1,"sc-flow"],[1,"sc-layer"],[1,"sc-num"],[1,"sc-body"],[1,"sc-box"],[1,"sc-note"],[1,"sc-flow-line"],[1,"sc-flow-label"],[1,"sc-flow-arrow"]],template:function(a,n){a&1&&(b(0,"div",0),_(1,se,9,6,null,null,ae),b(3,"p",1),e(4),w()()),a&2&&(L("sc-native",n.schema().kind==="native"),l(),g(n.schema().layers),l(3),m(n.schema().footer))},styles:[`[_nghost-%COMP%] {
  display: block;
}

.sc[_ngcontent-%COMP%] {
  --sc-accent: var(--fold-color-primary);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 620px;
}

.sc.sc-native[_ngcontent-%COMP%] {
  --sc-accent: var(--fold-color-text-secondary);
}

.sc-layer[_ngcontent-%COMP%] {
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
  padding: 0.7rem 0.85rem;
  border: 1px solid var(--fold-color-border-subtle);
  border-inline-start: 3px solid var(--sc-accent);
  border-radius: var(--fold-radius-sm);
  background: var(--fold-color-surface-card);
}

.sc-num[_ngcontent-%COMP%] {
  flex: none;
  display: grid;
  place-items: center;
  width: 1.35rem;
  height: 1.35rem;
  border-radius: var(--fold-radius-round);
  background: var(--fold-color-primary-surface);
  color: var(--fold-color-primary-text);
  font-size: var(--fold-text-xs);
  font-weight: 600;
}

.sc-native[_ngcontent-%COMP%]   .sc-num[_ngcontent-%COMP%] {
  background: var(--fold-color-surface-hover);
  color: var(--fold-color-text-secondary);
}

.sc-body[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.sc-box[_ngcontent-%COMP%] {
  font-family: var(--fold-font-mono, monospace);
  font-size: var(--fold-text-sm);
  color: var(--fold-color-text);
}

.sc-note[_ngcontent-%COMP%] {
  font-size: var(--fold-text-xs);
  color: var(--fold-color-text-muted);
  line-height: 1.4;
}

.sc-flow[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-inline-start: 1.5rem;
  height: 1.6rem;
  color: var(--fold-color-text-faded);
}

.sc-flow-line[_ngcontent-%COMP%] {
  width: 2px;
  height: 100%;
  background: var(--fold-color-border);
}

.sc-flow-label[_ngcontent-%COMP%] {
  font-size: var(--fold-text-xs);
  font-style: italic;
}

.sc-flow-arrow[_ngcontent-%COMP%] {
  margin-inline-start: -0.2rem;
  font-size: var(--fold-text-sm);
}

.sc-footer[_ngcontent-%COMP%] {
  margin: 0.9rem 0 0;
  padding: 0.6rem 0.75rem;
  border-radius: var(--fold-radius-sm);
  background: var(--fold-color-surface-sunken);
  font-size: var(--fold-text-xs);
  color: var(--fold-color-text-secondary);
  line-height: 1.5;
}`]})}const ce=()=>["popover","icons"],F=(i,s)=>s.value,de=(i,s)=>s.id;function pe(i,s){if(i&1){const a=E();t(0,"button",34),$("click",function(){const d=f(a).$implicit,p=k(2);return v(p.size.set(d))}),e(1),o()}if(i&2){const a=s.$implicit,n=k(2);L("is-on",n.size()===a),l(),j(" ",a," ")}}function me(i,s){if(i&1){const a=E();t(0,"button",34),$("click",function(){const d=f(a).$implicit,p=k(2);return v(p.variant.set(d))}),e(1),o()}if(i&2){const a=s.$implicit,n=k(2);L("is-on",n.variant()===a),l(),j(" ",a," ")}}function ue(i,s){if(i&1&&(t(0,"div",30)(1,"span",31),e(2,"size"),o(),t(3,"div",32),_(4,pe,2,3,"button",33,M),o()(),t(6,"div",30)(7,"span",31),e(8,"variant"),o(),t(9,"div",32),_(10,me,2,3,"button",33,M),o()()),i&2){const a=k();l(4),g(a.sizes),l(6),g(a.variants)}}function fe(i,s){if(i&1&&(t(0,"fold-option",15),e(1),o()),i&2){const a=s.$implicit;c("value",a.value),l(),m(a.label)}}function ve(i,s){if(i&1&&(t(0,"fold-option",15),e(1),o()),i&2){const a=s.$implicit;c("value",a.value),l(),m(a.label)}}function be(i,s){if(i&1&&(t(0,"option",15),e(1),o()),i&2){const a=s.$implicit;c("value",a.value),l(),m(a.label)}}function _e(i,s){if(i&1&&(t(0,"fold-option",15),e(1),o()),i&2){const a=s.$implicit;c("value",a),l(),m(a.name)}}class S{tab=u("listbox");tabs=[{key:"listbox",label:"listbox",icon:"list"},{key:"multi",label:"multiselect",icon:"check-circle"},{key:"select",label:"select · native",icon:"chevron-down"},{key:"typed",label:"typed value",icon:"code"}];plans=[{value:1,label:"Starter"},{value:2,label:"Pro"},{value:3,label:"Enterprise",disabled:!0}];planId=u(2);teams=[{id:10,name:"Design"},{id:20,name:"Engineering"}];team=u(null);sameId=(s,a)=>s.id===a.id;typedCode=`<!-- number ids via the [options] array API -->
<fold-listbox label="Plan" [(value)]="planId" [options]="plans" />

<!-- object values need a compareWith (matches by id, not reference) -->
<fold-listbox label="Team" [(value)]="team" [compareWith]="sameId">
  @for (t of teams; track t.id) {
    <fold-option [value]="t">{{ t.name }}</fold-option>
  }
</fold-listbox>`;currencies=[{value:"EUR",label:"Euro (€)"},{value:"USD",label:"US Dollar ($)"},{value:"GBP",label:"Livre sterling (£)"},{value:"JPY",label:"Yen (¥)"}];sizes=["sm","md","lg"];variants=["default","panel"];size=u("md");variant=u("default");lbValue=u("EUR");msValue=u(["EUR","GBP"]);selValue=u("EUR");lbCode=T(()=>this.snippet("fold-listbox",'[(value)]="currency"',"fold-option",["allowClear"]));msCode=T(()=>this.snippet("fold-multiselect",'[(value)]="picked"',"fold-option"));selCode=T(()=>this.snippet("fold-select",'[(value)]="currency"',"option"));snippet(s,a,n,d=[]){const p=['label="Devise"',a,...d];this.size()!=="md"&&p.push(`size="${this.size()}"`),this.variant()!=="default"&&p.push(`variant="${this.variant()}"`);const r=this.currencies.map(C=>`  <${n} value="${C.value}">${C.label}</${n}>`).join(`
`);return[`<${s}`,...p.map(C=>`  ${C}`),">",r,`</${s}>`].join(`
`)}static ɵfac=function(a){return new(a||S)};static ɵcmp=V({type:S,selectors:[["gal-listbox-page"]],decls:195,vars:39,consts:[["knobs",""],["t","foldTabs"],["title","listbox"],["description",""],["titleBadge","","kind","component"],[3,"ids"],[1,"sel-shell"],["direction","vertical","activeStyle","fill","background","transparent",1,"sel-rail",3,"activeKeyChange","tabs","activeKey"],[1,"sel-panels"],["key","listbox",3,"tabs"],[1,"sel-lede"],[3,"code","responsive"],["params",""],[3,"ngTemplateOutlet"],["label","Devise","placeholder","Choisir une devise…",3,"valueChange","size","variant","allowClear","value"],[3,"value"],["title","Tech — how it works","icon","code"],[1,"sel-prose"],["kind","listbox"],["key","multi",3,"tabs"],["label","Devises","placeholder","Choisir plusieurs…",3,"valueChange","size","variant","value"],["kind","multi"],["key","select",3,"tabs"],["label","Devise","placeholder","Choisir…",3,"valueChange","size","variant","value"],["kind","select"],["key","typed",3,"tabs"],[1,"sel-typed"],["label","Plan (number, [options])","placeholder","Pick a plan…",3,"valueChange","size","variant","options","value"],[1,"sel-readout"],["label","Team (object, compareWith)","placeholder","Pick a team…",3,"valueChange","size","variant","compareWith","value"],[1,"sel-knob"],[1,"gal-tag"],[1,"sel-seg"],["type","button",3,"is-on"],["type","button",3,"click"]],template:function(a,n){if(a&1){const d=E();t(0,"fold-page-layout",2)(1,"p",3),e(2," The "),t(3,"strong"),e(4,"styleable select family"),o(),e(5," — three ways to pick from a list, same tokens and box chrome. "),t(6,"code"),e(7,"fold-listbox"),o(),e(8," (one value) and "),t(9,"code"),e(10,"fold-multiselect"),o(),e(11," (a set) are built on "),t(12,"code"),e(13,"fold-popover"),o(),e(14," for a fully styleable panel; "),t(15,"code"),e(16,"fold-select"),o(),e(17," wraps a native "),t(18,"code"),e(19,"<select>"),o(),e(20," for a mobile-native, zero-JS default. Pick a tab. "),o(),P(21,"gal-kind-badge",4)(22,"gal-composed-of",5),U(23,ue,12,0,"ng-template",null,0,G),t(25,"div",6)(26,"fold-tabs",7,1),h("activeKeyChange",function(r){return f(d),x(n.tab,r)||(n.tab=r),v(r)}),o(),t(28,"div",8)(29,"fold-tab-panel",9)(30,"p",10),e(31," A single-select on the native top layer. Options can be anything you project — an icon, a second line, a status — which is the reason to reach for it over the native "),t(32,"code"),e(33,"<select>"),o(),e(34,". Full keyboard, "),t(35,"code"),e(36,'role="listbox"'),o(),e(37," with "),t(38,"code"),e(39,"aria-activedescendant"),o(),e(40,", and Signal Forms ("),t(41,"code"),e(42,"value: string"),o(),e(43,"). "),o(),t(44,"dev-playground",11)(45,"div",12),z(46,13),o(),t(47,"fold-listbox",14),h("valueChange",function(r){return f(d),x(n.lbValue,r)||(n.lbValue=r),v(r)}),_(48,fe,2,2,"fold-option",15,F),o()(),t(50,"fold-page-section",16)(51,"p",17),e(52," The trigger stays in the normal flow; opening hands the panel to the browser's "),t(53,"strong"),e(54,"top layer"),o(),e(55,", so it escapes any "),t(56,"code"),e(57,"overflow"),o(),e(58," / "),t(59,"code"),e(60,"z-index"),o(),e(61,". The "),t(62,"code"),e(63,'role="listbox"'),o(),e(64," holds focus and points "),t(65,"code"),e(66,"aria-activedescendant"),o(),e(67," at the active row — the rows themselves stay dumb, each computing its own selected / active state from the owner. Selecting commits the value and closes, returning focus to the trigger. "),o(),P(68,"gal-select-schema",18),o()(),t(69,"fold-tab-panel",19)(70,"p",10),e(71," The same popover and rows, but the value is a "),t(72,"strong"),e(73,"set"),o(),e(74," ("),t(75,"code"),e(76,"readonly string[]"),o(),e(77,"): activating a row toggles it and the panel "),t(78,"strong"),e(79,"stays open"),o(),e(80,". A separate component, not a "),t(81,"code"),e(82,"multiple"),o(),e(83," flag, so the Signal-Forms value type stays honest. "),t(84,"code"),e(85,"aria-multiselectable"),o(),e(86,"; the trigger summarises the picks. "),o(),t(87,"dev-playground",11)(88,"div",12),z(89,13),o(),t(90,"fold-multiselect",20),h("valueChange",function(r){return f(d),x(n.msValue,r)||(n.msValue=r),v(r)}),_(91,ve,2,2,"fold-option",15,F),o()(),t(93,"fold-page-section",16)(94,"p",17),e(95," Structurally identical to the listbox — same top-layer panel, same roving keyboard core (shared via a "),t(96,"code"),e(97,"FOLD_LISTBOX_OWNER"),o(),e(98," token). The only differences live at the edges: "),t(99,"code"),e(100,"aria-multiselectable"),o(),e(101,", activation "),t(102,"strong"),e(103,"toggles membership"),o(),e(104," instead of committing, and the panel is never closed on a pick — so several choices are one interaction. "),o(),P(105,"gal-select-schema",21),o()(),t(106,"fold-tab-panel",22)(107,"p",10),e(108," A thin wrapper around a real "),t(109,"code"),e(110,"<select>"),o(),e(111," — the lighter default. Not styleable inside the popup and rows are plain text, but you get the OS's keyboard, focus and a native mobile wheel for free. Reach for it unless you need custom rows. "),o(),t(112,"dev-playground",11)(113,"div",12),z(114,13),o(),t(115,"fold-select",23),h("valueChange",function(r){return f(d),x(n.selValue,r)||(n.selValue=r),v(r)}),_(116,be,2,2,"option",15,F),o()(),t(118,"fold-page-section",16)(119,"p",17),e(120," No popover, no ARIA to run: "),t(121,"code"),e(122,"fold-select"),o(),e(123," only restyles the closed control (box + caret) and forwards "),t(124,"code"),e(125,"[value]"),o(),e(126," / "),t(127,"code"),e(128,"(change)"),o(),e(129," to Signal Forms. When it opens, the "),t(130,"strong"),e(131,"operating system"),o(),e(132," paints the option list — outside your DOM, so it can't be styled, but keyboard, focus and the touch wheel are all handled for you. "),o(),P(133,"gal-select-schema",24),o()(),t(134,"fold-tab-panel",25)(135,"p",17),e(136," The value is "),t(137,"strong"),e(138,"generic"),o(),e(139," — "),t(140,"code"),e(141,"string"),o(),e(142," by inference, but "),t(143,"code"),e(144,"number"),o(),e(145,", an "),t(146,"code"),e(147,"enum"),o(),e(148," or an "),t(149,"strong"),e(150,"object"),o(),e(151," all work with the type preserved end-to-end. Two entry points: a data-driven "),t(152,"code"),e(153,"[options]"),o(),e(154," array (value type linked at compile time) or projected "),t(155,"code"),e(156,"<fold-option>"),o(),e(157,". Objects match via "),t(158,"code"),e(159,"compareWith"),o(),e(160," (default "),t(161,"code"),e(162,"Object.is"),o(),e(163,"); primitives need nothing. "),o(),t(164,"dev-playground",11)(165,"div",26)(166,"fold-listbox",27),h("valueChange",function(r){return f(d),x(n.planId,r)||(n.planId=r),v(r)}),o(),t(167,"p",28),e(168," planId = "),t(169,"code"),e(170),o()(),t(171,"fold-listbox",29),h("valueChange",function(r){return f(d),x(n.team,r)||(n.team=r),v(r)}),_(172,_e,2,2,"fold-option",15,de),o(),t(174,"p",28),e(175," team = "),t(176,"code"),e(177),o()()()(),t(178,"fold-page-section",16)(179,"p",17)(180,"code"),e(181,"T"),o(),e(182," is inferred from "),t(183,"code"),e(184,"[(value)]"),o(),e(185,". The option↔value link the compiler can't see through projection is the one seam erased to "),t(186,"code"),e(187,"unknown"),o(),e(188," (the owner token); everywhere the operands are actually "),t(189,"code"),e(190,"T"),o(),e(191," stays typed, and a dev-mode warning fires if a held value matches no option. The "),t(192,"code"),e(193,"[options]"),o(),e(194," array closes even that seam — value and options are checked together at build time. "),o()()()()()()}if(a&2){const d=I(24),p=I(27);l(22),c("ids",q(38,ce)),l(4),c("tabs",n.tabs),y("activeKey",n.tab),l(3),c("tabs",p),l(15),c("code",n.lbCode())("responsive",!1),l(2),c("ngTemplateOutlet",d),l(),c("size",n.size())("variant",n.variant())("allowClear",!0),y("value",n.lbValue),l(),g(n.currencies),l(21),c("tabs",p),l(18),c("code",n.msCode())("responsive",!1),l(2),c("ngTemplateOutlet",d),l(),c("size",n.size())("variant",n.variant()),y("value",n.msValue),l(),g(n.currencies),l(15),c("tabs",p),l(6),c("code",n.selCode())("responsive",!1),l(2),c("ngTemplateOutlet",d),l(),c("size",n.size())("variant",n.variant()),y("value",n.selValue),l(),g(n.currencies),l(18),c("tabs",p),l(30),c("code",n.typedCode)("responsive",!1),l(2),c("size",n.size())("variant",n.variant())("options",n.plans),y("value",n.planId),l(4),m(n.planId()??"null"),l(),c("size",n.size())("variant",n.variant())("compareWith",n.sameId),y("value",n.team),l(),g(n.teams),l(5),m(n.team()?.name??"null")}},dependencies:[A,J,X,Y,O,K,H,Q,Z,ee,oe,te,ne],styles:[`.sel-shell {
  display: grid;
  grid-template-columns: minmax(140px, 200px) 1fr;
  gap: 1.5rem;
  align-items: start;
  margin-top: 1rem;
}

.sel-rail {
  position: sticky;
  top: 1rem;
}

.sel-panels {
  min-width: 0;
}

@media (max-width: 720px) {
  .sel-shell {
    grid-template-columns: 1fr;
  }
  .sel-rail {
    position: static;
  }
}
.sel-lede {
  margin: 0 0 0.5rem;
  max-width: 60ch;
  color: var(--fold-color-text-secondary);
  line-height: 1.55;
}

.sel-prose {
  margin: 0 0 1rem;
  max-width: 68ch;
  color: var(--fold-color-text-secondary);
  line-height: 1.6;
}

.sel-knob {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin-bottom: 0.9rem;
}

.sel-seg {
  display: inline-flex;
  padding: 2px;
  border: 1px solid var(--fold-color-border-subtle);
  border-radius: var(--fold-radius-sm);
  background: var(--fold-color-surface-sunken);
}
.sel-seg button {
  all: unset;
  padding: 0.3rem 0.7rem;
  border-radius: var(--fold-radius-xs);
  font-size: var(--fold-text-sm);
  color: var(--fold-color-text-muted);
  cursor: pointer;
}
.sel-seg button:hover {
  color: var(--fold-color-text);
}
.sel-seg button.is-on {
  background: var(--fold-color-surface-card);
  color: var(--fold-color-text);
  box-shadow: var(--fold-shadow-sm);
}

.sel-typed {
  display: flex;
  flex-direction: column;
  gap: var(--fold-space-md);
  max-width: 22rem;
}

.sel-readout {
  margin: 0 0 var(--fold-space-sm);
  font-size: var(--fold-text-sm);
  color: var(--fold-color-text-muted);
}`],encapsulation:2})}export{S as default};
