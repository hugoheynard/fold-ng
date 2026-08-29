import{P as g,S as m,ɵ as f,R as b,a as _,F as u,c as v,d as n,g as r,f as e,e as t,w as h,j as o,m as s,k as p,x,i as C,q as P,o as w,l as y}from"./index-B61aGEid.js";import{FoldHeroSectionComponent as k}from"./hero-section.component-C_awtr8c.js";const M=(l,i)=>i.id;function O(l,i){if(l&1&&(n(0,"li")(1,"a",10),r(2,"fold-icon",11),n(3,"span",12),t(4),e(),n(5,"span",13),t(6),e(),r(7,"fold-badge",14),e()()),l&2){const a=i.$implicit;o(),s("routerLink","/"+a.id),o(),s("name",a.icon??"grid"),o(2),p(a.label),o(2),y("ships in ",a.since)}}function L(l,i){if(l&1&&(n(0,"nav",8)(1,"ul"),C(2,O,8,4,"li",null,M),e()()),l&2){const a=P();o(2),w(a.items)}}function I(l,i){l&1&&(n(0,"p",9),t(1," Nothing in dev — everything on this branch is published. "),e())}class c{published=g;items=m;next=m[0]?.since??"the next release";static ɵfac=function(a){return new(a||c)};static ɵcmp=f({type:c,selectors:[["gal-lab-page"]],decls:21,vars:5,consts:[[1,"lab"],[3,"wash"],["heroBackdrop","","aria-hidden","true",1,"lab-glow"],[1,"lab-mark"],["name","wrench","title","In dev",3,"size"],["variant","warning","radius","pill",1,"lab-eyebrow",3,"content"],[1,"lab-title"],[1,"lab-lede"],["aria-label","Components in development",1,"lab-menu"],[1,"lab-empty"],[1,"lab-link",3,"routerLink"],["size","sm",3,"name"],[1,"lab-label"],[1,"lab-since"],["content","dev","variant","warning"]],template:function(a,d){a&1&&(n(0,"fold-page-layout",0)(1,"fold-hero-section",1),r(2,"span",2),n(3,"div",3),r(4,"fold-icon",4),e(),r(5,"fold-badge",5),n(6,"h1",6),t(7,"In dev"),e(),n(8,"p",7),t(9," Components built on the "),n(10,"strong"),t(11,"dev"),e(),t(12," branch that aren't on npm yet. Installing "),n(13,"code"),t(14,"fold-ng"),e(),t(15," today gives you "),n(16,"code"),t(17),e(),t(18," — the ones below arrive with the next release and may still change until it's cut. "),e()(),h(19,L,4,0,"nav",8)(20,I,2,0,"p",9),e()),a&2&&(o(),s("wash",!1),o(3),s("size",40),o(),s("content","ships in "+d.next),o(12),p(d.published),o(2),x(d.items.length>0?19:20))},dependencies:[b,_,k,u,v],styles:[`.lab-glow[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  background: radial-gradient(58% 130% at 50% -12%, color-mix(in srgb, #0ea5e9 45%, transparent), transparent 68%);
  pointer-events: none;
}

.lab-mark[_ngcontent-%COMP%] {
  display: inline-flex;
  color: #0ea5e9;
}

.lab-eyebrow[_ngcontent-%COMP%] {
  margin-top: var(--fold-space-sm);
}

.lab-title[_ngcontent-%COMP%] {
  margin: var(--fold-space-sm) 0 0;
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: var(--fold-weight-extrabold);
  letter-spacing: var(--fold-tracking-tighter);
}

.lab-lede[_ngcontent-%COMP%] {
  margin: var(--fold-space-sm) auto 0;
  max-width: 46ch;
  color: var(--fold-color-text-muted);
  line-height: var(--fold-leading-relaxed);
}

.lab-menu[_ngcontent-%COMP%] {
  margin-top: var(--fold-space-xl);
}
.lab-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--fold-space-xs);
  max-width: 32rem;
}

.lab-link[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--fold-space-sm);
  padding: var(--fold-space-sm) var(--fold-space-md);
  border: 1px solid var(--fold-color-border-subtle);
  border-radius: var(--fold-radius-md);
  background: var(--fold-color-surface-card);
  color: var(--fold-color-text);
  text-decoration: none;
  transition: background 0.12s ease, border-color 0.12s ease;
}
.lab-link[_ngcontent-%COMP%]:hover {
  background: var(--fold-color-surface-hover);
  border-color: var(--fold-color-border);
}
.lab-link[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--fold-color-primary);
  outline-offset: 2px;
}

.lab-label[_ngcontent-%COMP%] {
  font-weight: var(--fold-weight-semibold);
}

.lab-since[_ngcontent-%COMP%] {
  margin-left: auto;
  font-size: var(--fold-text-sm);
  color: var(--fold-color-text-muted);
  font-variant-numeric: tabular-nums;
}

.lab-empty[_ngcontent-%COMP%] {
  color: var(--fold-color-text-muted);
}

@media (prefers-reduced-motion: reduce) {
  .lab-link[_ngcontent-%COMP%] {
    transition: none;
  }
}`]})}export{c as default};
