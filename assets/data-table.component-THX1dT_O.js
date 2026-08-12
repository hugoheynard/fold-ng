import{u as s,X as y,aP as K,V as B,ak as H,a0 as b,ag as Q,ap as R,s as E,$ as V,A as _,aB as U,aQ as J,aq as W,ɵ as X,aR as G,ar as Y,F as Z,ai as nn,a1 as tn,d as i,a2 as on,f as a,w as u,i as x,L as g,j as d,D as C,x as m,o as v,at as en,a9 as ln,e as P,l as rn,E as T,B as F,q as r,m as p,W as cn,N as h,O as w,g as q,k as D,au as L,aJ as $}from"./index-DBdQCP3z.js";import{FoldCheckboxComponent as dn}from"./checkbox.component-Boaj-UYf.js";class O{foldCell=s.required();template=y(K);static ɵfac=function(n){return new(n||O)};static ɵdir=B({type:O,selectors:[["ng-template","foldCell",""]],inputs:{foldCell:[1,"foldCell"]}})}class M{template=y(K);static ɵfac=function(n){return new(n||M)};static ɵdir=B({type:M,selectors:[["ng-template","foldRowCard",""]]})}function z(e,t){if(!(e instanceof Element))return;const n=e[t];n instanceof HTMLElement&&n.focus()}function j(e,t){if(!(e instanceof Element))return;const n=e.parentElement?.[t];n instanceof HTMLElement&&n.focus()}const an={selectAll:"Select all rows",selectRow:"Select row",sortBy:e=>`Sort by ${e}`,loading:"Loading…"},sn=new H("FOLD_DATA_TABLE_LABELS",{factory:()=>an}),fn=[[["","foldToolbar",""]]],_n=["[foldToolbar]"],A=(e,t)=>({$implicit:e,index:t}),I=(e,t)=>t.key;function N(e,t){return this.keyOf(t,e)}function gn(e,t){e&1&&(i(0,"caption",4),P(1),a()),e&2&&(d(),rn(" ",t," "))}function pn(e,t){if(e&1){const n=T();i(0,"th",5)(1,"fold-checkbox",11),F("checkedChange",function(){h(n);const l=r();return w(l.toggleAll())}),a()()}if(e&2){const n=r();d(),p("ariaLabel",n.l().selectAll)("checked",n.allSelected())("indeterminate",n.someSelected())}}function un(e,t){if(e&1){const n=T();i(0,"button",15),F("click",function(){h(n);const l=r().$implicit,c=r();return w(c.sortChange.emit(l.key))}),i(1,"span"),P(2),a(),q(3,"fold-icon",16),a()}if(e&2){const n=r().$implicit,o=r();g("right",n.align==="right")("center",n.align==="center"),C("aria-label",o.l().sortBy(n.label)),d(2),D(n.label),d(),g("on",o.isSorted(n.key)),p("name",o.sortIcon(n.key))("size",14)}}function mn(e,t){if(e&1&&(i(0,"span",17),P(1),a()),e&2){const n=r().$implicit;g("right",n.align==="right")("center",n.align==="center"),d(),D(n.label)}}function Cn(e,t){if(e&1&&(i(0,"th",12),u(1,un,4,10,"button",13)(2,mn,2,5,"span",14),a()),e&2){const n=t.$implicit,o=r();cn("width",n.width||null),g("is-primary-h",n.key===o.primaryKey()),C("aria-sort",n.sortable?o.ariaSort(n.key):null),d(),m(n.sortable?1:2)}}function bn(e,t){if(e&1){const n=T();i(0,"td",19)(1,"fold-checkbox",20),F("click",function(l){return l.stopPropagation()})("checkedChange",function(){h(n);const l=r(),c=l.$implicit,f=l.$index,S=r();return w(S.toggleRow(c,f))}),a()()}if(e&2){const n=r(),o=n.$implicit,l=n.$index,c=r();d(),p("ariaLabel",c.labelFor(o))("checked",c.isRowSelected(o,l))}}function hn(e,t){if(e&1&&(i(0,"th",23),L(1,24),a()),e&2){const n=r().$implicit,o=r(),l=o.$implicit,c=o.$index,f=r();g("right",n.align==="right")("center",n.align==="center")("truncate",n.truncate),p("ngClass",n.cellClass||""),C("data-label",n.label),d(),p("ngTemplateOutlet",f.cellTemplate(n.key))("ngTemplateOutletContext",$(10,A,l,c))}}function wn(e,t){if(e&1&&(i(0,"td",25),L(1,24),a()),e&2){const n=r().$implicit,o=r(),l=o.$implicit,c=o.$index,f=r();g("right",n.align==="right")("center",n.align==="center")("truncate",n.truncate),p("ngClass",n.cellClass||""),C("data-label",n.label),d(),p("ngTemplateOutlet",f.cellTemplate(n.key))("ngTemplateOutletContext",$(10,A,l,c))}}function On(e,t){if(e&1&&u(0,hn,2,13,"th",21)(1,wn,2,13,"td",22),e&2){const n=t.$implicit,o=r(2);m(n.key===o.primaryKey()?0:1)}}function Mn(e,t){if(e&1){const n=T();i(0,"tr",18),F("click",function(){const l=h(n).$implicit,c=r();return w(c.onRowActivate(l))})("focus",function(){const l=h(n),c=l.$implicit,f=l.$index,S=r();return w(S.onRowFocus(c,f))})("keydown",function(l){const c=h(n).$implicit,f=r();return w(f.onRowKeydown(l,c))}),u(1,bn,2,2,"td",19),x(2,On,2,1,null,null,I),a()}if(e&2){const n=t.$implicit,o=t.$index,l=r(),c=l.toneOf(n);g("tone-warning",c==="warning")("tone-alert",c==="alert")("tone-success",c==="success")("clickable",l.clickable())("is-selected",l.selectable()&&l.isRowSelected(n,o)),C("tabindex",l.rowTabIndex(n,o))("aria-selected",l.selectable()?l.isRowSelected(n,o):null),d(),m(l.selectable()?1:-1),d(),v(l.columns())}}function Pn(e,t){if(e&1&&(i(0,"div",26),L(1,24),a()),e&2){const n=t.$implicit,o=t.$index,l=r();d(),p("ngTemplateOutlet",l)("ngTemplateOutletContext",$(2,A,n,o))}}function yn(e,t){if(e&1&&(i(0,"div",8),x(1,Pn,2,5,"div",26,N,!0),a()),e&2){const n=r();d(),v(n.rows())}}function xn(e,t){if(e&1&&(i(0,"div",9),q(1,"fold-spinner",27),a()),e&2){const n=r();d(),p("label",n.l().loading)}}function vn(e,t){if(e&1&&(i(0,"div",29),P(1),a()),e&2){const n=r();d(),D(n.subtitle)}}function kn(e,t){if(e&1&&(i(0,"div",10)(1,"div",28),P(2),a(),u(3,vn,2,1,"div",29),a()),e&2){const n=t;d(2),D(n.title),d(),m(n.subtitle?3:-1)}}class k{columns=s.required();rows=s.required();rowKey=s();rowTone=s();sort=s(null);empty=s();loading=s(!1,{transform:b});caption=s();clickable=s(!1,{transform:b});zebra=s(!1,{transform:b});hover=s(!0,{transform:b});mobileLayout=s("scroll");density=s("comfortable");stickyFirst=s(!1,{transform:b});selectable=s(!1,{transform:b});selected=Q(new Set);selectionLabel=s();labels=s();sortChange=R();rowClick=R();focusedKey=E(null);isNarrow=E(!1);destroyRef=y(V);injectedLabels=y(sn);l=_(()=>({...this.injectedLabels,...this.labels()}));constructor(){if(typeof window<"u"&&typeof window.matchMedia=="function"){const t=window.matchMedia("(max-width: 700px)");this.isNarrow.set(t.matches);const n=o=>{this.isNarrow.set(o.matches)};t.addEventListener("change",n),this.destroyRef.onDestroy(()=>{t.removeEventListener("change",n)})}U(()=>{})}cells=J(O);cellMap=_(()=>{const t=new Map;for(const n of this.cells())t.set(n.foldCell(),n.template);return t});rowCard=W(M);rowCardTemplate=_(()=>this.mobileLayout()==="custom"?this.rowCard()?.template??null:null);toolbarSurface=s("default");primaryKey=_(()=>this.columns()[0]?.key??"");colCount=_(()=>this.columns().length+(this.selectable()?1:0));rowKeys=_(()=>this.rows().map((t,n)=>this.keyOf(t,n)));activeRowKey=_(()=>{const t=this.focusedKey(),n=this.rowKeys();return t!==null&&n.includes(t)?t:n[0]??null});cellTemplate(t){return this.cellMap().get(t)??null}keyOf(t,n){return this.rowKey()?.(t,n)??n}toneOf(t){return this.rowTone()?.(t)??null}isSorted(t){return this.sort()?.key===t}sortIcon(t){const n=this.sort();return n?.key!==t?"expand-all":n.dir==="asc"?"chevron-up":"chevron-down"}ariaSort(t){const n=this.sort();return n?.key!==t?"none":n.dir==="asc"?"ascending":"descending"}onRowActivate(t){this.clickable()&&this.rowClick.emit(t)}isRowSelected(t,n){return this.selected().has(this.keyOf(t,n))}allSelected=_(()=>this.rows().length>0&&this.rows().every((t,n)=>this.selected().has(this.keyOf(t,n))));someSelected=_(()=>!this.allSelected()&&this.rows().some((t,n)=>this.selected().has(this.keyOf(t,n))));toggleRow(t,n){const o=new Set(this.selected()),l=this.keyOf(t,n);o.has(l)?o.delete(l):o.add(l),this.selected.set(o)}toggleAll(){const t=new Set(this.selected()),n=!this.allSelected();this.rows().forEach((o,l)=>{const c=this.keyOf(o,l);n?t.add(c):t.delete(c)}),this.selected.set(t)}labelFor(t){return this.selectionLabel()?.(t)??this.l().selectRow}rowTabIndex(t,n){if(!this.clickable())return null;const o=this.activeRowKey();return o!==null&&this.keyOf(t,n)===o?0:-1}onRowFocus(t,n){this.focusedKey.set(this.keyOf(t,n))}onRowKeydown(t,n){if(t.target===t.currentTarget)switch(t.key){case"Enter":this.onRowActivate(n);break;case" ":this.onRowActivate(n),t.preventDefault();break;case"ArrowDown":z(t.currentTarget,"nextElementSibling"),t.preventDefault();break;case"ArrowUp":z(t.currentTarget,"previousElementSibling"),t.preventDefault();break;case"Home":j(t.currentTarget,"firstElementChild"),t.preventDefault();break;case"End":j(t.currentTarget,"lastElementChild"),t.preventDefault();break}}static ɵfac=function(n){return new(n||k)};static ɵcmp=X({type:k,selectors:[["fold-data-table"]],contentQueries:function(n,o,l){n&1&&en(l,o.cells,O,4)(l,o.rowCard,M,5),n&2&&ln(2)},inputs:{columns:[1,"columns"],rows:[1,"rows"],rowKey:[1,"rowKey"],rowTone:[1,"rowTone"],sort:[1,"sort"],empty:[1,"empty"],loading:[1,"loading"],caption:[1,"caption"],clickable:[1,"clickable"],zebra:[1,"zebra"],hover:[1,"hover"],mobileLayout:[1,"mobileLayout"],density:[1,"density"],stickyFirst:[1,"stickyFirst"],selectable:[1,"selectable"],selected:[1,"selected"],selectionLabel:[1,"selectionLabel"],labels:[1,"labels"],toolbarSurface:[1,"toolbarSurface"]},outputs:{selected:"selectedChange",sortChange:"sortChange",rowClick:"rowClick"},ngContentSelectors:_n,decls:17,vars:26,consts:[[1,"folddt-wrap"],[1,"folddt-toolbar"],[1,"folddt-scroll"],[1,"folddt"],[1,"folddt-caption"],["scope","col",1,"folddt-select-h"],["scope","col",3,"is-primary-h","width"],[1,"folddt-row",3,"tone-warning","tone-alert","tone-success","clickable","is-selected"],["role","list",1,"folddt-cardlist"],[1,"folddt-loading"],[1,"folddt-empty"],["size","sm",3,"checkedChange","ariaLabel","checked","indeterminate"],["scope","col"],["type","button",1,"folddt-th-sort",3,"right","center"],[1,"folddt-th-plain",3,"right","center"],["type","button",1,"folddt-th-sort",3,"click"],[1,"folddt-arrow",3,"name","size"],[1,"folddt-th-plain"],[1,"folddt-row",3,"click","focus","keydown"],[1,"folddt-cell","folddt-cell--select"],["size","sm",3,"click","checkedChange","ariaLabel","checked"],["scope","row",1,"folddt-cell","is-primary",3,"right","center","truncate","ngClass"],[1,"folddt-cell",3,"right","center","truncate","ngClass"],["scope","row",1,"folddt-cell","is-primary",3,"ngClass"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"folddt-cell",3,"ngClass"],["role","listitem",1,"folddt-cardlist-item"],[3,"label"],[1,"folddt-empty-t"],[1,"folddt-empty-s"]],template:function(n,o){if(n&1&&(tn(fn),i(0,"div",0)(1,"div",1),on(2),a(),i(3,"div",2)(4,"table",3),u(5,gn,2,1,"caption",4),i(6,"thead")(7,"tr"),u(8,pn,2,3,"th",5),x(9,Cn,3,6,"th",6,I),a()(),i(11,"tbody"),x(12,Mn,4,13,"tr",7,N,!0),a()()(),u(14,yn,3,0,"div",8),u(15,xn,2,1,"div",9)(16,kn,4,2,"div",10),a()),n&2){let l,c,f;g("folddt--zebra",o.zebra())("folddt--hover",o.hover())("folddt--cards",o.mobileLayout()==="auto-cards")("folddt--custom",o.mobileLayout()==="custom")("folddt--compact",o.density()==="compact")("folddt--sticky-first",o.stickyFirst())("folddt--select",o.selectable()),d(),g("folddt-toolbar--sunken",o.toolbarSurface()==="sunken")("folddt-toolbar--raised",o.toolbarSurface()==="raised")("folddt-toolbar--accent",o.toolbarSurface()==="accent"),C("data-surface",o.toolbarSurface()==="accent"?"accent":null),d(3),C("aria-colcount",o.colCount()),d(),m((l=o.caption())?5:-1,l),d(3),m(o.selectable()?8:-1),d(),v(o.columns()),d(3),v(o.rows()),d(2),m((c=o.isNarrow()&&o.rowCardTemplate())?14:-1,c),d(),m(o.loading()?15:(f=o.rows().length===0&&o.empty())?16:-1,f)}},dependencies:[G,Y,Z,nn,dn],styles:[`@charset "UTF-8";



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
  font-size: 10.5px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
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
  font-size: var(--fold-text-md);
  font-weight: 600;
  color: var(--fold-color-text);
}

.folddt-empty-s[_ngcontent-%COMP%] {
  font-size: var(--fold-text-sm);
  color: var(--fold-color-text-muted);
  margin-top: var(--fold-space-xs);
}



.folddt-cardlist[_ngcontent-%COMP%] {
  display: none;
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

@media (max-width: 700px) {
  .folddt--cards[_ngcontent-%COMP%] {
    overflow-x: hidden;
    border: 0;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
  }
  .folddt--cards[_ngcontent-%COMP%]   .folddt[_ngcontent-%COMP%] {
    display: block;
    width: 100%;
  }
  .folddt--cards[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {
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
  .folddt--cards[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
    gap: var(--fold-space-sm);
  }
  .folddt--cards[_ngcontent-%COMP%]   .folddt-row[_ngcontent-%COMP%] {
    display: block;
    border: 1px solid var(--fold-color-border-subtle);
    border-radius: var(--fold-radius-md);
    background: var(--fold-color-surface-sunken);
    padding: var(--fold-space-xs) var(--fold-space-md) var(--fold-space-sm);
    box-shadow: var(--fold-shadow-sm);
  }
  .folddt--cards[_ngcontent-%COMP%]   .folddt-row.tone-warning[_ngcontent-%COMP%] {
    border-left: 3px solid var(--fold-color-warning);
  }
  .folddt--cards[_ngcontent-%COMP%]   .folddt-row.tone-alert[_ngcontent-%COMP%] {
    border-left: 3px solid var(--fold-color-alert);
  }
  .folddt--cards[_ngcontent-%COMP%]   .folddt-row.tone-success[_ngcontent-%COMP%] {
    border-left: 3px solid var(--fold-color-success);
  }
  .folddt--cards[_ngcontent-%COMP%]   .folddt-row[_ngcontent-%COMP%]   .folddt-cell[_ngcontent-%COMP%]:first-child {
    box-shadow: none;
  }
  .folddt--cards[_ngcontent-%COMP%]   .folddt-cell[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--fold-space-md);
    padding: var(--fold-space-sm) 0;
    white-space: normal;
    border-bottom: 1px solid var(--fold-color-border-subtle);
  }
  .folddt--cards[_ngcontent-%COMP%]   .folddt-cell[_ngcontent-%COMP%]:last-child {
    border-bottom: 0;
  }
  .folddt--cards[_ngcontent-%COMP%]   .folddt-cell[_ngcontent-%COMP%]::before {
    content: attr(data-label);
    flex-shrink: 0;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--fold-color-text-faded);
  }
  .folddt--cards[_ngcontent-%COMP%]   .folddt-cell.right[_ngcontent-%COMP%] {
    text-align: left;
  }
  .folddt--cards[_ngcontent-%COMP%]   .folddt-cell.is-primary[_ngcontent-%COMP%] {
    justify-content: flex-start;
    padding: var(--fold-space-sm) 0 var(--fold-space-sm);
    border-bottom: 1px solid var(--fold-color-border);
  }
  .folddt--cards[_ngcontent-%COMP%]   .folddt-cell.is-primary[_ngcontent-%COMP%]::before {
    display: none;
  }
  
  .folddt--cards[_ngcontent-%COMP%]   .folddt-cell--select[_ngcontent-%COMP%] {
    width: auto;
    justify-content: flex-start;
    padding: var(--fold-space-sm) 0;
  }
  .folddt--cards[_ngcontent-%COMP%]   .folddt-cell--select[_ngcontent-%COMP%]::before {
    display: none;
  }
  
  .folddt--cards[_ngcontent-%COMP%]   .folddt-cell--select[_ngcontent-%COMP%], 
   .folddt--cards[_ngcontent-%COMP%]   .folddt-cell.is-primary[_ngcontent-%COMP%], 
   .folddt--cards.folddt--sticky-first[_ngcontent-%COMP%]   .folddt-cell[_ngcontent-%COMP%] {
    position: static;
  }
  
  .folddt--custom[_ngcontent-%COMP%] {
    overflow-x: hidden;
    border: 0;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
  }
  .folddt--custom[_ngcontent-%COMP%]   .folddt[_ngcontent-%COMP%] {
    display: none;
  }
  .folddt--custom[_ngcontent-%COMP%]   .folddt-cardlist[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
    gap: var(--fold-space-sm);
  }
}`]})}const Dn=Object.freeze(Object.defineProperty({__proto__:null,FoldDataTableComponent:k},Symbol.toStringTag,{value:"Module"}));export{k as F,O as a,M as b,Dn as d};
