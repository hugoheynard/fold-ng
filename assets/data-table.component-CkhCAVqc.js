import{u as s,X as A,aO as B,V as I,aj as H,a0 as w,aE as Q,af as V,ao as z,s as U,aF as W,A as _,aA as E,aP as X,ap as G,ɵ as J,aQ as Y,aq as Z,F as nn,ah as tn,a1 as on,d,a2 as en,f as i,w as p,L as m,j as c,D as C,x as u,as as ln,a9 as rn,i as M,q as a,o as P,g as N,m as g,e as x,k as $,l as an,E as D,B as S,W as cn,N as b,O as h,at as O,aI as v}from"./index-HUDWVz6A.js";import{f as dn}from"./fold-at-Ct-g5NDH.js";import{FoldCheckboxComponent as sn}from"./checkbox.component-DamF6IMP.js";class T{foldCell=s.required();template=A(B);static ɵfac=function(n){return new(n||T)};static ɵdir=I({type:T,selectors:[["ng-template","foldCell",""]],inputs:{foldCell:[1,"foldCell"]}})}class F{template=A(B);static ɵfac=function(n){return new(n||F)};static ɵdir=I({type:F,selectors:[["ng-template","foldRowCard",""]]})}function K(e,t){if(!(e instanceof Element))return;const n=e[t];n instanceof HTMLElement&&n.focus()}function j(e,t){if(!(e instanceof Element))return;const n=e.parentElement?.[t];n instanceof HTMLElement&&n.focus()}const fn={selectAll:"Select all rows",selectRow:"Select row",sortBy:e=>`Sort by ${e}`,loading:"Loading…"},_n=new H("FOLD_DATA_TABLE_LABELS",{factory:()=>fn}),gn=[[["","foldToolbar",""]]],pn=["[foldToolbar]"],y=(e,t)=>({$implicit:e,index:t}),R=(e,t)=>t.key;function q(e,t){return this.keyOf(t,e)}function un(e,t){e&1&&(d(0,"caption",7),x(1),i()),e&2&&(c(),an(" ",t," "))}function mn(e,t){if(e&1){const n=D();d(0,"th",8)(1,"fold-checkbox",11),S("checkedChange",function(){b(n);const l=a(2);return h(l.toggleAll())}),i()()}if(e&2){const n=a(2);c(),g("ariaLabel",n.l().selectAll)("checked",n.allSelected())("indeterminate",n.someSelected())}}function Cn(e,t){if(e&1){const n=D();d(0,"button",15),S("click",function(){b(n);const l=a().$implicit,r=a(2);return h(r.sortChange.emit(l.key))}),d(1,"span"),x(2),i(),N(3,"fold-icon",16),i()}if(e&2){const n=a().$implicit,o=a(2);m("right",n.align==="right")("center",n.align==="center"),C("aria-label",o.l().sortBy(n.label)),c(2),$(n.label),c(),m("on",o.isSorted(n.key)),g("name",o.sortIcon(n.key))("size",14)}}function bn(e,t){if(e&1&&(d(0,"span",17),x(1),i()),e&2){const n=a().$implicit;m("right",n.align==="right")("center",n.align==="center"),c(),$(n.label)}}function hn(e,t){if(e&1&&(d(0,"th",12),p(1,Cn,4,10,"button",13)(2,bn,2,5,"span",14),i()),e&2){const n=t.$implicit,o=a(2);cn("width",n.width||null),m("is-primary-h",n.key===o.primaryKey()),C("aria-sort",n.sortable?o.ariaSort(n.key):null),c(),u(n.sortable?1:2)}}function wn(e,t){if(e&1){const n=D();d(0,"td",19)(1,"fold-checkbox",20),S("click",function(l){return l.stopPropagation()})("checkedChange",function(){b(n);const l=a(),r=l.$implicit,f=l.$index,k=a(2);return h(k.toggleRow(r,f))}),i()()}if(e&2){const n=a(),o=n.$implicit,l=n.$index,r=a(2);c(),g("ariaLabel",r.labelFor(o))("checked",r.isRowSelected(o,l))}}function xn(e,t){if(e&1&&(d(0,"th",23),O(1,24),i()),e&2){const n=a().$implicit,o=a(),l=o.$implicit,r=o.$index,f=a(2);m("right",n.align==="right")("center",n.align==="center")("truncate",n.truncate),g("ngClass",n.cellClass||""),C("data-label",n.label),c(),g("ngTemplateOutlet",f.cellTemplate(n.key))("ngTemplateOutletContext",v(10,y,l,r))}}function On(e,t){if(e&1&&(d(0,"td",25),O(1,24),i()),e&2){const n=a().$implicit,o=a(),l=o.$implicit,r=o.$index,f=a(2);m("right",n.align==="right")("center",n.align==="center")("truncate",n.truncate),g("ngClass",n.cellClass||""),C("data-label",n.label),c(),g("ngTemplateOutlet",f.cellTemplate(n.key))("ngTemplateOutletContext",v(10,y,l,r))}}function vn(e,t){if(e&1&&p(0,xn,2,13,"th",21)(1,On,2,13,"td",22),e&2){const n=t.$implicit,o=a(3);u(n.key===o.primaryKey()?0:1)}}function yn(e,t){if(e&1){const n=D();d(0,"tr",18),S("click",function(){const l=b(n).$implicit,r=a(2);return h(r.onRowActivate(l))})("focus",function(){const l=b(n),r=l.$implicit,f=l.$index,k=a(2);return h(k.onRowFocus(r,f))})("keydown",function(l){const r=b(n).$implicit,f=a(2);return h(f.onRowKeydown(l,r))}),p(1,wn,2,2,"td",19),M(2,vn,2,1,null,null,R),i()}if(e&2){const n=t.$implicit,o=t.$index,l=a(2),r=l.toneOf(n);m("tone-warning",r==="warning")("tone-alert",r==="alert")("tone-success",r==="success")("clickable",l.clickable())("is-selected",l.selectable()&&l.isRowSelected(n,o)),C("tabindex",l.rowTabIndex(n,o))("aria-selected",l.selectable()?l.isRowSelected(n,o):null),c(),u(l.selectable()?1:-1),c(),P(l.columns())}}function kn(e,t){if(e&1&&(d(0,"div",2)(1,"table",6),p(2,un,2,1,"caption",7),d(3,"thead")(4,"tr"),p(5,mn,2,3,"th",8),M(6,hn,3,6,"th",9,R),i()(),d(8,"tbody"),M(9,yn,4,13,"tr",10,q,!0),i()()()),e&2){let n;const o=a();c(),C("aria-colcount",o.colCount()),c(),u((n=o.caption())?2:-1,n),c(3),u(o.selectable()?5:-1),c(),P(o.columns()),c(3),P(o.rows())}}function Mn(e,t){if(e&1){const n=D();d(0,"fold-checkbox",30),S("click",function(l){return l.stopPropagation()})("checkedChange",function(){b(n);const l=a(),r=l.$implicit,f=l.$index,k=a(2);return h(k.toggleRow(r,f))}),i()}if(e&2){const n=a(),o=n.$implicit,l=n.$index,r=a(2);g("ariaLabel",r.labelFor(o))("checked",r.isRowSelected(o,l))}}function Pn(e,t){if(e&1&&O(0,24),e&2){const n=a(),o=n.$implicit,l=n.$index;g("ngTemplateOutlet",t)("ngTemplateOutletContext",v(2,y,o,l))}}function Tn(e,t){if(e&1&&(d(0,"p",31),O(1,24),i()),e&2){const n=a(2),o=n.$implicit,l=n.$index,r=a(2);c(),g("ngTemplateOutlet",r.cellTemplate(t.key))("ngTemplateOutletContext",v(2,y,o,l))}}function Fn(e,t){if(e&1&&(d(0,"p",32),O(1,24),i()),e&2){const n=a(2),o=n.$implicit,l=n.$index,r=a(2);c(),g("ngTemplateOutlet",r.cellTemplate(t.key))("ngTemplateOutletContext",v(2,y,o,l))}}function $n(e,t){if(e&1&&(d(0,"div",34)(1,"dt"),x(2),i(),d(3,"dd"),O(4,24),i()()),e&2){const n=t.$implicit,o=a(2),l=o.$implicit,r=o.$index,f=a(2);c(2),$(n.label),c(),m("right",n.align==="right"),c(),g("ngTemplateOutlet",f.cellTemplate(n.key))("ngTemplateOutletContext",v(5,y,l,r))}}function Dn(e,t){if(e&1&&(p(0,Tn,2,5,"p",31),p(1,Fn,2,5,"p",32),d(2,"dl",33),M(3,$n,5,8,"div",34,R),i()),e&2){let n,o;const l=a(3);u((n=l.overlineColumn())?0:-1,n),c(),u((o=l.identityColumn())?1:-1,o),c(2),P(l.gridColumns())}}function Sn(e,t){if(e&1&&(d(0,"li",27),p(1,Mn,1,2,"fold-checkbox",28),d(2,"div",29),p(3,Pn,1,5,"ng-container",24)(4,Dn,5,2),i()()),e&2){let n;const o=t.$implicit,l=t.$index,r=a(2),f=r.toneOf(o);m("is-bare",r.rowCardChrome()==="none"&&r.rowCardTemplate())("tone-warning",f==="warning")("tone-alert",f==="alert")("tone-success",f==="success")("is-selected",r.selectable()&&r.isRowSelected(o,l)),C("aria-selected",r.selectable()?r.isRowSelected(o,l):null),c(),u(r.selectable()&&!(r.rowCardChrome()==="none"&&r.rowCardTemplate())?1:-1),c(2),u((n=r.rowCardTemplate())?3:4,n)}}function Ln(e,t){if(e&1&&(d(0,"ul",3),M(1,Sn,5,13,"li",26,q,!0),i()),e&2){const n=a();c(),P(n.rows())}}function An(e,t){if(e&1&&(d(0,"div",4),N(1,"fold-spinner",35),i()),e&2){const n=a();c(),g("label",n.l().loading)}}function Rn(e,t){if(e&1&&(d(0,"div",37),x(1),i()),e&2){const n=a();c(),$(n.subtitle)}}function zn(e,t){if(e&1&&(d(0,"div",5)(1,"div",36),x(2),i(),p(3,Rn,2,1,"div",37),i()),e&2){const n=t;c(2),$(n.title),c(),u(n.subtitle?3:-1)}}const En=600;class L{columns=s.required();rows=s.required();rowKey=s();rowTone=s();sort=s(null);empty=s();loading=s(!1,{transform:w});caption=s();clickable=s(!1,{transform:w});zebra=s(!1,{transform:w});hover=s(!0,{transform:w});narrowLayout=s("scroll");cardsAt=s(En,{transform:Q});rowCardChrome=s("shell");mobileLayout=s("scroll");density=s("comfortable");stickyFirst=s(!1,{transform:w});selectable=s(!1,{transform:w});selected=V(new Set);selectionLabel=s();labels=s();sortChange=z();rowClick=z();focusedKey=U(null);width=W();isNarrow=dn(this.width,this.cardsAt);injectedLabels=A(_n);l=_(()=>({...this.injectedLabels,...this.labels()}));constructor(){E(()=>{}),E(()=>{})}cells=X(T);cellMap=_(()=>{const t=new Map;for(const n of this.cells())t.set(n.foldCell(),n.template);return t});rowCard=G(F);cardMode=_(()=>this.isNarrow()&&this.resolvedNarrowLayout()==="cards");resolvedNarrowLayout=_(()=>this.mobileLayout()==="scroll"?this.narrowLayout():"cards");identityColumn=_(()=>{const t=this.columns(),n=this.primaryKey();return t.find(o=>o.key===n)??t[0]??null});overlineColumn=_(()=>{const n=this.columns().filter(o=>o.key!==this.identityColumn()?.key)[0];return n?.truncate===!0?n:null});gridColumns=_(()=>{const t=new Set([this.identityColumn()?.key,this.overlineColumn()?.key].filter(n=>n!==void 0));return this.columns().filter(n=>!t.has(n.key))});rowCardTemplate=_(()=>this.rowCard()?.template??null);toolbarSurface=s("default");primaryKey=_(()=>this.columns()[0]?.key??"");colCount=_(()=>this.columns().length+(this.selectable()?1:0));rowKeys=_(()=>this.rows().map((t,n)=>this.keyOf(t,n)));activeRowKey=_(()=>{const t=this.focusedKey(),n=this.rowKeys();return t!==null&&n.includes(t)?t:n[0]??null});cellTemplate(t){return this.cellMap().get(t)??null}keyOf(t,n){return this.rowKey()?.(t,n)??n}toneOf(t){return this.rowTone()?.(t)??null}isSorted(t){return this.sort()?.key===t}sortIcon(t){const n=this.sort();return n?.key!==t?"expand-all":n.dir==="asc"?"chevron-up":"chevron-down"}ariaSort(t){const n=this.sort();return n?.key!==t?"none":n.dir==="asc"?"ascending":"descending"}onRowActivate(t){this.clickable()&&this.rowClick.emit(t)}isRowSelected(t,n){return this.selected().has(this.keyOf(t,n))}allSelected=_(()=>this.rows().length>0&&this.rows().every((t,n)=>this.selected().has(this.keyOf(t,n))));someSelected=_(()=>!this.allSelected()&&this.rows().some((t,n)=>this.selected().has(this.keyOf(t,n))));toggleRow(t,n){const o=new Set(this.selected()),l=this.keyOf(t,n);o.has(l)?o.delete(l):o.add(l),this.selected.set(o)}toggleAll(){const t=new Set(this.selected()),n=!this.allSelected();this.rows().forEach((o,l)=>{const r=this.keyOf(o,l);n?t.add(r):t.delete(r)}),this.selected.set(t)}labelFor(t){return this.selectionLabel()?.(t)??this.l().selectRow}rowTabIndex(t,n){if(!this.clickable())return null;const o=this.activeRowKey();return o!==null&&this.keyOf(t,n)===o?0:-1}onRowFocus(t,n){this.focusedKey.set(this.keyOf(t,n))}onRowKeydown(t,n){if(t.target===t.currentTarget)switch(t.key){case"Enter":this.onRowActivate(n);break;case" ":this.onRowActivate(n),t.preventDefault();break;case"ArrowDown":K(t.currentTarget,"nextElementSibling"),t.preventDefault();break;case"ArrowUp":K(t.currentTarget,"previousElementSibling"),t.preventDefault();break;case"Home":j(t.currentTarget,"firstElementChild"),t.preventDefault();break;case"End":j(t.currentTarget,"lastElementChild"),t.preventDefault();break}}static ɵfac=function(n){return new(n||L)};static ɵcmp=J({type:L,selectors:[["fold-data-table"]],contentQueries:function(n,o,l){n&1&&ln(l,o.cells,T,4)(l,o.rowCard,F,5),n&2&&rn(2)},inputs:{columns:[1,"columns"],rows:[1,"rows"],rowKey:[1,"rowKey"],rowTone:[1,"rowTone"],sort:[1,"sort"],empty:[1,"empty"],loading:[1,"loading"],caption:[1,"caption"],clickable:[1,"clickable"],zebra:[1,"zebra"],hover:[1,"hover"],narrowLayout:[1,"narrowLayout"],cardsAt:[1,"cardsAt"],rowCardChrome:[1,"rowCardChrome"],mobileLayout:[1,"mobileLayout"],density:[1,"density"],stickyFirst:[1,"stickyFirst"],selectable:[1,"selectable"],selected:[1,"selected"],selectionLabel:[1,"selectionLabel"],labels:[1,"labels"],toolbarSurface:[1,"toolbarSurface"]},outputs:{selected:"selectedChange",sortChange:"sortChange",rowClick:"rowClick"},ngContentSelectors:pn,decls:7,vars:21,consts:[[1,"folddt-wrap"],[1,"folddt-toolbar"],[1,"folddt-scroll"],["role","list",1,"folddt-cardlist"],[1,"folddt-loading"],[1,"folddt-empty"],[1,"folddt"],[1,"folddt-caption"],["scope","col",1,"folddt-select-h"],["scope","col",3,"is-primary-h","width"],[1,"folddt-row",3,"tone-warning","tone-alert","tone-success","clickable","is-selected"],["size","sm",3,"checkedChange","ariaLabel","checked","indeterminate"],["scope","col"],["type","button",1,"folddt-th-sort",3,"right","center"],[1,"folddt-th-plain",3,"right","center"],["type","button",1,"folddt-th-sort",3,"click"],[1,"folddt-arrow",3,"name","size"],[1,"folddt-th-plain"],[1,"folddt-row",3,"click","focus","keydown"],[1,"folddt-cell","folddt-cell--select"],["size","sm",3,"click","checkedChange","ariaLabel","checked"],["scope","row",1,"folddt-cell","is-primary",3,"right","center","truncate","ngClass"],[1,"folddt-cell",3,"right","center","truncate","ngClass"],["scope","row",1,"folddt-cell","is-primary",3,"ngClass"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"folddt-cell",3,"ngClass"],[1,"folddt-card",3,"is-bare","tone-warning","tone-alert","tone-success","is-selected"],[1,"folddt-card"],["size","sm",1,"folddt-card-select",3,"ariaLabel","checked"],[1,"folddt-card-body"],["size","sm",1,"folddt-card-select",3,"click","checkedChange","ariaLabel","checked"],[1,"folddt-card-overline"],[1,"folddt-card-identity"],[1,"folddt-card-grid"],[1,"folddt-card-pair"],[3,"label"],[1,"folddt-empty-t"],[1,"folddt-empty-s"]],template:function(n,o){if(n&1&&(on(gn),d(0,"div",0)(1,"div",1),en(2),i(),p(3,kn,11,3,"div",2)(4,Ln,3,0,"ul",3),p(5,An,2,1,"div",4)(6,zn,4,2,"div",5),i()),n&2){let l;m("folddt--zebra",o.zebra())("folddt--hover",o.hover())("folddt--narrow",o.isNarrow())("folddt--compact",o.density()==="compact")("folddt--sticky-first",o.stickyFirst())("folddt--select",o.selectable()),c(),m("folddt-toolbar--sunken",o.toolbarSurface()==="sunken")("folddt-toolbar--raised",o.toolbarSurface()==="raised")("folddt-toolbar--accent",o.toolbarSurface()==="accent"),C("data-surface",o.toolbarSurface()==="accent"?"accent":null),c(2),u(o.cardMode()?4:3),c(2),u(o.loading()?5:(l=o.rows().length===0&&o.empty())?6:-1,l)}},dependencies:[Y,Z,nn,tn,sn],styles:[`@charset "UTF-8";



[_nghost-%COMP%] {
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.folddt-wrap[_ngcontent-%COMP%] {
  

  --folddt-sel-w: 0px;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 0;
  overflow: hidden; 
  border: 1px solid var(--fold-color-border-subtle);
  border-radius: var(--fold-radius-lg);
  background: var(--fold-color-surface-sunken);
  box-shadow: var(--fold-shadow-md);
}

.folddt--select[_ngcontent-%COMP%] {
  --folddt-sel-w: 44px;
}



.folddt-scroll[_ngcontent-%COMP%] {
  flex: 1 1 auto;
  min-height: 0;
  overflow: auto;
}





.folddt-toolbar[_ngcontent-%COMP%] {
  padding: var(--fold-space-md) var(--fold-space-lg);
  border-bottom: 1px solid var(--fold-color-border);
  color: var(--fold-color-text);
  
  background: color-mix(in srgb, var(--fold-color-surface-sunken) 50%, var(--fold-color-surface-card));
}


.folddt-toolbar[_ngcontent-%COMP%]:not(:has(*)) {
  display: none;
}




.folddt-toolbar--sunken[_ngcontent-%COMP%] {
  background: var(--fold-color-surface-sunken);
}

.folddt-toolbar--raised[_ngcontent-%COMP%] {
  background: var(--fold-color-surface-raised);
}

.folddt-toolbar--accent[_ngcontent-%COMP%] {
  background: var(--fold-color-primary);
  border-bottom-color: var(--fold-color-primary);
  color: var(--fold-color-on-primary);
}

.folddt[_ngcontent-%COMP%] {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-size: var(--fold-text-sm);
}


.folddt-caption[_ngcontent-%COMP%] {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
}


.folddt[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
  position: sticky;
  top: 0;
  z-index: 2;
  padding: 0;
  text-align: left;
  
  background: color-mix(in srgb, var(--fold-color-surface-sunken) 50%, var(--fold-color-surface-card));
  border-bottom: 1px solid var(--fold-color-border);
}

.folddt-th-sort[_ngcontent-%COMP%], 
.folddt-th-plain[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  padding: var(--fold-space-md) var(--fold-space-lg);
  color: var(--fold-color-text-muted);
  font-family: var(--fold-font-label);
  font-size: var(--fold-text-2xs);
  font-weight: var(--fold-weight-bold);
  text-transform: uppercase;
  letter-spacing: var(--fold-tracking-caps);
}

.folddt-th-sort[_ngcontent-%COMP%] {
  gap: var(--fold-space-sm);
  width: 100%;
  border: 0;
  background: transparent;
  cursor: pointer;
  transition: color var(--fold-motion-fast);
}

.folddt-th-sort[_ngcontent-%COMP%]:hover {
  color: var(--fold-color-text);
}

.folddt-th-sort.right[_ngcontent-%COMP%] {
  justify-content: flex-end;
}

.folddt-th-plain.right[_ngcontent-%COMP%] {
  justify-content: flex-end;
  width: 100%;
}

.folddt-arrow[_ngcontent-%COMP%] {
  display: inline-flex;
  color: var(--fold-color-text-faded);
  transition: color var(--fold-motion-fast);
}

.folddt-arrow.on[_ngcontent-%COMP%] {
  color: var(--fold-color-primary-text);
}

.folddt-row[_ngcontent-%COMP%] {
  transition: background var(--fold-motion-fast);
}

.folddt-row.clickable[_ngcontent-%COMP%] {
  cursor: pointer;
}

.folddt-row[_ngcontent-%COMP%]   .folddt-cell[_ngcontent-%COMP%] {
  border-bottom: 1px solid var(--fold-color-border-subtle);
}

.folddt-row[_ngcontent-%COMP%]:last-child   .folddt-cell[_ngcontent-%COMP%] {
  border-bottom: 0;
}

.folddt-row[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--fold-color-primary-border);
  outline-offset: -2px;
}


.folddt--zebra[_ngcontent-%COMP%]   .folddt-row[_ngcontent-%COMP%]:nth-child(even):not(.tone-warning):not(.tone-alert):not(.tone-success)   .folddt-cell[_ngcontent-%COMP%] {
  background: var(--fold-color-surface-subtle);
}





.folddt--zebra[_ngcontent-%COMP%]   .folddt-row[_ngcontent-%COMP%]   .folddt-cell[_ngcontent-%COMP%] {
  border-bottom-color: transparent;
}


.folddt--hover[_ngcontent-%COMP%]   .folddt-row[_ngcontent-%COMP%]:hover   .folddt-cell[_ngcontent-%COMP%] {
  background: var(--fold-color-surface-raised);
}

.folddt--hover[_ngcontent-%COMP%]   .folddt-row.tone-warning[_ngcontent-%COMP%]:hover   .folddt-cell[_ngcontent-%COMP%] {
  background: color-mix(in srgb, var(--fold-color-warning) 16%, transparent);
}

.folddt--hover[_ngcontent-%COMP%]   .folddt-row.tone-alert[_ngcontent-%COMP%]:hover   .folddt-cell[_ngcontent-%COMP%] {
  background: color-mix(in srgb, var(--fold-color-alert) 17%, transparent);
}



.folddt-cell[_ngcontent-%COMP%] {
  padding: var(--fold-space-md) var(--fold-space-lg);
  color: var(--fold-color-text);
  font-weight: inherit;
  text-align: left;
  white-space: nowrap;
  vertical-align: middle;
}

.folddt-cell.right[_ngcontent-%COMP%] {
  text-align: right;
}

.folddt-cell.center[_ngcontent-%COMP%] {
  text-align: center;
}


.folddt-cell.truncate[_ngcontent-%COMP%] {
  max-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}



.folddt-row.tone-warning[_ngcontent-%COMP%]   .folddt-cell[_ngcontent-%COMP%]:first-child {
  box-shadow: inset 3px 0 0 var(--fold-color-warning);
}

.folddt-row.tone-warning[_ngcontent-%COMP%]   .folddt-cell[_ngcontent-%COMP%] {
  background: color-mix(in srgb, var(--fold-color-warning) 10%, transparent);
}

.folddt-row.tone-alert[_ngcontent-%COMP%]   .folddt-cell[_ngcontent-%COMP%]:first-child {
  box-shadow: inset 3px 0 0 var(--fold-color-alert);
}

.folddt-row.tone-alert[_ngcontent-%COMP%]   .folddt-cell[_ngcontent-%COMP%] {
  background: color-mix(in srgb, var(--fold-color-alert) 11%, transparent);
}

.folddt-row.tone-success[_ngcontent-%COMP%]   .folddt-cell[_ngcontent-%COMP%]:first-child {
  box-shadow: inset 3px 0 0 var(--fold-color-success);
}

.folddt-row.tone-success[_ngcontent-%COMP%]   .folddt-cell[_ngcontent-%COMP%] {
  background: color-mix(in srgb, var(--fold-color-success) 9%, transparent);
}

.folddt-loading[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--fold-space-5xl) var(--fold-space-2xl);
}

.folddt-empty[_ngcontent-%COMP%] {
  padding: var(--fold-space-5xl) var(--fold-space-2xl);
  text-align: center;
}

.folddt-empty-t[_ngcontent-%COMP%] {
  font-size: var(--fold-text-base);
  font-weight: var(--fold-weight-semibold);
  color: var(--fold-color-text);
}

.folddt-empty-s[_ngcontent-%COMP%] {
  font-size: var(--fold-text-sm);
  color: var(--fold-color-text-muted);
  margin-top: var(--fold-space-xs);
}












.folddt-cardlist[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
}






.folddt-card[_ngcontent-%COMP%] {
  display: flex;
  gap: var(--fold-space-md);
  align-items: flex-start;
  padding: var(--fold-space-md) var(--fold-space-lg);
  background: var(--fold-color-surface-card);
  border: 1px solid var(--fold-color-border);
  border-radius: var(--fold-radius-lg);
  box-shadow: var(--fold-shadow-sm);
}

.folddt-card-body[_ngcontent-%COMP%] {
  flex: 1 1 auto;
  min-width: 0;
}


.folddt-card.tone-warning[_ngcontent-%COMP%] {
  border-inline-start: 3px solid var(--fold-color-warning);
}

.folddt-card.tone-alert[_ngcontent-%COMP%] {
  border-inline-start: 3px solid var(--fold-color-alert);
}

.folddt-card.tone-success[_ngcontent-%COMP%] {
  border-inline-start: 3px solid var(--fold-color-success);
}

.folddt-card.is-selected[_ngcontent-%COMP%] {
  background: var(--fold-color-primary-surface);
  border-color: var(--fold-color-primary);
}





.folddt-card.is-bare[_ngcontent-%COMP%], 
.folddt-card.is-bare.is-selected[_ngcontent-%COMP%], 
.folddt-card.is-bare.tone-warning[_ngcontent-%COMP%], 
.folddt-card.is-bare.tone-alert[_ngcontent-%COMP%], 
.folddt-card.is-bare.tone-success[_ngcontent-%COMP%] {
  padding: 0;
  background: none;
  border: 0;
  border-radius: 0;
  box-shadow: none;
}


.folddt-select-h[_ngcontent-%COMP%], 
.folddt-cell--select[_ngcontent-%COMP%] {
  width: var(--folddt-sel-w);
  padding-left: var(--fold-space-lg);
  padding-right: 0;
  text-align: left;
  white-space: nowrap;
}

.folddt-select-h[_ngcontent-%COMP%] {
  vertical-align: middle;
}


.folddt-row.is-selected[_ngcontent-%COMP%]   .folddt-cell[_ngcontent-%COMP%] {
  background: color-mix(in srgb, var(--fold-color-primary) 8%, transparent);
}

.folddt-row.is-selected[_ngcontent-%COMP%]   .folddt-cell[_ngcontent-%COMP%]:first-child {
  box-shadow: inset 3px 0 0 var(--fold-color-primary);
}


.folddt--compact[_ngcontent-%COMP%]   .folddt-cell[_ngcontent-%COMP%] {
  padding: var(--fold-space-sm) var(--fold-space-md);
}

.folddt--compact[_ngcontent-%COMP%]   .folddt-th-sort[_ngcontent-%COMP%], 
.folddt--compact[_ngcontent-%COMP%]   .folddt-th-plain[_ngcontent-%COMP%] {
  padding: var(--fold-space-sm) var(--fold-space-md);
}

.folddt--compact[_ngcontent-%COMP%]   .folddt-cell--select[_ngcontent-%COMP%] {
  padding-left: var(--fold-space-md);
  padding-right: 0;
}





.folddt--sticky-first[_ngcontent-%COMP%]   .folddt-cell--select[_ngcontent-%COMP%], 
.folddt--sticky-first[_ngcontent-%COMP%]   .folddt-select-h[_ngcontent-%COMP%] {
  position: sticky;
  left: 0;
  background: var(--fold-color-surface-sunken);
}

.folddt--sticky-first[_ngcontent-%COMP%]   .folddt-select-h[_ngcontent-%COMP%] {
  z-index: 3;
}

.folddt--sticky-first[_ngcontent-%COMP%]   .folddt-cell.is-primary[_ngcontent-%COMP%] {
  position: sticky;
  left: var(--folddt-sel-w);
  z-index: 1;
  background: var(--fold-color-surface-sunken);
}

.folddt--sticky-first[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.is-primary-h[_ngcontent-%COMP%] {
  position: sticky;
  left: var(--folddt-sel-w);
  z-index: 3;
}


.folddt--sticky-first[_ngcontent-%COMP%]   .folddt-row.tone-warning[_ngcontent-%COMP%]   .folddt-cell.is-primary[_ngcontent-%COMP%] {
  background: color-mix(in srgb, var(--fold-color-warning) 10%, var(--fold-color-surface-sunken));
}

.folddt--sticky-first[_ngcontent-%COMP%]   .folddt-row.tone-alert[_ngcontent-%COMP%]   .folddt-cell.is-primary[_ngcontent-%COMP%] {
  background: color-mix(in srgb, var(--fold-color-alert) 11%, var(--fold-color-surface-sunken));
}

.folddt--sticky-first[_ngcontent-%COMP%]   .folddt-row.tone-success[_ngcontent-%COMP%]   .folddt-cell.is-primary[_ngcontent-%COMP%] {
  background: color-mix(in srgb, var(--fold-color-success) 9%, var(--fold-color-surface-sunken));
}

.folddt--sticky-first[_ngcontent-%COMP%]   .folddt-row.is-selected[_ngcontent-%COMP%]   .folddt-cell.is-primary[_ngcontent-%COMP%] {
  background: color-mix(in srgb, var(--fold-color-primary) 8%, var(--fold-color-surface-sunken));
}


@media (prefers-reduced-motion: reduce) {
  .folddt-row[_ngcontent-%COMP%], 
   .folddt-th-sort[_ngcontent-%COMP%], 
   .folddt-arrow[_ngcontent-%COMP%] {
    transition: none;
  }
}



@media (forced-colors: active) {
  .folddt-row.is-selected[_ngcontent-%COMP%]   .folddt-cell[_ngcontent-%COMP%]:first-child, 
   .folddt-row.tone-warning[_ngcontent-%COMP%]   .folddt-cell[_ngcontent-%COMP%]:first-child, 
   .folddt-row.tone-alert[_ngcontent-%COMP%]   .folddt-cell[_ngcontent-%COMP%]:first-child, 
   .folddt-row.tone-success[_ngcontent-%COMP%]   .folddt-cell[_ngcontent-%COMP%]:first-child {
    border-inline-start: 3px solid Highlight;
  }
  .folddt-row[_ngcontent-%COMP%]:focus-visible {
    outline-color: Highlight;
  }
}






.folddt-cardlist[_ngcontent-%COMP%] {
  gap: var(--fold-space-sm);
}




.folddt-card-overline[_ngcontent-%COMP%] {
  margin: 0 0 var(--fold-space-xs);
  color: var(--fold-color-text-muted);
  font-size: var(--fold-text-xs);
  font-weight: var(--fold-weight-medium);
  overflow-wrap: anywhere;
}

.folddt-card-identity[_ngcontent-%COMP%] {
  margin: 0;
  color: var(--fold-color-text);
  font-size: var(--fold-text-base);
  font-weight: var(--fold-weight-semibold);
  letter-spacing: var(--fold-tracking-tight);
}

.folddt-card-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--fold-space-sm) var(--fold-space-md);
  margin: var(--fold-space-md) 0 0;
}

.folddt-card-pair[_ngcontent-%COMP%] {
  min-width: 0;
}

.folddt-card-grid[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {
  color: var(--fold-color-text-muted);
  font-size: var(--fold-text-2xs);
  font-weight: var(--fold-weight-bold);
  letter-spacing: var(--fold-tracking-caps);
  text-transform: uppercase;
}

.folddt-card-grid[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {
  margin: var(--fold-space-xs) 0 0;
  color: var(--fold-color-text);
  font-size: var(--fold-text-sm);
}

.folddt-card-grid[_ngcontent-%COMP%]   dd.right[_ngcontent-%COMP%] {
  font-variant-numeric: tabular-nums;
}`]})}const In=Object.freeze(Object.defineProperty({__proto__:null,FoldDataTableComponent:L},Symbol.toStringTag,{value:"Module"}));export{L as F,T as a,F as b,In as d};
