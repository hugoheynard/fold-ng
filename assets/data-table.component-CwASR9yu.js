import{u as s,X as P,aO as K,V as j,aj as J,a0 as M,aE as Y,af as V,ao as U,s as Z,aF as nn,A as m,aA as q,aP as tn,ap as H,ag as on,ɵ as en,aQ as ln,aq as an,F as rn,ah as dn,a1 as cn,d,a2 as sn,f as c,w as _,L as w,j as r,D as b,x as f,as as _n,a9 as fn,i as D,q as i,o as S,g as I,m as p,e as x,k as F,l as $,E as y,B as v,W as pn,N as u,O as C,at as O,aI as T}from"./index-CGBGS2-i.js";import{f as gn}from"./fold-at-D1uSQ9IC.js";import{FoldCheckboxComponent as mn}from"./checkbox.component-PtRpaqoD.js";class R{foldCell=s.required();template=P(K);static ɵfac=function(n){return new(n||R)};static ɵdir=j({type:R,selectors:[["ng-template","foldCell",""]],inputs:{foldCell:[1,"foldCell"]}})}class L{template=P(K);static ɵfac=function(n){return new(n||L)};static ɵdir=j({type:L,selectors:[["ng-template","foldRowCard",""]]})}class A{template=P(K);static ɵfac=function(n){return new(n||A)};static ɵdir=j({type:A,selectors:[["ng-template","foldRowDetail",""]]})}class E{template=P(K);static ɵfac=function(n){return new(n||E)};static ɵdir=j({type:E,selectors:[["ng-template","foldRowNote",""]]})}function z(e){return e instanceof HTMLElement&&e.hasAttribute("tabindex")}function W(e,o){if(!(e instanceof Element))return;let n=e[o];for(;n!==null&&!z(n);)n=n[o];z(n)&&n.focus()}function X(e,o){if(!(e instanceof Element))return;let n=e.parentElement?.[o]??null;const t=o==="firstElementChild"?"nextElementSibling":"previousElementSibling";for(;n!==null&&!z(n);)n=n[t];z(n)&&n.focus()}const un={selectAll:"Select all rows",selectRow:"Select row",sortBy:e=>`Sort by ${e}`,loading:"Loading…",expandRow:"Show details",collapseRow:"Hide details"},Cn=new J("FOLD_DATA_TABLE_LABELS",{factory:()=>un}),bn=[[["","foldToolbar",""]]],xn=["[foldToolbar]"],k=(e,o)=>({$implicit:e,index:o}),Q=(e,o)=>o.key;function G(e,o){return this.keyOf(o,e)}function hn(e,o){e&1&&(d(0,"caption",7),x(1),c()),e&2&&(r(),$(" ",o," "))}function wn(e,o){if(e&1){const n=y();d(0,"th",8)(1,"fold-checkbox",11),v("checkedChange",function(){u(n);const l=i(2);return C(l.toggleAll())}),c()()}if(e&2){const n=i(2);r(),p("ariaLabel",n.l().selectAll)("checked",n.allSelected())("indeterminate",n.someSelected())}}function vn(e,o){if(e&1){const n=y();d(0,"button",15),v("click",function(){u(n);const l=i().$implicit,a=i(2);return C(a.sortChange.emit(l.key))}),d(1,"span"),x(2),c(),I(3,"fold-icon",16),c()}if(e&2){const n=i().$implicit,t=i(2);w("is-numeric",n.numeric)("right",n.align==="right")("center",n.align==="center"),b("aria-label",t.l().sortBy(n.label)),r(2),F(n.label),r(),w("on",t.isSorted(n.key)),p("name",t.sortIcon(n.key))("size",14)}}function On(e,o){if(e&1&&(d(0,"span",17),x(1),c()),e&2){const n=i().$implicit;w("is-numeric",n.numeric)("right",n.align==="right")("center",n.align==="center"),r(),F(n.label)}}function Tn(e,o){if(e&1&&(d(0,"th",12),_(1,vn,4,12,"button",13)(2,On,2,7,"span",14),c()),e&2){const n=o.$implicit,t=i(2);pn("width",n.width||null),w("is-primary-h",n.key===t.primaryKey()),b("aria-sort",n.sortable?t.ariaSort(n.key):null),r(),f(n.sortable?1:2)}}function kn(e,o){if(e&1&&(d(0,"th",10)(1,"span",18),x(2),c()()),e&2){const n=i(2);r(2),F(n.l().expandRow)}}function yn(e,o){if(e&1){const n=y();d(0,"td",20)(1,"fold-checkbox",24),v("click",function(l){return l.stopPropagation()})("checkedChange",function(){u(n);const l=i(),a=l.$implicit,g=l.$index,h=i(2);return C(h.toggleRow(a,g))}),c()()}if(e&2){const n=i(),t=n.$implicit,l=n.$index,a=i(2);r(),p("ariaLabel",a.labelFor(t))("checked",a.isRowSelected(t,l))}}function Mn(e,o){if(e&1&&O(0,28),e&2){const n=i(3),t=n.$implicit,l=n.$index;p("ngTemplateOutlet",o)("ngTemplateOutletContext",T(2,k,t,l))}}function Pn(e,o){if(e&1&&x(0),e&2){const n=i(2).$implicit,t=i().$implicit,l=i(2);$(" ",l.cellText(n,t)," ")}}function Fn(e,o){if(e&1&&(d(0,"th",27),_(1,Mn,1,5,"ng-container",28)(2,Pn,1,1),c()),e&2){let n;const t=i().$implicit,l=i(3);w("is-numeric",t.numeric)("right",t.align==="right")("center",t.align==="center")("truncate",t.truncate),p("ngClass",t.cellClass||""),b("data-label",t.label),r(),f((n=l.cellTemplate(t.key))?1:2,n)}}function $n(e,o){if(e&1&&O(0,28),e&2){const n=i(3),t=n.$implicit,l=n.$index;p("ngTemplateOutlet",o)("ngTemplateOutletContext",T(2,k,t,l))}}function Dn(e,o){if(e&1&&x(0),e&2){const n=i(2).$implicit,t=i().$implicit,l=i(2);$(" ",l.cellText(n,t)," ")}}function Sn(e,o){if(e&1&&(d(0,"td",29),_(1,$n,1,5,"ng-container",28)(2,Dn,1,1),c()),e&2){let n;const t=i().$implicit,l=i(3);w("is-numeric",t.numeric)("right",t.align==="right")("center",t.align==="center")("truncate",t.truncate),p("ngClass",t.cellClass||""),b("data-label",t.label),r(),f((n=l.cellTemplate(t.key))?1:2,n)}}function Rn(e,o){if(e&1&&_(0,Fn,3,11,"th",25)(1,Sn,3,11,"td",26),e&2){const n=o.$implicit,t=i(3);f(n.key===t.primaryKey()?0:1)}}function Ln(e,o){if(e&1){const n=y();d(0,"td",21)(1,"button",30),v("click",function(l){u(n);const a=i(),g=a.$implicit,h=a.$index,B=i(2);return l.stopPropagation(),C(B.toggleExpand(g,h))}),I(2,"fold-icon",31),c()()}if(e&2){const n=i(),t=n.$implicit,l=n.$index,a=i(2);r(),b("aria-expanded",a.isRowExpanded(t,l))("aria-controls",a.detailId(t,l))("aria-label",a.isRowExpanded(t,l)?a.l().collapseRow:a.l().expandRow),r(),p("name",a.isRowExpanded(t,l)?"chevron-up":"chevron-down")("size",16)}}function An(e,o){if(e&1&&(d(0,"tr",22)(1,"td",32),O(2,28),c()()),e&2){const n=i(),t=n.$implicit,l=n.$index,a=i(2);r(),b("colspan",a.colCount()),r(),p("ngTemplateOutlet",a.rowNoteTemplate())("ngTemplateOutletContext",T(3,k,t,l))}}function En(e,o){if(e&1&&(d(0,"tr",23)(1,"td",33),O(2,28),c()()),e&2){const n=i(),t=n.$implicit,l=n.$index,a=i(2);r(),p("id",a.detailId(t,l)),b("colspan",a.colCount()),r(),p("ngTemplateOutlet",a.rowDetailTemplate())("ngTemplateOutletContext",T(4,k,t,l))}}function zn(e,o){if(e&1){const n=y();d(0,"tr",19),v("click",function(){const l=u(n).$implicit,a=i(2);return C(a.onRowActivate(l))})("focus",function(){const l=u(n),a=l.$implicit,g=l.$index,h=i(2);return C(h.onRowFocus(a,g))})("keydown",function(l){const a=u(n).$implicit,g=i(2);return C(g.onRowKeydown(l,a))}),_(1,yn,2,2,"td",20),D(2,Rn,2,1,null,null,Q),_(4,Ln,3,5,"td",21),c(),_(5,An,3,6,"tr",22),_(6,En,3,7,"tr",23)}if(e&2){const n=o.$implicit,t=o.$index,l=i(2),a=l.toneOf(n);w("tone-warning",a==="warning")("tone-alert",a==="alert")("tone-success",a==="success")("clickable",l.clickable())("is-selected",l.selectable()&&l.isRowSelected(n,t)),b("tabindex",l.rowTabIndex(n,t))("aria-selected",l.selectable()?l.isRowSelected(n,t):null),r(),f(l.selectable()?1:-1),r(),S(l.columns()),r(2),f(l.expandable()?4:-1),r(),f(l.hasNote(n,t)?5:-1),r(),f(l.expandable()&&l.isRowExpanded(n,t)?6:-1)}}function Nn(e,o){if(e&1&&(d(0,"div",2)(1,"table",6),_(2,hn,2,1,"caption",7),d(3,"thead")(4,"tr"),_(5,wn,2,3,"th",8),D(6,Tn,3,6,"th",9,Q),_(8,kn,3,1,"th",10),c()(),d(9,"tbody"),D(10,zn,7,16,null,null,G,!0),c()()()),e&2){let n;const t=i();r(),b("aria-colcount",t.colCount()),r(),f((n=t.caption())?2:-1,n),r(3),f(t.selectable()?5:-1),r(),S(t.columns()),r(2),f(t.expandable()?8:-1),r(2),S(t.rows())}}function Kn(e,o){if(e&1){const n=y();d(0,"fold-checkbox",39),v("click",function(l){return l.stopPropagation()})("checkedChange",function(){u(n);const l=i(),a=l.$implicit,g=l.$index,h=i(2);return C(h.toggleRow(a,g))}),c()}if(e&2){const n=i(),t=n.$implicit,l=n.$index,a=i(2);p("ariaLabel",a.labelFor(t))("checked",a.isRowSelected(t,l))}}function jn(e,o){if(e&1&&O(0,28),e&2){const n=i(),t=n.$implicit,l=n.$index;p("ngTemplateOutlet",o)("ngTemplateOutletContext",T(2,k,t,l))}}function In(e,o){if(e&1&&O(0,28),e&2){const n=i(3),t=n.$implicit,l=n.$index;p("ngTemplateOutlet",o)("ngTemplateOutletContext",T(2,k,t,l))}}function Bn(e,o){if(e&1&&x(0),e&2){const n=i(),t=i(2).$implicit,l=i(2);$(" ",l.cellText(n,t)," ")}}function qn(e,o){if(e&1&&(d(0,"p",40),_(1,In,1,5,"ng-container",28)(2,Bn,1,1),c()),e&2){let n;const t=i(4);r(),f((n=t.cellTemplate(o.key))?1:2,n)}}function Hn(e,o){if(e&1&&O(0,28),e&2){const n=i(3),t=n.$implicit,l=n.$index;p("ngTemplateOutlet",o)("ngTemplateOutletContext",T(2,k,t,l))}}function Qn(e,o){if(e&1&&x(0),e&2){const n=i(),t=i(2).$implicit,l=i(2);$(" ",l.cellText(n,t)," ")}}function Vn(e,o){if(e&1&&(d(0,"p",41),_(1,Hn,1,5,"ng-container",28)(2,Qn,1,1),c()),e&2){let n;const t=i(4);r(),f((n=t.cellTemplate(o.key))?1:2,n)}}function Un(e,o){if(e&1&&O(0,28),e&2){const n=i(3),t=n.$implicit,l=n.$index;p("ngTemplateOutlet",o)("ngTemplateOutletContext",T(2,k,t,l))}}function Wn(e,o){if(e&1&&x(0),e&2){const n=i().$implicit,t=i(2).$implicit,l=i(2);$(" ",l.cellText(n,t)," ")}}function Xn(e,o){if(e&1&&(d(0,"div",43)(1,"dt"),x(2),c(),d(3,"dd"),_(4,Un,1,5,"ng-container",28)(5,Wn,1,1),c()()),e&2){let n;const t=o.$implicit,l=i(4);r(2),F(t.label),r(),w("is-numeric",t.numeric)("right",t.align==="right"),r(),f((n=l.cellTemplate(t.key))?4:5,n)}}function Gn(e,o){if(e&1&&(_(0,qn,3,1,"p",40),_(1,Vn,3,1,"p",41),d(2,"dl",42),D(3,Xn,6,6,"div",43,Q),c()),e&2){let n,t;const l=i(3);f((n=l.overlineColumn())?0:-1,n),r(),f((t=l.identityColumn())?1:-1,t),r(2),S(l.gridColumns())}}function Jn(e,o){if(e&1&&(d(0,"div",44),v("click",function(t){return t.stopPropagation()}),O(1,28),c()),e&2){const n=i(),t=n.$implicit,l=n.$index,a=i(2);r(),p("ngTemplateOutlet",a.rowNoteTemplate())("ngTemplateOutletContext",T(2,k,t,l))}}function Yn(e,o){if(e&1&&(d(0,"div",46),v("click",function(t){return t.stopPropagation()}),O(1,28),c()),e&2){const n=i(2),t=n.$implicit,l=n.$index,a=i(2);p("id",a.detailId(t,l)),r(),p("ngTemplateOutlet",a.rowDetailTemplate())("ngTemplateOutletContext",T(3,k,t,l))}}function Zn(e,o){if(e&1){const n=y();d(0,"button",45),v("click",function(l){u(n);const a=i(),g=a.$implicit,h=a.$index,B=i(2);return l.stopPropagation(),C(B.toggleExpand(g,h))}),I(1,"fold-icon",31),c(),_(2,Yn,2,6,"div",33)}if(e&2){const n=i(),t=n.$implicit,l=n.$index,a=i(2);b("aria-expanded",a.isRowExpanded(t,l))("aria-controls",a.detailId(t,l))("aria-label",a.isRowExpanded(t,l)?a.l().collapseRow:a.l().expandRow),r(),p("name",a.isRowExpanded(t,l)?"chevron-up":"chevron-down")("size",16),r(),f(a.isRowExpanded(t,l)?2:-1)}}function nt(e,o){if(e&1){const n=y();d(0,"li",35),v("click",function(){const l=u(n).$implicit,a=i(2);return C(a.onRowActivate(l))})("focus",function(){const l=u(n),a=l.$implicit,g=l.$index,h=i(2);return C(h.onRowFocus(a,g))})("keydown",function(l){const a=u(n).$implicit,g=i(2);return C(g.onRowKeydown(l,a))}),_(1,Kn,1,2,"fold-checkbox",36),d(2,"div",37),_(3,jn,1,5,"ng-container",28)(4,Gn,5,2),_(5,Jn,2,5,"div",38),_(6,Zn,3,6),c()()}if(e&2){let n;const t=o.$implicit,l=o.$index,a=i(2),g=a.toneOf(t);w("is-bare",a.rowCardChrome()==="none"&&a.rowCardTemplate())("tone-warning",g==="warning")("tone-alert",g==="alert")("tone-success",g==="success")("clickable",a.clickable())("is-selected",a.selectable()&&a.isRowSelected(t,l)),b("tabindex",a.rowTabIndex(t,l))("aria-selected",a.selectable()?a.isRowSelected(t,l):null),r(),f(a.selectable()&&!(a.rowCardChrome()==="none"&&a.rowCardTemplate())?1:-1),r(2),f((n=a.rowCardTemplate())?3:4,n),r(2),f(a.hasNote(t,l)?5:-1),r(),f(a.expandable()?6:-1)}}function tt(e,o){if(e&1&&(d(0,"ul",3),D(1,nt,7,18,"li",34,G,!0),c()),e&2){const n=i();r(),S(n.rows())}}function ot(e,o){if(e&1&&(d(0,"div",4),I(1,"fold-spinner",47),c()),e&2){const n=i();r(),p("label",n.l().loading)}}function et(e,o){if(e&1&&(d(0,"div",49),x(1),c()),e&2){const n=i();r(),F(n.subtitle)}}function lt(e,o){if(e&1&&(d(0,"div",5)(1,"div",48),x(2),c(),_(3,et,2,1,"div",49),c()),e&2){const n=o;r(2),F(n.title),r(),f(n.subtitle?3:-1)}}const at=600;class N{columns=s.required();rows=s.required();rowKey=s();rowTone=s();rowNote=s();sort=s(null);empty=s();loading=s(!1,{transform:M});caption=s();clickable=s(!1,{transform:M});zebra=s(!1,{transform:M});hover=s(!0,{transform:M});narrowLayout=s("scroll");cardsAt=s(at,{transform:Y});rowCardChrome=s("shell");mobileLayout=s("scroll");density=s("comfortable");stickyFirst=s(!1,{transform:M});selectable=s(!1,{transform:M});selected=V(new Set);selectionLabel=s();labels=s();expanded=V(new Set);expandMode=s("single");sortChange=U();rowClick=U();focusedKey=Z(null);width=nn();isNarrow=gn(this.width,this.cardsAt);injectedLabels=P(Cn);l=m(()=>({...this.injectedLabels,...this.labels()}));constructor(){q(()=>{}),q(()=>{}),q(()=>{})}cells=tn(R);cellMap=m(()=>{const o=new Map;for(const n of this.cells())o.set(n.foldCell(),n.template);return o});rowNoteTpl=H(E);rowNoteTemplate=m(()=>this.rowNoteTpl()?.template??null);rowDetail=H(A);rowDetailTemplate=m(()=>this.rowDetail()?.template??null);expandable=m(()=>this.rowDetailTemplate()!==null);uid=P(on).next("fold-data-table");detailId(o,n){return`${this.uid}-detail-${this.keyOf(o,n)}`}isRowExpanded(o,n){return this.expanded().has(this.keyOf(o,n))}toggleExpand(o,n){const t=this.keyOf(o,n),l=this.expanded();if(l.has(t)){const a=new Set(l);a.delete(t),this.expanded.set(a);return}this.expanded.set(this.expandMode()==="single"?new Set([t]):new Set(l).add(t))}rowCard=H(L);cardMode=m(()=>this.isNarrow()&&this.resolvedNarrowLayout()==="cards");resolvedNarrowLayout=m(()=>this.mobileLayout()==="scroll"?this.narrowLayout():"cards");identityColumn=m(()=>{const o=this.columns(),n=this.primaryKey();return o.find(t=>t.key===n)??o[0]??null});overlineColumn=m(()=>{const n=this.columns().filter(t=>t.key!==this.identityColumn()?.key)[0];return n?.truncate===!0?n:null});gridColumns=m(()=>{const o=new Set([this.identityColumn()?.key,this.overlineColumn()?.key].filter(n=>n!==void 0));return this.columns().filter(n=>!o.has(n.key))});rowCardTemplate=m(()=>this.rowCard()?.template??null);toolbarSurface=s("default");primaryKey=m(()=>this.columns()[0]?.key??"");colCount=m(()=>this.columns().length+(this.selectable()?1:0)+(this.expandable()?1:0));rowKeys=m(()=>this.rows().map((o,n)=>this.keyOf(o,n)));activeRowKey=m(()=>{const o=this.focusedKey(),n=this.rowKeys();return o!==null&&n.includes(o)?o:n[0]??null});cellTemplate(o){return this.cellMap().get(o)??null}cellText(o,n){const t=o.value;return t===void 0?"":String(t(n))}keyOf(o,n){return this.rowKey()?.(o,n)??n}toneOf(o){return this.rowTone()?.(o)??null}hasNote(o,n){return this.rowNoteTemplate()!==null&&(this.rowNote()?.(o,n)??!1)}isSorted(o){return this.sort()?.key===o}sortIcon(o){const n=this.sort();return n?.key!==o?"expand-all":n.dir==="asc"?"chevron-up":"chevron-down"}ariaSort(o){const n=this.sort();return n?.key!==o?"none":n.dir==="asc"?"ascending":"descending"}onRowActivate(o){this.clickable()&&this.rowClick.emit(o)}isRowSelected(o,n){return this.selected().has(this.keyOf(o,n))}allSelected=m(()=>this.rows().length>0&&this.rows().every((o,n)=>this.selected().has(this.keyOf(o,n))));someSelected=m(()=>!this.allSelected()&&this.rows().some((o,n)=>this.selected().has(this.keyOf(o,n))));toggleRow(o,n){const t=new Set(this.selected()),l=this.keyOf(o,n);t.has(l)?t.delete(l):t.add(l),this.selected.set(t)}toggleAll(){const o=new Set(this.selected()),n=!this.allSelected();this.rows().forEach((t,l)=>{const a=this.keyOf(t,l);n?o.add(a):o.delete(a)}),this.selected.set(o)}labelFor(o){return this.selectionLabel()?.(o)??this.l().selectRow}rowTabIndex(o,n){if(!this.clickable())return null;const t=this.activeRowKey();return t!==null&&this.keyOf(o,n)===t?0:-1}onRowFocus(o,n){this.focusedKey.set(this.keyOf(o,n))}onRowKeydown(o,n){if(o.target===o.currentTarget)switch(o.key){case"Enter":this.onRowActivate(n);break;case" ":this.onRowActivate(n),o.preventDefault();break;case"ArrowDown":W(o.currentTarget,"nextElementSibling"),o.preventDefault();break;case"ArrowUp":W(o.currentTarget,"previousElementSibling"),o.preventDefault();break;case"Home":X(o.currentTarget,"firstElementChild"),o.preventDefault();break;case"End":X(o.currentTarget,"lastElementChild"),o.preventDefault();break}}static ɵfac=function(n){return new(n||N)};static ɵcmp=en({type:N,selectors:[["fold-data-table"]],contentQueries:function(n,t,l){n&1&&_n(l,t.cells,R,4)(l,t.rowNoteTpl,E,5)(l,t.rowDetail,A,5)(l,t.rowCard,L,5),n&2&&fn(4)},inputs:{columns:[1,"columns"],rows:[1,"rows"],rowKey:[1,"rowKey"],rowTone:[1,"rowTone"],rowNote:[1,"rowNote"],sort:[1,"sort"],empty:[1,"empty"],loading:[1,"loading"],caption:[1,"caption"],clickable:[1,"clickable"],zebra:[1,"zebra"],hover:[1,"hover"],narrowLayout:[1,"narrowLayout"],cardsAt:[1,"cardsAt"],rowCardChrome:[1,"rowCardChrome"],mobileLayout:[1,"mobileLayout"],density:[1,"density"],stickyFirst:[1,"stickyFirst"],selectable:[1,"selectable"],selected:[1,"selected"],selectionLabel:[1,"selectionLabel"],labels:[1,"labels"],expanded:[1,"expanded"],expandMode:[1,"expandMode"],toolbarSurface:[1,"toolbarSurface"]},outputs:{selected:"selectedChange",expanded:"expandedChange",sortChange:"sortChange",rowClick:"rowClick"},ngContentSelectors:xn,decls:7,vars:21,consts:[[1,"folddt-wrap"],[1,"folddt-toolbar"],[1,"folddt-scroll"],["role","list",1,"folddt-cardlist"],[1,"folddt-loading"],[1,"folddt-empty"],[1,"folddt"],[1,"folddt-caption"],["scope","col",1,"folddt-select-h"],["scope","col",3,"is-primary-h","width"],["scope","col",1,"folddt-expand-h"],["size","sm",3,"checkedChange","ariaLabel","checked","indeterminate"],["scope","col"],["type","button",1,"folddt-th-sort",3,"is-numeric","right","center"],[1,"folddt-th-plain",3,"is-numeric","right","center"],["type","button",1,"folddt-th-sort",3,"click"],[1,"folddt-arrow",3,"name","size"],[1,"folddt-th-plain"],[1,"folddt-sr"],[1,"folddt-row",3,"click","focus","keydown"],[1,"folddt-cell","folddt-cell--select"],[1,"folddt-cell","folddt-cell--expand"],[1,"folddt-note-row"],[1,"folddt-detail-row"],["size","sm",3,"click","checkedChange","ariaLabel","checked"],["scope","row",1,"folddt-cell","is-primary",3,"is-numeric","right","center","truncate","ngClass"],[1,"folddt-cell",3,"is-numeric","right","center","truncate","ngClass"],["scope","row",1,"folddt-cell","is-primary",3,"ngClass"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"folddt-cell",3,"ngClass"],["type","button",1,"folddt-expand",3,"click"],[3,"name","size"],[1,"folddt-note"],[1,"folddt-detail",3,"id"],[1,"folddt-card",3,"is-bare","tone-warning","tone-alert","tone-success","clickable","is-selected"],[1,"folddt-card",3,"click","focus","keydown"],["size","sm",1,"folddt-card-select",3,"ariaLabel","checked"],[1,"folddt-card-body"],[1,"folddt-note","folddt-note--card"],["size","sm",1,"folddt-card-select",3,"click","checkedChange","ariaLabel","checked"],[1,"folddt-card-overline"],[1,"folddt-card-identity"],[1,"folddt-card-grid"],[1,"folddt-card-pair"],[1,"folddt-note","folddt-note--card",3,"click"],["type","button",1,"folddt-expand","folddt-expand--card",3,"click"],[1,"folddt-detail",3,"click","id"],[3,"label"],[1,"folddt-empty-t"],[1,"folddt-empty-s"]],template:function(n,t){if(n&1&&(cn(bn),d(0,"div",0)(1,"div",1),sn(2),c(),_(3,Nn,12,4,"div",2)(4,tt,3,0,"ul",3),_(5,ot,2,1,"div",4)(6,lt,4,2,"div",5),c()),n&2){let l;w("folddt--zebra",t.zebra())("folddt--hover",t.hover())("folddt--narrow",t.isNarrow())("folddt--compact",t.density()==="compact")("folddt--sticky-first",t.stickyFirst())("folddt--select",t.selectable()),r(),w("folddt-toolbar--sunken",t.toolbarSurface()==="sunken")("folddt-toolbar--raised",t.toolbarSurface()==="raised")("folddt-toolbar--accent",t.toolbarSurface()==="accent"),b("data-surface",t.toolbarSurface()==="accent"?"accent":null),r(2),f(t.cardMode()?4:3),r(2),f(t.loading()?5:(l=t.rows().length===0&&t.empty())?6:-1,l)}},dependencies:[ln,an,rn,dn,mn],styles:[`@charset "UTF-8";



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









.folddt--zebra[_ngcontent-%COMP%]   .folddt-row[_ngcontent-%COMP%]:nth-child(even of .folddt-row):not(.tone-warning):not(.tone-alert):not(.tone-success)   .folddt-cell[_ngcontent-%COMP%] {
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




.folddt-card.clickable[_ngcontent-%COMP%] {
  cursor: pointer;
}

.folddt-card[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--fold-color-primary-border);
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
}`]})}const ct=Object.freeze(Object.defineProperty({__proto__:null,FoldDataTableComponent:N},Symbol.toStringTag,{value:"Module"}));export{N as F,R as a,L as b,A as c,E as d,ct as e};
