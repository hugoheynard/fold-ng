import{u as g,aE as Y,ao as V,X as en,A as S,ɵ as an,aq as ln,F as rn,d as f,g as k,i as h,f as c,w as v,T as K,D as x,j as r,o as C,x as y,W as M,aS as dn,E as I,B as N,e as m,q as i,L as D,k as b,at as Q,m as R,aI as cn,au as sn,N as B,O as U}from"./index-Bm0v4t0h.js";import{c as F,d as Z,a as q}from"./chrome.directive-Q5NAmwqJ.js";import{f as fn,a as un,F as gn,b as pn}from"./cell-B0T9VNLR.js";import{k as E,l as A,d as _n}from"./date-Blk--MT7.js";import{a as mn,f as bn}from"./span-CK1dHpIZ.js";const hn=1;function Cn(o){const e=o.map((d,s)=>({interval:d,index:s})).sort((d,s)=>d.interval.startMinute!==s.interval.startMinute?d.interval.startMinute-s.interval.startMinute:s.interval.endMinute-s.interval.startMinute-(d.interval.endMinute-d.interval.startMinute)),n=o.map(()=>({column:0,columns:hn}));let t=[],a=[];const l=()=>{for(const d of t)n[d]={column:n[d]?.column??0,columns:a.length};t=[],a=[]};for(const{interval:d,index:s}of e){!a.some(w=>w>d.startMinute)&&t.length>0&&l();const p=a.findIndex(w=>w<=d.startMinute),P=p===-1?a.length:p;a[P]=d.endMinute,n[s]={column:P,columns:a.length},t.push(s)}return t.length>0&&l(),n}const G=7,vn=2,L=60;function X(o){return o.startTime!==void 0&&o.endTime!==void 0}function xn(o,e,n,t){const a=A(o.start),l=A(o.end);if(e<a||e>l)return null;const d=e===a?F(o.startTime??"00:00"):0,s=e===l?F(o.endTime??"24:00"):Z,O=Math.max(n,Math.min(d,s)),p=Math.min(t,Math.max(d,s));return p<=O?null:{from:O,to:p,before:e>a||d<n,after:e<l||s>t}}function yn(o){const e=Math.max(1,Math.trunc(o.dayCount??G)),n=o.snapToWeek!==!1&&e===G,t=A(n?_n(o.date,o.weekStartsOn??"mon"):o.date),a=F(o.dayStart??"00:00"),l=F(o.dayEnd??"24:00");return{firstDay:t,dayCount:e,startMinute:a,endMinute:l>a?l:Z}}function kn(o,e){const n=[],t=Math.ceil(o/L)*L;for(let a=t;a<e;a+=L){const l=Math.floor(a/L);n.push(`${l<10?"0":""}${l}:00`)}return n}function Mn(o,e){const{firstDay:n,dayCount:t,startMinute:a,endMinute:l}=yn(e),d=l-a,s=o.filter(_=>X(_)),O=o.filter(_=>!X(_)),p=new Map,P=mn(bn(O).filter(_=>_.endDay>=n&&_.startDay<n+t),{start:E(n),startDay:n,dayCount:t},Math.max(0,Math.trunc(e.maxAllDayLanes??vn)),p),w={month:E(n).slice(0,7),today:e.today,weekendDays:pn(e.weekendDays),counts:fn(o,n,n+t-1),hidden:gn};return{columns:Array.from({length:t},(_,tn)=>{const $=n+tn,on=E($),j=s.map(u=>({event:u,window:xn(u,$,a,l)})).filter(u=>u.window!==null),H=Cn(j.map(({window:u})=>({startMinute:u.from,endMinute:u.to})));return{day:un($,w),blocks:j.map(({event:u,window:T},W)=>({key:`${u.id}@${on}`,event:u,top:(T.from-a)/d,height:(T.to-T.from)/d,column:H[W]?.column??0,columns:H[W]?.columns??1,continuesBefore:T.before,continuesAfter:T.after}))}}),allDay:P.bands,allDayHiddenCount:P.hiddenCount,hours:kn(a,l),startMinute:a,endMinute:l}}const On=(o,e)=>({$implicit:o,band:e}),Pn=o=>({$implicit:o,band:null}),J=(o,e)=>e.day.date,nn=(o,e)=>e.key;function wn(o,e){if(o&1){const n=I();f(0,"button",10),N("click",function(){const a=B(n).$implicit,l=i();return U(l.dayClick.emit(a.day.date))}),f(1,"span",11),m(2),c(),f(3,"span",12),m(4),c()()}if(o&2){const n=e.$implicit,t=i();D("is-today",n.day.isToday)("is-weekend",n.day.isWeekend),x("aria-label",t.columnLabel(n))("aria-current",n.day.isToday?"date":null),r(2),b(t.weekdayName(n)),r(2),b(n.day.dayOfMonth)}}function Tn(o,e){if(o&1&&Q(0,17),o&2){const n=i().$implicit;R("ngTemplateOutlet",e)("ngTemplateOutletContext",cn(2,On,n.event,n))}}function Fn(o,e){if(o&1&&(k(0,"span",18),f(1,"span",19)(2,"span",20),m(3),c()()),o&2){const n=i().$implicit,t=i(2);r(3),b(t.bandLabel(n))}}function Dn(o,e){if(o&1){const n=I();f(0,"button",16),N("click",function(){const a=B(n).$implicit,l=i(2);return U(l.eventClick.emit(a.event))}),v(1,Tn,1,5,"ng-container",17)(2,Fn,4,1),c()}if(o&2){let n;const t=e.$implicit,a=i(2);M("grid-column",t.startColumn+1+" / "+(t.endColumn+2))("grid-row",t.lane+1),D("continues-before",t.continuesBefore)("continues-after",t.continuesAfter),x("data-tone",t.event.tone??"neutral"),r(),y((n=a.chrome.eventContent())?1:2,n)}}function Ln(o,e){if(o&1&&(f(0,"div",4)(1,"span",13),m(2),c(),f(3,"div",14),h(4,Dn,3,10,"button",15,nn),c()()),o&2){const n=i();r(2),b(n.chrome.l().allDay),r(),M("grid-template-columns","repeat("+n.grid().columns.length+", 1fr)")("grid-template-rows",n.stripRows()),r(),C(n.grid().allDay)}}function $n(o,e){if(o&1&&(f(0,"span",21),m(1),c()),o&2){const n=e.$implicit,t=e.$index,a=i();M("top",t/a.grid().hours.length*100,"%"),D("is-first",t===0),r(),b(a.hourLabel(n))}}function Sn(o,e){o&1&&k(0,"span",24)}function En(o,e){if(o&1&&k(0,"span",27),o&2){const n=i(2);M("top",(n.nowOffset()??0)*100,"%")}}function An(o,e){if(o&1&&Q(0,17),o&2){const n=i().$implicit;R("ngTemplateOutlet",e)("ngTemplateOutletContext",sn(2,Pn,n.event))}}function zn(o,e){o&1&&k(0,"fold-icon",30),o&2&&R("name",e)}function In(o,e){if(o&1&&(f(0,"span",33),m(1),c()),o&2){const n=i(2).$implicit;r(),b(n.event.subline)}}function Nn(o,e){if(o&1&&(k(0,"span",29),v(1,zn,1,1,"fold-icon",30),f(2,"span",31)(3,"span",32),m(4),c(),v(5,In,2,1,"span",33),c()),o&2){let n;const t=i().$implicit;r(),y((n=t.event.icon)?1:-1,n),r(3),b(t.event.label),r(),y(t.event.subline?5:-1)}}function Rn(o,e){if(o&1){const n=I();f(0,"button",28),N("click",function(){const a=B(n).$implicit,l=i(2);return U(l.eventClick.emit(a.event))}),v(1,An,1,4,"ng-container",17)(2,Nn,6,3),c()}if(o&2){let n;const t=e.$implicit,a=i(2);M("top",t.top*100,"%")("height",t.height*100,"%")("inset-inline-start",t.column/t.columns*100,"%")("width",1/t.columns*100,"%"),D("continues-before",t.continuesBefore)("continues-after",t.continuesAfter),x("data-tone",t.event.tone??"neutral")("aria-label",a.blockLabel(t)),r(),y((n=a.chrome.eventContent())?1:2,n)}}function Bn(o,e){if(o&1&&(f(0,"section",22)(1,"span",23),h(2,Sn,1,0,"span",24,K),c(),v(4,En,1,2,"span",25),h(5,Rn,3,15,"button",26,nn),c()),o&2){const n=e.$implicit,t=i();D("is-weekend",n.day.isWeekend),x("aria-label",t.columnLabel(n)),r(2),C(t.grid().hours),r(2),y(n.day.isToday&&t.nowOffset()!==null?4:-1),r(),C(n.blocks)}}class z{date=g.required();events=g([]);dayCount=g(7,{transform:Y});today=g();now=g();dayStart=g("00:00");dayEnd=g("24:00");weekStartsOn=g();weekendDays=g();maxAllDayLanes=g(2,{transform:Y});dayClick=V();eventClick=V();chrome=en(q);grid=S(()=>Mn(this.events(),{date:this.date(),dayCount:this.dayCount(),weekStartsOn:this.chrome.anchor(this.weekStartsOn()),weekendDays:this.chrome.weekend(this.weekendDays()),today:this.today(),dayStart:this.dayStart(),dayEnd:this.dayEnd(),maxAllDayLanes:this.maxAllDayLanes()}));stripRows=S(()=>`repeat(${this.grid().allDay.reduce((n,t)=>Math.max(n,t.lane+1),0)}, var(--fold-calendar-timegrid-lane, 20px))`);nowOffset=S(()=>{const e=this.now();if(e===void 0)return null;const{startMinute:n,endMinute:t}=this.grid(),a=F(e);return a<n||a>t?null:(a-n)/(t-n)});weekdayName(e){return this.chrome.format(e.day.date,"weekdayShort")}hourLabel(e){return this.chrome.formatTime(e)}columnLabel(e){const n=this.chrome.l(),t=[this.chrome.format(e.day.date,"dateFull")];return e.day.isToday&&t.push(n.today),e.day.eventCount>0&&t.push(n.eventCount(e.day.eventCount)),t.join(", ")}blockLabel(e){const{startTime:n,endTime:t,label:a}=e.event;return n===void 0||t===void 0?a:`${this.chrome.formatTime(n)} – ${this.chrome.formatTime(t)}, ${a}`}bandLabel(e){return e.groupSize>1?e.event.groupLabel??e.event.label:e.event.label}static ɵfac=function(n){return new(n||z)};static ɵcmp=an({type:z,selectors:[["fold-calendar-timegrid"]],inputs:{date:[1,"date"],events:[1,"events"],dayCount:[1,"dayCount"],today:[1,"today"],now:[1,"now"],dayStart:[1,"dayStart"],dayEnd:[1,"dayEnd"],weekStartsOn:[1,"weekStartsOn"],weekendDays:[1,"weekendDays"],maxAllDayLanes:[1,"maxAllDayLanes"]},outputs:{dayClick:"dayClick",eventClick:"eventClick"},features:[dn([{directive:q,inputs:["locale","locale","labels","labels","formats","formats"]}])],decls:13,vars:5,consts:[["role","group",1,"foldcaltg"],[1,"foldcaltg-head"],["aria-hidden","true",1,"foldcaltg-corner"],["type","button",1,"foldcaltg-dayhead",3,"is-today","is-weekend"],[1,"foldcaltg-allday"],["tabindex","0","role","group",1,"foldcaltg-body"],["aria-hidden","true",1,"foldcaltg-gutter"],[1,"foldcaltg-hour",3,"is-first","top"],[1,"foldcaltg-cols"],[1,"foldcaltg-col",3,"is-weekend"],["type","button",1,"foldcaltg-dayhead",3,"click"],[1,"foldcaltg-weekday"],[1,"foldcaltg-daynum"],[1,"foldcaltg-gutter-label"],[1,"foldcaltg-strip"],["type","button",1,"foldcal-chip","foldcaltg-band",3,"continues-before","continues-after","gridColumn","gridRow"],["type","button",1,"foldcal-chip","foldcaltg-band",3,"click"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"foldcal-chip-bar"],[1,"foldcal-chip-body"],[1,"foldcal-chip-label"],[1,"foldcaltg-hour"],[1,"foldcaltg-col"],["aria-hidden","true",1,"foldcaltg-rules"],[1,"foldcaltg-rule"],["aria-hidden","true",1,"foldcaltg-now",3,"top"],["type","button",1,"foldcaltg-block",3,"continues-before","continues-after","top","height","insetInlineStart","width"],["aria-hidden","true",1,"foldcaltg-now"],["type","button",1,"foldcaltg-block",3,"click"],[1,"foldcaltg-block-bar"],["size","sm",1,"foldcaltg-block-icon",3,"name"],[1,"foldcaltg-block-body"],[1,"foldcaltg-block-label"],[1,"foldcaltg-block-sub"]],template:function(n,t){n&1&&(f(0,"div",0)(1,"div",1),k(2,"span",2),h(3,wn,5,8,"button",3,J),c(),v(5,Ln,6,5,"div",4),f(6,"div",5)(7,"div",6),h(8,$n,2,5,"span",7,K),c(),f(10,"div",8),h(11,Bn,7,4,"section",9,J),c()()()),n&2&&(x("aria-label",t.chrome.l().grid),r(3),C(t.grid().columns),r(2),y(t.grid().allDay.length>0?5:-1),r(),x("aria-label",t.chrome.l().hours),r(2),C(t.grid().hours),r(2),M("grid-template-columns","repeat("+t.grid().columns.length+", 1fr)"),r(),C(t.grid().columns))},dependencies:[ln,rn],styles:[`@charset "UTF-8";
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
  font-weight: var(--fold-weight-medium);
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
.foldcaltg[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  min-height: 0;
  border: 1px solid var(--fold-color-border);
  border-radius: var(--fold-radius-md);
  background: var(--fold-color-surface-card);
  overflow: clip;
}


.foldcaltg-head[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: var(--fold-calendar-timegrid-gutter, 56px) repeat(auto-fit, minmax(0, 1fr));
  grid-auto-flow: column;
  grid-auto-columns: minmax(0, 1fr);
  background: var(--fold-color-surface-subtle);
  border-bottom: 1px solid var(--fold-color-border);
}

.foldcaltg-corner[_ngcontent-%COMP%] {
  border-inline-end: 1px solid var(--fold-color-border-subtle);
}

.foldcaltg-dayhead[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
  padding: var(--fold-space-sm) var(--fold-space-xs);
  border: 0;
  border-inline-end: 1px solid var(--fold-color-border-subtle);
  background: transparent;
  color: inherit;
  font: inherit;
  cursor: pointer;
}
.foldcaltg-dayhead[_ngcontent-%COMP%]:last-child {
  border-inline-end: 0;
}
.foldcaltg-dayhead[_ngcontent-%COMP%]:hover {
  background: var(--fold-color-surface-hover);
}
.foldcaltg-dayhead[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--fold-color-primary);
  outline-offset: -2px;
}
.foldcaltg-dayhead.is-weekend[_ngcontent-%COMP%] {
  background: var(--fold-color-surface-sunken);
}

.foldcaltg-weekday[_ngcontent-%COMP%] {
  color: var(--fold-color-text-secondary);
  font-size: var(--fold-text-xs);
  font-weight: var(--fold-weight-semibold);
  letter-spacing: var(--fold-tracking-caps);
  text-transform: uppercase;
}

.foldcaltg-daynum[_ngcontent-%COMP%] {
  color: var(--fold-color-text-secondary);
  font-size: var(--fold-text-base);
  font-variant-numeric: tabular-nums;
}

.foldcaltg-dayhead.is-today[_ngcontent-%COMP%] {
  box-shadow: inset 0 2px 0 0 var(--fold-color-primary);
}
.foldcaltg-dayhead.is-today[_ngcontent-%COMP%]   .foldcaltg-daynum[_ngcontent-%COMP%] {
  color: var(--fold-color-primary-text);
  font-weight: var(--fold-weight-bold);
}


.foldcaltg-allday[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: var(--fold-calendar-timegrid-gutter, 56px) 1fr;
  padding-block: var(--fold-space-xs);
  border-bottom: 1px solid var(--fold-color-border);
}

.foldcaltg-gutter-label[_ngcontent-%COMP%] {
  padding-inline: var(--fold-space-xs);
  border-inline-end: 1px solid var(--fold-color-border-subtle);
  color: var(--fold-color-text-secondary);
  font-size: var(--fold-text-xs);
  text-align: end;
}

.foldcaltg-strip[_ngcontent-%COMP%] {
  display: grid;
  gap: 1px;
}

.foldcaltg-band[_ngcontent-%COMP%] {
  min-width: 0;
  margin-inline: var(--fold-calendar-band-gutter, var(--fold-space-xs));
  padding-block: 0;
  font-size: var(--fold-text-xs);
}
.foldcaltg-band.continues-before[_ngcontent-%COMP%] {
  margin-inline-start: 0;
  border-start-start-radius: 0;
  border-end-start-radius: 0;
}
.foldcaltg-band.continues-after[_ngcontent-%COMP%] {
  margin-inline-end: 0;
  border-start-end-radius: 0;
  border-end-end-radius: 0;
}


.foldcaltg-body[_ngcontent-%COMP%] {
  display: grid;
}
.foldcaltg-body[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--fold-color-primary);
  outline-offset: -2px;
}
.foldcaltg-body[_ngcontent-%COMP%] {
  grid-template-columns: var(--fold-calendar-timegrid-gutter, 56px) 1fr;
  height: var(--fold-calendar-timegrid-height, 640px);
  overflow-y: auto;
}

.foldcaltg-gutter[_ngcontent-%COMP%] {
  position: relative;
  border-inline-end: 1px solid var(--fold-color-border-subtle);
}

.foldcaltg-hour[_ngcontent-%COMP%] {
  position: absolute;
  inset-inline: 0;
  padding-inline-end: var(--fold-space-xs);
  color: var(--fold-color-text-secondary);
  font-size: var(--fold-text-xs);
  font-variant-numeric: tabular-nums;
  text-align: end;
  transform: translateY(-0.5em);
}
.foldcaltg-hour.is-first[_ngcontent-%COMP%] {
  transform: none;
}

.foldcaltg-cols[_ngcontent-%COMP%] {
  display: grid;
}

.foldcaltg-col[_ngcontent-%COMP%] {
  position: relative;
  border-inline-end: 1px solid var(--fold-color-border-subtle);
}
.foldcaltg-col[_ngcontent-%COMP%]:last-of-type {
  border-inline-end: 0;
}
.foldcaltg-col.is-weekend[_ngcontent-%COMP%] {
  background: var(--fold-color-surface-subtle);
}

.foldcaltg-rules[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
}

.foldcaltg-rule[_ngcontent-%COMP%] {
  flex: 1;
  border-top: 1px solid var(--fold-color-border-subtle);
}

.foldcaltg-now[_ngcontent-%COMP%] {
  position: absolute;
  inset-inline: 0;
  z-index: 2;
  height: 2px;
  background: var(--fold-color-alert);
}
.foldcaltg-now[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  inset-inline-start: 0;
  top: -3px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--fold-color-alert);
}

.foldcaltg-block[_ngcontent-%COMP%] {
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: stretch;
  gap: var(--fold-space-xs);
  min-height: 14px;
  padding: 0;
  padding-inline-end: var(--fold-space-xs);
  border: 0;
  border-radius: var(--fold-calendar-band-radius, var(--fold-radius-sm));
  background: var(--fold-color-surface-raised);
  color: var(--fold-color-text);
  font: inherit;
  font-size: var(--fold-text-xs);
  text-align: start;
  cursor: pointer;
  overflow: hidden;
  transition: filter var(--fold-motion-fast) ease;
}
.foldcaltg-block[_ngcontent-%COMP%]:hover {
  z-index: 3;
  filter: brightness(1.08);
}
.foldcaltg-block[_ngcontent-%COMP%]:focus-visible {
  z-index: 3;
  outline: 2px solid var(--fold-color-primary);
  outline-offset: -2px;
}
.foldcaltg-block.continues-before[_ngcontent-%COMP%] {
  border-start-start-radius: 0;
  border-start-end-radius: 0;
}
.foldcaltg-block.continues-after[_ngcontent-%COMP%] {
  border-end-start-radius: 0;
  border-end-end-radius: 0;
}

.foldcaltg-block-bar[_ngcontent-%COMP%] {
  flex: 0 0 var(--fold-calendar-bar-width, 3px);
  align-self: stretch;
  background: var(--fold-color-text-muted);
}

.foldcaltg-block-body[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-width: 0;
  padding-block: 1px;
}

.foldcaltg-block-icon[_ngcontent-%COMP%] {
  flex: none;
  align-self: flex-start;
  margin-block-start: 1px;
}

.foldcaltg-block-label[_ngcontent-%COMP%] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: var(--fold-weight-medium);
}

.foldcaltg-block-sub[_ngcontent-%COMP%] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--fold-color-text-secondary);
}

.foldcaltg-block[data-tone=success][_ngcontent-%COMP%] {
  background: var(--fold-color-success-surface);
  color: var(--fold-color-success-text);
}
.foldcaltg-block[data-tone=success][_ngcontent-%COMP%]   .foldcaltg-block-bar[_ngcontent-%COMP%] {
  background: var(--fold-color-success);
}

.foldcaltg-block[data-tone=warning][_ngcontent-%COMP%] {
  background: var(--fold-color-warning-surface);
  color: var(--fold-color-warning-text);
}
.foldcaltg-block[data-tone=warning][_ngcontent-%COMP%]   .foldcaltg-block-bar[_ngcontent-%COMP%] {
  background: var(--fold-color-warning);
}

.foldcaltg-block[data-tone=alert][_ngcontent-%COMP%] {
  background: var(--fold-color-alert-surface);
  color: var(--fold-color-alert-text);
}
.foldcaltg-block[data-tone=alert][_ngcontent-%COMP%]   .foldcaltg-block-bar[_ngcontent-%COMP%] {
  background: var(--fold-color-alert);
}

.foldcaltg-block[data-tone=muted][_ngcontent-%COMP%] {
  background: transparent;
  color: var(--fold-color-text-secondary);
}
.foldcaltg-block[data-tone=muted][_ngcontent-%COMP%]   .foldcaltg-block-bar[_ngcontent-%COMP%] {
  background: var(--fold-color-text-faded);
}
.foldcaltg-block[data-tone=muted][_ngcontent-%COMP%]   .foldcaltg-block-label[_ngcontent-%COMP%] {
  color: var(--fold-color-text-secondary);
  text-decoration: line-through;
  text-decoration-thickness: 1px;
}

@media (forced-colors: active) {
  .foldcaltg-block[_ngcontent-%COMP%] {
    border: 1px solid CanvasText;
  }
  .foldcaltg-block-bar[_ngcontent-%COMP%] {
    forced-color-adjust: none;
  }
}

@media (forced-colors: active) {
  .foldcaltg-dayhead.is-today[_ngcontent-%COMP%] {
    outline: 2px solid Highlight;
    outline-offset: -2px;
  }
  .foldcaltg-now[_ngcontent-%COMP%] {
    background: Highlight;
    forced-color-adjust: none;
  }
}
@media (prefers-reduced-motion: reduce) {
  .foldcaltg-block[_ngcontent-%COMP%] {
    transition: none;
  }
}

@media print {
  .foldcaltg-body[_ngcontent-%COMP%] {
    height: auto;
    overflow: visible;
  }
  .foldcaltg-block[_ngcontent-%COMP%] {
    border: 1px solid GrayText;
    background: Canvas;
    color: CanvasText;
  }
  .foldcaltg-block-bar[_ngcontent-%COMP%] {
    print-color-adjust: exact;
  }
}`]})}export{z as FoldCalendarTimegridComponent};
