import{K as _}from"./kind-badge.component-CEFEK19j.js";import{t as c,u as b,ɵ as p,v as h,w as y,x as v,c as C,d as e,g as k,i as g,y as f,e as s,f as o,j as l,o as u,z as m,m as P,A as x}from"./index-C0RnAu35.js";const B=["*"];class d{surface=c("card");accent=c("none");padding=c("lg");accentBar=c(!1,{transform:b});static ɵfac=function(n){return new(n||d)};static ɵcmp=p({type:d,selectors:[["fold-hero-card"]],hostVars:14,hostBindings:function(n,a){n&2&&v("s-sunken",a.surface()==="sunken")("s-primary",a.surface()==="primary")("a-subtle",a.accent()==="subtle")("a-gradient",a.accent()==="gradient")("has-bar",a.accentBar())("p-sm",a.padding()==="sm")("p-md",a.padding()==="md")},inputs:{surface:[1,"surface"],accent:[1,"accent"],padding:[1,"padding"],accentBar:[1,"accentBar"]},ngContentSelectors:B,decls:1,vars:0,template:function(n,a){n&1&&(h(),y(0))},styles:[`@charset "UTF-8";



[_nghost-%COMP%] {
  display: block;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  background: var(--fold-color-surface-card);
  border: 1px solid var(--fold-color-border);
  border-radius: var(--fold-radius-lg);
  padding: 20px;
}

.p-sm[_nghost-%COMP%] {
  padding: 10px;
}

.p-md[_nghost-%COMP%] {
  padding: 16px;
}


.s-sunken[_nghost-%COMP%] {
  background: var(--fold-color-surface-sunken);
  border-color: var(--fold-color-border-subtle);
}

.s-primary[_nghost-%COMP%] {
  background: var(--fold-color-primary);
  border-color: var(--fold-color-primary);
  color: var(--fold-color-on-primary);
}


.a-subtle[_nghost-%COMP%]::after, 
.a-gradient[_nghost-%COMP%]::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
}


.a-subtle[_nghost-%COMP%]::after {
  background: radial-gradient(120% 140% at 100% 0%, color-mix(in srgb, var(--fold-color-primary) 10%, transparent), transparent 45%), linear-gradient(160deg, transparent 30%, color-mix(in srgb, var(--fold-color-surface-sunken) 50%, transparent));
}


.a-gradient[_nghost-%COMP%] {
  border-color: var(--fold-color-primary-border);
}

.a-gradient[_nghost-%COMP%]::after {
  background: radial-gradient(260px circle at 90% -10%, color-mix(in srgb, var(--fold-color-primary) 22%, transparent), transparent 68%), linear-gradient(180deg, color-mix(in srgb, var(--fold-color-primary) 8%, transparent), transparent 60%);
}


.has-bar[_nghost-%COMP%]::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(var(--fold-color-primary), color-mix(in srgb, var(--fold-color-primary) 30%, transparent));
}`]})}function M(t,r){if(t&1&&(e(0,"fold-hero-card",7)(1,"strong"),s(2),o(),e(3,"p",8),s(4,"Base surface with an accent overlay."),o()()),t&2){const n=r.$implicit,a=m().$implicit;P("surface",a)("accent",n),l(2),x("",a," · ",n)}}function O(t,r){if(t&1&&(e(0,"div",2),g(1,M,5,4,"fold-hero-card",7,f),o()),t&2){const n=m();l(),u(n.heroAccents)}}class i{heroSurfaces=["card","sunken"];heroAccents=["none","subtle","gradient"];static ɵfac=function(n){return new(n||i)};static ɵcmp=p({type:i,selectors:[["gal-hero-card-page"]],decls:14,vars:0,consts:[["title","hero-card"],["titleBadge","","kind","component"],[1,"gal-row","gal-row--wide"],[1,"gal-cell"],[1,"gal-tag"],["surface","card","accent","subtle","accentBar","","padding","md"],["surface","primary","padding","md"],["padding","md",3,"surface","accent"],[1,"gal-body"]],template:function(n,a){n&1&&(e(0,"fold-page-layout",0),k(1,"gal-kind-badge",1),g(2,O,3,0,"div",2,f),e(4,"div",3)(5,"span",4),s(6,"accentBar + primary surface"),o(),e(7,"div",2)(8,"fold-hero-card",5)(9,"strong"),s(10,"accentBar"),o()(),e(11,"fold-hero-card",6)(12,"strong"),s(13,"primary fill"),o()()()()()),n&2&&(l(2),u(a.heroSurfaces))},dependencies:[_,C,d],encapsulation:2})}export{i as default};
