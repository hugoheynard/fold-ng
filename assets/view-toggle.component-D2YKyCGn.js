import{a2 as g,a1 as b,u as a,ai as h,X as x,A as y,ɵ as C,F as w,d,B as v,i as O,f as u,D as f,j as i,o as k,ak as M,E as V,w as _,q as r,L as P,m,x as p,g as F,e as T,k as L,M as z,N as A}from"./index-CQebbVEP.js";const S=(o,t)=>t.value;function E(o,t){if(o&1&&F(0,"fold-icon",3),o&2){const n=r().$implicit;m("name",n.icon)}}function $(o,t){if(o&1&&(d(0,"span",4),T(1),u()),o&2){const n=r().$implicit;i(),L(n.label)}}function q(o,t){if(o&1){const n=V();d(0,"button",2),v("click",function(){const l=z(n).$implicit,s=r();return A(s.select(l))}),_(1,E,1,1,"fold-icon",3),_(2,$,2,1,"span",4),u()}if(o&2){const n=t.$implicit,e=r();P("is-on",e.value()===n.value)("icon-only",e.iconOnly()||!n.label),m("disabled",n.disabled||null),f("aria-checked",e.value()===n.value)("aria-label",n.ariaLabel??n.label??null)("tabindex",e.rovingValue()===n.value?0:-1)("title",e.iconOnly()?n.label??n.ariaLabel:null),i(),p(n.icon?1:-1),i(),p(n.label&&!e.iconOnly()?2:-1)}}class c{host=g(b);options=a.required();value=h.required();ariaLabel=a();size=a("md");activeStyle=a("raised");iconOnly=a(!1,{transform:x});constructor(){}rovingValue=y(()=>{const t=this.options(),n=t.find(e=>e.value===this.value());return n&&!n.disabled?n.value:t.find(e=>!e.disabled)?.value??null});select(t){t.disabled||this.value.set(t.value)}onKeydown(t){const n=this.options().filter(l=>!l.disabled);if(n.length===0)return;const e=this.nextValue(t.key,n);e!==null&&(t.preventDefault(),this.value.set(e),this.focusValue(e))}nextValue(t,n){const e=Math.max(n.findIndex(l=>l.value===this.value()),0);switch(t){case"Home":return n[0]?.value??null;case"End":return n[n.length-1]?.value??null;case"ArrowRight":case"ArrowDown":return n[(e+1)%n.length]?.value??null;case"ArrowLeft":case"ArrowUp":return n[(e-1+n.length)%n.length]?.value??null;default:return null}}focusValue(t){const n=this.options().findIndex(l=>l.value===t);this.host.nativeElement.querySelectorAll("[role='radio']").item(n)?.focus()}static ɵfac=function(n){return new(n||c)};static ɵcmp=C({type:c,selectors:[["fold-view-toggle"]],hostVars:2,hostBindings:function(n,e){n&2&&M(e.size()+" a-"+e.activeStyle())},inputs:{options:[1,"options"],value:[1,"value"],ariaLabel:[1,"ariaLabel"],size:[1,"size"],activeStyle:[1,"activeStyle"],iconOnly:[1,"iconOnly"]},outputs:{value:"valueChange"},decls:3,vars:1,consts:[["role","radiogroup",1,"vt",3,"keydown"],["type","button","role","radio",1,"vt-btn",3,"is-on","icon-only","disabled"],["type","button","role","radio",1,"vt-btn",3,"click","disabled"],["size","sm","aria-hidden","true",3,"name"],[1,"vt-label"]],template:function(n,e){n&1&&(d(0,"div",0),v("keydown",function(s){return e.onKeydown(s)}),O(1,q,3,11,"button",1,S),u()),n&2&&(f("aria-label",e.ariaLabel()),i(),k(e.options()))},dependencies:[w],styles:[`[_nghost-%COMP%] {
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

.a-accent[_nghost-%COMP%]   .vt-btn.is-on[_ngcontent-%COMP%] {
  background: var(--fold-color-primary-surface);
  color: var(--fold-color-primary-text);
  box-shadow: none;
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
}
@media (prefers-reduced-motion: reduce) {
  .vt-btn[_ngcontent-%COMP%] {
    transition: none;
  }
}`]})}export{c as FoldViewToggleComponent};
