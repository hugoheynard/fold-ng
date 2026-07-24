import{t as k,B as r,C as b,D as C,s as u,ɵ as x,c as S,d as i,g as D,e as s,f as n,i as _,y as g,h as w,j as a,m as f,o as h,n as O,l as y,E as P,G as A,z as v,x as F,H as T,I as B,q as $}from"./index-CQReWx9B.js";import{K as V}from"./kind-badge.component-B1sofT1E.js";import{D as z}from"./playground.component-DOMSqzUD.js";import{F as I}from"./slider.component-DQXTNgby.js";import"./button.component-BDGNacMK.js";import"./spinner.component-1OwcU9YF.js";import"./tokens.catalog-DF_6rd51.js";import"./element-title.component-BJbdLGww.js";import"./page-section.component-xyIc1sNl.js";import"./input-value-Co_u-z_8.js";class m{sticky=k("top");stickyOffset=k();offsetCss=r(()=>{const o=this.stickyOffset();return o===void 0?"var(--fold-sticky-column-offset, 84px)":typeof o=="number"?`${o}px`:o});topStyle=r(()=>{switch(this.sticky()){case"bottom":return"auto";case"center":return this.stickyOffset()===void 0?"50%":`calc(50% + ${this.offsetCss()})`;default:return this.offsetCss()}});bottomStyle=r(()=>this.sticky()==="bottom"?this.offsetCss():"auto");alignSelfStyle=r(()=>this.sticky()==="bottom"?"end":"start");transformStyle=r(()=>this.sticky()==="center"?"translateY(-50%)":"none");static ɵfac=function(e){return new(e||m)};static ɵdir=b({type:m,selectors:[["","foldStickyColumn",""]],hostVars:16,hostBindings:function(e,t){e&2&&C("display","flex")("flex-direction","column")("align-self",t.alignSelfStyle())("gap","var(--fold-sticky-column-gap, 14px)")("position","var(--fold-sticky-column-position, sticky)")("top",t.topStyle())("bottom",t.bottomStyle())("transform",t.transformStyle())},inputs:{sticky:[1,"sticky"],stickyOffset:[1,"stickyOffset"]}})}function L(c,o){if(c&1){const e=P();i(0,"button",15),A("click",function(){const d=T(e).$implicit,l=v();return B(l.stickyDemoAnchor.set(d))}),s(1),n()}if(c&2){const e=o.$implicit,t=v();F("is-on",t.stickyDemoAnchor()===e),a(),y(" ",e," ")}}function W(c,o){if(c&1&&(i(0,"div",12),s(1),n()),c&2){const e=o.$implicit;a(),y("Main content — row ",e)}}class p{stickyDemoRows=[1,2,3,4,5,6,7,8];stickyDemoAnchor=u("top");stickyDemoAnchors=["top","center","bottom"];stickyDemoOffset=u(8);stickyColumnCode=r(()=>{const o=this.stickyDemoAnchor(),e=this.stickyDemoOffset(),t=o==="top"?"":` sticky="${o}"`,d=e===0?"":` [stickyOffset]="${e}"`;return["<!-- layout only; keeps the <aside> semantics -->",`<aside foldStickyColumn${t}${d}>`,"  <app-history />","  <app-termination />","</aside>","","/* the page un-sticks at its own stacking breakpoint */","@media (max-width: 1040px) {","  aside[foldStickyColumn] {","    --fold-sticky-column-position: static;","  }","}"].join(`
`)});static ɵfac=function(e){return new(e||p)};static ɵcmp=x({type:p,selectors:[["gal-sticky-column-page"]],decls:35,vars:9,consts:[["title","sticky-column"],["titleBadge","","kind","directive"],["description",""],["lang","html · scss",3,"code"],["params","",1,"np-field"],[1,"gal-tag"],[1,"ss-seg"],["type","button",3,"is-on"],["params","","label","offset",3,"valueChange","min","max","step","valueText","value"],[1,"sticky-demo"],[1,"sticky-demo-grid"],[1,"sticky-demo-main"],[1,"sticky-demo-block"],["foldStickyColumn","",1,"sticky-demo-side",2,"--fold-sticky-column-gap","8px",3,"sticky","stickyOffset"],[1,"sticky-demo-card"],["type","button",3,"click"]],template:function(e,t){e&1&&(i(0,"fold-page-layout",0),D(1,"gal-kind-badge",1),i(2,"p",2),s(3," Layout directive — turns its host into a sticky side column (a vertical flex stack that stays put while the main content scrolls past). Put it on an "),i(4,"code"),s(5,"<aside>"),n(),s(6," to keep the semantics. No template, no wrapper. The anchor ("),i(7,"code"),s(8,'sticky="top | center | bottom"'),n(),s(9,") and offset ("),i(10,"code"),s(11,"[stickyOffset]"),n(),s(12,") are inputs; the gap and the responsive un-stick stay CSS vars — "),i(13,"code"),s(14,"--fold-sticky-column-gap"),n(),s(15," and "),i(16,"code"),s(17,"--fold-sticky-column-position"),n(),s(18,". "),n(),i(19,"dev-playground",3)(20,"div",4)(21,"span",5),s(22,"sticky"),n(),i(23,"div",6),_(24,L,2,3,"button",7,g),n()(),i(26,"fold-slider",8),w("valueChange",function(l){return $(t.stickyDemoOffset,l)||(t.stickyDemoOffset=l),l}),n(),i(27,"div",9)(28,"div",10)(29,"div",11),_(30,W,2,1,"div",12,g),n(),i(32,"aside",13)(33,"div",14),s(34),n()()()()()()),e&2&&(a(19),f("code",t.stickyColumnCode()),a(5),h(t.stickyDemoAnchors),a(2),f("min",0)("max",48)("step",2)("valueText",t.stickyDemoOffset()+"px"),O("value",t.stickyDemoOffset),a(4),h(t.stickyDemoRows),a(2),f("sticky",t.stickyDemoAnchor())("stickyOffset",t.stickyDemoOffset()),a(2),y("📌 sticks ",t.stickyDemoAnchor()))},dependencies:[V,S,I,m,z],styles:[`@charset "UTF-8";
/* ── [foldStickyColumn] directive demo ─────────────────────── */
.sticky-demo {
  height: 220px;
  overflow-y: auto;
  padding: 10px;
  border: 1px solid var(--fold-color-border);
  border-radius: var(--fold-radius-md);
  background: var(--fold-color-surface-sunken);
}

.sticky-demo-grid {
  display: grid;
  grid-template-columns: 1fr 150px;
  gap: 10px;
  align-items: start;
}

.sticky-demo-main {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.sticky-demo-block {
  padding: 16px 12px;
  border-radius: var(--fold-radius-sm);
  background: var(--fold-color-surface-raised);
  border: 1px solid var(--fold-color-border-subtle);
  font-size: 12px;
  color: var(--fold-color-text-secondary);
}

.sticky-demo-card {
  padding: 12px;
  border-radius: var(--fold-radius-sm);
  background: var(--fold-color-primary-surface);
  border: 1px solid var(--fold-color-primary-border);
  color: var(--fold-color-primary-text);
  font-size: 12px;
  font-weight: 600;
  text-align: center;
}`],encapsulation:2})}export{p as default};
