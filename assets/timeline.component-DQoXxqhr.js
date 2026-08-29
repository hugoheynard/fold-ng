import{u as c,a0 as y,ao as w,ap as k,A as m,ɵ as F,aq as q,F as $,ar as z,H as L,Q as T,w as s,j as i,x as _,as as N,a9 as D,d as a,f as r,q as l,i as H,o as Q,at as f,a3 as u,L as C,D as x,m as p,g as M,au as b,e as h,k as P,W as j,E as A,B as E,N as V,O as B,av as I,aw as S}from"./index-B61aGEid.js";const R=["node"],O=e=>({$implicit:e}),U=(e,t)=>t.key;function W(e,t){e&1&&M(0,"fold-icon",5),e&2&&p("name",t)("size",11)}function G(e,t){e&1&&(a(0,"span",9),h(1),r()),e&2&&(i(),P(t))}function J(e,t){e&1&&(a(0,"span",9),h(1),I(2,"date"),r()),e&2&&(i(),P(S(2,1,t,"mediumDate")))}function K(e,t){if(e&1&&s(0,G,2,1,"span",9)(1,J,3,4,"span",9),e&2){let n;const o=l().$implicit;_((n=o.displayDate)?0:(n=o.date)?1:-1,n)}}function X(e,t){if(e&1&&f(0,7),e&2){const n=l().$implicit;p("ngTemplateOutlet",t)("ngTemplateOutletContext",b(2,O,n))}}function Y(e,t){if(e&1&&(a(0,"span",8),h(1),r()),e&2){const n=l().$implicit;i(),P(n.label)}}function Z(e,t){if(e&1&&(a(0,"span",4),s(1,W,1,2,"fold-icon",5),r(),a(2,"span",6),s(3,K,2,1),s(4,X,1,4,"ng-container",7)(5,Y,2,1,"span",8),r()),e&2){let n,o;const d=t.$implicit,g=l();i(),_((n=d.icon)?1:-1,n),i(2),_(g.datePlacement()!=="hidden"?3:-1),i(),_((o=g.nodeTemplate())?4:5,o)}}function nn(e,t){if(e&1&&(a(0,"span",10),M(1,"span",11),r()),e&2){const n=l(2);x("aria-valuenow",n.fillNow())("aria-valuetext",n.stepText())("aria-label",n.ariaLabel()),i(),j("width",n.fillPct(),"%")}}function tn(e,t){if(e&1){const n=A();a(0,"button",14),E("click",function(){V(n);const d=l().$implicit,g=l(2);return B(g.onNode(d))}),f(1,7),r()}if(e&2){const n=l().$implicit,o=l(2),d=u(1);C("filled",o.isFilled(n))("hollow",o.isHollow(n)),p("title",o.nodeTitle()),i(),p("ngTemplateOutlet",d)("ngTemplateOutletContext",b(7,O,n))}}function en(e,t){if(e&1&&(a(0,"div",15),f(1,7),r()),e&2){const n=l().$implicit,o=l(2),d=u(1);C("filled",o.isFilled(n))("hollow",o.isHollow(n)),i(),p("ngTemplateOutlet",d)("ngTemplateOutletContext",b(6,O,n))}}function on(e,t){if(e&1&&s(0,tn,2,9,"button",12)(1,en,2,8,"div",13),e&2){const n=t.$implicit,o=l(2);_(o.isClickable(n)?0:1)}}function ln(e,t){if(e&1&&(s(0,nn,2,5,"span",10),H(1,on,2,1,null,null,U)),e&2){const n=l();_(n.orientation()==="horizontal"?0:-1),i(),Q(n.nodes())}}function an(e,t){if(e&1&&(a(0,"nav",16),f(1,17),r()),e&2){const n=l(),o=u(3);C("h",n.orientation()==="horizontal")("square",n.square())("date-above",n.datePlacement()==="above")("date-inline",n.datePlacement()==="inline"),x("aria-label",n.ariaLabel()),i(),p("ngTemplateOutlet",o)}}function rn(e,t){if(e&1&&(a(0,"div",18),f(1,17),r()),e&2){const n=l(),o=u(3);C("h",n.orientation()==="horizontal")("square",n.square())("date-above",n.datePlacement()==="above")("date-inline",n.datePlacement()==="inline"),x("aria-label",n.ariaLabel()),i(),p("ngTemplateOutlet",o)}}class v{nodes=c.required();orientation=c("vertical");progress=c(null);ariaLabel=c();nodeTitle=c("");square=c(!1,{transform:y});variant=c("plain");datePlacement=c("below");nodeClick=w();nodeTemplate=k("node");isClickable(t){return t.clickable??t.id!==null}interactive=m(()=>this.nodes().some(t=>this.isClickable(t)));doneCount=m(()=>this.nodes().filter(t=>t.done).length);fillPct=m(()=>{const t=this.progress();if(t!==null)return t;const n=this.nodes().length,o=this.doneCount();return n>1&&o>0?(o-1)/(n-1)*100:0});fillNow=m(()=>Math.round(this.fillPct()));stepText=m(()=>{const t=this.doneCount();return t>0?`${t} / ${this.nodes().length}`:null});isFilled(t){return t.done??t.id===null}isHollow(t){return(t.variant??this.variant())==="hollow"}onNode(t){this.isClickable(t)&&this.nodeClick.emit(t.id??t.key)}static ɵfac=function(n){return new(n||v)};static ɵcmp=F({type:v,selectors:[["fold-timeline"]],contentQueries:function(n,o,d){n&1&&N(d,o.nodeTemplate,R,5),n&2&&D()},inputs:{nodes:[1,"nodes"],orientation:[1,"orientation"],progress:[1,"progress"],ariaLabel:[1,"ariaLabel"],nodeTitle:[1,"nodeTitle"],square:[1,"square"],variant:[1,"variant"],datePlacement:[1,"datePlacement"]},outputs:{nodeClick:"nodeClick"},decls:6,vars:1,consts:[["dot",""],["body",""],[1,"tlv",3,"h","square","date-above","date-inline"],["role","group",1,"tlv",3,"h","square","date-above","date-inline"],[1,"dot"],[3,"name","size"],[1,"txt"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"nlabel"],[1,"date"],["role","progressbar","aria-valuemin","0","aria-valuemax","100",1,"rail"],[1,"rail-fill"],["type","button",1,"node",3,"filled","hollow","title"],[1,"node","inert",3,"filled","hollow"],["type","button",1,"node",3,"click","title"],[1,"node","inert"],[1,"tlv"],[3,"ngTemplateOutlet"],["role","group",1,"tlv"]],template:function(n,o){n&1&&(L(0,Z,6,3,"ng-template",null,0,T)(2,ln,3,1,"ng-template",null,1,T),s(4,an,2,10,"nav",2)(5,rn,2,10,"div",3)),n&2&&(i(4),_(o.interactive()?4:5))},dependencies:[q,$,z],styles:[`@charset "UTF-8";
[_nghost-%COMP%] {
  display: block;
  user-select: none;
}

.tlv[_ngcontent-%COMP%] {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--fold-space-xs);
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
  gap: var(--fold-space-md);
  padding: var(--fold-space-sm) var(--fold-space-sm);
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
  font-size: var(--fold-text-2xs);
  color: var(--fold-color-text-muted);
  font-variant-numeric: tabular-nums;
  
  order: 1;
}

.nlabel[_ngcontent-%COMP%] {
  font-size: var(--fold-text-xs);
  font-weight: var(--fold-weight-semibold);
  color: var(--fold-color-text-secondary);
  line-height: var(--fold-leading-snug);
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
  gap: var(--fold-space-sm);
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
  gap: var(--fold-space-sm);
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
    gap: var(--fold-space-md);
    padding: var(--fold-space-sm) 0;
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
}`]})}export{v as FoldTimelineComponent};
