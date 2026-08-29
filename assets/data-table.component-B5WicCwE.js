import{u as s,X as $,aO as I,V as B,aj as G,a0 as T,aE as J,af as q,ao as H,s as Y,aF as Z,A as g,aA as j,aP as nn,ap as Q,ag as tn,ɵ as on,aQ as en,aq as ln,F as an,ah as rn,a1 as dn,d,a2 as cn,f as c,w as _,L as C,j as i,D as b,x as f,as as sn,a9 as _n,i as D,q as a,o as S,g as K,m as p,e as u,k as P,l as F,E as y,B as M,W as fn,N as x,O as w,at as v,aI as O}from"./index-CvaVehfM.js";import{f as pn}from"./fold-at-ZGceqlJy.js";import{FoldCheckboxComponent as gn}from"./checkbox.component-St6J80Ud.js";class R{foldCell=s.required();template=$(I);static ɵfac=function(n){return new(n||R)};static ɵdir=B({type:R,selectors:[["ng-template","foldCell",""]],inputs:{foldCell:[1,"foldCell"]}})}class L{template=$(I);static ɵfac=function(n){return new(n||L)};static ɵdir=B({type:L,selectors:[["ng-template","foldRowCard",""]]})}class E{template=$(I);static ɵfac=function(n){return new(n||E)};static ɵdir=B({type:E,selectors:[["ng-template","foldRowDetail",""]]})}function A(e){return e instanceof HTMLElement&&e.hasAttribute("tabindex")}function V(e,o){if(!(e instanceof Element))return;let n=e[o];for(;n!==null&&!A(n);)n=n[o];A(n)&&n.focus()}function U(e,o){if(!(e instanceof Element))return;let n=e.parentElement?.[o]??null;const t=o==="firstElementChild"?"nextElementSibling":"previousElementSibling";for(;n!==null&&!A(n);)n=n[t];A(n)&&n.focus()}const mn={selectAll:"Select all rows",selectRow:"Select row",sortBy:e=>`Sort by ${e}`,loading:"Loading…",expandRow:"Show details",collapseRow:"Hide details"},un=new G("FOLD_DATA_TABLE_LABELS",{factory:()=>mn}),Cn=[[["","foldToolbar",""]]],bn=["[foldToolbar]"],k=(e,o)=>({$implicit:e,index:o}),N=(e,o)=>o.key;function W(e,o){return this.keyOf(o,e)}function hn(e,o){e&1&&(d(0,"caption",7),u(1),c()),e&2&&(i(),F(" ",o," "))}function xn(e,o){if(e&1){const n=y();d(0,"th",8)(1,"fold-checkbox",11),M("checkedChange",function(){x(n);const l=a(2);return w(l.toggleAll())}),c()()}if(e&2){const n=a(2);i(),p("ariaLabel",n.l().selectAll)("checked",n.allSelected())("indeterminate",n.someSelected())}}function wn(e,o){if(e&1){const n=y();d(0,"button",15),M("click",function(){x(n);const l=a().$implicit,r=a(2);return w(r.sortChange.emit(l.key))}),d(1,"span"),u(2),c(),K(3,"fold-icon",16),c()}if(e&2){const n=a().$implicit,t=a(2);C("is-numeric",n.numeric)("right",n.align==="right")("center",n.align==="center"),b("aria-label",t.l().sortBy(n.label)),i(2),P(n.label),i(),C("on",t.isSorted(n.key)),p("name",t.sortIcon(n.key))("size",14)}}function vn(e,o){if(e&1&&(d(0,"span",17),u(1),c()),e&2){const n=a().$implicit;C("is-numeric",n.numeric)("right",n.align==="right")("center",n.align==="center"),i(),P(n.label)}}function On(e,o){if(e&1&&(d(0,"th",12),_(1,wn,4,12,"button",13)(2,vn,2,7,"span",14),c()),e&2){const n=o.$implicit,t=a(2);fn("width",n.width||null),C("is-primary-h",n.key===t.primaryKey()),b("aria-sort",n.sortable?t.ariaSort(n.key):null),i(),f(n.sortable?1:2)}}function kn(e,o){if(e&1&&(d(0,"th",10)(1,"span",18),u(2),c()()),e&2){const n=a(2);i(2),P(n.l().expandRow)}}function yn(e,o){if(e&1){const n=y();d(0,"td",20)(1,"fold-checkbox",23),M("click",function(l){return l.stopPropagation()})("checkedChange",function(){x(n);const l=a(),r=l.$implicit,m=l.$index,h=a(2);return w(h.toggleRow(r,m))}),c()()}if(e&2){const n=a(),t=n.$implicit,l=n.$index,r=a(2);i(),p("ariaLabel",r.labelFor(t))("checked",r.isRowSelected(t,l))}}function Mn(e,o){if(e&1&&v(0,27),e&2){const n=a(3),t=n.$implicit,l=n.$index;p("ngTemplateOutlet",o)("ngTemplateOutletContext",O(2,k,t,l))}}function Tn(e,o){if(e&1&&u(0),e&2){const n=a(2).$implicit,t=a().$implicit,l=a(2);F(" ",l.cellText(n,t)," ")}}function Pn(e,o){if(e&1&&(d(0,"th",26),_(1,Mn,1,5,"ng-container",27)(2,Tn,1,1),c()),e&2){let n;const t=a().$implicit,l=a(3);C("is-numeric",t.numeric)("right",t.align==="right")("center",t.align==="center")("truncate",t.truncate),p("ngClass",t.cellClass||""),b("data-label",t.label),i(),f((n=l.cellTemplate(t.key))?1:2,n)}}function Fn(e,o){if(e&1&&v(0,27),e&2){const n=a(3),t=n.$implicit,l=n.$index;p("ngTemplateOutlet",o)("ngTemplateOutletContext",O(2,k,t,l))}}function $n(e,o){if(e&1&&u(0),e&2){const n=a(2).$implicit,t=a().$implicit,l=a(2);F(" ",l.cellText(n,t)," ")}}function Dn(e,o){if(e&1&&(d(0,"td",28),_(1,Fn,1,5,"ng-container",27)(2,$n,1,1),c()),e&2){let n;const t=a().$implicit,l=a(3);C("is-numeric",t.numeric)("right",t.align==="right")("center",t.align==="center")("truncate",t.truncate),p("ngClass",t.cellClass||""),b("data-label",t.label),i(),f((n=l.cellTemplate(t.key))?1:2,n)}}function Sn(e,o){if(e&1&&_(0,Pn,3,11,"th",24)(1,Dn,3,11,"td",25),e&2){const n=o.$implicit,t=a(3);f(n.key===t.primaryKey()?0:1)}}function Rn(e,o){if(e&1){const n=y();d(0,"td",21)(1,"button",29),M("click",function(l){x(n);const r=a(),m=r.$implicit,h=r.$index,X=a(2);return l.stopPropagation(),w(X.toggleExpand(m,h))}),K(2,"fold-icon",30),c()()}if(e&2){const n=a(),t=n.$implicit,l=n.$index,r=a(2);i(),b("aria-expanded",r.isRowExpanded(t,l))("aria-controls",r.detailId(t,l))("aria-label",r.isRowExpanded(t,l)?r.l().collapseRow:r.l().expandRow),i(),p("name",r.isRowExpanded(t,l)?"chevron-up":"chevron-down")("size",16)}}function Ln(e,o){if(e&1&&(d(0,"tr",22)(1,"td",31),v(2,27),c()()),e&2){const n=a(),t=n.$implicit,l=n.$index,r=a(2);i(),p("id",r.detailId(t,l)),b("colspan",r.colCount()),i(),p("ngTemplateOutlet",r.rowDetailTemplate())("ngTemplateOutletContext",O(4,k,t,l))}}function En(e,o){if(e&1){const n=y();d(0,"tr",19),M("click",function(){const l=x(n).$implicit,r=a(2);return w(r.onRowActivate(l))})("focus",function(){const l=x(n),r=l.$implicit,m=l.$index,h=a(2);return w(h.onRowFocus(r,m))})("keydown",function(l){const r=x(n).$implicit,m=a(2);return w(m.onRowKeydown(l,r))}),_(1,yn,2,2,"td",20),D(2,Sn,2,1,null,null,N),_(4,Rn,3,5,"td",21),c(),_(5,Ln,3,7,"tr",22)}if(e&2){const n=o.$implicit,t=o.$index,l=a(2),r=l.toneOf(n);C("tone-warning",r==="warning")("tone-alert",r==="alert")("tone-success",r==="success")("clickable",l.clickable())("is-selected",l.selectable()&&l.isRowSelected(n,t)),b("tabindex",l.rowTabIndex(n,t))("aria-selected",l.selectable()?l.isRowSelected(n,t):null),i(),f(l.selectable()?1:-1),i(),S(l.columns()),i(2),f(l.expandable()?4:-1),i(),f(l.expandable()&&l.isRowExpanded(n,t)?5:-1)}}function An(e,o){if(e&1&&(d(0,"div",2)(1,"table",6),_(2,hn,2,1,"caption",7),d(3,"thead")(4,"tr"),_(5,xn,2,3,"th",8),D(6,On,3,6,"th",9,N),_(8,kn,3,1,"th",10),c()(),d(9,"tbody"),D(10,En,6,15,null,null,W,!0),c()()()),e&2){let n;const t=a();i(),b("aria-colcount",t.colCount()),i(),f((n=t.caption())?2:-1,n),i(3),f(t.selectable()?5:-1),i(),S(t.columns()),i(2),f(t.expandable()?8:-1),i(2),S(t.rows())}}function zn(e,o){if(e&1){const n=y();d(0,"fold-checkbox",36),M("click",function(l){return l.stopPropagation()})("checkedChange",function(){x(n);const l=a(),r=l.$implicit,m=l.$index,h=a(2);return w(h.toggleRow(r,m))}),c()}if(e&2){const n=a(),t=n.$implicit,l=n.$index,r=a(2);p("ariaLabel",r.labelFor(t))("checked",r.isRowSelected(t,l))}}function Kn(e,o){if(e&1&&v(0,27),e&2){const n=a(),t=n.$implicit,l=n.$index;p("ngTemplateOutlet",o)("ngTemplateOutletContext",O(2,k,t,l))}}function jn(e,o){if(e&1&&v(0,27),e&2){const n=a(3),t=n.$implicit,l=n.$index;p("ngTemplateOutlet",o)("ngTemplateOutletContext",O(2,k,t,l))}}function In(e,o){if(e&1&&u(0),e&2){const n=a(),t=a(2).$implicit,l=a(2);F(" ",l.cellText(n,t)," ")}}function Bn(e,o){if(e&1&&(d(0,"p",37),_(1,jn,1,5,"ng-container",27)(2,In,1,1),c()),e&2){let n;const t=a(4);i(),f((n=t.cellTemplate(o.key))?1:2,n)}}function Nn(e,o){if(e&1&&v(0,27),e&2){const n=a(3),t=n.$implicit,l=n.$index;p("ngTemplateOutlet",o)("ngTemplateOutletContext",O(2,k,t,l))}}function qn(e,o){if(e&1&&u(0),e&2){const n=a(),t=a(2).$implicit,l=a(2);F(" ",l.cellText(n,t)," ")}}function Hn(e,o){if(e&1&&(d(0,"p",38),_(1,Nn,1,5,"ng-container",27)(2,qn,1,1),c()),e&2){let n;const t=a(4);i(),f((n=t.cellTemplate(o.key))?1:2,n)}}function Qn(e,o){if(e&1&&v(0,27),e&2){const n=a(3),t=n.$implicit,l=n.$index;p("ngTemplateOutlet",o)("ngTemplateOutletContext",O(2,k,t,l))}}function Vn(e,o){if(e&1&&u(0),e&2){const n=a().$implicit,t=a(2).$implicit,l=a(2);F(" ",l.cellText(n,t)," ")}}function Un(e,o){if(e&1&&(d(0,"div",40)(1,"dt"),u(2),c(),d(3,"dd"),_(4,Qn,1,5,"ng-container",27)(5,Vn,1,1),c()()),e&2){let n;const t=o.$implicit,l=a(4);i(2),P(t.label),i(),C("is-numeric",t.numeric)("right",t.align==="right"),i(),f((n=l.cellTemplate(t.key))?4:5,n)}}function Wn(e,o){if(e&1&&(_(0,Bn,3,1,"p",37),_(1,Hn,3,1,"p",38),d(2,"dl",39),D(3,Un,6,6,"div",40,N),c()),e&2){let n,t;const l=a(3);f((n=l.overlineColumn())?0:-1,n),i(),f((t=l.identityColumn())?1:-1,t),i(2),S(l.gridColumns())}}function Xn(e,o){if(e&1&&(d(0,"div",31),v(1,27),c()),e&2){const n=a(2),t=n.$implicit,l=n.$index,r=a(2);p("id",r.detailId(t,l)),i(),p("ngTemplateOutlet",r.rowDetailTemplate())("ngTemplateOutletContext",O(3,k,t,l))}}function Gn(e,o){if(e&1){const n=y();d(0,"button",41),M("click",function(){x(n);const l=a(),r=l.$implicit,m=l.$index,h=a(2);return w(h.toggleExpand(r,m))}),K(1,"fold-icon",30),c(),_(2,Xn,2,6,"div",31)}if(e&2){const n=a(),t=n.$implicit,l=n.$index,r=a(2);b("aria-expanded",r.isRowExpanded(t,l))("aria-controls",r.detailId(t,l))("aria-label",r.isRowExpanded(t,l)?r.l().collapseRow:r.l().expandRow),i(),p("name",r.isRowExpanded(t,l)?"chevron-up":"chevron-down")("size",16),i(),f(r.isRowExpanded(t,l)?2:-1)}}function Jn(e,o){if(e&1&&(d(0,"li",33),_(1,zn,1,2,"fold-checkbox",34),d(2,"div",35),_(3,Kn,1,5,"ng-container",27)(4,Wn,5,2),_(5,Gn,3,6),c()()),e&2){let n;const t=o.$implicit,l=o.$index,r=a(2),m=r.toneOf(t);C("is-bare",r.rowCardChrome()==="none"&&r.rowCardTemplate())("tone-warning",m==="warning")("tone-alert",m==="alert")("tone-success",m==="success")("is-selected",r.selectable()&&r.isRowSelected(t,l)),b("aria-selected",r.selectable()?r.isRowSelected(t,l):null),i(),f(r.selectable()&&!(r.rowCardChrome()==="none"&&r.rowCardTemplate())?1:-1),i(2),f((n=r.rowCardTemplate())?3:4,n),i(2),f(r.expandable()?5:-1)}}function Yn(e,o){if(e&1&&(d(0,"ul",3),D(1,Jn,6,14,"li",32,W,!0),c()),e&2){const n=a();i(),S(n.rows())}}function Zn(e,o){if(e&1&&(d(0,"div",4),K(1,"fold-spinner",42),c()),e&2){const n=a();i(),p("label",n.l().loading)}}function nt(e,o){if(e&1&&(d(0,"div",44),u(1),c()),e&2){const n=a();i(),P(n.subtitle)}}function tt(e,o){if(e&1&&(d(0,"div",5)(1,"div",43),u(2),c(),_(3,nt,2,1,"div",44),c()),e&2){const n=o;i(2),P(n.title),i(),f(n.subtitle?3:-1)}}const ot=600;class z{columns=s.required();rows=s.required();rowKey=s();rowTone=s();sort=s(null);empty=s();loading=s(!1,{transform:T});caption=s();clickable=s(!1,{transform:T});zebra=s(!1,{transform:T});hover=s(!0,{transform:T});narrowLayout=s("scroll");cardsAt=s(ot,{transform:J});rowCardChrome=s("shell");mobileLayout=s("scroll");density=s("comfortable");stickyFirst=s(!1,{transform:T});selectable=s(!1,{transform:T});selected=q(new Set);selectionLabel=s();labels=s();expanded=q(new Set);expandMode=s("single");sortChange=H();rowClick=H();focusedKey=Y(null);width=Z();isNarrow=pn(this.width,this.cardsAt);injectedLabels=$(un);l=g(()=>({...this.injectedLabels,...this.labels()}));constructor(){j(()=>{}),j(()=>{}),j(()=>{})}cells=nn(R);cellMap=g(()=>{const o=new Map;for(const n of this.cells())o.set(n.foldCell(),n.template);return o});rowDetail=Q(E);rowDetailTemplate=g(()=>this.rowDetail()?.template??null);expandable=g(()=>this.rowDetailTemplate()!==null);uid=$(tn).next("fold-data-table");detailId(o,n){return`${this.uid}-detail-${this.keyOf(o,n)}`}isRowExpanded(o,n){return this.expanded().has(this.keyOf(o,n))}toggleExpand(o,n){const t=this.keyOf(o,n),l=this.expanded();if(l.has(t)){const r=new Set(l);r.delete(t),this.expanded.set(r);return}this.expanded.set(this.expandMode()==="single"?new Set([t]):new Set(l).add(t))}rowCard=Q(L);cardMode=g(()=>this.isNarrow()&&this.resolvedNarrowLayout()==="cards");resolvedNarrowLayout=g(()=>this.mobileLayout()==="scroll"?this.narrowLayout():"cards");identityColumn=g(()=>{const o=this.columns(),n=this.primaryKey();return o.find(t=>t.key===n)??o[0]??null});overlineColumn=g(()=>{const n=this.columns().filter(t=>t.key!==this.identityColumn()?.key)[0];return n?.truncate===!0?n:null});gridColumns=g(()=>{const o=new Set([this.identityColumn()?.key,this.overlineColumn()?.key].filter(n=>n!==void 0));return this.columns().filter(n=>!o.has(n.key))});rowCardTemplate=g(()=>this.rowCard()?.template??null);toolbarSurface=s("default");primaryKey=g(()=>this.columns()[0]?.key??"");colCount=g(()=>this.columns().length+(this.selectable()?1:0)+(this.expandable()?1:0));rowKeys=g(()=>this.rows().map((o,n)=>this.keyOf(o,n)));activeRowKey=g(()=>{const o=this.focusedKey(),n=this.rowKeys();return o!==null&&n.includes(o)?o:n[0]??null});cellTemplate(o){return this.cellMap().get(o)??null}cellText(o,n){const t=o.value;return t===void 0?"":String(t(n))}keyOf(o,n){return this.rowKey()?.(o,n)??n}toneOf(o){return this.rowTone()?.(o)??null}isSorted(o){return this.sort()?.key===o}sortIcon(o){const n=this.sort();return n?.key!==o?"expand-all":n.dir==="asc"?"chevron-up":"chevron-down"}ariaSort(o){const n=this.sort();return n?.key!==o?"none":n.dir==="asc"?"ascending":"descending"}onRowActivate(o){this.clickable()&&this.rowClick.emit(o)}isRowSelected(o,n){return this.selected().has(this.keyOf(o,n))}allSelected=g(()=>this.rows().length>0&&this.rows().every((o,n)=>this.selected().has(this.keyOf(o,n))));someSelected=g(()=>!this.allSelected()&&this.rows().some((o,n)=>this.selected().has(this.keyOf(o,n))));toggleRow(o,n){const t=new Set(this.selected()),l=this.keyOf(o,n);t.has(l)?t.delete(l):t.add(l),this.selected.set(t)}toggleAll(){const o=new Set(this.selected()),n=!this.allSelected();this.rows().forEach((t,l)=>{const r=this.keyOf(t,l);n?o.add(r):o.delete(r)}),this.selected.set(o)}labelFor(o){return this.selectionLabel()?.(o)??this.l().selectRow}rowTabIndex(o,n){if(!this.clickable())return null;const t=this.activeRowKey();return t!==null&&this.keyOf(o,n)===t?0:-1}onRowFocus(o,n){this.focusedKey.set(this.keyOf(o,n))}onRowKeydown(o,n){if(o.target===o.currentTarget)switch(o.key){case"Enter":this.onRowActivate(n);break;case" ":this.onRowActivate(n),o.preventDefault();break;case"ArrowDown":V(o.currentTarget,"nextElementSibling"),o.preventDefault();break;case"ArrowUp":V(o.currentTarget,"previousElementSibling"),o.preventDefault();break;case"Home":U(o.currentTarget,"firstElementChild"),o.preventDefault();break;case"End":U(o.currentTarget,"lastElementChild"),o.preventDefault();break}}static ɵfac=function(n){return new(n||z)};static ɵcmp=on({type:z,selectors:[["fold-data-table"]],contentQueries:function(n,t,l){n&1&&sn(l,t.cells,R,4)(l,t.rowDetail,E,5)(l,t.rowCard,L,5),n&2&&_n(3)},inputs:{columns:[1,"columns"],rows:[1,"rows"],rowKey:[1,"rowKey"],rowTone:[1,"rowTone"],sort:[1,"sort"],empty:[1,"empty"],loading:[1,"loading"],caption:[1,"caption"],clickable:[1,"clickable"],zebra:[1,"zebra"],hover:[1,"hover"],narrowLayout:[1,"narrowLayout"],cardsAt:[1,"cardsAt"],rowCardChrome:[1,"rowCardChrome"],mobileLayout:[1,"mobileLayout"],density:[1,"density"],stickyFirst:[1,"stickyFirst"],selectable:[1,"selectable"],selected:[1,"selected"],selectionLabel:[1,"selectionLabel"],labels:[1,"labels"],expanded:[1,"expanded"],expandMode:[1,"expandMode"],toolbarSurface:[1,"toolbarSurface"]},outputs:{selected:"selectedChange",expanded:"expandedChange",sortChange:"sortChange",rowClick:"rowClick"},ngContentSelectors:bn,decls:7,vars:21,consts:[[1,"folddt-wrap"],[1,"folddt-toolbar"],[1,"folddt-scroll"],["role","list",1,"folddt-cardlist"],[1,"folddt-loading"],[1,"folddt-empty"],[1,"folddt"],[1,"folddt-caption"],["scope","col",1,"folddt-select-h"],["scope","col",3,"is-primary-h","width"],["scope","col",1,"folddt-expand-h"],["size","sm",3,"checkedChange","ariaLabel","checked","indeterminate"],["scope","col"],["type","button",1,"folddt-th-sort",3,"is-numeric","right","center"],[1,"folddt-th-plain",3,"is-numeric","right","center"],["type","button",1,"folddt-th-sort",3,"click"],[1,"folddt-arrow",3,"name","size"],[1,"folddt-th-plain"],[1,"folddt-sr"],[1,"folddt-row",3,"click","focus","keydown"],[1,"folddt-cell","folddt-cell--select"],[1,"folddt-cell","folddt-cell--expand"],[1,"folddt-detail-row"],["size","sm",3,"click","checkedChange","ariaLabel","checked"],["scope","row",1,"folddt-cell","is-primary",3,"is-numeric","right","center","truncate","ngClass"],[1,"folddt-cell",3,"is-numeric","right","center","truncate","ngClass"],["scope","row",1,"folddt-cell","is-primary",3,"ngClass"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"folddt-cell",3,"ngClass"],["type","button",1,"folddt-expand",3,"click"],[3,"name","size"],[1,"folddt-detail",3,"id"],[1,"folddt-card",3,"is-bare","tone-warning","tone-alert","tone-success","is-selected"],[1,"folddt-card"],["size","sm",1,"folddt-card-select",3,"ariaLabel","checked"],[1,"folddt-card-body"],["size","sm",1,"folddt-card-select",3,"click","checkedChange","ariaLabel","checked"],[1,"folddt-card-overline"],[1,"folddt-card-identity"],[1,"folddt-card-grid"],[1,"folddt-card-pair"],["type","button",1,"folddt-expand","folddt-expand--card",3,"click"],[3,"label"],[1,"folddt-empty-t"],[1,"folddt-empty-s"]],template:function(n,t){if(n&1&&(dn(Cn),d(0,"div",0)(1,"div",1),cn(2),c(),_(3,An,12,4,"div",2)(4,Yn,3,0,"ul",3),_(5,Zn,2,1,"div",4)(6,tt,4,2,"div",5),c()),n&2){let l;C("folddt--zebra",t.zebra())("folddt--hover",t.hover())("folddt--narrow",t.isNarrow())("folddt--compact",t.density()==="compact")("folddt--sticky-first",t.stickyFirst())("folddt--select",t.selectable()),i(),C("folddt-toolbar--sunken",t.toolbarSurface()==="sunken")("folddt-toolbar--raised",t.toolbarSurface()==="raised")("folddt-toolbar--accent",t.toolbarSurface()==="accent"),b("data-surface",t.toolbarSurface()==="accent"?"accent":null),i(2),f(t.cardMode()?4:3),i(2),f(t.loading()?5:(l=t.rows().length===0&&t.empty())?6:-1,l)}},dependencies:[en,ln,an,rn,gn],styles:[`@charset "UTF-8";



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



.folddt-th-sort.is-numeric[_ngcontent-%COMP%], 
.folddt-th-sort.right[_ngcontent-%COMP%] {
  justify-content: flex-end;
}

.folddt-th-plain.is-numeric[_ngcontent-%COMP%], 
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









.folddt-row[_ngcontent-%COMP%]   .folddt-cell[_ngcontent-%COMP%] {
  background: var(--fold-data-table-row-bg, transparent);
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
  background: var(--fold-data-table-row-hover-bg, var(--fold-color-surface-raised));
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





.folddt-cell.is-numeric[_ngcontent-%COMP%] {
  text-align: right;
  font-variant-numeric: tabular-nums;
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

.folddt-card-grid[_ngcontent-%COMP%]   dd.is-numeric[_ngcontent-%COMP%] {
  font-variant-numeric: tabular-nums;
  text-align: right;
}

.folddt-card-grid[_ngcontent-%COMP%]   dd.right[_ngcontent-%COMP%] {
  font-variant-numeric: tabular-nums;
}











.folddt-detail-row[_ngcontent-%COMP%]    > .folddt-detail[_ngcontent-%COMP%] {
  border-top: 0;
  background: var(--fold-data-table-detail-bg, var(--fold-color-surface-sunken));
  box-shadow: inset 0 1px 0 var(--fold-color-border-subtle);
}




.folddt-detail[_ngcontent-%COMP%] {
  padding: var(--fold-data-table-detail-padding, var(--fold-space-md) var(--fold-space-lg));
}

.folddt-cardlist[_ngcontent-%COMP%]   .folddt-detail[_ngcontent-%COMP%] {
  margin-top: var(--fold-space-sm);
  border-radius: var(--fold-radius-md);
  background: var(--fold-data-table-detail-bg, var(--fold-color-surface-sunken));
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
}`]})}const rt=Object.freeze(Object.defineProperty({__proto__:null,FoldDataTableComponent:z},Symbol.toStringTag,{value:"Module"}));export{z as F,R as a,L as b,E as c,rt as d};
