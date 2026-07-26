import{T as g,ad as b,x as i,a4 as x,K as h,ɵ as y,F as C,d,C as f,i as w,f as u,P as v,j as a,o as O,ae as k,B as T,I as _,q as r,D as V,m,J as p,g as F,e as M,k as P,E as z,H as L}from"./index-DPf2rFdr.js";const A=(o,t)=>t.value;function E(o,t){if(o&1&&F(0,"fold-icon",3),o&2){const n=r().$implicit;m("name",n.icon)}}function H(o,t){if(o&1&&(d(0,"span",4),M(1),u()),o&2){const n=r().$implicit;a(),P(n.label)}}function I(o,t){if(o&1){const n=T();d(0,"button",2),f("click",function(){const l=z(n).$implicit,s=r();return L(s.select(l))}),_(1,E,1,1,"fold-icon",3),_(2,H,2,1,"span",4),u()}if(o&2){const n=t.$implicit,e=r();V("is-on",e.value()===n.value)("icon-only",e.iconOnly()||!n.label),m("disabled",n.disabled||null),v("aria-checked",e.value()===n.value)("aria-label",n.ariaLabel??n.label??null)("tabindex",e.value()===n.value?0:-1)("title",e.iconOnly()?n.label??n.ariaLabel:null),a(),p(n.icon?1:-1),a(),p(n.label&&!e.iconOnly()?2:-1)}}class c{host=g(b);options=i.required();value=x.required();ariaLabel=i();size=i("md");iconOnly=i(!1,{transform:h});select(t){t.disabled||this.value.set(t.value)}onKeydown(t){const n=this.options().filter(l=>!l.disabled);if(n.length===0)return;const e=this.nextValue(t.key,n);e!==null&&(t.preventDefault(),this.value.set(e),this.focusValue(e))}nextValue(t,n){const e=Math.max(n.findIndex(l=>l.value===this.value()),0);switch(t){case"Home":return n[0]?.value??null;case"End":return n[n.length-1]?.value??null;case"ArrowRight":case"ArrowDown":return n[(e+1)%n.length]?.value??null;case"ArrowLeft":case"ArrowUp":return n[(e-1+n.length)%n.length]?.value??null;default:return null}}focusValue(t){const n=this.options().findIndex(l=>l.value===t);this.host.nativeElement.querySelectorAll("[role='radio']").item(n)?.focus()}static ɵfac=function(n){return new(n||c)};static ɵcmp=y({type:c,selectors:[["fold-view-toggle"]],hostVars:2,hostBindings:function(n,e){n&2&&k(e.size())},inputs:{options:[1,"options"],value:[1,"value"],ariaLabel:[1,"ariaLabel"],size:[1,"size"],iconOnly:[1,"iconOnly"]},outputs:{value:"valueChange"},decls:3,vars:1,consts:[["role","radiogroup",1,"vt",3,"keydown"],["type","button","role","radio",1,"vt-btn",3,"is-on","icon-only","disabled"],["type","button","role","radio",1,"vt-btn",3,"click","disabled"],["size","sm","aria-hidden","true",3,"name"],[1,"vt-label"]],template:function(n,e){n&1&&(d(0,"div",0),f("keydown",function(s){return e.onKeydown(s)}),w(1,I,3,11,"button",1,A),u()),n&2&&(v("aria-label",e.ariaLabel()),a(),O(e.options()))},dependencies:[C],styles:[`[_nghost-%COMP%] {
  display: inline-block;
}

.vt[_ngcontent-%COMP%] {
  display: inline-flex;
  gap: 2px;
  padding: 2px;
  border: 1px solid var(--fold-color-border-subtle);
  border-radius: var(--fold-radius-sm);
  background: var(--fold-color-surface-sunken);
}

.vt-btn[_ngcontent-%COMP%] {
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.3rem 0.65rem;
  border-radius: var(--fold-radius-xs);
  font-size: var(--fold-text-sm);
  color: var(--fold-color-text-muted);
  cursor: pointer;
  transition: color var(--fold-motion-fast), background var(--fold-motion-fast);
}
.vt-btn.icon-only[_ngcontent-%COMP%] {
  padding: 0.3rem 0.45rem;
}
.vt-btn[_ngcontent-%COMP%]:hover:not(:disabled) {
  color: var(--fold-color-text);
}
.vt-btn[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--fold-color-primary);
  outline-offset: 1px;
}
.vt-btn.is-on[_ngcontent-%COMP%] {
  background: var(--fold-color-surface-card);
  color: var(--fold-color-text);
  box-shadow: var(--fold-shadow-sm);
}
.vt-btn[_ngcontent-%COMP%]:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.sm[_nghost-%COMP%]   .vt-btn[_ngcontent-%COMP%] {
  padding: 0.2rem 0.5rem;
  font-size: var(--fold-text-xs);
}

@media (forced-colors: active) {
  .vt-btn.is-on[_ngcontent-%COMP%] {
    outline: 1px solid Highlight;
    color: Highlight;
  }
}`]})}export{c as FoldViewToggleComponent};
