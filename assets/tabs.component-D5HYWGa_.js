import{u as i,ag as M,a0 as g,X as _,A as v,ah as w,aL as k,ɵ as T,F,a as z,d as c,B as y,i as K,f as d,L as p,D as C,j as l,o as S,a8 as j,a9 as A,E as B,w as m,e as h,q as s,m as b,x as u,k as O,g as x,N as D,O as $}from"./index-B3oY-3F-.js";import{F as I}from"./tab-tooltip.directive-DGJJUDtr.js";import{F as L}from"./nav-layout.context-D-7oedhE.js";import"./auto-update-_srfpL1Q.js";const V=["tabBtn"],q=(a,t)=>t.key;function E(a,t){a&1&&x(0,"fold-icon",4),a&2&&b("name",t)}function Q(a,t){if(a&1&&(c(0,"span",5),h(1),d()),a&2){const e=s().$implicit;l(),O(e.label.charAt(0))}}function U(a,t){if(a&1&&x(0,"fold-badge",7),a&2){const e=s().$implicit,n=s();b("content",e.badge+"")("variant",n.activeKey()===e.key?"accent":"neutral")}}function H(a,t){if(a&1){const e=B();c(0,"button",3,0),y("click",function(){const o=D(e).$implicit,r=s();return $(r.select(o.key))}),m(2,E,1,1,"fold-icon",4)(3,Q,2,1,"span",5),c(4,"span",6),h(5),d(),m(6,U,1,2,"fold-badge",7),d()}if(a&2){let e;const n=t.$implicit,o=s();p("is-active",o.activeKey()===n.key),b("id",o.tabId(n.key))("tabindex",o.activeKey()===n.key?0:-1),C("aria-selected",o.activeKey()===n.key)("aria-controls",o.panelId(n.key))("aria-label",o.isTooltip(o.activeKey()===n.key)?n.label:null),l(2),u((e=n.icon)?2:o.collapsed()?3:-1,e),l(2),b("foldTabTooltip",o.isTooltip(o.activeKey()===n.key))("tooltipSide",o.tooltipSide()),l(),O(n.label),l(),u(n.badge!==void 0&&n.badge!==null?6:-1)}}class f{tabs=i.required();activeKey=M.required();activeStyle=i("underline");direction=i("auto");size=i("compact");justify=i("start");collapsed=i(!1,{transform:g});background=i("surface");sticky=i(!1,{transform:g});layout=_(L,{optional:!0});tooltipSide=v(()=>this.resolvedDirection()==="vertical"?"right":"bottom");isTooltip(t){return this.collapsed()&&(this.resolvedDirection()==="vertical"||!t)}resolvedDirection=v(()=>{const t=this.direction();return t!=="auto"?t:this.layout?.stacked()?"horizontal":"vertical"});uid=_(w).next("fold-tabs");tabButtons=k("tabBtn");tabId(t){return`${this.uid}-tab-${t}`}panelId(t){return`${this.uid}-panel-${t}`}select(t){this.commit(t)}commit(t){this.activeKey.set(t)}onKeydown(t){const e=this.tabs().map(P=>P.key);if(e.length===0)return;const n=e.indexOf(this.activeKey());let o;switch(t.key){case"ArrowRight":case"ArrowDown":o=(n+1)%e.length;break;case"ArrowLeft":case"ArrowUp":o=(n-1+e.length)%e.length;break;case"Home":o=0;break;case"End":o=e.length-1;break;default:return}t.preventDefault();const r=e[o];r!==void 0&&(this.commit(r),this.tabButtons()[o]?.nativeElement.focus())}static ɵfac=function(e){return new(e||f)};static ɵcmp=T({type:f,selectors:[["fold-tabs"]],viewQuery:function(e,n){e&1&&j(n.tabButtons,V,5),e&2&&A()},hostVars:2,hostBindings:function(e,n){e&2&&p("is-sticky",n.sticky())},inputs:{tabs:[1,"tabs"],activeKey:[1,"activeKey"],activeStyle:[1,"activeStyle"],direction:[1,"direction"],size:[1,"size"],justify:[1,"justify"],collapsed:[1,"collapsed"],background:[1,"background"],sticky:[1,"sticky"]},outputs:{activeKey:"activeKeyChange"},exportAs:["foldTabs"],decls:3,vars:15,consts:[["tabBtn",""],["role","tablist",1,"tab-bar",3,"keydown"],["type","button","role","tab",1,"tab-bar-item",3,"id","is-active","tabindex"],["type","button","role","tab",1,"tab-bar-item",3,"click","id","tabindex"],["size","sm",1,"tab-bar-icon",3,"name"],["aria-hidden","true",1,"tab-bar-icon","tab-bar-initial"],[1,"tab-bar-label",3,"foldTabTooltip","tooltipSide"],[1,"tab-bar-badge",3,"content","variant"]],template:function(e,n){e&1&&(c(0,"div",1),y("keydown",function(r){return n.onKeydown(r)}),K(1,H,7,12,"button",2,q),d()),e&2&&(p("style-underline",n.activeStyle()==="underline")("style-fill",n.activeStyle()==="fill")("dir-vertical",n.resolvedDirection()==="vertical")("size-comfortable",n.size()==="comfortable")("justify-stretch",n.justify()==="stretch")("is-collapsed",n.collapsed())("bg-surface",n.background()==="surface"),C("aria-orientation",n.resolvedDirection()==="vertical"?"vertical":"horizontal"),l(),S(n.tabs()))},dependencies:[F,z,I],styles:[`@charset "UTF-8";








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
}`]})}export{f as FoldTabsComponent};
