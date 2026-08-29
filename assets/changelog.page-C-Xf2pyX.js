import{u as I,ɵ as B,i as C,v as U,o as v,w as _,x as g,y as L,e as i,z as R,q as c,j as a,k as m,l as z,P as $,s as b,A as k,C as P,a as N,b as j,F as H,c as V,d as s,f as l,B as x,m as d,D as O,E as T,H as q,I as J,J as Q,K as u,L as D,g as p,M as W,N as M,O as F,t as E,Q as X}from"./index-CrZoBIgg.js";import{FoldButtonComponent as Y}from"./button.component-iqtPhJqp.js";import{FoldCalloutComponent as Z}from"./callout.component-ARXYowsx.js";import{FoldTimelineComponent as ee}from"./timeline.component-6nzWji8b.js";function ne(t,n){if(t&1&&(L(0,"code"),i(1),R()),t&2){const e=c().$implicit;a(),m(e.value)}}function te(t,n){if(t&1&&(L(0,"strong"),i(1),R()),t&2){const e=c().$implicit;a(),m(e.value)}}function oe(t,n){if(t&1&&i(0),t&2){const e=c().$implicit;z(" ",e.value," ")}}function ae(t,n){if(t&1&&_(0,ne,2,1,"code")(1,te,2,1,"strong")(2,oe,1,1),t&2){let e;const o=n.$implicit;g((e=o.kind)==="code"?0:e==="strong"?1:2)}}class w{runs=I.required();static ɵfac=function(e){return new(e||w)};static ɵcmp=B({type:w,selectors:[["gal-changelog-runs"]],inputs:{runs:[1,"runs"]},decls:2,vars:0,template:function(e,o){e&1&&C(0,ae,3,1,null,null,U),e&2&&v(o.runs())},styles:[`code[_ngcontent-%COMP%] {
      font-family: var(--fold-font-mono);
      font-size: var(--fold-text-sm);
      background: var(--fold-color-surface-subtle);
      color: var(--fold-color-text-primary);
      padding: 0 0.3em;
      border-radius: var(--fold-radius-xs);
    }`]})}const ie=(t,n)=>n.key,K=(t,n)=>n.kind;function le(t,n){if(t&1){const e=T();s(0,"button",6),x("click",function(){M(e);const r=c();return F(r.toggleUnreleased())}),i(1," Unreleased "),s(2,"span",7),i(3),l()()}if(t&2){const e=c();d("emphasis",e.unreleasedActive()?"soft":"outline")("intent",e.unreleasedActive()?"primary":"neutral"),O("aria-pressed",e.unreleasedActive()),a(3),m(e.unreleasedTotal)}}function se(t,n){if(t&1){const e=T();s(0,"button",6),x("click",function(){const r=M(e).$implicit,h=c();return F(h.toggleKind(r.key))}),i(1),s(2,"span",7),i(3),l()()}if(t&2){const e=n.$implicit,o=c();d("emphasis",o.isKindActive(e.key)?"soft":"outline")("intent",o.isKindActive(e.key)?"primary":"neutral"),O("aria-pressed",o.isKindActive(e.key)),a(),z(" ",e.key," "),a(2),m(e.total)}}function re(t,n){if(t&1){const e=T();s(0,"button",11),x("click",function(){M(e);const r=c();return F(r.clear())}),i(1," Clear "),l()}}function ce(t,n){t&1&&(s(0,"fold-callout",9),i(1," No changes match this filter. "),l())}function de(t,n){if(t&1&&(s(0,"time"),i(1),l()),t&2){c(2);const e=u(0);a(),m(e.date)}}function _e(t,n){t&1&&p(0,"fold-badge",17)}function ge(t,n){if(t&1&&p(0,"fold-badge",22),t&2){const e=c();d("content",e+" breaking")}}function pe(t,n){t&1&&_(0,ge,1,1,"fold-badge",22),t&2&&g(n>0?0:-1)}function fe(t,n){if(t&1&&p(0,"fold-badge",18),t&2){const e=n.$implicit;d("content",e.count+" "+e.kind)("variant",e.tone)}}function me(t,n){if(t&1&&(s(0,"fold-callout",19),i(1," Latest published on npm. "),s(2,"a",23),p(3,"fold-icon",24),i(4),l()()),t&2){c(2);const e=u(0),o=c(2);a(2),d("href",o.npmUrl(e.version),E),a(),d("size",13),a(),W(" ",o.pkg,"@",e.version," ")}}function ue(t,n){t&1&&(s(0,"span",29),i(1,"Breaking"),l())}function he(t,n){if(t&1&&(s(0,"span",32),p(1,"gal-changelog-runs",31),l()),t&2){const e=c().$implicit;a(),d("runs",e.rest)}}function Ce(t,n){if(t&1&&(s(0,"li",28),_(1,ue,2,0,"span",29),s(2,"span",30),p(3,"gal-changelog-runs",31),l(),_(4,he,2,1,"span",32),l()),t&2){const e=n.$implicit;c(3);const o=u(0),r=c(2);D("is-breaking",e.breaking)("is-collapsed",!r.isExpanded(o.version)),a(),g(e.breaking?1:-1),a(2),d("runs",e.lead),a(),g(r.isExpanded(o.version)&&e.rest.length>0?4:-1)}}function ve(t,n){if(t&1&&(s(0,"section",20)(1,"h3",25),p(2,"fold-badge",18),l(),s(3,"ul",26),C(4,Ce,5,7,"li",27,U),l()()),t&2){const e=n.$implicit,o=c(4);a(2),d("content",e.kind)("variant",o.toneFor(e.kind)),a(2),v(e.items)}}function xe(t,n){if(t&1&&(s(0,"a",23),p(1,"fold-icon",36),i(2," .tgz "),l()),t&2){c(4);const e=u(0),o=c(2);d("href",o.tarballUrl(e.version),E),a(),d("size",13)}}function be(t,n){if(t&1&&(s(0,"span",35)(1,"a",23),p(2,"fold-icon",24),i(3," npm "),l(),_(4,xe,3,2,"a",23),l()),t&2){c(3);const e=u(0),o=c(2);a(),d("href",o.npmUrl(e.version),E),a(),d("size",13),a(2),g(o.isExpanded(e.version)?4:-1)}}function ke(t,n){if(t&1){const e=T();s(0,"footer",21)(1,"button",33),x("click",function(){M(e),c(2);const r=u(0),h=c(2);return F(h.toggleExpanded(r.version))}),i(2),p(3,"fold-icon",34),l(),_(4,be,5,3,"span",35),l()}if(t&2){c(2);const e=u(0),o=c(2);a(),O("aria-expanded",o.isExpanded(e.version)),a(),z(" ",o.isExpanded(e.version)?"See less":"See more"," "),a(),d("name",o.isExpanded(e.version)?"chevron-up":"chevron-down")("size",14),a(),g(e.unreleased?-1:4)}}function Pe(t,n){if(t&1&&(s(0,"fold-card",13)(1,"header",14)(2,"div",15)(3,"h2"),i(4),l(),_(5,de,2,1,"time"),l(),s(6,"div",16),_(7,_e,1,0,"fold-badge",17),_(8,pe,1,1),C(9,fe,1,2,"fold-badge",18,K),l()(),_(11,me,5,4,"fold-callout",19),C(12,ve,6,2,"section",20,K),_(14,ke,5,5,"footer",21),l()),t&2){let e;c();const o=u(0),r=c(2);D("cl-release--dev",o.unreleased)("cl-release--latest",r.isLatest(o)),a(4),m(o.unreleased?"Unreleased":o.version),a(),g(o.date?5:-1),a(2),g(o.unreleased?7:-1),a(),g((e=r.breakingShown(o.shownGroups))?8:-1,e),a(),v(r.countsOf(o.shownGroups)),a(2),g(r.isLatest(o)?11:-1),a(),v(o.shownGroups),a(2),g(!o.unreleased||r.hasDetails(o.shownGroups)?14:-1)}}function ye(t,n){if(t&1&&(J(0),_(1,Pe,15,10,"fold-card",12)),t&2){const e=n.$implicit,o=Q(c(2).releaseFor(e.key));a(),g(o?1:-1)}}function we(t,n){if(t&1&&(s(0,"fold-timeline",10),q(1,ye,2,2,"ng-template",null,0,X),l()),t&2){const e=c();d("nodes",e.nodes())}}const y="fold-ng",S={Added:"accent",Changed:"info",Fixed:"success",Removed:"alert",Deprecated:"warning",Docs:"neutral",Security:"alert"},Oe=["Added","Changed","Fixed","Removed","Deprecated","Docs","Security"];class A{published=$;pkg=y;breakingActive=b(!1);unreleasedActive=b(!1);activeKinds=b(new Set);anyFilter=k(()=>this.breakingActive()||this.unreleasedActive()||this.activeKinds().size>0);unreleasedTotal=P.filter(n=>n.unreleased).reduce((n,e)=>n+e.groups.reduce((o,r)=>o+r.items.length,0),0);kindChips=Oe.map(n=>({key:n,total:P.reduce((e,o)=>e+(o.groups.find(r=>r.kind===n)?.items.length??0),0)})).filter(n=>n.total>0);breakingTotal=P.reduce((n,e)=>n+e.breaking,0);shown=k(()=>{const n=this.activeKinds(),e=this.breakingActive(),o=this.unreleasedActive();return P.filter(r=>!o||r.unreleased).map(r=>{const h=r.groups.filter(f=>f.items.length>0).filter(f=>n.size===0||n.has(f.kind)).map(f=>({kind:f.kind,items:e?f.items.filter(G=>G.breaking):f.items})).filter(f=>f.items.length>0);return{...r,shownGroups:h}}).filter(r=>r.shownGroups.length>0)});isEmpty=k(()=>this.shown().length===0);nodes=k(()=>this.shown().map(n=>({key:n.version,id:null,label:n.unreleased?"Unreleased":n.version,icon:n.unreleased?"lightning":"check",variant:n.unreleased?"hollow":"plain",done:!n.unreleased})));releaseFor(n){return this.shown().find(e=>e.version===n)}expanded=b(new Set([$]));isLatest(n){return!n.unreleased&&n.version===this.published}isExpanded(n){return this.expanded().has(n)}toggleExpanded(n){const e=new Set(this.expanded());e.has(n)?e.delete(n):e.add(n),this.expanded.set(e)}hasDetails(n){return n.some(e=>e.items.some(o=>o.rest.length>0))}npmUrl(n){return`https://www.npmjs.com/package/${y}/v/${n}`}tarballUrl(n){return`https://registry.npmjs.org/${y}/-/${y}-${n}.tgz`}toggleKind(n){const e=new Set(this.activeKinds());e.has(n)?e.delete(n):e.add(n),this.activeKinds.set(e)}isKindActive(n){return this.activeKinds().has(n)}toggleBreaking(){this.breakingActive.update(n=>!n)}toggleUnreleased(){this.unreleasedActive.update(n=>!n)}clear(){this.activeKinds.set(new Set),this.breakingActive.set(!1),this.unreleasedActive.set(!1)}countsOf(n){return n.map(e=>({kind:e.kind,count:e.items.length,tone:S[e.kind]??"neutral"}))}breakingShown(n){return n.reduce((e,o)=>e+o.items.filter(r=>r.breaking).length,0)}toneFor(n){return S[n]??"neutral"}static ɵfac=function(e){return new(e||A)};static ɵcmp=B({type:A,selectors:[["gal-changelog-page"]],decls:40,vars:9,consts:[["node",""],["title","changelog"],["description",""],["variant","info",1,"cl-banner"],["role","group","aria-label","Filter changelog by section",1,"cl-filters"],["foldButton","","size","sm","shape","pill",3,"emphasis","intent"],["foldButton","","size","sm","shape","pill",3,"click","emphasis","intent"],[1,"cl-fcount"],["foldButton","","size","sm","shape","pill","emphasis","outline","intent","neutral",1,"cl-clear"],["variant","neutral"],["ariaLabel","Release history","datePlacement","hidden",3,"nodes"],["foldButton","","size","sm","shape","pill","emphasis","outline","intent","neutral",1,"cl-clear",3,"click"],["surface","sunken",1,"cl-release",3,"cl-release--dev","cl-release--latest"],["surface","sunken",1,"cl-release"],[1,"cl-head"],[1,"cl-ver"],[1,"cl-tags"],["content","dev · not on npm","variant","warning"],[3,"content","variant"],["variant","success",1,"cl-latest"],[1,"cl-group"],[1,"cl-foot"],["variant","alert",3,"content"],["target","_blank","rel","noopener noreferrer",1,"cl-link",3,"href"],["name","globe",3,"size"],[1,"cl-group-title"],[1,"cl-items"],[1,"cl-item",3,"is-breaking","is-collapsed"],[1,"cl-item"],[1,"cl-break"],[1,"cl-lead"],[3,"runs"],[1,"cl-rest"],["foldButton","","size","sm","emphasis","soft","intent","neutral",1,"cl-more",3,"click"],[3,"name","size"],[1,"cl-links"],["name","download",3,"size"]],template:function(e,o){e&1&&(s(0,"fold-page-layout",1)(1,"p",2),i(2," The full history of "),s(3,"code"),i(4,"fold-ng"),l(),i(5,", rendered from "),s(6,"code"),i(7,"CHANGELOG.md"),l(),i(8," as a designed timeline. This gallery tracks the "),s(9,"strong"),i(10,"dev"),l(),i(11," branch — npm's "),s(12,"code"),i(13,"latest"),l(),i(14," is "),s(15,"code"),i(16),l(),i(17,". "),l(),s(18,"fold-callout",3),i(19," This page mirrors "),s(20,"strong"),i(21,"dev"),l(),i(22,". The "),s(23,"strong"),i(24,"Unreleased"),l(),i(25," entries below ship in the next version — they are not on npm yet (latest published: "),s(26,"code"),i(27),l(),i(28,"). "),l(),s(29,"div",4),_(30,le,4,4,"button",5),s(31,"button",6),x("click",function(){return o.toggleBreaking()}),i(32," Breaking "),s(33,"span",7),i(34),l()(),C(35,se,4,5,"button",5,ie),_(37,re,2,0,"button",8),l(),_(38,ce,2,0,"fold-callout",9)(39,we,3,1,"fold-timeline",10),l()),e&2&&(a(16),m(o.published),a(11),m(o.published),a(3),g(o.unreleasedTotal>0?30:-1),a(),d("emphasis",o.breakingActive()?"soft":"outline")("intent",o.breakingActive()?"danger":"neutral"),O("aria-pressed",o.breakingActive()),a(3),m(o.breakingTotal),a(),v(o.kindChips),a(2),g(o.anyFilter()?37:-1),a(),g(o.isEmpty()?38:39))},dependencies:[N,Y,Z,j,H,V,ee,w],styles:[`@charset "UTF-8";
.cl-banner[_ngcontent-%COMP%] {
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
  font-weight: var(--fold-weight-semibold);
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

.cl-release--latest[_ngcontent-%COMP%] {
  outline: 1px solid var(--fold-color-primary-border);
  outline-offset: -1px;
}

.cl-latest[_ngcontent-%COMP%] {
  margin-bottom: var(--fold-space-md);
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
  font-weight: var(--fold-weight-bold);
  letter-spacing: var(--fold-tracking-tight);
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
  line-height: var(--fold-leading-normal);
  
}
.cl-item.is-breaking[_ngcontent-%COMP%] {
  border-left-color: var(--fold-color-alert);
}
.cl-item[_ngcontent-%COMP%] {
  

}
.cl-item.is-collapsed[_ngcontent-%COMP%] {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.cl-break[_ngcontent-%COMP%] {
  display: inline-block;
  margin-right: var(--fold-space-xs);
  padding: 0 0.4em;
  font-size: var(--fold-text-xs);
  font-weight: var(--fold-weight-bold);
  text-transform: uppercase;
  letter-spacing: var(--fold-tracking-wide);
  color: var(--fold-color-alert-text);
  background: var(--fold-color-alert-surface);
  border-radius: var(--fold-radius-xs);
  vertical-align: middle;
}

.cl-lead[_ngcontent-%COMP%] {
  color: var(--fold-color-text);
  font-weight: var(--fold-weight-semibold);
}

.cl-rest[_ngcontent-%COMP%] {
  display: block;
  margin-top: 2px;
  color: var(--fold-color-text-muted);
  font-size: var(--fold-text-sm);
}

.cl-foot[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--fold-space-sm) var(--fold-space-md);
  margin-top: var(--fold-space-md);
}

.cl-more[_ngcontent-%COMP%] {
  margin-right: auto;
}

.cl-links[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: var(--fold-space-md);
}

.cl-link[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: var(--fold-space-xs);
  color: var(--fold-color-text-muted);
  font-size: var(--fold-text-sm);
  font-weight: var(--fold-weight-semibold);
  text-decoration: none;
  transition: color var(--fold-motion-fast);
}
.cl-link[_ngcontent-%COMP%]:hover, .cl-link[_ngcontent-%COMP%]:focus-visible {
  color: var(--fold-color-primary-text);
}`]})}export{A as default};
