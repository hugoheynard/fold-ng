import{u as s,ap as h,X as T,A as D,ɵ as W,ar as S,F as $,d as c,i as v,f as r,D as f,j as a,o as x,aT as E,E as b,B as k,e as p,q as i,L as z,k as _,w as u,x as m,au as N,m as w,av as j,g as O,N as M,O as P}from"./index-AsNFRRmf.js";import{a as C}from"./chrome.directive-CNnAnTyO.js";import{f as A,a as L,F as B,b as H}from"./cell-B0T9VNLR.js";import{l as I,d as V}from"./date-Blk--MT7.js";import{a as q}from"./filters-17CrhBAd.js";const y=7;function Y(o,e,n,t,l){const d=L(e,{month:n,today:t.today,weekendDays:H(t.weekendDays),counts:l,hidden:B});return{day:d,events:q(o,d.date)}}function K(o,e){const n=I(V(e.date,e.weekStartsOn??"mon")),t=e.date.slice(0,7),l=A(o,n,n+y-1);return Array.from({length:y},(d,F)=>Y(o,n+F,t,e,l))}const R=o=>({$implicit:o,band:null}),X=(o,e)=>e.day.date,G=(o,e)=>e.id;function J(o,e){if(o&1&&N(0,8),o&2){const n=i().$implicit;w("ngTemplateOutlet",e)("ngTemplateOutletContext",j(2,R,n))}}function Q(o,e){o&1&&O(0,"fold-icon",10),o&2&&w("name",e)}function U(o,e){if(o&1&&(c(0,"span",13),p(1),r()),o&2){const n=i(2).$implicit;a(),_(n.subline)}}function Z(o,e){if(o&1&&(O(0,"span",9),u(1,Q,1,1,"fold-icon",10),c(2,"span",11)(3,"span",12),p(4),r(),u(5,U,2,1,"span",13),r()),o&2){let n;const t=i().$implicit;a(),m((n=t.icon)?1:-1,n),a(3),_(t.label),a(),m(t.subline?5:-1)}}function nn(o,e){if(o&1){const n=b();c(0,"li")(1,"button",7),k("click",function(){const l=M(n).$implicit,d=i(2);return P(d.eventClick.emit(l))}),u(2,J,1,4,"ng-container",8)(3,Z,6,3),r()()}if(o&2){let n;const t=e.$implicit,l=i(2);a(),f("data-tone",t.tone??"neutral"),a(),m((n=l.chrome.eventContent())?2:3,n)}}function en(o,e){if(o&1){const n=b();c(0,"section",2)(1,"button",3),k("click",function(){const l=M(n).$implicit,d=i();return P(d.dayClick.emit(l.day.date))}),c(2,"span",4),p(3),r(),c(4,"span",5),p(5),r()(),c(6,"ul",6),v(7,nn,4,2,"li",null,G),r()()}if(o&2){const n=e.$implicit,t=i();z("is-today",n.day.isToday)("is-weekend",n.day.isWeekend),f("aria-label",t.columnLabel(n)),a(),f("aria-current",n.day.isToday?"date":null),a(2),_(t.weekdayName(n)),a(2),_(n.day.dayOfMonth),a(2),x(n.events)}}class g{date=s.required();events=s([]);today=s();weekStartsOn=s();weekendDays=s();dayClick=h();eventClick=h();chrome=T(C);columns=D(()=>K(this.events(),{date:this.date(),weekStartsOn:this.chrome.anchor(this.weekStartsOn()),weekendDays:this.chrome.weekend(this.weekendDays()),today:this.today()}));weekdayName(e){return this.chrome.format(e.day.date,"weekdayShort")}columnLabel(e){const n=this.chrome.l(),t=[this.chrome.format(e.day.date,"dateFull")];return e.day.isToday&&t.push(n.today),e.day.eventCount>0&&t.push(n.eventCount(e.day.eventCount)),t.join(", ")}static ɵfac=function(n){return new(n||g)};static ɵcmp=W({type:g,selectors:[["fold-calendar-week"]],inputs:{date:[1,"date"],events:[1,"events"],today:[1,"today"],weekStartsOn:[1,"weekStartsOn"],weekendDays:[1,"weekendDays"]},outputs:{dayClick:"dayClick",eventClick:"eventClick"},features:[E([{directive:C,inputs:["locale","locale","labels","labels","formats","formats"]}])],decls:3,vars:1,consts:[["role","group",1,"foldcalw"],[1,"foldcalw-col",3,"is-today","is-weekend"],[1,"foldcalw-col"],["type","button",1,"foldcalw-head",3,"click"],[1,"foldcalw-weekday"],[1,"foldcalw-daynum"],[1,"foldcalw-list"],["type","button",1,"foldcal-chip",3,"click"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"foldcal-chip-bar"],["size","sm",1,"foldcal-chip-icon",3,"name"],[1,"foldcal-chip-body"],[1,"foldcal-chip-label"],[1,"foldcal-chip-sub"]],template:function(n,t){n&1&&(c(0,"div",0),v(1,en,9,8,"section",1,X),r()),n&2&&(f("aria-label",t.chrome.l().grid),a(),x(t.columns()))},dependencies:[S,$],styles:[`[_nghost-%COMP%] {
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
.foldcalw[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  min-height: var(--fold-calendar-week-column-height, 320px);
  border: 1px solid var(--fold-color-border);
  border-radius: var(--fold-radius-md);
  background: var(--fold-color-surface-card);
  overflow: clip;
}

.foldcalw-col[_ngcontent-%COMP%] {
  container-type: inline-size;
  display: flex;
  flex-direction: column;
  gap: var(--fold-space-sm);
  min-width: 0;
  padding: var(--fold-space-sm);
  border-inline-end: 1px solid var(--fold-color-border-subtle);
}
.foldcalw-col[_ngcontent-%COMP%]:last-child {
  border-inline-end: 0;
}
.foldcalw-col.is-weekend[_ngcontent-%COMP%] {
  background: var(--fold-color-surface-subtle);
}
.foldcalw-col.is-today[_ngcontent-%COMP%] {
  background: linear-gradient(180deg, var(--fold-color-primary-surface) 0%, transparent 28%);
  box-shadow: inset 0 2px 0 0 var(--fold-color-primary);
}

.foldcalw-head[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1px;
  padding: 0 0 var(--fold-space-xs);
  border: 0;
  border-bottom: 1px solid var(--fold-color-border-subtle);
  background: transparent;
  color: inherit;
  font: inherit;
  text-align: start;
  cursor: pointer;
}
.foldcalw-head[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--fold-color-primary);
  outline-offset: 2px;
}

.foldcalw-weekday[_ngcontent-%COMP%] {
  color: var(--fold-color-text-secondary);
  font-size: var(--fold-text-xs);
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.foldcalw-daynum[_ngcontent-%COMP%] {
  color: var(--fold-color-text);
  font-size: var(--fold-text-lg);
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  line-height: 1;
}

.is-today[_ngcontent-%COMP%]   .foldcalw-daynum[_ngcontent-%COMP%] {
  color: var(--fold-color-primary-text);
}

.foldcalw-list[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--fold-space-xs);
  margin: 0;
  padding: 0;
  list-style: none;
}

@container (max-width: 150px) {
  .foldcal-chip-sub[_ngcontent-%COMP%] {
    display: none;
  }
}
@container (max-width: 110px) {
  .foldcal-chip-icon[_ngcontent-%COMP%] {
    display: none;
  }
  .foldcal-chip[_ngcontent-%COMP%] {
    gap: var(--fold-space-xs);
    padding-inline-end: var(--fold-space-xs);
  }
}
@media (forced-colors: active) {
  .foldcalw-col.is-today[_ngcontent-%COMP%] {
    outline: 2px solid Highlight;
    outline-offset: -2px;
  }
}`]})}export{g as FoldCalendarWeekComponent};
