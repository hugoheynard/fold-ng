import{u as c,ag as k,a0 as O,X as w,A as P,ɵ as F,ar as T,F as z,a as V,R as N,aI as K,d as s,i as $,f as d,H as A,L as _,j as r,o as L,w as m,x as g,e as M,q as o,k as y,au as p,a3 as b,m as l,av as S,D as v,aJ as u,E as j,B as D,g as x,t as B,N as R,O as E,Q as I}from"./index-ysy8dM_Z.js";import{F as U}from"./nav-layout.context-tnmebyXr.js";const q=e=>({$implicit:e,active:!1}),C=(e,a)=>({$implicit:e,active:a}),H=(e,a)=>a.key;function X(e,a){if(e&1&&(s(0,"button",3),p(1,7),d()),e&2){const n=o().$implicit;o();const t=b(4);r(),l("ngTemplateOutlet",t)("ngTemplateOutletContext",S(2,q,n))}}function Y(e,a){if(e&1&&(s(0,"a",4,1),p(2,7),d()),e&2){const n=b(1),t=o().$implicit;o();const i=b(4);l("routerLink",t.link),v("aria-current",n.isActive?"page":null),r(2),l("ngTemplateOutlet",i)("ngTemplateOutletContext",u(4,C,t,n.isActive))}}function J(e,a){if(e&1&&(s(0,"a",8),p(1,7),d()),e&2){const n=o().$implicit,t=o(),i=b(4);_("is-active",t.activeKey()===n.key),l("href",n.href,B),v("aria-current",t.activeKey()===n.key?"page":null),r(),l("ngTemplateOutlet",i)("ngTemplateOutletContext",u(6,C,n,t.activeKey()===n.key))}}function Q(e,a){if(e&1){const n=j();s(0,"button",9),D("click",function(){R(n);const i=o().$implicit,h=o();return E(h.activeKey.set(i.key))}),p(1,7),d()}if(e&2){const n=o().$implicit,t=o(),i=b(4);_("is-active",t.activeKey()===n.key),v("aria-current",t.activeKey()===n.key?"page":null),r(),l("ngTemplateOutlet",i)("ngTemplateOutletContext",u(5,C,n,t.activeKey()===n.key))}}function G(e,a){if(e&1&&m(0,X,2,4,"button",3)(1,Y,3,7,"a",4)(2,J,2,9,"a",5)(3,Q,2,8,"button",6),e&2){const n=a.$implicit;g(n.disabled?0:n.link!==void 0?1:n.href!==void 0?2:3)}}function W(e,a){e&1&&x(0,"fold-icon",10),e&2&&l("name",a)}function Z(e,a){if(e&1&&(s(0,"span",11),M(1),d()),e&2){const n=o().$implicit;r(),y(n.label.charAt(0))}}function nn(e,a){if(e&1&&x(0,"fold-badge",13),e&2){const n=o(),t=n.$implicit,i=n.active;l("content",t.badge+"")("variant",i?"accent":"neutral")}}function tn(e,a){if(e&1&&(m(0,W,1,1,"fold-icon",10)(1,Z,2,1,"span",11),s(2,"span",12),M(3),d(),m(4,nn,1,2,"fold-badge",13)),e&2){let n;const t=a.$implicit,i=o();g((n=t.icon)?0:i.collapsed()?1:-1,n),r(3),y(t.label),r(),g(t.badge!==void 0&&t.badge!==null?4:-1)}}class f{items=c.required();activeKey=k("");activeStyle=c("underline");direction=c("auto");size=c("compact");collapsed=c(!1,{transform:O});background=c("transparent");sticky=c(!1,{transform:O});layout=w(U,{optional:!0});isStandalone=P(()=>this.layout===null);resolvedDirection=P(()=>{const a=this.direction();return a!=="auto"?a:this.layout?.stacked()?"horizontal":"vertical"});static ɵfac=function(n){return new(n||f)};static ɵcmp=F({type:f,selectors:[["fold-view-nav"]],hostVars:6,hostBindings:function(n,t){n&2&&_("is-standalone",t.isStandalone())("is-horizontal",t.resolvedDirection()==="horizontal")("is-sticky",t.sticky())},inputs:{items:[1,"items"],activeKey:[1,"activeKey"],activeStyle:[1,"activeStyle"],direction:[1,"direction"],size:[1,"size"],collapsed:[1,"collapsed"],background:[1,"background"],sticky:[1,"sticky"]},outputs:{activeKey:"activeKeyChange"},decls:5,vars:12,consts:[["body",""],["rla","routerLinkActive"],[1,"tab-bar"],["type","button","disabled","","aria-disabled","true",1,"tab-bar-item","is-disabled"],["routerLinkActive","is-active",1,"tab-bar-item",3,"routerLink"],[1,"tab-bar-item",3,"href","is-active"],["type","button",1,"tab-bar-item",3,"is-active"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"tab-bar-item",3,"href"],["type","button",1,"tab-bar-item",3,"click"],["size","sm",1,"tab-bar-icon",3,"name"],["aria-hidden","true",1,"tab-bar-icon","tab-bar-initial"],[1,"tab-bar-label"],[1,"tab-bar-badge",3,"content","variant"]],template:function(n,t){n&1&&(s(0,"nav",2),$(1,G,4,1,null,null,H),d(),A(3,tn,5,3,"ng-template",null,0,I)),n&2&&(_("style-underline",t.activeStyle()==="underline")("style-fill",t.activeStyle()==="fill")("dir-vertical",t.resolvedDirection()==="vertical")("size-comfortable",t.size()==="comfortable")("is-collapsed",t.collapsed())("bg-surface",t.background()==="surface"),r(),L(t.items()))},dependencies:[T,z,V,N,K],styles:[`@charset "UTF-8";








[_nghost-%COMP%] {
  display: flex;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
}





.is-sticky[_nghost-%COMP%] {
  position: sticky;
  top: 0;
  
  z-index: 2;
}














[_nghost-%COMP%]:has(.tab-bar:not(.dir-vertical):not(.is-collapsed)) {
  overflow-x: auto;
  overflow-y: hidden;
  
  scrollbar-width: thin;
  overscroll-behavior-x: contain;
}

[_nghost-%COMP%]:has(.tab-bar:not(.dir-vertical):not(.is-collapsed))   .tab-bar[_ngcontent-%COMP%] {
  min-width: max-content;
  max-width: none;
}




.tab-bar[_ngcontent-%COMP%] {
  flex: 1;
  display: flex;
  max-width: 100%;
  gap: 2px;
  user-select: none;
}












.bg-surface[_ngcontent-%COMP%] {
  background: linear-gradient(var(--fold-color-bg-rail-tertiary), var(--fold-color-bg-rail-tertiary)), var(--fold-color-bg-page);
  padding: var(--fold-space-xs) var(--fold-space-sm) 0;
}

.bg-surface.dir-vertical[_ngcontent-%COMP%] {
  padding: var(--fold-space-md) var(--fold-space-sm);
}

.tab-bar-item[_ngcontent-%COMP%] {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--fold-space-sm);
  padding: var(--fold-space-sm) var(--fold-space-sm);
  background: none;
  border: none;
  color: var(--fold-color-text-muted);
  font-family: inherit;
  font-size: 10px;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
  text-decoration: none; 
  transition: color 0.1s ease, background 0.1s ease, border-color 0.1s ease;
  white-space: nowrap;
}

.tab-bar-item[_ngcontent-%COMP%]:hover {
  color: var(--fold-color-text-secondary);
}


.tab-bar-item.is-disabled[_ngcontent-%COMP%] {
  opacity: 0.5;
  cursor: default;
  pointer-events: none;
}


.size-comfortable[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%] {
  flex: 0 1 auto;
  gap: var(--fold-space-sm);
  padding: var(--fold-space-md) var(--fold-space-lg);
  font-size: var(--fold-text-sm);
}




.dir-vertical.size-comfortable[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%] {
  padding: var(--fold-space-md) var(--fold-space-md);
  font-size: var(--fold-text-md);
}


.style-underline[_ngcontent-%COMP%] {
  border-bottom: 1px solid var(--fold-color-border);
}

.style-underline[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%] {
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
}

.style-underline[_ngcontent-%COMP%]   .tab-bar-item.is-active[_ngcontent-%COMP%] {
  color: var(--fold-color-text);
  border-bottom-color: var(--fold-color-primary);
}


.style-fill[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%] {
  border-radius: var(--fold-radius-sm);
  border: 1px solid transparent;
}

.style-fill[_ngcontent-%COMP%]   .tab-bar-item.is-active[_ngcontent-%COMP%] {
  background: var(--fold-color-primary-surface);
  color: var(--fold-color-primary-text);
  font-weight: 600;
}

.style-fill[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%]:hover:not(.is-active) {
  background: var(--fold-color-surface-hover);
  color: var(--fold-color-text);
}


.dir-vertical[_ngcontent-%COMP%] {
  flex-direction: column;
}

.dir-vertical[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%] {
  flex: none;
  justify-content: flex-start;
  text-align: left;
  padding: var(--fold-space-sm) var(--fold-space-md);
  gap: var(--fold-space-sm);
  border-radius: var(--fold-radius-sm);
  font-size: var(--fold-text-sm);
  font-weight: 500;
}

.dir-vertical.style-underline[_ngcontent-%COMP%] {
  border-bottom: none;
  border-right: 1px solid var(--fold-color-border);
}

.dir-vertical.style-underline[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%] {
  border-bottom: none;
  border-left: 2px solid transparent;
  margin-bottom: 0;
  margin-right: -1px;
}

.dir-vertical.style-underline[_ngcontent-%COMP%]   .tab-bar-item.is-active[_ngcontent-%COMP%] {
  border-left-color: var(--fold-color-primary);
}

.dir-vertical.style-fill[_ngcontent-%COMP%]   .tab-bar-item.is-active[_ngcontent-%COMP%] {
  background: var(--fold-color-primary-surface);
  color: var(--fold-color-primary-text);
  font-weight: 600;
}







.is-collapsed[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%] {
  position: relative;
  flex: 0 0 auto;
  gap: 0;
}



.is-collapsed[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%]:not(.is-active)   .tab-bar-badge[_ngcontent-%COMP%] {
  display: none;
}

.is-collapsed[_ngcontent-%COMP%]   .tab-bar-item.is-active[_ngcontent-%COMP%] {
  flex: 1 1 auto;
  min-width: 0;
  gap: var(--fold-space-sm);
}

.is-collapsed[_ngcontent-%COMP%]   .tab-bar-item.is-active[_ngcontent-%COMP%]   .tab-bar-label[_ngcontent-%COMP%] {
  overflow: hidden;
  text-overflow: ellipsis;
}



.dir-vertical.is-collapsed[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%]   .tab-bar-icon[_ngcontent-%COMP%]    ~ .tab-bar-label[_ngcontent-%COMP%], 
.is-collapsed[_ngcontent-%COMP%]:not(.dir-vertical)   .tab-bar-item[_ngcontent-%COMP%]:not(.is-active)   .tab-bar-icon[_ngcontent-%COMP%]    ~ .tab-bar-label[_ngcontent-%COMP%] {
  position: absolute;
  padding: var(--fold-space-xs) var(--fold-space-sm);
  border-radius: var(--fold-radius-sm);
  background: var(--fold-color-glass);
  border: 1px solid var(--fold-color-glass-border);
  color: var(--fold-color-text);
  font-size: var(--fold-text-xs);
  font-weight: 500;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  box-shadow: var(--fold-shadow-md);
  transition: opacity var(--fold-motion-fast);
  z-index: 100;
}


.dir-vertical.is-collapsed[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%]   .tab-bar-icon[_ngcontent-%COMP%]    ~ .tab-bar-label[_ngcontent-%COMP%] {
  left: calc(100% + 8px);
  top: 50%;
  transform: translateY(-50%);
}


.is-collapsed[_ngcontent-%COMP%]:not(.dir-vertical)   .tab-bar-item[_ngcontent-%COMP%]:not(.is-active)   .tab-bar-icon[_ngcontent-%COMP%]    ~ .tab-bar-label[_ngcontent-%COMP%] {
  top: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
}


.dir-vertical.is-collapsed[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%]:hover   .tab-bar-icon[_ngcontent-%COMP%]    ~ .tab-bar-label[_ngcontent-%COMP%], 
.dir-vertical.is-collapsed[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%]:focus-visible   .tab-bar-icon[_ngcontent-%COMP%]    ~ .tab-bar-label[_ngcontent-%COMP%], 
.is-collapsed[_ngcontent-%COMP%]:not(.dir-vertical)   .tab-bar-item[_ngcontent-%COMP%]:not(.is-active):hover   .tab-bar-icon[_ngcontent-%COMP%]    ~ .tab-bar-label[_ngcontent-%COMP%], 
.is-collapsed[_ngcontent-%COMP%]:not(.dir-vertical)   .tab-bar-item[_ngcontent-%COMP%]:not(.is-active):focus-visible   .tab-bar-icon[_ngcontent-%COMP%]    ~ .tab-bar-label[_ngcontent-%COMP%] {
  opacity: 1;
}




.dir-vertical.is-collapsed[_ngcontent-%COMP%] {
  align-items: center;
}

.dir-vertical.is-collapsed[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%], 
.dir-vertical.is-collapsed[_ngcontent-%COMP%]   .tab-bar-item.is-active[_ngcontent-%COMP%] {
  justify-content: center;
  gap: 0;
}



.dir-vertical.is-collapsed[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%]   .tab-bar-badge[_ngcontent-%COMP%] {
  display: block;
  position: absolute;
  top: -2px;
  right: -2px;
  transform: scale(0.85);
  transform-origin: top right;
  pointer-events: none;
}



[_nghost-%COMP%]:has(.is-collapsed) {
  overflow: visible;
}









.tab-bar-icon[_ngcontent-%COMP%] {
  flex-shrink: 0;
}




.tab-bar-initial[_ngcontent-%COMP%] {
  display: grid;
  place-items: center;
  width: 18px;
  height: 18px;
  border-radius: var(--fold-radius-sm);
  font-size: 11px;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
}



.tab-bar-badge[_ngcontent-%COMP%] {
  flex-shrink: 0;
  font-variant-numeric: tabular-nums;
}



.tab-bar-item[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--fold-color-primary);
  outline-offset: -2px;
  border-radius: var(--fold-radius-sm);
}





















.is-standalone.is-horizontal[_nghost-%COMP%] {
  margin-block-end: var(--fold-nav-layout-gap, var(--fold-space-lg, 16px));
  




}
@media (max-width: 640px) {
  .is-standalone.is-horizontal[_nghost-%COMP%] {
    margin-block-end: var(--fold-nav-layout-gap, var(--fold-space-xs, 4px));
  }
}`]})}export{f as FoldViewNavComponent};
