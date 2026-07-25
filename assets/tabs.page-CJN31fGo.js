import{s as f,x as h,ɵ as w,R as k,c as x,a as T,d as a,e,f as t,g as _,B as c,i as v,P as C,j as n,m as d,C as b,l as P,o as m,k as p}from"./index-UW4on9BG.js";import{K as z}from"./kind-badge.component-Bk79gg1Y.js";import{D as F}from"./playground.component-Cnjss_-R.js";import{FoldCalloutComponent as $}from"./callout.component-BOAjbbtS.js";import{FoldNavLayoutComponent as A}from"./nav-layout.component-BsLP_JMm.js";import{FoldTabsComponent as S}from"./tabs.component-D_1rMKR7.js";import{FoldTabPanelComponent as E}from"./tab-panel.component-DrES7LYG.js";import"./button.component-D0o4QjSk.js";import"./spinner.component-DnyU_qGD.js";import"./tokens.catalog-DF_6rd51.js";import"./element-title.component-BKp6imRK.js";import"./page-section.component-BEl6f7vu.js";import"./nav-layout.context-DH55KTgc.js";const g=(r,l)=>l.label,I=(r,l)=>l.name;function L(r,l){if(r&1&&(a(0,"div",17)(1,"span",24),e(2),t(),a(3,"span",25),e(4),t()()),r&2){const o=l.$implicit;n(2),p(o.value),n(2),p(o.label)}}function M(r,l){if(r&1&&(a(0,"div",20)(1,"span",26),e(2),t(),a(3,"span",27)(4,"span",28),e(5),t(),a(6,"span",29),e(7),t()(),_(8,"fold-badge",30),t()),r&2){const o=l.$implicit;n(2),p(o.initials),n(3),p(o.name),n(2),p(o.role),n(),d("content",o.status)("variant",o.tone)}}function R(r,l){if(r&1&&(a(0,"div",23)(1,"span",31),e(2),t(),a(3,"span",32),e(4),t()()),r&2){const o=l.$implicit;n(2),p(o.label),n(2),p(o.value)}}class u{style=f("underline");dir=f("horizontal");active=f("overview");tabs=[{key:"overview",label:"Overview",icon:"grid"},{key:"members",label:"Members",icon:"team",badge:3},{key:"settings",label:"Settings",icon:"settings"}];code=h(()=>{const l=['#t="foldTabs"','[tabs]="tabs"','[activeKey]="active()"'];return this.style()!=="underline"&&l.push(`activeStyle="${this.style()}"`),this.dir()!=="horizontal"&&l.push(`direction="${this.dir()}"`),l.push('(tabChange)="active.set($event)"'),["<!-- one tablist + one panel per key; the #t ref pairs them -->","<fold-tabs",...l.map(o=>`  ${o}`),"/>",'<fold-tab-panel [tabs]="t" key="overview">…</fold-tab-panel>','<fold-tab-panel [tabs]="t" key="members">…</fold-tab-panel>','<fold-tab-panel [tabs]="t" key="settings">…</fold-tab-panel>',"","// component","tabs = [{ key: 'overview', label: 'Overview', icon: 'grid' }, …];","active = signal('overview');"].join(`
`)});stats=[{label:"Contracts",value:"128"},{label:"Active",value:"96"},{label:"Expiring",value:"7"}];members=[{initials:"MM",name:"Marc Machine",role:"Producer",status:"Active",tone:"success"},{initials:"IL",name:"Inès Lambert",role:"A&R",status:"Expiring",tone:"warning"}];fields=[{label:"Workspace name",value:"Acme Records"},{label:"Default currency",value:"EUR"},{label:"Contract reminders",value:"14 days before"}];static ɵfac=function(o){return new(o||u)};static ɵcmp=w({type:u,selectors:[["gal-tabs-page"]],decls:93,vars:17,consts:[["t","foldTabs"],["title","tabs"],["description",""],["titleBadge","","kind","component"],["variant","accent","icon","grid"],["routerLink","/tab-nav"],["stage","",3,"code"],["params","",1,"np-field"],[1,"gal-tag"],[1,"ss-seg"],["type","button",3,"click"],["params","",1,"doc-p"],[1,"tp-frame"],[3,"placement"],["tabNav","","direction","auto",3,"tabChange","tabs","activeKey","activeStyle"],["key","overview",1,"tp-panel",3,"tabs"],[1,"tp-stats"],[1,"tp-stat"],["key","members",1,"tp-panel",3,"tabs"],[1,"tp-rows"],[1,"tp-row"],["key","settings",1,"tp-panel",3,"tabs"],[1,"tp-form"],[1,"tp-field"],[1,"tp-stat-value"],[1,"tp-stat-label"],[1,"tp-avatar"],[1,"tp-row-main"],[1,"tp-row-title"],[1,"tp-row-sub"],[3,"content","variant"],[1,"tp-field-label"],[1,"tp-field-control"]],template:function(o,i){if(o&1&&(a(0,"fold-page-layout",1)(1,"p",2),e(2," The in-page "),a(3,"strong"),e(4,"ARIA Tabs widget"),t(),e(5,": a "),a(6,"code"),e(7,'role="tablist"'),t(),e(8," that switches layered panels "),a(9,"strong"),e(10,"without navigating"),t(),e(11,". Arrow keys move between tabs (roving tabindex — only the active tab is in the Tab order), "),a(12,"code"),e(13,"Home"),t(),e(14,"/"),a(15,"code"),e(16,"End"),t(),e(17," jump to the ends, and each tab is wired to its panel ("),a(18,"code"),e(19,"aria-controls"),t(),e(20," ↔ "),a(21,"code"),e(22,"aria-labelledby"),t(),e(23,"). "),t(),_(24,"gal-kind-badge",3),a(25,"fold-callout",4)(26,"strong"),e(27,"Switching panels in place?"),t(),e(28," This is your component. If the tabs instead "),a(29,"strong"),e(30,"navigate"),t(),e(31," between routes/views, use "),a(32,"a",5)(33,"code"),e(34,"fold-view-nav"),t()(),e(35," — same look, but "),a(36,"code"),e(37,"<nav>"),t(),e(38," + "),a(39,"code"),e(40,"aria-current"),t(),e(41,". Using the tabs pattern for navigation is an anti-pattern, so the two are separate on purpose. "),t(),a(42,"dev-playground",6)(43,"div",7)(44,"span",8),e(45,"activeStyle"),t(),a(46,"div",9)(47,"button",10),c("click",function(){return i.style.set("underline")}),e(48," underline "),t(),a(49,"button",10),c("click",function(){return i.style.set("fill")}),e(50," fill "),t()()(),a(51,"div",7)(52,"span",8),e(53,"direction"),t(),a(54,"div",9)(55,"button",10),c("click",function(){return i.dir.set("horizontal")}),e(56," horizontal "),t(),a(57,"button",10),c("click",function(){return i.dir.set("vertical")}),e(58," vertical "),t()()(),a(59,"p",11),e(60," Focus a tab, then use "),a(61,"kbd"),e(62,"←"),t(),a(63,"kbd"),e(64,"→"),t(),e(65," (or "),a(66,"kbd"),e(67,"↑"),t(),a(68,"kbd"),e(69,"↓"),t(),e(70,") · "),a(71,"kbd"),e(72,"Home"),t(),e(73," · "),a(74,"kbd"),e(75,"End"),t(),e(76),t(),a(77,"div",12)(78,"fold-nav-layout",13)(79,"fold-tabs",14,0),c("tabChange",function(y){return i.active.set(y)}),t(),a(81,"fold-tab-panel",15)(82,"div",16),v(83,L,5,2,"div",17,g),t()(),a(85,"fold-tab-panel",18)(86,"div",19),v(87,M,9,5,"div",20,I),t()(),a(89,"fold-tab-panel",21)(90,"div",22),v(91,R,5,2,"div",23,g),t()()()()()()),o&2){const s=C(80);n(42),d("code",i.code()),n(5),b("is-on",i.style()==="underline"),n(2),b("is-on",i.style()==="fill"),n(6),b("is-on",i.dir()==="horizontal"),n(2),b("is-on",i.dir()==="vertical"),n(19),P(". Active panel: “",i.active(),"”. "),n(2),d("placement",i.dir()==="vertical"?"side":"top"),n(),d("tabs",i.tabs)("activeKey",i.active())("activeStyle",i.style()),n(2),d("tabs",s),n(2),m(i.stats),n(2),d("tabs",s),n(2),m(i.members),n(2),d("tabs",s),n(2),m(i.fields)}},dependencies:[k,z,F,x,$,A,S,E,T],styles:[`@charset "UTF-8";
/* fold-tabs gallery page — the mock panel content. Classes are \`tp-*\` and the
   page is ViewEncapsulation.None, so keep the prefix distinct. */
.tp-frame {
  border: 1px solid var(--fold-color-border);
  border-radius: var(--fold-radius-lg);
  background: var(--fold-color-bg-page);
  overflow: hidden;
}

.tp-panel {
  display: block;
  padding: 20px;
}

/* Overview — a stat row. */
.tp-stats {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.tp-stat {
  flex: 1 1 120px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px;
  border-radius: var(--fold-radius-md);
  background: var(--fold-color-surface-subtle);
}

.tp-stat-value {
  font-size: var(--fold-text-xl);
  font-weight: 700;
  color: var(--fold-color-text);
}

.tp-stat-label {
  font-size: var(--fold-text-sm);
  color: var(--fold-color-text-muted);
}

/* Members — avatar rows. */
.tp-rows,
.tp-form {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.tp-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: var(--fold-radius-md);
  background: var(--fold-color-surface-subtle);
}

.tp-avatar {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: var(--fold-radius-pill);
  background: var(--fold-color-primary-surface);
  color: var(--fold-color-primary-text);
  font-size: var(--fold-text-sm);
  font-weight: 700;
}

.tp-row-main {
  display: flex;
  flex-direction: column;
  gap: 1px;
  margin-right: auto;
}

.tp-row-title {
  font-size: var(--fold-text-sm);
  font-weight: 600;
  color: var(--fold-color-text);
}

.tp-row-sub {
  font-size: var(--fold-text-xs);
  color: var(--fold-color-text-muted);
}

/* Settings — a label/value form. */
.tp-field {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px;
  border-radius: var(--fold-radius-md);
  border: 1px solid var(--fold-color-border-subtle);
}

.tp-field-label {
  font-size: var(--fold-text-sm);
  color: var(--fold-color-text-secondary);
}

.tp-field-control {
  font-size: var(--fold-text-sm);
  font-weight: 600;
  color: var(--fold-color-text);
}`],encapsulation:2})}export{u as default};
