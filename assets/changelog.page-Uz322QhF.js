import{u as T,ɵ as P,i as m,v as y,o as f,w as c,x as d,y as k,e as o,z as O,q as s,j as i,k as _,l as M,P as w,C as h,a as E,b as $,c as R,d as l,f as a,A as L,m as g,B as I,D as z,E as v,H as F,g as p,I as S}from"./index-Dx8_Baf4.js";import{FoldCalloutComponent as B}from"./callout.component-4p84tAGQ.js";import{FoldTimelineComponent as D}from"./timeline.component-AnkGosJt.js";function N(e,t){if(e&1&&(k(0,"code"),o(1),O()),e&2){const n=s().$implicit;i(),_(n.value)}}function A(e,t){if(e&1&&(k(0,"strong"),o(1),O()),e&2){const n=s().$implicit;i(),_(n.value)}}function G(e,t){if(e&1&&o(0),e&2){const n=s().$implicit;M(" ",n.value," ")}}function H(e,t){if(e&1&&c(0,N,2,1,"code")(1,A,2,1,"strong")(2,G,1,1),e&2){let n;const r=t.$implicit;d((n=r.kind)==="code"?0:n==="strong"?1:2)}}class u{runs=T.required();static ɵfac=function(n){return new(n||u)};static ɵcmp=P({type:u,selectors:[["gal-changelog-runs"]],inputs:{runs:[1,"runs"]},decls:2,vars:0,template:function(n,r){n&1&&m(0,H,3,1,null,null,y),n&2&&f(r.runs())},styles:[`code[_ngcontent-%COMP%] {
      font-family: ui-monospace, "SF Mono", monospace;
      font-size: 0.88em;
      background: var(--fold-color-surface-subtle);
      color: var(--fold-color-text-primary);
      padding: 0 0.3em;
      border-radius: var(--fold-radius-xs);
    }`]})}const b=(e,t)=>t.kind;function U(e,t){if(e&1&&(l(0,"time"),o(1),a()),e&2){s(2);const n=v(0);i(),_(n.date)}}function j(e,t){e&1&&p(0,"fold-badge",10)}function q(e,t){if(e&1&&p(0,"fold-badge",11),e&2){s(2);const n=v(0);g("content",n.breaking+" breaking")}}function K(e,t){if(e&1&&p(0,"fold-badge",12),e&2){const n=t.$implicit;g("content",n.count+" "+n.kind)("variant",n.tone)}}function V(e,t){e&1&&(l(0,"span",18),o(1,"Breaking"),a())}function J(e,t){if(e&1&&(l(0,"span",21),p(1,"gal-changelog-runs",20),a()),e&2){const n=s().$implicit;i(),g("runs",n.rest)}}function Q(e,t){if(e&1&&(l(0,"li",17),c(1,V,2,0,"span",18),l(2,"span",19),p(3,"gal-changelog-runs",20),a(),c(4,J,2,1,"span",21),a()),e&2){const n=t.$implicit;F("is-breaking",n.breaking),i(),d(n.breaking?1:-1),i(2),g("runs",n.lead),i(),d(n.rest.length>0?4:-1)}}function W(e,t){if(e&1&&(l(0,"section",13)(1,"h3",14),p(2,"fold-badge",12),a(),l(3,"ul",15),m(4,Q,5,5,"li",16,y),a()()),e&2){const n=s().$implicit,r=s(3);i(2),g("content",n.kind)("variant",r.toneFor(n.kind)),i(2),f(n.items)}}function X(e,t){if(e&1&&c(0,W,6,2,"section",13),e&2){const n=t.$implicit;d(n.items.length>0?0:-1)}}function Y(e,t){if(e&1&&(l(0,"fold-card",6)(1,"header",7)(2,"div",8)(3,"h2"),o(4),a(),c(5,U,2,1,"time"),a(),l(6,"div",9),c(7,j,1,0,"fold-badge",10),c(8,q,1,1,"fold-badge",11),m(9,K,1,2,"fold-badge",12,b),a()(),m(11,X,1,1,null,null,b),a()),e&2){s();const n=v(0),r=s();F("cl-release--dev",n.unreleased),i(4),_(n.unreleased?"Unreleased":n.version),i(),d(n.date?5:-1),i(2),d(n.unreleased?7:-1),i(),d(n.breaking>0?8:-1),i(),f(r.countsOf(n)),i(2),f(n.groups)}}function Z(e,t){if(e&1&&(I(0),c(1,Y,13,6,"fold-card",5)),e&2){const n=t.$implicit,r=z(s().releaseFor(n.key));i(),d(r?1:-1)}}const x={Added:"success",Changed:"info",Fixed:"accent",Removed:"alert",Deprecated:"warning",Docs:"neutral",Security:"alert"};class C{published=w;releases=h;nodes=h.map(t=>({key:t.version,id:null,label:t.unreleased?"Unreleased":t.version,icon:t.unreleased?"lightning":"check",variant:t.unreleased?"hollow":"plain",done:!t.unreleased}));releaseFor(t){return this.releases.find(n=>n.version===t)}countsOf(t){return t.groups.filter(n=>n.items.length>0).map(n=>({kind:n.kind,count:n.items.length,tone:x[n.kind]??"neutral"}))}toneFor(t){return x[t]??"neutral"}static ɵfac=function(n){return new(n||C)};static ɵcmp=P({type:C,selectors:[["gal-changelog-page"]],decls:32,vars:3,consts:[["node",""],["title","changelog"],["description",""],["variant","info",1,"cl-banner"],["ariaLabel","Release history","datePlacement","hidden",3,"nodes"],["surface","sunken",1,"cl-release",3,"cl-release--dev"],["surface","sunken",1,"cl-release"],[1,"cl-head"],[1,"cl-ver"],[1,"cl-tags"],["content","dev · not on npm","variant","warning"],["variant","alert",3,"content"],[3,"content","variant"],[1,"cl-group"],[1,"cl-group-title"],[1,"cl-items"],[1,"cl-item",3,"is-breaking"],[1,"cl-item"],[1,"cl-break"],[1,"cl-lead"],[3,"runs"],[1,"cl-rest"]],template:function(n,r){n&1&&(l(0,"fold-page-layout",1)(1,"p",2),o(2," The full history of "),l(3,"code"),o(4,"fold-ng"),a(),o(5,", rendered from "),l(6,"code"),o(7,"CHANGELOG.md"),a(),o(8," as a designed timeline. This gallery tracks the "),l(9,"strong"),o(10,"dev"),a(),o(11," branch — npm's "),l(12,"code"),o(13,"latest"),a(),o(14," is "),l(15,"code"),o(16),a(),o(17,". "),a(),l(18,"fold-callout",3),o(19," This page mirrors "),l(20,"strong"),o(21,"dev"),a(),o(22,". The "),l(23,"strong"),o(24,"Unreleased"),a(),o(25," entries below ship in the next version — they are not on npm yet (latest published: "),l(26,"code"),o(27),a(),o(28,"). "),a(),l(29,"fold-timeline",4),L(30,Z,2,2,"ng-template",null,0,S),a()()),n&2&&(i(16),_(r.published),i(11),_(r.published),i(2),g("nodes",r.nodes))},dependencies:[E,B,$,R,D,u],styles:[`.cl-banner[_ngcontent-%COMP%] {
  margin-bottom: var(--fold-space-lg);
}

fold-timeline[_ngcontent-%COMP%] {
  display: block;
}

.cl-release[_ngcontent-%COMP%] {
  display: block;
  width: 100%;
  margin-bottom: var(--fold-space-lg);
  --fold-card-padding: var(--fold-space-lg);
}

.cl-release--dev[_ngcontent-%COMP%] {
  outline: 1px dashed var(--fold-color-primary-border);
  outline-offset: -1px;
}

.cl-head[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--fold-space-sm) var(--fold-space-md);
  margin-bottom: var(--fold-space-md);
}

.cl-ver[_ngcontent-%COMP%] {
  display: flex;
  align-items: baseline;
  gap: var(--fold-space-sm);
}
.cl-ver[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  margin: 0;
  font-size: var(--fold-text-xl);
  font-weight: 700;
  letter-spacing: -0.01em;
}
.cl-ver[_ngcontent-%COMP%]   time[_ngcontent-%COMP%] {
  font-size: var(--fold-text-sm);
  color: var(--fold-color-text-muted);
  font-variant-numeric: tabular-nums;
}

.cl-tags[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: var(--fold-space-xs);
}

.cl-group[_ngcontent-%COMP%]    + .cl-group[_ngcontent-%COMP%] {
  margin-top: var(--fold-space-md);
}

.cl-group-title[_ngcontent-%COMP%] {
  margin: 0 0 var(--fold-space-sm);
}

.cl-items[_ngcontent-%COMP%] {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--fold-space-sm);
}

.cl-item[_ngcontent-%COMP%] {
  display: block;
  padding-left: var(--fold-space-md);
  border-left: 2px solid var(--fold-color-border-subtle);
  line-height: 1.55;
}
.cl-item.is-breaking[_ngcontent-%COMP%] {
  border-left-color: var(--fold-color-primary);
}

.cl-break[_ngcontent-%COMP%] {
  display: inline-block;
  margin-right: var(--fold-space-xs);
  padding: 0 0.4em;
  font-size: var(--fold-text-xs);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--fold-color-primary-text);
  background: var(--fold-color-primary-surface);
  border-radius: var(--fold-radius-xs);
  vertical-align: middle;
}

.cl-lead[_ngcontent-%COMP%] {
  color: var(--fold-color-text);
  font-weight: 600;
}

.cl-rest[_ngcontent-%COMP%] {
  display: block;
  margin-top: 2px;
  color: var(--fold-color-text-muted);
  font-size: var(--fold-text-sm);
}`]})}export{C as default};
