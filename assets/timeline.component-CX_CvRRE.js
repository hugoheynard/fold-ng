import{x as c,K as y,az as k,aG as w,y as m,ɵ as F,aA as q,F as $,aH as z,W as L,Z as T,I as _,j as i,J as s,aI as H,au as N,d as a,f as r,q as l,i as A,o as D,aC as g,Q as f,D as C,P as v,m as p,g as M,am as b,e as h,k as P,A as I,B as Q,C as j,E,H as V,aJ as B,aK as J}from"./index-DmFeHmC3.js";const K=["node"],O=e=>({$implicit:e}),S=(e,t)=>t.key;function G(e,t){e&1&&M(0,"fold-icon",5),e&2&&p("name",t)("size",11)}function R(e,t){e&1&&(a(0,"span",9),h(1),r()),e&2&&(i(),P(t))}function U(e,t){e&1&&(a(0,"span",9),h(1),B(2,"date"),r()),e&2&&(i(),P(J(2,1,t,"mediumDate")))}function W(e,t){if(e&1&&_(0,R,2,1,"span",9)(1,U,3,4,"span",9),e&2){let n;const o=l().$implicit;s((n=o.displayDate)?0:(n=o.date)?1:-1,n)}}function Z(e,t){if(e&1&&g(0,7),e&2){const n=l().$implicit;p("ngTemplateOutlet",t)("ngTemplateOutletContext",b(2,O,n))}}function X(e,t){if(e&1&&(a(0,"span",8),h(1),r()),e&2){const n=l().$implicit;i(),P(n.label)}}function Y(e,t){if(e&1&&(a(0,"span",4),_(1,G,1,2,"fold-icon",5),r(),a(2,"span",6),_(3,W,2,1),_(4,Z,1,4,"ng-container",7)(5,X,2,1,"span",8),r()),e&2){let n,o;const d=t.$implicit,u=l();i(),s((n=d.icon)?1:-1,n),i(2),s(u.datePlacement()!=="hidden"?3:-1),i(),s((o=u.nodeTemplate())?4:5,o)}}function nn(e,t){if(e&1&&(a(0,"span",10),M(1,"span",11),r()),e&2){const n=l(2);v("aria-valuenow",n.fillNow())("aria-valuetext",n.stepText())("aria-label",n.ariaLabel()),i(),I("width",n.fillPct(),"%")}}function tn(e,t){if(e&1){const n=Q();a(0,"button",14),j("click",function(){E(n);const d=l().$implicit,u=l(2);return V(u.onNode(d))}),g(1,7),r()}if(e&2){const n=l().$implicit,o=l(2),d=f(1);C("filled",o.isFilled(n))("hollow",o.isHollow(n)),p("title",o.nodeTitle()),i(),p("ngTemplateOutlet",d)("ngTemplateOutletContext",b(7,O,n))}}function en(e,t){if(e&1&&(a(0,"div",15),g(1,7),r()),e&2){const n=l().$implicit,o=l(2),d=f(1);C("filled",o.isFilled(n))("hollow",o.isHollow(n)),i(),p("ngTemplateOutlet",d)("ngTemplateOutletContext",b(6,O,n))}}function on(e,t){if(e&1&&_(0,tn,2,9,"button",12)(1,en,2,8,"div",13),e&2){const n=t.$implicit,o=l(2);s(o.isClickable(n)?0:1)}}function ln(e,t){if(e&1&&(_(0,nn,2,5,"span",10),A(1,on,2,1,null,null,S)),e&2){const n=l();s(n.orientation()==="horizontal"?0:-1),i(),D(n.nodes())}}function an(e,t){if(e&1&&(a(0,"nav",16),g(1,17),r()),e&2){const n=l(),o=f(3);C("h",n.orientation()==="horizontal")("square",n.square())("date-above",n.datePlacement()==="above")("date-inline",n.datePlacement()==="inline"),v("aria-label",n.ariaLabel()),i(),p("ngTemplateOutlet",o)}}function rn(e,t){if(e&1&&(a(0,"div",18),g(1,17),r()),e&2){const n=l(),o=f(3);C("h",n.orientation()==="horizontal")("square",n.square())("date-above",n.datePlacement()==="above")("date-inline",n.datePlacement()==="inline"),v("aria-label",n.ariaLabel()),i(),p("ngTemplateOutlet",o)}}class x{nodes=c.required();orientation=c("vertical");progress=c(null);ariaLabel=c();nodeTitle=c("");square=c(!1,{transform:y});variant=c("plain");datePlacement=c("below");nodeClick=k();nodeTemplate=w("node");isClickable(t){return t.clickable??t.id!==null}interactive=m(()=>this.nodes().some(t=>this.isClickable(t)));doneCount=m(()=>this.nodes().filter(t=>t.done).length);fillPct=m(()=>{const t=this.progress();if(t!==null)return t;const n=this.nodes().length,o=this.doneCount();return n>1&&o>0?(o-1)/(n-1)*100:0});fillNow=m(()=>Math.round(this.fillPct()));stepText=m(()=>{const t=this.doneCount();return t>0?`${t} / ${this.nodes().length}`:null});isFilled(t){return t.done??t.id===null}isHollow(t){return(t.variant??this.variant())==="hollow"}onNode(t){this.isClickable(t)&&this.nodeClick.emit(t.id??t.key)}static ɵfac=function(n){return new(n||x)};static ɵcmp=F({type:x,selectors:[["fold-timeline"]],contentQueries:function(n,o,d){n&1&&H(d,o.nodeTemplate,K,5),n&2&&N()},inputs:{nodes:[1,"nodes"],orientation:[1,"orientation"],progress:[1,"progress"],ariaLabel:[1,"ariaLabel"],nodeTitle:[1,"nodeTitle"],square:[1,"square"],variant:[1,"variant"],datePlacement:[1,"datePlacement"]},outputs:{nodeClick:"nodeClick"},decls:6,vars:1,consts:[["dot",""],["body",""],[1,"tlv",3,"h","square","date-above","date-inline"],["role","group",1,"tlv",3,"h","square","date-above","date-inline"],[1,"dot"],[3,"name","size"],[1,"txt"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"nlabel"],[1,"date"],["role","progressbar","aria-valuemin","0","aria-valuemax","100",1,"rail"],[1,"rail-fill"],["type","button",1,"node",3,"filled","hollow","title"],[1,"node","inert",3,"filled","hollow"],["type","button",1,"node",3,"click","title"],[1,"node","inert"],[1,"tlv"],[3,"ngTemplateOutlet"],["role","group",1,"tlv"]],template:function(n,o){n&1&&(L(0,Y,6,3,"ng-template",null,0,T)(2,ln,3,1,"ng-template",null,1,T),_(4,an,2,10,"nav",2)(5,rn,2,10,"div",3)),n&2&&(i(4),s(o.interactive()?4:5))},dependencies:[q,$,z],styles:[`@charset "UTF-8";
[_nghost-%COMP%] {
  display: block;
  user-select: none;
}

.tlv[_ngcontent-%COMP%] {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
}


.tlv[_ngcontent-%COMP%]:not(.h)::before {
  content: "";
  position: absolute;
  left: 12px;
  top: 12px;
  bottom: 12px;
  width: 2px;
  background: var(--fold-color-border);
  border-radius: 2px;
}

.node[_ngcontent-%COMP%] {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  gap: 11px;
  padding: 7px 6px;
  border: 0;
  background: none;
  border-radius: var(--fold-radius-sm);
  cursor: pointer;
  text-align: left;
  transition: background var(--fold-motion-fast);
}

.node.inert[_ngcontent-%COMP%] {
  cursor: default;
}

.node[_ngcontent-%COMP%]:not(.inert):hover {
  background: var(--fold-color-surface-raised);
}

.dot[_ngcontent-%COMP%] {
  flex-shrink: 0;
  width: 26px;
  height: 26px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--fold-color-surface-raised);
  border: 2px solid var(--fold-color-border);
  color: var(--fold-color-text-muted);
  transition: border-color var(--fold-motion-fast), color var(--fold-motion-fast), background var(--fold-motion-fast);
}


.node.filled[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {
  background: var(--fold-color-primary);
  border-color: var(--fold-color-primary);
  color: var(--fold-color-on-primary);
}


.node.hollow.filled[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {
  background: var(--fold-color-surface-raised);
  border-color: var(--fold-color-primary);
  color: var(--fold-color-primary-text);
}


.node[_ngcontent-%COMP%]:not(.inert):not(.filled)   .dot[_ngcontent-%COMP%] {
  border-color: color-mix(in srgb, var(--fold-color-primary) 45%, var(--fold-color-border));
  color: var(--fold-color-primary-text);
}

.node[_ngcontent-%COMP%]:not(.inert):hover   .dot[_ngcontent-%COMP%] {
  background: var(--fold-color-primary-surface);
  border-color: var(--fold-color-primary);
}


.tlv.square[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {
  border-radius: var(--fold-radius-sm);
}

.txt[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-top: 1px;
  min-width: 0;
}

.date[_ngcontent-%COMP%] {
  font-size: 10px;
  color: var(--fold-color-text-muted);
  font-variant-numeric: tabular-nums;
  
  order: 1;
}

.nlabel[_ngcontent-%COMP%] {
  font-size: var(--fold-text-xs);
  font-weight: 600;
  color: var(--fold-color-text-secondary);
  line-height: 1.3;
}

.node.filled[_ngcontent-%COMP%]   .nlabel[_ngcontent-%COMP%], 
.node[_ngcontent-%COMP%]:not(.inert):hover   .nlabel[_ngcontent-%COMP%] {
  color: var(--fold-color-text);
}


.tlv.date-above[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {
  order: 0;
}


.tlv.date-inline[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%] {
  flex-direction: row;
  align-items: baseline;
  gap: 6px;
}


.tlv.h[_ngcontent-%COMP%] {
  flex-direction: row;
  justify-content: space-between;
  gap: 0;
}

.tlv.h[_ngcontent-%COMP%]   .rail[_ngcontent-%COMP%] {
  position: absolute;
  top: 13px;
  left: 13px;
  right: 13px;
  height: 2px;
  background: var(--fold-color-border);
  border-radius: 2px;
}

.tlv.h[_ngcontent-%COMP%]   .rail-fill[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0 auto 0 0;
  height: 100%;
  background: var(--fold-color-primary);
  border-radius: 2px;
  transition: width var(--fold-motion-base);
}

.tlv.h[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%] {
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 0;
  text-align: center;
}

.tlv.h[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%] {
  align-items: center;
  padding-top: 0;
  text-align: center;
}


@media (max-width: 700px) {
  .tlv.h[_ngcontent-%COMP%] {
    flex-direction: column;
    gap: 0;
    align-items: stretch;
  }
  .tlv.h[_ngcontent-%COMP%]   .rail[_ngcontent-%COMP%] {
    left: 12px;
    right: auto;
    top: 16px;
    bottom: 16px;
    width: 2px;
    height: auto;
  }
  .tlv.h[_ngcontent-%COMP%]   .rail-fill[_ngcontent-%COMP%] {
    display: none;
  }
  .tlv.h[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%] {
    flex: none;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
    padding: 6px 0;
    text-align: left;
  }
  .tlv.h[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%] {
    align-items: flex-start;
    text-align: left;
  }
  .tlv.h[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {
    order: 0;
    margin-left: auto;
  }
}

@media (prefers-reduced-motion: reduce) {
  .node[_ngcontent-%COMP%], 
   .dot[_ngcontent-%COMP%], 
   .rail-fill[_ngcontent-%COMP%] {
    transition: none;
  }
}`]})}export{x as FoldTimelineComponent};
