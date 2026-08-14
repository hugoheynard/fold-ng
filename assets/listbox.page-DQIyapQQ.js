import{u as R,A as z,ɵ as E,y as _,i as y,e,z as x,L,j as n,o as w,k as u,w as W,x as D,W as $,aO as N,q as C,s as m,ar as B,c as K,E as V,d as a,f as o,g as P,H as U,h as b,au as T,a3 as I,m as d,U as G,n as g,T as M,B as j,l as A,N as f,O as v,Q as q,r as h}from"./index-BpnHZqq2.js";import{K as J}from"./kind-badge.component-plE_QRie.js";import{C as X}from"./composed-of.component-CxvIe7u2.js";import{D as Y}from"./playground.component-hLCnq0AI.js";import{FoldPageSectionComponent as H}from"./page-section.component-BM1z6GqB.js";import{FoldTabsComponent as Q}from"./tabs.component-BCj225ps.js";import{FoldTabPanelComponent as Z}from"./tab-panel.component-Cg8S2YMF.js";import{FoldListboxComponent as ee}from"./listbox.component-Cwwel1n_.js";import{FoldMultiselectComponent as oe}from"./multiselect.component-B0nSEAdp.js";import{FoldOptgroupComponent as ae}from"./optgroup.component-DSdDvPPZ.js";import{F as te}from"./option.component-9MvTzJiD.js";import{FoldSelectComponent as ne}from"./select.component-InXwKPvB.js";import"./button.component-uG6n0sWz.js";import"./element-title.component-hCLQBIwe.js";import"./slider.component-Cnrf6kgi.js";import"./input-value-DCGlOvqF.js";import"./nav-layout.context-CA1APb_V.js";import"./common-labels-DmS0M1H_.js";import"./popover.component-DLuCyted.js";import"./popover-trigger.directive-DCkhwS4j.js";import"./input-base.component-CTdiYza1.js";import"./info.component-Cs_7pNsa.js";import"./label.component-CHEdKTNU.js";import"./listbox-nav-DoC28DEf.js";const le=(s,i)=>i.box;function ie(s,i){if(s&1&&(_(0,"div",2),N(1,"span",8),_(2,"span",9),e(3),x(),_(4,"span",10),e(5,"↓"),x()()),s&2){const l=C().$implicit;n(3),u(l.flow)}}function se(s,i){if(s&1&&(W(0,ie,6,1,"div",2),_(1,"div",3)(2,"span",4),e(3),x(),_(4,"div",5)(5,"code",6),e(6),x(),_(7,"span",7),e(8),x()()()),s&2){const l=i.$implicit,t=i.$index,c=i.$index;D(c!==0?0:-1),n(),$("--i",t),n(2),u(t+1),n(3),u(l.box),n(2),u(l.note)}}const re=s=>({kind:"popover",layers:[{box:"<button> trigger",note:s?'aria-haspopup="listbox" · aria-expanded · summarises the picks':'aria-haspopup="listbox" · aria-expanded · shows the selected label',flow:""},{box:"fold-popover — native top layer",note:"escapes overflow + z-index · flip → size → shift · publishes --fold-popover-anchor-width",flow:"click / ↓ opens"},{box:s?'role="listbox" + aria-multiselectable — holds focus':'role="listbox" — holds focus',note:"aria-activedescendant → the active option's id (focus never leaves)",flow:"renders the panel"},{box:"fold-option × N",note:"each derives its own selected / active from the owner (a computed reading the FOLD_LISTBOX_OWNER token — nothing pushed in during change detection)",flow:"projects rows"}],footer:s?"↑/↓ move active · Enter/Space toggles membership · panel stays open · value = readonly string[]":"↑/↓ move active · Enter commits + closes · returns focus to the trigger · value = string"}),de={kind:"native",layers:[{box:"fold-select",note:"a thin wrapper — styled box + custom caret over the real control",flow:""},{box:"native <select>",note:"[value] / (change) · Signal Forms · the browser owns keyboard + focus",flow:"wraps"},{box:"OS popup (browser / operating system)",note:"NOT in your DOM · not styleable · a native mobile wheel for free",flow:"opens"},{box:"<option> × N",note:"real projected option elements — plain text only",flow:"lists"}],footer:"styleable panel / custom rows?  ✗    ·    accessible + mobile-native out of the box?  ✓"};class O{kind=R.required();schema=z(()=>{const i=this.kind();return i==="select"?de:re(i==="multi")});static ɵfac=function(l){return new(l||O)};static ɵcmp=E({type:O,selectors:[["gal-select-schema"]],inputs:{kind:[1,"kind"]},decls:5,vars:3,consts:[[1,"sc"],[1,"sc-footer"],["aria-hidden","true",1,"sc-flow"],[1,"sc-layer"],[1,"sc-num"],[1,"sc-body"],[1,"sc-box"],[1,"sc-note"],[1,"sc-flow-line"],[1,"sc-flow-label"],[1,"sc-flow-arrow"]],template:function(l,t){l&1&&(_(0,"div",0),y(1,se,9,6,null,null,le),_(3,"p",1),e(4),x()()),l&2&&(L("sc-native",t.schema().kind==="native"),n(),w(t.schema().layers),n(3),u(t.schema().footer))},styles:[`[_nghost-%COMP%] {
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
}`]})}const ce=()=>["popover","icons"],F=(s,i)=>i.value,pe=(s,i)=>i.id;function ue(s,i){if(s&1){const l=V();a(0,"button",44),j("click",function(){const c=f(l).$implicit,p=C(2);return v(p.size.set(c))}),e(1),o()}if(s&2){const l=i.$implicit,t=C(2);L("is-on",t.size()===l),n(),A(" ",l," ")}}function me(s,i){if(s&1){const l=V();a(0,"button",44),j("click",function(){const c=f(l).$implicit,p=C(2);return v(p.variant.set(c))}),e(1),o()}if(s&2){const l=i.$implicit,t=C(2);L("is-on",t.variant()===l),n(),A(" ",l," ")}}function fe(s,i){if(s&1&&(a(0,"div",40)(1,"span",41),e(2,"size"),o(),a(3,"div",42),y(4,ue,2,3,"button",43,M),o()(),a(6,"div",40)(7,"span",41),e(8,"variant"),o(),a(9,"div",42),y(10,me,2,3,"button",43,M),o()()),s&2){const l=C();n(4),w(l.sizes),n(6),w(l.variants)}}function ve(s,i){if(s&1&&(a(0,"fold-option",15),e(1),o()),s&2){const l=i.$implicit;d("value",l.value),n(),u(l.label)}}function be(s,i){if(s&1&&(a(0,"fold-option",15),e(1),o()),s&2){const l=i.$implicit;d("value",l.value),n(),u(l.label)}}function ge(s,i){if(s&1&&(a(0,"option",15),e(1),o()),s&2){const l=i.$implicit;d("value",l.value),n(),u(l.label)}}function he(s,i){if(s&1&&(a(0,"fold-option",15),e(1),o()),s&2){const l=i.$implicit;d("value",l),n(),u(l.name)}}class S{tab=m("listbox");tabs=[{key:"listbox",label:"listbox",icon:"list"},{key:"grouped",label:"grouped",icon:"folder-open"},{key:"multi",label:"multiselect",icon:"check-circle"},{key:"select",label:"select · native",icon:"chevron-down"},{key:"typed",label:"typed value",icon:"code"}];cityValue=m(null);cityArrayValue=m(null);cityGroups=[{label:"France",options:[{value:"paris",label:"Paris"},{value:"lyon",label:"Lyon"}]},{label:"Italia",options:[{value:"roma",label:"Roma"},{value:"milano",label:"Milano"}]}];groupedCode=`<!-- projected: <fold-optgroup> around <fold-option>s -->
<fold-listbox label="Ville" [(value)]="city">
  <fold-optgroup label="France">
    <fold-option value="paris">Paris</fold-option>
    <fold-option value="lyon">Lyon</fold-option>
  </fold-optgroup>
  <fold-optgroup label="Italia">
    <fold-option value="roma">Roma</fold-option>
  </fold-optgroup>
</fold-listbox>

<!-- data-driven: groups in the [options] array (FoldSelectItem<T>[]) -->
groups = [
  { label: 'France', options: [{ value: 'paris', label: 'Paris' }, …] },
  { label: 'Italia', options: [{ value: 'roma',  label: 'Roma'  }] },
];
<fold-listbox label="Ville" [(value)]="city" [options]="groups" />`;plans=[{value:1,label:"Starter"},{value:2,label:"Pro"},{value:3,label:"Enterprise",disabled:!0}];planId=m(2);teams=[{id:10,name:"Design"},{id:20,name:"Engineering"}];team=m(null);sameId=(i,l)=>i.id===l.id;typedCode=`<!-- number ids via the [options] array API -->
<fold-listbox label="Plan" [(value)]="planId" [options]="plans" />

<!-- object values need a compareWith (matches by id, not reference) -->
<fold-listbox label="Team" [(value)]="team" [compareWith]="sameId">
  @for (t of teams; track t.id) {
    <fold-option [value]="t">{{ t.name }}</fold-option>
  }
</fold-listbox>`;currencies=[{value:"EUR",label:"Euro (€)"},{value:"USD",label:"US Dollar ($)"},{value:"GBP",label:"Livre sterling (£)"},{value:"JPY",label:"Yen (¥)"}];sizes=["sm","md","lg"];variants=["default","panel"];size=m("md");variant=m("default");lbValue=m("EUR");msValue=m(["EUR","GBP"]);selValue=m("EUR");lbCode=z(()=>this.snippet("fold-listbox",'[(value)]="currency"',"fold-option",["allowClear"]));msCode=z(()=>this.snippet("fold-multiselect",'[(value)]="picked"',"fold-option",["allowSelectAll","allowClear"]));selCode=z(()=>this.snippet("fold-select",'[(value)]="currency"',"option"));snippet(i,l,t,c=[]){const p=['label="Devise"',l,...c];this.size()!=="md"&&p.push(`size="${this.size()}"`),this.variant()!=="default"&&p.push(`variant="${this.variant()}"`);const r=this.currencies.map(k=>`  <${t} value="${k.value}">${k.label}</${t}>`).join(`
`);return[`<${i}`,...p.map(k=>`  ${k}`),">",r,`</${i}>`].join(`
`)}static ɵfac=function(l){return new(l||S)};static ɵcmp=E({type:S,selectors:[["gal-listbox-page"]],decls:251,vars:54,consts:[["knobs",""],["t","foldTabs"],["title","listbox"],["description",""],["titleBadge","","kind","component"],[3,"ids"],[1,"sel-shell"],["direction","vertical","activeStyle","fill","background","transparent",1,"sel-rail",3,"activeKeyChange","tabs","activeKey"],[1,"sel-panels"],["key","listbox",3,"tabs"],[1,"sel-lede"],[3,"code","responsive"],["params",""],[3,"ngTemplateOutlet"],["label","Devise","placeholder","Choisir une devise…",3,"valueChange","size","variant","allowClear","value"],[3,"value"],["title","Tech — how it works","icon","code"],[1,"sel-prose"],["kind","listbox"],["key","grouped",3,"tabs"],[1,"sel-typed"],["label","Ville (projected)","placeholder","Choisir une ville…",3,"valueChange","size","variant","allowClear","value"],["label","France"],["value","paris"],["value","lyon"],["value","marseille"],["label","Italia"],["value","roma"],["value","milano"],["label","Ville ([options] array)","placeholder","Choisir une ville…",3,"valueChange","size","variant","allowClear","options","value"],["key","multi",3,"tabs"],["label","Devises","placeholder","Choisir plusieurs…",3,"valueChange","size","variant","allowSelectAll","allowClear","value"],["kind","multi"],["key","select",3,"tabs"],["label","Devise","placeholder","Choisir…",3,"valueChange","size","variant","value"],["kind","select"],["key","typed",3,"tabs"],["label","Plan (number, [options])","placeholder","Pick a plan…",3,"valueChange","size","variant","options","value"],[1,"sel-readout"],["label","Team (object, compareWith)","placeholder","Pick a team…",3,"valueChange","size","variant","compareWith","value"],[1,"sel-knob"],[1,"gal-tag"],[1,"sel-seg"],["type","button",3,"is-on"],["type","button",3,"click"]],template:function(l,t){if(l&1){const c=V();a(0,"fold-page-layout",2)(1,"p",3),e(2," The "),a(3,"strong"),e(4,"styleable select family"),o(),e(5," — three ways to pick from a list, same tokens and box chrome. "),a(6,"code"),e(7,"fold-listbox"),o(),e(8," (one value) and "),a(9,"code"),e(10,"fold-multiselect"),o(),e(11," (a set) are built on "),a(12,"code"),e(13,"fold-popover"),o(),e(14," for a fully styleable panel; "),a(15,"code"),e(16,"fold-select"),o(),e(17," wraps a native "),a(18,"code"),e(19,"<select>"),o(),e(20," for a mobile-native, zero-JS default. Pick a tab. "),o(),P(21,"gal-kind-badge",4)(22,"gal-composed-of",5),U(23,fe,12,0,"ng-template",null,0,q),a(25,"div",6)(26,"fold-tabs",7,1),b("activeKeyChange",function(r){return f(c),h(t.tab,r)||(t.tab=r),v(r)}),o(),a(28,"div",8)(29,"fold-tab-panel",9)(30,"p",10),e(31," A single-select on the native top layer. Options can be anything you project — an icon, a second line, a status — which is the reason to reach for it over the native "),a(32,"code"),e(33,"<select>"),o(),e(34,". Full keyboard, "),a(35,"code"),e(36,'role="listbox"'),o(),e(37," with "),a(38,"code"),e(39,"aria-activedescendant"),o(),e(40,", and Signal Forms ("),a(41,"code"),e(42,"value: string"),o(),e(43,"). "),o(),a(44,"dev-playground",11)(45,"div",12),T(46,13),o(),a(47,"fold-listbox",14),b("valueChange",function(r){return f(c),h(t.lbValue,r)||(t.lbValue=r),v(r)}),y(48,ve,2,2,"fold-option",15,F),o()(),a(50,"fold-page-section",16)(51,"p",17),e(52," The trigger stays in the normal flow; opening hands the panel to the browser's "),a(53,"strong"),e(54,"top layer"),o(),e(55,", so it escapes any "),a(56,"code"),e(57,"overflow"),o(),e(58," / "),a(59,"code"),e(60,"z-index"),o(),e(61,". The "),a(62,"code"),e(63,'role="listbox"'),o(),e(64," holds focus and points "),a(65,"code"),e(66,"aria-activedescendant"),o(),e(67," at the active row — the rows themselves stay dumb, each computing its own selected / active state from the owner. Selecting commits the value and closes, returning focus to the trigger. "),o(),P(68,"gal-select-schema",18),o()(),a(69,"fold-tab-panel",19)(70,"p",10),e(71," Sort a long list into labelled sections with "),a(72,"code"),e(73,"<fold-optgroup>"),o(),e(74," — the styleable "),a(75,"code"),e(76,"<optgroup>"),o(),e(77,". The header is non-selectable ("),a(78,"code"),e(79,'role="group"'),o(),e(80,", "),a(81,"code"),e(82,"aria-labelledby"),o(),e(83,") and the keyboard "),a(84,"strong"),e(85,"roves straight across group boundaries"),o(),e(86," in document order, so grouping changes the layout, never the nav model. "),o(),a(87,"dev-playground",11)(88,"div",12),T(89,13),o(),a(90,"div",20)(91,"fold-listbox",21),b("valueChange",function(r){return f(c),h(t.cityValue,r)||(t.cityValue=r),v(r)}),a(92,"fold-optgroup",22)(93,"fold-option",23),e(94,"Paris"),o(),a(95,"fold-option",24),e(96,"Lyon"),o(),a(97,"fold-option",25),e(98,"Marseille"),o()(),a(99,"fold-optgroup",26)(100,"fold-option",27),e(101,"Roma"),o(),a(102,"fold-option",28),e(103,"Milano"),o()()(),a(104,"fold-listbox",29),b("valueChange",function(r){return f(c),h(t.cityArrayValue,r)||(t.cityArrayValue=r),v(r)}),o()()(),a(105,"fold-page-section",16)(106,"p",17)(107,"code"),e(108,"fold-optgroup"),o(),e(109," is purely presentational — it renders the heading and projects its rows. The owning listbox discovers grouped options with a "),a(110,"code"),e(111,"descendants: true"),o(),e(112," content query, so they join the same flat, document-ordered list the roving core walks; the group header carries no "),a(113,"code"),e(114,'role="option"'),o(),e(115,", so keyboard nav skips it. Works the same inside "),a(116,"code"),e(117,"fold-multiselect"),o(),e(118,". "),o()()(),a(119,"fold-tab-panel",30)(120,"p",10),e(121," The same popover and rows, but the value is a "),a(122,"strong"),e(123,"set"),o(),e(124," ("),a(125,"code"),e(126,"readonly string[]"),o(),e(127,"): activating a row toggles it and the panel "),a(128,"strong"),e(129,"stays open"),o(),e(130,". A separate component, not a "),a(131,"code"),e(132,"multiple"),o(),e(133," flag, so the Signal-Forms value type stays honest. "),a(134,"code"),e(135,"aria-multiselectable"),o(),e(136,"; the trigger summarises the picks. "),a(137,"code"),e(138,"allowSelectAll"),o(),e(139," / "),a(140,"code"),e(141,"allowClear"),o(),e(142," add a sticky bulk-action bar at the top of the panel (select-all skips disabled rows and keeps already-picked ones). "),o(),a(143,"dev-playground",11)(144,"div",12),T(145,13),o(),a(146,"fold-multiselect",31),b("valueChange",function(r){return f(c),h(t.msValue,r)||(t.msValue=r),v(r)}),y(147,be,2,2,"fold-option",15,F),o()(),a(149,"fold-page-section",16)(150,"p",17),e(151," Structurally identical to the listbox — same top-layer panel, same roving keyboard core (shared via a "),a(152,"code"),e(153,"FOLD_LISTBOX_OWNER"),o(),e(154," token). The only differences live at the edges: "),a(155,"code"),e(156,"aria-multiselectable"),o(),e(157,", activation "),a(158,"strong"),e(159,"toggles membership"),o(),e(160," instead of committing, and the panel is never closed on a pick — so several choices are one interaction. "),o(),P(161,"gal-select-schema",32),o()(),a(162,"fold-tab-panel",33)(163,"p",10),e(164," A thin wrapper around a real "),a(165,"code"),e(166,"<select>"),o(),e(167," — the lighter default. Not styleable inside the popup and rows are plain text, but you get the OS's keyboard, focus and a native mobile wheel for free. Reach for it unless you need custom rows. "),o(),a(168,"dev-playground",11)(169,"div",12),T(170,13),o(),a(171,"fold-select",34),b("valueChange",function(r){return f(c),h(t.selValue,r)||(t.selValue=r),v(r)}),y(172,ge,2,2,"option",15,F),o()(),a(174,"fold-page-section",16)(175,"p",17),e(176," No popover, no ARIA to run: "),a(177,"code"),e(178,"fold-select"),o(),e(179," only restyles the closed control (box + caret) and forwards "),a(180,"code"),e(181,"[value]"),o(),e(182," / "),a(183,"code"),e(184,"(change)"),o(),e(185," to Signal Forms. When it opens, the "),a(186,"strong"),e(187,"operating system"),o(),e(188," paints the option list — outside your DOM, so it can't be styled, but keyboard, focus and the touch wheel are all handled for you. "),o(),P(189,"gal-select-schema",35),o()(),a(190,"fold-tab-panel",36)(191,"p",17),e(192," The value is "),a(193,"strong"),e(194,"generic"),o(),e(195," — "),a(196,"code"),e(197,"string"),o(),e(198," by inference, but "),a(199,"code"),e(200,"number"),o(),e(201,", an "),a(202,"code"),e(203,"enum"),o(),e(204," or an "),a(205,"strong"),e(206,"object"),o(),e(207," all work with the type preserved end-to-end. Two entry points: a data-driven "),a(208,"code"),e(209,"[options]"),o(),e(210," array (value type linked at compile time) or projected "),a(211,"code"),e(212,"<fold-option>"),o(),e(213,". Objects match via "),a(214,"code"),e(215,"compareWith"),o(),e(216," (default "),a(217,"code"),e(218,"Object.is"),o(),e(219,"); primitives need nothing. "),o(),a(220,"dev-playground",11)(221,"div",20)(222,"fold-listbox",37),b("valueChange",function(r){return f(c),h(t.planId,r)||(t.planId=r),v(r)}),o(),a(223,"p",38),e(224," planId = "),a(225,"code"),e(226),o()(),a(227,"fold-listbox",39),b("valueChange",function(r){return f(c),h(t.team,r)||(t.team=r),v(r)}),y(228,he,2,2,"fold-option",15,pe),o(),a(230,"p",38),e(231," team = "),a(232,"code"),e(233),o()()()(),a(234,"fold-page-section",16)(235,"p",17)(236,"code"),e(237,"T"),o(),e(238," is inferred from "),a(239,"code"),e(240,"[(value)]"),o(),e(241,". The option↔value link the compiler can't see through projection is the one seam erased to "),a(242,"code"),e(243,"unknown"),o(),e(244," (the owner token); everywhere the operands are actually "),a(245,"code"),e(246,"T"),o(),e(247," stays typed, and a dev-mode warning fires if a held value matches no option. The "),a(248,"code"),e(249,"[options]"),o(),e(250," array closes even that seam — value and options are checked together at build time. "),o()()()()()()}if(l&2){const c=I(24),p=I(27);n(22),d("ids",G(53,ce)),n(4),d("tabs",t.tabs),g("activeKey",t.tab),n(3),d("tabs",p),n(15),d("code",t.lbCode())("responsive",!1),n(2),d("ngTemplateOutlet",c),n(),d("size",t.size())("variant",t.variant())("allowClear",!0),g("value",t.lbValue),n(),w(t.currencies),n(21),d("tabs",p),n(18),d("code",t.groupedCode)("responsive",!1),n(2),d("ngTemplateOutlet",c),n(2),d("size",t.size())("variant",t.variant())("allowClear",!0),g("value",t.cityValue),n(13),d("size",t.size())("variant",t.variant())("allowClear",!0)("options",t.cityGroups),g("value",t.cityArrayValue),n(15),d("tabs",p),n(24),d("code",t.msCode())("responsive",!1),n(2),d("ngTemplateOutlet",c),n(),d("size",t.size())("variant",t.variant())("allowSelectAll",!0)("allowClear",!0),g("value",t.msValue),n(),w(t.currencies),n(15),d("tabs",p),n(6),d("code",t.selCode())("responsive",!1),n(2),d("ngTemplateOutlet",c),n(),d("size",t.size())("variant",t.variant()),g("value",t.selValue),n(),w(t.currencies),n(18),d("tabs",p),n(30),d("code",t.typedCode)("responsive",!1),n(2),d("size",t.size())("variant",t.variant())("options",t.plans),g("value",t.planId),n(4),u(t.planId()??"null"),n(),d("size",t.size())("variant",t.variant())("compareWith",t.sameId),g("value",t.team),n(),w(t.teams),n(5),u(t.team()?.name??"null")}},dependencies:[B,J,X,Y,O,K,H,Q,Z,ee,oe,ae,te,ne],styles:[`.sel-shell {
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
