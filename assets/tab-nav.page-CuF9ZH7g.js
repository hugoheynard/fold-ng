import{T as A,U as z,s as u,y as h,ɵ as S,R as F,c as B,F as I,a as L,d as t,e as n,f as e,g,C as c,i as m,u as x,I as $,j as r,m as _,v as D,D as p,o as f,k as d,A as R,l as w,J as K,B as T,q as v,E as C,H as N}from"./index-Ci6yhgBI.js";import{K as O}from"./kind-badge.component-kkE1GCNe.js";import{C as U}from"./composed-of.component-BFYwCvH7.js";import{D as V}from"./playground.component-Cexjr9Cf.js";import{T as E}from"./tab-panel.component-C3Rkx0AO.js";import{FoldCalloutComponent as M}from"./callout.component-BTAuz64_.js";import{FoldNavLayoutComponent as j}from"./nav-layout.component-C30TQVFW.js";import{FoldViewNavComponent as H}from"./view-nav.component-C7cYS0J3.js";import"./button.component-DMBE20VB.js";import"./spinner.component-kdzKoVrH.js";import"./tokens.catalog-DF_6rd51.js";import"./element-title.component-CGnuUH0f.js";import"./page-section.component-BArtEj3s.js";import"./slider.component-CcQuXEuq.js";import"./input-value-Co_u-z_8.js";import"./nav-layout.context-Dnwrw13x.js";const W=()=>["badges","icons"],P=(l,i)=>i.label,J=(l,i)=>i.name,q=(l,i)=>i.text,G=(l,i)=>i.ref;function Q(l,i){if(l&1){const a=T();t(0,"button",10),c("click",function(){const s=C(a).$implicit,b=v();return N(b.tnSize.set(s))}),n(1),e()}if(l&2){const a=i.$implicit,o=v();p("is-on",o.tnSize()===a),r(),w(" ",a," ")}}function X(l,i){if(l&1){const a=T();t(0,"button",10),c("click",function(){const s=C(a).$implicit,b=v();return N(b.tnCount.set(s))}),n(1),e()}if(l&2){const a=i.$implicit,o=v();p("is-on",o.tnCount()===a),r(),w(" ",a," ")}}function Y(l,i){if(l&1&&(t(0,"div",34)(1,"span",35),n(2),e(),t(3,"span",36),n(4),e()()),l&2){const a=i.$implicit;r(2),d(a.value),r(2),d(a.label)}}function Z(l,i){if(l&1&&(t(0,"div",26),m(1,Y,5,2,"div",34,P),e()),l&2){const a=v();r(),f(a.overviewStats)}}function nn(l,i){if(l&1&&(t(0,"div",37)(1,"span",38),n(2),e(),t(3,"span",39)(4,"span",40),n(5),e(),t(6,"span",41),n(7),e()(),g(8,"fold-badge",42),e()),l&2){const a=i.$implicit;r(2),d(a.initials),r(3),d(a.name),r(2),d(a.role),r(),_("content",a.status)("variant",a.tone)}}function tn(l,i){if(l&1&&(t(0,"div",27),m(1,nn,9,5,"div",37,J),e()),l&2){const a=v();r(),f(a.members)}}function en(l,i){if(l&1&&(t(0,"div",43)(1,"span",44),n(2),e(),t(3,"span",45),n(4),e()()),l&2){const a=i.$implicit;r(2),d(a.label),r(2),d(a.value)}}function an(l,i){if(l&1&&(t(0,"div",28),m(1,en,5,2,"div",43,P),e()),l&2){const a=v();r(),f(a.settingsFields)}}function on(l,i){if(l&1&&(t(0,"div",46),g(1,"span",47),t(2,"span",39)(3,"span",40),n(4),e(),t(5,"span",41),n(6),e()()()),l&2){const a=i.$implicit;r(4),d(a.text),r(2),d(a.when)}}function rn(l,i){if(l&1&&(t(0,"div",29),m(1,on,7,2,"div",46,q),e()),l&2){const a=v();r(),f(a.activity)}}function ln(l,i){if(l&1&&(t(0,"div",48)(1,"span",40),n(2),e(),t(3,"span",41),n(4),e(),t(5,"span",49),n(6),e()()),l&2){const a=i.$implicit;r(2),d(a.ref),r(2),d(a.date),r(2),d(a.amount)}}function sn(l,i){if(l&1&&(t(0,"div",30),m(1,ln,7,3,"div",48,G),e()),l&2){const a=v();r(),f(a.invoices)}}class k{panelHost=A(z);tabCounts=[2,3,5];tabSizes=["compact","comfortable"];tnStyle=u("underline");tnDirection=u("vertical");tnSize=u("compact");tnCollapsed=u(!1);tnBackground=u("transparent");tnBadge=u(!0);tnIcon=u(!0);tnCount=u(3);tnActive=u("overview");TAB_POOL=[{key:"overview",label:"Overview",icon:"grid"},{key:"members",label:"Members",icon:"team",badge:3},{key:"settings",label:"Settings",icon:"settings"},{key:"activity",label:"Activity",icon:"timeline"},{key:"billing",label:"Billing",icon:"contracts",badge:2}];tnTabs=h(()=>this.TAB_POOL.slice(0,this.tnCount()).map(i=>({key:i.key,label:i.label,...this.tnIcon()?{icon:i.icon}:{},badge:this.tnBadge()?i.badge??null:null})));tnActiveKey=h(()=>{const i=this.tnTabs().map(a=>a.key);return i.includes(this.tnActive())?this.tnActive():i[0]??""});tnActiveLabel=h(()=>this.tnTabs().find(i=>i.key===this.tnActiveKey())?.label??"Overview");tabNavCode=h(()=>{const i=this.tnDirection()==="vertical",a=['[items]="items"'];i&&a.push("tabNav",'direction="auto"'),this.tnStyle()!=="underline"&&a.push(`activeStyle="${this.tnStyle()}"`),this.tnSize()!=="compact"&&a.push(`size="${this.tnSize()}"`),this.tnCollapsed()&&a.push("collapsed"),this.tnBackground()!=="transparent"&&a.push(`background="${this.tnBackground()}"`);const o=["<fold-view-nav",...a.map(y=>`  ${y}`),"/>"],s=i&&this.tnCollapsed()?`<fold-nav-layout placement="side"
  style="--fold-nav-layout-rail-width: 56px">`:'<fold-nav-layout placement="side">';return["<!-- items navigate; routerLinkActive marks the current one -->",...i?[s,...o.map(y=>`  ${y}`),"  <router-outlet />","</fold-nav-layout>"]:[...o,"<router-outlet />"],"","// component — no activeKey: the URL drives the active item","items = [","  { key: 'overview', label: 'Overview', icon: 'grid', link: 'overview' },","  { key: 'members', label: 'Members', icon: 'team', link: 'members', badge: 3 },","  { key: 'settings', label: 'Settings', icon: 'settings', link: 'settings' },","];"].join(`
`)});overviewStats=[{label:"Contracts",value:"128"},{label:"Active",value:"96"},{label:"Expiring",value:"7"}];members=[{initials:"MM",name:"Marc Machine",role:"Producer",status:"Active",tone:"success"},{initials:"IL",name:"Inès Lambert",role:"A&R",status:"Expiring",tone:"warning"},{initials:"SD",name:"Sofia Duarte",role:"Engineer",status:"Active",tone:"success"}];settingsFields=[{label:"Workspace name",value:"Acme Records"},{label:"Default currency",value:"EUR"},{label:"Contract reminders",value:"14 days before"}];activity=[{text:"Contract #A-2291 signed",when:"2 hours ago"},{text:"Inès Lambert joined the workspace",when:"yesterday"},{text:"Invoice INV-0043 paid",when:"3 days ago"}];invoices=[{ref:"INV-0043",date:"12 Jun 2026",amount:"€ 2 400"},{ref:"INV-0042",date:"12 May 2026",amount:"€ 2 400"},{ref:"INV-0041",date:"12 Apr 2026",amount:"€ 1 850"}];openTabPanel(){this.panelHost.open(E,{side:"right"})}static ɵfac=function(a){return new(a||k)};static ɵcmp=S({type:k,selectors:[["gal-tab-nav-page"]],decls:127,vars:38,consts:[["title","view-nav"],["description",""],["titleBadge","","kind","component"],[3,"ids"],["variant","accent","icon","globe"],["routerLink","/tabs"],[3,"code","initialWidth"],["params","",1,"np-field"],[1,"gal-tag"],[1,"ss-seg"],["type","button",3,"click"],["type","button",3,"is-on"],["params","",1,"doc-p"],[1,"tn-page"],[1,"tn-urlbar"],["name","globe","size","sm",1,"tn-url-icon"],[1,"tn-url"],[1,"tn-url-seg"],[3,"placement","foldAt"],["tabNav","","direction","auto",3,"activeChange","items","activeKey","activeStyle","size","collapsed","background"],[1,"tn-panel"],[1,"tn-outlet-tag"],[1,"tn-view-head"],[1,"tn-view-title"],[1,"tn-view-path"],[1,"tn-view-body"],[1,"tn-stats"],[1,"tn-rows"],[1,"tn-form"],[1,"tn-feed"],[1,"tn-table"],[1,"gal-cell"],["type","button",1,"gal-theme",3,"click"],["name","contracts","size","sm"],[1,"tn-stat"],[1,"tn-stat-value"],[1,"tn-stat-label"],[1,"tn-row"],[1,"tn-avatar"],[1,"tn-row-main"],[1,"tn-row-title"],[1,"tn-row-sub"],[3,"content","variant"],[1,"tn-field"],[1,"tn-field-label"],[1,"tn-field-control"],[1,"tn-event"],[1,"tn-dot"],[1,"tn-tr"],[1,"tn-amount"]],template:function(a,o){if(a&1&&(t(0,"fold-page-layout",0)(1,"p",1),n(2," A "),t(3,"strong"),n(4,"navigation"),e(),n(5," bar styled as tabs — a "),t(6,"code"),n(7,"<nav>"),e(),n(8," whose items "),t(9,"strong"),n(10,"go somewhere"),e(),n(11,". Clicking one changes the route: the URL updates and the "),t(12,"code"),n(13,"<router-outlet>"),e(),n(14," renders the matching view. The active item is derived from the URL (so deep links, back and forward all stay in sync) and marked with "),t(15,"code"),n(16,'aria-current="page"'),e(),n(17,". Horizontal for a page-level bar, vertical for a sidebar rail (which auto-collapses to a horizontal icon row on mobile). "),e(),g(18,"gal-kind-badge",2)(19,"gal-composed-of",3),t(20,"fold-callout",4)(21,"strong"),n(22,"Does the tab go somewhere?"),e(),n(23," This is your component — it drives "),t(24,"strong"),n(25,"routing"),e(),n(26," (URL changes, "),t(27,"code"),n(28,"<router-outlet>"),e(),n(29,", browser history). If instead the tabs toggle "),t(30,"strong"),n(31,"layered panels in place"),e(),n(32," on the same URL, use "),t(33,"a",5)(34,"code"),n(35,"fold-tabs"),e()(),n(36," — same look, but the ARIA Tabs widget ("),t(37,"code"),n(38,'role="tablist"'),e(),n(39,", arrow keys). Using this navigation bar to fake in-place tabs is an anti-pattern, so the two are separate on purpose. "),e(),t(40,"dev-playground",6)(41,"div",7)(42,"span",8),n(43,"activeStyle"),e(),t(44,"div",9)(45,"button",10),c("click",function(){return o.tnStyle.set("underline")}),n(46," underline "),e(),t(47,"button",10),c("click",function(){return o.tnStyle.set("fill")}),n(48," fill "),e()()(),t(49,"div",7)(50,"span",8),n(51,"direction"),e(),t(52,"div",9)(53,"button",10),c("click",function(){return o.tnDirection.set("horizontal")}),n(54," horizontal "),e(),t(55,"button",10),c("click",function(){return o.tnDirection.set("vertical")}),n(56," vertical "),e()()(),t(57,"div",7)(58,"span",8),n(59,"size"),e(),t(60,"div",9),m(61,Q,2,3,"button",11,x),e()(),t(63,"div",7)(64,"span",8),n(65,"collapsed"),e(),t(66,"div",9)(67,"button",10),c("click",function(){return o.tnCollapsed.set(!1)}),n(68," off "),e(),t(69,"button",10),c("click",function(){return o.tnCollapsed.set(!0)}),n(70," icons "),e()()(),t(71,"div",7)(72,"span",8),n(73,"background"),e(),t(74,"div",9)(75,"button",10),c("click",function(){return o.tnBackground.set("surface")}),n(76," surface "),e(),t(77,"button",10),c("click",function(){return o.tnBackground.set("transparent")}),n(78," transparent "),e()()(),t(79,"div",7)(80,"span",8),n(81,"tabs"),e(),t(82,"div",9),m(83,X,2,3,"button",11,x),e()(),t(85,"div",7)(86,"span",8),n(87,"tab content"),e(),t(88,"div",9)(89,"button",10),c("click",function(){return o.tnIcon.set(!o.tnIcon())}),n(90," icons "),e(),t(91,"button",10),c("click",function(){return o.tnBadge.set(!o.tnBadge())}),n(92," badges "),e()()(),t(93,"p",12),n(94," Each click navigates — watch the URL. In a real app this panel is a "),t(95,"code"),n(96,"<router-outlet>"),e(),n(97,". "),e(),t(98,"div",13)(99,"div",14),g(100,"fold-icon",15),t(101,"span",16),n(102,"acme.app/workspace/"),t(103,"span",17),n(104),e()()(),t(105,"fold-nav-layout",18)(106,"fold-view-nav",19),c("activeChange",function(b){return o.tnActive.set(b)}),e(),t(107,"div",20)(108,"span",21),n(109,"<router-outlet>"),e(),t(110,"div",22)(111,"h3",23),n(112),e(),t(113,"span",24),n(114),e()(),t(115,"div",25),$(116,Z,3,0,"div",26)(117,tn,3,0,"div",27)(118,an,3,0,"div",28)(119,rn,3,0,"div",29)(120,sn,3,0,"div",30),e()()()()(),t(121,"div",31)(122,"span",8),n(123,"in a side panel (fold-panel)"),e(),t(124,"button",32),c("click",function(){return o.openTabPanel()}),g(125,"fold-icon",33),n(126," Open panel with tabs "),e()()()),a&2){let s;r(19),_("ids",D(37,W)),r(21),_("code",o.tabNavCode())("initialWidth",1280),r(5),p("is-on",o.tnStyle()==="underline"),r(2),p("is-on",o.tnStyle()==="fill"),r(6),p("is-on",o.tnDirection()==="horizontal"),r(2),p("is-on",o.tnDirection()==="vertical"),r(6),f(o.tabSizes),r(6),p("is-on",!o.tnCollapsed()),r(2),p("is-on",o.tnCollapsed()),r(6),p("is-on",o.tnBackground()==="surface"),r(2),p("is-on",o.tnBackground()==="transparent"),r(6),f(o.tabCounts),r(6),p("is-on",o.tnIcon()),r(2),p("is-on",o.tnBadge()),r(13),d(o.tnActiveKey()),r(),R("--fold-nav-layout-rail-width",o.tnCollapsed()&&o.tnDirection()==="vertical"?"56px":null),_("placement",o.tnDirection()==="vertical"?"side":"top")("foldAt",320),r(),_("items",o.tnTabs())("activeKey",o.tnActiveKey())("activeStyle",o.tnStyle())("size",o.tnSize())("collapsed",o.tnCollapsed())("background",o.tnBackground()),r(6),d(o.tnActiveLabel()),r(2),w("/",o.tnActiveKey()),r(2),K((s=o.tnActiveKey())==="overview"?116:s==="members"?117:s==="settings"?118:s==="activity"?119:s==="billing"?120:-1)}},dependencies:[F,O,U,B,M,j,H,I,L,V],styles:[`@charset "UTF-8";
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
