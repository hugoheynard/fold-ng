import{u as d,ai as y,X as h,a2 as w,A as k,ɵ as F,au as T,F as z,a as V,R as N,aI as $,d as c,i as K,f as s,H as A,L as f,j as r,o as L,w as p,x as m,e as O,q as o,k as P,ax as _,$ as b,m as l,ay as j,D as v,aJ as u,E as S,B as D,g as M,t as R,N as E,O as I,Q as U}from"./index-kxEpaZ9_.js";import{F as q}from"./nav-layout.context-DnInOK3P.js";const B=t=>({$implicit:t,active:!1}),C=(t,a)=>({$implicit:t,active:a}),X=(t,a)=>a.key;function Y(t,a){if(t&1&&(c(0,"button",3),_(1,7),s()),t&2){const n=o().$implicit;o();const e=b(4);r(),l("ngTemplateOutlet",e)("ngTemplateOutletContext",j(2,B,n))}}function H(t,a){if(t&1&&(c(0,"a",4,1),_(2,7),s()),t&2){const n=b(1),e=o().$implicit;o();const i=b(4);l("routerLink",e.link),v("aria-current",n.isActive?"page":null),r(2),l("ngTemplateOutlet",i)("ngTemplateOutletContext",u(4,C,e,n.isActive))}}function J(t,a){if(t&1&&(c(0,"a",8),_(1,7),s()),t&2){const n=o().$implicit,e=o(),i=b(4);f("is-active",e.activeKey()===n.key),l("href",n.href,R),v("aria-current",e.activeKey()===n.key?"page":null),r(),l("ngTemplateOutlet",i)("ngTemplateOutletContext",u(6,C,n,e.activeKey()===n.key))}}function Q(t,a){if(t&1){const n=S();c(0,"button",9),D("click",function(){E(n);const i=o().$implicit,x=o();return I(x.activeKey.set(i.key))}),_(1,7),s()}if(t&2){const n=o().$implicit,e=o(),i=b(4);f("is-active",e.activeKey()===n.key),v("aria-current",e.activeKey()===n.key?"page":null),r(),l("ngTemplateOutlet",i)("ngTemplateOutletContext",u(5,C,n,e.activeKey()===n.key))}}function G(t,a){if(t&1&&p(0,Y,2,4,"button",3)(1,H,3,7,"a",4)(2,J,2,9,"a",5)(3,Q,2,8,"button",6),t&2){const n=a.$implicit;m(n.disabled?0:n.link!==void 0?1:n.href!==void 0?2:3)}}function W(t,a){t&1&&M(0,"fold-icon",10),t&2&&l("name",a)}function Z(t,a){if(t&1&&(c(0,"span",11),O(1),s()),t&2){const n=o().$implicit;r(),P(n.label.charAt(0))}}function nn(t,a){if(t&1&&M(0,"fold-badge",13),t&2){const n=o(),e=n.$implicit,i=n.active;l("content",e.badge+"")("variant",i?"accent":"neutral")}}function tn(t,a){if(t&1&&(p(0,W,1,1,"fold-icon",10)(1,Z,2,1,"span",11),c(2,"span",12),O(3),s(),p(4,nn,1,2,"fold-badge",13)),t&2){let n;const e=a.$implicit,i=o();m((n=e.icon)?0:i.collapsed()?1:-1,n),r(3),P(e.label),r(),m(e.badge!==void 0&&e.badge!==null?4:-1)}}class g{items=d.required();activeKey=y("");activeStyle=d("underline");direction=d("auto");size=d("compact");collapsed=d(!1,{transform:h});background=d("transparent");layout=w(q,{optional:!0});resolvedDirection=k(()=>{const a=this.direction();return a!=="auto"?a:this.layout?.stacked()?"horizontal":"vertical"});static ɵfac=function(n){return new(n||g)};static ɵcmp=F({type:g,selectors:[["fold-view-nav"]],inputs:{items:[1,"items"],activeKey:[1,"activeKey"],activeStyle:[1,"activeStyle"],direction:[1,"direction"],size:[1,"size"],collapsed:[1,"collapsed"],background:[1,"background"]},outputs:{activeKey:"activeKeyChange"},decls:5,vars:12,consts:[["body",""],["rla","routerLinkActive"],[1,"tab-bar"],["type","button","disabled","","aria-disabled","true",1,"tab-bar-item","is-disabled"],["routerLinkActive","is-active",1,"tab-bar-item",3,"routerLink"],[1,"tab-bar-item",3,"href","is-active"],["type","button",1,"tab-bar-item",3,"is-active"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"tab-bar-item",3,"href"],["type","button",1,"tab-bar-item",3,"click"],["size","sm",1,"tab-bar-icon",3,"name"],["aria-hidden","true",1,"tab-bar-icon","tab-bar-initial"],[1,"tab-bar-label"],[1,"tab-bar-badge",3,"content","variant"]],template:function(n,e){n&1&&(c(0,"nav",2),K(1,G,4,1,null,null,X),s(),A(3,tn,5,3,"ng-template",null,0,U)),n&2&&(f("style-underline",e.activeStyle()==="underline")("style-fill",e.activeStyle()==="fill")("dir-vertical",e.resolvedDirection()==="vertical")("size-comfortable",e.size()==="comfortable")("is-collapsed",e.collapsed())("bg-surface",e.background()==="surface"),r(),L(e.items()))},dependencies:[T,z,V,N,$],styles:[`@charset "UTF-8";








[_nghost-%COMP%] {
  display: flex;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
}




.tab-bar[_ngcontent-%COMP%] {
  flex: 1;
  display: flex;
  max-width: 100%;
  gap: 2px;
  user-select: none;
}




.bg-surface[_ngcontent-%COMP%] {
  background: var(--fold-color-bg-rail-tertiary);
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


@media (max-width: 768px) {
  .dir-vertical[_ngcontent-%COMP%] {
    flex-direction: row;
    align-items: center;
  }
  .dir-vertical[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%] {
    flex: 0 0 auto;
    justify-content: center;
    text-align: center;
    padding: var(--fold-space-sm);
    gap: 0;
    font-size: var(--fold-text-xs);
    font-weight: 600;
  }
  .dir-vertical[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%]   .tab-bar-label[_ngcontent-%COMP%] {
    display: none;
  }
  .dir-vertical[_ngcontent-%COMP%]   .tab-bar-item.is-active[_ngcontent-%COMP%] {
    flex: 1 1 auto;
    min-width: 0;
    gap: var(--fold-space-sm);
    padding: var(--fold-space-sm) var(--fold-space-md);
  }
  .dir-vertical[_ngcontent-%COMP%]   .tab-bar-item.is-active[_ngcontent-%COMP%]   .tab-bar-label[_ngcontent-%COMP%] {
    display: inline;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .dir-vertical[_ngcontent-%COMP%]   .tab-bar-badge[_ngcontent-%COMP%] {
    display: none;
  }
  .dir-vertical.style-underline[_ngcontent-%COMP%] {
    border-right: none;
    border-bottom: 1px solid var(--fold-color-border);
  }
  .dir-vertical.style-underline[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%] {
    border-left: none;
    border-bottom: 2px solid transparent;
    margin-right: 0;
    margin-bottom: -1px;
  }
  .dir-vertical.style-underline[_ngcontent-%COMP%]   .tab-bar-item.is-active[_ngcontent-%COMP%] {
    border-bottom-color: var(--fold-color-primary);
  }
  .dir-vertical.style-fill[_ngcontent-%COMP%] {
    border-right: none;
  }
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
}`]})}export{g as FoldViewNavComponent};
