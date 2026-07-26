import{s as f,y as h,ɵ as w,R as k,c as x,a as T,d as a,e,f as t,g as _,C as c,i as m,Q as C,j as n,m as d,v as P,D as b,l as F,o as v,k as p}from"./index-xwcY2TyU.js";import{K as z}from"./kind-badge.component-CmO85UOV.js";import{C as $}from"./composed-of.component-R3B87Awc.js";import{D as A}from"./playground.component-CO0928RC.js";import{FoldCalloutComponent as S}from"./callout.component-KuQLBTKh.js";import{FoldNavLayoutComponent as E}from"./nav-layout.component-gABx38dK.js";import{FoldTabsComponent as I}from"./tabs.component-DAl4jz8u.js";import{FoldTabPanelComponent as L}from"./tab-panel.component-DfUyaY1K.js";import"./button.component-DQjG9ts0.js";import"./spinner.component-xlosCR_F.js";import"./tokens.catalog-DF_6rd51.js";import"./element-title.component-Bdj4X0hr.js";import"./page-section.component-DDrjCWLS.js";import"./nav-layout.context-u5agZXrf.js";const M=()=>["badges","icons"],g=(r,l)=>l.label,R=(r,l)=>l.name;function K(r,l){if(r&1&&(a(0,"div",18)(1,"span",25),e(2),t(),a(3,"span",26),e(4),t()()),r&2){const o=l.$implicit;n(2),p(o.value),n(2),p(o.label)}}function j(r,l){if(r&1&&(a(0,"div",21)(1,"span",27),e(2),t(),a(3,"span",28)(4,"span",29),e(5),t(),a(6,"span",30),e(7),t()(),_(8,"fold-badge",31),t()),r&2){const o=l.$implicit;n(2),p(o.initials),n(3),p(o.name),n(2),p(o.role),n(),d("content",o.status)("variant",o.tone)}}function D(r,l){if(r&1&&(a(0,"div",24)(1,"span",32),e(2),t(),a(3,"span",33),e(4),t()()),r&2){const o=l.$implicit;n(2),p(o.label),n(2),p(o.value)}}class u{style=f("underline");dir=f("horizontal");active=f("overview");tabs=[{key:"overview",label:"Overview",icon:"grid"},{key:"members",label:"Members",icon:"team",badge:3},{key:"settings",label:"Settings",icon:"settings"}];code=h(()=>{const l=['#t="foldTabs"','[tabs]="tabs"','[activeKey]="active()"'];return this.style()!=="underline"&&l.push(`activeStyle="${this.style()}"`),this.dir()!=="horizontal"&&l.push(`direction="${this.dir()}"`),l.push('(tabChange)="active.set($event)"'),["<!-- one tablist + one panel per key; the #t ref pairs them -->","<fold-tabs",...l.map(o=>`  ${o}`),"/>",'<fold-tab-panel [tabs]="t" key="overview">…</fold-tab-panel>','<fold-tab-panel [tabs]="t" key="members">…</fold-tab-panel>','<fold-tab-panel [tabs]="t" key="settings">…</fold-tab-panel>',"","// component","tabs = [{ key: 'overview', label: 'Overview', icon: 'grid' }, …];","active = signal('overview');"].join(`
`)});stats=[{label:"Contracts",value:"128"},{label:"Active",value:"96"},{label:"Expiring",value:"7"}];members=[{initials:"MM",name:"Marc Machine",role:"Producer",status:"Active",tone:"success"},{initials:"IL",name:"Inès Lambert",role:"A&R",status:"Expiring",tone:"warning"}];fields=[{label:"Workspace name",value:"Acme Records"},{label:"Default currency",value:"EUR"},{label:"Contract reminders",value:"14 days before"}];static ɵfac=function(o){return new(o||u)};static ɵcmp=w({type:u,selectors:[["gal-tabs-page"]],decls:94,vars:19,consts:[["t","foldTabs"],["title","tabs"],["description",""],["titleBadge","","kind","component"],[3,"ids"],["variant","accent","icon","grid"],["routerLink","/tab-nav"],["stage","",3,"code"],["params","",1,"np-field"],[1,"gal-tag"],[1,"ss-seg"],["type","button",3,"click"],["params","",1,"doc-p"],[1,"tp-frame"],[3,"placement"],["tabNav","","direction","auto",3,"tabChange","tabs","activeKey","activeStyle"],["key","overview",1,"tp-panel",3,"tabs"],[1,"tp-stats"],[1,"tp-stat"],["key","members",1,"tp-panel",3,"tabs"],[1,"tp-rows"],[1,"tp-row"],["key","settings",1,"tp-panel",3,"tabs"],[1,"tp-form"],[1,"tp-field"],[1,"tp-stat-value"],[1,"tp-stat-label"],[1,"tp-avatar"],[1,"tp-row-main"],[1,"tp-row-title"],[1,"tp-row-sub"],[3,"content","variant"],[1,"tp-field-label"],[1,"tp-field-control"]],template:function(o,i){if(o&1&&(a(0,"fold-page-layout",1)(1,"p",2),e(2," The in-page "),a(3,"strong"),e(4,"ARIA Tabs widget"),t(),e(5,": a "),a(6,"code"),e(7,'role="tablist"'),t(),e(8," that switches layered panels "),a(9,"strong"),e(10,"without navigating"),t(),e(11,". Arrow keys move between tabs (roving tabindex — only the active tab is in the Tab order), "),a(12,"code"),e(13,"Home"),t(),e(14,"/"),a(15,"code"),e(16,"End"),t(),e(17," jump to the ends, and each tab is wired to its panel ("),a(18,"code"),e(19,"aria-controls"),t(),e(20," ↔ "),a(21,"code"),e(22,"aria-labelledby"),t(),e(23,"). "),t(),_(24,"gal-kind-badge",3)(25,"gal-composed-of",4),a(26,"fold-callout",5)(27,"strong"),e(28,"Switching panels in place?"),t(),e(29," This is your component. If the tabs instead "),a(30,"strong"),e(31,"navigate"),t(),e(32," between routes/views, use "),a(33,"a",6)(34,"code"),e(35,"fold-view-nav"),t()(),e(36," — same look, but "),a(37,"code"),e(38,"<nav>"),t(),e(39," + "),a(40,"code"),e(41,"aria-current"),t(),e(42,". Using the tabs pattern for navigation is an anti-pattern, so the two are separate on purpose. "),t(),a(43,"dev-playground",7)(44,"div",8)(45,"span",9),e(46,"activeStyle"),t(),a(47,"div",10)(48,"button",11),c("click",function(){return i.style.set("underline")}),e(49," underline "),t(),a(50,"button",11),c("click",function(){return i.style.set("fill")}),e(51," fill "),t()()(),a(52,"div",8)(53,"span",9),e(54,"direction"),t(),a(55,"div",10)(56,"button",11),c("click",function(){return i.dir.set("horizontal")}),e(57," horizontal "),t(),a(58,"button",11),c("click",function(){return i.dir.set("vertical")}),e(59," vertical "),t()()(),a(60,"p",12),e(61," Focus a tab, then use "),a(62,"kbd"),e(63,"←"),t(),a(64,"kbd"),e(65,"→"),t(),e(66," (or "),a(67,"kbd"),e(68,"↑"),t(),a(69,"kbd"),e(70,"↓"),t(),e(71,") · "),a(72,"kbd"),e(73,"Home"),t(),e(74," · "),a(75,"kbd"),e(76,"End"),t(),e(77),t(),a(78,"div",13)(79,"fold-nav-layout",14)(80,"fold-tabs",15,0),c("tabChange",function(y){return i.active.set(y)}),t(),a(82,"fold-tab-panel",16)(83,"div",17),m(84,K,5,2,"div",18,g),t()(),a(86,"fold-tab-panel",19)(87,"div",20),m(88,j,9,5,"div",21,R),t()(),a(90,"fold-tab-panel",22)(91,"div",23),m(92,D,5,2,"div",24,g),t()()()()()()),o&2){const s=C(81);n(25),d("ids",P(18,M)),n(18),d("code",i.code()),n(5),b("is-on",i.style()==="underline"),n(2),b("is-on",i.style()==="fill"),n(6),b("is-on",i.dir()==="horizontal"),n(2),b("is-on",i.dir()==="vertical"),n(19),F(". Active panel: “",i.active(),"”. "),n(2),d("placement",i.dir()==="vertical"?"side":"top"),n(),d("tabs",i.tabs)("activeKey",i.active())("activeStyle",i.style()),n(2),d("tabs",s),n(2),v(i.stats),n(2),d("tabs",s),n(2),v(i.members),n(2),d("tabs",s),n(2),v(i.fields)}},dependencies:[k,z,$,A,x,S,E,I,L,T],styles:[`@charset "UTF-8";
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
