import{u as R,A as z,ɵ as E,y as _,i as y,e,z as x,L,j as t,o as w,k as v,w as W,x as D,W as N,aN as $,q as C,s as u,aq as B,c as K,E as V,d as a,f as o,g as P,H as U,h as b,at as T,a3 as I,m as d,U as q,n as g,T as M,B as A,l as j,N as m,O as f,Q as G,r as h}from"./index-By3pHVr1.js";import{K as J}from"./kind-badge.component-DWOXgCay.js";import{C as X}from"./composed-of.component-Du_YnWlC.js";import{D as Y}from"./playground.component-BiXdrYCj.js";import{FoldPageSectionComponent as H}from"./page-section.component-B_OYmr3T.js";import{FoldTabsComponent as Q}from"./tabs.component-DNzZcTqE.js";import{FoldTabPanelComponent as Z}from"./tab-panel.component-ChxVNSBl.js";import{FoldListboxComponent as ee}from"./listbox.component-DAqo7KEY.js";import{FoldMultiselectComponent as oe}from"./multiselect.component-CP_JV1Jc.js";import{FoldOptgroupComponent as ae}from"./optgroup.component-CIGjqR41.js";import{F as le}from"./option.component-BrEHzrB3.js";import{FoldSelectComponent as te}from"./select.component-BCh4vpCf.js";import"./button.component-DI23v522.js";import"./element-title.component-CwgYZAI_.js";import"./slider.component-D3Ig6xx_.js";import"./input-value-DCGlOvqF.js";import"./tab-tooltip.directive-uMpodBW3.js";import"./auto-update-_srfpL1Q.js";import"./nav-layout.context-DxpERS9Y.js";import"./common-labels-9KQng0J2.js";import"./popover.component-CBCjmDIn.js";import"./popover-trigger.directive-CdhHcLGV.js";import"./input-base.component-DOVpr4gG.js";import"./info.component-BlSdLQwM.js";import"./label.component-BlCaSxW3.js";import"./select-option-O1EpAQQH.js";import"./listbox-nav-CK8sUMAk.js";import"./option-filter-BjDrTtmX.js";const ne=(r,s)=>s.box;function ie(r,s){if(r&1&&(_(0,"div",2),$(1,"span",8),_(2,"span",9),e(3),x(),_(4,"span",10),e(5,"↓"),x()()),r&2){const n=C().$implicit;t(3),v(n.flow)}}function se(r,s){if(r&1&&(W(0,ie,6,1,"div",2),_(1,"div",3)(2,"span",4),e(3),x(),_(4,"div",5)(5,"code",6),e(6),x(),_(7,"span",7),e(8),x()()()),r&2){const n=s.$implicit,l=s.$index,c=s.$index;D(c!==0?0:-1),t(),N("--i",l),t(2),v(l+1),t(3),v(n.box),t(2),v(n.note)}}const re=r=>({kind:"popover",layers:[{box:"<button> trigger",note:r?'aria-haspopup="listbox" · aria-expanded · summarises the picks':'aria-haspopup="listbox" · aria-expanded · shows the selected label',flow:""},{box:"fold-popover — native top layer",note:"escapes overflow + z-index · flip → size → shift · publishes --fold-popover-anchor-width",flow:"click / ↓ opens"},{box:r?'role="listbox" + aria-multiselectable — holds focus':'role="listbox" — holds focus',note:"aria-activedescendant → the active option's id (focus never leaves)",flow:"renders the panel"},{box:"fold-option × N",note:"each derives its own selected / active from the owner (a computed reading the FOLD_LISTBOX_OWNER token — nothing pushed in during change detection)",flow:"projects rows"}],footer:r?"↑/↓ move active · Enter/Space toggles membership · panel stays open · value = readonly string[]":"↑/↓ move active · Enter commits + closes · returns focus to the trigger · value = string"}),de={kind:"native",layers:[{box:"fold-select",note:"a thin wrapper — styled box + custom caret over the real control",flow:""},{box:"native <select>",note:"[value] / (change) · Signal Forms · the browser owns keyboard + focus",flow:"wraps"},{box:"OS popup (browser / operating system)",note:"NOT in your DOM · not styleable · a native mobile wheel for free",flow:"opens"},{box:"<option> × N",note:"real projected option elements — plain text only",flow:"lists"}],footer:"styleable panel / custom rows?  ✗    ·    accessible + mobile-native out of the box?  ✓"};class O{kind=R.required();schema=z(()=>{const s=this.kind();return s==="select"?de:re(s==="multi")});static ɵfac=function(n){return new(n||O)};static ɵcmp=E({type:O,selectors:[["gal-select-schema"]],inputs:{kind:[1,"kind"]},decls:5,vars:3,consts:[[1,"sc"],[1,"sc-footer"],["aria-hidden","true",1,"sc-flow"],[1,"sc-layer"],[1,"sc-num"],[1,"sc-body"],[1,"sc-box"],[1,"sc-note"],[1,"sc-flow-line"],[1,"sc-flow-label"],[1,"sc-flow-arrow"]],template:function(n,l){n&1&&(_(0,"div",0),y(1,se,9,6,null,null,ne),_(3,"p",1),e(4),x()()),n&2&&(L("sc-native",l.schema().kind==="native"),t(),w(l.schema().layers),t(3),v(l.schema().footer))},styles:[`[_nghost-%COMP%] {
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
  font-weight: var(--fold-weight-semibold);
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
  font-family: var(--fold-font-mono);
  font-size: var(--fold-text-sm);
  color: var(--fold-color-text);
}

.sc-note[_ngcontent-%COMP%] {
  font-size: var(--fold-text-xs);
  color: var(--fold-color-text-muted);
  line-height: var(--fold-leading-normal);
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
  line-height: var(--fold-leading-normal);
}`]})}const ce=()=>["popover","icons"],F=(r,s)=>s.value,pe=(r,s)=>s.id;function ue(r,s){if(r&1){const n=V();a(0,"button",46),A("click",function(){const c=m(n).$implicit,p=C(2);return f(p.size.set(c))}),e(1),o()}if(r&2){const n=s.$implicit,l=C(2);L("is-on",l.size()===n),t(),j(" ",n," ")}}function me(r,s){if(r&1){const n=V();a(0,"button",46),A("click",function(){const c=m(n).$implicit,p=C(2);return f(p.variant.set(c))}),e(1),o()}if(r&2){const n=s.$implicit,l=C(2);L("is-on",l.variant()===n),t(),j(" ",n," ")}}function fe(r,s){if(r&1&&(a(0,"div",42)(1,"span",43),e(2,"size"),o(),a(3,"div",44),y(4,ue,2,3,"button",45,M),o()(),a(6,"div",42)(7,"span",43),e(8,"variant"),o(),a(9,"div",44),y(10,me,2,3,"button",45,M),o()()),r&2){const n=C();t(4),w(n.sizes),t(6),w(n.variants)}}function ve(r,s){if(r&1&&(a(0,"fold-option",15),e(1),o()),r&2){const n=s.$implicit;d("value",n.value),t(),v(n.label)}}function be(r,s){if(r&1&&(a(0,"fold-option",15),e(1),o()),r&2){const n=s.$implicit;d("value",n.value),t(),v(n.label)}}function ge(r,s){if(r&1&&(a(0,"option",15),e(1),o()),r&2){const n=s.$implicit;d("value",n.value),t(),v(n.label)}}function he(r,s){if(r&1&&(a(0,"fold-option",15),e(1),o()),r&2){const n=s.$implicit;d("value",n),t(),v(n.name)}}class S{tab=u("listbox");tabs=[{key:"listbox",label:"listbox",icon:"list"},{key:"grouped",label:"grouped",icon:"folder-open"},{key:"multi",label:"multiselect",icon:"check-circle"},{key:"select",label:"select · native",icon:"chevron-down"},{key:"typed",label:"typed value",icon:"code"}];cityValue=u(null);cityArrayValue=u(null);cityGroups=[{label:"France",options:[{value:"paris",label:"Paris"},{value:"lyon",label:"Lyon"}]},{label:"Italia",options:[{value:"roma",label:"Roma"},{value:"milano",label:"Milano"}]}];groupedCode=`<!-- projected: <fold-optgroup> around <fold-option>s -->
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
<fold-listbox label="Ville" [(value)]="city" [options]="groups" />`;plans=[{value:1,label:"Starter"},{value:2,label:"Pro"},{value:3,label:"Enterprise",disabled:!0}];planId=u(2);teams=[{id:10,name:"Design"},{id:20,name:"Engineering"}];team=u(null);sameId=(s,n)=>s.id===n.id;typedCode=`<!-- number ids via the [options] array API -->
<fold-listbox label="Plan" [(value)]="planId" [options]="plans" />

<!-- object values need a compareWith (matches by id, not reference) -->
<fold-listbox label="Team" [(value)]="team" [compareWith]="sameId">
  @for (t of teams; track t.id) {
    <fold-option [value]="t">{{ t.name }}</fold-option>
  }
</fold-listbox>`;currencies=[{value:"EUR",label:"Euro (€)"},{value:"USD",label:"US Dollar ($)"},{value:"GBP",label:"Livre sterling (£)"},{value:"JPY",label:"Yen (¥)"}];allergens=[{value:"gluten",label:"Gluten"},{value:"milk",label:"Lait"},{value:"egg",label:"Œufs"},{value:"sesame",label:"Sésame"},{label:"Fruits à coque",options:[{value:"almond",label:"Amandes"},{value:"hazelnut",label:"Noisettes"},{value:"walnut",label:"Noix"},{value:"pistachio",label:"Pistaches"}]},{label:"Produits de la mer",options:[{value:"fish",label:"Poissons"},{value:"crustacean",label:"Crustacés"},{value:"mollusc",label:"Mollusques"}]}];allergenValue=u(["walnut"]);sizes=["sm","md","lg"];variants=["default","panel"];size=u("md");variant=u("default");lbValue=u("EUR");msValue=u(["EUR","GBP"]);selValue=u("EUR");lbCode=z(()=>this.snippet("fold-listbox",'[(value)]="currency"',"fold-option",["allowClear"]));msCode=z(()=>this.snippet("fold-multiselect",'[(value)]="picked"',"fold-option",["allowSelectAll","allowClear"]));selCode=z(()=>this.snippet("fold-select",'[(value)]="currency"',"option"));snippet(s,n,l,c=[]){const p=['label="Devise"',n,...c];this.size()!=="md"&&p.push(`size="${this.size()}"`),this.variant()!=="default"&&p.push(`variant="${this.variant()}"`);const i=this.currencies.map(k=>`  <${l} value="${k.value}">${k.label}</${l}>`).join(`
`);return[`<${s}`,...p.map(k=>`  ${k}`),">",i,`</${s}>`].join(`
`)}static ɵfac=function(n){return new(n||S)};static ɵcmp=E({type:S,selectors:[["gal-listbox-page"]],decls:272,vars:56,consts:[["knobs",""],["t","foldTabs"],["title","listbox"],["description",""],["titleBadge","","kind","component"],[3,"ids"],[1,"sel-shell"],["direction","vertical","activeStyle","fill","background","transparent",1,"sel-rail",3,"activeKeyChange","tabs","activeKey"],[1,"sel-panels"],["key","listbox",3,"tabs"],[1,"sel-lede"],[3,"code","responsive"],["params",""],[3,"ngTemplateOutlet"],["label","Devise","placeholder","Choisir une devise…",3,"valueChange","size","variant","allowClear","value"],[3,"value"],["title","Tech — how it works","icon","code"],[1,"sel-prose"],["kind","listbox"],["key","grouped",3,"tabs"],[1,"sel-typed"],["label","Ville (projected)","placeholder","Choisir une ville…",3,"valueChange","size","variant","allowClear","value"],["label","France"],["value","paris"],["value","lyon"],["value","marseille"],["label","Italia"],["value","roma"],["value","milano"],["label","Ville ([options] array)","placeholder","Choisir une ville…",3,"valueChange","size","variant","allowClear","options","value"],["key","multi",3,"tabs"],["title","Searchable","icon","search"],["label","Allergènes","placeholder","Aucun","searchable","","searchLabel","Rechercher un allergène","searchPlaceholder","Rechercher…","emptyText","Aucun allergène","resultLabel","allergènes",3,"valueChange","options","value"],["label","Devises","placeholder","Choisir plusieurs…",3,"valueChange","size","variant","allowSelectAll","allowClear","value"],["kind","multi"],["key","select",3,"tabs"],["label","Devise","placeholder","Choisir…",3,"valueChange","size","variant","value"],["kind","select"],["key","typed",3,"tabs"],["label","Plan (number, [options])","placeholder","Pick a plan…",3,"valueChange","size","variant","options","value"],[1,"sel-readout"],["label","Team (object, compareWith)","placeholder","Pick a team…",3,"valueChange","size","variant","compareWith","value"],[1,"sel-knob"],[1,"gal-tag"],[1,"sel-seg"],["type","button",3,"is-on"],["type","button",3,"click"]],template:function(n,l){if(n&1){const c=V();a(0,"fold-page-layout",2)(1,"p",3),e(2," The "),a(3,"strong"),e(4,"styleable select family"),o(),e(5," — three ways to pick from a list, same tokens and box chrome. "),a(6,"code"),e(7,"fold-listbox"),o(),e(8," (one value) and "),a(9,"code"),e(10,"fold-multiselect"),o(),e(11," (a set) are built on "),a(12,"code"),e(13,"fold-popover"),o(),e(14," for a fully styleable panel; "),a(15,"code"),e(16,"fold-select"),o(),e(17," wraps a native "),a(18,"code"),e(19,"<select>"),o(),e(20," for a mobile-native, zero-JS default. Pick a tab. "),o(),P(21,"gal-kind-badge",4)(22,"gal-composed-of",5),U(23,fe,12,0,"ng-template",null,0,G),a(25,"div",6)(26,"fold-tabs",7,1),b("activeKeyChange",function(i){return m(c),h(l.tab,i)||(l.tab=i),f(i)}),o(),a(28,"div",8)(29,"fold-tab-panel",9)(30,"p",10),e(31," A single-select on the native top layer. Options can be anything you project — an icon, a second line, a status — which is the reason to reach for it over the native "),a(32,"code"),e(33,"<select>"),o(),e(34,". Full keyboard, "),a(35,"code"),e(36,'role="listbox"'),o(),e(37," with "),a(38,"code"),e(39,"aria-activedescendant"),o(),e(40,", and Signal Forms ("),a(41,"code"),e(42,"value: string"),o(),e(43,"). "),o(),a(44,"dev-playground",11)(45,"div",12),T(46,13),o(),a(47,"fold-listbox",14),b("valueChange",function(i){return m(c),h(l.lbValue,i)||(l.lbValue=i),f(i)}),y(48,ve,2,2,"fold-option",15,F),o()(),a(50,"fold-page-section",16)(51,"p",17),e(52," The trigger stays in the normal flow; opening hands the panel to the browser's "),a(53,"strong"),e(54,"top layer"),o(),e(55,", so it escapes any "),a(56,"code"),e(57,"overflow"),o(),e(58," / "),a(59,"code"),e(60,"z-index"),o(),e(61,". The "),a(62,"code"),e(63,'role="listbox"'),o(),e(64," holds focus and points "),a(65,"code"),e(66,"aria-activedescendant"),o(),e(67," at the active row — the rows themselves stay dumb, each computing its own selected / active state from the owner. Selecting commits the value and closes, returning focus to the trigger. "),o(),P(68,"gal-select-schema",18),o()(),a(69,"fold-tab-panel",19)(70,"p",10),e(71," Sort a long list into labelled sections with "),a(72,"code"),e(73,"<fold-optgroup>"),o(),e(74," — the styleable "),a(75,"code"),e(76,"<optgroup>"),o(),e(77,". The header is non-selectable ("),a(78,"code"),e(79,'role="group"'),o(),e(80,", "),a(81,"code"),e(82,"aria-labelledby"),o(),e(83,") and the keyboard "),a(84,"strong"),e(85,"roves straight across group boundaries"),o(),e(86," in document order, so grouping changes the layout, never the nav model. "),o(),a(87,"dev-playground",11)(88,"div",12),T(89,13),o(),a(90,"div",20)(91,"fold-listbox",21),b("valueChange",function(i){return m(c),h(l.cityValue,i)||(l.cityValue=i),f(i)}),a(92,"fold-optgroup",22)(93,"fold-option",23),e(94,"Paris"),o(),a(95,"fold-option",24),e(96,"Lyon"),o(),a(97,"fold-option",25),e(98,"Marseille"),o()(),a(99,"fold-optgroup",26)(100,"fold-option",27),e(101,"Roma"),o(),a(102,"fold-option",28),e(103,"Milano"),o()()(),a(104,"fold-listbox",29),b("valueChange",function(i){return m(c),h(l.cityArrayValue,i)||(l.cityArrayValue=i),f(i)}),o()()(),a(105,"fold-page-section",16)(106,"p",17)(107,"code"),e(108,"fold-optgroup"),o(),e(109," is purely presentational — it renders the heading and projects its rows. The owning listbox discovers grouped options with a "),a(110,"code"),e(111,"descendants: true"),o(),e(112," content query, so they join the same flat, document-ordered list the roving core walks; the group header carries no "),a(113,"code"),e(114,'role="option"'),o(),e(115,", so keyboard nav skips it. Works the same inside "),a(116,"code"),e(117,"fold-multiselect"),o(),e(118,". "),o()()(),a(119,"fold-tab-panel",30)(120,"p",10),e(121," The same popover and rows, but the value is a "),a(122,"strong"),e(123,"set"),o(),e(124," ("),a(125,"code"),e(126,"readonly string[]"),o(),e(127,"): activating a row toggles it and the panel "),a(128,"strong"),e(129,"stays open"),o(),e(130,". A separate component, not a "),a(131,"code"),e(132,"multiple"),o(),e(133," flag, so the Signal-Forms value type stays honest. "),a(134,"code"),e(135,"aria-multiselectable"),o(),e(136,"; the trigger summarises the picks. "),a(137,"code"),e(138,"allowSelectAll"),o(),e(139," / "),a(140,"code"),e(141,"allowClear"),o(),e(142," add a sticky bulk-action bar at the top of the panel (select-all skips disabled rows and keeps already-picked ones). "),o(),a(143,"fold-page-section",31)(144,"p",17)(145,"code"),e(146,"searchable"),o(),e(147," puts a search field at the top of the panel: it narrows "),a(148,"code"),e(149,"[options]"),o(),e(150," as you type ("),a(151,"code"),e(152,"filter"),o(),e(153,", "),a(154,"code"),e(155,'"contains"'),o(),e(156," by default — the same matcher as "),a(157,"code"),e(158,"fold-combobox"),o(),e(159,"), keeps the groups and drops an emptied one, announces the count, and never deselects — the trigger still names a pick the search hides. Focus lands in the field; ↓ enters the list, "),a(160,"code"),e(161,"Escape"),o(),e(162," closes. "),o(),a(163,"fold-multiselect",32),b("valueChange",function(i){return m(c),h(l.allergenValue,i)||(l.allergenValue=i),f(i)}),o()(),a(164,"dev-playground",11)(165,"div",12),T(166,13),o(),a(167,"fold-multiselect",33),b("valueChange",function(i){return m(c),h(l.msValue,i)||(l.msValue=i),f(i)}),y(168,be,2,2,"fold-option",15,F),o()(),a(170,"fold-page-section",16)(171,"p",17),e(172," Structurally identical to the listbox — same top-layer panel, same roving keyboard core (shared via a "),a(173,"code"),e(174,"FOLD_LISTBOX_OWNER"),o(),e(175," token). The only differences live at the edges: "),a(176,"code"),e(177,"aria-multiselectable"),o(),e(178,", activation "),a(179,"strong"),e(180,"toggles membership"),o(),e(181," instead of committing, and the panel is never closed on a pick — so several choices are one interaction. "),o(),P(182,"gal-select-schema",34),o()(),a(183,"fold-tab-panel",35)(184,"p",10),e(185," A thin wrapper around a real "),a(186,"code"),e(187,"<select>"),o(),e(188," — the lighter default. Not styleable inside the popup and rows are plain text, but you get the OS's keyboard, focus and a native mobile wheel for free. Reach for it unless you need custom rows. "),o(),a(189,"dev-playground",11)(190,"div",12),T(191,13),o(),a(192,"fold-select",36),b("valueChange",function(i){return m(c),h(l.selValue,i)||(l.selValue=i),f(i)}),y(193,ge,2,2,"option",15,F),o()(),a(195,"fold-page-section",16)(196,"p",17),e(197," No popover, no ARIA to run: "),a(198,"code"),e(199,"fold-select"),o(),e(200," only restyles the closed control (box + caret) and forwards "),a(201,"code"),e(202,"[value]"),o(),e(203," / "),a(204,"code"),e(205,"(change)"),o(),e(206," to Signal Forms. When it opens, the "),a(207,"strong"),e(208,"operating system"),o(),e(209," paints the option list — outside your DOM, so it can't be styled, but keyboard, focus and the touch wheel are all handled for you. "),o(),P(210,"gal-select-schema",37),o()(),a(211,"fold-tab-panel",38)(212,"p",17),e(213," The value is "),a(214,"strong"),e(215,"generic"),o(),e(216," — "),a(217,"code"),e(218,"string"),o(),e(219," by inference, but "),a(220,"code"),e(221,"number"),o(),e(222,", an "),a(223,"code"),e(224,"enum"),o(),e(225," or an "),a(226,"strong"),e(227,"object"),o(),e(228," all work with the type preserved end-to-end. Two entry points: a data-driven "),a(229,"code"),e(230,"[options]"),o(),e(231," array (value type linked at compile time) or projected "),a(232,"code"),e(233,"<fold-option>"),o(),e(234,". Objects match via "),a(235,"code"),e(236,"compareWith"),o(),e(237," (default "),a(238,"code"),e(239,"Object.is"),o(),e(240,"); primitives need nothing. "),o(),a(241,"dev-playground",11)(242,"div",20)(243,"fold-listbox",39),b("valueChange",function(i){return m(c),h(l.planId,i)||(l.planId=i),f(i)}),o(),a(244,"p",40),e(245," planId = "),a(246,"code"),e(247),o()(),a(248,"fold-listbox",41),b("valueChange",function(i){return m(c),h(l.team,i)||(l.team=i),f(i)}),y(249,he,2,2,"fold-option",15,pe),o(),a(251,"p",40),e(252," team = "),a(253,"code"),e(254),o()()()(),a(255,"fold-page-section",16)(256,"p",17)(257,"code"),e(258,"T"),o(),e(259," is inferred from "),a(260,"code"),e(261,"[(value)]"),o(),e(262,". The option↔value link the compiler can't see through projection is the one seam erased to "),a(263,"code"),e(264,"unknown"),o(),e(265," (the owner token); everywhere the operands are actually "),a(266,"code"),e(267,"T"),o(),e(268," stays typed, and a dev-mode warning fires if a held value matches no option. The "),a(269,"code"),e(270,"[options]"),o(),e(271," array closes even that seam — value and options are checked together at build time. "),o()()()()()()}if(n&2){const c=I(24),p=I(27);t(22),d("ids",q(55,ce)),t(4),d("tabs",l.tabs),g("activeKey",l.tab),t(3),d("tabs",p),t(15),d("code",l.lbCode())("responsive",!1),t(2),d("ngTemplateOutlet",c),t(),d("size",l.size())("variant",l.variant())("allowClear",!0),g("value",l.lbValue),t(),w(l.currencies),t(21),d("tabs",p),t(18),d("code",l.groupedCode)("responsive",!1),t(2),d("ngTemplateOutlet",c),t(2),d("size",l.size())("variant",l.variant())("allowClear",!0),g("value",l.cityValue),t(13),d("size",l.size())("variant",l.variant())("allowClear",!0)("options",l.cityGroups),g("value",l.cityArrayValue),t(15),d("tabs",p),t(44),d("options",l.allergens),g("value",l.allergenValue),t(),d("code",l.msCode())("responsive",!1),t(2),d("ngTemplateOutlet",c),t(),d("size",l.size())("variant",l.variant())("allowSelectAll",!0)("allowClear",!0),g("value",l.msValue),t(),w(l.currencies),t(15),d("tabs",p),t(6),d("code",l.selCode())("responsive",!1),t(2),d("ngTemplateOutlet",c),t(),d("size",l.size())("variant",l.variant()),g("value",l.selValue),t(),w(l.currencies),t(18),d("tabs",p),t(30),d("code",l.typedCode)("responsive",!1),t(2),d("size",l.size())("variant",l.variant())("options",l.plans),g("value",l.planId),t(4),v(l.planId()??"null"),t(),d("size",l.size())("variant",l.variant())("compareWith",l.sameId),g("value",l.team),t(),w(l.teams),t(5),v(l.team()?.name??"null")}},dependencies:[B,J,X,Y,O,K,H,Q,Z,ee,oe,ae,le,te],styles:[`.sel-shell {
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
  line-height: var(--fold-leading-normal);
}

.sel-prose {
  margin: 0 0 1rem;
  max-width: 68ch;
  color: var(--fold-color-text-secondary);
  line-height: var(--fold-leading-relaxed);
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
