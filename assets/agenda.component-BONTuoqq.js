import{u as b,ag as z,aF as q,ap as $,X as B,aq as Q,A as u,ɵ as S,ar as V,F as R,w as _,x as p,aT as J,at as X,a9 as Z,E as y,d as r,B as C,g as M,e as s,f as d,q as l,D as g,j as a,k as m,l as P,L as N,i as I,o as E,au as L,m as F,aJ as G,av as K,N as h,O as x}from"./index-CrYE53GN.js";import{a as j}from"./chrome.directive-B9GLMz1j.js";import{j as D}from"./date-Blk--MT7.js";import{c as H}from"./slots.directive-DhOEMQi9.js";const W=8;function w(o){return o.tone==="warning"||o.tone==="alert"}function Y(o){return o===void 0||!Number.isFinite(o)?W:Math.max(1,Math.trunc(o))}function nn(o,t){const{from:n}=t,e=t.mode??"all",i=Y(t.limit),v=t.isActionable??w,U=[...o.filter(c=>c.end>=n).filter(c=>e!=="todo"||v(c))].sort((c,f)=>c.start<f.start?-1:c.start>f.start?1:0),O=new Map;for(const c of U){const f=c.start<n?n:c.start,A=O.get(f);if(A===void 0){O.set(f,[c]);continue}A.push(c)}const T=[...O.entries()].sort(([c],[f])=>c<f?-1:c>f?1:0);return{groups:T.slice(0,i).map(([c,f])=>({date:c,events:f})),truncated:Math.max(0,T.length-i)}}function on(o,t,n=w){return o.filter(e=>e.end>=t&&n(e)).length}const tn=(o,t)=>({$implicit:o,events:t}),en=o=>({$implicit:o,band:null}),an=(o,t)=>t.date,ln=(o,t)=>t.id;function dn(o,t){if(o&1&&(r(0,"span",4),s(1),d()),o&2){const n=l(2);a(),m(n.todoCount())}}function rn(o,t){if(o&1){const n=y();r(0,"aside",0)(1,"button",2),C("click",function(){h(n);const i=l();return x(i.toggleCollapsed())}),M(2,"fold-icon",3),_(3,dn,2,1,"span",4),r(4,"span",5),s(5),d()()()}if(o&2){const n=l();g("aria-label",n.chrome.l().agenda),a(),g("aria-expanded",!1)("aria-label",n.chrome.l().expand),a(2),p(n.todoCount()>0?3:-1),a(2),m(n.title())}}function cn(o,t){if(o&1&&(r(0,"span",8),s(1),d()),o&2){const n=l(2);a(),m(n.todoCount())}}function sn(o,t){if(o&1&&(r(0,"p",15),s(1),d()),o&2){const n=l(2);a(),m(n.emptyMessage())}}function fn(o,t){if(o&1&&L(0,19),o&2){const n=l().$implicit;F("ngTemplateOutlet",t)("ngTemplateOutletContext",G(2,tn,n.date,n.events))}}function _n(o,t){if(o&1&&(r(0,"span",24),s(1),d()),o&2){const n=l(2).$implicit,e=l(3);a(),m(e.monthName(n))}}function pn(o,t){if(o&1&&(r(0,"span",21),s(1),d(),r(2,"span",22)(3,"span",23),s(4),d(),_(5,_n,2,1,"span",24),d()),o&2){const n=l().$implicit,e=l(3);a(),m(e.dayNumber(n)),a(3),m(e.relativeName(n)),a(),p(e.monthName(n)?5:-1)}}function mn(o,t){if(o&1&&L(0,19),o&2){const n=l().$implicit;F("ngTemplateOutlet",t)("ngTemplateOutletContext",K(2,en,n))}}function gn(o,t){o&1&&M(0,"fold-icon",27),o&2&&F("name",t)}function un(o,t){if(o&1&&(r(0,"span",30),s(1),d()),o&2){const n=l(2).$implicit;a(),m(n.subline)}}function Cn(o,t){if(o&1&&(M(0,"span",26),_(1,gn,1,1,"fold-icon",27),r(2,"span",28)(3,"span",29),s(4),d(),_(5,un,2,1,"span",30),d()),o&2){let n;const e=l().$implicit;a(),p((n=e.icon)?1:-1,n),a(3),m(e.label),a(),p(e.subline?5:-1)}}function hn(o,t){if(o&1){const n=y();r(0,"li")(1,"button",25),C("click",function(){const i=h(n).$implicit,v=l(4);return x(v.eventClick.emit(i))}),_(2,mn,1,4,"ng-container",19)(3,Cn,6,3),d()()}if(o&2){let n;const e=t.$implicit,i=l(4);a(),g("data-tone",e.tone??"neutral"),a(),p((n=i.chrome.eventContent())?2:3,n)}}function xn(o,t){if(o&1){const n=y();r(0,"section",16)(1,"button",18),C("click",function(){const i=h(n).$implicit,v=l(3);return x(v.dayClick.emit(i.date))}),_(2,fn,1,5,"ng-container",19)(3,pn,6,3),d(),r(4,"ul",20),I(5,hn,4,2,"li",null,ln),d()()}if(o&2){let n;const e=t.$implicit,i=l(3);a(2),p((n=i.headingContent())?2:3,n),a(3),E(e.events)}}function vn(o,t){if(o&1&&(r(0,"p",17),s(1),d()),o&2){const n=l(3);a(),m(n.chrome.l().agendaMore(t))}}function bn(o,t){if(o&1&&(I(0,xn,7,1,"section",16,an),_(2,vn,2,1,"p",17)),o&2){let n;const e=l(2);E(e.groups()),a(2),p((n=e.truncated())?2:-1,n)}}function yn(o,t){if(o&1){const n=y();r(0,"aside",1)(1,"header",6)(2,"span",7),s(3),_(4,cn,2,1,"span",8),d(),r(5,"span",9)(6,"span",10)(7,"button",11),C("click",function(){h(n);const i=l();return x(i.toggleMode("todo"))}),s(8),d(),r(9,"button",11),C("click",function(){h(n);const i=l();return x(i.toggleMode("all"))}),s(10),d()(),r(11,"button",12),C("click",function(){h(n);const i=l();return x(i.toggleCollapsed())}),M(12,"fold-icon",13),d()()(),r(13,"div",14),_(14,sn,2,1,"p",15)(15,bn,3,1),d()()}if(o&2){const n=l();g("aria-label",n.chrome.l().agenda),a(3),P(" ",n.title()," "),a(),p(n.todoCount()>0?4:-1),a(2),g("aria-label",n.chrome.l().agendaModes),a(),N("is-on",n.mode()==="todo"),g("aria-pressed",n.mode()==="todo"),a(),P(" ",n.chrome.l().agendaTodo," "),a(),N("is-on",n.mode()==="all"),g("aria-pressed",n.mode()==="all"),a(),P(" ",n.chrome.l().agendaUpcoming," "),a(),g("aria-expanded",!0)("aria-label",n.chrome.l().collapse),a(3),p(n.groups().length===0?14:15)}}const Mn=7;class k{from=b.required();events=b([]);mode=z("todo");collapsed=z(!1);limit=b(8,{transform:q});isActionable=b(w);dayClick=$();eventClick=$();chrome=B(j);projectedHeading=Q(H);headingContent=u(()=>this.projectedHeading()?.template??null);agenda=u(()=>nn(this.events(),{from:this.from(),mode:this.mode(),limit:this.limit(),isActionable:this.isActionable()}));groups=u(()=>this.agenda().groups);truncated=u(()=>this.agenda().truncated);todoCount=u(()=>on(this.events(),this.from(),this.isActionable()));title=u(()=>this.mode()==="todo"?this.chrome.l().agendaTodo:this.chrome.l().agendaUpcoming);emptyMessage=u(()=>this.mode()==="todo"?this.chrome.l().agendaEmptyTodo:this.chrome.l().agendaEmptyUpcoming);dayNumber(t){return t.date.slice(8,10)}relativeName(t){const n=D(this.from(),t.date);return n===0?this.chrome.l().relativeToday:n===1?this.chrome.l().relativeTomorrow:this.chrome.format(t.date,"weekdayLong")}monthName(t){return D(this.from(),t.date)<Mn?"":this.chrome.format(t.date,"monthShort")}toggleMode(t){this.mode.set(t)}toggleCollapsed(){this.collapsed.set(!this.collapsed())}static ɵfac=function(n){return new(n||k)};static ɵcmp=S({type:k,selectors:[["fold-calendar-agenda"]],contentQueries:function(n,e,i){n&1&&X(i,e.projectedHeading,H,5),n&2&&Z()},inputs:{from:[1,"from"],events:[1,"events"],mode:[1,"mode"],collapsed:[1,"collapsed"],limit:[1,"limit"],isActionable:[1,"isActionable"]},outputs:{mode:"modeChange",collapsed:"collapsedChange",dayClick:"dayClick",eventClick:"eventClick"},features:[J([{directive:j,inputs:["locale","locale","labels","labels","formats","formats"]}])],decls:2,vars:1,consts:[[1,"foldcala","is-collapsed"],[1,"foldcala"],["type","button",1,"foldcala-spine",3,"click"],["name","inbox","size","sm"],[1,"foldcala-spine-count"],[1,"foldcala-spine-label"],[1,"foldcala-head"],[1,"foldcala-title"],[1,"foldcala-count"],[1,"foldcala-head-right"],["role","group",1,"foldcala-modes"],["type","button",3,"click"],["type","button",1,"foldcala-collapse",3,"click"],["name","chevron-right","size","sm"],[1,"foldcala-body"],[1,"foldcala-empty"],[1,"foldcala-group"],[1,"foldcala-more"],["type","button",1,"foldcala-date",3,"click"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"foldcala-list"],[1,"foldcala-daynum"],[1,"foldcala-dmeta"],[1,"foldcala-dname"],[1,"foldcala-dmonth"],["type","button",1,"foldcal-chip",3,"click"],[1,"foldcal-chip-bar"],["size","sm",1,"foldcal-chip-icon",3,"name"],[1,"foldcal-chip-body"],[1,"foldcal-chip-label"],[1,"foldcal-chip-sub"]],template:function(n,e){n&1&&_(0,rn,6,5,"aside",0)(1,yn,16,15,"aside",1),n&2&&p(e.collapsed()?0:1)},dependencies:[V,R],styles:[`@charset "UTF-8";
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
.foldcala[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  min-height: 0;
  width: var(--fold-calendar-agenda-width, 320px);
  height: var(--fold-calendar-agenda-height, 100%);
  border: 1px solid var(--fold-color-border);
  border-radius: var(--fold-radius-lg);
  background: var(--fold-color-surface-card);
  overflow: clip;
}


.foldcala.is-collapsed[_ngcontent-%COMP%] {
  width: var(--fold-calendar-agenda-spine-width, 44px);
}

.foldcala-spine[_ngcontent-%COMP%] {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--fold-space-md);
  padding: var(--fold-space-md) 0;
  border: 0;
  background: transparent;
  color: var(--fold-color-text-secondary);
  font: inherit;
  cursor: pointer;
}
.foldcala-spine[_ngcontent-%COMP%]:hover {
  background: var(--fold-color-surface-hover);
  color: var(--fold-color-text);
}
.foldcala-spine[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--fold-color-primary);
  outline-offset: -2px;
}

.foldcala-spine-label[_ngcontent-%COMP%] {
  writing-mode: vertical-rl;
  font-size: var(--fold-text-xs);
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.foldcala-spine-count[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: var(--fold-calendar-agenda-badge-size, 20px);
  padding: 0 var(--fold-space-xs);
  border-radius: var(--fold-radius-pill);
  background: var(--fold-color-warning-surface);
  color: var(--fold-color-warning-text);
  font-size: var(--fold-text-xs);
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}


.foldcala-head[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--fold-space-sm);
  padding: var(--fold-space-md);
  border-bottom: 1px solid var(--fold-color-border-subtle);
}

.foldcala-title[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: var(--fold-space-sm);
  color: var(--fold-color-text);
  font-size: var(--fold-text-sm);
  font-weight: 700;
}

.foldcala-count[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: var(--fold-calendar-agenda-badge-size, 20px);
  padding: 0 var(--fold-space-xs);
  border-radius: var(--fold-radius-pill);
  background: var(--fold-color-warning-surface);
  color: var(--fold-color-warning-text);
  font-size: var(--fold-text-xs);
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}

.foldcala-head-right[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: var(--fold-space-xs);
}

.foldcala-modes[_ngcontent-%COMP%] {
  display: inline-flex;
  padding: 2px;
  border-radius: var(--fold-radius-sm);
  background: var(--fold-color-surface-sunken);
}
.foldcala-modes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  padding: 2px var(--fold-space-sm);
  border: 0;
  border-radius: var(--fold-radius-xs);
  background: transparent;
  color: var(--fold-color-text-secondary);
  font: inherit;
  font-size: var(--fold-text-xs);
  font-weight: 500;
  cursor: pointer;
}
.foldcala-modes[_ngcontent-%COMP%]   button.is-on[_ngcontent-%COMP%] {
  background: var(--fold-color-surface-raised);
  color: var(--fold-color-text);
}
.foldcala-modes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--fold-color-primary);
  outline-offset: 1px;
}

.foldcala-collapse[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--fold-calendar-agenda-control-size, 26px);
  height: var(--fold-calendar-agenda-control-size, 26px);
  padding: 0;
  border: 1px solid var(--fold-color-border-subtle);
  border-radius: var(--fold-radius-sm);
  background: var(--fold-color-surface-subtle);
  color: var(--fold-color-text-secondary);
  cursor: pointer;
}
.foldcala-collapse[_ngcontent-%COMP%]:hover {
  background: var(--fold-color-surface-hover);
  color: var(--fold-color-text);
}
.foldcala-collapse[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--fold-color-primary);
  outline-offset: 1px;
}


.foldcala-body[_ngcontent-%COMP%] {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: var(--fold-space-sm);
}

.foldcala-group[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: var(--fold-space-sm);
  padding: var(--fold-space-sm) 0;
}
.foldcala-group[_ngcontent-%COMP%]    + .foldcala-group[_ngcontent-%COMP%] {
  border-top: 1px solid var(--fold-color-border-subtle);
}

.foldcala-date[_ngcontent-%COMP%] {
  display: flex;
  align-items: baseline;
  gap: var(--fold-space-xs);
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  text-align: start;
  cursor: pointer;
}
.foldcala-date[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--fold-color-primary);
  outline-offset: 2px;
}

.foldcala-daynum[_ngcontent-%COMP%] {
  color: var(--fold-color-text);
  font-size: var(--fold-text-lg);
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  line-height: 1;
}

.foldcala-dmeta[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
}

.foldcala-dname[_ngcontent-%COMP%] {
  color: var(--fold-color-text-secondary);
  font-size: var(--fold-text-xs);
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.foldcala-dmonth[_ngcontent-%COMP%] {
  color: var(--fold-color-text-secondary);
  font-size: var(--fold-text-xs);
  text-transform: uppercase;
}

.foldcala-list[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--fold-space-xs);
  margin: 0;
  padding: 0;
  list-style: none;
}

.foldcala-empty[_ngcontent-%COMP%] {
  margin: 0;
  padding: var(--fold-space-xl) var(--fold-space-md);
  color: var(--fold-color-text-secondary);
  font-size: var(--fold-text-sm);
  text-align: center;
}

@media (forced-colors: active) {
  .foldcala-modes[_ngcontent-%COMP%]   button.is-on[_ngcontent-%COMP%] {
    outline: 1px solid Highlight;
  }
}`]})}export{k as FoldCalendarAgendaComponent};
