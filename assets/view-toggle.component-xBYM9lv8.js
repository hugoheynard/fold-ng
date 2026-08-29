import{X as C,Y as h,u as l,af as O,a0 as M,A as P,ɵ as x,F as w,d as _,B as v,i as y,f as g,D as f,j as i,o as k,ai as b,E as V,w as c,q as r,L as F,m as p,x as d,g as m,e as T,k as L,N as z,O as A}from"./index-BqoA3odo.js";const $=(a,o)=>o.value;function S(a,o){a&1&&m(0,"span",6),a&2&&b(o)}function E(a,o){if(a&1&&m(0,"fold-icon",4),a&2){const n=r().$implicit;p("name",n.icon)}}function q(a,o){if(a&1&&(_(0,"span",5),T(1),g()),a&2){const n=r().$implicit;i(),L(n.label)}}function H(a,o){if(a&1){const n=V();_(0,"button",2),v("click",function(){const e=z(n).$implicit,s=r();return A(s.select(e))}),c(1,S,1,2,"span",3),c(2,E,1,1,"fold-icon",4),c(3,q,2,1,"span",5),g()}if(a&2){let n;const t=o.$implicit,e=r();F("is-on",e.value()===t.value)("icon-only",e.iconOnly()||!t.label),p("disabled",t.disabled||null),f("aria-checked",e.value()===t.value)("aria-label",e.segmentName(t))("tabindex",e.rovingValue()===t.value?0:-1)("title",e.iconOnly()?t.label??t.ariaLabel:null),i(),d((n=t.dot)?1:-1,n),i(),d(t.icon?2:-1),i(),d(t.label&&!e.iconOnly()?3:-1)}}class u{host=C(h);options=l.required();value=O.required();ariaLabel=l();size=l("md");activeStyle=l("solid");iconOnly=l(!1,{transform:M});constructor(){}rovingValue=P(()=>{const o=this.options(),n=o.find(t=>t.value===this.value());return n&&!n.disabled?n.value:o.find(t=>!t.disabled)?.value??null});select(o){o.disabled||this.value.set(o.value)}onKeydown(o){const n=this.options().filter(e=>!e.disabled);if(n.length===0)return;const t=this.nextValue(o.key,n);t!==null&&(o.preventDefault(),this.value.set(t),this.focusValue(t))}nextValue(o,n){const t=Math.max(n.findIndex(e=>e.value===this.value()),0);switch(o){case"Home":return n[0]?.value??null;case"End":return n[n.length-1]?.value??null;case"ArrowRight":case"ArrowDown":return n[(t+1)%n.length]?.value??null;case"ArrowLeft":case"ArrowUp":return n[(t-1+n.length)%n.length]?.value??null;default:return null}}focusValue(o){const n=this.options().findIndex(e=>e.value===o);this.host.nativeElement.querySelectorAll("[role='radio']").item(n)?.focus()}segmentName(o){const n=o.ariaLabel??o.label??null;return o.dotLabel===void 0?n:n===null?o.dotLabel:`${n} — ${o.dotLabel}`}static ɵfac=function(n){return new(n||u)};static ɵcmp=x({type:u,selectors:[["fold-view-toggle"]],hostVars:2,hostBindings:function(n,t){n&2&&b(t.size()+" a-"+t.activeStyle())},inputs:{options:[1,"options"],value:[1,"value"],ariaLabel:[1,"ariaLabel"],size:[1,"size"],activeStyle:[1,"activeStyle"],iconOnly:[1,"iconOnly"]},outputs:{value:"valueChange"},decls:3,vars:1,consts:[["role","radiogroup",1,"vt",3,"keydown"],["type","button","role","radio",1,"vt-btn",3,"is-on","icon-only","disabled"],["type","button","role","radio",1,"vt-btn",3,"click","disabled"],["aria-hidden","true",1,"vt-dot",3,"class"],["size","sm","aria-hidden","true",3,"name"],[1,"vt-label"],["aria-hidden","true",1,"vt-dot"]],template:function(n,t){n&1&&(_(0,"div",0),v("keydown",function(s){return t.onKeydown(s)}),y(1,H,4,12,"button",1,$),g()),n&2&&(f("aria-label",t.ariaLabel()),i(),k(t.options()))},dependencies:[w],styles:[`@charset "UTF-8";
[_nghost-%COMP%] {
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



.a-solid[_nghost-%COMP%]   .vt-btn.is-on[_ngcontent-%COMP%] {
  background: var(--fold-color-primary);
  color: var(--fold-color-on-primary);
  box-shadow: none;
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
}



.vt-dot[_ngcontent-%COMP%] {
  flex: none;
  width: 0.45em;
  height: 0.45em;
  border-radius: var(--fold-radius-round);
  background: var(--fold-color-text-faded);
}

.vt-dot.warning[_ngcontent-%COMP%] {
  background: var(--fold-color-warning);
}

.vt-dot.alert[_ngcontent-%COMP%] {
  background: var(--fold-color-alert);
}

.vt-dot.success[_ngcontent-%COMP%] {
  background: var(--fold-color-success);
}



.vt-btn.is-on[_ngcontent-%COMP%]   .vt-dot[_ngcontent-%COMP%] {
  background: currentColor;
}




.a-solid[_nghost-%COMP%]   .vt-btn.is-on[_ngcontent-%COMP%]   .vt-dot[_ngcontent-%COMP%], 
.a-solid[_nghost-%COMP%]   .vt-btn.is-on[_ngcontent-%COMP%]   .vt-dot.warning[_ngcontent-%COMP%], 
.a-solid[_nghost-%COMP%]   .vt-btn.is-on[_ngcontent-%COMP%]   .vt-dot.alert[_ngcontent-%COMP%], 
.a-solid[_nghost-%COMP%]   .vt-btn.is-on[_ngcontent-%COMP%]   .vt-dot.success[_ngcontent-%COMP%] {
  background: currentColor;
}

.vt-btn.is-on[_ngcontent-%COMP%]   .vt-dot.warning[_ngcontent-%COMP%] {
  background: var(--fold-color-warning);
}

.vt-btn.is-on[_ngcontent-%COMP%]   .vt-dot.alert[_ngcontent-%COMP%] {
  background: var(--fold-color-alert);
}

.vt-btn.is-on[_ngcontent-%COMP%]   .vt-dot.success[_ngcontent-%COMP%] {
  background: var(--fold-color-success);
}`]})}export{u as FoldViewToggleComponent};
