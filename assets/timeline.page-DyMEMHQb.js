import{t as f,u as V,W as E,a1 as B,B as b,ɵ as z,Z as I,F as A,a2 as H,_ as L,a0 as O,L as u,j as a,M as g,a3 as j,O as G,d as l,f as i,z as c,i as $,o as N,$ as T,T as x,x as _,S as F,m as p,g as P,a4 as S,e as d,k as y,D as W,E as q,G as m,H as h,I as v,a5 as J,a6 as Q,s as C,c as K,b as R,a as U,y as Z,l as M,h as X,q as Y,n as nn}from"./index-Ckr2Ysnx.js";import{K as en}from"./kind-badge.component-BGhyN5bP.js";import{D as tn}from"./playground.component-fANHFlZg.js";import{F as on}from"./slider.component-B4ZAIkPt.js";import"./button.component-wrLE6F0h.js";import"./spinner.component-AnDmbFIG.js";import"./tokens.catalog-DF_6rd51.js";import"./element-title.component-C3-AW5Wf.js";import"./page-section.component-DQOfQFSw.js";import"./input-value-Co_u-z_8.js";const ln=["node"],D=o=>({$implicit:o}),an=(o,t)=>t.key;function rn(o,t){o&1&&P(0,"fold-icon",5),o&2&&p("name",t)("size",11)}function dn(o,t){o&1&&(l(0,"span",9),d(1),i()),o&2&&(a(),y(t))}function cn(o,t){o&1&&(l(0,"span",9),d(1),J(2,"date"),i()),o&2&&(a(),y(Q(2,1,t,"mediumDate")))}function sn(o,t){if(o&1&&u(0,dn,2,1,"span",9)(1,cn,3,4,"span",9),o&2){let n;const e=c().$implicit;g((n=e.displayDate)?0:(n=e.date)?1:-1,n)}}function pn(o,t){if(o&1&&T(0,7),o&2){const n=c().$implicit;p("ngTemplateOutlet",t)("ngTemplateOutletContext",S(2,D,n))}}function _n(o,t){if(o&1&&(l(0,"span",8),d(1),i()),o&2){const n=c().$implicit;a(),y(n.label)}}function mn(o,t){if(o&1&&(l(0,"span",4),u(1,rn,1,2,"fold-icon",5),i(),l(2,"span",6),u(3,sn,2,1),u(4,pn,1,4,"ng-container",7)(5,_n,2,1,"span",8),i()),o&2){let n,e;const r=t.$implicit,s=c();a(),g((n=r.icon)?1:-1,n),a(2),g(s.datePlacement()!=="hidden"?3:-1),a(),g((e=s.nodeTemplate())?4:5,e)}}function un(o,t){if(o&1&&(l(0,"span",10),P(1,"span",11),i()),o&2){const n=c(2);F("aria-valuenow",n.fillNow())("aria-valuetext",n.stepText())("aria-label",n.ariaLabel()),a(),W("width",n.fillPct(),"%")}}function gn(o,t){if(o&1){const n=q();l(0,"button",14),m("click",function(){h(n);const r=c().$implicit,s=c(2);return v(s.onNode(r))}),T(1,7),i()}if(o&2){const n=c().$implicit,e=c(2),r=x(1);_("filled",e.isFilled(n))("hollow",e.isHollow(n)),p("title",e.nodeTitle()),a(),p("ngTemplateOutlet",r)("ngTemplateOutletContext",S(7,D,n))}}function fn(o,t){if(o&1&&(l(0,"div",15),T(1,7),i()),o&2){const n=c().$implicit,e=c(2),r=x(1);_("filled",e.isFilled(n))("hollow",e.isHollow(n)),a(),p("ngTemplateOutlet",r)("ngTemplateOutletContext",S(6,D,n))}}function Cn(o,t){if(o&1&&u(0,gn,2,9,"button",12)(1,fn,2,8,"div",13),o&2){const n=t.$implicit,e=c(2);g(e.isClickable(n)?0:1)}}function bn(o,t){if(o&1&&(u(0,un,2,5,"span",10),$(1,Cn,2,1,null,null,an)),o&2){const n=c();g(n.orientation()==="horizontal"?0:-1),a(),N(n.nodes())}}function hn(o,t){if(o&1&&(l(0,"nav",16),T(1,17),i()),o&2){const n=c(),e=x(3);_("h",n.orientation()==="horizontal")("square",n.square())("date-above",n.datePlacement()==="above")("date-inline",n.datePlacement()==="inline"),F("aria-label",n.ariaLabel()),a(),p("ngTemplateOutlet",e)}}function vn(o,t){if(o&1&&(l(0,"div",18),T(1,17),i()),o&2){const n=c(),e=x(3);_("h",n.orientation()==="horizontal")("square",n.square())("date-above",n.datePlacement()==="above")("date-inline",n.datePlacement()==="inline"),F("aria-label",n.ariaLabel()),a(),p("ngTemplateOutlet",e)}}class k{nodes=f.required();orientation=f("vertical");progress=f(null);ariaLabel=f();nodeTitle=f("");square=f(!1,{transform:V});variant=f("plain");datePlacement=f("below");nodeClick=E();nodeTemplate=B("node");isClickable(t){return t.clickable??t.id!==null}interactive=b(()=>this.nodes().some(t=>this.isClickable(t)));doneCount=b(()=>this.nodes().filter(t=>t.done).length);fillPct=b(()=>{const t=this.progress();if(t!==null)return t;const n=this.nodes().length,e=this.doneCount();return n>1&&e>0?(e-1)/(n-1)*100:0});fillNow=b(()=>Math.round(this.fillPct()));stepText=b(()=>{const t=this.doneCount();return t>0?`${t} / ${this.nodes().length}`:null});isFilled(t){return t.done??t.id===null}isHollow(t){return(t.variant??this.variant())==="hollow"}onNode(t){this.isClickable(t)&&this.nodeClick.emit(t.id??t.key)}static ɵfac=function(n){return new(n||k)};static ɵcmp=z({type:k,selectors:[["fold-timeline"]],contentQueries:function(n,e,r){n&1&&j(r,e.nodeTemplate,ln,5),n&2&&G()},inputs:{nodes:[1,"nodes"],orientation:[1,"orientation"],progress:[1,"progress"],ariaLabel:[1,"ariaLabel"],nodeTitle:[1,"nodeTitle"],square:[1,"square"],variant:[1,"variant"],datePlacement:[1,"datePlacement"]},outputs:{nodeClick:"nodeClick"},decls:6,vars:1,consts:[["dot",""],["body",""],[1,"tlv",3,"h","square","date-above","date-inline"],["role","group",1,"tlv",3,"h","square","date-above","date-inline"],[1,"dot"],[3,"name","size"],[1,"txt"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"nlabel"],[1,"date"],["role","progressbar","aria-valuemin","0","aria-valuemax","100",1,"rail"],[1,"rail-fill"],["type","button",1,"node",3,"filled","hollow","title"],[1,"node","inert",3,"filled","hollow"],["type","button",1,"node",3,"click","title"],[1,"node","inert"],[1,"tlv"],[3,"ngTemplateOutlet"],["role","group",1,"tlv"]],template:function(n,e){n&1&&(L(0,mn,6,3,"ng-template",null,0,O)(2,bn,3,1,"ng-template",null,1,O),u(4,hn,2,10,"nav",2)(5,vn,2,10,"div",3)),n&2&&(a(4),g(e.interactive()?4:5))},dependencies:[I,A,H],styles:[`@charset "UTF-8";
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
}`]})}function Pn(o,t){if(o&1){const n=q();l(0,"fold-slider",22),X("valueChange",function(r){h(n);const s=c();return Y(s.tlpDone,r)||(s.tlpDone=r),v(r)}),i(),l(1,"div",14)(2,"span",6),d(3,"steps"),i(),l(4,"div",15)(5,"button",16),m("click",function(){h(n);const r=c();return v(r.tlpClickable.set(!1))}),d(6," static "),i(),l(7,"button",16),m("click",function(){h(n);const r=c();return v(r.tlpClickable.set(!0))}),d(8," clickable "),i()()()}if(o&2){const n=c();p("min",0)("max",4)("valueText",n.tlpDone()+" / 4 · "+n.tlpProgress()+"%"),nn("value",n.tlpDone),a(5),_("is-on",!n.tlpClickable()),a(2),_("is-on",n.tlpClickable())}}function Tn(o,t){if(o&1){const n=q();l(0,"button",16),m("click",function(){const r=h(n).$implicit,s=c();return v(s.tlpDatePlacement.set(r))}),d(1),i()}if(o&2){const n=t.$implicit,e=c();_("is-on",e.tlpDatePlacement()===n),a(),M(" ",n," ")}}function kn(o,t){o&1&&P(0,"fold-badge",24),o&2&&p("content","en attente")}function xn(o,t){if(o&1&&(l(0,"span",23),d(1),i(),u(2,kn,1,1,"fold-badge",24)),o&2){const n=t.$implicit;a(),y(n.label),a(),g(n.state==="pending"?2:-1)}}class w{tlClicked=C(null);tlNodes=[{key:"start",id:null,label:"Contract signed",date:new Date("2024-01-15"),icon:"contracts"},{key:"a1",id:"a1",label:"Salary raise +6%",date:new Date("2024-06-01"),icon:"edit"},{key:"a2",id:"a2",label:"Extended to full-time",date:new Date("2024-11-20"),icon:"edit"}];tlSteps=[{key:"created",id:null,label:"Created",done:!0,icon:"check"},{key:"company",id:null,label:"Company signed",done:!0,icon:"check"},{key:"employee",id:null,label:"Employee signed",done:!1},{key:"active",id:null,label:"Active",done:!1}];tlCustom=[{key:"created",id:null,label:"Créé",done:!0,icon:"check"},{key:"company",id:null,label:"Signé société",done:!0,icon:"check"},{key:"employee",id:"sign_employee",label:"Signé employé",clickable:!0,state:"pending"},{key:"active",id:null,label:"Actif",state:"todo"}];tlpOrientation=C("horizontal");tlpDone=C(2);tlpSquare=C(!1);tlpPlacements=["above","below","inline","hidden"];tlpDatePlacement=C("below");tlpClickable=C(!1);tlpVariant=C("plain");tlpClicked=C(null);TLP_STEPS=[{label:"Created",date:"15 Jan"},{label:"Company signed",date:"18 Jan"},{label:"Employee signed",date:"22 Jan"},{label:"Active",date:"1 Feb"}];tlpNodes=b(()=>{if(this.tlpOrientation()==="vertical")return this.tlNodes;const t=this.tlpDone(),n=this.tlpClickable();return this.TLP_STEPS.map((e,r)=>{const s=r<t;return{key:e.label,id:null,clickable:n,label:e.label,done:s,...s?{displayDate:e.date,icon:"check"}:{}}})});tlpProgress=b(()=>{const t=this.tlpDone(),n=this.TLP_STEPS.length;return t<=0?0:Math.round((t-1)/(n-1)*100)});timelinePlaygroundCode=b(()=>{const t=this.tlpOrientation()==="horizontal",n=["<fold-timeline"];return t?(n.push('  orientation="horizontal"'),n.push('  ariaLabel="Signature progress"'),this.tlpClickable()&&n.push('  (nodeClick)="onStep($event)"')):(n.push('  ariaLabel="Contract history"'),n.push('  nodeTitle="Go to item"'),n.push('  (nodeClick)="onNode($event)"')),this.tlpSquare()&&n.push("  square"),this.tlpVariant()!=="plain"&&n.push('  variant="hollow"'),this.tlpDatePlacement()!=="below"&&n.push(`  datePlacement="${this.tlpDatePlacement()}"`),n.push('  [nodes]="nodes"',"/>"),n.join(`
`)});static ɵfac=function(n){return new(n||w)};static ɵcmp=z({type:w,selectors:[["gal-timeline-page"]],decls:60,vars:26,consts:[["node",""],["title","timeline"],["description",""],["titleBadge","","kind","component"],[1,"gal-row","gal-row--wide"],[1,"gal-cell",2,"max-width","320px"],[1,"gal-tag"],["surface","sunken",2,"--fold-card-padding","18px"],["ariaLabel","Contract history","nodeTitle","Go to item",3,"nodeClick","nodes"],[1,"doc-p"],[1,"gal-cell",2,"max-width","440px"],["surface","sunken",2,"--fold-card-padding","22px 18px"],["orientation","horizontal","ariaLabel","Signature progress",3,"progress","nodes"],[3,"code"],["params","",1,"np-field"],[1,"ss-seg"],["type","button",3,"click"],["params","",1,"doc-p"],["type","button",3,"is-on"],["nodeTitle","Go to item",3,"nodeClick","orientation","ariaLabel","square","variant","datePlacement","nodes"],[1,"gal-cell",2,"max-width","520px"],["orientation","horizontal",3,"nodes"],["params","","label","completed",3,"valueChange","min","max","valueText","value"],[1,"nlabel"],["variant","warning",3,"content"]],template:function(n,e){n&1&&(l(0,"fold-page-layout",1)(1,"p",2),d(2," fold-timeline — one surface-agnostic dot-rail primitive, two orientations. Vertical: a navigable chronology (nodes emit their id, a null-id node is an inert accented anchor). Horizontal: a progress stepper (a `progress` fill line, each node's `done` drives its accent). It renders content only (a labelled nav element) — the consumer supplies the surface. "),i(),P(3,"gal-kind-badge",3),l(4,"div",4)(5,"div",5)(6,"span",6),d(7,"vertical · navigable · click a node"),i(),l(8,"fold-card",7)(9,"fold-timeline",8),m("nodeClick",function(s){return e.tlClicked.set(s)}),i()(),l(10,"p",9),d(11),i()(),l(12,"div",10)(13,"span",6),d(14,"horizontal · progress stepper"),i(),l(15,"fold-card",11),P(16,"fold-timeline",12),i()()(),l(17,"dev-playground",13)(18,"div",14)(19,"span",6),d(20,"orientation"),i(),l(21,"div",15)(22,"button",16),m("click",function(){return e.tlpOrientation.set("vertical")}),d(23," vertical "),i(),l(24,"button",16),m("click",function(){return e.tlpOrientation.set("horizontal")}),d(25," horizontal "),i()()(),u(26,Pn,9,8),l(27,"p",17),d(28),i(),l(29,"div",14)(30,"span",6),d(31,"dot shape"),i(),l(32,"div",15)(33,"button",16),m("click",function(){return e.tlpSquare.set(!1)}),d(34," round "),i(),l(35,"button",16),m("click",function(){return e.tlpSquare.set(!0)}),d(36," square "),i()()(),l(37,"div",14)(38,"span",6),d(39,"variant"),i(),l(40,"div",15)(41,"button",16),m("click",function(){return e.tlpVariant.set("plain")}),d(42," plain "),i(),l(43,"button",16),m("click",function(){return e.tlpVariant.set("hollow")}),d(44," hollow "),i()()(),l(45,"div",14)(46,"span",6),d(47,"datePlacement"),i(),l(48,"div",15),$(49,Tn,2,3,"button",18,Z),i()(),l(51,"fold-card",11)(52,"fold-timeline",19),m("nodeClick",function(s){return e.tlpClicked.set(s)}),i()()(),l(53,"div",20)(54,"span",6),d(55,"custom #node template — a badge from node.state"),i(),l(56,"fold-card",11)(57,"fold-timeline",21),L(58,xn,3,2,"ng-template",null,0,O),i()()()()),n&2&&(a(9),p("nodes",e.tlNodes),a(2),M("Last clicked id: “",e.tlClicked()??"—","”"),a(5),p("progress",33)("nodes",e.tlSteps),a(),p("code",e.timelinePlaygroundCode()),a(5),_("is-on",e.tlpOrientation()==="vertical"),a(2),_("is-on",e.tlpOrientation()==="horizontal"),a(2),g(e.tlpOrientation()==="horizontal"?26:-1),a(2),M("Last clicked: “",e.tlpClicked()??"—","”"),a(5),_("is-on",!e.tlpSquare()),a(2),_("is-on",e.tlpSquare()),a(6),_("is-on",e.tlpVariant()==="plain"),a(2),_("is-on",e.tlpVariant()==="hollow"),a(6),N(e.tlpPlacements),a(3),p("orientation",e.tlpOrientation())("ariaLabel",e.tlpOrientation()==="horizontal"?"Signature progress":"Contract history")("square",e.tlpSquare())("variant",e.tlpVariant())("datePlacement",e.tlpDatePlacement())("nodes",e.tlpNodes()),a(5),p("nodes",e.tlCustom))},dependencies:[en,K,R,k,U,on,tn],encapsulation:2})}export{w as default};
