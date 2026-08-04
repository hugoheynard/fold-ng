import{u as a,a0 as t,ɵ as s,a1 as d,a2 as i,D as c,L as l}from"./index-F5cuq_px.js";const p=["*"];class o{surface=a("card");accent=a("none");padding=a("lg");accentBar=a(!1,{transform:t});static ɵfac=function(r){return new(r||o)};static ɵcmp=s({type:o,selectors:[["fold-hero-card"]],hostVars:15,hostBindings:function(r,n){r&2&&(c("data-surface",n.surface()==="primary"?"accent":null),l("s-sunken",n.surface()==="sunken")("s-primary",n.surface()==="primary")("a-subtle",n.accent()==="subtle")("a-gradient",n.accent()==="gradient")("has-bar",n.accentBar())("p-sm",n.padding()==="sm")("p-md",n.padding()==="md"))},inputs:{surface:[1,"surface"],accent:[1,"accent"],padding:[1,"padding"],accentBar:[1,"accentBar"]},ngContentSelectors:p,decls:1,vars:0,template:function(r,n){r&1&&(d(),i(0))},styles:[`@charset "UTF-8";



[_nghost-%COMP%] {
  display: block;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  background: var(--fold-color-surface-card);
  border: 1px solid var(--fold-color-border);
  border-radius: var(--fold-radius-lg);
  padding: var(--fold-space-xl);
}

.p-sm[_nghost-%COMP%] {
  padding: var(--fold-space-sm);
}

.p-md[_nghost-%COMP%] {
  padding: var(--fold-space-lg);
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
}`]})}export{o as FoldHeroCardComponent};
