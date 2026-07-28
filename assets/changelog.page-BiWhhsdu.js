import{u as D,ɵ as O,i as u,v as T,o as h,w as _,x as g,y as F,e as a,z as M,q as s,j as r,k as p,l as A,P as G,s as y,A as C,C as b,a as L,b as I,c as N,d as l,f as i,B as x,m,D as K,E,H,I as U,J as V,K as B,L as $,g as f,M as z,N as R,O as j}from"./index-CQebbVEP.js";import{FoldButtonComponent as q}from"./button.component-CPQFRads.js";import{FoldCalloutComponent as J}from"./callout.component-B9ycM276.js";import{FoldTimelineComponent as Q}from"./timeline.component-33mW0JuS.js";import"./spinner.component-Bfoo-Glo.js";import"./tokens.catalog-DF_6rd51.js";function W(t,e){if(t&1&&(F(0,"code"),a(1),M()),t&2){const n=s().$implicit;r(),p(n.value)}}function X(t,e){if(t&1&&(F(0,"strong"),a(1),M()),t&2){const n=s().$implicit;r(),p(n.value)}}function Y(t,e){if(t&1&&a(0),t&2){const n=s().$implicit;A(" ",n.value," ")}}function Z(t,e){if(t&1&&_(0,W,2,1,"code")(1,X,2,1,"strong")(2,Y,1,1),t&2){let n;const o=e.$implicit;g((n=o.kind)==="code"?0:n==="strong"?1:2)}}class v{runs=D.required();static ɵfac=function(n){return new(n||v)};static ɵcmp=O({type:v,selectors:[["gal-changelog-runs"]],inputs:{runs:[1,"runs"]},decls:2,vars:0,template:function(n,o){n&1&&u(0,Z,3,1,null,null,T),n&2&&h(o.runs())},styles:[`code[_ngcontent-%COMP%] {
      font-family: ui-monospace, "SF Mono", monospace;
      font-size: 0.88em;
      background: var(--fold-color-surface-subtle);
      color: var(--fold-color-text-primary);
      padding: 0 0.3em;
      border-radius: var(--fold-radius-xs);
    }`]})}const nn=(t,e)=>e.key,P=(t,e)=>e.kind;function en(t,e){if(t&1){const n=E();l(0,"button",5),x("click",function(){const c=z(n).$implicit,d=s();return R(d.toggleKind(c.key))}),a(1),l(2,"span",6),a(3),i()()}if(t&2){const n=e.$implicit,o=s();m("emphasis",o.isKindActive(n.key)?"soft":"outline")("intent",o.isKindActive(n.key)?"primary":"neutral"),K("aria-pressed",o.isKindActive(n.key)),r(),A(" ",n.key," "),r(2),p(n.total)}}function tn(t,e){if(t&1){const n=E();l(0,"button",11),x("click",function(){z(n);const c=s();return R(c.clear())}),a(1," Clear "),i()}}function on(t,e){t&1&&(l(0,"fold-callout",9),a(1," No changes match this filter. "),i())}function an(t,e){if(t&1&&(l(0,"time"),a(1),i()),t&2){s(2);const n=B(0);r(),p(n.date)}}function ln(t,e){t&1&&f(0,"fold-badge",17)}function rn(t,e){if(t&1&&f(0,"fold-badge",20),t&2){const n=s();m("content",n+" breaking")}}function sn(t,e){t&1&&_(0,rn,1,1,"fold-badge",20),t&2&&g(e>0?0:-1)}function cn(t,e){if(t&1&&f(0,"fold-badge",18),t&2){const n=e.$implicit;m("content",n.count+" "+n.kind)("variant",n.tone)}}function dn(t,e){t&1&&(l(0,"span",25),a(1,"Breaking"),i())}function _n(t,e){if(t&1&&(l(0,"span",28),f(1,"gal-changelog-runs",27),i()),t&2){const n=s().$implicit;r(),m("runs",n.rest)}}function gn(t,e){if(t&1&&(l(0,"li",24),_(1,dn,2,0,"span",25),l(2,"span",26),f(3,"gal-changelog-runs",27),i(),_(4,_n,2,1,"span",28),i()),t&2){const n=e.$implicit;$("is-breaking",n.breaking),r(),g(n.breaking?1:-1),r(2),m("runs",n.lead),r(),g(n.rest.length>0?4:-1)}}function pn(t,e){if(t&1&&(l(0,"section",19)(1,"h3",21),f(2,"fold-badge",18),i(),l(3,"ul",22),u(4,gn,5,5,"li",23,T),i()()),t&2){const n=e.$implicit,o=s(4);r(2),m("content",n.kind)("variant",o.toneFor(n.kind)),r(2),h(n.items)}}function mn(t,e){if(t&1&&(l(0,"fold-card",13)(1,"header",14)(2,"div",15)(3,"h2"),a(4),i(),_(5,an,2,1,"time"),i(),l(6,"div",16),_(7,ln,1,0,"fold-badge",17),_(8,sn,1,1),u(9,cn,1,2,"fold-badge",18,P),i()(),u(11,pn,6,2,"section",19,P),i()),t&2){let n;s();const o=B(0),c=s(2);$("cl-release--dev",o.unreleased),r(4),p(o.unreleased?"Unreleased":o.version),r(),g(o.date?5:-1),r(2),g(o.unreleased?7:-1),r(),g((n=c.breakingShown(o.shownGroups))?8:-1,n),r(),h(c.countsOf(o.shownGroups)),r(2),h(o.shownGroups)}}function fn(t,e){if(t&1&&(U(0),_(1,mn,13,6,"fold-card",12)),t&2){const n=e.$implicit,o=V(s(2).releaseFor(n.key));r(),g(o?1:-1)}}function un(t,e){if(t&1&&(l(0,"fold-timeline",10),H(1,fn,2,2,"ng-template",null,0,j),i()),t&2){const n=s();m("nodes",n.nodes())}}const w={Added:"success",Changed:"info",Fixed:"accent",Removed:"alert",Deprecated:"warning",Docs:"neutral",Security:"alert"},hn=["Added","Changed","Fixed","Removed","Deprecated","Docs","Security"];class k{published=G;breakingActive=y(!1);activeKinds=y(new Set);anyFilter=C(()=>this.breakingActive()||this.activeKinds().size>0);kindChips=hn.map(e=>({key:e,total:b.reduce((n,o)=>n+(o.groups.find(c=>c.kind===e)?.items.length??0),0)})).filter(e=>e.total>0);breakingTotal=b.reduce((e,n)=>e+n.breaking,0);shown=C(()=>{const e=this.activeKinds(),n=this.breakingActive();return b.map(o=>{const c=o.groups.filter(d=>d.items.length>0).filter(d=>e.size===0||e.has(d.kind)).map(d=>({kind:d.kind,items:n?d.items.filter(S=>S.breaking):d.items})).filter(d=>d.items.length>0);return{...o,shownGroups:c}}).filter(o=>o.shownGroups.length>0)});isEmpty=C(()=>this.shown().length===0);nodes=C(()=>this.shown().map(e=>({key:e.version,id:null,label:e.unreleased?"Unreleased":e.version,icon:e.unreleased?"lightning":"check",variant:e.unreleased?"hollow":"plain",done:!e.unreleased})));releaseFor(e){return this.shown().find(n=>n.version===e)}toggleKind(e){const n=new Set(this.activeKinds());n.has(e)?n.delete(e):n.add(e),this.activeKinds.set(n)}isKindActive(e){return this.activeKinds().has(e)}toggleBreaking(){this.breakingActive.update(e=>!e)}clear(){this.activeKinds.set(new Set),this.breakingActive.set(!1)}countsOf(e){return e.map(n=>({kind:n.kind,count:n.items.length,tone:w[n.kind]??"neutral"}))}breakingShown(e){return e.reduce((n,o)=>n+o.items.filter(c=>c.breaking).length,0)}toneFor(e){return w[e]??"neutral"}static ɵfac=function(n){return new(n||k)};static ɵcmp=O({type:k,selectors:[["gal-changelog-page"]],decls:39,vars:8,consts:[["node",""],["title","changelog"],["description",""],["variant","info",1,"cl-banner"],["role","group","aria-label","Filter changelog by section",1,"cl-filters"],["foldButton","","size","sm","shape","pill",3,"click","emphasis","intent"],[1,"cl-fcount"],["foldButton","","size","sm","shape","pill",3,"emphasis","intent"],["foldButton","","size","sm","shape","pill","emphasis","outline","intent","neutral",1,"cl-clear"],["variant","neutral"],["ariaLabel","Release history","datePlacement","hidden",3,"nodes"],["foldButton","","size","sm","shape","pill","emphasis","outline","intent","neutral",1,"cl-clear",3,"click"],["surface","sunken",1,"cl-release",3,"cl-release--dev"],["surface","sunken",1,"cl-release"],[1,"cl-head"],[1,"cl-ver"],[1,"cl-tags"],["content","dev · not on npm","variant","warning"],[3,"content","variant"],[1,"cl-group"],["variant","alert",3,"content"],[1,"cl-group-title"],[1,"cl-items"],[1,"cl-item",3,"is-breaking"],[1,"cl-item"],[1,"cl-break"],[1,"cl-lead"],[3,"runs"],[1,"cl-rest"]],template:function(n,o){n&1&&(l(0,"fold-page-layout",1)(1,"p",2),a(2," The full history of "),l(3,"code"),a(4,"fold-ng"),i(),a(5,", rendered from "),l(6,"code"),a(7,"CHANGELOG.md"),i(),a(8," as a designed timeline. This gallery tracks the "),l(9,"strong"),a(10,"dev"),i(),a(11," branch — npm's "),l(12,"code"),a(13,"latest"),i(),a(14," is "),l(15,"code"),a(16),i(),a(17,". "),i(),l(18,"fold-callout",3),a(19," This page mirrors "),l(20,"strong"),a(21,"dev"),i(),a(22,". The "),l(23,"strong"),a(24,"Unreleased"),i(),a(25," entries below ship in the next version — they are not on npm yet (latest published: "),l(26,"code"),a(27),i(),a(28,"). "),i(),l(29,"div",4)(30,"button",5),x("click",function(){return o.toggleBreaking()}),a(31," Breaking "),l(32,"span",6),a(33),i()(),u(34,en,4,5,"button",7,nn),_(36,tn,2,0,"button",8),i(),_(37,on,2,0,"fold-callout",9)(38,un,3,1,"fold-timeline",10),i()),n&2&&(r(16),p(o.published),r(11),p(o.published),r(3),m("emphasis",o.breakingActive()?"soft":"outline")("intent",o.breakingActive()?"danger":"neutral"),K("aria-pressed",o.breakingActive()),r(3),p(o.breakingTotal),r(),h(o.kindChips),r(2),g(o.anyFilter()?36:-1),r(),g(o.isEmpty()?37:38))},dependencies:[L,q,J,I,N,Q,v],styles:[`.cl-banner[_ngcontent-%COMP%] {
  margin-bottom: var(--fold-space-lg);
}

.cl-filters[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: var(--fold-space-xs);
  margin-bottom: var(--fold-space-lg);
}

.cl-fcount[_ngcontent-%COMP%] {
  margin-left: var(--fold-space-xs);
  color: var(--fold-color-text-muted);
  font-variant-numeric: tabular-nums;
  font-weight: 600;
}

.cl-filters[_ngcontent-%COMP%]   [aria-pressed=true][_ngcontent-%COMP%]   .cl-fcount[_ngcontent-%COMP%] {
  color: inherit;
  opacity: 0.7;
}

.cl-clear[_ngcontent-%COMP%] {
  margin-left: auto;
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
}`]})}export{k as default};
