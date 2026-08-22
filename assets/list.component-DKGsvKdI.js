import{u as _,ap as b,X as x,A as w,ɵ as h,ar as O,F as M,w as m,x as u,aT as P,d as r,e as s,f as i,q as c,j as a,k as f,i as y,o as k,E as F,B as T,L,D as z,au as $,m as C,av as j,g as v,N as D,O as E}from"./index-mpzUjcFJ.js";import{a as g}from"./chrome.directive-z1tNdslA.js";import{b as I}from"./filters-17CrhBAd.js";import"./date-Blk--MT7.js";const R=o=>({$implicit:o,band:null}),V=(o,t)=>t.id;function H(o,t){if(o&1&&(r(0,"p",0),s(1),i()),o&2){const n=c();a(),f(n.chrome.l().emptyRange)}}function N(o,t){if(o&1&&$(0,3),o&2){const n=c().$implicit;C("ngTemplateOutlet",t)("ngTemplateOutletContext",j(2,R,n))}}function S(o,t){o&1&&v(0,"fold-icon",7),o&2&&C("name",t)}function q(o,t){if(o&1&&(v(0,"span",4),r(1,"span",5),s(2),i(),r(3,"span",6),m(4,S,1,1,"fold-icon",7),r(5,"span",8),s(6),i()(),r(7,"span",9),s(8),i()),o&2){let n;const e=c().$implicit,l=c(2);a(2),f(l.rangeLabel(e)),a(2),u((n=e.icon)?4:-1,n),a(2),f(e.label),a(2),f(e.subline??"")}}function A(o,t){if(o&1){const n=F();r(0,"li")(1,"button",2),T("click",function(){const l=D(n).$implicit,d=c(2);return E(d.eventClick.emit(l))}),m(2,N,1,4,"ng-container",3)(3,q,9,4),i()()}if(o&2){let n;const e=t.$implicit,l=c(2);a(),L("is-custom",l.chrome.eventContent()!==null),z("data-tone",e.tone??"neutral"),a(),u((n=l.chrome.eventContent())?2:3,n)}}function B(o,t){if(o&1&&(r(0,"ul",1),y(1,A,4,4,"li",null,V),i()),o&2){const n=c();a(),k(n.rows())}}class p{events=_([]);from=_();to=_();eventClick=b();chrome=x(g);rows=w(()=>{const t=this.from(),n=this.to();return[...t===void 0||n===void 0?this.events():I(this.events(),t,n)].sort((l,d)=>l.start<d.start?-1:l.start>d.start?1:0)});rangeLabel(t){return this.chrome.formatRange(t.start,t.end,"dayMonthShort")}static ɵfac=function(n){return new(n||p)};static ɵcmp=h({type:p,selectors:[["fold-calendar-list"]],inputs:{events:[1,"events"],from:[1,"from"],to:[1,"to"]},outputs:{eventClick:"eventClick"},features:[P([{directive:g,inputs:["locale","locale","labels","labels","formats","formats"]}])],decls:2,vars:1,consts:[[1,"foldcall-empty"],[1,"foldcall"],["type","button",1,"foldcall-row",3,"click"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"foldcall-bar"],[1,"foldcall-when"],[1,"foldcall-body"],["size","sm",1,"foldcall-icon",3,"name"],[1,"foldcall-label"],[1,"foldcall-sub"]],template:function(n,e){n&1&&m(0,H,2,1,"p",0)(1,B,3,0,"ul",1),n&2&&u(e.rows().length===0?0:1)},dependencies:[O,M],styles:[`[_nghost-%COMP%] {
  display: block;
  container-type: inline-size;
}

.foldcall[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid var(--fold-color-border);
  border-radius: var(--fold-radius-md);
  background: var(--fold-color-surface-card);
  overflow: clip;
}

.foldcall[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%]   .foldcall-row[_ngcontent-%COMP%] {
  border-top: 1px solid var(--fold-color-border-subtle);
}

.foldcall-row[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: var(--fold-calendar-bar-width, 3px) var(--fold-calendar-list-date-width, 7rem) minmax(0, 1fr) auto;
  align-items: center;
  gap: var(--fold-space-md);
  width: 100%;
  padding: var(--fold-space-sm) var(--fold-space-md);
  padding-inline-start: 0;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  text-align: start;
  cursor: pointer;
  transition: background-color var(--fold-motion-fast) ease;
}
.foldcall-row.is-custom[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--fold-space-sm);
  padding-inline-start: var(--fold-space-md);
}
.foldcall-row[_ngcontent-%COMP%]:hover {
  background: var(--fold-color-surface-hover);
}
.foldcall-row[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--fold-color-primary);
  outline-offset: -2px;
}

.foldcall-bar[_ngcontent-%COMP%] {
  align-self: stretch;
  background: var(--fold-color-text-muted);
}

.foldcall-when[_ngcontent-%COMP%] {
  color: var(--fold-color-text-secondary);
  font-size: var(--fold-text-sm);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.foldcall-body[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--fold-space-sm);
  min-width: 0;
}

.foldcall-icon[_ngcontent-%COMP%] {
  flex: none;
  color: var(--fold-color-text-secondary);
}

.foldcall-label[_ngcontent-%COMP%] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: var(--fold-text-sm);
  font-weight: 500;
}

.foldcall-sub[_ngcontent-%COMP%] {
  color: var(--fold-color-text-secondary);
  font-size: var(--fold-text-xs);
  white-space: nowrap;
}

.foldcall-empty[_ngcontent-%COMP%] {
  margin: 0;
  padding: var(--fold-space-xl);
  border: 1px dashed var(--fold-color-border);
  border-radius: var(--fold-radius-md);
  background: var(--fold-color-surface-subtle);
  color: var(--fold-color-text-secondary);
  font-size: var(--fold-text-sm);
  text-align: center;
}

.foldcall-row[data-tone=success][_ngcontent-%COMP%]   .foldcall-bar[_ngcontent-%COMP%] {
  background: var(--fold-color-success);
}

.foldcall-row[data-tone=warning][_ngcontent-%COMP%]   .foldcall-bar[_ngcontent-%COMP%] {
  background: var(--fold-color-warning);
}

.foldcall-row[data-tone=alert][_ngcontent-%COMP%]   .foldcall-bar[_ngcontent-%COMP%] {
  background: var(--fold-color-alert);
}

.foldcall-row[data-tone=muted][_ngcontent-%COMP%]   .foldcall-bar[_ngcontent-%COMP%] {
  background: var(--fold-color-text-faded);
}
.foldcall-row[data-tone=muted][_ngcontent-%COMP%]   .foldcall-label[_ngcontent-%COMP%] {
  color: var(--fold-color-text-secondary);
  text-decoration: line-through;
  text-decoration-thickness: 1px;
}

@media (forced-colors: active) {
  .foldcall-row[_ngcontent-%COMP%] {
    border: 1px solid CanvasText;
  }
  .foldcall-bar[_ngcontent-%COMP%] {
    forced-color-adjust: none;
  }
}
@container (max-width: 640px) {
  .foldcall-row[_ngcontent-%COMP%]:not(.is-custom) {
    grid-template-columns: var(--fold-calendar-bar-width, 3px) var(--fold-calendar-list-date-width, 7rem) minmax(0, 1fr);
  }
  .foldcall-sub[_ngcontent-%COMP%] {
    grid-column: 2/-1;
  }
}
@media (forced-colors: active) {
  .foldcall-row[_ngcontent-%COMP%]:focus-visible {
    outline-color: Highlight;
  }
}
@media (prefers-reduced-motion: reduce) {
  .foldcall-row[_ngcontent-%COMP%] {
    transition: none;
  }
}`]})}export{p as FoldCalendarListComponent};
