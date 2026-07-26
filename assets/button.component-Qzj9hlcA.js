import{T as u,ab as m,x as t,K as s,y as f,ɵ as _,F as v,L as h,I as g,N as C,J as p,j as x,C as y,P,ac as M,D as O,g as d,q as c,m as b}from"./index-DmFeHmC3.js";import{FoldSpinnerComponent as k}from"./spinner.component-DkHlk8Gz.js";import"./tokens.catalog-DF_6rd51.js";const z=["*"];function B(e,r){if(e&1&&d(0,"fold-spinner",0),e&2){const o=c();b("size",o.iconSize())}}function w(e,r){if(e&1&&d(0,"fold-icon",1),e&2){const o=c();b("name",r)("size",o.iconSize())}}function T(e,r){if(e&1&&d(0,"fold-icon",1),e&2){const o=c();b("name",r)("size",o.iconSize())}}const F={sm:14,md:16,lg:18};class l{host=u(m);isButton=this.host.nativeElement.tagName.toLowerCase()==="button";emphasis=t("soft");intent=t("primary");size=t("md");shape=t("rounded");block=t(!1,{transform:s});icon=t();iconTrailing=t();iconSize=f(()=>F[this.size()]);type=t("button");disabled=t(!1,{transform:s});loading=t(!1,{transform:s});blocked=f(()=>this.disabled()||this.loading());onClick(r){this.blocked()&&(r.preventDefault(),r.stopImmediatePropagation())}static ɵfac=function(o){return new(o||l)};static ɵcmp=_({type:l,selectors:[["button","foldButton",""],["a","foldButton",""]],hostVars:13,hostBindings:function(o,n){o&1&&y("click",function(a){return n.onClick(a)}),o&2&&(P("disabled",n.isButton&&n.blocked()?!0:null)("type",n.isButton?n.type():null)("aria-disabled",!n.isButton&&n.blocked()?!0:null)("aria-busy",n.loading()?!0:null)("tabindex",!n.isButton&&n.blocked()?-1:null),M("fold-button "+n.emphasis()+" "+n.intent()+" "+n.size()+" "+n.shape()),O("block",n.block())("is-disabled",n.disabled())("is-loading",n.loading()))},inputs:{emphasis:[1,"emphasis"],intent:[1,"intent"],size:[1,"size"],shape:[1,"shape"],block:[1,"block"],icon:[1,"icon"],iconTrailing:[1,"iconTrailing"],type:[1,"type"],disabled:[1,"disabled"],loading:[1,"loading"]},ngContentSelectors:z,decls:4,vars:2,consts:[["aria-hidden","true",3,"size"],["aria-hidden","true",3,"name","size"]],template:function(o,n){if(o&1&&(h(),g(0,B,1,1,"fold-spinner",0)(1,w,1,2,"fold-icon",1),C(2),g(3,T,1,2,"fold-icon",1)),o&2){let i,a;p(n.loading()?0:(i=n.icon())?1:-1,i),x(3),p((a=n.iconTrailing())?3:-1,a)}},dependencies:[v,k],styles:[`[_nghost-%COMP%] {
  all: unset;
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4em;
  white-space: nowrap;
  font-family: inherit;
  font-weight: 600;
  transition: background var(--fold-motion-fast), border-color var(--fold-motion-fast), color var(--fold-motion-fast), transform var(--fold-motion-fast);
}

.block[_nghost-%COMP%] {
  display: flex;
  width: 100%;
}

[_nghost-%COMP%]:disabled, 
.is-disabled[_nghost-%COMP%] {
  opacity: 0.4;
  pointer-events: none;
  cursor: not-allowed;
}

.is-loading[_nghost-%COMP%] {
  opacity: 1;
  pointer-events: none;
  cursor: progress;
}

[_nghost-%COMP%]:active:not(:disabled):not(.is-disabled) {
  transform: scale(0.97);
}

[_nghost-%COMP%]:focus-visible {
  outline: 2px solid var(--fold-color-primary);
  outline-offset: 2px;
}

.sm[_nghost-%COMP%] {
  font-size: var(--fold-text-sm);
  padding: 0.3rem 0.7rem;
  border-radius: var(--fold-radius-xs);
}

.md[_nghost-%COMP%] {
  font-size: var(--fold-text-md);
  padding: 0.45rem 1rem;
  border-radius: var(--fold-radius-sm);
}

.lg[_nghost-%COMP%] {
  font-size: var(--fold-text-md);
  padding: 0.6rem 1.3rem;
  border-radius: var(--fold-radius-sm);
}

.pill[_nghost-%COMP%] {
  border-radius: var(--fold-radius-pill);
  padding-inline: 1.25em;
}

.primary[_nghost-%COMP%] {
  --b-base: var(--fold-color-primary);
  --b-strong: var(--fold-color-primary-strong);
  --b-on: var(--fold-color-on-primary);
  --b-text: var(--fold-color-primary-text);
  --b-text-strong: var(--fold-color-primary-text);
  --b-surface: var(--fold-color-primary-surface);
  --b-border: var(--fold-color-primary-border);
}

.warning[_nghost-%COMP%] {
  --b-base: var(--fold-color-warning);
  --b-strong: color-mix(
    in srgb,
    var(--fold-color-warning) 84%,
    var(--fold-color-bg-page)
  );
  --b-on: var(--fold-color-on-primary);
  --b-text: var(--fold-color-warning-text);
  --b-text-strong: var(--fold-color-warning-text);
  --b-surface: var(--fold-color-warning-surface);
  --b-border: var(--fold-color-warning-border);
}

.danger[_nghost-%COMP%] {
  --b-base: var(--fold-color-alert);
  --b-strong: color-mix(
    in srgb,
    var(--fold-color-alert) 84%,
    var(--fold-color-bg-page)
  );
  --b-on: var(--fold-color-on-primary);
  --b-text: var(--fold-color-alert-text);
  --b-text-strong: var(--fold-color-alert-text);
  --b-surface: var(--fold-color-alert-surface);
  --b-border: var(--fold-color-alert-border);
}

.neutral[_nghost-%COMP%] {
  --b-base: var(--fold-color-text-muted);
  --b-strong: var(--fold-color-surface-hover);
  --b-on: var(--fold-color-text);
  --b-text: var(--fold-color-text-secondary);
  --b-text-strong: var(--fold-color-text);
  --b-surface: var(--fold-color-surface-hover);
  --b-border: var(--fold-color-border);
}

.soft[_nghost-%COMP%] {
  color: var(--b-text);
  background: var(--b-surface);
  border: 1px solid var(--b-border);
}
.soft[_nghost-%COMP%]:hover:not(:disabled):not(.is-disabled) {
  background: color-mix(in srgb, var(--b-base) 22%, transparent);
  border-color: color-mix(in srgb, var(--b-base) 52%, transparent);
}

.solid[_nghost-%COMP%] {
  color: var(--b-on);
  background: var(--b-base);
  border: 1px solid transparent;
}
.solid[_nghost-%COMP%]:hover:not(:disabled):not(.is-disabled) {
  background: var(--b-strong);
}

.outline[_nghost-%COMP%] {
  color: var(--b-text);
  background: transparent;
  border: 1px solid var(--b-border);
}
.outline[_nghost-%COMP%]:hover:not(:disabled):not(.is-disabled) {
  color: var(--b-text-strong);
  background: var(--fold-color-surface-hover);
  border-color: var(--b-border);
}

@media (prefers-reduced-motion: reduce) {
  [_nghost-%COMP%] {
    transition: none;
  }
  [_nghost-%COMP%]:active:not(:disabled):not(.is-disabled) {
    transform: none;
  }
}
@media (forced-colors: active) {
  [_nghost-%COMP%] {
    border: 1px solid ButtonText;
  }
  .solid[_nghost-%COMP%] {
    border-color: ButtonText;
  }
  [_nghost-%COMP%]:focus-visible {
    outline-color: CanvasText;
  }
  [_nghost-%COMP%]:disabled, 
   .is-disabled[_nghost-%COMP%] {
    color: GrayText;
    border-color: GrayText;
  }
}`]})}export{l as FoldButtonComponent};
