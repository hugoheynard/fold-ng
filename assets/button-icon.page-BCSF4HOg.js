import{K as F}from"./kind-badge.component-CRaG0Xmz.js";import{t as a,u,T as M,B as P,ɵ as h,F as O,d as t,G as k,J as x,f as e,m as c,N as g,j as b,K as T,g as d,z as v,Z as w,s as I,c as S,e as i,h as C,n as y,l as q,q as z}from"./index-DgKL0_pU.js";import{F as B}from"./spinner.component-CRpow2Fj.js";import"./tokens.catalog-DF_6rd51.js";function G(l,r){if(l&1&&d(0,"fold-spinner",1),l&2){const o=v();c("size",o.iconSize())}}function j(l,r){if(l&1&&d(0,"fold-icon",2),l&2){const o=v();c("name",o.icon())("size",o.iconSize())}}class p{icon=a.required();shape=a("square");size=a("md");tone=a("ghost");disabled=a(!1,{transform:u});loading=a(!1,{transform:u});tooltip=a();type=a("button");clicked=M();iconSize=P(()=>{switch(this.size()){case"xs":return"xs";case"sm":return"sm";case"md":return"sm";case"lg":return"md"}});onClick(r){this.disabled()||this.loading()||this.clicked.emit(r)}static ɵfac=function(o){return new(o||p)};static ɵcmp=h({type:p,selectors:[["fold-button-icon"]],hostVars:4,hostBindings:function(o,n){o&2&&g("data-shape",n.shape())("data-size",n.size())("data-tone",n.tone())("data-loading",n.loading()?"":null)},inputs:{icon:[1,"icon"],shape:[1,"shape"],size:[1,"size"],tone:[1,"tone"],disabled:[1,"disabled"],loading:[1,"loading"],tooltip:[1,"tooltip"],type:[1,"type"]},outputs:{clicked:"clicked"},decls:3,vars:6,consts:[[3,"click","type","disabled"],["aria-hidden","true",3,"size"],[3,"name","size"]],template:function(o,n){o&1&&(t(0,"button",0),k("click",function(s){return n.onClick(s)}),x(1,G,1,1,"fold-spinner",1)(2,j,1,2,"fold-icon",2),e()),o&2&&(c("type",n.type())("disabled",n.disabled()||n.loading()),g("title",n.tooltip()||null)("aria-label",n.tooltip()||null)("aria-busy",n.loading()?"true":null),b(),T(n.loading()?1:2))},dependencies:[O,B],styles:[`[_nghost-%COMP%] {
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
}`]})}function K(l,r){if(l&1&&d(0,"fold-spinner",1),l&2){const o=v();c("size",o.iconSize())}}function L(l,r){if(l&1&&d(0,"fold-icon",2),l&2){const o=v();c("name",o.icon())("size",o.iconSize())}}class f{icon=a.required();shape=a("square");size=a("md");tone=a("ghost");active=w(!1);disabled=a(!1,{transform:u});loading=a(!1,{transform:u});tooltip=a();type=a("button");toggled=M();iconSize=P(()=>{switch(this.size()){case"xs":return"xs";case"sm":return"sm";case"md":return"sm";case"lg":return"md"}});onClick(r){this.disabled()||this.loading()||(this.active.update(o=>!o),this.toggled.emit(r))}static ɵfac=function(o){return new(o||f)};static ɵcmp=h({type:f,selectors:[["fold-toggle-icon"]],hostVars:5,hostBindings:function(o,n){o&2&&g("data-shape",n.shape())("data-size",n.size())("data-tone",n.tone())("data-active",n.active()?"":null)("data-loading",n.loading()?"":null)},inputs:{icon:[1,"icon"],shape:[1,"shape"],size:[1,"size"],tone:[1,"tone"],active:[1,"active"],disabled:[1,"disabled"],loading:[1,"loading"],tooltip:[1,"tooltip"],type:[1,"type"]},outputs:{active:"activeChange",toggled:"toggled"},decls:3,vars:7,consts:[[3,"click","type","disabled"],["aria-hidden","true",3,"size"],[3,"name","size"]],template:function(o,n){o&1&&(t(0,"button",0),k("click",function(s){return n.onClick(s)}),x(1,K,1,1,"fold-spinner",1)(2,L,1,2,"fold-icon",2),e()),o&2&&(c("type",n.type())("disabled",n.disabled()||n.loading()),g("title",n.tooltip()||null)("aria-label",n.tooltip()||null)("aria-pressed",n.active()?"true":"false")("aria-busy",n.loading()?"true":null),b(),T(n.loading()?1:2))},dependencies:[O,B],styles:[`[_nghost-%COMP%] {
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
}`]})}class _{biMasked=I(!1);static ɵfac=function(o){return new(o||_)};static ɵcmp=h({type:_,selectors:[["gal-button-icon-page"]],decls:60,vars:4,consts:[["title","button-icon"],["titleBadge","","kind","component"],["description",""],[1,"gal-stack"],[1,"gal-cell"],[1,"gal-tag"],[1,"gal-row",2,"align-items","center"],["icon","edit","tooltip","Ghost (default)"],["icon","check","tone","accent","tooltip","Accent"],["icon","bin","tone","critical","tooltip","Critical"],["icon","reload","size","xs","tooltip","xs · 22px"],["icon","reload","size","sm","tooltip","sm · 28px"],["icon","reload","size","md","tooltip","md · 32px"],["icon","reload","size","lg","tooltip","lg · 38px"],["icon","play","shape","round","tone","accent","size","lg","tooltip","Play"],["icon","reload","shape","round","size","md","tooltip","Restart"],["icon","bin","tone","critical","tooltip","Delete"],["icon","edit","tooltip","Disabled",3,"disabled"],["icon","eye","tooltip","Toggle mask",3,"activeChange","active"],["icon","repeat","shape","round","tone","accent","tooltip","Loop",3,"activeChange","active"]],template:function(o,n){o&1&&(t(0,"fold-page-layout",0),d(1,"gal-kind-badge",1),t(2,"p",2),i(3," Two icon-only siblings sharing one surface (shape · size · tone). "),t(4,"code"),i(5,"fold-button-icon"),e(),i(6," is "),t(7,"strong"),i(8,"momentary"),e(),i(9," — a one-shot action, never a pressed state. "),t(10,"code"),i(11,"fold-toggle-icon"),e(),i(12," is the "),t(13,"strong"),i(14,"toggle"),e(),i(15," — a binary on/off with "),t(16,"code"),i(17,"[(active)]"),e(),i(18," and "),t(19,"code"),i(20,"aria-pressed"),e(),i(21,". Pick by semantics, not looks. "),e(),t(22,"div",3)(23,"div",4)(24,"span",5),i(25,"tones (md square)"),e(),t(26,"div",6),d(27,"fold-button-icon",7)(28,"fold-button-icon",8)(29,"fold-button-icon",9),e()(),t(30,"div",4)(31,"span",5),i(32,"sizes (ghost square)"),e(),t(33,"div",6),d(34,"fold-button-icon",10)(35,"fold-button-icon",11)(36,"fold-button-icon",12)(37,"fold-button-icon",13),e()(),t(38,"div",4)(39,"span",5),i(40,"round · accent (transport)"),e(),t(41,"div",6),d(42,"fold-button-icon",14)(43,"fold-button-icon",15),e()(),t(44,"div",4)(45,"span",5),i(46,"momentary · disabled (fold-button-icon)"),e(),t(47,"div",6),d(48,"fold-button-icon",16)(49,"fold-button-icon",17),t(50,"span",5),i(51,"no pressed state — one-shot actions"),e()()(),t(52,"div",4)(53,"span",5),i(54,"toggle · [(active)] + aria-pressed (fold-toggle-icon)"),e(),t(55,"div",6)(56,"fold-toggle-icon",18),C("activeChange",function(s){return z(n.biMasked,s)||(n.biMasked=s),s}),e(),t(57,"span",5),i(58),e(),t(59,"fold-toggle-icon",19),C("activeChange",function(s){return z(n.biMasked,s)||(n.biMasked=s),s}),e()()()()()),o&2&&(b(49),c("disabled",!0),b(7),y("active",n.biMasked),b(2),q("masked: ",n.biMasked()),b(),y("active",n.biMasked))},dependencies:[F,S,p,f],encapsulation:2})}export{_ as default};
