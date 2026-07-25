import{w as c,S as D,bm as z,y as $,J as u,b0 as P,bn as A,x as v,ɵ as S,bo as j,b1 as K,d as i,i as b,f as a,H as m,C as s,j as l,o as w,I as C,ba as q,aY as R,q as d,z as Q,O as M,A as y,B as k,D as h,E as x,e as _,k as p,m as T,b3 as V,b5 as E}from"./index-L2pOahl_.js";class g{foldCell=c.required();template=D(z);static ɵfac=function(n){return new(n||g)};static ɵdir=$({type:g,selectors:[["ng-template","foldCell",""]],inputs:{foldCell:[1,"foldCell"]}})}const I=(e,t)=>({$implicit:e,index:t}),F=(e,t)=>t.key;function N(e,t){return this.keyOf(t,e)}function B(e,t){if(e&1){const n=y();i(0,"button",8),k("click",function(){h(n);const r=d().$implicit,f=d();return x(f.sortChange.emit(r.key))}),i(1,"span"),_(2),a(),i(3,"span",9),_(4),a()()}if(e&2){const n=d().$implicit,o=d();s("right",n.align==="right"),l(2),p(n.label),l(),s("on",o.isSorted(n.key)),l(),p(o.sortArrow(n.key))}}function H(e,t){if(e&1&&(i(0,"span",10),_(1),a()),e&2){const n=d().$implicit;s("right",n.align==="right"),l(),p(n.label)}}function J(e,t){if(e&1&&(i(0,"th",5),m(1,B,5,6,"button",6)(2,H,2,3,"span",7),a()),e&2){const n=t.$implicit,o=d();Q("width",n.width||null),M("aria-sort",n.sortable?o.ariaSort(n.key):null),l(),C(n.sortable?1:2)}}function U(e,t){if(e&1&&V(0,14),e&2){const n=d(2),o=n.$implicit,r=n.$index;T("ngTemplateOutlet",t)("ngTemplateOutletContext",E(2,I,o,r))}}function Y(e,t){if(e&1&&(i(0,"td",13),m(1,U,1,5,"ng-container",14),a()),e&2){let n;const o=t.$implicit,r=d(2);s("is-primary",o.key===r.primaryKey())("right",o.align==="right"),T("ngClass",o.cellClass||""),M("data-label",o.label),l(),C((n=r.cellTemplate(o.key))?1:-1,n)}}function G(e,t){if(e&1){const n=y();i(0,"tr",11),k("click",function(){const r=h(n).$implicit,f=d();return x(f.onRowActivate(r))})("keydown.enter",function(){const r=h(n).$implicit,f=d();return x(f.onRowActivate(r))}),b(1,Y,2,7,"td",12,F),a()}if(e&2){const n=t.$implicit,o=d(),r=o.toneOf(n);s("tone-warning",r==="warning")("tone-alert",r==="alert")("tone-success",r==="success")("clickable",o.clickable()),M("tabindex",o.clickable()?0:null),l(),w(o.columns())}}function L(e,t){if(e&1&&(i(0,"div",16),_(1),a()),e&2){const n=d();l(),p(n.subtitle)}}function W(e,t){if(e&1&&(i(0,"div",4)(1,"div",15),_(2),a(),m(3,L,2,1,"div",16),a()),e&2){const n=t;l(2),p(n.title),l(),C(n.subtitle?3:-1)}}class O{columns=c.required();rows=c.required();rowKey=c();rowTone=c();sort=c(null);empty=c();clickable=c(!1,{transform:u});zebra=c(!1,{transform:u});hover=c(!0,{transform:u});mobileCards=c(!0,{transform:u});sortChange=P();rowClick=P();cells=A(g);cellMap=v(()=>{const t=new Map;for(const n of this.cells())t.set(n.foldCell(),n.template);return t});primaryKey=v(()=>this.columns()[0]?.key??"");cellTemplate(t){return this.cellMap().get(t)??null}keyOf(t,n){return this.rowKey()?.(t,n)??n}toneOf(t){return this.rowTone()?.(t)??null}isSorted(t){return this.sort()?.key===t}sortArrow(t){const n=this.sort();return n?.key!==t?"↕":n.dir==="asc"?"↑":"↓"}ariaSort(t){const n=this.sort();return n?.key!==t?"none":n.dir==="asc"?"ascending":"descending"}onRowActivate(t){this.clickable()&&this.rowClick.emit(t)}static ɵfac=function(n){return new(n||O)};static ɵcmp=S({type:O,selectors:[["fold-data-table"]],contentQueries:function(n,o,r){n&1&&q(r,o.cells,g,4),n&2&&R()},inputs:{columns:[1,"columns"],rows:[1,"rows"],rowKey:[1,"rowKey"],rowTone:[1,"rowTone"],sort:[1,"sort"],empty:[1,"empty"],clickable:[1,"clickable"],zebra:[1,"zebra"],hover:[1,"hover"],mobileCards:[1,"mobileCards"]},outputs:{sortChange:"sortChange",rowClick:"rowClick"},decls:10,vars:7,consts:[[1,"folddt-wrap"],[1,"folddt"],["scope","col",3,"width"],[1,"folddt-row",3,"tone-warning","tone-alert","tone-success","clickable"],[1,"folddt-empty"],["scope","col"],["type","button",1,"folddt-th-sort",3,"right"],[1,"folddt-th-plain",3,"right"],["type","button",1,"folddt-th-sort",3,"click"],[1,"folddt-arrow"],[1,"folddt-th-plain"],[1,"folddt-row",3,"click","keydown.enter"],[1,"folddt-cell",3,"is-primary","right","ngClass"],[1,"folddt-cell",3,"ngClass"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"folddt-empty-t"],[1,"folddt-empty-s"]],template:function(n,o){if(n&1&&(i(0,"div",0)(1,"table",1)(2,"thead")(3,"tr"),b(4,J,3,4,"th",2,F),a()(),i(6,"tbody"),b(7,G,3,9,"tr",3,N,!0),a()(),m(9,W,4,2,"div",4),a()),n&2){let r;s("folddt--zebra",o.zebra())("folddt--hover",o.hover())("folddt--cards",o.mobileCards()),l(4),w(o.columns()),l(3),w(o.rows()),l(2),C((r=o.rows().length===0&&o.empty())?9:-1,r)}},dependencies:[j,K],styles:[`@charset "UTF-8";



[_nghost-%COMP%] {
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.folddt-wrap[_ngcontent-%COMP%] {
  flex: 1 1 auto;
  min-height: 0;
  overflow: auto;
  border: 1px solid var(--fold-color-border-subtle);
  border-radius: var(--fold-radius-lg);
  background: var(--fold-color-surface-sunken);
  box-shadow: var(--fold-shadow-md);
}

.folddt[_ngcontent-%COMP%] {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-size: var(--fold-text-sm);
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
  color: var(--fold-color-text-faded);
  font-size: 11px;
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

.folddt-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  border-bottom: 1px solid var(--fold-color-border-subtle);
}

.folddt-row[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {
  border-bottom: 0;
}

.folddt-row[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--fold-color-primary-border);
  outline-offset: -2px;
}


.folddt--zebra[_ngcontent-%COMP%]   .folddt-row[_ngcontent-%COMP%]:nth-child(even):not(.tone-warning):not(.tone-alert):not(.tone-success)   td[_ngcontent-%COMP%] {
  background: var(--fold-color-surface-subtle);
}


.folddt--hover[_ngcontent-%COMP%]   .folddt-row[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {
  background: var(--fold-color-surface-raised);
}

.folddt--hover[_ngcontent-%COMP%]   .folddt-row.tone-warning[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {
  background: color-mix(in srgb, var(--fold-color-warning) 16%, transparent);
}

.folddt--hover[_ngcontent-%COMP%]   .folddt-row.tone-alert[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {
  background: color-mix(in srgb, var(--fold-color-alert) 17%, transparent);
}

.folddt-cell[_ngcontent-%COMP%] {
  padding: 11px 18px;
  color: var(--fold-color-text);
  white-space: nowrap;
  vertical-align: middle;
}

.folddt-cell.right[_ngcontent-%COMP%] {
  text-align: right;
}


.folddt-row.tone-warning[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {
  box-shadow: inset 3px 0 0 var(--fold-color-warning);
}

.folddt-row.tone-warning[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  background: color-mix(in srgb, var(--fold-color-warning) 10%, transparent);
}

.folddt-row.tone-alert[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {
  box-shadow: inset 3px 0 0 var(--fold-color-alert);
}

.folddt-row.tone-alert[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  background: color-mix(in srgb, var(--fold-color-alert) 11%, transparent);
}

.folddt-row.tone-success[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {
  box-shadow: inset 3px 0 0 var(--fold-color-success);
}

.folddt-row.tone-success[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  background: color-mix(in srgb, var(--fold-color-success) 9%, transparent);
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
  .folddt--cards[_ngcontent-%COMP%]   .folddt-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {
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
}`]})}export{O as FoldDataTableComponent};
