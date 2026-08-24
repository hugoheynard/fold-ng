import{X as P,aa as A,s as f,A as h,ɵ as z,R as S,c as F,F as B,a as I,d as n,e as t,f as e,g,B as c,i as m,T as k,w as $,j as l,m as _,U as L,L as p,o as b,k as d,l as y,x as K,E as x,q as v,N as T,O as C}from"./index-Dm7NIW0i.js";import{K as D}from"./kind-badge.component-DK33NVyt.js";import{C as j}from"./composed-of.component-BqGz4Rf1.js";import{D as R}from"./playground.component-rTCN3K2c.js";import{T as O}from"./tab-panel.component-dOQ0rBP0.js";import{FoldCalloutComponent as U}from"./callout.component-Bkoj6zhm.js";import{FoldNavLayoutComponent as J}from"./nav-layout.component-BFYse2QG.js";import{FoldViewNavComponent as V}from"./view-nav.component-HTSaAr8m.js";import"./button.component-CSVQycLG.js";import"./element-title.component-C_Vb_0Fj.js";import"./page-section.component-B2ZZDtjr.js";import"./slider.component-BfnLG3-H.js";import"./input-value-DCGlOvqF.js";import"./fold-at-BNkbvp9n.js";import"./breakpoints-J4fapboB.js";import"./nav-layout.context-wbXoELsE.js";import"./tab-tooltip.directive-exSfc_PJ.js";import"./auto-update-_srfpL1Q.js";const E=()=>["badges","icons"],N=(r,i)=>i.label,M=(r,i)=>i.name,H=(r,i)=>i.text,W=(r,i)=>i.ref;function q(r,i){if(r&1){const a=x();n(0,"button",10),c("click",function(){const s=T(a).$implicit,u=v();return C(u.tnJustify.set(s))}),t(1),e()}if(r&2){const a=i.$implicit,o=v();p("is-on",o.tnJustify()===a),l(),y(" ",a," ")}}function G(r,i){if(r&1){const a=x();n(0,"button",10),c("click",function(){const s=T(a).$implicit,u=v();return C(u.tnSize.set(s))}),t(1),e()}if(r&2){const a=i.$implicit,o=v();p("is-on",o.tnSize()===a),l(),y(" ",a," ")}}function X(r,i){if(r&1){const a=x();n(0,"button",10),c("click",function(){const s=T(a).$implicit,u=v();return C(u.tnCount.set(s))}),t(1),e()}if(r&2){const a=i.$implicit,o=v();p("is-on",o.tnCount()===a),l(),y(" ",a," ")}}function Q(r,i){if(r&1&&(n(0,"div",34)(1,"span",35),t(2),e(),n(3,"span",36),t(4),e()()),r&2){const a=i.$implicit;l(2),d(a.value),l(2),d(a.label)}}function Y(r,i){if(r&1&&(n(0,"div",26),m(1,Q,5,2,"div",34,N),e()),r&2){const a=v();l(),b(a.overviewStats)}}function Z(r,i){if(r&1&&(n(0,"div",37)(1,"span",38),t(2),e(),n(3,"span",39)(4,"span",40),t(5),e(),n(6,"span",41),t(7),e()(),g(8,"fold-badge",42),e()),r&2){const a=i.$implicit;l(2),d(a.initials),l(3),d(a.name),l(2),d(a.role),l(),_("content",a.status)("variant",a.tone)}}function tt(r,i){if(r&1&&(n(0,"div",27),m(1,Z,9,5,"div",37,M),e()),r&2){const a=v();l(),b(a.members)}}function nt(r,i){if(r&1&&(n(0,"div",43)(1,"span",44),t(2),e(),n(3,"span",45),t(4),e()()),r&2){const a=i.$implicit;l(2),d(a.label),l(2),d(a.value)}}function et(r,i){if(r&1&&(n(0,"div",28),m(1,nt,5,2,"div",43,N),e()),r&2){const a=v();l(),b(a.settingsFields)}}function at(r,i){if(r&1&&(n(0,"div",46),g(1,"span",47),n(2,"span",39)(3,"span",40),t(4),e(),n(5,"span",41),t(6),e()()()),r&2){const a=i.$implicit;l(4),d(a.text),l(2),d(a.when)}}function ot(r,i){if(r&1&&(n(0,"div",29),m(1,at,7,2,"div",46,H),e()),r&2){const a=v();l(),b(a.activity)}}function it(r,i){if(r&1&&(n(0,"div",48)(1,"span",40),t(2),e(),n(3,"span",41),t(4),e(),n(5,"span",49),t(6),e()()),r&2){const a=i.$implicit;l(2),d(a.ref),l(2),d(a.date),l(2),d(a.amount)}}function rt(r,i){if(r&1&&(n(0,"div",30),m(1,it,7,3,"div",48,W),e()),r&2){const a=v();l(),b(a.invoices)}}class w{panelHost=P(A);tabCounts=[2,3,5];tabSizes=["compact","comfortable"];tabJustify=["start","stretch"];tnStyle=f("underline");tnDirection=f("vertical");tnSize=f("compact");tnJustify=f("start");tnCollapsed=f(!1);tnBackground=f("transparent");tnBadge=f(!0);tnIcon=f(!0);tnCount=f(3);tnActive=f("overview");TAB_POOL=[{key:"overview",label:"Overview",icon:"grid"},{key:"members",label:"Members",icon:"team",badge:3},{key:"settings",label:"Settings",icon:"settings"},{key:"activity",label:"Activity",icon:"timeline"},{key:"billing",label:"Billing",icon:"contracts",badge:2}];tnTabs=h(()=>this.TAB_POOL.slice(0,this.tnCount()).map(i=>({key:i.key,label:i.label,...this.tnIcon()?{icon:i.icon}:{},badge:this.tnBadge()?i.badge??null:null})));tnActiveKey=h(()=>{const i=this.tnTabs().map(a=>a.key);return i.includes(this.tnActive())?this.tnActive():i[0]??""});tnActiveLabel=h(()=>this.tnTabs().find(i=>i.key===this.tnActiveKey())?.label??"Overview");tabNavCode=h(()=>{const i=this.tnDirection()==="vertical",a=['[items]="items"'];i&&a.push("tabNav",'direction="auto"'),this.tnStyle()!=="underline"&&a.push(`activeStyle="${this.tnStyle()}"`),this.tnSize()!=="compact"&&a.push(`size="${this.tnSize()}"`),this.tnCollapsed()&&a.push("collapsed"),this.tnJustify()!=="start"&&a.push(`justify="${this.tnJustify()}"`),this.tnBackground()!=="transparent"&&a.push(`background="${this.tnBackground()}"`);const o=["<fold-view-nav",...a.map(u=>`  ${u}`),"/>"];return["<!-- items navigate; routerLinkActive marks the current one -->",...i?['<fold-nav-layout placement="side">',...o.map(u=>`  ${u}`),"  <router-outlet />","</fold-nav-layout>"]:[...o,"<router-outlet />"],"","// component — no activeKey: the URL drives the active item","items = [","  { key: 'overview', label: 'Overview', icon: 'grid', link: 'overview' },","  { key: 'members', label: 'Members', icon: 'team', link: 'members', badge: 3 },","  { key: 'settings', label: 'Settings', icon: 'settings', link: 'settings' },","];"].join(`
`)});overviewStats=[{label:"Contracts",value:"128"},{label:"Active",value:"96"},{label:"Expiring",value:"7"}];members=[{initials:"MM",name:"Marc Machine",role:"Producer",status:"Active",tone:"success"},{initials:"IL",name:"Inès Lambert",role:"A&R",status:"Expiring",tone:"warning"},{initials:"SD",name:"Sofia Duarte",role:"Engineer",status:"Active",tone:"success"}];settingsFields=[{label:"Workspace name",value:"Acme Records"},{label:"Default currency",value:"EUR"},{label:"Contract reminders",value:"14 days before"}];activity=[{text:"Contract #A-2291 signed",when:"2 hours ago"},{text:"Inès Lambert joined the workspace",when:"yesterday"},{text:"Invoice INV-0043 paid",when:"3 days ago"}];invoices=[{ref:"INV-0043",date:"12 Jun 2026",amount:"€ 2 400"},{ref:"INV-0042",date:"12 May 2026",amount:"€ 2 400"},{ref:"INV-0041",date:"12 Apr 2026",amount:"€ 1 850"}];openTabPanel(){this.panelHost.open(O,{side:"right"})}static ɵfac=function(a){return new(a||w)};static ɵcmp=z({type:w,selectors:[["gal-tab-nav-page"]],decls:139,vars:36,consts:[["title","view-nav"],["description",""],["titleBadge","","kind","component"],[3,"ids"],["variant","accent","icon","globe"],["routerLink","/tabs"],[3,"code","initialWidth"],["params","",1,"np-field"],[1,"gal-tag"],[1,"ss-seg"],["type","button",3,"click"],["type","button",3,"is-on"],["params","",1,"doc-p"],[1,"tn-page"],[1,"tn-urlbar"],["name","globe","size","sm",1,"tn-url-icon"],[1,"tn-url"],[1,"tn-url-seg"],[3,"placement"],["tabNav","","direction","auto",3,"activeKeyChange","items","activeKey","activeStyle","size","justify","collapsed","background"],[1,"tn-panel"],[1,"tn-outlet-tag"],[1,"tn-view-head"],[1,"tn-view-title"],[1,"tn-view-path"],[1,"tn-view-body"],[1,"tn-stats"],[1,"tn-rows"],[1,"tn-form"],[1,"tn-feed"],[1,"tn-table"],[1,"gal-cell"],["type","button",1,"gal-theme",3,"click"],["name","contracts","size","sm"],[1,"tn-stat"],[1,"tn-stat-value"],[1,"tn-stat-label"],[1,"tn-row"],[1,"tn-avatar"],[1,"tn-row-main"],[1,"tn-row-title"],[1,"tn-row-sub"],[3,"content","variant"],[1,"tn-field"],[1,"tn-field-label"],[1,"tn-field-control"],[1,"tn-event"],[1,"tn-dot"],[1,"tn-tr"],[1,"tn-amount"]],template:function(a,o){if(a&1&&(n(0,"fold-page-layout",0)(1,"p",1),t(2," A "),n(3,"strong"),t(4,"navigation"),e(),t(5," bar styled as tabs — a "),n(6,"code"),t(7,"<nav>"),e(),t(8," whose items "),n(9,"strong"),t(10,"go somewhere"),e(),t(11,". Clicking one changes the route: the URL updates and the "),n(12,"code"),t(13,"<router-outlet>"),e(),t(14," renders the matching view. The active item is derived from the URL (so deep links, back and forward all stay in sync) and marked with "),n(15,"code"),t(16,'aria-current="page"'),e(),t(17,". Horizontal for a page-level bar, vertical for a sidebar rail — which folds back to a bar "),n(18,"strong"),t(19,"on top"),e(),t(20," once its container gets too narrow to hold a rail beside the content (the wrapping "),n(21,"code"),t(22,"fold-nav-layout"),e(),t(23,"'s job, on its own width). "),e(),g(24,"gal-kind-badge",2)(25,"gal-composed-of",3),n(26,"fold-callout",4)(27,"strong"),t(28,"Does the tab go somewhere?"),e(),t(29," This is your component — it drives "),n(30,"strong"),t(31,"routing"),e(),t(32," (URL changes, "),n(33,"code"),t(34,"<router-outlet>"),e(),t(35,", browser history). If instead the tabs toggle "),n(36,"strong"),t(37,"layered panels in place"),e(),t(38," on the same URL, use "),n(39,"a",5)(40,"code"),t(41,"fold-tabs"),e()(),t(42," — same look, but the ARIA Tabs widget ("),n(43,"code"),t(44,'role="tablist"'),e(),t(45,", arrow keys). Using this navigation bar to fake in-place tabs is an anti-pattern, so the two are separate on purpose. "),e(),n(46,"dev-playground",6)(47,"div",7)(48,"span",8),t(49,"activeStyle"),e(),n(50,"div",9)(51,"button",10),c("click",function(){return o.tnStyle.set("underline")}),t(52," underline "),e(),n(53,"button",10),c("click",function(){return o.tnStyle.set("fill")}),t(54," fill "),e()()(),n(55,"div",7)(56,"span",8),t(57,"direction"),e(),n(58,"div",9)(59,"button",10),c("click",function(){return o.tnDirection.set("horizontal")}),t(60," horizontal "),e(),n(61,"button",10),c("click",function(){return o.tnDirection.set("vertical")}),t(62," vertical "),e()()(),n(63,"div",7)(64,"span",8),t(65,"justify"),e(),n(66,"div",9),m(67,q,2,3,"button",11,k),e()(),n(69,"div",7)(70,"span",8),t(71,"size"),e(),n(72,"div",9),m(73,G,2,3,"button",11,k),e()(),n(75,"div",7)(76,"span",8),t(77,"collapsed"),e(),n(78,"div",9)(79,"button",10),c("click",function(){return o.tnCollapsed.set(!1)}),t(80," off "),e(),n(81,"button",10),c("click",function(){return o.tnCollapsed.set(!0)}),t(82," icons "),e()()(),n(83,"div",7)(84,"span",8),t(85,"background"),e(),n(86,"div",9)(87,"button",10),c("click",function(){return o.tnBackground.set("surface")}),t(88," surface "),e(),n(89,"button",10),c("click",function(){return o.tnBackground.set("transparent")}),t(90," transparent "),e()()(),n(91,"div",7)(92,"span",8),t(93,"tabs"),e(),n(94,"div",9),m(95,X,2,3,"button",11,k),e()(),n(97,"div",7)(98,"span",8),t(99,"tab content"),e(),n(100,"div",9)(101,"button",10),c("click",function(){return o.tnIcon.set(!o.tnIcon())}),t(102," icons "),e(),n(103,"button",10),c("click",function(){return o.tnBadge.set(!o.tnBadge())}),t(104," badges "),e()()(),n(105,"p",12),t(106," Each click navigates — watch the URL. In a real app this panel is a "),n(107,"code"),t(108,"<router-outlet>"),e(),t(109,". "),e(),n(110,"div",13)(111,"div",14),g(112,"fold-icon",15),n(113,"span",16),t(114,"acme.app/workspace/"),n(115,"span",17),t(116),e()()(),n(117,"fold-nav-layout",18)(118,"fold-view-nav",19),c("activeKeyChange",function(u){return o.tnActive.set(u)}),e(),n(119,"div",20)(120,"span",21),t(121,"<router-outlet>"),e(),n(122,"div",22)(123,"h3",23),t(124),e(),n(125,"span",24),t(126),e()(),n(127,"div",25),$(128,Y,3,0,"div",26)(129,tt,3,0,"div",27)(130,et,3,0,"div",28)(131,ot,3,0,"div",29)(132,rt,3,0,"div",30),e()()()()(),n(133,"div",31)(134,"span",8),t(135,"in a side panel (fold-panel)"),e(),n(136,"button",32),c("click",function(){return o.openTabPanel()}),g(137,"fold-icon",33),t(138," Open panel with tabs "),e()()()),a&2){let s;l(25),_("ids",L(35,E)),l(21),_("code",o.tabNavCode())("initialWidth",1280),l(5),p("is-on",o.tnStyle()==="underline"),l(2),p("is-on",o.tnStyle()==="fill"),l(6),p("is-on",o.tnDirection()==="horizontal"),l(2),p("is-on",o.tnDirection()==="vertical"),l(6),b(o.tabJustify),l(6),b(o.tabSizes),l(6),p("is-on",!o.tnCollapsed()),l(2),p("is-on",o.tnCollapsed()),l(6),p("is-on",o.tnBackground()==="surface"),l(2),p("is-on",o.tnBackground()==="transparent"),l(6),b(o.tabCounts),l(6),p("is-on",o.tnIcon()),l(2),p("is-on",o.tnBadge()),l(13),d(o.tnActiveKey()),l(),_("placement",o.tnDirection()==="vertical"?"side":"top"),l(),_("items",o.tnTabs())("activeKey",o.tnActiveKey())("activeStyle",o.tnStyle())("size",o.tnSize())("justify",o.tnJustify())("collapsed",o.tnCollapsed())("background",o.tnBackground()),l(6),d(o.tnActiveLabel()),l(2),y("/",o.tnActiveKey()),l(2),K((s=o.tnActiveKey())==="overview"?128:s==="members"?129:s==="settings"?130:s==="activity"?131:s==="billing"?132:-1)}},dependencies:[S,D,j,F,U,J,V,B,I,R],styles:[`@charset "UTF-8";
/* ── tab-nav page mock: a page shell (header + nav + content) whose body renders
   a distinct layout per tab, so the nav is shown driving real content. ── */
.tn-page {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

/* A mock browser address bar — the visual proof this NAVIGATES: the last path
   segment tracks the active tab. */
.tn-urlbar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 12px;
  border: 1px solid var(--fold-color-border);
  border-radius: var(--fold-radius-pill);
  background: var(--fold-color-surface-sunken);
}

.tn-url-icon {
  flex: none;
  color: var(--fold-color-text-muted);
}

.tn-url {
  font-family: var(--fold-font-mono);
  font-size: var(--fold-text-md);
  color: var(--fold-color-text-muted);
}

.tn-url-seg {
  color: var(--fold-color-primary);
  font-weight: var(--fold-weight-bold);
}

/* Frames the mock content as what the router renders. */
.tn-panel {
  position: relative;
  width: 100%;
}

.tn-outlet-tag {
  position: absolute;
  top: 10px;
  right: 12px;
  font-family: var(--fold-font-mono);
  font-size: var(--fold-text-2xs);
  letter-spacing: var(--fold-tracking-wide);
  color: var(--fold-color-text-muted);
  opacity: 0.7;
}

/* A consistent page header per routed view — the tab label reads as the page
   title, so the switch looks like moving between real app pages. */
.tn-view-head {
  display: flex;
  align-items: baseline;
  gap: 10px;
  padding-bottom: 12px;
  margin-bottom: 14px;
  border-bottom: 1px solid var(--fold-color-border-subtle);
}

.tn-view-title {
  margin: 0;
  font-size: var(--fold-text-base);
  font-weight: var(--fold-weight-bold);
  color: var(--fold-color-text);
}

.tn-view-path {
  font-family: var(--fold-font-mono);
  font-size: var(--fold-text-sm);
  color: var(--fold-color-text-muted);
}

/* Fixed height so switching tabs never shifts the layout below. */
.tn-view-body {
  min-height: 180px;
}

/* Overview — stat tiles */
.tn-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
}

.tn-stat {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 12px 14px;
  border: 1px solid var(--fold-color-border);
  border-radius: var(--fold-radius-md);
  background: var(--fold-color-surface-card);
}

.tn-stat-value {
  font-size: var(--fold-text-lg);
  font-weight: var(--fold-weight-bold);
  color: var(--fold-color-text);
  font-variant-numeric: tabular-nums;
}

.tn-stat-label {
  font-size: var(--fold-text-xs);
  color: var(--fold-color-text-muted);
}

/* Members — avatar rows */
.tn-rows,
.tn-form,
.tn-feed,
.tn-table {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.tn-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border: 1px solid var(--fold-color-border);
  border-radius: var(--fold-radius-md);
  background: var(--fold-color-surface-card);
}

.tn-avatar {
  flex: none;
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--fold-color-primary-surface);
  color: var(--fold-color-primary-text);
  font-size: var(--fold-text-xs);
  font-weight: var(--fold-weight-bold);
}

.tn-row-main {
  display: flex;
  flex-direction: column;
  min-width: 0;
  flex: 1;
}

.tn-row-title {
  font-size: var(--fold-text-md);
  font-weight: var(--fold-weight-semibold);
  color: var(--fold-color-text);
}

.tn-row-sub {
  font-size: var(--fold-text-xs);
  color: var(--fold-color-text-muted);
}

/* Settings — label / value field rows */
.tn-field {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 12px;
  border-bottom: 1px solid var(--fold-color-border-subtle);
}

.tn-field-label {
  font-size: var(--fold-text-md);
  color: var(--fold-color-text-secondary);
}

.tn-field-control {
  padding: 5px 10px;
  border: 1px solid var(--fold-color-border);
  border-radius: var(--fold-radius-sm);
  background: var(--fold-color-surface-sunken);
  color: var(--fold-color-text);
  font-size: var(--fold-text-sm);
}

/* Activity — a dotted feed */
.tn-event {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 6px 0;
}

.tn-dot {
  flex: none;
  width: 8px;
  height: 8px;
  margin-top: 5px;
  border-radius: 50%;
  background: var(--fold-color-primary);
}

/* Billing — a compact table */
.tn-tr {
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-bottom: 1px solid var(--fold-color-border-subtle);
}

.tn-amount {
  font-weight: var(--fold-weight-bold);
  font-size: var(--fold-text-md);
  color: var(--fold-color-text);
  font-variant-numeric: tabular-nums;
  text-align: right;
}`],encapsulation:2})}export{w as default};
