import{x as t,a2 as g,K as l,az as u,y as p,ɵ as f,F as v,d as m,C as _,I as h,f as C,m as r,P as s,j as y,J as z,g as d,q as c}from"./index-xwcY2TyU.js";import{FoldSpinnerComponent as P}from"./spinner.component-xlosCR_F.js";import"./tokens.catalog-DF_6rd51.js";function M(a,e){if(a&1&&d(0,"fold-spinner",1),a&2){const o=c();r("size",o.iconSize())}}function O(a,e){if(a&1&&d(0,"fold-icon",2),a&2){const o=c();r("name",o.icon())("size",o.iconSize())}}class i{icon=t.required();shape=t("square");size=t("md");tone=t("ghost");active=g(!1);disabled=t(!1,{transform:l});loading=t(!1,{transform:l});tooltip=t();type=t("button");toggled=u();iconSize=p(()=>{switch(this.size()){case"xs":return"xs";case"sm":return"sm";case"md":return"sm";case"lg":return"md"}});onClick(e){this.disabled()||this.loading()||(this.active.update(o=>!o),this.toggled.emit(e))}static ɵfac=function(o){return new(o||i)};static ɵcmp=f({type:i,selectors:[["fold-toggle-icon"]],hostVars:5,hostBindings:function(o,n){o&2&&s("data-shape",n.shape())("data-size",n.size())("data-tone",n.tone())("data-active",n.active()?"":null)("data-loading",n.loading()?"":null)},inputs:{icon:[1,"icon"],shape:[1,"shape"],size:[1,"size"],tone:[1,"tone"],active:[1,"active"],disabled:[1,"disabled"],loading:[1,"loading"],tooltip:[1,"tooltip"],type:[1,"type"]},outputs:{active:"activeChange",toggled:"toggled"},decls:3,vars:7,consts:[[3,"click","type","disabled"],["aria-hidden","true",3,"size"],[3,"name","size"]],template:function(o,n){o&1&&(m(0,"button",0),_("click",function(b){return n.onClick(b)}),h(1,M,1,1,"fold-spinner",1)(2,O,1,2,"fold-icon",2),C()),o&2&&(r("type",n.type())("disabled",n.disabled()||n.loading()),s("title",n.tooltip()||null)("aria-label",n.tooltip()||null)("aria-pressed",n.active()?"true":"false")("aria-busy",n.loading()?"true":null),y(),z(n.loading()?1:2))},dependencies:[v,P],styles:[`[_nghost-%COMP%] {
  display: inline-flex;
}
[data-size=xs][_nghost-%COMP%] {
  --bi-size: 22px;
  --bi-radius: var(--fold-radius-xs);
}
[data-size=sm][_nghost-%COMP%] {
  --bi-size: 28px;
  --bi-radius: var(--fold-radius-sm);
}
[data-size=md][_nghost-%COMP%] {
  --bi-size: 32px;
  --bi-radius: var(--fold-radius-md);
}
[data-size=lg][_nghost-%COMP%] {
  --bi-size: 38px;
  --bi-radius: var(--fold-radius-md);
}
[data-shape=round][_nghost-%COMP%] {
  --bi-radius: 50%;
}
[data-tone=ghost][_nghost-%COMP%] {
  --bi-color: var(--fold-color-text-muted);
  --bi-color-hover: var(--fold-color-text);
  --bi-bg: transparent;
  --bi-bg-hover: var(--fold-color-primary-surface);
  --bi-bg-active: var(--fold-color-primary-surface);
  --bi-color-active: var(--fold-color-primary);
}
[data-tone=accent][_nghost-%COMP%] {
  --bi-color: var(--fold-color-on-primary);
  --bi-color-hover: var(--fold-color-on-primary);
  --bi-bg: var(--fold-color-primary);
  --bi-bg-hover: var(--fold-color-primary-strong);
  --bi-bg-active: var(--fold-color-primary-strong);
  --bi-color-active: var(--fold-color-on-primary);
}
[data-tone=critical][_nghost-%COMP%] {
  --bi-color: var(--fold-color-alert);
  --bi-color-hover: var(--fold-color-alert);
  --bi-bg: transparent;
  --bi-bg-hover: color-mix(in srgb, var(--fold-color-alert) 12%, transparent);
  --bi-bg-active: color-mix(
    in srgb,
    var(--fold-color-alert) 18%,
    transparent
  );
  --bi-color-active: var(--fold-color-alert);
}

button[_ngcontent-%COMP%] {
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--bi-size);
  height: var(--bi-size);
  border-radius: var(--bi-radius);
  background: var(--bi-bg);
  color: var(--bi-color);
  cursor: pointer;
  flex-shrink: 0;
  transition: background var(--fold-motion-fast), color var(--fold-motion-fast), transform var(--fold-motion-fast);
}
button[_ngcontent-%COMP%]:hover:not(:disabled) {
  background: var(--bi-bg-hover);
  color: var(--bi-color-hover);
}
button[_ngcontent-%COMP%]:active:not(:disabled) {
  transform: scale(0.94);
}
button[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--fold-color-primary);
  outline-offset: 1px;
}
button[_ngcontent-%COMP%]:disabled {
  cursor: not-allowed;
  opacity: 0.4;
}

[data-loading][_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled {
  opacity: 1;
  cursor: progress;
}

@media (forced-colors: active) {
  button[_ngcontent-%COMP%] {
    border: 1px solid ButtonText;
  }
  button[_ngcontent-%COMP%]:focus-visible {
    outline-color: CanvasText;
  }
  button[_ngcontent-%COMP%]:disabled {
    color: GrayText;
    border-color: GrayText;
  }
}
@media (prefers-reduced-motion: reduce) {
  button[_ngcontent-%COMP%] {
    transition: none;
  }
  button[_ngcontent-%COMP%]:active:not(:disabled) {
    transform: none;
  }
}
[data-active][_nghost-%COMP%]   button[_ngcontent-%COMP%] {
  background: var(--bi-bg-active);
  color: var(--bi-color-active);
}`]})}export{i as FoldToggleIconComponent};
