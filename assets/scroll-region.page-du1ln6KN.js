import{u as y,A as a,X as c,Y as x,Z as R,$ as k,V as S,W as C,s as F,ɵ as T,c as P,d as r,g as D,e as o,f as l,i as g,T as p,j as i,m as h,o as v,L as m,E as B,B as I,q as u,l as _,N as $,O as z}from"./index-CrYE53GN.js";import{K as A}from"./kind-badge.component-R8m_51Uu.js";import{D as E}from"./playground.component-BC_kh_RB.js";import"./button.component-CcnJKi6o.js";import"./element-title.component-Cd9_q0XS.js";import"./page-section.component-eckDWTn4.js";import"./slider.component-BKbc_7rL.js";import"./input-value-DCGlOvqF.js";class d{foldScrollRegion=y("block",{transform:n=>n===""?"block":n});scrollbarColor="var(--fold-scrollbar-thumb, color-mix(in srgb, currentColor 24%, transparent)) var(--fold-scrollbar-track, transparent)";overflowY=a(()=>this.foldScrollRegion()==="inline"?null:"auto");overflowX=a(()=>this.foldScrollRegion()==="block"?null:"auto");minHeight=a(()=>this.foldScrollRegion()==="inline"?null:"0");minWidth=a(()=>this.foldScrollRegion()==="block"?null:"0");constructor(){const n=c(x).nativeElement,e=c(R,{optional:!0});e?.register(n),c(k).onDestroy(()=>e?.unregister(n))}static ɵfac=function(e){return new(e||d)};static ɵdir=S({type:d,selectors:[["","foldScrollRegion",""]],hostAttrs:[1,"fold-scroll-region"],hostVars:16,hostBindings:function(e,t){e&2&&C("overflow-y",t.overflowY())("overflow-x",t.overflowX())("min-height",t.minHeight())("min-width",t.minWidth())("overscroll-behavior","contain")("overflow-anchor","auto")("scrollbar-width","thin")("scrollbar-color",t.scrollbarColor)},inputs:{foldScrollRegion:[1,"foldScrollRegion"]}})}function V(s,n){if(s&1){const e=B();r(0,"button",13),I("click",function(){const b=$(e).$implicit,w=u();return z(w.axis.set(b))}),o(1),l()}if(s&2){const e=n.$implicit,t=u();m("is-on",t.axis()===e),i(),_(" ",e," ")}}function N(s,n){if(s&1&&(r(0,"div",11),o(1),l()),s&2){const e=n.$implicit;i(),_("Row ",e," — scrolls inside its own box")}}class f{rows=Array.from({length:14},(n,e)=>e+1);axis=F("block");axes=["block","inline","both"];code=a(()=>{const n=this.axis();return["<!-- one directive: overflow, min-*: 0, overscroll-behavior, house","     scrollbar — and it registers with the shell so an overlay freezes","     it while a modal is open. No `overflow` written by hand. -->",`<div foldScrollRegion${n==="block"?"":`="${n}"`} class="list-body">…rows…</div>`,"","<!-- stage split view: list scrolls on its own, detail flows -->",'<fold-app-shell scroll="stage">',"  <fold-aside-layout>","    <nav asideleft foldScrollRegion>…long list…</nav>","    <article>…detail…</article>","  </fold-aside-layout>","</fold-app-shell>"].join(`
`)});static ɵfac=function(e){return new(e||f)};static ɵcmp=T({type:f,selectors:[["gal-scroll-region-page"]],decls:57,vars:4,consts:[["title","scroll-region"],["titleBadge","","kind","directive"],["description",""],["lang","html",3,"code"],["params","",1,"np-field"],[1,"gal-tag"],[1,"ss-seg"],["type","button",3,"is-on"],[1,"sr-demo"],[1,"sr-region",3,"foldScrollRegion"],[1,"sr-inner"],[1,"sr-row"],[1,"sr-note"],["type","button",3,"click"]],template:function(e,t){e&1&&(r(0,"fold-page-layout",0),D(1,"gal-kind-badge",1),r(2,"p",2),o(3," The one opt-in of the shell scroll system. With "),r(4,"code"),o(5,"fold-app-shell"),l(),o(6," owning the page scroll, a layout that needs an independently-scrolling area — a split list/detail, a data-table body, a sticky sidebar — marks it with "),r(7,"code"),o(8,"[foldScrollRegion]"),l(),o(9," instead of hand-rolling "),r(10,"code"),o(11,"overflow"),l(),o(12,". It sets the three foot-guns ("),r(13,"code"),o(14,"overflow"),l(),o(15,", "),r(16,"code"),o(17,"min-*: 0"),l(),o(18,", "),r(19,"code"),o(20,"overscroll-behavior: contain"),l(),o(21,") and the thin house scrollbar, and "),r(22,"strong"),o(23,"registers with the shell"),l(),o(24," so a modal overlay freezes it too (the scroll owner is an inner box, not "),r(25,"code"),o(26,"body"),l(),o(27,"). Axis: "),r(28,"code"),o(29,"block"),l(),o(30," (default), "),r(31,"code"),o(32,"inline"),l(),o(33,", "),r(34,"code"),o(35,"both"),l(),o(36,". "),l(),r(37,"dev-playground",3)(38,"div",4)(39,"span",5),o(40,"axis"),l(),r(41,"div",6),g(42,V,2,3,"button",7,p),l()(),r(44,"div",8)(45,"div",9)(46,"div",10),g(47,N,2,1,"div",11,p),l()()()(),r(49,"div",12),o(50," The frame around it never gave the region an "),r(51,"code"),o(52,"overflow"),l(),o(53," — the directive owns that. In a "),r(54,"code"),o(55,"stage"),l(),o(56," shell, two such regions side by side make a mail-style split view where the viewport never moves. "),l()()),e&2&&(i(37),h("code",t.code()),i(5),v(t.axes),i(3),h("foldScrollRegion",t.axis()),i(),m("sr-inner--wide",t.axis()!=="block"),i(),v(t.rows))},dependencies:[A,P,d,E],styles:[`@charset "UTF-8";
/* ── [foldScrollRegion] directive demo ─────────────────────── */
.sr-demo {
  /* A fixed-height frame — the region scrolls INSIDE it; the frame itself never
     scrolls and was never given an \`overflow\`. */
  height: 240px;
  padding: 12px;
  border: 1px solid var(--fold-color-border);
  border-radius: var(--fold-radius-md);
  background: var(--fold-color-surface-sunken);
  display: flex;
}

.sr-region {
  flex: 1 1 auto;
  min-height: 0;
  border-radius: var(--fold-radius-sm);
  background: var(--fold-color-surface-raised);
  border: 1px solid var(--fold-color-border-subtle);
  /* No \`overflow\` here — [foldScrollRegion] supplies it. */
}

.sr-inner {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px;
}

/* For inline/both, force the content wider than the box so a horizontal scroll
   appears too. */
.sr-inner--wide .sr-row {
  width: 720px;
}

.sr-row {
  flex: none;
  padding: 12px 14px;
  border-radius: var(--fold-radius-sm);
  background: var(--fold-color-surface-card);
  border: 1px solid var(--fold-color-border-subtle);
  font-size: 12px;
  color: var(--fold-color-text-secondary);
}

.sr-note {
  font-size: 13px;
  line-height: 1.5;
  color: var(--fold-color-text-muted);
}`],encapsulation:2})}export{f as default};
