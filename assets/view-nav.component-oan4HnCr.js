import{t as c,u as y,T as h,Q as w,B as k,ɵ as F,$ as T,F as z,a as V,R as N,ba as $,d as s,i as K,f as d,a0 as A,x as v,j as r,o as L,J as p,K as g,e as O,z as o,k as P,a1 as _,O as b,m as l,a6 as j,N as f,av as C,E as S,G as R,g as M,r as D,H as E,I,a2 as U}from"./index-DgKL0_pU.js";import{F as B}from"./nav-layout.context-EddOtpfV.js";const Y=t=>({$implicit:t,active:!1}),u=(t,a)=>({$implicit:t,active:a}),q=(t,a)=>a.key;function G(t,a){if(t&1&&(s(0,"button",3),_(1,7),d()),t&2){const n=o().$implicit;o();const e=b(4);r(),l("ngTemplateOutlet",e)("ngTemplateOutletContext",j(2,Y,n))}}function H(t,a){if(t&1&&(s(0,"a",4,1),_(2,7),d()),t&2){const n=b(1),e=o().$implicit;o();const i=b(4);l("routerLink",e.link),f("aria-current",n.isActive?"page":null),r(2),l("ngTemplateOutlet",i)("ngTemplateOutletContext",C(4,u,e,n.isActive))}}function J(t,a){if(t&1&&(s(0,"a",8),_(1,7),d()),t&2){const n=o().$implicit,e=o(),i=b(4);v("is-active",e.activeKey()===n.key),l("href",n.href,D),f("aria-current",e.activeKey()===n.key?"page":null),r(),l("ngTemplateOutlet",i)("ngTemplateOutletContext",C(6,u,n,e.activeKey()===n.key))}}function Q(t,a){if(t&1){const n=S();s(0,"button",9),R("click",function(){E(n);const i=o().$implicit,x=o();return I(x.activeChange.emit(i.key))}),_(1,7),d()}if(t&2){const n=o().$implicit,e=o(),i=b(4);v("is-active",e.activeKey()===n.key),f("aria-current",e.activeKey()===n.key?"page":null),r(),l("ngTemplateOutlet",i)("ngTemplateOutletContext",C(5,u,n,e.activeKey()===n.key))}}function X(t,a){if(t&1&&p(0,G,2,4,"button",3)(1,H,3,7,"a",4)(2,J,2,9,"a",5)(3,Q,2,8,"button",6),t&2){const n=a.$implicit;g(n.disabled?0:n.link!==void 0?1:n.href!==void 0?2:3)}}function W(t,a){t&1&&M(0,"fold-icon",10),t&2&&l("name",a)}function Z(t,a){if(t&1&&(s(0,"span",11),O(1),d()),t&2){const n=o().$implicit;r(),P(n.label.charAt(0))}}function nn(t,a){if(t&1&&M(0,"fold-badge",13),t&2){const n=o(),e=n.$implicit,i=n.active;l("content",e.badge+"")("variant",i?"accent":"neutral")}}function tn(t,a){if(t&1&&(p(0,W,1,1,"fold-icon",10)(1,Z,2,1,"span",11),s(2,"span",12),O(3),d(),p(4,nn,1,2,"fold-badge",13)),t&2){let n;const e=a.$implicit,i=o();g((n=e.icon)?0:i.collapsed()?1:-1,n),r(3),P(e.label),r(),g(e.badge!==void 0&&e.badge!==null?4:-1)}}class m{items=c.required();activeKey=c("");activeStyle=c("underline");direction=c("auto");size=c("compact");collapsed=c(!1,{transform:y});background=c("transparent");activeChange=h();layout=w(B,{optional:!0});resolvedDirection=k(()=>{const a=this.direction();return a!=="auto"?a:this.layout?.stacked()?"horizontal":"vertical"});static ɵfac=function(n){return new(n||m)};static ɵcmp=F({type:m,selectors:[["fold-view-nav"]],inputs:{items:[1,"items"],activeKey:[1,"activeKey"],activeStyle:[1,"activeStyle"],direction:[1,"direction"],size:[1,"size"],collapsed:[1,"collapsed"],background:[1,"background"]},outputs:{activeChange:"activeChange"},decls:5,vars:12,consts:[["body",""],["rla","routerLinkActive"],[1,"tab-bar"],["type","button","disabled","","aria-disabled","true",1,"tab-bar-item","is-disabled"],["routerLinkActive","is-active",1,"tab-bar-item",3,"routerLink"],[1,"tab-bar-item",3,"href","is-active"],["type","button",1,"tab-bar-item",3,"is-active"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"tab-bar-item",3,"href"],["type","button",1,"tab-bar-item",3,"click"],["size","sm",1,"tab-bar-icon",3,"name"],["aria-hidden","true",1,"tab-bar-icon","tab-bar-initial"],[1,"tab-bar-label"],[1,"tab-bar-badge",3,"content","variant"]],template:function(n,e){n&1&&(s(0,"nav",2),K(1,X,4,1,null,null,q),d(),A(3,tn,5,3,"ng-template",null,0,U)),n&2&&(v("style-underline",e.activeStyle()==="underline")("style-fill",e.activeStyle()==="fill")("dir-vertical",e.resolvedDirection()==="vertical")("size-comfortable",e.size()==="comfortable")("is-collapsed",e.collapsed())("bg-surface",e.background()==="surface"),r(),L(e.items()))},dependencies:[T,z,V,N,$],styles:[`@charset "UTF-8";








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
  padding: 4px 8px 0;
}

.bg-surface.dir-vertical[_ngcontent-%COMP%] {
  padding: 12px 8px;
}

.tab-bar-item[_ngcontent-%COMP%] {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 6px 8px;
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
  gap: 10px;
  padding: 11px 16px;
  font-size: var(--fold-text-sm);
}




.dir-vertical.size-comfortable[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%] {
  padding: 12px 14px;
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
  padding: 9px 12px;
  gap: 10px;
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
  gap: 7px;
}

.is-collapsed[_ngcontent-%COMP%]   .tab-bar-item.is-active[_ngcontent-%COMP%]   .tab-bar-label[_ngcontent-%COMP%] {
  overflow: hidden;
  text-overflow: ellipsis;
}



.dir-vertical.is-collapsed[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%]   .tab-bar-icon[_ngcontent-%COMP%]    ~ .tab-bar-label[_ngcontent-%COMP%], 
.is-collapsed[_ngcontent-%COMP%]:not(.dir-vertical)   .tab-bar-item[_ngcontent-%COMP%]:not(.is-active)   .tab-bar-icon[_ngcontent-%COMP%]    ~ .tab-bar-label[_ngcontent-%COMP%] {
  position: absolute;
  padding: 4px 8px;
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
    padding: 8px;
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
    gap: 6px;
    padding: 8px 12px;
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
}`]})}export{m as F};
