import{x as B,y as C,ɵ as D,M as m,i as _,e,O as v,D as L,j as l,o as g,k as u,I as N,J as A,A as I,al as W,q as b,s as f,aA as j,c as U,B as $,d as t,f as o,g as w,W as K,C as M,aC as P,h as O,Q as E,m as r,v as J,n as T,u as V,l as R,E as h,H as y,Z as q,r as z}from"./index-DPf2rFdr.js";import{K as G}from"./kind-badge.component-BoOWaZfG.js";import{C as X}from"./composed-of.component-DeZB50Jm.js";import{D as Y}from"./playground.component-DP6EU_pm.js";import{FoldPageSectionComponent as H}from"./page-section.component-DvCFfvnv.js";import{FoldTabsComponent as Q}from"./tabs.component-DnC1bdoz.js";import{FoldTabPanelComponent as Z}from"./tab-panel.component-Bp-hoopU.js";import{FoldListboxComponent as ee}from"./listbox.component-DBQflAOd.js";import{FoldMultiselectComponent as oe}from"./multiselect.component-DEaumz_8.js";import{F as te}from"./option.component-BPPXCdpn.js";import{FoldSelectComponent as ne}from"./select.component-CSx5aCk_.js";import"./button.component-BOeohfZ6.js";import"./spinner.component-DqBivuJj.js";import"./tokens.catalog-DF_6rd51.js";import"./element-title.component-DIkZs5t9.js";import"./slider.component-BM1ylGek.js";import"./input-value-Co_u-z_8.js";import"./nav-layout.context-CeDs1hbg.js";import"./popover.component-DFtE3ahq.js";import"./popover-trigger.directive-DgblbA4G.js";import"./input-base.component-D4CqDmPo.js";import"./label.component-xsZoOWlp.js";import"./listbox-nav-3kiYti-z.js";const ae=(s,i)=>i.box;function le(s,i){if(s&1&&(m(0,"div",2),W(1,"span",8),m(2,"span",9),e(3),v(),m(4,"span",10),e(5,"↓"),v()()),s&2){const a=b().$implicit;l(3),u(a.flow)}}function se(s,i){if(s&1&&(N(0,le,6,1,"div",2),m(1,"div",3)(2,"span",4),e(3),v(),m(4,"div",5)(5,"code",6),e(6),v(),m(7,"span",7),e(8),v()()()),s&2){const a=i.$implicit,n=i.$index,c=i.$index;A(c!==0?0:-1),l(),I("--i",n),l(2),u(n+1),l(3),u(a.box),l(2),u(a.note)}}const ie=s=>({kind:"popover",layers:[{box:"<button> trigger",note:s?'aria-haspopup="listbox" · aria-expanded · summarises the picks':'aria-haspopup="listbox" · aria-expanded · shows the selected label',flow:""},{box:"fold-popover — native top layer",note:"escapes overflow + z-index · flip → size → shift · publishes --fold-popover-anchor-width",flow:"click / ↓ opens"},{box:s?'role="listbox" + aria-multiselectable — holds focus':'role="listbox" — holds focus',note:"aria-activedescendant → the active option's id (focus never leaves)",flow:"renders the panel"},{box:"fold-option × N",note:"each derives its own selected / active from the owner (a computed reading the FOLD_LISTBOX_OWNER token — nothing pushed in during change detection)",flow:"projects rows"}],footer:s?"↑/↓ move active · Enter/Space toggles membership · panel stays open · value = readonly string[]":"↑/↓ move active · Enter commits + closes · returns focus to the trigger · value = string"}),re={kind:"native",layers:[{box:"fold-select",note:"a thin wrapper — styled box + custom caret over the real control",flow:""},{box:"native <select>",note:"[value] / (change) · Signal Forms · the browser owns keyboard + focus",flow:"wraps"},{box:"OS popup (browser / operating system)",note:"NOT in your DOM · not styleable · a native mobile wheel for free",flow:"opens"},{box:"<option> × N",note:"real projected option elements — plain text only",flow:"lists"}],footer:"styleable panel / custom rows?  ✗    ·    accessible + mobile-native out of the box?  ✓"};class k{kind=B.required();schema=C(()=>{const i=this.kind();return i==="select"?re:ie(i==="multi")});static ɵfac=function(a){return new(a||k)};static ɵcmp=D({type:k,selectors:[["gal-select-schema"]],inputs:{kind:[1,"kind"]},decls:5,vars:3,consts:[[1,"sc"],[1,"sc-footer"],["aria-hidden","true",1,"sc-flow"],[1,"sc-layer"],[1,"sc-num"],[1,"sc-body"],[1,"sc-box"],[1,"sc-note"],[1,"sc-flow-line"],[1,"sc-flow-label"],[1,"sc-flow-arrow"]],template:function(a,n){a&1&&(m(0,"div",0),_(1,se,9,6,null,null,ae),m(3,"p",1),e(4),v()()),a&2&&(L("sc-native",n.schema().kind==="native"),l(),g(n.schema().layers),l(3),u(n.schema().footer))},styles:[`[_nghost-%COMP%] {
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
}`]})}const ce=()=>["popover","icons"],F=(s,i)=>i.value;function de(s,i){if(s&1){const a=$();t(0,"button",29),M("click",function(){const c=h(a).$implicit,d=b(2);return y(d.size.set(c))}),e(1),o()}if(s&2){const a=i.$implicit,n=b(2);L("is-on",n.size()===a),l(),R(" ",a," ")}}function pe(s,i){if(s&1){const a=$();t(0,"button",29),M("click",function(){const c=h(a).$implicit,d=b(2);return y(d.variant.set(c))}),e(1),o()}if(s&2){const a=i.$implicit,n=b(2);L("is-on",n.variant()===a),l(),R(" ",a," ")}}function me(s,i){if(s&1&&(t(0,"div",25)(1,"span",26),e(2,"size"),o(),t(3,"div",27),_(4,de,2,3,"button",28,V),o()(),t(6,"div",25)(7,"span",26),e(8,"variant"),o(),t(9,"div",27),_(10,pe,2,3,"button",28,V),o()()),s&2){const a=b();l(4),g(a.sizes),l(6),g(a.variants)}}function ue(s,i){if(s&1&&(t(0,"fold-option",15),e(1),o()),s&2){const a=i.$implicit;r("value",a.value),l(),u(a.label)}}function fe(s,i){if(s&1&&(t(0,"fold-option",15),e(1),o()),s&2){const a=i.$implicit;r("value",a.value),l(),u(a.label)}}function _e(s,i){if(s&1&&(t(0,"option",15),e(1),o()),s&2){const a=i.$implicit;r("value",a.value),l(),u(a.label)}}class S{tab=f("listbox");tabs=[{key:"listbox",label:"listbox",icon:"list"},{key:"multi",label:"multiselect",icon:"check-circle"},{key:"select",label:"select · native",icon:"chevron-down"}];currencies=[{value:"EUR",label:"Euro (€)"},{value:"USD",label:"US Dollar ($)"},{value:"GBP",label:"Livre sterling (£)"},{value:"JPY",label:"Yen (¥)"}];sizes=["sm","md","lg"];variants=["default","panel"];size=f("md");variant=f("default");lbValue=f("EUR");msValue=f(["EUR","GBP"]);selValue=f("EUR");lbCode=C(()=>this.snippet("fold-listbox",'[(value)]="currency"',"fold-option",["allowClear"]));msCode=C(()=>this.snippet("fold-multiselect",'[(value)]="picked"',"fold-option"));selCode=C(()=>this.snippet("fold-select",'[(value)]="currency"',"option"));snippet(i,a,n,c=[]){const d=['label="Devise"',a,...c];this.size()!=="md"&&d.push(`size="${this.size()}"`),this.variant()!=="default"&&d.push(`variant="${this.variant()}"`);const p=this.currencies.map(x=>`  <${n} value="${x.value}">${x.label}</${n}>`).join(`
`);return[`<${i}`,...d.map(x=>`  ${x}`),">",p,`</${i}>`].join(`
`)}static ɵfac=function(a){return new(a||S)};static ɵcmp=D({type:S,selectors:[["gal-listbox-page"]],decls:134,vars:26,consts:[["knobs",""],["t","foldTabs"],["title","listbox"],["description",""],["titleBadge","","kind","component"],[3,"ids"],[1,"sel-shell"],["direction","vertical","activeStyle","fill","background","transparent",1,"sel-rail",3,"tabChange","tabs","activeKey"],[1,"sel-panels"],["key","listbox",3,"tabs"],[1,"sel-lede"],[3,"code","responsive"],["params",""],[3,"ngTemplateOutlet"],["label","Devise","placeholder","Choisir une devise…",3,"valueChange","size","variant","allowClear","value"],[3,"value"],["title","Tech — how it works","icon","code"],[1,"sel-prose"],["kind","listbox"],["key","multi",3,"tabs"],["label","Devises","placeholder","Choisir plusieurs…",3,"valueChange","size","variant","value"],["kind","multi"],["key","select",3,"tabs"],["label","Devise","placeholder","Choisir…",3,"valueChange","size","variant","value"],["kind","select"],[1,"sel-knob"],[1,"gal-tag"],[1,"sel-seg"],["type","button",3,"is-on"],["type","button",3,"click"]],template:function(a,n){if(a&1){const c=$();t(0,"fold-page-layout",2)(1,"p",3),e(2," The "),t(3,"strong"),e(4,"styleable select family"),o(),e(5," — three ways to pick from a list, same tokens and box chrome. "),t(6,"code"),e(7,"fold-listbox"),o(),e(8," (one value) and "),t(9,"code"),e(10,"fold-multiselect"),o(),e(11," (a set) are built on "),t(12,"code"),e(13,"fold-popover"),o(),e(14," for a fully styleable panel; "),t(15,"code"),e(16,"fold-select"),o(),e(17," wraps a native "),t(18,"code"),e(19,"<select>"),o(),e(20," for a mobile-native, zero-JS default. Pick a tab. "),o(),w(21,"gal-kind-badge",4)(22,"gal-composed-of",5),K(23,me,12,0,"ng-template",null,0,q),t(25,"div",6)(26,"fold-tabs",7,1),M("tabChange",function(p){return n.tab.set(p)}),o(),t(28,"div",8)(29,"fold-tab-panel",9)(30,"p",10),e(31," A single-select on the native top layer. Options can be anything you project — an icon, a second line, a status — which is the reason to reach for it over the native "),t(32,"code"),e(33,"<select>"),o(),e(34,". Full keyboard, "),t(35,"code"),e(36,'role="listbox"'),o(),e(37," with "),t(38,"code"),e(39,"aria-activedescendant"),o(),e(40,", and Signal Forms ("),t(41,"code"),e(42,"value: string"),o(),e(43,"). "),o(),t(44,"dev-playground",11)(45,"div",12),P(46,13),o(),t(47,"fold-listbox",14),O("valueChange",function(p){return h(c),z(n.lbValue,p)||(n.lbValue=p),y(p)}),_(48,ue,2,2,"fold-option",15,F),o()(),t(50,"fold-page-section",16)(51,"p",17),e(52," The trigger stays in the normal flow; opening hands the panel to the browser's "),t(53,"strong"),e(54,"top layer"),o(),e(55,", so it escapes any "),t(56,"code"),e(57,"overflow"),o(),e(58," / "),t(59,"code"),e(60,"z-index"),o(),e(61,". The "),t(62,"code"),e(63,'role="listbox"'),o(),e(64," holds focus and points "),t(65,"code"),e(66,"aria-activedescendant"),o(),e(67," at the active row — the rows themselves stay dumb, each computing its own selected / active state from the owner. Selecting commits the value and closes, returning focus to the trigger. "),o(),w(68,"gal-select-schema",18),o()(),t(69,"fold-tab-panel",19)(70,"p",10),e(71," The same popover and rows, but the value is a "),t(72,"strong"),e(73,"set"),o(),e(74," ("),t(75,"code"),e(76,"readonly string[]"),o(),e(77,"): activating a row toggles it and the panel "),t(78,"strong"),e(79,"stays open"),o(),e(80,". A separate component, not a "),t(81,"code"),e(82,"multiple"),o(),e(83," flag, so the Signal-Forms value type stays honest. "),t(84,"code"),e(85,"aria-multiselectable"),o(),e(86,"; the trigger summarises the picks. "),o(),t(87,"dev-playground",11)(88,"div",12),P(89,13),o(),t(90,"fold-multiselect",20),O("valueChange",function(p){return h(c),z(n.msValue,p)||(n.msValue=p),y(p)}),_(91,fe,2,2,"fold-option",15,F),o()(),t(93,"fold-page-section",16)(94,"p",17),e(95," Structurally identical to the listbox — same top-layer panel, same roving keyboard core (shared via a "),t(96,"code"),e(97,"FOLD_LISTBOX_OWNER"),o(),e(98," token). The only differences live at the edges: "),t(99,"code"),e(100,"aria-multiselectable"),o(),e(101,", activation "),t(102,"strong"),e(103,"toggles membership"),o(),e(104," instead of committing, and the panel is never closed on a pick — so several choices are one interaction. "),o(),w(105,"gal-select-schema",21),o()(),t(106,"fold-tab-panel",22)(107,"p",10),e(108," A thin wrapper around a real "),t(109,"code"),e(110,"<select>"),o(),e(111," — the lighter default. Not styleable inside the popup and rows are plain text, but you get the OS's keyboard, focus and a native mobile wheel for free. Reach for it unless you need custom rows. "),o(),t(112,"dev-playground",11)(113,"div",12),P(114,13),o(),t(115,"fold-select",23),O("valueChange",function(p){return h(c),z(n.selValue,p)||(n.selValue=p),y(p)}),_(116,_e,2,2,"option",15,F),o()(),t(118,"fold-page-section",16)(119,"p",17),e(120," No popover, no ARIA to run: "),t(121,"code"),e(122,"fold-select"),o(),e(123," only restyles the closed control (box + caret) and forwards "),t(124,"code"),e(125,"[value]"),o(),e(126," / "),t(127,"code"),e(128,"(change)"),o(),e(129," to Signal Forms. When it opens, the "),t(130,"strong"),e(131,"operating system"),o(),e(132," paints the option list — outside your DOM, so it can't be styled, but keyboard, focus and the touch wheel are all handled for you. "),o(),w(133,"gal-select-schema",24),o()()()()()}if(a&2){const c=E(24),d=E(27);l(22),r("ids",J(25,ce)),l(4),r("tabs",n.tabs)("activeKey",n.tab()),l(3),r("tabs",d),l(15),r("code",n.lbCode())("responsive",!1),l(2),r("ngTemplateOutlet",c),l(),r("size",n.size())("variant",n.variant())("allowClear",!0),T("value",n.lbValue),l(),g(n.currencies),l(21),r("tabs",d),l(18),r("code",n.msCode())("responsive",!1),l(2),r("ngTemplateOutlet",c),l(),r("size",n.size())("variant",n.variant()),T("value",n.msValue),l(),g(n.currencies),l(15),r("tabs",d),l(6),r("code",n.selCode())("responsive",!1),l(2),r("ngTemplateOutlet",c),l(),r("size",n.size())("variant",n.variant()),T("value",n.selValue),l(),g(n.currencies)}},dependencies:[j,G,X,Y,k,U,H,Q,Z,ee,oe,te,ne],styles:[`.sel-shell {
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
}`],encapsulation:2})}export{S as default};
