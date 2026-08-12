import{ag as v,u,X as P,A as s,aq as j,ɵ as S,ar as z,F as D,a1 as V,d as i,B as p,e as M,f as l,g,w as C,a2 as A,j as r,l as q,D as b,x as w,aT as L,at as E,a9 as I,au as N,q as _,m as F,aU as Q,k as W,E as H,N as R,O as Y}from"./index-B4ar3yeD.js";import{FoldViewToggleComponent as B}from"./view-toggle.component-Chr4k1Rf.js";import{f as y,b as U,a as x}from"./chrome.directive-D13SdpSp.js";import{d as c,b as d,i as T,h,n as O,c as X,f as $}from"./date-Blk--MT7.js";import{b as k}from"./slots.directive-BDWGcl_-.js";function G(n,e,t,o="mon"){return n==="day"?d(e,t):n==="week"?d(c(e,o),t*7):X(h(e),t)}function J(n,e,t="mon"){if(n==="day")return{from:e,to:e};if(n==="week"){const f=c(e,t);return{from:f,to:d(f,6)}}if(n==="list")return{from:h(e),to:T(e)};const o=c(h(e),t),a=d(c(T(e),t),6);return{from:o,to:a}}function K(n,e,t,o="mon"){if(n==="day")return y(t,"dateFullWeekday").format(O(e));if(n==="week"){const a=c(e,o);return U(a,d(a,6),t,"dayMonthYear")}return y(t,"monthYear").format(O(e))}const Z=[[["","actions",""]]],tt=["[actions]"],et=(n,e,t,o)=>({$implicit:n,from:e,to:t,view:o});function ot(n,e){if(n&1&&(i(0,"div",7),N(1,10),l()),n&2){const t=_();r(),F("ngTemplateOutlet",e)("ngTemplateOutletContext",Q(2,et,t.title(),t.range().from,t.range().to,t.view()))}}function nt(n,e){if(n&1&&(i(0,"h2",7),M(1),l()),n&2){const t=_();r(),W(t.title())}}function at(n,e){if(n&1){const t=H();i(0,"fold-view-toggle",11),p("valueChange",function(a){R(t);const f=_();return Y(f.onViewChange(a))}),l()}if(n&2){const t=_();F("ariaLabel",t.chrome.l().viewSwitch)("options",t.options())("value",t.view())}}class m{date=v.required();view=v("month");views=u(["month","week","day","list"]);today=u();weekStartsOn=u();chrome=P(x);anchor=s(()=>this.chrome.anchor(this.weekStartsOn()));projectedTitle=j(k);titleContent=s(()=>this.projectedTitle()?.template??null);title=s(()=>K(this.view(),this.date(),this.chrome.locale(),this.anchor()));range=s(()=>J(this.view(),this.date(),this.anchor()));options=s(()=>{const e=this.chrome.l(),t={month:e.viewMonth,week:e.viewWeek,day:e.viewDay,list:e.viewList};return this.views().map(o=>typeof o=="string"?{value:o,label:t[o]??o}:{value:o.value,label:o.label})});shift(e){this.date.set(G(this.view(),this.date(),e,this.anchor()))}goToday(){this.date.set(this.today()??$())}onViewChange(e){this.options().some(o=>o.value===e)&&this.view.set(e)}static ɵfac=function(t){return new(t||m)};static ɵcmp=S({type:m,selectors:[["fold-calendar-toolbar"]],contentQueries:function(t,o,a){t&1&&E(a,o.projectedTitle,k,5),t&2&&I()},inputs:{date:[1,"date"],view:[1,"view"],views:[1,"views"],today:[1,"today"],weekStartsOn:[1,"weekStartsOn"]},outputs:{date:"dateChange",view:"viewChange"},features:[L([{directive:x,inputs:["locale","locale","labels","labels","formats","formats"]}])],ngContentSelectors:tt,decls:14,vars:5,consts:[[1,"foldcalt"],[1,"foldcalt-lead"],["type","button",1,"foldcalt-today",3,"click"],[1,"foldcalt-steps"],["type","button",1,"foldcalt-step",3,"click"],["name","chevron-left","size","sm"],["name","chevron-right","size","sm"],["aria-live","polite",1,"foldcalt-title"],[1,"foldcalt-trail"],["size","sm",3,"ariaLabel","options","value"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["size","sm",3,"valueChange","ariaLabel","options","value"]],template:function(t,o){if(t&1&&(V(Z),i(0,"div",0)(1,"div",1)(2,"button",2),p("click",function(){return o.goToday()}),M(3),l(),i(4,"div",3)(5,"button",4),p("click",function(){return o.shift(-1)}),g(6,"fold-icon",5),l(),i(7,"button",4),p("click",function(){return o.shift(1)}),g(8,"fold-icon",6),l()(),C(9,ot,2,7,"div",7)(10,nt,2,1,"h2",7),l(),i(11,"div",8),C(12,at,1,3,"fold-view-toggle",9),A(13),l()()),t&2){let a;r(3),q(" ",o.chrome.l().todayAction," "),r(2),b("aria-label",o.chrome.l().previousPeriod),r(2),b("aria-label",o.chrome.l().nextPeriod),r(2),w((a=o.titleContent())?9:10,a),r(3),w(o.options().length>1?12:-1)}},dependencies:[z,D,B],styles:[`[_nghost-%COMP%] {
  display: block;
  container-type: inline-size;
}

.foldcalt[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--fold-space-md);
}

.foldcalt-lead[_ngcontent-%COMP%], 
.foldcalt-trail[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--fold-space-sm);
  min-width: 0;
}

.foldcalt-today[_ngcontent-%COMP%] {
  padding: var(--fold-space-xs) var(--fold-space-md);
  border: 1px solid var(--fold-color-border);
  border-radius: var(--fold-radius-sm);
  background: var(--fold-color-surface-raised);
  color: var(--fold-color-text);
  font: inherit;
  font-size: var(--fold-text-sm);
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color var(--fold-motion-fast, 120ms) ease;
}
.foldcalt-today[_ngcontent-%COMP%]:hover {
  background: var(--fold-color-surface-hover);
}
.foldcalt-today[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--fold-color-primary);
  outline-offset: 2px;
}

.foldcalt-steps[_ngcontent-%COMP%] {
  display: inline-flex;
  gap: 1px;
}

.foldcalt-step[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--fold-calendar-toolbar-step-size, 28px);
  height: var(--fold-calendar-toolbar-step-size, 28px);
  padding: 0;
  border: 1px solid var(--fold-color-border);
  border-radius: var(--fold-radius-sm);
  background: var(--fold-color-surface-raised);
  color: var(--fold-color-text-secondary);
  cursor: pointer;
  transition: background-color var(--fold-motion-fast, 120ms) ease, color var(--fold-motion-fast, 120ms) ease;
}
.foldcalt-step[_ngcontent-%COMP%]:hover {
  background: var(--fold-color-surface-hover);
  color: var(--fold-color-text);
}
.foldcalt-step[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--fold-color-primary);
  outline-offset: 2px;
}

.foldcalt-title[_ngcontent-%COMP%] {
  margin: 0;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--fold-color-text);
  font-size: var(--fold-text-lg);
  font-weight: 700;
  letter-spacing: -0.01em;
}

@container (max-width: 560px) {
  .foldcalt-lead[_ngcontent-%COMP%] {
    flex-wrap: wrap;
  }
  .foldcalt-title[_ngcontent-%COMP%] {
    order: -1;
    flex: 1 0 100%;
  }
}
@media (forced-colors: active) {
  .foldcalt-today[_ngcontent-%COMP%]:focus-visible, 
   .foldcalt-step[_ngcontent-%COMP%]:focus-visible {
    outline-color: Highlight;
  }
}
@media (prefers-reduced-motion: reduce) {
  .foldcalt-today[_ngcontent-%COMP%], 
   .foldcalt-step[_ngcontent-%COMP%] {
    transition: none;
  }
}`]})}const dt=Object.freeze(Object.defineProperty({__proto__:null,FoldCalendarToolbarComponent:m},Symbol.toStringTag,{value:"Module"}));export{m as F,J as f,dt as t};
