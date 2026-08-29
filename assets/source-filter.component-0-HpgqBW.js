import{u as i,af as v,ao as C,X as b,A as d,ɵ as x,F as k,d as a,i as O,f as s,D as h,j as l,o as P,aS as w,E as y,B as M,w as F,g,e as f,q as u,L as S,x as T,k as _,N as K,O as z}from"./index-DJvpC_ts.js";import{a as p}from"./chrome.directive-B5D-J0DQ.js";import"./date-Blk--MT7.js";const D=(t,o)=>o.source.key;function L(t,o){t&1&&g(0,"fold-icon",3)}function V(t,o){if(t&1){const n=y();a(0,"button",2),M("click",function(){const c=K(n).$implicit,m=u();return z(m.toggle(c))}),F(1,L,1,0,"fold-icon",3),g(2,"span",4),a(3,"span",5),f(4),s(),a(5,"span",6),f(6),s()()}if(t&2){const n=o.$implicit,e=u();S("is-on",n.shown),h("data-tone",n.source.tone??"neutral")("aria-pressed",n.shown)("aria-label",e.chipLabel(n)),l(),T(n.shown?1:-1),l(3),_(n.source.label),l(2),_(n.count)}}class r{sources=i([]);events=i([]);active=v(null);selectionChange=C();chrome=b(p);shownKeys=d(()=>{const o=this.active();return o!==null?o:new Set(this.sources().map(n=>n.key))});chips=d(()=>{const o=this.shownKeys(),n=this.events();return this.sources().map(e=>({source:e,count:n.filter(c=>c.sourceKey===e.key).length,shown:o.has(e.key)}))});chipLabel(o){return this.chrome.l().sourceState(o.source.label,o.shown)}toggle(o){const n=new Set(this.shownKeys());n.has(o.source.key)?n.delete(o.source.key):n.add(o.source.key),this.active.set(n),this.selectionChange.emit(n)}static ɵfac=function(n){return new(n||r)};static ɵcmp=x({type:r,selectors:[["fold-calendar-source-filter"]],inputs:{sources:[1,"sources"],events:[1,"events"],active:[1,"active"]},outputs:{active:"activeChange",selectionChange:"selectionChange"},features:[w([{directive:p,inputs:["locale","locale","labels","labels","formats","formats"]}])],decls:3,vars:1,consts:[[1,"foldcalsf"],["type","button",1,"foldcalsf-chip",3,"is-on"],["type","button",1,"foldcalsf-chip",3,"click"],["name","check","size","sm",1,"foldcalsf-check"],["aria-hidden","true",1,"foldcalsf-dot"],[1,"foldcalsf-label"],[1,"foldcalsf-count"]],template:function(n,e){n&1&&(a(0,"nav",0),O(1,V,7,8,"button",1,D),s()),n&2&&(h("aria-label",e.chrome.l().sourceFilter),l(),P(e.chips()))},dependencies:[k],styles:[`[_nghost-%COMP%] {
  display: block;
}

.foldcalsf[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: var(--fold-space-sm);
}

.foldcalsf-chip[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: var(--fold-space-xs);
  padding: var(--fold-space-xs) var(--fold-space-md);
  border: 1px solid var(--fold-color-border);
  border-radius: var(--fold-radius-pill);
  background: var(--fold-color-surface-subtle);
  color: var(--fold-color-text-secondary);
  font: inherit;
  font-size: var(--fold-text-sm);
  font-weight: var(--fold-weight-medium);
  cursor: pointer;
  transition: background-color var(--fold-motion-fast, 120ms) ease, color var(--fold-motion-fast, 120ms) ease, border-color var(--fold-motion-fast, 120ms) ease;
}
.foldcalsf-chip[_ngcontent-%COMP%]:hover {
  background: var(--fold-color-surface-hover);
}
.foldcalsf-chip[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--fold-color-primary);
  outline-offset: 2px;
}
.foldcalsf-chip[_ngcontent-%COMP%]:not(.is-on)   .foldcalsf-dot[_ngcontent-%COMP%] {
  background: var(--fold-color-text-faded);
}
.foldcalsf-chip[_ngcontent-%COMP%]:not(.is-on)   .foldcalsf-label[_ngcontent-%COMP%] {
  text-decoration: line-through;
  text-decoration-color: var(--fold-color-text-faded);
}
.foldcalsf-chip.is-on[_ngcontent-%COMP%] {
  background: var(--fold-color-surface-raised);
  border-color: var(--fold-color-border);
  color: var(--fold-color-text);
}

.foldcalsf-check[_ngcontent-%COMP%] {
  flex: none;
  color: var(--fold-color-primary-text);
}

.foldcalsf-dot[_ngcontent-%COMP%] {
  flex: none;
  width: 8px;
  height: 8px;
  border-radius: var(--fold-radius-round);
  background: var(--fold-color-text-muted);
}

.foldcalsf-chip[data-tone=success].is-on[_ngcontent-%COMP%]   .foldcalsf-dot[_ngcontent-%COMP%] {
  background: var(--fold-color-success);
}

.foldcalsf-chip[data-tone=warning].is-on[_ngcontent-%COMP%]   .foldcalsf-dot[_ngcontent-%COMP%] {
  background: var(--fold-color-warning);
}

.foldcalsf-chip[data-tone=alert].is-on[_ngcontent-%COMP%]   .foldcalsf-dot[_ngcontent-%COMP%] {
  background: var(--fold-color-alert);
}

.foldcalsf-chip[data-tone=muted].is-on[_ngcontent-%COMP%]   .foldcalsf-dot[_ngcontent-%COMP%] {
  background: var(--fold-color-text-faded);
}

.foldcalsf-count[_ngcontent-%COMP%] {
  color: var(--fold-color-text-secondary);
  font-size: var(--fold-text-xs);
  font-variant-numeric: tabular-nums;
}

@media (forced-colors: active) {
  .foldcalsf-chip.is-on[_ngcontent-%COMP%] {
    border: 2px solid Highlight;
  }
}
@media (prefers-reduced-motion: reduce) {
  .foldcalsf-chip[_ngcontent-%COMP%] {
    transition: none;
  }
}`]})}export{r as FoldCalendarSourceFilterComponent};
