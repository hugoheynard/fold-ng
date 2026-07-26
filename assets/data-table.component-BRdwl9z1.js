import{w as i,S as E,aI as K,y as L,J as m,av as S,s as q,aJ as H,x as w,aD as Q,ɵ as V,aK as J,aw as N,F as U,K as B,d as s,M as G,f as a,H as g,i as P,C as _,j as d,O as h,I as p,o as y,aF as W,aq as X,e as M,l as Y,A as v,B as T,q as c,m as u,z as Z,D as C,E as b,g as j,k as F,ay as $,aA as R}from"./index-Dbcb4g4H.js";import{FoldSpinnerComponent as nn}from"./spinner.component-DXgfbeTy.js";class O{foldCell=i.required();template=E(K);static ɵfac=function(n){return new(n||O)};static ɵdir=L({type:O,selectors:[["ng-template","foldCell",""]],inputs:{foldCell:[1,"foldCell"]}})}class x{template=E(K);static ɵfac=function(n){return new(n||x)};static ɵdir=L({type:x,selectors:[["ng-template","foldRowCard",""]]})}const tn=[[["","foldToolbar",""]]],on=["[foldToolbar]"],z=(e,t)=>({$implicit:e,index:t}),A=(e,t)=>t.key;function I(e,t){return this.keyOf(t,e)}function en(e,t){e&1&&(s(0,"caption",4),M(1),a()),e&2&&(d(),Y(" ",t," "))}function ln(e,t){if(e&1){const n=v();s(0,"th",5)(1,"input",11),T("change",function(){C(n);const l=c();return b(l.toggleAll())}),a()()}if(e&2){const n=c();d(),u("checked",n.allSelected())("indeterminate",n.someSelected())}}function rn(e,t){if(e&1){const n=v();s(0,"button",15),T("click",function(){C(n);const l=c().$implicit,r=c();return b(r.sortChange.emit(l.key))}),s(1,"span"),M(2),a(),j(3,"fold-icon",16),a()}if(e&2){const n=c().$implicit,o=c();_("right",n.align==="right")("center",n.align==="center"),d(2),F(n.label),d(),_("on",o.isSorted(n.key)),u("name",o.sortIcon(n.key))("size",14)}}function cn(e,t){if(e&1&&(s(0,"span",17),M(1),a()),e&2){const n=c().$implicit;_("right",n.align==="right")("center",n.align==="center"),d(),F(n.label)}}function dn(e,t){if(e&1&&(s(0,"th",12),g(1,rn,4,9,"button",13)(2,cn,2,5,"span",14),a()),e&2){const n=t.$implicit,o=c();Z("width",n.width||null),_("is-primary-h",n.key===o.primaryKey()),h("aria-sort",n.sortable?o.ariaSort(n.key):null),d(),p(n.sortable?1:2)}}function an(e,t){if(e&1){const n=v();s(0,"td",19)(1,"input",20),T("click",function(l){return l.stopPropagation()})("change",function(){C(n);const l=c(),r=l.$implicit,f=l.$index,D=c();return b(D.toggleRow(r,f))}),a()()}if(e&2){const n=c(),o=n.$implicit,l=n.$index,r=c();d(),u("checked",r.isRowSelected(o,l)),h("aria-label",r.labelFor(o))}}function sn(e,t){if(e&1&&(s(0,"th",23),$(1,24),a()),e&2){const n=c().$implicit,o=c(),l=o.$implicit,r=o.$index,f=c();_("right",n.align==="right")("center",n.align==="center")("truncate",n.truncate),u("ngClass",n.cellClass||""),h("data-label",n.label),d(),u("ngTemplateOutlet",f.cellTemplate(n.key))("ngTemplateOutletContext",R(10,z,l,r))}}function fn(e,t){if(e&1&&(s(0,"td",25),$(1,24),a()),e&2){const n=c().$implicit,o=c(),l=o.$implicit,r=o.$index,f=c();_("right",n.align==="right")("center",n.align==="center")("truncate",n.truncate),u("ngClass",n.cellClass||""),h("data-label",n.label),d(),u("ngTemplateOutlet",f.cellTemplate(n.key))("ngTemplateOutletContext",R(10,z,l,r))}}function _n(e,t){if(e&1&&g(0,sn,2,13,"th",21)(1,fn,2,13,"td",22),e&2){const n=t.$implicit,o=c(2);p(n.key===o.primaryKey()?0:1)}}function gn(e,t){if(e&1){const n=v();s(0,"tr",18),T("click",function(){const l=C(n).$implicit,r=c();return b(r.onRowActivate(l))})("focus",function(){const l=C(n),r=l.$implicit,f=l.$index,D=c();return b(D.onRowFocus(r,f))})("keydown",function(l){const r=C(n).$implicit,f=c();return b(f.onRowKeydown(l,r))}),g(1,an,2,2,"td",19),P(2,_n,2,1,null,null,A),a()}if(e&2){const n=t.$implicit,o=t.$index,l=c(),r=l.toneOf(n);_("tone-warning",r==="warning")("tone-alert",r==="alert")("tone-success",r==="success")("clickable",l.clickable())("is-selected",l.selectable()&&l.isRowSelected(n,o)),h("tabindex",l.rowTabIndex(n,o))("aria-selected",l.selectable()?l.isRowSelected(n,o):null),d(),p(l.selectable()?1:-1),d(),y(l.columns())}}function pn(e,t){if(e&1&&(s(0,"div",26),$(1,24),a()),e&2){const n=t.$implicit,o=t.$index,l=c();d(),u("ngTemplateOutlet",l)("ngTemplateOutletContext",R(2,z,n,o))}}function un(e,t){if(e&1&&(s(0,"div",8),P(1,pn,2,5,"div",26,I,!0),a()),e&2){const n=c();d(),y(n.rows())}}function mn(e,t){e&1&&(s(0,"div",9),j(1,"fold-spinner",27),a())}function Cn(e,t){if(e&1&&(s(0,"div",29),M(1),a()),e&2){const n=c();d(),F(n.subtitle)}}function bn(e,t){if(e&1&&(s(0,"div",10)(1,"div",28),M(2),a(),g(3,Cn,2,1,"div",29),a()),e&2){const n=t;d(2),F(n.title),d(),p(n.subtitle?3:-1)}}class k{columns=i.required();rows=i.required();rowKey=i();rowTone=i();sort=i(null);empty=i();loading=i(!1,{transform:m});caption=i();clickable=i(!1,{transform:m});zebra=i(!1,{transform:m});hover=i(!0,{transform:m});mobileLayout=i("scroll");density=i("comfortable");stickyFirst=i(!1,{transform:m});selectable=i(!1,{transform:m});selected=i(new Set);selectionLabel=i();selectionChange=S();sortChange=S();rowClick=S();focusedKey=q(null);cells=H(O);cellMap=w(()=>{const t=new Map;for(const n of this.cells())t.set(n.foldCell(),n.template);return t});rowCard=Q(x);rowCardTemplate=w(()=>this.mobileLayout()==="custom"?this.rowCard()?.template??null:null);toolbarSurface=i("default");primaryKey=w(()=>this.columns()[0]?.key??"");cellTemplate(t){return this.cellMap().get(t)??null}keyOf(t,n){return this.rowKey()?.(t,n)??n}toneOf(t){return this.rowTone()?.(t)??null}isSorted(t){return this.sort()?.key===t}sortIcon(t){const n=this.sort();return n?.key!==t?"expand-all":n.dir==="asc"?"chevron-up":"chevron-down"}ariaSort(t){const n=this.sort();return n?.key!==t?"none":n.dir==="asc"?"ascending":"descending"}onRowActivate(t){this.clickable()&&this.rowClick.emit(t)}isRowSelected(t,n){return this.selected().has(this.keyOf(t,n))}allSelected=w(()=>this.rows().length>0&&this.rows().every((t,n)=>this.selected().has(this.keyOf(t,n))));someSelected=w(()=>!this.allSelected()&&this.rows().some((t,n)=>this.selected().has(this.keyOf(t,n))));toggleRow(t,n){const o=new Set(this.selected()),l=this.keyOf(t,n);o.has(l)?o.delete(l):o.add(l),this.selectionChange.emit(o)}toggleAll(){const t=new Set(this.selected()),n=!this.allSelected();this.rows().forEach((o,l)=>{const r=this.keyOf(o,l);n?t.add(r):t.delete(r)}),this.selectionChange.emit(t)}labelFor(t){return this.selectionLabel()?.(t)??null}rowTabIndex(t,n){if(!this.clickable())return null;const o=this.rows()[0];if(o===void 0)return-1;const l=this.focusedKey()??this.keyOf(o,0);return this.keyOf(t,n)===l?0:-1}onRowFocus(t,n){this.focusedKey.set(this.keyOf(t,n))}onRowKeydown(t,n){switch(t.key){case"Enter":this.onRowActivate(n);break;case" ":this.onRowActivate(n),t.preventDefault();break;case"ArrowDown":this.focusRow(t.currentTarget,"nextElementSibling"),t.preventDefault();break;case"ArrowUp":this.focusRow(t.currentTarget,"previousElementSibling"),t.preventDefault();break;case"Home":this.focusEdgeRow(t.currentTarget,"firstElementChild"),t.preventDefault();break;case"End":this.focusEdgeRow(t.currentTarget,"lastElementChild"),t.preventDefault();break}}focusRow(t,n){if(!(t instanceof Element))return;const o=t[n];o instanceof HTMLElement&&o.focus()}focusEdgeRow(t,n){if(!(t instanceof Element))return;const o=t.parentElement?.[n];o instanceof HTMLElement&&o.focus()}static ɵfac=function(n){return new(n||k)};static ɵcmp=V({type:k,selectors:[["fold-data-table"]],contentQueries:function(n,o,l){n&1&&W(l,o.cells,O,4)(l,o.rowCard,x,5),n&2&&X(2)},inputs:{columns:[1,"columns"],rows:[1,"rows"],rowKey:[1,"rowKey"],rowTone:[1,"rowTone"],sort:[1,"sort"],empty:[1,"empty"],loading:[1,"loading"],caption:[1,"caption"],clickable:[1,"clickable"],zebra:[1,"zebra"],hover:[1,"hover"],mobileLayout:[1,"mobileLayout"],density:[1,"density"],stickyFirst:[1,"stickyFirst"],selectable:[1,"selectable"],selected:[1,"selected"],selectionLabel:[1,"selectionLabel"],toolbarSurface:[1,"toolbarSurface"]},outputs:{selectionChange:"selectionChange",sortChange:"sortChange",rowClick:"rowClick"},ngContentSelectors:on,decls:17,vars:25,consts:[[1,"folddt-wrap"],[1,"folddt-toolbar"],[1,"folddt-scroll"],[1,"folddt"],[1,"folddt-caption"],["scope","col",1,"folddt-select-h"],["scope","col",3,"is-primary-h","width"],[1,"folddt-row",3,"tone-warning","tone-alert","tone-success","clickable","is-selected"],["role","list",1,"folddt-cardlist"],[1,"folddt-loading"],[1,"folddt-empty"],["type","checkbox","aria-label","Select all rows",1,"folddt-check",3,"change","checked","indeterminate"],["scope","col"],["type","button",1,"folddt-th-sort",3,"right","center"],[1,"folddt-th-plain",3,"right","center"],["type","button",1,"folddt-th-sort",3,"click"],[1,"folddt-arrow",3,"name","size"],[1,"folddt-th-plain"],[1,"folddt-row",3,"click","focus","keydown"],[1,"folddt-cell","folddt-cell--select"],["type","checkbox",1,"folddt-check",3,"click","change","checked"],["scope","row",1,"folddt-cell","is-primary",3,"right","center","truncate","ngClass"],[1,"folddt-cell",3,"right","center","truncate","ngClass"],["scope","row",1,"folddt-cell","is-primary",3,"ngClass"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"folddt-cell",3,"ngClass"],["role","listitem",1,"folddt-cardlist-item"],["label","Loading…"],[1,"folddt-empty-t"],[1,"folddt-empty-s"]],template:function(n,o){if(n&1&&(B(tn),s(0,"div",0)(1,"div",1),G(2),a(),s(3,"div",2)(4,"table",3),g(5,en,2,1,"caption",4),s(6,"thead")(7,"tr"),g(8,ln,2,2,"th",5),P(9,dn,3,6,"th",6,A),a()(),s(11,"tbody"),P(12,gn,4,13,"tr",7,I,!0),a()()(),g(14,un,3,0,"div",8),g(15,mn,2,0,"div",9)(16,bn,4,2,"div",10),a()),n&2){let l,r,f;_("folddt--zebra",o.zebra())("folddt--hover",o.hover())("folddt--cards",o.mobileLayout()==="auto-cards")("folddt--custom",o.mobileLayout()==="custom")("folddt--compact",o.density()==="compact")("folddt--sticky-first",o.stickyFirst())("folddt--select",o.selectable()),d(),_("folddt-toolbar--sunken",o.toolbarSurface()==="sunken")("folddt-toolbar--raised",o.toolbarSurface()==="raised")("folddt-toolbar--accent",o.toolbarSurface()==="accent"),h("data-surface",o.toolbarSurface()==="accent"?"accent":null),d(4),p((l=o.caption())?5:-1,l),d(3),p(o.selectable()?8:-1),d(),y(o.columns()),d(3),y(o.rows()),d(2),p((r=o.rowCardTemplate())?14:-1,r),d(),p(o.loading()?15:(f=o.rows().length===0&&o.empty())?16:-1,f)}},dependencies:[J,N,U,nn],styles:[`@charset "UTF-8";



[_nghost-%COMP%] {
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.folddt-wrap[_ngcontent-%COMP%] {
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
  width: 44px;
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




.folddt--sticky-first[_ngcontent-%COMP%] {
  --folddt-sel-w: 0px;
}

.folddt--sticky-first.folddt--select[_ngcontent-%COMP%] {
  --folddt-sel-w: 44px;
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
}`]})}const On=Object.freeze(Object.defineProperty({__proto__:null,FoldDataTableComponent:k},Symbol.toStringTag,{value:"Module"}));export{k as F,O as a,x as b,On as d};
