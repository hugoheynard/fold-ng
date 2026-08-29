import{u as s,X as F,aO as K,V as j,aj as X,a0 as P,aE as G,af as B,ao as N,s as J,aF as Y,A as u,aA as q,aP as Z,ap as H,ag as nn,ɵ as tn,aQ as on,aq as en,F as ln,ah as an,a1 as rn,d as c,a2 as dn,f as i,w as p,L as m,j as d,D as C,x as g,as as cn,a9 as sn,i as $,q as r,o as D,g as z,m as f,e as y,k as T,l as _n,E as k,B as M,W as fn,N as h,O as x,at as w,aI as v}from"./index-CLSi-FzM.js";import{f as pn}from"./fold-at-DPa4tW9r.js";import{FoldCheckboxComponent as gn}from"./checkbox.component-B_S8T2wo.js";class S{foldCell=s.required();template=F(K);static ɵfac=function(n){return new(n||S)};static ɵdir=j({type:S,selectors:[["ng-template","foldCell",""]],inputs:{foldCell:[1,"foldCell"]}})}class R{template=F(K);static ɵfac=function(n){return new(n||R)};static ɵdir=j({type:R,selectors:[["ng-template","foldRowCard",""]]})}class L{template=F(K);static ɵfac=function(n){return new(n||L)};static ɵdir=j({type:L,selectors:[["ng-template","foldRowDetail",""]]})}function E(e){return e instanceof HTMLElement&&e.hasAttribute("tabindex")}function Q(e,t){if(!(e instanceof Element))return;let n=e[t];for(;n!==null&&!E(n);)n=n[t];E(n)&&n.focus()}function V(e,t){if(!(e instanceof Element))return;let n=e.parentElement?.[t]??null;const o=t==="firstElementChild"?"nextElementSibling":"previousElementSibling";for(;n!==null&&!E(n);)n=n[o];E(n)&&n.focus()}const un={selectAll:"Select all rows",selectRow:"Select row",sortBy:e=>`Sort by ${e}`,loading:"Loading…",expandRow:"Show details",collapseRow:"Hide details"},mn=new X("FOLD_DATA_TABLE_LABELS",{factory:()=>un}),Cn=[[["","foldToolbar",""]]],bn=["[foldToolbar]"],O=(e,t)=>({$implicit:e,index:t}),I=(e,t)=>t.key;function U(e,t){return this.keyOf(t,e)}function hn(e,t){e&1&&(c(0,"caption",7),y(1),i()),e&2&&(d(),_n(" ",t," "))}function xn(e,t){if(e&1){const n=k();c(0,"th",8)(1,"fold-checkbox",11),M("checkedChange",function(){h(n);const l=r(2);return x(l.toggleAll())}),i()()}if(e&2){const n=r(2);d(),f("ariaLabel",n.l().selectAll)("checked",n.allSelected())("indeterminate",n.someSelected())}}function wn(e,t){if(e&1){const n=k();c(0,"button",15),M("click",function(){h(n);const l=r().$implicit,a=r(2);return x(a.sortChange.emit(l.key))}),c(1,"span"),y(2),i(),z(3,"fold-icon",16),i()}if(e&2){const n=r().$implicit,o=r(2);m("right",n.align==="right")("center",n.align==="center"),C("aria-label",o.l().sortBy(n.label)),d(2),T(n.label),d(),m("on",o.isSorted(n.key)),f("name",o.sortIcon(n.key))("size",14)}}function vn(e,t){if(e&1&&(c(0,"span",17),y(1),i()),e&2){const n=r().$implicit;m("right",n.align==="right")("center",n.align==="center"),d(),T(n.label)}}function On(e,t){if(e&1&&(c(0,"th",12),p(1,wn,4,10,"button",13)(2,vn,2,5,"span",14),i()),e&2){const n=t.$implicit,o=r(2);fn("width",n.width||null),m("is-primary-h",n.key===o.primaryKey()),C("aria-sort",n.sortable?o.ariaSort(n.key):null),d(),g(n.sortable?1:2)}}function yn(e,t){if(e&1&&(c(0,"th",10)(1,"span",18),y(2),i()()),e&2){const n=r(2);d(2),T(n.l().expandRow)}}function kn(e,t){if(e&1){const n=k();c(0,"td",20)(1,"fold-checkbox",23),M("click",function(l){return l.stopPropagation()})("checkedChange",function(){h(n);const l=r(),a=l.$implicit,_=l.$index,b=r(2);return x(b.toggleRow(a,_))}),i()()}if(e&2){const n=r(),o=n.$implicit,l=n.$index,a=r(2);d(),f("ariaLabel",a.labelFor(o))("checked",a.isRowSelected(o,l))}}function Mn(e,t){if(e&1&&(c(0,"th",26),w(1,27),i()),e&2){const n=r().$implicit,o=r(),l=o.$implicit,a=o.$index,_=r(2);m("right",n.align==="right")("center",n.align==="center")("truncate",n.truncate),f("ngClass",n.cellClass||""),C("data-label",n.label),d(),f("ngTemplateOutlet",_.cellTemplate(n.key))("ngTemplateOutletContext",v(10,O,l,a))}}function Pn(e,t){if(e&1&&(c(0,"td",28),w(1,27),i()),e&2){const n=r().$implicit,o=r(),l=o.$implicit,a=o.$index,_=r(2);m("right",n.align==="right")("center",n.align==="center")("truncate",n.truncate),f("ngClass",n.cellClass||""),C("data-label",n.label),d(),f("ngTemplateOutlet",_.cellTemplate(n.key))("ngTemplateOutletContext",v(10,O,l,a))}}function Tn(e,t){if(e&1&&p(0,Mn,2,13,"th",24)(1,Pn,2,13,"td",25),e&2){const n=t.$implicit,o=r(3);g(n.key===o.primaryKey()?0:1)}}function Fn(e,t){if(e&1){const n=k();c(0,"td",21)(1,"button",29),M("click",function(l){h(n);const a=r(),_=a.$implicit,b=a.$index,W=r(2);return l.stopPropagation(),x(W.toggleExpand(_,b))}),z(2,"fold-icon",30),i()()}if(e&2){const n=r(),o=n.$implicit,l=n.$index,a=r(2);d(),C("aria-expanded",a.isRowExpanded(o,l))("aria-controls",a.detailId(o,l))("aria-label",a.isRowExpanded(o,l)?a.l().collapseRow:a.l().expandRow),d(),f("name",a.isRowExpanded(o,l)?"chevron-up":"chevron-down")("size",16)}}function $n(e,t){if(e&1&&(c(0,"tr",22)(1,"td",31),w(2,27),i()()),e&2){const n=r(),o=n.$implicit,l=n.$index,a=r(2);d(),f("id",a.detailId(o,l)),C("colspan",a.colCount()),d(),f("ngTemplateOutlet",a.rowDetailTemplate())("ngTemplateOutletContext",v(4,O,o,l))}}function Dn(e,t){if(e&1){const n=k();c(0,"tr",19),M("click",function(){const l=h(n).$implicit,a=r(2);return x(a.onRowActivate(l))})("focus",function(){const l=h(n),a=l.$implicit,_=l.$index,b=r(2);return x(b.onRowFocus(a,_))})("keydown",function(l){const a=h(n).$implicit,_=r(2);return x(_.onRowKeydown(l,a))}),p(1,kn,2,2,"td",20),$(2,Tn,2,1,null,null,I),p(4,Fn,3,5,"td",21),i(),p(5,$n,3,7,"tr",22)}if(e&2){const n=t.$implicit,o=t.$index,l=r(2),a=l.toneOf(n);m("tone-warning",a==="warning")("tone-alert",a==="alert")("tone-success",a==="success")("clickable",l.clickable())("is-selected",l.selectable()&&l.isRowSelected(n,o)),C("tabindex",l.rowTabIndex(n,o))("aria-selected",l.selectable()?l.isRowSelected(n,o):null),d(),g(l.selectable()?1:-1),d(),D(l.columns()),d(2),g(l.expandable()?4:-1),d(),g(l.expandable()&&l.isRowExpanded(n,o)?5:-1)}}function Sn(e,t){if(e&1&&(c(0,"div",2)(1,"table",6),p(2,hn,2,1,"caption",7),c(3,"thead")(4,"tr"),p(5,xn,2,3,"th",8),$(6,On,3,6,"th",9,I),p(8,yn,3,1,"th",10),i()(),c(9,"tbody"),$(10,Dn,6,15,null,null,U,!0),i()()()),e&2){let n;const o=r();d(),C("aria-colcount",o.colCount()),d(),g((n=o.caption())?2:-1,n),d(3),g(o.selectable()?5:-1),d(),D(o.columns()),d(2),g(o.expandable()?8:-1),d(2),D(o.rows())}}function Rn(e,t){if(e&1){const n=k();c(0,"fold-checkbox",36),M("click",function(l){return l.stopPropagation()})("checkedChange",function(){h(n);const l=r(),a=l.$implicit,_=l.$index,b=r(2);return x(b.toggleRow(a,_))}),i()}if(e&2){const n=r(),o=n.$implicit,l=n.$index,a=r(2);f("ariaLabel",a.labelFor(o))("checked",a.isRowSelected(o,l))}}function Ln(e,t){if(e&1&&w(0,27),e&2){const n=r(),o=n.$implicit,l=n.$index;f("ngTemplateOutlet",t)("ngTemplateOutletContext",v(2,O,o,l))}}function En(e,t){if(e&1&&(c(0,"p",37),w(1,27),i()),e&2){const n=r(2),o=n.$implicit,l=n.$index,a=r(2);d(),f("ngTemplateOutlet",a.cellTemplate(t.key))("ngTemplateOutletContext",v(2,O,o,l))}}function An(e,t){if(e&1&&(c(0,"p",38),w(1,27),i()),e&2){const n=r(2),o=n.$implicit,l=n.$index,a=r(2);d(),f("ngTemplateOutlet",a.cellTemplate(t.key))("ngTemplateOutletContext",v(2,O,o,l))}}function zn(e,t){if(e&1&&(c(0,"div",40)(1,"dt"),y(2),i(),c(3,"dd"),w(4,27),i()()),e&2){const n=t.$implicit,o=r(2),l=o.$implicit,a=o.$index,_=r(2);d(2),T(n.label),d(),m("right",n.align==="right"),d(),f("ngTemplateOutlet",_.cellTemplate(n.key))("ngTemplateOutletContext",v(5,O,l,a))}}function Kn(e,t){if(e&1&&(p(0,En,2,5,"p",37),p(1,An,2,5,"p",38),c(2,"dl",39),$(3,zn,5,8,"div",40,I),i()),e&2){let n,o;const l=r(3);g((n=l.overlineColumn())?0:-1,n),d(),g((o=l.identityColumn())?1:-1,o),d(2),D(l.gridColumns())}}function jn(e,t){if(e&1&&(c(0,"div",31),w(1,27),i()),e&2){const n=r(2),o=n.$implicit,l=n.$index,a=r(2);f("id",a.detailId(o,l)),d(),f("ngTemplateOutlet",a.rowDetailTemplate())("ngTemplateOutletContext",v(3,O,o,l))}}function In(e,t){if(e&1){const n=k();c(0,"button",41),M("click",function(){h(n);const l=r(),a=l.$implicit,_=l.$index,b=r(2);return x(b.toggleExpand(a,_))}),z(1,"fold-icon",30),i(),p(2,jn,2,6,"div",31)}if(e&2){const n=r(),o=n.$implicit,l=n.$index,a=r(2);C("aria-expanded",a.isRowExpanded(o,l))("aria-controls",a.detailId(o,l))("aria-label",a.isRowExpanded(o,l)?a.l().collapseRow:a.l().expandRow),d(),f("name",a.isRowExpanded(o,l)?"chevron-up":"chevron-down")("size",16),d(),g(a.isRowExpanded(o,l)?2:-1)}}function Bn(e,t){if(e&1&&(c(0,"li",33),p(1,Rn,1,2,"fold-checkbox",34),c(2,"div",35),p(3,Ln,1,5,"ng-container",27)(4,Kn,5,2),p(5,In,3,6),i()()),e&2){let n;const o=t.$implicit,l=t.$index,a=r(2),_=a.toneOf(o);m("is-bare",a.rowCardChrome()==="none"&&a.rowCardTemplate())("tone-warning",_==="warning")("tone-alert",_==="alert")("tone-success",_==="success")("is-selected",a.selectable()&&a.isRowSelected(o,l)),C("aria-selected",a.selectable()?a.isRowSelected(o,l):null),d(),g(a.selectable()&&!(a.rowCardChrome()==="none"&&a.rowCardTemplate())?1:-1),d(2),g((n=a.rowCardTemplate())?3:4,n),d(2),g(a.expandable()?5:-1)}}function Nn(e,t){if(e&1&&(c(0,"ul",3),$(1,Bn,6,14,"li",32,U,!0),i()),e&2){const n=r();d(),D(n.rows())}}function qn(e,t){if(e&1&&(c(0,"div",4),z(1,"fold-spinner",42),i()),e&2){const n=r();d(),f("label",n.l().loading)}}function Hn(e,t){if(e&1&&(c(0,"div",44),y(1),i()),e&2){const n=r();d(),T(n.subtitle)}}function Qn(e,t){if(e&1&&(c(0,"div",5)(1,"div",43),y(2),i(),p(3,Hn,2,1,"div",44),i()),e&2){const n=t;d(2),T(n.title),d(),g(n.subtitle?3:-1)}}const Vn=600;class A{columns=s.required();rows=s.required();rowKey=s();rowTone=s();sort=s(null);empty=s();loading=s(!1,{transform:P});caption=s();clickable=s(!1,{transform:P});zebra=s(!1,{transform:P});hover=s(!0,{transform:P});narrowLayout=s("scroll");cardsAt=s(Vn,{transform:G});rowCardChrome=s("shell");mobileLayout=s("scroll");density=s("comfortable");stickyFirst=s(!1,{transform:P});selectable=s(!1,{transform:P});selected=B(new Set);selectionLabel=s();labels=s();expanded=B(new Set);expandMode=s("single");sortChange=N();rowClick=N();focusedKey=J(null);width=Y();isNarrow=pn(this.width,this.cardsAt);injectedLabels=F(mn);l=u(()=>({...this.injectedLabels,...this.labels()}));constructor(){q(()=>{}),q(()=>{})}cells=Z(S);cellMap=u(()=>{const t=new Map;for(const n of this.cells())t.set(n.foldCell(),n.template);return t});rowDetail=H(L);rowDetailTemplate=u(()=>this.rowDetail()?.template??null);expandable=u(()=>this.rowDetailTemplate()!==null);uid=F(nn).next("fold-data-table");detailId(t,n){return`${this.uid}-detail-${this.keyOf(t,n)}`}isRowExpanded(t,n){return this.expanded().has(this.keyOf(t,n))}toggleExpand(t,n){const o=this.keyOf(t,n),l=this.expanded();if(l.has(o)){const a=new Set(l);a.delete(o),this.expanded.set(a);return}this.expanded.set(this.expandMode()==="single"?new Set([o]):new Set(l).add(o))}rowCard=H(R);cardMode=u(()=>this.isNarrow()&&this.resolvedNarrowLayout()==="cards");resolvedNarrowLayout=u(()=>this.mobileLayout()==="scroll"?this.narrowLayout():"cards");identityColumn=u(()=>{const t=this.columns(),n=this.primaryKey();return t.find(o=>o.key===n)??t[0]??null});overlineColumn=u(()=>{const n=this.columns().filter(o=>o.key!==this.identityColumn()?.key)[0];return n?.truncate===!0?n:null});gridColumns=u(()=>{const t=new Set([this.identityColumn()?.key,this.overlineColumn()?.key].filter(n=>n!==void 0));return this.columns().filter(n=>!t.has(n.key))});rowCardTemplate=u(()=>this.rowCard()?.template??null);toolbarSurface=s("default");primaryKey=u(()=>this.columns()[0]?.key??"");colCount=u(()=>this.columns().length+(this.selectable()?1:0)+(this.expandable()?1:0));rowKeys=u(()=>this.rows().map((t,n)=>this.keyOf(t,n)));activeRowKey=u(()=>{const t=this.focusedKey(),n=this.rowKeys();return t!==null&&n.includes(t)?t:n[0]??null});cellTemplate(t){return this.cellMap().get(t)??null}keyOf(t,n){return this.rowKey()?.(t,n)??n}toneOf(t){return this.rowTone()?.(t)??null}isSorted(t){return this.sort()?.key===t}sortIcon(t){const n=this.sort();return n?.key!==t?"expand-all":n.dir==="asc"?"chevron-up":"chevron-down"}ariaSort(t){const n=this.sort();return n?.key!==t?"none":n.dir==="asc"?"ascending":"descending"}onRowActivate(t){this.clickable()&&this.rowClick.emit(t)}isRowSelected(t,n){return this.selected().has(this.keyOf(t,n))}allSelected=u(()=>this.rows().length>0&&this.rows().every((t,n)=>this.selected().has(this.keyOf(t,n))));someSelected=u(()=>!this.allSelected()&&this.rows().some((t,n)=>this.selected().has(this.keyOf(t,n))));toggleRow(t,n){const o=new Set(this.selected()),l=this.keyOf(t,n);o.has(l)?o.delete(l):o.add(l),this.selected.set(o)}toggleAll(){const t=new Set(this.selected()),n=!this.allSelected();this.rows().forEach((o,l)=>{const a=this.keyOf(o,l);n?t.add(a):t.delete(a)}),this.selected.set(t)}labelFor(t){return this.selectionLabel()?.(t)??this.l().selectRow}rowTabIndex(t,n){if(!this.clickable())return null;const o=this.activeRowKey();return o!==null&&this.keyOf(t,n)===o?0:-1}onRowFocus(t,n){this.focusedKey.set(this.keyOf(t,n))}onRowKeydown(t,n){if(t.target===t.currentTarget)switch(t.key){case"Enter":this.onRowActivate(n);break;case" ":this.onRowActivate(n),t.preventDefault();break;case"ArrowDown":Q(t.currentTarget,"nextElementSibling"),t.preventDefault();break;case"ArrowUp":Q(t.currentTarget,"previousElementSibling"),t.preventDefault();break;case"Home":V(t.currentTarget,"firstElementChild"),t.preventDefault();break;case"End":V(t.currentTarget,"lastElementChild"),t.preventDefault();break}}static ɵfac=function(n){return new(n||A)};static ɵcmp=tn({type:A,selectors:[["fold-data-table"]],contentQueries:function(n,o,l){n&1&&cn(l,o.cells,S,4)(l,o.rowDetail,L,5)(l,o.rowCard,R,5),n&2&&sn(3)},inputs:{columns:[1,"columns"],rows:[1,"rows"],rowKey:[1,"rowKey"],rowTone:[1,"rowTone"],sort:[1,"sort"],empty:[1,"empty"],loading:[1,"loading"],caption:[1,"caption"],clickable:[1,"clickable"],zebra:[1,"zebra"],hover:[1,"hover"],narrowLayout:[1,"narrowLayout"],cardsAt:[1,"cardsAt"],rowCardChrome:[1,"rowCardChrome"],mobileLayout:[1,"mobileLayout"],density:[1,"density"],stickyFirst:[1,"stickyFirst"],selectable:[1,"selectable"],selected:[1,"selected"],selectionLabel:[1,"selectionLabel"],labels:[1,"labels"],expanded:[1,"expanded"],expandMode:[1,"expandMode"],toolbarSurface:[1,"toolbarSurface"]},outputs:{selected:"selectedChange",expanded:"expandedChange",sortChange:"sortChange",rowClick:"rowClick"},ngContentSelectors:bn,decls:7,vars:21,consts:[[1,"folddt-wrap"],[1,"folddt-toolbar"],[1,"folddt-scroll"],["role","list",1,"folddt-cardlist"],[1,"folddt-loading"],[1,"folddt-empty"],[1,"folddt"],[1,"folddt-caption"],["scope","col",1,"folddt-select-h"],["scope","col",3,"is-primary-h","width"],["scope","col",1,"folddt-expand-h"],["size","sm",3,"checkedChange","ariaLabel","checked","indeterminate"],["scope","col"],["type","button",1,"folddt-th-sort",3,"right","center"],[1,"folddt-th-plain",3,"right","center"],["type","button",1,"folddt-th-sort",3,"click"],[1,"folddt-arrow",3,"name","size"],[1,"folddt-th-plain"],[1,"folddt-sr"],[1,"folddt-row",3,"click","focus","keydown"],[1,"folddt-cell","folddt-cell--select"],[1,"folddt-cell","folddt-cell--expand"],[1,"folddt-detail-row"],["size","sm",3,"click","checkedChange","ariaLabel","checked"],["scope","row",1,"folddt-cell","is-primary",3,"right","center","truncate","ngClass"],[1,"folddt-cell",3,"right","center","truncate","ngClass"],["scope","row",1,"folddt-cell","is-primary",3,"ngClass"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"folddt-cell",3,"ngClass"],["type","button",1,"folddt-expand",3,"click"],[3,"name","size"],[1,"folddt-detail",3,"id"],[1,"folddt-card",3,"is-bare","tone-warning","tone-alert","tone-success","is-selected"],[1,"folddt-card"],["size","sm",1,"folddt-card-select",3,"ariaLabel","checked"],[1,"folddt-card-body"],["size","sm",1,"folddt-card-select",3,"click","checkedChange","ariaLabel","checked"],[1,"folddt-card-overline"],[1,"folddt-card-identity"],[1,"folddt-card-grid"],[1,"folddt-card-pair"],["type","button",1,"folddt-expand","folddt-expand--card",3,"click"],[3,"label"],[1,"folddt-empty-t"],[1,"folddt-empty-s"]],template:function(n,o){if(n&1&&(rn(Cn),c(0,"div",0)(1,"div",1),dn(2),i(),p(3,Sn,12,4,"div",2)(4,Nn,3,0,"ul",3),p(5,qn,2,1,"div",4)(6,Qn,4,2,"div",5),i()),n&2){let l;m("folddt--zebra",o.zebra())("folddt--hover",o.hover())("folddt--narrow",o.isNarrow())("folddt--compact",o.density()==="compact")("folddt--sticky-first",o.stickyFirst())("folddt--select",o.selectable()),d(),m("folddt-toolbar--sunken",o.toolbarSurface()==="sunken")("folddt-toolbar--raised",o.toolbarSurface()==="raised")("folddt-toolbar--accent",o.toolbarSurface()==="accent"),C("data-surface",o.toolbarSurface()==="accent"?"accent":null),d(2),g(o.cardMode()?4:3),d(2),g(o.loading()?5:(l=o.rows().length===0&&o.empty())?6:-1,l)}},dependencies:[on,en,ln,an,gn],styles:[`@charset "UTF-8";



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
}





.folddt-detail-row[_ngcontent-%COMP%]    > .folddt-detail[_ngcontent-%COMP%] {
  padding: 0;
  border-top: 0;
  background: var(--fold-color-surface-sunken);
  box-shadow: inset 0 1px 0 var(--fold-color-border-subtle);
}




.folddt-detail[_ngcontent-%COMP%] {
  padding: var(--fold-data-table-detail-padding, var(--fold-space-md) var(--fold-space-lg));
}

.folddt-cardlist[_ngcontent-%COMP%]   .folddt-detail[_ngcontent-%COMP%] {
  margin-top: var(--fold-space-sm);
  border-radius: var(--fold-radius-md);
  background: var(--fold-color-surface-sunken);
  padding: var(--fold-space-md);
}




.folddt-expand-h[_ngcontent-%COMP%] {
  width: 1%;
}

.folddt-sr[_ngcontent-%COMP%] {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

.folddt-cell--expand[_ngcontent-%COMP%] {
  width: 1%;
  text-align: right;
}

.folddt-expand[_ngcontent-%COMP%] {
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: 1px solid var(--fold-color-border);
  border-radius: var(--fold-radius-pill);
  background: var(--fold-color-surface-card);
  color: var(--fold-color-text-muted);
  cursor: pointer;
}

.folddt-expand[_ngcontent-%COMP%]:hover {
  color: var(--fold-color-text);
}



.folddt-card[_ngcontent-%COMP%] {
  position: relative;
}

.folddt-expand--card[_ngcontent-%COMP%] {
  position: absolute;
  top: var(--fold-space-sm);
  right: var(--fold-space-sm);
}`]})}const Gn=Object.freeze(Object.defineProperty({__proto__:null,FoldDataTableComponent:A},Symbol.toStringTag,{value:"Module"}));export{A as F,S as a,R as b,L as c,Gn as d};
