import{x as r,K as x,az as y,T as _,y as h,a5 as w,aF as k,ɵ as F,F as T,a as z,d as s,C as m,i as K,f as d,D as v,P as C,j as l,o as A,at as $,au as B,B as I,I as p,e as u,q as c,m as g,J as f,k as O,g as P,E as S,H as D}from"./index-DGmzNxeL.js";import{F as j}from"./nav-layout.context-C-gMn3Jt.js";const q=["tabBtn"],E=(o,e)=>e.key;function V(o,e){o&1&&P(0,"fold-icon",4),o&2&&g("name",e)}function L(o,e){if(o&1&&(s(0,"span",5),u(1),d()),o&2){const t=c().$implicit;l(),O(t.label.charAt(0))}}function Q(o,e){if(o&1&&P(0,"fold-badge",7),o&2){const t=c().$implicit,n=c();g("content",t.badge+"")("variant",n.activeKey()===t.key?"accent":"neutral")}}function U(o,e){if(o&1){const t=I();s(0,"button",3,0),m("click",function(){const a=S(t).$implicit,i=c();return D(i.select(a.key))}),p(2,V,1,1,"fold-icon",4)(3,L,2,1,"span",5),s(4,"span",6),u(5),d(),p(6,Q,1,2,"fold-badge",7),d()}if(o&2){let t;const n=e.$implicit,a=c();v("is-active",a.activeKey()===n.key),g("id",a.tabId(n.key))("tabindex",a.activeKey()===n.key?0:-1),C("aria-selected",a.activeKey()===n.key)("aria-controls",a.panelId(n.key)),l(2),f((t=n.icon)?2:a.collapsed()?3:-1,t),l(3),O(n.label),l(),f(n.badge!==void 0&&n.badge!==null?6:-1)}}class b{tabs=r.required();activeKey=r.required();activeStyle=r("underline");direction=r("auto");size=r("compact");collapsed=r(!1,{transform:x});background=r("surface");tabChange=y();layout=_(j,{optional:!0});resolvedDirection=h(()=>{const e=this.direction();return e!=="auto"?e:this.layout?.stacked()?"horizontal":"vertical"});uid=_(w).next("fold-tabs");tabButtons=k("tabBtn");tabId(e){return`${this.uid}-tab-${e}`}panelId(e){return`${this.uid}-panel-${e}`}select(e){this.tabChange.emit(e)}onKeydown(e){const t=this.tabs().map(M=>M.key);if(t.length===0)return;const n=t.indexOf(this.activeKey());let a;switch(e.key){case"ArrowRight":case"ArrowDown":a=(n+1)%t.length;break;case"ArrowLeft":case"ArrowUp":a=(n-1+t.length)%t.length;break;case"Home":a=0;break;case"End":a=t.length-1;break;default:return}e.preventDefault();const i=t[a];i!==void 0&&(this.tabChange.emit(i),this.tabButtons()[a]?.nativeElement.focus())}static ɵfac=function(t){return new(t||b)};static ɵcmp=F({type:b,selectors:[["fold-tabs"]],viewQuery:function(t,n){t&1&&$(n.tabButtons,q,5),t&2&&B()},inputs:{tabs:[1,"tabs"],activeKey:[1,"activeKey"],activeStyle:[1,"activeStyle"],direction:[1,"direction"],size:[1,"size"],collapsed:[1,"collapsed"],background:[1,"background"]},outputs:{tabChange:"tabChange"},exportAs:["foldTabs"],decls:3,vars:13,consts:[["tabBtn",""],["role","tablist",1,"tab-bar",3,"keydown"],["type","button","role","tab",1,"tab-bar-item",3,"id","is-active","tabindex"],["type","button","role","tab",1,"tab-bar-item",3,"click","id","tabindex"],["size","sm",1,"tab-bar-icon",3,"name"],["aria-hidden","true",1,"tab-bar-icon","tab-bar-initial"],[1,"tab-bar-label"],[1,"tab-bar-badge",3,"content","variant"]],template:function(t,n){t&1&&(s(0,"div",1),m("keydown",function(i){return n.onKeydown(i)}),K(1,U,7,9,"button",2,E),d()),t&2&&(v("style-underline",n.activeStyle()==="underline")("style-fill",n.activeStyle()==="fill")("dir-vertical",n.resolvedDirection()==="vertical")("size-comfortable",n.size()==="comfortable")("is-collapsed",n.collapsed())("bg-surface",n.background()==="surface"),C("aria-orientation",n.resolvedDirection()==="vertical"?"vertical":"horizontal"),l(),A(n.tabs()))},dependencies:[T,z],styles:[`@charset "UTF-8";








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
}`]})}export{b as FoldTabsComponent};
