import{u as d,ɵ as g,R as C,F as x,d as r,i as h,v,f as a,j as o,o as F,D as k,w as p,q as c,x as f,e as l,k as s,m as u,g as P,t as B}from"./index-HUDWVz6A.js";function w(e,t){if(e&1&&(r(0,"span",2),l(1),a()),e&2){const n=c().$implicit;o(),s(n.label)}}function M(e,t){if(e&1&&(r(0,"a",3),l(1),a()),e&2){const n=c().$implicit;u("routerLink",n.routerLink),o(),s(n.label)}}function O(e,t){if(e&1&&(r(0,"a",4),l(1),a()),e&2){const n=c().$implicit;u("href",n.href,B),o(),s(n.label)}}function y(e,t){if(e&1&&(r(0,"span",5),l(1),a()),e&2){const n=c().$implicit;o(),s(n.label)}}function T(e,t){e&1&&P(0,"fold-icon",6)}function L(e,t){if(e&1&&(r(0,"li",1),p(1,w,2,1,"span",2)(2,M,2,2,"a",3)(3,O,2,2,"a",4)(4,y,2,1,"span",5),p(5,T,1,0,"fold-icon",6),a()),e&2){const n=t.$implicit,i=t.$index,m=t.$count,b=c();o(),f(i===m-1&&b.currentPage()?1:n.routerLink!==void 0?2:n.href!==void 0?3:4),o(4),f(i!==m-1?5:-1)}}class _{items=d.required();ariaLabel=d("Breadcrumb");currentPage=d(!0);static ɵfac=function(n){return new(n||_)};static ɵcmp=g({type:_,selectors:[["fold-breadcrumb"]],hostAttrs:["role","navigation"],hostVars:1,hostBindings:function(n,i){n&2&&k("aria-label",i.ariaLabel())},inputs:{items:[1,"items"],ariaLabel:[1,"ariaLabel"],currentPage:[1,"currentPage"]},decls:3,vars:0,consts:[[1,"bc-list"],[1,"bc-item"],["aria-current","page",1,"bc-node","bc-current"],[1,"bc-node","bc-link",3,"routerLink"],[1,"bc-node","bc-link",3,"href"],[1,"bc-node"],["name","chevron-right","size","sm","aria-hidden","true",1,"bc-sep"]],template:function(n,i){n&1&&(r(0,"ol",0),h(1,L,6,2,"li",1,v),a()),n&2&&(o(),F(i.items()))},dependencies:[C,x],styles:[`@charset "UTF-8";
[_nghost-%COMP%] {
  display: block;
}

.bc-list[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.15rem;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: var(--fold-text-sm, 0.875rem);
}

.bc-item[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.15rem;
  min-width: 0;
}

.bc-node[_ngcontent-%COMP%] {
  padding: 0.15rem 0.3rem;
  border-radius: var(--fold-radius-sm, 8px);
  color: var(--fold-color-text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.bc-link[_ngcontent-%COMP%] {
  text-decoration: none;
  cursor: pointer;
  transition: color var(--fold-motion-fast);
}
.bc-link[_ngcontent-%COMP%]:hover {
  color: var(--fold-color-text);
  background: var(--fold-color-surface-hover);
}
.bc-link[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--fold-color-primary-border);
  outline-offset: 0;
}
@media (prefers-reduced-motion: reduce) {
  .bc-link[_ngcontent-%COMP%] {
    transition: none;
  }
}


.bc-current[_ngcontent-%COMP%] {
  color: var(--fold-color-text);
  font-weight: var(--fold-weight-semibold);
}

.bc-sep[_ngcontent-%COMP%] {
  flex: none;
  color: var(--fold-color-text-faded);
}

@media (forced-colors: active) {
  .bc-link[_ngcontent-%COMP%]:hover {
    background: Highlight;
    color: HighlightText;
  }
}`]})}export{_ as FoldBreadcrumbComponent};
