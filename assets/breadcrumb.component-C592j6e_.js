import{u as m,ɵ as b,R as g,F as C,d as r,i as x,v as h,f as a,j as o,o as v,D as F,w as p,x as f,e as c,q as l,k as s,m as u,g as k,t as B}from"./index-pNbL1-Op.js";function M(e,t){if(e&1&&(r(0,"span",2),c(1),a()),e&2){const n=l().$implicit;o(),s(n.label)}}function O(e,t){if(e&1&&(r(0,"a",3),c(1),a()),e&2){const n=l().$implicit;u("routerLink",n.routerLink),o(),s(n.label)}}function P(e,t){if(e&1&&(r(0,"a",4),c(1),a()),e&2){const n=l().$implicit;u("href",n.href,B),o(),s(n.label)}}function w(e,t){if(e&1&&(r(0,"span",5),c(1),a()),e&2){const n=l().$implicit;o(),s(n.label)}}function y(e,t){e&1&&k(0,"fold-icon",6)}function T(e,t){if(e&1&&(r(0,"li",1),p(1,M,2,1,"span",2)(2,O,2,2,"a",3)(3,P,2,2,"a",4)(4,w,2,1,"span",5),p(5,y,1,0,"fold-icon",6),a()),e&2){const n=t.$implicit,i=t.$index,_=t.$count;o(),f(i===_-1?1:n.routerLink!==void 0?2:n.href!==void 0?3:4),o(4),f(i!==_-1?5:-1)}}class d{items=m.required();ariaLabel=m("Breadcrumb");static ɵfac=function(n){return new(n||d)};static ɵcmp=b({type:d,selectors:[["fold-breadcrumb"]],hostAttrs:["role","navigation"],hostVars:1,hostBindings:function(n,i){n&2&&F("aria-label",i.ariaLabel())},inputs:{items:[1,"items"],ariaLabel:[1,"ariaLabel"]},decls:3,vars:0,consts:[[1,"bc-list"],[1,"bc-item"],["aria-current","page",1,"bc-node","bc-current"],[1,"bc-node","bc-link",3,"routerLink"],[1,"bc-node","bc-link",3,"href"],[1,"bc-node"],["name","chevron-right","size","sm","aria-hidden","true",1,"bc-sep"]],template:function(n,i){n&1&&(r(0,"ol",0),x(1,T,6,2,"li",1,h),a()),n&2&&(o(),v(i.items()))},dependencies:[g,C],styles:[`@charset "UTF-8";
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
  font-weight: 600;
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
}`]})}export{d as FoldBreadcrumbComponent};
