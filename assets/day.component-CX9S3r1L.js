import{u as m,ap as x,X as O,A as i,ɵ as M,ar as P,F as k,a1 as w,d,e as r,f as l,w as f,a2 as v,D as u,j as a,k as s,L as F,x as p,aT as T,q as c,i as D,o as $,E as z,B as N,au as E,m as C,av as j,g as y,N as L,O as V}from"./index-CTDli8WO.js";import{a as h}from"./chrome.directive-wkYwEXGE.js";import{a as q}from"./filters-17CrhBAd.js";import"./date-Blk--MT7.js";const H=["*",[["button","empty",""],["a","empty",""],["div","empty",""]]],I=["*","button[empty], a[empty], div[empty]"],S=n=>({$implicit:n,band:null}),A=(n,e)=>e.id;function B(n,e){if(n&1&&(d(0,"div",5)(1,"p"),r(2),l(),v(3,1),l()),n&2){const o=c();a(2),s(o.chrome.l().emptyDay)}}function U(n,e){if(n&1&&E(0,8),n&2){const o=c().$implicit;C("ngTemplateOutlet",e)("ngTemplateOutletContext",j(2,S,o))}}function X(n,e){n&1&&y(0,"fold-icon",10),n&2&&C("name",e)}function G(n,e){if(n&1&&(d(0,"span",13),r(1),l()),n&2){const o=c(2).$implicit;a(),s(o.subline)}}function J(n,e){if(n&1&&(y(0,"span",9),f(1,X,1,1,"fold-icon",10),d(2,"span",11)(3,"span",12),r(4),l(),f(5,G,2,1,"span",13),l()),n&2){let o;const t=c().$implicit;a(),p((o=t.icon)?1:-1,o),a(3),s(t.label),a(),p(t.subline?5:-1)}}function K(n,e){if(n&1){const o=z();d(0,"li")(1,"button",7),N("click",function(){const _=L(o).$implicit,b=c(2);return V(b.eventClick.emit(_))}),f(2,U,1,4,"ng-container",8)(3,J,6,3),l()()}if(n&2){let o;const t=e.$implicit,_=c(2);a(),u("data-tone",t.tone??"neutral"),a(),p((o=_.chrome.eventContent())?2:3,o)}}function Q(n,e){if(n&1&&(d(0,"ul",6),D(1,K,4,2,"li",null,A),l()),n&2){const o=c();a(),$(o.dayEvents())}}class g{date=m.required();events=m([]);today=m();eventClick=x();chrome=O(h);dayEvents=i(()=>q(this.events(),this.date()));isToday=i(()=>this.date()===this.today());weekdayName=i(()=>this.chrome.format(this.date(),"weekdayLong"));monthName=i(()=>this.chrome.format(this.date(),"monthLong"));dayOfMonth=i(()=>Number(this.date().slice(8,10)));headerLabel=i(()=>{const e=this.chrome.format(this.date(),"dateFull");return this.isToday()?`${e}, ${this.chrome.l().today}`:e});static ɵfac=function(o){return new(o||g)};static ɵcmp=M({type:g,selectors:[["fold-calendar-day"]],inputs:{date:[1,"date"],events:[1,"events"],today:[1,"today"]},outputs:{eventClick:"eventClick"},features:[T([{directive:h,inputs:["locale","locale","labels","labels","formats","formats"]}])],ngContentSelectors:I,decls:11,vars:8,consts:[[1,"foldcald"],[1,"foldcald-head"],[1,"foldcald-weekday"],[1,"foldcald-daynum"],[1,"foldcald-month"],[1,"foldcald-empty"],[1,"foldcald-list"],["type","button",1,"foldcal-chip","foldcald-chip",3,"click"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"foldcal-chip-bar"],["size","md",1,"foldcal-chip-icon",3,"name"],[1,"foldcal-chip-body"],[1,"foldcal-chip-label"],[1,"foldcal-chip-sub"]],template:function(o,t){o&1&&(w(H),d(0,"section",0)(1,"header",1)(2,"span",2),r(3),l(),d(4,"span",3),r(5),l(),d(6,"span",4),r(7),l()(),f(8,B,4,1,"div",5)(9,Q,3,0,"ul",6),v(10),l()),o&2&&(u("aria-label",t.headerLabel()),a(3),s(t.weekdayName()),a(),F("is-today",t.isToday()),u("aria-current",t.isToday()?"date":null),a(),s(t.dayOfMonth()),a(2),s(t.monthName()),a(),p(t.dayEvents().length===0?8:9))},dependencies:[P,k],styles:[`@charset "UTF-8";
[_nghost-%COMP%] {
  display: block;
}

.foldcal-chip[_ngcontent-%COMP%] {
  position: relative;
  display: flex;
  align-items: stretch;
  gap: var(--fold-space-sm);
  width: 100%;
  padding: var(--fold-space-xs) var(--fold-space-sm);
  padding-inline-start: 0;
  border: 0;
  border-radius: var(--fold-calendar-band-radius, var(--fold-radius-sm));
  background: var(--fold-color-surface-raised);
  color: var(--fold-color-text);
  font: inherit;
  text-align: start;
  cursor: pointer;
  overflow: hidden;
  transition: background-color var(--fold-motion-fast) ease;
}
.foldcal-chip[_ngcontent-%COMP%]:hover {
  background: var(--fold-color-surface-hover);
}
.foldcal-chip[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--fold-color-primary);
  outline-offset: -2px;
}

.foldcal-chip-bar[_ngcontent-%COMP%] {
  flex: 0 0 var(--fold-calendar-bar-width, 3px);
  align-self: stretch;
  background: var(--fold-color-text-muted);
}

.foldcal-chip-icon[_ngcontent-%COMP%] {
  flex: none;
  align-self: center;
  margin-inline-start: var(--fold-space-sm);
  color: var(--fold-color-text-secondary);
}

.foldcal-chip-body[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
}

.foldcal-chip-label[_ngcontent-%COMP%] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: var(--fold-text-sm);
  font-weight: 500;
}

.foldcal-chip-sub[_ngcontent-%COMP%] {
  color: var(--fold-color-text-secondary);
  font-size: var(--fold-text-xs);
}

.foldcal-chip[data-tone=success][_ngcontent-%COMP%]   .foldcal-chip-bar[_ngcontent-%COMP%] {
  background: var(--fold-color-success);
}

.foldcal-chip[data-tone=warning][_ngcontent-%COMP%]   .foldcal-chip-bar[_ngcontent-%COMP%] {
  background: var(--fold-color-warning);
}

.foldcal-chip[data-tone=alert][_ngcontent-%COMP%]   .foldcal-chip-bar[_ngcontent-%COMP%] {
  background: var(--fold-color-alert);
}

.foldcal-chip[data-tone=muted][_ngcontent-%COMP%]   .foldcal-chip-bar[_ngcontent-%COMP%] {
  background: var(--fold-color-text-faded);
}
.foldcal-chip[data-tone=muted][_ngcontent-%COMP%]   .foldcal-chip-label[_ngcontent-%COMP%] {
  color: var(--fold-color-text-secondary);
  text-decoration: line-through;
  text-decoration-thickness: 1px;
}

@media (forced-colors: active) {
  .foldcal-chip[_ngcontent-%COMP%] {
    border: 1px solid CanvasText;
  }
  .foldcal-chip-bar[_ngcontent-%COMP%] {
    forced-color-adjust: none;
  }
}
@media (prefers-reduced-motion: reduce) {
  .foldcal-chip[_ngcontent-%COMP%] {
    transition: none;
  }
}
.foldcald[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--fold-space-lg);
  padding: var(--fold-space-lg);
  border: 1px solid var(--fold-color-border);
  border-radius: var(--fold-radius-md);
  background: var(--fold-color-surface-card);
}

.foldcald-head[_ngcontent-%COMP%] {
  display: flex;
  align-items: baseline;
  gap: var(--fold-space-md);
  padding-bottom: var(--fold-space-md);
  border-bottom: 1px solid var(--fold-color-border);
}

.foldcald-weekday[_ngcontent-%COMP%] {
  color: var(--fold-color-text-secondary);
  font-size: var(--fold-text-md);
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.foldcald-daynum[_ngcontent-%COMP%] {
  color: var(--fold-color-text);
  font-size: var(--fold-calendar-day-number-size, 32px);
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  line-height: 1;
}
.foldcald-daynum.is-today[_ngcontent-%COMP%] {
  color: var(--fold-color-primary-text);
}

.foldcald-month[_ngcontent-%COMP%] {
  color: var(--fold-color-text-secondary);
  font-size: var(--fold-text-lg);
  font-weight: 600;
}

.foldcald-list[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--fold-space-sm);
  margin: 0;
  padding: 0;
  list-style: none;
}

.foldcald-chip[_ngcontent-%COMP%] {
  padding-block: var(--fold-space-sm);
}

.foldcald-empty[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--fold-space-sm);
  padding: var(--fold-space-lg);
  border: 1px dashed var(--fold-color-border);
  border-radius: var(--fold-radius-md);
  background: var(--fold-color-surface-subtle);
}
.foldcald-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0;
  color: var(--fold-color-text-secondary);
  font-size: var(--fold-text-sm);
}


@media (forced-colors: active) {
  .foldcald-daynum.is-today[_ngcontent-%COMP%] {
    outline: 2px solid Highlight;
    outline-offset: 2px;
  }
  .foldcald-head[_ngcontent-%COMP%] {
    border-block-end-color: CanvasText;
  }
}`]})}export{g as FoldCalendarDayComponent};
