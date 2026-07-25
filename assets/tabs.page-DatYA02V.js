import{t as d,u as $,T as I,Q as w,B as v,U as K,V as S,ɵ as O,F as B,a as z,d as i,G as g,i as m,f as a,x as f,N as M,j as r,o as u,W as j,X as D,E,J as k,e as t,z as _,m as c,K as T,k as b,g as x,H as L,I as R,v as U,w as V,Y as q,s as h,R as H,c as N,O as Q,l as Y}from"./index-CyCyHBaV.js";import{K as W}from"./kind-badge.component-ClK9rNuX.js";import{D as X}from"./playground.component-hvQ4QCmh.js";import{F as G}from"./callout.component-BZXh0laF.js";import{F as J}from"./nav-layout.component-Cw_D-AV6.js";import{F as Z}from"./nav-layout.context-CdQNGDA5.js";import"./button.component-3OggVqFw.js";import"./spinner.component-BYWpTkr0.js";import"./tokens.catalog-DF_6rd51.js";import"./element-title.component-BexDAqTP.js";import"./page-section.component-BUwGFJUr.js";const nn=["tabBtn"],tn=(s,o)=>o.key;function en(s,o){s&1&&x(0,"fold-icon",4),s&2&&c("name",o)}function an(s,o){if(s&1&&(i(0,"span",5),t(1),a()),s&2){const e=_().$implicit;r(),b(e.label.charAt(0))}}function on(s,o){if(s&1&&x(0,"fold-badge",7),s&2){const e=_().$implicit,n=_();c("content",e.badge+"")("variant",n.activeKey()===e.key?"accent":"neutral")}}function rn(s,o){if(s&1){const e=E();i(0,"button",3,0),g("click",function(){const l=L(e).$implicit,p=_();return R(p.select(l.key))}),k(2,en,1,1,"fold-icon",4)(3,an,2,1,"span",5),i(4,"span",6),t(5),a(),k(6,on,1,2,"fold-badge",7),a()}if(s&2){let e;const n=o.$implicit,l=_();f("is-active",l.activeKey()===n.key),c("id",l.tabId(n.key))("tabindex",l.activeKey()===n.key?0:-1),M("aria-selected",l.activeKey()===n.key)("aria-controls",l.panelId(n.key)),r(2),T((e=n.icon)?2:l.collapsed()?3:-1,e),r(3),b(n.label),r(),T(n.badge!==void 0&&n.badge!==null?6:-1)}}class y{tabs=d.required();activeKey=d.required();activeStyle=d("underline");direction=d("auto");size=d("compact");collapsed=d(!1,{transform:$});background=d("surface");tabChange=I();layout=w(Z,{optional:!0});resolvedDirection=v(()=>{const o=this.direction();return o!=="auto"?o:this.layout?.stacked()?"horizontal":"vertical"});uid=w(K).next("fold-tabs");tabButtons=S("tabBtn");tabId(o){return`${this.uid}-tab-${o}`}panelId(o){return`${this.uid}-panel-${o}`}select(o){this.tabChange.emit(o)}onKeydown(o){const e=this.tabs().map(A=>A.key);if(e.length===0)return;const n=e.indexOf(this.activeKey());let l;switch(o.key){case"ArrowRight":case"ArrowDown":l=(n+1)%e.length;break;case"ArrowLeft":case"ArrowUp":l=(n-1+e.length)%e.length;break;case"Home":l=0;break;case"End":l=e.length-1;break;default:return}o.preventDefault();const p=e[l];p!==void 0&&(this.tabChange.emit(p),this.tabButtons()[l]?.nativeElement.focus())}static ɵfac=function(e){return new(e||y)};static ɵcmp=O({type:y,selectors:[["fold-tabs"]],viewQuery:function(e,n){e&1&&j(n.tabButtons,nn,5),e&2&&D()},inputs:{tabs:[1,"tabs"],activeKey:[1,"activeKey"],activeStyle:[1,"activeStyle"],direction:[1,"direction"],size:[1,"size"],collapsed:[1,"collapsed"],background:[1,"background"]},outputs:{tabChange:"tabChange"},exportAs:["foldTabs"],decls:3,vars:13,consts:[["tabBtn",""],["role","tablist",1,"tab-bar",3,"keydown"],["type","button","role","tab",1,"tab-bar-item",3,"id","is-active","tabindex"],["type","button","role","tab",1,"tab-bar-item",3,"click","id","tabindex"],["size","sm",1,"tab-bar-icon",3,"name"],["aria-hidden","true",1,"tab-bar-icon","tab-bar-initial"],[1,"tab-bar-label"],[1,"tab-bar-badge",3,"content","variant"]],template:function(e,n){e&1&&(i(0,"div",1),g("keydown",function(p){return n.onKeydown(p)}),m(1,rn,7,9,"button",2,tn),a()),e&2&&(f("style-underline",n.activeStyle()==="underline")("style-fill",n.activeStyle()==="fill")("dir-vertical",n.resolvedDirection()==="vertical")("size-comfortable",n.size()==="comfortable")("is-collapsed",n.collapsed())("bg-surface",n.background()==="surface"),M("aria-orientation",n.resolvedDirection()==="vertical"?"vertical":"horizontal"),r(),u(n.tabs()))},dependencies:[B,z],styles:[`@charset "UTF-8";








[_nghost-%COMP%] {
  display: flex;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
}




.tab-bar[_ngcontent-%COMP%] {
  flex: 1;
  display: flex;
  max-width: 100%;
  gap: 2px;
  user-select: none;
}




.bg-surface[_ngcontent-%COMP%] {
  background: var(--fold-color-bg-rail-tertiary);
  padding: 4px 8px 0;
}

.bg-surface.dir-vertical[_ngcontent-%COMP%] {
  padding: 12px 8px;
}

.tab-bar-item[_ngcontent-%COMP%] {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 6px 8px;
  background: none;
  border: none;
  color: var(--fold-color-text-muted);
  font-family: inherit;
  font-size: 10px;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
  text-decoration: none; 
  transition: color 0.1s ease, background 0.1s ease, border-color 0.1s ease;
  white-space: nowrap;
}

.tab-bar-item[_ngcontent-%COMP%]:hover {
  color: var(--fold-color-text-secondary);
}


.tab-bar-item.is-disabled[_ngcontent-%COMP%] {
  opacity: 0.5;
  cursor: default;
  pointer-events: none;
}


.size-comfortable[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%] {
  flex: 0 1 auto;
  gap: 10px;
  padding: 11px 16px;
  font-size: var(--fold-text-sm);
}




.dir-vertical.size-comfortable[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%] {
  padding: 12px 14px;
  font-size: var(--fold-text-md);
}


.style-underline[_ngcontent-%COMP%] {
  border-bottom: 1px solid var(--fold-color-border);
}

.style-underline[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%] {
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
}

.style-underline[_ngcontent-%COMP%]   .tab-bar-item.is-active[_ngcontent-%COMP%] {
  color: var(--fold-color-text);
  border-bottom-color: var(--fold-color-primary);
}


.style-fill[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%] {
  border-radius: var(--fold-radius-sm);
  border: 1px solid transparent;
}

.style-fill[_ngcontent-%COMP%]   .tab-bar-item.is-active[_ngcontent-%COMP%] {
  background: var(--fold-color-primary-surface);
  color: var(--fold-color-primary-text);
  font-weight: 600;
}

.style-fill[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%]:hover:not(.is-active) {
  background: var(--fold-color-surface-hover);
  color: var(--fold-color-text);
}


.dir-vertical[_ngcontent-%COMP%] {
  flex-direction: column;
}

.dir-vertical[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%] {
  flex: none;
  justify-content: flex-start;
  text-align: left;
  padding: 9px 12px;
  gap: 10px;
  border-radius: var(--fold-radius-sm);
  font-size: var(--fold-text-sm);
  font-weight: 500;
}

.dir-vertical.style-underline[_ngcontent-%COMP%] {
  border-bottom: none;
  border-right: 1px solid var(--fold-color-border);
}

.dir-vertical.style-underline[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%] {
  border-bottom: none;
  border-left: 2px solid transparent;
  margin-bottom: 0;
  margin-right: -1px;
}

.dir-vertical.style-underline[_ngcontent-%COMP%]   .tab-bar-item.is-active[_ngcontent-%COMP%] {
  border-left-color: var(--fold-color-primary);
}

.dir-vertical.style-fill[_ngcontent-%COMP%]   .tab-bar-item.is-active[_ngcontent-%COMP%] {
  background: var(--fold-color-primary-surface);
  color: var(--fold-color-primary-text);
  font-weight: 600;
}







.is-collapsed[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%] {
  position: relative;
  flex: 0 0 auto;
  gap: 0;
}



.is-collapsed[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%]:not(.is-active)   .tab-bar-badge[_ngcontent-%COMP%] {
  display: none;
}

.is-collapsed[_ngcontent-%COMP%]   .tab-bar-item.is-active[_ngcontent-%COMP%] {
  flex: 1 1 auto;
  min-width: 0;
  gap: 7px;
}

.is-collapsed[_ngcontent-%COMP%]   .tab-bar-item.is-active[_ngcontent-%COMP%]   .tab-bar-label[_ngcontent-%COMP%] {
  overflow: hidden;
  text-overflow: ellipsis;
}



.dir-vertical.is-collapsed[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%]   .tab-bar-icon[_ngcontent-%COMP%]    ~ .tab-bar-label[_ngcontent-%COMP%], 
.is-collapsed[_ngcontent-%COMP%]:not(.dir-vertical)   .tab-bar-item[_ngcontent-%COMP%]:not(.is-active)   .tab-bar-icon[_ngcontent-%COMP%]    ~ .tab-bar-label[_ngcontent-%COMP%] {
  position: absolute;
  padding: 4px 8px;
  border-radius: var(--fold-radius-sm);
  background: var(--fold-color-glass);
  border: 1px solid var(--fold-color-glass-border);
  color: var(--fold-color-text);
  font-size: var(--fold-text-xs);
  font-weight: 500;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  box-shadow: var(--fold-shadow-md);
  transition: opacity var(--fold-motion-fast);
  z-index: 100;
}


.dir-vertical.is-collapsed[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%]   .tab-bar-icon[_ngcontent-%COMP%]    ~ .tab-bar-label[_ngcontent-%COMP%] {
  left: calc(100% + 8px);
  top: 50%;
  transform: translateY(-50%);
}


.is-collapsed[_ngcontent-%COMP%]:not(.dir-vertical)   .tab-bar-item[_ngcontent-%COMP%]:not(.is-active)   .tab-bar-icon[_ngcontent-%COMP%]    ~ .tab-bar-label[_ngcontent-%COMP%] {
  top: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
}


.dir-vertical.is-collapsed[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%]:hover   .tab-bar-icon[_ngcontent-%COMP%]    ~ .tab-bar-label[_ngcontent-%COMP%], 
.dir-vertical.is-collapsed[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%]:focus-visible   .tab-bar-icon[_ngcontent-%COMP%]    ~ .tab-bar-label[_ngcontent-%COMP%], 
.is-collapsed[_ngcontent-%COMP%]:not(.dir-vertical)   .tab-bar-item[_ngcontent-%COMP%]:not(.is-active):hover   .tab-bar-icon[_ngcontent-%COMP%]    ~ .tab-bar-label[_ngcontent-%COMP%], 
.is-collapsed[_ngcontent-%COMP%]:not(.dir-vertical)   .tab-bar-item[_ngcontent-%COMP%]:not(.is-active):focus-visible   .tab-bar-icon[_ngcontent-%COMP%]    ~ .tab-bar-label[_ngcontent-%COMP%] {
  opacity: 1;
}




.dir-vertical.is-collapsed[_ngcontent-%COMP%] {
  align-items: center;
}

.dir-vertical.is-collapsed[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%], 
.dir-vertical.is-collapsed[_ngcontent-%COMP%]   .tab-bar-item.is-active[_ngcontent-%COMP%] {
  justify-content: center;
  gap: 0;
}



.dir-vertical.is-collapsed[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%]   .tab-bar-badge[_ngcontent-%COMP%] {
  display: block;
  position: absolute;
  top: -2px;
  right: -2px;
  transform: scale(0.85);
  transform-origin: top right;
  pointer-events: none;
}



[_nghost-%COMP%]:has(.is-collapsed) {
  overflow: visible;
}


@media (max-width: 768px) {
  .dir-vertical[_ngcontent-%COMP%] {
    flex-direction: row;
    align-items: center;
  }
  .dir-vertical[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%] {
    flex: 0 0 auto;
    justify-content: center;
    text-align: center;
    padding: 8px;
    gap: 0;
    font-size: var(--fold-text-xs);
    font-weight: 600;
  }
  .dir-vertical[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%]   .tab-bar-label[_ngcontent-%COMP%] {
    display: none;
  }
  .dir-vertical[_ngcontent-%COMP%]   .tab-bar-item.is-active[_ngcontent-%COMP%] {
    flex: 1 1 auto;
    min-width: 0;
    gap: 6px;
    padding: 8px 12px;
  }
  .dir-vertical[_ngcontent-%COMP%]   .tab-bar-item.is-active[_ngcontent-%COMP%]   .tab-bar-label[_ngcontent-%COMP%] {
    display: inline;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .dir-vertical[_ngcontent-%COMP%]   .tab-bar-badge[_ngcontent-%COMP%] {
    display: none;
  }
  .dir-vertical.style-underline[_ngcontent-%COMP%] {
    border-right: none;
    border-bottom: 1px solid var(--fold-color-border);
  }
  .dir-vertical.style-underline[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%] {
    border-left: none;
    border-bottom: 2px solid transparent;
    margin-right: 0;
    margin-bottom: -1px;
  }
  .dir-vertical.style-underline[_ngcontent-%COMP%]   .tab-bar-item.is-active[_ngcontent-%COMP%] {
    border-bottom-color: var(--fold-color-primary);
  }
  .dir-vertical.style-fill[_ngcontent-%COMP%] {
    border-right: none;
  }
}
.tab-bar-icon[_ngcontent-%COMP%] {
  flex-shrink: 0;
}




.tab-bar-initial[_ngcontent-%COMP%] {
  display: grid;
  place-items: center;
  width: 18px;
  height: 18px;
  border-radius: var(--fold-radius-sm);
  font-size: 11px;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
}



.tab-bar-badge[_ngcontent-%COMP%] {
  flex-shrink: 0;
  font-variant-numeric: tabular-nums;
}



.tab-bar-item[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--fold-color-primary);
  outline-offset: -2px;
  border-radius: var(--fold-radius-sm);
}`]})}const ln=["*"];class C{tabs=d.required();key=d.required();isActive=v(()=>this.tabs().activeKey()===this.key());panelId=v(()=>this.tabs().panelId(this.key()));labelledBy=v(()=>this.tabs().tabId(this.key()));static ɵfac=function(e){return new(e||C)};static ɵcmp=O({type:C,selectors:[["fold-tab-panel"]],hostAttrs:["role","tabpanel"],hostVars:4,hostBindings:function(e,n){e&2&&(q("id",n.panelId())("hidden",!n.isActive()),M("aria-labelledby",n.labelledBy())("tabindex",n.isActive()?0:null))},inputs:{tabs:[1,"tabs"],key:[1,"key"]},ngContentSelectors:ln,decls:1,vars:0,template:function(e,n){e&1&&(U(),V(0))},encapsulation:2})}const F=(s,o)=>o.label,sn=(s,o)=>o.name;function cn(s,o){if(s&1&&(i(0,"div",17)(1,"span",24),t(2),a(),i(3,"span",25),t(4),a()()),s&2){const e=o.$implicit;r(2),b(e.value),r(2),b(e.label)}}function dn(s,o){if(s&1&&(i(0,"div",20)(1,"span",26),t(2),a(),i(3,"span",27)(4,"span",28),t(5),a(),i(6,"span",29),t(7),a()(),x(8,"fold-badge",30),a()),s&2){const e=o.$implicit;r(2),b(e.initials),r(3),b(e.name),r(2),b(e.role),r(),c("content",e.status)("variant",e.tone)}}function bn(s,o){if(s&1&&(i(0,"div",23)(1,"span",31),t(2),a(),i(3,"span",32),t(4),a()()),s&2){const e=o.$implicit;r(2),b(e.label),r(2),b(e.value)}}class P{style=h("underline");dir=h("horizontal");active=h("overview");tabs=[{key:"overview",label:"Overview",icon:"grid"},{key:"members",label:"Members",icon:"team",badge:3},{key:"settings",label:"Settings",icon:"settings"}];code=v(()=>{const o=['#t="foldTabs"','[tabs]="tabs"','[activeKey]="active()"'];return this.style()!=="underline"&&o.push(`activeStyle="${this.style()}"`),this.dir()!=="horizontal"&&o.push(`direction="${this.dir()}"`),o.push('(tabChange)="active.set($event)"'),["<!-- one tablist + one panel per key; the #t ref pairs them -->","<fold-tabs",...o.map(e=>`  ${e}`),"/>",'<fold-tab-panel [tabs]="t" key="overview">…</fold-tab-panel>','<fold-tab-panel [tabs]="t" key="members">…</fold-tab-panel>','<fold-tab-panel [tabs]="t" key="settings">…</fold-tab-panel>',"","// component","tabs = [{ key: 'overview', label: 'Overview', icon: 'grid' }, …];","active = signal('overview');"].join(`
`)});stats=[{label:"Contracts",value:"128"},{label:"Active",value:"96"},{label:"Expiring",value:"7"}];members=[{initials:"MM",name:"Marc Machine",role:"Producer",status:"Active",tone:"success"},{initials:"IL",name:"Inès Lambert",role:"A&R",status:"Expiring",tone:"warning"}];fields=[{label:"Workspace name",value:"Acme Records"},{label:"Default currency",value:"EUR"},{label:"Contract reminders",value:"14 days before"}];static ɵfac=function(e){return new(e||P)};static ɵcmp=O({type:P,selectors:[["gal-tabs-page"]],decls:93,vars:17,consts:[["t","foldTabs"],["title","tabs"],["description",""],["titleBadge","","kind","component"],["variant","accent","icon","grid"],["routerLink","/tab-nav"],["stage","",3,"code"],["params","",1,"np-field"],[1,"gal-tag"],[1,"ss-seg"],["type","button",3,"click"],["params","",1,"doc-p"],[1,"tp-frame"],[3,"placement"],["tabNav","","direction","auto",3,"tabChange","tabs","activeKey","activeStyle"],["key","overview",1,"tp-panel",3,"tabs"],[1,"tp-stats"],[1,"tp-stat"],["key","members",1,"tp-panel",3,"tabs"],[1,"tp-rows"],[1,"tp-row"],["key","settings",1,"tp-panel",3,"tabs"],[1,"tp-form"],[1,"tp-field"],[1,"tp-stat-value"],[1,"tp-stat-label"],[1,"tp-avatar"],[1,"tp-row-main"],[1,"tp-row-title"],[1,"tp-row-sub"],[3,"content","variant"],[1,"tp-field-label"],[1,"tp-field-control"]],template:function(e,n){if(e&1&&(i(0,"fold-page-layout",1)(1,"p",2),t(2," The in-page "),i(3,"strong"),t(4,"ARIA Tabs widget"),a(),t(5,": a "),i(6,"code"),t(7,'role="tablist"'),a(),t(8," that switches layered panels "),i(9,"strong"),t(10,"without navigating"),a(),t(11,". Arrow keys move between tabs (roving tabindex — only the active tab is in the Tab order), "),i(12,"code"),t(13,"Home"),a(),t(14,"/"),i(15,"code"),t(16,"End"),a(),t(17," jump to the ends, and each tab is wired to its panel ("),i(18,"code"),t(19,"aria-controls"),a(),t(20," ↔ "),i(21,"code"),t(22,"aria-labelledby"),a(),t(23,"). "),a(),x(24,"gal-kind-badge",3),i(25,"fold-callout",4)(26,"strong"),t(27,"Switching panels in place?"),a(),t(28," This is your component. If the tabs instead "),i(29,"strong"),t(30,"navigate"),a(),t(31," between routes/views, use "),i(32,"a",5)(33,"code"),t(34,"fold-view-nav"),a()(),t(35," — same look, but "),i(36,"code"),t(37,"<nav>"),a(),t(38," + "),i(39,"code"),t(40,"aria-current"),a(),t(41,". Using the tabs pattern for navigation is an anti-pattern, so the two are separate on purpose. "),a(),i(42,"dev-playground",6)(43,"div",7)(44,"span",8),t(45,"activeStyle"),a(),i(46,"div",9)(47,"button",10),g("click",function(){return n.style.set("underline")}),t(48," underline "),a(),i(49,"button",10),g("click",function(){return n.style.set("fill")}),t(50," fill "),a()()(),i(51,"div",7)(52,"span",8),t(53,"direction"),a(),i(54,"div",9)(55,"button",10),g("click",function(){return n.dir.set("horizontal")}),t(56," horizontal "),a(),i(57,"button",10),g("click",function(){return n.dir.set("vertical")}),t(58," vertical "),a()()(),i(59,"p",11),t(60," Focus a tab, then use "),i(61,"kbd"),t(62,"←"),a(),i(63,"kbd"),t(64,"→"),a(),t(65," (or "),i(66,"kbd"),t(67,"↑"),a(),i(68,"kbd"),t(69,"↓"),a(),t(70,") · "),i(71,"kbd"),t(72,"Home"),a(),t(73," · "),i(74,"kbd"),t(75,"End"),a(),t(76),a(),i(77,"div",12)(78,"fold-nav-layout",13)(79,"fold-tabs",14,0),g("tabChange",function(p){return n.active.set(p)}),a(),i(81,"fold-tab-panel",15)(82,"div",16),m(83,cn,5,2,"div",17,F),a()(),i(85,"fold-tab-panel",18)(86,"div",19),m(87,dn,9,5,"div",20,sn),a()(),i(89,"fold-tab-panel",21)(90,"div",22),m(91,bn,5,2,"div",23,F),a()()()()()()),e&2){const l=Q(80);r(42),c("code",n.code()),r(5),f("is-on",n.style()==="underline"),r(2),f("is-on",n.style()==="fill"),r(6),f("is-on",n.dir()==="horizontal"),r(2),f("is-on",n.dir()==="vertical"),r(19),Y(". Active panel: “",n.active(),"”. "),r(2),c("placement",n.dir()==="vertical"?"side":"top"),r(),c("tabs",n.tabs)("activeKey",n.active())("activeStyle",n.style()),r(2),c("tabs",l),r(2),u(n.stats),r(2),c("tabs",l),r(2),u(n.members),r(2),c("tabs",l),r(2),u(n.fields)}},dependencies:[H,W,X,N,G,J,y,C,z],styles:[`@charset "UTF-8";
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
}`],encapsulation:2})}export{P as default};
