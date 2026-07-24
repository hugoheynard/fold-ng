import{U as N,V as z,s as v,B as y,ɵ as S,c as A,F as B,a as F,d as t,e as l,f as e,g,G as c,i as b,y as h,L as $,T as I,j as r,m,x as p,o as f,l as T,M as D,E as k,z as u,k as d,H as w,I as C}from"./index-1SJQDgff.js";import{K as L}from"./kind-badge.component-DDuAk4WD.js";import{D as K}from"./playground.component-De8BL-of.js";import{T as M}from"./tab-panel.component-CCHbxAW4.js";import{F as V}from"./tab-layout.component-A3S0-X6K.js";import{F as O}from"./tab-nav.component-BiTK2tjW.js";import"./button.component-D5e90GMa.js";import"./spinner.component-CdDGG8SV.js";import"./tokens.catalog-DF_6rd51.js";import"./element-title.component-DKl8d2Fn.js";import"./page-section.component-DjGia3bw.js";const P=(i,o)=>o.label,j=(i,o)=>o.name,E=(i,o)=>o.text,H=(i,o)=>o.ref;function R(i,o){if(i&1){const n=k();t(0,"button",8),c("click",function(){const s=w(n).$implicit,_=u();return C(_.tnSize.set(s))}),l(1),e()}if(i&2){const n=o.$implicit,a=u();p("is-on",a.tnSize()===n),r(),T(" ",n," ")}}function U(i,o){if(i&1){const n=k();t(0,"button",8),c("click",function(){const s=w(n).$implicit,_=u();return C(_.tnCount.set(s))}),l(1),e()}if(i&2){const n=o.$implicit,a=u();p("is-on",a.tnCount()===n),r(),T(" ",n," ")}}function W(i,o){if(i&1&&(t(0,"div",26)(1,"span",27),l(2),e(),t(3,"span",28),l(4),e()()),i&2){const n=o.$implicit;r(2),d(n.value),r(2),d(n.label)}}function G(i,o){if(i&1&&(t(0,"div",18),b(1,W,5,2,"div",26,P),e()),i&2){const n=u();r(),f(n.overviewStats)}}function J(i,o){if(i&1&&(t(0,"div",29)(1,"span",30),l(2),e(),t(3,"span",31)(4,"span",32),l(5),e(),t(6,"span",33),l(7),e()(),g(8,"fold-badge",34),e()),i&2){const n=o.$implicit;r(2),d(n.initials),r(3),d(n.name),r(2),d(n.role),r(),m("content",n.status)("variant",n.tone)}}function q(i,o){if(i&1&&(t(0,"div",19),b(1,J,9,5,"div",29,j),e()),i&2){const n=u();r(),f(n.members)}}function Q(i,o){if(i&1&&(t(0,"div",35)(1,"span",36),l(2),e(),t(3,"span",37),l(4),e()()),i&2){const n=o.$implicit;r(2),d(n.label),r(2),d(n.value)}}function X(i,o){if(i&1&&(t(0,"div",20),b(1,Q,5,2,"div",35,P),e()),i&2){const n=u();r(),f(n.settingsFields)}}function Y(i,o){if(i&1&&(t(0,"div",38),g(1,"span",39),t(2,"span",31)(3,"span",32),l(4),e(),t(5,"span",33),l(6),e()()()),i&2){const n=o.$implicit;r(4),d(n.text),r(2),d(n.when)}}function Z(i,o){if(i&1&&(t(0,"div",21),b(1,Y,7,2,"div",38,E),e()),i&2){const n=u();r(),f(n.activity)}}function nn(i,o){if(i&1&&(t(0,"div",40)(1,"span",32),l(2),e(),t(3,"span",33),l(4),e(),t(5,"span",41),l(6),e()()),i&2){const n=o.$implicit;r(2),d(n.ref),r(2),d(n.date),r(2),d(n.amount)}}function tn(i,o){if(i&1&&(t(0,"div",22),b(1,nn,7,3,"div",40,H),e()),i&2){const n=u();r(),f(n.invoices)}}class x{panelHost=N(z);tabCounts=[2,3,5];tabSizes=["reduce","compact","comfortable"];tnStyle=v("underline");tnDirection=v("horizontal");tnSize=v("compact");tnBackground=v("surface");tnBadge=v(!0);tnIcon=v(!0);tnCount=v(3);tnActive=v("overview");TAB_POOL=[{key:"overview",label:"Overview",icon:"grid"},{key:"members",label:"Members",icon:"team",badge:3},{key:"settings",label:"Settings",icon:"settings"},{key:"activity",label:"Activity",icon:"timeline"},{key:"billing",label:"Billing",icon:"contracts",badge:2}];tnTabs=y(()=>this.TAB_POOL.slice(0,this.tnCount()).map(o=>({key:o.key,label:o.label,...this.tnIcon()?{icon:o.icon}:{},badge:this.tnBadge()?o.badge??null:null})));tnActiveKey=y(()=>{const o=this.tnTabs().map(n=>n.key);return o.includes(this.tnActive())?this.tnActive():o[0]??""});tabNavCode=y(()=>{const o=this.tnDirection()==="vertical",n=['[tabs]="tabs"','[activeKey]="active()"'];o&&n.push("tabNav",`[direction]="tl.stacked() ? 'horizontal' : 'vertical'"`),this.tnStyle()!=="underline"&&n.push(`activeStyle="${this.tnStyle()}"`),this.tnSize()!=="compact"&&n.push(`size="${this.tnSize()}"`),this.tnBackground()!=="surface"&&n.push(`background="${this.tnBackground()}"`),n.push('(tabChange)="active.set($event)"');const a=["<fold-tab-nav",...n.map(s=>`  ${s}`),"/>"];return o?['<fold-tab-layout placement="side" #tl="foldTabLayout">',...a.map(s=>`  ${s}`),"  <app-tab-content />","</fold-tab-layout>"].join(`
`):a.join(`
`)});overviewStats=[{label:"Contracts",value:"128"},{label:"Active",value:"96"},{label:"Expiring",value:"7"}];members=[{initials:"MM",name:"Marc Machine",role:"Producer",status:"Active",tone:"success"},{initials:"IL",name:"Inès Lambert",role:"A&R",status:"Expiring",tone:"warning"},{initials:"SD",name:"Sofia Duarte",role:"Engineer",status:"Active",tone:"success"}];settingsFields=[{label:"Workspace name",value:"Acme Records"},{label:"Default currency",value:"EUR"},{label:"Contract reminders",value:"14 days before"}];activity=[{text:"Contract #A-2291 signed",when:"2 hours ago"},{text:"Inès Lambert joined the workspace",when:"yesterday"},{text:"Invoice INV-0043 paid",when:"3 days ago"}];invoices=[{ref:"INV-0043",date:"12 Jun 2026",amount:"€ 2 400"},{ref:"INV-0042",date:"12 May 2026",amount:"€ 2 400"},{ref:"INV-0041",date:"12 Apr 2026",amount:"€ 1 850"}];openTabPanel(){this.panelHost.open(M,{side:"right"})}static ɵfac=function(n){return new(n||x)};static ɵcmp=S({type:x,selectors:[["gal-tab-nav-page"]],decls:72,vars:26,consts:[["tl","foldTabLayout"],["title","tab-nav"],["description",""],["titleBadge","","kind","component"],["stage","",3,"code"],["params","",1,"np-field"],[1,"gal-tag"],[1,"ss-seg"],["type","button",3,"click"],["type","button",3,"is-on"],["params","",1,"doc-p"],[1,"tn-page"],[1,"tn-page-head"],[1,"tn-page-title"],[1,"tn-page-sub"],[3,"placement"],["tabNav","",3,"tabChange","tabs","activeKey","activeStyle","direction","size","background"],[1,"tn-panel"],[1,"tn-stats"],[1,"tn-rows"],[1,"tn-form"],[1,"tn-feed"],[1,"tn-table"],[1,"gal-cell"],["type","button",1,"gal-theme",3,"click"],["name","contracts","size","sm"],[1,"tn-stat"],[1,"tn-stat-value"],[1,"tn-stat-label"],[1,"tn-row"],[1,"tn-avatar"],[1,"tn-row-main"],[1,"tn-row-title"],[1,"tn-row-sub"],[3,"content","variant"],[1,"tn-field"],[1,"tn-field-label"],[1,"tn-field-control"],[1,"tn-event"],[1,"tn-dot"],[1,"tn-tr"],[1,"tn-amount"]],template:function(n,a){if(n&1&&(t(0,"fold-page-layout",1)(1,"p",2),l(2," A tab bar of buttons — it renders the navigation only, the parent renders the content for the active key. Horizontal for a page-level bar, vertical for a sidebar rail (which auto-collapses to a horizontal icon row on mobile). Tabs carry an optional leading icon and a trailing badge. "),e(),g(3,"gal-kind-badge",3),t(4,"dev-playground",4)(5,"div",5)(6,"span",6),l(7,"activeStyle"),e(),t(8,"div",7)(9,"button",8),c("click",function(){return a.tnStyle.set("underline")}),l(10," underline "),e(),t(11,"button",8),c("click",function(){return a.tnStyle.set("fill")}),l(12," fill "),e()()(),t(13,"div",5)(14,"span",6),l(15,"direction"),e(),t(16,"div",7)(17,"button",8),c("click",function(){return a.tnDirection.set("horizontal")}),l(18," horizontal "),e(),t(19,"button",8),c("click",function(){return a.tnDirection.set("vertical")}),l(20," vertical "),e()()(),t(21,"div",5)(22,"span",6),l(23,"size"),e(),t(24,"div",7),b(25,R,2,3,"button",9,h),e()(),t(27,"div",5)(28,"span",6),l(29,"background"),e(),t(30,"div",7)(31,"button",8),c("click",function(){return a.tnBackground.set("surface")}),l(32," surface "),e(),t(33,"button",8),c("click",function(){return a.tnBackground.set("transparent")}),l(34," transparent "),e()()(),t(35,"div",5)(36,"span",6),l(37,"tabs"),e(),t(38,"div",7),b(39,U,2,3,"button",9,h),e()(),t(41,"div",5)(42,"span",6),l(43,"tab content"),e(),t(44,"div",7)(45,"button",8),c("click",function(){return a.tnIcon.set(!a.tnIcon())}),l(46," icons "),e(),t(47,"button",8),c("click",function(){return a.tnBadge.set(!a.tnBadge())}),l(48," badges "),e()()(),t(49,"p",10),l(50),e(),t(51,"div",11)(52,"div",12)(53,"span",13),l(54,"Workspace"),e(),t(55,"span",14),l(56,"Acme Records"),e()(),t(57,"fold-tab-layout",15,0)(59,"fold-tab-nav",16),c("tabChange",function(_){return a.tnActive.set(_)}),e(),t(60,"div",17),$(61,G,3,0,"div",18)(62,q,3,0,"div",19)(63,X,3,0,"div",20)(64,Z,3,0,"div",21)(65,tn,3,0,"div",22),e()()()(),t(66,"div",23)(67,"span",6),l(68,"in a side panel (fold-panel)"),e(),t(69,"button",24),c("click",function(){return a.openTabPanel()}),g(70,"fold-icon",25),l(71," Open panel with tabs "),e()()()),n&2){let s;const _=I(58);r(4),m("code",a.tabNavCode()),r(5),p("is-on",a.tnStyle()==="underline"),r(2),p("is-on",a.tnStyle()==="fill"),r(6),p("is-on",a.tnDirection()==="horizontal"),r(2),p("is-on",a.tnDirection()==="vertical"),r(6),f(a.tabSizes),r(6),p("is-on",a.tnBackground()==="surface"),r(2),p("is-on",a.tnBackground()==="transparent"),r(6),f(a.tabCounts),r(6),p("is-on",a.tnIcon()),r(2),p("is-on",a.tnBadge()),r(3),T("Active: “",a.tnActiveKey(),"”"),r(7),m("placement",a.tnDirection()==="vertical"?"side":"top"),r(2),m("tabs",a.tnTabs())("activeKey",a.tnActiveKey())("activeStyle",a.tnStyle())("direction",_.stacked()?"horizontal":"vertical")("size",a.tnSize())("background",a.tnBackground()),r(2),D((s=a.tnActiveKey())==="overview"?61:s==="members"?62:s==="settings"?63:s==="activity"?64:s==="billing"?65:-1)}},dependencies:[L,A,V,O,B,F,K],styles:[`@charset "UTF-8";
/* ── tab-nav page mock: a page shell (header + nav + content) whose body renders
   a distinct layout per tab, so the nav is shown driving real content. ── */
.tn-page {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.tn-page-head {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.tn-page-title {
  font-size: var(--fold-text-md);
  font-weight: 700;
  color: var(--fold-color-text);
}

.tn-page-sub {
  font-size: var(--fold-text-xs);
  color: var(--fold-color-text-muted);
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
}`],encapsulation:2})}export{x as default};
