import{u as s,X as P,aO as K,V as j,aj as J,a0 as M,aE as Y,af as V,ao as U,s as Z,aF as nn,A as m,aA as q,aP as tn,ap as H,ag as on,ɵ as en,aQ as ln,aq as an,F as rn,ah as dn,a1 as cn,d,a2 as sn,f as c,w as _,L as w,j as i,D as x,x as f,as as _n,a9 as fn,i as D,q as r,o as R,g as I,m as u,e as h,k as F,l as $,E as y,B as v,W as pn,N as C,O as b,at as O,aI as T}from"./index-ODrB6arQ.js";import{f as un}from"./fold-at-v6Of3p4G.js";import{FoldCheckboxComponent as gn}from"./checkbox.component-4K0m6afy.js";class S{foldCell=s.required();template=P(K);static ɵfac=function(n){return new(n||S)};static ɵdir=j({type:S,selectors:[["ng-template","foldCell",""]],inputs:{foldCell:[1,"foldCell"]}})}class L{template=P(K);static ɵfac=function(n){return new(n||L)};static ɵdir=j({type:L,selectors:[["ng-template","foldRowCard",""]]})}class A{template=P(K);static ɵfac=function(n){return new(n||A)};static ɵdir=j({type:A,selectors:[["ng-template","foldRowDetail",""]]})}class E{template=P(K);static ɵfac=function(n){return new(n||E)};static ɵdir=j({type:E,selectors:[["ng-template","foldRowNote",""]]})}function z(l){return l instanceof HTMLElement&&l.hasAttribute("tabindex")}function W(l,o){if(!(l instanceof Element))return;let n=l[o];for(;n!==null&&!z(n);)n=n[o];z(n)&&n.focus()}function X(l,o){if(!(l instanceof Element))return;let n=l.parentElement?.[o]??null;const t=o==="firstElementChild"?"nextElementSibling":"previousElementSibling";for(;n!==null&&!z(n);)n=n[t];z(n)&&n.focus()}const mn={selectAll:"Select all rows",selectRow:"Select row",sortBy:l=>`Sort by ${l}`,loading:"Loading…",expandRow:"Show details",collapseRow:"Hide details"},Cn=new J("FOLD_DATA_TABLE_LABELS",{factory:()=>mn}),bn=[[["","foldToolbar",""]]],xn=["[foldToolbar]"],k=(l,o)=>({$implicit:l,index:o}),Q=(l,o)=>o.key;function G(l,o){return this.keyOf(o,l)}function hn(l,o){l&1&&(d(0,"caption",7),h(1),c()),l&2&&(i(),$(" ",o," "))}function wn(l,o){if(l&1){const n=y();d(0,"th",8)(1,"fold-checkbox",11),v("checkedChange",function(){C(n);const e=r(2);return b(e.toggleAll())}),c()()}if(l&2){const n=r(2);i(),u("ariaLabel",n.l().selectAll)("checked",n.allSelected())("indeterminate",n.someSelected())}}function vn(l,o){if(l&1){const n=y();d(0,"button",15),v("click",function(){C(n);const e=r().$implicit,a=r(2);return b(a.sortChange.emit(e.key))}),d(1,"span"),h(2),c(),I(3,"fold-icon",16),c()}if(l&2){const n=r().$implicit,t=r(2);w("is-numeric",n.numeric)("right",n.align==="right")("center",n.align==="center"),x("aria-label",t.l().sortBy(n.label)),i(2),F(n.label),i(),w("on",t.isSorted(n.key)),u("name",t.sortIcon(n.key))("size",14)}}function On(l,o){if(l&1&&(d(0,"span",17),h(1),c()),l&2){const n=r().$implicit;w("is-numeric",n.numeric)("right",n.align==="right")("center",n.align==="center"),i(),F(n.label)}}function Tn(l,o){if(l&1&&(d(0,"th",12),_(1,vn,4,12,"button",13)(2,On,2,7,"span",14),c()),l&2){const n=o.$implicit,t=r(2);pn("width",n.width||null),w("is-primary-h",n.key===t.primaryKey()),x("aria-sort",n.sortable?t.ariaSort(n.key):null),i(),f(n.sortable?1:2)}}function kn(l,o){if(l&1&&(d(0,"th",10)(1,"span",18),h(2),c()()),l&2){const n=r(2);i(2),F(n.l().expandRow)}}function yn(l,o){if(l&1){const n=y();d(0,"td",20)(1,"fold-checkbox",24),v("click",function(e){return e.stopPropagation()})("checkedChange",function(){C(n);const e=r(),a=e.$implicit,p=e.$index,g=r(2);return b(g.toggleRow(a,p))}),c()()}if(l&2){const n=r(),t=n.$implicit,e=n.$index,a=r(2);i(),u("ariaLabel",a.labelFor(t))("checked",a.isRowSelected(t,e))}}function Mn(l,o){if(l&1&&O(0,28),l&2){const n=r(3),t=n.$implicit,e=n.$index;u("ngTemplateOutlet",o)("ngTemplateOutletContext",T(2,k,t,e))}}function Pn(l,o){if(l&1&&h(0),l&2){const n=r(2).$implicit,t=r().$implicit,e=r(2);$(" ",e.cellText(n,t)," ")}}function Fn(l,o){if(l&1&&(d(0,"th",27),_(1,Mn,1,5,"ng-container",28)(2,Pn,1,1),c()),l&2){let n;const t=r(),e=t.$implicit,a=t.$index,p=t.$count,g=r(3);w("folddt-cell--ruled",g.columnRules()&&a!==p-1)("is-numeric",e.numeric)("right",e.align==="right")("center",e.align==="center")("truncate",e.truncate),u("ngClass",e.cellClass||""),x("data-label",e.label),i(),f((n=g.cellTemplate(e.key))?1:2,n)}}function $n(l,o){if(l&1&&O(0,28),l&2){const n=r(3),t=n.$implicit,e=n.$index;u("ngTemplateOutlet",o)("ngTemplateOutletContext",T(2,k,t,e))}}function Dn(l,o){if(l&1&&h(0),l&2){const n=r(2).$implicit,t=r().$implicit,e=r(2);$(" ",e.cellText(n,t)," ")}}function Rn(l,o){if(l&1&&(d(0,"td",29),_(1,$n,1,5,"ng-container",28)(2,Dn,1,1),c()),l&2){let n;const t=r(),e=t.$implicit,a=t.$index,p=t.$count,g=r(3);w("folddt-cell--ruled",g.columnRules()&&a!==p-1)("is-numeric",e.numeric)("right",e.align==="right")("center",e.align==="center")("truncate",e.truncate),u("ngClass",e.cellClass||""),x("data-label",e.label),i(),f((n=g.cellTemplate(e.key))?1:2,n)}}function Sn(l,o){if(l&1&&_(0,Fn,3,13,"th",25)(1,Rn,3,13,"td",26),l&2){const n=o.$implicit,t=r(3);f(n.key===t.primaryKey()?0:1)}}function Ln(l,o){if(l&1){const n=y();d(0,"td",21)(1,"button",30),v("click",function(e){C(n);const a=r(),p=a.$implicit,g=a.$index,B=r(2);return e.stopPropagation(),b(B.toggleExpand(p,g))}),I(2,"fold-icon",31),c()()}if(l&2){const n=r(),t=n.$implicit,e=n.$index,a=r(2);i(),x("aria-expanded",a.isRowExpanded(t,e))("aria-controls",a.detailId(t,e))("aria-label",a.isRowExpanded(t,e)?a.l().collapseRow:a.l().expandRow),i(),u("name",a.isRowExpanded(t,e)?"chevron-up":"chevron-down")("size",16)}}function An(l,o){if(l&1&&(d(0,"tr",22)(1,"td",32),O(2,28),c()()),l&2){const n=r(),t=n.$implicit,e=n.$index,a=r(2);i(),x("colspan",a.colCount()),i(),u("ngTemplateOutlet",a.rowNoteTemplate())("ngTemplateOutletContext",T(3,k,t,e))}}function En(l,o){if(l&1&&(d(0,"tr",23)(1,"td",33),O(2,28),c()()),l&2){const n=r(),t=n.$implicit,e=n.$index,a=r(2);i(),u("id",a.detailId(t,e)),x("colspan",a.colCount()),i(),u("ngTemplateOutlet",a.rowDetailTemplate())("ngTemplateOutletContext",T(4,k,t,e))}}function zn(l,o){if(l&1){const n=y();d(0,"tr",19),v("click",function(){const e=C(n).$implicit,a=r(2);return b(a.onRowActivate(e))})("focus",function(){const e=C(n),a=e.$implicit,p=e.$index,g=r(2);return b(g.onRowFocus(a,p))})("keydown",function(e){const a=C(n).$implicit,p=r(2);return b(p.onRowKeydown(e,a))}),_(1,yn,2,2,"td",20),D(2,Sn,2,1,null,null,Q),_(4,Ln,3,5,"td",21),c(),_(5,An,3,6,"tr",22),_(6,En,3,7,"tr",23)}if(l&2){const n=o.$implicit,t=o.$index,e=r(2),a=e.toneOf(n);w("tone-warning",a==="warning")("tone-alert",a==="alert")("tone-success",a==="success")("clickable",e.clickable())("is-selected",e.selectable()&&e.isRowSelected(n,t)),x("tabindex",e.rowTabIndex(n,t))("aria-selected",e.selectable()?e.isRowSelected(n,t):null),i(),f(e.selectable()?1:-1),i(),R(e.columns()),i(2),f(e.expandable()?4:-1),i(),f(e.hasNote(n,t)?5:-1),i(),f(e.expandable()&&e.isRowExpanded(n,t)?6:-1)}}function Nn(l,o){if(l&1&&(d(0,"div",2)(1,"table",6),_(2,hn,2,1,"caption",7),d(3,"thead")(4,"tr"),_(5,wn,2,3,"th",8),D(6,Tn,3,6,"th",9,Q),_(8,kn,3,1,"th",10),c()(),d(9,"tbody"),D(10,zn,7,16,null,null,G,!0),c()()()),l&2){let n;const t=r();i(),x("aria-colcount",t.colCount()),i(),f((n=t.caption())?2:-1,n),i(3),f(t.selectable()?5:-1),i(),R(t.columns()),i(2),f(t.expandable()?8:-1),i(2),R(t.rows())}}function Kn(l,o){if(l&1){const n=y();d(0,"fold-checkbox",39),v("click",function(e){return e.stopPropagation()})("checkedChange",function(){C(n);const e=r(),a=e.$implicit,p=e.$index,g=r(2);return b(g.toggleRow(a,p))}),c()}if(l&2){const n=r(),t=n.$implicit,e=n.$index,a=r(2);u("ariaLabel",a.labelFor(t))("checked",a.isRowSelected(t,e))}}function jn(l,o){if(l&1&&O(0,28),l&2){const n=r(),t=n.$implicit,e=n.$index;u("ngTemplateOutlet",o)("ngTemplateOutletContext",T(2,k,t,e))}}function In(l,o){if(l&1&&O(0,28),l&2){const n=r(3),t=n.$implicit,e=n.$index;u("ngTemplateOutlet",o)("ngTemplateOutletContext",T(2,k,t,e))}}function Bn(l,o){if(l&1&&h(0),l&2){const n=r(),t=r(2).$implicit,e=r(2);$(" ",e.cellText(n,t)," ")}}function qn(l,o){if(l&1&&(d(0,"p",40),_(1,In,1,5,"ng-container",28)(2,Bn,1,1),c()),l&2){let n;const t=r(4);i(),f((n=t.cellTemplate(o.key))?1:2,n)}}function Hn(l,o){if(l&1&&O(0,28),l&2){const n=r(3),t=n.$implicit,e=n.$index;u("ngTemplateOutlet",o)("ngTemplateOutletContext",T(2,k,t,e))}}function Qn(l,o){if(l&1&&h(0),l&2){const n=r(),t=r(2).$implicit,e=r(2);$(" ",e.cellText(n,t)," ")}}function Vn(l,o){if(l&1&&(d(0,"p",41),_(1,Hn,1,5,"ng-container",28)(2,Qn,1,1),c()),l&2){let n;const t=r(4);i(),f((n=t.cellTemplate(o.key))?1:2,n)}}function Un(l,o){if(l&1&&O(0,28),l&2){const n=r(3),t=n.$implicit,e=n.$index;u("ngTemplateOutlet",o)("ngTemplateOutletContext",T(2,k,t,e))}}function Wn(l,o){if(l&1&&h(0),l&2){const n=r().$implicit,t=r(2).$implicit,e=r(2);$(" ",e.cellText(n,t)," ")}}function Xn(l,o){if(l&1&&(d(0,"div",43)(1,"dt"),h(2),c(),d(3,"dd"),_(4,Un,1,5,"ng-container",28)(5,Wn,1,1),c()()),l&2){let n;const t=o.$implicit,e=r(4);i(2),F(t.label),i(),w("is-numeric",t.numeric)("right",t.align==="right"),i(),f((n=e.cellTemplate(t.key))?4:5,n)}}function Gn(l,o){if(l&1&&(_(0,qn,3,1,"p",40),_(1,Vn,3,1,"p",41),d(2,"dl",42),D(3,Xn,6,6,"div",43,Q),c()),l&2){let n,t;const e=r(3);f((n=e.overlineColumn())?0:-1,n),i(),f((t=e.identityColumn())?1:-1,t),i(2),R(e.gridColumns())}}function Jn(l,o){if(l&1&&(d(0,"div",44),v("click",function(t){return t.stopPropagation()}),O(1,28),c()),l&2){const n=r(),t=n.$implicit,e=n.$index,a=r(2);i(),u("ngTemplateOutlet",a.rowNoteTemplate())("ngTemplateOutletContext",T(2,k,t,e))}}function Yn(l,o){if(l&1&&(d(0,"div",46),v("click",function(t){return t.stopPropagation()}),O(1,28),c()),l&2){const n=r(2),t=n.$implicit,e=n.$index,a=r(2);u("id",a.detailId(t,e)),i(),u("ngTemplateOutlet",a.rowDetailTemplate())("ngTemplateOutletContext",T(3,k,t,e))}}function Zn(l,o){if(l&1){const n=y();d(0,"button",45),v("click",function(e){C(n);const a=r(),p=a.$implicit,g=a.$index,B=r(2);return e.stopPropagation(),b(B.toggleExpand(p,g))}),I(1,"fold-icon",31),c(),_(2,Yn,2,6,"div",33)}if(l&2){const n=r(),t=n.$implicit,e=n.$index,a=r(2);x("aria-expanded",a.isRowExpanded(t,e))("aria-controls",a.detailId(t,e))("aria-label",a.isRowExpanded(t,e)?a.l().collapseRow:a.l().expandRow),i(),u("name",a.isRowExpanded(t,e)?"chevron-up":"chevron-down")("size",16),i(),f(a.isRowExpanded(t,e)?2:-1)}}function nt(l,o){if(l&1){const n=y();d(0,"li",35),v("click",function(){const e=C(n).$implicit,a=r(2);return b(a.onRowActivate(e))})("focus",function(){const e=C(n),a=e.$implicit,p=e.$index,g=r(2);return b(g.onRowFocus(a,p))})("keydown",function(e){const a=C(n).$implicit,p=r(2);return b(p.onRowKeydown(e,a))}),_(1,Kn,1,2,"fold-checkbox",36),d(2,"div",37),_(3,jn,1,5,"ng-container",28)(4,Gn,5,2),_(5,Jn,2,5,"div",38),_(6,Zn,3,6),c()()}if(l&2){let n;const t=o.$implicit,e=o.$index,a=r(2),p=a.toneOf(t);w("is-bare",a.rowCardChrome()==="none"&&a.rowCardTemplate())("tone-warning",p==="warning")("tone-alert",p==="alert")("tone-success",p==="success")("clickable",a.clickable())("is-selected",a.selectable()&&a.isRowSelected(t,e)),x("tabindex",a.rowTabIndex(t,e))("aria-selected",a.selectable()?a.isRowSelected(t,e):null),i(),f(a.selectable()&&!(a.rowCardChrome()==="none"&&a.rowCardTemplate())?1:-1),i(2),f((n=a.rowCardTemplate())?3:4,n),i(2),f(a.hasNote(t,e)?5:-1),i(),f(a.expandable()?6:-1)}}function tt(l,o){if(l&1&&(d(0,"ul",3),D(1,nt,7,18,"li",34,G,!0),c()),l&2){const n=r();i(),R(n.rows())}}function ot(l,o){if(l&1&&(d(0,"div",4),I(1,"fold-spinner",47),c()),l&2){const n=r();i(),u("label",n.l().loading)}}function et(l,o){if(l&1&&(d(0,"div",49),h(1),c()),l&2){const n=r();i(),F(n.subtitle)}}function lt(l,o){if(l&1&&(d(0,"div",5)(1,"div",48),h(2),c(),_(3,et,2,1,"div",49),c()),l&2){const n=o;i(2),F(n.title),i(),f(n.subtitle?3:-1)}}const at=600;class N{columns=s.required();rows=s.required();rowKey=s();rowTone=s();rowNote=s();sort=s(null);empty=s();loading=s(!1,{transform:M});caption=s();clickable=s(!1,{transform:M});zebra=s(!1,{transform:M});hover=s(!0,{transform:M});columnRules=s(!1,{transform:M});narrowLayout=s("scroll");cardsAt=s(at,{transform:Y});rowCardChrome=s("shell");mobileLayout=s("scroll");density=s("comfortable");stickyFirst=s(!1,{transform:M});selectable=s(!1,{transform:M});selected=V(new Set);selectionLabel=s();labels=s();expanded=V(new Set);expandMode=s("single");sortChange=U();rowClick=U();focusedKey=Z(null);width=nn();isNarrow=un(this.width,this.cardsAt);injectedLabels=P(Cn);l=m(()=>({...this.injectedLabels,...this.labels()}));constructor(){q(()=>{}),q(()=>{}),q(()=>{})}cells=tn(S);cellMap=m(()=>{const o=new Map;for(const n of this.cells())o.set(n.foldCell(),n.template);return o});rowNoteTpl=H(E);rowNoteTemplate=m(()=>this.rowNoteTpl()?.template??null);rowDetail=H(A);rowDetailTemplate=m(()=>this.rowDetail()?.template??null);expandable=m(()=>this.rowDetailTemplate()!==null);uid=P(on).next("fold-data-table");detailId(o,n){return`${this.uid}-detail-${this.keyOf(o,n)}`}isRowExpanded(o,n){return this.expanded().has(this.keyOf(o,n))}toggleExpand(o,n){const t=this.keyOf(o,n),e=this.expanded();if(e.has(t)){const a=new Set(e);a.delete(t),this.expanded.set(a);return}this.expanded.set(this.expandMode()==="single"?new Set([t]):new Set(e).add(t))}rowCard=H(L);cardMode=m(()=>this.isNarrow()&&this.resolvedNarrowLayout()==="cards");resolvedNarrowLayout=m(()=>this.mobileLayout()==="scroll"?this.narrowLayout():"cards");identityColumn=m(()=>{const o=this.columns(),n=this.primaryKey();return o.find(t=>t.key===n)??o[0]??null});overlineColumn=m(()=>{const n=this.columns().filter(t=>t.key!==this.identityColumn()?.key)[0];return n?.truncate===!0?n:null});gridColumns=m(()=>{const o=new Set([this.identityColumn()?.key,this.overlineColumn()?.key].filter(n=>n!==void 0));return this.columns().filter(n=>!o.has(n.key))});rowCardTemplate=m(()=>this.rowCard()?.template??null);toolbarSurface=s("default");primaryKey=m(()=>this.columns()[0]?.key??"");colCount=m(()=>this.columns().length+(this.selectable()?1:0)+(this.expandable()?1:0));rowKeys=m(()=>this.rows().map((o,n)=>this.keyOf(o,n)));activeRowKey=m(()=>{const o=this.focusedKey(),n=this.rowKeys();return o!==null&&n.includes(o)?o:n[0]??null});cellTemplate(o){return this.cellMap().get(o)??null}cellText(o,n){const t=o.value;return t===void 0?"":String(t(n))}keyOf(o,n){return this.rowKey()?.(o,n)??n}toneOf(o){return this.rowTone()?.(o)??null}hasNote(o,n){return this.rowNoteTemplate()!==null&&(this.rowNote()?.(o,n)??!1)}isSorted(o){return this.sort()?.key===o}sortIcon(o){const n=this.sort();return n?.key!==o?"expand-all":n.dir==="asc"?"chevron-up":"chevron-down"}ariaSort(o){const n=this.sort();return n?.key!==o?"none":n.dir==="asc"?"ascending":"descending"}onRowActivate(o){this.clickable()&&this.rowClick.emit(o)}isRowSelected(o,n){return this.selected().has(this.keyOf(o,n))}allSelected=m(()=>this.rows().length>0&&this.rows().every((o,n)=>this.selected().has(this.keyOf(o,n))));someSelected=m(()=>!this.allSelected()&&this.rows().some((o,n)=>this.selected().has(this.keyOf(o,n))));toggleRow(o,n){const t=new Set(this.selected()),e=this.keyOf(o,n);t.has(e)?t.delete(e):t.add(e),this.selected.set(t)}toggleAll(){const o=new Set(this.selected()),n=!this.allSelected();this.rows().forEach((t,e)=>{const a=this.keyOf(t,e);n?o.add(a):o.delete(a)}),this.selected.set(o)}labelFor(o){return this.selectionLabel()?.(o)??this.l().selectRow}rowTabIndex(o,n){if(!this.clickable())return null;const t=this.activeRowKey();return t!==null&&this.keyOf(o,n)===t?0:-1}onRowFocus(o,n){this.focusedKey.set(this.keyOf(o,n))}onRowKeydown(o,n){if(o.target===o.currentTarget)switch(o.key){case"Enter":this.onRowActivate(n);break;case" ":this.onRowActivate(n),o.preventDefault();break;case"ArrowDown":W(o.currentTarget,"nextElementSibling"),o.preventDefault();break;case"ArrowUp":W(o.currentTarget,"previousElementSibling"),o.preventDefault();break;case"Home":X(o.currentTarget,"firstElementChild"),o.preventDefault();break;case"End":X(o.currentTarget,"lastElementChild"),o.preventDefault();break}}static ɵfac=function(n){return new(n||N)};static ɵcmp=en({type:N,selectors:[["fold-data-table"]],contentQueries:function(n,t,e){n&1&&_n(e,t.cells,S,4)(e,t.rowNoteTpl,E,5)(e,t.rowDetail,A,5)(e,t.rowCard,L,5),n&2&&fn(4)},inputs:{columns:[1,"columns"],rows:[1,"rows"],rowKey:[1,"rowKey"],rowTone:[1,"rowTone"],rowNote:[1,"rowNote"],sort:[1,"sort"],empty:[1,"empty"],loading:[1,"loading"],caption:[1,"caption"],clickable:[1,"clickable"],zebra:[1,"zebra"],hover:[1,"hover"],columnRules:[1,"columnRules"],narrowLayout:[1,"narrowLayout"],cardsAt:[1,"cardsAt"],rowCardChrome:[1,"rowCardChrome"],mobileLayout:[1,"mobileLayout"],density:[1,"density"],stickyFirst:[1,"stickyFirst"],selectable:[1,"selectable"],selected:[1,"selected"],selectionLabel:[1,"selectionLabel"],labels:[1,"labels"],expanded:[1,"expanded"],expandMode:[1,"expandMode"],toolbarSurface:[1,"toolbarSurface"]},outputs:{selected:"selectedChange",expanded:"expandedChange",sortChange:"sortChange",rowClick:"rowClick"},ngContentSelectors:xn,decls:7,vars:23,consts:[[1,"folddt-wrap"],[1,"folddt-toolbar"],[1,"folddt-scroll"],["role","list",1,"folddt-cardlist"],[1,"folddt-loading"],[1,"folddt-empty"],[1,"folddt"],[1,"folddt-caption"],["scope","col",1,"folddt-select-h"],["scope","col",3,"is-primary-h","width"],["scope","col",1,"folddt-expand-h"],["size","sm",3,"checkedChange","ariaLabel","checked","indeterminate"],["scope","col"],["type","button",1,"folddt-th-sort",3,"is-numeric","right","center"],[1,"folddt-th-plain",3,"is-numeric","right","center"],["type","button",1,"folddt-th-sort",3,"click"],[1,"folddt-arrow",3,"name","size"],[1,"folddt-th-plain"],[1,"folddt-sr"],[1,"folddt-row",3,"click","focus","keydown"],[1,"folddt-cell","folddt-cell--select"],[1,"folddt-cell","folddt-cell--expand"],[1,"folddt-note-row"],[1,"folddt-detail-row"],["size","sm",3,"click","checkedChange","ariaLabel","checked"],["scope","row",1,"folddt-cell","is-primary",3,"folddt-cell--ruled","is-numeric","right","center","truncate","ngClass"],[1,"folddt-cell",3,"folddt-cell--ruled","is-numeric","right","center","truncate","ngClass"],["scope","row",1,"folddt-cell","is-primary",3,"ngClass"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"folddt-cell",3,"ngClass"],["type","button",1,"folddt-expand",3,"click"],[3,"name","size"],[1,"folddt-note"],[1,"folddt-detail",3,"id"],[1,"folddt-card",3,"is-bare","tone-warning","tone-alert","tone-success","clickable","is-selected"],[1,"folddt-card",3,"click","focus","keydown"],["size","sm",1,"folddt-card-select",3,"ariaLabel","checked"],[1,"folddt-card-body"],[1,"folddt-note","folddt-note--card"],["size","sm",1,"folddt-card-select",3,"click","checkedChange","ariaLabel","checked"],[1,"folddt-card-overline"],[1,"folddt-card-identity"],[1,"folddt-card-grid"],[1,"folddt-card-pair"],[1,"folddt-note","folddt-note--card",3,"click"],["type","button",1,"folddt-expand","folddt-expand--card",3,"click"],[1,"folddt-detail",3,"click","id"],[3,"label"],[1,"folddt-empty-t"],[1,"folddt-empty-s"]],template:function(n,t){if(n&1&&(cn(bn),d(0,"div",0)(1,"div",1),sn(2),c(),_(3,Nn,12,4,"div",2)(4,tt,3,0,"ul",3),_(5,ot,2,1,"div",4)(6,lt,4,2,"div",5),c()),n&2){let e;w("folddt--zebra",t.zebra())("folddt--hover",t.hover())("folddt--column-rules",t.columnRules())("folddt--narrow",t.isNarrow())("folddt--compact",t.density()==="compact")("folddt--sticky-first",t.stickyFirst())("folddt--select",t.selectable()),i(),w("folddt-toolbar--sunken",t.toolbarSurface()==="sunken")("folddt-toolbar--raised",t.toolbarSurface()==="raised")("folddt-toolbar--accent",t.toolbarSurface()==="accent"),x("data-surface",t.toolbarSurface()==="accent"?"accent":null),i(2),f(t.cardMode()?4:3),i(2),f(t.loading()?5:(e=t.rows().length===0&&t.empty())?6:-1,e)}},dependencies:[ln,an,rn,dn,gn],styles:[`@charset "UTF-8";



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
  outline: 2px solid var(--fold-color-primary);
  outline-offset: -2px;
}









.folddt--zebra[_ngcontent-%COMP%]   .folddt-row[_ngcontent-%COMP%]:nth-child(even of .folddt-row):not(.tone-warning):not(.tone-alert):not(.tone-success)   .folddt-cell[_ngcontent-%COMP%] {
  background: var(--fold-color-surface-subtle);
}





.folddt--zebra[_ngcontent-%COMP%]   .folddt-row[_ngcontent-%COMP%]   .folddt-cell[_ngcontent-%COMP%] {
  border-bottom-color: transparent;
}











.folddt--column-rules[_ngcontent-%COMP%]   .folddt-row[_ngcontent-%COMP%]   .folddt-cell--ruled[_ngcontent-%COMP%] {
  border-inline-end: 1px solid var(--fold-data-table-column-rule, color-mix(in srgb, var(--fold-color-border-subtle) 55%, transparent));
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




.folddt-card.clickable[_ngcontent-%COMP%] {
  cursor: pointer;
}

.folddt-card[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--fold-color-primary);
  outline-offset: -2px;
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









.folddt-note[_ngcontent-%COMP%] {
  padding: var(--fold-data-table-note-padding, 0 var(--fold-space-lg) var(--fold-space-sm));
}

.folddt-note-row[_ngcontent-%COMP%]    > .folddt-note[_ngcontent-%COMP%] {
  border-top: 0;
}

.folddt-note--card[_ngcontent-%COMP%] {
  margin-top: var(--fold-space-sm);
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
}`]})}const ct=Object.freeze(Object.defineProperty({__proto__:null,FoldDataTableComponent:N},Symbol.toStringTag,{value:"Module"}));export{N as F,S as a,L as b,A as c,E as d,ct as e};
