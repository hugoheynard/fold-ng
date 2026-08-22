import{s as v,A as h,ɵ as k,R as x,c as T,a as C,E as P,d as a,e,f as t,g as w,B as b,h as F,i as u,a3 as z,j as n,m as s,U as A,L as f,l as S,n as E,o as g,k as d,N as K,r as L,O as I}from"./index-Bbfm_eFW.js";import{K as M}from"./kind-badge.component-DTTktcVM.js";import{C as R}from"./composed-of.component-CBu4FrJD.js";import{D as $}from"./playground.component-iTv1HhL9.js";import{FoldCalloutComponent as B}from"./callout.component-Dm0j-ZTF.js";import{FoldNavLayoutComponent as O}from"./nav-layout.component-DcCEsweZ.js";import{FoldTabsComponent as j}from"./tabs.component-CFqHq_lg.js";import{FoldTabPanelComponent as N}from"./tab-panel.component-DAoaNqmX.js";import"./button.component-DaG9k-M2.js";import"./element-title.component-7tmc3v-Q.js";import"./page-section.component-DIFqsNMO.js";import"./slider.component-BJZ1t2Q9.js";import"./input-value-DCGlOvqF.js";import"./nav-layout.context-ImVsQkWv.js";const U=()=>["badges","icons"],y=(l,r)=>r.label,V=(l,r)=>r.name;function W(l,r){if(l&1&&(a(0,"div",18)(1,"span",25),e(2),t(),a(3,"span",26),e(4),t()()),l&2){const i=r.$implicit;n(2),d(i.value),n(2),d(i.label)}}function D(l,r){if(l&1&&(a(0,"div",21)(1,"span",27),e(2),t(),a(3,"span",28)(4,"span",29),e(5),t(),a(6,"span",30),e(7),t()(),w(8,"fold-badge",31),t()),l&2){const i=r.$implicit;n(2),d(i.initials),n(3),d(i.name),n(2),d(i.role),n(),s("content",i.status)("variant",i.tone)}}function H(l,r){if(l&1&&(a(0,"div",24)(1,"span",32),e(2),t(),a(3,"span",33),e(4),t()()),l&2){const i=r.$implicit;n(2),d(i.label),n(2),d(i.value)}}class _{style=v("underline");dir=v("horizontal");active=v("overview");tabs=[{key:"overview",label:"Overview",icon:"grid"},{key:"members",label:"Members",icon:"team",badge:3},{key:"settings",label:"Settings",icon:"settings"}];code=h(()=>{const r=['#t="foldTabs"','[tabs]="tabs"','[(activeKey)]="active"'];return this.style()!=="underline"&&r.push(`activeStyle="${this.style()}"`),this.dir()!=="horizontal"&&r.push(`direction="${this.dir()}"`),["<!-- one tablist + one panel per key; the #t ref pairs them -->","<fold-tabs",...r.map(i=>`  ${i}`),"/>",'<fold-tab-panel [tabs]="t" key="overview">…</fold-tab-panel>','<fold-tab-panel [tabs]="t" key="members">…</fold-tab-panel>','<fold-tab-panel [tabs]="t" key="settings">…</fold-tab-panel>',"","// component","tabs = [{ key: 'overview', label: 'Overview', icon: 'grid' }, …];","active = signal('overview');"].join(`
`)});stats=[{label:"Contracts",value:"128"},{label:"Active",value:"96"},{label:"Expiring",value:"7"}];members=[{initials:"MM",name:"Marc Machine",role:"Producer",status:"Active",tone:"success"},{initials:"IL",name:"Inès Lambert",role:"A&R",status:"Expiring",tone:"warning"}];fields=[{label:"Workspace name",value:"Acme Records"},{label:"Default currency",value:"EUR"},{label:"Contract reminders",value:"14 days before"}];static ɵfac=function(i){return new(i||_)};static ɵcmp=k({type:_,selectors:[["gal-tabs-page"]],decls:94,vars:19,consts:[["t","foldTabs"],["title","tabs"],["description",""],["titleBadge","","kind","component"],[3,"ids"],["variant","accent","icon","grid"],["routerLink","/tab-nav"],["stage","",3,"code"],["params","",1,"np-field"],[1,"gal-tag"],[1,"ss-seg"],["type","button",3,"click"],["params","",1,"doc-p"],[1,"tp-frame"],[3,"placement"],["tabNav","","direction","auto",3,"activeKeyChange","tabs","activeKey","activeStyle"],["key","overview",1,"tp-panel",3,"tabs"],[1,"tp-stats"],[1,"tp-stat"],["key","members",1,"tp-panel",3,"tabs"],[1,"tp-rows"],[1,"tp-row"],["key","settings",1,"tp-panel",3,"tabs"],[1,"tp-form"],[1,"tp-field"],[1,"tp-stat-value"],[1,"tp-stat-label"],[1,"tp-avatar"],[1,"tp-row-main"],[1,"tp-row-title"],[1,"tp-row-sub"],[3,"content","variant"],[1,"tp-field-label"],[1,"tp-field-control"]],template:function(i,o){if(i&1){const p=P();a(0,"fold-page-layout",1)(1,"p",2),e(2," The in-page "),a(3,"strong"),e(4,"ARIA Tabs widget"),t(),e(5,": a "),a(6,"code"),e(7,'role="tablist"'),t(),e(8," that switches layered panels "),a(9,"strong"),e(10,"without navigating"),t(),e(11,". Arrow keys move between tabs (roving tabindex — only the active tab is in the Tab order), "),a(12,"code"),e(13,"Home"),t(),e(14,"/"),a(15,"code"),e(16,"End"),t(),e(17," jump to the ends, and each tab is wired to its panel ("),a(18,"code"),e(19,"aria-controls"),t(),e(20," ↔ "),a(21,"code"),e(22,"aria-labelledby"),t(),e(23,"). "),t(),w(24,"gal-kind-badge",3)(25,"gal-composed-of",4),a(26,"fold-callout",5)(27,"strong"),e(28,"Switching panels in place?"),t(),e(29," This is your component. If the tabs instead "),a(30,"strong"),e(31,"navigate"),t(),e(32," between routes/views, use "),a(33,"a",6)(34,"code"),e(35,"fold-view-nav"),t()(),e(36," — same look, but "),a(37,"code"),e(38,"<nav>"),t(),e(39," + "),a(40,"code"),e(41,"aria-current"),t(),e(42,". Using the tabs pattern for navigation is an anti-pattern, so the two are separate on purpose. "),t(),a(43,"dev-playground",7)(44,"div",8)(45,"span",9),e(46,"activeStyle"),t(),a(47,"div",10)(48,"button",11),b("click",function(){return o.style.set("underline")}),e(49," underline "),t(),a(50,"button",11),b("click",function(){return o.style.set("fill")}),e(51," fill "),t()()(),a(52,"div",8)(53,"span",9),e(54,"direction"),t(),a(55,"div",10)(56,"button",11),b("click",function(){return o.dir.set("horizontal")}),e(57," horizontal "),t(),a(58,"button",11),b("click",function(){return o.dir.set("vertical")}),e(59," vertical "),t()()(),a(60,"p",12),e(61," Focus a tab, then use "),a(62,"kbd"),e(63,"←"),t(),a(64,"kbd"),e(65,"→"),t(),e(66," (or "),a(67,"kbd"),e(68,"↑"),t(),a(69,"kbd"),e(70,"↓"),t(),e(71,") · "),a(72,"kbd"),e(73,"Home"),t(),e(74," · "),a(75,"kbd"),e(76,"End"),t(),e(77),t(),a(78,"div",13)(79,"fold-nav-layout",14)(80,"fold-tabs",15,0),F("activeKeyChange",function(m){return K(p),L(o.active,m)||(o.active=m),I(m)}),t(),a(82,"fold-tab-panel",16)(83,"div",17),u(84,W,5,2,"div",18,y),t()(),a(86,"fold-tab-panel",19)(87,"div",20),u(88,D,9,5,"div",21,V),t()(),a(90,"fold-tab-panel",22)(91,"div",23),u(92,H,5,2,"div",24,y),t()()()()()()}if(i&2){const p=z(81);n(25),s("ids",A(18,U)),n(18),s("code",o.code()),n(5),f("is-on",o.style()==="underline"),n(2),f("is-on",o.style()==="fill"),n(6),f("is-on",o.dir()==="horizontal"),n(2),f("is-on",o.dir()==="vertical"),n(19),S(". Active panel: “",o.active(),"”. "),n(2),s("placement",o.dir()==="vertical"?"side":"top"),n(),s("tabs",o.tabs),E("activeKey",o.active),s("activeStyle",o.style()),n(2),s("tabs",p),n(2),g(o.stats),n(2),s("tabs",p),n(2),g(o.members),n(2),s("tabs",p),n(2),g(o.fields)}},dependencies:[x,M,R,$,T,B,O,j,N,C],styles:[`@charset "UTF-8";
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
}`],encapsulation:2})}export{_ as default};
