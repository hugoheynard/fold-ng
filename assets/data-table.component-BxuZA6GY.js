import{w as i,S as $,aI as A,y as I,J as b,av as S,s as E,ak as Q,an as V,aJ as J,x as g,aD as U,ɵ as B,aK as G,aw as W,F as X,K as Y,d as s,M as Z,f as a,H as p,i as M,C as _,j as d,O as m,I as u,o as P,aF as nn,aq as tn,e as y,l as on,A as v,B as T,q as c,m as C,z as en,D as h,E as w,g as q,k as F,ay as R,aA as z}from"./index-CtivJ5eo.js";import{FoldSpinnerComponent as ln}from"./spinner.component-BfoDqze5.js";class O{foldCell=i.required();template=$(A);static ɵfac=function(n){return new(n||O)};static ɵdir=I({type:O,selectors:[["ng-template","foldCell",""]],inputs:{foldCell:[1,"foldCell"]}})}class x{template=$(A);static ɵfac=function(n){return new(n||x)};static ɵdir=I({type:x,selectors:[["ng-template","foldRowCard",""]]})}function L(e,t){if(!(e instanceof Element))return;const n=e[t];n instanceof HTMLElement&&n.focus()}function j(e,t){if(!(e instanceof Element))return;const n=e.parentElement?.[t];n instanceof HTMLElement&&n.focus()}const rn=[[["","foldToolbar",""]]],cn=["[foldToolbar]"],K=(e,t)=>({$implicit:e,index:t}),N=(e,t)=>t.key;function H(e,t){return this.keyOf(t,e)}function dn(e,t){e&1&&(s(0,"caption",4),y(1),a()),e&2&&(d(),on(" ",t," "))}function an(e,t){if(e&1){const n=v();s(0,"th",5)(1,"input",11),T("change",function(){h(n);const l=c();return w(l.toggleAll())}),a()()}if(e&2){const n=c();d(),C("checked",n.allSelected())("indeterminate",n.someSelected())}}function sn(e,t){if(e&1){const n=v();s(0,"button",15),T("click",function(){h(n);const l=c().$implicit,r=c();return w(r.sortChange.emit(l.key))}),s(1,"span"),y(2),a(),q(3,"fold-icon",16),a()}if(e&2){const n=c().$implicit,o=c();_("right",n.align==="right")("center",n.align==="center"),m("aria-label","Sort by "+n.label),d(2),F(n.label),d(),_("on",o.isSorted(n.key)),C("name",o.sortIcon(n.key))("size",14)}}function fn(e,t){if(e&1&&(s(0,"span",17),y(1),a()),e&2){const n=c().$implicit;_("right",n.align==="right")("center",n.align==="center"),d(),F(n.label)}}function _n(e,t){if(e&1&&(s(0,"th",12),p(1,sn,4,10,"button",13)(2,fn,2,5,"span",14),a()),e&2){const n=t.$implicit,o=c();en("width",n.width||null),_("is-primary-h",n.key===o.primaryKey()),m("aria-sort",n.sortable?o.ariaSort(n.key):null),d(),u(n.sortable?1:2)}}function gn(e,t){if(e&1){const n=v();s(0,"td",19)(1,"input",20),T("click",function(l){return l.stopPropagation()})("change",function(){h(n);const l=c(),r=l.$implicit,f=l.$index,D=c();return w(D.toggleRow(r,f))}),a()()}if(e&2){const n=c(),o=n.$implicit,l=n.$index,r=c();d(),C("checked",r.isRowSelected(o,l)),m("aria-label",r.labelFor(o))}}function pn(e,t){if(e&1&&(s(0,"th",23),R(1,24),a()),e&2){const n=c().$implicit,o=c(),l=o.$implicit,r=o.$index,f=c();_("right",n.align==="right")("center",n.align==="center")("truncate",n.truncate),C("ngClass",n.cellClass||""),m("data-label",n.label),d(),C("ngTemplateOutlet",f.cellTemplate(n.key))("ngTemplateOutletContext",z(10,K,l,r))}}function un(e,t){if(e&1&&(s(0,"td",25),R(1,24),a()),e&2){const n=c().$implicit,o=c(),l=o.$implicit,r=o.$index,f=c();_("right",n.align==="right")("center",n.align==="center")("truncate",n.truncate),C("ngClass",n.cellClass||""),m("data-label",n.label),d(),C("ngTemplateOutlet",f.cellTemplate(n.key))("ngTemplateOutletContext",z(10,K,l,r))}}function mn(e,t){if(e&1&&p(0,pn,2,13,"th",21)(1,un,2,13,"td",22),e&2){const n=t.$implicit,o=c(2);u(n.key===o.primaryKey()?0:1)}}function Cn(e,t){if(e&1){const n=v();s(0,"tr",18),T("click",function(){const l=h(n).$implicit,r=c();return w(r.onRowActivate(l))})("focus",function(){const l=h(n),r=l.$implicit,f=l.$index,D=c();return w(D.onRowFocus(r,f))})("keydown",function(l){const r=h(n).$implicit,f=c();return w(f.onRowKeydown(l,r))}),p(1,gn,2,2,"td",19),M(2,mn,2,1,null,null,N),a()}if(e&2){const n=t.$implicit,o=t.$index,l=c(),r=l.toneOf(n);_("tone-warning",r==="warning")("tone-alert",r==="alert")("tone-success",r==="success")("clickable",l.clickable())("is-selected",l.selectable()&&l.isRowSelected(n,o)),m("tabindex",l.rowTabIndex(n,o))("aria-selected",l.selectable()?l.isRowSelected(n,o):null),d(),u(l.selectable()?1:-1),d(),P(l.columns())}}function bn(e,t){if(e&1&&(s(0,"div",26),R(1,24),a()),e&2){const n=t.$implicit,o=t.$index,l=c();d(),C("ngTemplateOutlet",l)("ngTemplateOutletContext",z(2,K,n,o))}}function hn(e,t){if(e&1&&(s(0,"div",8),M(1,bn,2,5,"div",26,H,!0),a()),e&2){const n=c();d(),P(n.rows())}}function wn(e,t){e&1&&(s(0,"div",9),q(1,"fold-spinner",27),a())}function On(e,t){if(e&1&&(s(0,"div",29),y(1),a()),e&2){const n=c();d(),F(n.subtitle)}}function xn(e,t){if(e&1&&(s(0,"div",10)(1,"div",28),y(2),a(),p(3,On,2,1,"div",29),a()),e&2){const n=t;d(2),F(n.title),d(),u(n.subtitle?3:-1)}}class k{columns=i.required();rows=i.required();rowKey=i();rowTone=i();sort=i(null);empty=i();loading=i(!1,{transform:b});caption=i();clickable=i(!1,{transform:b});zebra=i(!1,{transform:b});hover=i(!0,{transform:b});mobileLayout=i("scroll");density=i("comfortable");stickyFirst=i(!1,{transform:b});selectable=i(!1,{transform:b});selected=i(new Set);selectionLabel=i();selectionChange=S();sortChange=S();rowClick=S();focusedKey=E(null);isNarrow=E(!1);destroyRef=$(Q);constructor(){if(typeof window<"u"&&typeof window.matchMedia=="function"){const t=window.matchMedia("(max-width: 700px)");this.isNarrow.set(t.matches);const n=o=>{this.isNarrow.set(o.matches)};t.addEventListener("change",n),this.destroyRef.onDestroy(()=>{t.removeEventListener("change",n)})}V(()=>{})}cells=J(O);cellMap=g(()=>{const t=new Map;for(const n of this.cells())t.set(n.foldCell(),n.template);return t});rowCard=U(x);rowCardTemplate=g(()=>this.mobileLayout()==="custom"?this.rowCard()?.template??null:null);toolbarSurface=i("default");primaryKey=g(()=>this.columns()[0]?.key??"");colCount=g(()=>this.columns().length+(this.selectable()?1:0));rowKeys=g(()=>this.rows().map((t,n)=>this.keyOf(t,n)));activeRowKey=g(()=>{const t=this.focusedKey(),n=this.rowKeys();return t!==null&&n.includes(t)?t:n[0]??null});cellTemplate(t){return this.cellMap().get(t)??null}keyOf(t,n){return this.rowKey()?.(t,n)??n}toneOf(t){return this.rowTone()?.(t)??null}isSorted(t){return this.sort()?.key===t}sortIcon(t){const n=this.sort();return n?.key!==t?"expand-all":n.dir==="asc"?"chevron-up":"chevron-down"}ariaSort(t){const n=this.sort();return n?.key!==t?"none":n.dir==="asc"?"ascending":"descending"}onRowActivate(t){this.clickable()&&this.rowClick.emit(t)}isRowSelected(t,n){return this.selected().has(this.keyOf(t,n))}allSelected=g(()=>this.rows().length>0&&this.rows().every((t,n)=>this.selected().has(this.keyOf(t,n))));someSelected=g(()=>!this.allSelected()&&this.rows().some((t,n)=>this.selected().has(this.keyOf(t,n))));toggleRow(t,n){const o=new Set(this.selected()),l=this.keyOf(t,n);o.has(l)?o.delete(l):o.add(l),this.selectionChange.emit(o)}toggleAll(){const t=new Set(this.selected()),n=!this.allSelected();this.rows().forEach((o,l)=>{const r=this.keyOf(o,l);n?t.add(r):t.delete(r)}),this.selectionChange.emit(t)}labelFor(t){return this.selectionLabel()?.(t)??null}rowTabIndex(t,n){if(!this.clickable())return null;const o=this.activeRowKey();return o!==null&&this.keyOf(t,n)===o?0:-1}onRowFocus(t,n){this.focusedKey.set(this.keyOf(t,n))}onRowKeydown(t,n){if(t.target===t.currentTarget)switch(t.key){case"Enter":this.onRowActivate(n);break;case" ":this.onRowActivate(n),t.preventDefault();break;case"ArrowDown":L(t.currentTarget,"nextElementSibling"),t.preventDefault();break;case"ArrowUp":L(t.currentTarget,"previousElementSibling"),t.preventDefault();break;case"Home":j(t.currentTarget,"firstElementChild"),t.preventDefault();break;case"End":j(t.currentTarget,"lastElementChild"),t.preventDefault();break}}static ɵfac=function(n){return new(n||k)};static ɵcmp=B({type:k,selectors:[["fold-data-table"]],contentQueries:function(n,o,l){n&1&&nn(l,o.cells,O,4)(l,o.rowCard,x,5),n&2&&tn(2)},inputs:{columns:[1,"columns"],rows:[1,"rows"],rowKey:[1,"rowKey"],rowTone:[1,"rowTone"],sort:[1,"sort"],empty:[1,"empty"],loading:[1,"loading"],caption:[1,"caption"],clickable:[1,"clickable"],zebra:[1,"zebra"],hover:[1,"hover"],mobileLayout:[1,"mobileLayout"],density:[1,"density"],stickyFirst:[1,"stickyFirst"],selectable:[1,"selectable"],selected:[1,"selected"],selectionLabel:[1,"selectionLabel"],toolbarSurface:[1,"toolbarSurface"]},outputs:{selectionChange:"selectionChange",sortChange:"sortChange",rowClick:"rowClick"},ngContentSelectors:cn,decls:17,vars:26,consts:[[1,"folddt-wrap"],[1,"folddt-toolbar"],[1,"folddt-scroll"],[1,"folddt"],[1,"folddt-caption"],["scope","col",1,"folddt-select-h"],["scope","col",3,"is-primary-h","width"],[1,"folddt-row",3,"tone-warning","tone-alert","tone-success","clickable","is-selected"],["role","list",1,"folddt-cardlist"],[1,"folddt-loading"],[1,"folddt-empty"],["type","checkbox","aria-label","Select all rows",1,"folddt-check",3,"change","checked","indeterminate"],["scope","col"],["type","button",1,"folddt-th-sort",3,"right","center"],[1,"folddt-th-plain",3,"right","center"],["type","button",1,"folddt-th-sort",3,"click"],[1,"folddt-arrow",3,"name","size"],[1,"folddt-th-plain"],[1,"folddt-row",3,"click","focus","keydown"],[1,"folddt-cell","folddt-cell--select"],["type","checkbox",1,"folddt-check",3,"click","change","checked"],["scope","row",1,"folddt-cell","is-primary",3,"right","center","truncate","ngClass"],[1,"folddt-cell",3,"right","center","truncate","ngClass"],["scope","row",1,"folddt-cell","is-primary",3,"ngClass"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"folddt-cell",3,"ngClass"],["role","listitem",1,"folddt-cardlist-item"],["label","Loading…"],[1,"folddt-empty-t"],[1,"folddt-empty-s"]],template:function(n,o){if(n&1&&(Y(rn),s(0,"div",0)(1,"div",1),Z(2),a(),s(3,"div",2)(4,"table",3),p(5,dn,2,1,"caption",4),s(6,"thead")(7,"tr"),p(8,an,2,2,"th",5),M(9,_n,3,6,"th",6,N),a()(),s(11,"tbody"),M(12,Cn,4,13,"tr",7,H,!0),a()()(),p(14,hn,3,0,"div",8),p(15,wn,2,0,"div",9)(16,xn,4,2,"div",10),a()),n&2){let l,r,f;_("folddt--zebra",o.zebra())("folddt--hover",o.hover())("folddt--cards",o.mobileLayout()==="auto-cards")("folddt--custom",o.mobileLayout()==="custom")("folddt--compact",o.density()==="compact")("folddt--sticky-first",o.stickyFirst())("folddt--select",o.selectable()),d(),_("folddt-toolbar--sunken",o.toolbarSurface()==="sunken")("folddt-toolbar--raised",o.toolbarSurface()==="raised")("folddt-toolbar--accent",o.toolbarSurface()==="accent"),m("data-surface",o.toolbarSurface()==="accent"?"accent":null),d(3),m("aria-colcount",o.colCount()),d(),u((l=o.caption())?5:-1,l),d(3),u(o.selectable()?8:-1),d(),P(o.columns()),d(3),P(o.rows()),d(2),u((r=o.isNarrow()&&o.rowCardTemplate())?14:-1,r),d(),u(o.loading()?15:(f=o.rows().length===0&&o.empty())?16:-1,f)}},dependencies:[G,W,X,ln],styles:[`@charset "UTF-8";



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
  padding: 12px 16px;
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
  padding: 12px 18px;
  color: var(--fold-color-text-muted);
  font-size: 10.5px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
}

.folddt-th-sort[_ngcontent-%COMP%] {
  gap: 6px;
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
  padding: 11px 18px;
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
  padding: 48px 24px;
}

.folddt-empty[_ngcontent-%COMP%] {
  padding: 48px 24px;
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
  margin-top: 4px;
}



.folddt-cardlist[_ngcontent-%COMP%] {
  display: none;
}


.folddt-check[_ngcontent-%COMP%] {
  width: 15px;
  height: 15px;
  margin: 0;
  accent-color: var(--fold-color-primary);
  cursor: pointer;
}

.folddt-select-h[_ngcontent-%COMP%], 
.folddt-cell--select[_ngcontent-%COMP%] {
  width: var(--folddt-sel-w);
  padding-left: 16px;
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
  padding: 6px 14px;
}

.folddt--compact[_ngcontent-%COMP%]   .folddt-th-sort[_ngcontent-%COMP%], 
.folddt--compact[_ngcontent-%COMP%]   .folddt-th-plain[_ngcontent-%COMP%] {
  padding: 8px 14px;
}

.folddt--compact[_ngcontent-%COMP%]   .folddt-cell--select[_ngcontent-%COMP%] {
  padding-left: 12px;
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
    gap: 10px;
  }
  .folddt--cards[_ngcontent-%COMP%]   .folddt-row[_ngcontent-%COMP%] {
    display: block;
    border: 1px solid var(--fold-color-border-subtle);
    border-radius: var(--fold-radius-md);
    background: var(--fold-color-surface-sunken);
    padding: 4px 14px 8px;
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
    gap: 12px;
    padding: 8px 0;
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
    padding: 8px 0 10px;
    border-bottom: 1px solid var(--fold-color-border);
  }
  .folddt--cards[_ngcontent-%COMP%]   .folddt-cell.is-primary[_ngcontent-%COMP%]::before {
    display: none;
  }
  
  .folddt--cards[_ngcontent-%COMP%]   .folddt-cell--select[_ngcontent-%COMP%] {
    width: auto;
    justify-content: flex-start;
    padding: 8px 0;
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
    gap: 10px;
  }
}`]})}const Pn=Object.freeze(Object.defineProperty({__proto__:null,FoldDataTableComponent:k},Symbol.toStringTag,{value:"Module"}));export{k as F,O as a,x as b,Pn as d};
