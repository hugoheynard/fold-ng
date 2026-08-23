import{s as R,A as c,a6 as nn,aC as en,ag as on,u as m,a0 as I,aF as tn,ap as D,X as $,Y as an,aq as z,aS as rn,ɵ as ln,ar as dn,F as cn,d as i,w as p,i as v,v as sn,f,j as d,x as h,o as x,aT as fn,D as P,L as A,at as un,a9 as _n,e as g,q as l,l as Y,k as O,W as F,E,B as N,N as w,O as k,au as L,m as T,av as mn,aJ as Q,g as X}from"./index-DegsM91Y.js";import{a as B}from"./chrome.directive-Bw473tdp.js";import{c as H,b,d as M,a as J,k as pn,l as K,h as hn,i as gn,m as Cn}from"./date-Blk--MT7.js";import{f as bn,a as yn,b as vn}from"./cell-B0T9VNLR.js";import{f as xn,a as wn}from"./span-CK1dHpIZ.js";import{F as q,a as G}from"./slots.directive-D_2IQn89.js";function kn(o,n,e="mon"){switch(o){case"ArrowLeft":return b(n,-1);case"ArrowRight":return b(n,1);case"ArrowUp":return b(n,-7);case"ArrowDown":return b(n,7);case"Home":return M(n,e);case"End":return b(M(n,e),6);case"PageUp":return H(n,-1);case"PageDown":return H(n,1);default:return null}}function U(o,n){if(o===null||!J(n))return!1;const e=o.querySelector(`[data-fold-day="${n}"]`);return e instanceof HTMLElement?(e.focus(),!0):!1}class Mn{host;focused=R(null);deferred=R(null);constructor(n){this.host=n}activeDate=c(()=>{const n=this.focused();return n!==null&&this.host.dates().has(n)?n:this.host.fallback()});tabIndexFor(n){return n===this.activeDate()?0:-1}onFocus(n){this.focused.set(n)}move(n,e){const t=kn(n,e,this.host.weekStartsOn());return t===null?!1:(this.focused.set(t),U(this.host.root(),t)||(this.host.page(t),this.deferred.set(t),this.focusAfterRender()),!0)}focusAfterRender(){nn(()=>{const n=en(this.deferred);n!==null&&(this.deferred.set(null),U(this.host.root(),n))},{injector:this.host.injector})}}const u=7,On=6,Pn=3;function Fn(o,n,e){const t=Array.from({length:e},()=>[]),a=n+e*u-1;for(const r of o){if(r.endDay<n||r.startDay>a)continue;const s=Math.max(0,Math.floor((r.startDay-n)/u)),_=Math.min(e-1,Math.floor((r.endDay-n)/u));for(let y=s;y<=_;y+=1)t[y]?.push(r)}for(const r of t)r.sort((s,_)=>s.startDay!==_.startDay?s.startDay-_.startDay:_.endDay-_.startDay-(s.endDay-s.startDay));return t}function Z(o){return o===void 0||!Number.isFinite(o)?Pn:Math.max(0,Math.trunc(o))}function Tn(o){const n=o.weekStartsOn??"mon",e=K(M(hn(o.month),n)),a=(K(M(gn(o.month),n))-e)/u+1;return{firstRowDay:e,rowCount:o.fixedWeeks===!0?Math.max(On,a):a}}function Dn(o,n){if(!J(n.month))return[];const e=Z(n.maxLanes),{firstRowDay:t,rowCount:a}=Tn(n),r=Fn(xn(o),t,a),s=new Map,_=r.map((C,W)=>{const j={startDay:t+W*u,start:pn(t+W*u),dayCount:u};return{week:j,...wn(C,j,e,s)}}),y={month:n.month.slice(0,7),today:n.today,weekendDays:vn(n.weekendDays),counts:bn(o,t,t+a*u-1),hidden:s};return _.map(C=>({start:C.week.start,days:$n(C.week.startDay,y),bands:C.bands,hiddenCount:C.hiddenCount}))}function $n(o,n){return Array.from({length:u},(e,t)=>yn(o+t,n))}const Sn=o=>({$implicit:o}),An=(o,n)=>({$implicit:o,band:n}),En=(o,n)=>({$implicit:o,date:n}),Nn=(o,n)=>n.start,V=(o,n)=>n.date,Ln=(o,n)=>n.key;function Wn(o,n){if(o&1&&(i(0,"span",1),g(1),f()),o&2){const e=l();d(),Y(" ",e.chrome.l().weekNumberShort," ")}}function jn(o,n){if(o&1&&(i(0,"span",2),g(1),f()),o&2){const e=n.$implicit;d(),O(e)}}function Rn(o,n){if(o&1&&(i(0,"span",5),g(1),f()),o&2){const e=l().$implicit,t=l();P("aria-label",t.chrome.l().weekNumber(t.weekNumber(e))),d(),O(t.weekNumber(e))}}function In(o,n){if(o&1&&L(0,9),o&2){const e=l().$implicit;T("ngTemplateOutlet",n)("ngTemplateOutletContext",mn(2,Sn,e))}}function zn(o,n){if(o&1&&(i(0,"span",10),g(1),f()),o&2){const e=l().$implicit;d(),O(e.dayOfMonth)}}function Bn(o,n){if(o&1){const e=E();i(0,"div",8),N("click",function(){const a=w(e).$implicit,r=l(2);return k(r.dayClick.emit(a.date))})("focus",function(){const a=w(e).$implicit,r=l(2);return k(r.onDayFocus(a.date))})("keydown",function(a){const r=w(e).$implicit,s=l(2);return k(s.onDayKeydown(a,r.date))}),p(1,In,1,4,"ng-container",9)(2,zn,2,1,"span",10),f()}if(o&2){let e;const t=n.$implicit,a=n.$index,r=l(2);F("grid-column",a+1+r.columnOffset()),A("is-outside",!t.inMonth)("is-today",t.isToday)("is-weekend",t.isWeekend),P("data-fold-day",t.date)("data-fold-day-modifiers",r.dayModifierAttr(t))("tabindex",r.dayTabIndex(t.date))("aria-label",r.dayLabel(t))("aria-current",t.isToday?"date":null),d(),h((e=r.dayContent())?1:2,e)}}function Hn(o,n){if(o&1&&L(0,9),o&2){const e=l().$implicit;T("ngTemplateOutlet",n)("ngTemplateOutletContext",Q(2,An,e.event,e))}}function Kn(o,n){o&1&&X(0,"fold-icon",13),o&2&&T("name",n)}function qn(o,n){if(o&1&&(i(0,"span",15),g(1),f()),o&2){const e=l(2).$implicit;d(),O(e.groupSize)}}function Gn(o,n){if(o&1&&(X(0,"span",12),p(1,Kn,1,1,"fold-icon",13),i(2,"span",14),g(3),f(),p(4,qn,2,1,"span",15)),o&2){let e;const t=l().$implicit,a=l(2);d(),h((e=a.bandIcon(t))?1:-1,e),d(2),O(a.bandLabel(t)),d(),h(t.groupSize>1?4:-1)}}function Un(o,n){if(o&1){const e=E();i(0,"button",11),N("click",function(){const a=w(e).$implicit,r=l(2);return k(r.eventClick.emit(a.event))}),p(1,Hn,1,5,"ng-container",9)(2,Gn,5,3),f()}if(o&2){let e;const t=n.$implicit,a=l(2);F("grid-column",t.startColumn+1+a.columnOffset()+" / "+(t.endColumn+2+a.columnOffset()))("grid-row",t.lane+2),A("continues-before",t.continuesBefore)("continues-after",t.continuesAfter)("half-start",t.startHalfDay!==void 0)("half-end",t.endHalfDay!==void 0),P("data-tone",t.event.tone??"neutral")("title",a.bandLabel(t)),d(),h((e=a.chrome.eventContent())?1:2,e)}}function Vn(o,n){if(o&1&&L(0,9),o&2){const e=l(2).$implicit;T("ngTemplateOutlet",n)("ngTemplateOutletContext",Q(2,En,e.hiddenCount,e.date))}}function Yn(o,n){if(o&1&&g(0),o&2){const e=l(2).$implicit,t=l(2);Y(" ",t.chrome.l().moreEvents(e.hiddenCount)," ")}}function Qn(o,n){if(o&1){const e=E();i(0,"button",17),N("click",function(){w(e);const a=l().$implicit,r=l(2);return k(r.overflowClick.emit(a.date))}),p(1,Vn,1,5,"ng-container",9)(2,Yn,1,1),f()}if(o&2){let e;const t=l().$index,a=l(2);F("grid-column",t+1+a.columnOffset())("grid-row",a.overflowRow()),d(),h((e=a.overflowContent())?1:2,e)}}function Xn(o,n){if(o&1&&p(0,Qn,3,5,"button",16),o&2){const e=n.$implicit;h(e.hiddenCount>0?0:-1)}}function Jn(o,n){if(o&1&&(i(0,"div",4),p(1,Rn,2,2,"span",5),v(2,Bn,3,14,"div",6,V),v(4,Un,3,15,"button",7,Ln),v(6,Xn,1,1,null,null,V),f()),o&2){const e=n.$implicit,t=l();F("grid-template-rows",t.rowTemplate()),d(),h(t.showWeekNumbers()?1:-1),d(),x(e.days),d(2),x(e.bands),d(2),x(e.days)}}const Zn="2026-01-05",ne=new Set(["Enter"," ","Spacebar"]);class S{month=on.required();events=m([]);today=m();weekStartsOn=m();weekendDays=m();showWeekNumbers=m(!1,{transform:I});maxLanes=m(3,{transform:tn});fixedWeeks=m(!1,{transform:I});dayModifiers=m();dayClick=D();eventClick=D();overflowClick=D();chrome=$(B);host=$(an);projectedDay=z(q);projectedOverflow=z(G);dayContent=c(()=>this.projectedDay()?.template??null);overflowContent=c(()=>this.projectedOverflow()?.template??null);lanes=c(()=>Z(this.maxLanes()));anchor=c(()=>this.chrome.anchor(this.weekStartsOn()));weeks=c(()=>Dn(this.events(),{month:this.month(),weekStartsOn:this.anchor(),weekendDays:this.chrome.weekend(this.weekendDays()),maxLanes:this.lanes(),fixedWeeks:this.fixedWeeks(),today:this.today()}));weekdayNames=c(()=>{const n=M(Zn,this.anchor());return Array.from({length:7},(e,t)=>this.chrome.format(b(n,t),"weekdayShort"))});columnOffset=c(()=>this.showWeekNumbers()?1:0);weekNumber(n){return Cn(n.start)}rowTemplate=c(()=>`var(--fold-calendar-month-header-row, 30px) repeat(${this.lanes()}, var(--fold-calendar-month-lane, 22px)) auto`);overflowRow=c(()=>this.lanes()+2);gridDates=c(()=>new Set(this.weeks().flatMap(n=>n.days.map(e=>e.date))));defaultStop=c(()=>{const n=this.today();return n!==void 0&&this.gridDates().has(n)?n:this.weeks().flatMap(e=>e.days).find(e=>e.inMonth)?.date??null});focus=new Mn({dates:this.gridDates,fallback:this.defaultStop,weekStartsOn:this.anchor,root:()=>this.rootElement(),page:n=>this.month.set(n),injector:$(rn)});dayTabIndex(n){return this.focus.tabIndexFor(n)}dayModifierAttr(n){const e=this.dayModifiers()?.(n)??[];return e.length===0?null:e.join(" ")}dayLabel(n){const e=this.chrome.l(),t=[this.chrome.format(n.date,"dateFull")];return n.isToday&&t.push(e.today),n.eventCount>0&&t.push(e.eventCount(n.eventCount)),n.hiddenCount>0&&t.push(e.hiddenCount(n.hiddenCount)),t.join(", ")}bandLabel(n){return n.groupSize>1?n.event.groupLabel??n.event.label:n.event.label}bandIcon(n){return n.continuesBefore?null:n.event.icon??null}onDayFocus(n){this.focus.onFocus(n)}onDayKeydown(n,e){if(n.target===n.currentTarget){if(ne.has(n.key)){n.preventDefault(),this.dayClick.emit(e);return}this.focus.move(n.key,e)&&n.preventDefault()}}rootElement(){const n=this.host.nativeElement;return n instanceof HTMLElement?n:null}static ɵfac=function(e){return new(e||S)};static ɵcmp=ln({type:S,selectors:[["fold-calendar-month"]],contentQueries:function(e,t,a){e&1&&un(a,t.projectedDay,q,5)(a,t.projectedOverflow,G,5),e&2&&_n(2)},hostAttrs:["data-fold-calendar","","role","grid"],hostVars:3,hostBindings:function(e,t){e&2&&(P("aria-label",t.chrome.l().grid),A("has-week-numbers",t.showWeekNumbers()))},inputs:{month:[1,"month"],events:[1,"events"],today:[1,"today"],weekStartsOn:[1,"weekStartsOn"],weekendDays:[1,"weekendDays"],showWeekNumbers:[1,"showWeekNumbers"],maxLanes:[1,"maxLanes"],fixedWeeks:[1,"fixedWeeks"],dayModifiers:[1,"dayModifiers"]},outputs:{month:"monthChange",dayClick:"dayClick",eventClick:"eventClick",overflowClick:"overflowClick"},features:[fn([{directive:B,inputs:["locale","locale","labels","labels","formats","formats"]}])],decls:6,vars:1,consts:[["role","row",1,"foldcal-weekdays"],["role","columnheader",1,"foldcal-weekday","foldcal-weeknum-head"],["role","columnheader",1,"foldcal-weekday"],["role","row",1,"foldcal-week",3,"gridTemplateRows"],["role","row",1,"foldcal-week"],["role","rowheader",1,"foldcal-weeknum"],["role","gridcell",1,"foldcal-day",3,"is-outside","is-today","is-weekend","gridColumn"],["type","button","aria-hidden","true","tabindex","-1",1,"foldcal-band",3,"continues-before","continues-after","half-start","half-end","gridColumn","gridRow"],["role","gridcell",1,"foldcal-day",3,"click","focus","keydown"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"foldcal-daynum"],["type","button","aria-hidden","true","tabindex","-1",1,"foldcal-band",3,"click"],[1,"foldcal-band-bar"],["size","sm",1,"foldcal-band-icon",3,"name"],[1,"foldcal-band-label"],[1,"foldcal-band-count"],["type","button","aria-hidden","true","tabindex","-1",1,"foldcal-overflow",3,"gridColumn","gridRow"],["type","button","aria-hidden","true","tabindex","-1",1,"foldcal-overflow",3,"click"]],template:function(e,t){e&1&&(i(0,"div",0),p(1,Wn,2,1,"span",1),v(2,jn,2,1,"span",2,sn),f(),v(4,Jn,8,3,"div",3,Nn)),e&2&&(d(),h(t.showWeekNumbers()?1:-1),d(),x(t.weekdayNames()),d(2),x(t.weeks()))},dependencies:[dn,cn],styles:[`@charset "UTF-8";
[_nghost-%COMP%] {
  display: flex;
  flex-direction: column;
  min-height: 0;
  border: 1px solid var(--fold-color-border);
  border-radius: var(--fold-radius-md);
  background: var(--fold-color-surface-card);
  overflow: clip;
}


.foldcal-weekdays[_ngcontent-%COMP%], 
.foldcal-week[_ngcontent-%COMP%] {
  grid-template-columns: repeat(7, 1fr);
}

.has-week-numbers[_nghost-%COMP%]   .foldcal-weekdays[_ngcontent-%COMP%], 
.has-week-numbers[_nghost-%COMP%]   .foldcal-week[_ngcontent-%COMP%] {
  grid-template-columns: var(--fold-calendar-month-week-number-width, 34px) repeat(7, 1fr);
}

.foldcal-weekdays[_ngcontent-%COMP%] {
  display: grid;
  background: var(--fold-color-surface-subtle);
  border-bottom: 1px solid var(--fold-color-border);
}

.foldcal-weekday[_ngcontent-%COMP%] {
  padding: var(--fold-space-sm) var(--fold-space-md);
  color: var(--fold-color-text-secondary);
  font-size: var(--fold-text-xs);
  font-weight: var(--fold-weight-semibold);
  letter-spacing: var(--fold-tracking-caps);
  text-transform: uppercase;
}


.foldcal-week[_ngcontent-%COMP%] {
  display: grid;
  flex: 1;
  min-height: var(--fold-calendar-month-row-min-height, 112px);
  border-bottom: 1px solid var(--fold-color-border-subtle);
}
.foldcal-week[_ngcontent-%COMP%]:last-child {
  border-bottom: 0;
}

.foldcal-weeknum[_ngcontent-%COMP%] {
  grid-row: 1/-1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: var(--fold-space-sm);
  border-inline-end: 1px solid var(--fold-color-border-subtle);
  background: var(--fold-color-surface-subtle);
  color: var(--fold-color-text-secondary);
  font-size: var(--fold-text-xs);
  font-variant-numeric: tabular-nums;
}

.foldcal-weeknum-head[_ngcontent-%COMP%] {
  color: var(--fold-color-text-secondary);
  text-align: center;
}



.foldcal-day[_ngcontent-%COMP%] {
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: var(--fold-calendar-month-cell-padding, var(--fold-space-sm)) var(--fold-calendar-month-cell-padding, var(--fold-space-sm)) var(--fold-space-xs);
  border-inline-end: 1px solid var(--fold-color-border-subtle);
  color: inherit;
  font: inherit;
  text-align: start;
  cursor: pointer;
  transition: background-color var(--fold-motion-fast) ease;
}
.foldcal-day[_ngcontent-%COMP%]:last-of-type {
  border-inline-end: 0;
}
.foldcal-day[_ngcontent-%COMP%]:hover:not(.is-outside) {
  background: var(--fold-color-surface-hover);
}
.foldcal-day[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--fold-color-primary);
  outline-offset: -2px;
}
.foldcal-day.is-weekend[_ngcontent-%COMP%]:not(.is-outside) {
  background: var(--fold-color-surface-subtle);
}
.foldcal-day.is-outside[_ngcontent-%COMP%] {
  background: var(--fold-color-surface-sunken);
}
.foldcal-day.is-outside[_ngcontent-%COMP%]   .foldcal-daynum[_ngcontent-%COMP%] {
  color: var(--fold-color-text-secondary);
}
.foldcal-day.is-today[_ngcontent-%COMP%] {
  background: linear-gradient(180deg, var(--fold-color-primary-surface) 0%, transparent 64%);
  box-shadow: inset 0 2px 0 0 var(--fold-color-primary);
}
.foldcal-day.is-today[_ngcontent-%COMP%]   .foldcal-daynum[_ngcontent-%COMP%] {
  background: var(--fold-color-primary);
  color: var(--fold-color-on-primary);
  font-weight: var(--fold-weight-bold);
}

.foldcal-daynum[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: var(--fold-calendar-month-daynum-size, 22px);
  height: var(--fold-calendar-month-daynum-size, 22px);
  padding: 0 var(--fold-space-xs);
  border-radius: var(--fold-radius-sm);
  color: var(--fold-color-text-secondary);
  font-size: var(--fold-text-sm);
  font-variant-numeric: tabular-nums;
}


.foldcal-band[_ngcontent-%COMP%] {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: var(--fold-space-xs);
  margin-block: 1px;
  margin-inline: var(--fold-calendar-band-gutter, var(--fold-space-xs));
  padding: 0;
  padding-inline-end: var(--fold-space-sm);
  border: 0;
  border-radius: var(--fold-calendar-band-radius, var(--fold-radius-sm));
  background: var(--fold-color-surface-raised);
  color: var(--fold-color-text);
  font: inherit;
  font-size: var(--fold-text-xs);
  font-weight: var(--fold-weight-medium);
  line-height: var(--fold-calendar-month-lane, 22px);
  text-align: start;
  cursor: pointer;
  overflow: hidden;
  transition: filter var(--fold-motion-fast) ease, box-shadow var(--fold-motion-fast) ease;
}
.foldcal-band[_ngcontent-%COMP%]:hover {
  z-index: 2;
  filter: brightness(1.08);
  box-shadow: var(--fold-shadow-sm);
}
.foldcal-band.continues-before[_ngcontent-%COMP%] {
  margin-inline-start: 0;
  border-start-start-radius: 0;
  border-end-start-radius: 0;
  padding-inline-start: var(--fold-space-xs);
}
.foldcal-band.continues-before[_ngcontent-%COMP%]   .foldcal-band-bar[_ngcontent-%COMP%] {
  display: none;
}
.foldcal-band.continues-before[_ngcontent-%COMP%]::before {
  content: "‹";
  flex: none;
  color: var(--fold-color-text-faded);
}
.foldcal-band.continues-after[_ngcontent-%COMP%] {
  margin-inline-end: 0;
  border-start-end-radius: 0;
  border-end-end-radius: 0;
}
.foldcal-band.continues-after[_ngcontent-%COMP%]::after {
  content: "›";
  flex: none;
  color: var(--fold-color-text-faded);
}
.foldcal-band.half-start[_ngcontent-%COMP%] {
  border-end-start-radius: var(--fold-radius-lg);
}
.foldcal-band.half-end[_ngcontent-%COMP%] {
  border-start-end-radius: var(--fold-radius-lg);
}

[dir=rtl][_ngcontent-%COMP%]   .foldcal-band.continues-before[_ngcontent-%COMP%]::before {
  content: "›";
}
[dir=rtl][_ngcontent-%COMP%]   .foldcal-band.continues-after[_ngcontent-%COMP%]::after {
  content: "‹";
}

.foldcal-band-bar[_ngcontent-%COMP%] {
  flex: 0 0 var(--fold-calendar-bar-width, 3px);
  align-self: stretch;
  background: var(--fold-color-text-muted);
}

.foldcal-band-icon[_ngcontent-%COMP%] {
  flex: none;
  margin-inline-start: 2px;
  opacity: 0.9;
}

.foldcal-band-label[_ngcontent-%COMP%] {
  flex: 1 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.foldcal-band-count[_ngcontent-%COMP%] {
  flex: none;
  padding: 0 var(--fold-space-xs);
  border-radius: var(--fold-radius-pill);
  background: var(--fold-color-surface-sunken);
  color: var(--fold-color-text-secondary);
  font-variant-numeric: tabular-nums;
}

.foldcal-band[data-tone=success][_ngcontent-%COMP%] {
  background: var(--fold-color-success-surface);
  color: var(--fold-color-success-text);
}
.foldcal-band[data-tone=success][_ngcontent-%COMP%]   .foldcal-band-bar[_ngcontent-%COMP%] {
  background: var(--fold-color-success);
}

.foldcal-band[data-tone=warning][_ngcontent-%COMP%] {
  background: var(--fold-color-warning-surface);
  color: var(--fold-color-warning-text);
}
.foldcal-band[data-tone=warning][_ngcontent-%COMP%]   .foldcal-band-bar[_ngcontent-%COMP%] {
  background: var(--fold-color-warning);
}

.foldcal-band[data-tone=alert][_ngcontent-%COMP%] {
  background: var(--fold-color-alert-surface);
  color: var(--fold-color-alert-text);
}
.foldcal-band[data-tone=alert][_ngcontent-%COMP%]   .foldcal-band-bar[_ngcontent-%COMP%] {
  background: var(--fold-color-alert);
}

.foldcal-band[data-tone=muted][_ngcontent-%COMP%] {
  background: transparent;
  color: var(--fold-color-text-secondary);
}
.foldcal-band[data-tone=muted][_ngcontent-%COMP%]   .foldcal-band-bar[_ngcontent-%COMP%] {
  background: var(--fold-color-text-faded);
}
.foldcal-band[data-tone=muted][_ngcontent-%COMP%]   .foldcal-band-label[_ngcontent-%COMP%] {
  color: var(--fold-color-text-secondary);
  text-decoration: line-through;
  text-decoration-thickness: 1px;
}

@media (forced-colors: active) {
  .foldcal-band[_ngcontent-%COMP%] {
    border: 1px solid CanvasText;
  }
  .foldcal-band-bar[_ngcontent-%COMP%] {
    forced-color-adjust: none;
  }
}

.foldcal-overflow[_ngcontent-%COMP%] {
  justify-self: start;
  align-self: start;
  z-index: 1;
  margin-inline: var(--fold-calendar-band-gutter, var(--fold-space-xs));
  padding: 0 var(--fold-space-xs);
  border: 0;
  border-radius: var(--fold-calendar-band-radius, var(--fold-radius-sm));
  background: transparent;
  color: var(--fold-color-text-secondary);
  font: inherit;
  font-size: var(--fold-text-xs);
  font-weight: var(--fold-weight-medium);
  cursor: pointer;
}
.foldcal-overflow[_ngcontent-%COMP%]:hover {
  color: var(--fold-color-text);
  background: var(--fold-color-surface-hover);
}


@media (forced-colors: active) {
  .foldcal-day.is-today[_ngcontent-%COMP%] {
    outline: 2px solid Highlight;
    outline-offset: -2px;
  }
  .foldcal-day[_ngcontent-%COMP%]:focus-visible {
    outline-color: Highlight;
  }
  .foldcal-day.is-outside[_ngcontent-%COMP%]   .foldcal-daynum[_ngcontent-%COMP%] {
    opacity: 0.6;
  }
  .foldcal-day.is-weekend[_ngcontent-%COMP%] {
    border-block-end: 2px solid GrayText;
  }
}
@media (prefers-reduced-motion: reduce) {
  .foldcal-day[_ngcontent-%COMP%], 
   .foldcal-band[_ngcontent-%COMP%] {
    transition: none;
  }
}

@media print {
  [_nghost-%COMP%] {
    border-color: CanvasText;
    background: Canvas;
  }
  .foldcal-weekdays[_ngcontent-%COMP%], 
   .foldcal-weekday[_ngcontent-%COMP%], 
   .foldcal-day[_ngcontent-%COMP%], 
   .foldcal-daynum[_ngcontent-%COMP%], 
   .foldcal-weeknum[_ngcontent-%COMP%], 
   .foldcal-overflow[_ngcontent-%COMP%] {
    background: Canvas;
    color: CanvasText;
  }
  .foldcal-week[_ngcontent-%COMP%], 
   .foldcal-day[_ngcontent-%COMP%], 
   .foldcal-weeknum[_ngcontent-%COMP%] {
    border-color: GrayText;
  }
  .foldcal-day.is-today[_ngcontent-%COMP%] {
    background: Canvas;
    box-shadow: inset 0 2px 0 0 CanvasText;
  }
  .foldcal-day.is-today[_ngcontent-%COMP%]   .foldcal-daynum[_ngcontent-%COMP%] {
    font-weight: var(--fold-weight-bold);
    text-decoration: underline;
  }
  .foldcal-day.is-outside[_ngcontent-%COMP%] {
    opacity: 0.55;
  }
  .foldcal-band[_ngcontent-%COMP%] {
    border: 1px solid GrayText;
    background: Canvas;
    color: CanvasText;
    box-shadow: none;
  }
  .foldcal-band-bar[_ngcontent-%COMP%] {
    print-color-adjust: exact;
  }
}`]})}export{S as FoldCalendarMonthComponent};
