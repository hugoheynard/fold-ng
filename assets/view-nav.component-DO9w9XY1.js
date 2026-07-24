import{t as a,W as v,ɵ as u,F as C,a as x,d as l,i as M,f as d,x as g,j as i,o as P,E as O,G as y,L as b,e as h,z as c,S as w,M as _,k,g as p,m as f,H as z,I as F}from"./index-UFHUHfKt.js";const V=(e,o)=>o.key;function S(e,o){e&1&&p(0,"fold-icon",3),e&2&&f("name",o)}function T(e,o){if(e&1&&p(0,"fold-badge",5),e&2){const t=c().$implicit,n=c();f("content",t.badge+"")("variant",n.activeKey()===t.key?"accent":"neutral")}}function K(e,o){if(e&1){const t=O();l(0,"button",2),y("click",function(){const r=z(t).$implicit,m=c();return F(m.tabChange.emit(r.key))}),b(1,S,1,1,"fold-icon",3),l(2,"span",4),h(3),d(),b(4,T,1,2,"fold-badge",5),d()}if(e&2){let t;const n=o.$implicit,r=c();g("is-active",r.activeKey()===n.key),w("aria-current",r.activeKey()===n.key?"page":null),i(),_((t=n.icon)?1:-1,t),i(2),k(n.label),i(),_(n.badge!==void 0&&n.badge!==null?4:-1)}}class s{tabs=a.required();activeKey=a.required();activeStyle=a("underline");direction=a("horizontal");size=a("compact");background=a("surface");tabChange=v();static ɵfac=function(t){return new(t||s)};static ɵcmp=u({type:s,selectors:[["fold-view-nav"]],inputs:{tabs:[1,"tabs"],activeKey:[1,"activeKey"],activeStyle:[1,"activeStyle"],direction:[1,"direction"],size:[1,"size"],background:[1,"background"]},outputs:{tabChange:"tabChange"},decls:3,vars:12,consts:[[1,"tab-bar"],["type","button",1,"tab-bar-item",3,"is-active"],["type","button",1,"tab-bar-item",3,"click"],["size","sm",1,"tab-bar-icon",3,"name"],[1,"tab-bar-label"],[1,"tab-bar-badge",3,"content","variant"]],template:function(t,n){t&1&&(l(0,"nav",0),M(1,K,5,6,"button",1,V),d()),t&2&&(g("style-underline",n.activeStyle()==="underline")("style-fill",n.activeStyle()==="fill")("dir-vertical",n.direction()==="vertical")("size-comfortable",n.size()==="comfortable")("size-reduce",n.size()==="reduce")("bg-surface",n.background()==="surface"),i(),P(n.tabs()))},dependencies:[C,x],styles:[`@charset "UTF-8";








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
  font-size: 10px;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
  transition: color 0.1s ease, background 0.1s ease, border-color 0.1s ease;
  white-space: nowrap;
}

.tab-bar-item[_ngcontent-%COMP%]:hover {
  color: var(--fold-color-text-secondary);
}


.size-comfortable[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%] {
  flex: 0 1 auto;
  gap: 10px;
  padding: 11px 16px;
  font-size: var(--fold-text-sm);
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




.size-reduce[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%] {
  flex: 0 0 auto;
  gap: 0;
}




.size-reduce[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%]:not(.is-active)   .tab-bar-icon[_ngcontent-%COMP%]    ~ .tab-bar-label[_ngcontent-%COMP%], 
.size-reduce[_ngcontent-%COMP%]   .tab-bar-item[_ngcontent-%COMP%]:not(.is-active)   .tab-bar-badge[_ngcontent-%COMP%] {
  display: none;
}

.size-reduce[_ngcontent-%COMP%]   .tab-bar-item.is-active[_ngcontent-%COMP%] {
  flex: 1 1 auto;
  min-width: 0;
  gap: 7px;
}

.size-reduce[_ngcontent-%COMP%]   .tab-bar-item.is-active[_ngcontent-%COMP%]   .tab-bar-label[_ngcontent-%COMP%] {
  overflow: hidden;
  text-overflow: ellipsis;
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



.tab-bar-badge[_ngcontent-%COMP%] {
  flex-shrink: 0;
  font-variant-numeric: tabular-nums;
}



.tab-bar-item[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--fold-color-primary);
  outline-offset: -2px;
  border-radius: var(--fold-radius-sm);
}`]})}export{s as F};
