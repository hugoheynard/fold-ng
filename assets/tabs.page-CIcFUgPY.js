import{t as b,W as A,U as I,X as S,Y as K,ɵ as w,F as B,a as F,d as o,G as f,i as u,f as a,x as g,S as P,j as r,o as v,N as j,O as E,E as L,L as M,e,z as _,m as d,M as O,k as p,g as h,H as R,I as D,B as m,v as U,w as q,Z as H,s as C,R as N,c as V,T,l as Q}from"./index-UFHUHfKt.js";import{K as W}from"./kind-badge.component-DSrCDKTb.js";import{D as G}from"./playground.component-OISD_jzR.js";import{F as X}from"./callout.component--OtgLUBQ.js";import{F as Y}from"./nav-layout.component-EEdjka12.js";import"./button.component-B7Uyt5AS.js";import"./spinner.component-BsFUE79e.js";import"./tokens.catalog-DF_6rd51.js";import"./element-title.component-D7JmpivU.js";import"./page-section.component-DHJ6ia22.js";const Z=["tabBtn"],J=(s,i)=>i.key;function nn(s,i){s&1&&h(0,"fold-icon",4),s&2&&d("name",i)}function en(s,i){if(s&1&&h(0,"fold-badge",6),s&2){const t=_().$implicit,n=_();d("content",t.badge+"")("variant",n.activeKey()===t.key?"accent":"neutral")}}function tn(s,i){if(s&1){const t=L();o(0,"button",3,0),f("click",function(){const l=R(t).$implicit,c=_();return D(c.select(l.key))}),M(2,nn,1,1,"fold-icon",4),o(3,"span",5),e(4),a(),M(5,en,1,2,"fold-badge",6),a()}if(s&2){let t;const n=i.$implicit,l=_();g("is-active",l.activeKey()===n.key),d("id",l.tabId(n.key))("tabindex",l.activeKey()===n.key?0:-1),P("aria-selected",l.activeKey()===n.key)("aria-controls",l.panelId(n.key)),r(2),O((t=n.icon)?2:-1,t),r(2),p(n.label),r(),O(n.badge!==void 0&&n.badge!==null?5:-1)}}class y{tabs=b.required();activeKey=b.required();activeStyle=b("underline");direction=b("horizontal");size=b("compact");background=b("surface");tabChange=A();uid=I(S).next("fold-tabs");tabButtons=K("tabBtn");tabId(i){return`${this.uid}-tab-${i}`}panelId(i){return`${this.uid}-panel-${i}`}select(i){this.tabChange.emit(i)}onKeydown(i){const t=this.tabs().map($=>$.key);if(t.length===0)return;const n=t.indexOf(this.activeKey());let l;switch(i.key){case"ArrowRight":case"ArrowDown":l=(n+1)%t.length;break;case"ArrowLeft":case"ArrowUp":l=(n-1+t.length)%t.length;break;case"Home":l=0;break;case"End":l=t.length-1;break;default:return}i.preventDefault();const c=t[l];c!==void 0&&(this.tabChange.emit(c),this.tabButtons()[l]?.nativeElement.focus())}static ɵfac=function(t){return new(t||y)};static ɵcmp=w({type:y,selectors:[["fold-tabs"]],viewQuery:function(t,n){t&1&&j(n.tabButtons,Z,5),t&2&&E()},inputs:{tabs:[1,"tabs"],activeKey:[1,"activeKey"],activeStyle:[1,"activeStyle"],direction:[1,"direction"],size:[1,"size"],background:[1,"background"]},outputs:{tabChange:"tabChange"},exportAs:["foldTabs"],decls:3,vars:13,consts:[["tabBtn",""],["role","tablist",1,"tab-bar",3,"keydown"],["type","button","role","tab",1,"tab-bar-item",3,"id","is-active","tabindex"],["type","button","role","tab",1,"tab-bar-item",3,"click","id","tabindex"],["size","sm",1,"tab-bar-icon",3,"name"],[1,"tab-bar-label"],[1,"tab-bar-badge",3,"content","variant"]],template:function(t,n){t&1&&(o(0,"div",1),f("keydown",function(c){return n.onKeydown(c)}),u(1,tn,6,9,"button",2,J),a()),t&2&&(g("style-underline",n.activeStyle()==="underline")("style-fill",n.activeStyle()==="fill")("dir-vertical",n.direction()==="vertical")("size-comfortable",n.size()==="comfortable")("size-reduce",n.size()==="reduce")("bg-surface",n.background()==="surface"),P("aria-orientation",n.direction()==="vertical"?"vertical":"horizontal"),r(),v(n.tabs()))},dependencies:[B,F],styles:[`@charset "UTF-8";








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
  font-size: 10px;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
  transition: color 0.1s ease, background 0.1s ease, border-color 0.1s ease;
  white-space: nowrap;
}

.tab-bar-item[_ngcontent-%COMP%]:hover {
  color: var(--fold-color-text-secondary);
}


.size-comfortable[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%] {
  flex: 0 1 auto;
  gap: 10px;
  padding: 11px 16px;
  font-size: var(--fold-text-sm);
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




.size-reduce[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%] {
  flex: 0 0 auto;
  gap: 0;
}




.size-reduce[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%]:not(.is-active)   .tab-bar-icon[_ngcontent-%COMP%]    ~ .tab-bar-label[_ngcontent-%COMP%], 
.size-reduce[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%]:not(.is-active)   .tab-bar-badge[_ngcontent-%COMP%] {
  display: none;
}

.size-reduce[_ngcontent-%COMP%]   .tab-bar-item.is-active[_ngcontent-%COMP%] {
  flex: 1 1 auto;
  min-width: 0;
  gap: 7px;
}

.size-reduce[_ngcontent-%COMP%]   .tab-bar-item.is-active[_ngcontent-%COMP%]   .tab-bar-label[_ngcontent-%COMP%] {
  overflow: hidden;
  text-overflow: ellipsis;
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



.tab-bar-badge[_ngcontent-%COMP%] {
  flex-shrink: 0;
  font-variant-numeric: tabular-nums;
}



.tab-bar-item[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--fold-color-primary);
  outline-offset: -2px;
  border-radius: var(--fold-radius-sm);
}`]})}const an=["*"];class x{tabs=b.required();key=b.required();isActive=m(()=>this.tabs().activeKey()===this.key());panelId=m(()=>this.tabs().panelId(this.key()));labelledBy=m(()=>this.tabs().tabId(this.key()));static ɵfac=function(t){return new(t||x)};static ɵcmp=w({type:x,selectors:[["fold-tab-panel"]],hostAttrs:["role","tabpanel"],hostVars:4,hostBindings:function(t,n){t&2&&(H("id",n.panelId())("hidden",!n.isActive()),P("aria-labelledby",n.labelledBy())("tabindex",n.isActive()?0:null))},inputs:{tabs:[1,"tabs"],key:[1,"key"]},ngContentSelectors:an,decls:1,vars:0,template:function(t,n){t&1&&(U(),q(0))},encapsulation:2})}const z=(s,i)=>i.label,on=(s,i)=>i.name;function rn(s,i){if(s&1&&(o(0,"div",18)(1,"span",25),e(2),a(),o(3,"span",26),e(4),a()()),s&2){const t=i.$implicit;r(2),p(t.value),r(2),p(t.label)}}function ln(s,i){if(s&1&&(o(0,"div",21)(1,"span",27),e(2),a(),o(3,"span",28)(4,"span",29),e(5),a(),o(6,"span",30),e(7),a()(),h(8,"fold-badge",31),a()),s&2){const t=i.$implicit;r(2),p(t.initials),r(3),p(t.name),r(2),p(t.role),r(),d("content",t.status)("variant",t.tone)}}function sn(s,i){if(s&1&&(o(0,"div",24)(1,"span",32),e(2),a(),o(3,"span",33),e(4),a()()),s&2){const t=i.$implicit;r(2),p(t.label),r(2),p(t.value)}}class k{style=C("underline");dir=C("horizontal");active=C("overview");tabs=[{key:"overview",label:"Overview",icon:"grid"},{key:"members",label:"Members",icon:"team",badge:3},{key:"settings",label:"Settings",icon:"settings"}];code=m(()=>{const i=['#t="foldTabs"','[tabs]="tabs"','[activeKey]="active()"'];return this.style()!=="underline"&&i.push(`activeStyle="${this.style()}"`),this.dir()!=="horizontal"&&i.push(`direction="${this.dir()}"`),i.push('(tabChange)="active.set($event)"'),["<!-- one tablist + one panel per key; the #t ref pairs them -->","<fold-tabs",...i.map(t=>`  ${t}`),"/>",'<fold-tab-panel [tabs]="t" key="overview">…</fold-tab-panel>','<fold-tab-panel [tabs]="t" key="members">…</fold-tab-panel>','<fold-tab-panel [tabs]="t" key="settings">…</fold-tab-panel>',"","// component","tabs = [{ key: 'overview', label: 'Overview', icon: 'grid' }, …];","active = signal('overview');"].join(`
`)});stats=[{label:"Contracts",value:"128"},{label:"Active",value:"96"},{label:"Expiring",value:"7"}];members=[{initials:"MM",name:"Marc Machine",role:"Producer",status:"Active",tone:"success"},{initials:"IL",name:"Inès Lambert",role:"A&R",status:"Expiring",tone:"warning"}];fields=[{label:"Workspace name",value:"Acme Records"},{label:"Default currency",value:"EUR"},{label:"Contract reminders",value:"14 days before"}];static ɵfac=function(t){return new(t||k)};static ɵcmp=w({type:k,selectors:[["gal-tabs-page"]],decls:94,vars:18,consts:[["tl","foldNavLayout"],["t","foldTabs"],["title","tabs"],["description",""],["titleBadge","","kind","component"],["variant","accent","icon","grid"],["routerLink","/tab-nav"],["stage","",3,"code"],["params","",1,"np-field"],[1,"gal-tag"],[1,"ss-seg"],["type","button",3,"click"],["params","",1,"doc-p"],[1,"tp-frame"],[3,"placement"],["tabNav","",3,"tabChange","tabs","activeKey","activeStyle","direction"],["key","overview",1,"tp-panel",3,"tabs"],[1,"tp-stats"],[1,"tp-stat"],["key","members",1,"tp-panel",3,"tabs"],[1,"tp-rows"],[1,"tp-row"],["key","settings",1,"tp-panel",3,"tabs"],[1,"tp-form"],[1,"tp-field"],[1,"tp-stat-value"],[1,"tp-stat-label"],[1,"tp-avatar"],[1,"tp-row-main"],[1,"tp-row-title"],[1,"tp-row-sub"],[3,"content","variant"],[1,"tp-field-label"],[1,"tp-field-control"]],template:function(t,n){if(t&1&&(o(0,"fold-page-layout",2)(1,"p",3),e(2," The in-page "),o(3,"strong"),e(4,"ARIA Tabs widget"),a(),e(5,": a "),o(6,"code"),e(7,'role="tablist"'),a(),e(8," that switches layered panels "),o(9,"strong"),e(10,"without navigating"),a(),e(11,". Arrow keys move between tabs (roving tabindex — only the active tab is in the Tab order), "),o(12,"code"),e(13,"Home"),a(),e(14,"/"),o(15,"code"),e(16,"End"),a(),e(17," jump to the ends, and each tab is wired to its panel ("),o(18,"code"),e(19,"aria-controls"),a(),e(20," ↔ "),o(21,"code"),e(22,"aria-labelledby"),a(),e(23,"). "),a(),h(24,"gal-kind-badge",4),o(25,"fold-callout",5)(26,"strong"),e(27,"Switching panels in place?"),a(),e(28," This is your component. If the tabs instead "),o(29,"strong"),e(30,"navigate"),a(),e(31," between routes/views, use "),o(32,"a",6)(33,"code"),e(34,"fold-view-nav"),a()(),e(35," — same look, but "),o(36,"code"),e(37,"<nav>"),a(),e(38," + "),o(39,"code"),e(40,"aria-current"),a(),e(41,". Using the tabs pattern for navigation is an anti-pattern, so the two are separate on purpose. "),a(),o(42,"dev-playground",7)(43,"div",8)(44,"span",9),e(45,"activeStyle"),a(),o(46,"div",10)(47,"button",11),f("click",function(){return n.style.set("underline")}),e(48," underline "),a(),o(49,"button",11),f("click",function(){return n.style.set("fill")}),e(50," fill "),a()()(),o(51,"div",8)(52,"span",9),e(53,"direction"),a(),o(54,"div",10)(55,"button",11),f("click",function(){return n.dir.set("horizontal")}),e(56," horizontal "),a(),o(57,"button",11),f("click",function(){return n.dir.set("vertical")}),e(58," vertical "),a()()(),o(59,"p",12),e(60," Focus a tab, then use "),o(61,"kbd"),e(62,"←"),a(),o(63,"kbd"),e(64,"→"),a(),e(65," (or "),o(66,"kbd"),e(67,"↑"),a(),o(68,"kbd"),e(69,"↓"),a(),e(70,") · "),o(71,"kbd"),e(72,"Home"),a(),e(73," · "),o(74,"kbd"),e(75,"End"),a(),e(76),a(),o(77,"div",13)(78,"fold-nav-layout",14,0)(80,"fold-tabs",15,1),f("tabChange",function(c){return n.active.set(c)}),a(),o(82,"fold-tab-panel",16)(83,"div",17),u(84,rn,5,2,"div",18,z),a()(),o(86,"fold-tab-panel",19)(87,"div",20),u(88,ln,9,5,"div",21,on),a()(),o(90,"fold-tab-panel",22)(91,"div",23),u(92,sn,5,2,"div",24,z),a()()()()()()),t&2){const l=T(79),c=T(81);r(42),d("code",n.code()),r(5),g("is-on",n.style()==="underline"),r(2),g("is-on",n.style()==="fill"),r(6),g("is-on",n.dir()==="horizontal"),r(2),g("is-on",n.dir()==="vertical"),r(19),Q(". Active panel: “",n.active(),"”. "),r(2),d("placement",n.dir()==="vertical"?"side":"top"),r(2),d("tabs",n.tabs)("activeKey",n.active())("activeStyle",n.style())("direction",l.stacked()?"horizontal":"vertical"),r(2),d("tabs",c),r(2),v(n.stats),r(2),d("tabs",c),r(2),v(n.members),r(2),d("tabs",c),r(2),v(n.fields)}},dependencies:[N,W,G,V,X,Y,y,x,F],styles:[`@charset "UTF-8";
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
}`],encapsulation:2})}export{k as default};
