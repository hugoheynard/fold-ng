import{V as A,W as z,s as u,B as g,ɵ as S,R as F,c as B,F as I,a as L,d as t,e as n,f as e,g as _,G as c,i as m,y as x,L as $,j as l,m as h,x as p,o as f,k as d,D,l as w,M as R,E as T,z as v,H as C,I as N}from"./index-CKJ8TA1z.js";import{K}from"./kind-badge.component-DDo-fL4k.js";import{D as O}from"./playground.component-Ky33gwMu.js";import{T as V}from"./tab-panel.component-DNdVH7Zq.js";import{F as M}from"./callout.component-DMUYci6j.js";import{F as U}from"./nav-layout.component-FgwiBtEY.js";import{F as E}from"./view-nav.component-qxNUcxOn.js";import"./button.component-BpJiB3XL.js";import"./spinner.component-CZKO99s0.js";import"./tokens.catalog-DF_6rd51.js";import"./element-title.component-VSpcgwo4.js";import"./page-section.component-CuqvwX-N.js";import"./nav-layout.context-7J6Xly3f.js";const P=(r,i)=>i.label,j=(r,i)=>i.name,H=(r,i)=>i.text,G=(r,i)=>i.ref;function W(r,i){if(r&1){const a=T();t(0,"button",9),c("click",function(){const s=C(a).$implicit,b=v();return N(b.tnSize.set(s))}),n(1),e()}if(r&2){const a=i.$implicit,o=v();p("is-on",o.tnSize()===a),l(),w(" ",a," ")}}function J(r,i){if(r&1){const a=T();t(0,"button",9),c("click",function(){const s=C(a).$implicit,b=v();return N(b.tnCount.set(s))}),n(1),e()}if(r&2){const a=i.$implicit,o=v();p("is-on",o.tnCount()===a),l(),w(" ",a," ")}}function q(r,i){if(r&1&&(t(0,"div",33)(1,"span",34),n(2),e(),t(3,"span",35),n(4),e()()),r&2){const a=i.$implicit;l(2),d(a.value),l(2),d(a.label)}}function Q(r,i){if(r&1&&(t(0,"div",25),m(1,q,5,2,"div",33,P),e()),r&2){const a=v();l(),f(a.overviewStats)}}function X(r,i){if(r&1&&(t(0,"div",36)(1,"span",37),n(2),e(),t(3,"span",38)(4,"span",39),n(5),e(),t(6,"span",40),n(7),e()(),_(8,"fold-badge",41),e()),r&2){const a=i.$implicit;l(2),d(a.initials),l(3),d(a.name),l(2),d(a.role),l(),h("content",a.status)("variant",a.tone)}}function Y(r,i){if(r&1&&(t(0,"div",26),m(1,X,9,5,"div",36,j),e()),r&2){const a=v();l(),f(a.members)}}function Z(r,i){if(r&1&&(t(0,"div",42)(1,"span",43),n(2),e(),t(3,"span",44),n(4),e()()),r&2){const a=i.$implicit;l(2),d(a.label),l(2),d(a.value)}}function nn(r,i){if(r&1&&(t(0,"div",27),m(1,Z,5,2,"div",42,P),e()),r&2){const a=v();l(),f(a.settingsFields)}}function tn(r,i){if(r&1&&(t(0,"div",45),_(1,"span",46),t(2,"span",38)(3,"span",39),n(4),e(),t(5,"span",40),n(6),e()()()),r&2){const a=i.$implicit;l(4),d(a.text),l(2),d(a.when)}}function en(r,i){if(r&1&&(t(0,"div",28),m(1,tn,7,2,"div",45,H),e()),r&2){const a=v();l(),f(a.activity)}}function an(r,i){if(r&1&&(t(0,"div",47)(1,"span",39),n(2),e(),t(3,"span",40),n(4),e(),t(5,"span",48),n(6),e()()),r&2){const a=i.$implicit;l(2),d(a.ref),l(2),d(a.date),l(2),d(a.amount)}}function on(r,i){if(r&1&&(t(0,"div",29),m(1,an,7,3,"div",47,G),e()),r&2){const a=v();l(),f(a.invoices)}}class k{panelHost=A(z);tabCounts=[2,3,5];tabSizes=["compact","comfortable"];tnStyle=u("underline");tnDirection=u("vertical");tnSize=u("compact");tnCollapsed=u(!1);tnBackground=u("transparent");tnBadge=u(!0);tnIcon=u(!0);tnCount=u(3);tnActive=u("overview");TAB_POOL=[{key:"overview",label:"Overview",icon:"grid"},{key:"members",label:"Members",icon:"team",badge:3},{key:"settings",label:"Settings",icon:"settings"},{key:"activity",label:"Activity",icon:"timeline"},{key:"billing",label:"Billing",icon:"contracts",badge:2}];tnTabs=g(()=>this.TAB_POOL.slice(0,this.tnCount()).map(i=>({key:i.key,label:i.label,...this.tnIcon()?{icon:i.icon}:{},badge:this.tnBadge()?i.badge??null:null})));tnActiveKey=g(()=>{const i=this.tnTabs().map(a=>a.key);return i.includes(this.tnActive())?this.tnActive():i[0]??""});tnActiveLabel=g(()=>this.tnTabs().find(i=>i.key===this.tnActiveKey())?.label??"Overview");tabNavCode=g(()=>{const i=this.tnDirection()==="vertical",a=['[items]="items"'];i&&a.push("tabNav",'direction="auto"'),this.tnStyle()!=="underline"&&a.push(`activeStyle="${this.tnStyle()}"`),this.tnSize()!=="compact"&&a.push(`size="${this.tnSize()}"`),this.tnCollapsed()&&a.push("collapsed"),this.tnBackground()!=="transparent"&&a.push(`background="${this.tnBackground()}"`);const o=["<fold-view-nav",...a.map(y=>`  ${y}`),"/>"],s=i&&this.tnCollapsed()?`<fold-nav-layout placement="side"
  style="--fold-nav-layout-rail-width: 56px">`:'<fold-nav-layout placement="side">';return["<!-- items navigate; routerLinkActive marks the current one -->",...i?[s,...o.map(y=>`  ${y}`),"  <router-outlet />","</fold-nav-layout>"]:[...o,"<router-outlet />"],"","// component — no activeKey: the URL drives the active item","items = [","  { key: 'overview', label: 'Overview', icon: 'grid', link: 'overview' },","  { key: 'members', label: 'Members', icon: 'team', link: 'members', badge: 3 },","  { key: 'settings', label: 'Settings', icon: 'settings', link: 'settings' },","];"].join(`
`)});overviewStats=[{label:"Contracts",value:"128"},{label:"Active",value:"96"},{label:"Expiring",value:"7"}];members=[{initials:"MM",name:"Marc Machine",role:"Producer",status:"Active",tone:"success"},{initials:"IL",name:"Inès Lambert",role:"A&R",status:"Expiring",tone:"warning"},{initials:"SD",name:"Sofia Duarte",role:"Engineer",status:"Active",tone:"success"}];settingsFields=[{label:"Workspace name",value:"Acme Records"},{label:"Default currency",value:"EUR"},{label:"Contract reminders",value:"14 days before"}];activity=[{text:"Contract #A-2291 signed",when:"2 hours ago"},{text:"Inès Lambert joined the workspace",when:"yesterday"},{text:"Invoice INV-0043 paid",when:"3 days ago"}];invoices=[{ref:"INV-0043",date:"12 Jun 2026",amount:"€ 2 400"},{ref:"INV-0042",date:"12 May 2026",amount:"€ 2 400"},{ref:"INV-0041",date:"12 Apr 2026",amount:"€ 1 850"}];openTabPanel(){this.panelHost.open(V,{side:"right"})}static ɵfac=function(a){return new(a||k)};static ɵcmp=S({type:k,selectors:[["gal-tab-nav-page"]],decls:126,vars:35,consts:[["title","view-nav"],["description",""],["titleBadge","","kind","component"],["variant","accent","icon","globe"],["routerLink","/tabs"],["stage","",3,"code"],["params","",1,"np-field"],[1,"gal-tag"],[1,"ss-seg"],["type","button",3,"click"],["type","button",3,"is-on"],["params","",1,"doc-p"],[1,"tn-page"],[1,"tn-urlbar"],["name","globe","size","sm",1,"tn-url-icon"],[1,"tn-url"],[1,"tn-url-seg"],[3,"placement","foldAt"],["tabNav","","direction","auto",3,"activeChange","items","activeKey","activeStyle","size","collapsed","background"],[1,"tn-panel"],[1,"tn-outlet-tag"],[1,"tn-view-head"],[1,"tn-view-title"],[1,"tn-view-path"],[1,"tn-view-body"],[1,"tn-stats"],[1,"tn-rows"],[1,"tn-form"],[1,"tn-feed"],[1,"tn-table"],[1,"gal-cell"],["type","button",1,"gal-theme",3,"click"],["name","contracts","size","sm"],[1,"tn-stat"],[1,"tn-stat-value"],[1,"tn-stat-label"],[1,"tn-row"],[1,"tn-avatar"],[1,"tn-row-main"],[1,"tn-row-title"],[1,"tn-row-sub"],[3,"content","variant"],[1,"tn-field"],[1,"tn-field-label"],[1,"tn-field-control"],[1,"tn-event"],[1,"tn-dot"],[1,"tn-tr"],[1,"tn-amount"]],template:function(a,o){if(a&1&&(t(0,"fold-page-layout",0)(1,"p",1),n(2," A "),t(3,"strong"),n(4,"navigation"),e(),n(5," bar styled as tabs — a "),t(6,"code"),n(7,"<nav>"),e(),n(8," whose items "),t(9,"strong"),n(10,"go somewhere"),e(),n(11,". Clicking one changes the route: the URL updates and the "),t(12,"code"),n(13,"<router-outlet>"),e(),n(14," renders the matching view. The active item is derived from the URL (so deep links, back and forward all stay in sync) and marked with "),t(15,"code"),n(16,'aria-current="page"'),e(),n(17,". Horizontal for a page-level bar, vertical for a sidebar rail (which auto-collapses to a horizontal icon row on mobile). "),e(),_(18,"gal-kind-badge",2),t(19,"fold-callout",3)(20,"strong"),n(21,"Does the tab go somewhere?"),e(),n(22," This is your component — it drives "),t(23,"strong"),n(24,"routing"),e(),n(25," (URL changes, "),t(26,"code"),n(27,"<router-outlet>"),e(),n(28,", browser history). If instead the tabs toggle "),t(29,"strong"),n(30,"layered panels in place"),e(),n(31," on the same URL, use "),t(32,"a",4)(33,"code"),n(34,"fold-tabs"),e()(),n(35," — same look, but the ARIA Tabs widget ("),t(36,"code"),n(37,'role="tablist"'),e(),n(38,", arrow keys). Using this navigation bar to fake in-place tabs is an anti-pattern, so the two are separate on purpose. "),e(),t(39,"dev-playground",5)(40,"div",6)(41,"span",7),n(42,"activeStyle"),e(),t(43,"div",8)(44,"button",9),c("click",function(){return o.tnStyle.set("underline")}),n(45," underline "),e(),t(46,"button",9),c("click",function(){return o.tnStyle.set("fill")}),n(47," fill "),e()()(),t(48,"div",6)(49,"span",7),n(50,"direction"),e(),t(51,"div",8)(52,"button",9),c("click",function(){return o.tnDirection.set("horizontal")}),n(53," horizontal "),e(),t(54,"button",9),c("click",function(){return o.tnDirection.set("vertical")}),n(55," vertical "),e()()(),t(56,"div",6)(57,"span",7),n(58,"size"),e(),t(59,"div",8),m(60,W,2,3,"button",10,x),e()(),t(62,"div",6)(63,"span",7),n(64,"collapsed"),e(),t(65,"div",8)(66,"button",9),c("click",function(){return o.tnCollapsed.set(!1)}),n(67," off "),e(),t(68,"button",9),c("click",function(){return o.tnCollapsed.set(!0)}),n(69," icons "),e()()(),t(70,"div",6)(71,"span",7),n(72,"background"),e(),t(73,"div",8)(74,"button",9),c("click",function(){return o.tnBackground.set("surface")}),n(75," surface "),e(),t(76,"button",9),c("click",function(){return o.tnBackground.set("transparent")}),n(77," transparent "),e()()(),t(78,"div",6)(79,"span",7),n(80,"tabs"),e(),t(81,"div",8),m(82,J,2,3,"button",10,x),e()(),t(84,"div",6)(85,"span",7),n(86,"tab content"),e(),t(87,"div",8)(88,"button",9),c("click",function(){return o.tnIcon.set(!o.tnIcon())}),n(89," icons "),e(),t(90,"button",9),c("click",function(){return o.tnBadge.set(!o.tnBadge())}),n(91," badges "),e()()(),t(92,"p",11),n(93," Each click navigates — watch the URL. In a real app this panel is a "),t(94,"code"),n(95,"<router-outlet>"),e(),n(96,". "),e(),t(97,"div",12)(98,"div",13),_(99,"fold-icon",14),t(100,"span",15),n(101,"acme.app/workspace/"),t(102,"span",16),n(103),e()()(),t(104,"fold-nav-layout",17)(105,"fold-view-nav",18),c("activeChange",function(b){return o.tnActive.set(b)}),e(),t(106,"div",19)(107,"span",20),n(108,"<router-outlet>"),e(),t(109,"div",21)(110,"h3",22),n(111),e(),t(112,"span",23),n(113),e()(),t(114,"div",24),$(115,Q,3,0,"div",25)(116,Y,3,0,"div",26)(117,nn,3,0,"div",27)(118,en,3,0,"div",28)(119,on,3,0,"div",29),e()()()()(),t(120,"div",30)(121,"span",7),n(122,"in a side panel (fold-panel)"),e(),t(123,"button",31),c("click",function(){return o.openTabPanel()}),_(124,"fold-icon",32),n(125," Open panel with tabs "),e()()()),a&2){let s;l(39),h("code",o.tabNavCode()),l(5),p("is-on",o.tnStyle()==="underline"),l(2),p("is-on",o.tnStyle()==="fill"),l(6),p("is-on",o.tnDirection()==="horizontal"),l(2),p("is-on",o.tnDirection()==="vertical"),l(6),f(o.tabSizes),l(6),p("is-on",!o.tnCollapsed()),l(2),p("is-on",o.tnCollapsed()),l(6),p("is-on",o.tnBackground()==="surface"),l(2),p("is-on",o.tnBackground()==="transparent"),l(6),f(o.tabCounts),l(6),p("is-on",o.tnIcon()),l(2),p("is-on",o.tnBadge()),l(13),d(o.tnActiveKey()),l(),D("--fold-nav-layout-rail-width",o.tnCollapsed()&&o.tnDirection()==="vertical"?"56px":null),h("placement",o.tnDirection()==="vertical"?"side":"top")("foldAt",320),l(),h("items",o.tnTabs())("activeKey",o.tnActiveKey())("activeStyle",o.tnStyle())("size",o.tnSize())("collapsed",o.tnCollapsed())("background",o.tnBackground()),l(6),d(o.tnActiveLabel()),l(2),w("/",o.tnActiveKey()),l(2),R((s=o.tnActiveKey())==="overview"?115:s==="members"?116:s==="settings"?117:s==="activity"?118:s==="billing"?119:-1)}},dependencies:[F,K,B,M,U,E,I,L,O],styles:[`@charset "UTF-8";
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
  font-family: var(--fold-font-mono, ui-monospace, monospace);
  font-size: 13px;
  color: var(--fold-color-text-muted);
}

.tn-url-seg {
  color: var(--fold-color-primary);
  font-weight: 700;
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
  font-family: var(--fold-font-mono, ui-monospace, monospace);
  font-size: 10px;
  letter-spacing: 0.02em;
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
  font-size: var(--fold-text-md);
  font-weight: 700;
  color: var(--fold-color-text);
}

.tn-view-path {
  font-family: var(--fold-font-mono, ui-monospace, monospace);
  font-size: 12px;
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
  font-weight: 700;
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
  font-size: 11px;
  font-weight: 700;
}

.tn-row-main {
  display: flex;
  flex-direction: column;
  min-width: 0;
  flex: 1;
}

.tn-row-title {
  font-size: 13px;
  font-weight: 600;
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
  font-size: 13px;
  color: var(--fold-color-text-secondary);
}

.tn-field-control {
  padding: 5px 10px;
  border: 1px solid var(--fold-color-border);
  border-radius: var(--fold-radius-sm);
  background: var(--fold-color-surface-sunken);
  color: var(--fold-color-text);
  font-size: 12px;
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
  font-weight: 700;
  font-size: 13px;
  color: var(--fold-color-text);
  font-variant-numeric: tabular-nums;
  text-align: right;
}`],encapsulation:2})}export{k as default};
