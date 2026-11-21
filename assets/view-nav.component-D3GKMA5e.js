import{u as s,af as w,a0 as h,X as k,A as _,aF as T,aA as F,ɵ as z,aq as V,F as A,a as N,R as K,aH as L,d,i as S,f as b,H as $,L as m,j as r,o as j,w as v,x as u,e as P,q as i,m as l,k as x,at as p,a3 as f,D as g,au as q,aI as y,E as D,B as H,g as M,t as R,N as E,O as B,Q as I}from"./index-Bn4Y0N5Q.js";import{F as U}from"./tab-tooltip.directive-RHwH7pev.js";import{F as W}from"./nav-layout.context-BOZqJ9uM.js";import{F as Q}from"./breakpoints-J4fapboB.js";import"./auto-update-_srfpL1Q.js";const X=e=>({$implicit:e,active:!1}),O=(e,a)=>({$implicit:e,active:a}),Y=(e,a)=>a.key;function G(e,a){if(e&1&&(d(0,"button",3),p(1,7),b()),e&2){const n=i().$implicit,t=i(),o=f(4);g("aria-label",t.isTooltip(!1)?n.label:null),r(),l("ngTemplateOutlet",o)("ngTemplateOutletContext",q(3,X,n))}}function J(e,a){if(e&1&&(d(0,"a",4,1),p(2,7),b()),e&2){const n=f(1),t=i().$implicit,o=i(),c=f(4);l("routerLink",t.link)("queryParams",t.queryParams)("queryParamsHandling",t.queryParamsHandling)("state",t.state)("routerLinkActiveOptions",o.activeOnPath),g("aria-current",n.isActive?"page":null)("aria-label",o.isTooltip(n.isActive)?t.label:null),r(2),l("ngTemplateOutlet",c)("ngTemplateOutletContext",y(9,O,t,n.isActive))}}function Z(e,a){if(e&1&&(d(0,"a",8),p(1,7),b()),e&2){const n=i().$implicit,t=i(),o=f(4);m("is-active",t.activeKey()===n.key),l("href",n.href,R),g("aria-current",t.activeKey()===n.key?"page":null)("aria-label",t.isTooltip(t.activeKey()===n.key)?n.label:null),r(),l("ngTemplateOutlet",o)("ngTemplateOutletContext",y(7,O,n,t.activeKey()===n.key))}}function nn(e,a){if(e&1){const n=D();d(0,"button",9),H("click",function(){E(n);const o=i().$implicit,c=i();return B(c.activeKey.set(o.key))}),p(1,7),b()}if(e&2){const n=i().$implicit,t=i(),o=f(4);m("is-active",t.activeKey()===n.key),g("aria-current",t.activeKey()===n.key?"page":null)("aria-label",t.isTooltip(t.activeKey()===n.key)?n.label:null),r(),l("ngTemplateOutlet",o)("ngTemplateOutletContext",y(6,O,n,t.activeKey()===n.key))}}function tn(e,a){if(e&1&&v(0,G,2,5,"button",3)(1,J,3,12,"a",4)(2,Z,2,10,"a",5)(3,nn,2,9,"button",6),e&2){const n=a.$implicit;u(n.disabled?0:n.link!==void 0?1:n.href!==void 0?2:3)}}function en(e,a){e&1&&M(0,"fold-icon",10),e&2&&l("name",a)}function an(e,a){if(e&1&&(d(0,"span",11),P(1),b()),e&2){const n=i().$implicit;r(),x(n.label.charAt(0))}}function on(e,a){if(e&1&&M(0,"fold-badge",13),e&2){const n=i(),t=n.$implicit,o=n.active;l("content",t.badge+"")("variant",o?"accent":"neutral")}}function rn(e,a){if(e&1&&(v(0,en,1,1,"fold-icon",10)(1,an,2,1,"span",11),d(2,"span",12),P(3),b(),v(4,on,1,2,"fold-badge",13)),e&2){let n;const t=a.$implicit,o=a.active,c=i();u((n=t.icon)?0:c.collapsed()?1:-1,n),r(2),l("foldTabTooltip",c.isTooltip(o))("tooltipSide",c.tooltipSide()),r(),x(t.label),r(),u(t.badge!==void 0&&t.badge!==null?4:-1)}}const ln={paths:"subset",queryParams:"ignored",fragment:"ignored",matrixParams:"ignored"};class C{activeOnPath=ln;items=s.required();activeKey=w("");activeStyle=s("underline");direction=s("auto");size=s("compact");justify=s("start");collapsed=s(!1,{transform:h});background=s("transparent");sticky=s(!1,{transform:h});layout=k(W,{optional:!0});isStandalone=_(()=>this.layout===null);width=T();narrow=_(()=>this.width()>0&&this.width()<=Q);constructor(){F(()=>this.layout?.barCollapsed.set(this.collapsed()))}tooltipSide=_(()=>this.resolvedDirection()==="vertical"?"right":"bottom");isTooltip(a){return this.collapsed()&&(this.resolvedDirection()==="vertical"||!a)}resolvedDirection=_(()=>{const a=this.direction();return a!=="auto"?a:this.layout?.stacked()?"horizontal":"vertical"});static ɵfac=function(n){return new(n||C)};static ɵcmp=z({type:C,selectors:[["fold-view-nav"]],hostVars:8,hostBindings:function(n,t){n&2&&m("is-standalone",t.isStandalone())("is-horizontal",t.resolvedDirection()==="horizontal")("is-sticky",t.sticky())("is-narrow",t.narrow())},inputs:{items:[1,"items"],activeKey:[1,"activeKey"],activeStyle:[1,"activeStyle"],direction:[1,"direction"],size:[1,"size"],justify:[1,"justify"],collapsed:[1,"collapsed"],background:[1,"background"],sticky:[1,"sticky"]},outputs:{activeKey:"activeKeyChange"},decls:5,vars:14,consts:[["body",""],["rla","routerLinkActive"],[1,"tab-bar"],["type","button","disabled","","aria-disabled","true",1,"tab-bar-item","is-disabled"],["routerLinkActive","is-active",1,"tab-bar-item",3,"routerLink","queryParams","queryParamsHandling","state","routerLinkActiveOptions"],[1,"tab-bar-item",3,"href","is-active"],["type","button",1,"tab-bar-item",3,"is-active"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"tab-bar-item",3,"href"],["type","button",1,"tab-bar-item",3,"click"],["size","sm",1,"tab-bar-icon",3,"name"],["aria-hidden","true",1,"tab-bar-icon","tab-bar-initial"],[1,"tab-bar-label",3,"foldTabTooltip","tooltipSide"],[1,"tab-bar-badge",3,"content","variant"]],template:function(n,t){n&1&&(d(0,"nav",2),S(1,tn,4,1,null,null,Y),b(),$(3,rn,5,5,"ng-template",null,0,I)),n&2&&(m("style-underline",t.activeStyle()==="underline")("style-fill",t.activeStyle()==="fill")("dir-vertical",t.resolvedDirection()==="vertical")("size-comfortable",t.size()==="comfortable")("justify-stretch",t.justify()==="stretch")("is-collapsed",t.collapsed())("bg-surface",t.background()==="surface"),r(),j(t.items()))},dependencies:[V,A,N,K,L,U],styles:[`@charset "UTF-8";








[_nghost-%COMP%] {
  display: flex;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
}










.is-horizontal[_nghost-%COMP%] {
  align-self: start;
}





.is-sticky[_nghost-%COMP%] {
  position: sticky;
  top: 0;
  
  z-index: 2;
}



















[_nghost-%COMP%]:has(.tab-bar:not(.dir-vertical)) {
  overflow-x: auto;
  overflow-y: hidden;
  
  scrollbar-width: thin;
  overscroll-behavior-x: contain;
}

[_nghost-%COMP%]:has(.tab-bar:not(.dir-vertical))   .tab-bar[_ngcontent-%COMP%] {
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
















.bg-surface.style-fill[_ngcontent-%COMP%] {
  padding-bottom: var(--fold-space-xs);
}

.bg-surface[_ngcontent-%COMP%] {
  background: linear-gradient(var(--fold-color-bg-rail-tertiary), var(--fold-color-bg-rail-tertiary)), var(--fold-color-bg-page);
  padding: var(--fold-space-xs) var(--fold-space-sm) 0;
}

.bg-surface.dir-vertical[_ngcontent-%COMP%] {
  padding: var(--fold-space-md) var(--fold-space-sm);
}




.tab-bar-item[_ngcontent-%COMP%] {
  flex: 0 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--fold-space-sm);
  padding: var(--fold-space-sm) var(--fold-space-sm);
  background: none;
  border: none;
  color: var(--fold-color-text-muted);
  font-family: inherit;
  



  font-size: var(--fold-text-sm);
  font-weight: var(--fold-weight-medium);
  












  line-height: var(--fold-leading-none);
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


.justify-stretch[_ngcontent-%COMP%]:not(.dir-vertical)   .tab-bar-item[_ngcontent-%COMP%] {
  flex: 1;
}


.size-comfortable[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%] {
  gap: var(--fold-space-sm);
  padding: var(--fold-space-md) var(--fold-space-lg);
  font-size: var(--fold-text-base);
}



.dir-vertical.size-comfortable[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%] {
  padding: var(--fold-space-md) var(--fold-space-md);
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
  font-weight: var(--fold-weight-semibold);
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






.is-collapsed[_ngcontent-%COMP%]:not(.dir-vertical)   .tab-bar-item.is-active[_ngcontent-%COMP%] {
  flex: 0 0 auto;
  min-width: max-content;
}

.is-collapsed[_ngcontent-%COMP%]:not(.dir-vertical)   .tab-bar-item.is-active[_ngcontent-%COMP%]   .tab-bar-label[_ngcontent-%COMP%] {
  overflow: visible;
  text-overflow: clip;
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










.tab-bar-label[popover][_ngcontent-%COMP%] {
  position: fixed;
  

  inset: auto;
  margin: 0;
  padding: var(--fold-space-xs) var(--fold-space-sm);
  border-radius: var(--fold-radius-sm);
  background: var(--fold-color-glass);
  border: 1px solid var(--fold-color-glass-border);
  color: var(--fold-color-text);
  font-size: var(--fold-text-xs);
  font-weight: var(--fold-weight-medium);
  white-space: nowrap;
  overflow: visible;
  box-shadow: var(--fold-shadow-md);
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





[_nghost-%COMP%]:has(.tab-bar.dir-vertical.is-collapsed) {
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
  font-size: var(--fold-text-xs);
  font-weight: var(--fold-weight-bold);
  line-height: var(--fold-leading-none);
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





.style-folder[_ngcontent-%COMP%] {
  align-items: flex-end;
  padding: 0;
  background: none;
}

.style-folder[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%] {
  padding: var(--fold-space-sm) var(--fold-space-md);
  border-radius: var(--fold-radius-md) var(--fold-radius-md) 0 0;
  color: var(--fold-color-text-muted);
}

.style-folder[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%]:hover:not(.is-active) {
  background: var(--fold-color-surface-hover);
  color: var(--fold-color-text);
}

.style-folder[_ngcontent-%COMP%]   .tab-bar-item.is-active[_ngcontent-%COMP%] {
  background: var(--fold-tabs-folder-surface, var(--fold-color-surface-card));
  color: var(--fold-tabs-folder-ink, var(--fold-color-text));
  font-weight: var(--fold-weight-semibold);
}

.style-folder[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%]:focus-visible {
  border-radius: var(--fold-radius-md) var(--fold-radius-md) 0 0;
}


.tab-bar-count[_ngcontent-%COMP%] {
  flex-shrink: 0;
  font-family: var(--fold-font-mono);
  font-size: var(--fold-text-xs);
  font-weight: var(--fold-weight-regular);
  font-variant-numeric: tabular-nums;
  opacity: 0.8;
}


.tab-bar-dot[_ngcontent-%COMP%] {
  flex: none;
  width: 0.45em;
  height: 0.45em;
  border-radius: var(--fold-radius-round);
  background: var(--fold-color-text-faded);
}

.tab-bar-dot.warning[_ngcontent-%COMP%] {
  background: var(--fold-color-warning);
}

.tab-bar-dot.alert[_ngcontent-%COMP%] {
  background: var(--fold-color-alert);
}

.tab-bar-dot.success[_ngcontent-%COMP%] {
  background: var(--fold-color-success);
}

































.is-standalone.is-horizontal[_nghost-%COMP%] {
  margin-block-end: var(--fold-nav-layout-gap, var(--fold-space-lg, 16px));
}





.is-standalone.is-horizontal.is-narrow[_nghost-%COMP%] {
  margin-block-end: var(--fold-nav-layout-gap, var(--fold-space-xs, 4px));
}`]})}export{C as FoldViewNavComponent};
