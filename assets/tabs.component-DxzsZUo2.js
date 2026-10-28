import{u as i,af as x,a0 as C,X as y,A as h,ag as w,aK as k,ɵ as T,F,a as z,d,B as O,i as K,f as c,L as p,D as M,j as l,o as S,a8 as $,a9 as j,E as A,w as f,e as _,q as s,m as b,x as g,k as m,g as u,ai as D,N as B,O as I}from"./index-C9CHsQIx.js";import{F as L}from"./tab-tooltip.directive-D6ebDCI0.js";import{F as V}from"./nav-layout.context-Buz_s_iO.js";import"./auto-update-_srfpL1Q.js";const q=["tabBtn"],E=(r,n)=>n.key;function N(r,n){r&1&&u(0,"fold-icon",4),r&2&&b("name",n)}function Q(r,n){if(r&1&&(d(0,"span",5),_(1),c()),r&2){const t=s().$implicit;l(),m(t.label.charAt(0))}}function U(r,n){if(r&1&&(d(0,"span",7),_(1),c()),r&2){const t=s().$implicit;l(),m(t.badge)}}function H(r,n){if(r&1&&u(0,"fold-badge",8),r&2){const t=s().$implicit,e=s();b("content",t.badge+"")("variant",e.activeKey()===t.key?"accent":"neutral")}}function R(r,n){r&1&&u(0,"span",10),r&2&&D(n)}function X(r,n){if(r&1){const t=A();d(0,"button",3,0),O("click",function(){const o=B(t).$implicit,a=s();return I(a.select(o.key))}),f(2,N,1,1,"fold-icon",4)(3,Q,2,1,"span",5),d(4,"span",6),_(5),c(),f(6,U,2,1,"span",7)(7,H,1,2,"fold-badge",8),f(8,R,1,2,"span",9),c()}if(r&2){let t,e;const o=n.$implicit,a=s();p("is-active",a.activeKey()===o.key),b("id",a.tabId(o.key))("tabindex",a.activeKey()===o.key?0:-1),M("aria-selected",a.activeKey()===o.key)("aria-controls",a.panelId(o.key))("aria-label",a.tabName(o,a.activeKey()===o.key)),l(2),g((t=o.icon)?2:a.collapsed()?3:-1,t),l(2),b("foldTabTooltip",a.isTooltip(a.activeKey()===o.key))("tooltipSide",a.tooltipSide()),l(),m(o.label),l(),g(o.badge!==void 0&&o.badge!==null&&a.activeStyle()==="folder"?6:o.badge!==void 0&&o.badge!==null?7:-1),l(2),g((e=o.dot)?8:-1,e)}}class v{tabs=i.required();activeKey=x.required();activeStyle=i("underline");direction=i("auto");size=i("compact");justify=i("start");collapsed=i(!1,{transform:C});background=i("surface");sticky=i(!1,{transform:C});layout=y(V,{optional:!0});tooltipSide=h(()=>this.resolvedDirection()==="vertical"?"right":"bottom");isTooltip(n){return this.collapsed()&&(this.resolvedDirection()==="vertical"||!n)}resolvedDirection=h(()=>{const n=this.direction();return n!=="auto"?n:this.layout?.stacked()?"horizontal":"vertical"});uid=y(w).next("fold-tabs");tabButtons=k("tabBtn");tabId(n){return`${this.uid}-tab-${n}`}panelId(n){return`${this.uid}-panel-${n}`}tabName(n,t){const e=this.isTooltip(t)?n.label:null;if(n.dotLabel===void 0)return e;const o=n.badge===void 0||n.badge===null?n.label:`${n.label} ${String(n.badge)}`;return`${e??o} — ${n.dotLabel}`}select(n){this.commit(n)}commit(n){this.activeKey.set(n)}onKeydown(n){const t=this.tabs().map(P=>P.key);if(t.length===0)return;const e=t.indexOf(this.activeKey());let o;switch(n.key){case"ArrowRight":case"ArrowDown":o=(e+1)%t.length;break;case"ArrowLeft":case"ArrowUp":o=(e-1+t.length)%t.length;break;case"Home":o=0;break;case"End":o=t.length-1;break;default:return}n.preventDefault();const a=t[o];a!==void 0&&(this.commit(a),this.tabButtons()[o]?.nativeElement.focus())}static ɵfac=function(t){return new(t||v)};static ɵcmp=T({type:v,selectors:[["fold-tabs"]],viewQuery:function(t,e){t&1&&$(e.tabButtons,q,5),t&2&&j()},hostVars:4,hostBindings:function(t,e){t&2&&p("is-sticky",e.sticky())("is-horizontal",e.resolvedDirection()==="horizontal")},inputs:{tabs:[1,"tabs"],activeKey:[1,"activeKey"],activeStyle:[1,"activeStyle"],direction:[1,"direction"],size:[1,"size"],justify:[1,"justify"],collapsed:[1,"collapsed"],background:[1,"background"],sticky:[1,"sticky"]},outputs:{activeKey:"activeKeyChange"},exportAs:["foldTabs"],decls:3,vars:17,consts:[["tabBtn",""],["role","tablist",1,"tab-bar",3,"keydown"],["type","button","role","tab",1,"tab-bar-item",3,"id","is-active","tabindex"],["type","button","role","tab",1,"tab-bar-item",3,"click","id","tabindex"],["size","sm",1,"tab-bar-icon",3,"name"],["aria-hidden","true",1,"tab-bar-icon","tab-bar-initial"],[1,"tab-bar-label",3,"foldTabTooltip","tooltipSide"],[1,"tab-bar-count"],[1,"tab-bar-badge",3,"content","variant"],["aria-hidden","true",1,"tab-bar-dot",3,"class"],["aria-hidden","true",1,"tab-bar-dot"]],template:function(t,e){t&1&&(d(0,"div",1),O("keydown",function(a){return e.onKeydown(a)}),K(1,X,9,13,"button",2,E),c()),t&2&&(p("style-underline",e.activeStyle()==="underline")("style-fill",e.activeStyle()==="fill")("style-folder",e.activeStyle()==="folder")("dir-vertical",e.resolvedDirection()==="vertical")("size-comfortable",e.size()==="comfortable")("justify-stretch",e.justify()==="stretch")("is-collapsed",e.collapsed())("bg-surface",e.background()==="surface"),M("aria-orientation",e.resolvedDirection()==="vertical"?"vertical":"horizontal"),l(),S(e.tabs()))},dependencies:[F,z,L],styles:[`@charset "UTF-8";








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
}`]})}export{v as FoldTabsComponent};
