import{x as t,K as l,az as u,y as p,ɵ as f,F as m,d as g,C as _,I as v,f as h,m as r,P as s,j as C,J as y,g as d,q as c}from"./index-Dx-EuELi.js";import{FoldSpinnerComponent as z}from"./spinner.component-BuH8iUOI.js";import"./tokens.catalog-DF_6rd51.js";function P(e,i){if(e&1&&d(0,"fold-spinner",1),e&2){const o=c();r("size",o.iconSize())}}function M(e,i){if(e&1&&d(0,"fold-icon",2),e&2){const o=c();r("name",o.icon())("size",o.iconSize())}}class a{icon=t.required();shape=t("square");size=t("md");tone=t("ghost");disabled=t(!1,{transform:l});loading=t(!1,{transform:l});tooltip=t();type=t("button");clicked=u();iconSize=p(()=>{switch(this.size()){case"xs":return"xs";case"sm":return"sm";case"md":return"sm";case"lg":return"md"}});onClick(i){this.disabled()||this.loading()||this.clicked.emit(i)}static ɵfac=function(o){return new(o||a)};static ɵcmp=f({type:a,selectors:[["fold-button-icon"]],hostVars:4,hostBindings:function(o,n){o&2&&s("data-shape",n.shape())("data-size",n.size())("data-tone",n.tone())("data-loading",n.loading()?"":null)},inputs:{icon:[1,"icon"],shape:[1,"shape"],size:[1,"size"],tone:[1,"tone"],disabled:[1,"disabled"],loading:[1,"loading"],tooltip:[1,"tooltip"],type:[1,"type"]},outputs:{clicked:"clicked"},decls:3,vars:6,consts:[[3,"click","type","disabled"],["aria-hidden","true",3,"size"],[3,"name","size"]],template:function(o,n){o&1&&(g(0,"button",0),_("click",function(b){return n.onClick(b)}),v(1,P,1,1,"fold-spinner",1)(2,M,1,2,"fold-icon",2),h()),o&2&&(r("type",n.type())("disabled",n.disabled()||n.loading()),s("title",n.tooltip()||null)("aria-label",n.tooltip()||null)("aria-busy",n.loading()?"true":null),C(),y(n.loading()?1:2))},dependencies:[m,z],styles:[`[_nghost-%COMP%] {
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
}`]})}export{a as FoldButtonIconComponent};
